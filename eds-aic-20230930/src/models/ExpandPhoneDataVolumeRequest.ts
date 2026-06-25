// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExpandPhoneDataVolumeRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to enable automatic payment. The default value is false.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * A list of cloud phone matrix instance IDs. You can specify 1 to 100 IDs.
   */
  instanceIds?: string[];
  paidCallBackUrl?: string;
  /**
   * @remarks
   * The target size of the phone storage, in GiB.>Notice: The new value must be greater than the current size of the phone storage.
   * 
   * @example
   * 10
   */
  phoneDataVolume?: number;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 50003308011****
   */
  promotionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      bizRegionId: 'BizRegionId',
      instanceIds: 'InstanceIds',
      paidCallBackUrl: 'PaidCallBackUrl',
      phoneDataVolume: 'PhoneDataVolume',
      promotionId: 'PromotionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      bizRegionId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      paidCallBackUrl: 'string',
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

