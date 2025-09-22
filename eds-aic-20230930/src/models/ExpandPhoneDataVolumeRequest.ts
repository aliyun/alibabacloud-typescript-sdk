// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExpandPhoneDataVolumeRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  instanceIds?: string[];
  /**
   * @example
   * 10
   */
  phoneDataVolume?: number;
  /**
   * @example
   * 50003308011****
   */
  promotionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      bizRegionId: 'BizRegionId',
      instanceIds: 'InstanceIds',
      phoneDataVolume: 'PhoneDataVolume',
      promotionId: 'PromotionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      bizRegionId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      phoneDataVolume: 'number',
      promotionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

