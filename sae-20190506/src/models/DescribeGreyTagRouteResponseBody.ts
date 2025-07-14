// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGreyTagRouteResponseBodyDataAlbRulesItems extends $dara.Model {
  /**
   * @remarks
   * Valid value: ==.
   * 
   * @example
   * ==
   */
  cond?: string;
  /**
   * @remarks
   * This parameter is not returned for applications that are associated with ALB instances.
   * 
   * @example
   * N/A
   */
  expr?: string;
  /**
   * @remarks
   * This parameter is not returned for applications that are associated with Application Load Balancer (ALB) instances.
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
   * example
   */
  name?: string;
  /**
   * @remarks
   * The operator. Valid value: **rawvalue**. This value indicates direct comparison.
   * 
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @remarks
   * The type of the comparison. Valid values:
   * 
   * *   **sourceIp**: SourceIp
   * *   **cookie**: cookie
   * *   **header**: header
   * 
   * @example
   * cookie
   */
  type?: string;
  /**
   * @remarks
   * The value of the parameter. This value is compared with the value that is obtained based on the type and name parameters.
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
   * The condition mode of the canary release rule. Valid value: AND. This value indicates that that all conditions must be met.
   * 
   * @example
   * AND
   */
  condition?: string;
  /**
   * @remarks
   * The ID of the gateway routing rule.
   * 
   * @example
   * 23
   */
  ingressId?: string;
  items?: DescribeGreyTagRouteResponseBodyDataAlbRulesItems[];
  /**
   * @remarks
   * The service ID.
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
   * The comparison operator. Valid values: **>**, **<**, **>=**, **<=**, **==**, and **! =**.
   * 
   * @example
   * ==
   */
  cond?: string;
  /**
   * @remarks
   * The expression that is used to obtain the value of the parameter. Valid values:
   * 
   * *   **Empty**: obtains the value of the parameter.
   * *   **.name**: obtains the name property of the parameter. This expression works the same way as args0.getName().
   * *   **.isEnabled()**: obtains the enabled property of the parameter. This expression works the same way as args0.isEnabled().
   * *   **[0]**: indicates that the value of the parameter is an array and obtains the first value of the array. This expression works the same way as args0[0]. This expression does not start with a period (.).
   * *   **.get(0)**: indicates that the value of the parameter is a list and obtains the first value of the list. This expression works the same way as args0.get(0).
   * *   **.get("key")**: indicates that the value of the parameter is a map and obtains the value of the key in the map. This expression works the same way as args0.get("key").
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

export class DescribeGreyTagRouteResponseBodyDataDubboRules extends $dara.Model {
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

export class DescribeGreyTagRouteResponseBodyDataScRules extends $dara.Model {
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
  items?: DescribeGreyTagRouteResponseBodyDataScRulesItems[];
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
  albRules?: DescribeGreyTagRouteResponseBodyDataAlbRules[];
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 3faaf993-7aed-4bcd-b189-625e6a5a****
   */
  appId?: string;
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
  dubboRules?: DescribeGreyTagRouteResponseBodyDataDubboRules[];
  /**
   * @remarks
   * The ID of the canary release rule. The ID is globally unique.
   * 
   * @example
   * 16
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
  scRules?: DescribeGreyTagRouteResponseBodyDataScRules[];
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
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the canary release rule.
   */
  data?: DescribeGreyTagRouteResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * *   If the call is successful, the **ErrorCode** parameter is not returned.
   * *   If the call fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
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
   * Indicates whether the information of the change order was queried. Valid values:
   * 
   * *   **true**: The information was queried.
   * *   **false**: The information failed to be queried.
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

