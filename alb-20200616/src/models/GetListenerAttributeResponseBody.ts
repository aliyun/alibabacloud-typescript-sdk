// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetListenerAttributeResponseBodyAclConfig } from "./GetListenerAttributeResponseBodyAclConfig";
import { GetListenerAttributeResponseBodyCaCertificates } from "./GetListenerAttributeResponseBodyCaCertificates";
import { GetListenerAttributeResponseBodyCertificates } from "./GetListenerAttributeResponseBodyCertificates";
import { GetListenerAttributeResponseBodyDefaultActions } from "./GetListenerAttributeResponseBodyDefaultActions";
import { GetListenerAttributeResponseBodyLogConfig } from "./GetListenerAttributeResponseBodyLogConfig";
import { GetListenerAttributeResponseBodyQuicConfig } from "./GetListenerAttributeResponseBodyQuicConfig";
import { GetListenerAttributeResponseBodyTags } from "./GetListenerAttributeResponseBodyTags";
import { GetListenerAttributeResponseBodyXForwardedForConfig } from "./GetListenerAttributeResponseBodyXforwardedForConfig";


export class GetListenerAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations of the access control lists (ACLs).
   */
  aclConfig?: GetListenerAttributeResponseBodyAclConfig;
  /**
   * @remarks
   * A list of default CA certificates.
   */
  caCertificates?: GetListenerAttributeResponseBodyCaCertificates[];
  /**
   * @remarks
   * Indicates whether mutual authentication is enabled. Valid values:
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
   * A list of certificates.
   */
  certificates?: GetListenerAttributeResponseBodyCertificates[];
  /**
   * @remarks
   * The actions of the default forwarding rule.
   */
  defaultActions?: GetListenerAttributeResponseBodyDefaultActions[];
  /**
   * @remarks
   * Indicates whether GZIP compression is enabled to compress specific types of files. Valid values:
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
   * Indicates whether HTTP/2 is enabled. Valid values:
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
   * The timeout period of an idle connection. Unit: seconds.
   * 
   * If no requests are received within the specified timeout period, Application Load Balancer (ALB) closes the current connection. When a request is received, ALB establishes a new connection.
   * 
   * @example
   * 2
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * @example
   * test
   */
  listenerDescription?: string;
  /**
   * @remarks
   * The ID of the listener.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The frontend port that is used by the ALB instance.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The listener protocol. Valid values: **HTTP**, **HTTPS**, and **QUIC**.
   * 
   * @example
   * HTTP
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The status of the listener. Valid values:
   * 
   * *   **Provisioning**
   * *   **Running**
   * *   **Configuring**
   * *   **Stopped**
   * 
   * @example
   * Running
   */
  listenerStatus?: string;
  /**
   * @remarks
   * The ALB instance ID.
   * 
   * @example
   * lb-bp1o94dp5i6ea****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The logging configuration.
   */
  logConfig?: GetListenerAttributeResponseBodyLogConfig;
  /**
   * @remarks
   * The configuration information when the listener is associated with a QUIC listener.
   */
  quicConfig?: GetListenerAttributeResponseBodyQuicConfig;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The timeout period of a request. Unit: seconds.
   * 
   * If no responses are received from the backend server within the specified timeout period, ALB returns an `HTTP 504` error code to the client.
   * 
   * @example
   * 34
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The security policy.
   * 
   * > This parameter is available only when you create an HTTPS listener.
   * 
   * @example
   * tls_cipher_policy_1_1
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetListenerAttributeResponseBodyTags[];
  /**
   * @remarks
   * The configuration of the XForward headers.
   */
  XForwardedForConfig?: GetListenerAttributeResponseBodyXForwardedForConfig;
  static names(): { [key: string]: string } {
    return {
      aclConfig: 'AclConfig',
      caCertificates: 'CaCertificates',
      caEnabled: 'CaEnabled',
      certificates: 'Certificates',
      defaultActions: 'DefaultActions',
      gzipEnabled: 'GzipEnabled',
      http2Enabled: 'Http2Enabled',
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      listenerStatus: 'ListenerStatus',
      loadBalancerId: 'LoadBalancerId',
      logConfig: 'LogConfig',
      quicConfig: 'QuicConfig',
      requestId: 'RequestId',
      requestTimeout: 'RequestTimeout',
      securityPolicyId: 'SecurityPolicyId',
      tags: 'Tags',
      XForwardedForConfig: 'XForwardedForConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclConfig: GetListenerAttributeResponseBodyAclConfig,
      caCertificates: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyCaCertificates },
      caEnabled: 'boolean',
      certificates: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyCertificates },
      defaultActions: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyDefaultActions },
      gzipEnabled: 'boolean',
      http2Enabled: 'boolean',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      listenerStatus: 'string',
      loadBalancerId: 'string',
      logConfig: GetListenerAttributeResponseBodyLogConfig,
      quicConfig: GetListenerAttributeResponseBodyQuicConfig,
      requestId: 'string',
      requestTimeout: 'number',
      securityPolicyId: 'string',
      tags: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyTags },
      XForwardedForConfig: GetListenerAttributeResponseBodyXForwardedForConfig,
    };
  }

  validate() {
    if(this.aclConfig && typeof (this.aclConfig as any).validate === 'function') {
      (this.aclConfig as any).validate();
    }
    if(Array.isArray(this.caCertificates)) {
      $dara.Model.validateArray(this.caCertificates);
    }
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    if(Array.isArray(this.defaultActions)) {
      $dara.Model.validateArray(this.defaultActions);
    }
    if(this.logConfig && typeof (this.logConfig as any).validate === 'function') {
      (this.logConfig as any).validate();
    }
    if(this.quicConfig && typeof (this.quicConfig as any).validate === 'function') {
      (this.quicConfig as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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

