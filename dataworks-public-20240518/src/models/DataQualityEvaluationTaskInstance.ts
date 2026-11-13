// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataQualityEvaluationTaskInstanceTaskHooks extends $dara.Model {
  /**
   * @remarks
   * The trigger condition of the hook.
   * 
   * @example
   * ${severity} == "High" AND ${status} == "Critical"
   */
  condition?: string;
  /**
   * @remarks
   * The type of the subsequent action. Valid values:
   * - BlockTaskInstance: Blocks the execution of the DataWorks task instance.
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

export class DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationChannels extends $dara.Model {
  /**
   * @remarks
   * The notification channel.
   * 
   * @example
   * ["Mail"]
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

export class DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * The extension information in JSON format. For example, DingTalk chatbots support mentioning all users.
   * 
   * @example
   * {"atAll":"true"}
   */
  extension?: string;
  /**
   * @remarks
   * The notification recipient type.
   * 
   * @example
   * AliUid
   */
  receiverType?: string;
  /**
   * @remarks
   * The notification recipient values.
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

export class DataQualityEvaluationTaskInstanceTaskNotificationsNotifications extends $dara.Model {
  /**
   * @remarks
   * The notification channel.
   */
  notificationChannels?: DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationChannels[];
  /**
   * @remarks
   * The notification recipient configuration.
   */
  notificationReceivers?: DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      notificationChannels: 'NotificationChannels',
      notificationReceivers: 'NotificationReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationChannels: { 'type': 'array', 'itemType': DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationReceivers },
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

export class DataQualityEvaluationTaskInstanceTaskNotifications extends $dara.Model {
  /**
   * @remarks
   * The alert trigger condition.
   * 
   * @example
   * ${blockType} == "Strong"
   */
  condition?: string;
  /**
   * @remarks
   * The specific message notification settings.
   */
  notifications?: DataQualityEvaluationTaskInstanceTaskNotificationsNotifications[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      notifications: 'Notifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      notifications: { 'type': 'array', 'itemType': DataQualityEvaluationTaskInstanceTaskNotificationsNotifications },
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

export class DataQualityEvaluationTaskInstanceTaskTarget extends $dara.Model {
  /**
   * @remarks
   * The database type to which the table belongs, applicable when the dataset is of the table type. Valid values:
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
   * The partition settings of the partitioned table.
   * 
   * @example
   * ds=$[yyyymmdd-1]
   */
  partitionSpec?: string;
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
   * The monitored object type.
   * - Table
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

export class DataQualityEvaluationTaskInstanceTaskTrigger extends $dara.Model {
  /**
   * @remarks
   * The IDs of the scheduled nodes whose successful instance execution triggers the check. This parameter takes effect only when Type is set to ByScheduledTaskInstance.
   */
  taskIds?: number[];
  /**
   * @remarks
   * The type of event that triggers the execution of the quality check task. Valid values:
   * - ByScheduledTaskInstance: A scheduled instance completes successfully.
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

export class DataQualityEvaluationTaskInstanceTask extends $dara.Model {
  /**
   * @remarks
   * The ID of the data source used to execute the data quality check task.
   * 
   * @example
   * 201
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The callback settings for the lifecycle of the data quality check task instance. Currently, only one hook that blocks the scheduled task is supported.
   */
  hooks?: DataQualityEvaluationTaskInstanceTaskHooks[];
  /**
   * @remarks
   * The ID of the data quality check task.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * The name of the data quality check task. The name can contain digits, letters, Chinese characters, and half-width or full-width punctuation marks, and can be up to 255 characters in length.
   * 
   * @example
   * Quality check task
   */
  name?: string;
  /**
   * @remarks
   * The alert subscription configuration of the data quality check task.
   */
  notifications?: DataQualityEvaluationTaskInstanceTaskNotifications[];
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * @example
   * 2626
   */
  projectId?: number;
  /**
   * @remarks
   * The settings used when the data source is accessed. Currently, you can only specify the YARN queue for EMR and set the SQL engine to SPARK_SQL, KYUUBI, PRESTO_SQL, or HIVE_SQL when collecting EMR tables.
   * 
   * @example
   * { "queue": "default", "sqlEngine": "SPARK_SQL" }
   */
  runtimeConf?: string;
  /**
   * @remarks
   * The monitored object of the data quality check task.
   */
  target?: DataQualityEvaluationTaskInstanceTaskTarget;
  /**
   * @remarks
   * The ID of the DataWorks tenant.
   * 
   * @example
   * 195820716552192
   */
  tenantId?: number;
  /**
   * @remarks
   * The trigger configuration of the data quality check task.
   */
  trigger?: DataQualityEvaluationTaskInstanceTaskTrigger;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      hooks: 'Hooks',
      id: 'Id',
      name: 'Name',
      notifications: 'Notifications',
      projectId: 'ProjectId',
      runtimeConf: 'RuntimeConf',
      target: 'Target',
      tenantId: 'TenantId',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
      hooks: { 'type': 'array', 'itemType': DataQualityEvaluationTaskInstanceTaskHooks },
      id: 'number',
      name: 'string',
      notifications: { 'type': 'array', 'itemType': DataQualityEvaluationTaskInstanceTaskNotifications },
      projectId: 'number',
      runtimeConf: 'string',
      target: DataQualityEvaluationTaskInstanceTaskTarget,
      tenantId: 'number',
      trigger: DataQualityEvaluationTaskInstanceTaskTrigger,
    };
  }

  validate() {
    if(Array.isArray(this.hooks)) {
      $dara.Model.validateArray(this.hooks);
    }
    if(Array.isArray(this.notifications)) {
      $dara.Model.validateArray(this.notifications);
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

export class DataQualityEvaluationTaskInstance extends $dara.Model {
  /**
   * @remarks
   * The creation time of the task instance.
   * 
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @remarks
   * The end time of the task instance.
   * 
   * @example
   * 1710239005403
   */
  finishTime?: number;
  /**
   * @remarks
   * The task instance ID.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * The current running status.
   * 
   * @example
   * Passed
   */
  status?: string;
  /**
   * @remarks
   * The snapshot of the data quality check task at the start of the check.
   */
  task?: DataQualityEvaluationTaskInstanceTask;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      id: 'Id',
      status: 'Status',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      finishTime: 'number',
      id: 'number',
      status: 'string',
      task: DataQualityEvaluationTaskInstanceTask,
    };
  }

  validate() {
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

