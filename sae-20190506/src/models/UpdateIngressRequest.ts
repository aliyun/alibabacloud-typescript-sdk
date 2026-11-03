// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIngressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Classic Load Balancer (CLB) certificate. Valid values:
   * 
   * - If **LoadBalanceType** is set to **clb**, use this field to configure the certificate for the HTTPS listener.
   * 
   * For more information about using SSL certificate IDs in CLB, see [Manage certificates (CLB)](https://help.aliyun.com/document_detail/90792.html).
   * 
   * @example
   * 188077086902****_176993d****_181437****_108724****
   */
  certId?: string;
  /**
   * @remarks
   * The IDs of multiple Application Load Balancer (ALB) certificates. Valid values:
   * 
   * - If **LoadBalanceType** is set to **alb**, use this field to configure multiple certificates for the HTTPS listener. Separate multiple certificate IDs with commas (,).
   * 
   * - You must obtain the SSL certificate IDs used by ALB from the Certificate Management Service. For example, if you configure `756***-cn-hangzhou`, `756***` is the certificate ID obtained from the product page, and `-cn-hangzhou` is a fixed suffix. For more information, see [Manage certificates (ALB)](https://help.aliyun.com/document_detail/209076.html).
   * 
   * @example
   * 87***35-cn-hangzhou,812***3-cn-hangzhou
   */
  certIds?: string;
  /**
   * @remarks
   * The cross-origin resource sharing (CORS) configuration.
   * 
   * @example
   * {\\"Enable\\":\\"true\\"}
   */
  corsConfig?: string;
  /**
   * @remarks
   * The default forwarding rule. Traffic is forwarded to a specified application through a specified port based on the IP address. The parameters are described as follows:
   * 
   * - **appId**: the ID of the application.
   * - **containerPort**: the port of the application instance.
   * 
   * > All requests that do not match or meet the forwarding rules in **Rules** are forwarded to the specified application.
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
  /**
   * @remarks
   * Specifies whether to enable data compression.
   * 
   * @example
   * true
   */
  enableGzip?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the retrieval of the client IP address through the X-Forwarded-For header field.
   * 
   * @example
   * true
   */
  enableXForwardedFor?: boolean;
  /**
   * @remarks
   * Specifies whether to retrieve the listening port of the load balancing instance through the X-Forwarded-Port header field.
   * 
   * @example
   * true
   */
  enableXForwardedForClientSrcPort?: boolean;
  /**
   * @remarks
   * Specifies whether to retrieve the listening protocol of the load balancing instance through the X-Forwarded-Proto header field.
   * 
   * @example
   * true
   */
  enableXForwardedForProto?: boolean;
  /**
   * @remarks
   * Specifies whether to retrieve the instance ID of the load balancing instance through the SLB-ID header field.
   * 
   * @example
   * true
   */
  enableXForwardedForSlbId?: boolean;
  /**
   * @remarks
   * Specifies whether to retrieve the listening port of the load balancing instance through the X-Forwarded-Port header field.
   * 
   * @example
   * true
   */
  enableXForwardedForSlbPort?: boolean;
  /**
   * @remarks
   * The idle connection timeout period, in seconds.
   * > A value of 0 indicates that the default idle timeout value is used.
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
   * The listening port of the Server Load Balancer (SLB) instance. The port must not be occupied.
   * 
   * @example
   * 443
   */
  listenerPort?: string;
  /**
   * @remarks
   * The request forwarding protocol. Valid values:
   * 
   * - **HTTP**: applicable to applications that need to identify data content.
   * - **HTTPS**: applicable to applications that require encrypted transmission.
   * 
   * @example
   * HTTP
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and updates are no longer supported.
   * 
   * @example
   * clb
   */
  loadBalanceType?: string;
  /**
   * @remarks
   * The request timeout period, in seconds.
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The forwarding rules. Traffic is forwarded to a specified application through a specified port based on the domain name and request path. The parameters are described as follows:
   * 
   * - **appId**: the ID of the application.
   * - **containerPort**: the port of the application instance.
   * - **domain**: the domain name.
   * - **path**: the request path.
   * 
   * @example
   * [{"appId":"395b60e4-0550-458d-9c54-a265d036****","containerPort":8080,"domain":"www.sae.site","path":"/path1"},{"appId":"666403ce-d25b-47cf-87fe-497565d2****","containerPort":8080,"domain":"sae.site","path":"/path2"}]
   */
  rules?: string;
  /**
   * @remarks
   * The ID of the security policy instance.
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

