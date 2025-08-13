// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvgExecuteCostReportResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Comparison with yesterday\\"s average execution time
   * 
   * @example
   * 0.2
   */
  ratio?: string;
  /**
   * @remarks
   * Today\\"s average execution time
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
   * Status code.
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
   * The input parameter data is not valid. order_storage_company_num component not found
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
   */
  resultObject?: DescribeAvgExecuteCostReportResponseBodyResultObject[];
  /**
   * @remarks
   * Whether the call was successful
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

