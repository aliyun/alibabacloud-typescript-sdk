// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsCritical extends $dara.Model {
  /**
   * @remarks
   * Threshold expression.
   * 
   * Fluctuation-type rules must use an expression to represent the fluctuation threshold. For example:
   * 
   * - Fluctuation rises above 0.01: $checkValue > 0.01
   * - Fluctuation drops below 0.01: $checkValue < -0.01
   * - Absolute fluctuation rate: abs($checkValue) > 0.01
   * 
   * Fixed-value-type rules can also use an expression to configure the threshold. If both are configured, the expression takes precedence over Operator and Value.
   * 
   * @example
   * $checkValue > 0.01
   */
  expression?: string;
  /**
   * @remarks
   * Comparison operator
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
   * Threshold value.
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
   * Threshold expression.
   * 
   * Fluctuation-type rules must use an expression to represent the fluctuation threshold. For example:
   * 
   * - Fluctuation rises above 0.01: $checkValue > 0.01
   * - Fluctuation drops below 0.01: $checkValue < -0.01
   * - Absolute fluctuation rate: abs($checkValue) > 0.01
   * 
   * Fixed-value-type rules can also use an expression to configure the threshold. If both are configured, the expression takes precedence over Operator and Value.
   * 
   * @example
   * $checkValue > 0.01
   */
  expression?: string;
  /**
   * @remarks
   * Comparison operator
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
   * Threshold value
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
   * Threshold expression.
   * 
   * Fluctuation-type rules must use an expression to represent the fluctuation threshold. For example:
   * 
   * - Fluctuation rises above 0.01: $checkValue > 0.01
   * - Fluctuation drops below 0.01: $checkValue < -0.01
   * - Absolute fluctuation rate: abs($checkValue) > 0.01
   * 
   * Fixed-value-type rules can also use an expression to configure the threshold. If both are configured, the expression takes precedence over Operator and Value.
   * 
   * @example
   * $checkValue > 0.01
   */
  expression?: string;
  /**
   * @remarks
   * Comparison operator
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
   * Threshold value
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
   * Threshold settings for critical warnings
   */
  critical?: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsCritical;
  /**
   * @remarks
   * Expected threshold settings
   */
  expected?: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsExpected;
  /**
   * @remarks
   * Threshold settings for normal warnings
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
   * Some threshold types require querying reference samples and then aggregating their values to derive the comparison threshold. An expression is used here to indicate how the reference samples are queried.
   * 
   * @example
   * {"bizdate": ["-1"]}
   */
  referencedSamplesFilter?: string;
  /**
   * @remarks
   * Validation threshold settings.
   */
  thresholds?: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholds;
  /**
   * @remarks
   * Threshold calculation method
   * 
   * - Fluctation: Fluctuation range validation
   * - Auto: Intelligent threshold validation
   * - FluctationDiscreate: Discrete value fluctuation range validation
   * - Average: Mean fluctuation range validation
   * - Fixed: Fixed value validation
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
   * For custom SQL rules, the user must specify the SQL to filter problematic data.
   * 
   * @example
   * SELECT * FROM ods_d_openapi_log WHERE status = \\"Error\\"
   */
  errorDataFilter?: string;
  /**
   * @remarks
   * Handler type:
   * 
   * - SaveErrorData: Retain problematic data
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
   * Name of the sampling metric
   * - Count: Number of rows in the table
   * - Min: Minimum value of the field
   * - Max: Maximum value of the field
   * - Avg: Average value of the field
   * - DistinctCount: Number of distinct values of the field
   * - DistinctPercent: Ratio of the number of distinct field values to the total number of rows
   * - DuplicatedCount: Number of duplicate values of the field
   * - DuplicatedPercent: Ratio of the number of duplicate field values to the total number of rows
   * - TableSize: Size of the table
   * - NullValueCount: Number of rows where the field is null
   * - NullValuePercent: Proportion of rows where the field is null
   * - GroupCount: After aggregating by field value, each value and its corresponding number of rows
   * - CountNotIn: Number of rows whose enum values do not match
   * - CountDistinctNotIn: Number of distinct values whose enum values do not match
   * - UserDefinedSql: Sample collection via custom SQL
   * 
   * @example
   * CountNotIn
   */
  metric?: string;
  /**
   * @remarks
   * Parameters required for sample collection
   * 
   * @example
   * { "Columns": [ "id", "name" ] , "SQL": "select count(1) from table;"}
   */
  metricParameters?: string;
  /**
   * @remarks
   * Conditions for further filtering of data not of concern during sampling. Maximum 16777215 characters.
   * 
   * @example
   * status != \\"Succeeded\\"
   */
  samplingFilter?: string;
  /**
   * @remarks
   * Runtime parameter setting statements to be inserted and executed before the actual sampling statement. Maximum 1000 characters. Currently only MaxCompute is supported.
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
   * Sample validation settings
   */
  checkingConfig?: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfig;
  /**
   * @remarks
   * Description of the data quality rule.
   * 
   * @example
   * OpenAPI test rules
   */
  description?: string;
  /**
   * @remarks
   * Whether the data quality rule is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Quality rule validation issue handler
   */
  errorHandlers?: UpdateDataQualityEvaluationTaskRequestDataQualityRulesErrorHandlers[];
  /**
   * @remarks
   * ID of the validation rule. You can call the [ListQualityRules](https://help.aliyun.com/document_detail/173995.html) operation to obtain the rule ID.
   * 
   * @example
   * 1022171560
   */
  id?: number;
  /**
   * @remarks
   * Name of the data quality rule.
   * 
   * @example
   * OpenAPI test rules
   */
  name?: string;
  /**
   * @remarks
   * Parameters required for sample collection
   */
  samplingConfig?: UpdateDataQualityEvaluationTaskRequestDataQualityRulesSamplingConfig;
  /**
   * @remarks
   * Severity level of the rule for the business (corresponds to strong/weak rules on the page). Optional enum values:
   * - Normal
   * - High
   * 
   * @example
   * Normal
   */
  severity?: string;
  /**
   * @remarks
   * Unique identifier of the rule template referenced by the rule.
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
   * Hook trigger condition. When this condition is met, the hook action is triggered. Currently, only two types of condition expressions are supported:
   * 
   * - Specify a single group of rule severity type and rule validation status, such as `${severity} == "High" AND ${status} == "Critical"`. This means the condition is met when any executed rule with severity High has a validation result of Critical.
   * - Specify multiple groups of rule severity type and rule validation status, such as `(${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")`. This means the condition is met when any executed rule satisfies one of the following: severity High with validation result Critical, severity Normal with validation result Critical, or severity Normal with validation result Error. The severity enum in the condition expression is consistent with the severity enum in DataQualityRule, and the status enum is consistent with the status in DataQualityResult.
   * 
   * @example
   * ${severity} == "High" AND ${status} == "Critical"
   */
  condition?: string;
  /**
   * @remarks
   * Hook actions executed after data quality validation completes.
   * 
   * - BlockTaskInstance: Block the scheduling task.
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
   * Notification method
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
   * Additional parameter settings when sending alerts. JSON format. The supported keys are as follows:
   * 
   * - atAll: Whether to @all members in the group when sending DingTalk alerts. Takes effect when ReceiverType is DingdingUrl.
   * 
   * @example
   * {  "atAll": true }
   */
  extension?: string;
  /**
   * @remarks
   * Alert recipient type
   * 
   * @example
   * DingdingUrl
   */
  receiverType?: string;
  /**
   * @remarks
   * Alert recipients
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
   * Notification method
   */
  notificationChannels?: UpdateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationChannels[];
  /**
   * @remarks
   * Alert recipient settings
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
   * Notification trigger condition. When this condition is met, a message notification is triggered. Currently, only two types of condition expressions are supported:
   * 
   * - Specify a single group of rule severity type and rule validation status, such as `${severity} == "High" AND ${status} == "Critical"`. This means the condition is met when any executed rule with severity High has a validation result of Critical.
   * - Specify multiple groups of rule severity type and rule validation status, such as `(${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")`. This means the condition is met when any executed rule satisfies one of the following: severity High with validation result Critical, severity Normal with validation result Critical, or severity Normal with validation result Error. The severity enum in the condition expression is consistent with the severity enum in DataQualityRule, and the status enum is consistent with the status in DataQualityResult.
   * 
   * @example
   * ${severity} == "High" AND ${status} == "Critical"
   */
  condition?: string;
  /**
   * @remarks
   * Notification settings
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
   * Database type to which the table belongs
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
   * Partition settings of the partitioned table
   * 
   * @example
   * dt=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @remarks
   * Unique ID of the table in Data Map
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
   * List of scheduling task IDs. Valid when Type is ByScheduledTaskInstance.
   */
  taskIds?: number[];
  /**
   * @remarks
   * Trigger type of the quality monitoring task.
   * - ByScheduledTaskInstance: Triggered by an associated scheduling task.
   * - ByManual: Triggered manually.
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
   * List of data quality rules associated with the data quality monitoring.
   */
  dataQualityRules?: UpdateDataQualityEvaluationTaskRequestDataQualityRules[];
  /**
   * @remarks
   * Data source ID. You can call [ListDataSources](https://help.aliyun.com/document_detail/211431.html) to obtain the data source ID.
   * 
   * @example
   * 358750
   */
  dataSourceId?: number;
  /**
   * @remarks
   * Description of the quality monitoring task
   * 
   * @example
   * OpenAPI data quality monitoring test.
   */
  description?: string;
  /**
   * @remarks
   * Callback settings
   */
  hooks?: UpdateDataQualityEvaluationTaskRequestHooks[];
  /**
   * @remarks
   * Data quality monitoring ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7227061794
   */
  id?: number;
  /**
   * @remarks
   * Name of the quality monitoring task
   * 
   * @example
   * OpenAPI data quality monitoring test.
   */
  name?: string;
  /**
   * @remarks
   * Notification subscription configuration
   */
  notifications?: UpdateDataQualityEvaluationTaskRequestNotifications;
  /**
   * @remarks
   * Workspace ID
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * Extended configuration. A JSON-formatted string. Takes effect only for EMR-type data quality monitoring.
   * 
   * - queue: The YARN queue used when executing EMR data quality validation. Defaults to the queue configured for the current project.
   * - sqlEngine: The SQL engine used when executing EMR data validation.
   *   + HIVE_SQL
   *   + SPARK_SQL
   * 
   * @example
   * { "queue": "default", "sqlEngine": "SPARK_SQL" }
   */
  runtimeConf?: string;
  /**
   * @remarks
   * Data quality monitoring object
   */
  target?: UpdateDataQualityEvaluationTaskRequestTarget;
  /**
   * @remarks
   * Trigger configuration of the data quality validation task
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

