// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryQuotaResponseBodyDataSubQuotaInfoListBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   subscription: the subscription quota.
   * *   payasyougo: the pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * In MaxCompute, instanceId and orderId are considered the same.
   * 
   * @example
   * 880c0d0d-5d79-4217-b683-8e8bdd2a2523
   */
  instanceId?: string;
  /**
   * @remarks
   * The order specifications.
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
   * 880c0d0d-5d79-4217-b683-8e8bdd2a2523
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      instanceId: 'instanceId',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      instanceId: 'string',
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

