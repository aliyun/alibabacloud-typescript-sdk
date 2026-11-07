// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RulesValueRulesSpringcloudRestItems extends $dara.Model {
  /**
   * @remarks
   * The value to be compared for operators such as rawvalue.
   * 
   * @example
   * 10
   */
  datum?: string;
  /**
   * @remarks
   * The operator. A value of rawvalue indicates direct comparison. A value of mode indicates a modulo operation. A value of list indicates a whitelist.
   * 
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @remarks
   * The field required for the list operator.
   */
  nameList?: string[];
  /**
   * @remarks
   * The comparison operator. Valid values: >=, <=, >, <, and ==.
   * 
   * @example
   * ==
   */
  cond?: string;
  /**
   * @remarks
   * The divisor field required for the mod operator.
   * 
   * @example
   * 30
   */
  divisor?: number;
  /**
   * @remarks
   * The percentage value field required for the percentage operation.
   * 
   * @example
   * 30
   */
  remainder?: number;
  /**
   * @remarks
   * The proportion rule. For example, 20% indicates that 20% of the traffic is routed to the node corresponding to the tag.
   * 
   * @example
   * 20
   */
  rate?: number;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * test
   */
  type?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * key
   */
  name?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * test
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      datum: 'datum',
      operator: 'operator',
      nameList: 'nameList',
      cond: 'cond',
      divisor: 'divisor',
      remainder: 'remainder',
      rate: 'rate',
      type: 'type',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datum: 'string',
      operator: 'string',
      nameList: { 'type': 'array', 'itemType': 'string' },
      cond: 'string',
      divisor: 'number',
      remainder: 'number',
      rate: 'number',
      type: 'string',
      name: 'string',
      value: 'any',
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

