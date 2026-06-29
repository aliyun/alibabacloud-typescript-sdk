// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDevObjectDependencyResponseBodyDevObjectDependencyListDependencyPeriod extends $dara.Model {
  /**
   * @remarks
   * Period offset. This parameter is required when the dependency period type is LAST_N_PERIOD.
   * 
   * @example
   * 1
   */
  periodOffset?: number;
  /**
   * @remarks
   * Dependency period type.
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

export class GetDevObjectDependencyResponseBodyDevObjectDependencyListOutputContextParamList extends $dara.Model {
  /**
   * @remarks
   * Default value.
   * 
   * @example
   * v1
   */
  defaultValue?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * xxtest
   */
  description?: string;
  /**
   * @remarks
   * Parameter key.
   * 
   * @example
   * v1
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      description: 'Description',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevObjectDependencyResponseBodyDevObjectDependencyListOwnerList extends $dara.Model {
  /**
   * @remarks
   * Node ID.
   * 
   * @example
   * 11123
   */
  id?: string;
  /**
   * @remarks
   * Node name.
   * 
   * @example
   * xx测试
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevObjectDependencyResponseBodyDevObjectDependencyList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task is automatically parsed.
   * 
   * @example
   * true
   */
  autoParse?: boolean;
  /**
   * @remarks
   * Business type.
   * - SCRIPT: Script
   * - LOGICAL_TABLE: Logical table
   * 
   * @example
   * SCRIPT
   */
  bizType?: string;
  /**
   * @remarks
   * Business unit ID.
   * 
   * @example
   * 13111
   */
  bizUnitId?: string;
  /**
   * @remarks
   * Business unit name.
   * 
   * @example
   * xx测试
   */
  bizUnitName?: string;
  /**
   * @remarks
   * Cron expression for the scheduling node.
   * 
   * @example
   * 0 0 0 * * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * Indicates whether a custom cron expression is used for the scheduling node.
   * 
   * @example
   * true
   */
  customCronExpression?: boolean;
  /**
   * @remarks
   * Dependency fields.
   */
  dependFieldList?: string[];
  /**
   * @remarks
   * Dependency period configuration.
   */
  dependencyPeriod?: GetDevObjectDependencyResponseBodyDevObjectDependencyListDependencyPeriod;
  /**
   * @remarks
   * Dependency strategy.
   * - ALL
   * - FIRST
   * - LAST
   * - NEAR
   * 
   * @example
   * ALL
   */
  dependencyStrategy?: string;
  /**
   * @remarks
   * Indicates whether the node is a dimension table intermediate node.
   * 
   * @example
   * true
   */
  dimMidNode?: boolean;
  /**
   * @remarks
   * Effect fields.
   */
  effectFieldList?: string[];
  /**
   * @remarks
   * Additional business information.
   * 
   * @example
   * 所有字段信息/hasProd/hasDev等信息
   */
  externalBizInfo?: string;
  /**
   * @remarks
   * Indicates whether the dependency is manually added.
   * 
   * @example
   * false
   */
  manuallyAdd?: boolean;
  /**
   * @remarks
   * Node ID.
   * 
   * @example
   * n_13211
   */
  nodeId?: string;
  /**
   * @remarks
   * Node name.
   * 
   * @example
   * xx测试
   */
  nodeName?: string;
  /**
   * @remarks
   * Node output name.
   * 
   * @example
   * n_xx
   */
  nodeOutputName?: string;
  /**
   * @remarks
   * Output table information.
   * 
   * @example
   * t_xx
   */
  nodeOutputTableName?: string;
  /**
   * @remarks
   * Node type.
   * - DATA_PROCESS: Code task
   * - BBOX_LOGIC_TABLE_NODE: Black box logical table node
   * - ONE_ID_LABEL: ID label node
   * - ONE_ID_RULE: ID rule node
   * - PIPELINE_NODE: Pipeline node
   * 
   * @example
   * DATA_PROCESS
   */
  nodeType?: string;
  /**
   * @remarks
   * Cross-node output parameters.
   */
  outputContextParamList?: GetDevObjectDependencyResponseBodyDevObjectDependencyListOutputContextParamList[];
  /**
   * @remarks
   * Node owners.
   */
  ownerList?: GetDevObjectDependencyResponseBodyDevObjectDependencyListOwnerList[];
  /**
   * @remarks
   * Dependency period difference.
   * 
   * @example
   * 1
   */
  periodDiff?: number;
  /**
   * @remarks
   * Project ID.
   * 
   * @example
   * 123131
   */
  projectId?: number;
  /**
   * @remarks
   * Project name.
   * 
   * @example
   * xx测试
   */
  projectName?: string;
  /**
   * @remarks
   * Schedule type.
   * - MINUTELY: Minute
   * - HOURLY: Hour
   * - DAILY: Day
   * - WEEKLY: Week
   * - MONTHLY: Month
   * - YEARLY: Year
   * 
   * @example
   * DAILY
   */
  scheduleType?: string;
  /**
   * @remarks
   * Indicates whether the node has a self-dependency.
   * 
   * @example
   * true
   */
  selfDepend?: boolean;
  /**
   * @remarks
   * Sub-business type.
   * - MAX_COMPUTE_SQL
   * - HIVE_SQL
   * - SHELL
   * - PYTHON
   * - ONE_SERVICE_SQL
   * - DATABASE_SQL, etc.
   * 
   * @example
   * SHELL
   */
  subBizType?: string;
  /**
   * @remarks
   * Indicates whether the configuration is valid.
   * 
   * @example
   * true
   */
  valid?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoParse: 'AutoParse',
      bizType: 'BizType',
      bizUnitId: 'BizUnitId',
      bizUnitName: 'BizUnitName',
      cronExpression: 'CronExpression',
      customCronExpression: 'CustomCronExpression',
      dependFieldList: 'DependFieldList',
      dependencyPeriod: 'DependencyPeriod',
      dependencyStrategy: 'DependencyStrategy',
      dimMidNode: 'DimMidNode',
      effectFieldList: 'EffectFieldList',
      externalBizInfo: 'ExternalBizInfo',
      manuallyAdd: 'ManuallyAdd',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeOutputName: 'NodeOutputName',
      nodeOutputTableName: 'NodeOutputTableName',
      nodeType: 'NodeType',
      outputContextParamList: 'OutputContextParamList',
      ownerList: 'OwnerList',
      periodDiff: 'PeriodDiff',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      scheduleType: 'ScheduleType',
      selfDepend: 'SelfDepend',
      subBizType: 'SubBizType',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoParse: 'boolean',
      bizType: 'string',
      bizUnitId: 'string',
      bizUnitName: 'string',
      cronExpression: 'string',
      customCronExpression: 'boolean',
      dependFieldList: { 'type': 'array', 'itemType': 'string' },
      dependencyPeriod: GetDevObjectDependencyResponseBodyDevObjectDependencyListDependencyPeriod,
      dependencyStrategy: 'string',
      dimMidNode: 'boolean',
      effectFieldList: { 'type': 'array', 'itemType': 'string' },
      externalBizInfo: 'string',
      manuallyAdd: 'boolean',
      nodeId: 'string',
      nodeName: 'string',
      nodeOutputName: 'string',
      nodeOutputTableName: 'string',
      nodeType: 'string',
      outputContextParamList: { 'type': 'array', 'itemType': GetDevObjectDependencyResponseBodyDevObjectDependencyListOutputContextParamList },
      ownerList: { 'type': 'array', 'itemType': GetDevObjectDependencyResponseBodyDevObjectDependencyListOwnerList },
      periodDiff: 'number',
      projectId: 'number',
      projectName: 'string',
      scheduleType: 'string',
      selfDepend: 'boolean',
      subBizType: 'string',
      valid: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.dependFieldList)) {
      $dara.Model.validateArray(this.dependFieldList);
    }
    if(this.dependencyPeriod && typeof (this.dependencyPeriod as any).validate === 'function') {
      (this.dependencyPeriod as any).validate();
    }
    if(Array.isArray(this.effectFieldList)) {
      $dara.Model.validateArray(this.effectFieldList);
    }
    if(Array.isArray(this.outputContextParamList)) {
      $dara.Model.validateArray(this.outputContextParamList);
    }
    if(Array.isArray(this.ownerList)) {
      $dara.Model.validateArray(this.ownerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevObjectDependencyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code. OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Dependency list.
   */
  devObjectDependencyList?: GetDevObjectDependencyResponseBodyDevObjectDependencyList[];
  /**
   * @remarks
   * HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      devObjectDependencyList: 'DevObjectDependencyList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      devObjectDependencyList: { 'type': 'array', 'itemType': GetDevObjectDependencyResponseBodyDevObjectDependencyList },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.devObjectDependencyList)) {
      $dara.Model.validateArray(this.devObjectDependencyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

