// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the sensitive data detection rule content. Valid values:
   * - **2**: regular expression.
   * - **3**: algorithm.
   * - **5**: keyword.
   * 
   * @example
   * 2
   */
  category?: number;
  /**
   * @remarks
   * The content of the sensitive data detection rule. The content can be a regular expression, algorithm, or keyword that is used to match sensitive data fields or text.
   * 
   * This parameter is required.
   * 
   * @example
   * (?:\\\\D|^)((?:(?:25[0-4]|2[0-4]\\\\d|1\\\\d{2}|[1-9]\\\\d{1})\\\\.)(?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){2}(?:25[0-5]|2[0-4]\\\\d|1[0-9]\\\\d|[1-9]\\\\d|[1-9]))(?:\\\\D|$)
   */
  content?: string;
  /**
   * @remarks
   * The unique ID of the sensitive data detection rule.
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
   * The language of the request and response. Default value: **zh_cn**. Valid values:
   * 
   * - **zh_cn**: Simplified Chinese.
   * - **en_us**: English (US).
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The match type. Valid values:
   * - **1**: rule match.
   * - **2**: dictionary match.
   * 
   * @example
   * 1
   */
  matchType?: number;
  /**
   * @remarks
   * The collection of model IDs associated with the sensitive data audit.
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
   * The resource type of the product that contains the sensitive data detection rule. Valid values:
   * - **MaxCompute**
   * - **OSS**
   * - **ADS**
   * - **OTS**
   * - **RDS**
   * - **SELF_DB**
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The product ID of the product that contains the sensitive data detection rule. Valid values:
   * - **1**: MaxCompute.
   * - **2**: OSS.
   * - **3**: ADS.
   * - **4**: OTS.
   * - **5**: RDS.
   * - **6**: SELF_DB.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The risk level ID of the sensitive data detection rule. Valid values:
   * - **1**: N/A. No sensitive data is detected.
   * - **2**: S1. Level-1 sensitive data.
   * - **3**: S2. Level-2 sensitive data.
   * - **4**: S3. Level-3 sensitive data.
   * - **5**: S4. Level-4 sensitive data.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The type of the sensitive data detection rule. Valid values:
   * - **1**: data detection rule.
   * - **2**: audit policy.
   * - **3**: anomalous activity rule.
   * 
   * @example
   * 1
   */
  ruleType?: number;
  /**
   * @remarks
   * The data asset type supported by the rule. Valid values:
   * - **0**: all assets.
   * - **1**: structured assets.
   * - **2**: unstructured assets.
   * 
   * @example
   * 1
   */
  supportForm?: number;
  /**
   * @remarks
   * The collection of template IDs associated with the sensitive data audit.
   * 
   * @example
   * 1
   */
  templateRuleIds?: string;
  /**
   * @remarks
   * The risk level of the sensitive data detection rule. Valid values:
   * - **1**: low.
   * - **2**: medium.
   * - **3**: high.
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

