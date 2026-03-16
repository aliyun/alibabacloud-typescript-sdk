// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAllSwimmingLaneResponseBodyDataEntryRulesRestItems extends $dara.Model {
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
   * The name of the matching rule.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The matching list.
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
   * test
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

export class QueryAllSwimmingLaneResponseBodyDataEntryRules extends $dara.Model {
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
   * The RESTful matching rules.
   */
  restItems?: QueryAllSwimmingLaneResponseBodyDataEntryRulesRestItems[];
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
      restItems: { 'type': 'array', 'itemType': QueryAllSwimmingLaneResponseBodyDataEntryRulesRestItems },
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

export class QueryAllSwimmingLaneResponseBodyDataGatewaySwimmingLaneRouteConditions extends $dara.Model {
  /**
   * @remarks
   * 条件：
   * - PRE：前缀匹配
   * - EQUAL：精确匹配
   * - ERGULAR：正则匹配
   * 
   * @example
   * PRE
   */
  cond?: string;
  /**
   * @remarks
   * 参数名称
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * NameList
   */
  nameList?: string[];
  /**
   * @remarks
   * 参数类型：
   * - header：Header
   * - param：Parameter
   * 
   * @example
   * header
   */
  type?: string;
  /**
   * @remarks
   * 参数值
   * 
   * @example
   * xiaoming
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'Cond',
      name: 'Name',
      nameList: 'NameList',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      name: 'string',
      nameList: { 'type': 'array', 'itemType': 'string' },
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

export class QueryAllSwimmingLaneResponseBodyDataGatewaySwimmingLaneRouteRouteIndependentPercentageList extends $dara.Model {
  /**
   * @example
   * 60
   */
  percentage?: string;
  /**
   * @example
   * 12345
   */
  routeId?: string;
  static names(): { [key: string]: string } {
    return {
      percentage: 'Percentage',
      routeId: 'RouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percentage: 'string',
      routeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllSwimmingLaneResponseBodyDataGatewaySwimmingLaneRoute extends $dara.Model {
  /**
   * @remarks
   * 全链路灰度模式：
   * 
   * - 0: 按请求内容路由
   * 
   * - 1: 按比例路由
   * 
   * @example
   * 0
   */
  canaryModel?: number;
  /**
   * @example
   * AND、OR
   */
  condition?: string;
  /**
   * @remarks
   * 匹配条件列表（按内容路由使用）
   */
  conditions?: QueryAllSwimmingLaneResponseBodyDataGatewaySwimmingLaneRouteConditions[];
  /**
   * @remarks
   * 网关ID
   * 
   * @example
   * 1
   */
  gatewayId?: number;
  /**
   * @remarks
   * 网关唯一ID
   * 
   * @example
   * gw-84efde2ee1464260bdb17a5b****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * 流量比例（按比例路由使用，取值0-100）
   * 
   * @example
   * 20
   */
  percentage?: number;
  /**
   * @remarks
   * 路由ID列表
   */
  routeIdList?: number[];
  /**
   * @example
   * true
   */
  routeIndependentPercentageEnable?: string;
  routeIndependentPercentageList?: QueryAllSwimmingLaneResponseBodyDataGatewaySwimmingLaneRouteRouteIndependentPercentageList[];
  static names(): { [key: string]: string } {
    return {
      canaryModel: 'CanaryModel',
      condition: 'Condition',
      conditions: 'Conditions',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      percentage: 'Percentage',
      routeIdList: 'RouteIdList',
      routeIndependentPercentageEnable: 'RouteIndependentPercentageEnable',
      routeIndependentPercentageList: 'RouteIndependentPercentageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canaryModel: 'number',
      condition: 'string',
      conditions: { 'type': 'array', 'itemType': QueryAllSwimmingLaneResponseBodyDataGatewaySwimmingLaneRouteConditions },
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      percentage: 'number',
      routeIdList: { 'type': 'array', 'itemType': 'number' },
      routeIndependentPercentageEnable: 'string',
      routeIndependentPercentageList: { 'type': 'array', 'itemType': QueryAllSwimmingLaneResponseBodyDataGatewaySwimmingLaneRouteRouteIndependentPercentageList },
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(Array.isArray(this.routeIdList)) {
      $dara.Model.validateArray(this.routeIdList);
    }
    if(Array.isArray(this.routeIndependentPercentageList)) {
      $dara.Model.validateArray(this.routeIndependentPercentageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllSwimmingLaneResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 是否开启。
   * 
   * @example
   * true
   */
  enable?: string;
  /**
   * @remarks
   * The ingress application rules.
   */
  entryRules?: QueryAllSwimmingLaneResponseBodyDataEntryRules[];
  /**
   * @remarks
   * 网关路由信息（使用云原生网关为入口时使用）
   */
  gatewaySwimmingLaneRoute?: QueryAllSwimmingLaneResponseBodyDataGatewaySwimmingLaneRoute;
  /**
   * @example
   * {\\"GatewayUniqueId\\":\\"gw-cf815503e0a8441b8956d8e349fa8fb5\\",\\"Percentage\\":0,\\"RouteIdList\\":[32295,32298,32297,32309,32307,32294,32303,32292,32299,35278],\\"CanaryModel\\":1,\\"Conditions\\":[]}
   */
  gatewaySwimmingLaneRouteJson?: string;
  /**
   * @remarks
   * The ID of the lane group.
   * 
   * @example
   * 6859
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the lane group.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The side on which canary release for messaging is implemented.
   * 
   * @example
   * Client
   */
  messageQueueFilterSide?: string;
  /**
   * @remarks
   * Indicates whether canary release for messaging is enabled.
   * 
   * @example
   * false
   */
  messageQueueGrayEnable?: boolean;
  /**
   * @remarks
   * The name of the lane group.
   * 
   * @example
   * swimmingGroup
   */
  name?: string;
  /**
   * @remarks
   * The Microservices Engine (MSE) namespace to which the lane belongs.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * true
   */
  pathIndependentPercentageEnable?: boolean;
  /**
   * @remarks
   * Indicates whether request details were recorded (metrics of end-to-end canary release).
   * 
   * @example
   * false
   */
  recordCanaryDetail?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tag of the lane.
   * 
   * @example
   * gray
   */
  tag?: string;
  /**
   * @remarks
   * The user ID of the lane group.
   * 
   * @example
   * 12345
   */
  userId?: string;
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
   * The time when the lane was created.
   * 
   * @example
   * 1683598484000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the lane was updated.
   * 
   * @example
   * 1683598484000
   */
  gmtModified?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      entryRules: 'EntryRules',
      gatewaySwimmingLaneRoute: 'GatewaySwimmingLaneRoute',
      gatewaySwimmingLaneRouteJson: 'GatewaySwimmingLaneRouteJson',
      groupId: 'GroupId',
      id: 'Id',
      messageQueueFilterSide: 'MessageQueueFilterSide',
      messageQueueGrayEnable: 'MessageQueueGrayEnable',
      name: 'Name',
      namespace: 'Namespace',
      pathIndependentPercentageEnable: 'PathIndependentPercentageEnable',
      recordCanaryDetail: 'RecordCanaryDetail',
      regionId: 'RegionId',
      tag: 'Tag',
      userId: 'UserId',
      enableRules: 'enableRules',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
      entryRules: { 'type': 'array', 'itemType': QueryAllSwimmingLaneResponseBodyDataEntryRules },
      gatewaySwimmingLaneRoute: QueryAllSwimmingLaneResponseBodyDataGatewaySwimmingLaneRoute,
      gatewaySwimmingLaneRouteJson: 'string',
      groupId: 'string',
      id: 'number',
      messageQueueFilterSide: 'string',
      messageQueueGrayEnable: 'boolean',
      name: 'string',
      namespace: 'string',
      pathIndependentPercentageEnable: 'boolean',
      recordCanaryDetail: 'boolean',
      regionId: 'string',
      tag: 'string',
      userId: 'string',
      enableRules: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entryRules)) {
      $dara.Model.validateArray(this.entryRules);
    }
    if(this.gatewaySwimmingLaneRoute && typeof (this.gatewaySwimmingLaneRoute as any).validate === 'function') {
      (this.gatewaySwimmingLaneRoute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllSwimmingLaneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the data.
   * 
   * @example
   * [{id:100,name:"test"}]
   */
  data?: QueryAllSwimmingLaneResponseBodyData[];
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
   * The returned message.
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
   * DC34E4A3-5F1C-4E40-86EA-02EDF967****
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
      data: { 'type': 'array', 'itemType': QueryAllSwimmingLaneResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

