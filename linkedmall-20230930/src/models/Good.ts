// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Good extends $dara.Model {
  /**
   * @remarks
   * Product name
   * 
   * @example
   * 儿童学习桌
   */
  goodName?: string;
  /**
   * @remarks
   * Product ID
   * 
   * @example
   * 6600****6736
   */
  productId?: string;
  /**
   * @remarks
   * Quantity
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * SKU ID
   * 
   * @example
   * 7232****2321
   */
  skuId?: string;
  /**
   * @remarks
   * SKU title
   * 
   * @example
   * 白色
   */
  skuTitle?: string;
  static names(): { [key: string]: string } {
    return {
      goodName: 'goodName',
      productId: 'productId',
      quantity: 'quantity',
      skuId: 'skuId',
      skuTitle: 'skuTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      goodName: 'string',
      productId: 'string',
      quantity: 'number',
      skuId: 'string',
      skuTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

