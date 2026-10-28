// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCommissionableProductsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The actual start month in the yyyymm format.
   * 
   * @example
   * “202502”
   */
  actualStartMonth?: string;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * “oceanbase_obpre_public_intl”
   */
  commodityCode?: string;
  /**
   * @remarks
   * The commodity name.
   * 
   * @example
   * “ApsaraDB for OceanBase Pre”
   */
  commodityName?: string;
  /**
   * @remarks
   * Specifies whether the commodity is eligible for commission.
   * 
   * @example
   * Yes
   */
  eligibleForCommission?: string;
  /**
   * @remarks
   * Specifies whether the commodity is eligible for discounts.
   * 
   * @example
   * Yes
   */
  eligibleForDiscount?: string;
  /**
   * @remarks
   * Specifies whether the commodity is counted towards performance.
   * 
   * @example
   * Yes
   */
  eligibleForPerformance?: string;
  /**
   * @remarks
   * The actual end month in the yyyymm format.
   * 
   * @example
   * “202509”
   */
  endMonth?: string;
  /**
   * @remarks
   * Specifies whether the commodity is a product line incentive commodity.
   * 
   * @example
   * Yes
   */
  productCampaign?: string;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * “oceanbase”
   */
  productCode?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * “ApsaraDB for OceanBase”
   */
  productName?: string;
  /**
   * @remarks
   * Specifies whether the product is a core product.
   * 
   * @example
   * Yes
   */
  sevenCoreProducts?: string;
  /**
   * @remarks
   * The display status of the product.
   * 
   * @example
   * “ONLINE”
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      actualStartMonth: 'ActualStartMonth',
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
      eligibleForCommission: 'EligibleForCommission',
      eligibleForDiscount: 'EligibleForDiscount',
      eligibleForPerformance: 'EligibleForPerformance',
      endMonth: 'EndMonth',
      productCampaign: 'ProductCampaign',
      productCode: 'ProductCode',
      productName: 'ProductName',
      sevenCoreProducts: 'SevenCoreProducts',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualStartMonth: 'string',
      commodityCode: 'string',
      commodityName: 'string',
      eligibleForCommission: 'string',
      eligibleForDiscount: 'string',
      eligibleForPerformance: 'string',
      endMonth: 'string',
      productCampaign: 'string',
      productCode: 'string',
      productName: 'string',
      sevenCoreProducts: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommissionableProductsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the response. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of returned data.
   */
  data?: GetCommissionableProductsResponseBodyData[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2103a30617045934095083027d88c5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values: True and False. This parameter indicates only the success of the API call and does not indicate the success of subsequent business operations.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetCommissionableProductsResponseBodyData },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

