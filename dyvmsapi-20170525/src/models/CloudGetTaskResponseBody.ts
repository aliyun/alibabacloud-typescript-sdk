// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudGetTaskResponseBodyDataTaskProperty extends $dara.Model {
  /**
   * @remarks
   * adjustStep
   * 
   * @example
   * 5
   */
  adjustStep?: string;
  /**
   * @remarks
   * 座席超时时间，单位秒
   * 
   * @example
   * 10
   */
  agentTimeout?: string;
  /**
   * @remarks
   * 已废弃。座席利用率
   * 
   * @example
   * deprecated
   */
  agentUtilization?: string;
  /**
   * @remarks
   * 初始化预计客户接通率
   * 
   * @example
   * 100
   */
  answerRate?: string;
  /**
   * @remarks
   * 自动完成，0.关闭 1.开启
   * 
   * @example
   * 0
   */
  autoComplete?: string;
  /**
   * @remarks
   * 定时开始，0.关闭 1.开启
   * 
   * @example
   * 0
   */
  autoStart?: string;
  /**
   * @remarks
   * 定时开始日期，格式：yyyy-MM-dd，如：2017-02-11
   * 
   * @example
   * 2026-02-11
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
  autoStop?: string;
  /**
   * @remarks
   * 定时完成日期，格式：yyyy-MM-dd，如：2017-02-11
   * 
   * @example
   * 2026-02-11
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
   * 0
   */
  autoTaskType?: string;
  /**
   * @remarks
   * 间隔呼叫时间段，呼叫的时间段配置。参数格式：时间条件编号。支持多个，多个使用英文","逗号隔开，如：9,22。
   * 
   * @example
   * 9,22
   */
  autoTriggerTimeStrategy?: string;
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
   * 座席分配规则，1.随机 2.顺序 3.座席未进线最大时（从上一次呼叫结束到当前的总时长） 4.座席状态[空闲]最长时长（座席最近一次切换为空闲状态的持续时长）
   * 
   * @example
   * 2
   */
  callStrategy?: string;
  /**
   * @remarks
   * 座席通道变量，JsonArray格式[{"key1":"value1"},{"key2":"value2"}]
   * 
   * @example
   * [{"key1":"value1"},{"key2":"value2"}]
   */
  callVariables?: string;
  /**
   * @remarks
   * 已废弃。给企业推送任务状态的URL地址
   * 
   * @example
   * deprecated
   */
  callbackUrl?: string;
  /**
   * @remarks
   * 已废弃。热线号码组
   * 
   * @example
   * deprecated
   */
  clidGroup?: string;
  /**
   * @remarks
   * 外显规则，Json格式，外显号码选择规则：默认区号，是否匹配省会等；如：{"defaultAreaCode":"010", "isMatchCapital":"1"}
   * 
   * @example
   * {"defaultAreaCode":"010", "isMatchCapital":"1"}
   */
  clidProperty?: string;
  /**
   * @remarks
   * 座席工号列表
   * 
   * @example
   * 111,222
   */
  cnos?: string;
  /**
   * @remarks
   * 最大并发限制
   * 
   * @example
   * 0
   */
  concurrency?: string;
  /**
   * @remarks
   * 任务创建时间 ，格式为： yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2025-05-10 14:07:22
   */
  createTime?: string;
  /**
   * @remarks
   * 已废弃。推送重试次数 最大5次
   * 
   * @example
   * 5
   */
  curlRetryTimes?: string;
  /**
   * @remarks
   * 客户侧外显规则，1.随机 2.按区号
   * 
   * @example
   * 2
   */
  customerClidType?: string;
  /**
   * @remarks
   * 外显号码比例配置内容，JsonArray格式[{"number":"123,345","weight":"5"},{"number":"567,789","weight":"5"}]
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
  customerClidWeightFlag?: string;
  /**
   * @remarks
   * 客户侧外显号码列表
   * 
   * @example
   * ""
   */
  customerClids?: string;
  /**
   * @remarks
   * 客户侧外显号码类型，1.外显固话 2.外显手机号 4.外显号码池 5.外显导航
   * 
   * @example
   * 1
   */
  customerClidsCategory?: string;
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
   * 30
   */
  customerTimeout?: string;
  /**
   * @remarks
   * 客户侧提示音
   * 
   * @example
   * 示例值
   */
  customerVoice?: string;
  /**
   * @remarks
   * 任务描述
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * 企业编号
   * 
   * @example
   * 7000002
   */
  enterpriseId?: string;
  /**
   * @remarks
   * 定时完成时强制结束任务。开启配置后，当任务到定时完成时间时无论任务中的号码是否已经呼完，均将任务状态设置为结束。适用于对数据有呼叫时间限制的场景。注：任务在结束状态时无法再次启动。
   * 
   * @example
   * 0
   */
  forceEndFlag?: string;
  /**
   * @remarks
   * 外呼任务Id
   * 
   * @example
   * 11059
   */
  id?: string;
  /**
   * @remarks
   * 随机呼叫，0.关闭 1.开启
   * 
   * @example
   * 0
   */
  isRandom?: string;
  /**
   * @remarks
   * 暂停后重新预热，0.关闭，1开启
   * 
   * @example
   * 0
   */
  isRewarm?: string;
  /**
   * @remarks
   * 语音导航Id
   * 
   * @example
   * 33
   */
  ivrId?: string;
  /**
   * @remarks
   * 座席最大等待时间，单位秒
   * 
   * @example
   * 10
   */
  maxWaitTime?: string;
  /**
   * @remarks
   * 最小可用座席数
   * 
   * @example
   * 1
   */
  minAvailableAgentCount?: string;
  /**
   * @remarks
   * 任务名称
   * 
   * @example
   * name1
   */
  name?: string;
  /**
   * @example
   * ""
   */
  overCallLimitCnos?: string;
  /**
   * @remarks
   * 任务结束时间
   * 
   * @example
   * 示例值示例值示例值
   */
  overTime?: string;
  /**
   * @remarks
   * 任务暂停时长(针对自动启动时间段) 单位分钟
   * 
   * @example
   * 0
   */
  pauseDuration?: string;
  /**
   * @remarks
   * 任务暂停时间点
   * 
   * @example
   * 2026-04-14 16:51:11
   */
  pauseTime?: string;
  /**
   * @remarks
   * 超呼率
   * 
   * @example
   * 100
   */
  predictAdjust?: string;
  /**
   * @remarks
   * 骚扰率，支持小数，精确到小数点两位
   * 
   * @example
   * 3.0
   */
  quotiety?: string;
  /**
   * @remarks
   * 重试策略，「基础模式」数据结构为Json格式```{"retry":2,"strategy":[{"round":1,"time":"1-1-1"},{"round":2,"time":"2-2-2"}]}```格式说明：retry是重试次数，round是第几次重试，time是第几次重试间隔的时间：1-1-1，第一个1是天，第二个1是小时，第三个1是分钟「高级模式」高级模式需要开启「号码状态识别」服务后。目前只支持「自动外呼」任务模式。数据结构为JsonArray格式 ```[{"condition":{"sipCause":[710,719]},"retry":1,"sort":1,"strategy":[{"round":1,"time":"0-0-10"}]},{"condition":{"sipCause":[800]},"retry":1,"sort":2,"strategy":[{"round":2,"time":"0-0-10"}]}]```格式说明：condition是重试条件，sort是重试条件的顺序，其余字段与基础模式一致
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
   * 0
   */
  retryStrategyOnlyToday?: string;
  /**
   * @remarks
   * 已废弃
   * 
   * @example
   * deprecated
   */
  standbyCnos?: string;
  /**
   * @remarks
   * 任务开始时间
   * 
   * @example
   * 2025-05-10 14:11:15
   */
  startTime?: string;
  /**
   * @remarks
   * 任务状态，0.初始 1.运行中 2.暂停 3.结束
   * 
   * @example
   * 3
   */
  status?: string;
  /**
   * @remarks
   * 任务状态描述
   * 
   * @example
   * 示例值示例值
   */
  statusDescription?: string;
  /**
   * @remarks
   * 已废弃。任务级呼叫属性 json格式{"key1":"value1","key2":"value2"}，仅做呼叫控制用，不放通道变量
   * 
   * @example
   * deprecated
   */
  taskFields?: string;
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
  type?: string;
  /**
   * @remarks
   * 任务自定义字段，JsonArray格式[{"key1":"value1"},{"key2":"value2"}]
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
   * 300
   */
  warmUpDuration?: string;
  /**
   * @remarks
   * 座席整理时间，单位秒
   * 
   * @example
   * 30
   */
  wrapup?: string;
  static names(): { [key: string]: string } {
    return {
      adjustStep: 'AdjustStep',
      agentTimeout: 'AgentTimeout',
      agentUtilization: 'AgentUtilization',
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
      callStrategy: 'CallStrategy',
      callVariables: 'CallVariables',
      callbackUrl: 'CallbackUrl',
      clidGroup: 'ClidGroup',
      clidProperty: 'ClidProperty',
      cnos: 'Cnos',
      concurrency: 'Concurrency',
      createTime: 'CreateTime',
      curlRetryTimes: 'CurlRetryTimes',
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
      isRandom: 'IsRandom',
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
      standbyCnos: 'StandbyCnos',
      startTime: 'StartTime',
      status: 'Status',
      statusDescription: 'StatusDescription',
      taskFields: 'TaskFields',
      timeStrategy: 'TimeStrategy',
      type: 'Type',
      userFields: 'UserFields',
      warmUpDuration: 'WarmUpDuration',
      wrapup: 'Wrapup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustStep: 'string',
      agentTimeout: 'string',
      agentUtilization: 'string',
      answerRate: 'string',
      autoComplete: 'string',
      autoStart: 'string',
      autoStartDay: 'string',
      autoStartTime: 'string',
      autoStop: 'string',
      autoStopDay: 'string',
      autoStopTime: 'string',
      autoTaskType: 'string',
      autoTriggerTimeStrategy: 'string',
      callLimitStrategy: 'string',
      callStrategy: 'string',
      callVariables: 'string',
      callbackUrl: 'string',
      clidGroup: 'string',
      clidProperty: 'string',
      cnos: 'string',
      concurrency: 'string',
      createTime: 'string',
      curlRetryTimes: 'string',
      customerClidType: 'string',
      customerClidWeight: 'string',
      customerClidWeightFlag: 'string',
      customerClids: 'string',
      customerClidsCategory: 'string',
      customerMoh: 'string',
      customerTimeout: 'string',
      customerVoice: 'string',
      description: 'string',
      enterpriseId: 'string',
      forceEndFlag: 'string',
      id: 'string',
      isRandom: 'string',
      isRewarm: 'string',
      ivrId: 'string',
      maxWaitTime: 'string',
      minAvailableAgentCount: 'string',
      name: 'string',
      overCallLimitCnos: 'string',
      overTime: 'string',
      pauseDuration: 'string',
      pauseTime: 'string',
      predictAdjust: 'string',
      quotiety: 'string',
      retryStrategy: 'string',
      retryStrategyOnlyToday: 'string',
      standbyCnos: 'string',
      startTime: 'string',
      status: 'string',
      statusDescription: 'string',
      taskFields: 'string',
      timeStrategy: 'string',
      type: 'string',
      userFields: 'string',
      warmUpDuration: 'string',
      wrapup: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudGetTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 任务配置信息
   */
  taskProperty?: CloudGetTaskResponseBodyDataTaskProperty;
  static names(): { [key: string]: string } {
    return {
      taskProperty: 'TaskProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskProperty: CloudGetTaskResponseBodyDataTaskProperty,
    };
  }

  validate() {
    if(this.taskProperty && typeof (this.taskProperty as any).validate === 'function') {
      (this.taskProperty as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudGetTaskResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudGetTaskResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 7BF47617-7851-48F7-A3A1-2021342A78E2
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
      data: CloudGetTaskResponseBodyData,
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

