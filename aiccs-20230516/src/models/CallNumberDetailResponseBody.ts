// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CallNumberDetailResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * ai计费时长
   * 
   * @example
   * 1
   */
  aiBill?: number;
  /**
   * @remarks
   * 接通转接类型 1-不转人工；2-接通转人工；3-智能转人工
   * 
   * @example
   * 1
   */
  answerTransferType?: number;
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
   * 通话时长，单位为毫秒，实际计费需向上取整转换为秒
   * 
   * @example
   * 1
   */
  bill?: number;
  /**
   * @remarks
   * 转接计费时长
   * 
   * @example
   * 1
   */
  bridgeBill?: number;
  /**
   * @remarks
   * 每次呼叫的唯一标识
   * 
   * @example
   * a
   */
  callId?: string;
  /**
   * @remarks
   * 可选项 1-AI外呼，6-语音通知
   * 
   * @example
   * 1
   */
  callType?: number;
  /**
   * @remarks
   * 客户详情url
   * 
   * @example
   * a
   */
  clientUrl?: string;
  /**
   * @remarks
   * 创建时间 格式 2026-01-01 00:00:00
   * 
   * @example
   * 2026-01-01 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * 通话轮次
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * 线路id
   * 
   * @example
   * 1
   */
  gatewayId?: number;
  /**
   * @remarks
   * 号码编号
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * 意向标签
   * 
   * @example
   * a
   */
  intentTag?: string;
  /**
   * @remarks
   * 回复关键词
   * 
   * @example
   * a
   */
  keywords?: string;
  /**
   * @remarks
   * 外呼号码
   * 
   * @example
   * a
   */
  number?: string;
  /**
   * @remarks
   * 外呼号码MD5
   * 
   * @example
   * a
   */
  numberMd5?: string;
  /**
   * @remarks
   * 自定义参数 json
   * 
   * @example
   * {"名字":"a"}
   */
  params?: string;
  /**
   * @remarks
   * 个性标签
   * 
   * @example
   * a
   */
  personalityTag?: string;
  /**
   * @remarks
   * 备注信息
   * 
   * @example
   * a
   */
  remark?: string;
  /**
   * @remarks
   * 坐席id
   * 
   * @example
   * 1
   */
  sid?: number;
  /**
   * @remarks
   * 外呼状态编码
   * 
   * @example
   * 200
   */
  statusCode?: number;
  /**
   * @remarks
   * 用户自定义标签
   * 
   * @example
   * a
   */
  tag?: string;
  /**
   * @remarks
   * 任务ID
   * 
   * @example
   * 1
   */
  taskId?: number;
  /**
   * @remarks
   * 外呼使用的模板ID
   * 
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * 转人工状态 0-未触发,
   * 
   * @example
   * 0
   */
  transferStatus?: number;
  static names(): { [key: string]: string } {
    return {
      aiBill: 'AiBill',
      answerTransferType: 'AnswerTransferType',
      batchId: 'BatchId',
      bill: 'Bill',
      bridgeBill: 'BridgeBill',
      callId: 'CallId',
      callType: 'CallType',
      clientUrl: 'ClientUrl',
      createTime: 'CreateTime',
      duration: 'Duration',
      gatewayId: 'GatewayId',
      id: 'Id',
      intentTag: 'IntentTag',
      keywords: 'Keywords',
      number: 'Number',
      numberMd5: 'NumberMd5',
      params: 'Params',
      personalityTag: 'PersonalityTag',
      remark: 'Remark',
      sid: 'Sid',
      statusCode: 'StatusCode',
      tag: 'Tag',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      transferStatus: 'TransferStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiBill: 'number',
      answerTransferType: 'number',
      batchId: 'string',
      bill: 'number',
      bridgeBill: 'number',
      callId: 'string',
      callType: 'number',
      clientUrl: 'string',
      createTime: 'string',
      duration: 'number',
      gatewayId: 'number',
      id: 'number',
      intentTag: 'string',
      keywords: 'string',
      number: 'string',
      numberMd5: 'string',
      params: 'string',
      personalityTag: 'string',
      remark: 'string',
      sid: 'number',
      statusCode: 'number',
      tag: 'string',
      taskId: 'number',
      templateId: 'number',
      transferStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CallNumberDetailResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  model?: CallNumberDetailResponseBodyModel;
  /**
   * @example
   * 示例值示例值
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 48
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
      model: CallNumberDetailResponseBodyModel,
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

