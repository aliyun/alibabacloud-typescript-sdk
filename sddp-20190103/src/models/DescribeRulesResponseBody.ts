// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRulesResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 0
   */
  auditMode?: number;
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
   * The name of the content type of the sensitive data detection rule.
   * 
   * @example
   * Regular expression
   */
  categoryName?: string;
  /**
   * @remarks
   * The content in the sensitive data detection rule.
   * 
   * >  A built-in detection rule whose CustomType is 0 does not return the content of the rule.
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
  contentCategory?: string;
  /**
   * @remarks
   * The type of the sensitive data detection rule.
   * 
   * *   0: built-in rule
   * *   1: custom rule
   * 
   * @example
   * 1
   */
  customType?: number;
  /**
   * @remarks
   * The description of the sensitive data detection rule.
   * 
   * @example
   * The sensitive data detection rule is used to detect IP addresses.
   */
  description?: string;
  /**
   * @remarks
   * The display name of the account that is used to create the sensitive data detection rule.
   * 
   * @example
   * ****test
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the sensitive data detection rule is created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1545277010000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the sensitive data detection rule is modified. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1545277010000
   */
  gmtModified?: number;
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
   * The number of times that the sensitive data detection rule is hit.
   * 
   * @example
   * 3
   */
  hitTotalCount?: number;
  /**
   * @remarks
   * The ID of the sensitive data detection rule.
   * 
   * @example
   * 20000
   */
  id?: number;
  /**
   * @remarks
   * The username of the account that is used to create the sensitive data detection rule.
   * 
   * @example
   * det1111
   */
  loginName?: string;
  /**
   * @remarks
   * The key of the primary dimension.
   * 
   * @example
   * key
   */
  majorKey?: string;
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
   * @example
   * IP address
   */
  name?: string;
  /**
   * @remarks
   * The name of the service to which the data asset belongs. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the sensitive data detection rule is applied. Valid values include **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates OSS. The value 3 indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
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
   * The sensitivity level of data that hits the sensitive data detection rule. Valid values:
   * 
   * *   **N/A**: indicates that no sensitive data is detected.
   * *   **S1**: indicates the low sensitivity level.
   * *   **S2**: indicates the medium sensitivity level.
   * *   **S3**: indicates the high sensitivity level.
   * *   **S4**: indicates the highest sensitivity level.
   * 
   * @example
   * S2
   */
  riskLevelName?: string;
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
   * The status of the sensitive data detection rule. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The data asset type that is supported by the sensitive data detection rule. Valid values:
   * 
   * *   **0**: all data assets
   * *   **1**: structured data assets
   * *   **2**: unstructured data assets
   * 
   * @example
   * 2
   */
  supportForm?: number;
  /**
   * @remarks
   * The name of the service to which the data asset belongs. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
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
   * @example
   * 0
   */
  threatAnalysisStatus?: number;
  /**
   * @remarks
   * The ID of the account that is used to create the sensitive data detection rule.
   * 
   * @example
   * 0
   */
  userId?: number;
  /**
   * @remarks
   * The severity level. Valid values:
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
      auditMode: 'AuditMode',
      category: 'Category',
      categoryName: 'CategoryName',
      content: 'Content',
      contentCategory: 'ContentCategory',
      customType: 'CustomType',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupId: 'GroupId',
      hitTotalCount: 'HitTotalCount',
      id: 'Id',
      loginName: 'LoginName',
      majorKey: 'MajorKey',
      matchType: 'MatchType',
      modelRuleIds: 'ModelRuleIds',
      name: 'Name',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      statExpress: 'StatExpress',
      status: 'Status',
      supportForm: 'SupportForm',
      target: 'Target',
      templateRuleIds: 'TemplateRuleIds',
      threatAnalysisStatus: 'ThreatAnalysisStatus',
      userId: 'UserId',
      warnLevel: 'WarnLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditMode: 'number',
      category: 'number',
      categoryName: 'string',
      content: 'string',
      contentCategory: 'string',
      customType: 'number',
      description: 'string',
      displayName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupId: 'string',
      hitTotalCount: 'number',
      id: 'number',
      loginName: 'string',
      majorKey: 'string',
      matchType: 'number',
      modelRuleIds: 'string',
      name: 'string',
      productCode: 'string',
      productId: 'number',
      riskLevelId: 'number',
      riskLevelName: 'string',
      statExpress: 'string',
      status: 'number',
      supportForm: 'number',
      target: 'string',
      templateRuleIds: 'string',
      threatAnalysisStatus: 'number',
      userId: 'number',
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

export class DescribeRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The sensitive data detection rules.
   */
  items?: DescribeRulesResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 12
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 23
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
      items: { 'type': 'array', 'itemType': DescribeRulesResponseBodyItems },
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

