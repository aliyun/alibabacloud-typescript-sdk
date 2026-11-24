// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProductResponseBody extends $dara.Model {
  productId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'ProductId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

