// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSwimmingLaneResponseBodyDataAppEntryRuleConditions extends $dara.Model {
  /**
   * @remarks
   * The match operator.
   * 
   * @example
   * ==
   */
  condition?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * t
   */
  name?: string;
  /**
   * @remarks
   * The type of the parameter.
   * 
   * @example
   * Header
   */
  type?: string;
  /**
   * @remarks
   * The value to match.
   * 
   * @example
   * g1
   */
  value?: string;
  /**
   * @remarks
   * The values to match.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      name: 'Name',
      type: 'Type',
      value: 'Value',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      name: 'string',
      type: 'string',
      value: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSwimmingLaneResponseBodyDataAppEntryRule extends $dara.Model {
  /**
   * @remarks
   * The logical operator that joins conditions. Valid values:
   * 
   * - `AND`: All conditions must be met.
   * 
   * - `OR`: At least one of the conditions must be met.
   * 
   * @example
   * AND
   */
  conditionJoiner?: string;
  /**
   * @remarks
   * The match conditions.
   */
  conditions?: DescribeSwimmingLaneResponseBodyDataAppEntryRuleConditions[];
  /**
   * @remarks
   * Indicates whether percentage-based canary release is enabled.
   * 
   * @example
   * true
   */
  independentPercentageEnable?: boolean;
  /**
   * @remarks
   * The request paths.
   */
  paths?: string[];
  /**
   * @remarks
   * The traffic percentage for percentage-based routing. Valid values: 0 to 100.
   * 
   * @example
   * 50
   */
  percentage?: number;
  /**
   * @remarks
   * An object that maps paths to traffic percentages.
   */
  percentageByPath?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      conditionJoiner: 'ConditionJoiner',
      conditions: 'Conditions',
      independentPercentageEnable: 'IndependentPercentageEnable',
      paths: 'Paths',
      percentage: 'Percentage',
      percentageByPath: 'PercentageByPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionJoiner: 'string',
      conditions: { 'type': 'array', 'itemType': DescribeSwimmingLaneResponseBodyDataAppEntryRuleConditions },
      independentPercentageEnable: 'boolean',
      paths: { 'type': 'array', 'itemType': 'string' },
      percentage: 'number',
      percentageByPath: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    if(this.percentageByPath) {
      $dara.Model.validateMap(this.percentageByPath);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSwimmingLaneResponseBodyDataApps extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 6b4c0f64-f679-4580-8105-91eac4******
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the MSE instance.
   * 
   * @example
   * mse-cn-53y49******
   */
  mseAppId?: string;
  /**
   * @remarks
   * The name of the MSE instance.
   * 
   * @example
   * sae-test
   */
  mseAppName?: string;
  /**
   * @remarks
   * The ID of the MSE namespace.
   * 
   * @example
   * 6733e538-d52f-48e6-91a4-192f91******
   */
  mseNamespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      mseAppId: 'MseAppId',
      mseAppName: 'MseAppName',
      mseNamespaceId: 'mseNamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      mseAppId: 'string',
      mseAppName: 'string',
      mseNamespaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleConditions extends $dara.Model {
  /**
   * @remarks
   * The match operator.
   * 
   * @example
   * ==
   */
  condition?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * t
   */
  name?: string;
  /**
   * @remarks
   * The type of the parameter.
   * 
   * @example
   * Header
   */
  type?: string;
  /**
   * @remarks
   * The value to match.
   * 
   * @example
   * g1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
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

export class DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleRoutesRoutePredicatePathPredicate extends $dara.Model {
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /Path
   */
  path?: string;
  /**
   * @remarks
   * The match type.
   * 
   * @example
   * Header
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleRoutesRoutePredicate extends $dara.Model {
  /**
   * @remarks
   * The path-based match rule.
   */
  pathPredicate?: DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleRoutesRoutePredicatePathPredicate;
  static names(): { [key: string]: string } {
    return {
      pathPredicate: 'PathPredicate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pathPredicate: DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleRoutesRoutePredicatePathPredicate,
    };
  }

  validate() {
    if(this.pathPredicate && typeof (this.pathPredicate as any).validate === 'function') {
      (this.pathPredicate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleRoutes extends $dara.Model {
  /**
   * @remarks
   * The route ID.
   * 
   * @example
   * 9504
   */
  routeId?: number;
  /**
   * @remarks
   * The name of the route.
   * 
   * @example
   * demo
   */
  routeName?: string;
  /**
   * @remarks
   * The route predicate.
   */
  routePredicate?: DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleRoutesRoutePredicate;
  static names(): { [key: string]: string } {
    return {
      routeId: 'RouteId',
      routeName: 'RouteName',
      routePredicate: 'RoutePredicate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeId: 'number',
      routeName: 'string',
      routePredicate: DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleRoutesRoutePredicate,
    };
  }

  validate() {
    if(this.routePredicate && typeof (this.routePredicate as any).validate === 'function') {
      (this.routePredicate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRule extends $dara.Model {
  /**
   * @remarks
   * The logical operator that joins conditions.
   * 
   * @example
   * AND
   */
  conditionJoiner?: string;
  /**
   * @remarks
   * The match conditions.
   */
  conditions?: DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleConditions[];
  /**
   * @remarks
   * Indicates whether percentage-based canary release is enabled.
   * 
   * @example
   * true
   */
  independentPercentageEnable?: boolean;
  /**
   * @remarks
   * The traffic percentage for the rule.
   * 
   * @example
   * 100
   */
  percentage?: number;
  /**
   * @remarks
   * An object that maps route IDs to traffic percentages.
   */
  percentageByRoute?: { [key: string]: number };
  /**
   * @remarks
   * A list of route IDs.
   */
  routeIds?: number[];
  /**
   * @remarks
   * The route configurations.
   */
  routes?: DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleRoutes[];
  static names(): { [key: string]: string } {
    return {
      conditionJoiner: 'ConditionJoiner',
      conditions: 'Conditions',
      independentPercentageEnable: 'IndependentPercentageEnable',
      percentage: 'Percentage',
      percentageByRoute: 'PercentageByRoute',
      routeIds: 'RouteIds',
      routes: 'Routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionJoiner: 'string',
      conditions: { 'type': 'array', 'itemType': DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleConditions },
      independentPercentageEnable: 'boolean',
      percentage: 'number',
      percentageByRoute: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      routeIds: { 'type': 'array', 'itemType': 'number' },
      routes: { 'type': 'array', 'itemType': DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleRoutes },
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(this.percentageByRoute) {
      $dara.Model.validateMap(this.percentageByRoute);
    }
    if(Array.isArray(this.routeIds)) {
      $dara.Model.validateArray(this.routeIds);
    }
    if(Array.isArray(this.routes)) {
      $dara.Model.validateArray(this.routes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSwimmingLaneResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application entry rule.
   */
  appEntryRule?: DescribeSwimmingLaneResponseBodyDataAppEntryRule;
  /**
   * @remarks
   * A list of associated applications.
   */
  apps?: DescribeSwimmingLaneResponseBodyDataApps[];
  /**
   * @remarks
   * The mode for the end-to-end canary release. Valid values:
   * 
   * - `0`: content-based routing
   * 
   * - `1`: percentage-based routing
   * 
   * @example
   * 0
   */
  canaryModel?: number;
  /**
   * @remarks
   * Indicates whether the lane is enabled.
   * 
   * - `true`: enabled
   * 
   * - `false`: disabled
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Indicates whether traffic rules are enabled.
   * 
   * @example
   * true
   */
  enableRules?: boolean;
  /**
   * @remarks
   * The ID of the lane.
   * 
   * @example
   * 9488
   */
  laneId?: number;
  /**
   * @remarks
   * The name of the lane.
   * 
   * @example
   * mse-test
   */
  laneName?: string;
  /**
   * @remarks
   * The tag of the lane.
   * 
   * @example
   * {"alicloud.service.tag":"g1"}
   */
  laneTag?: string;
  /**
   * @remarks
   * The entry rule for the MSE Gateway.
   */
  mseGatewayEntryRule?: DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRule;
  static names(): { [key: string]: string } {
    return {
      appEntryRule: 'AppEntryRule',
      apps: 'Apps',
      canaryModel: 'CanaryModel',
      enable: 'Enable',
      enableRules: 'EnableRules',
      laneId: 'LaneId',
      laneName: 'LaneName',
      laneTag: 'LaneTag',
      mseGatewayEntryRule: 'MseGatewayEntryRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEntryRule: DescribeSwimmingLaneResponseBodyDataAppEntryRule,
      apps: { 'type': 'array', 'itemType': DescribeSwimmingLaneResponseBodyDataApps },
      canaryModel: 'number',
      enable: 'boolean',
      enableRules: 'boolean',
      laneId: 'number',
      laneName: 'string',
      laneTag: 'string',
      mseGatewayEntryRule: DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRule,
    };
  }

  validate() {
    if(this.appEntryRule && typeof (this.appEntryRule as any).validate === 'function') {
      (this.appEntryRule as any).validate();
    }
    if(Array.isArray(this.apps)) {
      $dara.Model.validateArray(this.apps);
    }
    if(this.mseGatewayEntryRule && typeof (this.mseGatewayEntryRule as any).validate === 'function') {
      (this.mseGatewayEntryRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSwimmingLaneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * - **2xx**: Success.
   * 
   * - **3xx**: Redirection.
   * 
   * - **4xx**: Client error.
   * 
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeSwimmingLaneResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is returned only if the request fails.
   * 
   * - For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned with the response.
   * 
   * - **success** is returned if the request is successful.
   * 
   * - An error code is returned if the request fails.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30375C38-F4ED-4135-A0AE-5C75DC7F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * - **true**: The query was successful.
   * 
   * - **false**: The query failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID. You can use this ID to query the details of a call.
   * 
   * @example
   * 0a98a02315955564772843261e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeSwimmingLaneResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
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

