// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitBatchTaskRequestSubmitCommandConditionScheduleConfigParamList extends $dara.Model {
  /**
   * @remarks
   * The condition name.
   * 
   * @example
   * workday
   */
  conditionName?: string;
  /**
   * @remarks
   * The cron expression used after a condition is matched.
   * 
   * @example
   * 0 0 5 * * ?
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
   * Specifies whether to follow the primary scheduling parameters.
   * 
   * @example
   * true
   */
  followScheduleParam?: boolean;
  /**
   * @remarks
   * The scheduling status used after a condition is matched. Valid values:
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
   * The JSON character string of the conditional expression tree. Internal key names use lower camel case.
   * 
   * @example
   * {}
   */
  scheduleConditionJson?: string;
  /**
   * @remarks
   * The scheduling time used after a condition is matched.
   * 
   * @example
   * 05:00
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

export class SubmitBatchTaskRequestSubmitCommandConditionScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable conditional scheduling. This parameter is required when the ConditionScheduleConfig object is passed and is verified by the backend. If this parameter is set to false, conditional scheduling is disabled and the previous configuration is cleared.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The list of custom conditions. This parameter is mutually exclusive with TemplateId. An empty list clears the previous conditions.
   */
  paramList?: SubmitBatchTaskRequestSubmitCommandConditionScheduleConfigParamList[];
  /**
   * @remarks
   * The ID of the conditional scheduling template. This parameter is mutually exclusive with ParamList.
   * 
   * @example
   * 1002
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      paramList: 'ParamList',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      paramList: { 'type': 'array', 'itemType': SubmitBatchTaskRequestSubmitCommandConditionScheduleConfigParamList },
      templateId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.paramList)) {
      $dara.Model.validateArray(this.paramList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBatchTaskRequestSubmitCommandCustomScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * The end time in the HH:mm format.
   * 
   * This parameter is required.
   * 
   * @example
   * 10:00
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
   * The scheduling period. Valid values:
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
   * 10:00
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

export class SubmitBatchTaskRequestSubmitCommandExecuteRerunConfig extends $dara.Model {
  /**
   * @remarks
   * The custom retry interval for failures.
   * 
   * @example
   * 60
   */
  customRerunInterval?: string;
  /**
   * @remarks
   * The custom number of retries for failures.
   * 
   * @example
   * 3
   */
  customRerunTimes?: string;
  /**
   * @remarks
   * Specifies whether to follow the system configuration.
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

export class SubmitBatchTaskRequestSubmitCommandExecuteTimeOutConfig extends $dara.Model {
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
   * Specifies whether to follow the system configuration.
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

export class SubmitBatchTaskRequestSubmitCommandOfflineCodeTemplateParams extends $dara.Model {
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * Parameter description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether encryption is enabled.
   */
  encryptEnabled?: boolean;
  /**
   * @remarks
   * The parameter key.
   * 
   * @example
   * paramKey
   */
  key?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * paramValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      encryptEnabled: 'EncryptEnabled',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      encryptEnabled: 'boolean',
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

