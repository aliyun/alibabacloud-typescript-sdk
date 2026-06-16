// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvgExecuteCostReportResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The day-over-day ratio compared to yesterday\\"s average execution duration.
   * 
   * @example
   * 0.2
   */
  ratio?: string;
  /**
   * @remarks
   * The average execution duration for today.
   * 
   * @example
   * 0.1 毫秒
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      ratio: 'ratio',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ratio: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvgExecuteCostReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The input parameter data is not valid. order_storage_company_num component not found
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * The response object.
   */
  resultObject?: DescribeAvgExecuteCostReportResponseBodyResultObject[];
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      resultObject: 'resultObject',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeAvgExecuteCostReportResponseBodyResultObject },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

