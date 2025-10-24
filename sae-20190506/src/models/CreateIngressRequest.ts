// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIngressRequest extends $dara.Model {
  addressType?: string;
  /**
   * @remarks
   * The ID of the certificate that is associated with the **CLB** instance.
   * 
   * *   If you set **LoadBalanceType** to **clb**, you can use CertId to configure a certificate for the HTTPS listener.
   * 
   * For more information about how to manage the SSL certificate IDs that are used by CLB instances, see [Overview](https://help.aliyun.com/document_detail/90792.html).
   * 
   * @example
   * 188077086902****_176993d****_181437****_108724****
   */
  certId?: string;
  /**
   * @remarks
   * The IDs of the certificates that are associated with the **ALB** instance.
   * 
   * *   If you set **LoadBalanceType** to **alb**, you can use CertIds to configure multiple certificates for the HTTPS listener. Separate multiple certificate IDs with commas (,).
   * *   The ID of the SSL certificate that is used by an ALB instance can be obtained from Certificate Management Service. For example, if you specify `756***-cn-hangzhou`, `756***` is the certificate ID that is obtained from the service page, and `-cn-hangzhou` is the fixed suffix. For more information, see [Manage certificates](https://help.aliyun.com/document_detail/209076.html).
   * 
   * @example
   * 87***35-cn-hangzhou,812***3-cn-hangzhou
   */
  certIds?: string;
  corsConfig?: string;
  /**
   * @remarks
   * Default forwarding rule. Traffic is forwarded to the specified application through a designated port based on the IP address. Parameter descriptions are as follows:
   * - **appId**: Application ID. - **containerPort**: Application instance port.
   * > All requests that do not match or do not meet the **Rules** for forwarding will be directed to this specified application.
   * 
   * This parameter is required.
   * 
   * @example
   * {"appId":"395b60e4-0550-458d-9c54-a265d036****","containerPort":8080}
   */
  defaultRule?: string;
  /**
   * @remarks
   * Route rule name.
   * 
   * @example
   * ingress-for-sae-test
   */
  description?: string;
  enableGzip?: boolean;
  enableXForwardedFor?: boolean;
  enableXForwardedForClientSrcPort?: boolean;
  enableXForwardedForProto?: boolean;
  enableXForwardedForSlbId?: boolean;
  enableXForwardedForSlbPort?: boolean;
  /**
   * @remarks
   * The timeout period of an idle connection. Unit: seconds Valid values: 1 to 60. If no requests are received within the specified timeout period, ALB closes the current connection. When a new request is received, ALB establishes a new connection.
   * 
   * @example
   * 15
   */
  idleTimeout?: number;
  /**
   * @remarks
   * SThe frontend port that is used by the ALB instance.
   * Valid values: 1 to 65535.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * Request forwarding protocol. The value description is as follows:
   * - **HTTP**: Suitable for applications that need to identify data content. - **HTTPS**: Suitable for applications that require encrypted transmission.
   * 
   * @example
   * HTTP
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The type of the SLB instance. The instance type can be specified only when you create a routing rule. You cannot change the instance type when you update the routing rule. Valid values:
   * 
   * *   **clb**
   * *   **alb**
   * 
   * @example
   * clb
   */
  loadBalanceType?: string;
  loadBalancerEdition?: string;
  /**
   * @remarks
   * The ID of the namespace where the application is located. Currently, cross-namespace applications are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing:sae-test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The timeout period of a request. Unit: seconds. Valid values: 1 to 180. If no response is received from the backend server within the specified timeout period, ALB stops waiting for the response and returns an HTTP 504 error code to the client.
   * 
   * @example
   * 3
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The forwarding rules. You can specify a port and an application in a forwarding rule to forward traffic based on the specified domain name and request path. The following list describes the involved parameters:
   * 
   * *   **appId**: the ID of the application.
   * *   **containerPort**: the container port of the application.
   * *   **domain**: the domain name.
   * *   **path**: the request path.
   * *   **backendProtocol**: the backend service protocol. Valid values: http, https, and grpc. Default value: http.
   * *   **rewritePath**: the rewrite path.
   * 
   * >  The path rewrite feature is supported only by ALB instances.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"appId":"395b60e4-0550-458d-9c54-a265d036****","containerPort":8080,"domain":"www.sae.site","path":"/path1"},{"appId":"666403ce-d25b-47cf-87fe-497565d2****","containerPort":8080,"domain":"sae.site","path":"/path2"}]
   */
  rules?: string;
  /**
   * @remarks
   * The ID of a security policy.
   * 
   * @example
   * sp-bp1bpn0kn9****
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The Server Load Balancer (SLB) instance that is used by the routing rule.
   * 
   * >  The SLB instance can be a Classic Load Balancer (CLB) instance or an Application Load Balancer (ALB) instance.
   * 
   * @example
   * lb-uf6hucc7inlqrtcq5****
   */
  slbId?: string;
  zoneMappings?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      certId: 'CertId',
      certIds: 'CertIds',
      corsConfig: 'CorsConfig',
      defaultRule: 'DefaultRule',
      description: 'Description',
      enableGzip: 'EnableGzip',
      enableXForwardedFor: 'EnableXForwardedFor',
      enableXForwardedForClientSrcPort: 'EnableXForwardedForClientSrcPort',
      enableXForwardedForProto: 'EnableXForwardedForProto',
      enableXForwardedForSlbId: 'EnableXForwardedForSlbId',
      enableXForwardedForSlbPort: 'EnableXForwardedForSlbPort',
      idleTimeout: 'IdleTimeout',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalanceType: 'LoadBalanceType',
      loadBalancerEdition: 'LoadBalancerEdition',
      namespaceId: 'NamespaceId',
      requestTimeout: 'RequestTimeout',
      rules: 'Rules',
      securityPolicyId: 'SecurityPolicyId',
      slbId: 'SlbId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      certId: 'string',
      certIds: 'string',
      corsConfig: 'string',
      defaultRule: 'string',
      description: 'string',
      enableGzip: 'boolean',
      enableXForwardedFor: 'boolean',
      enableXForwardedForClientSrcPort: 'boolean',
      enableXForwardedForProto: 'boolean',
      enableXForwardedForSlbId: 'boolean',
      enableXForwardedForSlbPort: 'boolean',
      idleTimeout: 'number',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalanceType: 'string',
      loadBalancerEdition: 'string',
      namespaceId: 'string',
      requestTimeout: 'number',
      rules: 'string',
      securityPolicyId: 'string',
      slbId: 'string',
      zoneMappings: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

