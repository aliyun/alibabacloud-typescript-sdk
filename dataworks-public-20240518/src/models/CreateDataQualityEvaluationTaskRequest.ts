// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsCritical extends $dara.Model {
  /**
   * @remarks
   * The threshold expression. 
   * 
   * For fluctuation rules, you must use an expression to represent the fluctuation threshold. Examples:
   * 
   * - Fluctuation increase greater than 0.01: $checkValue > 0.01 
   * - Fluctuation decrease greater than 0.01: $checkValue < -0.01 
   * - Absolute value of fluctuation rate: abs($checkValue) > 0.01
   * 
   * Fixed value rules can also use expressions to configure thresholds. If both are configured, the expression takes precedence over Operator and Value.
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
   * 0.01
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

export class CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsExpected extends $dara.Model {
  /**
   * @remarks
   * The threshold expression. 
   * 
   * For fluctuation rules, you must use an expression to represent the fluctuation threshold. Examples:
   * 
   * - Fluctuation increase greater than 0.01: $checkValue > 0.01 
   * - Fluctuation decrease greater than 0.01: $checkValue < -0.01 
   * - Absolute value of fluctuation rate: abs($checkValue) > 0.01
   * 
   * Fixed value rules can also use expressions to configure thresholds. If both are configured, the expression takes precedence over Operator and Value.
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
   * =
   */
  operator?: string;
  /**
   * @remarks
   * The threshold value.
   * 
   * @example
   * 0
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

export class CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsWarned extends $dara.Model {
  /**
   * @remarks
   * The threshold expression. 
   * 
   * For fluctuation rules, you must use an expression to represent the fluctuation threshold. Examples:
   * 
   * - Fluctuation increase greater than 0.01: $checkValue > 0.01 
   * - Fluctuation decrease greater than 0.01: $checkValue < -0.01 
   * - Absolute value of fluctuation rate: abs($checkValue) > 0.01
   * 
   * Fixed value rules can also use expressions to configure thresholds. If both are configured, the expression takes precedence over Operator and Value.
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
   * 0.001
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

export class CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholds extends $dara.Model {
  /**
   * @remarks
   * The threshold settings for critical warnings.
   */
  critical?: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsCritical;
  /**
   * @remarks
   * The expected threshold settings.
   */
  expected?: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsExpected;
  /**
   * @remarks
   * The threshold settings for common warnings.
   */
  warned?: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsCritical,
      expected: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsExpected,
      warned: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsWarned,
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

