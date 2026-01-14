// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentCallListResponseBodyModelList extends $dara.Model {
  /**
   * @remarks
   * 坐席分机
   * 
   * @example
   * a
   */
  agentExtension?: string;
  /**
   * @remarks
   * 分配坐席ID
   * 
   * @example
   * 1
   */
  agentId?: number;
  /**
   * @remarks
   * 坐席通话时长，单位：秒
   * 
   * @example
   * 1
   */
  agentSpeakingDuration?: number;
  /**
   * @remarks
   * 坐席通话时长，单位：大于1分钟，显示分钟秒，小于1分钟，显示秒
   * 
   * @example
   * 1
   */
  agentSpeakingTime?: string;
  /**
   * @remarks
   * 坐席标签
   * 
   * @example
   * a
   */
  agentTag?: string;
  /**
   * @remarks
   * 接通时间 格式：2019-11-23 14:47:06
   * 
   * @example
   * 2019-11-23 14:47:06
   */
  answerTime?: string;
  /**
   * @remarks
   * 导入号码时返回的批次号
   * 
   * @example
   * 1
   */
  batchId?: string;
  /**
   * @remarks
   * 开始通话时间, 格式：2019-11-23 14:47:06
   * 
   * @example
   * 2019-11-23 14:47:06
   */
  callBeginTime?: string;
  /**
   * @remarks
   * 外呼ID
   * 
   * @example
   * 1
   */
  callId?: string;
  /**
   * @remarks
   * 可选项：1001：坐席-人工外呼，1002：坐席-AI外呼-不转人工，1003：坐席-AI外呼-接通转人工，1004：坐席-AI外呼-智能转人工；
   * 
   * @example
   * 1001
   */
  callType?: number;
  /**
   * @remarks
   * 对话录音
   * 
   * @example
   * URL
   */
  chatRecord?: string;
  /**
   * @remarks
   * 挂断时间 格式：2019-11-23 14:47:06
   * 
   * @example
   * 2019-11-23 14:47:06
   */
  hangupTime?: string;
  /**
   * @remarks
   * 挂机方式  AI挂机1，坐席挂机2，客户挂机3
   * 
   * @example
   * 1
   */
  hangupType?: number;
  /**
   * @remarks
   * 导入时间,格式：2019-11-23 14:47:06
   * 
   * @example
   * 2019-11-23 14:47:06
   */
  importTime?: string;
  /**
   * @remarks
   * 个性标签
   * 
   * @example
   * 如投诉,非本人
   */
  individualTag?: string;
  /**
   * @remarks
   * 意向说明 如：确认本人,未承诺还款
   * 
   * @example
   * 如：确认本人
   */
  intentDescription?: string;
  /**
   * @remarks
   * 意向标签, 如“C”
   * 
   * @example
   * C
   */
  intentTag?: string;
  /**
   * @remarks
   * 拦截原因 当状态为已拦截时，可选值：黑名单拦截，灰名单拦截，异常号码拦截
   * 
   * @example
   * 黑名单拦截
   */
  interceptReason?: string;
  /**
   * @remarks
   * 回复关键词
   * 
   * @example
   * 如链接,利息
   */
  keywords?: string;
  /**
   * @remarks
   * 外呼号码
   * 
   * @example
   * 1
   */
  number?: string;
  /**
   * @remarks
   * 外呼号码MD5
   * 
   * @example
   * 1
   */
  numberMD5?: string;
  /**
   * @remarks
   * 导入号码时的参数值
   * 
   * @example
   * {"电话号码":"13100000000"}
   */
  properties?: string;
  /**
   * @remarks
   * 人工备注信息
   * 
   * @example
   * abcd
   */
  remark?: string;
  /**
   * @remarks
   * 振铃时长 单位：毫秒
   * 
   * @example
   * 1
   */
  ringTime?: number;
  /**
   * @remarks
   * 挂机短信 1:发送，2:不发送
   * 
   * @example
   * 1
   */
  sms?: string;
  /**
   * @remarks
   * 通话时长 单位：秒
   * 
   * @example
   * 1
   */
  speakingDuration?: number;
  /**
   * @remarks
   * 通话时长 单位：大于1分钟，显示分钟秒，小于1分钟，显示秒
   * 
   * @example
   * 1
   */
  speakingTime?: string;
  /**
   * @remarks
   * 对话轮次
   * 
   * @example
   * 1
   */
  speakingTurns?: string;
  /**
   * @remarks
   * 外呼状态编码
   * 
   * @example
   * 1
   */
  statusCode?: number;
  /**
   * @remarks
   * 外呼状态，如“已接听”“拒接”，转外呼状态编码与描述对应 1-已接听,2-关机
   * 
   * @example
   * 已接听
   */
  statusDescription?: string;
  /**
   * @remarks
   * 用户自定义标签
   * 
   * @example
   * 1
   */
  tag?: string;
  /**
   * @remarks
   * 外呼任务ID
   * 
   * @example
   * 1
   */
  taskId?: number;
  /**
   * @remarks
   * AI话术ID
   * 
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * 转人工状态 0-未触发
   * 
   * @example
   * 未触发
   */
  transferStatus?: string;
  /**
   * @remarks
   * 转人工状态编码
   * 
   * @example
   * 0
   */
  transferStatusCode?: number;
  /**
   * @remarks
   * 转接人工时间
   * 
   * @example
   * 2019-01-09 14:14:19
   */
  transferTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentExtension: 'AgentExtension',
      agentId: 'AgentId',
      agentSpeakingDuration: 'AgentSpeakingDuration',
      agentSpeakingTime: 'AgentSpeakingTime',
      agentTag: 'AgentTag',
      answerTime: 'AnswerTime',
      batchId: 'BatchId',
      callBeginTime: 'CallBeginTime',
      callId: 'CallId',
      callType: 'CallType',
      chatRecord: 'ChatRecord',
      hangupTime: 'HangupTime',
      hangupType: 'HangupType',
      importTime: 'ImportTime',
      individualTag: 'IndividualTag',
      intentDescription: 'IntentDescription',
      intentTag: 'IntentTag',
      interceptReason: 'InterceptReason',
      keywords: 'Keywords',
      number: 'Number',
      numberMD5: 'NumberMD5',
      properties: 'Properties',
      remark: 'Remark',
      ringTime: 'RingTime',
      sms: 'Sms',
      speakingDuration: 'SpeakingDuration',
      speakingTime: 'SpeakingTime',
      speakingTurns: 'SpeakingTurns',
      statusCode: 'StatusCode',
      statusDescription: 'StatusDescription',
      tag: 'Tag',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      transferStatus: 'TransferStatus',
      transferStatusCode: 'TransferStatusCode',
      transferTime: 'TransferTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentExtension: 'string',
      agentId: 'number',
      agentSpeakingDuration: 'number',
      agentSpeakingTime: 'string',
      agentTag: 'string',
      answerTime: 'string',
      batchId: 'string',
      callBeginTime: 'string',
      callId: 'string',
      callType: 'number',
      chatRecord: 'string',
      hangupTime: 'string',
      hangupType: 'number',
      importTime: 'string',
      individualTag: 'string',
      intentDescription: 'string',
      intentTag: 'string',
      interceptReason: 'string',
      keywords: 'string',
      number: 'string',
      numberMD5: 'string',
      properties: 'string',
      remark: 'string',
      ringTime: 'number',
      sms: 'string',
      speakingDuration: 'number',
      speakingTime: 'string',
      speakingTurns: 'string',
      statusCode: 'number',
      statusDescription: 'string',
      tag: 'string',
      taskId: 'number',
      templateId: 'number',
      transferStatus: 'string',
      transferStatusCode: 'number',
      transferTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentCallListResponseBodyModel extends $dara.Model {
  list?: AgentCallListResponseBodyModelList[];
  /**
   * @example
   * 44
   */
  pageNo?: number;
  /**
   * @example
   * 40
   */
  pageSize?: number;
  /**
   * @example
   * 27
   */
  totalCount?: number;
  /**
   * @example
   * 49
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': AgentCallListResponseBodyModelList },
      pageNo: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentCallListResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 60
   */
  code?: number;
  /**
   * @example
   * 示例值
   */
  message?: string;
  model?: AgentCallListResponseBodyModel;
  /**
   * @example
   * 示例值
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
   * @example
   * 89
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      message: 'string',
      model: AgentCallListResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
      timestamp: 'number',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

