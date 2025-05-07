// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIngressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate that is associated with the Classic Load Balancer (**CLB**) instance.
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
   * The IDs of the certificates that are associated with the Application Load Balancer (**ALB**) instance.
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
   * The default forwarding rule. You can specify a port and an application in the default forwarding rule to forward traffic based on the IP address. The following list describes the involved parameters:
   * 
   * *   **appId**: the ID of the application.
   * *   **containerPort**: the container port of the application.
   * 
   * >  All requests that do not match the forwarding rules specified for Rules are forwarded over the port to the application.
   * 
   * @example
   * {"appId":"395b60e4-0550-458d-9c54-a265d036****","containerPort":8080}
   */
  defaultRule?: string;
  /**
   * @remarks
   * The name of the routing rule.
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
   * The timeout period of idle connections. Unit: seconds.
   * 
   * >  A value of 0 indicates that the default value is used.
   * 
   * @example
   * 15
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The ID of the routing rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 87
   */
  ingressId?: number;
  /**
   * @remarks
   * The port specified for the Server Load Balancer (SLB) listener. You must specify a vacant port.
   * 
   * @example
   * 443
   */
  listenerPort?: string;
  /**
   * @remarks
   * The protocol that is used to forward requests. Valid values:
   * 
   * *   **HTTP**: HTTP is suitable for applications that need to identify the transmitted data.
   * *   **HTTPS**: HTTPS is suitable for applications that require encrypted data transmission.
   * 
   * @example
   * HTTP
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * @example
   * clb
   */
  loadBalanceType?: string;
  /**
   * @remarks
   * The request timed out. Unit: seconds.
   * 
   * @example
   * 60
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
   * tls_cipher_policy_1_2_strict_with_1_3
   */
  securityPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certIds: 'CertIds',
      corsConfig: 'CorsConfig',
      defaultRule: 'DefaultRule',
      description: 'Description',
      enableXForwardedFor: 'EnableXForwardedFor',
      enableXForwardedForClientSrcPort: 'EnableXForwardedForClientSrcPort',
      enableXForwardedForProto: 'EnableXForwardedForProto',
      enableXForwardedForSlbId: 'EnableXForwardedForSlbId',
      enableXForwardedForSlbPort: 'EnableXForwardedForSlbPort',
      idleTimeout: 'IdleTimeout',
      ingressId: 'IngressId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalanceType: 'LoadBalanceType',
      requestTimeout: 'RequestTimeout',
      rules: 'Rules',
      securityPolicyId: 'SecurityPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      certIds: 'string',
      corsConfig: 'string',
      defaultRule: 'string',
      description: 'string',
      enableXForwardedFor: 'boolean',
      enableXForwardedForClientSrcPort: 'boolean',
      enableXForwardedForProto: 'boolean',
      enableXForwardedForSlbId: 'boolean',
      enableXForwardedForSlbPort: 'boolean',
      idleTimeout: 'number',
      ingressId: 'number',
      listenerPort: 'string',
      listenerProtocol: 'string',
      loadBalanceType: 'string',
      requestTimeout: 'number',
      rules: 'string',
      securityPolicyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

