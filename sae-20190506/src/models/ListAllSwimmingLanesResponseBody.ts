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
   * The parameter type.
   * 
   * @example
   * Header
   */
  type?: string;
  /**
   * @remarks
   * The matching value of the condition.
   * 
   * @example
   * g1
   */
  value?: string;
  /**
   * @remarks
   * The matching value of the condition.
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
   * The logical connector between conditions. Valid values:
   * 
   * - AND: All conditions must be met.
   * - OR: Any condition must be met.
   * 
   * @example
   * AND
   */
  conditionJoiner?: string;
  /**
   * @remarks
   * The matching conditions.
   */
  conditions?: ListAllSwimmingLanesResponseBodyDataAppEntryRuleConditions[];
  /**
   * @remarks
   * Indicates whether proportion-based canary release is enabled.
   * 
   * @example
   * true
   */
  independentPercentageEnable?: boolean;
  /**
   * @remarks
   * The URI of the request.
   */
  paths?: string[];
  /**
   * @remarks
   * The traffic proportion used for proportion-based routing. Valid values: 0 to 100.
   * 
   * @example
   * 50
   */
  percentage?: number;
  /**
   * @remarks
   * The traffic matching.
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
   * The application ID.
   * 
   * @example
   * 8ea0c468-8165-416d-beae-531abb******
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The MSE instance ID.
   * 
   * @example
   * mse-cn-53y49******
   */
  mseAppId?: string;
  /**
   * @remarks
   * The MSE instance name.
   * 
   * @example
   * sae-test
   */
  mseAppName?: string;
  /**
   * @remarks
   * The ID of the namespace where the MSE instance resides.
   * 
   * @example
   * sae-ent
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
   * The parameter type.
   * 
   * @example
   * Header
   */
  type?: string;
  /**
   * @remarks
   * The matching value of the condition.
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
   * The route name.
   * 
   * @example
   * demo
   */
  routeName?: string;
  /**
   * @remarks
   * The route rule.
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
   * The matching conditions.
   */
  conditions?: ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRuleConditions[];
  /**
   * @remarks
   * Indicates whether proportion-based canary release is enabled.
   * 
   * @example
   * true
   */
  independentPercentageEnable?: boolean;
  /**
   * @remarks
   * The path traffic proportion.
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
   * The detailed configuration of the route rule.
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
   * The application entry rule.
   */
  appEntryRule?: ListAllSwimmingLanesResponseBodyDataAppEntryRule;
  /**
   * @remarks
   * The associated applications.
   */
  apps?: ListAllSwimmingLanesResponseBodyDataApps[];
  /**
   * @remarks
   * The end-to-end canary release mode. Valid values:
   * 
   * 
   * - 0: Routes traffic based on request content.
   * 
   * - 1: Routes traffic based on proportion.
   * 
   * @example
   * 0
   */
  canaryModel?: number;
  /**
   * @remarks
   * The traffic lane status. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
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
   * The traffic lane ID.
   * 
   * @example
   * 16401
   */
  laneId?: number;
  /**
   * @remarks
   * The traffic lane group name.
   * 
   * @example
   * test
   */
  laneName?: string;
  /**
   * @remarks
   * The traffic lane tag.
   * 
   * @example
   * g1
   */
  laneTag?: string;
  /**
   * @remarks
   * The MSE gateway route.
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
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: Success.
   * - **3xx**: Redirection.
   * - **4xx**: Client error.
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: ListAllSwimmingLanesResponseBodyData[];
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * InvalidParameter.NotEmpty
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. Valid values:
   * 
   * - If the request is successful, **success** is returned.
   * - If the request fails, a specific error code is returned.
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
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The restart is successful.
   * - **false**: The restart fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to query invocation details.
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

