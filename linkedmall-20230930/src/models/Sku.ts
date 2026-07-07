// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SkuSpec } from "./SkuSpec";


export class Sku extends $dara.Model {
  /**
   * @remarks
   * 69 barcode
   * 
   * @example
   * 6922454329176
   */
  barcode?: string;
  /**
   * @remarks
   * Indicates whether the SKU is available for sale
   * 
   * @example
   * true
   */
  canSell?: boolean;
  /**
   * @remarks
   * Reserved field
   */
  discountRetailPrice?: number;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * 110000
   */
  divisionCode?: string;
  /**
   * @remarks
   * Fuzzy inventory availability
   * 
   * @example
   * 有货
   * 无货
   * 库存紧张
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
   * SKU image URL
   * 
   * @example
   * https:////img.alicdn.com/imgextra///img.alicdn.com/imgextra/i2/2216003305543/O1CN010DEQCX1qokFYGRfPE_!!2216003305543.png
   */
  picUrl?: string;
  /**
   * @remarks
   * Suggested retail price, in cents
   * 
   * @example
   * 999900
   */
  platformPrice?: number;
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
   * Available inventory. Note: This field is currently set to -1 for all SKUs and has no practical meaning.
   * 
   * @example
   * -1
   */
  quantity?: number;
  /**
   * @remarks
   * SKU sort order
   * 
   * @example
   * 3
   */
  rankValue?: number;
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
   * SKU note
   */
  skuAlias?: string;
  /**
   * @remarks
   * SKU ID
   * 
   * @example
   * 660460842235822081
   */
  skuId?: string;
  /**
   * @remarks
   * SKU specifications
   */
  skuSpecs?: SkuSpec[];
  /**
   * @remarks
   * SKU sales specification code. Used by the frontend to filter SKUs
   * 
   * @example
   * 颜色分类:天蓝色
   */
  skuSpecsCode?: string;
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
   * Reserved field
   */
  suggestedRetailPrice?: number;
  /**
   * @remarks
   * SKU title. Note: We recommend that distributors build the customer-facing SKU title by concatenating the value or valueAlias field from the SkuSpec struct (use `valueAlias` if it is present). Do not use this field directly as the customer-facing SKU title.
   * 
   * @example
   * 天蓝色
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

