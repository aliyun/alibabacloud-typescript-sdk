// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBatchTaskRequestUpdateCommandConditionScheduleParamList extends $dara.Model {
  /**
   * @example
   * condition1
   */
  conditionName?: string;
  /**
   * @example
   * 0 0 1 * * ?
   */
  cronExpression?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * true
   */
  followScheduleParam?: boolean;
  /**
   * @example
   * 1
   */
  nodeStatus?: number;
  /**
   * @example
   * {"type":"EXPRESSION","operator":"or"}
   */
  scheduleConditionJson?: string;
  /**
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
   * @example
   * 1
   */
  defaultValue?: string;
  /**
   * @example
   * 测试参数
   */
  desc?: string;
  /**
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
   * The end time in the format of HH:mm.
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
   * - MINUTE: minute.
   * - HOUR: hour.
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
   * - YEARLY
   * - MONTHLY
   * - WEEKLY
   * - DAILY
   * - HOURLY
   * - MINUTELY
   * 
   * This parameter is required.
   * 
   * @example
   * DAILY
   */
  schedulePeriod?: string;
  /**
   * @remarks
   * The start time in the format of HH:mm.
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
   * The parameter value.
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
   * The period offset. This parameter is required when dependencyPeriodType is set to LAST_N_PERIOD.
   * 
   * @example
   * 1
   */
  periodOffset?: number;
  /**
   * @remarks
   * The type of the dependency period. Valid values:
   * - CURRENT_PERIOD: current period.
   * - LAST_PERIOD: previous period.
   * - LAST_N_PERIOD: last N days.
   * - LAST_24_HOUR: last 24 hours.
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
   * The dependency period.
   */
  dependPeriod?: UpdateBatchTaskRequestUpdateCommandUpStreamListDependPeriod;
  /**
   * @remarks
   * The dependency strategy. Valid values:
   * - ALL: all.
   * - FIRST: first.
   * - LAST: last.
   * - NEAR: nearest.
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
   * The period difference. A value of 0 indicates same-period dependency. A positive number indicates dependency on the previous N periods.
   * 
   * This parameter is required.
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
   * @example
   * 7305621095333696
   */
  baseScheduleTemplateId?: number;
  /**
   * @remarks
   * The code of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * show tables;
   */
  code?: string;
  /**
   * @example
   * true
   */
  conditionScheduleEnable?: boolean;
  conditionScheduleParamList?: UpdateBatchTaskRequestUpdateCommandConditionScheduleParamList[];
  /**
   * @example
   * 7305621095333697
   */
  conditionScheduleTemplateId?: number;
  contextParamList?: UpdateBatchTaskRequestUpdateCommandContextParamList[];
  /**
   * @remarks
   * The cron expression for automatic scheduling. Refer to Linux cron expressions.
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
   * The catalog for database SQL nodes. This parameter applies only to datasource types that require a catalog, such as Presto.
   * 
   * @example
   * mysql_catalog
   */
  dataSourceCatalog?: string;
  /**
   * @remarks
   * The datasource ID for database SQL nodes.
   * 
   * @example
   * 12131111
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The schema for database SQL nodes. This parameter applies only to datasource types that require a schema, such as Oracle.
   * 
   * @example
   * erp
   */
  dataSourceSchema?: string;
  /**
   * @example
   * /sql/protocolv1/o/xxx
   */
  devHttpPath?: string;
  /**
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
   * The execution engine for the node, such as for Python nodes. Valid values:
   * - PYTHON2_7
   * - PYTHON3_7
   * - PYTHON3_11
   * 
   * @example
   * PYTHON3_7
   */
  engine?: string;
  /**
   * @remarks
   * The node ID in the folder tree.
   * 
   * This parameter is required.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  /**
   * @remarks
   * The name of the offline node.
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
   * Test_description
   */
  nodeDescription?: string;
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
   * The third-party Python packages required by the node.
   */
  pythonModuleList?: string[];
  /**
   * @example
   * rg-abc123
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The schedule period. Valid values:
   * - YEARLY
   * - MONTHLY
   * - WEEKLY
   * - DAILY
   * - HOURLY
   * - MINUTELY
   * 
   * @example
   * DAILY
   */
  schedulePeriod?: string;
  /**
   * @remarks
   * The Spark client information.
   */
  sparkClientInfo?: UpdateBatchTaskRequestUpdateCommandSparkClientInfo;
  taskTagList?: string[];
  /**
   * @remarks
   * The node type. Valid values:
   * - 1: Hive_SQL.
   * - 5: MaxCompute_SQL.
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
   * The upstream dependencies.
   */
  upStreamList?: UpdateBatchTaskRequestUpdateCommandUpStreamList[];
  /**
   * @example
   * 9999-12-31
   */
  validEndDate?: string;
  /**
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
      cronExpression: 'CronExpression',
      customScheduleConfig: 'CustomScheduleConfig',
      dataSourceCatalog: 'DataSourceCatalog',
      dataSourceId: 'DataSourceId',
      dataSourceSchema: 'DataSourceSchema',
      devHttpPath: 'DevHttpPath',
      devResourceGroupId: 'DevResourceGroupId',
      developOwnerIdList: 'DevelopOwnerIdList',
      engine: 'Engine',
      fileId: 'FileId',
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
      schedulePeriod: 'SchedulePeriod',
      sparkClientInfo: 'SparkClientInfo',
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
      cronExpression: 'string',
      customScheduleConfig: UpdateBatchTaskRequestUpdateCommandCustomScheduleConfig,
      dataSourceCatalog: 'string',
      dataSourceId: 'string',
      dataSourceSchema: 'string',
      devHttpPath: 'string',
      devResourceGroupId: 'string',
      developOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      engine: 'string',
      fileId: 'number',
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
      schedulePeriod: 'string',
      sparkClientInfo: UpdateBatchTaskRequestUpdateCommandSparkClientInfo,
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
   * The ID of the operator user.
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

