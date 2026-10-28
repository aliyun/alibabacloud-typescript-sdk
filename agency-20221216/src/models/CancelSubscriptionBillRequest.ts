// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelSubscriptionBillRequest extends $dara.Model {
  /**
   * @remarks
   * Subscription type.
   * 
   * - PartnerBillingItemDetailForBillingPeriod: Billing item bill details.
   * - PartnerBillingItemDetailMonthly: Billing item monthly bill.
   * - PartnerInstanceDetailForBillingPeriod: Instance bill details.
   * - PartnerInstanceDetailMonthly: Instance monthly bill.
   * 
   * This parameter is required.
   * 
   * @example
   * PartnerBillingItemDetailForBillingPeriod
   */
  subscribeType?: string;
  static names(): { [key: string]: string } {
    return {
      subscribeType: 'SubscribeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscribeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

