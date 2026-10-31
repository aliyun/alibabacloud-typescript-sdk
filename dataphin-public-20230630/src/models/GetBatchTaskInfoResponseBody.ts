// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchTaskInfoResponseBodyTaskInfoConditionScheduleParamList extends $dara.Model {
  /**
   * @remarks
   * The name of the condition.
   * 
   * This parameter is required.
   * 
   * @example
   * Rerun on failure
   */
  conditionName?: string;
  /**
   * @remarks
   * The cron expression used after the condition is met.
   * 
   * This parameter is required.
   * 
   * @example
   * 0 30 * * * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * Specifies whether the condition is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Specifies whether to follow the main scheduling parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  followScheduleParam?: boolean;
  /**
   * @remarks
   * The scheduling status of the node after the condition is met. Valid values:
   * - 1: Normal.
   * - 2: Paused.
   * - 3: Dry run.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  nodeStatus?: number;
  /**
   * @remarks
   * The conditional expression tree in JSON string format. The key names are lower camel case characters and must be parsed by the invoker.
   * 
   * This parameter is required.
   * 
   * @example
   * {"type":"EXPRESSION_GROUP","operator":"or"}
   */
  scheduleConditionJson?: string;
  /**
   * @remarks
   * The scheduling time used after the condition is met.
   * 
   * This parameter is required.
   * 
   * @example
   * 00:30
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

export class GetBatchTaskInfoResponseBodyTaskInfoContextParamList extends $dara.Model {
  /**
   * @remarks
   * The default value.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  defaultValue?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * This parameter is required.
   * 
   * @example
   * Number of output records
   */
  desc?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * cnt
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

