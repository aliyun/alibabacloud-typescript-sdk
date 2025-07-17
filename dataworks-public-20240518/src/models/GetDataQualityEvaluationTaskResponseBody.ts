// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskHooks extends $dara.Model {
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
   * The hook type. Only one hook type is supported.
   * 
   * *   BlockTaskInstance: Blocks the running of scheduling tasks. A monitor is triggered by scheduling tasks. After a monitor finishes running, the monitor determines whether to block the running of scheduling tasks based on the hook condition.
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

export class GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotificationsNotificationsNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * {  "atAll": true }
   */
  extension?: string;
  /**
   * @remarks
   * The additional parameters that are required when alerts are sent. The parameters are JSON-formatted strings. The following keys are supported:
   * 
   * *   atAll: specifies that all members in a group are mentioned when alerts are sent by using DingTalk. This parameter is valid only if you set ReceiverType to DingdingUrl.
   * 
   * Valid values:
   * 
   * *   WebhookUrl
   * *   FeishuUrl
   * *   DingdingUrl
   * *   WeixinUrl
   * *   AliUid
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

export class GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotificationsNotifications extends $dara.Model {
  /**
   * @remarks
   * The alert notification methods.
   */
  notificationChannels?: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotificationsNotificationsNotificationChannels[];
  /**
   * @remarks
   * The configurations of alert recipients.
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
   * The notification trigger condition. When this condition is met, the alert notification is triggered. Only two conditional expressions are supported:
   * 
   * *   Specify only one group of rule strength type and rule check status, such as `${severity} == "High" AND ${status} == "Critical"`. In this expression, the hook trigger condition is met if severity is High and status is Critical.
   * *   Specify multiple groups of rule strength types and rule check status, such as `(${severity} == "High"AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")`. In this expression, the hook trigger condition is met if severity is High and status is Critical, severity is Normal and status is Critical, or severity is Normal and status is Error. The enumeration of severity in a conditional expression is the same as the enumeration of severity in DataQualityRule. The enumeration of status in a conditional expression is the same as the enumeration of status in DataQualityResult.
   * 
   * @example
   * (${severity} == "High" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Critical") OR (${severity} == "Normal" AND ${status} == "Error")
   */
  condition?: string;
  /**
   * @remarks
   * The configurations of alert notifications.
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
   * The type of the database to which the table belongs. Valid values:
   * 
   * *   maxcompute
   * *   hologres
   * *   cdh
   * *   analyticdb_for_mysql
   * *   starrocks
   * *   emr
   * *   analyticdb_for_postgresql
   * 
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @remarks
   * Data quality monitoring partition range settings.
   * 
   * @example
   * pt=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @remarks
   * The ID of the table in Data Map.
   * 
   * @example
   * odps.meta_open_api_test_sz.test_partition_tbl
   */
  tableGuid?: string;
  /**
   * @remarks
   * The type of the monitoring object.
   * 
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
   * The IDs of scheduling tasks. This parameter is valid only if you set Type to ByScheduledTaskInstance.
   */
  taskIds?: number[];
  /**
   * @remarks
   * The trigger type of the monitor. Valid values:
   * 
   * *   ByManual: The monitor is manually triggered.
   * *   ByScheduledTaskInstance: The monitor is triggered by associated scheduling tasks.
   * *   ByQualityNode: The monitor is triggered by created data quality monitoring nodes.
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
   * The ID of the data source used for the monitor.
   * 
   * @example
   * 45238
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The description of the monitor.
   * 
   * @example
   * The description of the quality monitoring task.
   */
  description?: string;
  /**
   * @remarks
   * The hook.
   */
  hooks?: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskHooks[];
  /**
   * @remarks
   * The ID of the data quality monitor.
   * 
   * @example
   * 2178
   */
  id?: number;
  /**
   * @remarks
   * The name of the monitor.
   * 
   * This parameter is required.
   * 
   * @example
   * OpenAPI create a data quality monitoring test
   */
  name?: string;
  /**
   * @remarks
   * The configurations of alert notifications.
   */
  notifications?: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotifications;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 2626
   */
  projectId?: number;
  /**
   * @remarks
   * Extended configuration, JSON-formatted string, takes effect only for EMR-type data quality monitoring.
   * 
   * - queue: the yarn queue used when performing EMR data quality verification. The default queue is the queue configured for this project.
   * - sqlEngine: SQL engine used when performing EMR data verification
   *     - HIVE_ SQL
   *     - SPARK_ SQL
   * 
   * @example
   * { "queue": "default", "sqlEngine": "SPARK_SQL" }
   */
  runtimeConf?: string;
  /**
   * @remarks
   * The monitored object of the monitor.
   */
  target?: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskTarget;
  /**
   * @remarks
   * The trigger configuration of the monitor.
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
   * The details of the monitor.
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

