// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDevObjectDependencyResponseBodyDevObjectDependencyListDependencyPeriod extends $dara.Model {
  /**
   * @example
   * 1
   */
  periodOffset?: number;
  /**
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
   * @example
   * v1
   */
  defaultValue?: string;
  /**
   * @example
   * xxtest
   */
  description?: string;
  /**
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
   * @example
   * 11123
   */
  id?: string;
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
   * @example
   * true
   */
  autoParse?: boolean;
  /**
   * @example
   * SCRIPT
   */
  bizType?: string;
  /**
   * @example
   * 13111
   */
  bizUnitId?: string;
  bizUnitName?: string;
  /**
   * @example
   * 0 0 0 * * ?
   */
  cronExpression?: string;
  /**
   * @example
   * true
   */
  customCronExpression?: boolean;
  dependFieldList?: string[];
  dependencyPeriod?: GetDevObjectDependencyResponseBodyDevObjectDependencyListDependencyPeriod;
  /**
   * @example
   * ALL
   */
  dependencyStrategy?: string;
  /**
   * @example
   * true
   */
  dimMidNode?: boolean;
  effectFieldList?: string[];
  externalBizInfo?: string;
  /**
   * @example
   * false
   */
  manuallyAdd?: boolean;
  /**
   * @example
   * n_13211
   */
  nodeId?: string;
  nodeName?: string;
  /**
   * @example
   * n_xx
   */
  nodeOutputName?: string;
  /**
   * @example
   * t_xx
   */
  nodeOutputTableName?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  nodeType?: string;
  outputContextParamList?: GetDevObjectDependencyResponseBodyDevObjectDependencyListOutputContextParamList[];
  ownerList?: GetDevObjectDependencyResponseBodyDevObjectDependencyListOwnerList[];
  /**
   * @example
   * 1
   */
  periodDiff?: number;
  /**
   * @example
   * 123131
   */
  projectId?: number;
  projectName?: string;
  /**
   * @example
   * DAILY
   */
  scheduleType?: string;
  /**
   * @example
   * true
   */
  selfDepend?: boolean;
  /**
   * @example
   * SHELL
   */
  subBizType?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  devObjectDependencyList?: GetDevObjectDependencyResponseBodyDevObjectDependencyList[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
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

