// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ProductInstance } from "./ProductInstance";


export class CloseProductRequest extends $dara.Model {
  productInstance?: ProductInstance;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productInstance: 'productInstance',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productInstance: ProductInstance,
      requestId: 'string',
    };
  }

  validate() {
    if(this.productInstance && typeof (this.productInstance as any).validate === 'function') {
      (this.productInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

