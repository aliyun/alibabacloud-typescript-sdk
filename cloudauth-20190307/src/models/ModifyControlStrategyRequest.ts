// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyControlStrategyRequestControlStrategyList extends $dara.Model {
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
   * 38
   */
  id?: number;
  /**
   * @remarks
   * Status:
   * - **disabled**: Disabled
   * - **normal**: Enabled
   * 
   * @example
   * 2
   */
  status?: string;
  /**
   * @remarks
   * Alarm threshold for the rule.
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
   * List of security alarm rules.
   */
  controlStrategyList?: ModifyControlStrategyRequestControlStrategyList[];
  /**
   * @remarks
   * Product type, currently only supports **ANT_CLOUD_AUTH** (Financial-grade Real Person), all others are phased out.
   * 
   * @example
   * ANT_CLOUD_AUTH
   */
  productType?: string;
  /**
   * @remarks
   * Region ID of the intelligent access gateway instance.
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

