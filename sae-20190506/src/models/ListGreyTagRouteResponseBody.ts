// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGreyTagRouteResponseBodyDataResultAlbRulesItems extends $dara.Model {
  /**
   * @example
   * ==
   */
  cond?: string;
  /**
   * @example
   * N/A
   */
  expr?: string;
  /**
   * @example
   * N/A
   */
  index?: number;
  /**
   * @example
   * example
   */
  name?: string;
  /**
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @example
   * cookie
   */
  type?: string;
  /**
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
   * @example
   * AND
   */
  condition?: string;
  /**
   * @example
   * 23
   */
  ingressId?: string;
  items?: ListGreyTagRouteResponseBodyDataResultAlbRulesItems[];
  /**
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
   * The comparison operator. Valid values: **>**, **<**, **>=**, **<=**, **==**, and **! =**.
   * 
   * @example
   * ==
   */
  cond?: string;
  /**
   * @remarks
   * The expression that is used to obtain the value of the parameter. The syntax of the expression must follow the standard of the SpEL. Valid values:
   * 
   * - **Empty**: obtains the value of the parameter.
   * - **.name**: obtains the name property of the parameter. This expression works the same way as args0.getName().
   * - **.isEnabled()**: obtains the enabled property of the parameter. This expression works the same way as args0.isEnabled().
   * - **[0]**: indicates that the value of the parameter is an array and obtains the first value of the array. This expression works the same way as args0[0]. This expression does not start with a period (.).
   * - **.get(0)**: indicates that the value of the parameter is a list and obtains the first value of the list. This expression works the same way as args0.get(0).
   * - **.get("key")**: indicates that the value of the parameter is a map and obtains the value of the key in the map. This expression works the same way as args0.get("key").  >  For more information about the expressions that are used to obtain parameter values, see  [Spring Expression Language (SpEL)](https://docs.spring.io/spring-integration/docs/current/reference/html/spel.html).
   * 
   * @example
   * .name
   */
  expr?: string;
  /**
   * @remarks
   * The index of the parameter. The value 0 indicates the first parameter.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * This parameter is not returned for Dubbo services.
   * 
   * @example
   * N/A
   */
  name?: string;
  /**
   * @remarks
   * The operator. Valid values:
   * 
   * - **rawvalue**: direct comparison.
   * - **list**: whitelist.
   * - **mod**: mods 100.
   * - **deterministic_proportional_steaming_division**: percentage.
   * 
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @remarks
   * This parameter is not returned for Dubbo services.
   * 
   * @example
   * N/A
   */
  type?: string;
  /**
   * @remarks
   * The value of the parameter. This value is compared with the value that is obtained based on the **expr** and **index** parameters.
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
   * The relationship between the conditions in the canary release rule. Valid values:
   * 
   * - **AND**: The conditions are in the logical AND relation. All conditions must be met at the same time.
   * - **OR**: The conditions are in the logical OR relation. At least one of the conditions must be met.
   * 
   * @example
   * OR
   */
  condition?: string;
  /**
   * @remarks
   * The group of the Dubbo service that corresponds to the canary release rule.
   * 
   * @example
   * DUBBO
   */
  group?: string;
  /**
   * @remarks
   * The conditions.
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
   * The comparison operator. Valid values: **>**, **<**, **>=**, **<=**, **==**, and **! =**.
   * 
   * @example
   * ==
   */
  cond?: string;
  /**
   * @remarks
   * This parameter is not returned for Spring Cloud applications.
   * 
   * @example
   * N/A
   */
  expr?: string;
  /**
   * @remarks
   * This parameter is not returned for Spring Cloud applications.
   * 
   * @example
   * N/A
   */
  index?: number;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The operator. Valid values:
   * 
   * *   **rawvalue**: direct comparison.
   * *   **list**: whitelist.
   * *   **mod**: mods 100.
   * *   **deterministic_proportional_steaming_division**: percentage.
   * 
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @remarks
   * The type of the comparison. Valid values:
   * 
   * *   **param**: parameter
   * *   **cookie**: cookie
   * *   **header**: header
   * 
   * @example
   * cookie
   */
  type?: string;
  /**
   * @remarks
   * The value of the parameter. This value is compared with the value that is obtained based on the **type** and **name** parameters.
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
   * The relationship between the conditions in the canary release rule. Valid values:
   * 
   * *   **AND**: The conditions are in the logical AND relation. All conditions must be met at the same time.
   * *   **OR**: The conditions are in the logical OR relation. At least one of the conditions must be met.
   * 
   * @example
   * OR
   */
  condition?: string;
  /**
   * @remarks
   * The conditions.
   */
  items?: ListGreyTagRouteResponseBodyDataResultScRulesItems[];
  /**
   * @remarks
   * The path of the canary release rule of the Spring Cloud application.
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
  albRules?: ListGreyTagRouteResponseBodyDataResultAlbRules[];
  /**
   * @remarks
   * The timestamp when the canary release rule was created. Unit: milliseconds.
   * 
   * @example
   * 1619007592013
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the canary release rule.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The canary release rule of the Dubbo service.
   */
  dubboRules?: ListGreyTagRouteResponseBodyDataResultDubboRules[];
  /**
   * @remarks
   * The ID of the canary release rule.
   * 
   * @example
   * 1
   */
  greyTagRouteId?: number;
  /**
   * @remarks
   * The name of the canary release rule.
   * 
   * @example
   * rule-name
   */
  name?: string;
  /**
   * @remarks
   * The canary release rule of the Spring Cloud application.
   */
  scRules?: ListGreyTagRouteResponseBodyDataResultScRules[];
  /**
   * @remarks
   * The timestamp when the canary release rule was updated. Unit: milliseconds.
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned on each page. Valid value: **1**.
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
   * The total number of canary release rules. Valid value: **1**.
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
   * The HTTP status code. Valid values:
   * 
   * - **2xx**: The call was successful.
   * - **3xx**: The call was redirected.
   * - **4xx**: The call failed.
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the canary release rule.
   */
  data?: ListGreyTagRouteResponseBodyData;
  /**
   * @remarks
   * The returned error code. Valid values:
   * 
   * - If the call is successful, the **ErrorCode** parameter is not returned.
   * - If the call fails, the **ErrorCode** parameter is returned. For more information, see the "**Error codes**" section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned information. Valid values:
   * 
   * *   success: If the call is successful, **success** is returned.
   * *   An error code: If the call fails, an error code is returned.
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
   * 9D29CBD0-45D3-410B-9826-52F86F90****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the information of the change order was queried. Valid values:
   * 
   * - **true**: The information was queried.
   * - **false**: The information failed to be queried.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that is used to query the details of the request.
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

