// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmartAuditResultResponseBodyDataErrorItemDetails extends $dara.Model {
  checkId?: string;
  context?: string;
  /**
   * @example
   * 0
   */
  contextOffset?: number;
  /**
   * @example
   * 2
   */
  errorLevel?: number;
  /**
   * @example
   * ”xxx“
   */
  errorWord?: string;
  /**
   * @example
   * ContentAccuracy
   */
  majorCode?: string;
  majorCodeDesc?: string;
  /**
   * @example
   * 0
   */
  offset?: number;
  reason?: string;
  /**
   * @example
   * “xxx”
   */
  rightWord?: string;
  /**
   * @example
   * PunctuationError
   */
  subClassCode?: string;
  subClassDesc?: string;
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
  errorItemDetails?: GetSmartAuditResultResponseBodyDataErrorItemDetails[];
  errorMessage?: string;
  /**
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
   * @example
   * DataNotExists
   */
  code?: string;
  data?: GetSmartAuditResultResponseBodyData;
  /**
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @example
   * 错误消息
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxx
   */
  requestId?: string;
  /**
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

