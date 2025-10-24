// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChargeModuleRequest extends $dara.Model {
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
      payType: 'PayType',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payType: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

