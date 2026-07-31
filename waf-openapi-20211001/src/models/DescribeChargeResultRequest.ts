// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChargeResultRequestChargeModules extends $dara.Model {
  /**
   * @remarks
   * The pricing module identifier.
   * 
   * @example
   * domainCount
   */
  moduleCode?: string;
  /**
   * @remarks
   * The usage of the pricing module.
   * 
   * @example
   * 10
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'ModuleCode',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleCode: 'string',
      usage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChargeResultRequest extends $dara.Model {
  /**
   * @remarks
   * The billing cycle for the calculation. Valid values:
   * - **Year**: Calculates the billing result for one year.
   * - **Month**: Calculates the billing result for one month.
   * - **Day**: Calculates the billing result for one day.
   * 
   * @example
   * Day
   */
  chargeCycle?: string;
  /**
   * @remarks
   * The list of billing modules to calculate.
   * 
   * This parameter is required.
   */
  chargeModules?: DescribeChargeResultRequestChargeModules[];
  /**
   * @remarks
   * The metering unit.
   * 
   * @example
   * SeCU
   */
  chargeUnit?: string;
  /**
   * @remarks
   * The billing type of the instance. Valid values:
   * - **POSTPAY**: pay-as-you-go WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource group ID.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeCycle: 'ChargeCycle',
      chargeModules: 'ChargeModules',
      chargeUnit: 'ChargeUnit',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeCycle: 'string',
      chargeModules: { 'type': 'array', 'itemType': DescribeChargeResultRequestChargeModules },
      chargeUnit: 'string',
      payType: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chargeModules)) {
      $dara.Model.validateArray(this.chargeModules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

