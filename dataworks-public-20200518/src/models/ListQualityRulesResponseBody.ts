// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityRulesResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * The strength of the monitoring rule. The strength of a monitoring rule indicates the importance of the rule. Valid values:
   * 
   * *   1: The monitoring rule is a strong rule.
   * *   0: The monitoring rule is a weak rule. You can specify the strength of a monitoring rule based on your business requirements. If a monitoring rule is a strong rule and the critical threshold is exceeded, a critical alert is reported and tasks that are associated with the rule are blocked from running.
   * 
   * @example
   * 0
   */
  blockType?: number;
  /**
   * @remarks
   * The checker ID.
   * 
   * @example
   * 7
   */
  checkerId?: number;
  /**
   * @remarks
   * The description of the monitoring rule.
   * 
   * @example
   * Verify table rules
   */
  comment?: string;
  /**
   * @remarks
   * The threshold for a critical alert. The threshold indicates the deviation of the monitoring result from the expected value. You can specify a custom value for the threshold based on your business requirements. If a monitoring rule is a strong rule and the critical threshold is exceeded, a critical alert is reported and tasks that are associated with the rule are blocked from running.
   * 
   * @example
   * 40
   */
  criticalThreshold?: string;
  /**
   * @remarks
   * The ID of the partition filter expression.
   * 
   * @example
   * 1234
   */
  entityId?: number;
  /**
   * @remarks
   * The expected value.
   * 
   * @example
   * 1000
   */
  expectValue?: string;
  /**
   * @remarks
   * Indicates whether the monitoring is performed based on a fixed value.
   * 
   * @example
   * true
   */
  fixCheck?: boolean;
  /**
   * @remarks
   * The historical threshold for a critical alert.
   * 
   * @example
   * history max:80%,history min:50%
   */
  historyCriticalThreshold?: string;
  /**
   * @remarks
   * The historical threshold for a warning alert.
   * 
   * @example
   * history max:40%,history min:10%
   */
  historyWarningThreshold?: string;
  /**
   * @remarks
   * The monitoring rule ID.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The partition filter expression.
   * 
   * @example
   * dt=$[yyyymmdd]
   */
  matchExpression?: string;
  /**
   * @remarks
   * The ID of the task that is associated with the partition filter expression.
   * 
   * @example
   * 21
   */
  methodId?: number;
  /**
   * @remarks
   * The method that is used to collect sample data, such as avg, count, sum, min, max, count_distinct, user_defined, table_count, table_size, table_dt_load_count, table_dt_refuseload_count, null_value, null_value/table_count, (table_count-count_distinct)/table_count, or table_count-count_distinct.
   * 
   * @example
   * count/table_count
   */
  methodName?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account that is used to configure the monitoring rule.
   * 
   * @example
   * 1912****
   */
  onDuty?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account that is used to configure the monitoring rule.
   * 
   * @example
   * test
   */
  onDutyAccountName?: string;
  /**
   * @remarks
   * The name of the compute engine or data source.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * id
   */
  property?: string;
  /**
   * @remarks
   * The field that is used to associate with monitoring rules at the frontend. This parameter can be ignored.
   * 
   * @example
   * table_count
   */
  propertyKey?: string;
  /**
   * @remarks
   * The ID of the task that is associated with the partition filter expression.
   * 
   * @example
   * 132323
   */
  ruleCheckerRelationId?: number;
  /**
   * @remarks
   * The name of the monitoring rule.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the monitoring rule. Valid values:
   * 
   * *   0: The monitoring rule is created by the system.
   * *   1: The monitoring rule is created by a user.
   * *   2: The monitoring rule is a workspace-level rule.
   * 
   * @example
   * 0
   */
  ruleType?: number;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * dual
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the monitoring template.
   * 
   * @example
   * 7
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the monitoring template.
   * 
   * @example
   * Number of SQL task table rows, 1, 7, and 30 days wave detection
   */
  templateName?: string;
  /**
   * @remarks
   * The trend of the monitoring result.
   * 
   * @example
   * abs
   */
  trend?: string;
  /**
   * @remarks
   * The threshold for a warning alert. The threshold specifies the deviation of the monitoring result from the expected value. You can specify a custom value for the threshold based on your business requirements.
   * 
   * @example
   * 10
   */
  warningThreshold?: string;
  static names(): { [key: string]: string } {
    return {
      blockType: 'BlockType',
      checkerId: 'CheckerId',
      comment: 'Comment',
      criticalThreshold: 'CriticalThreshold',
      entityId: 'EntityId',
      expectValue: 'ExpectValue',
      fixCheck: 'FixCheck',
      historyCriticalThreshold: 'HistoryCriticalThreshold',
      historyWarningThreshold: 'HistoryWarningThreshold',
      id: 'Id',
      matchExpression: 'MatchExpression',
      methodId: 'MethodId',
      methodName: 'MethodName',
      onDuty: 'OnDuty',
      onDutyAccountName: 'OnDutyAccountName',
      projectName: 'ProjectName',
      property: 'Property',
      propertyKey: 'PropertyKey',
      ruleCheckerRelationId: 'RuleCheckerRelationId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      tableName: 'TableName',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      trend: 'Trend',
      warningThreshold: 'WarningThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockType: 'number',
      checkerId: 'number',
      comment: 'string',
      criticalThreshold: 'string',
      entityId: 'number',
      expectValue: 'string',
      fixCheck: 'boolean',
      historyCriticalThreshold: 'string',
      historyWarningThreshold: 'string',
      id: 'number',
      matchExpression: 'string',
      methodId: 'number',
      methodName: 'string',
      onDuty: 'string',
      onDutyAccountName: 'string',
      projectName: 'string',
      property: 'string',
      propertyKey: 'string',
      ruleCheckerRelationId: 'number',
      ruleName: 'string',
      ruleType: 'number',
      tableName: 'string',
      templateId: 'number',
      templateName: 'string',
      trend: 'string',
      warningThreshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The details of the monitoring rules.
   */
  rules?: ListQualityRulesResponseBodyDataRules[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 400
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      rules: { 'type': 'array', 'itemType': ListQualityRulesResponseBodyDataRules },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of monitoring rules.
   */
  data?: ListQualityRulesResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * You have no permission.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID. You can troubleshoot errors based on the ID.
   * 
   * @example
   * 38cbdef0-f6cf-49****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListQualityRulesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

