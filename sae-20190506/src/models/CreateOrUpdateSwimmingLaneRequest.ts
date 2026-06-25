// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneRequestAppEntryRuleConditions extends $dara.Model {
  /**
   * @remarks
   * The matching rule.
   * 
   * - `==`: Exact match. The attribute\\"s value must be identical to the value specified.
   * 
   * - `!=`: Negated exact match. The attribute\\"s value must not be identical to the value specified.
   * 
   * - `in`: Inclusion match. The attribute\\"s value must be present in the specified comma-separated list of values.
   * 
   * - `percentage`: Percentage-based match. The expression `hash(get(key)) % 100 < value` must be true.
   * 
   * - `regex`: Regular expression match. The attribute\\"s value must match the specified regular expression.
   * 
   * @example
   * ==
   */
  condition?: string;
  /**
   * @remarks
   * The name of the header, parameter, or cookie.
   * 
   * @example
   * t
   */
  name?: string;
  /**
   * @remarks
   * The type of the request attribute to match.
   * 
   * - `header`: A request header.
   * 
   * - `param`: A request parameter.
   * 
   * - `cookie`: A request cookie.
   * 
   * @example
   * Header
   */
  type?: string;
  /**
   * @remarks
   * The value to match against the request attribute.
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
   * The logical operator used to combine conditions.
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
  conditions?: CreateOrUpdateSwimmingLaneRequestAppEntryRuleConditions[];
  /**
   * @remarks
   * Specifies whether to enable percentage-based routing.
   * 
   * - `true`: Enables percentage-based routing. You must also configure the `PercentageByPath` parameter.
   * 
   * - `false`: Disables percentage-based routing.
   * 
   * @example
   * true
   */
  independentPercentageEnable?: boolean;
  /**
   * @remarks
   * The request paths to match.
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
   * An object that maps request paths to traffic percentages.
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
   * - `==`: Exact match. The attribute\\"s value must be identical to the value specified.
   * 
   * - `!=`: Negated exact match. The attribute\\"s value must not be identical to the value specified.
   * 
   * - `in`: Inclusion match. The attribute\\"s value must be present in the specified comma-separated list of values.
   * 
   * - `percentage`: Percentage-based match. The expression `hash(get(key)) % 100 < value` must be true.
   * 
   * - `regex`: Regular expression match. The attribute\\"s value must match the specified regular expression.
   * 
   * @example
   * ==
   */
  condition?: string;
  /**
   * @remarks
   * The name of the header, parameter, or cookie.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The type of the request attribute to match.
   * 
   * - `header`: A request header.
   * 
   * - `param`: A request parameter.
   * 
   * - `cookie`: A request cookie.
   * 
   * @example
   * header
   */
  type?: string;
  /**
   * @remarks
   * The value to match against the request attribute.
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
   * The logical operator used to combine conditions.
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
  conditions?: CreateOrUpdateSwimmingLaneRequestMseGatewayEntryRuleConditions[];
  /**
   * @remarks
   * Specifies whether to enable percentage-based routing.
   * 
   * - `true`: Enables percentage-based routing. You must also configure the `PercentageByRoute` parameter.
   * 
   * - `false`: Disables percentage-based routing.
   * 
   * @example
   * true
   */
  independentPercentageEnable?: boolean;
  /**
   * @remarks
   * The traffic mirroring percentage. Valid values: 0 to 100.
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
   * The configuration of the gateway route.
   * 
   * > This parameter is required if the gateway entry application for the swimlane group is a Java application.
   */
  appEntryRule?: CreateOrUpdateSwimmingLaneRequestAppEntryRule;
  /**
   * @remarks
   * The end-to-end canary release mode.
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
   * The status of the swimlane.
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
   * The ID of the swimlane group.
   * 
   * @example
   * b2a8a925-477a-eswa-b823-d5e22500****
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the swimlane.
   * 
   * @example
   * 13857
   */
  laneId?: number;
  /**
   * @remarks
   * The name of the swimlane.
   * 
   * @example
   * test
   */
  laneName?: string;
  /**
   * @remarks
   * The tag of the swimlane.
   * 
   * @example
   * g1
   */
  laneTag?: string;
  /**
   * @remarks
   * Configuration for the MSE gateway route.
   * 
   * > This parameter is required if the **EntryAppType** parameter is set to **apig** or **mse-gw**.
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

