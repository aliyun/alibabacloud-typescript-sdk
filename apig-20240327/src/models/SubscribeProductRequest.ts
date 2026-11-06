// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubscribeProductRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API product to subscribe to. This is the primary ID of the Product resource. You can obtain this ID from the productId field of a list item returned by ListProducts.
   * 
   * @example
   * product-xxxxxxxx
   */
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'productId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

