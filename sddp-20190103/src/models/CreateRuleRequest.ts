// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The content type of the sensitive data detection rule. Valid values:
   * 
   * - **0**: keyword.
   * 
   * - **2**: regular expression.
   * 
   * @example
   * 0
   */
  category?: number;
  /**
   * @remarks
   * The content of the sensitive data detection rule. The content can be a regular expression or a keyword that is used to match sensitive data fields or text.
   * 
   * This parameter is required.
   * 
   * @example
   * (?:\\\\D|^)((?:(?:25[0-4]|2[0-4]\\\\d|1\\\\d{2}|[1-9]\\\\d{1})\\\\.)(?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){2}(?:25[0-5]|2[0-4]\\\\d|1[0-9]\\\\d|[1-9]\\\\d|[1-9]))(?:\\\\D|$)
   */
  content?: string;
  /**
   * @remarks
   * The content type. Valid values:
   * 
   * - **1**: SQL injection exploit.
   * 
   * - **2**: SQL injection bypass.
   * 
   * - **3**: stored procedure abuse.
   * 
   * - **4**: buffer overflow.
   * 
   * - **5**: error-based SQL injection.
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
   * The language of the content in the request and response. Valid values:
   * 
   * - **zh**: Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The match type. Valid values:
   * 
   * - **1**: rule-based match.
   * 
   * - **2**: dictionary-based match.
   * 
   * @example
   * 1
   */
  matchType?: number;
  /**
   * @remarks
   * The IDs of the model rules for sensitive data auditing.
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
   * The name of the service to which the data asset belongs. Valid values: **MaxCompute**, **OSS**, **ADS**, **OTS**, and **RDS**.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the data asset belongs. Valid values:
   * 
   * - **1**: MaxCompute
   * 
   * - **2**: OSS
   * 
   * - **3**: ADS
   * 
   * - **4**: OTS
   * 
   * - **5**: RDS
   * 
   * - **6**: SELF_DB
   * 
   * @example
   * 2
   */
  productId?: number;
  /**
   * @remarks
   * The sensitivity level ID of the sensitive data detection rule. Valid values:
   * 
   * - **1**: N/A. No sensitive data is detected.
   * 
   * - **2**: S1. Level 1 sensitive data.
   * 
   * - **3**: S2. Level 2 sensitive data.
   * 
   * - **4**: S3. Level 3 sensitive data.
   * 
   * - **5**: S4. Level 4 sensitive data.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * - **1**: data detection rule.
   * 
   * - **2**: audit policy.
   * 
   * - **3**: anomaly detection rule.
   * 
   * - **99**: custom rule.
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
   * 106.11.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The statistical expression.
   * 
   * @example
   * {"time":"24","groupby":"1003","having":[{"key":"2001","value":"50"}]}
   */
  statExpress?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * - **1**: Enabled.
   * 
   * - **0**: Disabled.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of data assets that the rule supports. Valid values:
   * 
   * - **0**: all assets.
   * 
   * - **1**: structured assets.
   * 
   * - **2**: unstructured assets.
   * 
   * @example
   * 1
   */
  supportForm?: number;
  /**
   * @remarks
   * The code of the service to which the rule applies. Valid values: **MaxCompute**, **OSS**, **ADS**, **OTS**, and **RDS**.
   * 
   * @example
   * MaxCompute
   */
  target?: string;
  /**
   * @remarks
   * The IDs of the template rules for sensitive data auditing.
   * 
   * @example
   * 1
   */
  templateRuleIds?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - **1**: Low.
   * 
   * - **2**: Medium.
   * 
   * - **3**: High.
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

