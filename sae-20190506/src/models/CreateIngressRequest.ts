// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIngressRequest extends $dara.Model {
  /**
   * @remarks
   * -
   * 
   * @example
   * -
   */
  addressType?: string;
  /**
   * @remarks
   * The ID of the **CLB** certificate. Valid values:
   * 
   * *   If you set **LoadBalanceType** to **clb**, you can use CertId to configure a certificate for the HTTPS listener.
   * 
   * For more information about how to use SSL certificate IDs for CLB, see [Manage certificates (CLB)](https://help.aliyun.com/document_detail/90792.html).
   * 
   * @example
   * 188077086902****_176993d****_181437****_108724****
   */
  certId?: string;
  /**
   * @remarks
   * The ID of the multi-certificate **ALB**. Valid values:
   * 
   * *   If the **LoadBalanceType** is **alb**, use this field to configure multiple certificates for HTTPS listeners. Separate multiple certificate IDs with commas (,).
   * *   The ID of the SSL certificate used by ALB must be obtained from the digital certificate product. For example, in the configuration `756***-cn-hangzhou`, the `756***` is the certificate ID obtained from the product page, and the `-cn-hangzhou` is a fixed suffix. For more information, see [Manage certificates](https://help.aliyun.com/document_detail/209076.html).
   * 
   * @example
   * 87***35-cn-hangzhou,812***3-cn-hangzhou
   */
  certIds?: string;
  /**
   * @remarks
   * -
   * 
   * @example
   * -
   */
  corsConfig?: string;
  /**
   * @remarks
   * The default forwarding rule. Forwards traffic to a specified application through a specified port based on the IP address. The following table describes the parameters.
   * 
   * *   **appId**: the ID of the application.
   * *   **containerPort**: The port of the application instance.
   * 
   * >  All requests that do not match or satisfy **Rules** forwarding rules are forwarded to the specified application.
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
   * -
   * 
   * @example
   * -
   */
  enableGzip?: boolean;
  /**
   * @remarks
   * -
   * 
   * @example
   * -
   */
  enableXForwardedFor?: boolean;
  /**
   * @remarks
   * -
   * 
   * @example
   * -
   */
  enableXForwardedForClientSrcPort?: boolean;
  /**
   * @remarks
   * -
   * 
   * @example
   * -
   */
  enableXForwardedForProto?: boolean;
  /**
   * @remarks
   * -
   * 
   * @example
   * -
   */
  enableXForwardedForSlbId?: boolean;
  /**
   * @remarks
   * -
   * 
   * @example
   * -
   */
  enableXForwardedForSlbPort?: boolean;
  /**
   * @remarks
   * Specifies the connection idle timeout period. Unit: seconds. Valid values: 1 to 60. If there is no access request within the timeout period, the SLB will temporarily interrupt the current connection until the next request comes to re-establish a new connection.
   * 
   * @example
   * 15
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The SLB listening port. This port cannot be occupied.
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
   * *   **HTTP**: suitable for applications that need to identify data content.
   * *   **HTTPS**: suitable for applications that require encrypted transmission.
   * 
   * @example
   * HTTP
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * SLB the type of the SLB instance. It depends on the type that you entered when you created the routing rule and cannot be changed when you update it. Valid values:
   * 
   * *   **clb**: traditional SLB CLB (formerly SLB).
   * *   **alb**: Applied SLB ALB.
   * 
   * @example
   * clb
   */
  loadBalanceType?: string;
  /**
   * @remarks
   * -
   * 
   * @example
   * -
   */
  loadBalancerEdition?: string;
  /**
   * @remarks
   * The ID of the namespace where the application resides. Currently, cross-namespace applications are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing:sae-test
   */
  namespaceId?: string;
  /**
   * @remarks
   * Specifies the request timeout period. Unit: seconds. Valid values: 1 to 180. If the backend server does not respond within the timeout period, the SLB abandons the wait and returns an HTTP 504 error code to the client.
   * 
   * @example
   * 3
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The forwarding rule. Forwards traffic to a specified application through a specified port based on the domain name and request path. The following table describes the parameters.
   * 
   * *   **appId**: the ID of the application.
   * *   **containerPort**: The port of the application instance.
   * *   **domain**: the domain name.
   * *   **path**: the request path.
   * *   **backendProtocol**: The backend service protocol. Valid values: http, https, and grpc. Default value: http.
   * *   **rewritePath**: Rewrite the path.
   * 
   * >  Only ALB allows you to set the RewritePath feature. CLB does not support this feature.
   * 
   * This parameter is required.
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
   * sp-bp1bpn0kn9****
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The Server Load Balancer (SLB) instance that is used by the routing rule.
   * 
   * >  SLB SLB instances include CLB instances and ALB instances.
   * 
   * @example
   * lb-uf6hucc7inlqrtcq5****
   */
  slbId?: string;
  /**
   * @remarks
   * -
   * 
   * @example
   * -
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