export class CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfig extends $dara.Model {
  /**
   * @remarks
   * The expression that represents the query method for reference samples. Some types of thresholds require querying reference samples and aggregating their values to obtain the threshold for comparison.
   * 
   * @example
   * {"bizdate": ["-1"]}
   */
  referencedSamplesFilter?: string;
  /**
   * @remarks
   * The verification threshold settings.
   */
  thresholds?: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholds;
  /**
   * @remarks
   * The threshold calculation method. Valid values:
   * - Fixed
   * - Fluctation
   * - FluctationDiscreate
   * - Auto
   * - Average
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
      thresholds: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholds,
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

export class CreateDataQualityEvaluationTaskRequestDataQualityRulesErrorHandlers extends $dara.Model {
  /**
   * @remarks
   * The SQL statement specified by the user to filter problematic data if the rule is a custom SQL rule.
   * 
   * @example
   * SELECT * FROM ods_api_log WHERE status = \\"Error\\";
   */
  errorDataFilter?: string;
  /**
   * @remarks
   * The handler type. Valid values:
   * - SaveErrorData: Retain problematic data.
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

export class CreateDataQualityEvaluationTaskRequestDataQualityRulesSamplingConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the sampling metric. Valid values:
   * - Count: The number of rows in the table.
   * - Min: The minimum value of the field.
   * - Max: The maximum value of the field.
   * - Avg: The average value of the field.
   * - DistinctCount: The number of unique values in the field.
   * - DistinctPercent: The ratio of the number of unique values in the field to the number of data rows.
   * - DuplicatedCount: The number of duplicate values in the field.
   * - DuplicatedPercent: The ratio of the number of duplicate values in the field to the number of data rows.
   * - TableSize: The size of the table.
   * - NullValueCount: The number of rows where the field is null.
   * - NullValuePercent: The ratio of rows where the field is null.
   * - GroupCount: The number of data rows corresponding to each value after aggregation by field value.
   * - CountNotIn: The number of rows that do not match the enumerated values.
   * - CountDistinctNotIn: The number of unique values that do not match the enumerated values.
   * - UserDefinedSql: Sample collection by using custom SQL statements.
   * 
   * @example
   * NullValueCount
   */
  metric?: string;
  /**
   * @remarks
   * The parameters required for sample collection.
   * 
   * @example
   * { "Columns": [ "id", "name" ] , "SQL": "select count(1) from table;"}
   */
  metricParameters?: string;
  /**
   * @remarks
   * The conditions for secondary filtering of irrelevant data during sampling. The maximum length is 16,777,215 characters.
   * 
   * @example
   * status != \\"Succeeded\\"
   */
  samplingFilter?: string;
  /**
   * @remarks
   * The runtime parameter setting statements inserted before the sampling statements are executed. The maximum length is 1,000 characters. Only MaxCompute is supported.
   * 
   * @example
   * odps.sql.type.system.odps2=True,odps.sql.hive.compatible=True
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

export class CreateDataQualityEvaluationTaskRequestDataQualityRules extends $dara.Model {
  /**
   * @remarks
   * The sample verification settings.
   */
  checkingConfig?: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfig;
  /**
   * @remarks
   * The description of the data quality rule.
   * 
   * @example
   * OpenAPI test rules
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the quality rule is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of error handlers for quality rule verification.
   */
  errorHandlers?: CreateDataQualityEvaluationTaskRequestDataQualityRulesErrorHandlers[];
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 2176
   */
  id?: number;
  /**
   * @remarks
   * The name of the data quality rule.
   * 
   * @example
   * OpenAPI test rules
   */
  name?: string;
  /**
   * @remarks
   * The parameters required for sample collection.
   */
  samplingConfig?: CreateDataQualityEvaluationTaskRequestDataQualityRulesSamplingConfig;
  /**
   * @remarks
   * The severity level of the rule for the business, which corresponds to strong and weak rules on the page. Valid values:
   * - Normal
   * - High
   * 
   * @example
   * High
   */
  severity?: string;
  /**
   * @remarks
   * The unique identifier of the rule template referenced by the rule.
   * 
   * @example
   * SYSTEM:field:null_value:fixed:0
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
      samplingConfig: 'SamplingConfig',
      severity: 'Severity',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': CreateDataQualityEvaluationTaskRequestDataQualityRulesErrorHandlers },
      id: 'number',
      name: 'string',
      samplingConfig: CreateDataQualityEvaluationTaskRequestDataQualityRulesSamplingConfig,
      severity: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataQualityEvaluationTaskRequestHooks extends $dara.Model {
  /**
   * @remarks
   * The trigger condition for the hook. When this condition is met, the hook action is triggered. Two conditional expressions are supported:
   * 1. Specify only one group of rule severity and check status. Example: `${severity} == "High" AND ${status} == "Critical"`. This means that among the rules to execute, if the check result of a rule with the High severity is Critical, the condition is met.
   * 2. Specify multiple groups of rule severity and check status. Example: `(${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")`. This means that among the rules to execute, if the check result of a rule with the High severity is Critical, the check result of a rule with the Normal severity is Critical, or the check result of a rule with the Normal severity is Error, the condition is met. The valid values of severity in the conditional expression are the same as those in DataQualityRule, and the valid values of status are the same as those in DataQualityResult.
   * 
   * @example
   * (${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")
   */
  condition?: string;
  /**
   * @remarks
   * The hook type. Only one type is supported:
   * - BlockTaskInstance: blocks the scheduled task from continuing to run. If the data quality monitoring task is triggered by a scheduled task, the system determines whether to block the scheduled task based on Hook.Condition after the data quality monitoring task is completed.
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

export class CreateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationChannels extends $dara.Model {
  /**
   * @remarks
   * The notification methods.
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

export class CreateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * The additional parameter settings in JSON format when an alert is sent. Supported keys:
   * - atAll: specifies whether to @all in the group when sending a DingTalk alert. This key takes effect only when ReceiverType is set to DingdingUrl.
   * 
   * @example
   * {  "atAll": true }
   */
  extension?: string;
  /**
   * @remarks
   * The type of the alert recipient. Valid values:
   * - WebhookUrl: custom webhook URL
   * - FeishuUrl: Lark alert URL
   * - DingdingUrl: DingTalk alert URL
   * - WeixinUrl: WeCom alert URL
   * - AliUid: Alibaba Cloud user ID
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

export class CreateDataQualityEvaluationTaskRequestNotificationsNotifications extends $dara.Model {
  /**
   * @remarks
   * The notification methods.
   */
  notificationChannels?: CreateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationChannels[];
  /**
   * @remarks
   * The alert recipient settings.
   */
  notificationReceivers?: CreateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      notificationChannels: 'NotificationChannels',
      notificationReceivers: 'NotificationReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationChannels: { 'type': 'array', 'itemType': CreateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': CreateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationReceivers },
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

