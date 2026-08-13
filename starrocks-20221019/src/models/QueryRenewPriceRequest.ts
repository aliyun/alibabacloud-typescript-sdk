// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRenewPriceRequest extends $dara.Model {
  /**
   * @remarks
   * List of billing instance IDs to renew. Separate multiple IDs with commas.
   * 
   * This parameter is required.
   * 
   * @example
   * c-3d6dc31ba67b1839
   */
  billingInstanceIds?: string;
  /**
   * @remarks
   * Renewal period.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  duration?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * Renewal unit.
   * 
   * This parameter is required.
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
   * youhuiquan_12378dfj6
   */
  promotionOptionNo?: string;
  static names(): { [key: string]: string } {
    return {
      billingInstanceIds: 'BillingInstanceIds',
      duration: 'Duration',
      instanceId: 'InstanceId',
      pricingCycle: 'PricingCycle',
      promotionOptionNo: 'PromotionOptionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingInstanceIds: 'string',
      duration: 'number',
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

