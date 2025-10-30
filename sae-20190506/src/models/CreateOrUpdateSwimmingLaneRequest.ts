// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneRequestAppEntryRuleConditions extends $dara.Model {
  /**
   * @remarks
   * Matching Rule:
   * 
   * *   The exact match. The condition is met if the traffic value and the condition value are exactly the same.
   * *   The exact match. The condition is met if the traffic value and the condition value are exactly the same.
   * *   The inclusive match. The condition is met if the traffic value is included in the specified list.
   * *   The percentage match. Principle: The condition is met if \\"hash(get(`key`)) % 100 < value\\".
   * *   Regular match: a regular expression match. The condition is met when the match is based on regular expression rules.
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
   * The parameter type. Valid values:
   * 
   * *   header
   * *   param
   * *   Cookie: forwards requests based on cookies.
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

export class CreateOrUpdateSwimmingLaneRequestAppEntryRule extends $dara.Model {
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
   * The conditions that trigger circuit breaking.
   */
  conditions?: CreateOrUpdateSwimmingLaneRequestAppEntryRuleConditions[];
  /**
   * @remarks
   * Whether to enable proportional grayscale.
   * 
   * *   true: enabled. After you enable this parameter, you must configure the PercentageByPath.
   * *   false: disables the service.
   * 
   * @example
   * true
   */
  independentPercentageEnable?: boolean;
  /**
   * @remarks
   * The matched request path.
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
   * The traffic configuration.
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
      conditions: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneRequestAppEntryRuleConditions },
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

export class CreateOrUpdateSwimmingLaneRequestMseGatewayEntryRuleConditions extends $dara.Model {
  /**
   * @remarks
   * The matching rule.
   * 
   * *   \\==: exact match.
   * *   ! =: exact match.
   * *   in: contains matches.
   * *   Percentage: Percentage matching.
   * *   Regular matching: specifies whether a regular expression is used to search for the original string.
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
   * test
   */
  name?: string;
  /**
   * @remarks
   * The parameter type. Valid values:
   * 
   * *   header
   * *   param
   * *   Cookie: forwards requests based on cookies.
   * 
   * @example
   * header
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

export class CreateOrUpdateSwimmingLaneRequestMseGatewayEntryRule extends $dara.Model {
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
   * Routing Condition
   */
  conditions?: CreateOrUpdateSwimmingLaneRequestMseGatewayEntryRuleConditions[];
  /**
   * @remarks
   * Whether to enable proportional grayscale.
   * 
   * *   true: Enabled. After you enable this parameter, you must configure the PercentageByPath.
   * *   false: Disabled.
   * 
   * @example
   * true
   */
  independentPercentageEnable?: boolean;
  /**
   * @remarks
   * The percentage of traffic replication. Valid values: 0 to 100.
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
   * The ID of the route.
   */
  routeIds?: number[];
  static names(): { [key: string]: string } {
    return {
      conditionJoiner: 'ConditionJoiner',
      conditions: 'Conditions',
      independentPercentageEnable: 'IndependentPercentageEnable',
      percentage: 'Percentage',
      percentageByRoute: 'PercentageByRoute',
      routeIds: 'RouteIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionJoiner: 'string',
      conditions: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneRequestMseGatewayEntryRuleConditions },
      independentPercentageEnable: 'boolean',
      percentage: 'number',
      percentageByRoute: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      routeIds: { 'type': 'array', 'itemType': 'number' },
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneRequest extends $dara.Model {
  /**
   * @remarks
   * The route configuration of the gateway.
   * 
   * >  This parameter is required if the gateway entry of the lane group is Java.
   */
  appEntryRule?: CreateOrUpdateSwimmingLaneRequestAppEntryRule;
  /**
   * @remarks
   * Full-link Grayscale Mode:
   * 
   * *   0: The request is routed based on the content of the request.
   * *   1: routing based on percentages
   * 
   * @example
   * 0
   */
  canaryModel?: number;
  /**
   * @remarks
   * Lane Status
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
   * The ID of the lane group to which the lane belongs.
   * 
   * @example
   * b2a8a925-477a-eswa-b823-d5e22500****
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the lane.
   * 
   * @example
   * 13857
   */
  laneId?: number;
  /**
   * @remarks
   * The name of the lane.
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
   * The route configuration of the MSE gateway.
   * 
   * >  If the **EntryAppType** is set to **apig** or **mse-gw**, it is required.
   */
  mseGatewayEntryRule?: CreateOrUpdateSwimmingLaneRequestMseGatewayEntryRule;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appEntryRule: 'AppEntryRule',
      canaryModel: 'CanaryModel',
      enable: 'Enable',
      groupId: 'GroupId',
      laneId: 'LaneId',
      laneName: 'LaneName',
      laneTag: 'LaneTag',
      mseGatewayEntryRule: 'MseGatewayEntryRule',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEntryRule: CreateOrUpdateSwimmingLaneRequestAppEntryRule,
      canaryModel: 'number',
      enable: 'boolean',
      groupId: 'number',
      laneId: 'number',
      laneName: 'string',
      laneTag: 'string',
      mseGatewayEntryRule: CreateOrUpdateSwimmingLaneRequestMseGatewayEntryRule,
      namespaceId: 'string',
    };
  }

  validate() {
    if(this.appEntryRule && typeof (this.appEntryRule as any).validate === 'function') {
      (this.appEntryRule as any).validate();
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

