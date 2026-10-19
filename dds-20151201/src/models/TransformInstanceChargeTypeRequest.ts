// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformInstanceChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether automatic payment is enabled for the order. Valid values:
   * 
   * - **true**: enables automatic payment for the order.
   * - **false**: requires manual payment for the order.
   * 
   * > Default value: **true**.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal upon expiration. Valid values:
   * 
   * - **true**: enables auto-renewal.
   * - **false**: disables auto-renewal.
   * 
   * > Default value: **false**.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The additional parameter for business information.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * - **PrePaid**: subscription.
   * - **PostPaid**: pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * - **default** or **null** (default): uses a coupon.
   * - **youhuiquan_promotion_option_id_for_blank**: does not use a coupon.
   * 
   * @example
   * default
   */
  couponNo?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-2ze55b3ec56c****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * 
   * - If PricingCycle is set to Month: **1** to **9**.
   * 
   * - If PricingCycle is set to Year: **1**, **2**, **3**, and **5**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * - **Month**: months.
   * - **Year**: years.
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      businessInfo: 'BusinessInfo',
      chargeType: 'ChargeType',
      couponNo: 'CouponNo',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      pricingCycle: 'PricingCycle',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'string',
      businessInfo: 'string',
      chargeType: 'string',
      couponNo: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      pricingCycle: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

