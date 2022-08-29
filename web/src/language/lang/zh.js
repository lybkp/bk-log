/*
 * Tencent is pleased to support the open source community by making BK-LOG 蓝鲸日志平台 available.
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 * BK-LOG 蓝鲸日志平台 is licensed under the MIT License.
 *
 * License for BK-LOG 蓝鲸日志平台:
 * --------------------------------------------------------------------
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
 * NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
 */

/**
 * 中文语言包
 */
export default {
  common: {
    yes: '是',
    no: '否',
    configSuccessfully: '设置成功',
    createdSuccessfully: '创建成功',
  },
  field: {
    configDisplayAndSort: '设置显示与排序',
    displayFieldsHaveSelected: '显示字段（已选 ',
    otherFields: '其他字段',
  },
  btn: {
    select: '请选择',
    search: '搜索',
    save: '保存',
    add: '添加',
    affirm: '确定',
    confirm: '确定',
    cancel: '取消',
    newBtn: '新建',
    edit: '编辑',
    delete: '删除',
    vacancy: '暂无内容',
    close: '关闭',
    export: '导出',
    backToTop: '返回顶部',
    filter: '过滤',
    clearScreen: '清屏',
    submit: '提交',
    searchname: '请搜索名称',
    copy: '复制',
    Field: '字段提取',
    block: '停用',
    start: '启用',
    timeFormatTips: '开启后将表格内的 UNIX 时间戳格式化为可读时间',
    reset: '重置',
  },
  form: {
    pleaseEnter: '请输入',
    alarmType: '请选择告警类型',
    enterCharacters_255: '请输入255个字符以内',
    noMoreThan_50: '不能多于50个字符',
    must: '必填项',
    collectSearch: '搜索ES源名称，地址，创建人',
    pleaseEnterQQ: '请输入QQ并按Enter结束（可多次添加）',
    target: '采集目标不能为空',
    No_characters: '不能少于5个字符',
    Only_entered: '只能输入英文、数字或者下划线',
    searchAll: '搜索ES源名称，地址，创建人',
  },
  // 检索页
  日志检索: '日志检索',
  指标检索: '指标检索',
  事件检索: '事件检索',
  数据查询: '数据查询',
  是否开启自动查询: '是否开启自动查询',
  知道了: '知道了',
  已收藏查询: '已收藏查询',
  索引集: '索引集',
  查询语句: '查询语句',
  可输入SQL语句进行快速查询: '可输入SQL语句进行快速查询',
  查看语法: '查看语法',
  精确匹配: '精确匹配(支持AND、OR)：',
  字段名匹配: '字段名匹配(*代表通配符)：',
  字段名模糊匹配: '字段名模糊匹配：',
  通配符匹配: '通配符匹配：',
  正则匹配: '正则匹配：',
  范围匹配: '范围匹配：',
  过滤条件: '过滤条件',
  个模块: '个模块',
  个IP: '个IP',
  查询: '查询',
  保存查询: '保存查询',
  清空: '清空',
  查询历史: '查询历史',
  没有找到该记录下相关索引集: '没有找到该记录下相关索引集',
  关闭: '关闭',
  请输入完整的过滤条件: '请输入完整的过滤条件',
  添加条件: '添加条件',
  添加IP: '添加IP',
  '收藏描述：': '收藏描述：',
  '保存成功，可前往查询历史查看': '保存成功，可前往查询历史查看',
  点击重新展开: '点击重新展开',
  请输入内容: '请输入内容',
  查看调用链: '查看调用链',
  检索: '检索',
  复制: '复制',
  暂无数据: '暂无数据',
  总趋势: '总趋势',
  // 日志提取
  日志提取: '日志提取',
  日志提取任务: '日志提取任务',
  创建: '创建',
  新建: '新建',
  新增: '新增',
  下载: '下载',
  下载目标: '下载目标',
  重新下载: '重新下载',
  文件: '文件',
  文件名: '文件名',
  文件列表: '文件列表',
  文件路径: '文件路径',
  步骤: '步骤',
  开始时间: '开始时间',
  耗时: '耗时(秒)',
  执行情况: '执行情况',
  文件日期: '文件日期',
  创建时间: '创建时间',
  创建人: '创建人',
  任务状态: '任务状态',
  操作: '操作',
  详情: '详情',
  输入关键字搜索: '输入关键字搜索',
  暂无选项: '暂无选项',
  选择服务器: '选择服务器',
  已选择: '已选择',
  个节点: '个节点',
  目录或文件名: '目录或文件名',
  选择离你最近的提取链路: '选择离你最近的提取链路',
  查询目录提示: '以"/"结尾查询指定目录下内容，否则默认查询该目录及其子目录下所有文件',
  预览地址: '预览地址',
  文本过滤: '文本过滤',
  提交下载任务: '提交下载任务',
  确认: '确认',
  取消: '取消',
  复制IP: '复制IP',
  清空IP: '清空IP',
  复制成功: '复制成功',
  共: '共',
  台: '台',
  成功: '成功',
  正常: '正常',
  失败: '失败',
  Agent未安装: 'Agent未安装',
  是否搜索子目录: '是否搜索子目录',
  搜索: '搜索',
  从下载目标中选择预览目标: '从下载目标中(只展示最近的500条匹配文件)选择预览目标，用于查找服务器文件，最终执行仍以下载目标为准',
  最后修改时间: '最后修改时间',
  近一天: '近一天',
  近一周: '近一周',
  近一月: '近一月',
  所有: '所有',
  多个关键字用英文逗号: '多个关键字用英文逗号 , 隔开',
  关键字过滤: '关键字过滤',
  关键字范围: '关键字范围',
  最新行数: '最新行数',
  按行过滤: '按行过滤',
  从匹配: '从匹配',
  开始到匹配: '开始到匹配',
  之间的所有行: '之间的所有行',
  请输入整数: '请输入整数',
  从第: '从第',
  行到第: '行到第',
  行: '行',
  用户组: '名称',
  授权: '授权',
  授权目标: '授权目标',
  文件目录: '文件目录',
  文件后缀: '文件后缀',
  文件后缀提示: '文件后缀不能以 . 开头',
  编辑: '编辑',
  删除: '删除',
  确定要删除: '确定要删除',
  删除成功: '删除成功',
  创建成功: '创建成功',
  创建失败: '创建失败',
  修改成功: '修改成功',
  不同类别的授权用户: '不同类别的授权用户，通过用户组名区分，单业务下唯一',
  用户列表: '用户列表',
  授权目录: '授权目录',
  授权目录提示: '目录以 / 结尾，windows 服务器以 /cygdrive/ 开头',
  选择目标: '选择目标',
  按大区选择: '按大区选择',
  按模块选择: '按模块选择',
  全选: '全选',
  执行人: '执行人',
  执行人提示: '全局设置，下载过程中需使用job传输，将以执行人身份进行，请确保执行人拥有业务权限',
  改为我: '改为我',
  克隆: '克隆',
  或: '或',
  与: '与',
  非: '非',
  关键字匹配模式: '关键字匹配模式',
  备注: '备注',
  '搜索文件名、创建人，按 enter 键搜索': '搜索文件名、创建人，按 enter 键搜索',
  下载链接: '下载链接',
  点击获取: '点击获取',
  已复制到剪切板: '已复制到剪切板',
  '链接可重复获取，每个链接只能下载一次。': '链接可重复获取，每个链接只能下载一次。',
  问题反馈: '问题反馈',
  链路配置: '链路配置',
  上报链路配置: '上报链路配置',
  上报链路: '上报链路',
  新建链路配置: '新建链路配置',
  编辑链路配置: '编辑链路配置',
  链路名称: '链路名称',
  允许的空间: '允许的空间',
  链路信息: '链路信息',
  是否启用: '是否启用',
  ES集群: 'ES集群',
  必填项: '必填项',
  全部空间: '全部空间',
  是: '是',
  否: '否',
  支持: '支持',
  不支持: '不支持',
  字段过滤: '字段过滤',
  可聚合: '可聚合',
  不限: '不限',
  字段类型: '字段类型',
  字段类型过滤: '字段类型过滤',
  搜索字段名: '搜索字段名',
  已添加字段: '已添加字段',
  可选字段: '可选字段',
  显示别名: '显示别名',
  隐藏: '隐藏',
  显示: '显示',
  '条记录中数量排名前 5 的数据值': ' 条记录中数量排名前 5 的数据值',
  数字: '数字',
  字符串: '字符串',
  文本: '文本',
  时间: '时间',
  布尔: '布尔',
  冲突字段: '冲突字段',
  确定: '确定',
  提取链路: '提取链路',
  新建提取链路: '新建提取链路',
  链路类型: '链路类型',
  执行bk_biz_id: '执行bk_biz_id',
  腾讯云SecretId: '腾讯云SecretId',
  腾讯云SecretKey: '腾讯云SecretKey',
  腾讯云Cos桶名称: '腾讯云Cos桶名称',
  腾讯云Cos区域: '腾讯云Cos区域',
  链路中转机: '链路中转机',
  中转机: '中转机',
  挂载目录: '挂载目录',
  主机云区域ID: '主机云区域ID',
  主机IP: '主机IP',
  添加链路中转机: '添加链路中转机',
  内网链路: '内网链路',
  腾讯云链路: '腾讯云链路',
  接入前请查看: '接入前请查看',
  接入指引: '接入指引',
  '，尤其是在日志量大的情况下请务必提前沟通。': '，尤其是在日志量大的情况下请务必提前沟通。',
  筛选包含: '筛选包含',
  的结果: '的结果',
  等于: '等于',
  某一值: '某一值',
  存在: '存在',
  任意形式: '任意形式',
  需要: '需要',
  两个参数都: '两个参数都',
  为真: '为真',
  一个或多个参数: '一个或多个参数',
  收藏: '收藏',
  未收藏: '未收藏',
  历史记录: '历史记录',
  表格: '表格',
  原始: '原始',
  换行: '换行',
  展开全部: '展开全部',
  收起: '收起',
  过滤项: '过滤项',
  空: '空',
  // 检索设置弹窗
  retrieveSetting: {
    setting: '设置',
    fullTextIndex: '全文索引',
    fieldExtraction: '字段提取',
    logCluster: '日志聚类',
    containsChinese: '包含中文',
    wordBreaker: '分词符',
    reset: '恢复默认',
    moreDetails: '更多详情',
    clusterField: '聚类字段',
    ignoreNumbers: '忽略数字',
    ignoreCharacters: '忽略字符',
    dataFingerprint: '数据指纹',
    fieldLength: '最大字段长度',
    byte: '字节',
    filtrationRule: '过滤规则',
    clusterRule: '聚类规则',
    effect: '效果',
    restoreDefault: '还原默认',
    regularExpression: '正则表达式',
    placeholder: '占位符',
    operate: '操作',
    addRule: '添加规则',
    editingRules: '编辑规则',
    sample: '样例',
    iSee: '我知道了',
    testSyntax: '检测语法',
    inspection: '检验中',
    inspectionSuccess: '检验成功',
    inspectionFail: '检测失败',
    ruleEmpty: '暂无聚类规则',
    saveToTakeEffect: '保存待生效',
    fieldLeaveTip: '是否关闭字段提取？',
    clusterLeaveTip: '是否关闭日志聚类？',
    saveEffectMessage: '该保存需要1小时生效,请耐心等待',
    extractionPrompt: '将过滤后的日志采集上来后，日志检索模块可进行日志内容格式化，方便检索和分析。',
    ruleDeleteTips: '是否删除该条规则？',
    changeSwitchTips: '是否禁用该模块？',
    notCollector: '当前索引集为非采集项,无法设置数据指纹',
    closeFinger: '是否关闭数据指纹',
    debuggerAlert: '调试需要等待1分钟以上，在此区间不可进行其余操作',
    debuggingTool: '调试工具',
    fieldTips: '只能基于一个字段进行聚类，并且字段是为text的分词类型，默认为log字段',
    ignoreNumbersTips: '前端忽略所有的数字',
    ignoreCharactersTips: '前端忽略数字和所有的常见符号，只保留日志具体内容',
    dataFingerprintTips: '通过AI学习能力，提取日志的数据指纹实现日志聚类，注意训练时间越久效果越好，存储将增加10%',
    fieldLengthTips: '聚类字段的最大长度，如果超过这个长度将直接丢弃，设置越大将消耗更多的资源',
  },
  // logCluster
  忽略数字: '忽略数字',
  忽略符号: '忽略符号',
  数据指纹: '数据指纹',
  同比: '同比',
  近24H新增: '近24H新增',
  数量: '数量',
  同比数量: '同比数量',
  同比变化: '同比变化',
  告警: '告警',
  标签: '标签',
  少: '少',
  多: '多',
  取样内容: '取样内容',
  去设置: '去设置',
  未匹配: '未匹配',
  跳转到日志清洗: '跳转到日志清洗',
  请按照提示输入: '请按照提示输入',
  自定义: '自定义',
  分组: '分组',
  批量使用告警: '批量使用告警',
  批量停用告警: '批量停用告警',
  是否关闭该告警: '是否关闭该告警',
  是否批量开启告警: '是否批量开启告警',
  是否批量关闭告警: '是否批量关闭告警',
  是否开启该告警: '是否开启该告警',
  操作成功: '操作成功',
  部分操作成功: '部分操作成功',
  可去告警策略编辑: '可去告警策略编辑',
  已全部开启告警: '已全部开启告警',
  已全部关闭告警: '已全部关闭告警',
  返回顶部: '返回顶部',
  关闭告警: '关闭告警',
  开启告警: '开启告警',
  编辑告警: '编辑告警',
  计算平台: '计算平台',
  fingerTips: '暂时未开放聚类关闭功能，如有关闭需求，可联系平台管理员',
  allLoadTips: '已加载完全部数据，如需查看更多查询条件可以',
  customizeTips: '自定义输入格式: 如 1h 代表一小时 h小时',
  clusterAlert: '日志聚类必需至少有一个text类型的字段，当前无该字段类型，请前往日志清洗进行设置。',
  goFingerMessage: '当前数据指纹未启用，请前往设置',
  goSettingMessage: '当前日志聚类未启用，请前往设置',
  goCleanMessage: '当前无可用字段，请前往日志清洗进行设置',
  noConfigIDMessage: '当前索引集不支持字段提取设置',
  canNotFieldMessage1: '无分词字段 请前往',
  canNotFieldMessage2: '调整清洗',
  patternInteract: '查询命中pattern的日志',
  fingerChoose: '当前已选择',
  fingerTotalData: '共有',
  fingerSizeData: '条数据',
  nav: {
    logRetrieve: '日志检索',
    retrieve: '检索',
    dashboard: '仪表盘',
    extract: '日志提取',
    extractManage: '日志提取配置',
    monitors: '监控策略',
    alarmStrategy: '告警策略',
    addstrategy: '新建告警策略',
    editstrategy: '编辑告警策略',
    alarmLog: '告警记录',
    shieldStrategy: '屏蔽策略',
    manage: '管理',
    indexSet: '索引集管理',
    addIndexSet: '新建索引集',
    addIndexTips1: '日志数据已进入数据平台或ES',
    addIndexTips2: '关联已入库的数据',
    editIndexSet: '编辑索引集',
    dataSource: '数据接入',
    collectAccess: '采集接入',
    addCollectAccess: '新建采集接入',
    addCollectTips1: '日志数据还在服务器上',
    addCollectTips2: '需要采集日志，请先创建采集任务',
    esAccess: 'ES源接入',
    permissionGroup: '用户组配置',
    v3Migrate: 'v3迁移',
    notIndex: '当前业务无数据可检索',
    notIndexAuth: '请联系业务运维配索引集',
    versionLog: '版本日志',
    docCenter: '文档中心',
    New_acquisition: '新增采集',
    Edit_collection: '编辑采集项',
    Enable_collections: '启用采集项',
    Disable_collection: '停用采集项',
    Field_extraction: '字段提取',
    Configuration_details: '配置详情',
    Data_sampling: '数据采样',
    language: '语言',
  },
  数据接入: '数据接入',
  索引集管理: '索引集管理',
  用户组配置: '用户组配置',
  v3迁移: 'v3迁移',
  日志提取配置: '日志提取配置',
  仪表盘: '仪表盘',
  采集项: '采集项',
  新建采集项: '新建采集项',
  管理: '管理',
  基本信息: '基本信息',
  采集状态: '采集状态',
  数据存储: '数据存储',
  数据状态: '数据状态',
  使用详情: '使用详情',
  部署详情: '部署详情',
  集群名称: '集群名称',
  索引集名称: '索引集名称',
  基础信息: '基础信息',
  分裂规则: '分裂规则',
  物理索引: '物理索引',
  字段信息: '字段信息',
  数据趋势: '数据趋势',
  分钟数据量: '分钟数据量',
  日数据量: '日数据量',
  数据量: '数据量',
  使用统计: '使用统计',
  检索记录: '检索记录',
  使用次数趋势: '使用次数趋势',
  用户使用频次: '用户使用频次',
  检索耗时统计: '检索耗时统计',
  '耗时优化指引 >': '耗时优化指引 >',
  占比: '占比',
  '耗时(s)': '耗时(s)',
  刷新: '刷新',
  近x天: '近 {x} 天',
  数据采样: '数据采样',
  新建索引集: '新建索引集',
  编辑索引集: '编辑索引集',
  集群名: '集群名',
  状态: '状态',
  集群: '集群',
  查看权限: '查看权限',
  数据分类: '数据分类',
  新增采集: '新增采集',
  已选索引: '已选索引',
  新增索引: '新增索引',
  索引: '索引',
  添加: '添加',
  字段: '字段',
  类型: '类型',
  分词: '分词',
  字段名: '字段名',
  中文名: '中文名',
  数据类型: '数据类型',
  序号: '序号',
  中文名称: '中文名称',
  匹配结果: '匹配结果',
  MUST类型的字段缺失: 'MUST类型的字段缺失',
  请选择集群: '请选择集群',
  请选择索引: '请选择索引',
  成功匹配x条索引: '成功匹配 {x} 条索引',
  时间字段: '时间字段',
  时间字段需要保持一致: '时间字段需要保持一致',
  时间格式: '时间格式',
  所属集群: '所属集群',
  数据源: '数据源',
  确认删除索引: '确认删除索引',
  主分片: '主分片',
  副本分片: '副本分片',
  文档计算: '文档计算',
  文档计数: '文档计数',
  运行状态: '运行状态',
  存储大小: '存储大小',
  操作记录: '操作记录',
  操作日期: '操作日期',
  操作人: '操作人',
  操作内容: '操作内容',
  操作结果: '操作结果',
  新建仪表盘: '新建仪表盘',
  新建目录: '新建目录',
  导入仪表盘: '导入仪表盘',
  无匹配的数据: '无匹配的数据',
  retrieve: {
    time_zone: '当前时区',
    node: '节点',
    Please_left: '请在左侧选择主机/节点/动态分组',
    Dynamic_grouping: '动态分组',
    Business: '业务拓扑',
    IP_input: 'IP输入',
    Multiple_carriage: '多个IP以回车为分隔符',
    host_abnormal: '台主机Agent异常',
    Existing_host: '现有主机',
    Nothing_selected: '未选择任何内容',
    Please_enter: '请输入IP',
    frequency: '自动刷新',
    each10s: '每 10 秒',
    each30s: '每 30 秒',
    each2m: '每 2 分钟',
    each5m: '每 5 分钟',
    each10m: '每 10 分钟',
    ipSelect: 'IP快选',
    moduleNum: '个模块',
    ipNum: '个IP',
    addFilter: '添加过滤条件',
    operatorPlaceholder: '多个值请用逗号分隔',
    period_5S: '近 5 秒',
    period_5Min: '近 5 分钟',
    period_15Min: '近 15 分钟',
    period_30Min: '近 30 分钟',
    period_1H: '近 1 小时',
    period_4H: '近 4 小时',
    period_12H: '近 12 小时',
    period_1D: '近 1 天',
    '近{n}分钟': '近{n}分钟',
    '近{n}小时': '近{n}小时',
    '近{n}天': '近{n}天',
    今天: '今天',
    昨天: '昨天',
    前天: '前天',
    本周: '本周',
    从: '从',
    至: '至',
    result1: '检索结果（找到',
    result2: '条结果，用时',
    ms: '毫秒）',
    result3: '，将搜索条件',
    result4: '添加为监控',
    dataLoading: '数据加载中',
    operate: '操作',
    log: '实时日志',
    realTimeLog: '实时日志',
    realTimeScrollingLog: '实时滚动日志',
    filterPlaceholder: '输入关键字进行过滤',
    copySuccess: '复制成功',
    context: '上下文',
    monitorAlarm: '监控告警',
    showMore: '仅展示检索结果的前2000条，如果要查看更多请优化查询条件',
    setField: '设置列表字段',
    exportFailed: '导出失败',
    partialExport: '部分导出',
    dataMoreThan: '当前数据超过1万条',
    dataMoreThanMillion: '当前数据超过200万条',
    moreThanMillionDesc: '请先缩小数据范围再进行打包下载， 或直接下载前1万条数据',
    reasonFor: '当前因',
    reasonDesc: '原因无法进行异步下载， 可直接下载前1万条数据',
    immediateExport: '直接下载',
    immediateExportDesc: '直接下载仅下载前1万条数据',
    asyncExport: '异步下载',
    asyncExportDesc: '异步下载可打包下载所有数据，请注意查收下载通知邮件',
    asyncExportMoreDesc: '建议缩小查询范围，异步下载只能下载前200w条，注意查看邮件',
    asyncExportSuccess: '打包下载成功，请注意查收邮件',
    dataNone: '检索结果条数为0',
    generalTrend: '总趋势',
    notData: '未查询到数据',
    convergeCycle: '汇聚周期',
    fieldName: '字段名',
    setVisible: '设置显示字段',
    mustSetVisible: '显示字段不能为空',
    setSort: '设置排序权重',
    toSelectedList: '待选项列表',
    selectedList: '已选项列表',
    addAllFields: '全部添加',
    visibleTips: '支持拖拽更改顺序，从上向下对应列表列从左到右顺序',
    sortTips: '支持拖拽更改顺序，排在上面的拥有更高的排序权重',
    clear: '清空',
    status: '状态',
    option: '操作',
    desc: '降序',
    setDesc: '设为降序',
    asc: '升序',
    setAsc: '设为升序',
    chooseBusiness: '选择业务',
    options: '选择方式',
    selected: '已选择',
    modules: '个模块',
    a: '个',
    host: '主机',
    entered: '已输入',
    ips: '个IP',
    ipPlaceholder: '多个IP使用 , 分隔',
    ipChecked: '输入的IP字段格式有误；有重复IP；',
    topologySelection: '拓扑选择',
    manualInput: '手动输入',
    unableLocate: '无法定位上下文',
    ipRule: '请输入3到10个以内的字符',
    logPath: '日志路径',
    keyword: '关键字',
    log_available: '日志文件的绝对路径，可使用',
    log_wildcard_character: '通配符',
    Log_content_filtering: '日志内容过滤',
    suggest_clean: '为减少传输和存储成本，可以过滤掉部分内容,更复杂的可在"清洗"功能中完成',
    Confirm_disable: '确认停用当前采集项？',
    Confirm_delete: '确认删除当前采集项？',
    String_filtering: '字符串过滤',
    Separator_filtering: '分隔符过滤',
    Keep_string: 'include(保留匹配字符串)',
    Keep_filtering: 'exclude(过滤匹配字符串)',
    Complex_filtering: '复杂的过滤条件（超过5个）会影响机器性能',
    How_columns: '第几列',
    equal_to: '等于',
    To_add_delete: '增/删',
    Start_collecting: '开始采集',
    next: '下一步',
    select_target: '选择目标',
    Add_list: '添加至列表',
    no_data: '暂无数据',
    state: '状态',
    Cloud_area: '云区域',
    remove: '移除',
    name_nod: '节点名称',
    instance: '个实例',
    There: '共',
    main_engines: '台主机',
    Instance_exception: '个实例异常',
    exception: '台Agent异常',
    Ip_Format: 'IP格式有误或不存在，检查后重试！',
    search_empty: '搜索结果为空!',
    recommended_keyword: '建议检查关键字是否准确',
    IPFormatErrorText: 'IP地址格式错误',
    ignoreCase: '大小写敏感',
    showPrev: '显示前',
    showNext: '显示后',
    quickOperation: '快捷键  Esc:退出; PageUp: 向上翻页; PageDn: 向下翻页',
    include: '包含',
    uninclude: '不包含',
    traceRetrieve: 'trace检索',
    container: '容器',
    traceNoDataTips: '未找到相关的应用，请确认是否有Trace数据的接入。',
  },
  // 调用链跟踪
  trace: {
    to: '至',
    Total: '共计',
    Items: '条',
    Item: '条',
    page: '',
    each_page: '每页',
    trace: '调用链',
    // trace 详情
    connectionChart: '调用关系图',
    zoomIn: '放大',
    zoomOut: '缩小',
    restore: '还原',
    log: '日志',
    viewLog: '查看日志',
    fieldsSetting: '设置显示字段',
    time_quantum: '时间段',
    scene: '场景',
    serve: '服务',
    time_consuming: '耗时',
    Return_code: '返回码',
    Method_calc: '方法名，函数名或者一个大型计算中的某个阶段或子任务',
    only_sync: '仅显示同步请求',
    traceList: '调用链列表',
    traceDetail: '调用链详情',
  },
  '当前业务没有接入调用链日志，': '当前业务没有接入调用链日志，',
  了解接入详情: '了解接入详情',
  // 索引集列表
  indexSetList: {
    cluster_name: '集群名称',
    index_set: '索引集',
    Index_set_name: '索引集名称',
    index: '索引',
    dataOrigin: '数据源',
    clusterName: '集群名',
    created_time: '创建时间',
    creator: '创建人',
    jurisdiction: '查看权限',
    operation: '操作',
    addindex: '新增索引',
    empty: '暂未配置索引',
    bk_biz_name: '业务',
    jurisdictions: '权限',
    affirm: '确定',
    cancel: '取消',
    field_name: '字段',
    field_type: '类型',
    field_value: '值',
    description: '描述',
    tips: '支持“*”匹配，不支持其他特殊符号',
    alias: '索引别名',
    time: '时间字段',
    type: '时间类型',
    unit: '时间格式',
    Please_select: '请选择第三方存储集群',
    successfullyMatch: '成功匹配索引',
    isTraceLog: '是否为trace日志',
    traceLogTips: 'trace日志在ES存储需符合以下规范',
    indexesTips: '请选择数据源',
  },
  // 数据源管理
  dataSource: {
    addSource: '新建数据源',
    editSource: '编辑数据源',
    source_name: '名称',
    source_en_name: '英文名',
    en_name_placeholder: '英文名用于索引和数据源',
    en_name_tips: '支持数字、字母、下划线，长短5～50字符',
    scenario_name: '类型',
    es_host: '地址',
    es_port: '端口',
    created_at: '创建时间',
    created_by: '创建人',
    updated_at: '更新时间',
    updated_by: '更新人',
    operation: '操作',
    name: '数据源管理',
    host: 'ES地址',
    port: '端口',
    user: '用户名',
    password: '密码',
    test: '连通性测试',
    success: '连通成功！',
    error: '连通失败！',
    affirm: '确认',
    cancel: '取消',
    addIndexSet: '建索引集',
    state: '连接状态',
    succeed: '正常',
    failed: '失败',
    collector_config_name: '采集配置名称',
    table_id: '存储名',
    storage_cluster_name: '存储集群',
    collector_scenario_name: '日志类型',
    category_name: '数据类型',
    es_host_state: '采集状态',
    click_view: '点检查看',
    collector_config_unfinished: '未完成',
    basic_information: '基础信息',
    Source_log_information: '源日志信息',
    tips_capacity: ' 当前集群的容量额度为 ',
    tips_development: '如果需要更大存储，请使用独立的集群，有问题可以咨询平台管理员',
    tips_business: ' 此业务已超过集群容量限制，请与开发团队联系或使用独立集群',
    tips_formula: ' ES存储 ≈ 每天原始日志量 * 1.5（ES转化率） * 2（1个副本） * 存储天数',
    dataId: '数据ID',
    retention: '过期时间',
    en_name_repeat: '该英文名已重复',
  },
  新建数据源: '新建数据源',
  编辑数据源: '编辑数据源',
  新建集群: '新建集群',
  编辑集群: '编辑集群',
  正在使用: '正在使用',
  业务独享集群: '业务独享集群',
  数据源名称: '数据源名称',
  热冷数据: '热冷数据',
  名称: '名称',
  地址: '地址',
  端口: '端口',
  来源: '来源',
  ES地址: 'ES地址',
  ES集群管理: 'ES集群管理',
  一键拉群功能: '一键拉群功能',
  当前空间可见: '当前空间可见',
  多空间选择: '多空间选择',
  全平台: '全平台',
  按照空间属性选择: '按照空间属性选择',
  changeClusterTips: '切换集群将导致历史数据无法查询',
  qwGroupTips: '可以通过企业微信将需求的相关人员邀请到一个群里进行讨论',
  请选择群成员: '请选择群成员',
  集群负责人: '集群负责人',
  集群负责人Tips: '集群负责人可以用于容量审核等',
  日志归档: '日志归档',
  说明文档: '说明文档',
  一键拉群: '一键拉群',
  跳转至: '跳转至',
  查看说明文档: '查看说明文档',
  集群说明: '集群说明',
  集群选择: '集群选择',
  存储信息: '存储信息',
  共享集群: '共享集群',
  总量: '总量',
  空闲率: '空闲率',
  索引数: '索引数',
  业务数: '业务数',
  createAClusterTips: '当前还没有业务独享集群，快去创建吧',
  createAPlatformTips: '当前还没有共享集群，请联系平台管理员提供',
  multiBizTip: '可见类型为业务属性时，业务标签不能为空',
  bizAttrTip: '可见类型为多业务时，可见业务范围不能为空',
  默认天数不能大于最大天数: '默认天数不能大于最大天数',
  基于单台最大的日志存储量粗略评估: '基于单台最大的日志存储量粗略评估',
  容量评估进行中: '容量评估进行中',
  创建集群: '创建集群',
  可见范围: '可见范围',
  默认: '默认',
  最大: '最大',
  副本数: '副本数',
  分片数: '分片数',
  用户名: '用户名',
  密码: '密码',
  连通性测试: '连通性测试',
  '连通成功！': '连通成功！',
  '连通失败！': '连通失败！',
  连接状态: '连接状态',
  建索引集: '建索引集',
  '搜索ES源名称，地址，创建人': '搜索ES源名称，地址，创建人',
  协议: '协议',
  冷热数据: '冷热数据',
  热数据: '热数据',
  输入自定义天数: '输入自定义天数，按 Enter 确认',
  该集群未开启热数据设置: '该集群未开启热数据设置，',
  前往ES源进行设置: '前往ES源进行设置',
  最大自定义天数为: '最大自定义天数为',
  天: '天',
  请输入有效数值: '请输入有效数值',
  开: '开',
  关: '关',
  冷热集群设置: '冷热集群设置',
  热数据标签: '热数据标签',
  冷数据标签: '冷数据标签',
  查看实例列表: '查看实例列表',
  '没有获取到正确的标签，': '没有获取到正确的标签，',
  查看具体的配置方法: '查看具体的配置方法',
  包含属性: '包含属性',
  的节点列表: '的节点列表',
  保存成功: '保存成功',
  确认删除当前ES集群: '确认删除当前ES集群',
  inUseProjectTip: '该业务已有采集使用，无法取消可见',
  // 告警策略
  monitors: {
    allLevel: '所有告警级别',
    selectTimeRange: '选择时间范围',
    searchPolicyName: '搜索策略名称',
    policyName: '策略名称',
    type: '类型',
    occur: '发生时间',
    alarmLevel: '告警级别',
    alarmContent: '告警内容',
    operation: '操作',
    detail: '详情',
    feedback: '意见反馈',
    nowadays: '今天',
    period_7D: '近7天',
    period_15D: '近15天',
    period_30D: '近30天',
    submitted: '提交成功',
    fatal: '致命',
    warning: '预警',
    remind: '提醒',
  },
  // 告警策略
  alarmStrategy: {
    policy_name: '策略名称',
    monitor_name: '类型',
    created_at: '创建时间',
    created_by: '创建人',
    level_name: '告警级别',
    active_name: '状态',
    operation: '操作',
    open: '打开',
    close: '关闭',
    all_type: '所有类型',
    all_level: '所有告警级别',
    search_policy_name: '搜索策略名称',
    stop: '确认要关闭？',
    start: '确认要开启？',
    meg: '基本信息',
    placeholder: '暂时只支持接入数据平台索引集',
    conf: '告警配置',
    additions: '关键词',
    model_id: '检测算法',
    describe: '运用关键字出现次数的历史数据分布，通过机器学习的方法发现异常',
    statement: '检索语句',
    config_threshold: '触发阈值(条)',
    config_range: '监控周期(分钟)',
    converge_check_window: '触发条件',
    satisfy: '个周期内，满足',
    arithmetic: '次检测算法',
    converge_alarm_window: '通知间隔',
    recover: '告警产生后状态未恢复，',
    hour: '小时内不再产生告警',
    way: '通知方式',
    level: '告警等级',
    initTimeRange: '通知时间段',
    notice_roles: '告警组',
    notice_type: '通知方式',
    is_active: '是否启用',
    alarm_time: '选择告警时间',
  },
  // 屏蔽策略
  shield: {
    policy_name: '屏蔽对象',
    time: '屏蔽时间',
    created_at: '创建时间',
    created_by: '创建人',
    operation: '操作',
    policies: '屏蔽对象',
    shield_type: '屏蔽方式',
    shieldTime: '屏蔽时间',
    dateRange: '起止时间',
    day: '指定天数',
    reason: '屏蔽原因',
    time_horizon: '请选择时间范围',
    date_range: '选择日期范围',
    affirm: '确认',
    cancel: '取消',
    new: '新增屏蔽策略',
    edit: '编辑屏蔽策略',
    isdelete: '确认要删除？',
    Monday: '周一',
    Tuesday: '周二',
    Wednesday: '周三',
    Thursday: '周四',
    Friday: '周五',
    saturday: '周六',
    weekday: '周日',
  },
  // 权限组管理
  permission: {
    group_name: '组名',
    users: '成员',
    created_at: '创建时间',
    created_by: '创建人',
    operation: '操作',
    edittitle: '同步自配置中心，不可修改',
    deletetitle: '同步自配置中心，不可删除',
    add: '新建用户组',
    edit: '编辑用户组',
    tencentTips: '多个QQ号粘贴请使用英文分号 " ; " 分隔 ，手动输入QQ号请键入 Enter 保存',
    tips: '多个用户名粘贴请使用英文分号 " ; " 分隔 ，手动输入用户名请键入 Enter 保存',
  },
  configDetails: {
    message: '配置信息',
    state: '采集状态',
    name: '名称',
    logType: '日志类型',
    dataClassify: '数据分类',
    logSpecies: '日志种类',
    logPath: '日志路径',
    logSet: '日志字符集',
    target: '采集目标',
    newly_increased: '新增',
    storageIndexName: '存储索引名',
    remarkExplain: '备注说明',
    filterContent: '过滤内容',
    StorageCluster: '存储集群',
    expirationTime: '过期时间',
    copyNumber: '副本数',
    the: '第',
    column: '列',
    day: '天',
    updated_by: '更新人',
    updated_at: '更新时间',
    created_by: '创建人',
    created_at: '创建时间',
    ConfigDetails: '配置详情',
    gatherState: '采集状态',
    all: '全部',
    succeed: '正常',
    failed: '失败',
    Pending: '执行中',
    goal: '目标',
    plug_in: '插件版本',
    retry: '重试',
    text: '每15分钟按照CMDB最新拓扑自动部署或取消采集',
    batchRetry: '失败批量重试',
    dataSampling: '数据采样',
    success: '成功',
    number: '序号',
    originalLog: '原始日志',
    gatherTime: '采集时间',
    report: '查看上报日志',
    logDetails: '上报日志详情',
    and: '并',
    or: '或',
    strMatching: '字符串匹配',
    sepMarching: '分隔符匹配',
    keep: '保留匹配字符串',
    Filter: '过滤匹配字符串',
    selected: '已选择',
    Dynamic_selection: '已动态选择',
    Been: '个节点',
    staticHosts: '个静态主机',
    serviceTemplates: '个服务模板',
    setTemplates: '个集群模板',
    successful: '个成功',
    failure: '个失败',
    static: '静态',
    dynamic: '动态',
  },
  应用程序: '应用程序(Application)',
  安全: '安全(Security)',
  win系统: '系统(System)',
  其他: '其他',
  事件ID: '事件ID',
  级别: '级别',
  动态拓扑: '动态拓扑',
  静态拓扑: '静态拓扑',
  动态分组: '动态分组',
  不能混用: '不能混用',
  服务模板: '服务模板',
  集群模板: '集群模板',
  自定义输入: '自定义输入',
  节点名称: '节点名称',
  服务实例: '服务实例',
  Agent状态: 'Agent状态',
  分类: '分类',
  云区域: '云区域',
  操作系统: '操作系统',
  移除所有: '移除所有',
  搜索模块名: '搜索模块名',
  搜索集群名: '搜索集群名',
  搜索拓扑节点: '搜索拓扑节点',
  请选择: '请选择',
  无数据: '无数据',
  结果预览: '结果预览',
  本页全选: '本页全选',
  跨页全选: '跨页全选',
  根节点: '根节点',
  查无数据: '查无数据',
  已选: '已选',
  个: '个',
  节点: '节点',
  异常: '异常',
  异常数: '异常数',
  未安装: '未安装',
  内网IP: '内网IP',
  外网IP: '外网IP',
  其他IP: '其他IP',
  多个IP以回车为分隔符: '多个IP以回车为分隔符',
  点击解析: '点击解析',
  'IP格式有误或不存在，检查后重试！': 'IP格式有误或不存在，检查后重试！',
  IP: 'IP',
  保存: '保存',
  行首正则调试: '行首正则调试',
  行首正则: '行首正则',
  调试: '调试',
  最多匹配: '最多匹配',
  '行，最大耗时': '行，最大耗时',
  秒: '秒',
  日志样例: '日志样例',
  行首正则表达式: '行首正则表达式',
  匹配验证: '匹配验证',
  成功匹配: '成功匹配',
  条日志: '条日志',
  未成功匹配: '未成功匹配',
  内容: '内容',
  dataManage: {
    normal: 'Agent 正常',
    abnormal: 'Agent 异常',
    not_exist: 'Agent 未安装',
    Current_instances: '当前实例数',
    Current_hosts: '当前主机数',
    unknown_error: '未知错误',
    Return_list: '返回列表',
    To_retrieve: '前往检索',
    add: '采集项创建完成',
    edit: '采集项修改完成',
    editFinish: '采集项修改完成',
    field: '采集项修改完成',
    start: '采集项启用完成',
    stop: '采集项停用完成',
    Within_stop: '采集完成后24小时内，没有配置第3步“字段提取&存储”，任务会被强制停用。',
    add_btn: '新增',
    amend: '修改',
    es_host: '运行状态',
    more: '更多',
    perform: '完成',
    last: '上一步',
    next: '下一步',
    Collect_configuration: '采集配置',
    Collection_issued: '采集下发',
    extraction_storage: '字段提取&存储',
    accomplish: '完成',
    field_hint: '日志检索可以在将过滤后的日志采集上来之后进行日志内容的格式化方便检索和分析. 可以不进行字段提取直接跳过到存储',
    Refresh: '刷新',
    Field_extraction: '字段提取方法',
    confirm_append: '确认保留原始日志,会存储在log字段. 其他字段提取内容会进行追加',
    keep_log: '保留原始日志',
    Commissioning_setup: '调试&设置',
    try_methods: '格式解析失败，可以尝试其他提取方法',
    regular_format1: '正则表达式需要匹配日志全文，如以下DEMO将从日志内容提取请求时间与内容',
    regular_format2: ' - 日志内容：[2006-01-02 15:04:05] content',
    regular_format3: ' - 表达式：\\[(?P<request_time>[^]]+)\\] (?P<content>.+)',
    Settings_Preview: '设置&预览',
    storage: '存储',
    input_number: '英文或者数字，5～50长度',
    start_bk: '以业务ID+bklog_开头,补充字母、数字或下划线，5~50长度',
    View_fields: '查看标准字段',
    select_field: '请选择字段提取方法',
    conflict: '字段名与内置字段冲突',
    Submit: '是否按原配置提交?',
    Debug_set: '字段提取方法或条件已发生变更，需【调试&设置】按钮点击操作成功才会生效',
    Reset: '重置',
    Hide_deleted: '已隐藏',
    Row: '项',
    Field_name: '字段名',
    Alias_field: '别名不能与内置字段名相同',
    Field_alias: '字段名与内置字段冲突，必须设置别名',
    Alias_only_supports: '别名只支持【英文、数字、下划线】，并且不能以数字开头',
    can_only: '只能包含a-z、A-Z、0-9和_，且不能以_开头和结尾',
    field_expression: '字段名与系统字段重复，必须修改正则表达式',
    Polymeric: '聚合',
    time_dimensions: '时间字段默认设置可以聚合',
    Participle: '分词',
    time: '时间',
    only_data_time: '只能设置一个数据时间，如果要更改请先取消原来的',
    Preview: '预览（值）',
    select_format: '选择时间格式',
    set: '设置了时间格式后将替换默认的数据时间',
    Data_time: '数据时间',
    Field_value: '字段的预览值',
    Time_format: '时间格式',
    Zone_selection: '时区选择',
    Reset_confirmation: '重置确认',
    Reset_content: '重置将丢失当前的配置信息，重置为上一次保存的配置内容。确认请继续。',
    can_cannot: '只能包含a-z、A-Z、0-9和_，且不能以_开头和结尾',
    field_regular: '字段名与系统字段重复，必须修改正则表达式',
    field_same: '字段名与系统内置字段重复',
    Reset_bar: '重设时间列',
    column_want: '将此列设置为时间，会将取消已设为时间的列，是否继续？',
    After_exception: '更改字段类型后在同时检索新老数据时可能会出现异常，确认请继续',
    Alias: '重命名',
    Optional: '(选填)',
    alias_replaced: '非必填字段，填写后将会替代字段名；字段名与标准字段重复时，必须重新命名。',
    Field_description: '字段说明',
    Search_index_name: '搜索名称、存储索引名',
    Selected_participle: '选中分词,适用于分词检索,不能用于指标和维度',
    Click_all: '点击展示全部',
    StepInfo: '采集目标未变更，无需下发',
    Base: '基础',
    Advance: '高级',
    modeSelect: '模式选择',
    applyTemp: '应用模版',
    debugField: '调试设置字段',
    advanceStep1: '高级清洗只能应用于日志平台采集的日志，会在链路上分发给计算平台进行更复杂的数据处理。',
    advanceStep2: '选择了高级字段提取能力后，会跳转到计算平台进行更多的字段处理，计算平台提供13种清洗算法。具体的使用方法可查看',
    advanceStep3: '清洗完并且存储到ES后，日志平台会识别到对应的索引创建日志平台的索引集，后续可以直接在检索和监控中使用。',
    advanceRemark1: '注： 同一个日志可以进行多次清洗。',
    advanceRemark2: '注：如果清洗后存储成其他类型，将无法关联上。',
    linkdocs: '计算平台文档',
    selectTemp: '选择模版',
    saveTemp: '保存模板',
    saveTempErrorTips: '请输入模板名称',
    selectTempErrorTips: '请选择清洗模板',
    emptyText: '请先选择字段提取模式',
    skip: '跳过',
    advanceClean: '前往高级清洗',
    jumpComputedPlatform: '跳转到计算平台',
    advanceCleanConfirm: '高级清洗需要跳转到计算平台并终止当前流程，请确认是否继续跳转',
    disabledBase: '当前采集项已配置基础清洗，无需重复配置',
    disabledAdvance: '未部署基础计算平台，无法进行高级清洗',
  },
  搜索服务模板名: '搜索服务模板名',
  搜索模板名: '搜索模板名',
  搜索动态分组名: '搜索动态分组名',
  采集配置: '采集配置',
  采集下发: '采集下发',
  '字段提取&存储': '字段提取&存储',
  完成: '完成',
  容量评估: '容量评估',
  点击查看审批详情: '点击查看审批详情',
  期待接入日期: '期待接入日期',
  '单条日志大小(Bytes)': '单条日志大小(Bytes)',
  '单机流量峰值(KB/s)': '单机流量峰值(KB/s)',
  '单机增长日志量(G)': '单机增长日志量(G)',
  预计接入的主机数量: '预计接入的主机数量',
  日志保留天数: '日志保留天数',
  热数据天数: '热数据天数',
  容量说明: '容量说明',
  clusterTips1: '容量计算公式：单机日志增量主机数量存储转化率分片数（日志保留天数 + 1）',
  clusterTips2: '存储转化率（1.5）：即原始日志增加日志采集元数据并存储到ES到实际占有的空间',
  clusterTips3_1_1: '分片数（',
  clusterTips3_1_2: '）：1个主分片+',
  clusterTips3_2: '个副本数，避免节点故障导致数据丢失',
  '当前主机数较多，请进行容量评估': '当前主机数较多，请进行容量评估',
  每日单台日志量: '每日单台日志量',
  需要审批: '需要审批',
  请填写容量评估的每日单台日志量: '请填写容量评估的每日单台日志量',
  请勾选容量评估的需要审批: '请勾选容量评估的需要审批',
  approvalTips: '勾选需要审批后需等待审批通过后，才会继续进行存储流程',
  审批人: '审批人',
  '容量计算公式：': '容量计算公式：',
  单机日志增量: '单机日志增量',
  主机数量: '主机数量',
  存储转化率: '存储转化率',
  分片数: '分片数',
  '(日志保留天数 + 1)': '(日志保留天数 + 1)',
  '注意：': '注意：',
  需要申请单独的ES集群: '需要申请单独的ES集群',
  采集器最大处理能力: '采集器最大处理能力 10M/s，单机流量峰值超过时将会有延迟上报',
  '说明：': '说明：',
  说明存储转化率: '存储转化率(1.5)：即原始日志增加日志采集元数据并存储到ES的实际占有的空间',
  说明分片数: '分片数(2)：1个主分片+1个副本数，避免节点故障导致数据丢失',
  申请原因: '申请原因',
  提交: '提交',
  下一步: '下一步',
  上一步: '上一步',
  返回列表: '返回列表',
  容量评估需要使用独立的ES集群: '容量评估需要使用独立的ES集群',
  请输入索引集名称: '请输入索引集名称',
  // v3迁移
  migrate: {
    description1: '1. 请确认需要升级的采集项，并选择采集项对应的数据分类，确认无误后点击批量升级。',
    description2: '2. 如果不需要保留历史数据，请勾选【当前数据可丢弃，跳过数据确认环节直接迁移】，平台在迁移配置后正常使用。',
    description3: '3. 如果需要保留历史数据，请确保新旧采集项在同一个ES集群，平台在采集项迁移后，将同时维持两份数据的采集。请在数据确认阶段，确认新采集数项的生效日期，确认后确认后平台将停止旧采集项并迁移数据。',
    description4: '- 建议至少同时维持两天的采集，确保有完整的一天日志对新旧采集项进行比较',
    description5: '- 对迁移的历史数据，平台会通过新增index别名，并修改mapping以兼容新版本',
    description6: '4. 历史数据的清理，可以保留databus服务进行定时清理，也可以根据index规则手动清理。',
    collectionItemName: '采集项名称',
    dataClassification: '数据分类',
    collectionPath: '采集路径',
    startTime: '开始时间',
    migrationSteps: '迁移步骤',
    operation: '操作',
    detail: '详情',
    retry: '重试',
    bulkMigrate: '批量迁移',
    migrateOption: '当前数据可丢弃，跳过数据确认环节直接迁移',
    confirmSwitch: '确认切换',
    date: '日期',
    originalIndex: '原采集存储索引',
    newIndex: '新采集存储索引',
    switchTips: '从选择的索引开始切换，确认切换后不可逆',
    taskLog: '任务日志',
    noLog: '暂无日志',
    pleaseCheckNewIndex: '请勾选新采集索引',
    items: '条',
  },
  // 无权限初始页
  未接入业务或无可查看的业务权限: '未接入业务或无可查看的业务权限',
  新业务接入: '新业务接入',
  新业务接入详情: '您当前是想接入一个新的业务么? 新业务需要先去配置平台创建，具体接入流程点击业务接入查看。',
  业务接入: '业务接入',
  获取权限: '获取权限',
  您当前没有业务: '您当前没有业务\u2500\u2500',
  的权限: '的权限，',
  请先申请吧: '请先申请吧！',
  '您当前没有业务权限，请先申请吧！': '您当前没有业务权限，请先申请吧！',
  权限申请: '权限申请',
  请先联系运维同学: '请先联系运维同学',
  进行角色的添加: '进行角色的添加。',
  '您当前没有业务权限，请先联系对应的业务运维同学进行添加!': '您当前没有业务权限，请先联系对应的业务运维同学进行添加!',
  业务DEMO: '业务DEMO',
  体验DEMO: '体验DEMO',
  您当前想快速体验下平台的功能: '您当前想快速体验下平台的功能？',
  我要体验: '我要体验',
  申请业务权限: '申请业务权限',
  过期时间: '过期时间',
  正在开发中: '正在开发中',
  // 权限中心
  申请权限: '申请权限',
  系统: '系统',
  无权限访问: '无权限访问',
  您没有相应资源的访问权限: '您没有相应资源的访问权限，请申请权限或联系管理员授权',
  去申请: '去申请',
  该操作需要以下权限: '该操作需要以下权限',
  需要申请的权限: '需要申请的权限',
  关联的资源实例: '关联的资源实例',
  '权限申请单已提交？': '权限申请单已提交？',
  请在权限中心填写权限申请单: '请在权限中心填写权限申请单，提交完成后再刷新该页面',
  刷新页面: '刷新页面',
  // 日志清洗
  logClean: {
    etlConfig: '格式化方法',
    storageIndex: '存储索引',
    templateName: '模板名称',
    新增清洗: '新增清洗',
    编辑清洗: '编辑清洗',
    清洗模板: '清洗模板',
    cleaning: '高级清洗中',
    cleaningTips: '当前流程已跳转至计算平台进行清洗，若清洗完成可及时刷新页面更新状态',
    Confirm_delete: '确认删除当前清洗项？',
    Confirm_delete_temp: '确认删除当前模板？',
    cleaningConfirmTips: '高级清洗仍在进行中',
    finishClean: '清洗已完成',
    rawData: '原始数据',
    advancedClean: '高级清洗',
    goToClean: '前往清洗',
    syncSuccess: '同步计算平台的结果表成功',
    syncFaild: '同步计算平台的结果表失败',
    syncTip: '同步计算平台的结果',
    storageSetting: '存储设置',
  },
  logAlertTips: '索引集允许用户可以跨多个采集的索引查看日志。',
  esAlertTips: '如果日志已经存储在Elasticsearch，可以在“集群管理”中添加Elasticsearch集群，就可以通过创建索引集来使用存储中的日志数据。',
  bkdataAlertTips: '可以通过新建索引集将计算平台中的Elasticsearch中的索引，方便在日志平台中进行检索、分析、管理等。',
  unableEditTip: '平台默认的集群不允许编辑和删除，请联系管理员。',
  pageLeaveTips: '是否放弃本次操作？',
  logArchive: {
    archive: '归档',
    restore: '回溯',
    repositoryName: '仓库名称',
    repositoryType: '仓库类型',
    archiveItem: '归档项',
    timeRange: '时间范围',
    occupySize: '资源占用',
    remain: '剩余',
    restoreStatus: '回溯状态',
    collectName: '采集项名称',
    expired: '过期设置',
    totalSize: '总大小',
    indexCount: '索引数量',
    archiveRepository: '归档仓库',
    indexName: '索引名',
    startStopTime: '数据起止时间',
    size: '大小',
    archiveStatus: '归档状态',
    isRestore: '是否已回溯',
    createArchive: '新增归档',
    editArchive: '编辑归档',
    collectFormLabel: '选择采集项',
    editRestore: '编辑回溯',
    createRestore: '新增回溯',
    restoreIndexTip: 'COS的自动创建和关联，只能用于腾讯云',
    notifiedUser: '结果通知人',
    createRepository: '新建归档仓库',
    editRepository: '编辑归档仓库',
    repositoryConfig: '仓库配置',
    sharedDirectory: '共享目录',
    archiveDirectory: '归档目录',
    HDFSAddr: 'HDFS地址',
    BucketName: 'Bucket名字',
    repositoryAlert1: '1. 用户需要在hdfs设置的kerberos中创建给es使用的principal, 然后导出对应的keytab文件',
    repositoryAlert2: '2. 将keytab放es每个节点对应的目录中去',
    repositoryAlert3: '本地目录配置说明',
    repositoryAlert4: 'COS的自动创建和关联，只能用于腾讯云',
    Confirm_delete_repo: '确认删除该仓库？',
    repoNmaeTip: '只能输入英文、数字或者下划线',
    region: '区域',
    Confirm_delete_archive: '确认删除该归档项？',
    Confirm_delete_restore: '确认删除该回溯？',
    notStarted: '未开始',
    restoring: '回溯中',
    isExpired: '是否过期',
    esID: 'ES集群ID',
  },
  customReport: {
    reportCreate: '新建自定义上报',
    reportEdit: '编辑自定义上报',
    token: '数据token',
    dataName: '数据名称',
    remark: '说明',
    dataID: '数据ID',
    name: '名称',
    monitoring: '监控对象',
    typeOfData: '数据类型',
    createRecord: '创建记录',
    updateRecord: '更新记录',
    operation: '操作',
    typeTips: '自定义上报数据，可以通过采集器，或者指定协议例如otlp等方式进行上报，自定义上报有一定的使用要求，具体可以查看使用说明',
    englishName: '英文名',
    dataClassification: '数据分类',
    instruction: '说明',
    storageSettings: '存储设置',
    dataLink: '数据链路',
    notEntered: '未输入',
    helpDocument: '帮助文档',
    instructions: '使用方法',
  },
  exportHistory: {
    downloadLog: '下载日志',
    downloadHistory: '下载历史',
    parameter: '检测请求参数',
    startTime: '开始时间',
    endTime: '结束时间',
    downloadType: '下载类型',
    exportState: '导出状态',
    completeTime: '完成时间',
    abnormalReason: '异常原因',
    fileName: '文件名',
    fileSize: '文件大小',
    operator: '操作者',
    operatingTime: '操作时间',
    operate: '操作',
    download: '下载',
    retry: '重试',
    btnTip: '查看所有的索引集的下载历史',
    async: '异步',
    sync: '同步',
    pulling: '拉取中',
    exportPackage: '打包中',
    exportUpload: '上传中',
    success: '完成',
    failed: '异常',
    retrieve: '检索',
    exporting: '下载中',
    downloadExpired: '下载链接过期',
    dataExpired: '数据源过期',
    indexSetID: '索引集ID',
    btn: '查看所有',
  },
  环境选择: '环境选择',
  Yaml模式: 'Yaml模式',
  配置项: '配置项',
  NameSpace选择: 'NameSpace选择',
  所有容器: '所有容器',
  指定容器: '指定容器',
  指定标签: '指定标签',
  冲突检查结果: '冲突检查结果',
  添加配置项: '添加配置项',
  附加日志标签: '附加日志标签',
  是否自动添加Pod中的labels: '是否自动添加Pod中的labels',
  物理环境: '物理环境',
  容器环境: '容器环境',
  标准输出: '标准输出',
  应用类型: '应用类型',
  应用名称: '应用名称',
  容器名称: '容器名称',
  Workload类型: 'Workload类型',
  Workload名称: 'Workload名称',
  获取标签: '获取标签',
  选择Service以获取Label列表: '选择Service以获取Label列表',
  设置标签: '设置标签',
  通过标签获取采集目标列表: '通过标签获取采集目标列表',
  匹配范围: '匹配范围',
  已命中: '已命中',
  个内容: '个内容',
  表达式: '表达式',
  匹配标签: '匹配标签',
  匹配表达式: '匹配表达式',
  添加标签: '添加标签',
  添加表达式: '添加表达式',
  编辑器: '编辑器',
  上传: '上传',
  下载: '下载',
  全屏: '全屏',
  请输入: '请输入',
  请输入应用名称: '请输入应用名称',
  支持正则匹配: '支持正则匹配',
  此浏览器不支持全屏操作: '此浏览器不支持全屏操作',
  请使用chrome浏览器: '请使用chrome浏览器',
  关联标签: '关联标签',
  总数: '总数',
  yaml语法出错: 'yaml语法出错',
  yaml缺少必要的字段: 'yaml缺少必要的字段',
  确定要删除配置项: '确定要删除配置项',
  未选择指定容器或指定标签: '未选择指定容器或指定标签',
  未选择文件: '未选择文件',
  不是有效的yaml文件: '不是有效的yaml文件',
  请先选择集群: '请先选择集群',
  点击展开: '点击展开',
  复制目标: '复制目标',
  yaml不能为空: 'yaml不能为空',
  unKnowIconTips: '该字段为平台补充 不可检索',
  永久: '永久',
  确认要删除: '确认要删除？',
  当前采集项名称为: '当前采集项名称为',
  当前集群为: '当前集群为',
  当前索引集为: '当前索引集为',
  当前上报名称为: '当前上报名称为',
  当前模板名称为: '当前模板名称为',
  当前仓库名称为: '当前仓库名称为',
  当前归档ID为: '当前归档ID为',
  置顶的: '置顶的',
  常用的: '常用的',
  有权限的: '有权限的',
  剩余的: '剩余的',
};
