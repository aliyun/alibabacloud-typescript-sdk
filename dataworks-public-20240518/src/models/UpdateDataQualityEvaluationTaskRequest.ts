// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsCritical extends $dara.Model {
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

export class UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsExpected extends $dara.Model {
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

export class UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsWarned extends $dara.Model {
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
   * - \\<
   * - \\<=
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

export class UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholds extends $dara.Model {
  /**
   * @remarks
   * The threshold settings for critical warnings.
   */
  critical?: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsCritical;
  /**
   * @remarks
   * The expected threshold settings.
   */
  expected?: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsExpected;
  /**
   * @remarks
   * The threshold settings for normal warnings.
   */
  warned?: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsCritical,
      expected: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsExpected,
      warned: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsWarned,
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

export class UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfig extends $dara.Model {
  /**
   * @remarks
   * The expression used to specify the query method for reference samples. Some threshold types require querying reference samples and aggregating their values to derive the comparison threshold.
   * 
   * @example
   * {"bizdate": ["-1"]}
   */
  referencedSamplesFilter?: string;
  /**
   * @remarks
   * The check threshold settings.
   */
  thresholds?: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholds;
  /**
   * @remarks
   * The threshold calculation method. Valid values:
   * - Fluctation: fluctuation range check
   * - Auto: intelligent threshold check
   * - FluctationDiscreate: discrete value fluctuation range check
   * - Average: average fluctuation range check
   * - Fixed: fixed value check
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
      thresholds: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholds,
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

export class UpdateDataQualityEvaluationTaskRequestDataQualityRulesErrorHandlers extends $dara.Model {
  /**
   * @remarks
   * The SQL statement used to filter error data. This parameter is required if the rule is a custom SQL rule.
   * 
   * @example
   * SELECT * FROM ods_d_openapi_log WHERE status = \\"Error\\"
   */
  errorDataFilter?: string;
  /**
   * @remarks
   * The handler type. Valid values:
   * - SaveErrorData: retain error data
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

export class UpdateDataQualityEvaluationTaskRequestDataQualityRulesSamplingConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the sampled metric. Valid values:
   * - Count: the number of rows in the table
   * - Min: the minimum value of the field
   * - Max: the maximum value of the field
   * - Avg: the average value of the field
   * - DistinctCount: the number of unique values in the field
   * - DistinctPercent: the ratio of the number of unique values in the field to the total number of rows
   * - DuplicatedCount: the number of duplicate values in the field
   * - DuplicatedPercent: the ratio of the number of duplicate values in the field to the total number of rows
   * - TableSize: the size of the table
   * - NullValueCount: the number of rows where the field is null
   * - NullValuePercent: the proportion of rows where the field is null
   * - GroupCount: the number of rows corresponding to each value after aggregation by field value
   * - CountNotIn: the number of rows that do not match the enumerated values
   * - CountDistinctNotIn: the number of unique values that do not match the enumerated values
   * - UserDefinedSql: sample collection by using custom SQL statements
   * 
   * @example
   * CountNotIn
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
   * The conditions used to filter out unneeded data during sampling. The maximum length is 16,777,215 characters.
   * 
   * @example
   * status != \\"Succeeded\\"
   */
  samplingFilter?: string;
  /**
   * @remarks
   * The runtime parameter setting statements inserted before the execution of sampling statements. The maximum length is 1,000 characters. Only MaxCompute is supported.
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

export class UpdateDataQualityEvaluationTaskRequestDataQualityRules extends $dara.Model {
  /**
   * @remarks
   * The sample check settings.
   */
  checkingConfig?: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfig;
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
   * Specifies whether the data quality rule is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The error handlers for quality rule check issues.
   */
  errorHandlers?: UpdateDataQualityEvaluationTaskRequestDataQualityRulesErrorHandlers[];
  /**
   * @remarks
   * The ID of the check rule. You can call the [ListQualityRules](https://help.aliyun.com/document_detail/173995.html) operation to obtain the rule ID.
   * 
   * @example
   * 1022171560
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
  samplingConfig?: UpdateDataQualityEvaluationTaskRequestDataQualityRulesSamplingConfig;
  /**
   * @remarks
   * The severity level of the rule for the business, which corresponds to the strong and weak rules on the page. Valid values:
   * - Normal
   * - High
   * 
   * @example
   * Normal
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
      checkingConfig: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': UpdateDataQualityEvaluationTaskRequestDataQualityRulesErrorHandlers },
      id: 'number',
      name: 'string',
      samplingConfig: UpdateDataQualityEvaluationTaskRequestDataQualityRulesSamplingConfig,
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

export class UpdateDataQualityEvaluationTaskRequestHooks extends $dara.Model {
  /**
   * @remarks
   * The Cause of the hook. When this Cause is met, the hook action is triggered. Currently, only the following two types of conditional expressions are supported:
   * - Specify only one group of rule severity levels and rule check statuses, such as `${severity} == "High" AND ${status} == "Critical"`. This indicates that if the check result of a rule you execute with the severity of High is Critical, the condition is met.
   * - Specify multiple groups of rule severity levels and rule check statuses, such as `(${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")`. This indicates that if the check result of a rule you execute with the severity of High is Critical, the check result of a rule you execute with the severity of Normal is Critical, or the check result of a rule you execute with the severity of Normal is Error, the condition is met. The enum values of severity in the conditional expression are consistent with those in DataQualityRule, and the enum values of status are consistent with those in DataQualityResult.
   * 
   * @example
   * ${severity} == "High" AND ${status} == "Critical"
   */
  condition?: string;
  /**
   * @remarks
   * The hook action executed after the data quality check is completed. Valid values:
   * - BlockTaskInstance: blocks the scheduled task
   * 
   * @example
   * ByScheduledTaskInstance
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

export class UpdateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationChannels extends $dara.Model {
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

export class UpdateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * The additional parameter settings when an alert is sent. This parameter is in JSON format. Supported keys:
   * - atAll: specifies whether to @all in the group when sending a DingTalk alert. This key takes effect only when ReceiverType is set to DingdingUrl.
   * 
   * @example
   * {  "atAll": true }
   */
  extension?: string;
  /**
   * @remarks
   * The alert recipient type.
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

export class UpdateDataQualityEvaluationTaskRequestNotificationsNotifications extends $dara.Model {
  /**
   * @remarks
   * The notification methods.
   */
  notificationChannels?: UpdateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationChannels[];
  /**
   * @remarks
   * The alert recipient settings.
   */
  notificationReceivers?: UpdateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      notificationChannels: 'NotificationChannels',
      notificationReceivers: 'NotificationReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationChannels: { 'type': 'array', 'itemType': UpdateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': UpdateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationReceivers },
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

export class UpdateDataQualityEvaluationTaskRequestNotifications extends $dara.Model {
  /**
   * @remarks
   * The Cause of the notification. When this Cause is met, a message notification is triggered. Currently, only the following two types of conditional expressions are supported:
   * - Specify only one group of rule severity levels and rule check statuses, such as `${severity} == "High" AND ${status} == "Critical"`. This indicates that if the check result of a rule you execute with the severity of High is Critical, the condition is met.
   * - Specify multiple groups of rule severity levels and rule check statuses, such as `(${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")`. This indicates that if the check result of a rule you execute with the severity of High is Critical, the check result of a rule you execute with the severity of Normal is Critical, or the check result of a rule you execute with the severity of Normal is Error, the condition is met. The enum values of severity in the conditional expression are consistent with those in DataQualityRule, and the enum values of status are consistent with those in DataQualityResult.
   * 
   * @example
   * ${severity} == "High" AND ${status} == "Critical"
   */
  condition?: string;
  /**
   * @remarks
   * The notification settings.
   */
  notifications?: UpdateDataQualityEvaluationTaskRequestNotificationsNotifications[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      notifications: 'Notifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      notifications: { 'type': 'array', 'itemType': UpdateDataQualityEvaluationTaskRequestNotificationsNotifications },
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

export class UpdateDataQualityEvaluationTaskRequestTarget extends $dara.Model {
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
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @remarks
   * The partition settings of the partitioned table.
   * 
   * @example
   * dt=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @remarks
   * The unique ID of the table in DataWorks Data Map.
   * 
   * @example
   * odsp.openapi.ods_d_openapi_log
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

export class UpdateDataQualityEvaluationTaskRequestTrigger extends $dara.Model {
  /**
   * @remarks
   * The list of scheduled task IDs. This parameter takes effect only when Type is set to ByScheduledTaskInstance.
   */
  taskIds?: number[];
  /**
   * @remarks
   * The trigger type of the quality monitoring task. Valid values:
   * - ByScheduledTaskInstance: triggered by an associated scheduled task
   * - ByManual: manually triggered
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

export class UpdateDataQualityEvaluationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The list of data quality rules associated with data quality monitoring.
   */
  dataQualityRules?: UpdateDataQualityEvaluationTaskRequestDataQualityRules[];
  /**
   * @remarks
   * The data source ID. You can call the [ListDataSources](https://help.aliyun.com/document_detail/211431.html) operation to obtain the data source ID.
   * 
   * @example
   * 358750
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The description of the quality monitoring task.
   * 
   * @example
   * OpenAPI data quality monitoring test.
   */
  description?: string;
  /**
   * @remarks
   * The hook settings.
   */
  hooks?: UpdateDataQualityEvaluationTaskRequestHooks[];
  /**
   * @remarks
   * The ID of the data quality monitoring task.
   * 
   * This parameter is required.
   * 
   * @example
   * 7227061794
   */
  id?: number;
  /**
   * @remarks
   * The name of the quality monitoring task.
   * 
   * @example
   * OpenAPI data quality monitoring test.
   */
  name?: string;
  /**
   * @remarks
   * The notification subscription configuration.
   */
  notifications?: UpdateDataQualityEvaluationTaskRequestNotifications;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The extension configuration. This parameter is a character string in JSON format and takes effect only for EMR data quality monitoring.
   * - queue: the YARN queue used when you execute EMR data validation. Default value: the queue configured for the current project.
   * - sqlEngine: the SQL DPI engine used when you execute EMR data validation. Valid values:
   *   + HIVE_SQL
   *   + SPARK_SQL
   * 
   * @example
   * { "queue": "default", "sqlEngine": "SPARK_SQL" }
   */
  runtimeConf?: string;
  /**
   * @remarks
   * The monitored object for data quality monitoring.
   */
  target?: UpdateDataQualityEvaluationTaskRequestTarget;
  /**
   * @remarks
   * The trigger configuration of the data quality check task.
   */
  trigger?: UpdateDataQualityEvaluationTaskRequestTrigger;
  static names(): { [key: string]: string } {
    return {
      dataQualityRules: 'DataQualityRules',
      dataSourceId: 'DataSourceId',
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
      dataQualityRules: { 'type': 'array', 'itemType': UpdateDataQualityEvaluationTaskRequestDataQualityRules },
      dataSourceId: 'number',
      description: 'string',
      hooks: { 'type': 'array', 'itemType': UpdateDataQualityEvaluationTaskRequestHooks },
      id: 'number',
      name: 'string',
      notifications: UpdateDataQualityEvaluationTaskRequestNotifications,
      projectId: 'number',
      runtimeConf: 'string',
      target: UpdateDataQualityEvaluationTaskRequestTarget,
      trigger: UpdateDataQualityEvaluationTaskRequestTrigger,
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