export class SubmitBatchTaskRequestSubmitCommandParamList extends $dara.Model {
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
   * key
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

export class SubmitBatchTaskRequestSubmitCommandScheduleTemplate extends $dara.Model {
  /**
   * @remarks
   * The ID of the basic scheduling template. The value must be a positive number.
   * 
   * @example
   * 1001
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBatchTaskRequestSubmitCommandSparkClientInfo extends $dara.Model {
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

export class SubmitBatchTaskRequestSubmitCommandUpStreamListDependPeriod extends $dara.Model {
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
   * The dependency period type. Valid values:
   * - CURRENT_PERIOD: current period
   * - LAST_PERIOD: last period
   * - LAST_N_PERIOD: last N days
   * - LAST_24_HOUR: last 24 hours
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

export class SubmitBatchTaskRequestSubmitCommandUpStreamList extends $dara.Model {
  /**
   * @remarks
   * The dependency period.
   */
  dependPeriod?: SubmitBatchTaskRequestSubmitCommandUpStreamListDependPeriod;
  /**
   * @remarks
   * The dependency strategy. Valid values:
   * - ALL: all
   * - FIRST: first
   * - LAST: last
   * - NEAR: nearest
   * 
   * @example
   * ALL
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
   * - PHYSICAL: physical node
   * - LOGICAL: logical table dependency
   * 
   * @example
   * PHYSICAL
   */
  nodeType?: string;
  /**
   * @remarks
   * The period difference. A value of 0 indicates a dependency on the same period. A positive value indicates a dependency on the previous N periods.
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
      dependPeriod: SubmitBatchTaskRequestSubmitCommandUpStreamListDependPeriod,
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

export class SubmitBatchTaskRequestSubmitCommand extends $dara.Model {
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
   * The code template version number.
   * 
   * @example
   * 1
   */
  codeTemplateVersion?: number;
  /**
   * @remarks
   * The comment for the submit operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The conditional scheduling configuration. If this parameter is not specified, the current configuration is retained. If Enable is set to false, conditional scheduling is disabled and the original conditions are cleared. This parameter is supported only for periodic tasks.
   */
  conditionScheduleConfig?: SubmitBatchTaskRequestSubmitCommandConditionScheduleConfig;
  /**
   * @remarks
   * The amount of CPU resources. If this parameter is not specified, the current configuration of the task is retained.
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
  customScheduleConfig?: SubmitBatchTaskRequestSubmitCommandCustomScheduleConfig;
  /**
   * @remarks
   * The task execution engine. For Python tasks, valid values:
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
   * The failure retry configuration. If this parameter is not specified, the current configuration of the task is retained. If this parameter is specified, the entire configuration object is replaced.
   */
  executeRerunConfig?: SubmitBatchTaskRequestSubmitCommandExecuteRerunConfig;
  /**
   * @remarks
   * The execution timeout configuration. If this parameter is not specified, the current configuration of the task is retained. If this parameter is specified, the entire configuration object is replaced.
   */
  executeTimeOutConfig?: SubmitBatchTaskRequestSubmitCommandExecuteTimeOutConfig;
  /**
   * @remarks
   * The ID of the node in the task directory tree.
   * 
   * This parameter is required.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  /**
   * @remarks
   * The amount of CPU resources. If this parameter is not specified, the current configuration of the task is retained.
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
   * The task description.
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
   * The ID of the offline code template.
   * 
   * @example
   * template_123456
   */
  offlineCodeTemplateId?: string;
  /**
   * @remarks
   * The list of offline code template parameters.
   */
  offlineCodeTemplateParams?: SubmitBatchTaskRequestSubmitCommandOfflineCodeTemplateParams[];
  /**
   * @remarks
   * The list of custom parameters.
   */
  paramList?: SubmitBatchTaskRequestSubmitCommandParamList[];
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
   * The list of Python third-party packages on which the node depends.
   */
  pythonModuleList?: string[];
  /**
   * @remarks
   * The list of referenced resources. Each element is a resource name. If this parameter is not specified, the resource references of the original node are used. If a list is specified, the existing references are completely replaced. An empty list clears all references.
   */
  resourceReferenceList?: string[];
  /**
   * @remarks
   * Specifies whether to enable retry on timeout. If this parameter is not specified, the current configuration of the node is retained. If this parameter is explicitly set to false, the feature is disabled.
   * 
   * @example
   * false
   */
  retryOnTimeoutEnable?: boolean;
  /**
   * @remarks
   * The scheduling period. Valid values:
   * - YEARLY: yearly
   * - MONTHLY: monthly
   * - WEEKLY: weekly
   * - DAILY: daily
   * - HOURLY: hourly
   * - MINUTELY: minutely
   * 
   * @example
   * DAILY
   */
  schedulePeriod?: string;
  /**
   * @remarks
   * The basic scheduling template. If this parameter is not specified, the current template is retained. An empty object unbinds the template. This parameter is supported only for periodic nodes.
   */
  scheduleTemplate?: SubmitBatchTaskRequestSubmitCommandScheduleTemplate;
  /**
   * @remarks
   * The Spark client.
   */
  sparkClientInfo?: SubmitBatchTaskRequestSubmitCommandSparkClientInfo;
  /**
   * @remarks
   * Specifies whether to enable dynamic resources for Spark. If this parameter is not specified, the current configuration of the node is retained. If this parameter is explicitly set to false, the feature is disabled.
   * 
   * @example
   * false
   */
  sparkDynamicResourceSwitch?: boolean;
  /**
   * @remarks
   * The effective scope of the Spark resource configuration. ONLY_PROD indicates the production environment only. PROD_AND_DEV indicates both the production and development environments. If this parameter is not specified, the current configuration of the node is retained.
   * 
   * @example
   * ONLY_PROD
   */
  sparkResourceEffectScope?: string;
  /**
   * @remarks
   * The Spark SQL resource configurations. The key is the configuration item name, and the value is a string. If this parameter is not specified, the current configurations of the node are retained. An empty map clears all configurations.
   */
  sparkSqlResourceConfigMap?: { [key: string]: string };
  /**
   * @remarks
   * The upstream dependencies.
   */
  upStreamList?: SubmitBatchTaskRequestSubmitCommandUpStreamList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      codeTemplateVersion: 'CodeTemplateVersion',
      comment: 'Comment',
      conditionScheduleConfig: 'ConditionScheduleConfig',
      cpuResource: 'CpuResource',
      cronExpression: 'CronExpression',
      customScheduleConfig: 'CustomScheduleConfig',
      engine: 'Engine',
      executeRerunConfig: 'ExecuteRerunConfig',
      executeTimeOutConfig: 'ExecuteTimeOutConfig',
      fileId: 'FileId',
      memoryResource: 'MemoryResource',
      name: 'Name',
      nodeDescription: 'NodeDescription',
      nodeOutputNameList: 'NodeOutputNameList',
      nodeStatus: 'NodeStatus',
      offlineCodeTemplateId: 'OfflineCodeTemplateId',
      offlineCodeTemplateParams: 'OfflineCodeTemplateParams',
      paramList: 'ParamList',
      priority: 'Priority',
      projectId: 'ProjectId',
      pythonModuleList: 'PythonModuleList',
      resourceReferenceList: 'ResourceReferenceList',
      retryOnTimeoutEnable: 'RetryOnTimeoutEnable',
      schedulePeriod: 'SchedulePeriod',
      scheduleTemplate: 'ScheduleTemplate',
      sparkClientInfo: 'SparkClientInfo',
      sparkDynamicResourceSwitch: 'SparkDynamicResourceSwitch',
      sparkResourceEffectScope: 'SparkResourceEffectScope',
      sparkSqlResourceConfigMap: 'SparkSqlResourceConfigMap',
      upStreamList: 'UpStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      codeTemplateVersion: 'number',
      comment: 'string',
      conditionScheduleConfig: SubmitBatchTaskRequestSubmitCommandConditionScheduleConfig,
      cpuResource: 'string',
      cronExpression: 'string',
      customScheduleConfig: SubmitBatchTaskRequestSubmitCommandCustomScheduleConfig,
      engine: 'string',
      executeRerunConfig: SubmitBatchTaskRequestSubmitCommandExecuteRerunConfig,
      executeTimeOutConfig: SubmitBatchTaskRequestSubmitCommandExecuteTimeOutConfig,
      fileId: 'number',
      memoryResource: 'string',
      name: 'string',
      nodeDescription: 'string',
      nodeOutputNameList: { 'type': 'array', 'itemType': 'string' },
      nodeStatus: 'number',
      offlineCodeTemplateId: 'string',
      offlineCodeTemplateParams: { 'type': 'array', 'itemType': SubmitBatchTaskRequestSubmitCommandOfflineCodeTemplateParams },
      paramList: { 'type': 'array', 'itemType': SubmitBatchTaskRequestSubmitCommandParamList },
      priority: 'number',
      projectId: 'number',
      pythonModuleList: { 'type': 'array', 'itemType': 'string' },
      resourceReferenceList: { 'type': 'array', 'itemType': 'string' },
      retryOnTimeoutEnable: 'boolean',
      schedulePeriod: 'string',
      scheduleTemplate: SubmitBatchTaskRequestSubmitCommandScheduleTemplate,
      sparkClientInfo: SubmitBatchTaskRequestSubmitCommandSparkClientInfo,
      sparkDynamicResourceSwitch: 'boolean',
      sparkResourceEffectScope: 'string',
      sparkSqlResourceConfigMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      upStreamList: { 'type': 'array', 'itemType': SubmitBatchTaskRequestSubmitCommandUpStreamList },
    };
  }

  validate() {
    if(this.conditionScheduleConfig && typeof (this.conditionScheduleConfig as any).validate === 'function') {
      (this.conditionScheduleConfig as any).validate();
    }
    if(this.customScheduleConfig && typeof (this.customScheduleConfig as any).validate === 'function') {
      (this.customScheduleConfig as any).validate();
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
    if(Array.isArray(this.offlineCodeTemplateParams)) {
      $dara.Model.validateArray(this.offlineCodeTemplateParams);
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
    if(this.scheduleTemplate && typeof (this.scheduleTemplate as any).validate === 'function') {
      (this.scheduleTemplate as any).validate();
    }
    if(this.sparkClientInfo && typeof (this.sparkClientInfo as any).validate === 'function') {
      (this.sparkClientInfo as any).validate();
    }
    if(this.sparkSqlResourceConfigMap) {
      $dara.Model.validateMap(this.sparkSqlResourceConfigMap);
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

export class SubmitBatchTaskRequest extends $dara.Model {
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
   * The edit request.
   * 
   * This parameter is required.
   */
  submitCommand?: SubmitBatchTaskRequestSubmitCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      submitCommand: 'SubmitCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      submitCommand: SubmitBatchTaskRequestSubmitCommand,
    };
  }

  validate() {
    if(this.submitCommand && typeof (this.submitCommand as any).validate === 'function') {
      (this.submitCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

