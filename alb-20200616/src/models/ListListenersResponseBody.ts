// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenersResponseBodyListenersDefaultActionsForwardGroupConfigServerGroupTuples extends $dara.Model {
  /**
   * @remarks
   * The ID of the server group to which requests are forwarded.
   * 
   * @example
   * rsp-cige6j****
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersDefaultActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The server groups to which requests are forwarded.
   */
  serverGroupTuples?: ListListenersResponseBodyListenersDefaultActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersDefaultActionsForwardGroupConfigServerGroupTuples },
    };
  }

  validate() {
    if(Array.isArray(this.serverGroupTuples)) {
      $dara.Model.validateArray(this.serverGroupTuples);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersDefaultActions extends $dara.Model {
  /**
   * @remarks
   * The configuration of the forwarding rule action. This parameter takes effect only when the action is **ForwardGroup**.
   */
  forwardGroupConfig?: ListListenersResponseBodyListenersDefaultActionsForwardGroupConfig;
  /**
   * @remarks
   * The action. **ForwardGroup**: forwards requests to multiple server groups.
   * 
   * @example
   * ForwardGroup
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      forwardGroupConfig: 'ForwardGroupConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardGroupConfig: ListListenersResponseBodyListenersDefaultActionsForwardGroupConfig,
      type: 'string',
    };
  }

  validate() {
    if(this.forwardGroupConfig && typeof (this.forwardGroupConfig as any).validate === 'function') {
      (this.forwardGroupConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersLogConfigAccessLogTracingConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether xtrace is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter can be set to **true** only when the access log feature of ALB is enabled by setting **AccessLogEnabled** to true.
   * 
   * @example
   * true
   */
  tracingEnabled?: boolean;
  /**
   * @remarks
   * The sampling rate of xtrace. Valid values: **1 to 10000**.
   * 
   * >  This parameter takes effect when **TracingEnabled** is set to **true**.
   * 
   * @example
   * 100
   */
  tracingSample?: number;
  /**
   * @remarks
   * The type of xtrace. The value is set to **Zipkin**.
   * 
   * >  This parameter takes effect when **TracingEnabled** is set to **true**.
   * 
   * @example
   * Zipkin
   */
  tracingType?: string;
  static names(): { [key: string]: string } {
    return {
      tracingEnabled: 'TracingEnabled',
      tracingSample: 'TracingSample',
      tracingType: 'TracingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tracingEnabled: 'boolean',
      tracingSample: 'number',
      tracingType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersLogConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether custom headers are carried in the access log. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  accessLogRecordCustomizedHeadersEnabled?: boolean;
  /**
   * @remarks
   * The configurations of xtrace.
   */
  accessLogTracingConfig?: ListListenersResponseBodyListenersLogConfigAccessLogTracingConfig;
  static names(): { [key: string]: string } {
    return {
      accessLogRecordCustomizedHeadersEnabled: 'AccessLogRecordCustomizedHeadersEnabled',
      accessLogTracingConfig: 'AccessLogTracingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogRecordCustomizedHeadersEnabled: 'boolean',
      accessLogTracingConfig: ListListenersResponseBodyListenersLogConfigAccessLogTracingConfig,
    };
  }

  validate() {
    if(this.accessLogTracingConfig && typeof (this.accessLogTracingConfig as any).validate === 'function') {
      (this.accessLogTracingConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersQuicConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the QUIC listener associated with the ALB instance. This parameter is required if the **QuicUpgradeEnabled** parameter is set to **true**. Only HTTPS listeners support this parameter.
   * 
   * >  The existing listener and QUIC listener must be to the same ALB instance, and the QUIC listener has not been associated with an ALB instance.
   * 
   * @example
   * lsr-bp1bpn908w4nbw****
   */
  quicListenerId?: string;
  /**
   * @remarks
   * Indicates whether QUIC upgrade is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * true
   */
  quicUpgradeEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      quicListenerId: 'QuicListenerId',
      quicUpgradeEnabled: 'QuicUpgradeEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quicListenerId: 'string',
      quicUpgradeEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
   * 
   * @example
   * product
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersXForwardedForConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the custom header. This parameter takes effect only when **XForwardedForClientCertClientVerifyEnabled** is set to **true**.
   * 
   * The name must be 1 to 40 characters in length, and can contain lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * test_client-verify-alias_123456
   */
  XForwardedForClientCertClientVerifyAlias?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Clientcert-clientverify` header is used to obtain the verification result of the client certificate. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * true
   */
  XForwardedForClientCertClientVerifyEnabled?: boolean;
  /**
   * @remarks
   * The name of the custom header. This parameter takes effect only when **XForwardedForClientCertFingerprintEnabled** is set to **true**.
   * 
   * The name must be 1 to 40 characters in length, and can contain lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * test_finger-print-alias_123456
   */
  XForwardedForClientCertFingerprintAlias?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Clientcert-fingerprint` header is used to retrieve the fingerprint of the client certificate. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * true
   */
  XForwardedForClientCertFingerprintEnabled?: boolean;
  /**
   * @remarks
   * The name of the custom header. This parameter takes effect only when **XForwardedForClientCertIssuerDNEnabled** is set to **true**.
   * 
   * The name must be 1 to 40 characters in length, and can contain lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * test_issue-dn-alias_123456
   */
  XForwardedForClientCertIssuerDNAlias?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Clientcert-issuerdn` header is used to retrieve information about the authority that issues the client certificate. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * true
   */
  XForwardedForClientCertIssuerDNEnabled?: boolean;
  /**
   * @remarks
   * The name of the custom header. This parameter takes effect only when **XForwardedForClientCertSubjectDNEnabled** is set to **true**.
   * 
   * The name must be 1 to 40 characters in length, and can contain lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * test_subject-dn-alias_123456
   */
  XForwardedForClientCertSubjectDNAlias?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Clientcert-subjectdn` header is used to retrieve information about the owner of the client certificate. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * true
   */
  XForwardedForClientCertSubjectDNEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the X-Forwarded-For header is used to preserver client IP addresses for the ALB instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is returned only for HTTP and HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForClientSourceIpsEnabled?: boolean;
  /**
   * @remarks
   * The trusted proxy IP address.
   * 
   * ALB instances traverse the IP addresses in the `X-Forwarded-For` header from the rightmost IP address to the leftmost IP address. The first IP address that is not on the trusted IP address list is considered the client IP address. Requests from the client IP address are throttled.
   * 
   * @example
   * 10.1.1.0/24
   */
  XForwardedForClientSourceIpsTrusted?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Client-Port` header is used to retrieve the client port. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is returned only for HTTP and HTTPS listeners.
   * 
   * @example
   * true
   */
  XForwardedForClientSrcPortEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-For` header to retrieve client IP addresses. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * > *   If this parameter is set to **true**, the default value of the **XForwardedForProcessingMode** parameter is **append**. You can change it to **remove**.
   * > *   If this parameter is set to **false**, the `X-Forwarded-For` header in the request is not modified in any way before the request is sent to backend servers.
   * > *   Both HTTP and HTTPS listeners support this parameter.
   * 
   * @example
   * true
   */
  XForwardedForEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Host` header to retrieve client domain names. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >  HTTP, HTTPS, and QUIC listeners all support this parameter.
   * 
   * @example
   * false
   */
  XForwardedForHostEnabled?: boolean;
  /**
   * @remarks
   * Specifies how the `X-Forwarded-For` header is processed. This parameter takes effect only when **XForwardedForEnabled** is set to **true**. Valid values:
   * 
   * *   **append** (default)
   * *   **remove**
   * 
   * > *   If this parameter is set to **append**, ALB appends the IP address of the last hop to the existing `X-Forwarded-For` header in the request before the request is sent to backend servers.
   * > *   If this parameter is set to **remove**, ALB removes the `X-Forwarded-For` header in the request before the request is sent to backend servers, no matter whether the request carries the `X-Forwarded-For` header.
   * > *   Both HTTP and HTTPS listeners support this parameter.
   * 
   * @example
   * append
   */
  XForwardedForProcessingMode?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Proto` header is used to retrieve the listener protocol. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is supported by HTTP, HTTPS, and QUIC listeners.
   * 
   * @example
   * true
   */
  XForwardedForProtoEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `SLB-ID` header to retrieve the ID of the ALB instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is supported by HTTP, HTTPS, and QUIC listeners.
   * 
   * @example
   * true
   */
  XForwardedForSLBIdEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Port` header is used to retrieve the listener port of the ALB instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is supported by HTTP, HTTPS, and QUIC listeners.
   * 
   * @example
   * true
   */
  XForwardedForSLBPortEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      XForwardedForClientCertClientVerifyAlias: 'XForwardedForClientCertClientVerifyAlias',
      XForwardedForClientCertClientVerifyEnabled: 'XForwardedForClientCertClientVerifyEnabled',
      XForwardedForClientCertFingerprintAlias: 'XForwardedForClientCertFingerprintAlias',
      XForwardedForClientCertFingerprintEnabled: 'XForwardedForClientCertFingerprintEnabled',
      XForwardedForClientCertIssuerDNAlias: 'XForwardedForClientCertIssuerDNAlias',
      XForwardedForClientCertIssuerDNEnabled: 'XForwardedForClientCertIssuerDNEnabled',
      XForwardedForClientCertSubjectDNAlias: 'XForwardedForClientCertSubjectDNAlias',
      XForwardedForClientCertSubjectDNEnabled: 'XForwardedForClientCertSubjectDNEnabled',
      XForwardedForClientSourceIpsEnabled: 'XForwardedForClientSourceIpsEnabled',
      XForwardedForClientSourceIpsTrusted: 'XForwardedForClientSourceIpsTrusted',
      XForwardedForClientSrcPortEnabled: 'XForwardedForClientSrcPortEnabled',
      XForwardedForEnabled: 'XForwardedForEnabled',
      XForwardedForHostEnabled: 'XForwardedForHostEnabled',
      XForwardedForProcessingMode: 'XForwardedForProcessingMode',
      XForwardedForProtoEnabled: 'XForwardedForProtoEnabled',
      XForwardedForSLBIdEnabled: 'XForwardedForSLBIdEnabled',
      XForwardedForSLBPortEnabled: 'XForwardedForSLBPortEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedForClientCertClientVerifyAlias: 'string',
      XForwardedForClientCertClientVerifyEnabled: 'boolean',
      XForwardedForClientCertFingerprintAlias: 'string',
      XForwardedForClientCertFingerprintEnabled: 'boolean',
      XForwardedForClientCertIssuerDNAlias: 'string',
      XForwardedForClientCertIssuerDNEnabled: 'boolean',
      XForwardedForClientCertSubjectDNAlias: 'string',
      XForwardedForClientCertSubjectDNEnabled: 'boolean',
      XForwardedForClientSourceIpsEnabled: 'boolean',
      XForwardedForClientSourceIpsTrusted: 'string',
      XForwardedForClientSrcPortEnabled: 'boolean',
      XForwardedForEnabled: 'boolean',
      XForwardedForHostEnabled: 'boolean',
      XForwardedForProcessingMode: 'string',
      XForwardedForProtoEnabled: 'boolean',
      XForwardedForSLBIdEnabled: 'boolean',
      XForwardedForSLBPortEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListListenersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The listeners.
   */
  listeners?: ListListenersResponseBodyListeners[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The position where the query stopped. If this parameter is not returned, all data is queried.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
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
   * The total number of entries returned.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: { 'type': 'array', 'itemType': ListListenersResponseBodyListeners },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.listeners)) {
      $dara.Model.validateArray(this.listeners);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

