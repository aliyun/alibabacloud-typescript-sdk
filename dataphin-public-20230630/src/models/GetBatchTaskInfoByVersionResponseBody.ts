// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchTaskInfoByVersionResponseBodyTaskInfoCustomScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * The end time in the HH:mm format.
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
   * The unit of the interval. Valid values: MINUTE and HOUR.
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
   * The start time in the HH:mm format.
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

export class GetBatchTaskInfoByVersionResponseBodyTaskInfoDatabricksPythonConnectInfo extends $dara.Model {
  /**
   * @remarks
   * The HTTP path in the development environment.
   * 
   * @example
   * /sql/1.0/warehouses/dev
   */
  devHttpPath?: string;
  /**
   * @remarks
   * Specifies whether to enable Databricks Python Connect.
   * 
   * @example
   * true
   */
  enableDatabricksPythonConnect?: boolean;
  /**
   * @remarks
   * The HTTP path in the production environment.
   * 
   * @example
   * /sql/1.0/warehouses/prod
   */
  prodHttpPath?: string;
  static names(): { [key: string]: string } {
    return {
      devHttpPath: 'DevHttpPath',
      enableDatabricksPythonConnect: 'EnableDatabricksPythonConnect',
      prodHttpPath: 'ProdHttpPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devHttpPath: 'string',
      enableDatabricksPythonConnect: 'boolean',
      prodHttpPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoByVersionResponseBodyTaskInfoExecuteRerunConfig extends $dara.Model {
  /**
   * @remarks
   * The custom retry interval for failed executions.
   * 
   * @example
   * 60
   */
  customRerunInterval?: string;
  /**
   * @remarks
   * The custom number of retries for failed executions.
   * 
   * @example
   * 3
   */
  customRerunTimes?: string;
  /**
   * @remarks
   * Specifies whether to follow the system retry configuration.
   * 
   * @example
   * false
   */
  followSystem?: boolean;
  static names(): { [key: string]: string } {
    return {
      customRerunInterval: 'CustomRerunInterval',
      customRerunTimes: 'CustomRerunTimes',
      followSystem: 'FollowSystem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customRerunInterval: 'string',
      customRerunTimes: 'string',
      followSystem: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoByVersionResponseBodyTaskInfoExecuteTimeOutConfig extends $dara.Model {
  /**
   * @remarks
   * The custom timeout period.
   * 
   * @example
   * 1800
   */
  customValues?: string;
  /**
   * @remarks
   * Specifies whether to follow the system retry configuration.
   * 
   * @example
   * false
   */
  followSystem?: boolean;
  static names(): { [key: string]: string } {
    return {
      customValues: 'CustomValues',
      followSystem: 'FollowSystem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customValues: 'string',
      followSystem: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoByVersionResponseBodyTaskInfoPaiConfig extends $dara.Model {
  /**
   * @remarks
   * The PAI experiment ID.
   * 
   * @example
   * 789012
   */
  experimentId?: string;
  /**
   * @remarks
   * The PAI region.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The PAI workspace ID.
   * 
   * @example
   * 123456
   */
  workSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      region: 'Region',
      workSpaceId: 'WorkSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      region: 'string',
      workSpaceId: 'string',
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

export class GetBatchTaskInfoByVersionResponseBodyTaskInfoPythonModuleList extends $dara.Model {
  /**
   * @remarks
   * The ID of the third-party package.
   * 
   * @example
   * 1001
   */
  moduleId?: number;
  /**
   * @remarks
   * The name of the third-party package.
   * 
   * @example
   * pandas
   */
  name?: string;
  /**
   * @remarks
   * The Python version required by the third-party package.
   * 
   * @example
   * Python 3.7
   */
  pythonVersion?: string;
  /**
   * @remarks
   * The version of the third-party package.
   * 
   * @example
   * 1.3.5
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      moduleId: 'ModuleId',
      name: 'Name',
      pythonVersion: 'PythonVersion',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleId: 'number',
      name: 'string',
      pythonVersion: 'string',
      version: 'string',
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
   * The name of the Spark client.
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
   * The period offset. This parameter is required when the PeriodType parameter is set to LAST_N_PERIOD.
   * 
   * @example
   * 1
   */
  periodOffset?: number;
  /**
   * @remarks
   * The dependency period type. Valid values:
   * - CURRENT_PERIOD: Current period.
   * - LAST_PERIOD: Last period.
   * - LAST_N_PERIOD: Last N periods.
   * - LAST_24_HOUR: Last 24 hours.
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
   * The dependency strategy. Valid values:
   * - ALL: All.
   * - FIRST: First.
   * - LAST: Last.
   * - NEAR: Nearest.
   * 
   * @example
   * LAST
   */
  dependStrategy?: string;
  /**
   * @remarks
   * The dependent logical table fields.
   */
  fieldList?: string[];
  /**
   * @remarks
   * The upstream dependency node type. Valid values:
   * - PHYSICAL: Physical node.
   * - LOGICAL: Logical table dependency.
   * 
   * @example
   * PHYSICAL
   */
  nodeType?: string;
  /**
   * @remarks
   * The period difference. A value of 0 indicates a same-period dependency. A positive integer indicates a dependency on the previous N periods.
   * 
   * @example
   * 1
   */
  periodDiff?: number;
  /**
   * @remarks
   * Specifies whether the upstream node is enabled.
   */
  sourceNodeEnabled?: boolean;
  /**
   * @remarks
   * The ID of the upstream node.
   * 
   * @example
   * n_2001
   */
  sourceNodeId?: string;
  /**
   * @remarks
   * The name of the upstream node.
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
   * The upstream username.
   * 
   * @example
   * Zhang San
   */
  sourceNodeUserName?: string;
  /**
   * @remarks
   * The name of the input table.
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
   * The code of the node.
   * 
   * @example
   * show tables;
   */
  code?: string;
  /**
   * @remarks
   * The ID of the offline code template.
   * 
   * @example
   * st_123456
   */
  codeTemplateId?: string;
  /**
   * @remarks
   * The version of the offline code template.
   * 
   * @example
   * 1
   */
  codeTemplateVersion?: number;
  /**
   * @remarks
   * The current CPU resource configuration of the node. If queried by version, this is the configuration of the corresponding version.
   * 
   * @example
   * 0.5
   */
  cpuResource?: string;
  /**
   * @remarks
   * The cron expression for automatic scheduling. You can refer to Linux cron expressions.
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
   * The catalog of the data source. This parameter applies only to database SQL nodes and data source types that require a catalog, such as Presto.
   * 
   * @example
   * mysql_catalog
   */
  dataSourceCatalog?: string;
  /**
   * @remarks
   * The ID of the data source for the database SQL node.
   * 
   * @example
   * 12131111
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The schema of the data source. This parameter applies only to database SQL nodes and data source types that require a schema, such as Oracle.
   * 
   * @example
   * erp
   */
  dataSourceSchema?: string;
  /**
   * @remarks
   * The Python connection information.
   */
  databricksPythonConnectInfo?: GetBatchTaskInfoByVersionResponseBodyTaskInfoDatabricksPythonConnectInfo;
  /**
   * @remarks
   * The IDs of the developers.
   */
  developOwnerIdList?: string[];
  /**
   * @remarks
   * The names of the developers.
   */
  developOwnerNameList?: string[];
  /**
   * @remarks
   * The retry configuration for failed executions. This is the current configuration of the node. If queried by version, this is the configuration of the corresponding version.
   */
  executeRerunConfig?: GetBatchTaskInfoByVersionResponseBodyTaskInfoExecuteRerunConfig;
  /**
   * @remarks
   * The execution timeout configuration. This is the current configuration of the node. If queried by version, this is the configuration of the corresponding version.
   */
  executeTimeOutConfig?: GetBatchTaskInfoByVersionResponseBodyTaskInfoExecuteTimeOutConfig;
  /**
   * @remarks
   * The node ID of the task directory tree.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  /**
   * @remarks
   * Indicates whether a development environment node exists.
   */
  hasDevNode?: boolean;
  /**
   * @remarks
   * The current CPU resource configuration of the node. If queried by version, this is the configuration of the corresponding version.
   * 
   * @example
   * 1024
   */
  memoryResource?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Test task 1
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether publishing is required.
   */
  needPublish?: boolean;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * xx test
   */
  nodeDescription?: string;
  /**
   * @remarks
   * The source of the node, which indicates the organization or application that created the node.
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
   * Test task 1
   */
  nodeName?: string;
  /**
   * @remarks
   * The list of node output names.
   */
  nodeOutputNameList?: string[];
  /**
   * @remarks
   * The node status. Valid values: 1: Normal. 2: Paused. 3: Dry run.
   * 
   * @example
   * 1
   */
  nodeStatus?: number;
  /**
   * @remarks
   * The ID of the user who performs the current operation.
   * 
   * @example
   * 30231123
   */
  operatorUserId?: string;
  /**
   * @remarks
   * The list of O&M owner IDs.
   */
  opsOwnerIdList?: string[];
  /**
   * @remarks
   * The list of O&M owner names.
   */
  opsOwnerNameList?: string[];
  /**
   * @remarks
   * The name of the node owner.
   * 
   * @example
   * Zhang San
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
   * The PAI configuration.
   */
  paiConfig?: GetBatchTaskInfoByVersionResponseBodyTaskInfoPaiConfig;
  /**
   * @remarks
   * The list of custom parameters for the node.
   */
  paramList?: GetBatchTaskInfoByVersionResponseBodyTaskInfoParamList[];
  /**
   * @remarks
   * Specifies whether node scheduling is paused.
   */
  paused?: boolean;
  /**
   * @remarks
   * The task scheduling priority. Valid values: 1 to 9. A larger value indicates a lower priority.
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
   * Specifies whether the task is published.
   */
  published?: boolean;
  /**
   * @remarks
   * The list of third-party packages required by the Python task.
   */
  pythonModuleList?: GetBatchTaskInfoByVersionResponseBodyTaskInfoPythonModuleList[];
  /**
   * @remarks
   * The Python version for the Python task, such as Python 3.7.
   * 
   * @example
   * Python 3.7
   */
  pythonVersion?: string;
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
   * Specifies whether the node can be rerun.
   */
  rerunable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable retry on timeout. This reflects the current configuration of the node. When queried by version, it reflects the configuration of the corresponding version.
   * 
   * @example
   * false
   */
  retryOnTimeoutEnable?: boolean;
  /**
   * @remarks
   * The schedule period. Valid values:
   * - YEARLY: Yearly.
   * - MONTHLY: Monthly.
   * - WEEKLY: Weekly.
   * - DAILY: Daily.
   * - HOURLY: Hourly.
   * - MINUTELY: Minutely.
   * 
   * @example
   * DAILY
   */
  schedulePeriod?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * - 1: Periodic node.
   * - 3: Manual node.
   * 
   * @example
   * 3
   */
  scheduleType?: number;
  /**
   * @remarks
   * The Spark client.
   */
  sparkClientInfo?: GetBatchTaskInfoByVersionResponseBodyTaskInfoSparkClientInfo;
  /**
   * @remarks
   * The current CPU resource configuration of the node. If queried by version, this is the configuration of the corresponding version.
   * 
   * @example
   * false
   */
  sparkDynamicResourceSwitch?: boolean;
  /**
   * @remarks
   * The effective scope of the Spark resource configuration. Valid values:
   * - ONLY_PROD: Production environment only.
   * - PROD_AND_DEV: Production and development environments.
   * This reflects the current configuration of the node. When queried by version, it reflects the configuration of the corresponding version.
   * 
   * @example
   * ONLY_PROD
   */
  sparkResourceEffectScope?: string;
  /**
   * @remarks
   * The Spark SQL resource configuration. The key is the configuration item name and the value is a string. The configuration is returned as a JSON string, such as {"spark.executor.memory":"2g"}. This reflects the current configuration of the node. When queried by version, it reflects the configuration of the corresponding version.
   * 
   * @example
   * {"spark.executor.memory":"2g"}
   */
  sparkSqlResourceConfigMap?: string;
  /**
   * @remarks
   * The MaxCompute Spark version.
   * 
   * @example
   * Spark 3.1.1
   */
  sparkVersion?: string;
  /**
   * @remarks
   * The publish status. Valid values:
   * - 0: Draft.
   * - 1: Submitted.
   * - 100: In development.
   * 
   * @example
   * Test task 1
   */
  status?: string;
  /**
   * @remarks
   * The task type. For more information, see the API operation for creating an offline computing node.
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
      codeTemplateId: 'CodeTemplateId',
      codeTemplateVersion: 'CodeTemplateVersion',
      cpuResource: 'CpuResource',
      cronExpression: 'CronExpression',
      customScheduleConfig: 'CustomScheduleConfig',
      dagId: 'DagId',
      dataSourceCatalog: 'DataSourceCatalog',
      dataSourceId: 'DataSourceId',
      dataSourceSchema: 'DataSourceSchema',
      databricksPythonConnectInfo: 'DatabricksPythonConnectInfo',
      developOwnerIdList: 'DevelopOwnerIdList',
      developOwnerNameList: 'DevelopOwnerNameList',
      executeRerunConfig: 'ExecuteRerunConfig',
      executeTimeOutConfig: 'ExecuteTimeOutConfig',
      fileId: 'FileId',
      hasDevNode: 'HasDevNode',
      memoryResource: 'MemoryResource',
      name: 'Name',
      needPublish: 'NeedPublish',
      nodeDescription: 'NodeDescription',
      nodeFrom: 'NodeFrom',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeOutputNameList: 'NodeOutputNameList',
      nodeStatus: 'NodeStatus',
      operatorUserId: 'OperatorUserId',
      opsOwnerIdList: 'OpsOwnerIdList',
      opsOwnerNameList: 'OpsOwnerNameList',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      paiConfig: 'PaiConfig',
      paramList: 'ParamList',
      paused: 'Paused',
      priority: 'Priority',
      projectId: 'ProjectId',
      published: 'Published',
      pythonModuleList: 'PythonModuleList',
      pythonVersion: 'PythonVersion',
      remark: 'Remark',
      rerunable: 'Rerunable',
      retryOnTimeoutEnable: 'RetryOnTimeoutEnable',
      schedulePeriod: 'SchedulePeriod',
      scheduleType: 'ScheduleType',
      sparkClientInfo: 'SparkClientInfo',
      sparkDynamicResourceSwitch: 'SparkDynamicResourceSwitch',
      sparkResourceEffectScope: 'SparkResourceEffectScope',
      sparkSqlResourceConfigMap: 'SparkSqlResourceConfigMap',
      sparkVersion: 'SparkVersion',
      status: 'Status',
      taskType: 'TaskType',
      upStreamList: 'UpStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      codeTemplateId: 'string',
      codeTemplateVersion: 'number',
      cpuResource: 'string',
      cronExpression: 'string',
      customScheduleConfig: GetBatchTaskInfoByVersionResponseBodyTaskInfoCustomScheduleConfig,
      dagId: 'string',
      dataSourceCatalog: 'string',
      dataSourceId: 'string',
      dataSourceSchema: 'string',
      databricksPythonConnectInfo: GetBatchTaskInfoByVersionResponseBodyTaskInfoDatabricksPythonConnectInfo,
      developOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      developOwnerNameList: { 'type': 'array', 'itemType': 'string' },
      executeRerunConfig: GetBatchTaskInfoByVersionResponseBodyTaskInfoExecuteRerunConfig,
      executeTimeOutConfig: GetBatchTaskInfoByVersionResponseBodyTaskInfoExecuteTimeOutConfig,
      fileId: 'number',
      hasDevNode: 'boolean',
      memoryResource: 'string',
      name: 'string',
      needPublish: 'boolean',
      nodeDescription: 'string',
      nodeFrom: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeOutputNameList: { 'type': 'array', 'itemType': 'string' },
      nodeStatus: 'number',
      operatorUserId: 'string',
      opsOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      opsOwnerNameList: { 'type': 'array', 'itemType': 'string' },
      ownerName: 'string',
      ownerUserId: 'string',
      paiConfig: GetBatchTaskInfoByVersionResponseBodyTaskInfoPaiConfig,
      paramList: { 'type': 'array', 'itemType': GetBatchTaskInfoByVersionResponseBodyTaskInfoParamList },
      paused: 'boolean',
      priority: 'number',
      projectId: 'number',
      published: 'boolean',
      pythonModuleList: { 'type': 'array', 'itemType': GetBatchTaskInfoByVersionResponseBodyTaskInfoPythonModuleList },
      pythonVersion: 'string',
      remark: 'string',
      rerunable: 'boolean',
      retryOnTimeoutEnable: 'boolean',
      schedulePeriod: 'string',
      scheduleType: 'number',
      sparkClientInfo: GetBatchTaskInfoByVersionResponseBodyTaskInfoSparkClientInfo,
      sparkDynamicResourceSwitch: 'boolean',
      sparkResourceEffectScope: 'string',
      sparkSqlResourceConfigMap: 'string',
      sparkVersion: 'string',
      status: 'string',
      taskType: 'number',
      upStreamList: { 'type': 'array', 'itemType': GetBatchTaskInfoByVersionResponseBodyTaskInfoUpStreamList },
    };
  }

  validate() {
    if(this.customScheduleConfig && typeof (this.customScheduleConfig as any).validate === 'function') {
      (this.customScheduleConfig as any).validate();
    }
    if(this.databricksPythonConnectInfo && typeof (this.databricksPythonConnectInfo as any).validate === 'function') {
      (this.databricksPythonConnectInfo as any).validate();
    }
    if(Array.isArray(this.developOwnerIdList)) {
      $dara.Model.validateArray(this.developOwnerIdList);
    }
    if(Array.isArray(this.developOwnerNameList)) {
      $dara.Model.validateArray(this.developOwnerNameList);
    }
    if(this.executeRerunConfig && typeof (this.executeRerunConfig as any).validate === 'function') {
      (this.executeRerunConfig as any).validate();
    }
    if(this.executeTimeOutConfig && typeof (this.executeTimeOutConfig as any).validate === 'function') {
      (this.executeTimeOutConfig as any).validate();
    }
    if(Array.isArray(this.nodeOutputNameList)) {
      $dara.Model.validateArray(this.nodeOutputNameList);
    }
    if(Array.isArray(this.opsOwnerIdList)) {
      $dara.Model.validateArray(this.opsOwnerIdList);
    }
    if(Array.isArray(this.opsOwnerNameList)) {
      $dara.Model.validateArray(this.opsOwnerNameList);
    }
    if(this.paiConfig && typeof (this.paiConfig as any).validate === 'function') {
      (this.paiConfig as any).validate();
    }
    if(Array.isArray(this.paramList)) {
      $dara.Model.validateArray(this.paramList);
    }
    if(Array.isArray(this.pythonModuleList)) {
      $dara.Model.validateArray(this.pythonModuleList);
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
   * The error code. OK indicates that the request is successful.
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
   * The error message of the request.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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

