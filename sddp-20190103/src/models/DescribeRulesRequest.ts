// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of content in the sensitive data detection rule. Valid values:
   * 
   * - **0**: keyword
   * 
   * - **2**: regular expression
   * 
   * @example
   * 2
   */
  category?: number;
  /**
   * @remarks
   * The content type. Valid values:
   * 
   * - **1**: SQL injection exploits
   * 
   * - **2**: SQL injection bypass attempts
   * 
   * - **3**: stored procedure abuse
   * 
   * - **4**: buffer overflows
   * 
   * - **5**: error-based SQL injections
   * 
   * @example
   * 1
   */
  contentCategory?: number;
  /**
   * @remarks
   * The source of the external cooperation request. Valid values:
   * 
   * - DAS
   * 
   * - YAOCHI
   * 
   * @example
   * DAS
   */
  cooperationChannel?: string;
  /**
   * @remarks
   * The page number of the paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The type of the sensitive data detection rule. Valid values:
   * 
   * - **0**: built-in
   * 
   * - **1**: custom
   * 
   * @example
   * 1
   */
  customType?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * The parent group of the rule.
   * 
   * @example
   * 4_1
   */
  groupId?: string;
  /**
   * @remarks
   * Specifies whether the keyword is compatible with earlier versions. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * > In earlier versions, the Category parameter for keywords had a value of 0. In the current version, it has a value of 5. Enable this parameter based on your business needs.
   * 
   * @example
   * true
   */
  keywordCompatible?: boolean;
  /**
   * @remarks
   * The language of the request and response messages. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The match type. Valid values:
   * 
   * - 1: rule-based match
   * 
   * - 2: dictionary-based match
   * 
   * @example
   * 1
   */
  matchType?: number;
  /**
   * @remarks
   * The name of the sensitive data detection rule. Fuzzy match is supported.
   * 
   * @example
   * ***Rule
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 12
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the service to which the data asset belongs. Valid values:
   * 
   * - **MaxCompute**
   * 
   * - **OSS**
   * 
   * - **ADS**
   * 
   * - **OTS**
   * 
   * - **RDS**
   * 
   * - **SELF_DB**
   * 
   * @example
   * MaxCompute
   */
  productCode?: number;
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
   * 1
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
   * The type of the sensitive data detection rule. Valid values:
   * 
   * - **1**: data detection rule
   * 
   * - **2**: audit policy
   * 
   * - **3**: anomaly detection rule
   * 
   * - **99**: custom rule
   * 
   * @example
   * 1
   */
  ruleType?: number;
  /**
   * @remarks
   * Specifies whether to return a simplified version of the rule that contains only the rule name. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  simplify?: boolean;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - **1**: Normal
   * 
   * - **0**: Disabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of data asset that the rule supports. Valid values:
   * 
   * - **0**: all assets
   * 
   * - **1**: structured assets
   * 
   * - **2**: unstructured assets
   * 
   * > When you query for rules that support structured or unstructured assets, the response also includes rules that support all asset types.
   * 
   * @example
   * 1
   */
  supportForm?: number;
  /**
   * @remarks
   * The risk level.
   * 
   * - **1**: Low
   * 
   * - **2**: Medium
   * 
   * - **3**: High
   * 
   * @example
   * 2
   */
  warnLevel?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      contentCategory: 'ContentCategory',
      cooperationChannel: 'CooperationChannel',
      currentPage: 'CurrentPage',
      customType: 'CustomType',
      featureType: 'FeatureType',
      groupId: 'GroupId',
      keywordCompatible: 'KeywordCompatible',
      lang: 'Lang',
      matchType: 'MatchType',
      name: 'Name',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      ruleType: 'RuleType',
      simplify: 'Simplify',
      status: 'Status',
      supportForm: 'SupportForm',
      warnLevel: 'WarnLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      contentCategory: 'number',
      cooperationChannel: 'string',
      currentPage: 'number',
      customType: 'number',
      featureType: 'number',
      groupId: 'string',
      keywordCompatible: 'boolean',
      lang: 'string',
      matchType: 'number',
      name: 'string',
      pageSize: 'number',
      productCode: 'number',
      productId: 'number',
      riskLevelId: 'number',
      ruleType: 'number',
      simplify: 'boolean',
      status: 'number',
      supportForm: 'number',
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

