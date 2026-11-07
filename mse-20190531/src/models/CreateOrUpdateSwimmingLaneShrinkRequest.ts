// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneShrinkRequestEntryRulesRestItems extends $dara.Model {
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

export class CreateOrUpdateSwimmingLaneShrinkRequestEntryRules extends $dara.Model {
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
  entryRules?: CreateOrUpdateSwimmingLaneShrinkRequestEntryRules[];
  /**
   * @remarks
   * The gateway routing information. This parameter is used when a cloud-native gateway is used as the ingress.
   */
  gatewaySwimmingLaneRouteJsonShrink?: string;
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

