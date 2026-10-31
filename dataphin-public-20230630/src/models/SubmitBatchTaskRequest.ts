// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitBatchTaskRequestSubmitCommandConditionScheduleConfigParamList extends $dara.Model {
  /**
   * @remarks
   * 条件名称
   * 
   * @example
   * workday
   */
  conditionName?: string;
  /**
   * @remarks
   * 命中后的cron表达式
   * 
   * @example
   * 0 0 5 * * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * 是否启用该条件
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * 是否跟随主调度参数
   * 
   * @example
   * true
   */
  followScheduleParam?: boolean;
  /**
   * @remarks
   * 命中后的调度状态：1正常，2暂停，3空跑
   * 
   * @example
   * 1
   */
  nodeStatus?: number;
  /**
   * @remarks
   * 条件表达式树JSON字符串，内部键名使用小驼峰
   * 
   * @example
   * {}
   */
  scheduleConditionJson?: string;
  /**
   * @remarks
   * 命中后的调度时间
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
   * 是否启用条件调度。传入ConditionScheduleConfig对象时必须提供，由后端校验；false关闭并清除旧配置。
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * 自定义条件列表；与TemplateId互斥，空列表清除旧条件
   */
  paramList?: SubmitBatchTaskRequestSubmitCommandConditionScheduleConfigParamList[];
  /**
   * @remarks
   * 条件调度模板ID，与ParamList互斥
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
   * - MINUTE: Minute.
   * - HOUR: Hour.
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

export class SubmitBatchTaskRequestSubmitCommandExecuteTimeOutConfig extends $dara.Model {
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

export class SubmitBatchTaskRequestSubmitCommandOfflineCodeTemplateParams extends $dara.Model {
  /**
   * @remarks
   * The description of the parameter.
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
   * The key of the parameter.
   * 
   * @example
   * paramKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the parameter.
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
   * The name of the parameter.
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
   * 基础调度模板ID，必须为正数
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
   * - CURRENT_PERIOD: Current period.
   * - LAST_PERIOD: Last period.
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

export class SubmitBatchTaskRequestSubmitCommandUpStreamList extends $dara.Model {
  /**
   * @remarks
   * The dependency period.
   */
  dependPeriod?: SubmitBatchTaskRequestSubmitCommandUpStreamListDependPeriod;
  /**
   * @remarks
   * The dependency strategy. Valid values:
   * - ALL: All.
   * - FIRST: First.
   * - LAST: Last.
   * - NEAR: Nearest.
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
   * - PHYSICAL: Physical node.
   * - LOGICAL: Logical table dependency.
   * 
   * @example
   * PHYSICAL
   */
  nodeType?: string;
  /**
   * @remarks
   * The period difference. A value of 0 indicates a dependency on the same period. A positive number indicates a dependency on the previous N periods.
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
   * The code of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * show tables;
   */
  code?: string;
  /**
   * @remarks
   * The version number of the code template.
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
   * 条件调度；不传保留，Enable=false关闭并清除原条件，仅周期任务支持
   */
  conditionScheduleConfig?: SubmitBatchTaskRequestSubmitCommandConditionScheduleConfig;
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
  customScheduleConfig?: SubmitBatchTaskRequestSubmitCommandCustomScheduleConfig;
  /**
   * @remarks
   * The execution engine of the task. Valid values for Python tasks:
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
   * 失败重试配置。不传时保留任务当前配置。传入时整体替换该配置对象。
   */
  executeRerunConfig?: SubmitBatchTaskRequestSubmitCommandExecuteRerunConfig;
  /**
   * @remarks
   * 执行超时配置。不传时保留任务当前配置。传入时整体替换该配置对象。
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
   * The description of the task.
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
   * The ID of the offline code template.
   * 
   * @example
   * template_123456
   */
  offlineCodeTemplateId?: string;
  /**
   * @remarks
   * The list of parameters for the offline code template.
   */
  offlineCodeTemplateParams?: SubmitBatchTaskRequestSubmitCommandOfflineCodeTemplateParams[];
  /**
   * @remarks
   * The list of custom parameters.
   */
  paramList?: SubmitBatchTaskRequestSubmitCommandParamList[];
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
   * The ID of the project to which the task belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 10121101
   */
  projectId?: number;
  /**
   * @remarks
   * The Python third-party packages required by the task.
   */
  pythonModuleList?: string[];
  /**
   * @remarks
   * 资源引用列表，元素为资源名称。不传时使用原有任务的资源引用；传入列表时整体替换，空列表表示清空引用。
   */
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
   * 基础调度模板；不传保留，空对象解除绑定，仅周期任务支持
   */
  scheduleTemplate?: SubmitBatchTaskRequestSubmitCommandScheduleTemplate;
  /**
   * @remarks
   * The Spark client.
   */
  sparkClientInfo?: SubmitBatchTaskRequestSubmitCommandSparkClientInfo;
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
   * Spark SQL资源配置，键为配置项名称，值为字符串。不传时保留任务当前配置。传入空Map时清空配置。
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
   * The operator user ID.
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

