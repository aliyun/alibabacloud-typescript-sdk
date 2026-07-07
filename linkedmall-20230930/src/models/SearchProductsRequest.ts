// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchProductsRequest extends $dara.Model {
  /**
   * @remarks
   * Brand name
   * 
   * @example
   * 绿植
   */
  brandName?: string;
  /**
   * @remarks
   * Collection of category IDs
   */
  categoryIds?: string[];
  /**
   * @remarks
   * Creation end time
   * 
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  createEndTime?: string;
  /**
   * @remarks
   * Creation start time
   * 
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  createStartTime?: string;
  /**
   * @remarks
   * Upper limit of distribution purchase price
   * 
   * @example
   * 100（单位：分）
   */
  distributionHighPrice?: number;
  /**
   * @remarks
   * Upper limit of distribution premium rate
   * 
   * @example
   * 244（2.44%）
   */
  distributionHighPriceRatio?: number;
  /**
   * @remarks
   * Lower limit of distribution purchase price
   * 
   * @example
   * 100（单位：分）
   */
  distributionLowPrice?: number;
  /**
   * @remarks
   * Lower limit of distribution premium rate
   * 
   * @example
   * 133（1.33%）
   */
  distributionLowPriceRatio?: number;
  /**
   * @remarks
   * Upper limit of strikethrough price
   * 
   * @example
   * 100（单位：分）
   */
  highMarkPrice?: number;
  /**
   * @remarks
   * Upper limit of suggested retail price
   * 
   * @example
   * 100（单位：分）
   */
  highPrice?: number;
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
   * End time of the product’s entry period.
   * 
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  inGroupEndTime?: string;
  /**
   * @remarks
   * Inventory start time
   * 
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  inGroupStartTime?: string;
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
   * LM product ID
   * 
   * @example
   * xxx-xxxxx
   */
  lmItemId?: string;
  /**
   * @remarks
   * Lower limit of strikethrough price
   * 
   * @example
   * 100（单位：分）
   */
  lowMarkPrice?: number;
  /**
   * @remarks
   * Lower limit of suggested retail price
   * 
   * @example
   * 100（单位：分）
   */
  lowPrice?: number;
  /**
   * @remarks
   * Modification end time
   * 
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  modifyEndTime?: string;
  /**
   * @remarks
   * Modification start time
   * 
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  modifyStartTime?: string;
  /**
   * @remarks
   * Sort field
   * 
   * > - Used in combination with the sort direction field
   * 
   * @example
   * soldQuantity（按销量排序，不填默认创建时间倒序)
   */
  orderBy?: string;
  /**
   * @remarks
   * Sort direction
   * 
   * > - Used in combination with the sort field
   * 
   * @example
   * ASC
   */
  orderDirection?: string;
  /**
   * @remarks
   * Page number
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * > - Maximum of 20 items per page
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Source platform
   * 
   * @example
   * Taobao（来源淘宝）
   * Tmall（来源天猫）
   * Cbu（来源1688分销货盘）
   */
  platform?: string;
  /**
   * @remarks
   * Product ID
   * 
   * @example
   * xxxxxxx
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
   * Product status
   * 
   * @example
   * Sellable
   */
  productStatus?: string;
  /**
   * @remarks
   * Purchaser ID
   * 
   * This parameter is required.
   * 
   * @example
   * PIDxxxx
   */
  purchaserId?: string;
  /**
   * @remarks
   * Tax rate
   * 
   * > - Supports combining multiple tax rate enumeration values as request parameters. Use commas to separate them, for example: Rate0,Rate1.
   * >
   * > - HasRate cannot be combined with other enumeration values as request parameters.
   * 
   * @example
   * Rate0
   */
  taxRate?: string;
  /**
   * @remarks
   * Sales pattern
   * 
   * @example
   * JingXiao
   */
  tradeModeAndCredit?: string;
  static names(): { [key: string]: string } {
    return {
      brandName: 'brandName',
      categoryIds: 'categoryIds',
      createEndTime: 'createEndTime',
      createStartTime: 'createStartTime',
      distributionHighPrice: 'distributionHighPrice',
      distributionHighPriceRatio: 'distributionHighPriceRatio',
      distributionLowPrice: 'distributionLowPrice',
      distributionLowPriceRatio: 'distributionLowPriceRatio',
      highMarkPrice: 'highMarkPrice',
      highPrice: 'highPrice',
      inGroup: 'inGroup',
      inGroupEndTime: 'inGroupEndTime',
      inGroupStartTime: 'inGroupStartTime',
      inventoryRiskLevel: 'inventoryRiskLevel',
      lmItemId: 'lmItemId',
      lowMarkPrice: 'lowMarkPrice',
      lowPrice: 'lowPrice',
      modifyEndTime: 'modifyEndTime',
      modifyStartTime: 'modifyStartTime',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      platform: 'platform',
      productId: 'productId',
      productName: 'productName',
      productStatus: 'productStatus',
      purchaserId: 'purchaserId',
      taxRate: 'taxRate',
      tradeModeAndCredit: 'tradeModeAndCredit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandName: 'string',
      categoryIds: { 'type': 'array', 'itemType': 'string' },
      createEndTime: 'string',
      createStartTime: 'string',
      distributionHighPrice: 'number',
      distributionHighPriceRatio: 'number',
      distributionLowPrice: 'number',
      distributionLowPriceRatio: 'number',
      highMarkPrice: 'number',
      highPrice: 'number',
      inGroup: 'boolean',
      inGroupEndTime: 'string',
      inGroupStartTime: 'string',
      inventoryRiskLevel: 'string',
      lmItemId: 'string',
      lowMarkPrice: 'number',
      lowPrice: 'number',
      modifyEndTime: 'string',
      modifyStartTime: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      platform: 'string',
      productId: 'string',
      productName: 'string',
      productStatus: 'string',
      purchaserId: 'string',
      taxRate: 'string',
      tradeModeAndCredit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categoryIds)) {
      $dara.Model.validateArray(this.categoryIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

