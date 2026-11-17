// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LimitRule } from "./LimitRule";
import { SkuSaleInfo } from "./SkuSaleInfo";


export class ProductSaleInfo extends $dara.Model {
  /**
   * @remarks
   * The calculated value that indicates whether the product is sellable.
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
   * The fuzzy inventory.
   * 
   * @example
   * In stock
   */
  fuzzyQuantity?: string;
  /**
   * @remarks
   * The purchase limit configuration.
   */
  limitRules?: LimitRule[];
  /**
   * @remarks
   * The LM product ID.
   * 
   * @example
   * 21000017-4580902812
   */
  lmItemId?: string;
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
   * The product status.
   * 
   * @example
   * Online
   */
  productStatus?: string;
  /**
   * @remarks
   * The inventory.
   * 
   * @example
   * 10
   */
  quantity?: number;
  /**
   * @remarks
   * The API request ID.
   * 
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @remarks
   * The channel shop ID.
   * 
   * @example
   * 21000017
   */
  shopId?: string;
  /**
   * @remarks
   * The SKU collection.
   */
  skus?: SkuSaleInfo[];
  /**
   * @remarks
   * The title.
   * 
   * @example
   * Money tree
   */
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

