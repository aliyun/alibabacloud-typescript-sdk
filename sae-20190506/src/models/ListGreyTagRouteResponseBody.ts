// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGreyTagRouteResponseBodyDataResultAlbRulesItems extends $dara.Model {
  /**
   * @remarks
   * The comparison operator. Currently, only **==** is supported.
   * 
   * @example
   * ==
   */
  cond?: string;
  /**
   * @remarks
   * Not required for ALB applications.
   * 
   * @example
   * N/A
   */
  expr?: string;
  /**
   * @remarks
   * Not required for ALB applications.
   * 
   * @example
   * N/A
   */
  index?: number;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The operator. Currently, only **rawvalue** (direct comparison) is supported.
   * 
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @remarks
   * The comparison type. Valid values:
   * 
   * - **sourceIp**: Source IP address.
   * - **cookie**: Cookie.
   * - **header**: Header.
   * 
   * @example
   * cookie
   */
  type?: string;
  /**
   * @remarks
   * The parameter value. The value obtained based on type and name is compared with this value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'cond',
      expr: 'expr',
      index: 'index',
      name: 'name',
      operator: 'operator',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      expr: 'string',
      index: 'number',
      name: 'string',
      operator: 'string',
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

export class ListGreyTagRouteResponseBodyDataResultAlbRules extends $dara.Model {
  /**
   * @remarks
   * The condition mode of the canary release rule. Currently, only **AND** is supported, which means all conditions in the condition list must be met.
   * 
   * @example
   * AND
   */
  condition?: string;
  /**
   * @remarks
   * The gateway route ID.
   * 
   * @example
   * 23
   */
  ingressId?: string;
  /**
   * @remarks
   * The condition list.
   */
  items?: ListGreyTagRouteResponseBodyDataResultAlbRulesItems[];
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * s-6366-e3****-99**
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      ingressId: 'ingressId',
      items: 'items',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      ingressId: 'string',
      items: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResultAlbRulesItems },
      serviceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponseBodyDataResultDubboRulesItems extends $dara.Model {
  /**
   * @remarks
   * The comparison operator. Valid values: **>**, **<**, **>=**, **<=**, **==**, and **!=**.
   * 
   * @example
   * ==
   */
  cond?: string;
  /**
   * @remarks
   * The expression used to obtain the parameter value. The syntax follows Spring Expression Language (SpEL). Valid values:
   * 
   * - **Empty**: Obtains the value of the current parameter directly.
   * - **.name**: Obtains the name property of the parameter, which is equivalent to args0.getName().
   * - **.isEnabled()**: Obtains the enabled property of the parameter, which is equivalent to args0.isEnabled().
   * - **[0]**: Specifies that the current parameter is an array and obtains the first value of the array, which is equivalent to args0[0]. Note that there is no period (.) at the beginning.
   * - **.get(0)**: Specifies that the current parameter is a list and obtains the first value of the list, which is equivalent to args0.get(0).
   * - **.get("key")**: Specifies that the current parameter is a map and obtains the value corresponding to the key, which is equivalent to args0.get("key").
   * 
   * @example
   * .name
   */
  expr?: string;
  /**
   * @remarks
   * The parameter index. A value of 0 indicates the first parameter.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * Not applicable to Dubbo services.
   * 
   * @example
   * N/A
   */
  name?: string;
  /**
   * @remarks
   * The operator. Valid values:
   * 
   * - **rawvalue**: Direct comparison.
   * - **list**: Whitelist.
   * - **mod**: Modulo 100.
   * - **deterministic_proportional_steaming_division**: Percentage.
   * 
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @remarks
   * Not applicable to Dubbo services.
   * 
   * @example
   * N/A
   */
  type?: string;
  /**
   * @remarks
   * The parameter value. The value obtained based on **expr** and **index** is compared with this value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'cond',
      expr: 'expr',
      index: 'index',
      name: 'name',
      operator: 'operator',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      expr: 'string',
      index: 'number',
      name: 'string',
      operator: 'string',
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

export class ListGreyTagRouteResponseBodyDataResultDubboRules extends $dara.Model {
  /**
   * @remarks
   * The condition mode of the canary release rule. Valid values:
   * 
   * - **AND**: The logical AND operation. All conditions in the condition list must be met.
   * - **OR**: The logical OR operation. Any condition in the condition list must be met.
   * 
   * @example
   * OR
   */
  condition?: string;
  /**
   * @remarks
   * The group of the Dubbo service corresponding to the canary release rule.
   * 
   * @example
   * DUBBO
   */
  group?: string;
  /**
   * @remarks
   * The condition list.
   */
  items?: ListGreyTagRouteResponseBodyDataResultDubboRulesItems[];
  /**
   * @remarks
   * The method name of the Dubbo service.
   * 
   * @example
   * echo
   */
  methodName?: string;
  /**
   * @remarks
   * The Dubbo service name.
   * 
   * @example
   * com.alibaba.edas.boot.EchoService
   */
  serviceName?: string;
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
      condition: 'condition',
      group: 'group',
      items: 'items',
      methodName: 'methodName',
      serviceName: 'serviceName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      group: 'string',
      items: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResultDubboRulesItems },
      methodName: 'string',
      serviceName: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponseBodyDataResultScRulesItems extends $dara.Model {
  /**
   * @remarks
   * The comparison operator. Valid values: **>**, **<**, **>=**, **<=**, **==**, and **!=**.
   * 
   * @example
   * ==
   */
  cond?: string;
  /**
   * @remarks
   * Not applicable to Spring Cloud applications.
   * 
   * @example
   * N/A
   */
  expr?: string;
  /**
   * @remarks
   * Not applicable to Spring Cloud applications.
   * 
   * @example
   * N/A
   */
  index?: number;
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
   * The operator. Valid values:
   * 
   * - **rawvalue**: Direct comparison.
   * - **list**: Whitelist.
   * - **mod**: Modulo 100.
   * - **deterministic_proportional_steaming_division**: Percentage.
   * 
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @remarks
   * The comparison type. Valid values:
   * 
   * - **param**: Parameter.
   * - **cookie**: Cookie.
   * - **header**: Header.
   * 
   * @example
   * cookie
   */
  type?: string;
  /**
   * @remarks
   * The parameter value. The value obtained based on **type** and **name** is compared with this value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'cond',
      expr: 'expr',
      index: 'index',
      name: 'name',
      operator: 'operator',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      expr: 'string',
      index: 'number',
      name: 'string',
      operator: 'string',
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

export class ListGreyTagRouteResponseBodyDataResultScRules extends $dara.Model {
  /**
   * @remarks
   * The condition mode of the canary release rule. Valid values:
   * 
   * - **AND**: The logical AND operation. All conditions in the condition list must be met.
   * - **OR**: The logical OR operation. Any condition in the condition list must be met.
   * 
   * @example
   * OR
   */
  condition?: string;
  /**
   * @remarks
   * The condition list.
   */
  items?: ListGreyTagRouteResponseBodyDataResultScRulesItems[];
  /**
   * @remarks
   * The path corresponding to the canary release rule for the Spring Cloud application.
   * 
   * @example
   * /path
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      items: 'items',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      items: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResultScRulesItems },
      path: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The canary release rules created for applications with configured Application Load Balancer (ALB) gateway routes.
   */
  albRules?: ListGreyTagRouteResponseBodyDataResultAlbRules[];
  /**
   * @remarks
   * The timestamp when the rule was created. Unit: milliseconds.
   * 
   * @example
   * 1619007592013
   */
  createTime?: number;
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The Dubbo service canary release rules.
   */
  dubboRules?: ListGreyTagRouteResponseBodyDataResultDubboRules[];
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 1
   */
  greyTagRouteId?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule-name
   */
  name?: string;
  /**
   * @remarks
   * The Spring Cloud canary release rules.
   */
  scRules?: ListGreyTagRouteResponseBodyDataResultScRules[];
  /**
   * @remarks
   * The timestamp when the rule was updated. Unit: milliseconds.
   * 
   * @example
   * 1609434061000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      albRules: 'AlbRules',
      createTime: 'CreateTime',
      description: 'Description',
      dubboRules: 'DubboRules',
      greyTagRouteId: 'GreyTagRouteId',
      name: 'Name',
      scRules: 'ScRules',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albRules: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResultAlbRules },
      createTime: 'number',
      description: 'string',
      dubboRules: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResultDubboRules },
      greyTagRouteId: 'number',
      name: 'string',
      scRules: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResultScRules },
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.albRules)) {
      $dara.Model.validateArray(this.albRules);
    }
    if(Array.isArray(this.dubboRules)) {
      $dara.Model.validateArray(this.dubboRules);
    }
    if(Array.isArray(this.scRules)) {
      $dara.Model.validateArray(this.scRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Currently, only **1** is supported.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListGreyTagRouteResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of entries. Currently, only **1** is supported.
   * 
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResult },
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

export class ListGreyTagRouteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: Success.
   * - **3xx**: Redirection.
   * - **4xx**: Client error.
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The canary release rule information.
   */
  data?: ListGreyTagRouteResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * InvalidParameter.NotEmpty
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information.
   * - If the request is successful, **success** is returned.
   * - If the request fails, a specific error code is returned.
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
   * 9D29CBD0-45D3-410B-9826-52F86F90****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the change order information was queried successfully. Valid values:
   * 
   * - **true**: The query was successful.
   * - **false**: The query failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to precisely query call information.
   * 
   * @example
   * 0a98a02315955564772843261e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListGreyTagRouteResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
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

