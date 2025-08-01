// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RulesValueRulesSpringcloudRestItems extends $dara.Model {
  datum?: string;
  operator?: string;
  nameList?: string[];
  cond?: string;
  divisor?: number;
  remainder?: number;
  /**
   * @example
   * 20
   */
  rate?: number;
  type?: string;
  name?: string;
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
  condition?: string;
  restItems?: RulesValueRulesSpringcloudRestItems[];
  triggerPolicy?: string;
  enable?: boolean;
  appId?: string;
  priority?: number;
  tags?: string[];
  paths?: string[];
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
  operator?: string;
  nameList?: string[];
  datum?: string;
  cond?: string;
  divisor?: number;
  remainder?: number;
  rate?: number;
  index?: number;
  expr?: string;
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
  appId?: string;
  tags?: string[];
  triggerPolicy?: string;
  serviceName?: string;
  group?: string;
  version?: string;
  methodName?: string;
  paramTypes?: string[];
  /**
   * @example
   * AND
   */
  condition?: string;
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
  springcloud?: RulesValueRulesSpringcloud[];
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
  status?: number;
  rate?: number;
  enable?: boolean;
  tag?: string;
  /**
   * @example
   * gray
   */
  name?: string;
  id?: number;
  instanceNum?: number;
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

