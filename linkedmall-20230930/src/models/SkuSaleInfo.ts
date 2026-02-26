// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SkuSaleInfo extends $dara.Model {
  /**
   * @example
   * 不可售
   */
  canNotSellReason?: string;
  /**
   * @example
   * true
   */
  canSell?: boolean;
  /**
   * @example
   * 110000
   */
  divisionCode?: string;
  fuzzyQuantity?: string;
  /**
   * @example
   * 999900
   */
  markPrice?: number;
  /**
   * @example
   * 19800
   */
  price?: number;
  /**
   * @example
   * 660460842235822080
   */
  productId?: string;
  /**
   * @example
   * -1
   */
  quantity?: number;
  /**
   * @example
   * 21000017
   */
  shopId?: string;
  /**
   * @remarks
   * skuId
   * 
   * @example
   * 660460842235822081
   */
  skuId?: string;
  /**
   * @example
   * Online
   */
  skuStatus?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      canNotSellReason: 'canNotSellReason',
      canSell: 'canSell',
      divisionCode: 'divisionCode',
      fuzzyQuantity: 'fuzzyQuantity',
      markPrice: 'markPrice',
      price: 'price',
      productId: 'productId',
      quantity: 'quantity',
      shopId: 'shopId',
      skuId: 'skuId',
      skuStatus: 'skuStatus',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canNotSellReason: 'string',
      canSell: 'boolean',
      divisionCode: 'string',
      fuzzyQuantity: 'string',
      markPrice: 'number',
      price: 'number',
      productId: 'string',
      quantity: 'number',
      shopId: 'string',
      skuId: 'string',
      skuStatus: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

