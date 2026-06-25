// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIngressRequest extends $dara.Model {
  /**
   * @remarks
   * The address type. Valid values:
   * 
   * - `Internet`: A public address.
   * 
   * - `Intranet`: A private address.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * The ID of the **CLB** certificate.
   * 
   * - If `LoadBalanceType` is set to `clb`, use this parameter to configure the HTTPS listener certificate.
   * 
   * For more information about how to use SSL certificate IDs for CLB, see [Manage Certificates (CLB)](https://help.aliyun.com/document_detail/90792.html).
   * 
   * @example
   * 188077086902****_176993d****_181437****_108724****
   */
  certId?: string;
  /**
   * @remarks
   * The IDs of the **ALB** certificates.
   * 
   * - If `LoadBalanceType` is set to `alb`, use this parameter to configure multiple certificates for the HTTPS listener. Separate multiple certificate IDs with a comma (,).
   * 
   * - Obtain the SSL certificate ID for an ALB instance from the digital certificate service. For example, if you configure `756***-cn-hangzhou`, `756***` is the certificate ID obtained from the product page and `-cn-hangzhou` is a fixed suffix. For more information, see [Manage Certificates (ALB)](https://help.aliyun.com/document_detail/209076.html).
   * 
   * @example
   * 87***35-cn-hangzhou,812***3-cn-hangzhou
   */
  certIds?: string;
  /**
   * @remarks
   * Specifies the Cross-Origin Resource Sharing (CORS) configuration.
   * 
   * @example
   * {"Enable":"true"}
   */
  corsConfig?: string;
  /**
   * @remarks
   * The default forwarding rule. Requests that do not match any forwarding rule in the `Rules` parameter are forwarded to the application specified in this rule. The value is a JSON string with the following parameters:
   * 
   * - `appId`: The ID of the application.
   * 
   * - `containerPort`: The port of the application instance.
   * 
   * > This rule serves as a catch-all for traffic that is not handled by other specific forwarding rules.
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
   * Specifies whether to enable Gzip for data compression.
   * 
   * @example
   * true
   */
  enableGzip?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-For` header to retrieve the IP address of the client.
   * 
   * @example
   * true
   */
  enableXForwardedFor?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Port` header to retrieve the source port of the client.
   * 
   * @example
   * true
   */
  enableXForwardedForClientSrcPort?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Proto` header to retrieve the listener protocol of the load balancer instance.
   * 
   * @example
   * true
   */
  enableXForwardedForProto?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `SLB-ID` header to retrieve the ID of the load balancer instance.
   * 
   * @example
   * true
   */
  enableXForwardedForSlbId?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Port` header to retrieve the listener port of the load balancer instance.
   * 
   * @example
   * true
   */
  enableXForwardedForSlbPort?: boolean;
  /**
   * @remarks
   * The connection idle timeout, in seconds. Valid values: 1 to 60. If no request is received within the timeout period, the load balancer temporarily closes the connection. The connection is re-established when the next request is received.
   * 
   * @example
   * 15
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The listener port for the SLB instance. This port must be available.
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
   * - `HTTP`: for applications that do not require encryption.
   * 
   * - `HTTPS`: suitable for applications that require encrypted data transmission.
   * 
   * @example
   * HTTP
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The type of the Server Load Balancer (SLB) instance. This parameter cannot be changed after the routing rule is created. Valid values:
   * 
   * - `clb`: Classic Load Balancer (CLB), formerly known as SLB.
   * 
   * - `alb`: Application Load Balancer (ALB).
   * 
   * @example
   * clb
   */
  loadBalanceType?: string;
  /**
   * @remarks
   * The edition of the Application Load Balancer (ALB) instance. Different editions have different features and billing policies. Valid values:
   * 
   * - `Standard`: Standard edition.
   * 
   * - `StandardWithWaf`: WAF-enhanced edition.
   * 
   * @example
   * Standard
   */
  loadBalancerEdition?: string;
  /**
   * @remarks
   * The ID of the namespace where the application is located. Cross-namespace applications are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing:sae-test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The request timeout, in seconds. Valid values: 1 to 180. If a backend server does not respond within the timeout period, the load balancer stops waiting and returns an HTTP 504 error to the client.
   * 
   * @example
   * 3
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The forwarding rules. These rules route traffic to a specified application based on the domain name and path. The value is a JSON string. Each rule contains the following parameters:
   * 
   * - `appId`: The ID of the application.
   * 
   * - `containerPort`: The port of the application instance.
   * 
   * - `domain`: The domain name.
   * 
   * - `path`: The request path.
   * 
   * - `backendProtocol`: The protocol used by backend servers. Valid values: `http`, `https`, and `grpc`. Default value: `http`.
   * 
   * - `rewritePath`: The rewritten path.
   * 
   * > Only ALB supports path rewriting (`RewritePath`). CLB does not support this feature.
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
   * The ID of the Server Load Balancer (SLB) instance associated with the routing rule.
   * 
   * > Server Load Balancer (SLB) includes Classic Load Balancer (CLB) and Application Load Balancer (ALB) instances.
   * 
   * @example
   * lb-uf6hucc7inlqrtcq5****
   */
  slbId?: string;
  /**
   * @remarks
   * A JSON string that contains the mappings between availability zones and VSwitches. If the current region supports two or more availability zones, you must specify at least two. A ZoneMapping consists of the following parameters:
   * 
   * - `VSwitchId`: a string that specifies the ID of the VSwitch that corresponds to the availability zone. Each availability zone can have only one VSwitch and one subnet.
   * 
   * - `ZoneId`: a string that specifies the ID of the availability zone for the load balancer instance.
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

