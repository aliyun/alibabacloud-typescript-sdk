// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneRequestEntryRulesRestItems extends $dara.Model {
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
      cond: 'Cond',
      datum: 'Datum',
      divisor: 'Divisor',
      name: 'Name',
      nameList: 'NameList',
      operator: 'Operator',
      rate: 'Rate',
      remainder: 'Remainder',
      type: 'Type',
      value: 'Value',
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

export class CreateOrUpdateSwimmingLaneRequestEntryRules extends $dara.Model {
  /**
   * @example
   * AND
   */
  condition?: string;
  paths?: string[];
  priority?: number;
  restItems?: CreateOrUpdateSwimmingLaneRequestEntryRulesRestItems[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      paths: 'Paths',
      priority: 'Priority',
      restItems: 'RestItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      restItems: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneRequestEntryRulesRestItems },
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

export class CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJsonConditions extends $dara.Model {
  /**
   * @remarks
   * The matching condition. Valid values:
   * 
   * *   PRE: prefix matching
   * *   EQUAL: exact matching
   * *   ERGULAR: regular expression matching
   * 
   * @example
   * PRE
   */
  cond?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The type of the parameter. Valid values:
   * 
   * *   header
   * *   param
   * 
   * @example
   * header
   */
  type?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * xiaoming
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'Cond',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      name: 'string',
      type: 'string',
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

export class CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJsonRouteIndependentPercentageList extends $dara.Model {
  percentage?: number;
  routeId?: number;
  static names(): { [key: string]: string } {
    return {
      percentage: 'Percentage',
      routeId: 'RouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percentage: 'number',
      routeId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJson extends $dara.Model {
  /**
   * @example
   * 0
   */
  canaryModel?: number;
  condition?: string;
  /**
   * @remarks
   * The matching conditions.
   */
  conditions?: CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJsonConditions[];
  /**
   * @remarks
   * The ID of the gateway.
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
   * @example
   * 20
   */
  percentage?: number;
  /**
   * @remarks
   * The route IDs.
   */
  routeIdList?: number[];
  routeIndependentPercentageEnable?: boolean;
  routeIndependentPercentageList?: CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJsonRouteIndependentPercentageList[];
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
      conditions: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJsonConditions },
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      percentage: 'number',
      routeIdList: { 'type': 'array', 'itemType': 'number' },
      routeIndependentPercentageEnable: 'boolean',
      routeIndependentPercentageList: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJsonRouteIndependentPercentageList },
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

export class CreateOrUpdateSwimmingLaneRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: zh and en. Default value: zh. The value zh indicates Chinese, and the value en indicates English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Specifies whether to enable the lane.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Specifies whether to configure a routing rule for the lane. If an Ingress gateway is used, this parameter is not required.
   * 
   * @example
   * false
   */
  enableRules?: boolean;
  /**
   * @remarks
   * The JSON string.
   * 
   * @example
   * {}
   * 
   * @deprecated
   */
  entryRule?: string;
  entryRules?: CreateOrUpdateSwimmingLaneRequestEntryRules[];
  /**
   * @remarks
   * The information about the routing rule for the gateway. This parameter is required when a cloud-native gateway is used as the ingress.
   */
  gatewaySwimmingLaneRouteJson?: CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJson;
  /**
   * @remarks
   * The language of the response. Valid values:****
   * 
   * *   **zh-CN**: Chinese
   * *   **en-US**: English
   * 
   * > Default value: **zh-CN**.
   * 
   * @example
   * 115
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the primary key. The value -1 indicates a request that is used to create a lane. A value greater than 0 indicates a request that is used to modify a lane.
   * 
   * @example
   * -1
   */
  id?: number;
  /**
   * @remarks
   * The name of the lane.
   * 
   * This parameter is required.
   * 
   * @example
   * Test lane
   */
  name?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  pathIndependentPercentageEnable?: boolean;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * gray
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      enable: 'Enable',
      enableRules: 'EnableRules',
      entryRule: 'EntryRule',
      entryRules: 'EntryRules',
      gatewaySwimmingLaneRouteJson: 'GatewaySwimmingLaneRouteJson',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      namespace: 'Namespace',
      pathIndependentPercentageEnable: 'PathIndependentPercentageEnable',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      enable: 'boolean',
      enableRules: 'boolean',
      entryRule: 'string',
      entryRules: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneRequestEntryRules },
      gatewaySwimmingLaneRouteJson: CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJson,
      groupId: 'number',
      id: 'number',
      name: 'string',
      namespace: 'string',
      pathIndependentPercentageEnable: 'boolean',
      regionId: 'string',
      tag: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entryRules)) {
      $dara.Model.validateArray(this.entryRules);
    }
    if(this.gatewaySwimmingLaneRouteJson && typeof (this.gatewaySwimmingLaneRouteJson as any).validate === 'function') {
      (this.gatewaySwimmingLaneRouteJson as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

