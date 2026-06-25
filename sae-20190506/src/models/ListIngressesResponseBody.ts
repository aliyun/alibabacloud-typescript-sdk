// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIngressesResponseBodyDataIngressListCorsConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether credentials can be carried.
   */
  allowCredentials?: string;
  /**
   * @remarks
   * The allowed headers.
   */
  allowHeaders?: string;
  /**
   * @remarks
   * The allowed methods.
   */
  allowMethods?: string;
  /**
   * @remarks
   * The allowed origins.
   */
  allowOrigin?: string;
  /**
   * @remarks
   * Indicates whether cross-domain access is enabled.
   */
  enable?: string;
  /**
   * @remarks
   * The allowed exposed headers.
   */
  exposeHeaders?: string;
  /**
   * @remarks
   * The time-to-live (TTL).
   */
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
  /**
   * @remarks
   * The application ID.
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   */
  appName?: string;
  /**
   * @remarks
   * The backend protocol.
   */
  backendProtocol?: string;
  /**
   * @remarks
   * The container port.
   */
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
  /**
   * @remarks
   * The action configuration.
   */
  actionConfig?: string;
  /**
   * @remarks
   * The action type.
   */
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
  /**
   * @remarks
   * The application ID.
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   */
  appName?: string;
  /**
   * @remarks
   * The backend protocol.
   */
  backendProtocol?: string;
  /**
   * @remarks
   * The container port.
   */
  containerPort?: number;
  /**
   * @remarks
   * The domain name.
   */
  domain?: string;
  /**
   * @remarks
   * The path.
   */
  path?: string;
  /**
   * @remarks
   * The rewritten path.
   */
  rewritePath?: string;
  /**
   * @remarks
   * The list of rule actions.
   */
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
   * The ID of the Classic Load Balancer (CLB) certificate.
   * 
   * @example
   * 13624*****73809_16f8e549a20_1175189789_12****3210
   */
  certId?: string;
  /**
   * @remarks
   * The IDs of the Application Load Balancer (ALB) certificates.
   * 
   * @example
   * 87***35-cn-hangzhou,812***3-cn-hangzhou
   */
  certIds?: string;
  /**
   * @remarks
   * The cross-domain configuration.
   */
  corsConfig?: ListIngressesResponseBodyDataIngressListCorsConfig;
  /**
   * @remarks
   * The creation time.
   */
  createTime?: number;
  /**
   * @remarks
   * The default rule.
   */
  defaultRule?: ListIngressesResponseBodyDataIngressListDefaultRule;
  /**
   * @remarks
   * The name of the Ingress rule.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the routing rule.
   * 
   * @example
   * 18
   */
  id?: number;
  /**
   * @remarks
   * The connection idle timeout period.
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The listening port of the SLB instance.
   * 
   * @example
   * 80
   */
  listenerPort?: string;
  /**
   * @remarks
   * The forwarding protocol of the SLB instance. Valid values:
   * 
   * - **HTTP**: suitable for applications that need to identify data content.
   * 
   * - **HTTPS**: suitable for applications that require encrypted transmission.
   * 
   * This parameter is optional for the **CreateIngress** and **UpdateIngress** operations. If you do not set this parameter when you create or update a gateway routing rule, this parameter is not returned.
   * 
   * @example
   * HTTP
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The type of the SLB instance. Valid values:
   * 
   * - **clb**: Classic Load Balancer.
   * 
   * - **alb**: Application Load Balancer.
   * 
   * @example
   * clb
   */
  loadBalanceType?: string;
  /**
   * @remarks
   * The ID of the MSE cloud-native gateway instance.
   * 
   * @example
   * gw-d5df01a1bae748f1a7c4e325d2fd****
   */
  mseGatewayId?: string;
  /**
   * @remarks
   * The port that corresponds to the service.
   * 
   * @example
   * 80
   */
  mseGatewayPort?: string;
  /**
   * @remarks
   * The forwarding protocol supported by the MSE cloud-native gateway. Valid values:
   * 
   * - **HTTP**: suitable for applications that need to identify data content.
   * 
   * - **HTTPS**: suitable for applications that require encrypted transmission.
   * 
   * @example
   * HTTP
   */
  mseGatewayProtocol?: string;
  /**
   * @remarks
   * The name of the routing rule.
   * 
   * @example
   * lb-uf6jt0nu4z6ior943****-80-f5****
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-shanghai
   */
  namespaceId?: string;
  /**
   * @remarks
   * The request timeout period.
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The rules.
   */
  rules?: ListIngressesResponseBodyDataIngressListRules[];
  /**
   * @remarks
   * The ID of the Server Load Balancer (SLB) instance.
   * 
   * @example
   * lb-uf62****6d13tq2u5
   */
  slbId?: string;
  /**
   * @remarks
   * The type of the SLB instance. Valid values:
   * 
   * - **internet**: public network.
   * 
   * - **intranet**: private network.
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
  /**
   * @remarks
   * The current page.
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of routing rules.
   */
  ingressList?: ListIngressesResponseBodyDataIngressList[];
  /**
   * @remarks
   * The number of entries per page.
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries found.
   */
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
   * The status of the API call or a POP error code. Valid values:
   * 
   * - **2xx**: The call was successful.
   * 
   * - **3xx**: The call was redirected.
   * 
   * - **4xx**: A client error occurred.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The result.
   */
  data?: ListIngressesResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is not returned if the request is successful.
   * 
   * - This parameter is returned if the request fails. For more information, see the **Error codes** section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The response message.
   * 
   * - **success** is returned if the call is successful.
   * 
   * - An error code is returned if the call fails.
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
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - **true**: The call was successful.
   * 
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID. You can use it to query the details of a call.
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

