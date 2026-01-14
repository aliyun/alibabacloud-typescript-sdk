// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CallNumberDetailResponseBodyModel extends $dara.Model {
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
   * 个性标签
   * 
   * @example
   * a
   */
  personalityTag?: string;
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
      batchId: 'BatchId',
      bill: 'Bill',
      callId: 'CallId',
      callType: 'CallType',
      id: 'Id',
      intentTag: 'IntentTag',
      keywords: 'Keywords',
      number: 'Number',
      numberMd5: 'NumberMd5',
      personalityTag: 'PersonalityTag',
      statusCode: 'StatusCode',
      tag: 'Tag',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      transferStatus: 'TransferStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      bill: 'number',
      callId: 'string',
      callType: 'number',
      id: 'number',
      intentTag: 'string',
      keywords: 'string',
      number: 'string',
      numberMd5: 'string',
      personalityTag: 'string',
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

