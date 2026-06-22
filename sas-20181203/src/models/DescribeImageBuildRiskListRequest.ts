// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBuildRiskListRequest extends $dara.Model {
  /**
   * @remarks
   * The **rule name** or **category name** of the build risk. You can call the [DescribeImageBuildRiskList](~~~~) operation to obtain the value. Valid values:
   * - If **CriteriaType** is set to **RiskKeyName**, the value is the **rule name** of the build risk.
   * - If **CriteriaType** is set to **RiskClassName**, the value is the **category name** of the build risk.
   * 
   * @example
   * no_user
   */
  criteria?: string;
  /**
   * @remarks
   * The query type of the build risk. Valid values:
   * - **RiskKeyName**: build risk rule name.
   * - **RiskClassName**: build risk category name.
   * 
   * @example
   * RiskKeyName
   */
  criteriaType?: string;
  /**
   * @remarks
   * The page number of the current page when paging is used. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language of the content in the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries per page when paging is used. Default value: 20. If you leave this parameter empty, 20 entries are returned per page.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - **high**: High.
   * 
   * - **medium**: Medium.
   * 
   * - **low**: Low.
   * 
   * @example
   * medium
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      criteriaType: 'CriteriaType',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      criteriaType: 'string',
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      riskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

