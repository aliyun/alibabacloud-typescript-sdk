// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to enable auto-renewal. This parameter takes effect only when payType is PrePaid. Default: disabled.
   * 
   * @example
   * True
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * List of billing instance IDs that require renewal. Separate multiple IDs with commas.
   * 
   * @example
   * c-3d6dc31ba67b1839
   */
  billingInstanceIds?: string;
  /**
   * @remarks
   * Subscription duration. This parameter takes effect only when payType is PrePaid.
   * 
   * @example
   * 2
   */
  duration?: string;
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * Subscription duration unit:
   * 
   * - Month
   * 
   * - Year
   * 
   * This parameter takes effect only when payType is PrePaid.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * Coupon ID.
   * 
   * @example
   * 2345
   */
  promotionOptionNo?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      billingInstanceIds: 'BillingInstanceIds',
      duration: 'Duration',
      instanceId: 'InstanceId',
      pricingCycle: 'PricingCycle',
      promotionOptionNo: 'PromotionOptionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      billingInstanceIds: 'string',
      duration: 'string',
      instanceId: 'string',
      pricingCycle: 'string',
      promotionOptionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

