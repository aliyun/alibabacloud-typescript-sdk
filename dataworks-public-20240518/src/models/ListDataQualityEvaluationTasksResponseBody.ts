// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksHooks extends $dara.Model {
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

export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotificationsNotificationChannels extends $dara.Model {
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

export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotificationsNotificationReceivers extends $dara.Model {
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

export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotifications extends $dara.Model {
  /**
   * @remarks
   * The alert notification methods.
   */
  notificationChannels?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotificationsNotificationChannels[];
  /**
   * @remarks
   * The alert recipients.
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

export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTrigger extends $dara.Model {
  /**
   * @remarks
   * The IDs of the auto triggered nodes of which the instances are successfully run. This parameter takes effect only if the Type parameter is set to ByScheduledTaskInstance.
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

export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasks extends $dara.Model {
  dataSourceId?: number;
  /**
   * @remarks
   * The description of the data quality monitoring task. The description can be up to 65,535 characters in length.
   * 
   * @example
   * This is a daily run data quality evaluation plan
   */
  description?: string;
  /**
   * @remarks
   * The callback configurations of the task during the instance lifecycle. Blocking an auto triggered node is a type of callback event. Only this type is supported.
   */
  hooks?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksHooks[];
  /**
   * @remarks
   * The ID of the data quality monitoring task.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * The name of the data quality monitoring task. The name can be up to 255 characters in length and can contain digits, letters, and punctuation marks.
   * 
   * @example
   * Data quality verification task
   */
  name?: string;
  /**
   * @remarks
   * The configurations for alert notifications.
   */
  notifications?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotifications;
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
  target?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTarget;
  /**
   * @remarks
   * The trigger configuration of the task.
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
   * The data quality monitoring tasks.
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
   * The total number of entries returned.
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
   * The pagination information.
   */
  pagingInfo?: ListDataQualityEvaluationTasksResponseBodyPagingInfo;
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

