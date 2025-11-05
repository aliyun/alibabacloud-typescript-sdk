// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelSubscriptionBillRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the bill to which you want to cancel the subscription. Valid values: PartnerBillingItemDetailForBillingPeriod, PartnerBillingItemDetailMonthly, PartnerInstanceDetailForBillingPeriod, and PartnerInstanceDetailMonthly.
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

