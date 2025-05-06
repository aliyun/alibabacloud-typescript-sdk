// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMaskingRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of the clusters that belong to your Alibaba Cloud account, such as cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*****************
   */
  DBClusterId?: string;
  defaultAlgo?: string;
  /**
   * @remarks
   * Specifies whether to enable the specified masking rule. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > This parameter is valid only when the `RuleNameList` parameter is specfied.
   * 
   * @example
   * true
   */
  enable?: string;
  interfaceVersion?: string;
  maskingAlgo?: string;
  /**
   * @remarks
   * The parameter that is used to specify the masking rule that you want to modify and the value in the JSON format. All parameter values are of the string type. Example: `{"auto": {"databases": ["db1"], "tables": ["tb1"], "columns": ["c1,c2"] }, "description": "This rule will be applied to the columns c1 and c2 in table t1", "enabled": true, "applies_to": ["user"]}`. Where,
   * 
   * *   `"auto"`: specifies that the dynamic masking algorithm is supported. This parameter is required.
   * *   `"databases"`: Optional. The names of databases to which the masking rule is applied. Separate the names with commas (,). If you leave this parameter empty, the masking rule applies to all databases in the cluster.
   * *   `"tables"`: Optional. The names of tables to which the masking rule is applied. Separate the names with commas (,). If you leave this parameter empty, the rule applies to all tables in the cluster.
   * *   `"columns"`: Required. The names of fields to which the masking rule is applied. Separate the names with commas (,).
   * *   `"description"`: Optional. The description of the masking rule. The description is up to 64 characters in length.
   * *   `"enabled"`: Required. Specifies whether to enable the masking rule. Valid values: **true** (enable) and **false** (disable).
   * *   `"applies_to"`: The names of database accounts to which the masking rule is applied. Separate the names with commas (,).
   * *   `"exempted"`: The names of database accounts to which the masking rule is not applied. Separate the names with commas (,).
   * 
   * > 
   * 
   * *   If you specify `RuleName`, `RuleConfig` parameter is required.
   * 
   * *   You need to select either `"applies_to"` or `"exempted"`.
   * 
   * @example
   * {"auto": {"databases": ["db1"], "tables": ["tb1"], "columns": ["c1,c2"] }, "description": "This rule will be applied to the columns c1 and c2 in table t1", "enabled": true, "applies_to": ["user"]}
   */
  ruleConfig?: string;
  /**
   * @remarks
   * The name of the data masking rule. You can specify only one rule name at a time.
   * 
   * > 
   * 
   * *   You can call the [DescribeMaskingRules](https://help.aliyun.com/document_detail/212573.html) operation to query the details of all masking rules for a specified cluster, such as the names of the masking rules.
   * 
   * *   If the rule name does not exist in the cluster, the system automatically creates a masking rule based on the name and the value of `RuleConfig`.
   * 
   * @example
   * testrule
   */
  ruleName?: string;
  /**
   * @remarks
   * The list of masking rule names. You can specify one or more masking rules at a time. Separate the masking rule names with commas (,).
   * 
   * > You must specify either the `RuleName` or `RuleNameList` parameter.
   * 
   * @example
   * testrule
   */
  ruleNameList?: string;
  /**
   * @remarks
   * The version of the masking rule. Default value: v1. Valid values:
   * 
   * *   v1
   * *   v2
   * 
   * @example
   * v2
   */
  ruleVersion?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      defaultAlgo: 'DefaultAlgo',
      enable: 'Enable',
      interfaceVersion: 'InterfaceVersion',
      maskingAlgo: 'MaskingAlgo',
      ruleConfig: 'RuleConfig',
      ruleName: 'RuleName',
      ruleNameList: 'RuleNameList',
      ruleVersion: 'RuleVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      defaultAlgo: 'string',
      enable: 'string',
      interfaceVersion: 'string',
      maskingAlgo: 'string',
      ruleConfig: 'string',
      ruleName: 'string',
      ruleNameList: 'string',
      ruleVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

