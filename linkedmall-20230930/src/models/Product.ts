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
   * @remarks
   * The brand name.
   * 
   * @example
   * Apple
   */
  brandName?: string;
  /**
   * @remarks
   * The calculated value indicating whether the product is available for sale.
   * 
   * @example
   * true
   */
  canSell?: boolean;
  /**
   * @remarks
   * The category chain.
   */
  categoryChain?: Category[];
  /**
   * @remarks
   * The leaf category ID.
   * 
   * @example
   * 201****501
   */
  categoryLeafId?: number;
  /**
   * @remarks
   * The product details URL.
   * 
   * @example
   * https://img.alicdn.com/descpath/O1CN01wciRDp22AEU1*******f34
   */
  descPath?: string;
  /**
   * @remarks
   * The division code.
   * 
   * @example
   * 110000
   */
  divisionCode?: string;
  /**
   * @remarks
   * The extended product properties.
   */
  extendProperties?: ProductExtendProperty[];
  /**
   * @remarks
   * The approximate inventory.
   * 
   * @example
   * In stock
   */
  fuzzyQuantity?: string;
  /**
   * @remarks
   * images
   */
  images?: string[];
  /**
   * @remarks
   * The warehousing status of the product.
   * 
   * @example
   * True
   */
  inGroup?: boolean;
  /**
   * @remarks
   * The purchase limit rules.
   */
  limitRules?: LimitRule[];
  /**
   * @remarks
   * The LM product ID.
   * 
   * @example
   * 2100****7-458****812
   */
  lmItemId?: string;
  /**
   * @remarks
   * The product main image.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i3/221*******988/O1CN01w4vomR1QYYEx6nyr5_!!221******988.jpg
   */
  picUrl?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * 660460842******080
   */
  productId?: string;
  /**
   * @remarks
   * The product specifications.
   */
  productSpecs?: ProductSpec[];
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
   * The product type.
   * 
   * @example
   * Normal
   */
  productType?: string;
  /**
   * @remarks
   * The product properties.
   */
  properties?: ProductProperty[];
  /**
   * @remarks
   * The inventory.
   * > 
   * > - This field is currently a fixed value of -1 and can be ignored.
   * 
   * @example
   * -1
   */
  quantity?: number;
  /**
   * @remarks
   * The API request ID.
   * 
   * @example
   * 3239281273******823
   */
  requestId?: string;
  /**
   * @remarks
   * The service commitments.<notice>Service commitments are maintained by suppliers. If suppliers fail to maintain or update them promptly, the service commitment labels for some products may be inaccurate. Distributors should display these commitments to their customers with caution.</notice>
   */
  servicePromises?: string[];
  /**
   * @remarks
   * The channel store ID.
   * 
   * @example
   * 210*****7
   */
  shopId?: string;
  /**
   * @remarks
   * skus
   */
  skus?: Sku[];
  /**
   * @remarks
   * The sales volume.
   * 
   * @example
   * 100+
   */
  soldQuantity?: string;
  /**
   * @remarks
   * The tax code.
   * 
   * @example
   * 3040203000*******000
   */
  taxCode?: string;
  /**
   * @remarks
   * The tax rate.
   * 
   * @example
   * 600
   */
  taxRate?: number;
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

