// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLoadBalancerHTTPSListenerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the network access control list (ACL) that is associated with the listener.
   * 
   * This parameter is required if **AclStatus** is set to **on**.
   * 
   * @example
   * nacl-a2do9e413e0spzasx****
   */
  aclId?: string;
  /**
   * @remarks
   * Specifies whether to enable access control. Valid values:
   * 
   * *   **on**: enables access control
   * *   **off**: disables access control
   * 
   * @example
   * off
   */
  aclStatus?: string;
  /**
   * @remarks
   * The type of network ACL. Valid values:
   * 
   * *   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the network ACL are forwarded. Whitelists apply to scenarios where you want to allow only specific IP addresses to access an application. Your business may be adversely affected if the whitelist is not set properly. After a whitelist is configured, only IP addresses in the whitelist can access the CLB listener.
   * 
   *     If no IP address is added to the whitelist, the CLB listener forwards all requests.
   * 
   * *   **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the network ACL are denied. Blacklists apply to scenarios where you want to deny access from specified IP addresses to an application.
   * 
   *     If no IP address is added to the blacklist, the listener forwards all requests.
   * 
   * >  This parameter takes effect only when **AclStatus** is set to **on**.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s.
   * 
   * Valid values:
   * 
   * *   **-1**: If you set the value to -1, the bandwidth of the listener is unlimited.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the CA certificate.
   * 
   * *   If both the CA certificate and the server certificate are uploaded, mutual authentication is used.
   * *   If you upload only the server certificate, one-way authentication is used.
   * 
   * @example
   * 139a00604ad-cn-east-****
   */
  CACertificateId?: string;
  /**
   * @remarks
   * The cookie that you want to configure for the server.
   * 
   * The cookie must be 1 to 200 characters in length, and can contain only ASCII letters and digits. It cannot contain commas (,), semicolons (;), or space characters. It cannot start with a dollar sign ($).
   * 
   * >  This parameter is required when you set the **StickySession** parameter to **on** and the **StickySessionType** parameter to **server**.
   * 
   * @example
   * testCookie
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of the cookie. Unit: seconds.
   * 
   * Valid values: **1** to **86400**.
   * 
   * >  This parameter is required if the **StickySession** parameter is set to **on** and the **StickySessionType** parameter is set to **insert**.
   * 
   * @example
   * 500
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The description of the listener.
   * The name must be 1 to 256 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * @example
   * https_80
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to use `HTTP 2.0`. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * off
   */
  enableHttp2?: string;
  /**
   * @remarks
   * Specifies whether to enable `Gzip` compression to compress specific types of files. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  gzip?: string;
  /**
   * @remarks
   * Specifies whether to enable health checks. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * Valid values: **1** to **65535**.
   * 
   * >  This parameter takes effect only when the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that is used for health checks. Valid values:
   * 
   * *   **$_ip**: the private IP address of a backend server. If you do not set this parameter or set the parameter to $_ip, the CLB instance uses the private IP address of each backend server as the domain name for health checks.
   * *   **domain**: The domain name must be 1 to 80 characters in length, and can contain letters, digits, periods (.),and hyphens (-).
   * 
   * >  This parameter takes effect only when the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 172.XX.XX.16
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code of a successful health check. Separate multiple HTTP status codes with commas (,).
   * 
   * Valid values: **http_2xx**, **http_3xx**, **http_4xx**, and **http_5xx**.
   * 
   * >  This parameter takes effect only when the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * http_2xx,http_3xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds.
   * 
   * Valid values: **1** to **50**.
   * 
   * >  This parameter takes effect only when the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The HTTP method that is used for health checks. Valid values: **head** and **get**.
   * 
   * >  This parameter takes effect only when the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * get
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds Valid values: **1** to **300**.
   * 
   * >  This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The URL that is used for health checks.
   * 
   * The URL must be 1 to 80 characters in length and can contain letters, digits, and the following characters: - / . % ? # &. The URL must not be a single forward slash (/) but it must start with a forward slash (/).
   * 
   * >  This parameter takes effect only when the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of health checks that an unhealthy backend server must consecutively pass before it can be declared healthy (from **fail** to **success**).
   * 
   * Valid values: **2** to **10**.
   * 
   * >  This parameter takes effect only when the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The timeout period of an idle connection. Unit: seconds. Valid values: **1 to 60**. Default value: **15**.
   * 
   * If no request is received within the specified timeout period, CLB closes the connection. When another request is received, CLB establishes a new connection.
   * 
   * @example
   * 23
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
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
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-sjhfdji****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the CLB instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The timeout period of a request. Unit: seconds. Valid values: **1 to 180**. Default value: **60**.
   * 
   * If no response is received from the backend server during the request timeout period, CLB sends an HTTP 504 error code to the client.
   * 
   * @example
   * 223
   */
  requestTimeout?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
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
   * The ID of the server certificate.
   * 
   * @example
   * idkp-123-cn-te****
   */
  serverCertificateId?: string;
  /**
   * @remarks
   * Specifies whether to enable session persistence. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  stickySession?: string;
  /**
   * @remarks
   * The method that is used to handle a cookie. Valid values:
   * 
   * *   **insert**: inserts a cookie.
   * 
   *     CLB inserts a cookie (SERVERID) into the first HTTP or HTTPS response that is sent to a client. The next request from the client will contain this cookie, and the listener will distribute this request to the recorded backend server.
   * 
   * *   **server**: rewrites a cookie.
   * 
   *     When CLB detects a user-defined cookie, it overwrites the original cookie with the user-defined cookie. The next request from the client will contain the user-defined cookie, and the listener will distribute this request to the recorded backend server.
   * 
   * >  This parameter is required if the **StickySession** parameter is set to **on**.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The Transport Layer Security (TLS) security policy. Each security policy contains TLS protocol versions and cipher suites available for HTTPS.
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
   * tls_cipher_policy_1_2
   */
  TLSCipherPolicy?: string;
  /**
   * @remarks
   * The number of health checks that a healthy backend server must consecutively fail before it can be declared unhealthy (from **success** to **fail**).
   * 
   * Valid values: **2** to **10**.
   * 
   * >  This parameter takes effect only when the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * Specifies whether to use a vServer group. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  VServerGroup?: string;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * @example
   * rsp-cige6j****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-For` header to retrieve client IP addresses. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  XForwardedFor?: string;
  /**
   * @remarks
   * Specifies whether to use the `XForwardedFor_ClientSrcPort` header to retrieve the client port. Valid values:
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
   * Specifies whether to use the `SLB-ID` header to retrieve the ID of the CLB instance. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  XForwardedFor_SLBID?: string;
  /**
   * @remarks
   * Specifies whether to use the `SLB-IP` header to obtain the virtual IP address (VIP) requested by the client. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  XForwardedFor_SLBIP?: string;
  /**
   * @remarks
   * Specifies whether to use the `XForwardedFor_SLBPORT` header to retrieve the listener port of the CLB instance. Valid values:
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
   * Specifies whether to use the `X-Forwarded-Proto` header to retrieve the listener protocol. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      bandwidth: 'Bandwidth',
      CACertificateId: 'CACertificateId',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      description: 'Description',
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
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      requestTimeout: 'RequestTimeout',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduler: 'Scheduler',
      serverCertificateId: 'ServerCertificateId',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      TLSCipherPolicy: 'TLSCipherPolicy',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroup: 'VServerGroup',
      VServerGroupId: 'VServerGroupId',
      XForwardedFor: 'XForwardedFor',
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
      aclStatus: 'string',
      aclType: 'string',
      bandwidth: 'number',
      CACertificateId: 'string',
      cookie: 'string',
      cookieTimeout: 'number',
      description: 'string',
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
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      requestTimeout: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduler: 'string',
      serverCertificateId: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      TLSCipherPolicy: 'string',
      unhealthyThreshold: 'number',
      VServerGroup: 'string',
      VServerGroupId: 'string',
      XForwardedFor: 'string',
      XForwardedFor_ClientSrcPort: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_SLBPORT: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

