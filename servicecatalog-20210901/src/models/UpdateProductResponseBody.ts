// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProductResponseBody extends $dara.Model {
  /**
   * @example
   * prod-bp18r7q127****
   */
  productId?: string;
  /**
   * @example
   * 0FEEF92D-4052-5202-87D0-3D8EC16F81BF
   */
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

