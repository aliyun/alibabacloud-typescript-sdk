// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCustomerRequest extends $dara.Model {
  authKey?: string;
  authSign?: string;
  product?: string[];
  reqTimestamp?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      authSign: 'AuthSign',
      product: 'Product',
      reqTimestamp: 'ReqTimestamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      authSign: 'string',
      product: { 'type': 'array', 'itemType': 'string' },
      reqTimestamp: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.product)) {
      $dara.Model.validateArray(this.product);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

