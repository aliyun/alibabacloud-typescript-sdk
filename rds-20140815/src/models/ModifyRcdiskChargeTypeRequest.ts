// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCDiskChargeTypeRequest extends $dara.Model {
  autoPay?: boolean;
  /**
   * @example
   * true
   */
  autoRenew?: string;
  autoUseCoupon?: boolean;
  /**
   * @example
   * None
   */
  businessInfo?: string;
  /**
   * @example
   * 2F20251224*
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rcd-pq2091s13go9bkb04*
   */
  instanceId?: string;
  /**
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * Month
   */
  period?: string;
  /**
   * @example
   * 72802442****
   */
  promotionCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   * 
   * **if can be null:**
   * true
   */
  regionId?: string;
  /**
   * @example
   * 1
   */
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      businessInfo: 'BusinessInfo',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      payType: 'PayType',
      period: 'Period',
      promotionCode: 'PromotionCode',
      regionId: 'RegionId',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'string',
      autoUseCoupon: 'boolean',
      businessInfo: 'string',
      clientToken: 'string',
      instanceId: 'string',
      payType: 'string',
      period: 'string',
      promotionCode: 'string',
      regionId: 'string',
      usedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

