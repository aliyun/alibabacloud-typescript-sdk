// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LimitRule } from "./LimitRule";
import { SkuSaleInfo } from "./SkuSaleInfo";


export class ProductSaleInfo extends $dara.Model {
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
  limitRules?: LimitRule[];
  /**
   * @example
   * 21000017-4580902812
   */
  lmItemId?: string;
  /**
   * @example
   * 660460842235822080
   */
  productId?: string;
  /**
   * @example
   * Online
   */
  productStatus?: string;
  /**
   * @example
   * 10
   */
  quantity?: number;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @example
   * 21000017
   */
  shopId?: string;
  skus?: SkuSaleInfo[];
  title?: string;
  static names(): { [key: string]: string } {
    return {
      canSell: 'canSell',
      divisionCode: 'divisionCode',
      fuzzyQuantity: 'fuzzyQuantity',
      limitRules: 'limitRules',
      lmItemId: 'lmItemId',
      productId: 'productId',
      productStatus: 'productStatus',
      quantity: 'quantity',
      requestId: 'requestId',
      shopId: 'shopId',
      skus: 'skus',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      divisionCode: 'string',
      fuzzyQuantity: 'string',
      limitRules: { 'type': 'array', 'itemType': LimitRule },
      lmItemId: 'string',
      productId: 'string',
      productStatus: 'string',
      quantity: 'number',
      requestId: 'string',
      shopId: 'string',
      skus: { 'type': 'array', 'itemType': SkuSaleInfo },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.limitRules)) {
      $dara.Model.validateArray(this.limitRules);
    }
    if(Array.isArray(this.skus)) {
      $dara.Model.validateArray(this.skus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

