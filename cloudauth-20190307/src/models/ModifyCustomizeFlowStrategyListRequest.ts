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
   * Flow control statistical window size, in minutes.
   * 
   * @example
   * 60
   */
  accumulateWindow?: number;
  /**
   * @remarks
   * API name, same as **ProductCode**.
   * 
   * This parameter is required.
   * 
   * @example
   * ID_PRO
   */
  apiName?: string;
  /**
   * @remarks
   * Flow type:
   * - **ACCUMULATE**: Repeated appearance of ID card
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
   * 38
   */
  id?: number;
  /**
   * @remarks
   * Operation.
   * 
   * @example
   * -
   */
  operation?: string;
  /**
   * @remarks
   * Status:
   * - **disabled**: Disabled
   * - **normal**: Enabled
   * 
   * This parameter is required.
   * 
   * @example
   * disabled
   */
  status?: string;
  /**
   * @remarks
   * Flow control threshold.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
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
   * Product type, currently only supports **ANT_CLOUD_AUTH** (Financial-grade real person), all others have been phased out.
   * 
   * @example
   * ANT_CLOUD_AUTH
   */
  productType?: string;
  /**
   * @remarks
   * Strategy list.
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

