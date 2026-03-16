// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneShrinkRequestEntryRulesRestItems extends $dara.Model {
  /**
   * @remarks
   * The matching character.
   * 
   * @example
   * =
   */
  cond?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * .params[0]
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
   * ""
   */
  name?: string;
  /**
   * @remarks
   * The matching list.
   */
  nameList?: string[];
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * mod
   */
  operator?: string;
  /**
   * @remarks
   * The percentage.
   * 
   * @example
   * 10
   */
  rate?: number;
  /**
   * @remarks
   * The remainder.
   * 
   * @example
   * 3
   */
  remainder?: number;
  /**
   * @remarks
   * The matching type.
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
   * ""
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

export class CreateOrUpdateSwimmingLaneShrinkRequestEntryRules extends $dara.Model {
  /**
   * @remarks
   * Specifies how RESTful items are combined into the final condition.
   * 
   * @example
   * ""
   */
  condition?: string;
  /**
   * @remarks
   * The paths.
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
   * The matching list.
   */
  restItems?: CreateOrUpdateSwimmingLaneShrinkRequestEntryRulesRestItems[];
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
      restItems: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneShrinkRequestEntryRulesRestItems },
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

export class CreateOrUpdateSwimmingLaneShrinkRequest extends $dara.Model {
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
  /**
   * @remarks
   * The lane.
   */
  entryRules?: CreateOrUpdateSwimmingLaneShrinkRequestEntryRules[];
  /**
   * @remarks
   * The information about the routing rule for the gateway. This parameter is required when a cloud-native gateway is used as the ingress.
   */
  gatewaySwimmingLaneRouteJsonShrink?: string;
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
      gatewaySwimmingLaneRouteJsonShrink: 'GatewaySwimmingLaneRouteJson',
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
      entryRules: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneShrinkRequestEntryRules },
      gatewaySwimmingLaneRouteJsonShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

