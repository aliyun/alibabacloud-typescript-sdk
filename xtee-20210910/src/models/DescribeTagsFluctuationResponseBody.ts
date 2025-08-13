// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagsFluctuationResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Tag name
   * 
   * @example
   * accountId
   */
  tableName?: string;
  /**
   * @remarks
   * Data for today
   * 
   * @example
   * 100
   */
  todayNum?: number;
  /**
   * @remarks
   * Data for the last seven days
   * 
   * @example
   * 600
   */
  withinSevenDayNum?: string;
  /**
   * @remarks
   * Data for the last thirty days
   * 
   * @example
   * 1200
   */
  withinThirtyDayNum?: string;
  /**
   * @remarks
   * Data for the last three days
   * 
   * @example
   * 300
   */
  withinThreeDayNum?: string;
  /**
   * @remarks
   * Data for yesterday
   * 
   * @example
   * 200
   */
  yesterdayNum?: number;
  static names(): { [key: string]: string } {
    return {
      tableName: 'tableName',
      todayNum: 'todayNum',
      withinSevenDayNum: 'withinSevenDayNum',
      withinThirtyDayNum: 'withinThirtyDayNum',
      withinThreeDayNum: 'withinThreeDayNum',
      yesterdayNum: 'yesterdayNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
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

export class DescribeTagsFluctuationResponseBody extends $dara.Model {
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
  resultObject?: DescribeTagsFluctuationResponseBodyResultObject[];
  /**
   * @remarks
   * Indicates whether the call was successful
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
      resultObject: { 'type': 'array', 'itemType': DescribeTagsFluctuationResponseBodyResultObject },
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

