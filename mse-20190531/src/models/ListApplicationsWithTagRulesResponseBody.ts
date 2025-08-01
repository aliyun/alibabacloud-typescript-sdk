// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesDubboArgumentItems extends $dara.Model {
  cond?: string;
  datum?: string;
  divisor?: number;
  expr?: string;
  index?: number;
  nameList?: string[];
  operator?: string;
  rate?: number;
  remainder?: number;
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
  appId?: string;
  argumentItems?: ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesDubboArgumentItems[];
  condition?: string;
  group?: string;
  methodName?: string;
  paramTypes?: string[];
  serviceName?: string;
  tags?: string[];
  triggerPolicy?: string;
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
  cond?: string;
  datum?: string;
  divisor?: number;
  name?: string;
  nameList?: string[];
  operator?: string;
  rate?: number;
  remainder?: number;
  type?: string;
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
  appId?: string;
  condition?: string;
  enable?: boolean;
  path?: string;
  paths?: string[];
  priority?: number;
  restItems?: ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesSpringcloudRestItems[];
  tags?: string[];
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
  dubbo?: ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesDubbo[];
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
   * Indicates whether the alert rule is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
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
   * The rate.
   * 
   * @example
   * 10
   */
  rate?: number;
  /**
   * @remarks
   * The details of the routing rule.
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
   * The application ID.
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
   * The queried rules.
   */
  routeRules?: ListApplicationsWithTagRulesResponseBodyDataResultRouteRules[];
  /**
   * @remarks
   * The route state. Valid values:
   * 
   * *   0: disabled
   * *   1: enabled
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned data.
   */
  result?: ListApplicationsWithTagRulesResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of entries returned.
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
   * The response parameters.
   */
  data?: ListApplicationsWithTagRulesResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * *   If the request is successful, a success message is returned.
   * *   If the request fails, an error message is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7466566F-F30F-4A29-965D-3E0AF21D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
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

