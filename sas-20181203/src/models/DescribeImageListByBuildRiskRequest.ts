// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageListByBuildRiskRequest extends $dara.Model {
  /**
   * @remarks
   * The value of the condition parameter.
   * 
   * @example
   * sas
   */
  criteria?: string;
  /**
   * @remarks
   * The name of the condition parameter. Valid values:
   * - **RepoNamespace**: namespace.
   * - **RepoName**: repository name.
   * 
   * @example
   * RepoNamespace
   */
  criteriaType?: string;
  /**
   * @remarks
   * The page number of the current page in paging query. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries per page in paging query. Default value: 20. If you leave this parameter empty, 20 entries are returned.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The key of the build risk rule. You can call the [DescribeImageBuildRiskList](~~~~) operation to obtain the RiskKey.
   * 
   * @example
   * no_user
   */
  riskKey?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * - **high**
   * - **medium**
   * - **low**.
   * 
   * @example
   * medium
   */
  riskLevel?: string;
  /**
   * @remarks
   * The status of the alert event to query. Valid values:
   * - **0**: Unhandled.
   * - **1**: Ignored.
   * - **2**: False positive.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      criteriaType: 'CriteriaType',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      riskKey: 'RiskKey',
      riskLevel: 'RiskLevel',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      criteriaType: 'string',
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      riskKey: 'string',
      riskLevel: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

