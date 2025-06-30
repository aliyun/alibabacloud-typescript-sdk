// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCategoryTemplateRuleListResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * Rule for identifying ID card numbers
   */
  description?: string;
  /**
   * @remarks
   * The unique ID of the rule.
   * 
   * @example
   * 100
   */
  id?: number;
  /**
   * @remarks
   * The IDs of sensitive data types. Multiple IDs are separated by commas (,).
   * 
   * @example
   * 1001,1002
   */
  identificationRuleIds?: string;
  /**
   * @remarks
   * The scan scope of the rule. The value is a JSON array of the STRING type. Each element in a JSON array indicates a scan scope that contains the following fields:
   * 
   * *   **Asset**: the data asset type. Valid values: RDS, DRDS, PolarDB, OTS, ADB, and OceanBase. The value is of the STRING type.
   * 
   * *   **Content**: the scan scope. The value is of the STRING type. Each element in a JSON array indicates a scan scope that contains the following fields:
   * 
   *     *   **Range**: the matching condition. Valid values: Instance, database, table, column, project, bucket, and object. The value project is valid only for data assets in MaxCompute. The values bucket and object are valid only for data assets in Object Storage Service (OSS). The value of this parameter is of the STRING type.
   *     *   **Operator**: the operator. Valid values: equals, regex, prefix, and suffix. The operator equals indicates a full match. The operator regex indicates a match by regular expression. The operator prefix indicates a match by prefix. The operator suffix indicates a match by suffix.
   *     *   **Value**: the matching content. The value is of the STRING type.
   * 
   * @example
   * [{"Asset":"RDS","Content":[{"Range":"database","Operator":"regex","Value":"register"}]},{"Asset":"RDS","Content":[{"Range":"table","Operator":"regex","Value":"register"}]},{"Asset":"RDS","Content":[{"Range":"column","Operator":"regex","Value":"register"}]},{"Asset":"ODPS","Content":[{"Range":"project","Operator":"regex","Value":"register"}]},{"Asset":"ODPS","Content":[{"Range":"table","Operator":"regex","Value":"register"}]},{"Asset":"ODPS","Content":[{"Range":"column","Operator":"regex","Value":"register"}]}]
   */
  identificationScope?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * ID card number
   */
  name?: string;
  /**
   * @remarks
   * The sensitivity level of the data that is not compliant with the rule. Valid values: **1** to **11**.
   * 
   * *   **1**: No sensitive data is detected.
   * *   **2**: indicates the S1 sensitivity level.
   * *   **3**: indicates the S2 sensitivity level.
   * *   **4**: indicates the S3 sensitivity level.
   * *   **5**: indicates the S4 sensitivity level.
   * *   **6**: indicates the S5 sensitivity level.
   * *   **7**: indicates the S6 sensitivity level.
   * *   **8**: indicates the S7 sensitivity level.
   * *   **9**: indicates the S8 sensitivity level.
   * *   **10**: indicates the S9 sensitivity level.
   * *   **11**: indicates the S10 sensitivity level.
   * *   **null**: indicates all preceding sensitivity levels.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * *   **null**: all states
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

