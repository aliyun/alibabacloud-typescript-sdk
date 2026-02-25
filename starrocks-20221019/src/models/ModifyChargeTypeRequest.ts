// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyChargeTypeRequest extends $dara.Model {
  /**
   * @example
   * True
   */
  autoRenew?: boolean;
  /**
   * @example
   * c-3d6dc31ba67b1839
   */
  billingInstanceIds?: string;
  /**
   * @example
   * 2
   */
  duration?: string;
  /**
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
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

