// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The content type of the sensitive data detection rule. Valid values:
   * 
   * *   **0**: keyword
   * *   **2**: regular expression
   * 
   * @example
   * 0
   */
  category?: number;
  /**
   * @remarks
   * The content of the sensitive data detection rule. You can specify a regular expression or keywords that are used to match sensitive fields or text.
   * 
   * This parameter is required.
   * 
   * @example
   * (?:\\\\D|^)((?:(?:25[0-4]|2[0-4]\\\\d|1\\\\d{2}|[1-9]\\\\d{1})\\\\.)(?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){2}(?:25[0-5]|2[0-4]\\\\d|1[0-9]\\\\d|[1-9]\\\\d|[1-9]))(?:\\\\D|$)
   */
  content?: string;
  /**
   * @remarks
   * The type of the content in the sensitive data detection rule. Valid values include **1**, **2**, **3**, **4**, and **5**. The value 1 indicates attempts to exploit SQL injections. The value 2 indicates bypass by using SQL injections. The value 3 indicates abuse of stored procedures. The value 4 indicates buffer overflow. The value 5 indicates SQL injections based on errors.
   * 
   * @example
   * 1
   */
  contentCategory?: number;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * ID card
   */
  description?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
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
   * This parameter is required.
   * 
   * @example
   * rule-tst
   */
  name?: string;
  /**
   * @remarks
   * The name of the service to which data in the column of the table belongs. Valid values include **MaxCompute**, **OSS**, **ADS**, **OTS**, and **RDS**.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the data asset belongs. Valid values include **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates Object Storage Service (OSS). The value 3 indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 2
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
   * *   **1**: sensitive data detection rule
   * *   **2**: audit rule
   * *   **3**: anomalous event detection rule
   * *   **99**: custom rule
   * 
   * @example
   * 1
   */
  ruleType?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 39.170.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The statistical expression.
   * 
   * @example
   * 1
   */
  statExpress?: string;
  /**
   * @remarks
   * Specifies whether to enable the sensitive data detection rule. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of the data asset. Valid values:
   * 
   * *   **0**: all data assets
   * *   **1**: structured data asset
   * *   **2**: unstructured data asset
   * 
   * > If you set the parameter to 1 or 2, rules that support all data assets and rules that support the queried data asset type are returned.
   * 
   * @example
   * 1
   */
  supportForm?: number;
  /**
   * @remarks
   * The code of the service to which the sensitive data detection rule is applied. Valid values include **MaxCompute**, **OSS**, **ADS**, **OTS**, and **RDS**.
   * 
   * @example
   * MaxCompute
   */
  target?: string;
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
   * The risk level of the alert that is triggered. Valid values:
   * 
   * *   **1**: low
   * *   **2**: medium
   * *   **3**: high
   * 
   * @example
   * 2
   */
  warnLevel?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      contentCategory: 'ContentCategory',
      description: 'Description',
      lang: 'Lang',
      matchType: 'MatchType',
      modelRuleIds: 'ModelRuleIds',
      name: 'Name',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      ruleType: 'RuleType',
      sourceIp: 'SourceIp',
      statExpress: 'StatExpress',
      status: 'Status',
      supportForm: 'SupportForm',
      target: 'Target',
      templateRuleIds: 'TemplateRuleIds',
      warnLevel: 'WarnLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      content: 'string',
      contentCategory: 'number',
      description: 'string',
      lang: 'string',
      matchType: 'number',
      modelRuleIds: 'string',
      name: 'string',
      productCode: 'string',
      productId: 'number',
      riskLevelId: 'number',
      ruleType: 'number',
      sourceIp: 'string',
      statExpress: 'string',
      status: 'number',
      supportForm: 'number',
      target: 'string',
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

