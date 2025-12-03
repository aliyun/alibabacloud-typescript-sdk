// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerHTTPListenerAttributeResponseBodyAclIds extends $dara.Model {
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

export class DescribeLoadBalancerHTTPListenerAttributeResponseBodyRulesRule extends $dara.Model {
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
   * 1234
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * test
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
   * rsp-uf6w******
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

export class DescribeLoadBalancerHTTPListenerAttributeResponseBodyRules extends $dara.Model {
  rule?: DescribeLoadBalancerHTTPListenerAttributeResponseBodyRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeLoadBalancerHTTPListenerAttributeResponseBodyRulesRule },
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

export class DescribeLoadBalancerHTTPListenerAttributeResponseBodyTagsTag extends $dara.Model {
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

export class DescribeLoadBalancerHTTPListenerAttributeResponseBodyTags extends $dara.Model {
  tag?: DescribeLoadBalancerHTTPListenerAttributeResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeLoadBalancerHTTPListenerAttributeResponseBodyTagsTag },
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

export class DescribeLoadBalancerHTTPListenerAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the network ACL that is associated with a listener.
   * 
   * > This parameter is returned when **AclStatus** is set to **on**.
   * 
   * @example
   * acl-uf60jw******
   */
  aclId?: string;
  /**
   * @remarks
   * The ID of the access control list (ACL).
   */
  aclIds?: DescribeLoadBalancerHTTPListenerAttributeResponseBodyAclIds;
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
   * The type of the ACL. Valid values:
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
   * 80
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s.
   * 
   * *   **-1**: If -1 is returned, it indicates that the bandwidth of the listener is unlimited.
   * *   **1 to 5120**: If a value from 1 to 5120 is returned, the value indicates the maximum bandwidth of the listener. The sum of the maximum bandwidth of all listeners added to a CLB instance does not exceed the maximum bandwidth of the CLB instance.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
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
   * The timeout period of a cookie. Unit: seconds.
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
   * HTTP_80
   */
  description?: string;
  /**
   * @remarks
   * The listener port that is used to redirect HTTP requests to HTTPS.
   * 
   * >  If the **ListenerForward** parameter is set to **off**, this parameter is not displayed.
   * 
   * @example
   * 80
   */
  forwardPort?: number;
  /**
   * @remarks
   * Indicates whether `Gzip` compression is enabled to compress specific types of files. Valid values:
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
   * > This parameter takes effect only when **HealthCheck** is set to **on**.
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
   * www.domain.com
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
   * > This parameter is returned when **HealthCheck** is set to **on**.
   * 
   * @example
   * get
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The timeout period of each health check. Unit: seconds.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The URL path that is used for health checks.
   * 
   * The URI must be 1 to 80 characters in length, and can contain only digits, letters, hyphens (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number signs (#), and ampersands (&). The URI must start with a forward slash (/) but cannot be a single forward slash (/).
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
   * The timeout period of an idle connection. Unit: seconds.
   * 
   * Default value: **15**. Valid values: **1 to 60**.
   * 
   * If no request is received within the specified timeout period, CLB closes the connection. When a request is received, CLB establishes a new connection.
   * 
   * @example
   * 2
   */
  idleTimeout?: number;
  /**
   * @remarks
   * Indicates whether HTTP-to-HTTPS redirection is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  listenerForward?: string;
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
   * lb-bp1uaunez0uho0zf0****
   */
  loadBalancerId?: string;
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
   * Default value: **60**. Valid values: **1 to 180**.
   * 
   * If no response is received from a backend server within the specified timeout period, CLB returns the HTTP 504 status code to the client.
   * 
   * @example
   * 34
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The list of forwarding rules.
   */
  rules?: DescribeLoadBalancerHTTPListenerAttributeResponseBodyRules;
  /**
   * @remarks
   * The routing algorithm. Valid values:
   * 
   * *   **wrr**: Backend servers that have higher weights receive more requests than backend servers that have lower weights.
   * *   \\*\\* rr\\*\\*: Requests are sequentially distributed to backend servers.
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
   *     CLB inserts a session cookie (SERVERID) into the first HTTP or HTTPS response that is sent to a client. Subsequent requests to CLB carry this cookie, and CLB determines the destination servers of the requests based on the cookies.
   * 
   * *   **server**: rewrites a cookie.
   * 
   *     When CLB detects a user-defined cookie, it overwrites the original cookie with the user-defined cookie. The next request from the client carries the user-defined cookie, and the listener forwards this request to the recorded backend server.
   * 
   * > This parameter is required when **StickySession** is set to **on**.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeLoadBalancerHTTPListenerAttributeResponseBodyTags;
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
   * rsp-cige6j****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-For` header is used to preserve the real IP address of the client. Valid values:
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
   * Indicates whether the `SLB-ID` header is used to retrieve the ID of the CLB instance. Valid values:
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
   * Indicates whether the `XForwardedFor_SLBPORT` header is used to retrieve the listener port of the CLB instance. Valid values:
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
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      description: 'Description',
      forwardPort: 'ForwardPort',
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
      listenerForward: 'ListenerForward',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
      requestTimeout: 'RequestTimeout',
      rules: 'Rules',
      scheduler: 'Scheduler',
      securityStatus: 'SecurityStatus',
      status: 'Status',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      tags: 'Tags',
      unhealthyThreshold: 'UnhealthyThreshold',
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
      aclIds: DescribeLoadBalancerHTTPListenerAttributeResponseBodyAclIds,
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      cookie: 'string',
      cookieTimeout: 'number',
      description: 'string',
      forwardPort: 'number',
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
      listenerForward: 'string',
      listenerPort: 'number',
      loadBalancerId: 'string',
      requestId: 'string',
      requestTimeout: 'number',
      rules: DescribeLoadBalancerHTTPListenerAttributeResponseBodyRules,
      scheduler: 'string',
      securityStatus: 'string',
      status: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      tags: DescribeLoadBalancerHTTPListenerAttributeResponseBodyTags,
      unhealthyThreshold: 'number',
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
    if(this.aclIds && typeof (this.aclIds as any).validate === 'function') {
      (this.aclIds as any).validate();
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

