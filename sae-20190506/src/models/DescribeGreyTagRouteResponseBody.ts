// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGreyTagRouteResponseBodyDataAlbRulesItems extends $dara.Model {
  /**
   * @remarks
   * Currently supports ==.
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
   * The name of the element to match, such as a header or cookie name. This parameter is not used if type is set to sourceIp.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The matching operator. Only **rawvalue** is supported, which indicates a direct comparison.
   * 
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @remarks
   * The type of request element to match against. Valid values:
   * 
   * - **sourceIp**: The source IP address.
   * 
   * - **cookie**: A cookie.
   * 
   * - **header**: A request header.
   * 
   * @example
   * cookie
   */
  type?: string;
  /**
   * @remarks
   * The value to match. This value is compared with the actual value of the element specified by **type** and **name**.
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

export class DescribeGreyTagRouteResponseBodyDataAlbRules extends $dara.Model {
  /**
   * @remarks
   * The relationship between the conditions in the canary rule. Only **AND** is supported, which indicates that all conditions must be met.
   * 
   * @example
   * AND
   */
  condition?: string;
  /**
   * @remarks
   * The ID of the Ingress.
   * 
   * @example
   * 23
   */
  ingressId?: string;
  /**
   * @remarks
   * The list of conditions.
   */
  items?: DescribeGreyTagRouteResponseBodyDataAlbRulesItems[];
  /**
   * @remarks
   * The routing service ID.
   * 
   * @example
   * 22
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      ingressId: 'ingressId',
      items: 'items',
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      ingressId: 'string',
      items: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataAlbRulesItems },
      serviceId: 'string',
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

export class DescribeGreyTagRouteResponseBodyDataDubboRulesItems extends $dara.Model {
  /**
   * @remarks
   * The comparison operator. Valid values are **>**, **<**, **>=**, **<=**, **==**, and **!=**.
   * 
   * @example
   * ==
   */
  cond?: string;
  /**
   * @remarks
   * The expression that is used to obtain the parameter value. Valid values:
   * 
   * - **Leave empty**: If left empty, the value of the parameter itself is used.
   * 
   * - **.name**: Obtains the value of the `name` attribute of the parameter. This is equivalent to `args0.getName()`.
   * 
   * - **.isEnabled()**: Obtains the value of the `enabled` attribute of the parameter. This is equivalent to `args0.isEnabled()`.
   * 
   * - **[0]**: The parameter must be an array. This expression obtains the first value of the array, which is equivalent to `args0[0]`. Note that the expression does not start with a period (.).
   * 
   * - **.get(0)**: The parameter must be a list. This expression obtains the first value of the list, which is equivalent to `args0.get(0)`.
   * 
   * - **.get("key")**: The parameter must be a map. This expression obtains the value that corresponds to a key. This is equivalent to `args0.get("key")`.
   * 
   * @example
   * .name
   */
  expr?: string;
  /**
   * @remarks
   * The parameter index. `0` indicates the first parameter.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * Not used in Dubbo services.
   * 
   * @example
   * N/A
   */
  name?: string;
  /**
   * @remarks
   * The matching operator. Valid values:
   * 
   * - **rawvalue**: Performs a direct comparison.
   * 
   * - **list**: Matches against an allowlist of values.
   * 
   * - **mod**: Calculates the remainder of a division by 100.
   * 
   * - **deterministic_proportional_steaming_division**: Performs a percentage-based match.
   * 
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @remarks
   * Not used in Dubbo services.
   * 
   * @example
   * N/A
   */
  type?: string;
  /**
   * @remarks
   * The value to match. This value is compared with the actual value retrieved by using the specified **expr** and **index**.
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

export class DescribeGreyTagRouteResponseBodyDataDubboRules extends $dara.Model {
  /**
   * @remarks
   * The relationship between the conditions in the rule. Valid values:
   * 
   * - **AND**: All conditions must be met.
   * 
   * - **OR**: At least one condition must be met.
   * 
   * @example
   * OR
   */
  condition?: string;
  /**
   * @remarks
   * The service group to which the canary rule applies.
   * 
   * @example
   * DUBBO
   */
  group?: string;
  /**
   * @remarks
   * The list of conditions.
   */
  items?: DescribeGreyTagRouteResponseBodyDataDubboRulesItems[];
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
      items: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataDubboRulesItems },
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

