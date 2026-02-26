// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Category } from "./Category";
import { ProductExtendProperty } from "./ProductExtendProperty";
import { LimitRule } from "./LimitRule";
import { ProductSpec } from "./ProductSpec";
import { ProductProperty } from "./ProductProperty";
import { Sku } from "./Sku";


export class Product extends $dara.Model {
  /**
   * @example
   * Apple/苹果
   */
  brandName?: string;
  /**
   * @example
   * true
   */
  canSell?: boolean;
  categoryChain?: Category[];
  /**
   * @example
   * 201856501
   */
  categoryLeafId?: number;
  /**
   * @example
   * https://img.alicdn.com/descpath/O1CN01wciRDp22AEU14435dsf34
   */
  descPath?: string;
  /**
   * @example
   * 110000
   */
  divisionCode?: string;
  extendProperties?: ProductExtendProperty[];
  /**
   * @example
   * 100+
   */
  fuzzyQuantity?: string;
  /**
   * @remarks
   * images
   */
  images?: string[];
  inGroup?: boolean;
  limitRules?: LimitRule[];
  /**
   * @example
   * 21000017-4580902812
   */
  lmItemId?: string;
  /**
   * @example
   * https://img.alicdn.com/imgextra/i3/2214281521988/O1CN01w4vomR1QYYEx6nyr5_!!2214281521988.jpg
   */
  picUrl?: string;
  /**
   * @example
   * 660460842235822080
   */
  productId?: string;
  /**
   * @remarks
   * productSpecs
   */
  productSpecs?: ProductSpec[];
  /**
   * @example
   * Online
   */
  productStatus?: string;
  /**
   * @example
   * Normal
   */
  productType?: string;
  properties?: ProductProperty[];
  /**
   * @example
   * -1
   */
  quantity?: number;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  servicePromises?: string[];
  /**
   * @example
   * 21000017
   */
  shopId?: string;
  /**
   * @remarks
   * skus
   */
  skus?: Sku[];
  /**
   * @example
   * 100+
   */
  soldQuantity?: string;
  /**
   * @example
   * 3040203000000000000
   */
  taxCode?: string;
  /**
   * @example
   * 600
   */
  taxRate?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      brandName: 'brandName',
      canSell: 'canSell',
      categoryChain: 'categoryChain',
      categoryLeafId: 'categoryLeafId',
      descPath: 'descPath',
      divisionCode: 'divisionCode',
      extendProperties: 'extendProperties',
      fuzzyQuantity: 'fuzzyQuantity',
      images: 'images',
      inGroup: 'inGroup',
      limitRules: 'limitRules',
      lmItemId: 'lmItemId',
      picUrl: 'picUrl',
      productId: 'productId',
      productSpecs: 'productSpecs',
      productStatus: 'productStatus',
      productType: 'productType',
      properties: 'properties',
      quantity: 'quantity',
      requestId: 'requestId',
      servicePromises: 'servicePromises',
      shopId: 'shopId',
      skus: 'skus',
      soldQuantity: 'soldQuantity',
      taxCode: 'taxCode',
      taxRate: 'taxRate',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandName: 'string',
      canSell: 'boolean',
      categoryChain: { 'type': 'array', 'itemType': Category },
      categoryLeafId: 'number',
      descPath: 'string',
      divisionCode: 'string',
      extendProperties: { 'type': 'array', 'itemType': ProductExtendProperty },
      fuzzyQuantity: 'string',
      images: { 'type': 'array', 'itemType': 'string' },
      inGroup: 'boolean',
      limitRules: { 'type': 'array', 'itemType': LimitRule },
      lmItemId: 'string',
      picUrl: 'string',
      productId: 'string',
      productSpecs: { 'type': 'array', 'itemType': ProductSpec },
      productStatus: 'string',
      productType: 'string',
      properties: { 'type': 'array', 'itemType': ProductProperty },
      quantity: 'number',
      requestId: 'string',
      servicePromises: { 'type': 'array', 'itemType': 'string' },
      shopId: 'string',
      skus: { 'type': 'array', 'itemType': Sku },
      soldQuantity: 'string',
      taxCode: 'string',
      taxRate: 'number',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categoryChain)) {
      $dara.Model.validateArray(this.categoryChain);
    }
    if(Array.isArray(this.extendProperties)) {
      $dara.Model.validateArray(this.extendProperties);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.limitRules)) {
      $dara.Model.validateArray(this.limitRules);
    }
    if(Array.isArray(this.productSpecs)) {
      $dara.Model.validateArray(this.productSpecs);
    }
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    if(Array.isArray(this.servicePromises)) {
      $dara.Model.validateArray(this.servicePromises);
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

