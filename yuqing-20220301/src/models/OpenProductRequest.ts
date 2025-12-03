// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ProductInstance } from "./ProductInstance";


export class OpenProductRequest extends $dara.Model {
  clientToken?: string;
  productInstance?: ProductInstance;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      productInstance: 'productInstance',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

