// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRulesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The audit mode.
   * 
   * @example
   * 0
   */
  auditMode?: number;
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
   * The name of the content type for the sensitive data detection rule.
   * 
   * @example
   * Regular expression
   */
  categoryName?: string;
  /**
   * @remarks
   * The content of the sensitive data detection rule.
   * 
   * > The content of a built-in rule, for which CustomType is 0, is not returned.
   * 
   * @example
   * (?:\\\\D|^)((?:(?:25[0-4]|2[0-4]\\\\d|1\\\\d{2}|[1-9]\\\\d{1})\\\\.)(?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){2}(?:25[0-5]|2[0-4]\\\\d|1[0-9]\\\\d|[1-9]\\\\d|[1-9]))(?:\\\\D|$)
   */
  content?: string;
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
  contentCategory?: string;
  /**
   * @remarks
   * The type of the sensitive data detection rule.
   * 
   * - 0: built-in
   * 
   * - 1: custom
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
   * Used to identify IP addresses
   */
  description?: string;
  /**
   * @remarks
   * The display name of the user who created the sensitive data detection rule.
   * 
   * @example
   * ****test
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the sensitive data detection rule was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1545277010000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the sensitive data detection rule was last modified. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1545277010000
   */
  gmtModified?: number;
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
   * The number of times the rule was hit.
   * 
   * @example
   * 3
   */
  hitTotalCount?: number;
  /**
   * @remarks
   * The unique ID of the sensitive data detection rule.
   * 
   * @example
   * 20000
   */
  id?: number;
  /**
   * @remarks
   * The logon name of the user who created the sensitive data detection rule.
   * 
   * @example
   * det1111
   */
  loginName?: string;
  /**
   * @remarks
   * The primary dimension key.
   * 
   * @example
   * key
   */
  majorKey?: string;
  /**
   * @remarks
   * The match type. Valid values:
   * 
   * - **1**: rule-based match
   * 
   * - **2**: dictionary-based match
   * 
   * @example
   * 1
   */
  matchType?: number;
  /**
   * @remarks
   * A collection of model IDs for sensitive data auditing.
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
   * The name of the sensitivity level for the sensitive data detection rule. Valid values:
   * 
   * - **N/A**: No sensitive data is detected.
   * 
   * - **S1**: Level 1 sensitive data.
   * 
   * - **S2**: Level 2 sensitive data.
   * 
   * - **S3**: Level 3 sensitive data.
   * 
   * - **S4**: Level 4 sensitive data.
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
   * The detection status of the sensitive data detection rule. Valid values:
   * 
   * - **0**: disabled
   * 
   * - **1**: enabled
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
   * @example
   * 2
   */
  supportForm?: number;
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
  target?: string;
  /**
   * @remarks
   * A collection of template IDs for sensitive data auditing.
   * 
   * @example
   * 1
   */
  templateRuleIds?: string;
  /**
   * @remarks
   * The threat analysis mode status. Valid values: 0 (disabled), 1 (enabled).
   * 
   * @example
   * 0
   */
  threatAnalysisStatus?: number;
  /**
   * @remarks
   * The ID of the user who created the sensitive data detection rule.
   * 
   * @example
   * 0
   */
  userId?: number;
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
   * A list of sensitive data detection rules.
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

