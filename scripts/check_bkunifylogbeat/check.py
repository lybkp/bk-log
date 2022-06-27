#!/usr/bin/env python
# -*- coding: utf-8 -*-

from __future__ import unicode_literals

import os
import subprocess
import sys
from optparse import OptionParser
import datetime
import platform
import json

MODULE_BKUNIFYLOGBEAT = "bkunifylogbeat"
MODULE_GSEAGENT = "gse_agent"

STEP_CHECK_BKUNIFYLOGBEAT_BIN_FILE = "check_%s_bin_file" % MODULE_BKUNIFYLOGBEAT
STEP_CHECK_BKUNIFYLOGBEAT_PROCESS = "check_%s_process" % MODULE_BKUNIFYLOGBEAT
STEP_CHECK_BKUNIFYLOGBEAT_CONFIG = "check_%s_config" % MODULE_BKUNIFYLOGBEAT
STEP_CHECK_BKUNIFYLOGBEAT_HOSTED = "check_%s_hosted" % MODULE_BKUNIFYLOGBEAT
STEP_CHECK_BKUNIFYLOGBEAT_HEALTHZ = "check_%s_healthz" % MODULE_BKUNIFYLOGBEAT

STEP_CHECK_GSEAGENT_PROCESS = "check_%s_process" % MODULE_GSEAGENT
STEP_CHECK_GSEAGENT_SOCKET = "check_%s_socket" % MODULE_GSEAGENT

subscription_id = 0
socket_between_gse_agent_and_beat = "/var/run/ipc.state.report"
collector_home_path = "/usr/local/gse/plugins/"
collector_bin_path = os.path.join(collector_home_path, "bin", MODULE_BKUNIFYLOGBEAT)
collector_etc_path = os.path.join(collector_home_path, "etc", MODULE_BKUNIFYLOGBEAT)
config_name_suffix = "%s_sub_" % MODULE_BKUNIFYLOGBEAT
procinfo_file_path = "/usr/local/gse/agent/etc/procinfo.json"


def convert_to_str(t):
    if platform.python_version()[0] == "3":
        if isinstance(t, bytes):
            return t.decode("utf-8")
    return t


def get_command(cmd):
    ps = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    output = ps.stdout.read()
    ps.stdout.close()
    ps.wait()
    return convert_to_str(output).strip()


class Result(object):
    def __init__(self, module, item, status=False, data=None, message=""):
        self.module = module
        self.item = item
        self.status = status
        self.data = data
        self.message = message

    def print_json(self):
        d = {
            "module": self.module,
            "item": self.item,
            "status": self.status,
            "data": self.data,
            "message": self.message,
        }
        print(json.dumps(d))


class BKUnifyLogBeatCheck(object):
    def __init__(self):
        self.subscription_id = subscription_id

    @staticmethod
    def check_bin_file():
        result = Result(MODULE_BKUNIFYLOGBEAT, STEP_CHECK_BKUNIFYLOGBEAT_BIN_FILE)
        if not os.path.exists(collector_bin_path):
            result.message = "%s is not exist" % MODULE_BKUNIFYLOGBEAT
            result.print_json()
        result.status = True
        result.print_json()

    @staticmethod
    def check_process():
        result = Result(MODULE_BKUNIFYLOGBEAT, STEP_CHECK_BKUNIFYLOGBEAT_PROCESS)
        output = get_command("ps -ef | grep bkunifylogbeat | awk '{print $2}' | xargs pwdx")
        if collector_home_path not in str(output):
            result.message = "bkunifylogbeat is not running"
            result.print_json()

        pid_to_dir = [line.split(":") for line in output.split("\n") if line.strip()]
        pid = pid_to_dir[0][0]
        for pid_dir in pid_to_dir:
            pid, bin_dir = pid_dir
            if bin_dir.strip().startswith(collector_home_path):
                break

        # 是否频繁重启
        restart_times = 10
        restart_records_file = "/tmp/bkc.log"
        today = datetime.datetime.now().strftime("%Y%m%d")
        output = get_command("grep {} {} | wc -l".format(today, restart_records_file))
        if not output or int(output) > restart_times:
            result.message = "restart/reload times is over %d" % restart_times
            result.print_json()

        # 当前资源
        cpu_usage = get_command("ps aux | grep %s | awk '{print $3}' | head -n 1" % pid)
        mem_usage = get_command("ps aux | grep %s | awk '{print $4}' | head -n 1" % pid)
        result.data = {"cpu_usage": "%s%%" % (str(cpu_usage)), "mem_usage": "%s%%" % (str(mem_usage))}
        result.status = True
        result.print_json()

    @staticmethod
    def check_config():
        result = Result(MODULE_BKUNIFYLOGBEAT, STEP_CHECK_BKUNIFYLOGBEAT_CONFIG)
        real_config_name = ""
        g = os.walk(collector_etc_path)
        for path, dir_list, file_list in g:
            for file_name in file_list:
                config_name_suffix_with_subscription_id = "%s%d" % (config_name_suffix, subscription_id)
                if config_name_suffix_with_subscription_id in file_name:
                    real_config_name = file_name
                    result.message = "real_config_name: %s" % real_config_name
                    break
        if not real_config_name:
            result.message = "config_file is not exist"
            result.print_json()

        result.status = True
        result.print_json()

    @staticmethod
    def check_gseagent_hosted():
        result = Result(MODULE_BKUNIFYLOGBEAT, STEP_CHECK_BKUNIFYLOGBEAT_HEALTHZ)
        output = get_command("cat {} | grep {}".format(procinfo_file_path, MODULE_BKUNIFYLOGBEAT))
        if MODULE_BKUNIFYLOGBEAT not in str(output):
            result.message = "{} is not hosted by {}".format(MODULE_BKUNIFYLOGBEAT, MODULE_GSEAGENT)
            result.print_json()

        result.message = "{} is hosted by {}".format(MODULE_BKUNIFYLOGBEAT, MODULE_GSEAGENT)
        result.status = True
        result.print_json()

    @staticmethod
    def check_collector_healthz():
        result = Result(MODULE_BKUNIFYLOGBEAT, STEP_CHECK_BKUNIFYLOGBEAT_HEALTHZ)
        result.message = get_command("%s healthz" % collector_bin_path)
        result.status = True
        result.print_json()


