// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchProductsResponseBodyProductsCategoryChain extends $dara.Model {
  /**
   * @example
   * 201792301
   */
  categoryId?: number;
  isLeaf?: boolean;
  /**
   * @example
   * 1
   */
  level?: number;
  name?: string;
  /**
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
  bandName?: string;
  canNotSellReason?: string;
  /**
   * @example
   * true
   */
  canSell?: boolean;
  categoryChain?: SearchProductsResponseBodyProductsCategoryChain[];
  credit?: string[];
  /**
   * @example
   * ￥-9998.95 ~ ￥-9977.90
   */
  diffPrice?: string;
  /**
   * @example
   * ￥0.05 ~ ￥21.10
   */
  distributionPrice?: string;
  /**
   * @example
   * -100.00% ~ -99.79%
   */
  distributionPriceRatio?: string;
  /**
   * @example
   * Taobao
   */
  externalPlatformType?: string;
  /**
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  gmtModified?: string;
  /**
   * @example
   * true
   */
  inGroup?: boolean;
  /**
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  inGroupTime?: string;
  /**
   * @example
   * Low
   */
  inventoryRiskLevel?: string;
  /**
   * @example
   * HasInvoice
   */
  invoiceType?: string;
  /**
   * @example
   * xxx-xxxxx
   */
  lmItemId?: string;
  /**
   * @example
   * https://img.alicdn.com/xxx.jpg
   */
  picUrl?: string;
  /**
   * @example
   * ￥9999.00 ~ ￥9999.00
   */
  platformPrice?: string;
  /**
   * @example
   * ￥9999.00 ~ ￥9999.00
   */
  platformReservePrice?: string;
  /**
   * @example
   * xxxxx
   */
  productId?: string;
  productName?: string;
  /**
   * @example
   * xxx
   */
  shopName?: string;
  /**
   * @example
   * 100
   */
  soldQuantity?: string;
  /**
   * @example
   * 3040203000000000000
   */
  taxCode?: string;
  taxRate?: number;
  /**
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
  products?: SearchProductsResponseBodyProducts[];
  /**
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

