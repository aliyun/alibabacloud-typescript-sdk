// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListListenersResponseBodyListenersDefaultActions } from "./ListListenersResponseBodyListenersDefaultActions";
import { ListListenersResponseBodyListenersLogConfig } from "./ListListenersResponseBodyListenersLogConfig";
import { ListListenersResponseBodyListenersQuicConfig } from "./ListListenersResponseBodyListenersQuicConfig";
import { ListListenersResponseBodyListenersTags } from "./ListListenersResponseBodyListenersTags";
import { ListListenersResponseBodyListenersXForwardedForConfig } from "./ListListenersResponseBodyListenersXforwardedForConfig";


export class ListListenersResponseBodyListeners extends $dara.Model {
  /**
   * @remarks
   * The default actions in the forwarding rules.
   */
  defaultActions?: ListListenersResponseBodyListenersDefaultActions[];
  /**
   * @remarks
   * Indicates whether GZIP compression is enabled to compress specific types of files. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  gzipEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether HTTP/2 is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * false
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * The timeout period of an idle connection. Unit: seconds. Valid values: **1 to 60**.
   * 
   * If no request is received within the specified timeout period, ALB closes the connection. ALB establishes the connection again when a new connection request is received.
   * 
   * @example
   * 3
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
   * The listener ID.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The frontend port that is used by the ALB instance. Valid values: **1 to 65535**.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The listener protocol of the instance. Valid values:
   * 
   * *   **HTTP**
   * *   **HTTPS**
   * *   **QUIC**
   * 
   * @example
   * HTTP
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The status of the listener. Valid values:
   * 
   * *   **Provisioning**: The listener is being created.
   * *   **Running**: The listener is running.
   * *   **Configuring**: The listener is being configured.
   * *   **Stopped**: The listener is disabled.
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
   * lb-bp1b6c719dfa08ex*****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The logging configurations.
   */
  logConfig?: ListListenersResponseBodyListenersLogConfig;
  /**
   * @remarks
   * The configurations of the QUIC listener associated with the ALB instance.
   */
  quicConfig?: ListListenersResponseBodyListenersQuicConfig;
  /**
   * @remarks
   * The timeout period of a request. Unit: seconds. Valid values: **1 to 180**.
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
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * tls_cipher_policy_1_1
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListListenersResponseBodyListenersTags[];
  /**
   * @remarks
   * The configuration of the `XForward` header.
   */
  XForwardedForConfig?: ListListenersResponseBodyListenersXForwardedForConfig;
  static names(): { [key: string]: string } {
    return {
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
      requestTimeout: 'RequestTimeout',
      securityPolicyId: 'SecurityPolicyId',
      tags: 'Tags',
      XForwardedForConfig: 'XForwardedForConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultActions: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersDefaultActions },
      gzipEnabled: 'boolean',
      http2Enabled: 'boolean',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      listenerStatus: 'string',
      loadBalancerId: 'string',
      logConfig: ListListenersResponseBodyListenersLogConfig,
      quicConfig: ListListenersResponseBodyListenersQuicConfig,
      requestTimeout: 'number',
      securityPolicyId: 'string',
      tags: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersTags },
      XForwardedForConfig: ListListenersResponseBodyListenersXForwardedForConfig,
    };
  }

  validate() {
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

