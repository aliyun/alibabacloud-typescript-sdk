// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBatchTaskRequestUpdateCommandCustomScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20:59
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  interval?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOUR
   */
  intervalUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DAILY
   */
  schedulePeriod?: string;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
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
   * @example
   * 1
   */
  periodOffset?: number;
  /**
   * @remarks
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
  dependPeriod?: UpdateBatchTaskRequestUpdateCommandUpStreamListDependPeriod;
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
   * @remarks
   * This parameter is required.
   * 
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * t_input1
   */
  sourceNodeOutputName?: string;
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
   * This parameter is required.
   * 
   * @example
   * show tables;
   */
  code?: string;
  /**
   * @example
   * 0 0 1 * * ?
   */
  cronExpression?: string;
  customScheduleConfig?: UpdateBatchTaskRequestUpdateCommandCustomScheduleConfig;
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
   * PYTHON3_7
   */
  engine?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test111
   */
  name?: string;
  /**
   * @example
   * xx测试
   */
  nodeDescription?: string;
  nodeOutputNameList?: string[];
  /**
   * @example
   * 1
   */
  nodeStatus?: number;
  paramList?: UpdateBatchTaskRequestUpdateCommandParamList[];
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10121101
   */
  projectId?: number;
  pythonModuleList?: string[];
  /**
   * @example
   * DAILY
   */
  schedulePeriod?: string;
  sparkClientInfo?: UpdateBatchTaskRequestUpdateCommandSparkClientInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 21
   */
  taskType?: number;
  upStreamList?: UpdateBatchTaskRequestUpdateCommandUpStreamList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      cronExpression: 'CronExpression',
      customScheduleConfig: 'CustomScheduleConfig',
      dataSourceCatalog: 'DataSourceCatalog',
      dataSourceId: 'DataSourceId',
      dataSourceSchema: 'DataSourceSchema',
      engine: 'Engine',
      fileId: 'FileId',
      name: 'Name',
      nodeDescription: 'NodeDescription',
      nodeOutputNameList: 'NodeOutputNameList',
      nodeStatus: 'NodeStatus',
      paramList: 'ParamList',
      priority: 'Priority',
      projectId: 'ProjectId',
      pythonModuleList: 'PythonModuleList',
      schedulePeriod: 'SchedulePeriod',
      sparkClientInfo: 'SparkClientInfo',
      taskType: 'TaskType',
      upStreamList: 'UpStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      cronExpression: 'string',
      customScheduleConfig: UpdateBatchTaskRequestUpdateCommandCustomScheduleConfig,
      dataSourceCatalog: 'string',
      dataSourceId: 'string',
      dataSourceSchema: 'string',
      engine: 'string',
      fileId: 'number',
      name: 'string',
      nodeDescription: 'string',
      nodeOutputNameList: { 'type': 'array', 'itemType': 'string' },
      nodeStatus: 'number',
      paramList: { 'type': 'array', 'itemType': UpdateBatchTaskRequestUpdateCommandParamList },
      priority: 'number',
      projectId: 'number',
      pythonModuleList: { 'type': 'array', 'itemType': 'string' },
      schedulePeriod: 'string',
      sparkClientInfo: UpdateBatchTaskRequestUpdateCommandSparkClientInfo,
      taskType: 'number',
      upStreamList: { 'type': 'array', 'itemType': UpdateBatchTaskRequestUpdateCommandUpStreamList },
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

export class UpdateBatchTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommand?: UpdateBatchTaskRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
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

