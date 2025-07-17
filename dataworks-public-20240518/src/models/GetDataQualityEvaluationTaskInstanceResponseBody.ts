// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsDetails extends $dara.Model {
  checkedValue?: string;
  referencedValue?: string;
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
  expression?: string;
  operator?: string;
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
  expression?: string;
  operator?: string;
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
  expression?: string;
  operator?: string;
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
  critical?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsCritical;
  expected?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsExpected;
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
  referencedSamplesFilter?: string;
  thresholds?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholds;
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
  errorDataFilter?: string;
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
  metric?: string;
  metricParameters?: string;
  samplingFilter?: string;
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
  databaseType?: string;
  tableGuid?: string;
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
  checkingConfig?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfig;
  description?: string;
  enabled?: boolean;
  errorHandlers?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleErrorHandlers[];
  id?: number;
  name?: string;
  projectId?: number;
  samplingConfig?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleSamplingConfig;
  severity?: string;
  target?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleTarget;
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
  createTime?: number;
  details?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsDetails[];
  id?: number;
  rule?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRule;
  sample?: string;
  status?: string;
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
   * The hook trigger condition. When this condition is met, the hook action is triggered. Only two conditional expressions are supported:
   * 
   * *   Specify only one group of rule strength type and rule check status, such as `${severity} == "High" AND ${status} == "Critical"`. In this expression, the hook trigger condition is met if severity is High and status is Critical.
   * *   Specify multiple groups of rule strength types and rule check status, such as `(${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")`. In this expression, the hook trigger condition is met if severity is High and status is Critical, severity is Normal and status is Critical, or severity is Normal and status is Error. The enumeration of severity in a conditional expression is the same as the enumeration of severity in DataQualityRule. The enumeration of status in a conditional expression is the same as the enumeration of status in DataQualityResult.
   * 
   * @example
   * (${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")
   */
  condition?: string;
  /**
   * @remarks
   * Hook type. Currently, only one type is supported:
   * 
   * - BlockTaskInstance: the blocking scheduling task continues to run. Data quality monitoring is triggered by the scheduling task. After the data quality monitoring is completed, the Hook.Condition is used to determine whether the blocking scheduling task continues to run.
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
   * The notification method.
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
   * Additional parameter settings for sending alerts in json format. The supported keys are as follows:
   * 
   * - atAll: when sending DingTalk alerts, do you need to @ everyone in the group. It takes effect when ReceiverType is DingdingUrl.
   * 
   * @example
   * { "atAll": true }
   */
  extension?: string;
  /**
   * @remarks
   * The type of alert recipient.
   * 
   * @example
   * DingdingUrl
   */
  receiverType?: string;
  /**
   * @remarks
   * The recipient of the alert.
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
   * The notification method.
   */
  notificationChannels?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationChannels[];
  /**
   * @remarks
   * The value of the receiver.
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
   * The notification trigger condition. When this condition is met, the alert notification is triggered. Only two conditional expressions are supported:
   * 
   * *   Specify only one group of rule strength type and rule check status, such as `${severity} == "High" AND ${status} == "Critical"`. In this expression, the hook trigger condition is met if severity is High and status is Critical.
   * *   Specify multiple groups of rule strength types and rule check status, such as `(${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")`. In this expression, the hook trigger condition is met if severity is High and status is Critical, severity is Normal and status is Critical, or severity is Normal and status is Error. The enumeration of severity in a conditional expression is the same as the enumeration of severity in DataQualityRule. The enumeration of status in a conditional expression is the same as the enumeration of status in DataQualityResult.
   * 
   * @example
   * ${severity} == "High" AND ${status} == "Critical"
   */
  condition?: string;
  /**
   * @remarks
   * The alert notification methods.
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
   * The type of the database to which the table belongs.
   * 
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @remarks
   * The partition range monitored.
   * 
   * @example
   * pt=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @remarks
   * The unique ID of the table in the data map.
   * 
   * @example
   * odps.api_trace.ods_d_api_log
   */
  tableGuid?: string;
  /**
   * @remarks
   * The type of the monitoring object.
   * - Table: Table
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
   * The Id list of the scheduled task, which is valid when the Type is ByScheduledTaskInstance.
   */
  taskIds?: number[];
  /**
   * @remarks
   * The trigger type of the monitor. Valid values:
   * 
   * *   ByManual (default): The monitor is manually triggered.
   * *   ByScheduledTaskInstance: The monitor is triggered by the associated scheduling tasks.
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
   * The description of the monitor.
   * 
   * @example
   * OpenAPI quality monitoring test
   */
  description?: string;
  /**
   * @remarks
   * The hook.
   */
  hooks?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskHooks[];
  /**
   * @remarks
   * The ID of the data quality monitor.
   * 
   * @example
   * 28544990
   */
  id?: number;
  /**
   * @remarks
   * The name of the monitor.
   * 
   * @example
   * Data quality OpenAPI monitoring test
   */
  name?: string;
  /**
   * @remarks
   * The configurations of alert notifications.
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
   * Extended configuration, JSON-formatted string, takes effect only for EMR-type data quality monitoring.
   * 
   * - queue: the yarn queue used when performing EMR data quality verification. The default queue is the queue configured for this project.
   * - sqlEngine: SQL engine used when performing EMR data verification
   *   - HIVE_ SQL
   *   - SPARK_ SQL
   * 
   * @example
   * { "queue": "default" }
   */
  runtimeConf?: string;
  /**
   * @remarks
   * The monitored object of the monitor.
   */
  target?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskTarget;
  /**
   * @remarks
   * The trigger configuration of the monitor.
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
   * @example
   * 1716344665000
   */
  createTime?: number;
  /**
   * @remarks
   * The end time of the instance.
   * 
   * @example
   * 1716344665000
   */
  finishTime?: number;
  /**
   * @remarks
   * The ID of the data quality monitoring instance.
   * 
   * @example
   * 7234231689
   */
  id?: number;
  /**
   * @remarks
   * Data quality verification execution parameters in JSON format. The available keys are as follows:
   * - triggerTime: the millisecond timestamp of the trigger time. The baseline time of the $[yyyymmdd] expression in the data range of data quality monitoring. Required.
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
  results?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResults[];
  /**
   * @remarks
   * The status of the data quality monitoring instance.
   * - Running: Verifying
   * - Error: A rule verification Error occurred.
   * - Passed: all rules are verified
   * - Warned: normal alarm threshold triggered by rules
   * - Critical: Threshold for serious alerts triggered by rules
   * 
   * @example
   * Passed
   */
  status?: string;
  /**
   * @remarks
   * The monitor.
   */
  task?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTask;
  /**
   * @remarks
   * The context information when the instance is triggered, in JSON format. The possible keys are as follows:
   * - TriggerClient: the trigger source of the data quality monitoring instance, such as CWF2 (scheduling system), may be added later.
   * - TriggerClientId: associated with a specific business resource in the source system. For example, if TriggerClient is CWF2, the ID of the scheduling task is recorded here.
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
   * The details of the monitor instance.
   */
  dataQualityEvaluationTaskInstance?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstance;
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * 8abcb91f-d266-4073-b907-2ed670378ed1
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

