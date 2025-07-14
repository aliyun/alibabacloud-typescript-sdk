// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIngressResponseBodyDataCorsConfig extends $dara.Model {
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

export class DescribeIngressResponseBodyDataDefaultRule extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that is specified in the default rule.
   * 
   * @example
   * 395b60e4-0550-458d-9c54-a265d036****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application that is specified in the default rule.
   * 
   * @example
   * app1
   */
  appName?: string;
  /**
   * @remarks
   * The backend protocol. Valid values:
   * 
   * *   **http**: HTTP is suitable for applications that need to identify the transmitted data.
   * *   **https**: HTTP is suitable for applications that require encrypted data transmission.
   * *   **grpc**: GRPC is suitable for load balancing scenarios in which you want to deploy services in multi-language frameworks, such as the .NET framework.
   * 
   * This parameter is returned only if the**LoadBalanceType** parameter is set to **ALB** and the **ListenerProtocol** parameter **is set to HTTPS**.
   * 
   * @example
   * HTTP
   */
  backendProtocol?: string;
  /**
   * @remarks
   * The container port of the application that is specified in the default rule.
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

export class DescribeIngressResponseBodyDataRulesRuleActions extends $dara.Model {
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

export class DescribeIngressResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the application specified in the forwarding rule.
   * 
   * @example
   * 395b60e4-0550-458d-9c54-a265d036****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application specified in the forwarding rules.
   * 
   * @example
   * app1
   */
  appName?: string;
  /**
   * @remarks
   * The backend protocol. Valid values:
   * 
   * *   **http**: HTTP is suitable for applications that need to identify the transmitted data.
   * *   **https**: HTTPS is suitable for applications that require encrypted data transmission.
   * *   **grpc**: GRPC is suitable for load balancing scenarios in which you want to deploy services in multi-language frameworks, such as the .NET framework.
   * 
   * This parameter is returned only if the **LoadBalanceType** parameter is set to **ALB** and the **ListenerProtocol** parameter is set to **HTTPS**.
   * 
   * @example
   * HTTP
   */
  backendProtocol?: string;
  /**
   * @remarks
   * Tthe container port of the application specified in the forwarding rules.
   * 
   * @example
   * 8080
   */
  containerPort?: number;
  /**
   * @remarks
   * The domain name of the application specified in the forwarding rules.
   * 
   * @example
   * edas.site
   */
  domain?: string;
  /**
   * @remarks
   * The path of a URL.
   * 
   * @example
   * /path1
   */
  path?: string;
  /**
   * @remarks
   * The path that is used to rewrite the original path.
   * 
   * @example
   * /${1}
   */
  rewritePath?: string;
  ruleActions?: DescribeIngressResponseBodyDataRulesRuleActions[];
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
      ruleActions: { 'type': 'array', 'itemType': DescribeIngressResponseBodyDataRulesRuleActions },
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

export class DescribeIngressResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate that is associated with a Classic Load Balancer (**CLB**) instance.
   * 
   * @example
   * 13623****809_16cad216b32_845_-419427029
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
  corsConfig?: DescribeIngressResponseBodyDataCorsConfig;
  createdBySae?: boolean;
  /**
   * @remarks
   * The default rule.
   */
  defaultRule?: DescribeIngressResponseBodyDataDefaultRule;
  /**
   * @remarks
   * The name of a routing rule.
   * 
   * @example
   * ingress-sae-test
   */
  description?: string;
  enableXForwardedFor?: boolean;
  enableXForwardedForClientSrcPort?: boolean;
  enableXForwardedForProto?: boolean;
  enableXForwardedForSlbId?: boolean;
  enableXForwardedForSlbPort?: boolean;
  /**
   * @remarks
   * The ID of a routing rule.
   * 
   * @example
   * 87
   */
  id?: number;
  /**
   * @example
   * 3
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The listener ports for an SLB instance.
   * 
   * @example
   * 443
   */
  listenerPort?: number;
  /**
   * @remarks
   * The protocol used to forward requests. Valid values:
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
   * cn-beijing:sae-test
   */
  namespaceId?: string;
  /**
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The forwarding rules.
   */
  rules?: DescribeIngressResponseBodyDataRules[];
  /**
   * @example
   * sp-n0kn923****
   */
  securityPolicyId?: string;
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
   * The type of an SLB instance. Valid values:
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
      createdBySae: 'CreatedBySae',
      defaultRule: 'DefaultRule',
      description: 'Description',
      enableXForwardedFor: 'EnableXForwardedFor',
      enableXForwardedForClientSrcPort: 'EnableXForwardedForClientSrcPort',
      enableXForwardedForProto: 'EnableXForwardedForProto',
      enableXForwardedForSlbId: 'EnableXForwardedForSlbId',
      enableXForwardedForSlbPort: 'EnableXForwardedForSlbPort',
      id: 'Id',
      idleTimeout: 'IdleTimeout',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalanceType: 'LoadBalanceType',
      name: 'Name',
      namespaceId: 'NamespaceId',
      requestTimeout: 'RequestTimeout',
      rules: 'Rules',
      securityPolicyId: 'SecurityPolicyId',
      slbId: 'SlbId',
      slbType: 'SlbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      certIds: 'string',
      corsConfig: DescribeIngressResponseBodyDataCorsConfig,
      createdBySae: 'boolean',
      defaultRule: DescribeIngressResponseBodyDataDefaultRule,
      description: 'string',
      enableXForwardedFor: 'boolean',
      enableXForwardedForClientSrcPort: 'boolean',
      enableXForwardedForProto: 'boolean',
      enableXForwardedForSlbId: 'boolean',
      enableXForwardedForSlbPort: 'boolean',
      id: 'number',
      idleTimeout: 'number',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalanceType: 'string',
      name: 'string',
      namespaceId: 'string',
      requestTimeout: 'number',
      rules: { 'type': 'array', 'itemType': DescribeIngressResponseBodyDataRules },
      securityPolicyId: 'string',
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

export class DescribeIngressResponseBody extends $dara.Model {
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
  data?: DescribeIngressResponseBodyData;
  /**
   * @remarks
   * The error codes. Valid values:
   * 
   * *   **ErrorCode** is not returned if a request is successful.
   * *   **ErrorCode** is returned if a request failed. For more information, see **Error code** section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned. Valid values:
   * 
   * *   **success** is returned when a request is successful.
   * *   An error code is returned when the request failed.
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
   * Indicates whether the configurations of Ingresses were queried successfully. Valid values:
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
   * The ID of a trace. The ID is used to query the details of a request.
   * 
   * @example
   * 0a981dd515966966104121683d****
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
      data: DescribeIngressResponseBodyData,
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

