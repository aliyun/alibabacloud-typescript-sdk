// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneResponseBodyDataEntryRulesRestItems extends $dara.Model {
  /**
   * @remarks
   * The matching character.
   * 
   * @example
   * ==
   */
  cond?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * x
   */
  datum?: string;
  /**
   * @remarks
   * The divisor.
   * 
   * @example
   * 10
   */
  divisor?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The names.
   */
  nameList?: string[];
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @remarks
   * The percentage.
   * 
   * @example
   * 30
   */
  rate?: number;
  /**
   * @remarks
   * The remainder.
   * 
   * @example
   * 10
   */
  remainder?: number;
  /**
   * @remarks
   * The matching type.
   * 
   * @example
   * cookie
   */
  type?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * 9
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'cond',
      datum: 'datum',
      divisor: 'divisor',
      name: 'name',
      nameList: 'nameList',
      operator: 'operator',
      rate: 'rate',
      remainder: 'remainder',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      datum: 'string',
      divisor: 'number',
      name: 'string',
      nameList: { 'type': 'array', 'itemType': 'string' },
      operator: 'string',
      rate: 'number',
      remainder: 'number',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nameList)) {
      $dara.Model.validateArray(this.nameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneResponseBodyDataEntryRules extends $dara.Model {
  /**
   * @remarks
   * The condition.
   * 
   * @example
   * AND
   */
  condition?: string;
  /**
   * @remarks
   * The path of the code group.
   * 
   * @example
   * /adump/wxb/prod
   */
  path?: string;
  /**
   * @remarks
   * The paths.
   */
  paths?: string[];
  /**
   * @remarks
   * The conditions to be met.
   */
  restItems?: CreateOrUpdateSwimmingLaneResponseBodyDataEntryRulesRestItems[];
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      path: 'path',
      paths: 'paths',
      restItems: 'restItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      path: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      restItems: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneResponseBodyDataEntryRulesRestItems },
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    if(Array.isArray(this.restItems)) {
      $dara.Model.validateArray(this.restItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the lane was enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Indicates whether the rule is enabled.
   * 
   * @example
   * true
   */
  enableRules?: boolean;
  /**
   * @remarks
   * The rule for the ingress application.
   * 
   * @example
   * {}
   */
  entryRule?: string;
  /**
   * @remarks
   * The name.
   */
  entryRules?: CreateOrUpdateSwimmingLaneResponseBodyDataEntryRules[];
  /**
   * @remarks
   * The routing rule for the MSE gateway.
   * 
   * @example
   * {}
   */
  gatewaySwimmingLaneRouteJson?: string;
  /**
   * @remarks
   * The time when the lane was created.
   * 
   * @example
   * 1545726028000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the lane was updated.
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the lane group.
   * 
   * @example
   * 72586
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the lane.
   * 
   * @example
   * 94765
   */
  id?: number;
  /**
   * @remarks
   * The name of the lane.
   * 
   * @example
   * test
   */
  name?: string;
  pathIndependentPercentageEnable?: boolean;
  /**
   * @remarks
   * The ID of the region where the application is deployed.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the lane.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The tag of the lane.
   * 
   * @example
   * release
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      enableRules: 'enableRules',
      entryRule: 'entryRule',
      entryRules: 'entryRules',
      gatewaySwimmingLaneRouteJson: 'gatewaySwimmingLaneRouteJson',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      groupId: 'groupId',
      id: 'id',
      name: 'name',
      pathIndependentPercentageEnable: 'pathIndependentPercentageEnable',
      regionId: 'regionId',
      status: 'status',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      enableRules: 'boolean',
      entryRule: 'string',
      entryRules: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneResponseBodyDataEntryRules },
      gatewaySwimmingLaneRouteJson: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupId: 'number',
      id: 'number',
      name: 'string',
      pathIndependentPercentageEnable: 'boolean',
      regionId: 'string',
      status: 'number',
      tag: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entryRules)) {
      $dara.Model.validateArray(this.entryRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The value 200 is returned if the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The details of the data.
   * 
   * @example
   * {}
   */
  data?: CreateOrUpdateSwimmingLaneResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request was successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE5C32A1-BC0E-4B79-817C-103E4EDF****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateOrUpdateSwimmingLaneResponseBodyData,
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

