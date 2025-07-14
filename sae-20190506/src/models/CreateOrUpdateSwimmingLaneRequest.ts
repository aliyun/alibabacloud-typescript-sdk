// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneRequestAppEntryRuleConditions extends $dara.Model {
  /**
   * @example
   * ==
   */
  condition?: string;
  /**
   * @example
   * t
   */
  name?: string;
  /**
   * @example
   * Header
   */
  type?: string;
  /**
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
   * @example
   * AND
   */
  conditionJoiner?: string;
  conditions?: CreateOrUpdateSwimmingLaneRequestAppEntryRuleConditions[];
  /**
   * @example
   * true
   */
  independentPercentageEnable?: boolean;
  paths?: string[];
  /**
   * @example
   * 50
   */
  percentage?: number;
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
   * @example
   * ==
   */
  condition?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * header
   */
  type?: string;
  /**
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
   * @example
   * AND
   */
  conditionJoiner?: string;
  conditions?: CreateOrUpdateSwimmingLaneRequestMseGatewayEntryRuleConditions[];
  /**
   * @example
   * true
   */
  independentPercentageEnable?: boolean;
  /**
   * @example
   * 100
   */
  percentage?: number;
  percentageByRoute?: { [key: string]: number };
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
  appEntryRule?: CreateOrUpdateSwimmingLaneRequestAppEntryRule;
  /**
   * @example
   * 0
   */
  canaryModel?: number;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * b2a8a925-477a-eswa-b823-d5e22500****
   */
  groupId?: number;
  /**
   * @example
   * 13857
   */
  laneId?: number;
  /**
   * @example
   * test
   */
  laneName?: string;
  /**
   * @example
   * {"alicloud.service.tag":"g1"}
   */
  laneTag?: string;
  mseGatewayEntryRule?: CreateOrUpdateSwimmingLaneRequestMseGatewayEntryRule;
  /**
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

