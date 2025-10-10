// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListenerAttributeResponseBodyAclConfigAclRelations extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL that is associated with the listener.
   * 
   * @example
   * acl-doc****
   */
  aclId?: string;
  /**
   * @remarks
   * Indicates whether the ACL is associated with the listener. Valid values:
   * 
   * *   **Associating**
   * *   **Associated**
   * *   **Dissociating**
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
   * The IDs of the ACLs that are associated with the listener.
   */
  aclRelations?: GetListenerAttributeResponseBodyAclConfigAclRelations[];
  /**
   * @remarks
   * The type of the ACL. Valid values:
   * 
   * *   **White**: a whitelist. Only requests from the IP addresses or CIDR blocks in the network ACL are forwarded. Whitelists are applicable to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. If a whitelist is configured for a listener, only requests from IP addresses that are on the whitelist are forwarded by the listener.
   * 
   *     If you enable a whitelist but do not add an IP address to the whitelist, the listener forwards all requests.
   * 
   * *   **Black**: a blacklist. Requests from the IP addresses or CIDR blocks in the network ACL are denied. Blacklists are suitable for scenarios in which you want to deny access from specific IP addresses or CIDR blocks to an application.
   * 
   *     If a blacklist is configured for a listener but no IP addresses are added to the blacklist, the listener forwards all requests.
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
   * The ID of the default CA certificate.
   * 
   * @example
   * 139a00604bd-cn-east-hangzho****
   */
  certificateId?: string;
  /**
   * @remarks
   * Indicates whether the certificate is a default certificate: Valid values:
   * 
   * *   **true**
   * *   **false**
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

export class GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfigServerGroupTuples extends $dara.Model {
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

export class GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The server group to which requests are forwarded.
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
   * The configuration of the ForwardGroup action. This parameter is returned and takes effect when Type is set to **ForwardGroup**.
   */
  forwardGroupConfig?: GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfig;
  /**
   * @remarks
   * The type of the action.
   * 
   * If **ForwardGroup** is returned, requests are forwarded to multiple vServer groups.
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
   * Indicates whether Xtrace is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > You can set this parameter to **true** only if the AccessLogEnabled parameter is set to true.
   * 
   * @example
   * true
   */
  tracingEnabled?: boolean;
  /**
   * @remarks
   * The sampling rate of Xtrace. Valid values: 1 to 10000.
   * 
   * > If **TracingEnabled** is set to **true**, this parameter is valid.
   * 
   * @example
   * 100
   */
  tracingSample?: number;
  /**
   * @remarks
   * The Xtrace type. Supported Xtrace type: **Zipkin**.
   * 
   * > If **TracingEnabled** is set to **true**, this parameter is valid.
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
   * Indicates whether custom headers are recorded in the access log. Valid values:
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
   * The configuration of Xtrace. Xtrace is used to record requests sent to ALB.
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
   * The ID of the QUIC listener. This parameter is returned when **QuicUpgradeEnabled** is set to **true**. Only HTTPS listeners support this parameter.
   * 
   * > You must associate the HTTPS listener and the QUIC listener with the same ALB instance. In addition, make sure that the QUIC listener has never been associated with another listener.
   * 
   * @example
   * lsn-333
   */
  quicListenerId?: string;
  /**
   * @remarks
   * Indicates whether QUIC upgrade is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > Only HTTPS listeners support this parameter.
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

export class GetListenerAttributeResponseBodyXForwardedForConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the custom header. This parameter takes effect only when **XForwardedForClientCertClientVerifyEnabled** is set to **true**.
   * 
   * The name is 1 to 40 characters in length, and can contain lowercase letters, hyphens (-), underscores (_), and digits.
   * 
   * > This parameter is available only when you create an HTTPS listener.
   * 
   * @example
   * test_client-verify-alias_123456
   */
  XForwardedForClientCertClientVerifyAlias?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Clientcert-clientverify` header is used to retrieve the verification result of the client certificate. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > This parameter is available only when you create an HTTPS listener.
   * 
   * @example
   * true
   */
  XForwardedForClientCertClientVerifyEnabled?: boolean;
  /**
   * @remarks
   * The name of the custom header. This parameter takes effect only when **XForwardedForClientCertFingerprintEnabled** is set to **true**.
   * 
   * The name is 1 to 40 characters in length, and can contain lowercase letters, hyphens (-), underscores (_), and digits.
   * 
   * > This parameter is available only when you create an HTTPS listener.
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
   * > This parameter is available only when you create an HTTPS listener.
   * 
   * @example
   * true
   */
  XForwardedForClientCertFingerprintEnabled?: boolean;
  /**
   * @remarks
   * The name of the custom header. This parameter takes effect only when **XForwardedForClientCertIssuerDNEnabled** is set to **true**.
   * 
   * The name is 1 to 40 characters in length, and can contain lowercase letters, hyphens (-), underscores (_), and digits.
   * 
   * > This parameter is available only when you create an HTTPS listener.
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
   * > This parameter is available only when you create an HTTPS listener.
   * 
   * @example
   * true
   */
  XForwardedForClientCertIssuerDNEnabled?: boolean;
  /**
   * @remarks
   * The name of the custom header. This parameter takes effect only when **XForwardedForClientCertSubjectDNEnabled** is set to **true**.
   * 
   * The name is 1 to 40 characters in length, and can contain lowercase letters, hyphens (-), underscores (_), and digits.
   * 
   * > This parameter is available only when you create an HTTPS listener.
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
   * > This parameter is available only when you create an HTTPS listener.
   * 
   * @example
   * true
   */
  XForwardedForClientCertSubjectDNEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Client-Ip` header is used to retrieve the source port of the ALB instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > This parameter is available only when you create an HTTP, HTTPS, or QUIC listener.
   * 
   * @example
   * false
   */
  XForwardedForClientSourceIpsEnabled?: boolean;
  /**
   * @remarks
   * The trusted proxy IP address.
   * 
   * ALB traverses `X-Forwarded-For` backward and selects the first IP address that is not on the trusted IP address list as the real IP address of the client. The IP address is used in source IP address throttling.
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
   * > This parameter is available only when you create an HTTP or HTTPS listener.
   * 
   * @example
   * true
   */
  XForwardedForClientSrcPortEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-For` header is used to retrieve the client IP address. Valid values:
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
   * Indicates whether the `X-Forwarded-Proto` header is used to retrieve the listening protocol. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > This parameter is available only when you create an HTTP, HTTPS, or QUIC listener.
   * 
   * @example
   * true
   */
  XForwardedForProtoEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the `SLB-ID` header is used to retrieve the ID of the CLB instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > This parameter is available only when you create an HTTP, HTTPS, or QUIC listener.
   * 
   * @example
   * true
   */
  XForwardedForSLBIdEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Port` header is used to retrieve the listening port of the ALB instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > This parameter is available only when you create an HTTP, HTTPS, or QUIC listener.
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

