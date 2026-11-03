// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsDetails extends $dara.Model {
  /**
   * @remarks
   * The final value used to compare with the threshold.
   * 
   * @example
   * 100.0
   */
  checkedValue?: string;
  /**
   * @remarks
   * The referenced sample value used as the baseline for calculating the CheckedValue.
   * 
   * @example
   * 0.0
   */
  referencedValue?: string;
  /**
   * @remarks
   * The status of the final comparison result.
   * 
   * @example
   * Passed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkedValue: 'CheckedValue',
      referencedValue: 'ReferencedValue',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkedValue: 'string',
      referencedValue: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsCritical extends $dara.Model {
  /**
   * @remarks
   * The check expression.
   * 
   * @example
   * $checkValue > 0.01
   */
  expression?: string;
  /**
   * @remarks
   * The comparison operator. Valid values:
   * - \\>
   * - \\>=
   * - <
   * - <=
   * - !=
   * - =
   * 
   * @example
   * >
   */
  operator?: string;
  /**
   * @remarks
   * The threshold value.
   * 
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsExpected extends $dara.Model {
  /**
   * @remarks
   * The threshold expression.
   * 
   * @example
   * $checkValue > 0.01
   */
  expression?: string;
  /**
   * @remarks
   * The comparison operator. Valid values:
   * - \\>
   * - \\>=
   * - <
   * - <=
   * - !=
   * - =
   * 
   * @example
   * >
   */
  operator?: string;
  /**
   * @remarks
   * The threshold value.
   * 
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsWarned extends $dara.Model {
  /**
   * @remarks
   * The threshold expression.
   * 
   * @example
   * $checkValue > 0.01
   */
  expression?: string;
  /**
   * @remarks
   * The comparison operator. Valid values:
   * - \\>
   * - \\>=
   * - <
   * - <=
   * - !=
   * - =
   * 
   * @example
   * >
   */
  operator?: string;
  /**
   * @remarks
   * The threshold value.
   * 
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholds extends $dara.Model {
  /**
   * @remarks
   * The threshold settings for critical alerts.
   */
  critical?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsCritical;
  /**
   * @remarks
   * The expected threshold settings.
   */
  expected?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsExpected;
  /**
   * @remarks
   * The threshold settings for warning alerts.
   */
  warned?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsCritical,
      expected: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsExpected,
      warned: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsWarned,
    };
  }

  validate() {
    if(this.critical && typeof (this.critical as any).validate === 'function') {
      (this.critical as any).validate();
    }
    if(this.expected && typeof (this.expected as any).validate === 'function') {
      (this.expected as any).validate();
    }
    if(this.warned && typeof (this.warned as any).validate === 'function') {
      (this.warned as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfig extends $dara.Model {
  /**
   * @remarks
   * The expression that represents the query method for reference samples. Some types of thresholds require querying reference samples and aggregating their values to obtain the threshold for comparison.
   * 
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  /**
   * @remarks
   * The threshold settings.
   */
  thresholds?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholds;
  /**
   * @remarks
   * The threshold calculation method. Valid values:
   * - Fixed
   * - Fluctation
   * - FluctationDiscreate
   * - Auto
   * - Average
   * - Variance
   * 
   * @example
   * Fixed
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      referencedSamplesFilter: 'ReferencedSamplesFilter',
      thresholds: 'Thresholds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referencedSamplesFilter: 'string',
      thresholds: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholds,
      type: 'string',
    };
  }

  validate() {
    if(this.thresholds && typeof (this.thresholds as any).validate === 'function') {
      (this.thresholds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleErrorHandlers extends $dara.Model {
  /**
   * @remarks
   * The SQL statement used to filter problematic data for custom SQL rules.
   * 
   * @example
   * SELECT * FROM tb_api_log WHERE id IS NULL
   */
  errorDataFilter?: string;
  /**
   * @remarks
   * The handler type.
   * 
   * @example
   * SaveErrorData
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      errorDataFilter: 'ErrorDataFilter',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDataFilter: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleSamplingConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the sampling metric. Valid values:
   * - Count: The number of rows in the table.
   * - Min: The minimum value of the column.
   * - Max: The maximum value of the column.
   * - Avg: The average value of the column.
   * - DistinctCount: The number of unique values in the column.
   * - DistinctPercent: The ratio of the number of unique values in the column to the number of data rows.
   * - DuplicatedCount: The number of duplicate values in the column.
   * - DuplicatedPercent: The ratio of the number of duplicate values in the column to the number of data rows.
   * - TableSize: The size of the table.
   * - NullValueCount: The number of rows where the column is null.
   * - NullValuePercent: The ratio of rows where the column is null.
   * - GroupCount: The number of data rows corresponding to each value after aggregation by column value.
   * - CountNotIn: The number of rows that do not match the enumerated values.
   * - CountDistinctNotIn: The number of unique values that do not match the enumerated values.
   * - UserDefinedSql: Sample collection by using custom SQL statements.
   * 
   * @example
   * Min
   */
  metric?: string;
  /**
   * @remarks
   * The parameters required for sample collection.
   * 
   * @example
   * { "Columns": [ "id", "name" ] }
   */
  metricParameters?: string;
  /**
   * @remarks
   * The condition for secondary filtering of uninterested data during sampling. It can be up to 16,777,215 characters in length.
   * 
   * @example
   * id IS NULL
   */
  samplingFilter?: string;
  /**
   * @remarks
   * The runtime parameter setting statements inserted before the sampling statements are executed. It can be up to 1,000 characters in length. Currently, only MaxCompute is supported.
   * 
   * @example
   * SET odps.sql.udf.timeout=600s;
   */
  settingConfig?: string;
  static names(): { [key: string]: string } {
    return {
      metric: 'Metric',
      metricParameters: 'MetricParameters',
      samplingFilter: 'SamplingFilter',
      settingConfig: 'SettingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metric: 'string',
      metricParameters: 'string',
      samplingFilter: 'string',
      settingConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleTarget extends $dara.Model {
  /**
   * @remarks
   * The database type to which the table dataset belongs. Valid values:
   * - maxcompute
   * - emr
   * - cdh
   * - hologres
   * - analyticdb_for_postgresql
   * - analyticdb_for_mysql
   * - starrocks
   * 
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @remarks
   * The unique ID of the table in DataWorks Data Map.
   * 
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
   * @remarks
   * The monitored object type. Valid values:
   * - Table
   * 
   * @example
   * Table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      databaseType: 'DatabaseType',
      tableGuid: 'TableGuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseType: 'string',
      tableGuid: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRule extends $dara.Model {
  /**
   * @remarks
   * The sample check settings.
   */
  checkingConfig?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfig;
  /**
   * @remarks
   * The description of the rule. It can be up to 500 characters in length.
   * 
   * @example
   * this is a odps _sql task
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The error handlers for quality rule check issues.
   */
  errorHandlers?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleErrorHandlers[];
  /**
   * @remarks
   * The globally unique ID of the rule.
   * 
   * @example
   * 100001
   */
  id?: number;
  /**
   * @remarks
   * The name of the rule. The name can contain digits, letters, Chinese characters, and half-width or full-width punctuation marks. It can be up to 255 characters in length.
   * 
   * @example
   * Table cannot be empty
   */
  name?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The settings required for sample collection.
   */
  samplingConfig?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleSamplingConfig;
  /**
   * @remarks
   * The severity level of the rule for the business, which corresponds to the strong and weak rules on the page.
   * 
   * @example
   * High
   */
  severity?: string;
  /**
   * @remarks
   * The object monitored by the rule.
   */
  target?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleTarget;
  /**
   * @remarks
   * The rule template referenced when the rule is created.
   * 
   * @example
   * SYSTEM:user_defined_sql
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      checkingConfig: 'CheckingConfig',
      description: 'Description',
      enabled: 'Enabled',
      errorHandlers: 'ErrorHandlers',
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
      samplingConfig: 'SamplingConfig',
      severity: 'Severity',
      target: 'Target',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleErrorHandlers },
      id: 'number',
      name: 'string',
      projectId: 'number',
      samplingConfig: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleSamplingConfig,
      severity: 'string',
      target: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleTarget,
      templateCode: 'string',
    };
  }

  validate() {
    if(this.checkingConfig && typeof (this.checkingConfig as any).validate === 'function') {
      (this.checkingConfig as any).validate();
    }
    if(Array.isArray(this.errorHandlers)) {
      $dara.Model.validateArray(this.errorHandlers);
    }
    if(this.samplingConfig && typeof (this.samplingConfig as any).validate === 'function') {
      (this.samplingConfig as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResults extends $dara.Model {
  /**
   * @remarks
   * The generation time of the evaluation result.
   * 
   * The value is a 13-digit number, such as `1708284916414`.
   * 
   * @example
   * 1708284916414
   */
  createTime?: number;
  /**
   * @remarks
   * The details of this evaluation.
   */
  details?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsDetails[];
  /**
   * @remarks
   * The ID of the evaluation result.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * The snapshot of the rule configuration at the start of the evaluation.
   */
  rule?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRule;
  /**
   * @remarks
   * The sample value used for this evaluation.
   * 
   * @example
   * [   {     "gender": "male",     "_count": 100   }, {     "gender": "female",     "_count": 100   } ]
   */
  sample?: string;
  /**
   * @remarks
   * The status of the evaluation result.
   * 
   * @example
   * Passed
   */
  status?: string;
  /**
   * @remarks
   * The instance ID of the data quality check task.
   * 
   * @example
   * 20001
   */
  taskInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      details: 'Details',
      id: 'Id',
      rule: 'Rule',
      sample: 'Sample',
      status: 'Status',
      taskInstanceId: 'TaskInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      details: { 'type': 'array', 'itemType': GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsDetails },
      id: 'number',
      rule: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRule,
      sample: 'string',
      status: 'string',
      taskInstanceId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    if(this.rule && typeof (this.rule as any).validate === 'function') {
      (this.rule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskHooks extends $dara.Model {
  /**
   * @remarks
   * The condition for triggering the hook. When this condition is met, the hook action is triggered. Currently, only two types of conditional expressions are supported:
   * 
   * - Specify only one set of rule severity and rule check status, such as `${severity} == "High" AND ${status} == "Critical"`. This means that among the rules that you execute, if a rule with the severity of High has a check result of Critical, the condition is met.
   * - Specify multiple sets of rule severity and rule check status, such as `(${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")`. This means that among the rules that you execute, if a rule with the severity of High has a check result of Critical, or a rule with the severity of Normal has a check result of Critical, or a rule with the severity of Normal has a check result of Error, the condition is met. The valid values for severity in the conditional expression are the same as those in DataQualityRule, and the valid values for status are the same as those in DataQualityResult.
   * 
   * @example
   * (${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")
   */
  condition?: string;
  /**
   * @remarks
   * The hook type. Currently, only one type is supported:
   * 
   * - BlockTaskInstance: Blocks the scheduling task from continuing to run. If the data quality evaluation task is triggered by a scheduling task, the system determines whether to block the scheduling task based on Hook.Condition after the data quality evaluation task is completed.
   * 
   * @example
   * BlockTaskInstance
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationChannels extends $dara.Model {
  /**
   * @remarks
   * The notification channels.
   */
  channels?: string[];
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * The additional parameter settings in JSON format when an alert is sent. Supported keys:
   * 
   * - atAll: Specifies whether to @all in the DingTalk group when a DingTalk alert is sent. This parameter takes effect only when ReceiverType is set to DingdingUrl.
   * 
   * @example
   * { "atAll": true }
   */
  extension?: string;
  /**
   * @remarks
   * The type of the alert recipient.
   * 
   * @example
   * DingdingUrl
   */
  receiverType?: string;
  /**
   * @remarks
   * The alert recipients.
   */
  receiverValues?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      receiverType: 'ReceiverType',
      receiverValues: 'ReceiverValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      receiverType: 'string',
      receiverValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.receiverValues)) {
      $dara.Model.validateArray(this.receiverValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskNotificationsNotifications extends $dara.Model {
  /**
   * @remarks
   * The notification channels.
   */
  notificationChannels?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationChannels[];
  /**
   * @remarks
   * The values of the notification recipients.
   */
  notificationReceivers?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      notificationChannels: 'NotificationChannels',
      notificationReceivers: 'NotificationReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationChannels: { 'type': 'array', 'itemType': GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationReceivers },
    };
  }

  validate() {
    if(Array.isArray(this.notificationChannels)) {
      $dara.Model.validateArray(this.notificationChannels);
    }
    if(Array.isArray(this.notificationReceivers)) {
      $dara.Model.validateArray(this.notificationReceivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskNotifications extends $dara.Model {
  /**
   * @remarks
   * The condition for triggering a notification. When this condition is met, a message notification is triggered. Currently, only two types of conditional expressions are supported:
   * 
   * - Specify only one set of rule severity and rule check status, such as `${severity} == "High" AND ${status} == "Critical"`. This means that among the rules that you execute, if a rule with the severity of High has a check result of Critical, the condition is met. 
   * - Specify multiple sets of rule severity and rule check status, such as `(${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")`. This means that among the rules that you execute, if a rule with the severity of High has a check result of Critical, or a rule with the severity of Normal has a check result of Critical, or a rule with the severity of Normal has a check result of Error, the condition is met. The valid values for severity in the conditional expression are the same as those in DataQualityRule, and the valid values for status are the same as those in DataQualityResult.
   * 
   * @example
   * ${severity} == "High" AND ${status} == "Critical"
   */
  condition?: string;
  /**
   * @remarks
   * The notification methods.
   */
  notifications?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskNotificationsNotifications[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      notifications: 'Notifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      notifications: { 'type': 'array', 'itemType': GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskNotificationsNotifications },
    };
  }

  validate() {
    if(Array.isArray(this.notifications)) {
      $dara.Model.validateArray(this.notifications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskTarget extends $dara.Model {
  /**
   * @remarks
   * The database type to which the table belongs.
   * 
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @remarks
   * The partition range to be monitored.
   * 
   * @example
   * pt=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @remarks
   * The unique ID of the table in DataWorks Data Map.
   * 
   * @example
   * odps.api_trace.ods_d_api_log
   */
  tableGuid?: string;
  /**
   * @remarks
   * The monitored object type. Valid values:
   * - Table: Table.
   * 
   * @example
   * Table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      databaseType: 'DatabaseType',
      partitionSpec: 'PartitionSpec',
      tableGuid: 'TableGuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseType: 'string',
      partitionSpec: 'string',
      tableGuid: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskTrigger extends $dara.Model {
  /**
   * @remarks
   * The list of scheduling task IDs. This parameter takes effect only when Type is set to ByScheduledTaskInstance.
   */
  taskIds?: number[];
  /**
   * @remarks
   * The trigger type of the data quality evaluation task. Valid values:
   * - ByManual: Manual trigger. This is the default value.
   * - ByScheduledTaskInstance: Triggered by an associated scheduling task.
   * 
   * @example
   * ByScheduledTaskInstance
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      taskIds: 'TaskIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIds: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTask extends $dara.Model {
  /**
   * @remarks
   * The description of the data quality evaluation task.
   * 
   * @example
   * OpenAPI quality monitoring test
   */
  description?: string;
  /**
   * @remarks
   * The hook settings.
   */
  hooks?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskHooks[];
  /**
   * @remarks
   * The ID of the data quality evaluation task.
   * 
   * @example
   * 28544990
   */
  id?: number;
  /**
   * @remarks
   * The name of the data quality evaluation task.
   * 
   * @example
   * Data quality OpenAPI monitoring test
   */
  name?: string;
  /**
   * @remarks
   * The notification settings.
   */
  notifications?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskNotifications;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 20629
   */
  projectId?: number;
  /**
   * @remarks
   * The extension configuration, a JSON-formatted character string, takes effect only for EMR data quality monitoring.
   * 
   * - queue: The YARN queue used when you execute EMR data validation. The default value is the queue configured for the current project.
   * - sqlEngine: The SQL engine used when you execute EMR data validation. Valid values:
   *   - HIVE_SQL
   *   - SPARK_SQL
   * 
   * @example
   * { "queue": "default" }
   */
  runtimeConf?: string;
  /**
   * @remarks
   * The monitored object of the data quality evaluation task. For more information, see the DataQualityTarget example and DataQualityTarget.
   */
  target?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskTarget;
  /**
   * @remarks
   * The trigger configurations of the data quality evaluation task.
   */
  trigger?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskTrigger;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hooks: 'Hooks',
      id: 'Id',
      name: 'Name',
      notifications: 'Notifications',
      projectId: 'ProjectId',
      runtimeConf: 'RuntimeConf',
      target: 'Target',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hooks: { 'type': 'array', 'itemType': GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskHooks },
      id: 'number',
      name: 'string',
      notifications: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskNotifications,
      projectId: 'number',
      runtimeConf: 'string',
      target: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskTarget,
      trigger: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskTrigger,
    };
  }

  validate() {
    if(Array.isArray(this.hooks)) {
      $dara.Model.validateArray(this.hooks);
    }
    if(this.notifications && typeof (this.notifications as any).validate === 'function') {
      (this.notifications as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    if(this.trigger && typeof (this.trigger as any).validate === 'function') {
      (this.trigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstance extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * The value is a 13-digit number, such as `1716344665000`.
   * 
   * @example
   * 1716344665000
   */
  createTime?: number;
  /**
   * @remarks
   * The end time of the instance run.
   * 
   * The value is a 13-digit number, such as `1716344665000`.
   * 
   * @example
   * 1716344665000
   */
  finishTime?: number;
  /**
   * @remarks
   * The instance ID of the data quality monitoring.
   * 
   * @example
   * 7234231689
   */
  id?: number;
  /**
   * @remarks
   * The execution parameters of the data quality evaluation task in JSON format. Available keys:
   * - triggerTime: The millisecond timestamp of the trigger time. This is the base time for the `$[yyyymmdd]` expression in the data range of the data quality evaluation task. This parameter is required.
   * 
   * @example
   * { "triggerTime": 1733284062000 }
   */
  parameters?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 98330
   */
  projectId?: number;
  /**
   * @remarks
   * The list of data quality evaluation results.
   */
  results?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResults[];
  /**
   * @remarks
   * The status of the data quality monitoring instance. Valid values:
   * - Running: The check is in progress.
   * - Error: An error occurred while checking a rule.
   * - Passed: All rule checks passed.
   * - Warned: A rule triggered the warning alert threshold.
   * - Critical: A rule triggered the critical alert threshold.
   * 
   * @example
   * Passed
   */
  status?: string;
  /**
   * @remarks
   * The data quality evaluation task.
   */
  task?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTask;
  /**
   * @remarks
   * The context information when the instance is triggered, in JSON format. Possible keys:
   * - TriggerClient: The trigger source of the data quality evaluation task instance, such as CWF2 (scheduling system). More sources may be added in the future.
   * - TriggerClientId: The specific business resource in the source system. For example, if TriggerClient is CWF2, this parameter records the scheduling task ID.
   * 
   * @example
   * { "triggerClient": "CWF2", "triggerClientId": 70001238945 }
   */
  triggerContext?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      id: 'Id',
      parameters: 'Parameters',
      projectId: 'ProjectId',
      results: 'Results',
      status: 'Status',
      task: 'Task',
      triggerContext: 'TriggerContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      finishTime: 'number',
      id: 'number',
      parameters: 'string',
      projectId: 'number',
      results: { 'type': 'array', 'itemType': GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResults },
      status: 'string',
      task: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTask,
      triggerContext: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityEvaluationTaskInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the data quality evaluation task instance.
   */
  dataQualityEvaluationTaskInstance?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstance;
  /**
   * @remarks
   * The request ID. You can use this ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 8abcb91f-d266-4073-b907-2ed67****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityEvaluationTaskInstance: 'DataQualityEvaluationTaskInstance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityEvaluationTaskInstance: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstance,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataQualityEvaluationTaskInstance && typeof (this.dataQualityEvaluationTaskInstance as any).validate === 'function') {
      (this.dataQualityEvaluationTaskInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

