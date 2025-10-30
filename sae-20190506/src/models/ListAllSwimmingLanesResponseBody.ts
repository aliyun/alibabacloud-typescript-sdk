// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllSwimmingLanesResponseBodyDataAppEntryRuleConditions extends $dara.Model {
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
   * The match value.
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

export class ListAllSwimmingLanesResponseBodyDataAppEntryRule extends $dara.Model {
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
  conditions?: ListAllSwimmingLanesResponseBodyDataAppEntryRuleConditions[];
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
      conditions: { 'type': 'array', 'itemType': ListAllSwimmingLanesResponseBodyDataAppEntryRuleConditions },
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

export class ListAllSwimmingLanesResponseBodyDataApps extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 8ea0c468-8165-416d-beae-531abb******
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
   * The ID of the namespace to which the MSE instance belongs.
   * 
   * @example
   * space
   */
  mseNamespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      mseAppId: 'MseAppId',
      mseAppName: 'MseAppName',
      mseNamespaceId: 'MseNamespaceId',
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

export class ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRuleConditions extends $dara.Model {
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

export class ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRuleRoutesRoutePredicatePathPredicate extends $dara.Model {
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
      path: 'path',
      type: 'type',
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

export class ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRuleRoutesRoutePredicate extends $dara.Model {
  /**
   * @remarks
   * The path matching rule.
   */
  pathPredicate?: ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRuleRoutesRoutePredicatePathPredicate;
  static names(): { [key: string]: string } {
    return {
      pathPredicate: 'PathPredicate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pathPredicate: ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRuleRoutesRoutePredicatePathPredicate,
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

export class ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRuleRoutes extends $dara.Model {
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
  routePredicate?: ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRuleRoutesRoutePredicate;
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
      routePredicate: ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRuleRoutesRoutePredicate,
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

export class ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRule extends $dara.Model {
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
  conditions?: ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRuleConditions[];
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
   * The IDs of the route tables.
   */
  routeIds?: number[];
  /**
   * @remarks
   * The detailed configuration of the routing rule.
   */
  routes?: ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRuleRoutes[];
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
      conditions: { 'type': 'array', 'itemType': ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRuleConditions },
      independentPercentageEnable: 'boolean',
      percentage: 'number',
      percentageByRoute: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      routeIds: { 'type': 'array', 'itemType': 'number' },
      routes: { 'type': 'array', 'itemType': ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRuleRoutes },
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

export class ListAllSwimmingLanesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Apply ingress rules.
   */
  appEntryRule?: ListAllSwimmingLanesResponseBodyDataAppEntryRule;
  /**
   * @remarks
   * The associated application.
   */
  apps?: ListAllSwimmingLanesResponseBodyDataApps[];
  /**
   * @remarks
   * Full-link Grayscale Mode:
   * 
   * *   0: The request is routed based on the content of the request.
   * *   1: Proportional routing
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
   * 16401
   */
  laneId?: number;
  /**
   * @remarks
   * The name of the lane group.
   * 
   * @example
   * test
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
   * MSE gateway routing
   */
  mseGatewayEntryRule?: ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRule;
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
      appEntryRule: ListAllSwimmingLanesResponseBodyDataAppEntryRule,
      apps: { 'type': 'array', 'itemType': ListAllSwimmingLanesResponseBodyDataApps },
      canaryModel: 'number',
      enable: 'boolean',
      enableRules: 'boolean',
      laneId: 'number',
      laneName: 'string',
      laneTag: 'string',
      mseGatewayEntryRule: ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRule,
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

export class ListAllSwimmingLanesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The interface status or POP error code. Valid values:
   * 
   * *   **2xx**: The request was successful.
   * *   **3xx**: Redirection.
   * *   **4xx**: Request error.
   * *   **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The output parameters of the node.
   */
  data?: ListAllSwimmingLanesResponseBodyData[];
  /**
   * @remarks
   * Error code. Valid values:
   * 
   * *   If the request is successful, no **ErrorCode** fields are returned.
   * *   Request failed: **ErrorCode** fields are returned. For more information, see **Error codes**.
   */
  errorCode?: string;
  /**
   * @remarks
   * Additional information. Valid values:
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
   * B4D805CA-926D-41B1-8E63-7AD0C1ED****
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the data is successful. Valid values:
   * 
   * *   **true**: The application instances were restarted.
   * *   **false**: Restart failed.
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
      data: { 'type': 'array', 'itemType': ListAllSwimmingLanesResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
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

