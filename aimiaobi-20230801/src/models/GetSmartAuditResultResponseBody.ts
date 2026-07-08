// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmartAuditResultResponseBodyDataErrorItemDetails extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the review item.
   * 
   * @example
   * 审核项唯一标识。
   */
  checkId?: string;
  /**
   * @remarks
   * The original text segment.
   * 
   * @example
   * 原文片段
   */
  context?: string;
  /**
   * @remarks
   * The offset index of the incorrect word within the context.
   * 
   * @example
   * 0
   */
  contextOffset?: number;
  /**
   * @remarks
   * The error level. 1: critical, 2: warning, 3: notice, 4: suggestion.
   * 
   * @example
   * 2
   */
  errorLevel?: number;
  /**
   * @remarks
   * The incorrect word.
   * 
   * @example
   * ”xxx“
   */
  errorWord?: string;
  /**
   * @remarks
   * The primary error code.
   * 
   * @example
   * ContentAccuracy
   */
  majorCode?: string;
  /**
   * @remarks
   * The description of the primary error.
   * 
   * @example
   * 内容准确性
   */
  majorCodeDesc?: string;
  /**
   * @remarks
   * The offset index of the incorrect word in the full text.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * 中文双引号应成对正确使用，先左双引号，后右双引号
   */
  reason?: string;
  /**
   * @remarks
   * The suggested correction.
   * 
   * @example
   * “xxx”
   */
  rightWord?: string;
  /**
   * @remarks
   * The sub-error code.
   * 
   * @example
   * PunctuationError
   */
  subClassCode?: string;
  /**
   * @remarks
   * The description of the sub-error.
   * 
   * @example
   * 标点符号错误
   */
  subClassDesc?: string;
  /**
   * @remarks
   * In an image review scenario, this is the public URL of the image that triggered the review.
   * 
   * @example
   * http://www.example.com/xxxx.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      context: 'Context',
      contextOffset: 'ContextOffset',
      errorLevel: 'ErrorLevel',
      errorWord: 'ErrorWord',
      majorCode: 'MajorCode',
      majorCodeDesc: 'MajorCodeDesc',
      offset: 'Offset',
      reason: 'Reason',
      rightWord: 'RightWord',
      subClassCode: 'SubClassCode',
      subClassDesc: 'SubClassDesc',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      context: 'string',
      contextOffset: 'number',
      errorLevel: 'number',
      errorWord: 'string',
      majorCode: 'string',
      majorCodeDesc: 'string',
      offset: 'number',
      reason: 'string',
      rightWord: 'string',
      subClassCode: 'string',
      subClassDesc: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartAuditResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of review error details.
   */
  errorItemDetails?: GetSmartAuditResultResponseBodyDataErrorItemDetails[];
  /**
   * @remarks
   * If the final status is not SUCCESSED, read this error message to identify the fault.
   * 
   * @example
   * 审核被取消
   */
  errorMessage?: string;
  /**
   * @remarks
   * The task execution status. Valid values: PENDING, RUNNING, SUCCESSED, SUSPENDED, FAILED, and CANCELLED.
   * 
   * @example
   * SUCCESSED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorItemDetails: 'ErrorItemDetails',
      errorMessage: 'ErrorMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorItemDetails: { 'type': 'array', 'itemType': GetSmartAuditResultResponseBodyDataErrorItemDetails },
      errorMessage: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errorItemDetails)) {
      $dara.Model.validateArray(this.errorItemDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartAuditResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @remarks
   * The review result.
   */
  data?: GetSmartAuditResultResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 错误消息
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSmartAuditResultResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

