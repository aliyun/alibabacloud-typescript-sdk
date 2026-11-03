// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyControlStrategyRequestControlStrategyList extends $dara.Model {
  /**
   * @remarks
   * The name of the API operation, which is the same as **ProductCode**.
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
   * - **AMOUNT_RISE**: The period-over-period increase in call volume is greater than the threshold.
   * - **AMOUNT_FALL**: The period-over-period decrease in call volume is less than the threshold.
   * - **PASSED_RATE_1_HOUR**: The verification consistency rate in the last hour is less than the threshold.
   * - **PARAM_ERROR_RATE_1_HOUR**: The parameter error rate in the last hour is greater than the threshold.
   * 
   * @example
   * SUCCESS_RATE_5_MIN
   */
  bizType?: string;
  /**
   * @remarks
   * The ID of the rule.
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
   * The product type. Currently, only **ANT_CLOUD_AUTH** (Financial-grade ID Verification) is supported. All other types are retired.
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

