// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyControlStrategyRequestControlStrategyList extends $dara.Model {
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
   * The rule configuration type. Valid values:
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
   * 38
   */
  id?: number;
  /**
   * @remarks
   * The status. Valid values:
   * - **disabled**: Disabled.
   * - **normal**: Enabled.
   * 
   * @example
   * 2
   */
  status?: string;
  /**
   * @remarks
   * The alert threshold of the rule.
   * 
   * @example
   * 0.9
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      bizType: 'BizType',
      id: 'Id',
      status: 'Status',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      bizType: 'string',
      id: 'number',
      status: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyControlStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The list of security alert rules.
   */
  controlStrategyList?: ModifyControlStrategyRequestControlStrategyList[];
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
   * The region ID of the Smart Access Gateway instance.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      controlStrategyList: 'ControlStrategyList',
      productType: 'ProductType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlStrategyList: { 'type': 'array', 'itemType': ModifyControlStrategyRequestControlStrategyList },
      productType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.controlStrategyList)) {
      $dara.Model.validateArray(this.controlStrategyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

