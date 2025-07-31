// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformInstanceChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > Default value: **true**.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > Default value: **false**.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The business information. This is an additional parameter.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PrePaid:** subscription.
   * *   **PostPaid:** pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The coupon code. Default value: `youhuiquan_promotion_option_id_for_blank`.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The ID of the instance.
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
   * The subscription duration of the instance. Unit: months. Valid values: **1, 2, 3, 4, 5, 6, 7, 8, 9******, **12**, **24**, and **36**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * 实例付费时长单位
   * 取值说明：
   * - **Month：** 月
   * -  **Year：** 年
   * 
   * 默认值：Month
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

