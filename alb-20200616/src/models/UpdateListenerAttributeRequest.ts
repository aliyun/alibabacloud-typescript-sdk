// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateListenerAttributeRequestCaCertificates } from "./UpdateListenerAttributeRequestCaCertificates";
import { UpdateListenerAttributeRequestCertificates } from "./UpdateListenerAttributeRequestCertificates";
import { UpdateListenerAttributeRequestDefaultActions } from "./UpdateListenerAttributeRequestDefaultActions";
import { UpdateListenerAttributeRequestQuicConfig } from "./UpdateListenerAttributeRequestQuicConfig";
import { UpdateListenerAttributeRequestXForwardedForConfig } from "./UpdateListenerAttributeRequestXforwardedForConfig";


export class UpdateListenerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The CA certificate. You can specify only one CA certificate.
   */
  caCertificates?: UpdateListenerAttributeRequestCaCertificates[];
  /**
   * @remarks
   * Specifies whether to enable mutual authentication. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  caEnabled?: boolean;
  /**
   * @remarks
   * The certificates. You can add at most 20 certificates.
   * 
   * >  Only server certificates are supported.
   */
  certificates?: UpdateListenerAttributeRequestCertificates[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * The actions of the default forwarding rule.
   */
  defaultActions?: UpdateListenerAttributeRequestDefaultActions[];
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a `2xx HTTP` status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable GZIP compression for specific types of files. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  gzipEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable HTTP/2. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > This parameter is available only when you create an HTTPS listener.
   * 
   * @example
   * true
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * The timeout period for idle connections. Unit: seconds. Valid values: **1 to 60**
   * 
   * If no requests are received within the specified timeout period, ALB closes the current connection. When another request is received, ALB establishes a new connection.
   * 
   * @example
   * 15
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * The name must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * @example
   * HTTP_80
   */
  listenerDescription?: string;
  /**
   * @remarks
   * The ID of the Application Load Balancer (ALB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The configuration information when the listener is associated with a QUIC listener.
   */
  quicConfig?: UpdateListenerAttributeRequestQuicConfig;
  /**
   * @remarks
   * The timeout period of a request. Unit: seconds. Valid values: **1 to 180**.
   * 
   * If no response is received from the backend server within the specified timeout period, ALB returns an `HTTP 504` error code to the client.
   * 
   * @example
   * 3
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The security policy ID. System security policies and custom security policies are supported.
   * 
   * > This parameter is available only when you create an HTTPS listener.
   * 
   * @example
   * tls_cipher_policy_1_0
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The configurations of the X-Forwarded-For header.
   */
  XForwardedForConfig?: UpdateListenerAttributeRequestXForwardedForConfig;
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
      listenerId: 'ListenerId',
      quicConfig: 'QuicConfig',
      requestTimeout: 'RequestTimeout',
      securityPolicyId: 'SecurityPolicyId',
      XForwardedForConfig: 'XForwardedForConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertificates: { 'type': 'array', 'itemType': UpdateListenerAttributeRequestCaCertificates },
      caEnabled: 'boolean',
      certificates: { 'type': 'array', 'itemType': UpdateListenerAttributeRequestCertificates },
      clientToken: 'string',
      defaultActions: { 'type': 'array', 'itemType': UpdateListenerAttributeRequestDefaultActions },
      dryRun: 'boolean',
      gzipEnabled: 'boolean',
      http2Enabled: 'boolean',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerId: 'string',
      quicConfig: UpdateListenerAttributeRequestQuicConfig,
      requestTimeout: 'number',
      securityPolicyId: 'string',
      XForwardedForConfig: UpdateListenerAttributeRequestXForwardedForConfig,
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
    if(this.XForwardedForConfig && typeof (this.XForwardedForConfig as any).validate === 'function') {
      (this.XForwardedForConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

