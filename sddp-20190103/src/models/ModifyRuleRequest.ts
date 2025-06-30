// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The content type of the sensitive data detection rule. Valid values:
   * 
   * *   **2**: regular expression
   * *   **3**: algorithm
   * *   **5**: keyword
   * 
   * @example
   * 2
   */
  category?: number;
  /**
   * @remarks
   * The content of the sensitive data detection rule. You can specify a regular expression, an algorithm, or keywords that are used to match sensitive fields or text.
   * 
   * This parameter is required.
   * 
   * @example
   * (?:\\\\D|^)((?:(?:25[0-4]|2[0-4]\\\\d|1\\\\d{2}|[1-9]\\\\d{1})\\\\.)(?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){2}(?:25[0-5]|2[0-4]\\\\d|1[0-9]\\\\d|[1-9]\\\\d|[1-9]))(?:\\\\D|$)
   */
  content?: string;
  /**
   * @remarks
   * The ID of the sensitive data detection rule.
   * 
   * You can call the [DescribeRules](~~DescribeRules~~) operation to obtain the rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1****
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The match type. Valid values:
   * 
   * *   **1**: rule-based match
   * *   **2**: dictionary-based match
   * 
   * @example
   * 1
   */
  matchType?: number;
  /**
   * @remarks
   * The IDs of the models for sensitive data audit.
   * 
   * @example
   * 1452
   */
  modelRuleIds?: string;
  /**
   * @remarks
   * The name of the sensitive data detection rule.
   * 
   * You can call the [DescribeRules](~~DescribeRules~~) operation to obtain the rule name.
   * 
   * This parameter is required.
   * 
   * @example
   * esw
   */
  name?: string;
  /**
   * @remarks
   * The service to which the sensitive data detection rule is applied. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the sensitive data detection rule is applied. Valid values include **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates Object Storage Service (OSS). The value 3 indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The sensitivity level of the sensitive data that hits the sensitive data detection rule. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The type of the sensitive data detection rule. Valid values:
   * 
   * *   **1**: data detection rule
   * *   **2**: audit rule
   * *   **3**: anomalous event detection rule
   * 
   * @example
   * 1
   */
  ruleType?: number;
  /**
   * @remarks
   * The data assets supported by the sensitive data detection rule. Valid values:
   * 
   * *   **0**: all data assets
   * *   **1**: structured data assets
   * *   **2**: unstructured data assets
   * 
   * @example
   * 1
   */
  supportForm?: number;
  /**
   * @remarks
   * The IDs of the templates that are used to audit sensitive data.
   * 
   * @example
   * 1
   */
  templateRuleIds?: string;
  /**
   * @remarks
   * The risk level of the alert that is triggered by the sensitive data detection rule. Valid values:
   * 
   * *   **1**: low level
   * *   **2**: medium level
   * *   **3**: high level
   * 
   * @example
   * 1
   */
  warnLevel?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      id: 'Id',
      lang: 'Lang',
      matchType: 'MatchType',
      modelRuleIds: 'ModelRuleIds',
      name: 'Name',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      ruleType: 'RuleType',
      supportForm: 'SupportForm',
      templateRuleIds: 'TemplateRuleIds',
      warnLevel: 'WarnLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      content: 'string',
      id: 'number',
      lang: 'string',
      matchType: 'number',
      modelRuleIds: 'string',
      name: 'string',
      productCode: 'string',
      productId: 'number',
      riskLevelId: 'number',
      ruleType: 'number',
      supportForm: 'number',
      templateRuleIds: 'string',
      warnLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

