// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServerGroupsResponseBodyServerGroupsConnectionDrainConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether connection draining is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  connectionDrainEnabled?: boolean;
  /**
   * @remarks
   * The timeout period of connection draining.
   * 
   * @example
   * 300
   */
  connectionDrainTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      connectionDrainEnabled: 'ConnectionDrainEnabled',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDrainEnabled: 'boolean',
      connectionDrainTimeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsResponseBodyServerGroupsHealthCheckConfig extends $dara.Model {
  /**
   * @remarks
   * The HTTP status codes that indicate healthy backend servers.
   */
  healthCheckCodes?: string[];
  /**
   * @remarks
   * The backend port that is used for health checks. Valid values: **0** to **65535**.
   * 
   * A value of **0** indicates that the port of a backend server is used for health checks.
   * 
   * @example
   * 80
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  healthCheckEnabled?: boolean;
  /**
   * @remarks
   * The domain name that is used for health checks.
   * 
   * *   **Backend Server Internal IP** (default): Use the internal IP address of backend servers as the health check domain name.
   * 
   * *   **Custom Domain Name**: Enter a domain name.
   * 
   *     *   The domain name is 1 to 80 characters in length.
   *     *   The domain name contains lowercase letters, digits, hyphens (-), and periods (.).
   *     *   The domain name contains at least one period (.) but does not start or end with a period (.).
   *     *   The rightmost domain label of the domain name contains only letters, and does not contain digits or hyphens (-).
   *     *   The domain name does not start or end with a hyphen (-).
   * 
   * >  This parameter takes effect only if HealthCheckProtocol is set to HTTP, HTTPS, or gRPC.
   * 
   * @example
   * www.example.com
   */
  healthCheckHost?: string;
  /**
   * @remarks
   * The HTTP version that is used for health checks.
   * 
   * Valid values: **HTTP1.0** and **HTTP1.1**.
   * 
   * >  This parameter takes effect only if **HealthCheckProtocol** is set to **HTTP** or **HTTPS**.
   * 
   * @example
   * HTTP1.1
   */
  healthCheckHttpVersion?: string;
  /**
   * @remarks
   * The interval at which health checks are performed. Unit: seconds. Valid values: **1** to **50**.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The HTTP method that is used for health checks. Valid values:
   * 
   * *   **GET**: If the length of a response exceeds 8 KB, the response is truncated. However, the health check result is not affected.
   * *   **POST**: gRPC health checks use the POST method by default.
   * *   **HEAD**: HTTP and HTTPS health checks use the HEAD method by default.
   * 
   * >  This parameter takes effect only if **HealthCheckProtocol** is set to **HTTP**, **HTTPS**, or **gRPC**.
   * 
   * @example
   * HEAD
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The URL that is used for health checks.
   * 
   * >  This parameter takes effect only if **HealthCheckProtocol** is set to **HTTP** or **HTTPS**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckPath?: string;
  /**
   * @remarks
   * The protocol that is used for health checks. Valid values:
   * 
   * *   **HTTP**: HTTP health checks simulate browser behaviors by sending HEAD or GET requests to probe the availability of backend servers.
   * *   **HTTPS**: HTTPS health checks simulate browser behaviors by sending HEAD or GET requests to probe the availability of backend servers. HTTPS supports encryption and provides higher security than HTTP.
   * *   **TCP**: TCP health checks send TCP SYN packets to a backend server to check whether the port of the backend server is reachable.
   * *   **gRPC**: gRPC health checks send POST or GET requests to a backend server to check whether the backend server is healthy.
   * 
   * @example
   * HTTP
   */
  healthCheckProtocol?: string;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend server does not respond within the specified timeout period, the backend server is declared unhealthy. Unit: seconds.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from **fail** to **success**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from **success** to **fail**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckCodes: 'HealthCheckCodes',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckHost: 'HealthCheckHost',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckPath: 'HealthCheckPath',
      healthCheckProtocol: 'HealthCheckProtocol',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckCodes: { 'type': 'array', 'itemType': 'string' },
      healthCheckConnectPort: 'number',
      healthCheckEnabled: 'boolean',
      healthCheckHost: 'string',
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckPath: 'string',
      healthCheckProtocol: 'string',
      healthCheckTimeout: 'number',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.healthCheckCodes)) {
      $dara.Model.validateArray(this.healthCheckCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsResponseBodyServerGroupsSlowStartConfig extends $dara.Model {
  /**
   * @remarks
   * The duration of a slow start.
   * 
   * @example
   * 30
   */
  slowStartDuration?: number;
  /**
   * @remarks
   * Indicates whether slow starts are enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  slowStartEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      slowStartDuration: 'SlowStartDuration',
      slowStartEnabled: 'SlowStartEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slowStartDuration: 'number',
      slowStartEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsResponseBodyServerGroupsStickySessionConfig extends $dara.Model {
  /**
   * @remarks
   * The cookie configured for the server.
   * 
   * @example
   * B490B5EBF6F3CD402E515D22BCDA****
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of the cookie. Unit: seconds. Valid values: **1** to **86400**.
   * 
   * >  This parameter takes effect only when **StickySessionEnabled** is set to **true** and **StickySessionType** is set to **Insert**.
   * 
   * @example
   * 1000
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * Indicates whether session persistence is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  stickySessionEnabled?: boolean;
  /**
   * @remarks
   * The method that is used to handle the cookie. Valid values:
   * 
   * *   **insert**: inserts the cookie. The first time a client accesses ALB, ALB inserts the SERVERID cookie into the HTTP or HTTPS response packet. Subsequent requests from the client that carry this cookie are forwarded to the same backend server as the first request.
   * *   **Server**: rewrites the cookie. ALB rewrites the custom cookies in requests from a client. Subsequent requests from the client that carry the new cookie are forwarded to the same backend server as the first request.
   * 
   * @example
   * Insert
   */
  stickySessionType?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      stickySessionEnabled: 'StickySessionEnabled',
      stickySessionType: 'StickySessionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      stickySessionEnabled: 'boolean',
      stickySessionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsResponseBodyServerGroupsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * Test
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

export class ListServerGroupsResponseBodyServerGroupsUchConfig extends $dara.Model {
  /**
   * @remarks
   * The parameter type. Valid value: QueryString.
   * 
   * @example
   * QueryString
   */
  type?: string;
  /**
   * @remarks
   * The hash value.
   * 
   * @example
   * abc
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

export class ListServerGroupsResponseBodyServerGroups extends $dara.Model {
  /**
   * @remarks
   * Indicates whether configuration management is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  configManagedEnabled?: boolean;
  /**
   * @remarks
   * The configurations of connection draining.
   * 
   * After connection draining is enabled, ALB maintains data transmission for a period of time after the backend server is removed or declared unhealthy.
   * > 
   * > - Basic ALB instances do not support connection draining. Standard and WAF-enabled ALB instances support connection draining. 
   * > -  Server groups of the instance and IP types support connection draining. Server groups of the Function Compute type do not support connection draining.
   */
  connectionDrainConfig?: ListServerGroupsResponseBodyServerGroupsConnectionDrainConfig;
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * @example
   * 2022-07-02T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether cross-zone load balancing is enabled. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  crossZoneEnabled?: boolean;
  /**
   * @remarks
   * The health check configurations.
   */
  healthCheckConfig?: ListServerGroupsResponseBodyServerGroupsHealthCheckConfig;
  /**
   * @remarks
   * Indicates whether IPv6 is supported. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  ipv6Enabled?: boolean;
  /**
   * @remarks
   * The backend protocol. Valid values:
   * 
   * *   **HTTP**: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers.
   * *   **HTTPS**: allows you to associate HTTPS listeners with backend servers.
   * *   **GRPC**: allows you to associate HTTPS and QUIC listeners with backend servers.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the ALB instance associated with the server group.
   */
  relatedLoadBalancerIds?: string[];
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **Wrr**: weighted round-robin. Backend servers with higher weights receive more requests than backend servers with lower weights.
   * *   **Wlc**: weighted least connections. Requests are distributed based on the weight and load of each backend server. The load refers to the number of connections on a backend server. If multiple backend servers have the same weight, requests are forwarded to the backend server with the least number of connections.
   * *   **Sch**: consistent hashing. Requests that have the same hash factors are distributed to the same backend server. If you do not specify the UchConfig parameter, the source IP address is used as the hash factor by default. Requests that are from the same IP address are distributed to the same backend server. If you specify the UchConfig parameter, the URL string is used as the hash factor. Requests that have the same URL string are distributed to the same backend server.
   * 
   * @example
   * Wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The number of backend servers in the server group.
   * 
   * @example
   * 1
   */
  serverCount?: number;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * sgp-cige6j****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The server group name.
   * 
   * @example
   * Group3
   */
  serverGroupName?: string;
  /**
   * @remarks
   * The status of the server group. Valid values:
   * 
   * *   **Creating**.
   * *   **Available**
   * *   **Configuring**
   * 
   * @example
   * Available
   */
  serverGroupStatus?: string;
  /**
   * @remarks
   * The server group type. Valid values:
   * 
   * *   **Instance**: instances, including ECS instances, ENIs, and elastic container instances.
   * *   **Ip**: IP addresses.
   * *   **Fc**: Function Compute
   * 
   * @example
   * Instance
   */
  serverGroupType?: string;
  /**
   * @remarks
   * The name of the server group.
   * 
   * @example
   * test
   */
  serviceName?: string;
  /**
   * @remarks
   * The configurations of slow starts.
   * 
   * After slow starts are enabled, ALB prefetches data to newly added backend servers. Requests distributed to the backend servers gradually increase.
   * 
   * > 
   * > - Basic ALB instances do not support slow starts. Standard and WAF-enabled ALB instances support slow starts.
   * > - Server groups of the instance and IP types support slow starts. Server groups of the Function Compute type do not support slow starts.
   * > - Slow start is supported only by the weighted round-robin scheduling algorithm.
   */
  slowStartConfig?: ListServerGroupsResponseBodyServerGroupsSlowStartConfig;
  /**
   * @remarks
   * The configuration of session persistence.
   */
  stickySessionConfig?: ListServerGroupsResponseBodyServerGroupsStickySessionConfig;
  /**
   * @remarks
   * The tags that are added to the server group.
   */
  tags?: ListServerGroupsResponseBodyServerGroupsTags[];
  /**
   * @remarks
   * The configuration of consistent hashing based on URLs.
   */
  uchConfig?: ListServerGroupsResponseBodyServerGroupsUchConfig;
  /**
   * @remarks
   * Indicates whether persistent TCP connections are enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  upstreamKeepaliveEnabled?: boolean;
  /**
   * @remarks
   * The ID of the VPC to which the ALB instance belongs.
   * 
   * @example
   * vpc-bp15zckdt37pq72zv****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      configManagedEnabled: 'ConfigManagedEnabled',
      connectionDrainConfig: 'ConnectionDrainConfig',
      createTime: 'CreateTime',
      crossZoneEnabled: 'CrossZoneEnabled',
      healthCheckConfig: 'HealthCheckConfig',
      ipv6Enabled: 'Ipv6Enabled',
      protocol: 'Protocol',
      relatedLoadBalancerIds: 'RelatedLoadBalancerIds',
      resourceGroupId: 'ResourceGroupId',
      scheduler: 'Scheduler',
      serverCount: 'ServerCount',
      serverGroupId: 'ServerGroupId',
      serverGroupName: 'ServerGroupName',
      serverGroupStatus: 'ServerGroupStatus',
      serverGroupType: 'ServerGroupType',
      serviceName: 'ServiceName',
      slowStartConfig: 'SlowStartConfig',
      stickySessionConfig: 'StickySessionConfig',
      tags: 'Tags',
      uchConfig: 'UchConfig',
      upstreamKeepaliveEnabled: 'UpstreamKeepaliveEnabled',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configManagedEnabled: 'boolean',
      connectionDrainConfig: ListServerGroupsResponseBodyServerGroupsConnectionDrainConfig,
      createTime: 'string',
      crossZoneEnabled: 'boolean',
      healthCheckConfig: ListServerGroupsResponseBodyServerGroupsHealthCheckConfig,
      ipv6Enabled: 'boolean',
      protocol: 'string',
      relatedLoadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      scheduler: 'string',
      serverCount: 'number',
      serverGroupId: 'string',
      serverGroupName: 'string',
      serverGroupStatus: 'string',
      serverGroupType: 'string',
      serviceName: 'string',
      slowStartConfig: ListServerGroupsResponseBodyServerGroupsSlowStartConfig,
      stickySessionConfig: ListServerGroupsResponseBodyServerGroupsStickySessionConfig,
      tags: { 'type': 'array', 'itemType': ListServerGroupsResponseBodyServerGroupsTags },
      uchConfig: ListServerGroupsResponseBodyServerGroupsUchConfig,
      upstreamKeepaliveEnabled: 'boolean',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.connectionDrainConfig && typeof (this.connectionDrainConfig as any).validate === 'function') {
      (this.connectionDrainConfig as any).validate();
    }
    if(this.healthCheckConfig && typeof (this.healthCheckConfig as any).validate === 'function') {
      (this.healthCheckConfig as any).validate();
    }
    if(Array.isArray(this.relatedLoadBalancerIds)) {
      $dara.Model.validateArray(this.relatedLoadBalancerIds);
    }
    if(this.slowStartConfig && typeof (this.slowStartConfig as any).validate === 'function') {
      (this.slowStartConfig as any).validate();
    }
    if(this.stickySessionConfig && typeof (this.stickySessionConfig as any).validate === 'function') {
      (this.stickySessionConfig as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.uchConfig && typeof (this.uchConfig as any).validate === 'function') {
      (this.uchConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If **NextToken** is not empty, the value of NextToken can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f8****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * The server groups.
   */
  serverGroups?: ListServerGroupsResponseBodyServerGroups[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serverGroups: 'ServerGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serverGroups: { 'type': 'array', 'itemType': ListServerGroupsResponseBodyServerGroups },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.serverGroups)) {
      $dara.Model.validateArray(this.serverGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

