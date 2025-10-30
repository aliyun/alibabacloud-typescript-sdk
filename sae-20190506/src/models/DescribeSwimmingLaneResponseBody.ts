// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSwimmingLaneResponseBodyDataAppEntryRuleConditions extends $dara.Model {
  /**
   * @remarks
   * The matching rule.
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
   * Parameter type.
   * 
   * @example
   * Header
   */
  type?: string;
  /**
   * @remarks
   * The match value of the condition.
   * 
   * @example
   * g1
   */
  value?: string;
  /**
   * @remarks
   * The match value of the condition.
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
   * Logical connectors between conditions:
   * 
   * *   AND: All conditions are met at the same time.
   * *   OR: Any condition is met.
   * 
   * @example
   * AND
   */
  conditionJoiner?: string;
  /**
   * @remarks
   * The matching condition.
   */
  conditions?: DescribeSwimmingLaneResponseBodyDataAppEntryRuleConditions[];
  /**
   * @remarks
   * Whether to enable proportional grayscale.
   * 
   * @example
   * true
   */
  independentPercentageEnable?: boolean;
  /**
   * @remarks
   * The request path.
   */
  paths?: string[];
  /**
   * @remarks
   * The traffic ratio. Valid values: 0 to 100.
   * 
   * @example
   * 50
   */
  percentage?: number;
  /**
   * @remarks
   * Traffic matching.
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
   * The matching rule.
   * 
   * @example
   * ==
   */
  condition?: string;
  /**
   * @remarks
   * The parameter name.
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
   * The match value of the condition.
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
   * The matching rule.
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
   * The path matching rule.
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
   * The routing rule.
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
   * The logical connector between conditions.
   * 
   * @example
   * AND
   */
  conditionJoiner?: string;
  /**
   * @remarks
   * The matching condition.
   */
  conditions?: DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleConditions[];
  /**
   * @remarks
   * Whether to enable proportional grayscale.
   * 
   * @example
   * true
   */
  independentPercentageEnable?: boolean;
  /**
   * @remarks
   * The proportion of path traffic.
   * 
   * @example
   * 100
   */
  percentage?: number;
  /**
   * @remarks
   * The traffic configuration.
   */
  percentageByRoute?: { [key: string]: number };
  /**
   * @remarks
   * The list of route IDs.
   */
  routeIds?: number[];
  /**
   * @remarks
   * The detailed configuration of the routing rule.
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
   * Apply ingress rules.
   */
  appEntryRule?: DescribeSwimmingLaneResponseBodyDataAppEntryRule;
  /**
   * @remarks
   * The apps.
   */
  apps?: DescribeSwimmingLaneResponseBodyDataApps[];
  /**
   * @remarks
   * The routing mode for end-to-end canary release.
   * 
   * *   0: routing based on request content
   * *   1: routing based on percentages
   * 
   * @example
   * 0
   */
  canaryModel?: number;
  /**
   * @remarks
   * Lane status:
   * 
   * *   true: enabled
   * *   false: disabled
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Whether the traffic rule is enabled.
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
   * The name of the lane group.
   * 
   * @example
   * mse-test
   */
  laneName?: string;
  /**
   * @remarks
   * The label of the lane.
   * 
   * @example
   * {"alicloud.service.tag":"g1"}
   */
  laneTag?: string;
  /**
   * @remarks
   * MSE gateway routes.
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
   * The HTTP status code or the error code. Valid values:
   * 
   * *   **2xx**: The request was successful.
   * *   **3xx**: The request was redirected.
   * *   **4xx**: The request failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Responses.
   */
  data?: DescribeSwimmingLaneResponseBodyData;
  /**
   * @remarks
   * The status code. Value values:
   * 
   * *   If the request was successful, **ErrorCode** is not returned.
   * *   If the request failed, **ErrorCode** is returned. For more information, see **Error codes** in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   The error message returned because the request is normal and **success** is returned.
   * *   If the request is abnormal, the specific exception error code is returned.
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
   * Indicates whether the request was successful. Valid values: Valid values:
   * 
   * *   **true**: The information was queried.
   * *   **false**: Query failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace. This parameter is used to query the exact call information.
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

