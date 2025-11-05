// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCommissionableProductsRequest extends $dara.Model {
  /**
   * @example
   * "oceanbase_obpre_public_intl,savingplan_common_public_intl"
   */
  commodityCodeList?: string;
  /**
   * @example
   * “FY26”
   */
  fiscalYear?: string;
  listShowStatusList?: string[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * "oceanbase"
   */
  pipCodeList?: string;
  /**
   * @example
   * “202509”
   */
  realEndMonth?: string;
  /**
   * @example
   * “202502”
   */
  realStartMonth?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCodeList: 'CommodityCodeList',
      fiscalYear: 'FiscalYear',
      listShowStatusList: 'ListShowStatusList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      pipCodeList: 'PipCodeList',
      realEndMonth: 'RealEndMonth',
      realStartMonth: 'RealStartMonth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCodeList: 'string',
      fiscalYear: 'string',
      listShowStatusList: { 'type': 'array', 'itemType': 'string' },
      pageNo: 'number',
      pageSize: 'number',
      pipCodeList: 'string',
      realEndMonth: 'string',
      realStartMonth: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.listShowStatusList)) {
      $dara.Model.validateArray(this.listShowStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

