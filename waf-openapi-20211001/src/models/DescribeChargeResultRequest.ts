// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChargeResultRequestChargeModules extends $dara.Model {
  /**
   * @example
   * domainCount
   */
  moduleCode?: string;
  /**
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
   * @example
   * Day
   */
  chargeCycle?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  chargeModules?: DescribeChargeResultRequestChargeModules[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
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

