// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCategoryTemplateRuleListResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * Template rule for identifying ID card numbers
   */
  description?: string;
  /**
   * @remarks
   * The unique ID of the template rule.
   * 
   * @example
   * 100
   */
  id?: number;
  /**
   * @remarks
   * A comma-separated list of IDs of the associated atomic models.
   * 
   * @example
   * 1001,1002
   */
  identificationRuleIds?: string;
  /**
   * @remarks
   * The scope of data that the template rule scans. This parameter is a string converted from a JSON array. Each element in the JSON array represents a data scanning scope and contains the following fields:
   * 
   * - **Asset**: A string that indicates the asset type. Valid values include RDS, DRDS, PolarDB, OTS, ADB, OceanBase, and ODPS.
   * 
   * - **Content**: The specific scope of the asset to scan. This is an array of objects, where each object contains the following fields:
   * 
   *   - **Range**: A string that indicates the matching range. Valid values include instance, database, table, column, project (for MaxCompute assets only), bucket (for OSS assets only), and object (for OSS assets only).
   * 
   *   - **Operator**: A string that indicates the matching condition. Valid values include equals, regex (regular expression), prefix, and suffix.
   * 
   *   - **Value**: A string that indicates the content to match.
   * 
   * @example
   * [{"Asset":"RDS","Content":[{"Range":"database","Operator":"regex","Value":"register"}]},{"Asset":"RDS","Content":[{"Range":"table","Operator":"regex","Value":"register"}]},{"Asset":"RDS","Content":[{"Range":"column","Operator":"regex","Value":"register"}]},{"Asset":"ODPS","Content":[{"Range":"project","Operator":"regex","Value":"register"}]},{"Asset":"ODPS","Content":[{"Range":"table","Operator":"regex","Value":"register"}]},{"Asset":"ODPS","Content":[{"Range":"column","Operator":"regex","Value":"register"}]}]
   */
  identificationScope?: string;
  /**
   * @remarks
   * The name of the template rule.
   * 
   * @example
   * ID card
   */
  name?: string;
  /**
   * @remarks
   * The risk level of the template rule. The value ranges from **1** to **11**. Valid values:
   * 
   * - **1**: No risk.
   * 
   * - **2**: S1.
   * 
   * - **3**: S2.
   * 
   * - **4**: S3.
   * 
   * - **5**: S4.
   * 
   * - **6**: S5.
   * 
   * - **7**: S6.
   * 
   * - **8**: S7.
   * 
   * - **9**: S8.
   * 
   * - **10**: S9.
   * 
   * - **11**: S10.
   * 
   * - **null**: Indicates all risk levels, including No risk, S1, S2, S3, S4, S5, S6, S7, S8, S9, and S10.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The status of the template rule. Valid values:
   * 
   * - **0**: disabled.
   * 
   * - **1**: enabled.
   * 
   * - **null**: Represents all statuses, including enabled and disabled.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      identificationRuleIds: 'IdentificationRuleIds',
      identificationScope: 'IdentificationScope',
      name: 'Name',
      riskLevelId: 'RiskLevelId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      identificationRuleIds: 'string',
      identificationScope: 'string',
      name: 'string',
      riskLevelId: 'number',
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

export class DescribeCategoryTemplateRuleListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * A list of template rules.
   */
  items?: DescribeCategoryTemplateRuleListResponseBodyItems[];
  /**
   * @remarks
   * The number of template rules returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 136082B3-B21F-5E9D-B68E-991FFD205D24
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of rules in the template.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeCategoryTemplateRuleListResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