export class DescribeGreyTagRouteResponseBodyDataScRulesItems extends $dara.Model {
  /**
   * @remarks
   * The comparison operator. Valid values are **>**, **<**, **>=**, **<=**, **==**, and **!=**.
   * 
   * @example
   * ==
   */
  cond?: string;
  /**
   * @remarks
   * Not used in Spring Cloud applications.
   * 
   * @example
   * N/A
   */
  expr?: string;
  /**
   * @remarks
   * Not used in Spring Cloud applications.
   * 
   * @example
   * N/A
   */
  index?: number;
  /**
   * @remarks
   * The name of the element to match, as specified by the type parameter. For example, a header name or cookie name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The matching operator. Valid values:
   * 
   * - **rawvalue**: Performs a direct comparison.
   * 
   * - **list**: Matches against an allowlist of values.
   * 
   * - **mod**: Calculates the remainder of a division by 100.
   * 
   * - **deterministic_proportional_steaming_division**: Performs a percentage-based match.
   * 
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @remarks
   * The type of request element to match against. Valid values:
   * 
   * - **param**: A request parameter.
   * 
   * - **cookie**: A cookie.
   * 
   * - **header**: A request header.
   * 
   * @example
   * cookie
   */
  type?: string;
  /**
   * @remarks
   * The value to match. This value is compared with the actual value of the element specified by **type** and **name**.
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

export class DescribeGreyTagRouteResponseBodyDataScRules extends $dara.Model {
  /**
   * @remarks
   * The relationship between the conditions in the rule. Valid values:
   * 
   * - **AND**: All conditions must be met.
   * 
   * - **OR**: At least one condition must be met.
   * 
   * @example
   * OR
   */
  condition?: string;
  /**
   * @remarks
   * The list of conditions.
   */
  items?: DescribeGreyTagRouteResponseBodyDataScRulesItems[];
  /**
   * @remarks
   * The path to which the rule applies.
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
      items: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataScRulesItems },
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

export class DescribeGreyTagRouteResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The canary rules for the Application Load Balancer (ALB) instance.
   */
  albRules?: DescribeGreyTagRouteResponseBodyDataAlbRules[];
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 3faaf993-7aed-4bcd-b189-625e6a5a****
   */
  appId?: string;
  /**
   * @remarks
   * The creation timestamp of the rule, in milliseconds.
   * 
   * @example
   * 1619007592013
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the canary rule.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The canary rules for the Dubbo service.
   */
  dubboRules?: DescribeGreyTagRouteResponseBodyDataDubboRules[];
  /**
   * @remarks
   * The globally unique ID of the canary rule.
   * 
   * @example
   * 16
   */
  greyTagRouteId?: number;
  /**
   * @remarks
   * The name of the canary rule.
   * 
   * @example
   * rule-name
   */
  name?: string;
  /**
   * @remarks
   * The canary rules for the Spring Cloud application.
   */
  scRules?: DescribeGreyTagRouteResponseBodyDataScRules[];
  /**
   * @remarks
   * The timestamp of the rule\\"s last update, in milliseconds.
   * 
   * @example
   * 1609434061000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      albRules: 'AlbRules',
      appId: 'AppId',
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
      albRules: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataAlbRules },
      appId: 'string',
      createTime: 'number',
      description: 'string',
      dubboRules: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataDubboRules },
      greyTagRouteId: 'number',
      name: 'string',
      scRules: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataScRules },
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

export class DescribeGreyTagRouteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the API call or a POP error code. Valid values:
   * 
   * - **2xx**: The request is successful.
   * 
   * - **3xx**: The request is redirected.
   * 
   * - **4xx**: A client-side error occurred.
   * 
   * - **5xx**: A server-side error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the canary rule.
   */
  data?: DescribeGreyTagRouteResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - This parameter is not returned if the request is successful.
   * 
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The message that indicates the result of the call.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID for querying the details of a call.
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
      data: DescribeGreyTagRouteResponseBodyData,
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

