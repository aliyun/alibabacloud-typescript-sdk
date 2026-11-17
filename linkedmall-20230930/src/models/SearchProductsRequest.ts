// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchProductsRequest extends $dara.Model {
  /**
   * @remarks
   * The brand name.
   * 
   * @example
   * Plants
   */
  brandName?: string;
  /**
   * @remarks
   * The list of category IDs.
   */
  categoryIds?: string[];
  /**
   * @remarks
   * The end time of the creation. The format is yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  createEndTime?: string;
  /**
   * @remarks
   * The start time of the creation. The format is yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  createStartTime?: string;
  /**
   * @remarks
   * The cursor.
   * 
   * @example
   * 899192313AB192938441CCW
   */
  cursor?: string;
  /**
   * @remarks
   * The maximum distribution purchase price, in cents.
   * 
   * @example
   * 100
   */
  distributionHighPrice?: number;
  /**
   * @remarks
   * The maximum distribution premium rate. A value of 244 indicates 2.44%.
   * 
   * @example
   * 244
   */
  distributionHighPriceRatio?: number;
  /**
   * @remarks
   * The minimum distribution purchase price, in cents.
   * 
   * @example
   * 100
   */
  distributionLowPrice?: number;
  /**
   * @remarks
   * The minimum distribution premium rate. A value of 133 indicates 1.33%.
   * 
   * @example
   * 133
   */
  distributionLowPriceRatio?: number;
  /**
   * @remarks
   * The maximum strikethrough price, in cents.
   * 
   * @example
   * 100
   */
  highMarkPrice?: number;
  /**
   * @remarks
   * The maximum suggested retail price, in cents.
   * 
   * @example
   * 100
   */
  highPrice?: number;
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
   * The end time when the product was added to the inventory. The format is yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  inGroupEndTime?: string;
  /**
   * @remarks
   * The start time when the product was added to the inventory. The format is yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  inGroupStartTime?: string;
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
   * The LM product ID.
   * 
   * @example
   * xxx-xxxxx
   */
  lmItemId?: string;
  /**
   * @remarks
   * The minimum strikethrough price, in cents.
   * 
   * @example
   * 100
   */
  lowMarkPrice?: number;
  /**
   * @remarks
   * The minimum suggested retail price, in cents.
   * 
   * @example
   * 100
   */
  lowPrice?: number;
  /**
   * @remarks
   * The end time of the modification. The format is yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  modifyEndTime?: string;
  /**
   * @remarks
   * The start time of the modification. The format is yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  modifyStartTime?: string;
  /**
   * @remarks
   * The sort field.
   * > 
   * > - This parameter must be used in combination with the sort direction parameter.
   * 
   * @example
   * soldQuantity (sorts by sales volume. If not specified, the default is descending order of creation time)
   */
  orderBy?: string;
  /**
   * @remarks
   * The sort direction.
   * > 
   * > - This parameter must be used in combination with the sort field parameter.
   * 
   * @example
   * ASC
   */
  orderDirection?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of items per page.
   * > 
   * > - Maximum value: 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The source platform.
   * 
   * @example
   * Taobao (sourced from Taobao)
   * Tmall (sourced from Tmall)
   * Cbu (sourced from the 1688 distribution platform)
   */
  platform?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * xxxxxxx
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
   * The product status.
   * 
   * @example
   * Sellable
   */
  productStatus?: string;
  /**
   * @remarks
   * The ID of the purchaser.
   * 
   * This parameter is required.
   * 
   * @example
   * PIDxxxx
   */
  purchaserId?: string;
  /**
   * @remarks
   * The tax rate.
   * > 
   * > - You can combine multiple tax rate enum values. Separate the values with commas (,). Example: Rate0,Rate1.
   * > - HasRate cannot be combined with other enum values.
   * 
   * @example
   * Rate0
   */
  taxRate?: string;
  /**
   * @remarks
   * The sales mode.
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
      cursor: 'cursor',
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
      cursor: 'string',
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

