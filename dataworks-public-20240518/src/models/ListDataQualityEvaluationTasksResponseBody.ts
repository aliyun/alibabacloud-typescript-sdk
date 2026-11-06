// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksHooks extends $dara.Model {
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
   * The type of the subsequent action.
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

export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotificationsNotificationChannels extends $dara.Model {
  /**
   * @remarks
   * The notification channel.
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

export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotificationsNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * The extended information in JSON format. For example, DingTalk chatbots support mentioning all members.
   * 
   * @example
   * {"atAll":"true"}
   */
  extension?: string;
  /**
   * @remarks
   * The type of the alert recipient.
   * - AliUid: Alibaba Cloud account UID
   * - WebhookUrl: Custom webhook URL
   * - DingdingUrl: DingTalk chatbot webhook URL
   * - FeishuUrl: Lark chatbot webhook URL
   * - WeixinUrl: WeCom chatbot webhook URL
   * 
   * @example
   * AliUid
   */
  receiverType?: string;
  /**
   * @remarks
   * The specific value of the alert recipient.
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

export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotifications extends $dara.Model {
  /**
   * @remarks
   * The notification channel configuration.
   */
  notificationChannels?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotificationsNotificationChannels[];
  /**
   * @remarks
   * The alert recipient configuration.
   */
  notificationReceivers?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotificationsNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      notificationChannels: 'NotificationChannels',
      notificationReceivers: 'NotificationReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationChannels: { 'type': 'array', 'itemType': ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotificationsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotificationsNotificationReceivers },
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

export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotifications extends $dara.Model {
  /**
   * @remarks
   * The trigger condition of the notification.
   * 
   * @example
   * ${severity} == "High"
   */
  condition?: string;
  /**
   * @remarks
   * The specific alert settings.
   */
  notifications?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotifications[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      notifications: 'Notifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      notifications: { 'type': 'array', 'itemType': ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotifications },
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

export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTarget extends $dara.Model {
  /**
   * @remarks
   * The database type of the table for table-type datasets. Valid values:
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
   * The unique ID of the table in Data Map.
   * 
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
   * @remarks
   * The type of the monitored object.
   * 
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

export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTrigger extends $dara.Model {
  /**
   * @remarks
   * The IDs of the scheduled nodes. This parameter takes effect only when Type is set to ByScheduledTaskInstance. It specifies the scheduled nodes whose successful instance execution triggers the task.
   */
  taskIds?: number[];
  /**
   * @remarks
   * The event that triggers the execution of the data quality check task.
   * 
   * - ByScheduledTaskInstance: The scheduled instance runs successfully.
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

export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasks extends $dara.Model {
  /**
   * @remarks
   * The ID of the data source used by the data quality monitoring task.
   * 
   * @example
   * 45238
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The description of the data quality check task. The description can be up to 65,535 characters in length.
   * 
   * @example
   * This is a daily run data quality evaluation plan
   */
  description?: string;
  /**
   * @remarks
   * The callback settings in the lifecycle of the data quality check task instance. Currently, only one hook that blocks the scheduled task is supported.
   */
  hooks?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksHooks[];
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
   * Data quality verification task
   */
  name?: string;
  /**
   * @remarks
   * The alert configuration.
   */
  notifications?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotifications;
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
   * The settings used when accessing the data source. Currently, you can only specify the YARN queue for EMR and set the SQL engine to SPARK_SQL, KYUUBI, PRESTO_SQL, or HIVE_SQL when collecting EMR tables.
   * 
   * @example
   * { "queue": "default", "sqlEngine": "SPARK_SQL" }
   */
  runtimeConf?: string;
  /**
   * @remarks
   * The monitored object of the data quality check task.
   */
  target?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTarget;
  /**
   * @remarks
   * The trigger configuration of the data quality check task.
   */
  trigger?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTrigger;
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
      hooks: { 'type': 'array', 'itemType': ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksHooks },
      id: 'number',
      name: 'string',
      notifications: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotifications,
      projectId: 'number',
      runtimeConf: 'string',
      target: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTarget,
      trigger: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTrigger,
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

export class ListDataQualityEvaluationTasksResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The data quality check tasks.
   */
  dataQualityEvaluationTasks?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasks[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 131
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityEvaluationTasks: 'DataQualityEvaluationTasks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityEvaluationTasks: { 'type': 'array', 'itemType': ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasks },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataQualityEvaluationTasks)) {
      $dara.Model.validateArray(this.dataQualityEvaluationTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The paged query results of the data quality check tasks.
   */
  pagingInfo?: ListDataQualityEvaluationTasksResponseBodyPagingInfo;
  /**
   * @remarks
   * The ID of the API request.
   * 
   * @example
   * 691CA452-D37A-4ED0-****
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
      pagingInfo: ListDataQualityEvaluationTasksResponseBodyPagingInfo,
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

