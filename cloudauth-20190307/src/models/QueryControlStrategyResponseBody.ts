// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryControlStrategyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The API name, which is the same as the **ProductCode** of the authentication operation.
   * 
   * @example
   * ID_PRO
   */
  apiName?: string;
  /**
   * @remarks
   * The rule configuration type. Valid values:
   * - **QPS**: The QPS is greater than the threshold.
   * - **SUCCESS_RATE_5_MIN**: The success rate in the last 5 minutes is less than the threshold.
   * - **RESP_TIME_5_MIN**: The average response time in the last 5 minutes is greater than the threshold.
   * - **AMOUNT_RISE**: The period-over-period growth in call volume is greater than the threshold.
   * - **AMOUNT_FALL**: The period-over-period decline in call volume is less than the threshold.
   * - **PASSED_RATE_1_HOUR**: The verification consistency rate in the last 1 hour is less than the threshold.
   * - **PARAM_ERROR_RATE_1_HOUR**: The parameter error rate in the last 1 hour is greater than the threshold.
   * 
   * @example
   * SUCCESS_RATE_5_MIN
   */
  bizType?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 234822
   */
  id?: number;
  /**
   * @remarks
   * The status. Valid values:
   * - **disabled**: Disabled.
   * - **normal**: Enabled.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The alert threshold configured for the rule.
   * 
   * @example
   * 0.9
   */
  threshold?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 126005125163xxxx
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      bizType: 'BizType',
      id: 'Id',
      status: 'Status',
      threshold: 'Threshold',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      bizType: 'string',
      id: 'number',
      status: 'string',
      threshold: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryControlStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates success, and other values indicate failure.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B506328A-D84B-4750-82C7-6A207C585CF1
   */
  requestId?: string;
  /**
   * @remarks
   * The processing result.
   */
  resultObject?: QueryControlStrategyResponseBodyResultObject[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': QueryControlStrategyResponseBodyResultObject },
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

