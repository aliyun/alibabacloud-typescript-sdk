// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SkuSaleInfo extends $dara.Model {
  /**
   * @remarks
   * The unsellable reason.
   * 
   * @example
   * Unsellable
   */
  canNotSellReason?: string;
  /**
   * @remarks
   * The sellable status of the SKU.
   * 
   * @example
   * true
   */
  canSell?: boolean;
  /**
   * @remarks
   * The division code.
   * 
   * @example
   * 330106109
   */
  divisionCode?: string;
  /**
   * @remarks
   * The fuzzy available inventory.
   * 
   * @example
   * In stock
   */
  fuzzyQuantity?: string;
  /**
   * @remarks
   * The strikethrough price in cents.
   * 
   * @example
   * 999900
   */
  markPrice?: number;
  /**
   * @remarks
   * The distributor purchase price in cents.
   * 
   * @example
   * 19800
   */
  price?: number;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * 660460842235822080
   */
  productId?: string;
  /**
   * @remarks
   * The available inventory.
   * 
   * @example
   * -1
   */
  quantity?: number;
  /**
   * @remarks
   * The store ID.
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
   * The control status of the SKU.
   * 
   * @example
   * Online
   */
  skuStatus?: string;
  /**
   * @remarks
   * The SKU title.
   * 
   * @example
   * Sky blue
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

