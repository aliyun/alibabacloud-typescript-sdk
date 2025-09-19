// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBuildRiskListRequest extends $dara.Model {
  /**
   * @remarks
   * The **rule name** or **type name** of the risk. You can call the [DescribeImageBuildRiskList](~~~~) operation to obtain the name. Optional parameters:
   * 
   * *   If **CriteriaType** is set to **RiskKeyName**, you must specify a **rule name** for this parameter.
   * *   If **CriteriaType** is set to**RiskClassName**, you must specify a **type name** for this parameter.
   * 
   * @example
   * no_user
   */
  criteria?: string;
  /**
   * @remarks
   * The query type.of the risk. Valid values:
   * 
   * *   **RiskKeyName**: the rule name of the risk
   * *   **RiskClassName**: the type name of the risk
   * 
   * @example
   * RiskKeyName
   */
  criteriaType?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
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

