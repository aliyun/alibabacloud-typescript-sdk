// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewCreditSeatRequest extends $dara.Model {
  autoRenew?: boolean;
  clientToken?: string;
  period?: number;
  periodUnit?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clientToken: 'ClientToken',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      clientToken: 'string',
      period: 'number',
      periodUnit: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

