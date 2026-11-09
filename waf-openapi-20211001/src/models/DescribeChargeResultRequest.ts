// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChargeResultRequestChargeModules extends $dara.Model {
  /**
   * @remarks
   * The billing module code.
   * 
   * @example
   * domainCount
   */
  moduleCode?: string;
  /**
   * @remarks
   * The usage of the billing module.
   * 
   * @example
   * 10
   */
  usage?: number;
  /**
   * @remarks
   * The usage of the billing module, which supports integers and decimals. If the billing module is log storage capacity, the usage supports up to one decimal place, such as 10.5. This parameter is optional and has no default value. If this parameter is specified, it takes precedence even if the value is 0. If this parameter is not specified, Usage is used.
   * 
   * @example
   * 10.5
   */
  usageDecimal?: number;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'ModuleCode',
      usage: 'Usage',
      usageDecimal: 'UsageDecimal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleCode: 'string',
      usage: 'number',
      usageDecimal: 'number',
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
   * The billing cycle. Valid values:
   * - **Year**: calculates the billing result for one year
   * - **Month**: calculates the billing result for one month
   * - **Day**: calculates the billing result for one day
   * 
   * @example
   * Day
   */
  chargeCycle?: string;
  /**
   * @remarks
   * The list of billing modules to be calculated.
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
   * The billing method of the instance. Valid values:
   * - **POSTPAY**: pay-as-you-go WAF instances
   * 
   * This parameter is required.
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * The region of the WAF instance. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland
   * 
   * - **ap-southeast-1**: outside the Chinese mainland
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

