// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppInstanceGroupChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The list of delivery group IDs to be modified, in JSON array format. **You must and can only specify one item per request**. The resources must belong to the current account, the specified product, and the business region.
   * 
   * This parameter is required.
   */
  appInstanceGroupIds?: string[];
  /**
   * @remarks
   * Specifies whether to allow automatic payment for the conversion order. Default value: `false`. Valid values:
   * 
   * - `true`: Automatic payment is allowed.
   * - `false`: Automatic payment is not allowed. If an unpaid order is generated, you must complete the payment separately.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the order. We recommend that you explicitly specify this parameter for subscription orders to determine whether to enable auto-renewal. Valid values:
   * 
   * - `true`: Auto-renewal is enabled.
   * - `false`: Auto-renewal is not enabled.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The business region ID of the target delivery group. It must be the same as the actual region to which the resource belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The target billing method after conversion. It must be different from the current billing method. Valid values:
   * 
   * - `PrePaid`: subscription
   * - `PostPaid`: pay-as-you-go
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The numeric part of the purchase duration, used together with `PeriodUnit`. When converting to subscription and a purchase duration is required, specify both parameters. For example, `1` and `Month` indicate a purchase duration of one month. The available purchase durations are determined by the sales rules of the target resource.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the purchase duration, used together with `Period`. This parameter is case-sensitive. Valid values:
   * 
   * - `Hour`: hour
   * - `Day`: day
   * - `Week`: week
   * - `Month`: month
   * - `Year`: year
   * 
   * These units do not mean that any combination is available for every product. When converting to subscription, select a period supported by the target resource. For example, for a resource that supports monthly purchase, you can set `Period` to `1` and `PeriodUnit` to `Month`.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The product type. Set this parameter to the following fixed value when you call the operation:
   * 
   * - `CloudApp`: WUYING Cloud Application.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the promotion used for the conversion order. It takes effect only when an order is created and the promotion is applicable. If omitted, no specific coupon is specified. The availability of the promotion is subject to the order result.
   * 
   * @example
   * 17440009****
   */
  promotionId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupIds: 'AppInstanceGroupIds',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      productType: 'ProductType',
      promotionId: 'PromotionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bizRegionId: 'string',
      chargeType: 'string',
      period: 'number',
      periodUnit: 'string',
      productType: 'string',
      promotionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appInstanceGroupIds)) {
      $dara.Model.validateArray(this.appInstanceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

