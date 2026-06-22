// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBaselineCheckSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster to query.
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to obtain this parameter.
   * 
   * @example
   * c60b77fe62093480db6164a3c2fa5****
   */
  clusterId?: string;
  /**
   * @remarks
   * The query condition of the baseline.
   * 
   * @example
   * Unauthorized access
   */
  criteria?: string;
  /**
   * @remarks
   * The query type of the baselines to query. Valid values:
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
   * The page number to display from the returned results. Minimum value: **1**. Default value: **1**, which indicates that the first page is displayed.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language type for requests and responses. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The risk level of the baselines to query. Separate multiple levels with commas (,). Valid values:
   * 
   * - **high**: high risk
   * 
   * - **medium**: medium risk
   * 
   * - **low**: low risk.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The collection of scan ranges.
   */
  scanRange?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      criteria: 'Criteria',
      criteriaType: 'CriteriaType',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      riskLevel: 'RiskLevel',
      scanRange: 'ScanRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      criteria: 'string',
      criteriaType: 'string',
      currentPage: 'number',
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