export class GetBatchTaskInfoResponseBodyTaskInfoCustomScheduleConfig extends $dara.Model {
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
   * The scheduling cycle.
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

export class GetBatchTaskInfoResponseBodyTaskInfoDatabricksPythonConnectInfo extends $dara.Model {
  /**
   * @remarks
   * The HTTP path for the development environment.
   * 
   * @example
   * /sql/1.0/warehouses/dev
   */
  devHttpPath?: string;
  /**
   * @remarks
   * Specifies whether Databricks Python Connect is enabled.
   * 
   * @example
   * true
   */
  enableDatabricksPythonConnect?: boolean;
  /**
   * @remarks
   * The HTTP path for the production environment.
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

export class GetBatchTaskInfoResponseBodyTaskInfoExecuteRerunConfig extends $dara.Model {
  /**
   * @remarks
   * The custom failure retry interval.
   * 
   * @example
   * 60
   */
  customRerunInterval?: string;
  /**
   * @remarks
   * The custom number of failure retries.
   * 
   * @example
   * 3
   */
  customRerunTimes?: string;
  /**
   * @remarks
   * Specifies whether to inherit the system configuration.
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

export class GetBatchTaskInfoResponseBodyTaskInfoExecuteTimeOutConfig extends $dara.Model {
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
   * Specifies whether to inherit the system configuration.
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

export class GetBatchTaskInfoResponseBodyTaskInfoPaiConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the PAI experiment.
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
   * The ID of the PAI workspace.
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

export class GetBatchTaskInfoResponseBodyTaskInfoParamList extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the parameter.
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

export class GetBatchTaskInfoResponseBodyTaskInfoPythonModuleList extends $dara.Model {
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
   * The Python version that the third-party package depends on.
   * 
   * @example
   * Python 3.7
   */
  pythonVersion?: string;
  /**
   * @remarks
   * The version number of the third-party package.
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

export class GetBatchTaskInfoResponseBodyTaskInfoSparkClientInfo extends $dara.Model {
  /**
   * @remarks
   * The version name of the Spark client.
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

export class GetBatchTaskInfoResponseBodyTaskInfoUpStreamListDependPeriod extends $dara.Model {
  /**
   * @remarks
   * The period offset. This parameter is required when the period type is LAST_N_PERIOD.
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
   * - LAST_24_HOUR
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

export class GetBatchTaskInfoResponseBodyTaskInfoUpStreamList extends $dara.Model {
  /**
   * @remarks
   * The dependency period.
   */
  dependPeriod?: GetBatchTaskInfoResponseBodyTaskInfoUpStreamListDependPeriod;
  /**
   * @remarks
   * The dependency strategy. Valid values: ALL, FIRST, LAST, and NEAR.
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
   * @remarks
   * The ID of the base schedule template. This parameter is returned when the configuration method is set to schedule template.
   * 
   * @example
   * 7305621095333696
   */
  baseScheduleTemplateId?: number;
  /**
   * @remarks
   * The name of the base schedule template.
   * 
   * @example
   * Daily schedule template
   */
  baseScheduleTemplateName?: string;
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
   * Specifies whether conditional scheduling is enabled.
   * 
   * @example
   * true
   */
  conditionScheduleEnable?: boolean;
  /**
   * @remarks
   * The details of the conditional scheduling configuration. This parameter has a value only when conditional scheduling is enabled.
   */
  conditionScheduleParamList?: GetBatchTaskInfoResponseBodyTaskInfoConditionScheduleParamList[];
  /**
   * @remarks
   * The ID of the conditional schedule template.
   * 
   * @example
   * 7305621095333697
   */
  conditionScheduleTemplateId?: number;
  /**
   * @remarks
   * The name of the conditional schedule template.
   * 
   * @example
   * Conditional schedule template
   */
  conditionScheduleTemplateName?: string;
  /**
   * @remarks
   * The cross-node parameters. These are the output parameters declared by the current node for downstream nodes to reference in the format of ${#n_NodeID:ParameterName}.
   */
  contextParamList?: GetBatchTaskInfoResponseBodyTaskInfoContextParamList[];
  /**
   * @remarks
   * The current configuration of the node. When queried by version, this parameter returns the configuration of the corresponding version.
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
  customScheduleConfig?: GetBatchTaskInfoResponseBodyTaskInfoCustomScheduleConfig;
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
   * The Python connection information.
   */
  databricksPythonConnectInfo?: GetBatchTaskInfoResponseBodyTaskInfoDatabricksPythonConnectInfo;
  /**
   * @remarks
   * The HTTP path for the development environment, used for Databricks tasks.
   * 
   * @example
   * /sql/protocolv1/o/xxx
   */
  devHttpPath?: string;
  /**
   * @remarks
   * The ID of the scheduling resource group for the development task.
   * 
   * @example
   * rg-def456
   */
  devResourceGroupId?: string;
  /**
   * @remarks
   * The name of the scheduling resource group for the development task.
   * 
   * @example
   * Default resource group
   */
  devResourceGroupName?: string;
  /**
   * @remarks
   * The user ID of the development owner.
   * 
   * @example
   * 30231123
   */
  developOwnerId?: string;
  /**
   * @remarks
   * The list of user IDs of the development owners.
   */
  developOwnerIdList?: string[];
  /**
   * @remarks
   * The name of the development owner.
   * 
   * @example
   * Zhang San
   */
  developOwnerName?: string;
  /**
   * @remarks
   * The list of names of the development owners.
   */
  developOwnerNameList?: string[];
  /**
   * @remarks
   * The failure retry configuration. This is the current configuration of the task. If queried by version, this is the configuration of the corresponding version.
   */
  executeRerunConfig?: GetBatchTaskInfoResponseBodyTaskInfoExecuteRerunConfig;
  /**
   * @remarks
   * The execution timeout configuration. This is the current configuration of the task. If queried by version, this is the configuration of the corresponding version.
   */
  executeTimeOutConfig?: GetBatchTaskInfoResponseBodyTaskInfoExecuteTimeOutConfig;
  /**
   * @remarks
   * The ID of the node in the task directory tree.
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
   * The current configuration of the node. When queried by version, this parameter returns the configuration of the corresponding version.
   * 
   * @example
   * 1024
   */
  memoryResource?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * Test task 1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the task needs to be published.
   */
  needPublish?: boolean;
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * xx test
   */
  nodeDescription?: string;
  /**
   * @remarks
   * The source of the node. This indicates the organization or application that created the node.
   * 
   * @example
   * openapi
   */
  nodeFrom?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * n_1011_21232132322
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the node.
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
   * The status of the node. Valid values: 1 (Normal), 2 (Paused), and 3 (Dry run).
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
   * The user ID of the O&M owner.
   * 
   * @example
   * 30231123
   */
  opsOwnerId?: string;
  /**
   * @remarks
   * The list of user IDs of the O&M owners.
   */
  opsOwnerIdList?: string[];
  /**
   * @remarks
   * The O&M owner name.
   * 
   * @example
   * Zhang San
   */
  opsOwnerName?: string;
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
   * The PAI configuration information.
   */
  paiConfig?: GetBatchTaskInfoResponseBodyTaskInfoPaiConfig;
  /**
   * @remarks
   * The list of custom parameters for the node.
   */
  paramList?: GetBatchTaskInfoResponseBodyTaskInfoParamList[];
  /**
   * @remarks
   * Indicates whether the scheduling of the node is paused.
   */
  paused?: boolean;
  /**
   * @remarks
   * The scheduling priority of the task. Valid values: 1 to 9. A larger value indicates a lower priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The HTTP path in the production environment. This parameter is used for Databricks tasks.
   * 
   * @example
   * /sql/protocolv1/o/yyy
   */
  prodHttpPath?: string;
  /**
   * @remarks
   * The ID of the project.
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  /**
   * @remarks
   * Indicates whether the task is published.
   */
  published?: boolean;
  /**
   * @remarks
   * The list of third-party packages that the Python task depends on.
   */
  pythonModuleList?: GetBatchTaskInfoResponseBodyTaskInfoPythonModuleList[];
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
   * The remark.
   * 
   * @example
   * test xx
   */
  remark?: string;
  /**
   * @remarks
   * Indicates whether the task can be rerun.
   */
  rerunable?: boolean;
  /**
   * @remarks
   * The ID of the schedule resource group for the production task.
   * 
   * @example
   * rg-abc123
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the schedule resource group for the production task.
   * 
   * @example
   * Default resource group
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * Specifies whether to retry the task upon timeout. This is the current configuration of the task. If you query by version, this is the configuration of the corresponding version.
   * 
   * @example
   * false
   */
  retryOnTimeoutEnable?: boolean;
  /**
   * @remarks
   * The scheduling period. Valid values:
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
   * The type of the node. Valid values: 
   * - 1: Periodic task.
   * - 3: Manual task.
   * 
   * @example
   * 3
   */
  scheduleType?: number;
  /**
   * @remarks
   * The Spark client information.
   */
  sparkClientInfo?: GetBatchTaskInfoResponseBodyTaskInfoSparkClientInfo;
  /**
   * @remarks
   * The current configuration of the node. When queried by version, this parameter returns the configuration of the corresponding version.
   * 
   * @example
   * false
   */
  sparkDynamicResourceSwitch?: boolean;
  /**
   * @remarks
   * The effective scope of the Spark resource configuration. A value of ONLY_PROD indicates the production environment only, and a value of PROD_AND_DEV indicates the production and development environments. This is the current configuration of the task. If you query by version, this is the configuration of the corresponding version.
   * 
   * @example
   * ONLY_PROD
   */
  sparkResourceEffectScope?: string;
  /**
   * @remarks
   * The Spark SQL resource configuration. The key is the configuration item name, and the value is a string. The entire configuration is returned as a JSON string. This is the current configuration of the task. If you query by version, this is the configuration of the corresponding version.
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
   * The publish status. Valid values: 0 (Draft), 1 (Submitted), and 100 (In development).
   * 
   * @example
   * Test task 1
   */
  status?: string;
  /**
   * @remarks
   * The list of node tag names.
   */
  taskTagList?: string[];
  /**
   * @remarks
   * The node type. For more information, see the API operation for creating an offline computing node.
   * 
   * @example
   * 21
   */
  taskType?: number;
  /**
   * @remarks
   * The upstream dependencies.
   */
  upStreamList?: GetBatchTaskInfoResponseBodyTaskInfoUpStreamList[];
  /**
   * @remarks
   * The effective end date. Format: yyyy-MM-dd.
   * 
   * @example
   * 9999-12-31
   */
  validEndDate?: string;
  /**
   * @remarks
   * The effective start date. Format: yyyy-MM-dd.
   * 
   * @example
   * 2026-01-01
   */
  validStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      baseScheduleTemplateId: 'BaseScheduleTemplateId',
      baseScheduleTemplateName: 'BaseScheduleTemplateName',
      code: 'Code',
      codeTemplateId: 'CodeTemplateId',
      codeTemplateVersion: 'CodeTemplateVersion',
      conditionScheduleEnable: 'ConditionScheduleEnable',
      conditionScheduleParamList: 'ConditionScheduleParamList',
      conditionScheduleTemplateId: 'ConditionScheduleTemplateId',
      conditionScheduleTemplateName: 'ConditionScheduleTemplateName',
      contextParamList: 'ContextParamList',
      cpuResource: 'CpuResource',
      cronExpression: 'CronExpression',
      customScheduleConfig: 'CustomScheduleConfig',
      dagId: 'DagId',
      dataSourceCatalog: 'DataSourceCatalog',
      dataSourceId: 'DataSourceId',
      dataSourceSchema: 'DataSourceSchema',
      databricksPythonConnectInfo: 'DatabricksPythonConnectInfo',
      devHttpPath: 'DevHttpPath',
      devResourceGroupId: 'DevResourceGroupId',
      devResourceGroupName: 'DevResourceGroupName',
      developOwnerId: 'DevelopOwnerId',
      developOwnerIdList: 'DevelopOwnerIdList',
      developOwnerName: 'DevelopOwnerName',
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
      opsOwnerId: 'OpsOwnerId',
      opsOwnerIdList: 'OpsOwnerIdList',
      opsOwnerName: 'OpsOwnerName',
      opsOwnerNameList: 'OpsOwnerNameList',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      paiConfig: 'PaiConfig',
      paramList: 'ParamList',
      paused: 'Paused',
      priority: 'Priority',
      prodHttpPath: 'ProdHttpPath',
      projectId: 'ProjectId',
      published: 'Published',
      pythonModuleList: 'PythonModuleList',
      pythonVersion: 'PythonVersion',
      remark: 'Remark',
      rerunable: 'Rerunable',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupName: 'ResourceGroupName',
      retryOnTimeoutEnable: 'RetryOnTimeoutEnable',
      schedulePeriod: 'SchedulePeriod',
      scheduleType: 'ScheduleType',
      sparkClientInfo: 'SparkClientInfo',
      sparkDynamicResourceSwitch: 'SparkDynamicResourceSwitch',
      sparkResourceEffectScope: 'SparkResourceEffectScope',
      sparkSqlResourceConfigMap: 'SparkSqlResourceConfigMap',
      sparkVersion: 'SparkVersion',
      status: 'Status',
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
      baseScheduleTemplateName: 'string',
      code: 'string',
      codeTemplateId: 'string',
      codeTemplateVersion: 'number',
      conditionScheduleEnable: 'boolean',
      conditionScheduleParamList: { 'type': 'array', 'itemType': GetBatchTaskInfoResponseBodyTaskInfoConditionScheduleParamList },
      conditionScheduleTemplateId: 'number',
      conditionScheduleTemplateName: 'string',
      contextParamList: { 'type': 'array', 'itemType': GetBatchTaskInfoResponseBodyTaskInfoContextParamList },
      cpuResource: 'string',
      cronExpression: 'string',
      customScheduleConfig: GetBatchTaskInfoResponseBodyTaskInfoCustomScheduleConfig,
      dagId: 'string',
      dataSourceCatalog: 'string',
      dataSourceId: 'string',
      dataSourceSchema: 'string',
      databricksPythonConnectInfo: GetBatchTaskInfoResponseBodyTaskInfoDatabricksPythonConnectInfo,
      devHttpPath: 'string',
      devResourceGroupId: 'string',
      devResourceGroupName: 'string',
      developOwnerId: 'string',
      developOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      developOwnerName: 'string',
      developOwnerNameList: { 'type': 'array', 'itemType': 'string' },
      executeRerunConfig: GetBatchTaskInfoResponseBodyTaskInfoExecuteRerunConfig,
      executeTimeOutConfig: GetBatchTaskInfoResponseBodyTaskInfoExecuteTimeOutConfig,
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
      opsOwnerId: 'string',
      opsOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      opsOwnerName: 'string',
      opsOwnerNameList: { 'type': 'array', 'itemType': 'string' },
      ownerName: 'string',
      ownerUserId: 'string',
      paiConfig: GetBatchTaskInfoResponseBodyTaskInfoPaiConfig,
      paramList: { 'type': 'array', 'itemType': GetBatchTaskInfoResponseBodyTaskInfoParamList },
      paused: 'boolean',
      priority: 'number',
      prodHttpPath: 'string',
      projectId: 'number',
      published: 'boolean',
      pythonModuleList: { 'type': 'array', 'itemType': GetBatchTaskInfoResponseBodyTaskInfoPythonModuleList },
      pythonVersion: 'string',
      remark: 'string',
      rerunable: 'boolean',
      resourceGroupId: 'string',
      resourceGroupName: 'string',
      retryOnTimeoutEnable: 'boolean',
      schedulePeriod: 'string',
      scheduleType: 'number',
      sparkClientInfo: GetBatchTaskInfoResponseBodyTaskInfoSparkClientInfo,
      sparkDynamicResourceSwitch: 'boolean',
      sparkResourceEffectScope: 'string',
      sparkSqlResourceConfigMap: 'string',
      sparkVersion: 'string',
      status: 'string',
      taskTagList: { 'type': 'array', 'itemType': 'string' },
      taskType: 'number',
      upStreamList: { 'type': 'array', 'itemType': GetBatchTaskInfoResponseBodyTaskInfoUpStreamList },
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

export class GetBatchTaskInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request is successful.
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
   * Indicates whether the request is successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The task details.
   */
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

