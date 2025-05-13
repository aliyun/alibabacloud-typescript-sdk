// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskCallListResponseBodyModelList extends $dara.Model {
  /**
   * @remarks
   * 加微
   * 
   * @example
   * 0
   */
  addWx?: number;
  /**
   * @remarks
   * 加微进度
   * 
   * @example
   * 示例值示例值
   */
  addWxStatus?: string;
  /**
   * @remarks
   * 坐席分机
   * 
   * @example
   * 112
   */
  agentExtension?: string;
  /**
   * @remarks
   * 坐席ID
   * 
   * @example
   * 87
   */
  agentId?: number;
  /**
   * @remarks
   * 人工通话时长
   * 
   * @example
   * 98
   */
  agentSpeakingDuration?: number;
  /**
   * @remarks
   * 人工通话时长
   * 
   * @example
   * 示例值示例值
   */
  agentSpeakingTime?: string;
  /**
   * @remarks
   * 坐席标签
   * 
   * @example
   * A
   */
  agentTag?: string;
  /**
   * @remarks
   * 是否接通重呼
   * 
   * @example
   * 24
   */
  answerRecall?: number;
  /**
   * @remarks
   * 接通时间
   * 
   * @example
   * 2022-01-26 18:58:25
   */
  answerTime?: string;
  /**
   * @remarks
   * 批次ID
   * 
   * @example
   * 1
   */
  batchId?: string;
  /**
   * @remarks
   * 开始通话时间
   * 
   * @example
   * 2022-01-26 18:58:25
   */
  callBeginTime?: string;
  /**
   * @remarks
   * 外呼ID
   * 
   * @example
   * 9197ed9e-ceda-42a5-b683-823b23ef208e
   */
  callId?: string;
  /**
   * @remarks
   * 呼叫次数
   * 
   * @example
   * 1
   */
  callTimes?: string;
  /**
   * @remarks
   * 外呼类型
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
   * 示例值示例值
   */
  chatRecord?: string;
  /**
   * @remarks
   * 外呼网关
   * 
   * @example
   * 123
   */
  gateway?: string;
  /**
   * @remarks
   * 挂断时间
   * 
   * @example
   * 2022-01-26 18:58:25
   */
  hangupTime?: string;
  /**
   * @remarks
   * 挂机方式
   * 
   * @example
   * 1
   */
  hangupType?: number;
  /**
   * @remarks
   * 导入时间
   * 
   * @example
   * 2022-01-26 18:58:25
   */
  importTime?: string;
  /**
   * @remarks
   * 个性标签
   * 
   * @example
   * A
   */
  individualTag?: string;
  /**
   * @remarks
   * 意向说明
   * 
   * @example
   * 示例值示例值示例值
   */
  intentDescription?: string;
  /**
   * @remarks
   * 意向标签
   * 
   * @example
   * “C”
   */
  intentTag?: string;
  /**
   * @remarks
   * 拦截原因
   * 
   * @example
   * 示例值
   */
  interceptReason?: string;
  /**
   * @remarks
   * 回复关键词
   * 
   * @example
   * 示例值示例值
   */
  keywords?: string;
  /**
   * @remarks
   * 外呼号码
   * 
   * @example
   * 138*****123
   */
  number?: string;
  /**
   * @remarks
   * 外呼号码MD5
   * 
   * @example
   * 75916b635568954583783d
   */
  numberMD5?: string;
  /**
   * @remarks
   * 参数
   * 
   * @example
   * 示例值示例值
   */
  properties?: string;
  /**
   * @remarks
   * 备注
   * 
   * @example
   * 示例值示例值
   */
  remark?: string;
  /**
   * @remarks
   * 振铃时长
   * 
   * @example
   * 66
   */
  ringTime?: number;
  /**
   * @remarks
   * 挂机短信
   * 
   * @example
   * 示例值
   */
  sms?: string;
  /**
   * @remarks
   * AI通话时长
   * 
   * @example
   * 45
   */
  speakingDuration?: number;
  /**
   * @remarks
   * AI通话时长
   * 
   * @example
   * 示例值示例值示例值
   */
  speakingTime?: string;
  /**
   * @remarks
   * 对话轮次
   * 
   * @example
   * 0
   */
  speakingTurns?: string;
  /**
   * @remarks
   * 外呼状态
   * 
   * @example
   * 示例值示例值示例值
   */
  status?: string;
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
   * 外呼状态描述
   * 
   * @example
   * 示例值示例值
   */
  statusDescription?: string;
  /**
   * @remarks
   * 用户自定义标签
   * 
   * @example
   * 示例值
   */
  tag?: string;
  /**
   * @remarks
   * 外呼任务ID
   * 
   * @example
   * 70
   */
  taskId?: number;
  /**
   * @remarks
   * AI话术ID
   * 
   * @example
   * 66
   */
  templateId?: number;
  /**
   * @remarks
   * 转人工状态
   * 
   * @example
   * 示例值
   */
  transferStatus?: string;
  /**
   * @remarks
   * 转人工状态编码
   * 
   * @example
   * 1
   */
  transferStatusCode?: number;
  static names(): { [key: string]: string } {
    return {
      addWx: 'AddWx',
      addWxStatus: 'AddWxStatus',
      agentExtension: 'AgentExtension',
      agentId: 'AgentId',
      agentSpeakingDuration: 'AgentSpeakingDuration',
      agentSpeakingTime: 'AgentSpeakingTime',
      agentTag: 'AgentTag',
      answerRecall: 'AnswerRecall',
      answerTime: 'AnswerTime',
      batchId: 'BatchId',
      callBeginTime: 'CallBeginTime',
      callId: 'CallId',
      callTimes: 'CallTimes',
      callType: 'CallType',
      chatRecord: 'ChatRecord',
      gateway: 'Gateway',
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
      status: 'Status',
      statusCode: 'StatusCode',
      statusDescription: 'StatusDescription',
      tag: 'Tag',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      transferStatus: 'TransferStatus',
      transferStatusCode: 'TransferStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addWx: 'number',
      addWxStatus: 'string',
      agentExtension: 'string',
      agentId: 'number',
      agentSpeakingDuration: 'number',
      agentSpeakingTime: 'string',
      agentTag: 'string',
      answerRecall: 'number',
      answerTime: 'string',
      batchId: 'string',
      callBeginTime: 'string',
      callId: 'string',
      callTimes: 'string',
      callType: 'number',
      chatRecord: 'string',
      gateway: 'string',
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
      status: 'string',
      statusCode: 'number',
      statusDescription: 'string',
      tag: 'string',
      taskId: 'number',
      templateId: 'number',
      transferStatus: 'string',
      transferStatusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

