// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskHooks extends $dara.Model {
  /**
   * @remarks
   * Hook trigger condition. When this condition is met, the hook action is triggered. Currently, only two types of conditional expressions are supported:
   * 
   * - Specify a single group of rule severity type and rule validation status, e.g., `${severity} == "High" AND ${status} == "Critical"`, which means the condition is met if any executed rule with severity High has a validation result of Critical.
   * - Specify multiple groups of rule severity types and rule validation statuses, e.g., `(${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")`, which means the condition is met if any executed rule has severity High with validation result Critical, or severity Normal with validation result Critical, or severity Normal with validation result Error. The severity enum in the conditional expression is consistent with the severity enum in DataQualityRule, and the status enum is consistent with the status in DataQualityResult.
   * 
   * @example
   * (${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")
   */
  condition?: string;
  /**
   * @remarks
   * Hook type. Currently, only one type is supported:
   * 
   * - BlockTaskInstance: Blocks the scheduled task from continuing to run. When data quality monitoring is triggered by a scheduled task, after the data quality monitoring completes, Hook.Condition is used to determine whether to block the scheduled task from continuing to run.
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

export class GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotificationsNotificationsNotificationChannels extends $dara.Model {
  /**
   * @remarks
   * Notification method.
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

export class GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotificationsNotificationsNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * Extended information.
   * 
   * @example
   * {  "atAll": true }
   */
  extension?: string;
  /**
   * @remarks
   * Additional parameter settings when sending alerts. JSON format. Supported keys are as follows:
   * 
   * - atAll: Whether to @everyone in the group when sending DingTalk alerts. Takes effect when ReceiverType is DingdingUrl.
   * 
   * @example
   * DingdingUrl
   */
  receiverType?: string;
  /**
   * @remarks
   * Alert receiver.
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

export class GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotificationsNotifications extends $dara.Model {
  /**
   * @remarks
   * Notification method.
   */
  notificationChannels?: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotificationsNotificationsNotificationChannels[];
  /**
   * @remarks
   * Alert receiver settings.
   */
  notificationReceivers?: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotificationsNotificationsNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      notificationChannels: 'NotificationChannels',
      notificationReceivers: 'NotificationReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationChannels: { 'type': 'array', 'itemType': GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotificationsNotificationsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotificationsNotificationsNotificationReceivers },
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

export class GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotifications extends $dara.Model {
  /**
   * @remarks
   * Notification trigger condition. When this condition is met, the message notification is triggered. Currently, only two types of conditional expressions are supported:
   * 
   * - Specify a single group of rule severity type and rule validation status, e.g., `${severity} == "High" AND ${status} == "Critical"`, which means the condition is met if any executed rule with severity High has a validation result of Critical.
   * - Specify multiple groups of rule severity types and rule validation statuses, e.g., `(${severity} == "High"AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")`, which means the condition is met if any executed rule has severity High with validation result Critical, or severity Normal with validation result Critical, or severity Normal with validation result Error. The severity enum in the conditional expression is consistent with the severity enum in DataQualityRule, and the status enum is consistent with the status in DataQualityResult.
   * 
   * @example
   * (${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")
   */
  condition?: string;
  /**
   * @remarks
   * Notification settings.
   */
  notifications?: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotificationsNotifications[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      notifications: 'Notifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      notifications: { 'type': 'array', 'itemType': GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotificationsNotifications },
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

export class GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskTarget extends $dara.Model {
  /**
   * @remarks
   * Database type to which the table belongs:
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
   * Partition range setting for data quality monitoring.
   * 
   * @example
   * pt=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @remarks
   * Unique ID of the table in Data Map.
   * 
   * @example
   * odps.meta_open_api_test_sz.test_partition_tbl
   */
  tableGuid?: string;
  /**
   * @remarks
   * Monitoring object type.
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

export class GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskTrigger extends $dara.Model {
  /**
   * @remarks
   * List of scheduled task IDs. Valid when Type is ByScheduledTaskInstance.
   */
  taskIds?: number[];
  /**
   * @remarks
   * Quality monitoring trigger type:
   * 
   * - ByManual: Manual trigger
   * - ByScheduledTaskInstance: Scheduled task trigger
   * - ByQualityNode: Quality node trigger
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

export class GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTask extends $dara.Model {
  /**
   * @remarks
   * Data source ID used by the quality monitoring task.
   * 
   * @example
   * 45238
   */
  dataSourceId?: number;
  /**
   * @remarks
   * Description of the quality monitoring task.
   * 
   * @example
   * The description of the quality monitoring task.
   */
  description?: string;
  /**
   * @remarks
   * Callback settings.
   */
  hooks?: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskHooks[];
  /**
   * @remarks
   * Data quality monitoring ID.
   * 
   * @example
   * 2178
   */
  id?: number;
  /**
   * @remarks
   * Name of the quality monitoring task.
   * 
   * This parameter is required.
   * 
   * @example
   * OpenAPI create a data quality monitoring test
   */
  name?: string;
  /**
   * @remarks
   * Notification subscription configuration.
   */
  notifications?: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotifications;
  /**
   * @remarks
   * Workspace ID.
   * 
   * @example
   * 2626
   */
  projectId?: number;
  /**
   * @remarks
   * Extended configuration. A JSON-formatted string. Only takes effect for EMR-type data quality monitoring.
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
   * Data quality monitoring object.
   */
  target?: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskTarget;
  /**
   * @remarks
   * Trigger configuration of the data quality validation task.
   */
  trigger?: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskTrigger;
  static names(): { [key: string]: string } {
    return {
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
      dataSourceId: 'number',
      description: 'string',
      hooks: { 'type': 'array', 'itemType': GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskHooks },
      id: 'number',
      name: 'string',
      notifications: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotifications,
      projectId: 'number',
      runtimeConf: 'string',
      target: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskTarget,
      trigger: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskTrigger,
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

export class GetDataQualityEvaluationTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Data quality monitoring details.
   */
  dataQualityEvaluationTask?: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTask;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * SDFSDFSDF-SDFSDF-SDFDSF-SDFSDF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityEvaluationTask: 'DataQualityEvaluationTask',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityEvaluationTask: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTask,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataQualityEvaluationTask && typeof (this.dataQualityEvaluationTask as any).validate === 'function') {
      (this.dataQualityEvaluationTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

