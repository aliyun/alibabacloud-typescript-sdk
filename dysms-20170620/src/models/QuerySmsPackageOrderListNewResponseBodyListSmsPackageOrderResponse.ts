// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsPackageOrderListNewResponseBodyListSmsPackageOrderResponse extends $dara.Model {
  effectDate?: string;
  expireDate?: string;
  name?: string;
  payPrice?: string;
  state?: number;
  static names(): { [key: string]: string } {
    return {
      effectDate: 'EffectDate',
      expireDate: 'ExpireDate',
      name: 'Name',
      payPrice: 'PayPrice',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectDate: 'string',
      expireDate: 'string',
      name: 'string',
      payPrice: 'string',
      state: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

