// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIngressesResponseBodyDataIngressListCorsConfig extends $dara.Model {
  allowCredentials?: string;
  allowHeaders?: string;
  allowMethods?: string;
  allowOrigin?: string;
  enable?: string;
  exposeHeaders?: string;
  maxAge?: string;
  static names(): { [key: string]: string } {
    return {
      allowCredentials: 'AllowCredentials',
      allowHeaders: 'AllowHeaders',
      allowMethods: 'AllowMethods',
      allowOrigin: 'AllowOrigin',
      enable: 'Enable',
      exposeHeaders: 'ExposeHeaders',
      maxAge: 'MaxAge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCredentials: 'string',
      allowHeaders: 'string',
      allowMethods: 'string',
      allowOrigin: 'string',
      enable: 'string',
      exposeHeaders: 'string',
      maxAge: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIngressesResponseBodyDataIngressListDefaultRule extends $dara.Model {
  appId?: string;
  appName?: string;
  backendProtocol?: string;
  containerPort?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      backendProtocol: 'BackendProtocol',
      containerPort: 'ContainerPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      backendProtocol: 'string',
      containerPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIngressesResponseBodyDataIngressListRulesRuleActions extends $dara.Model {
  actionConfig?: string;
  actionType?: string;
  static names(): { [key: string]: string } {
    return {
      actionConfig: 'ActionConfig',
      actionType: 'ActionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionConfig: 'string',
      actionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIngressesResponseBodyDataIngressListRules extends $dara.Model {
  appId?: string;
  appName?: string;
  backendProtocol?: string;
  containerPort?: number;
  domain?: string;
  path?: string;
  rewritePath?: string;
  ruleActions?: ListIngressesResponseBodyDataIngressListRulesRuleActions[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      backendProtocol: 'BackendProtocol',
      containerPort: 'ContainerPort',
      domain: 'Domain',
      path: 'Path',
      rewritePath: 'RewritePath',
      ruleActions: 'RuleActions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      backendProtocol: 'string',
      containerPort: 'number',
      domain: 'string',
      path: 'string',
      rewritePath: 'string',
      ruleActions: { 'type': 'array', 'itemType': ListIngressesResponseBodyDataIngressListRulesRuleActions },
    };
  }

  validate() {
    if(Array.isArray(this.ruleActions)) {
      $dara.Model.validateArray(this.ruleActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIngressesResponseBodyDataIngressList extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate that is associated with a Classic Load Balancer (**CLB**) instance.
   * 
   * @example
   * 13624*****73809_16f8e549a20_1175189789_12****3210
   */
  certId?: string;
  /**
   * @remarks
   * The ID of the certificate that is associated with an Application Load Balancer **ALB** instance.
   * 
   * @example
   * 87***35-cn-hangzhou,812***3-cn-hangzhou
   */
  certIds?: string;
  corsConfig?: ListIngressesResponseBodyDataIngressListCorsConfig;
  createTime?: number;
  defaultRule?: ListIngressesResponseBodyDataIngressListDefaultRule;
  /**
   * @remarks
   * The name of a routing rule.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of a routing rule.
   * 
   * @example
   * 18
   */
  id?: number;
  idleTimeout?: number;
  /**
   * @remarks
   * The listener ports for an SLB instance.
   * 
   * @example
   * 80
   */
  listenerPort?: string;
  /**
   * @remarks
   * The protocol that is supported by SLB to forward requests. Valid values:
   * 
   * *   **HTTP**: HTTP is suitable for applications that need to identify the transmitted data.
   * *   **HTTPS**: HTTPS is suitable for applications that require encrypted data transmission.
   * 
   * This parameter is optional in the **CreateIngress** and **UpadateIngress** operations. If you do not configure this parameter when you call the CreateIngress or UpdateIngress operation to create or update a gateway routing rule, this parameter is not returned for the corresponding response.
   * 
   * @example
   * HTTP
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The type of SLB instances. Valid values:
   * 
   * *   **clb**: Classic Load Balancer (formerly known as SLB).
   * *   **alb**: Application Load Balancer.
   * 
   * @example
   * clb
   */
  loadBalanceType?: string;
  /**
   * @remarks
   * The ID of an MSE cloud-native gateway.
   * 
   * @example
   * gw-d5df01a1bae748f1a7c4e325d2fd****
   */
  mseGatewayId?: string;
  /**
   * @remarks
   * The port of a service.
   * 
   * @example
   * 80
   */
  mseGatewayPort?: string;
  /**
   * @remarks
   * The protocol that is supported by an MSE cloud-native gateway to forward requests. Valid values:
   * 
   * *   **HTTP**: HTTP is suitable for applications that need to identify transmitted data.
   * *   **HTTPS**: HTTPS is suitable for applications that require encrypted data transmission.
   * 
   * @example
   * HTTP
   */
  mseGatewayProtocol?: string;
  /**
   * @remarks
   * The name of a routing rule.
   * 
   * @example
   * lb-uf6jt0nu4z6ior943****-80-f5****
   */
  name?: string;
  /**
   * @remarks
   * The ID of a namespace.
   * 
   * @example
   * cn-shanghai
   */
  namespaceId?: string;
  requestTimeout?: number;
  rules?: ListIngressesResponseBodyDataIngressListRules[];
  /**
   * @remarks
   * The ID of a Server Load Balancer (SLB) instance.
   * 
   * @example
   * lb-uf62****6d13tq2u5
   */
  slbId?: string;
  /**
   * @remarks
   * The type of SLB instances. Valid values:
   * 
   * *   **internet**: an Internet-facing SLB instance
   * *   **intranet**: an Intranet-facing SLB instance
   * 
   * @example
   * internet
   */
  slbType?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certIds: 'CertIds',
      corsConfig: 'CorsConfig',
      createTime: 'CreateTime',
      defaultRule: 'DefaultRule',
      description: 'Description',
      id: 'Id',
      idleTimeout: 'IdleTimeout',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalanceType: 'LoadBalanceType',
      mseGatewayId: 'MseGatewayId',
      mseGatewayPort: 'MseGatewayPort',
      mseGatewayProtocol: 'MseGatewayProtocol',
      name: 'Name',
      namespaceId: 'NamespaceId',
      requestTimeout: 'RequestTimeout',
      rules: 'Rules',
      slbId: 'SlbId',
      slbType: 'SlbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      certIds: 'string',
      corsConfig: ListIngressesResponseBodyDataIngressListCorsConfig,
      createTime: 'number',
      defaultRule: ListIngressesResponseBodyDataIngressListDefaultRule,
      description: 'string',
      id: 'number',
      idleTimeout: 'number',
      listenerPort: 'string',
      listenerProtocol: 'string',
      loadBalanceType: 'string',
      mseGatewayId: 'string',
      mseGatewayPort: 'string',
      mseGatewayProtocol: 'string',
      name: 'string',
      namespaceId: 'string',
      requestTimeout: 'number',
      rules: { 'type': 'array', 'itemType': ListIngressesResponseBodyDataIngressListRules },
      slbId: 'string',
      slbType: 'string',
    };
  }

  validate() {
    if(this.corsConfig && typeof (this.corsConfig as any).validate === 'function') {
      (this.corsConfig as any).validate();
    }
    if(this.defaultRule && typeof (this.defaultRule as any).validate === 'function') {
      (this.defaultRule as any).validate();
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIngressesResponseBodyData extends $dara.Model {
  currentPage?: number;
  /**
   * @remarks
   * The list of routing rules.
   */
  ingressList?: ListIngressesResponseBodyDataIngressList[];
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      ingressList: 'IngressList',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      ingressList: { 'type': 'array', 'itemType': ListIngressesResponseBodyDataIngressList },
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ingressList)) {
      $dara.Model.validateArray(this.ingressList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIngressesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: The request was successful.
   * *   **3xx**: The request was redirected.
   * *   **4xx**: The request failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The result returned.
   */
  data?: ListIngressesResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed. Valid values:
   * 
   * *   **ErrorCode** is not returned if a request is successful.
   * *   **ErrorCode** is returned if a request failed. For more information, see **Error codes**.
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned. Valid values:
   * 
   * *   **success** is returned when a request is successful.
   * *   An error code is returned when a request failed.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of a request.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the list of Ingresses was obtained. Valid values:
   * 
   * *   **true**: The list were obtained.
   * *   **false**: The list failed to be queried.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of a trace. The ID is used to query the details of a request.
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
      data: ListIngressesResponseBodyData,
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

