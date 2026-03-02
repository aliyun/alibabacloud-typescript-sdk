// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Product } from "./Product";


export class ProductListResult extends $dara.Model {
  products?: Product[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      products: 'products',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      products: { 'type': 'array', 'itemType': Product },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

