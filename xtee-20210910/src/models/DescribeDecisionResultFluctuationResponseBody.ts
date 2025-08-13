// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDecisionResultFluctuationResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Execution status.
   * 
   * @example
   * PASS
   */
  status?: string;
  /**
   * @remarks
   * Today\\"s count
   * 
   * @example
   * 100
   */
  todayNum?: number;
  /**
   * @remarks
   * Count within the last seven days
   * 
   * @example
   * 600
   */
  withinSevenDayNum?: string;
  /**
   * @remarks
   * Count within the last thirty days
   * 
   * @example
   * 1200
   */
  withinThirtyDayNum?: string;
  /**
   * @remarks
   * Count within the last three days
   * 
   * @example
   * 300
   */
  withinThreeDayNum?: string;
  /**
   * @remarks
   * Yesterday\\"s count
   * 
   * @example
   * 200
   */
  yesterdayNum?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      todayNum: 'todayNum',
      withinSevenDayNum: 'withinSevenDayNum',
      withinThirtyDayNum: 'withinThirtyDayNum',
      withinThreeDayNum: 'withinThreeDayNum',
      yesterdayNum: 'yesterdayNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      todayNum: 'number',
      withinSevenDayNum: 'string',
      withinThirtyDayNum: 'string',
      withinThreeDayNum: 'string',
      yesterdayNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDecisionResultFluctuationResponseBody extends $dara.Model {
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
   * Error details
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
  resultObject?: DescribeDecisionResultFluctuationResponseBodyResultObject[];
  /**
   * @remarks
   * Indicates whether the operation was successful.
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
      resultObject: { 'type': 'array', 'itemType': DescribeDecisionResultFluctuationResponseBodyResultObject },
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

