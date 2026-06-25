// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIngressResponseBodyDataCorsConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow credentials in cross-origin requests. Valid values:
   * 
   * - **on**: yes
   * 
   * - **off**: no
   * 
   * @example
   * on
   */
  allowCredentials?: string;
  /**
   * @remarks
   * The headers that are allowed in cross-origin requests.
   * 
   * @example
   * test_123
   */
  allowHeaders?: string;
  /**
   * @remarks
   * The HTTP methods that are allowed for cross-origin requests.
   * 
   * @example
   * GET
   */
  allowMethods?: string;
  /**
   * @remarks
   * The origins that are allowed to access the resource. You can specify a single asterisk (`*`) or one or more specific origins.
   * 
   * - A specific origin must start with `http://` or `https://` and be a valid domain name or a first-level wildcard domain name. Example: `http://*.test.abc.example.com`.
   * 
   * - You can optionally specify a port. The valid port range is **1** to **65535**.
   * 
   * @example
   * *
   */
  allowOrigin?: string;
  /**
   * @remarks
   * Specifies whether to enable CORS.
   * 
   * @example
   * false
   */
  enable?: string;
  /**
   * @remarks
   * The headers that are exposed to clients.
   * 
   * @example
   * test_123
   */
  exposeHeaders?: string;
  /**
   * @remarks
   * The maximum cache duration of preflight requests in the browser, in seconds.
   * 
   * Valid values: **-1** to **172800**.
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

export class DescribeIngressResponseBodyDataDefaultRule extends $dara.Model {
  /**
   * @remarks
   * The ID of the application for the default rule.
   * 
   * @example
   * 395b60e4-0550-458d-9c54-a265d036****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application for the default rule.
   * 
   * @example
   * app1
   */
  appName?: string;
  /**
   * @remarks
   * The backend protocol. Valid values:
   * 
   * - **http**: Suitable for applications that need to identify data content.
   * 
   * - **https**: Suitable for applications that require encrypted transmission.
   * 
   * - **grpc**: Suitable for load balancing gRPC services developed in multiple languages, such as .NET.
   * 
   * This parameter is valid only when the `LoadBalanceType` parameter is set to `alb` and the `ListenerProtocol` parameter is set to `HTTPS`.
   * 
   * @example
   * http
   */
  backendProtocol?: string;
  /**
   * @remarks
   * The backend port for the default rule.
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
  /**
   * @remarks
   * The configuration of the action.
   * 
   * @example
   * {\\"host\\":\\"www.example.com\\",\\"path\\":\\"/example/text\\",\\"query\\":\\"x=1\\"}
   */
  actionConfig?: string;
  /**
   * @remarks
   * The type of the action. Valid values:
   * 
   * - rewrite: a rewrite policy
   * 
   * - redirect: a redirection policy
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

export class DescribeIngressResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination application.
   * 
   * @example
   * 395b60e4-0550-458d-9c54-a265d036****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the destination application.
   * 
   * @example
   * app1
   */
  appName?: string;
  /**
   * @remarks
   * The backend protocol. Valid values:
   * 
   * - **http**: Suitable for applications that need to identify data content.
   * 
   * - **https**: Suitable for applications that require encrypted transmission.
   * 
   * - **grpc**: Suitable for load balancing gRPC services developed in multiple languages, such as .NET.
   * 
   * This parameter is valid only when the `LoadBalanceType` parameter is set to `alb` and the `ListenerProtocol` parameter is set to `HTTPS`.
   * 
   * @example
   * http
   */
  backendProtocol?: string;
  /**
   * @remarks
   * The backend port of the application.
   * 
   * @example
   * 8080
   */
  containerPort?: number;
  /**
   * @remarks
   * The domain name of the application.
   * 
   * @example
   * edas.site
   */
  domain?: string;
  /**
   * @remarks
   * The URL path.
   * 
   * @example
   * /path1
   */
  path?: string;
  /**
   * @remarks
   * The rewritten path.
   * 
   * @example
   * /${1}
   */
  rewritePath?: string;
  /**
   * @remarks
   * The actions of the forwarding rule.
   */
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
   * The ID of the **Classic Load Balancer (CLB)** certificate.
   * 
   * @example
   * 13623****809_16cad216b32_845_-419427029
   */
  certId?: string;
  /**
   * @remarks
   * The comma-separated IDs of the **Application Load Balancer (ALB)** certificates.
   * 
   * @example
   * 87***35-cn-hangzhou,812***3-cn-hangzhou
   */
  certIds?: string;
  /**
   * @remarks
   * The configurations for Cross-Origin Resource Sharing (CORS). Valid HTTP methods:
   * 
   * - **GET**
   * 
   * - **POST**
   * 
   * - **PUT**
   * 
   * - **DELETE**
   * 
   * - **HEAD**
   * 
   * - **OPTIONS**
   * 
   * - **PATCH**
   */
  corsConfig?: DescribeIngressResponseBodyDataCorsConfig;
  /**
   * @remarks
   * Indicates whether the Application Load Balancer (ALB) instance was provisioned by SAE.
   * 
   * @example
   * true
   */
  createdBySae?: boolean;
  /**
   * @remarks
   * The default rule.
   */
  defaultRule?: DescribeIngressResponseBodyDataDefaultRule;
  /**
   * @remarks
   * The description of the Ingress.
   * 
   * @example
   * ingress-sae-test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable Gzip compression.
   */
  enableGzip?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-For` header to retrieve client IP addresses.
   * 
   * @example
   * true
   */
  enableXForwardedFor?: boolean;
  /**
   * @remarks
   * Specifies whether to use a header to retrieve the source port of the client.
   * 
   * @example
   * true
   */
  enableXForwardedForClientSrcPort?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Proto` header to retrieve the listener protocol of the SLB instance.
   * 
   * @example
   * true
   */
  enableXForwardedForProto?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `SLB-ID` header to retrieve the ID of the SLB instance.
   * 
   * @example
   * true
   */
  enableXForwardedForSlbId?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Port` header to retrieve the listener port of the SLB instance.
   * 
   * @example
   * true
   */
  enableXForwardedForSlbPort?: boolean;
  /**
   * @remarks
   * The ID of the Ingress.
   * 
   * @example
   * 87
   */
  id?: number;
  /**
   * @remarks
   * The connection idle timeout, in seconds.
   * 
   * Valid values: 1 to 60.
   * 
   * Default value: 15.
   * 
   * If no request is received within the timeout period, the load balancer closes the connection. A new connection is established when the next request is received.
   * 
   * @example
   * 3
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The listener port of the SLB instance.
   * 
   * @example
   * 443
   */
  listenerPort?: number;
  /**
   * @remarks
   * The request forwarding protocol. Valid values:
   * 
   * - **HTTP**: Suitable for applications that need to identify data content.
   * 
   * - **HTTPS**: Suitable for applications that require encrypted transmission.
   * 
   * This parameter is optional for the `CreateIngress` and `UpdateIngress` operations. It is not returned if it was not specified when the Ingress was created or updated.
   * 
   * @example
   * HTTP
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The type of the Server Load Balancer (SLB) instance. Valid values:
   * 
   * - **clb**: Classic Load Balancer (CLB), formerly known as SLB.
   * 
   * - **alb**: Application Load Balancer (ALB).
   * 
   * @example
   * clb
   */
  loadBalanceType?: string;
  /**
   * @remarks
   * The name of the Ingress.
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
   * cn-beijing:sae-test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The request timeout, in seconds.
   * 
   * Valid values: 1 to 180.
   * 
   * Default value: 60.
   * 
   * If a backend server does not respond within the specified timeout period, the load balancer terminates the request and returns an HTTP 504 error to the client.
   * 
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
   * @remarks
   * The ID of the security policy instance.
   * 
   * @example
   * sp-n0kn923****
   */
  securityPolicyId?: string;
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
   * - **internet**: An internet-facing instance.
   * 
   * - **intranet**: An internal-facing instance.
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
      enableGzip: 'EnableGzip',
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
      enableGzip: 'boolean',
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
   * The HTTP status code returned for the request. Valid values:
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
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
   * The returned data.
   */
  data?: DescribeIngressResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is returned only if the request fails.
   * 
   * - For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
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
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request succeeded.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to query the details of a call.
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

