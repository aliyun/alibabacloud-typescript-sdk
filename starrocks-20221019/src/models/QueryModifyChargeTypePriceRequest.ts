// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryModifyChargeTypePriceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter is valid only when \\`payType\\` is set to \\`PrePaid\\`. The default value is false.
   * 
   * @example
   * True
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * A list of billing instance IDs to modify. Separate multiple IDs with commas.
   * 
   * @example
   * c-3d6dc31ba67b1839
   */
  billingInstanceIds?: string;
  /**
   * @remarks
   * The subscription duration. This parameter is valid only when \\`payType\\` is set to \\`PrePaid\\`.
   * 
   * @example
   * 2
   */
  duration?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * The unit of the subscription duration:
   * 
   * - Month
   * 
   * - Year
   * 
   * This parameter is valid only when \\`payType\\` is set to \\`PrePaid\\`.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
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

