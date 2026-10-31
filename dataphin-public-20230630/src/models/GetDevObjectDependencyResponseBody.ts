// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDevObjectDependencyResponseBodyDevObjectDependencyListDependencyPeriod extends $dara.Model {
  /**
   * @remarks
   * The period offset. This parameter is required when the dependency period type is LAST_N_PERIOD.
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

export class GetDevObjectDependencyResponseBodyDevObjectDependencyListOutputContextParamList extends $dara.Model {
  /**
   * @remarks
   * The default value.
   * 
   * @example
   * v1
   */
  defaultValue?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * xxtest
   */
  description?: string;
  /**
   * @remarks
   * The parameter.
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
   * The node ID.
   * 
   * @example
   * 11123
   */
  id?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * xx test
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
   * The business type. Valid values:
   * - SCRIPT: Script.
   * - LOGICAL_TABLE: Logical table.
   * 
   * @example
   * SCRIPT
   */
  bizType?: string;
  /**
   * @remarks
   * The business module ID.
   * 
   * @example
   * 13111
   */
  bizUnitId?: string;
  /**
   * @remarks
   * The business unit name.
   * 
   * @example
   * xx test
   */
  bizUnitName?: string;
  /**
   * @remarks
   * The cron expression of the scheduling node.
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
   * The dependent fields.
   */
  dependFieldList?: string[];
  /**
   * @remarks
   * The dependency period configuration.
   */
  dependencyPeriod?: GetDevObjectDependencyResponseBodyDevObjectDependencyListDependencyPeriod;
  /**
   * @remarks
   * The dependency strategy. Valid values:
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
   * Indicates whether the node is an intermediate node of a dimension table.
   * 
   * @example
   * true
   */
  dimMidNode?: boolean;
  /**
   * @remarks
   * The dependent fields.
   */
  effectFieldList?: string[];
  /**
   * @remarks
   * The additional business information.
   * 
   * @example
   * All field information, hasProd, hasDev, and other information
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
   * The node ID.
   * 
   * @example
   * n_13211
   */
  nodeId?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * xx test
   */
  nodeName?: string;
  /**
   * @remarks
   * The node output name.
   * 
   * @example
   * n_xx
   */
  nodeOutputName?: string;
  /**
   * @remarks
   * The output table information.
   * 
   * @example
   * t_xx
   */
  nodeOutputTableName?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * - DATA_PROCESS: Code task.
   * - BBOX_LOGIC_TABLE_NODE: Black-box logical table node.
   * - ONE_ID_LABEL: Extracted tag node.
   * - ONE_ID_RULE: Extracted tag node.
   * - PIPELINE_NODE: Pipeline node.
   * 
   * @example
   * DATA_PROCESS
   */
  nodeType?: string;
  /**
   * @remarks
   * The cross-node output parameters.
   */
  outputContextParamList?: GetDevObjectDependencyResponseBodyDevObjectDependencyListOutputContextParamList[];
  /**
   * @remarks
   * The node owner.
   */
  ownerList?: GetDevObjectDependencyResponseBodyDevObjectDependencyListOwnerList[];
  /**
   * @remarks
   * The dependency period difference.
   * 
   * @example
   * 1
   */
  periodDiff?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 123131
   */
  projectId?: number;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * xx test
   */
  projectName?: string;
  /**
   * @remarks
   * The scheduling type. Valid values: MINUTELY (minute), HOURLY (hour), DAILY (day), WEEKLY (week), MONTHLY (month), and YEARLY (year).
   * 
   * @example
   * DAILY
   */
  scheduleType?: string;
  /**
   * @remarks
   * Indicates whether self-dependency is enabled.
   * 
   * @example
   * true
   */
  selfDepend?: boolean;
  /**
   * @remarks
   * The sub-business type. Valid values:
   * - MAX_COMPUTE_SQL
   * - HIVE_SQL
   * - SHELL
   * - PYTHON
   * - ONE_SERVICE_SQL
   * - DATABASE_SQL
   * 
   * @example
   * SHELL
   */
  subBizType?: string;
  /**
   * @remarks
   * Indicates whether the configuration is effective.
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
   * The error code. A value of OK indicates that the request is normal.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The dependency list.
   */
  devObjectDependencyList?: GetDevObjectDependencyResponseBodyDevObjectDependencyList[];
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

