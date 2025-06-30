// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The content type of the sensitive data detection rule. Valid values:
   * 
   * *   **0**: keyword
   * *   **2**: regular expression
   * 
   * @example
   * 2
   */
  category?: number;
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
   * The external cooperation channel. Valid values:
   * 
   * *   DAS
   * *   YAOCHI
   * 
   * @example
   * DAS
   */
  cooperationChannel?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The type of the sensitive data detection rule. Valid values:
   * 
   * *   **0**: built-in rule
   * *   **1**: custom rule
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
   * The parent group type of the rule.
   * 
   * @example
   * 4_1
   */
  groupId?: string;
  /**
   * @remarks
   * Specifies whether to allow earlier versions of request parameters to support keywords that are supported in later versions of request parameters. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * > To specify keywords as the content type of the sensitive data detection rule, you can set the Category parameter to 0 for earlier versions of request parameters and set the Category parameter to 5 for later versions of request parameters. You can specify the KeywordCompatible parameter based on your business requirements.
   * 
   * @example
   * true
   */
  keywordCompatible?: boolean;
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
   * *   1: rule-based match
   * *   2: dictionary-based match
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
   * \\*\\*\\* rule
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
   * The name of the service to which the data asset belongs. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * MaxCompute
   */
  productCode?: number;
  /**
   * @remarks
   * The ID of the service to which the sensitive data detection rule is applied. Valid values include **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates Object Storage Service (OSS). The value 3 indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 1
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
   * Specifies whether to query a simplified rule. The simplified rule contains only the rule name. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  simplify?: boolean;
  /**
   * @remarks
   * The status of the sensitive data detection rule. Valid values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
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
   * The severity level of the alert. Valid values:
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