export class RulesValueRulesSpringcloud extends $dara.Model {
  /**
   * @remarks
   * The logical operator used between the following items. Valid values: AND and OR.
   * 
   * @example
   * AND
   */
  condition?: string;
  /**
   * @remarks
   * The list of matching conditions for REST requests.
   */
  restItems?: RulesValueRulesSpringcloudRestItems[];
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * CONTENT
   */
  triggerPolicy?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * ***@***
   */
  appId?: string;
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
   * The list of tags.
   */
  tags?: string[];
  /**
   * @remarks
   * The list of paths.
   */
  paths?: string[];
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /hello
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      restItems: 'restItems',
      triggerPolicy: 'triggerPolicy',
      enable: 'enable',
      appId: 'appId',
      priority: 'priority',
      tags: 'tags',
      paths: 'paths',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      restItems: { 'type': 'array', 'itemType': RulesValueRulesSpringcloudRestItems },
      triggerPolicy: 'string',
      enable: 'boolean',
      appId: 'string',
      priority: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
      paths: { 'type': 'array', 'itemType': 'string' },
      path: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.restItems)) {
      $dara.Model.validateArray(this.restItems);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RulesValueRulesDubboArgumentItems extends $dara.Model {
  /**
   * @remarks
   * The operator. A value of rawvalue indicates direct comparison. A value of mode indicates a modulo operation. A value of list indicates a whitelist.
   * 
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @remarks
   * The list of names.
   */
  nameList?: string[];
  /**
   * @remarks
   * The value to be compared for operators such as rawvalue.
   * 
   * @example
   * 30
   */
  datum?: string;
  /**
   * @remarks
   * The comparison operator. Valid values: >=, <=, >, <, and ==.
   * 
   * @example
   * ==
   */
  cond?: string;
  /**
   * @remarks
   * The divisor field required for the mod operator.
   * 
   * @example
   * 30
   */
  divisor?: number;
  /**
   * @remarks
   * The percentage value field required for the percentage operation.
   * 
   * @example
   * 30
   */
  remainder?: number;
  /**
   * @remarks
   * The proportion rule. For example, 20% indicates that 20% of the traffic is routed to the node corresponding to the tag.
   * 
   * @example
   * 10
   */
  rate?: number;
  /**
   * @remarks
   * The position of the parameter, starting from 0.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * The expression. See other field descriptions for details.
   */
  expr?: string;
  /**
   * @remarks
   * The value to compare. The value obtained from the expression is compared with this value. If the operator is a list whitelist, separate values with commas (,), such as 1,2,3.
   * 
   * @example
   * 1,2,3
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      operator: 'operator',
      nameList: 'nameList',
      datum: 'datum',
      cond: 'cond',
      divisor: 'divisor',
      remainder: 'remainder',
      rate: 'rate',
      index: 'index',
      expr: 'expr',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      nameList: { 'type': 'array', 'itemType': 'string' },
      datum: 'string',
      cond: 'string',
      divisor: 'number',
      remainder: 'number',
      rate: 'number',
      index: 'number',
      expr: 'string',
      value: 'any',
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

export class RulesValueRulesDubbo extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * ***@***
   */
  appId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: string[];
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * CONTENT
   */
  triggerPolicy?: string;
  /**
   * @remarks
   * The service name (interface).
   * 
   * @example
   * HelloService
   */
  serviceName?: string;
  /**
   * @remarks
   * The Dubbo service group.
   * 
   * @example
   * default
   */
  group?: string;
  /**
   * @remarks
   * The Dubbo service version.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The method name of the Dubbo service.
   * 
   * @example
   * hello
   */
  methodName?: string;
  /**
   * @remarks
   * The list of parameter types.
   */
  paramTypes?: string[];
  /**
   * @remarks
   * The logical operator used between the following items. Valid values: AND and OR.
   * 
   * @example
   * AND
   */
  condition?: string;
  /**
   * @remarks
   * The list of parameter content.
   */
  argumentItems?: RulesValueRulesDubboArgumentItems[];
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      tags: 'tags',
      triggerPolicy: 'triggerPolicy',
      serviceName: 'serviceName',
      group: 'group',
      version: 'version',
      methodName: 'methodName',
      paramTypes: 'paramTypes',
      condition: 'condition',
      argumentItems: 'argumentItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      triggerPolicy: 'string',
      serviceName: 'string',
      group: 'string',
      version: 'string',
      methodName: 'string',
      paramTypes: { 'type': 'array', 'itemType': 'string' },
      condition: 'string',
      argumentItems: { 'type': 'array', 'itemType': RulesValueRulesDubboArgumentItems },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.paramTypes)) {
      $dara.Model.validateArray(this.paramTypes);
    }
    if(Array.isArray(this.argumentItems)) {
      $dara.Model.validateArray(this.argumentItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RulesValueRules extends $dara.Model {
  /**
   * @remarks
   * The Spring Cloud rules.
   */
  springcloud?: RulesValueRulesSpringcloud[];
  /**
   * @remarks
   * The Dubbo rules.
   */
  dubbo?: RulesValueRulesDubbo[];
  static names(): { [key: string]: string } {
    return {
      springcloud: 'springcloud',
      dubbo: 'dubbo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      springcloud: { 'type': 'array', 'itemType': RulesValueRulesSpringcloud },
      dubbo: { 'type': 'array', 'itemType': RulesValueRulesDubbo },
    };
  }

  validate() {
    if(Array.isArray(this.springcloud)) {
      $dara.Model.validateArray(this.springcloud);
    }
    if(Array.isArray(this.dubbo)) {
      $dara.Model.validateArray(this.dubbo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RulesValue extends $dara.Model {
  /**
   * @remarks
   * The status.
   * 
   * @example
   * 0
   */
  status?: number;
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
   * Specifies whether the rule is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The environment of this routing rule.
   * 
   * @example
   * gray
   */
  tag?: string;
  /**
   * @remarks
   * The name of the routing rule.
   * 
   * @example
   * gray
   */
  name?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 10
   */
  instanceNum?: number;
  /**
   * @remarks
   * The rule information.
   */
  rules?: RulesValueRules;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      rate: 'Rate',
      enable: 'Enable',
      tag: 'Tag',
      name: 'Name',
      id: 'Id',
      instanceNum: 'InstanceNum',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      rate: 'number',
      enable: 'boolean',
      tag: 'string',
      name: 'string',
      id: 'number',
      instanceNum: 'number',
      rules: RulesValueRules,
    };
  }

  validate() {
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

