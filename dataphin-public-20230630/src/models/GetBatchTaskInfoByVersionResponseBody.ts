// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchTaskInfoByVersionResponseBodyTaskInfoCustomScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * The end time in the format of HH:mm.
   * 
   * @example
   * 20:59
   */
  endTime?: string;
  /**
   * @remarks
   * The custom interval.
   * 
   * @example
   * 1
   */
  interval?: number;
  /**
   * @remarks
   * The interval unit. Valid values: MINUTE, HOUR.
   * 
   * @example
   * HOUR
   */
  intervalUnit?: string;
  /**
   * @remarks
   * The scheduling period.
   * 
   * @example
   * DAILY
   */
  schedulePeriod?: string;
  /**
   * @remarks
   * The start time in the format of HH:mm.
   * 
   * @example
   * 08:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      intervalUnit: 'IntervalUnit',
      schedulePeriod: 'SchedulePeriod',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      interval: 'number',
      intervalUnit: 'string',
      schedulePeriod: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoByVersionResponseBodyTaskInfoParamList extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * Value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class GetBatchTaskInfoByVersionResponseBodyTaskInfoSparkClientInfo extends $dara.Model {
  /**
   * @remarks
   * The Spark client version.
   * 
   * @example
   * abc
   */
  sparkClientVersion?: string;
  static names(): { [key: string]: string } {
    return {
      sparkClientVersion: 'SparkClientVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sparkClientVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoByVersionResponseBodyTaskInfoUpStreamListDependPeriod extends $dara.Model {
  /**
   * @remarks
   * The period offset. This parameter is required when PeriodType is set to LAST_N_PERIOD.
   * 
   * @example
   * 1
   */
  periodOffset?: number;
  /**
   * @remarks
   * The dependency period type. Valid values:
   * - CURRENT_PERIOD
   * - LAST_PERIOD
   * - LAST_N_PERIOD
   * - LAST_24_HOUR.
   * 
   * @example
   * CURRENT_PERIOD
   */
  periodType?: string;
  static names(): { [key: string]: string } {
    return {
      periodOffset: 'PeriodOffset',
      periodType: 'PeriodType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodOffset: 'number',
      periodType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoByVersionResponseBodyTaskInfoUpStreamList extends $dara.Model {
  /**
   * @remarks
   * The dependency period.
   */
  dependPeriod?: GetBatchTaskInfoByVersionResponseBodyTaskInfoUpStreamListDependPeriod;
  /**
   * @remarks
   * The dependency strategy. Valid values: ALL, FIRST, LAST, NEAR.
   * 
   * @example
   * LAST
   */
  dependStrategy?: string;
  /**
   * @remarks
   * The fields of the dependent logical table.
   */
  fieldList?: string[];
  /**
   * @remarks
   * The type of the upstream dependency node. Valid values:
   * - PHYSICAL: physical node.
   * - LOGICAL: logical table dependency.
   * 
   * @example
   * PHYSICAL
   */
  nodeType?: string;
  /**
   * @remarks
   * The period difference. A value of 0 indicates a same-period dependency. A positive number indicates a dependency on the previous N periods.
   * 
   * @example
   * 1
   */
  periodDiff?: number;
  /**
   * @remarks
   * Indicates whether the upstream node is enabled.
   */
  sourceNodeEnabled?: boolean;
  /**
   * @remarks
   * The upstream node ID.
   * 
   * @example
   * n_2001
   */
  sourceNodeId?: string;
  /**
   * @remarks
   * The upstream node name.
   * 
   * @example
   * t_input1
   */
  sourceNodeName?: string;
  /**
   * @remarks
   * The output name of the upstream node.
   * 
   * @example
   * t_input1
   */
  sourceNodeOutputName?: string;
  /**
   * @remarks
   * The username of the upstream node owner.
   * 
   * @example
   * 张三
   */
  sourceNodeUserName?: string;
  /**
   * @remarks
   * The input table name.
   * 
   * @example
   * t_input1
   */
  sourceTableName?: string;
  static names(): { [key: string]: string } {
    return {
      dependPeriod: 'DependPeriod',
      dependStrategy: 'DependStrategy',
      fieldList: 'FieldList',
      nodeType: 'NodeType',
      periodDiff: 'PeriodDiff',
      sourceNodeEnabled: 'SourceNodeEnabled',
      sourceNodeId: 'SourceNodeId',
      sourceNodeName: 'SourceNodeName',
      sourceNodeOutputName: 'SourceNodeOutputName',
      sourceNodeUserName: 'SourceNodeUserName',
      sourceTableName: 'SourceTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependPeriod: GetBatchTaskInfoByVersionResponseBodyTaskInfoUpStreamListDependPeriod,
      dependStrategy: 'string',
      fieldList: { 'type': 'array', 'itemType': 'string' },
      nodeType: 'string',
      periodDiff: 'number',
      sourceNodeEnabled: 'boolean',
      sourceNodeId: 'string',
      sourceNodeName: 'string',
      sourceNodeOutputName: 'string',
      sourceNodeUserName: 'string',
      sourceTableName: 'string',
    };
  }

  validate() {
    if(this.dependPeriod && typeof (this.dependPeriod as any).validate === 'function') {
      (this.dependPeriod as any).validate();
    }
    if(Array.isArray(this.fieldList)) {
      $dara.Model.validateArray(this.fieldList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoByVersionResponseBodyTaskInfo extends $dara.Model {
  /**
   * @remarks
   * The node code.
   * 
   * @example
   * show tables;
   */
  code?: string;
  /**
   * @remarks
   * The cron expression for automatic scheduling. For more information, refer to the Linux cron expression syntax.
   * 
   * @example
   * 0 0 1 * * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * The custom scheduling interval configuration.
   */
  customScheduleConfig?: GetBatchTaskInfoByVersionResponseBodyTaskInfoCustomScheduleConfig;
  /**
   * @remarks
   * The ID of the DAG to which the node belongs.
   * 
   * @example
   * dag_102121211
   */
  dagId?: string;
  /**
   * @remarks
   * The catalog for database SQL nodes. This parameter takes effect only for data source types that require a catalog, such as Presto.
   * 
   * @example
   * mysql_catalog
   */
  dataSourceCatalog?: string;
  /**
   * @remarks
   * The data source ID for database SQL nodes.
   * 
   * @example
   * 12131111
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The schema for database SQL nodes. This parameter takes effect only for data source types that require a schema, such as Oracle.
   * 
   * @example
   * erp
   */
  dataSourceSchema?: string;
  /**
   * @remarks
   * The node ID in the node directory tree.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  /**
   * @remarks
   * Indicates whether the node has a development environment node.
   */
  hasDevNode?: boolean;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * 测试任务1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the node needs to be published.
   */
  needPublish?: boolean;
  /**
   * @remarks
   * The node description.
   * 
   * @example
   * xx测试
   */
  nodeDescription?: string;
  /**
   * @remarks
   * The source of the node, indicating the organization or application that created the node.
   * 
   * @example
   * openapi
   */
  nodeFrom?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * n_1011_21232132322
   */
  nodeId?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * 测试任务1
   */
  nodeName?: string;
  /**
   * @remarks
   * The list of node output names.
   */
  nodeOutputNameList?: string[];
  /**
   * @remarks
   * The node status. Valid values:
   * - 1: Normal.
   * - 2: Paused.
   * - 3: Dry run.
   * 
   * @example
   * 1
   */
  nodeStatus?: number;
  /**
   * @remarks
   * The user ID of the current operator.
   * 
   * @example
   * 30231123
   */
  operatorUserId?: string;
  /**
   * @remarks
   * The name of the node owner.
   * 
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @remarks
   * The user ID of the node owner.
   * 
   * @example
   * 30231123
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The list of custom node parameters.
   */
  paramList?: GetBatchTaskInfoByVersionResponseBodyTaskInfoParamList[];
  /**
   * @remarks
   * Indicates whether the node scheduling is paused.
   */
  paused?: boolean;
  /**
   * @remarks
   * The scheduling priority of the node. Valid values: 1 to 9. A larger value indicates a lower priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  /**
   * @remarks
   * Indicates whether the node has been published.
   */
  published?: boolean;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test xx
   */
  remark?: string;
  /**
   * @remarks
   * Indicates whether the node can be rerun.
   */
  rerunable?: boolean;
  /**
   * @remarks
   * The scheduling period. Valid values:
   * - YEARLY
   * - MONTHLY
   * - WEEKLY
   * - DAILY
   * - HOURLY
   * - MINUTELY.
   * 
   * @example
   * DAILY
   */
  schedulePeriod?: string;
  /**
   * @remarks
   * The scheduling type. Valid values:
   * - 1: periodic node.
   * - 3: manual node.
   * 
   * @example
   * 3
   */
  scheduleType?: number;
  /**
   * @remarks
   * The Spark client information.
   */
  sparkClientInfo?: GetBatchTaskInfoByVersionResponseBodyTaskInfoSparkClientInfo;
  /**
   * @remarks
   * The publish status. Valid values:
   * - 0: draft.
   * - 1: submitted.
   * - 100: in development.
   * 
   * @example
   * 测试任务1
   */
  status?: string;
  /**
   * @remarks
   * The node type. For more information, see the API operation for creating a batch task.
   * 
   * @example
   * 21
   */
  taskType?: number;
  /**
   * @remarks
   * The upstream dependencies.
   */
  upStreamList?: GetBatchTaskInfoByVersionResponseBodyTaskInfoUpStreamList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      cronExpression: 'CronExpression',
      customScheduleConfig: 'CustomScheduleConfig',
      dagId: 'DagId',
      dataSourceCatalog: 'DataSourceCatalog',
      dataSourceId: 'DataSourceId',
      dataSourceSchema: 'DataSourceSchema',
      fileId: 'FileId',
      hasDevNode: 'HasDevNode',
      name: 'Name',
      needPublish: 'NeedPublish',
      nodeDescription: 'NodeDescription',
      nodeFrom: 'NodeFrom',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeOutputNameList: 'NodeOutputNameList',
      nodeStatus: 'NodeStatus',
      operatorUserId: 'OperatorUserId',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      paramList: 'ParamList',
      paused: 'Paused',
      priority: 'Priority',
      projectId: 'ProjectId',
      published: 'Published',
      remark: 'Remark',
      rerunable: 'Rerunable',
      schedulePeriod: 'SchedulePeriod',
      scheduleType: 'ScheduleType',
      sparkClientInfo: 'SparkClientInfo',
      status: 'Status',
      taskType: 'TaskType',
      upStreamList: 'UpStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      cronExpression: 'string',
      customScheduleConfig: GetBatchTaskInfoByVersionResponseBodyTaskInfoCustomScheduleConfig,
      dagId: 'string',
      dataSourceCatalog: 'string',
      dataSourceId: 'string',
      dataSourceSchema: 'string',
      fileId: 'number',
      hasDevNode: 'boolean',
      name: 'string',
      needPublish: 'boolean',
      nodeDescription: 'string',
      nodeFrom: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeOutputNameList: { 'type': 'array', 'itemType': 'string' },
      nodeStatus: 'number',
      operatorUserId: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      paramList: { 'type': 'array', 'itemType': GetBatchTaskInfoByVersionResponseBodyTaskInfoParamList },
      paused: 'boolean',
      priority: 'number',
      projectId: 'number',
      published: 'boolean',
      remark: 'string',
      rerunable: 'boolean',
      schedulePeriod: 'string',
      scheduleType: 'number',
      sparkClientInfo: GetBatchTaskInfoByVersionResponseBodyTaskInfoSparkClientInfo,
      status: 'string',
      taskType: 'number',
      upStreamList: { 'type': 'array', 'itemType': GetBatchTaskInfoByVersionResponseBodyTaskInfoUpStreamList },
    };
  }

  validate() {
    if(this.customScheduleConfig && typeof (this.customScheduleConfig as any).validate === 'function') {
      (this.customScheduleConfig as any).validate();
    }
    if(Array.isArray(this.nodeOutputNameList)) {
      $dara.Model.validateArray(this.nodeOutputNameList);
    }
    if(Array.isArray(this.paramList)) {
      $dara.Model.validateArray(this.paramList);
    }
    if(this.sparkClientInfo && typeof (this.sparkClientInfo as any).validate === 'function') {
      (this.sparkClientInfo as any).validate();
    }
    if(Array.isArray(this.upStreamList)) {
      $dara.Model.validateArray(this.upStreamList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoByVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The node details.
   */
  taskInfo?: GetBatchTaskInfoByVersionResponseBodyTaskInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskInfo: GetBatchTaskInfoByVersionResponseBodyTaskInfo,
    };
  }

  validate() {
    if(this.taskInfo && typeof (this.taskInfo as any).validate === 'function') {
      (this.taskInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

