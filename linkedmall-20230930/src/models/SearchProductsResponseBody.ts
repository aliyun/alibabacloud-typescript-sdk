// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchProductsResponseBodyProductsCategoryChain extends $dara.Model {
  /**
   * @remarks
   * Category ID
   * 
   * @example
   * 201792301
   */
  categoryId?: number;
  /**
   * @remarks
   * Is leaf node
   * 
   * @example
   * false
   */
  isLeaf?: boolean;
  /**
   * @remarks
   * Level
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * Category name
   * 
   * @example
   * 名称测试
   */
  name?: string;
  /**
   * @remarks
   * Parent class ID
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
   * Brand name
   * 
   * @example
   * 绿植
   */
  bandName?: string;
  /**
   * @remarks
   * Reason for unsellable status
   * 
   * @example
   * 库存不足
   */
  canNotSellReason?: string;
  /**
   * @remarks
   * Whether the product is sellable (calculated value)
   * 
   * @example
   * true
   */
  canSell?: boolean;
  /**
   * @remarks
   * Category
   */
  categoryChain?: SearchProductsResponseBodyProductsCategoryChain[];
  /**
   * @remarks
   * Billing cycle
   */
  credit?: string[];
  /**
   * @remarks
   * Price difference range
   * 
   * @example
   * ￥-9998.95 ~ ￥-9977.90
   */
  diffPrice?: string;
  /**
   * @remarks
   * Distribution purchase price range
   * 
   * @example
   * ￥0.05 ~ ￥21.10
   */
  distributionPrice?: string;
  /**
   * @remarks
   * Distribution premium rate range
   * 
   * @example
   * -100.00% ~ -99.79%
   */
  distributionPriceRatio?: string;
  /**
   * @remarks
   * Source platform
   * 
   * @example
   * Taobao（来源淘宝）
   * Tmall（来源天猫）
   * Cbu（来源1688分销货盘）
   */
  externalPlatformType?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Last modified time.
   * 
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  gmtModified?: string;
  /**
   * @remarks
   * Whether the product is in inventory
   * 
   * @example
   * true
   */
  inGroup?: boolean;
  /**
   * @remarks
   * Inventory time
   * 
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  inGroupTime?: string;
  /**
   * @remarks
   * Inventory risk level
   * 
   * @example
   * Low
   */
  inventoryRiskLevel?: string;
  /**
   * @remarks
   * Invoice type
   * 
   * @example
   * HasInvoice
   */
  invoiceType?: string;
  /**
   * @remarks
   * LM product ID
   * 
   * @example
   * xxx-xxxxx
   */
  lmItemId?: string;
  /**
   * @remarks
   * Product main image URL
   * 
   * @example
   * https://img.alicdn.com/xxx.jpg
   */
  picUrl?: string;
  /**
   * @remarks
   * Suggested retail price range
   * 
   * @example
   * ￥9999.00 ~ ￥9999.00
   */
  platformPrice?: string;
  /**
   * @remarks
   * Strikethrough price range
   * 
   * @example
   * ￥9999.00 ~ ￥9999.00
   */
  platformReservePrice?: string;
  /**
   * @remarks
   * Product ID
   * 
   * @example
   * xxxxx
   */
  productId?: string;
  /**
   * @remarks
   * Product name
   * 
   * @example
   * 绿植
   */
  productName?: string;
  /**
   * @remarks
   * Channel store name
   * 
   * @example
   * xxx
   */
  shopName?: string;
  /**
   * @remarks
   * Accumulated sales volume
   * 
   * @example
   * 100
   */
  soldQuantity?: string;
  /**
   * @remarks
   * Tax code
   * 
   * @example
   * 3040203000000000000
   */
  taxCode?: string;
  /**
   * @remarks
   * Tax rate
   * 
   * @example
   * 600（6%）
   * -100（免税）
   */
  taxRate?: number;
  /**
   * @remarks
   * Sales pattern
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
   * Product collection
   */
  products?: SearchProductsResponseBodyProducts[];
  /**
   * @remarks
   * Total quantity
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      products: 'products',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

