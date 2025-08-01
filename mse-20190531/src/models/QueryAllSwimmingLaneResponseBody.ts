// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAllSwimmingLaneResponseBodyDataEntryRulesRestItems extends $dara.Model {
  cond?: string;
  datum?: string;
  divisor?: number;
  name?: string;
  nameList?: string[];
  operator?: string;
  rate?: number;
  remainder?: number;
  type?: string;
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
  condition?: string;
  path?: string;
  paths?: string[];
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
   * @example
   * PRE
   */
  cond?: string;
  /**
   * @example
   * name
   */
  name?: string;
  nameList?: string[];
  /**
   * @example
   * header
   */
  type?: string;
  /**
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
  percentage?: string;
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
   * @example
   * 0
   */
  canaryModel?: number;
  condition?: string;
  conditions?: QueryAllSwimmingLaneResponseBodyDataGatewaySwimmingLaneRouteConditions[];
  /**
   * @example
   * 1
   */
  gatewayId?: number;
  /**
   * @example
   * gw-84efde2ee1464260bdb17a5b****
   */
  gatewayUniqueId?: string;
  /**
   * @example
   * 20
   */
  percentage?: number;
  routeIdList?: number[];
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
   * @example
   * true
   */
  enable?: string;
  entryRules?: QueryAllSwimmingLaneResponseBodyDataEntryRules[];
  gatewaySwimmingLaneRoute?: QueryAllSwimmingLaneResponseBodyDataGatewaySwimmingLaneRoute;
  gatewaySwimmingLaneRouteJson?: string;
  groupId?: string;
  /**
   * @example
   * 123
   */
  id?: number;
  /**
   * @example
   * Client
   */
  messageQueueFilterSide?: string;
  messageQueueGrayEnable?: boolean;
  /**
   * @example
   * swimmingGroup
   */
  name?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  pathIndependentPercentageEnable?: boolean;
  recordCanaryDetail?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  tag?: string;
  /**
   * @example
   * 12345
   */
  userId?: string;
  enableRules?: boolean;
  gmtCreate?: string;
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

