// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIngressRequest extends $dara.Model {
  /**
   * @remarks
   * The address type. Valid values:
   * - Internet: public network address.
   * - Intranet: private network address.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * The ID of the **CLB** certificate. Valid values:
   * 
   * - If **LoadBalanceType** is set to **clb**, use this field to configure the certificate for the HTTPS listener.
   * 
   * For more information about how to use SSL certificate IDs in CLB, see [Manage certificates (CLB)](https://help.aliyun.com/document_detail/90792.html).
   * 
   * @example
   * 188077086902****_176993d****_181437****_108724****
   */
  certId?: string;
  /**
   * @remarks
   * The IDs of the **ALB** certificates. Valid values:
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
   * {"Enable":"true"}
   */
  corsConfig?: string;
  /**
   * @remarks
   * The default forwarding rule. Traffic is forwarded to the specified application based on the IP address through the specified port. The parameters are as follows:
   * 
   * - **appId**: the ID of the application.
   * - **containerPort**: the port of the application instance.
   * 
   * > All requests that do not match or meet the forwarding rules in **Rules** are forwarded to the specified application.
   * 
   * This parameter is required.
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
   * ingress-for-sae-test
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
   * Specifies whether to enable the feature to obtain the client IP address of the visitor through the X-Forwarded-For header field.
   * 
   * @example
   * true
   */
  enableXForwardedFor?: boolean;
  /**
   * @remarks
   * Specifies whether to obtain the listening port of the load balancing instance through the X-Forwarded-Port header field.
   * 
   * @example
   * true
   */
  enableXForwardedForClientSrcPort?: boolean;
  /**
   * @remarks
   * Specifies whether to obtain the listening protocol of the load balancing instance through the X-Forwarded-Proto header field.
   * 
   * @example
   * true
   */
  enableXForwardedForProto?: boolean;
  /**
   * @remarks
   * Specifies whether to obtain the load balancing instance ID through the SLB-ID header field.
   * 
   * @example
   * true
   */
  enableXForwardedForSlbId?: boolean;
  /**
   * @remarks
   * Specifies whether to obtain the listening port of the load balancing instance through the X-Forwarded-Port header field.
   * 
   * @example
   * true
   */
  enableXForwardedForSlbPort?: boolean;
  /**
   * @remarks
   * Specifies the connection idle timeout period. Unit: seconds. Valid values: 1 to 60. If no access request is received within the timeout period, load balancing temporarily breaks the current connection until a new connection is established when the next request arrives.
   * 
   * @example
   * 15
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The listening port of the SLB instance. The port must not be occupied.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
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
   * The type of the SLB instance. The type depends on the value specified when the routing rule is created and cannot be changed during updates. Valid values:
   * 
   * - **clb**: Classic Load Balancer (CLB).
   * - **alb**: Application Load Balancer (ALB).
   * 
   * @example
   * clb
   */
  loadBalanceType?: string;
  /**
   * @remarks
   * The edition of the Application Load Balancer (ALB). Different editions have different feature limits and billing policy. Valid values:
   * 
   * - **Standard**: Standard Edition.
   * 
   * - **StandardWithWaf**: WAF-enhanced Edition.
   * 
   * @example
   * Standard
   */
  loadBalancerEdition?: string;
  /**
   * @remarks
   * The ID of the namespace where the application resides. Cross-namespace applications are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing:sae-test
   */
  namespaceId?: string;
  /**
   * @remarks
   * Specifies the request timeout period. Unit: seconds. Valid values: 1 to 180. If the backend server does not send a response within the timeout period, load balancing stops waiting and returns an HTTP 504 error code to the client.
   * 
   * @example
   * 3
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The forwarding rules. Traffic is forwarded to the specified application based on the domain name and the request path through the specified port. The parameters are as follows:
   * 
   * - **appId**: the ID of the application.
   * - **containerPort**: the port of the application instance.
   * - **domain**: the domain name.
   * - **path**: the URI of the request.
   * - **backendProtocol**: the backend service Terms of Service. Valid values: http, https, and grpc. Default value: http.
   * - **rewritePath**: the rewrite path.
   * 
   * > Currently, only ALB supports the URL path rewrite (RewritePath) feature. CLB does not support this feature.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"appId":"395b60e4-0550-458d-9c54-a265d036****","containerPort":8080,"domain":"www.sae.site","path":"/path1"},{"appId":"666403ce-d25b-47cf-87fe-497565d2****","containerPort":8080,"domain":"sae.site","path":"/sys/(.*)/(.*)/aaa","backendProtocol":"http"}]
   */
  rules?: string;
  /**
   * @remarks
   * The ID of the security policy instance.
   * 
   * @example
   * sp-bp1bpn0kn9****
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The SLB instance ID used by the routing rule.
   * 
   * > Server Load Balancer (SLB) includes CLB and ALB instances.
   * 
   * @example
   * lb-uf6hucc7inlqrtcq5****
   */
  slbId?: string;
  /**
   * @remarks
   * The JSON string of the zone and vSwitch mapping list. If the current region supports two or more zones, you must add at least two zones. A ZoneMapping structure includes:
   * 
   * - VSwitchId: the vSwitch corresponding to the zone. Data type: String. Only one vSwitch and one subnet can be used in each zone.
   * 
   * - ZoneId: the zone ID of the Network Load Balancer (NLB) instance. Data type: String.
   * 
   * @example
   * [{"VSwitchId":"vsw-wz9klui6icc08p6******","ZoneId":"cn-shenzhen-c"},{"VSwitchId":"vsw-wz9frrmoeuki2wp******","ZoneId":"cn-shenzhen-e"}]
   */
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

