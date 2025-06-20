// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCustomerResponseBodyData extends $dara.Model {
  product?: string;
  type?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      type: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

