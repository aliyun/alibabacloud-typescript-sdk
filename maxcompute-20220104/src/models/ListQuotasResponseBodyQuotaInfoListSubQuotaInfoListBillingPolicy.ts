// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method of the quota. Valid values:
   * 
   * *   subscription: a subscription quota.
   * *   payasyougo: a pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The specifications of the order.
   * 
   * @example
   * OdpsStandard
   */
  odpsSpecCode?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 45245678
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

