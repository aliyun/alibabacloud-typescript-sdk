// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesDubboArgumentItems extends $dara.Model {
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
   * The value to be compared for operators such as rawvalue.
   * 
   * @example
   * 30
   */
  datum?: string;
  /**
   * @remarks
   * The field required for the mod operator, which is the divisor.
   * 
   * @example
   * 30
   */
  divisor?: number;
  /**
   * @remarks
   * The expression. For more information, see the descriptions of other fields.
   */
  expr?: string;
  /**
   * @remarks
   * The parameter position, starting from 0.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * The list of names.
   */
  nameList?: string[];
  /**
   * @remarks
   * The operator. A value of rawvalue indicates direct comparison, mode indicates modulo operation, and list indicates a whitelist.
   * 
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @remarks
   * The proportion rule, where 20% of traffic is routed to the node corresponding to this tag.
   * 
   * @example
   * 10
   */
  rate?: number;
  /**
   * @remarks
   * The field required for the percentage operation, which is the percentage value.
   * 
   * @example
   * 30
   */
  remainder?: number;
  /**
   * @remarks
   * The value used for comparison. The value obtained from the expression is compared with this value. If the operator is a list whitelist, separate multiple values with commas (,), such as 1,2,3.
   * 
   * @example
   * 1,2,3
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'cond',
      datum: 'datum',
      divisor: 'divisor',
      expr: 'expr',
      index: 'index',
      nameList: 'nameList',
      operator: 'operator',
      rate: 'rate',
      remainder: 'remainder',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      datum: 'string',
      divisor: 'number',
      expr: 'string',
      index: 'number',
      nameList: { 'type': 'array', 'itemType': 'string' },
      operator: 'string',
      rate: 'number',
      remainder: 'number',
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

export class ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesDubbo extends $dara.Model {
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
   * The list of parameter arguments.
   */
  argumentItems?: ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesDubboArgumentItems[];
  /**
   * @remarks
   * The logical relationship among the following items. Valid values: AND and OR.
   * 
   * @example
   * AND
   */
  condition?: string;
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
   * The Dubbo service method name.
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
   * The service name (interface).
   * 
   * @example
   * HelloService
   */
  serviceName?: string;
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
   * The Dubbo service version.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      argumentItems: 'argumentItems',
      condition: 'condition',
      group: 'group',
      methodName: 'methodName',
      paramTypes: 'paramTypes',
      serviceName: 'serviceName',
      tags: 'tags',
      triggerPolicy: 'triggerPolicy',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      argumentItems: { 'type': 'array', 'itemType': ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesDubboArgumentItems },
      condition: 'string',
      group: 'string',
      methodName: 'string',
      paramTypes: { 'type': 'array', 'itemType': 'string' },
      serviceName: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      triggerPolicy: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.argumentItems)) {
      $dara.Model.validateArray(this.argumentItems);
    }
    if(Array.isArray(this.paramTypes)) {
      $dara.Model.validateArray(this.paramTypes);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesSpringcloudRestItems extends $dara.Model {
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
   * The value to be compared for operators such as rawvalue.
   * 
   * @example
   * 10
   */
  datum?: string;
  /**
   * @remarks
   * The field required for the mod operator, which is the divisor.
   * 
   * @example
   * 30
   */
  divisor?: number;
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
   * The field required for the list operator.
   */
  nameList?: string[];
  /**
   * @remarks
   * The operator. A value of rawvalue indicates direct comparison, mode indicates modulo operation, and list indicates a whitelist.
   * 
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @remarks
   * The proportion rule, where 20% of traffic is routed to the node corresponding to this tag.
   * 
   * @example
   * 20
   */
  rate?: number;
  /**
   * @remarks
   * The field required for the percentage operation, which is the percentage value.
   * 
   * @example
   * 30
   */
  remainder?: number;
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
   * The value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'cond',
      datum: 'datum',
      divisor: 'divisor',
      name: 'name',
      nameList: 'nameList',
      operator: 'operator',
      rate: 'rate',
      remainder: 'remainder',
      type: 'type',
      value: 'value',
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

export class ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesSpringcloud extends $dara.Model {
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
   * The logical relationship among the following items. Valid values: AND and OR.
   * 
   * @example
   * AND
   */
  condition?: string;
  /**
   * @remarks
   * Specifies whether the feature is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /hello
   */
  path?: string;
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
   * The list of matching conditions for REST requests.
   */
  restItems?: ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesSpringcloudRestItems[];
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
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      condition: 'condition',
      enable: 'enable',
      path: 'path',
      paths: 'paths',
      priority: 'priority',
      restItems: 'restItems',
      tags: 'tags',
      triggerPolicy: 'triggerPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      condition: 'string',
      enable: 'boolean',
      path: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      restItems: { 'type': 'array', 'itemType': ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesSpringcloudRestItems },
      tags: { 'type': 'array', 'itemType': 'string' },
      triggerPolicy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    if(Array.isArray(this.restItems)) {
      $dara.Model.validateArray(this.restItems);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRules extends $dara.Model {
  /**
   * @remarks
   * The Dubbo rule.
   */
  dubbo?: ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesDubbo[];
  /**
   * @remarks
   * The Spring Cloud rule.
   */
  springcloud?: ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesSpringcloud[];
  static names(): { [key: string]: string } {
    return {
      dubbo: 'dubbo',
      springcloud: 'springcloud',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubbo: { 'type': 'array', 'itemType': ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesDubbo },
      springcloud: { 'type': 'array', 'itemType': ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesSpringcloud },
    };
  }

  validate() {
    if(Array.isArray(this.dubbo)) {
      $dara.Model.validateArray(this.dubbo);
    }
    if(Array.isArray(this.springcloud)) {
      $dara.Model.validateArray(this.springcloud);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsWithTagRulesResponseBodyDataResultRouteRules extends $dara.Model {
  /**
   * @remarks
   * The enabling status of the alert rule. Valid values:
   * 
   * - `true`: Enabled.
   * - `false`: Disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 653
   */
  id?: number;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 1
   */
  instanceNum?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * dubbo
   */
  name?: string;
  /**
   * @remarks
   * The proportion.
   * 
   * @example
   * 10
   */
  rate?: number;
  /**
   * @remarks
   * The applicable routes of the rule.
   * 
   * @example
   * {
   *   	"dubbo": [{
   *     "serviceName": "com.taobao.hsf.common.DemoService",
   *     "group": "",
   *     "version": "",
   *     "methodName": "sayHello",
   *     "condition": "AND",
   *     "argumentItems": [{
   *     	"index": 0,
   *     	"expr": "",
   *     	"operator": "rawvalue",
   *     	"value": "jim",
   *     	"cond": "=="
   *     }]
   *   	}]
   *   }
   */
  rules?: ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRules;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * 1
   */
  status?: number;
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
      enable: 'Enable',
      id: 'Id',
      instanceNum: 'InstanceNum',
      name: 'Name',
      rate: 'Rate',
      rules: 'Rules',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      id: 'number',
      instanceNum: 'number',
      name: 'string',
      rate: 'number',
      rules: ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRules,
      status: 'number',
      tag: 'string',
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

export class ListApplicationsWithTagRulesResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * daqijp6c31@xxx
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * service-lottery-core
   */
  appName?: string;
  /**
   * @remarks
   * The MSE namespace to which the application belongs.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The list of rules.
   */
  routeRules?: ListApplicationsWithTagRulesResponseBodyDataResultRouteRules[];
  /**
   * @remarks
   * The routing status. Valid values:
   * 
   * - 0: Disabled.
   * 
   * - 1: Enabled.
   * 
   * @example
   * 1
   */
  routeStatus?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      namespace: 'Namespace',
      routeRules: 'RouteRules',
      routeStatus: 'RouteStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      namespace: 'string',
      routeRules: { 'type': 'array', 'itemType': ListApplicationsWithTagRulesResponseBodyDataResultRouteRules },
      routeStatus: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.routeRules)) {
      $dara.Model.validateArray(this.routeRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsWithTagRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The data structure.
   */
  result?: ListApplicationsWithTagRulesResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListApplicationsWithTagRulesResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsWithTagRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data overview.
   */
  data?: ListApplicationsWithTagRulesResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * - If the request is successful, a success message is returned.
   * - If the request fails, the cause of the failure is returned.
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
   * 7466566F-F30F-4A29-965D-3E0AF21D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - `true`: The request is successful.
   * - `false`: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListApplicationsWithTagRulesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

