// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChargeResultRequestChargeModules extends $dara.Model {
  /**
   * @remarks
   * The ID of the billing module.
   * 
   * @example
   * domainCount
   */
  moduleCode?: string;
  /**
   * @remarks
   * The usage amount of the billing module.
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
   * The billing cycle for the WAF instance. Valid values:
   * 
   * - **Year**: yearly billing cycle.
   * 
   * - **Month**: monthly billing cycle.
   * 
   * - **Day**: daily billing cycle.
   * 
   * @example
   * Day
   */
  chargeCycle?: string;
  /**
   * @remarks
   * The billing modules to calculate.
   * 
   * This parameter is required.
   */
  chargeModules?: DescribeChargeResultRequestChargeModules[];
  /**
   * @remarks
   * The billing method of the WAF instance. Valid value:
   * 
   * - **POSTPAY**: pay-as-you-go.
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
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeCycle: 'ChargeCycle',
      chargeModules: 'ChargeModules',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeCycle: 'string',
      chargeModules: { 'type': 'array', 'itemType': DescribeChargeResultRequestChargeModules },
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

