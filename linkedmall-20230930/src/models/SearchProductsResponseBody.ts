// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchProductsResponseBodyProductsCategoryChain extends $dara.Model {
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 201792301
   */
  categoryId?: number;
  /**
   * @remarks
   * Indicates whether the node is a leaf node.
   * 
   * @example
   * false
   */
  isLeaf?: boolean;
  /**
   * @remarks
   * The level.
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * Name test
   */
  name?: string;
  /**
   * @remarks
   * The parent category ID.
   * 
   * @example
   * 0
   */
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'categoryId',
      isLeaf: 'isLeaf',
      level: 'level',
      name: 'name',
      parentId: 'parentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      isLeaf: 'boolean',
      level: 'number',
      name: 'string',
      parentId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProductsResponseBodyProducts extends $dara.Model {
  /**
   * @remarks
   * The brand name.
   * 
   * @example
   * Plants
   */
  bandName?: string;
  /**
   * @remarks
   * The reason why the product is unavailable for sale.
   * 
   * @example
   * Insufficient inventory
   */
  canNotSellReason?: string;
  /**
   * @remarks
   * Indicates whether the product is available for sale. This is a calculated value.
   * 
   * @example
   * true
   */
  canSell?: boolean;
  /**
   * @remarks
   * The category chain.
   */
  categoryChain?: SearchProductsResponseBodyProductsCategoryChain[];
  /**
   * @remarks
   * The billing cycle.
   */
  credit?: string[];
  /**
   * @remarks
   * The price difference range.
   * 
   * @example
   * ￥-9998.95 ~ ￥-9977.90
   */
  diffPrice?: string;
  /**
   * @remarks
   * The distribution purchase price range.
   * 
   * @example
   * ￥0.05 ~ ￥21.10
   */
  distributionPrice?: string;
  /**
   * @remarks
   * The distribution premium rate range.
   * 
   * @example
   * -100.00% ~ -99.79%
   */
  distributionPriceRatio?: string;
  /**
   * @remarks
   * The source platform.
   * 
   * @example
   * Taobao (sourced from Taobao)
   * Tmall (sourced from Tmall)
   * Cbu (sourced from the 1688 distribution platform)
   */
  externalPlatformType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  gmtModified?: string;
  /**
   * @remarks
   * Specifies whether the product is added to the inventory.
   * 
   * @example
   * true
   */
  inGroup?: boolean;
  /**
   * @remarks
   * The time when the product was added to the inventory. The format is yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  inGroupTime?: string;
  /**
   * @remarks
   * The inventory risk level.
   * 
   * @example
   * Low
   */
  inventoryRiskLevel?: string;
  /**
   * @remarks
   * The invoice type.
   * 
   * @example
   * HasInvoice
   */
  invoiceType?: string;
  /**
   * @remarks
   * The LM product ID.
   * 
   * @example
   * xxx-xxxxx
   */
  lmItemId?: string;
  /**
   * @remarks
   * The main image URL of the product.
   * 
   * @example
   * https://img.alicdn.com/xxx.jpg
   */
  picUrl?: string;
  /**
   * @remarks
   * The suggested retail price range.
   * 
   * @example
   * ￥9999.00 ~ ￥9999.00
   */
  platformPrice?: string;
  /**
   * @remarks
   * The strikethrough price range.
   * 
   * @example
   * ￥9999.00 ~ ￥9999.00
   */
  platformReservePrice?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * xxxxx
   */
  productId?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * Plants
   */
  productName?: string;
  /**
   * @remarks
   * The channel store name.
   * 
   * @example
   * xxx
   */
  shopName?: string;
  /**
   * @remarks
   * The cumulative sales volume.
   * 
   * @example
   * 100
   */
  soldQuantity?: string;
  /**
   * @remarks
   * The tax code.
   * 
   * @example
   * 3040203000000000000
   */
  taxCode?: string;
  /**
   * @remarks
   * The tax rate.
   * 
   * @example
   * 600 (6%)
   * -100 (Tax-exempt)
   */
  taxRate?: number;
  /**
   * @remarks
   * The sales mode.
   * 
   * @example
   * JingXiao
   */
  tradeMode?: string;
  static names(): { [key: string]: string } {
    return {
      bandName: 'bandName',
      canNotSellReason: 'canNotSellReason',
      canSell: 'canSell',
      categoryChain: 'categoryChain',
      credit: 'credit',
      diffPrice: 'diffPrice',
      distributionPrice: 'distributionPrice',
      distributionPriceRatio: 'distributionPriceRatio',
      externalPlatformType: 'externalPlatformType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      inGroup: 'inGroup',
      inGroupTime: 'inGroupTime',
      inventoryRiskLevel: 'inventoryRiskLevel',
      invoiceType: 'invoiceType',
      lmItemId: 'lmItemId',
      picUrl: 'picUrl',
      platformPrice: 'platformPrice',
      platformReservePrice: 'platformReservePrice',
      productId: 'productId',
      productName: 'productName',
      shopName: 'shopName',
      soldQuantity: 'soldQuantity',
      taxCode: 'taxCode',
      taxRate: 'taxRate',
      tradeMode: 'tradeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandName: 'string',
      canNotSellReason: 'string',
      canSell: 'boolean',
      categoryChain: { 'type': 'array', 'itemType': SearchProductsResponseBodyProductsCategoryChain },
      credit: { 'type': 'array', 'itemType': 'string' },
      diffPrice: 'string',
      distributionPrice: 'string',
      distributionPriceRatio: 'string',
      externalPlatformType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      inGroup: 'boolean',
      inGroupTime: 'string',
      inventoryRiskLevel: 'string',
      invoiceType: 'string',
      lmItemId: 'string',
      picUrl: 'string',
      platformPrice: 'string',
      platformReservePrice: 'string',
      productId: 'string',
      productName: 'string',
      shopName: 'string',
      soldQuantity: 'string',
      taxCode: 'string',
      taxRate: 'number',
      tradeMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categoryChain)) {
      $dara.Model.validateArray(this.categoryChain);
    }
    if(Array.isArray(this.credit)) {
      $dara.Model.validateArray(this.credit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProductsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cursor for the next page.
   * 
   * @example
   * 899192313AB192938441CCW
   */
  nextCursor?: string;
  /**
   * @remarks
   * The product collection.
   */
  products?: SearchProductsResponseBodyProducts[];
  /**
   * @remarks
   * The total number of items.
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nextCursor: 'nextCursor',
      products: 'products',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextCursor: 'string',
      products: { 'type': 'array', 'itemType': SearchProductsResponseBodyProducts },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

