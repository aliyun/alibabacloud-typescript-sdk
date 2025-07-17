// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataQualityEvaluationTaskInstanceTaskHooks extends $dara.Model {
  /**
   * @example
   * ${severity} == "High" AND ${status} == "Critical"
   */
  condition?: string;
  /**
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
   * @example
   * {"atAll":"true"}
   */
  extension?: string;
  /**
   * @example
   * AliUid
   */
  receiverType?: string;
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
  notificationChannels?: DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationChannels[];
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
   * @example
   * ${blockType} == "Strong"
   */
  condition?: string;
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
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @example
   * ds=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
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
  taskIds?: number[];
  /**
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
   * @example
   * 201
   */
  dataSourceId?: number;
  hooks?: DataQualityEvaluationTaskInstanceTaskHooks[];
  /**
   * @example
   * 10001
   */
  id?: number;
  /**
   * @example
   * 质量校验任务
   */
  name?: string;
  notifications?: DataQualityEvaluationTaskInstanceTaskNotifications[];
  projectId?: number;
  /**
   * @example
   * { "queue": "default", "sqlEngine": "SPARK_SQL" }
   */
  runtimeConf?: string;
  target?: DataQualityEvaluationTaskInstanceTaskTarget;
  tenantId?: number;
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
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @example
   * 1710239005403
   */
  finishTime?: number;
  /**
   * @example
   * 10001
   */
  id?: number;
  /**
   * @example
   * Passed
   */
  status?: string;
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

