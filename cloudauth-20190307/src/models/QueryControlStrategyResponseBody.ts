// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryControlStrategyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * API name, same as the **ProductCode** of the authentication interface.
   * 
   * @example
   * ID_PRO
   */
  apiName?: string;
  /**
   * @remarks
   * Rule configuration type:
   * - **QPS**: QPS greater than
   * - **SUCCESS_RATE_5_MIN**: Success rate in the last 5 minutes less than
   * - **RESP_TIME_5_MIN**: Average response time in the last 5 minutes greater than
   * - **AMOUNT_RISE**: Call volume growth ratio greater than
   * - **AMOUNT_FALL**: Call volume decline ratio less than
   * - **PASSED_RATE_1_HOUR**: Verification consistency rate in the last hour less than
   * - **PARAM_ERROR_RATE_1_HOUR**: Parameter error rate in the last hour greater than
   * 
   * @example
   * SUCCESS_RATE_5_MIN
   */
  bizType?: string;
  /**
   * @remarks
   * Rule ID.
   * 
   * @example
   * 234822
   */
  id?: number;
  /**
   * @remarks
   * Status:
   * - **disabled**: Disabled
   * - **normal**: Enabled
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * Alarm threshold for rule configuration.
   * 
   * @example
   * 0.9
   */
  threshold?: number;
  /**
   * @remarks
   * User ID.
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
   * Return code: 200 for success, others for failure.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * B506328A-D84B-4750-82C7-6A207C585CF1
   */
  requestId?: string;
  /**
   * @remarks
   * Processing result.
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

