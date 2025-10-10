// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateListenerAttributeRequestCaCertificates extends $dara.Model {
  /**
   * @remarks
   * The ID of the CA certificate.
   * 
   * >  This parameter is required if **CaEnabled** is set to **true**.
   * 
   * @example
   * 123359******
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

export class UpdateListenerAttributeRequestCertificates extends $dara.Model {
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 12315790212_166f8204689_1714763408_70998****
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

export class UpdateListenerAttributeRequestDefaultActionsForwardGroupConfigServerGroupTuples extends $dara.Model {
  /**
   * @remarks
   * The ID of the server group to which requests are forwarded.
   * 
   * This parameter is required.
   * 
   * @example
   * rsp-cige6j5e7p****
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

export class UpdateListenerAttributeRequestDefaultActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The server groups to which requests are forwarded.
   * 
   * This parameter is required.
   */
  serverGroupTuples?: UpdateListenerAttributeRequestDefaultActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': UpdateListenerAttributeRequestDefaultActionsForwardGroupConfigServerGroupTuples },
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

export class UpdateListenerAttributeRequestDefaultActions extends $dara.Model {
  /**
   * @remarks
   * The forwarding action. This parameter takes effect only when you set **Type** to **ForwardGroup**. You can specify at most 20 actions.
   */
  forwardGroupConfig?: UpdateListenerAttributeRequestDefaultActionsForwardGroupConfig;
  /**
   * @remarks
   * The action type. You can specify only one type.
   * 
   * Set the value to **ForwardGroup**, which specifies that requests are forwarded to multiple server groups.
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
      forwardGroupConfig: UpdateListenerAttributeRequestDefaultActionsForwardGroupConfig,
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

export class UpdateListenerAttributeRequestQuicConfig extends $dara.Model {
  /**
   * @remarks
   * The QUIC listener ID. This parameter is required if **QuicUpgradeEnabled** is set to **true**. Only HTTPS listeners support this parameter.
   * 
   * > You must add the HTTPS listener and the QUIC listener to the same ALB instance. In addition, make sure that the QUIC listener has never been associated with another listener.
   * 
   * @example
   * lsn-333
   */
  quicListenerId?: string;
  /**
   * @remarks
   * Specifies whether to enable QUIC upgrade. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > Only HTTPS listeners support this parameter.
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

export class UpdateListenerAttributeRequestXForwardedForConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the custom header. The header takes effect only when you set **XForwardedForClientCertClientVerifyEnabled **to **true**.
   * 
   * The name must be 1 to 40 characters in length. It can contain lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * >  This parameter is only available for HTTPS listeners.
   * 
   * @example
   * test_client-verify-alias_123456
   */
  XForwardedForClientCertClientVerifyAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Clientcert-clientverify` header to retrieve the verification result of the client certificate. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is only available for HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForClientCertClientVerifyEnabled?: boolean;
  /**
   * @remarks
   * The name of the custom header. The header takes effect only when you set **XForwardedForClientCertFingerprintEnabled** to **true**.
   * 
   * The name must be 1 to 40 characters in length. It can contain lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * >  This parameter is only available for HTTPS listeners.
   * 
   * @example
   * test_finger-print-alias_123456
   */
  XForwardedForClientCertFingerprintAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Clientcert-fingerprint` header to retrieve the fingerprint of the client certificate. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is only available for HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForClientCertFingerprintEnabled?: boolean;
  /**
   * @remarks
   * The name of the custom header. The header takes effect only when you set **XForwardedForClientCertIssuerDNEnabled** to **true**.
   * 
   * The name must be 1 to 40 characters in length. It can contain lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * >  This parameter is only available for HTTPS listeners.
   * 
   * @example
   * test_issue-dn-alias_123456
   */
  XForwardedForClientCertIssuerDNAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Clientcert-issuerdn` header to retrieve information about the authority that issues the client certificate. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is only available for HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForClientCertIssuerDNEnabled?: boolean;
  /**
   * @remarks
   * The name of the custom header. This parameter is valid only if the **XForwardedForClientCertSubjectDNEnabled** parameter is set to **true**.
   * 
   * The name must be 1 to 40 characters in length. It can contain lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * >  This parameter is only available for HTTPS listeners.
   * 
   * @example
   * test_subject-dn-alias_123456
   */
  XForwardedForClientCertSubjectDNAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Clientcert-subjectdn` header to retrieve information about the owner of the client certificate. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is only available for HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForClientCertSubjectDNEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the X-Forwarded-For header to preserve client IP addresses. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is only available for HTTP and HTTPS listeners.
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
   * Specifies whether to use the `X-Forwarded-Client-srcport` header to retrieve the client port. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is only available for HTTP and HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForClientSrcPortEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-For` header to retrieve the client IP address. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * > *   If this parameter is set to **true**, the default value of the **XForwardedForProcessingMode** parameter is **append**. You can change it to **remove**.
   * > *   If this parameter is set to **false**, the `X-Forwarded-For` header in the request is not modified in any way before the request is sent to backend servers.
   * > *   This parameter is only available for HTTP and HTTPS listeners.
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
   * Specifies whether to use the `X-Forwarded-Proto` header to retrieve the listener protocol. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is available for HTTP, HTTPS, and QUIC listeners.
   * 
   * @example
   * false
   */
  XForwardedForProtoEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `SLB-ID` header to retrieve the ID of the ALB instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is available for HTTP, HTTPS, and QUIC listeners.
   * 
   * @example
   * false
   */
  XForwardedForSLBIdEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Port` header to retrieve the listener port of the ALB instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is available for HTTP, HTTPS, and QUIC listeners.
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

