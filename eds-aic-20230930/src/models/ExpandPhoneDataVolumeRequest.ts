// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExpandPhoneDataVolumeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Default value: false.
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
   * The IDs of the cloud phone matrix instances. You can specify 1 to 100 instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The redirect URL to the payment success page.
   * 
   * @example
   * wya.wuying.aliyun.com/instanceGroup
   */
  paidCallBackUrl?: string;
  /**
   * @remarks
   * The expected size of the independent device storage after the expansion. Unit: GiB.>Notice: The new value must be greater than the original independent device storage size of the instance.
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

