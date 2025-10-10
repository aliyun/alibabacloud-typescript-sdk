// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateListenerRequestCaCertificates extends $dara.Model {
  /**
   * @remarks
   * The ID of the CA certificate.
   * 
   * >  This parameter is required if **CaEnabled** is set to **true**.
   * 
   * @example
   * 123157*******
   */
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestCertificates extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate. Only server certificates are supported. You can specify up to 20 certificate IDs.
   * 
   * @example
   * 103705*******
   */
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestDefaultActionsForwardGroupConfigServerGroupTuples extends $dara.Model {
  /**
   * @remarks
   * The ID of the server group to which requests are forwarded.
   * 
   * This parameter is required.
   * 
   * @example
   * sgp-8ilqs4axp6******
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

export class CreateListenerRequestDefaultActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The destination server group to which requests are forwarded.
   * 
   * This parameter is required.
   */
  serverGroupTuples?: CreateListenerRequestDefaultActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': CreateListenerRequestDefaultActionsForwardGroupConfigServerGroupTuples },
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

export class CreateListenerRequestDefaultActions extends $dara.Model {
  /**
   * @remarks
   * The configuration of the forwarding action. You can specify at most 20 actions.
   * 
   * This parameter is required.
   */
  forwardGroupConfig?: CreateListenerRequestDefaultActionsForwardGroupConfig;
  /**
   * @remarks
   * The action type. You can specify only one action type. Valid value:
   * 
   * **ForwardGroup**: forwards requests to multiple Server groups.
   * 
   * This parameter is required.
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
      forwardGroupConfig: CreateListenerRequestDefaultActionsForwardGroupConfig,
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

export class CreateListenerRequestQuicConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the QUIC listener that you want to associate with the HTTPS listener. Only HTTPS listeners support this parameter. This parameter is required when **QuicUpgradeEnabled** is set to **true**.
   * 
   * >  The HTTPS listener and the QUIC listener must be added to the same ALB instance. Make sure that the QUIC listener is not associated with any other listeners.
   * 
   * @example
   * lsn-o4u54y73wq7b******
   */
  quicListenerId?: string;
  /**
   * @remarks
   * Specifies whether to enable QUIC upgrade. Valid values:
   * 
   * *   **true**: enables QUIC upgrade.
   * *   **false** (default): disables QUIC upgrade.
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * false
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

export class CreateListenerRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
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

export class CreateListenerRequestXForwardedForConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the custom header. This parameter takes effect only when **XForwardedForClientCertClientVerifyEnabled** is set to **true**.
   * 
   * The name must be 1 to 40 characters in length, and can contain lowercase letters, hyphens (-), underscores (_), and digits.
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * test_client-verify-alias_123456
   */
  XForwardedForClientCertClientVerifyAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Clientcert-clientverify` header to retrieve the verification result of the client certificate. Valid values:
   * 
   * *   **true**: uses the X-Forwarded-Clientcert-clientverify header.
   * *   **false** (default): does not use the X-Forwarded-Clientcert-clientverify header.
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
   * The name must be 1 to 40 characters in length, and can contain lowercase letters, hyphens (-), underscores (_), and digits.
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * test_finger-print-alias_123456
   */
  XForwardedForClientCertFingerprintAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Clientcert-fingerprint` header to retrieve the fingerprint of the client certificate. Valid values:
   * 
   * *   **true**: uses the X-Forwarded-Clientcert-fingerprint header.
   * *   **false** (default): does not use the X-Forwarded-Clientcert-fingerprint header.
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
   * The name must be 1 to 40 characters in length, and can contain lowercase letters, hyphens (-), underscores (_), and digits.
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * test_issue-dn-alias_123456
   */
  XForwardedForClientCertIssuerDNAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Clientcert-issuerdn` header to retrieve information about the authority that issues the client certificate. Valid values:
   * 
   * *   **true**: uses the X-Forwarded-Clientcert-issuerdn header.
   * *   **false** (default): does not use the X-Forwarded-Clientcert-issuerdn header.
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
   * The name must be 1 to 40 characters in length, and can contain lowercase letters, hyphens (-), underscores (_), and digits.
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * test_subject-dn-alias_123456
   */
  XForwardedForClientCertSubjectDNAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Clientcert-subjectdn` header to retrieve information about the owner of the client certificate. Valid values:
   * 
   * *   **true**: uses the X-Forwarded-Clientcert-subjectdn header.
   * *   **false** (default): does not use the X-Forwarded-Clientcert-subjectdn header.
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * true
   */
  XForwardedForClientCertSubjectDNEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to allow the ALB instance to retrieve client IP addresses from the `X-Forwarded-For` header. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >  HTTP and HTTPS listeners support this parameter.
   * 
   * @example
   * false
   */
  XForwardedForClientSourceIpsEnabled?: boolean;
  /**
   * @remarks
   * The trusted proxy IP address.
   * 
   * ALB traverses `X-Forwarded-For` backwards and selects the first IP address that is not in the trusted IP list as the originating IP address of the client, which will be throttled if source IP address throttling is enabled.
   * 
   * @example
   * 10.1.1.0/24
   */
  XForwardedForClientSourceIpsTrusted?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Client-srcport` header to retrieve the client port. Valid values:
   * 
   * *   **true**: uses the X-Forwarded-Client-srcport header.
   * *   **false** (default): does not use the X-Forwarded-Client-srcport header.
   * 
   * >  HTTP and HTTPS listeners support this parameter.
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
   * >  HTTP and HTTPS listeners support this parameter.
   * 
   * @example
   * true
   */
  XForwardedForEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Host` header to retrieve the client domain name. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >  This parameter is available for HTTP, HTTPS, and QUIC listeners.
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
   * > *   This parameter is only available for HTTP and HTTPS listeners.
   * 
   * @example
   * append
   */
  XForwardedForProcessingMode?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Proto` header to retrieve the listener protocol of the ALB instance. Valid values:
   * 
   * *   **true**: uses the X-Forwarded-Proto header.
   * *   **false** (default): does not use the X-Forwarded-Proto header.
   * 
   * >  HTTP, HTTPS, and QUIC listeners support this parameter.
   * 
   * @example
   * false
   */
  XForwardedForProtoEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `SLB-ID` header to retrieve the ID of the ALB instance. Valid values:
   * 
   * *   **true**: uses the SLB-ID header.
   * *   **false** (default): does not use the SLB-ID header.
   * 
   * >  HTTP, HTTPS, and QUIC listeners support this parameter.
   * 
   * @example
   * false
   */
  XForwardedForSLBIdEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Port` header to retrieve the listener port of the ALB instance. Valid values:
   * 
   * *   **true**: uses the X-Forwarded-Port header.
   * *   **false** (default): does not use the X-Forwarded-Port header.
   * 
   * >  HTTP, HTTPS, and QUIC listeners support this parameter.
   * 
   * @example
   * false
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

