// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProductDTO extends $dara.Model {
  /**
   * @example
   * 100
   */
  price?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6600****6736
   */
  productId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 56****2304
   */
  purchaserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * SKUID
   * 
   * This parameter is required.
   * 
   * @example
   * 6600****6737
   */
  skuId?: string;
  static names(): { [key: string]: string } {
    return {
      price: 'price',
      productId: 'productId',
      purchaserId: 'purchaserId',
      quantity: 'quantity',
      skuId: 'skuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: 'number',
      productId: 'string',
      purchaserId: 'string',
      quantity: 'number',
      skuId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

