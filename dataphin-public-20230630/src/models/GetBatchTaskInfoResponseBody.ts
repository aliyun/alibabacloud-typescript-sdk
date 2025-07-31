// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchTaskInfoResponseBodyTaskInfoCustomScheduleConfig extends $dara.Model {
  /**
   * @example
   * 20:59
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  interval?: number;
  /**
   * @example
   * HOUR
   */
  intervalUnit?: string;
  /**
   * @example
   * DAILY
   */
  schedulePeriod?: string;
  /**
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

export class GetBatchTaskInfoResponseBodyTaskInfoParamList extends $dara.Model {
  /**
   * @example
   * key
   */
  key?: string;
  /**
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

export class GetBatchTaskInfoResponseBodyTaskInfoSparkClientInfo extends $dara.Model {
  /**
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

export class GetBatchTaskInfoResponseBodyTaskInfoUpStreamListDependPeriod extends $dara.Model {
  /**
   * @example
   * 1
   */
  periodOffset?: number;
  /**
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

export class GetBatchTaskInfoResponseBodyTaskInfoUpStreamList extends $dara.Model {
  dependPeriod?: GetBatchTaskInfoResponseBodyTaskInfoUpStreamListDependPeriod;
  /**
   * @example
   * LAST
   */
  dependStrategy?: string;
  fieldList?: string[];
  /**
   * @example
   * PHYSICAL
   */
  nodeType?: string;
  /**
   * @example
   * 1
   */
  periodDiff?: number;
  sourceNodeEnabled?: boolean;
  /**
   * @example
   * n_2001
   */
  sourceNodeId?: string;
  /**
   * @example
   * t_input1
   */
  sourceNodeName?: string;
  /**
   * @example
   * t_input1
   */
  sourceNodeOutputName?: string;
  /**
   * @example
   * 张三
   */
  sourceNodeUserName?: string;
  /**
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
      dependPeriod: GetBatchTaskInfoResponseBodyTaskInfoUpStreamListDependPeriod,
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

export class GetBatchTaskInfoResponseBodyTaskInfo extends $dara.Model {
  /**
   * @example
   * show tables;
   */
  code?: string;
  /**
   * @example
   * 0 0 1 * * ?
   */
  cronExpression?: string;
  customScheduleConfig?: GetBatchTaskInfoResponseBodyTaskInfoCustomScheduleConfig;
  /**
   * @example
   * dag_102121211
   */
  dagId?: string;
  /**
   * @example
   * mysql_catalog
   */
  dataSourceCatalog?: string;
  /**
   * @example
   * 12131111
   */
  dataSourceId?: string;
  /**
   * @example
   * erp
   */
  dataSourceSchema?: string;
  /**
   * @example
   * 30231123
   */
  developOwnerId?: string;
  /**
   * @example
   * 张三
   */
  developOwnerName?: string;
  /**
   * @example
   * 12113111
   */
  fileId?: number;
  hasDevNode?: boolean;
  /**
   * @example
   * 测试任务1
   */
  name?: string;
  needPublish?: boolean;
  /**
   * @example
   * xx测试
   */
  nodeDescription?: string;
  /**
   * @example
   * openapi
   */
  nodeFrom?: string;
  /**
   * @example
   * n_1011_21232132322
   */
  nodeId?: string;
  /**
   * @example
   * 测试任务1
   */
  nodeName?: string;
  nodeOutputNameList?: string[];
  /**
   * @example
   * 1
   */
  nodeStatus?: number;
  /**
   * @example
   * 30231123
   */
  operatorUserId?: string;
  /**
   * @example
   * 30231123
   */
  opsOwnerId?: string;
  /**
   * @example
   * 张三
   */
  opsOwnerName?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 30231123
   */
  ownerUserId?: string;
  paramList?: GetBatchTaskInfoResponseBodyTaskInfoParamList[];
  paused?: boolean;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * 131211211
   */
  projectId?: number;
  published?: boolean;
  /**
   * @example
   * test xx
   */
  remark?: string;
  rerunable?: boolean;
  /**
   * @example
   * DAILY
   */
  schedulePeriod?: string;
  /**
   * @example
   * 3
   */
  scheduleType?: number;
  sparkClientInfo?: GetBatchTaskInfoResponseBodyTaskInfoSparkClientInfo;
  /**
   * @example
   * 测试任务1
   */
  status?: string;
  /**
   * @example
   * 21
   */
  taskType?: number;
  upStreamList?: GetBatchTaskInfoResponseBodyTaskInfoUpStreamList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      cronExpression: 'CronExpression',
      customScheduleConfig: 'CustomScheduleConfig',
      dagId: 'DagId',
      dataSourceCatalog: 'DataSourceCatalog',
      dataSourceId: 'DataSourceId',
      dataSourceSchema: 'DataSourceSchema',
      developOwnerId: 'DevelopOwnerId',
      developOwnerName: 'DevelopOwnerName',
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
      opsOwnerId: 'OpsOwnerId',
      opsOwnerName: 'OpsOwnerName',
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
      customScheduleConfig: GetBatchTaskInfoResponseBodyTaskInfoCustomScheduleConfig,
      dagId: 'string',
      dataSourceCatalog: 'string',
      dataSourceId: 'string',
      dataSourceSchema: 'string',
      developOwnerId: 'string',
      developOwnerName: 'string',
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
      opsOwnerId: 'string',
      opsOwnerName: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      paramList: { 'type': 'array', 'itemType': GetBatchTaskInfoResponseBodyTaskInfoParamList },
      paused: 'boolean',
      priority: 'number',
      projectId: 'number',
      published: 'boolean',
      remark: 'string',
      rerunable: 'boolean',
      schedulePeriod: 'string',
      scheduleType: 'number',
      sparkClientInfo: GetBatchTaskInfoResponseBodyTaskInfoSparkClientInfo,
      status: 'string',
      taskType: 'number',
      upStreamList: { 'type': 'array', 'itemType': GetBatchTaskInfoResponseBodyTaskInfoUpStreamList },
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

export class GetBatchTaskInfoResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  taskInfo?: GetBatchTaskInfoResponseBodyTaskInfo;
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
      taskInfo: GetBatchTaskInfoResponseBodyTaskInfo,
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

