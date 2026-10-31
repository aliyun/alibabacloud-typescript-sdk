// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBatchTaskRequestUpdateCommandConditionScheduleParamList extends $dara.Model {
  /**
   * @remarks
   * The condition name.
   * 
   * @example
   * condition1
   */
  conditionName?: string;
  /**
   * @remarks
   * The cron expression used after the condition is met.
   * 
   * @example
   * 0 0 1 * * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * Specifies whether to enable the condition.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Specifies whether to follow the primary schedule parameter.
   * 
   * @example
   * true
   */
  followScheduleParam?: boolean;
  /**
   * @remarks
   * The node schedule status after the condition is met. Valid values:
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
   * The JSON string of the conditional expression tree. The keys are in lower camel case characters and must be parsed by the invoker.
   * 
   * @example
   * {"type":"EXPRESSION","operator":"or"}
   */
  scheduleConditionJson?: string;
  /**
   * @remarks
   * The schedule time used after the condition is met.
   * 
   * @example
   * 01:00
   */
  scheduleTime?: string;
  static names(): { [key: string]: string } {
    return {
      conditionName: 'ConditionName',
      cronExpression: 'CronExpression',
      enable: 'Enable',
      followScheduleParam: 'FollowScheduleParam',
      nodeStatus: 'NodeStatus',
      scheduleConditionJson: 'ScheduleConditionJson',
      scheduleTime: 'ScheduleTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionName: 'string',
      cronExpression: 'string',
      enable: 'boolean',
      followScheduleParam: 'boolean',
      nodeStatus: 'number',
      scheduleConditionJson: 'string',
      scheduleTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskRequestUpdateCommandContextParamList extends $dara.Model {
  /**
   * @remarks
   * The default value.
   * 
   * @example
   * 1
   */
  defaultValue?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * Test parameter
   */
  desc?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * param1
   */
  paramKey?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      desc: 'Desc',
      paramKey: 'ParamKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      desc: 'string',
      paramKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskRequestUpdateCommandCustomScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * The end time in the HH:mm format.
   * 
   * This parameter is required.
   * 
   * @example
   * 20:59
   */
  endTime?: string;
  /**
   * @remarks
   * The custom interval.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  interval?: number;
  /**
   * @remarks
   * The interval unit. Valid values:
   * - MINUTE: Minutes.
   * - HOUR: Hours.
   * 
   * This parameter is required.
   * 
   * @example
   * HOUR
   */
  intervalUnit?: string;
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
   * This parameter is required.
   * 
   * @example
   * DAILY
   */
  schedulePeriod?: string;
  /**
   * @remarks
   * The start time in the HH:mm format.
   * 
   * This parameter is required.
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

export class UpdateBatchTaskRequestUpdateCommandExecuteRerunConfig extends $dara.Model {
  /**
   * @remarks
   * 自定义失败重试间隔。
   * 
   * @example
   * 60
   */
  customRerunInterval?: string;
  /**
   * @remarks
   * 自定义失败重试次数。
   * 
   * @example
   * 3
   */
  customRerunTimes?: string;
  /**
   * @remarks
   * 是否跟随系统配置。
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

export class UpdateBatchTaskRequestUpdateCommandExecuteTimeOutConfig extends $dara.Model {
  /**
   * @remarks
   * 自定义超时时间。
   * 
   * @example
   * 1800
   */
  customValues?: string;
  /**
   * @remarks
   * 是否跟随系统配置。
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

export class UpdateBatchTaskRequestUpdateCommandParamList extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * This parameter is required.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * value
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

export class UpdateBatchTaskRequestUpdateCommandSparkClientInfo extends $dara.Model {
  /**
   * @remarks
   * The version name of the Spark client.
   * 
   * This parameter is required.
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

export class UpdateBatchTaskRequestUpdateCommandUpStreamListDependPeriod extends $dara.Model {
  /**
   * @remarks
   * The cycle offset. This parameter is required when the PeriodType parameter is set to LAST_N_PERIOD.
   * 
   * @example
   * 1
   */
  periodOffset?: number;
  /**
   * @remarks
   * The type of the dependency cycle. Valid values:
   * - CURRENT_PERIOD: Current cycle.
   * - LAST_PERIOD: Last cycle.
   * - LAST_N_PERIOD: Last N days.
   * - LAST_24_HOUR: Last 24 hours.
   * 
   * This parameter is required.
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

export class UpdateBatchTaskRequestUpdateCommandUpStreamList extends $dara.Model {
  /**
   * @remarks
   * The dependency cycle.
   */
  dependPeriod?: UpdateBatchTaskRequestUpdateCommandUpStreamListDependPeriod;
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
   * The list of dependent logical table fields.
   */
  fieldList?: string[];
  /**
   * @remarks
   * The type of the upstream dependency node. Valid values:
   * - PHYSICAL: Physical node.
   * - LOGICAL: Logical table dependency.
   * 
   * @example
   * PHYSICAL
   */
  nodeType?: string;
  /**
   * @remarks
   * The cycle difference. A value of 0 indicates a dependency on the same cycle. A positive integer indicates a dependency on the previous N cycles.
   * 
   * This parameter is required.
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
   * The output name of the upstream node.
   * 
   * This parameter is required.
   * 
   * @example
   * t_input1
   */
  sourceNodeOutputName?: string;
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
      sourceNodeOutputName: 'SourceNodeOutputName',
      sourceTableName: 'SourceTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependPeriod: UpdateBatchTaskRequestUpdateCommandUpStreamListDependPeriod,
      dependStrategy: 'string',
      fieldList: { 'type': 'array', 'itemType': 'string' },
      nodeType: 'string',
      periodDiff: 'number',
      sourceNodeEnabled: 'boolean',
      sourceNodeId: 'string',
      sourceNodeOutputName: 'string',
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

export class UpdateBatchTaskRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The base schedule template ID. This parameter takes effect when the configuration method is set to schedule template. If this parameter and all other schedule fields are not specified, the original binding is retained.
   * 
   * @example
   * 7305621095333696
   */
  baseScheduleTemplateId?: number;
  /**
   * @remarks
   * The task code.
   * 
   * This parameter is required.
   * 
   * @example
   * show tables;
   */
  code?: string;
  /**
   * @remarks
   * Specifies whether to enable conditional scheduling.
   * 
   * @example
   * true
   */
  conditionScheduleEnable?: boolean;
  /**
   * @remarks
   * The conditional scheduling configuration details. This parameter overwrites the existing configurations. If this parameter is not specified, the original configurations are retained. This parameter is supported only for periodic tasks.
   */
  conditionScheduleParamList?: UpdateBatchTaskRequestUpdateCommandConditionScheduleParamList[];
  /**
   * @remarks
   * The conditional schedule template ID.
   * 
   * @example
   * 7305621095333697
   */
  conditionScheduleTemplateId?: number;
  /**
   * @remarks
   * The cross-node parameters. These are output parameters declared by the current node for downstream nodes to reference. This parameter overwrites the existing parameters. If this parameter is not specified, the original parameters are retained.
   */
  contextParamList?: UpdateBatchTaskRequestUpdateCommandContextParamList[];
  /**
   * @remarks
   * 不传时保留任务当前配置。
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
   * The custom schedule interval configuration.
   */
  customScheduleConfig?: UpdateBatchTaskRequestUpdateCommandCustomScheduleConfig;
  /**
   * @remarks
   * The data source catalog for database SQL tasks. This parameter takes effect only for data source types that require a catalog, such as Presto.
   * 
   * @example
   * mysql_catalog
   */
  dataSourceCatalog?: string;
  /**
   * @remarks
   * The data source ID for database SQL tasks.
   * 
   * @example
   * 12131111
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The data source schema for database SQL tasks. This parameter takes effect only for data source types that require a schema, such as Oracle.
   * 
   * @example
   * erp
   */
  dataSourceSchema?: string;
  /**
   * @remarks
   * The HTTP path in the development environment for Databricks tasks.
   * 
   * @example
   * /sql/protocolv1/o/xxx
   */
  devHttpPath?: string;
  /**
   * @remarks
   * The ID of the schedule resource group for development tasks.
   * 
   * @example
   * rg-def456
   */
  devResourceGroupId?: string;
  /**
   * @remarks
   * The list of development owner IDs.
   */
  developOwnerIdList?: string[];
  /**
   * @remarks
   * The task execution engine, such as Python tasks. Valid values:
   * - PYTHON2_7: Python 2.7.
   * - PYTHON3_7: Python 3.7.
   * - PYTHON3_11: Python 3.11.
   * 
   * @example
   * PYTHON3_7
   */
  engine?: string;
  /**
   * @remarks
   * 失败重试配置。不传时保留任务当前配置。传入时整体替换该配置对象。
   */
  executeRerunConfig?: UpdateBatchTaskRequestUpdateCommandExecuteRerunConfig;
  /**
   * @remarks
   * 执行超时配置。不传时保留任务当前配置。传入时整体替换该配置对象。
   */
  executeTimeOutConfig?: UpdateBatchTaskRequestUpdateCommandExecuteTimeOutConfig;
  /**
   * @remarks
   * The ID of the task directory tree node.
   * 
   * This parameter is required.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  /**
   * @remarks
   * 不传时保留任务当前配置。
   * 
   * @example
   * 1024
   */
  memoryResource?: string;
  /**
   * @remarks
   * The name of the offline task.
   * 
   * This parameter is required.
   * 
   * @example
   * test111
   */
  name?: string;
  /**
   * @remarks
   * The description of the node.
   * 
   * @example
   * xx test
   */
  nodeDescription?: string;
  /**
   * @remarks
   * The list of node output names.
   */
  nodeOutputNameList?: string[];
  /**
   * @remarks
   * The status of the node. Valid values:
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
   * The list of O&M owner IDs. If you do not specify this parameter, the O&M owners are not modified.
   */
  opsOwnerIdList?: string[];
  /**
   * @remarks
   * The list of custom parameters.
   */
  paramList?: UpdateBatchTaskRequestUpdateCommandParamList[];
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
   * The HTTP path in the production environment. This parameter is used for Databricks nodes.
   * 
   * @example
   * /sql/protocolv1/o/yyy
   */
  prodHttpPath?: string;
  /**
   * @remarks
   * The ID of the project to which the node belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 10121101
   */
  projectId?: number;
  /**
   * @remarks
   * The list of third-party Python packages on which the node depends.
   */
  pythonModuleList?: string[];
  /**
   * @remarks
   * The ID of the scheduling resource group for the production node.
   * 
   * @example
   * rg-abc123
   */
  resourceGroupId?: string;
  resourceReferenceList?: string[];
  /**
   * @remarks
   * 超时重试开关。不传时保留任务当前配置。显式传入false时关闭。
   * 
   * @example
   * false
   */
  retryOnTimeoutEnable?: boolean;
  /**
   * @remarks
   * The scheduling cycle. Valid values:
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
   * The Spark client.
   */
  sparkClientInfo?: UpdateBatchTaskRequestUpdateCommandSparkClientInfo;
  /**
   * @remarks
   * 不传时保留任务当前配置。显式传入false时关闭。
   * 
   * @example
   * false
   */
  sparkDynamicResourceSwitch?: boolean;
  /**
   * @remarks
   * ONLY_PROD表示仅生产环境，PROD_AND_DEV表示生产和开发环境。不传时保留任务当前配置。
   * 
   * @example
   * ONLY_PROD
   */
  sparkResourceEffectScope?: string;
  /**
   * @remarks
   * Spark SQL资源配置，键为配置项名称，值为字符串。不传时保留任务当前配置；传入空JSON对象{}时清空配置。
   * 
   * @example
   * {"spark.executor.memory":"2g"}
   */
  sparkSqlResourceConfigMap?: string;
  /**
   * @remarks
   * The list of node tags. This parameter overwrites all existing tags. If you do not specify this parameter, the original tags remain unchanged.
   */
  taskTagList?: string[];
  /**
   * @remarks
   * The type of the node. Valid values:
   * - 1: Hive SQL.
   * - 5: MaxCompute SQL.
   * - 10: Shell.
   * - 21: Python.
   * 
   * This parameter is required.
   * 
   * @example
   * 21
   */
  taskType?: number;
  /**
   * @remarks
   * The list of upstream dependencies.
   */
  upStreamList?: UpdateBatchTaskRequestUpdateCommandUpStreamList[];
  /**
   * @remarks
   * The end date of the validity period. Format: yyyy-MM-dd. This parameter must be specified together with the ValidStartDate parameter.
   * 
   * @example
   * 9999-12-31
   */
  validEndDate?: string;
  /**
   * @remarks
   * The start date of the validity period. Format: yyyy-MM-dd. This parameter must be specified together with the ValidEndDate parameter.
   * 
   * @example
   * 2026-01-01
   */
  validStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      baseScheduleTemplateId: 'BaseScheduleTemplateId',
      code: 'Code',
      conditionScheduleEnable: 'ConditionScheduleEnable',
      conditionScheduleParamList: 'ConditionScheduleParamList',
      conditionScheduleTemplateId: 'ConditionScheduleTemplateId',
      contextParamList: 'ContextParamList',
      cpuResource: 'CpuResource',
      cronExpression: 'CronExpression',
      customScheduleConfig: 'CustomScheduleConfig',
      dataSourceCatalog: 'DataSourceCatalog',
      dataSourceId: 'DataSourceId',
      dataSourceSchema: 'DataSourceSchema',
      devHttpPath: 'DevHttpPath',
      devResourceGroupId: 'DevResourceGroupId',
      developOwnerIdList: 'DevelopOwnerIdList',
      engine: 'Engine',
      executeRerunConfig: 'ExecuteRerunConfig',
      executeTimeOutConfig: 'ExecuteTimeOutConfig',
      fileId: 'FileId',
      memoryResource: 'MemoryResource',
      name: 'Name',
      nodeDescription: 'NodeDescription',
      nodeOutputNameList: 'NodeOutputNameList',
      nodeStatus: 'NodeStatus',
      opsOwnerIdList: 'OpsOwnerIdList',
      paramList: 'ParamList',
      priority: 'Priority',
      prodHttpPath: 'ProdHttpPath',
      projectId: 'ProjectId',
      pythonModuleList: 'PythonModuleList',
      resourceGroupId: 'ResourceGroupId',
      resourceReferenceList: 'ResourceReferenceList',
      retryOnTimeoutEnable: 'RetryOnTimeoutEnable',
      schedulePeriod: 'SchedulePeriod',
      sparkClientInfo: 'SparkClientInfo',
      sparkDynamicResourceSwitch: 'SparkDynamicResourceSwitch',
      sparkResourceEffectScope: 'SparkResourceEffectScope',
      sparkSqlResourceConfigMap: 'SparkSqlResourceConfigMap',
      taskTagList: 'TaskTagList',
      taskType: 'TaskType',
      upStreamList: 'UpStreamList',
      validEndDate: 'ValidEndDate',
      validStartDate: 'ValidStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseScheduleTemplateId: 'number',
      code: 'string',
      conditionScheduleEnable: 'boolean',
      conditionScheduleParamList: { 'type': 'array', 'itemType': UpdateBatchTaskRequestUpdateCommandConditionScheduleParamList },
      conditionScheduleTemplateId: 'number',
      contextParamList: { 'type': 'array', 'itemType': UpdateBatchTaskRequestUpdateCommandContextParamList },
      cpuResource: 'string',
      cronExpression: 'string',
      customScheduleConfig: UpdateBatchTaskRequestUpdateCommandCustomScheduleConfig,
      dataSourceCatalog: 'string',
      dataSourceId: 'string',
      dataSourceSchema: 'string',
      devHttpPath: 'string',
      devResourceGroupId: 'string',
      developOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      engine: 'string',
      executeRerunConfig: UpdateBatchTaskRequestUpdateCommandExecuteRerunConfig,
      executeTimeOutConfig: UpdateBatchTaskRequestUpdateCommandExecuteTimeOutConfig,
      fileId: 'number',
      memoryResource: 'string',
      name: 'string',
      nodeDescription: 'string',
      nodeOutputNameList: { 'type': 'array', 'itemType': 'string' },
      nodeStatus: 'number',
      opsOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      paramList: { 'type': 'array', 'itemType': UpdateBatchTaskRequestUpdateCommandParamList },
      priority: 'number',
      prodHttpPath: 'string',
      projectId: 'number',
      pythonModuleList: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      resourceReferenceList: { 'type': 'array', 'itemType': 'string' },
      retryOnTimeoutEnable: 'boolean',
      schedulePeriod: 'string',
      sparkClientInfo: UpdateBatchTaskRequestUpdateCommandSparkClientInfo,
      sparkDynamicResourceSwitch: 'boolean',
      sparkResourceEffectScope: 'string',
      sparkSqlResourceConfigMap: 'string',
      taskTagList: { 'type': 'array', 'itemType': 'string' },
      taskType: 'number',
      upStreamList: { 'type': 'array', 'itemType': UpdateBatchTaskRequestUpdateCommandUpStreamList },
      validEndDate: 'string',
      validStartDate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditionScheduleParamList)) {
      $dara.Model.validateArray(this.conditionScheduleParamList);
    }
    if(Array.isArray(this.contextParamList)) {
      $dara.Model.validateArray(this.contextParamList);
    }
    if(this.customScheduleConfig && typeof (this.customScheduleConfig as any).validate === 'function') {
      (this.customScheduleConfig as any).validate();
    }
    if(Array.isArray(this.developOwnerIdList)) {
      $dara.Model.validateArray(this.developOwnerIdList);
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
    if(Array.isArray(this.paramList)) {
      $dara.Model.validateArray(this.paramList);
    }
    if(Array.isArray(this.pythonModuleList)) {
      $dara.Model.validateArray(this.pythonModuleList);
    }
    if(Array.isArray(this.resourceReferenceList)) {
      $dara.Model.validateArray(this.resourceReferenceList);
    }
    if(this.sparkClientInfo && typeof (this.sparkClientInfo as any).validate === 'function') {
      (this.sparkClientInfo as any).validate();
    }
    if(Array.isArray(this.taskTagList)) {
      $dara.Model.validateArray(this.taskTagList);
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

export class UpdateBatchTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The update request.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateBatchTaskRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      updateCommand: UpdateBatchTaskRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

