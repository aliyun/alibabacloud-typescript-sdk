// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneRequestAppEntryRuleConditions extends $dara.Model {
  /**
   * @remarks
   * The matching rule. Valid values:
   * 
   * - ==: Exact match. The traffic value must be exactly equal to the condition value.
   * - !=: Exact match. The traffic value must be exactly equal to the condition value.
   * - in: Inclusion match. The condition is met when the traffic value is in the specified list.
   * - 百分比: Percentage match. The condition is met when `hash(get(key)) % 100 < value` evaluates to true.
   * - 正则匹配: Regular expression match. The condition is met when the value matches the regular expression.
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
   * - header: Header
   * - param: Parameter
   * 
   * - cookie: Cookie
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

export class CreateOrUpdateSwimmingLaneRequestAppEntryRule extends $dara.Model {
  /**
   * @remarks
   * The logical operator between conditions. Valid values:
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
  conditions?: CreateOrUpdateSwimmingLaneRequestAppEntryRuleConditions[];
  /**
   * @remarks
   * Specifies whether to enable proportion-based canary release. Valid values:
   * 
   * - true: Enabled. If enabled, you must configure PercentageByPath.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  independentPercentageEnable?: boolean;
  /**
   * @remarks
   * The matched URI of the request paths.
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
   * The matching rule. Valid values:
   * 
   * - ==: Exact match.
   * - !=: Exact match.
   * - in: Inclusion match.
   * - 百分比: Percentage match.
   * - 正则匹配: Regular expression match.
   * 
   * @example
   * ==
   */
  condition?: string;
  /**
   * @remarks
   * The name of the condition parameter.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The parameter type. Valid values:
   * 
   * - header: Header
   * 
   * - param: Parameter
   * 
   * - cookie: Cookie
   * 
   * @example
   * header
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

export class CreateOrUpdateSwimmingLaneRequestMseGatewayEntryRule extends $dara.Model {
  /**
   * @remarks
   * The logical operator between conditions. Valid values:
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
   * The routing conditions.
   */
  conditions?: CreateOrUpdateSwimmingLaneRequestMseGatewayEntryRuleConditions[];
  /**
   * @remarks
   * Specifies whether to enable proportion-based canary release. Valid values:
   * 
   * - true: Enabled. If enabled, you must configure PercentageByPath.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  independentPercentageEnable?: boolean;
  /**
   * @remarks
   * The traffic replication proportion (%). Valid values: 0 to 100.
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
   * The route IDs.
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
   * The gateway routing configuration.
   * 
   * > This parameter is required when the gateway entry of the traffic lane group is Java.
   */
  appEntryRule?: CreateOrUpdateSwimmingLaneRequestAppEntryRule;
  /**
   * @remarks
   * The end-to-end canary release mode. Valid values:
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
   * Specifies whether the traffic lane is enabled. Valid values:
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
   * The ID of the traffic lane group to which the traffic lane belongs.
   * 
   * @example
   * b2a8a925-477a-eswa-b823-d5e22500****
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the traffic lane.
   * 
   * @example
   * 13857
   */
  laneId?: number;
  /**
   * @remarks
   * The name of the traffic lane.
   * 
   * @example
   * test
   */
  laneName?: string;
  /**
   * @remarks
   * The tag of the traffic lane.
   * 
   * @example
   * g1
   */
  laneTag?: string;
  /**
   * @remarks
   * The MSE gateway routing configuration.
   * 
   * > This parameter is required when **EntryAppType** is set to **apig** or **mse-gw**.
   */
  mseGatewayEntryRule?: CreateOrUpdateSwimmingLaneRequestMseGatewayEntryRule;
  /**
   * @remarks
   * The ID of the namespace.
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

