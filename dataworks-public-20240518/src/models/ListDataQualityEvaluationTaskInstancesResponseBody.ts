// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskHooks extends $dara.Model {
  /**
   * @remarks
   * The trigger configuration of the callback event.
   * 
   * @example
   * ${severity} == "High" AND ${status} == "Critical"
   */
  condition?: string;
  /**
   * @remarks
   * The type of the callback event. Valid values:
   * 
   * *   BlockTaskInstance. The value indicates that an auto triggered node is blocked.
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

export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotificationsNofiticationReceivers extends $dara.Model {
  /**
   * @remarks
   * The extended information in the JSON format. For example, the DingTalk chatbot can remind all members in a DingTalk group by using the at sign (@).
   * 
   * @example
   * {"atAll":"true"}
   */
  extension?: string;
  /**
   * @remarks
   * The type of the alert recipient. Valid values:
   * 
   * *   AliUid: Alibaba Cloud account ID
   * *   WebhookUrl: URL of a custom webhook
   * *   DingdingUrl: DingTalk chatbot URL
   * *   FeishuUrl: Lark chatbot URL
   * *   WeixinUrl: WeCom chatbot URL
   * 
   * @example
   * AliUid
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

export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotificationsNotificationChannels extends $dara.Model {
  /**
   * @remarks
   * The alert notification methods.
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

export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotifications extends $dara.Model {
  /**
   * @remarks
   * The alert recipients.
   */
  nofiticationReceivers?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotificationsNofiticationReceivers[];
  /**
   * @remarks
   * The alert notification methods.
   */
  notificationChannels?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotificationsNotificationChannels[];
  static names(): { [key: string]: string } {
    return {
      nofiticationReceivers: 'NofiticationReceivers',
      notificationChannels: 'NotificationChannels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nofiticationReceivers: { 'type': 'array', 'itemType': ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotificationsNofiticationReceivers },
      notificationChannels: { 'type': 'array', 'itemType': ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotificationsNotificationChannels },
    };
  }

  validate() {
    if(Array.isArray(this.nofiticationReceivers)) {
      $dara.Model.validateArray(this.nofiticationReceivers);
    }
    if(Array.isArray(this.notificationChannels)) {
      $dara.Model.validateArray(this.notificationChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotifications extends $dara.Model {
  /**
   * @remarks
   * The trigger condition of the alert notification.
   * 
   * @example
   * ${severity} == "High"
   */
  condition?: string;
  /**
   * @remarks
   * The configurations for the alert notification.
   */
  notifications?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotifications[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      notifications: 'Notifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      notifications: { 'type': 'array', 'itemType': ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotifications },
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

export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskTarget extends $dara.Model {
  /**
   * @remarks
   * The type of the database to which the table belongs. Valid values:
   * 
   * *   maxcompute
   * *   emr
   * *   cdh
   * *   hologres
   * *   analyticdb_for_postgresql
   * *   analyticdb_for_mysql
   * *   starrocks
   * 
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @remarks
   * The configuration of the partitioned table.
   * 
   * @example
   * ds=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @remarks
   * The ID of the table in Data Map.
   * 
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
   * @remarks
   * The type of the monitored object. Valid values:
   * 
   * *   Table
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

export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskTrigger extends $dara.Model {
  /**
   * @remarks
   * The IDs of the auto triggered nodes of which the instances are successfully run.
   */
  taskIds?: number[];
  /**
   * @remarks
   * The trigger condition of the task. Valid values:
   * 
   * *   ByScheduledTaskInstance. The value indicates that the task is triggered when the instance of an auto triggered node is successfully run.
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

export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTask extends $dara.Model {
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * This is a daily run data quality evaluation plan.
   */
  description?: string;
  /**
   * @remarks
   * The callback configurations of the task during the instance lifecycle. Blocking an auto triggered node is a type of callback event. Only this type is supported.
   */
  hooks?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskHooks[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * The name of the monitor.
   * 
   * This parameter is required.
   * 
   * @example
   * Quality verification task
   */
  name?: string;
  /**
   * @remarks
   * The configurations for alert notifications.
   */
  notifications?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotifications;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The configuration of the data source. The value of the queue field is default, and that of the sqlEngine field can be set to SPARK_SQL, KYUUBI, PRESTO_SQL, or HIVE_SQL. The value default indicates the YARN queue for E-MapReduce (EMR) tasks.
   * 
   * @example
   * { "queue": "default", "sqlEngine": "SPARK-SQL" }
   */
  runtimeConf?: string;
  /**
   * @remarks
   * The monitored object of the task.
   */
  target?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskTarget;
  /**
   * @remarks
   * The trigger configuration of the task.
   */
  trigger?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskTrigger;
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
      hooks: { 'type': 'array', 'itemType': ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskHooks },
      id: 'number',
      name: 'string',
      notifications: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotifications,
      projectId: 'number',
      runtimeConf: 'string',
      target: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskTarget,
      trigger: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskTrigger,
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

export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstances extends $dara.Model {
  /**
   * @remarks
   * The time at which the instance was generated.
   * 
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @remarks
   * The time at which the instance finished running.
   * 
   * @example
   * 1710239005403
   */
  finishTime?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * The parameters configured for the instance.
   * 
   * @example
   * {
   *   "bizdate": "20240517",
   *   "triggerTime": "1710239005403"
   * }
   */
  parameters?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   Running
   * *   Error
   * *   Passed
   * *   Warned
   * *   Critical
   * 
   * @example
   * Critical
   */
  status?: string;
  /**
   * @remarks
   * The snapshot of the configurations for the task when the task starts.
   */
  task?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTask;
  /**
   * @remarks
   * The information about the trigger module of the instance.
   * 
   * @example
   * {
   *   "TriggerClientId": 10001,
   *   "TriggerClient": "CWF2"
   * }
   */
  triggerContext?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      id: 'Id',
      parameters: 'Parameters',
      projectId: 'ProjectId',
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
      status: 'string',
      task: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTask,
      triggerContext: 'string',
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

export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The instances generated by the task.
   */
  dataQualityEvaluationTaskInstances?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstances[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 294
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataQualityEvaluationTaskInstances: 'DataQualityEvaluationTaskInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityEvaluationTaskInstances: { 'type': 'array', 'itemType': ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstances },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataQualityEvaluationTaskInstances)) {
      $dara.Model.validateArray(this.dataQualityEvaluationTaskInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTaskInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 691CA452-D37A-4ED0-9441
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

