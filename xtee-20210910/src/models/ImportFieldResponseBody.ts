// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportFieldResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Names of fields that failed to upload
   * 
   * @example
   * test
   */
  failFieldNames?: string;
  /**
   * @remarks
   * Number of successful executions.
   * 
   * @example
   * 7
   */
  successNum?: number;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 7
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      failFieldNames: 'FailFieldNames',
      successNum: 'SuccessNum',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failFieldNames: 'string',
      successNum: 'number',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportFieldResponseBody extends $dara.Model {
  /**
   * @remarks
   * API status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result
   */
  resultObject?: ImportFieldResponseBodyResultObject;
  /**
   * @remarks
   * Indicator of whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: ImportFieldResponseBodyResultObject,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

