// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SkuSaleInfo extends $dara.Model {
  /**
   * @remarks
   * Reason for not being sellable
   * 
   * @example
   * 不可售
   */
  canNotSellReason?: string;
  /**
   * @remarks
   * Indicates whether the SKU is sellable
   * 
   * @example
   * true
   */
  canSell?: boolean;
  /**
   * @remarks
   * Area code
   * 
   * @example
   * 330106109
   */
  divisionCode?: string;
  /**
   * @remarks
   * Blur inventory availability
   * 
   * @example
   * 有货
   */
  fuzzyQuantity?: string;
  /**
   * @remarks
   * Strikethrough price, in cents
   * 
   * @example
   * 999900
   */
  markPrice?: number;
  /**
   * @remarks
   * Distributor purchase price, in cents
   * 
   * @example
   * 19800
   */
  price?: number;
  /**
   * @remarks
   * Product ID
   * 
   * @example
   * 660460842235822080
   */
  productId?: string;
  /**
   * @remarks
   * Available inventory
   * 
   * @example
   * -1
   */
  quantity?: number;
  /**
   * @remarks
   * Shop ID
   * 
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
   * @remarks
   * SKU control status
   * 
   * @example
   * Online
   */
  skuStatus?: string;
  /**
   * @remarks
   * SKU title
   * 
   * @example
   * 天蓝色
   */
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

