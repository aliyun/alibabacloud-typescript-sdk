// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListenerAttributeResponseBodyAclConfigAclRelations extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control policy associated with the listener.
   * 
   * @example
   * acl-doc****
   */
  aclId?: string;
  /**
   * @remarks
   * The association status between the ACL and the listener. Valid values:
   * 
   * - **Associating**: The ACL is being associated.
   * 
   * - **Associated**: The ACL is associated.
   * 
   * - **Dissociating**: The ACL is being dissociated.
   * 
   * @example
   * Associating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyAclConfig extends $dara.Model {
  /**
   * @remarks
   * The IDs of the access control policies associated with the listener.
   */
  aclRelations?: GetListenerAttributeResponseBodyAclConfigAclRelations[];
  /**
   * @remarks
   * The access control type. Valid values:
   * 
   * - **White**: Only requests from the IP addresses or CIDR blocks configured in the selected ACL are forwarded. A whitelist is applicable to scenarios where an application allows access only from specific IP addresses. Configuring a whitelist poses business risks. After a whitelist is configured, only requests from the IP addresses in the whitelist can access the load balancing listener. If you enable whitelist access but do not add any IP addresses to the ACL, the load balancing listener forwards all requests.
   * 
   * - **Black**: No requests from the IP addresses or CIDR blocks configured in the selected ACL are forwarded. A blacklist is applicable to scenarios where an application blocks access from specific IP addresses. If you enable blacklist access but do not add any IP addresses to the ACL, the load balancing listener forwards all requests.
   * 
   * @example
   * White
   */
  aclType?: string;
  static names(): { [key: string]: string } {
    return {
      aclRelations: 'AclRelations',
      aclType: 'AclType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclRelations: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyAclConfigAclRelations },
      aclType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aclRelations)) {
      $dara.Model.validateArray(this.aclRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyCaCertificates extends $dara.Model {
  /**
   * @remarks
   * The ID of the CA certificate.
   * 
   * @example
   * 139a00*****
   */
  certificateId?: string;
  /**
   * @remarks
   * Specifies whether the certificate is the default certificate. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The status of the certificate.
   * 
   * @example
   * Associated
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      isDefault: 'IsDefault',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      isDefault: 'boolean',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyCertificates extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate. Only server certificates are supported.
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

export class GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfigServerGroupTuples extends $dara.Model {
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

export class GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The destination server groups for forwarding.
   */
  serverGroupTuples?: GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfigServerGroupTuples },
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

export class GetListenerAttributeResponseBodyDefaultActions extends $dara.Model {
  /**
   * @remarks
   * The configuration of the forwarding action. This parameter takes effect only when the action type is **ForwardGroup**.
   */
  forwardGroupConfig?: GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfig;
  /**
   * @remarks
   * The action type. Valid value: **ForwardGroup**, which indicates that requests are forwarded to multiple server groups.
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
      forwardGroupConfig: GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfig,
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

export class GetListenerAttributeResponseBodyLogConfigAccessLogTracingConfig extends $dara.Model {
  /**
   * @remarks
   * The status of the Xtrace feature. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > You can set this parameter to **true** only when the access log feature (AccessLogEnabled) is enabled for the instance.
   * 
   * @example
   * true
   */
  tracingEnabled?: boolean;
  /**
   * @remarks
   * The sampling rate for Xtrace. Valid values: 1 to 10000.
   * 
   * > This parameter takes effect only when **TracingEnabled** is set to **true**.
   * 
   * @example
   * 100
   */
  tracingSample?: number;
  /**
   * @remarks
   * The Xtrace type. Valid value: **Zipkin**.
   * 
   * > This parameter takes effect only when **TracingEnabled** is set to **true**.
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

export class GetListenerAttributeResponseBodyLogConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether custom header fields are included in access logs. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  accessLogRecordCustomizedHeadersEnabled?: boolean;
  /**
   * @remarks
   * The Xtrace configuration information for access logs.
   */
  accessLogTracingConfig?: GetListenerAttributeResponseBodyLogConfigAccessLogTracingConfig;
  static names(): { [key: string]: string } {
    return {
      accessLogRecordCustomizedHeadersEnabled: 'AccessLogRecordCustomizedHeadersEnabled',
      accessLogTracingConfig: 'AccessLogTracingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogRecordCustomizedHeadersEnabled: 'boolean',
      accessLogTracingConfig: GetListenerAttributeResponseBodyLogConfigAccessLogTracingConfig,
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

export class GetListenerAttributeResponseBodyQuicConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the QUIC listener to be associated. This parameter is required when **QuicUpgradeEnabled** is set to **true**. This parameter takes effect only for HTTPS listeners.
   * 
   * > The original listener and the associated QUIC listener must belong to the same ALB instance, and the QUIC listener must not have been associated before.
   * 
   * @example
   * lsn-ek6ad66t****
   */
  quicListenerId?: string;
  /**
   * @remarks
   * Specifies whether QUIC upgrade is enabled. Valid values:
   * - **true**: Yes.
   * - **false**: No.
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

export class GetListenerAttributeResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. It can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. It can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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

export class GetListenerAttributeResponseBodyXForwardedForConfig extends $dara.Model {
  /**
   * @remarks
   * The custom header name. This parameter takes effect only when **XForwardedForClientCertClientVerifyEnabled** is set to **true**. The name must be 1 to 40 characters in length and can contain lowercase letters, hyphens (-), underscores (_), and digits.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * test_client-verify-alias_123456
   */
  XForwardedForClientCertClientVerifyAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Clientcert-clientverify` header field to retrieve the verification result of the client certificate that accesses the load balancing instance. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * true
   */
  XForwardedForClientCertClientVerifyEnabled?: boolean;
  /**
   * @remarks
   * The custom header name. This parameter takes effect only when **XForwardedForClientCertFingerprintEnabled** is set to **true**. The name must be 1 to 40 characters in length and can contain lowercase letters, hyphens (-), underscores (_), and digits.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * test_finger-print-alias_123456
   */
  XForwardedForClientCertFingerprintAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Clientcert-fingerprint` header field to retrieve the fingerprint of the client certificate that accesses the load balancing instance. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * true
   */
  XForwardedForClientCertFingerprintEnabled?: boolean;
  /**
   * @remarks
   * The custom header name. This parameter takes effect only when **XForwardedForClientCertIssuerDNEnabled** is set to **true**. The name must be 1 to 40 characters in length and can contain lowercase letters, hyphens (-), underscores (_), and digits.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * test_issue-dn-alias_123456
   */
  XForwardedForClientCertIssuerDNAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Clientcert-issuerdn` header field to retrieve the issuer information of the client certificate that accesses the load balancing instance. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * true
   */
  XForwardedForClientCertIssuerDNEnabled?: boolean;
  /**
   * @remarks
   * The custom header name. This parameter takes effect only when **XForwardedForClientCertSubjectDNEnabled** is set to **true**. The name must be 1 to 40 characters in length and can contain lowercase letters, hyphens (-), underscores (_), and digits.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * test_subject-dn-alias_123456
   */
  XForwardedForClientCertSubjectDNAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Clientcert-subjectdn` header field to retrieve the subject information of the client certificate that accesses the load balancing instance. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * true
   */
  XForwardedForClientCertSubjectDNEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to allow Application Load Balancer (ALB) to retrieve the actual client IP address from the `X-Forwarded-For` header field. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
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
   * Application Load Balancing (ALB) traverses the `X-Forwarded-For` header field from back to front and selects the first IP address that is not in the trusted IP address list as the actual client IP address. This IP address is used for source IP address-based rate limiting.
   * 
   * @example
   * 10.1.1.0/24
   */
  XForwardedForClientSourceIpsTrusted?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Client-Port` header field to retrieve the port of the client that accesses the load balancing instance. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > This parameter is supported by HTTP and HTTPS listeners.
   * 
   * @example
   * true
   */
  XForwardedForClientSrcPortEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-For` header field to retrieve the actual IP address of the client. Valid values:
   * - **true** (default): Yes.
   * - **false**: No.
   * 
   * > 1. If you set this parameter to **true**, the default value of **XForwardedForProcessingMode** is **append**, and you can change it to **remove**.
   * > 2. If you set this parameter to **false**, the `X-Forwarded-For` header field is retained without additional processing before the request is forwarded to the backend server.
   * > 3. This parameter is supported by HTTP and HTTPS listeners.
   * 
   * @example
   * true
   */
  XForwardedForEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Host` header field to retrieve the domain name of the client that accesses the load balancing instance. Valid values:
   * - **true**: Yes.
   * - **false** (default): No.
   * 
   * > This parameter is supported by HTTP, HTTPS, and QUIC listeners.
   * 
   * @example
   * false
   */
  XForwardedForHostEnabled?: boolean;
  /**
   * @remarks
   * The processing mode for the `X-Forwarded-For` header field. This parameter takes effect only when **XForwardedForEnabled** is set to **true**. Valid values:
   * - **append** (default): Appends the IP address of the last hop to the `X-Forwarded-For` header field before the request is forwarded to the backend server.
   * - **remove**: Deletes the `X-Forwarded-For` header field before the request is forwarded to the backend server, regardless of whether the request contains the `X-Forwarded-For` header field.
   * 
   * > 1. If you set this parameter to **append**, the IP address of the last hop is added to the `X-Forwarded-For` header field before the request is forwarded to the backend server.
   * > 2. If you set this parameter to **remove**, the `X-Forwarded-For` header field is deleted before the request is forwarded to the backend server, regardless of whether the request contains the `X-Forwarded-For` header field.
   * > 3. This parameter is supported by HTTP and HTTPS listeners.
   * 
   * @example
   * append
   */
  XForwardedForProcessingMode?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Proto` header field to retrieve the listener protocol of the load balancing instance. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > This parameter is supported by HTTP, HTTPS, and QUIC listeners.
   * 
   * @example
   * true
   */
  XForwardedForProtoEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `SLB-ID` header field to retrieve the load balancing instance ID. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > This parameter is supported by HTTP, HTTPS, and QUIC listeners.
   * 
   * @example
   * true
   */
  XForwardedForSLBIdEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Port` header field to retrieve the listener port of the load balancing instance. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > This parameter is supported by HTTP, HTTPS, and QUIC listeners.
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

export class GetListenerAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ACL configuration structure.
   */
  aclConfig?: GetListenerAttributeResponseBodyAclConfig;
  /**
   * @remarks
   * The list of CA certificates.
   */
  caCertificates?: GetListenerAttributeResponseBodyCaCertificates[];
  /**
   * @remarks
   * Specifies whether mutual authentication is enabled. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * false
   */
  caEnabled?: boolean;
  /**
   * @remarks
   * The list of certificates.
   */
  certificates?: GetListenerAttributeResponseBodyCertificates[];
  /**
   * @remarks
   * The list of default rule actions.
   */
  defaultActions?: GetListenerAttributeResponseBodyDefaultActions[];
  /**
   * @remarks
   * Specifies whether Gzip compression is enabled to compress specific file types. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  gzipEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether HTTP/2 is enabled. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > This parameter is supported only by HTTPS listeners.
   * 
   * @example
   * true
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * Specifies the idle connection timeout period. Unit: seconds.
   * 
   * If no request is received within the timeout period, the load balancer temporarily closes the current connection and establishes a new connection when the next request arrives.
   * 
   * @example
   * 2
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The custom name of the listener.
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
   * lsn-o4u54y73wq7b******
   */
  listenerId?: string;
  /**
   * @remarks
   * The frontend port used by the load balancer.
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
   * The ID of the ALB instance.
   * 
   * @example
   * alb-bd6oylbckp6k9x****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The log configuration information.
   */
  logConfig?: GetListenerAttributeResponseBodyLogConfig;
  /**
   * @remarks
   * The configuration information for associating a QUIC listener.
   */
  quicConfig?: GetListenerAttributeResponseBodyQuicConfig;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF******
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies the request timeout period. Unit: seconds.
   * 
   * If a backend server does not send a response within the timeout period, the load balancer stops waiting and returns an `HTTP 504` error code to the client.
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
  tags?: GetListenerAttributeResponseBodyTags[];
  /**
   * @remarks
   * The X-Forwarded-For field configuration.
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

