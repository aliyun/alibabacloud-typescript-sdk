// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SkuSpec } from "./SkuSpec";


export class Sku extends $dara.Model {
  /**
   * @example
   * 6922454329176
   */
  barcode?: string;
  /**
   * @example
   * true
   */
  canSell?: boolean;
  discountRetailPrice?: number;
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
   * https:////img.alicdn.com/imgextra///img.alicdn.com/imgextra/i2/2216003305543/O1CN010DEQCX1qokFYGRfPE_!!2216003305543.png
   */
  picUrl?: string;
  /**
   * @example
   * 999900
   */
  platformPrice?: number;
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
   * 3
   */
  rankValue?: number;
  /**
   * @example
   * 21000017
   */
  shopId?: string;
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
  skuSpecsCode?: string;
  /**
   * @example
   * Online
   */
  skuStatus?: string;
  suggestedRetailPrice?: number;
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

