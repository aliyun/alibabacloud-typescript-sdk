// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateListenerRequestCaCertificates extends $dara.Model {
  /**
   * @remarks
   * The ID of the CA certificate.
   * 
   * > This parameter is required when the **CaEnabled** parameter is set to **true**.
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
   * The ID of the default certificate. You can add only one default server certificate.
   * 
   * > - This parameter is required when the **ListenerProtocol** parameter is set to **HTTPS** or **QUIC**.
   * > - To add more server certificates, call the [AssociateAdditionalCertificatesWithListener](https://help.aliyun.com/document_detail/2254830.html) operation to configure additional certificates after the listener is created.
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
   * The ID of the destination server group to which requests are forwarded.
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
   * The destination server group tuples for forwarding.
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
   * The configuration for the forward action. You can add up to 20 forward action configurations.
   * 
   * This parameter is required.
   */
  forwardGroupConfig?: CreateListenerRequestDefaultActionsForwardGroupConfig;
  /**
   * @remarks
   * The action type. You can add only one action type. Valid values: **ForwardGroup**: forwards requests to multiple server groups.
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
   * The ID of the QUIC listener to be associated. This parameter is valid for HTTPS listeners and is required when **QuicUpgradeEnabled** is set to **true**.
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
   * - **false** (default): no.
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

export class CreateListenerRequestTag extends $dara.Model {
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

export class CreateListenerRequestXForwardedForConfig extends $dara.Model {
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
   * Specifies whether to use the `X-Forwarded-Clientcert-clientverify` header to obtain the verification result of the client certificate that is used to access the load balancing instance. Valid values:
   * 
   * - **true**: yes.
   * - **false** (default): no.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * true
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
   * Specifies whether to use the `X-Forwarded-Clientcert-fingerprint` header to obtain the fingerprint of the client certificate that is used to access the load balancing instance. Valid values:
   * 
   * - **true**: yes.
   * - **false** (default): no.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * true
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
   * Specifies whether to use the `X-Forwarded-Clientcert-issuerdn` header to obtain the issuer information of the client certificate that is used to access the load balancing instance. Valid values:
   * 
   * - **true**: yes.
   * - **false** (default): no.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * true
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
   * Specifies whether to use the `X-Forwarded-Clientcert-subjectdn` header to obtain the subject information of the client certificate that is used to access the load balancing instance. Valid values:
   * 
   * - **true**: yes.
   * - **false** (default): no.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * true
   */
  XForwardedForClientCertSubjectDNEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to allow ALB to obtain the real IP address of the client from the X-Forwarded-For header. Valid values:
   * 
   * - **true**: yes.
   * - **false** (default): no.
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
   * Application Load Balancing (ALB) traverses the `X-Forwarded-For` header from back to front and selects the first IP address that is not in the trusted IP address list as the real IP address of the client. This IP address is used for source IP address-based throttling.
   * 
   * @example
   * 10.1.1.0/24
   */
  XForwardedForClientSourceIpsTrusted?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Client-srcport` header to obtain the port of the client that accesses the load balancing instance. Valid values:
   * 
   * - **true**: yes.
   * - **false** (default): no.
   * 
   * > This parameter is supported by HTTP and HTTPS listeners.
   * 
   * @example
   * true
   */
  XForwardedForClientSrcPortEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-For` header to obtain the real IP address of the client. Valid values:
   * 
   * - **true** (default): yes.
   * - **false**: no.
   * 
   * > 1. If you set this parameter to **true**, the default value of **XForwardedForProcessingMode** is **append**. You can change the value to **remove**.
   * > 2. If you set this parameter to **false**, ALB retains the `X-Forwarded-For` header before forwarding the request to the backend server and does not perform additional processing.
   * > 3. This parameter is supported by HTTP and HTTPS listeners.
   * 
   * @example
   * true
   */
  XForwardedForEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Host` header to obtain the domain name of the client that accesses the load balancing instance. Valid values:
   * 
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
   * 
   * - **append** (default): appends the IP address.
   * - **remove**: removes the header.
   * 
   * > 1. If you set this parameter to **append**, ALB adds the IP address of the last hop to the `X-Forwarded-For` header before forwarding the request to the backend server.
   * > 2. If you set this parameter to **remove**, ALB removes the `X-Forwarded-For` header before forwarding the request to the backend server, regardless of whether the request contains the `X-Forwarded-For` header.
   * > 3. This parameter is supported by HTTP and HTTPS listeners.
   * 
   * @example
   * append
   */
  XForwardedForProcessingMode?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Proto` header to obtain the listener protocol of the load balancing instance. Valid values:
   * 
   * - **true**: yes.
   * - **false** (default): no.
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
   * 
   * - **true**: yes.
   * - **false** (default): no.
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
   * 
   * - **true**: yes.
   * - **false** (default): no.
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

export class CreateListenerRequest extends $dara.Model {
  /**
   * @remarks
   * The list of CA certificates configured for the listener. You can add only one CA certificate.
   */
  caCertificates?: CreateListenerRequestCaCertificates[];
  /**
   * @remarks
   * Specifies whether to enable mutual authentication. Valid values:
   * 
   * - **true**: yes.
   * - **false** (default): no.
   * 
   * @example
   * false
   */
  caEnabled?: boolean;
  /**
   * @remarks
   * The certificate list.
   */
  certificates?: CreateListenerRequestCertificates[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the parameter value from your client to ensure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of rule actions.
   * 
   * This parameter is required.
   */
  defaultActions?: CreateListenerRequestDefaultActions[];
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run and does not create the listener. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the dry run, the system returns an error. If the request passes the dry run, the system returns the `DryRunOperation` error code.
   * 
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, the system returns an HTTP 2xx status code and creates the listener.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable `Gzip` compression to compress specific file types. Valid values:
   * 
   * - **true** (default): yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  gzipEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable `HTTP/2`. Valid values:
   * 
   * - **true** (default): yes.
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
   * The idle connection timeout period. Unit: seconds.
   * 
   * Valid values: **1** to **600**.
   * 
   * Default value: **15**.
   * 
   * If there is no access request within the timeout period, load balancing temporarily breaks the current connection and establishes a new connection when the next request arrives.
   * 
   * > You can apply to increase the quota to extend the maximum idle connection timeout period to 3,600 seconds.
   * 
   * @example
   * 3
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The custom name of the listener.
   * 
   * The name must be 2 to 256 characters in length, and can contain letters, digits, Chinese characters, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * @example
   * HTTP_80
   */
  listenerDescription?: string;
  /**
   * @remarks
   * The frontend port used by the load balancing instance.
   * 
   * Valid values: **1** to **65535**.
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
   * The instance ID of the application load balancing instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alb-n5qw04uq8vavfe****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The configuration of the associated QUIC listener.
   */
  quicConfig?: CreateListenerRequestQuicConfig;
  /**
   * @remarks
   * The request timeout period. Unit: seconds.
   * 
   * Valid values: **1** to **600**.
   * 
   * Default value: **60**.
   * 
   * If there is no response from the backend server within the timeout period, load balancing stops waiting and returns an `HTTP 504` error code to the client.
   * 
   * > You can apply to increase the quota to extend the maximum request timeout period to 3,600 seconds.
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
   * > This parameter is supported only by HTTPS listeners.
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
   * The X-Forwarded-For configuration.
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

