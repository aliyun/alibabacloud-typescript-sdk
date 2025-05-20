// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BenefitPkgDeliveryInfo extends $dara.Model {
  amount?: number;
  createdAt?: string;
  expireTime?: string;
  isPermanent?: boolean;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      createdAt: 'created_at',
      expireTime: 'expire_time',
      isPermanent: 'is_permanent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      createdAt: 'string',
      expireTime: 'string',
      isPermanent: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

