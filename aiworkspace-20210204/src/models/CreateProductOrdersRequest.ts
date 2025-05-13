// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProductOrdersRequestProducts } from "./CreateProductOrdersRequestProducts";


export class CreateProductOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically pay for the provided products.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The list of products to be purchased. Separate them with commas (,).
   */
  products?: CreateProductOrdersRequestProducts[];
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      products: 'Products',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      products: { 'type': 'array', 'itemType': CreateProductOrdersRequestProducts },
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

