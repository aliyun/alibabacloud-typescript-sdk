// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitBatchTaskRequestSubmitCommandCustomScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * The end time in the format of HH:mm.
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
   * - MINUTE: minute
   * - HOUR: hour
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

export class SubmitBatchTaskRequestSubmitCommandOfflineCodeTemplateParams extends $dara.Model {
  /**
   * @example
   * 参数说明
   */
  description?: string;
  encryptEnabled?: boolean;
  /**
   * @example
   * paramKey
   */
  key?: string;
  /**
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
   * - LAST_PERIOD: previous period
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
   * The type of the upstream dependency node. Valid values:
   * - PHYSICAL: physical node
   * - LOGICAL: logical table dependency
   * 
   * @example
   * PHYSICAL
   */
  nodeType?: string;
  /**
   * @remarks
   * The period difference. A value of 0 indicates a same-period dependency. A positive number indicates a dependency on the previous N periods.
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
   * The cron expression for automatic scheduling. Refer to the Linux cron expression syntax.
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
   * The execution engine for the node, such as for Python tasks. Valid values:
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
   * The node ID in the directory tree.
   * 
   * This parameter is required.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  /**
   * @remarks
   * The name of the batch task.
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
   * xx测试
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
   * @example
   * template_123456
   */
  offlineCodeTemplateId?: string;
  offlineCodeTemplateParams?: SubmitBatchTaskRequestSubmitCommandOfflineCodeTemplateParams[];
  /**
   * @remarks
   * The list of custom parameters.
   */
  paramList?: SubmitBatchTaskRequestSubmitCommandParamList[];
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
   * The Python third-party packages that the node depends on.
   */
  pythonModuleList?: string[];
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
  sparkClientInfo?: SubmitBatchTaskRequestSubmitCommandSparkClientInfo;
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
      cronExpression: 'CronExpression',
      customScheduleConfig: 'CustomScheduleConfig',
      engine: 'Engine',
      fileId: 'FileId',
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
      schedulePeriod: 'SchedulePeriod',
      sparkClientInfo: 'SparkClientInfo',
      upStreamList: 'UpStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      codeTemplateVersion: 'number',
      comment: 'string',
      cronExpression: 'string',
      customScheduleConfig: SubmitBatchTaskRequestSubmitCommandCustomScheduleConfig,
      engine: 'string',
      fileId: 'number',
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
      schedulePeriod: 'string',
      sparkClientInfo: SubmitBatchTaskRequestSubmitCommandSparkClientInfo,
      upStreamList: { 'type': 'array', 'itemType': SubmitBatchTaskRequestSubmitCommandUpStreamList },
    };
  }

  validate() {
    if(this.customScheduleConfig && typeof (this.customScheduleConfig as any).validate === 'function') {
      (this.customScheduleConfig as any).validate();
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
   * The submit request.
   * 
   * This parameter is required.
   */
  submitCommand?: SubmitBatchTaskRequestSubmitCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      submitCommand: 'SubmitCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
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

