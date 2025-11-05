// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCommissionableProductsResponseBodyData extends $dara.Model {
  /**
   * @example
   * “202502”
   */
  actualStartMonth?: string;
  /**
   * @example
   * “oceanbase_obpre_public_intl”
   */
  commodityCode?: string;
  /**
   * @example
   * “ApsaraDB for OceanBase Pre”
   */
  commodityName?: string;
  /**
   * @example
   * Yes
   */
  eligibleForCommission?: string;
  /**
   * @example
   * Yes
   */
  eligibleForDiscount?: string;
  /**
   * @example
   * “202509”
   */
  endMonth?: string;
  /**
   * @example
   * Yes
   */
  productCampaign?: string;
  /**
   * @example
   * “oceanbase”
   */
  productCode?: string;
  /**
   * @example
   * “ApsaraDB for OceanBase”
   */
  productName?: string;
  /**
   * @example
   * Yes
   */
  sevenCoreProducts?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: GetCommissionableProductsResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 2103a30617045934095083027d88c5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

