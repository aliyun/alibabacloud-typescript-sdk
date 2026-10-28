// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCommissionableProductsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The commodity codes. Separate multiple codes with commas.
   * 
   * @example
   * "oceanbase_obpre_public_intl,savingplan_common_public_intl"
   */
  commodityCodeList?: string;
  /**
   * @remarks
   * The fiscal year. If this parameter is left empty, the current fiscal year is used by default.
   * 
   * @example
   * “FY26”
   */
  fiscalYear?: string;
  /**
   * @remarks
   * The list of display statuses for commission-eligible commodities.
   */
  listShowStatusListShrink?: string;
  /**
   * @remarks
   * The current page number. Pages start from 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The product codes. Separate multiple codes with commas.
   * 
   * @example
   * "oceanbase"
   */
  pipCodeList?: string;
  /**
   * @remarks
   * The actual end month in the yyyymm format.
   * 
   * @example
   * “202509”
   */
  realEndMonth?: string;
  /**
   * @remarks
   * The actual start month in the yyyymm format.
   * 
   * @example
   * “202502”
   */
  realStartMonth?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCodeList: 'CommodityCodeList',
      fiscalYear: 'FiscalYear',
      listShowStatusListShrink: 'ListShowStatusList',
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
      listShowStatusListShrink: 'string',
      pageNo: 'number',
      pageSize: 'number',
      pipCodeList: 'string',
      realEndMonth: 'string',
      realStartMonth: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

