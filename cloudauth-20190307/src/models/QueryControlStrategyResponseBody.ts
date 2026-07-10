// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryControlStrategyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The API name, which is the same as the ProductCode of the verification operation.
   * 
   * @example
   * ID_PRO
   */
  apiName?: string;
  /**
   * @remarks
   * The rule configuration type. Valid values:
   * 
   * - **QPS**: QPS greater than
   * - **SUCCESS_RATE_5_MIN**: success rate in the last 5 minutes less than
   * - **RESP_TIME_5_MIN**: average response time in the last 5 minutes greater than
   * - **AMOUNT_RISE**: call volume increase compared to the previous period greater than
   * - **AMOUNT_FALL**: call volume decrease compared to the previous period less than
   * - **PASSED_RATE_1_HOUR**: verification consistency rate in the last hour less than
   * - **PARAM_ERROR_RATE_1_HOUR**: parameter error rate in the last hour greater than.
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
   * 
   * - **disabled**: Disabled.
   * - **normal**: Enabled.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The alert threshold for configure alerting of the rule.
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
   * The response code. A value of 200 indicates success. Other values indicate failure.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The response message.
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

