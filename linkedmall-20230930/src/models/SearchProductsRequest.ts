// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchProductsRequest extends $dara.Model {
  brandName?: string;
  categoryIds?: string[];
  /**
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  createEndTime?: string;
  /**
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  createStartTime?: string;
  distributionHighPrice?: number;
  /**
   * @example
   * 244（2.44%）
   */
  distributionHighPriceRatio?: number;
  distributionLowPrice?: number;
  /**
   * @example
   * 133（1.33%）
   */
  distributionLowPriceRatio?: number;
  highMarkPrice?: number;
  highPrice?: number;
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
  inGroupEndTime?: string;
  /**
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  inGroupStartTime?: string;
  /**
   * @example
   * Low
   */
  inventoryRiskLevel?: string;
  /**
   * @example
   * xxx-xxxxx
   */
  lmItemId?: string;
  lowMarkPrice?: number;
  lowPrice?: number;
  /**
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  modifyEndTime?: string;
  /**
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  modifyStartTime?: string;
  orderBy?: string;
  /**
   * @example
   * ASC
   */
  orderDirection?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * Taobao
   */
  platform?: string;
  /**
   * @example
   * xxxxxxx
   */
  productId?: string;
  productName?: string;
  /**
   * @example
   * Sellable
   */
  productStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PIDxxxx
   */
  purchaserId?: string;
  /**
   * @example
   * Rate0
   */
  taxRate?: string;
  /**
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

