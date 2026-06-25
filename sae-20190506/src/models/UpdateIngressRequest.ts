// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIngressRequest extends $dara.Model {
  /**
   * @remarks
   * **CLB** certificate ID. Details are as follows:
   * 
   * - If **LoadBalanceType** is **clb**, use this field to configure the HTTPS listener certificate.
   * 
   * For more information about using SSL certificate IDs with CLB, see [Manage Certificates (CLB)]().
   * 
   * @example
   * 188077086902****_176993d****_181437****_108724****
   */
  certId?: string;
  /**
   * @remarks
   * **ALB** multiple certificate IDs. Details are as follows:
   * 
   * - If **LoadBalanceType** is **alb**, use this field to configure multiple HTTPS listener certificates. Separate multiple certificate IDs with commas.
   * 
   * - Obtain the SSL certificate ID used by ALB from the digital certificate product. For example, configure `756***-cn-hangzhou`, where `756***` is the certificate ID obtained from the product page, and `-cn-hangzhou` is a fixed suffix. For more information, see [Manage Certificates (ALB)]().
   * 
   * @example
   * 87***35-cn-hangzhou,812***3-cn-hangzhou
   */
  certIds?: string;
  /**
   * @remarks
   * Cross-domain configuration.
   * 
   * @example
   * {\\"Enable\\":\\"true\\"}
   */
  corsConfig?: string;
  /**
   * @remarks
   * Default forwarding rule. Forward traffic to the specified application by IP address through the specified port. Parameter description:
   * 
   * - **appId**: Application ID.
   * 
   * - **containerPort**: Application instance port.
   * 
   * > All requests that do not match or satisfy the **Rules** forwarding rule are forwarded to this specified application.
   * 
   * @example
   * {"appId":"395b60e4-0550-458d-9c54-a265d036****","containerPort":8080}
   */
  defaultRule?: string;
  /**
   * @remarks
   * Routing rule name.
   * 
   * @example
   * ingress-sae-test
   */
  description?: string;
  /**
   * @remarks
   * Enable or disable data compression.
   * 
   * @example
   * true
   */
  enableGzip?: boolean;
  /**
   * @remarks
   * Enable or disable obtaining the client IP address of the visitor through the X-Forwarded-For header field.
   * 
   * @example
   * true
   */
  enableXForwardedFor?: boolean;
  /**
   * @remarks
   * Obtain the listening port of the SLB instance through the X-Forwarded-Port header field.
   * 
   * @example
   * true
   */
  enableXForwardedForClientSrcPort?: boolean;
  /**
   * @remarks
   * Specifies whether to determine the listener protocol of the SLB instance from the X-Forwarded-Proto header field.
   * 
   * @example
   * true
   */
  enableXForwardedForProto?: boolean;
  /**
   * @remarks
   * Obtain the SLB instance ID through the SLB-ID header field.
   * 
   * @example
   * true
   */
  enableXForwardedForSlbId?: boolean;
  /**
   * @remarks
   * Whether to obtain the listening port of the Server Load Balancer instance from the X-Forwarded-Port header field.
   * 
   * @example
   * true
   */
  enableXForwardedForSlbPort?: boolean;
  /**
   * @remarks
   * Idle connection timeout, in seconds (s).
   * 
   * > A value of 0 indicates that the default idle timeout is used.
   * 
   * @example
   * 15
   */
  idleTimeout?: number;
  /**
   * @remarks
   * Routing rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 87
   */
  ingressId?: number;
  /**
   * @remarks
   * SLB listening port. This port must not be occupied.
   * 
   * @example
   * 443
   */
  listenerPort?: string;
  /**
   * @remarks
   * Forwarding Protocol. Details are as follows:
   * 
   * - **HTTP**: Applies to applications that need to identify data content.
   * 
   * - **HTTPS**: Applies to applications that need encrypted transmission.
   * 
   * @example
   * HTTP
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * Deprecated parameter. Updates are no longer supported.
   * 
   * @example
   * clb
   */
  loadBalanceType?: string;
  /**
   * @remarks
   * Request timeout, in seconds (s).
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * Forwarding rules. Forward traffic to the specified application by domain name and URI of the request through the specified port. Parameter description:
   * 
   * - **appId**: Application ID.
   * 
   * - **containerPort**: Application instance port.
   * 
   * - **domain**: Domain name.
   * 
   * - **path**: URI of the request.
   * 
   * @example
   * [{"appId":"395b60e4-0550-458d-9c54-a265d036****","containerPort":8080,"domain":"www.sae.site","path":"/path1"},{"appId":"666403ce-d25b-47cf-87fe-497565d2****","containerPort":8080,"domain":"sae.site","path":"/path2"}]
   */
  rules?: string;
  /**
   * @remarks
   * Security policy instance ID.
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
      enableGzip: 'EnableGzip',
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
      enableGzip: 'boolean',
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