export class CreateDataQualityEvaluationTaskRequestNotifications extends $dara.Model {
  /**
   * @remarks
   * The trigger condition for notifications. When this condition is met, a message notification is triggered. Two conditional expressions are supported:
   * 
   * Specify only one group of rule severity and check status. Example: `${severity} == "High" AND ${status} == "Critical"`. This means that among the rules to execute, if the check result of a rule with the High severity is Critical, the condition is met.
   * Specify multiple groups of rule severity and check status. Example: `(${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")`. This means that among the rules to execute, if the check result of a rule with the High severity is Critical, the check result of a rule with the Normal severity is Critical, or the check result of a rule with the Normal severity is Error, the condition is met. The valid values of severity in the conditional expression are the same as those in DataQualityRule, and the valid values of status are the same as those in DataQualityResult.
   * 
   * @example
   * (${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")
   */
  condition?: string;
  /**
   * @remarks
   * The notification settings.
   */
  notifications?: CreateDataQualityEvaluationTaskRequestNotificationsNotifications[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      notifications: 'Notifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      notifications: { 'type': 'array', 'itemType': CreateDataQualityEvaluationTaskRequestNotificationsNotifications },
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

export class CreateDataQualityEvaluationTaskRequestTarget extends $dara.Model {
  /**
   * @remarks
   * The database type of the table. Valid values:
   * - maxcompute
   * - hologres
   * - cdh
   * - analyticdb_for_mysql
   * - starrocks
   * - emr
   * - analyticdb_for_postgresql
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @remarks
   * The partition settings for the partitioned table.
   * 
   * @example
   * pt=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @remarks
   * The unique ID of the table in DataWorks Data Map.
   * 
   * This parameter is required.
   * 
   * @example
   * odps.api_test.ods_openapi_log_d
   */
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      databaseType: 'DatabaseType',
      partitionSpec: 'PartitionSpec',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseType: 'string',
      partitionSpec: 'string',
      tableGuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataQualityEvaluationTaskRequestTrigger extends $dara.Model {
  /**
   * @remarks
   * The list of scheduled task IDs. This parameter takes effect only when Type is set to ByScheduledTaskInstance.
   */
  taskIds?: number[];
  /**
   * @remarks
   * The trigger type for the data quality monitoring task. Valid values:
   * - ByManual: triggered manually. This is the default value.
   * - ByScheduledTaskInstance: triggered by an associated scheduled task.
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

export class CreateDataQualityEvaluationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The list of data quality rules associated with the data quality monitoring task. If DataQualityRule.Id is specified, the rule corresponding to the ID is associated with the new quality monitoring task. If it is not specified, a new rule is created by using other fields and associated with the new quality monitoring task.
   */
  dataQualityRules?: CreateDataQualityEvaluationTaskRequestDataQualityRules[];
  /**
   * @remarks
   * The ID of the data source. You can call the [ListDataSources](https://help.aliyun.com/document_detail/211431.html) operation to query the ID of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The description of the data quality monitoring task.
   * 
   * @example
   * OpenAPI create a data quality monitoring test
   */
  description?: string;
  /**
   * @remarks
   * The hook settings.
   */
  hooks?: CreateDataQualityEvaluationTaskRequestHooks[];
  /**
   * @remarks
   * The name of the data quality monitoring task.
   * 
   * This parameter is required.
   * 
   * @example
   * OpenAPI create a data quality monitoring test
   */
  name?: string;
  /**
   * @remarks
   * The notification subscription configuration.
   */
  notifications?: CreateDataQualityEvaluationTaskRequestNotifications;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page to obtain the ID.
   * 
   * This parameter is used to determine the DataWorks workspace used to invoke this API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The extension configurations in JSON string format. This parameter takes effect only for EMR data quality monitoring tasks.
   * - queue: the YARN queue used to execute EMR data validation. Default value: the queue configured for the project.
   * - sqlEngine: the SQL engine used to execute EMR data validation. Valid values:
   *     + HIVE_SQL
   *     + SPARK_SQL
   * 
   * @example
   * { "queue": "default", "sqlEngine": "SPARK_SQL" }
   */
  runtimeConf?: string;
  /**
   * @remarks
   * The monitored object for the data quality monitoring task.
   * 
   * This parameter is required.
   */
  target?: CreateDataQualityEvaluationTaskRequestTarget;
  /**
   * @remarks
   * The trigger configuration for the data quality check task.
   */
  trigger?: CreateDataQualityEvaluationTaskRequestTrigger;
  static names(): { [key: string]: string } {
    return {
      dataQualityRules: 'DataQualityRules',
      dataSourceId: 'DataSourceId',
      description: 'Description',
      hooks: 'Hooks',
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
      dataQualityRules: { 'type': 'array', 'itemType': CreateDataQualityEvaluationTaskRequestDataQualityRules },
      dataSourceId: 'number',
      description: 'string',
      hooks: { 'type': 'array', 'itemType': CreateDataQualityEvaluationTaskRequestHooks },
      name: 'string',
      notifications: CreateDataQualityEvaluationTaskRequestNotifications,
      projectId: 'number',
      runtimeConf: 'string',
      target: CreateDataQualityEvaluationTaskRequestTarget,
      trigger: CreateDataQualityEvaluationTaskRequestTrigger,
    };
  }

  validate() {
    if(Array.isArray(this.dataQualityRules)) {
      $dara.Model.validateArray(this.dataQualityRules);
    }
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

