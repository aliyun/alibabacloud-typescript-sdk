// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SkuSpec } from "./SkuSpec";


export class Sku extends $dara.Model {
  /**
   * @remarks
   * The barcode.
   * 
   * @example
   * 6922454329176
   */
  barcode?: string;
  /**
   * @remarks
   * Indicates whether the SKU is available for sale.
   * 
   * @example
   * true
   */
  canSell?: boolean;
  /**
   * @remarks
   * The reserved field.
   * 
   * @example
   * 0
   */
  discountRetailPrice?: number;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * 110000
   */
  divisionCode?: string;
  /**
   * @remarks
   * The fuzzy available inventory.
   * 
   * @example
   * In stock
   * Out of stock
   * Low stock
   */
  fuzzyQuantity?: string;
  /**
   * @remarks
   * The list price in cents.
   * 
   * @example
   * 999900
   */
  markPrice?: number;
  /**
   * @remarks
   * The SKU image.
   * 
   * @example
   * https:////img.alicdn.com/imgextra///img.alicdn.com/imgextra/i2/2216003305543/O1CN010DEQCX1qokFYGRfPE_!!2216003305543.png
   */
  picUrl?: string;
  /**
   * @remarks
   * The suggested retail price in cents.
   * 
   * @example
   * 999900
   */
  platformPrice?: number;
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
   * The available inventory. <notice>Currently, the value of this field is uniformly set to -1 and has no practical significance.</notice>
   * 
   * @example
   * -1
   */
  quantity?: number;
  /**
   * @remarks
   * The SKU sort order.
   * 
   * @example
   * 3
   */
  rankValue?: number;
  /**
   * @remarks
   * The shop ID.
   * 
   * @example
   * 21000017
   */
  shopId?: string;
  /**
   * @remarks
   * The SKU remark.
   * 
   * @example
   * Sample SKU remark
   */
  skuAlias?: string;
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
   * sku
   */
  skuSpecs?: SkuSpec[];
  /**
   * @remarks
   * The SKU sales specifications used to assist frontend filtering.
   * 
   * @example
   * Color:Sky blue
   */
  skuSpecsCode?: string;
  /**
   * @remarks
   * The SKU control status.
   * 
   * @example
   * Online
   */
  skuStatus?: string;
  /**
   * @remarks
   * The reserved field.
   * 
   * @example
   * 0
   */
  suggestedRetailPrice?: number;
  /**
   * @remarks
   * The SKU title. <notice>Distributors should concatenate the value or valueAlias (if available) from the SkuSpec struct to form the SKU title for customer display. Do not use this field directly as the SKU title for customer display.</notice>
   * 
   * @example
   * Sky blue
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      barcode: 'barcode',
      canSell: 'canSell',
      discountRetailPrice: 'discountRetailPrice',
      divisionCode: 'divisionCode',
      fuzzyQuantity: 'fuzzyQuantity',
      markPrice: 'markPrice',
      picUrl: 'picUrl',
      platformPrice: 'platformPrice',
      price: 'price',
      productId: 'productId',
      quantity: 'quantity',
      rankValue: 'rankValue',
      shopId: 'shopId',
      skuAlias: 'skuAlias',
      skuId: 'skuId',
      skuSpecs: 'skuSpecs',
      skuSpecsCode: 'skuSpecsCode',
      skuStatus: 'skuStatus',
      suggestedRetailPrice: 'suggestedRetailPrice',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      barcode: 'string',
      canSell: 'boolean',
      discountRetailPrice: 'number',
      divisionCode: 'string',
      fuzzyQuantity: 'string',
      markPrice: 'number',
      picUrl: 'string',
      platformPrice: 'number',
      price: 'number',
      productId: 'string',
      quantity: 'number',
      rankValue: 'number',
      shopId: 'string',
      skuAlias: 'string',
      skuId: 'string',
      skuSpecs: { 'type': 'array', 'itemType': SkuSpec },
      skuSpecsCode: 'string',
      skuStatus: 'string',
      suggestedRetailPrice: 'number',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.skuSpecs)) {
      $dara.Model.validateArray(this.skuSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

