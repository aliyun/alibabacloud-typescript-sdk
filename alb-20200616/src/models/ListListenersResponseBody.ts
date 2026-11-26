// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenersResponseBodyListenersDefaultActionsForwardGroupConfigServerGroupTuples extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination server group.
   * 
   * @example
   * sgp-i5qt20******
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
   * The destination server groups for forwarding.
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
   * The configuration for the forwarding rule action. This parameter takes effect only when the action type is **ForwardGroup**.
   */
  forwardGroupConfig?: ListListenersResponseBodyListenersDefaultActionsForwardGroupConfig;
  /**
   * @remarks
   * The action type. Valid value: **ForwardGroup**, which indicates forwarding requests to multiple server groups.
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
   * Specifies whether to enable the Xtrace feature. Valid values:
   * 
   * - **true**: yes.
   * - **false**: no.
   * 
   * > You can set this parameter to **true** only when the instance access log switch **AccessLogEnabled** is turned on.
   * 
   * @example
   * true
   */
  tracingEnabled?: boolean;
  /**
   * @remarks
   * The Xtrace sampling rate. Valid values: **1** to **10000**.
   * 
   * > This value takes effect only when **TracingEnabled** is set to **true**.
   * 
   * @example
   * 100
   */
  tracingSample?: number;
  /**
   * @remarks
   * The Xtrace type. Valid value: **Zipkin**.
   * 
   * > This value takes effect only when **TracingEnabled** is set to **true**.
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
   * Specifies whether to include custom headers in access logs. Valid values:
   * 
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  accessLogRecordCustomizedHeadersEnabled?: boolean;
  /**
   * @remarks
   * The Xtrace configuration for access logs.
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
   * The ID of the QUIC listener to be associated. This parameter is required when **QuicUpgradeEnabled** is set to **true**. This parameter takes effect only for HTTPS listeners.
   * 
   * > The original listener and the associated QUIC listener must belong to the same ALB instance, and the QUIC listener must not have been associated before.
   * 
   * @example
   * lsn-o4u54y73wq7b******
   */
  quicListenerId?: string;
  /**
   * @remarks
   * Specifies whether to enable QUIC upgrade. Valid values:
   * 
   * - **true**: yes.
   * - **false**: no.
   * 
   * > This parameter takes effect only for HTTPS listeners.
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
   * The tag key. The key can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
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
   * The custom header field name. This value takes effect only when **XForwardedForClientCertClientVerifyEnabled** is set to **true**.
   * 
   * The value must be 1 to 40 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * test_client-verify-alias_123456
   */
  XForwardedForClientCertClientVerifyAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Clientcert-clientverify` header field to obtain the verification result of the client certificate that accesses the load balancing instance. Valid values:
   * 
   * - **true**: yes.
   * - **false**: no.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * true
   */
  XForwardedForClientCertClientVerifyEnabled?: boolean;
  /**
   * @remarks
   * The custom header name. This value takes effect only when **XForwardedForClientCertFingerprintEnabled** is set to **true**.
   * 
   * The value must be 1 to 40 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * test_finger-print-alias_123456
   */
  XForwardedForClientCertFingerprintAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Clientcert-fingerprint` header field to obtain the fingerprint of the client certificate that accesses the load balancing instance. Valid values:
   * 
   * - **true**: yes.
   * - **false**: no.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * true
   */
  XForwardedForClientCertFingerprintEnabled?: boolean;
  /**
   * @remarks
   * The custom header name. This value takes effect only when **XForwardedForClientCertIssuerDNEnabled** is set to **true**.
   * 
   * The value must be 1 to 40 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * test_issue-dn-alias_123456
   */
  XForwardedForClientCertIssuerDNAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Clientcert-issuerdn` header field to obtain the issuer information of the client certificate that accesses the load balancing instance. Valid values:
   * 
   * - **true**: yes.
   * - **false**: no.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * true
   */
  XForwardedForClientCertIssuerDNEnabled?: boolean;
  /**
   * @remarks
   * The custom header name. This value takes effect only when **XForwardedForClientCertSubjectDNEnabled** is set to **true**.
   * 
   * The value must be 1 to 40 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * test_subject-dn-alias_123456
   */
  XForwardedForClientCertSubjectDNAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Clientcert-subjectdn` header field to obtain the subject information of the client certificate that accesses the load balancing instance. Valid values:
   * 
   * - **true**: yes.
   * - **false**: no.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * true
   */
  XForwardedForClientCertSubjectDNEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to allow ALB to retrieve the actual client IP address from the X-Forwarded-For header field. Valid values:
   * 
   * - **true**: yes.
   * 
   * - **false**: no.
   * 
   * > This parameter is supported by HTTP and HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForClientSourceIpsEnabled?: boolean;
  /**
   * @remarks
   * Specifies the trusted proxy IP addresses.
   * 
   * Application load balancing ALB traverses the `X-Forwarded-For` header field from back to front and selects the first IP address that is not in the trusted IP address list as the actual client IP address. This IP address is used for source IP address-based rate limiting.
   * 
   * @example
   * 10.1.1.0/24
   */
  XForwardedForClientSourceIpsTrusted?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Client-Port` header to obtain the port of the client that accesses the load balancing instance. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > HTTP and HTTPS listeners support this parameter.
   * 
   * @example
   * true
   */
  XForwardedForClientSrcPortEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-For` header to obtain the real IP address of the client. Valid values:
   * - **true** (default): Yes.
   * - **false**: No.
   * 
   * > 1. If you set this parameter to **true**, the default value of **XForwardedForProcessingMode** is **append**, and you can change it to **remove**.
   * > 2. If you set this parameter to **false**, the `X-Forwarded-For` header is retained without additional processing before the request is sent to the backend server.
   * > 3. HTTP and HTTPS listeners support this parameter.
   * 
   * @example
   * true
   */
  XForwardedForEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Host` header to obtain the domain name of the client that accesses the load balancing instance. Valid values:
   * - **true**: Yes.
   * - **false** (default): No.
   * 
   * > HTTP, HTTPS, and QUIC listeners support this parameter.
   * 
   * @example
   * false
   */
  XForwardedForHostEnabled?: boolean;
  /**
   * @remarks
   * The processing mode for the `X-Forwarded-For` header. This parameter takes effect only when **XForwardedForEnabled** is set to **true**. Valid values:
   * - **append** (default): Append.
   * - **remove**: Remove.
   * 
   * > 1. If you set this parameter to **append**, the IP address of the last hop is added to the `X-Forwarded-For` header before the request is sent to the backend server.
   * > 2. If you set this parameter to **remove**, the `X-Forwarded-For` header is deleted before the request is sent to the backend server, regardless of whether the request contains the `X-Forwarded-For` header.
   * > 3. HTTP and HTTPS listeners support this parameter.
   * 
   * @example
   * append
   */
  XForwardedForProcessingMode?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Proto` header to obtain the listener protocol of the load balancing instance. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > HTTP, HTTPS, and QUIC listeners support this parameter.
   * 
   * @example
   * true
   */
  XForwardedForProtoEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `SLB-ID` header to obtain the load balancing instance ID. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > HTTP, HTTPS, and QUIC listeners support this parameter.
   * 
   * @example
   * true
   */
  XForwardedForSLBIdEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Port` header to obtain the listener port of the load balancing instance. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > HTTP, HTTPS, and QUIC listeners support this parameter.
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
   * The list of default rule actions.
   */
  defaultActions?: ListListenersResponseBodyListenersDefaultActions[];
  /**
   * @remarks
   * Specifies whether to enable Gzip compression to compress specific file types. Valid values:
   * 
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * false
   */
  gzipEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the HTTP/2 feature. Valid values:
   * 
   * - **true**: yes.
   * - **false**: no.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * false
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * Specifies the idle connection timeout period. Unit: seconds. Valid values: **1** to **60**.
   * 
   * If no access request is accepted within the timeout period, load balancing temporarily breaks the current connection and establishes a new connection when the next request is accepted.
   * 
   * @example
   * 3
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The custom listener name.
   * 
   * @example
   * HTTP_80
   */
  listenerDescription?: string;
  /**
   * @remarks
   * The listener ID.
   * 
   * @example
   * lsn-o4u34y73wq7b******
   */
  listenerId?: string;
  /**
   * @remarks
   * The frontend port used by the application load balancing instance. Valid values: **1** to **65535**.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The listener protocol. Valid values:
   * 
   * - **HTTP**: The Protocol Type is HTTP.
   * - **HTTPS**: The Protocol Type is HTTPS.
   * - **QUIC**: The Protocol Type is QUIC.
   * 
   * @example
   * HTTP
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The current status of the listener. Valid values:
   * 
   * - **Provisioning**: The listener is being created.
   * 
   * - **Running**: The listener is running.
   * 
   * - **Configuring**: The listener is being configured.
   * 
   * - **Stopped**: The listener is stopped.
   * 
   * @example
   * Running
   */
  listenerStatus?: string;
  /**
   * @remarks
   * The instance ID of the application load balancing.
   * 
   * @example
   * alb-bd6oylbckp6k9x****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The log configuration.
   */
  logConfig?: ListListenersResponseBodyListenersLogConfig;
  /**
   * @remarks
   * The configuration for associating a QUIC listener.
   */
  quicConfig?: ListListenersResponseBodyListenersQuicConfig;
  /**
   * @remarks
   * Specifies the request timeout period. Unit: seconds. Valid values: **1** to **180**.
   * 
   * If a backend server does not send a response within the timeout period, load balancing stops waiting and returns an `HTTP 504` error code to the client.
   * 
   * @example
   * 34
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The security policy.
   * 
   * > This parameter is supported only by HTTPS listeners.
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
   * The XForward header field configuration.
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
   * The list of application load balancing listeners.
   */
  listeners?: ListListenersResponseBodyListeners[];
  /**
   * @remarks
   * The maximum number of records returned for the request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that indicates the position where the current call starts to read data. An empty value indicates that all data has been read.
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
   * 365F4154-92F6-4AE4-92F8-7FF3******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that meet the request conditions.
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

