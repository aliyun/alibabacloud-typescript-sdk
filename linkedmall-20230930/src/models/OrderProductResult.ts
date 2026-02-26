// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrderProductResult extends $dara.Model {
  /**
   * @example
   * true
   */
  canSell?: boolean;
  features?: { [key: string]: any };
  message?: string;
  /**
   * @example
   * 100
   */
  price?: number;
  /**
   * @example
   * 6600****6736
   */
  productId?: string;
  /**
   * @example
   * //img.alicdn.com/imgextra/i4/2216003305543/O1CN01bip3Un1qokG0
   */
  productPicUrl?: string;
  productTitle?: string;
  /**
   * @example
   * 56****2304
   */
  purchaserId?: string;
  /**
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * SKUID
   * 
   * @example
   * 6600****6737
   */
  skuId?: string;
  skuTitle?: string;
  static names(): { [key: string]: string } {
    return {
      canSell: 'canSell',
      features: 'features',
      message: 'message',
      price: 'price',
      productId: 'productId',
      productPicUrl: 'productPicUrl',
      productTitle: 'productTitle',
      purchaserId: 'purchaserId',
      quantity: 'quantity',
      skuId: 'skuId',
      skuTitle: 'skuTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      price: 'number',
      productId: 'string',
      productPicUrl: 'string',
      productTitle: 'string',
      purchaserId: 'string',
      quantity: 'number',
      skuId: 'string',
      skuTitle: 'string',
    };
  }

  validate() {
    if(this.features) {
      $dara.Model.validateMap(this.features);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

