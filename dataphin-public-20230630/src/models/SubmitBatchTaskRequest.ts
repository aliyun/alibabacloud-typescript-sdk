// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitBatchTaskRequestSubmitCommandCustomScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10:00
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

export class SubmitBatchTaskRequestSubmitCommandParamList extends $dara.Model {
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

export class SubmitBatchTaskRequestSubmitCommandUpStreamList extends $dara.Model {
  dependPeriod?: SubmitBatchTaskRequestSubmitCommandUpStreamListDependPeriod;
  /**
   * @example
   * ALL
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
   * This parameter is required.
   * 
   * @example
   * show tables;
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @example
   * 0 0 1 * * ?
   */
  cronExpression?: string;
  customScheduleConfig?: SubmitBatchTaskRequestSubmitCommandCustomScheduleConfig;
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
  paramList?: SubmitBatchTaskRequestSubmitCommandParamList[];
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
  sparkClientInfo?: SubmitBatchTaskRequestSubmitCommandSparkClientInfo;
  upStreamList?: SubmitBatchTaskRequestSubmitCommandUpStreamList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      comment: 'Comment',
      cronExpression: 'CronExpression',
      customScheduleConfig: 'CustomScheduleConfig',
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
      upStreamList: 'UpStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      comment: 'string',
      cronExpression: 'string',
      customScheduleConfig: SubmitBatchTaskRequestSubmitCommandCustomScheduleConfig,
      engine: 'string',
      fileId: 'number',
      name: 'string',
      nodeDescription: 'string',
      nodeOutputNameList: { 'type': 'array', 'itemType': 'string' },
      nodeStatus: 'number',
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

