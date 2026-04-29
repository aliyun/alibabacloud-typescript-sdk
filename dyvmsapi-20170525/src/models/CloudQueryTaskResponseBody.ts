// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudQueryTaskResponseBodyDataTaskProperties extends $dara.Model {
  /**
   * @remarks
   * 外呼组号
   * 
   * @example
   * WH124
   */
  agentGroup?: string;
  /**
   * @remarks
   * 座席超时时间，单位秒
   * 
   * @example
   * 10
   */
  agentTimeout?: number;
  /**
   * @remarks
   * 初始化预计客户接通率
   * 
   * @example
   * 50
   */
  answerRate?: number;
  /**
   * @remarks
   * 自动完成，0.关闭 1.开启
   * 
   * @example
   * 0
   */
  autoComplete?: number;
  /**
   * @remarks
   * 定时开始，0.关闭 1.开启
   * 
   * @example
   * 0
   */
  autoStart?: number;
  /**
   * @remarks
   * 定时开始日期，格式：yyyy-MM-dd，如：2017-02-11
   * 
   * @example
   * 2017-02-11
   */
  autoStartDay?: string;
  /**
   * @remarks
   * 定时开始时间，格式：HH:mm:ss，如：08:00:00
   * 
   * @example
   * 08:00:00
   */
  autoStartTime?: string;
  /**
   * @remarks
   * 定时完成，0.关闭 1.开启
   * 
   * @example
   * 0
   */
  autoStop?: number;
  /**
   * @remarks
   * 定时完成日期，格式：yyyy-MM-dd，如：2017-02-11
   * 
   * @example
   * 2017-02-11
   */
  autoStopDay?: string;
  /**
   * @remarks
   * 定时完成时间，格式：HH:mm:ss，如：17:00:00
   * 
   * @example
   * 17:00:00
   */
  autoStopTime?: string;
  /**
   * @remarks
   * 呼叫方式，0.连续呼叫 1.间隔呼叫
   * 
   * @example
   * 50
   */
  autoTaskType?: number;
  /**
   * @remarks
   * 间隔呼叫时间段，呼叫的时间段配置。参数格式：时间条件编号。支持多个，多个使用英文","逗号隔开，如：9,22
   * 
   * @example
   * 9,22
   */
  autoTriggerTimeStrategy?: string;
  /**
   * @remarks
   * 指定座席方式，1.座席工号列表 2.外呼组
   * 
   * @example
   * 1
   */
  callGroupType?: number;
  /**
   * @remarks
   * 座席当日接听数限制，JsonArray格式[{"cnos":["2000","2001"],"limit":"5"}]
   * 
   * @example
   * [{"cnos":["2000","2001"],"limit":"5"}]
   */
  callLimitStrategy?: string;
  /**
   * @remarks
   * 呼叫顺序，数据结构为Json格式```{"strategy":[{"sort":1,"type":"retryCall", "desc":0},{"sort":2,"type":"firstCall","orderType":0}]}```，格式说明：sort是重试号码和未呼叫号码的呼叫顺序 ，type：retryCall重试号码、firstCall未呼叫号码，当type=retryCall，desc：0.优先呼叫待重呼轮次数值较小的号码，即轮次靠前（如第1轮、第2轮）的号码先被呼叫 1.优先呼叫待重呼轮次数值较大的号码，即轮次靠后（如第5轮、第4轮）的号码先被呼叫，当type=firstCall时，orderType：随机呼叫，0顺序(优先级) 1随机 2顺序(导入时间)
   * 
   * @example
   * {"strategy":[{"sort":1,"type":"retryCall", "desc":0},{"sort":2,"type":"firstCall","orderType":0}]}
   */
  callPriorityStrategy?: string;
  /**
   * @remarks
   * 呼叫流转模式， 1.直连座席 2.AI转人工 直连座席模式：客户接听后直接分配座席，无空闲座席可溢出语音导航（需配置语音导航），保障高优先级客户直连体验 AI转人工：客户接入后，优先进入语音导航中配置的智能体机器人，按交互结果决定是否转接座席，提升自动化覆盖率，降低人工成本
   * 
   * @example
   * 1
   */
  callRouteStrategy?: number;
  /**
   * @remarks
   * 座席分配规则，1.随机 2.顺序 3.座席未进线最大时（从上一次呼叫结束到当前的总时长） 4.座席状态[空闲]最长时长（座席最近一次切换为空闲状态的持续时长）
   * 
   * @example
   * 1
   */
  callStrategy?: number;
  /**
   * @remarks
   * 座席通道变量
   * 
   * @example
   * [{"key1":"value1"},{"key2":"value2"}]
   */
  callVariables?: string;
  /**
   * @remarks
   * 外显规则，Json格式，外显号码选择规则：默认区号，是否匹配省会等；如：{"defaultAreaCode":"010", "isMatchCapital":"1"}
   * 
   * @example
   * 示例值
   */
  clidProperty?: string;
  /**
   * @remarks
   * 座席工号列表
   * 
   * @example
   * 1111,2222
   */
  cnos?: string;
  /**
   * @remarks
   * 最大并发限制
   * 
   * @example
   * 3
   */
  concurrency?: number;
  /**
   * @remarks
   * 任务创建时间 ，格式为： yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2025-10-12 18:03:14
   */
  createTime?: string;
  /**
   * @remarks
   * 客户侧外显规则，1.随机 2.按区号
   * 
   * @example
   * 1
   */
  customerClidType?: number;
  /**
   * @remarks
   * 外显号码比例配置内容
   * 
   * @example
   * [{"number":"123,345","weight":"5"},{"number":"567,789","weight":"5"}]
   */
  customerClidWeight?: string;
  /**
   * @remarks
   * 外显号码比例配置开关，0.关闭 1.开启
   * 
   * @example
   * 0
   */
  customerClidWeightFlag?: number;
  /**
   * @remarks
   * 客户侧外显号码列表
   * 
   * @example
   * 02138276106
   */
  customerClids?: string;
  /**
   * @remarks
   * 客户侧外显号码类型，1.外显固话 2.外显手机号  4.外显号码池 5.外显导航
   * 
   * @example
   * 1
   */
  customerClidsCategory?: number;
  /**
   * @remarks
   * 客户侧等待音
   * 
   * @example
   * no
   */
  customerMoh?: string;
  /**
   * @remarks
   * 客户超时时间，单位秒
   * 
   * @example
   * 17
   */
  customerTimeout?: number;
  /**
   * @remarks
   * 客户侧提示音
   * 
   * @example
   * 示例值示例值
   */
  customerVoice?: string;
  /**
   * @remarks
   * 任务描述
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * 呼叫中心Id
   * 
   * @example
   * 7000002
   */
  enterpriseId?: string;
  /**
   * @remarks
   * 定时完成时强制结束任务，开启配置后，当任务到定时完成时间时无论任务中的号码是否已经呼完，均将任务状态设置为结束。适用于对数据有呼叫时间限制的场景。注：任务在结束状态时无法再次启动。 0：否，1：是
   * 
   * @example
   * 0
   */
  forceEndFlag?: number;
  /**
   * @remarks
   * 外呼任务Id
   * 
   * @example
   * 59
   */
  id?: number;
  /**
   * @remarks
   * 暂停后重新预热，0.关闭，1开启
   * 
   * @example
   * 0
   */
  isRewarm?: number;
  /**
   * @remarks
   * 语音导航Id，预测外呼使用场景：直连座席模式下如果客户接听后未在特定时间内（默认2秒）找到可用座席，通话将溢出到语音导航继续排队找座席。同时支持在呼转座席，座席未接听时也溢出到语音导航，需要开启企业配置生效。AI转人工模式下，呼叫先转到语音导航 自动外呼使用场景：客户接听后，转到的语音导航
   * 
   * @example
   * 133
   */
  ivrId?: number;
  /**
   * @remarks
   * 座席最大等待时间，单位秒
   * 
   * @example
   * 34
   */
  maxWaitTime?: number;
  /**
   * @remarks
   * 最小可用座席数
   * 
   * @example
   * 2
   */
  minAvailableAgentCount?: number;
  /**
   * @remarks
   * 任务名称
   * 
   * @example
   * name1
   */
  name?: string;
  /**
   * @remarks
   * 超过呼叫限制的座席
   * 
   * @example
   * 0
   */
  overCallLimitCnos?: string;
  /**
   * @remarks
   * 任务结束时间
   * 
   * @example
   * 示例值示例值
   */
  overTime?: string;
  /**
   * @remarks
   * 任务暂停时长(针对自动启动时间段) 单位分钟
   * 
   * @example
   * 1
   */
  pauseDuration?: number;
  /**
   * @remarks
   * 任务暂停时间点
   * 
   * @example
   * 2026-04-20 11:00:00
   */
  pauseTime?: string;
  /**
   * @remarks
   * 超呼率
   * 
   * @example
   * 60
   */
  predictAdjust?: number;
  /**
   * @remarks
   * 骚扰率，支持小数，精确到小数点两位
   * 
   * @example
   * 1.0
   */
  quotiety?: number;
  /**
   * @remarks
   * 重试策略， 「基础模式」 数据结构为Json格式```{"retry":2,"strategy":[{"round":1,"time":"1-1-1"},{"round":2,"time":"2-2-2"}]}``` 格式说明：retry是重试次数，round是第几次重试，time是第几次重试间隔的时间：1-1-1，第一个1是天，第二个1是小时，第三个1是分钟 「高级模式」 高级模式需要开启「号码状态识别」服务后。目前只支持「自动外呼」任务模式。 数据结构为JsonArray格式 ```[{"condition":{"sipCause":[710,719]},"retry":1,"sort":1,"strategy":[{"round":1,"time":"0-0-10"}]},{"condition":{"sipCause":[800]},"retry":1,"sort":2,"strategy":[{"round":2,"time":"0-0-10"}]}]``` 格式说明：condition是重试条件，sort是重试条件的顺序，其余字段与基础模式一致
   * 
   * @example
   * {"retry":2,"strategy":[{"round":1,"time":"1-1-1"},{"round":2,"time":"2-2-2"}]}
   */
  retryStrategy?: string;
  /**
   * @remarks
   * 重试仅当天生效，0.关闭 1.开启，删除待重试的数据和待呼叫的数据 2.开启，删除待重试的数据 3.开启，删除待呼叫的数据
   * 
   * @example
   * 4
   */
  retryStrategyOnlyToday?: number;
  /**
   * @remarks
   * 重试策略时间类型，1.基于首次呼叫时间 2.基于上次呼叫时间
   * 
   * @example
   * 1
   */
  retryStrategyTimeType?: number;
  /**
   * @remarks
   * 任务开始时间
   * 
   * @example
   * 09:00
   */
  startTime?: string;
  /**
   * @remarks
   * 任务状态，0.初始 1.运行中 2.暂停 3.结束
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * 任务状态描述
   * 
   * @example
   * ""
   */
  statusDescription?: string;
  /**
   * @remarks
   * 任务状态变更类型，0.系统变更 1.人为变更
   * 
   * @example
   * 0
   */
  statusTriggerType?: number;
  /**
   * @remarks
   * 禁止呼叫时间限制，在特定的时间段内禁止呼叫。参数格式：时间条件编号。支持多个，多个使用英文","逗号隔开，如：9,22。
   * 
   * @example
   * 9,22
   */
  timeStrategy?: string;
  /**
   * @remarks
   * 任务类型，1.预测外呼任务 2.自动外呼任务
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * 任务自定义字段
   * 
   * @example
   * [{"key1":"value1"},{"key2":"value2"}]
   */
  userFields?: string;
  /**
   * @remarks
   * 任务预热时间，单位秒
   * 
   * @example
   * 9
   */
  warmUpDuration?: number;
  /**
   * @remarks
   * 座席整理时间，单位秒
   * 
   * @example
   * 13
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
      callGroupType: 'CallGroupType',
      callLimitStrategy: 'CallLimitStrategy',
      callPriorityStrategy: 'CallPriorityStrategy',
      callRouteStrategy: 'CallRouteStrategy',
      callStrategy: 'CallStrategy',
      callVariables: 'CallVariables',
      clidProperty: 'ClidProperty',
      cnos: 'Cnos',
      concurrency: 'Concurrency',
      createTime: 'CreateTime',
      customerClidType: 'CustomerClidType',
      customerClidWeight: 'CustomerClidWeight',
      customerClidWeightFlag: 'CustomerClidWeightFlag',
      customerClids: 'CustomerClids',
      customerClidsCategory: 'CustomerClidsCategory',
      customerMoh: 'CustomerMoh',
      customerTimeout: 'CustomerTimeout',
      customerVoice: 'CustomerVoice',
      description: 'Description',
      enterpriseId: 'EnterpriseId',
      forceEndFlag: 'ForceEndFlag',
      id: 'Id',
      isRewarm: 'IsRewarm',
      ivrId: 'IvrId',
      maxWaitTime: 'MaxWaitTime',
      minAvailableAgentCount: 'MinAvailableAgentCount',
      name: 'Name',
      overCallLimitCnos: 'OverCallLimitCnos',
      overTime: 'OverTime',
      pauseDuration: 'PauseDuration',
      pauseTime: 'PauseTime',
      predictAdjust: 'PredictAdjust',
      quotiety: 'Quotiety',
      retryStrategy: 'RetryStrategy',
      retryStrategyOnlyToday: 'RetryStrategyOnlyToday',
      retryStrategyTimeType: 'RetryStrategyTimeType',
      startTime: 'StartTime',
      status: 'Status',
      statusDescription: 'StatusDescription',
      statusTriggerType: 'StatusTriggerType',
      timeStrategy: 'TimeStrategy',
      type: 'Type',
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
      callGroupType: 'number',
      callLimitStrategy: 'string',
      callPriorityStrategy: 'string',
      callRouteStrategy: 'number',
      callStrategy: 'number',
      callVariables: 'string',
      clidProperty: 'string',
      cnos: 'string',
      concurrency: 'number',
      createTime: 'string',
      customerClidType: 'number',
      customerClidWeight: 'string',
      customerClidWeightFlag: 'number',
      customerClids: 'string',
      customerClidsCategory: 'number',
      customerMoh: 'string',
      customerTimeout: 'number',
      customerVoice: 'string',
      description: 'string',
      enterpriseId: 'string',
      forceEndFlag: 'number',
      id: 'number',
      isRewarm: 'number',
      ivrId: 'number',
      maxWaitTime: 'number',
      minAvailableAgentCount: 'number',
      name: 'string',
      overCallLimitCnos: 'string',
      overTime: 'string',
      pauseDuration: 'number',
      pauseTime: 'string',
      predictAdjust: 'number',
      quotiety: 'number',
      retryStrategy: 'string',
      retryStrategyOnlyToday: 'number',
      retryStrategyTimeType: 'number',
      startTime: 'string',
      status: 'number',
      statusDescription: 'string',
      statusTriggerType: 'number',
      timeStrategy: 'string',
      type: 'number',
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

export class CloudQueryTaskResponseBodyData extends $dara.Model {
  taskProperties?: CloudQueryTaskResponseBodyDataTaskProperties[];
  static names(): { [key: string]: string } {
    return {
      taskProperties: 'TaskProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskProperties: { 'type': 'array', 'itemType': CloudQueryTaskResponseBodyDataTaskProperties },
    };
  }

  validate() {
    if(Array.isArray(this.taskProperties)) {
      $dara.Model.validateArray(this.taskProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudQueryTaskResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudQueryTaskResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CloudQueryTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

