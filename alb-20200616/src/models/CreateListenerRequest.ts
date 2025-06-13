// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateListenerRequestCaCertificates } from "./CreateListenerRequestCaCertificates";
import { CreateListenerRequestCertificates } from "./CreateListenerRequestCertificates";
import { CreateListenerRequestDefaultActions } from "./CreateListenerRequestDefaultActions";
import { CreateListenerRequestQuicConfig } from "./CreateListenerRequestQuicConfig";
import { CreateListenerRequestTag } from "./CreateListenerRequestTag";
import { CreateListenerRequestXForwardedForConfig } from "./CreateListenerRequestXforwardedForConfig";


export class CreateListenerRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate authority (CA) certificates. You can specify only one CA certificate.
   */
  caCertificates?: CreateListenerRequestCaCertificates[];
  /**
   * @remarks
   * Specifies whether to enable mutual authentication. Valid values:
   * 
   * *   **true**: enables mutual authentication.
   * *   **false** (default): disables mutual authentication.
   * 
   * @example
   * false
   */
  caEnabled?: boolean;
  /**
   * @remarks
   * The details about each certificate.
   */
  certificates?: CreateListenerRequestCertificates[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among all requests. The token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, the system automatically uses the value of **RequestId** as the value of **ClientToken**. **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The actions of the forwarding rule.
   * 
   * This parameter is required.
   */
  defaultActions?: CreateListenerRequestDefaultActions[];
  /**
   * @remarks
   * Specifies whether to perform only a precheck. Valid values:
   * 
   * *   **true**: prechecks the request without creating a listener. The system checks the required parameters, request syntax, and limits. If the request fails the precheck, an error code is returned based on the cause of the failure. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the API request. If the request passes the precheck, a 2xx HTTP status code is returned and the system proceeds to create a listener.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable `Gzip` compression to compress specific types of files. Valid values:
   * 
   * *   **true** (default): enables Gzip compression.
   * *   **false**: disables Gzip compression.
   * 
   * @example
   * true
   */
  gzipEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable `HTTP/2`. Valid values:
   * 
   * *   **true** (default): enables HTTP/2.
   * *   **false**: disables HTTP/2.
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * true
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * The timeout period of an idle connection. Unit: seconds.
   * 
   * Valid values: **1 to 60**.
   * 
   * Default value: **15**.
   * 
   * If no requests are received within the specified timeout period, ALB closes the current connection. When a new request is received, ALB establishes a new connection.
   * 
   * @example
   * 3
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * The description must be 2 to 256 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Regular expressions are supported.
   * 
   * @example
   * HTTP_80
   */
  listenerDescription?: string;
  /**
   * @remarks
   * The frontend port that is used by the ALB instance.
   * 
   * Valid values: **1 to 65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The listener protocol.
   * 
   * Valid values: **HTTP**, **HTTPS**, and **QUIC**.
   * 
   * This parameter is required.
   * 
   * @example
   * HTTP
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The ID of the ALB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alb-n5qw04uq8vavfe****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * Select a QUIC listener and associate it with the ALB instance.
   */
  quicConfig?: CreateListenerRequestQuicConfig;
  /**
   * @remarks
   * The timeout period of a request. Unit: seconds.
   * 
   * Valid values: **1 to 180**.
   * 
   * Default value: **60**.
   * 
   * If no response is received from the backend server during the request timeout period, ALB sends an `HTTP 504` error code to the client.
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The ID of the security policy. System security policies and custom security policies are supported.
   * 
   * Default value: **tls_cipher_policy_1_0** (system security policy).
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * tls_cipher_policy_1_0
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateListenerRequestTag[];
  /**
   * @remarks
   * The configuration of the XForward header.
   */
  XForwardedForConfig?: CreateListenerRequestXForwardedForConfig;
  static names(): { [key: string]: string } {
    return {
      caCertificates: 'CaCertificates',
      caEnabled: 'CaEnabled',
      certificates: 'Certificates',
      clientToken: 'ClientToken',
      defaultActions: 'DefaultActions',
      dryRun: 'DryRun',
      gzipEnabled: 'GzipEnabled',
      http2Enabled: 'Http2Enabled',
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      quicConfig: 'QuicConfig',
      requestTimeout: 'RequestTimeout',
      securityPolicyId: 'SecurityPolicyId',
      tag: 'Tag',
      XForwardedForConfig: 'XForwardedForConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertificates: { 'type': 'array', 'itemType': CreateListenerRequestCaCertificates },
      caEnabled: 'boolean',
      certificates: { 'type': 'array', 'itemType': CreateListenerRequestCertificates },
      clientToken: 'string',
      defaultActions: { 'type': 'array', 'itemType': CreateListenerRequestDefaultActions },
      dryRun: 'boolean',
      gzipEnabled: 'boolean',
      http2Enabled: 'boolean',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      quicConfig: CreateListenerRequestQuicConfig,
      requestTimeout: 'number',
      securityPolicyId: 'string',
      tag: { 'type': 'array', 'itemType': CreateListenerRequestTag },
      XForwardedForConfig: CreateListenerRequestXForwardedForConfig,
    };
  }

  validate() {
    if(Array.isArray(this.caCertificates)) {
      $dara.Model.validateArray(this.caCertificates);
    }
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    if(Array.isArray(this.defaultActions)) {
      $dara.Model.validateArray(this.defaultActions);
    }
    if(this.quicConfig && typeof (this.quicConfig as any).validate === 'function') {
      (this.quicConfig as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(this.XForwardedForConfig && typeof (this.XForwardedForConfig as any).validate === 'function') {
      (this.XForwardedForConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