class GseAgentCheck(object):
    @staticmethod
    def check_process():
        result = Result(MODULE_GSEAGENT, STEP_CHECK_GSEAGENT_PROCESS)
        output = get_command("netstat -antulp | grep %s | grep LISTEN | awk '{print $7}'" % MODULE_GSEAGENT)
        if MODULE_GSEAGENT not in str(output):
            result.message = "%s is not running" % MODULE_GSEAGENT
            result.print_json()
            return
        result.status = True
        result.message = "%s is running" % MODULE_GSEAGENT
        result.data = {"pid": ",".join(line.split("/")[0] for line in output.split("\n") if line)}
        result.print_json()

    @staticmethod
    def check_socket_between_gse_agent_and_beat():
        result = Result(MODULE_GSEAGENT, STEP_CHECK_GSEAGENT_SOCKET)
        if not os.path.exists(socket_between_gse_agent_and_beat):
            result.message = "%s is not exist" % socket_between_gse_agent_and_beat
            result.print_json()
            return
        result.message = "%s is exist" % socket_between_gse_agent_and_beat
        result.status = True
        result.print_json()


def _get_opt_parser():
    """get option parser"""
    opt_parser = OptionParser()

    opt_parser.add_option(
        "-p", "--path", action="store", type="string", dest="path", help="""collector_home_path""", default=""
    )

    opt_parser.add_option(
        "-s",
        "--subscription_id",
        action="store",
        type="int",
        dest="subscription_id",
        help="""subscription_id""",
        default=subscription_id,
    )

    opt_parser.add_option(
        "-i",
        "--ipc_socket_file",
        action="store",
        type="string",
        dest="ipc_socket_file",
        help="""ipc_socket_file""",
        default=socket_between_gse_agent_and_beat,
    )

    return opt_parser


def arg_parse():
    global collector_home_path
    global subscription_id
    global socket_between_gse_agent_and_beat

    parser = _get_opt_parser()
    (options, args) = parser.parse_args(sys.argv)

    if options.path:
        collector_home_path = options.path
    if options.subscription_id:
        subscription_id = options.subscription_id
    if options.ipc_socket_file:
        socket_between_gse_agent_and_beat = options.ipc_socket_file


def main():
    arg_parse()

    bkunifylogbeat_checker = BKUnifyLogBeatCheck()
    bkunifylogbeat_checker.check_bin_file()
    bkunifylogbeat_checker.check_process()
    bkunifylogbeat_checker.check_config()
    bkunifylogbeat_checker.check_gseagent_hosted()
    bkunifylogbeat_checker.check_collector_healthz()

    gse_agent_checker = GseAgentCheck()
    gse_agent_checker.check_process()
    gse_agent_checker.check_socket_between_gse_agent_and_beat()


if __name__ == "__main__":
    main()
