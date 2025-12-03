// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerHTTPSListenerAttributeResponseBodyAclIds extends $dara.Model {
  aclId?: string[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.aclId)) {
      $dara.Model.validateArray(this.aclId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensionsDomainExtension extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the additional certificate.
   * 
   * @example
   * 12
   */
  domainExtensionId?: string;
  /**
   * @remarks
   * The ID of the certificate used by the domain name.
   * 
   * @example
   * 13344444****
   */
  serverCertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      domainExtensionId: 'DomainExtensionId',
      serverCertificateId: 'ServerCertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      domainExtensionId: 'string',
      serverCertificateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensions extends $dara.Model {
  domainExtension?: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensionsDomainExtension[];
  static names(): { [key: string]: string } {
    return {
      domainExtension: 'DomainExtension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtension: { 'type': 'array', 'itemType': DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensionsDomainExtension },
    };
  }

  validate() {
    if(Array.isArray(this.domainExtension)) {
      $dara.Model.validateArray(this.domainExtension);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRulesRule extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * @example
   * 23
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * example
   */
  ruleName?: string;
  /**
   * @remarks
   * The request URL.
   * 
   * @example
   * /example
   */
  url?: string;
  /**
   * @remarks
   * The ID of the server group specified in the forwarding rule.
   * 
   * @example
   * rsp-cige6j5e********
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      url: 'Url',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ruleId: 'string',
      ruleName: 'string',
      url: 'string',
      VServerGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRules extends $dara.Model {
  rule?: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRulesRule },
    };
  }

  validate() {
    if(Array.isArray(this.rule)) {
      $dara.Model.validateArray(this.rule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBodyTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N. Valid values of N: **1** to **20**. The tag value cannot be an empty string. The tag key can be up to 64 characters in length. The key cannot start with `acs:` or `aliyun` or contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of tag N. Valid values of N: **1** to **20**. The tag value can be an empty string. The tag value can be up to 128 characters in length, and cannot start with `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBodyTags extends $dara.Model {
  tag?: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeLoadBalancerHTTPSListenerAttributeResponseBodyTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the network ACL that is associated with a listener.
   * 
   * > This parameter is required when **AclStatus** is set to **on**.
   * 
   * @example
   * acl-a2do9e413e0spzasx****
   */
  aclId?: string;
  /**
   * @remarks
   * The ID of the network access control list (ACL) that is associated with the listener.
   */
  aclIds?: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyAclIds;
  /**
   * @remarks
   * Indicates whether access control is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  aclStatus?: string;
  /**
   * @remarks
   * The type of the access control list (ACL). Valid values:
   * 
   * *   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios where you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. If a whitelist is configured, only requests from IP addresses that are added to the whitelist are forwarded by the listener.
   * 
   * If you enable a whitelist but do not add an IP address to the ACL, the listener forwards all requests.
   * 
   * *   **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the network ACL are rejected. Blacklists apply to scenarios where you want to block access from specified IP addresses to an application.
   * 
   * If a blacklist is configured for a listener but no IP address is added to the blacklist, the listener forwards all requests.
   * 
   * > This parameter is required when **AclStatus** is set to **on**.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The backend port that is used by the CLB instance.
   * 
   * @example
   * 8080
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the certification authority (CA) certificate.
   * 
   * @example
   * idkp-234-cn-test-0**
   */
  CACertificateId?: string;
  /**
   * @remarks
   * The cookie that is configured on the server.
   * 
   * @example
   * testCookie
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of a cookie.
   * 
   * @example
   * 500
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * @example
   * HTTPS_443
   */
  description?: string;
  /**
   * @remarks
   * A list of additional certificates.
   */
  domainExtensions?: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensions;
  /**
   * @remarks
   * Indicates whether `HTTP/2` is used. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  enableHttp2?: string;
  /**
   * @remarks
   * Indicates whether `Gzip` compression is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  gzip?: string;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * > This parameter is required when **HealthCheck** is set to **on**.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that you want to use for health checks.
   * 
   * @example
   * www.test.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code for a successful health check.
   * 
   * @example
   * http_2xx,http_3xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval at which health checks are performed. Unit: seconds.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check method used by HTTP listeners. Valid values: **head** and **get**.
   * 
   * > This parameter is available only when **HealthCheck** is set to **on**.
   * 
   * @example
   * get
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The maximum timeout period of a health check. Unit: seconds.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The URL path that is used for health checks.
   * 
   * @example
   * /test/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The healthy threshold.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The timeout period of an idle connection. Valid values: **1** to **60**. Default value: **15**. Unit: seconds.
   * 
   * If no request is received within the specified timeout period, CLB closes the connection. When a request is received, CLB establishes a new connection.
   * 
   * @example
   * 23
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * @example
   * lb-bp1mxu5r8lau****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF3********
   */
  requestId?: string;
  /**
   * @remarks
   * The timeout period of a request. Valid values: **1** to **180**. Default value: **60**. Unit: seconds.
   * 
   * If no response is received from a backend server within the specified timeout period, CLB returns the HTTP 504 status code to the client.
   * 
   * @example
   * 43
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The list of forwarding rules that are associated with the listener.
   */
  rules?: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRules;
  /**
   * @remarks
   * The routing algorithm. Valid values: **wrr** and **rr**.
   * 
   * *   **wrr**: Backend servers that have higher weights receive more requests than backend servers that have lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * Indicates whether the listener is in the Secure state. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  securityStatus?: string;
  /**
   * @remarks
   * The ID of the server certificate.
   * 
   * @example
   * idkp-123-cn-test-0**
   */
  serverCertificateId?: string;
  /**
   * @remarks
   * The status of the listener. Valid values:
   * 
   * *   **running**
   * *   **stopped**
   * 
   * @example
   * stopped
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether session persistence is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  stickySession?: string;
  /**
   * @remarks
   * The method that is used to handle a cookie.
   * 
   * Valid values: **insert** and **server**.
   * 
   * *   **insert**: inserts a cookie.
   * 
   *     CLB inserts a cookie (SERVERID) into the first HTTP or HTTPS response packet that is sent to a client. The next request from the client will contain this cookie, and the listener will distribute this request to the recorded backend server.
   * 
   * *   **server**: rewrites a cookie.
   * 
   *     When CLB detects a user-defined cookie, it overwrites the original cookie with the user-defined cookie. The next request from the client carries the user-defined cookie, and the listener will distribute the request to the recorded backend server.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The Transport Layer Security (TLS) security policy for a high-performance CLB instance.
   * 
   * Each security policy contains TLS protocol versions and cipher suites available for HTTPS. Valid values:
   * 
   * *   **tls_cipher_policy_1_0**:
   * 
   *     Supported TLS versions: TLS 1.0, TLS 1.1, and TLS 1.2
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA
   * 
   * *   **tls_cipher_policy_1_1**:
   * 
   *     Supported TLS versions: TLS 1.1 and TLS 1.2
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA
   * 
   * *   **tls_cipher_policy_1_2**
   * 
   *     Supported TLS version: TLS 1.2
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA
   * 
   * *   **tls_cipher_policy_1_2_strict**
   * 
   *     Supported TLS version: TLS 1.2
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA
   * 
   * *   **tls_cipher_policy_1_2_strict_with_1_3**
   * 
   *     Supported TLS versions: TLS 1.2 and TLS 1.3
   * 
   *     Supported cipher suites: TLS_AES_128_GCM_SHA256, TLS_AES_256_GCM_SHA384, TLS_CHACHA20_POLY1305_SHA256, TLS_AES_128_CCM_SHA256, TLS_AES_128_CCM_8_SHA256, ECDHE-ECDSA-AES128-GCM-SHA256, ECDHE-ECDSA-AES256-GCM-SHA384, ECDHE-ECDSA-AES128-SHA256, ECDHE-ECDSA-AES256-SHA384, ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-ECDSA-AES128-SHA, ECDHE-ECDSA-AES256-SHA, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA
   * 
   * @example
   * tls_cipher_policy_1_0
   */
  TLSCipherPolicy?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyTags;
  /**
   * @remarks
   * The unhealthy threshold.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * The ID of the associated server group.
   * 
   * @example
   * rsp-cige6j5e********
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-For` header is used to retrieve client IP addresses. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientCertClientVerify` header is used to retrieve the verification result of the client certificate. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientCertClientVerify?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientCertFingerprint` header is used to retrieve the fingerprint of the client certificate. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientCertFingerprint?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientCertIssuerDN` header is used to retrieve information about the authority that issues the client certificate. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientCertIssuerDN?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientCertSubjectDN` header is used to retrieve information about the owner of the client certificate. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientCertSubjectDN?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientSrcPort` header is used to retrieve the client port. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientSrcPort?: string;
  /**
   * @remarks
   * Indicates whether the `SLB-ID` header is used to retrieve the ID of the ALB instance. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_SLBID?: string;
  /**
   * @remarks
   * Indicates whether the `SLB-IP` header is used to retrieve the virtual IP address requested by the client. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_SLBIP?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_SLBPORT` header is used to retrieve the listening port. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_SLBPORT?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Proto` header is used to retrieve the listener protocol. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclIds: 'AclIds',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      CACertificateId: 'CACertificateId',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      description: 'Description',
      domainExtensions: 'DomainExtensions',
      enableHttp2: 'EnableHttp2',
      gzip: 'Gzip',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
      requestTimeout: 'RequestTimeout',
      rules: 'Rules',
      scheduler: 'Scheduler',
      securityStatus: 'SecurityStatus',
      serverCertificateId: 'ServerCertificateId',
      status: 'Status',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      TLSCipherPolicy: 'TLSCipherPolicy',
      tags: 'Tags',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_ClientCertClientVerify: 'XForwardedFor_ClientCertClientVerify',
      XForwardedFor_ClientCertFingerprint: 'XForwardedFor_ClientCertFingerprint',
      XForwardedFor_ClientCertIssuerDN: 'XForwardedFor_ClientCertIssuerDN',
      XForwardedFor_ClientCertSubjectDN: 'XForwardedFor_ClientCertSubjectDN',
      XForwardedFor_ClientSrcPort: 'XForwardedFor_ClientSrcPort',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_SLBPORT: 'XForwardedFor_SLBPORT',
      XForwardedFor_proto: 'XForwardedFor_proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclIds: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyAclIds,
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      CACertificateId: 'string',
      cookie: 'string',
      cookieTimeout: 'number',
      description: 'string',
      domainExtensions: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensions,
      enableHttp2: 'string',
      gzip: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      requestId: 'string',
      requestTimeout: 'number',
      rules: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRules,
      scheduler: 'string',
      securityStatus: 'string',
      serverCertificateId: 'string',
      status: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      TLSCipherPolicy: 'string',
      tags: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyTags,
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
      XForwardedFor: 'string',
      XForwardedFor_ClientCertClientVerify: 'string',
      XForwardedFor_ClientCertFingerprint: 'string',
      XForwardedFor_ClientCertIssuerDN: 'string',
      XForwardedFor_ClientCertSubjectDN: 'string',
      XForwardedFor_ClientSrcPort: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_SLBPORT: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  validate() {
    if(this.aclIds && typeof (this.aclIds as any).validate === 'function') {
      (this.aclIds as any).validate();
    }
    if(this.domainExtensions && typeof (this.domainExtensions as any).validate === 'function') {
      (this.domainExtensions as any).validate();
    }
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

