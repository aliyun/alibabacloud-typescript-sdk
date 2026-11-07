// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneRequestEntryRulesRestItems extends $dara.Model {
  /**
   * @remarks
   * The match operator.
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
   * x-mse-tag
   */
  name?: string;
  /**
   * @remarks
   * The list of matching items.
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
   * The match type.
   * 
   * @example
   * header
   */
  type?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * gray
   */
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
   * @remarks
   * Specifies how RestItems are combined to form the final condition.
   * 
   * @example
   * AND
   */
  condition?: string;
  /**
   * @remarks
   * The list of paths.
   */
  paths?: string[];
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The list of matching items.
   */
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
   * If you use the legacy version of end-to-end canary release (swimversion is 0, which uses tag-based routing and canary routing), the following values are supported:
   * - PRE: prefix match
   * - ERGULAR: regular expression match
   * - EQUAL: exact match
   * 
   * If you use the new version of end-to-end canary release (swimversion is 1 or 2, which uses single-service routing), the following values are supported:
   * - PRE: prefix match
   * - regexp: regular expression match
   * - ==: equal to
   * - !=: not equal to
   * - list: in
   * - %: percentage
   * 
   * The new version of end-to-end canary release provides the same features as the legacy version but delivers better performance and simpler configuration. Migrate to the new version of end-to-end canary release.
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
   * - header: header
   * - param: parameter
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
  /**
   * @remarks
   * The traffic percentage. This parameter is used for percentage-based routing. Valid values: 0 to 100.
   * 
   * @example
   * 50
   */
  percentage?: number;
  /**
   * @remarks
   * The route ID.
   * 
   * @example
   * 111
   */
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
   * @remarks
   * The end-to-end canary release mode. Valid values:
   * 
   * - 0: route by request content
   * 
   * - 1: route by percentage
   * 
   * @example
   * 0
   */
  canaryModel?: number;
  /**
   * @remarks
   * The canary release condition. Valid values: AND (all conditions must be met) and OR (any condition must be met).
   * 
   * @example
   * AND
   */
  condition?: string;
  /**
   * @remarks
   * The list of matching conditions.
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
   * @remarks
   * The traffic percentage. This parameter is used for percentage-based routing. Valid values: 0 to 100.
   * 
   * @example
   * 30
   */
  percentage?: number;
  /**
   * @remarks
   * The list of route IDs.
   */
  routeIdList?: number[];
  /**
   * @remarks
   * **[Deprecated]** This parameter is used to specify the percentage-based routing setting by route when an MSE cloud-native gateway is used as the ingress.
   */
  routeIndependentPercentageEnable?: boolean;
  /**
   * @remarks
   * **[Deprecated]** The list of routes for independent percentage-based canary releases by route.
   */
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
   * The language in which the results are returned. Valid values: zh (Chinese, default) and en (English).
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Specifies whether the lane is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Specifies whether to configure routing rules for the lane. Configuration is not required if the ingress is a gateway.
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
   * [{"Priority":1,"Paths":[],"Condition":"AND","RestItems":[{"Type":"param","Name":"name","Value":"xiaoming","Cond":"==","Operator":"rawvalue"}]}]
   * 
   * @deprecated
   */
  entryRule?: string;
  /**
   * @remarks
   * The collection of lane rules.
   */
  entryRules?: CreateOrUpdateSwimmingLaneRequestEntryRules[];
  /**
   * @remarks
   * The gateway routing information. This parameter is used when a cloud-native gateway is used as the ingress.
   */
  gatewaySwimmingLaneRouteJson?: CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJson;
  /**
   * @remarks
   * The ID of the lane group to which the lane belongs.
   * 
   * @example
   * 115
   */
  groupId?: number;
  /**
   * @remarks
   * The primary key ID. A value of -1 indicates that a lane is created. A value greater than 0 indicates that a specified lane is updated.
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
   * gray
   */
  name?: string;
  /**
   * @remarks
   * The name of the MSE namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * **[Deprecated]** The Java gateway-related configuration for percentage-based routing by path.
   * 
   * @example
   * false
   */
  pathIndependentPercentageEnable?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The identifier.
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

