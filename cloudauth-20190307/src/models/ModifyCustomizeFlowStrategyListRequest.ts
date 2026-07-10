// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomizeFlowStrategyListRequestStrategyObject extends $dara.Model {
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
   * The size of the rate limiting statistical window, in minutes.
   * 
   * @example
   * 60
   */
  accumulateWindow?: number;
  /**
   * @remarks
   * The API name, which is the same as **ProductCode**.
   * 
   * This parameter is required.
   * 
   * @example
   * ID_PRO
   */
  apiName?: string;
  /**
   * @remarks
   * The flow type. Valid values:
   * - **ACCUMULATE**: repeated occurrence of an ID card.
   * - **PASSED_RATE**: pass rate is less than.
   * - **SUB_CODE_205**: authentication failed and the proportion of liveness attack 205 is greater than.
   * - **SUB_CODE_206**: authentication failed and the proportion of liveness attack 206 is greater than.
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
   * 38
   */
  id?: number;
  /**
   * @remarks
   * The operation.
   * 
   * @example
   * -
   */
  operation?: string;
  /**
   * @remarks
   * The status. Valid values:
   * - **disabled**: disabled.
   * - **normal**: enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * disabled
   */
  status?: string;
  /**
   * @remarks
   * The rate limiting threshold.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
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
      accumulateWindow: 'number',
      apiName: 'string',
      flowType: 'string',
      id: 'number',
      operation: 'string',
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

export class ModifyCustomizeFlowStrategyListRequest extends $dara.Model {
  /**
   * @remarks
   * The product type. Currently, only **ANT_CLOUD_AUTH** (financial-grade ID Verification) is supported. All other types have been discontinued.
   * 
   * @example
   * ANT_CLOUD_AUTH
   */
  productType?: string;
  /**
   * @remarks
   * The policy list.
   */
  strategyObject?: ModifyCustomizeFlowStrategyListRequestStrategyObject[];
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      strategyObject: 'StrategyObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      strategyObject: { 'type': 'array', 'itemType': ModifyCustomizeFlowStrategyListRequestStrategyObject },
    };
  }

  validate() {
    if(Array.isArray(this.strategyObject)) {
      $dara.Model.validateArray(this.strategyObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

