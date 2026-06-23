// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksHooks extends $dara.Model {
  /**
   * @remarks
   * Hook触发条件
   * 
   * @example
   * ${severity} == "High" AND ${status} == "Critical"
   */
  condition?: string;
  /**
   * @remarks
   * 后续处理动作类型
   * - BlockTaskInstance：阻塞DataWorks任务实例执行
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
   * 告警方式
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
   * 扩展信息，格式为 json，例如钉钉机器人支持 at 所有人
   * 
   * @example
   * {"atAll":"true"}
   */
  extension?: string;
  /**
   * @remarks
   * 告警接收人类型
   * - AliUid - 阿里云账号Uid
   * - WebhookUrl - 自定义 webhook URL
   * - DingdingUrl - 钉钉机器人Url
   * - FeishuUrl - 飞书机器人Url
   * - WeixinUrl - 企微机器人Url
   * 
   * @example
   * AliUid
   */
  receiverType?: string;
  /**
   * @remarks
   * 告警接收人具体值
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
   * 告警方式配置
   */
  notificationChannels?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotificationsNotificationChannels[];
  /**
   * @remarks
   * 告警接收人配置
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
   * Notification触发条件
   * 
   * @example
   * ${severity} == "High"
   */
  condition?: string;
  /**
   * @remarks
   * 具体的告警设置
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
   * 表类型的数据集，表所属的数据库类型
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
   * 分区表的分区设置
   * 
   * @example
   * ds=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @remarks
   * 表在数据地图中的唯一ID
   * 
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
   * @remarks
   * 监控对象类型
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
   * type=ByScheduledTaskInstance时生效
   * ,具体指明哪些调度节点的实例执行成功后可以触发
   */
  taskIds?: number[];
  /**
   * @remarks
   * 何种事件可以触发质量校验任务执行
   * 
   * - ByScheduledTaskInstance：调度实例运行成功
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
   * 数据质量校验任务描述，最长65535个字符
   * 
   * @example
   * This is a daily run data quality evaluation plan
   */
  description?: string;
  /**
   * @remarks
   * 数据质量校验任务实例生命周期中的回调设置，目前只支持一个阻塞调度任务的Hook
   */
  hooks?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksHooks[];
  /**
   * @remarks
   * 数据质量校验任务ID
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * 数据质量校验任务名称，数字、英文字母、汉字、半角全角标点符号组合，最长255个字符。
   * 
   * @example
   * Data quality verification task
   */
  name?: string;
  /**
   * @remarks
   * 告警配置
   */
  notifications?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotifications;
  /**
   * @remarks
   * DataWorks工作空间ID
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * 使用数据源时的一些设置，目前只支持指定EMR的yarn队列、采集EMR表时SQL引擎指定为SPARK_SQL|KYUUBI|PRESTO_SQL|HIVE_SQL
   * 
   * @example
   * { "queue": "default", "sqlEngine": "SPARK_SQL" }
   */
  runtimeConf?: string;
  /**
   * @remarks
   * 数据质量校验任务的监控对象
   */
  target?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTarget;
  /**
   * @remarks
   * 数据质量校验任务的触发配置
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
   * 质量校验任务
   */
  dataQualityEvaluationTasks?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasks[];
  /**
   * @remarks
   * 页码
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * 页大小
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * 总条数
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
   * 质量校验任务分页查询结果
   */
  pagingInfo?: ListDataQualityEvaluationTasksResponseBodyPagingInfo;
  /**
   * @remarks
   * API请求ID
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

