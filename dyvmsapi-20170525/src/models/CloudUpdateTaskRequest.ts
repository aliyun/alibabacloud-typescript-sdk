// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudUpdateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * 外呼组号；callGroupType=2时必填。注：一个外呼组可以绑定到多个任务，但只能同时运行一个任务中
   * 
   * @example
   * 6,7
   */
  agentGroup?: string;
  /**
   * @remarks
   * 座席超时时间；单位秒数，默认10秒，取值范围5 ~ 60
   * 
   * @example
   * 50
   */
  agentTimeout?: number;
  /**
   * @remarks
   * 初始化预计客户接通率；默认50，取值范围1～100，预热阶段的呼叫，按照此接通率计算呼叫频率
   * 
   * @example
   * 50
   */
  answerRate?: number;
  /**
   * @remarks
   * 0.关闭 1.开启，默认开启。开启：任务中的号码呼叫完后，任务自动完成，状态设置为结束，关闭：任务中的号码呼叫完后，任务自动暂停，状态设置为暂停注：任务在结束状态时无法再次启动。
   * 
   * @example
   * 1
   */
  autoComplete?: number;
  /**
   * @remarks
   * 定时开始；0.关闭 1.开启，默认关闭。值为1时autoStartDay和autoStartTime参数才生效，并且至少设置其中的一个
   * 
   * @example
   * 0
   */
  autoStart?: number;
  /**
   * @remarks
   * 定时开始日期；autoStart=1时生效。参数不传入时默认在当天的autoStartTime定时启动。格式：yyyy-MM-dd，如：2017-01-01
   * 
   * @example
   * 2026-01-01
   */
  autoStartDay?: string;
  /**
   * @remarks
   * 定时开始时间；autoStart=1时生效。参数不传入时默认在autoStartDay的00:00:00定时启动。格式：HH:mm:ss，如：08:00:00
   * 
   * @example
   * 08:00:00
   */
  autoStartTime?: string;
  /**
   * @remarks
   * 定时完成；0.关闭 1.开启，默认关闭。值为1时autoStopDay和autoStopTime参数才生效，并且至少设置其中的一个
   * 
   * @example
   * 0
   */
  autoStop?: number;
  /**
   * @remarks
   * 定时完成日期；autoStop=1时生效。参数不传入时默认在当天的autoStopTime定时完成。格式：yyyy-MM-dd，如：2017-01-01
   * 
   * @example
   * 示例值
   */
  autoStopDay?: string;
  /**
   * @remarks
   * 定时完成时间；autoStop=1时生效。参数不传入时默认在autoStopDay的23:59:59定时完成。格式：HH:mm:ss，如：17:00:00
   * 
   * @example
   * 17:00:00
   */
  autoStopTime?: string;
  /**
   * @remarks
   * 0.连续呼叫 1.间隔呼叫，默认连续呼叫。配合定时开始（autoStart）和定时结束（autoStop）参数使用，如任务需要在每天的特定时间段内呼叫则开启间隔呼叫方式
   * 
   * @example
   * 0
   */
  autoTaskType?: number;
  /**
   * @remarks
   * 间隔呼叫时间段；autoTaskType=1时必填。呼叫的时间段配置。参数格式：时间条件编号。支持多个，多个使用英文","逗号隔开，如：9,22。注：时间条件列表可通过查询时间条件设置列表接口获取
   * 
   * @example
   * 9,22
   */
  autoTriggerTimeStrategy?: string;
  /**
   * @remarks
   * 座席当日接听的通话个数上限，使用方式详见下方说明；JsonArray格式 [{"cnos":["2000","2001"],"limit":"5"}] 注：使用座席当日接听数限制功能需开启企业配置，功能开启并且配置上限后系统才开始统计当日接听数
   * 
   * @example
   * [{"cnos":["2000","2001"],"limit":"5"}]
   */
  callLimitStrategy?: string;
  /**
   * @remarks
   * 数据结构为Json格式```{"strategy":[{"sort":1,"type":"retryCall", "desc":0},{"sort":2,"type":"firstCall","orderType":0}]}```格式说明：sort是重试号码和未呼叫号码的呼叫顺序 type：retryCall重试号码、firstCall未呼叫号码当type=retryCall，desc：0.优先呼叫待重呼轮次数值较小的号码，即轮次靠前（如第1轮、第2轮）的号码先被呼叫 1.优先呼叫待重呼轮次数值较大的号码，即轮次靠后（如第5轮、第4轮）的号码先被呼叫当type=firstCall时，orderType：随机呼叫，0顺序(优先级) 1随机 2顺序(导入时间)
   * 
   * @example
   * {"strategy":[{"sort":1,"type":"retryCall", "desc":0},{"sort":2,"type":"firstCall","orderType":0}]}
   */
  callPriorityStrategy?: string;
  /**
   * @remarks
   * 1.直连座席 2.AI转人工 直连座席模式：客户接听后直接分配座席，无空闲座席可溢出语音导航（需配置语音导航），保障高优先级客户直连体验 AI转人工：客户接入后，优先进入语音导航中配置的智能体机器人，按交互结果决定是否转接座席，提升自动化覆盖率，降低人工成本
   * 
   * @example
   * 1
   */
  callRouteStrategy?: number;
  /**
   * @remarks
   * 座席分配规则；1.随机 2.顺序 3.座席未进线最大时（从上一次呼叫结束到当前的总时长） 4.座席状态[空闲]最长时长（座席最近一次切换为空闲状态的持续时长），默认随机
   * 
   * @example
   * 1
   */
  callStrategy?: string;
  /**
   * @remarks
   * 座席通道变量。JsonArray格式；最大支持5个变量。默认空值， 示例：[{"name":"abcdefg","value":"${cdr_enterprise_id}"}] 注：单个字段值的长度不能超过1000个字符。变量会以SIP_HEADER的形式设置到座席侧通道
   * 
   * @example
   * [{"name":"abcdefg","value":"${cdr_enterprise_id}"}]
   */
  callVariables?: string;
  /**
   * @remarks
   * 外显规则；customerClidType=2时生效。Json格式，外显号码选择规则：默认区号，是否匹配省会等；如：{"defaultAreaCode":"010", "isMatchCapital":"1"}。不建议使用
   * 
   * @example
   * {"defaultAreaCode":"010", "isMatchCapital":"1"}
   */
  clidProperty?: string;
  /**
   * @remarks
   * 座席工号列表；callGroupType=1时必填。支持多个座席工号，多个之间使用英文逗号\\",\\"分隔注：一个座席只能在一个运行中的任务中
   * 
   * @example
   * 1111,2222
   */
  cnos?: string;
  /**
   * @remarks
   * 任务维度限制最大并发数，实际并发不会超过最大并发限制。type=1时，配置成0表示不限制，座席数量少于10时建议配置该参数
   * 
   * @example
   * 0
   */
  concurrency?: number;
  /**
   * @remarks
   * 客户侧外显规则；customerClidsCategory=1或2时生效。1.随机 2.按区号，默认随机。不建议使用
   * 
   * @example
   * 1
   */
  customerClidType?: number;
  /**
   * @remarks
   * 外显号码比例配置内容；customerClidsCategory=1且customerClidWeightFlag=1时生效。JsonArray格式 [{"number":"123,345","weight":"5"}, {"number":"567,789","weight":"5"}]，不建议使用
   * 
   * @example
   * [{"number":"123,345","weight":"5"}, {"number":"567,789","weight":"5"}]
   */
  customerClidWeight?: string;
  /**
   * @remarks
   * 外显号码比例配置开关；customerClidsCategory=1时生效。0.关闭 1.开启，默认关闭。不建议使用
   * 
   * @example
   * 0
   */
  customerClidWeightFlag?: number;
  /**
   * @remarks
   * 客户侧外显号码列表；customerClidsCategory=1或2时必填。支持多个，多个直接使用英文逗号\\",\\"分隔。不建议使用
   * 
   * @example
   * 64203667,23434294
   */
  customerClids?: string;
  /**
   * @remarks
   * 客户侧外显号码类型；1.外显固话 2.外显手机号 4.外显号码池 5.外显导航注：推荐使用外显导航，可以灵活调整和控制外显策略。其他类型将逐步下线
   * 
   * @example
   * 1
   */
  customerClidsCategory?: number;
  /**
   * @remarks
   * 客户侧外显号码池名称或外显导航标识；customerClidsCategory=4或5时必填。customerClidsCategory=4时customerClidsGroup传号码池名称。customerClidsCategory=5时customerClidsGroup传外显导航标识
   * 
   * @example
   * 示例值
   */
  customerClidsGroup?: string;
  /**
   * @remarks
   * 客户侧等待音；客户接听后呼叫座席，等待座席接听时播放的语音，默认为空白音。支持公共语音和企业语音，值为语音文件的path，如:60000011533526918819
   * 
   * @example
   * 60000011533526918819
   */
  customerMoh?: string;
  /**
   * @remarks
   * 客户超时时间；单位秒数，默认30秒，取值范围5 ~ 60
   * 
   * @example
   * 55
   */
  customerTimeout?: number;
  /**
   * @remarks
   * 客户侧提示音；客户接听后呼转座席前播放的语音，提示音播放完成后再找座席，默认无提示音。支持公共语音和企业语音，值为语音文件的path，如:60000011533526918819
   * 
   * @example
   * 60000011533526918819
   */
  customerVoice?: string;
  /**
   * @remarks
   * 任务描述；需进行UTF-8格式的URLEncode编码，长度小于200字
   * 
   * @example
   * 示例值示例值示例值
   */
  description?: string;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 定时完成时强制结束任务；autoStop=1时生效。0.关闭 1.开启，默认关闭。开启配置后，当任务到定时完成时间时无论任务中的号码是否已经呼完，均将任务状态设置为结束。适用于对数据有呼叫时间限制的场景。注：任务在结束状态时无法再次启动。
   * 
   * @example
   * 0
   */
  forceEndFlag?: number;
  /**
   * @remarks
   * 暂停后重新预热；0.关闭，1开启，默认开启，任务暂停后是否需要重新预热
   * 
   * @example
   * 1
   */
  isRewarm?: number;
  /**
   * @remarks
   * 语音导航Id；参数ivrId和ivrName二选一，同时传入时ivrId生效，在创建自动外呼任务时ivrId或ivrName必选其一。预测外呼使用场景：如果客户接听后未在特定时间内（默认2秒）找到可用座席，通话将溢出到语音导航继续排队找座席。同时支持在呼转座席，座席未接听时也溢出到语音导航，需要开启企业配置生效自动外呼使用场景：客户接听后，转到的语音导航
   * 
   * @example
   * 13
   */
  ivrId?: number;
  /**
   * @remarks
   * 语音导航名称；参数ivrId和ivrName二选一，同时传入时ivrId生效，在创建自动外呼任务时ivrId或ivrName必选其一。
   * 
   * @example
   * IvrName1
   */
  ivrName?: string;
  /**
   * @remarks
   * 座席最长等待时间；默认40秒，最小10，最大600，允许座席空闲的最大时间。任务执行过程中，如果座席平均空闲时间大于maxWaitTime，每次呼叫个数会增加
   * 
   * @example
   * 40
   */
  maxWaitTime?: number;
  /**
   * @remarks
   * 最小可用座席数；默认为10，取值范围1 ~ 10。任务内可用座席数小于当前值时，任务自动暂停，避免骚扰
   * 
   * @example
   * 10
   */
  minAvailableAgentCount?: number;
  /**
   * @remarks
   * 任务名称；需进行UTF-8格式的URLEncode编码，长度小于50字
   * 
   * @example
   * 示例值示例值
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * 超呼率；默认值为100，取值范围50～400
   * 
   * @example
   * 100
   */
  predictAdjust?: number;
  /**
   * @remarks
   * 骚扰率；默认值为1，取值范围为大于0，小于等于20，支持小数，精确到小数点两位。值越小呼叫的号码越少，值越大呼叫的号码越多，座席利用率越高
   * 
   * @example
   * 19.00
   */
  quotiety?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 重试策略；「基础模式」数据结构为Json格式```{"retry":2,"strategy":[{"round":1,"time":"1-1-1"},{"round":2,"time":"2-2-2"}]}```格式说明：retry是重试次数，round是第几次重试，time是第几次重试间隔的时间：1-1-1，第一个1是天，第二个1是小时，第三个1是分钟「高级模式」高级模式需要开启「号码状态识别」服务数据结构为JsonArray格式 ```[{"condition":{"sipCause":[710,719]},"retry":1,"sort":1,"strategy":[{"round":1,"time":"0-0-10"}]},{"condition":{"sipCause":[800]},"retry":1,"sort":2,"strategy":[{"round":2,"time":"0-0-10"}]}]```格式说明：condition是重试条件，sort是重试条件的顺序，其余字段与基础模式一致 注：基础模式和高级模式的区分根据传入的参数格式自动识别。基于首次呼叫时间重试时，每轮的重试时间必须大于上一轮的时间
   * 
   * @example
   * {"retry":2,"strategy":[{"round":1,"time":"1-1-1"},{"round":2,"time":"2-2-2"}]}
   */
  retryStrategy?: string;
  /**
   * @remarks
   * 任务仅当天生效；0.关闭 1.开启，删除待重试的数据和待呼叫的数据 2.开启，删除待重试的数据 3.开启，删除待呼叫的数据，默认关闭
   * 
   * @example
   * 0
   */
  retryStrategyOnlyToday?: number;
  /**
   * @remarks
   * 重试策略时间类型；配置重试策略时生效。 1.基于首次呼叫时间 2.基于上次呼叫时间，默认基于首次呼叫时间
   * 
   * @example
   * 1
   */
  retryStrategyTimeType?: number;
  /**
   * @remarks
   * 外呼任务Id
   * 
   * This parameter is required.
   * 
   * @example
   * 133224
   */
  taskId?: string;
  /**
   * @remarks
   * 禁呼时间；在特定的时间段内禁止呼叫。参数格式：时间条件编号。支持多个，多个使用英文","逗号隔开，如：9,22。注：时间条件列表可通过查询时间条件设置列表接口获取
   * 
   * @example
   * 9,22
   */
  timeStrategy?: string;
  /**
   * @remarks
   * 任务自定义字段。JsonArray格式；数组的每个元素只支持传递一组键值对，传递多组只取第一组，如 {"key", "value"}。 默认空值，示例：[{"name":"1234"},{"name1":"12345"}] 注：单个字段值的长度不能超过1000个字符
   * 
   * @example
   * [{"name":"1234"},{"name1":"12345"}]
   */
  userFields?: string;
  /**
   * @remarks
   * 任务预热时间；默认300秒, 取值范围60 ～ 600
   * 
   * @example
   * 370
   */
  warmUpDuration?: number;
  /**
   * @remarks
   * 座席整理时间；默认30秒，取值范围1～10800，整理时间会影响每次呼叫的个数，值越大，呼叫号码个数会减小
   * 
   * @example
   * 30
   */
  wrapup?: number;
  static names(): { [key: string]: string } {
    return {
      agentGroup: 'AgentGroup',
      agentTimeout: 'AgentTimeout',
      answerRate: 'AnswerRate',
      autoComplete: 'AutoComplete',
      autoStart: 'AutoStart',
      autoStartDay: 'AutoStartDay',
      autoStartTime: 'AutoStartTime',
      autoStop: 'AutoStop',
      autoStopDay: 'AutoStopDay',
      autoStopTime: 'AutoStopTime',
      autoTaskType: 'AutoTaskType',
      autoTriggerTimeStrategy: 'AutoTriggerTimeStrategy',
      callLimitStrategy: 'CallLimitStrategy',
      callPriorityStrategy: 'CallPriorityStrategy',
      callRouteStrategy: 'CallRouteStrategy',
      callStrategy: 'CallStrategy',
      callVariables: 'CallVariables',
      clidProperty: 'ClidProperty',
      cnos: 'Cnos',
      concurrency: 'Concurrency',
      customerClidType: 'CustomerClidType',
      customerClidWeight: 'CustomerClidWeight',
      customerClidWeightFlag: 'CustomerClidWeightFlag',
      customerClids: 'CustomerClids',
      customerClidsCategory: 'CustomerClidsCategory',
      customerClidsGroup: 'CustomerClidsGroup',
      customerMoh: 'CustomerMoh',
      customerTimeout: 'CustomerTimeout',
      customerVoice: 'CustomerVoice',
      description: 'Description',
      enterpriseId: 'EnterpriseId',
      forceEndFlag: 'ForceEndFlag',
      isRewarm: 'IsRewarm',
      ivrId: 'IvrId',
      ivrName: 'IvrName',
      maxWaitTime: 'MaxWaitTime',
      minAvailableAgentCount: 'MinAvailableAgentCount',
      name: 'Name',
      ownerId: 'OwnerId',
      predictAdjust: 'PredictAdjust',
      quotiety: 'Quotiety',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retryStrategy: 'RetryStrategy',
      retryStrategyOnlyToday: 'RetryStrategyOnlyToday',
      retryStrategyTimeType: 'RetryStrategyTimeType',
      taskId: 'TaskId',
      timeStrategy: 'TimeStrategy',
      userFields: 'UserFields',
      warmUpDuration: 'WarmUpDuration',
      wrapup: 'Wrapup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentGroup: 'string',
      agentTimeout: 'number',
      answerRate: 'number',
      autoComplete: 'number',
      autoStart: 'number',
      autoStartDay: 'string',
      autoStartTime: 'string',
      autoStop: 'number',
      autoStopDay: 'string',
      autoStopTime: 'string',
      autoTaskType: 'number',
      autoTriggerTimeStrategy: 'string',
      callLimitStrategy: 'string',
      callPriorityStrategy: 'string',
      callRouteStrategy: 'number',
      callStrategy: 'string',
      callVariables: 'string',
      clidProperty: 'string',
      cnos: 'string',
      concurrency: 'number',
      customerClidType: 'number',
      customerClidWeight: 'string',
      customerClidWeightFlag: 'number',
      customerClids: 'string',
      customerClidsCategory: 'number',
      customerClidsGroup: 'string',
      customerMoh: 'string',
      customerTimeout: 'number',
      customerVoice: 'string',
      description: 'string',
      enterpriseId: 'number',
      forceEndFlag: 'number',
      isRewarm: 'number',
      ivrId: 'number',
      ivrName: 'string',
      maxWaitTime: 'number',
      minAvailableAgentCount: 'number',
      name: 'string',
      ownerId: 'number',
      predictAdjust: 'number',
      quotiety: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retryStrategy: 'string',
      retryStrategyOnlyToday: 'number',
      retryStrategyTimeType: 'number',
      taskId: 'string',
      timeStrategy: 'string',
      userFields: 'string',
      warmUpDuration: 'number',
      wrapup: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

