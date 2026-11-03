// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIngressesResponseBodyDataIngressListCorsConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether credentials are allowed.
   * 
   * @example
   * on
   */
  allowCredentials?: string;
  /**
   * @remarks
   * The allowed headers.
   * 
   * @example
   * test_123
   */
  allowHeaders?: string;
  /**
   * @remarks
   * The allowed methods.
   * 
   * @example
   * GET
   */
  allowMethods?: string;
  /**
   * @remarks
   * The allowed origins.
   * 
   * @example
   * *
   */
  allowOrigin?: string;
  /**
   * @remarks
   * Specifies whether the feature is enabled.
   * 
   * @example
   * false
   */
  enable?: string;
  /**
   * @remarks
   * The allowed exposed headers.
   * 
   * @example
   * test_123
   */
  exposeHeaders?: string;
  /**
   * @remarks
   * The max age.
   * 
   * @example
   * 1000
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
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * demo-app
   */
  appName?: string;
  /**
   * @remarks
   * The backend protocol.
   * 
   * @example
   * http
   */
  backendProtocol?: string;
  /**
   * @remarks
   * The container port.
   * 
   * @example
   * 8080
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
   * 
   * @example
   * {\\"host\\":\\"www.example.com\\",\\"path\\":\\"/example/text\\",\\"query\\":\\"x=1\\"}
   */
  actionConfig?: string;
  /**
   * @remarks
   * The action type.
   * 
   * @example
   * rewrite
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
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * demo-app
   */
  appName?: string;
  /**
   * @remarks
   * The backend protocol.
   * 
   * @example
   * http
   */
  backendProtocol?: string;
  /**
   * @remarks
   * The container port.
   * 
   * @example
   * 8080
   */
  containerPort?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * edas.site
   */
  domain?: string;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /Path
   */
  path?: string;
  /**
   * @remarks
   * The rewrite path.
   * 
   * @example
   * /${1}
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
   * The **CLB** certificate ID.
   * 
   * @example
   * 13624*****73809_16f8e549a20_1175189789_12****3210
   */
  certId?: string;
  /**
   * @remarks
   * The **ALB** certificate IDs.
   * 
   * @example
   * 87***35-cn-hangzhou,812***3-cn-hangzhou
   */
  certIds?: string;
  /**
   * @remarks
   * The CORS configuration.
   */
  corsConfig?: ListIngressesResponseBodyDataIngressListCorsConfig;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1593746835111
   */
  createTime?: number;
  /**
   * @remarks
   * The default rule.
   */
  defaultRule?: ListIngressesResponseBodyDataIngressListDefaultRule;
  /**
   * @remarks
   * The name of the routing rule.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The routing rule ID.
   * 
   * @example
   * 18
   */
  id?: number;
  /**
   * @remarks
   * The idle connection timeout period.
   * 
   * @example
   * 3
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The SLB listener port.
   * 
   * @example
   * 80
   */
  listenerPort?: string;
  /**
   * @remarks
   * The request forwarding protocol supported by the load balancing SLB. Valid values:
   * 
   * - **HTTP**: Applicable to applications that need to identify data content.
   * - **HTTPS**: Applicable to applications that require encrypted transmission.
   * 
   * This parameter is optional in **CreateIngress** and **UpdateIngress**. If you do not specify this parameter when you create or update a gateway routing rule, this parameter is not returned when you invoke this API.
   * 
   * @example
   * HTTP
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The type of the load balancing SLB. Valid values:
   * 
   * - **clb**: Classic Load Balancer (CLB), formerly known as SLB.
   * - **alb**: Application Load Balancer (ALB).
   * 
   * @example
   * clb
   */
  loadBalanceType?: string;
  /**
   * @remarks
   * The MSE cloud-native gateway instance ID.
   * 
   * @example
   * gw-d5df01a1bae748f1a7c4e325d2fd****
   */
  mseGatewayId?: string;
  /**
   * @remarks
   * The port corresponding to the service.
   * 
   * @example
   * 80
   */
  mseGatewayPort?: string;
  /**
   * @remarks
   * The request forwarding protocol supported by the MSE cloud-native gateway. Valid values:
   * 
   * - **HTTP**: Applicable to applications that need to identify data content.
   * - **HTTPS**: Applicable to applications that require encrypted transmission.
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
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The rules.
   */
  rules?: ListIngressesResponseBodyDataIngressListRules[];
  /**
   * @remarks
   * The SLB ID.
   * 
   * @example
   * lb-uf62****6d13tq2u5
   */
  slbId?: string;
  /**
   * @remarks
   * The SLB type. Valid values:
   * 
   * - **internet**: Internet.
   * - **intranet**: Internal network.
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
   * The current page number.
   * 
   * @example
   * 1
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
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of queried entries.
   * 
   * @example
   * 10
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
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: Success.
   * - **3xx**: Redirect.
   * - **4xx**: Request error.
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned results.
   */
  data?: ListIngressesResponseBodyData;
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
   * The additional information. The value is described as follows:
   * 
   * - If the request is successful, **success** is returned.
   * - If the request fails, the specific error code is returned.
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
   * Specifies whether the ingress list was successfully retrieved. Valid values:
   * 
   * - **true**: The ingress list was successfully retrieved.
   * - **false**: The ingress list failed to be retrieved.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to query call information.
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

