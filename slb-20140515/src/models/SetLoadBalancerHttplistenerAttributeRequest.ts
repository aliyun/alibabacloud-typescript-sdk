// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLoadBalancerHTTPListenerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control list (ACL) that is associated with the listener.
   * 
   * > This parameter is required when **AclStatus** is set to **on**.
   * 
   * @example
   * acl-uf60jw******
   */
  aclId?: string;
  /**
   * @remarks
   * Specifies whether to enable access control. Valid values:
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
   * The type of the ACL. Valid values:
   * 
   * *   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios where you want to allow only specific IP addresses to access an application. Risks may occur if a whitelist is improperly configured. If a whitelist is configured, only requests from IP addresses that are added to the whitelist are forwarded by the listener.
   * 
   * If you enable a whitelist but do not add an IP address to the ACL, the listener forwards all requests.
   * 
   * *   **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are rejected. Blacklists apply to scenarios where you want to block access from specified IP addresses to an application.
   * 
   * If a blacklist is configured for a listener but no IP addresses are added to the blacklist, the listener forwards all requests.
   * 
   * > This parameter takes effect when the value of **AclStatus** is set to **on**.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s. Set the value to
   * 
   * *   **-1**: For a pay-by-data-transfer Internet-facing CLB instance, this value specifies that the bandwidth of the listener is unlimited.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The cookie that is configured on the server.
   * 
   * The cookie must be 1 to 200 characters in length, and can contain ASCII characters and digits. It cannot contain commas (,), semicolons (;), or spaces. It cannot start with a dollar sign ($).
   * 
   * > This parameter is required when **StickySession** is set to **on** and **StickySessionType** is set to **server**.
   * 
   * @example
   * testCookie
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of a cookie.
   * 
   * Valid values: **1** to **86400**. Unit: seconds.
   * 
   * > This parameter is required when **StickySession** is set to **on** and **StickySessionType** is set to **insert**.
   * 
   * @example
   * 500
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The description of the listener.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable `GZIP` compression to compress specific types of files. Valid values:
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
   * Specifies whether to enable the health check feature. Valid values:
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
   * Valid values: **1** to **65535**.
   * 
   * > This parameter takes effect only if you set **HealthCheck** to **on**.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that is used for health checks. Valid values:
   * 
   * *   **$_ip**: the private IP address of a backend server. If you specify \\*\\*$_ip **or** ignore HealthCheckDomain\\*\\*, CLB uses the private IP addresses of backend servers as the health check domain names.
   * *   **domain**: The domain name must be 1 to 80 characters in length, and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * > The parameter takes effect only if you set **HealthCheck** to **on**.
   * 
   * @example
   * 172.XX.XX.16
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code for a successful health check. Separate multiple HTTP status codes with commas (,).
   * 
   * Valid values: **http_2xx**, **http_3xx**, **http_4xx**, and **http_5xx**.
   * 
   * >  The parameter takes effect only if you set **HealthCheck** to **on**.
   * 
   * @example
   * http_2xx,http_3xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval at which health checks are performed.
   * 
   * Valid values: **1** to **50**. Unit: seconds.
   * 
   * >  The parameter takes effect only if you set **HealthCheck** to **on**.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check method that is used in HTTP health checks. Valid values: **head** and **get**.
   * 
   * > The parameter takes effect only if you set **HealthCheck** to **on**.
   * 
   * @example
   * get
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. This parameter takes effect only if the **HealthCheck** parameter is set to **on**.
   * 
   * Valid values: **1** to **300**. Unit: seconds.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The Uniform Resource Identifier (URI) that you want to use for health checks.
   * 
   * The URI must be 1 to 80 characters in length, and can contain letters, digits, and the following characters: - / . % ? # & The URI must start with a forward slash (/) but cannot be a single forward slash (/).
   * 
   * > The parameter takes effect only if you set **HealthCheck** to **on**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * > The parameter takes effect only if you set **HealthCheck** to **on**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The timeout period of an idle connection. Unit: seconds. Valid values: **1 to 60**. Default value: **15**.
   * 
   * If no request is received within the specified timeout period, CLB closes the connection. When a request is received, CLB establishes a new connection.
   * 
   * @example
   * 12
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
   * The CLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1qjwo61pqz3ah*****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can query the region ID from the [Regions and zones](https://help.aliyun.com/document_detail/27585.html) list or by calling the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The timeout period of a request. Unit: seconds. Valid values: **1 to 180**. Default value: **60**.
   * 
   * If no response is received from the backend server within the request timeout period, CLB returns an HTTP 504 error code to the client.
   * 
   * @example
   * 3
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
   * Specifies whether to enable session persistence. Valid values:
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
   * The method that is used to handle a cookie. Valid values:
   * 
   * *   **insert**: inserts a cookie.
   * 
   * CLB inserts a cookie (SERVERID) into the first HTTP or HTTPS response packet that is sent to a client. The next request from the client contains this cookie, and the listener distributes the request to the recorded backend server.
   * 
   * *   **server**: rewrites a cookie.
   * 
   * When CLB detects a user-defined cookie, CLB overwrites the original cookie with the user-defined cookie. The next request from the client carries the user-defined cookie, and the listener forwards the request to the recorded backend server.
   * 
   * > This parameter is required when **StickySession** is set to **on**.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * > The parameter takes effect only if you set **HealthCheck** to **on**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * Specifies whether to use a vServer group. Valid values:
   * 
   * *   **on**
   * *   **off**
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
   * rsp-cige6j*****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-For` header to preserve client IP addresses. Valid values:
   * 
   * *   **on** (default)
   * *   **off**
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
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_SLBID?: string;
  /**
   * @remarks
   * Specifies whether to use the `SLB-IP` header to retrieve the virtual IP address (VIP) requested by the client. Valid values:
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
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      bandwidth: 'Bandwidth',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      description: 'Description',
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
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
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
      cookie: 'string',
      cookieTimeout: 'number',
      description: 'string',
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
      stickySession: 'string',
      stickySessionType: 'string',
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

