// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySwimmingLaneByIdResponseBodyDataEntryRulesRestItems extends $dara.Model {
  /**
   * @remarks
   * 匹配符
   * 
   * @example
   * ==
   */
  cond?: string;
  /**
   * @remarks
   * 数值
   * 
   * @example
   * x
   */
  datum?: string;
  /**
   * @remarks
   * 除数
   * 
   * @example
   * 10
   */
  divisor?: number;
  /**
   * @remarks
   * 名称
   * 
   * @example
   * 11111
   */
  name?: string;
  /**
   * @remarks
   * 名称列表
   */
  nameList?: string[];
  /**
   * @remarks
   * 操作符
   * 
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @remarks
   * 百分比
   * 
   * @example
   * 30
   */
  rate?: number;
  /**
   * @remarks
   * 余数
   * 
   * @example
   * 10
   */
  remainder?: number;
  /**
   * @remarks
   * 匹配类型
   * 
   * @example
   * cookie
   */
  type?: string;
  /**
   * @remarks
   * 值
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
   * 条件
   * 
   * @example
   * AND
   */
  condition?: string;
  /**
   * @remarks
   * 路径
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * 路径列表
   */
  paths?: string[];
  /**
   * @remarks
   * Rest匹配规则列表
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
   * @example
   * false
   */
  pathIndependentPercentageEnable?: boolean;
  /**
   * @remarks
   * 泳道开关
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * 是否开启规则。
   * 
   * @example
   * true
   */
  enableRules?: boolean;
  /**
   * @remarks
   * 入口应用规则
   * 
   * @example
   * {}
   */
  entryRule?: string;
  /**
   * @remarks
   * 入口应用规则详情
   */
  entryRules?: QuerySwimmingLaneByIdResponseBodyDataEntryRules[];
  /**
   * @remarks
   * MSE网关路由规则
   * 
   * @example
   * {}
   */
  gatewaySwimmingLaneRouteJson?: string;
  /**
   * @remarks
   * 规则创建时间
   * 
   * @example
   * 1683598484000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 规则修改时间
   * 
   * @example
   * 1683598484000
   */
  gmtModified?: string;
  /**
   * @remarks
   * 泳道组Id。
   * 
   * @example
   * 8
   */
  groupId?: number;
  /**
   * @remarks
   * 泳道ID
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * 泳道名称
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * 区域ID。
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * 泳道状态
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * 泳道对应的标签。
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
   * The details of the data.
   * 
   * @example
   * {id:102,name:"test"}
   */
  data?: QuerySwimmingLaneByIdResponseBodyData;
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
   * 69AD2AA7-DB47-449B-941B-B14409DF****
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

