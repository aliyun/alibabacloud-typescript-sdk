// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGreyTagRouteResponseBodyDataResultAlbRulesItems extends $dara.Model {
  /**
   * @remarks
   * Only == is supported.
   * 
   * @example
   * ==
   */
  cond?: string;
  /**
   * @remarks
   * This parameter is not applicable to ALB applications.
   * 
   * @example
   * N/A
   */
  expr?: string;
  /**
   * @remarks
   * This parameter is not applicable to ALB applications.
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
   * The operator. Valid values: Only rawvalue is supported, which indicates a direct comparison.
   * 
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @remarks
   * The comparison type. Valid values:
   * 
   * - **sourceIp**: SourceIp.
   * 
   * - **cookie**: Cookie.
   * 
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
   * The conditional pattern of the grayscale rule. Only AND is supported, which indicates that all conditions in the list must be met.
   * 
   * @example
   * AND
   */
  condition?: string;
  /**
   * @remarks
   * The Ingress ID.
   * 
   * @example
   * 23
   */
  ingressId?: string;
  /**
   * @remarks
   * The list of conditions.
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
   * The expression that is used to obtain the parameter value. The syntax follows the Spring Expression Language (SpEL). Valid values:
   * 
   * - **Leave it empty**: Obtains the value of the current parameter.
   * 
   * - **.name**: Obtains the name property of the parameter. This is equivalent to args0.getName().
   * 
   * - **.isEnabled()**: Obtains the enabled property of the parameter. This is equivalent to args0.isEnabled().
   * 
   * - **[0]**: Obtains the first value of the array. This is equivalent to args0[0]. Note that the expression does not start with a period (.).
   * 
   * - **.get(0)**: Obtains the first value of the list. This is equivalent to args0.get(0).
   * 
   * - **.get("key")**: Obtains the value that corresponds to the specified key from the map. This is equivalent to args0.get("key").
   * 
   * @example
   * .name
   */
  expr?: string;
  /**
   * @remarks
   * The parameter number. 0 indicates the first parameter.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * This parameter is not applicable to Dubbo services.
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
   * 
   * - **list**: Whitelist.
   * 
   * - **mod**: Modulo 100 operation.
   * 
   * - **deterministic_proportional_steaming_division**: Percentage.
   * 
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @remarks
   * This parameter is not applicable to Dubbo services.
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
   * The conditional pattern of the grayscale rule. Valid values:
   * 
   * - **AND**: All conditions in the list must be met.
   * 
   * - **OR**: Any condition in the list can be met.
   * 
   * @example
   * OR
   */
  condition?: string;
  /**
   * @remarks
   * The group of the Dubbo service that corresponds to the grayscale rule.
   * 
   * @example
   * DUBBO
   */
  group?: string;
  /**
   * @remarks
   * The list of conditions.
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
   * The name of the Dubbo service.
   * 
   * @example
   * com.alibaba.edas.boot.EchoService
   */
  serviceName?: string;
  /**
   * @remarks
   * The version of the Dubbo service.
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
   * This parameter is not applicable to Spring Cloud applications.
   * 
   * @example
   * N/A
   */
  expr?: string;
  /**
   * @remarks
   * This parameter is not applicable to Spring Cloud applications.
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
   * 
   * - **list**: Whitelist.
   * 
   * - **mod**: Modulo 100 operation.
   * 
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
   * 
   * - **cookie**: Cookie.
   * 
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
   * The conditional pattern of the grayscale rule. Valid values:
   * 
   * - **AND**: All conditions in the list must be met.
   * 
   * - **OR**: Any condition in the list can be met.
   * 
   * @example
   * OR
   */
  condition?: string;
  /**
   * @remarks
   * The list of conditions.
   */
  items?: ListGreyTagRouteResponseBodyDataResultScRulesItems[];
  /**
   * @remarks
   * The path that corresponds to the grayscale rule for the Spring Cloud application.
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
   * The grayscale rules created for an application for which an Application Load Balancer (ALB) Ingress is configured.
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
   * The description of the rule.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The grayscale rules for Dubbo services.
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
   * The grayscale rules for Spring Cloud.
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
   * The number of entries per page in a paged query. The value can only be **1**.
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
   * The total number of entries. The value can only be **1**.
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
   * The status of the interface or the POP error code. Valid values:
   * 
   * - **2xx**: The request is successful.
   * 
   * - **3xx**: The request is redirected.
   * 
   * - **4xx**: A request error occurs.
   * 
   * - **5xx**: A server error occurs.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the grayscale rule.
   */
  data?: ListGreyTagRouteResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - This parameter is not returned if the request is successful.
   * 
   * - This parameter is returned if the request fails. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * Additional information. Valid values:
   * 
   * - If the request is successful, **success** is returned.
   * 
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
   * Indicates whether the query succeeded.
   * 
   * - **true**: The query succeeded.
   * 
   * - **false**: The query failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID, which is used to query the details of a call.
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

