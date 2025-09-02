// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The strength of the monitoring rule. The strength of a monitoring rule indicates the importance of the rule. Valid values:
   * 
   * *   1: the monitoring rule is a strong rule.
   * *   0: the monitoring rule is a weak rule. You can specify whether a monitoring rule is a strong rule based on your business requirements. If a monitoring rule is a strong rule and the critical threshold is exceeded, a critical alert is reported and tasks that are associated with the rule are blocked from running.
   * 
   * @example
   * 1
   */
  blockType?: number;
  /**
   * @remarks
   * The checker ID. The value of this parameter corresponds to the ID at the frontend and is converted from the ID of the primary key.
   * 
   * @example
   * 9
   */
  checker?: number;
  /**
   * @remarks
   * The name of the checker.
   * 
   * @example
   * compared with a fixed value
   */
  checkerName?: string;
  /**
   * @remarks
   * The description of the monitoring rule.
   * 
   * @example
   * Verify that the primary key is unique
   */
  comment?: string;
  /**
   * @remarks
   * The threshold for a critical alert. The threshold indicates the deviation of the check result from the expected value. You can specify a value for the threshold based on your business requirements. If a monitoring rule is a strong rule and the critical threshold is exceeded, a critical alert is reported and tasks that are associated with the rule are blocked from running.
   * 
   * @example
   * 20
   */
  criticalThreshold?: string;
  /**
   * @remarks
   * The ID of the partition filter expression.
   * 
   * @example
   * 165523
   */
  entityId?: number;
  /**
   * @remarks
   * The expected value.
   * 
   * @example
   * 30
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
   * The monitoring rule ID.
   * 
   * @example
   * 123232
   */
  id?: number;
  /**
   * @remarks
   * The ID of the task that is associated with the partition filter expression.
   * 
   * @example
   * 8
   */
  methodId?: number;
  /**
   * @remarks
   * The method that is used to collect sample data, such as avg, count, sum, min, max, count_distinct, user_defined, table_count, table_size, table_dt_load_count, table_dt_refuseload_count, null_value, null_value/table_count, (table_count-count_distinct)/table_count, or table_count-count_distinct.
   * 
   * @example
   * table_count
   */
  methodName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to configure the monitoring rule.
   * 
   * @example
   * 1822931****
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
   * Indicates whether the monitoring rule is enabled.
   * 
   * @example
   * true
   */
  openSwitch?: boolean;
  /**
   * @remarks
   * The comparison operator of the monitoring rule.
   * 
   * @example
   * >=
   */
  operator?: string;
  /**
   * @remarks
   * Indicates whether the threshold is a dynamic threshold. Valid values:
   * 
   * *   0: The threshold is not a dynamic threshold.
   * *   1: The threshold is a dynamic threshold.
   * 
   * @example
   * 0
   */
  predictType?: number;
  /**
   * @remarks
   * The field whose data quality is checked based on the monitoring rule. This field is a column in the data source table that is monitored.
   * 
   * @example
   * id
   */
  property?: string;
  /**
   * @remarks
   * The name of the monitoring rule.
   * 
   * @example
   * View table fluctuations
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the monitoring rule.
   * 
   * @example
   * 0
   */
  ruleType?: number;
  /**
   * @remarks
   * The variable settings inserted before the custom rule. Format: x=a,y=b.
   * 
   * @example
   * x=a,y=b
   */
  taskSetting?: string;
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
   * SQL task table rows, 1,7, 30 days fluctuation test
   */
  templateName?: string;
  /**
   * @remarks
   * The trend of the check result.
   * 
   * @example
   * abs
   */
  trend?: string;
  /**
   * @remarks
   * The threshold for a warning alert. The threshold indicates the deviation of the check result from the expected value. You can customize this threshold based on your business requirements.
   * 
   * @example
   * 10
   */
  warningThreshold?: string;
  /**
   * @remarks
   * The filter condition or custom SQL statement that is used for monitoring.
   * 
   * @example
   * id>10
   */
  whereCondition?: string;
  static names(): { [key: string]: string } {
    return {
      blockType: 'BlockType',
      checker: 'Checker',
      checkerName: 'CheckerName',
      comment: 'Comment',
      criticalThreshold: 'CriticalThreshold',
      entityId: 'EntityId',
      expectValue: 'ExpectValue',
      fixCheck: 'FixCheck',
      id: 'Id',
      methodId: 'MethodId',
      methodName: 'MethodName',
      onDuty: 'OnDuty',
      onDutyAccountName: 'OnDutyAccountName',
      openSwitch: 'OpenSwitch',
      operator: 'Operator',
      predictType: 'PredictType',
      property: 'Property',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      taskSetting: 'TaskSetting',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      trend: 'Trend',
      warningThreshold: 'WarningThreshold',
      whereCondition: 'WhereCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockType: 'number',
      checker: 'number',
      checkerName: 'string',
      comment: 'string',
      criticalThreshold: 'string',
      entityId: 'number',
      expectValue: 'string',
      fixCheck: 'boolean',
      id: 'number',
      methodId: 'number',
      methodName: 'string',
      onDuty: 'string',
      onDutyAccountName: 'string',
      openSwitch: 'boolean',
      operator: 'string',
      predictType: 'number',
      property: 'string',
      ruleName: 'string',
      ruleType: 'number',
      taskSetting: 'string',
      templateId: 'number',
      templateName: 'string',
      trend: 'string',
      warningThreshold: 'string',
      whereCondition: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the monitoring rule.
   */
  data?: GetQualityRuleResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 401
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
   * The request ID.
   * 
   * @example
   * 576b9457-2cf5-4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: GetQualityRuleResponseBodyData,
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

