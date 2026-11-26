// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateListenerAttributeRequestCaCertificates extends $dara.Model {
  /**
   * @remarks
   * The ID of the CA certificate.
   * 
   * > This parameter is required when **CaEnabled** is set to **true**.
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
   * The ID of the default certificate. You can add only one default server certificate.
   * 
   * > - This parameter is required when the listener Protocol Type is **HTTPS** or **QUIC**.
   * > - To add more server certificates, invoke the [AssociateAdditionalCertificatesWithListener](https://help.aliyun.com/document_detail/2254830.html) operation to configure extension certificates after you create the listener.
   * 
   * @example
   * 123157******
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
   * The ID of the destination server group to which requests are forwarded.
   * 
   * This parameter is required.
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

export class UpdateListenerAttributeRequestDefaultActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The list of destination server group tuples for forwarding.
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
   * The configuration for the forwarding action. This parameter is required and takes effect only when **Type** is set to **ForwardGroup**. You can specify up to 20 forwarding action configurations.
   */
  forwardGroupConfig?: UpdateListenerAttributeRequestDefaultActionsForwardGroupConfig;
  /**
   * @remarks
   * The action type. You can specify only one action type. Valid values: **ForwardGroup**: forwards requests to multiple server groups.
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
   * The ID of the QUIC listener to be associated. This parameter is required when **QuicUpgradeEnabled** is set to **true**. This parameter is supported only by HTTPS listeners.
   * 
   * > The original listener and the associated QUIC listener must belong to the same ALB instance, and the QUIC listener must not have been associated before.
   * 
   * @example
   * lsn-333
   */
  quicListenerId?: string;
  /**
   * @remarks
   * Specifies whether to enable QUIC upgrade. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * > This parameter is supported only by HTTPS listeners.
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
   * The custom header name. This parameter takes effect only when **XForwardedForClientCertClientVerifyEnabled** is set to **true**.
   * 
   * The name must be 1 to 40 characters in length, and can contain lowercase letters, hyphens (-), underscores (_), and digits.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * test_client-verify-alias_123456
   */
  XForwardedForClientCertClientVerifyAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Clientcert-clientverify` header to obtain the verification result of the client certificate that accesses the load balancing instance. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForClientCertClientVerifyEnabled?: boolean;
  /**
   * @remarks
   * The custom header name. This parameter takes effect only when **XForwardedForClientCertFingerprintEnabled** is set to **true**.
   * 
   * The name must be 1 to 40 characters in length, and can contain lowercase letters, hyphens (-), underscores (_), and digits.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * test_finger-print-alias_123456
   */
  XForwardedForClientCertFingerprintAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Clientcert-fingerprint` header to obtain the fingerprint of the client certificate that accesses the load balancing instance. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForClientCertFingerprintEnabled?: boolean;
  /**
   * @remarks
   * The custom header name. This parameter takes effect only when **XForwardedForClientCertIssuerDNEnabled** is set to **true**.
   * 
   * The name must be 1 to 40 characters in length, and can contain lowercase letters, hyphens (-), underscores (_), and digits.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * test_issue-dn-alias_123456
   */
  XForwardedForClientCertIssuerDNAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Clientcert-issuerdn` header to obtain the issuer information of the client certificate that accesses the load balancing instance. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForClientCertIssuerDNEnabled?: boolean;
  /**
   * @remarks
   * The custom header name. This parameter takes effect only when **XForwardedForClientCertSubjectDNEnabled** is set to **true**.
   * 
   * The name must be 1 to 40 characters in length, and can contain lowercase letters, hyphens (-), underscores (_), and digits.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * test_subject-dn-alias_123456
   */
  XForwardedForClientCertSubjectDNAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Clientcert-subjectdn` header to obtain the subject information of the client certificate that accesses the load balancing instance. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForClientCertSubjectDNEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to allow ALB to obtain the real IP address of the client from the X-Forwarded-For header. Valid values:
   * 
   * - **true**: yes.
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
   * The trusted proxy IP addresses.
   * 
   * Load balancing traverses the `X-Forwarded-For` header from back to front and selects the first IP address that is not in the trusted IP address list as the real IP address of the client. This IP address is used for source IP address-based rate limiting.
   * 
   * @example
   * 10.1.1.0/24
   */
  XForwardedForClientSourceIpsTrusted?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Client-srcport` header to obtain the port of the client that accesses the load balancing instance. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * > This parameter is supported by HTTP and HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForClientSrcPortEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-For` header to obtain the real IP address of the client. Valid values:
   * - **true** (default): yes.
   * - **false**: no.
   * 
   * > 1. If you set this parameter to **true**, the default value of **XForwardedForProcessingMode** is **append**, and you can change it to **remove**.
   * > 2. If you set this parameter to **false**, the `X-Forwarded-For` header is retained without additional processing before the request is forwarded to backend servers.
   * > 3. This parameter is supported by HTTP and HTTPS listeners.
   * 
   * @example
   * true
   */
  XForwardedForEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Host` header to obtain the domain name of the client that accesses the load balancing instance. Valid values:
   * - **true**: yes.
   * - **false** (default): no.
   * 
   * > This parameter is supported by HTTP, HTTPS, and QUIC listeners.
   * 
   * @example
   * false
   */
  XForwardedForHostEnabled?: boolean;
  /**
   * @remarks
   * The processing mode of the `X-Forwarded-For` header. This parameter takes effect only when **XForwardedForEnabled** is set to **true**. Valid values:
   * - **append** (default): appends the IP address.
   * - **remove**: removes the header.
   * 
   * > 1. If you set this parameter to **append**, the IP address of the last hop is added to the `X-Forwarded-For` header before the request is forwarded to backend servers.
   * > 2. If you set this parameter to **remove**, the `X-Forwarded-For` header is removed before the request is forwarded to backend servers, regardless of whether the request contains the `X-Forwarded-For` header.
   * > 3. This parameter is supported by HTTP and HTTPS listeners.
   * 
   * @example
   * append
   */
  XForwardedForProcessingMode?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Proto` header to obtain the listener protocol of the load balancing instance. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * > This parameter is supported by HTTP, HTTPS, and QUIC listeners.
   * 
   * @example
   * false
   */
  XForwardedForProtoEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `SLB-ID` header to obtain the instance ID of the load balancing instance. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * > This parameter is supported by HTTP, HTTPS, and QUIC listeners.
   * 
   * @example
   * false
   */
  XForwardedForSLBIdEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Port` header to obtain the listener port of the load balancing instance. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * > This parameter is supported by HTTP, HTTPS, and QUIC listeners.
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
   * The list of CA certificates. You can add only one CA certificate.
   */
  caCertificates?: UpdateListenerAttributeRequestCaCertificates[];
  /**
   * @remarks
   * Specifies whether to enable mutual authentication. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * false
   */
  caEnabled?: boolean;
  /**
   * @remarks
   * The list of certificates.
   */
  certificates?: UpdateListenerAttributeRequestCertificates[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate a parameter value on your client to ensure that the value is unique across different requests. The client token supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of default rule actions.
   */
  defaultActions?: UpdateListenerAttributeRequestDefaultActions[];
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without updating the listener configurations. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, an `HTTP 2xx` status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Gzip compression to compress specific file types. Valid values:
   * 
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  gzipEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable HTTP/2. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * true
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * Specifies the idle connection timeout period. Unit: seconds. Valid values: **1** to **600**.
   * 
   * If no access request is received within the timeout period, load balancing temporarily breaks the current connection and establishes a new connection when the next request arrives.
   * 
   * @example
   * 15
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The custom name of the listener.
   * 
   * The name must be 2 to 256 characters in length, and can contain letters, digits, Chinese characters, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * @example
   * HTTP_80
   */
  listenerDescription?: string;
  /**
   * @remarks
   * The ID of the listener on the application load balancing instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-o4u54y73wq7b******
   */
  listenerId?: string;
  /**
   * @remarks
   * The configurations for associating a QUIC listener.
   */
  quicConfig?: UpdateListenerAttributeRequestQuicConfig;
  /**
   * @remarks
   * Specifies the request timeout period. Unit: seconds. Valid values: **1** to **600**.
   * 
   * If no response is received from the backend server within the timeout period, load balancing stops waiting and returns an HTTP 504 error code to the client.
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The security policy. System security policies and custom security policies are supported.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * tls_cipher_policy_1_0
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The configurations of X-Forwarded-For attributes.
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

