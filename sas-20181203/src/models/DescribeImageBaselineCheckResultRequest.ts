// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBaselineCheckResultRequest extends $dara.Model {
  /**
   * @remarks
   * The query condition for the baseline.
   * 
   * @example
   * ak_leak
   */
  criteria?: string;
  /**
   * @remarks
   * The query type of the baseline to query. Valid values:
   * 
   * - **BaselineNameAlias**: baseline name
   * 
   * - **BaselineClassAlias**: baseline category.
   * 
   * @example
   * BaselineNameAlias
   */
  criteriaType?: string;
  /**
   * @remarks
   * The page number of the current page when using paging. Default value: 20, which indicates the first page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The UUID of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * a910053dd4710173ecc9e9d8931f****
   */
  imageUuid?: string;
  /**
   * @remarks
   * The language type for the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page when using paging. Default value: **20**, which indicates that 20 logon configuration entries are displayed per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The risk level of the baseline to query. Separate multiple levels with commas (,). By default, all levels are included. Valid values:
   * 
   * - **high**: high risk
   * 
   * - **medium**: medium risk
   * 
   * - **low**: low risk.
   * 
   * @example
   * high,medium,low
   */
  riskLevel?: string;
  /**
   * @remarks
   * The scan scope.
   */
  scanRange?: string[];
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      criteriaType: 'CriteriaType',
      currentPage: 'CurrentPage',
      imageUuid: 'ImageUuid',
      lang: 'Lang',
      pageSize: 'PageSize',
      riskLevel: 'RiskLevel',
      scanRange: 'ScanRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      criteriaType: 'string',
      currentPage: 'number',
      imageUuid: 'string',
      lang: 'string',
      pageSize: 'number',
      riskLevel: 'string',
      scanRange: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scanRange)) {
      $dara.Model.validateArray(this.scanRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

