// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCustomizeFlowStrategyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * AccumulateKey
   * 
   * @example
   * -
   */
  accumulateKey?: string;
  /**
   * @remarks
   * Flow control statistical window, unit: **minutes**.
   * 
   * @example
   * 60
   */
  accumulateWindow?: string;
  /**
   * @remarks
   * API name, same as **ProductCode**.
   * 
   * @example
   * ID_PRO
   */
  apiName?: string;
  /**
   * @remarks
   * Flow type:
   * - **ACCUMULATE**: ID card reappears
   * - **PASSED_RATE**: Pass rate less than
   * - **SUB_CODE_205**: Authentication failed and liveness attack 205 ratio greater than
   * - **SUB_CODE_206**: Authentication failed and liveness attack 206 ratio greater than
   * 
   * @example
   * ACCUMULATE
   */
  flowType?: string;
  /**
   * @remarks
   * Rule ID.
   * 
   * @example
   * 234822
   */
  id?: string;
  /**
   * @remarks
   * Operation.
   * 
   * @example
   * match
   */
  operation?: string;
  /**
   * @remarks
   * Status:
   * - **disabled**: Disabled
   * - **normal**: Enabled
   * 
   * @example
   * disabled
   */
  status?: string;
  /**
   * @remarks
   * Threshold.
   * 
   * @example
   * 10
   */
  threshold?: string;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 126005125163xxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accumulateKey: 'AccumulateKey',
      accumulateWindow: 'AccumulateWindow',
      apiName: 'ApiName',
      flowType: 'FlowType',
      id: 'Id',
      operation: 'Operation',
      status: 'Status',
      threshold: 'Threshold',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accumulateKey: 'string',
      accumulateWindow: 'string',
      apiName: 'string',
      flowType: 'string',
      id: 'string',
      operation: 'string',
      status: 'string',
      threshold: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomizeFlowStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code: 200 for success, others for failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of this request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * Processing result.
   */
  resultObject?: QueryCustomizeFlowStrategyResponseBodyResultObject[];
  /**
   * @remarks
   * Whether the response was successful.
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
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': QueryCustomizeFlowStrategyResponseBodyResultObject },
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

