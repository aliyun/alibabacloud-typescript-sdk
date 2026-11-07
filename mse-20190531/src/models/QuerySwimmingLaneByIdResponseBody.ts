// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySwimmingLaneByIdResponseBodyDataEntryRulesRestItems extends $dara.Model {
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
   * The number.
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
   * 11111
   */
  name?: string;
  /**
   * @remarks
   * The names.
   */
  nameList?: string[];
  /**
   * @remarks
   * The filter operator.
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
   * hello
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

export class QuerySwimmingLaneByIdResponseBodyDataEntryRules extends $dara.Model {
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
   * The path.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * The list of paths.
   */
  paths?: string[];
  /**
   * @remarks
   * The Restful matching rules.
   */
  restItems?: QuerySwimmingLaneByIdResponseBodyDataEntryRulesRestItems[];
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
      restItems: { 'type': 'array', 'itemType': QuerySwimmingLaneByIdResponseBodyDataEntryRulesRestItems },
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

export class QuerySwimmingLaneByIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * This parameter is discontinued. This parameter is used to specify whether to enable grayscale by path when Java gateway is used as the entry for the swimming lane group.
   * 
   * @example
   * false
   */
  pathIndependentPercentageEnable?: boolean;
  /**
   * @remarks
   * The swimming lane switch.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the rule. Valid values:
   * 
   * @example
   * true
   */
  enableRules?: boolean;
  /**
   * @remarks
   * The entry application rule.
   * 
   * @example
   * {}
   */
  entryRule?: string;
  /**
   * @remarks
   * The details of the entry application rules.
   */
  entryRules?: QuerySwimmingLaneByIdResponseBodyDataEntryRules[];
  /**
   * @remarks
   * The MSE gateway routing rule.
   * 
   * @example
   * {}
   */
  gatewaySwimmingLaneRouteJson?: string;
  /**
   * @remarks
   * Rule Created At
   * 
   * @example
   * 1683598484000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Rule Modified At
   * 
   * @example
   * 1683598484000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The swimming lane group ID.
   * 
   * @example
   * 8
   */
  groupId?: number;
  /**
   * @remarks
   * The swimming lane ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The swimming lane name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The swimming lane status.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The tag corresponding to the swimming lane.
   * 
   * @example
   * gray
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      pathIndependentPercentageEnable: 'PathIndependentPercentageEnable',
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
      regionId: 'regionId',
      status: 'status',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pathIndependentPercentageEnable: 'boolean',
      enable: 'boolean',
      enableRules: 'boolean',
      entryRule: 'string',
      entryRules: { 'type': 'array', 'itemType': QuerySwimmingLaneByIdResponseBodyDataEntryRules },
      gatewaySwimmingLaneRouteJson: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupId: 'number',
      id: 'number',
      name: 'string',
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

export class QuerySwimmingLaneByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {id:102,name:"test"}
   */
  data?: QuerySwimmingLaneByIdResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * The request is processed successfully.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 69AD2AA7-DB47-449B-941B-B14409DF****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QuerySwimmingLaneByIdResponseBodyData,
      errorCode: 'string',
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

