// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHitRuleFluctuationResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 115019
   */
  ruleId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * 营销风险识别
   */
  ruleName?: string;
  /**
   * @remarks
   * The number of hits today.
   * 
   * @example
   * 100
   */
  todayNum?: number;
  /**
   * @remarks
   * The number of hits in the last seven days.
   * 
   * @example
   * 600
   */
  withinSevenDayNum?: string;
  /**
   * @remarks
   * The number of hits in the last thirty days.
   * 
   * @example
   * 1200
   */
  withinThirtyDayNum?: string;
  /**
   * @remarks
   * The number of hits in the last three days.
   * 
   * @example
   * 300
   */
  withinThreeDayNum?: string;
  /**
   * @remarks
   * The number of hits yesterday.
   * 
   * @example
   * 200
   */
  yesterdayNum?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'ruleId',
      ruleName: 'ruleName',
      todayNum: 'todayNum',
      withinSevenDayNum: 'withinSevenDayNum',
      withinThirtyDayNum: 'withinThirtyDayNum',
      withinThreeDayNum: 'withinThreeDayNum',
      yesterdayNum: 'yesterdayNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      ruleName: 'string',
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

export class DescribeHitRuleFluctuationResponseBody extends $dara.Model {
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
   * The returned object.
   */
  resultObject?: DescribeHitRuleFluctuationResponseBodyResultObject[];
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
      resultObject: { 'type': 'array', 'itemType': DescribeHitRuleFluctuationResponseBodyResultObject },
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

