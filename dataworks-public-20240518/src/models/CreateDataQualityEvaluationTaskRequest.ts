// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsCritical extends $dara.Model {
  /**
   * @remarks
   * The threshold expression.
   * 
   * Fluctuation-type rules must use expressions to specify the fluctuation threshold. For example:
   * 
   * - Fluctuation increase greater than 0.01: $checkValue > 0.01
   * - Fluctuation decrease greater than 0.01: $checkValue < -0.01
   * - Absolute fluctuation rate: abs($checkValue) > 0.01
   * 
   * Fixed-value rules can also use expressions to configure thresholds. If both are configured, the expression takes precedence over Operator and Value.
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
   * Fluctuation-type rules must use expressions to specify the fluctuation threshold. For example:
   * 
   * - Fluctuation increase greater than 0.01: $checkValue > 0.01
   * - Fluctuation decrease greater than 0.01: $checkValue < -0.01
   * - Absolute fluctuation rate: abs($checkValue) > 0.01
   * 
   * Fixed-value rules can also use expressions to configure thresholds. If both are configured, the expression takes precedence over Operator and Value.
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
   * Fluctuation-type rules must use expressions to specify the fluctuation threshold. For example:
   * 
   * - Fluctuation increase greater than 0.01: $checkValue > 0.01
   * - Fluctuation decrease greater than 0.01: $checkValue < -0.01
   * - Absolute fluctuation rate: abs($checkValue) > 0.01
   * 
   * Fixed-value rules can also use expressions to configure thresholds. If both are configured, the expression takes precedence over Operator and Value.
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
   * The threshold settings for the critical warning level.
   */
  critical?: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsCritical;
  /**
   * @remarks
   * The expected threshold settings.
   */
  expected?: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsExpected;
  /**
   * @remarks
   * The threshold settings for the normal warning level.
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
   * For some threshold types, reference samples must be queried and aggregated to derive the threshold used for comparison. This field uses an expression to describe how the reference samples are queried.
   * 
   * @example
   * {"bizdate": ["-1"]}
   */
  referencedSamplesFilter?: string;
  /**
   * @remarks
   * The validation threshold settings.
   */
  thresholds?: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholds;
  /**
   * @remarks
   * The method used to compute the threshold. Valid values:
   * 
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
   * For custom SQL rules, the user must specify a SQL statement to filter the problematic data.
   * 
   * @example
   * SELECT * FROM ods_api_log WHERE status = \\"Error\\";
   */
  errorDataFilter?: string;
  /**
   * @remarks
   * The type of the handler. Valid values:
   * 
   * - SaveErrorData: retains the problematic data.
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
   * - Count: the number of rows in the table.
   * - Min: the minimum value of the field.
   * - Max: the maximum value of the field.
   * - Avg: the average value of the field.
   * - DistinctCount: the number of distinct values of the field.
   * - DistinctPercent: the ratio of the number of distinct values of the field to the number of rows.
   * - DuplicatedCount: the number of duplicate values of the field.
   * - DuplicatedPercent: the ratio of the number of duplicate values of the field to the number of rows.
   * - TableSize: the size of the table.
   * - NullValueCount: the number of rows in which the field is null.
   * - NullValuePercent: the ratio of rows in which the field is null.
   * - GroupCount: after grouping by the field value, the count of rows for each value.
   * - CountNotIn: the number of rows whose enumeration values do not match.
   * - CountDistinctNotIn: the number of distinct values whose enumeration values do not match.
   * - UserDefinedSql: collect samples using a custom SQL statement.
   * 
   * @example
   * NullValueCount
   */
  metric?: string;
  /**
   * @remarks
   * The parameters required when collecting samples.
   * 
   * @example
   * { "Columns": [ "id", "name" ] , "SQL": "select count(1) from table;"}
   */
  metricParameters?: string;
  /**
   * @remarks
   * An additional filter condition applied during sampling to exclude data that is not of interest. The maximum length is 16,777,215 characters.
   * 
   * @example
   * status != \\"Succeeded\\"
   */
  samplingFilter?: string;
  /**
   * @remarks
   * The runtime parameter statements inserted and executed before the sampling statement is executed. The maximum length is 1000 characters. Only MaxCompute is currently supported.
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
   * The sample validation settings.
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
   * The list of error handlers for issues detected by the quality rule validation.
   */
  errorHandlers?: CreateDataQualityEvaluationTaskRequestDataQualityRulesErrorHandlers[];
  /**
   * @remarks
   * The ID of the rule.
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
   * The parameters required when collecting samples.
   */
  samplingConfig?: CreateDataQualityEvaluationTaskRequestDataQualityRulesSamplingConfig;
  /**
   * @remarks
   * The business severity level of the rule (corresponding to strong/weak rules in the console). Valid values:
   * - Normal
   * - High
   * 
   * @example
   * High
   */
  severity?: string;
  /**
   * @remarks
   * The unique identifier of the rule template that the rule references.
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
   * The trigger condition of the hook. The hook action is triggered when this condition is met. Currently only two forms of expressions are supported:
   * 1. Specify a single combination of rule severity and rule validation status, for example `${severity} == "High" AND ${status} == "Critical"`, which means the condition is met if among the executed rules there exists a rule whose severity is High and whose validation result is Critical.
   * 2. Specify multiple combinations of rule severity and rule validation status, for example `(${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")`, which means the condition is met if among the executed rules there exists a rule whose severity is High and validation result is Critical, or a rule whose severity is Normal and validation result is Critical, or a rule whose severity is Normal and validation result is Error. The enumeration of severity in the expression is the same as severity in DataQualityRule, and the enumeration of status is the same as status in DataQualityResult.
   * 
   * @example
   * (${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")
   */
  condition?: string;
  /**
   * @remarks
   * The type of the hook. Currently only one type is supported:
   * - BlockTaskInstance: blocks the scheduling task from continuing to run. If the data quality monitor is triggered by a scheduling task, after the monitor finishes running, Hook.Condition is evaluated to determine whether to block the scheduling task from continuing to run.
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
   * Additional parameters used when sending alerts, in JSON format. Supported keys:
   * - atAll: whether to mention all members (@all) in the group when sending a DingTalk alert. This key takes effect when ReceiverType is set to DingdingUrl.
   * 
   * @example
   * {  "atAll": true }
   */
  extension?: string;
  /**
   * @remarks
   * The type of the alert recipient. Valid values:
   * - WebhookUrl: a custom webhook URL.
   * - FeishuUrl: a Lark (Feishu) alert URL.
   * - DingdingUrl: a DingTalk alert URL.
   * - WeixinUrl: a WeCom (Enterprise WeChat) alert URL.
   * - AliUid: an Alibaba Cloud user ID.
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
   * The trigger condition of the notification. The notification is triggered when this condition is met. Currently only two forms of expressions are supported:
   * 
   * Specify a single combination of rule severity and rule validation status, for example `${severity} == "High" AND ${status} == "Critical"`, which means the condition is met if among the executed rules there exists a rule whose severity is High and whose validation result is Critical.
   * Specify multiple combinations of rule severity and rule validation status, for example `(${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")`, which means the condition is met if among the executed rules there exists a rule whose severity is High and validation result is Critical, or a rule whose severity is Normal and validation result is Critical, or a rule whose severity is Normal and validation result is Error. The enumeration of severity in the expression is the same as severity in DataQualityRule, and the enumeration of status is the same as status in DataQualityResult.
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
   * The type of the database to which the table belongs. Valid values:
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
   * The partition settings of the partitioned table.
   * 
   * @example
   * pt=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @remarks
   * The unique ID of the table in Data Map.
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
   * The list of scheduling task IDs. This parameter is valid when Type is set to ByScheduledTaskInstance.
   */
  taskIds?: number[];
  /**
   * @remarks
   * The trigger type of the quality monitoring task. Valid values:
   * - ByManual: triggered manually. This is the default value.
   * - ByScheduledTaskInstance: triggered by an associated scheduling task.
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
   * The list of data quality rules associated with the data quality monitor. If DataQualityRule.Id is specified, the rule corresponding to that ID is associated with the newly created quality monitor. If not specified, a new rule is created from the other fields and associated with the newly created quality monitor.
   */
  dataQualityRules?: CreateDataQualityEvaluationTaskRequestDataQualityRules[];
  /**
   * @remarks
   * The ID of the data source. You can call [ListDataSources](https://help.aliyun.com/document_detail/211431.html) to obtain the ID of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The description of the quality monitoring task.
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
   * The name of the quality monitoring task.
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
   * This parameter specifies the DataWorks workspace used by this API call.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The extended configuration, a JSON-formatted string. This setting takes effect only for EMR-type data quality monitors.
   * - queue: The YARN queue used when running EMR data quality validation. The default is the queue configured for the current project.
   * - sqlEngine: The SQL engine used when running EMR data validation.
   *     + HIVE_SQL
   *     + SPARK_SQL
   * 
   * @example
   * { "queue": "default", "sqlEngine": "SPARK_SQL" }
   */
  runtimeConf?: string;
  /**
   * @remarks
   * The data quality monitoring object.
   * 
   * This parameter is required.
   */
  target?: CreateDataQualityEvaluationTaskRequestTarget;
  /**
   * @remarks
   * The trigger configuration of the data quality validation task.
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

