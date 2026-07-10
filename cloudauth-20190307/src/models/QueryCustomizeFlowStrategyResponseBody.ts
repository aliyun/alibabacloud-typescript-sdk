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
   * The rate limiting statistical window. Unit: **minutes**.
   * 
   * @example
   * 60
   */
  accumulateWindow?: string;
  /**
   * @remarks
   * The API name, which is the same as **ProductCode**.
   * 
   * @example
   * ID_PRO
   */
  apiName?: string;
  /**
   * @remarks
   * The flow type. Valid values:
   * - **ACCUMULATE**: repeated occurrence of an ID card number.
   * - **PASSED_RATE**: pass rate less than the threshold.
   * - **SUB_CODE_205**: authentication failed and the proportion of liveness attack 205 is greater than the threshold.
   * - **SUB_CODE_206**: authentication failed and the proportion of liveness attack 206 is greater than the threshold.
   * 
   * @example
   * ACCUMULATE
   */
  flowType?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 234822
   */
  id?: string;
  /**
   * @remarks
   * The operation.
   * 
   * @example
   * match
   */
  operation?: string;
  /**
   * @remarks
   * The status. Valid values:
   * - **disabled**: Disabled.
   * - **normal**: Enabled.
   * 
   * @example
   * disabled
   */
  status?: string;
  /**
   * @remarks
   * The threshold.
   * 
   * @example
   * 10
   */
  threshold?: string;
  /**
   * @remarks
   * The user ID.
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
   * The return code. A value of 200 indicates success. Other values indicate failure.
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
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The processing result.
   */
  resultObject?: QueryCustomizeFlowStrategyResponseBodyResultObject[];
  /**
   * @remarks
   * Indicates whether the response is successful.
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

