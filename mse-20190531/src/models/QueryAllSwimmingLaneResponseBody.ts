// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAllSwimmingLaneResponseBodyDataEntryRulesRestItems extends $dara.Model {
  /**
   * @remarks
   * The matching operator.
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
   * The list of items to match.
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
   * The list of paths.
   */
  paths?: string[];
  /**
   * @remarks
   * The list of RESTful matching rules.
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
   * The condition. Valid values:
   * 
   * - PRE: prefix match
   * 
   * - EQUAL: exact match
   * 
   * - REGULAR: regular expression match
   * 
   * @example
   * PRE
   */
  cond?: string;
  /**
   * @remarks
   * The parameter name.
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
   * The parameter type. Valid values:
   * 
   * - header: Header
   * 
   * - param: Parameter
   * 
   * @example
   * header
   */
  type?: string;
  /**
   * @remarks
   * The parameter value.
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
   * @remarks
   * The percentage.
   * 
   * @example
   * 60
   */
  percentage?: string;
  /**
   * @remarks
   * The route ID.
   * 
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
   * The mode of the end-to-end canary release. Valid values:
   * 
   * - 0: route by the content of the request
   * 
   * - 1: route by proportion
   * 
   * @example
   * 0
   */
  canaryModel?: number;
  /**
   * @remarks
   * The condition for the canary release.
   * 
   * @example
   * AND、OR
   */
  condition?: string;
  /**
   * @remarks
   * The list of matching conditions. This parameter is used when you route requests by content.
   */
  conditions?: QueryAllSwimmingLaneResponseBodyDataGatewaySwimmingLaneRouteConditions[];
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 1
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-84efde2ee1464260bdb17a5b****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The traffic proportion. This parameter is used when you route requests by proportion. Valid values: 0 to 100.
   * 
   * @example
   * 20
   */
  percentage?: number;
  /**
   * @remarks
   * The list of route IDs. This parameter is optional if the canary release is effective at the gateway level.
   */
  routeIdList?: number[];
  /**
   * @remarks
   * Indicates whether to independently set the percentage for each path.
   * 
   * @example
   * true
   */
  routeIndependentPercentageEnable?: string;
  /**
   * @remarks
   * The list of routes and percentages.
   */
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
   * Indicates whether the lane is enabled.
   * 
   * @example
   * true
   */
  enable?: string;
  /**
   * @remarks
   * The list of rules for the ingress application.
   */
  entryRules?: QueryAllSwimmingLaneResponseBodyDataEntryRules[];
  /**
   * @remarks
   * The information about the gateway route. This parameter is used when a cloud-native gateway or an API Gateway instance is used as the ingress.
   */
  gatewaySwimmingLaneRoute?: QueryAllSwimmingLaneResponseBodyDataGatewaySwimmingLaneRoute;
  /**
   * @remarks
   * The information about the gateway. This parameter is used when an MSE cloud-native gateway or a cloud-native API Gateway instance is used as the ingress.
   * 
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
   * The lane ID.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The side on which canary release for messages is implemented.
   * 
   * @example
   * Client
   */
  messageQueueFilterSide?: string;
  /**
   * @remarks
   * Indicates whether canary release for messages is enabled.
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
   * The MSE namespace to which the lane belongs.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * Indicates whether to set the percentage for each path.
   * 
   * @example
   * true
   */
  pathIndependentPercentageEnable?: boolean;
  /**
   * @remarks
   * Indicates whether to record the request details. This is for the observability of end-to-end canary releases.
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
   * The ID of the user to which the lane belongs.
   * 
   * @example
   * 12345
   */
  userId?: string;
  /**
   * @remarks
   * Indicates whether rules are enabled.
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
   * The time when the lane was last updated.
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
   * Data Overview.
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
   * Success
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC34E4A3-5F1C-4E40-86EA-02EDF967****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
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

