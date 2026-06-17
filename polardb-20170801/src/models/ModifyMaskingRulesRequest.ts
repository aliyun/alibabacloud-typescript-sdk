// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMaskingRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters in your account, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The default algorithm.
   * 
   * > You must specify either MaskingAlgo or DefaultAIgo.
   * 
   * @example
   * aes-128-gcm
   */
  defaultAlgo?: string;
  /**
   * @remarks
   * Enables or disables the specified data masking rules. Valid values:
   * 
   * - **true**: enables the specified rules.
   * 
   * - **false**: disables the specified rules.
   * 
   * > This parameter applies only when the `RuleNameList` parameter is specified.
   * 
   * @example
   * true
   */
  enable?: string;
  /**
   * @remarks
   * The type of rule to modify. Valid values:
   * 
   * v1: Modifies a data masking rule.
   * v2: Modifies an encryption rule.
   * 
   * @example
   * v1
   */
  interfaceVersion?: string;
  /**
   * @remarks
   * The masking algorithm. Specify one or more algorithms and their parameters. Format: `[{ "name": "algorithm_name", "params": {"key": "value"} }]`
   * 
   * @example
   * [{
   * "name": "aes-128-gcm"
   * }]
   */
  maskingAlgo?: string;
  /**
   * @remarks
   * A JSON string that specifies the rule configuration. Example: `{"auto": {"databases": ["db1"], "tables": ["tb1"], "columns": ["c1,c2"] }, "description": "This rule will be applied to the columns c1 and c2 in table t1", "enabled": true, "applies_to": ["user"]}`. The JSON string includes the following fields:
   * 
   * - `"auto"`: Required. The object that contains the configuration for the dynamic data masking algorithm.
   * 
   * - `"databases"`: Optional. The databases to which the rule applies. Separate multiple database names with a comma (,). If this parameter is omitted, the rule applies to all databases in the cluster.
   * 
   * - `"tables"`: Optional. The tables to which the rule applies. Separate multiple table names with a comma (,). If this parameter is omitted, the rule applies to all tables in the cluster.
   * 
   * - `"columns"`: Required. The columns to which the rule applies. Separate multiple column names with a comma (,).
   * 
   * - `"description"`: Optional. The rule description, up to 64 characters in length.
   * 
   * - `"enabled"`: Required. Specifies whether the data masking rule is enabled. Valid values: **true** (enabled) and **false** (disabled).
   * 
   * - `"applies_to"`: The database accounts to which the rule applies. Separate multiple account names with a comma (,).
   * 
   * - `"exempted"`: The database accounts that are exempt from the rule. Separate multiple account names with a comma (,).
   * 
   * > * If you specify the `RuleName` parameter, you must also specify the `RuleConfig` parameter.
   * >
   * > * You must specify either `"applies_to"` or `"exempted"`.
   * 
   * @example
   * {"auto": {"databases": ["db1"], "tables": ["tb1"], "columns": ["c1,c2"] }, "description": "This rule will be applied to the columns c1 and c2 in table t1", "enabled": true, "applies_to": ["user"]}
   */
  ruleConfig?: string;
  /**
   * @remarks
   * The name of the data masking rule. You can specify only one rule name at a time.
   * 
   * > - You can call the [DescribeMaskingRules](https://help.aliyun.com/document_detail/212573.html) operation to query the details of all data masking rules in the target cluster, including rule names.
   * >
   * > - If a rule with the specified name does not exist, the system creates a new one based on the provided `RuleConfig`.
   * 
   * @example
   * testrule
   */
  ruleName?: string;
  /**
   * @remarks
   * A comma-separated list of data masking rule names.
   * 
   * > You must specify either the `RuleName` or `RuleNameList` parameter.
   * 
   * @example
   * testrule
   */
  ruleNameList?: string;
  /**
   * @remarks
   * The version of the data masking rule. Valid values:
   * 
   * - v1 (default)
   * 
   * - v2
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

