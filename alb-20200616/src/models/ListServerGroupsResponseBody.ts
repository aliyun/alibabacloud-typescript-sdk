// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServerGroupsResponseBodyServerGroupsConnectionDrainConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable connection draining.
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  connectionDrainEnabled?: boolean;
  /**
   * @remarks
   * The timeout period for connection draining.
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
   * The list of status codes that indicate a successful health check.
   */
  healthCheckCodes?: string[];
  /**
   * @remarks
   * The port of the backend server used for health checks. Valid values: **0** to **65535**. A value of **0** indicates that the port of the backend server is used for health checks.
   * 
   * @example
   * 80
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * Indicates whether health checks are enabled. Valid values:
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  healthCheckEnabled?: boolean;
  /**
   * @remarks
   * The domain name used for health checks.
   * 
   * - **Use the internal IP address of the backend server** (default): The internal IP address of the backend server is used as the domain name for health checks.
   * 
   * - **Specify a domain name**: Enter a domain name.
   * 
   *   - The domain name must be 1 to 80 characters in length.
   * 
   *   - It can contain lowercase letters, digits, hyphens (-), and periods (.).
   * 
   *   - It must contain at least one period (.), and the period (.) cannot be at the beginning or end.
   * 
   *   - The rightmost domain label can contain only letters, and cannot contain digits or hyphens (-).
   * 
   *   - A hyphen (-) cannot be at the beginning or end.
   * 
   * > 
   * > This parameter takes effect only when **HealthCheckProtocol** is set to **HTTP**, **HTTPS**, or **gRPC**.
   * 
   * @example
   * www.example.com
   */
  healthCheckHost?: string;
  /**
   * @remarks
   * The HTTP version for health checks. Valid values: **HTTP1.0** and **HTTP1.1**.
   * 
   * > This parameter takes effect only when **HealthCheckProtocol** is set to **HTTP** or **HTTPS**.
   * 
   * @example
   * HTTP1.1
   */
  healthCheckHttpVersion?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds. Valid values: **1** to **50**.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The HTTP method used for health checks. Valid values:
   * 
   * - **GET**: If the response message exceeds 8 KB, it is truncated. However, this does not affect the health check result.
   * 
   * - **POST**: The POST method is used by default for gRPC listener health checks.
   * 
   * - **HEAD**: The HEAD method is used by default for HTTP and HTTPS listener health checks.
   * 
   * 
   * > This parameter takes effect only when **HealthCheckProtocol** is set to **HTTP**, **HTTPS**, or **gRPC**.
   * 
   * @example
   * HEAD
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The path used for health checks.
   * 
   * > This parameter takes effect only when **HealthCheckProtocol** is set to **HTTP** or **HTTPS**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckPath?: string;
  /**
   * @remarks
   * The protocol used for health checks. Valid values:
   * 
   * - **HTTP**: Sends HEAD or GET requests for browser impersonation to check whether the server application is healthy.
   * 
   * - **HTTPS**: Sends HEAD or GET requests for browser impersonation to check whether the server application is healthy. (Data encryption, more secure than HTTP.)
   * 
   * - **TCP**: Sends SYN handshake messages to check whether the server port is alive.
   * 
   * - **gRPC**: Sends POST or GET requests to check whether the server application is healthy.
   * 
   * @example
   * HTTP
   */
  healthCheckProtocol?: string;
  /**
   * @remarks
   * The timeout period for a health check response. If the backend server does not respond within the specified timeout period, the health check fails. Unit: seconds.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The number of consecutive successful health checks required to change the health check status of a backend server from **Failed** to **Successful**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The number of consecutive failed health checks required to change the health check status of a backend server from **Successful** to **Failed**.
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
   * The duration of slow start.
   * 
   * @example
   * 30
   */
  slowStartDuration?: number;
  /**
   * @remarks
   * Specifies whether to enable slow start.
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
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
   * The cookie configured on the server.
   * 
   * @example
   * B490B5EBF6F3CD402E515D22BCDA****
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of the cookie. Unit: seconds. Valid values: **1** to **86400**.
   * 
   * > This parameter takes effect only when **StickySessionEnabled** is set to **true** and **StickySessionType** is set to **Insert**.
   * 
   * @example
   * 1000
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * Indicates whether session persistence is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  stickySessionEnabled?: boolean;
  /**
   * @remarks
   * The method used to handle cookies. Valid values:
   * 
   * - **Insert**: Insert a cookie. When a client accesses the service for the first time, the load balancing inserts a cookie (that is, inserts SERVERID into the HTTP or HTTPS response message). The next time the client accesses the service with this cookie, the load balancing service forwards the request to the previously recorded backend server.
   * - **Server**: Rewrite a cookie. When the load balancing detects a user-defined cookie, it rewrites the original cookie. The next time the client accesses the service with the new cookie, the load balancing service forwards the request to the previously recorded backend server.
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
   * The parameter type. Only QueryString is supported.
   * 
   * @example
   * QueryString
   */
  type?: string;
  /**
   * @remarks
   * The consistent hash parameter value.
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
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  configManagedEnabled?: boolean;
  /**
   * @remarks
   * The graceful connection break configuration.
   * 
   * When graceful connection break is enabled, load balancing allows existing connections to be transmitted normally within a specified period after a backend server is removed or a health check failed.
   * >
   * > - Graceful connection break is not supported by Basic Edition instances. Only Standard Edition and WAF Enhanced Edition instances support this feature.
   * > - Graceful connection break is supported by server groups of the server type and IP type, but not by server groups of the Function Compute type.
   */
  connectionDrainConfig?: ListServerGroupsResponseBodyServerGroupsConnectionDrainConfig;
  /**
   * @remarks
   * The time when the resource was created. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2022-07-02T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * Specifies whether to enable cross-zone load balancing for the server group. Valid values:
   * 
   * - **true**: Enabled. This is the default value.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  crossZoneEnabled?: boolean;
  /**
   * @remarks
   * The health check configuration.
   */
  healthCheckConfig?: ListServerGroupsResponseBodyServerGroupsHealthCheckConfig;
  /**
   * @remarks
   * The IP version affinity mode. Valid values:
   * - NonAffinity: No affinity mode. This is the default value.
   * - Affinity: Affinity mode.  
   * 
   * This parameter takes effect only when Ipv6Enabled is set to true.
   * 
   * @example
   * Affinity
   */
  ipVersionAffinityMode?: string;
  /**
   * @remarks
   * Indicates whether the IP protocol version used by the load balancing to forward traffic to the backend server group supports IPv6. Valid values:
   * - **false** (default): IPv6 is not supported. For the IPv4 type, only IPv4 backend servers can be added.
   * - **true**: Dual-stack type. Both IPv4 and IPv6 backend servers can be added.
   * 
   * @example
   * false
   */
  ipv6Enabled?: boolean;
  /**
   * @remarks
   * The backend protocol type. Valid values:
   * 
   * - **HTTP**: Supports association with HTTPS, HTTP, and QUIC listeners.
   * - **HTTPS**: Supports association with HTTPS listeners.
   * 
   * - **GRPC**: Supports association with HTTPS and QUIC listeners.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The IDs of the associated instances.
   */
  relatedLoadBalancerIds?: string[];
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * - **Wrr**: Weighted round-robin. Backend servers with higher weights are more likely to be polled.
   * - **Wlc**: Weighted least connections. In addition to the weight of each backend server, the actual load (number of connections) is also considered. When weights are the same, backend servers with fewer current connections are more likely to be polled.
   * - **Sch**: Consistent hashing. Requests with the same hash factor calculation result are scheduled to the same backend server. If the UchConfig parameter is not configured, the default hash factor is the source IP address, and requests from the same source IP address are distributed to the same backend server. If the UchConfig parameter is configured, the hash factor is the URL parameter, and requests with the same URL parameter are distributed to the same backend server.
   * 
   * @example
   * Wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The number of servers in the server group.
   * 
   * @example
   * 1
   */
  serverCount?: number;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * sgp-cige6j****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The name of the server group.
   * 
   * @example
   * Group3
   */
  serverGroupName?: string;
  /**
   * @remarks
   * The status of the server group. Valid values:
   * - **Creating**: The server group is being created.
   * 
   * - **Available**: The server group is available.
   * 
   * - **Configuring**: The server group is being reconfigured.
   * 
   * @example
   * Available
   */
  serverGroupStatus?: string;
  /**
   * @remarks
   * The type of the server group. Valid values:
   * 
   * - **Instance**: Server type, including ECS, ENI, and ECI instances.
   * 
   * - **Ip**: IP address type.
   * 
   * - **Fc**: Function Compute type.
   * 
   * @example
   * Instance
   */
  serverGroupType?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * test
   */
  serviceName?: string;
  /**
   * @remarks
   * The slow start configuration.
   * 
   * After slow start is enabled, newly added backend servers in the backend server group are warmed up within a specified period, and the number of requests forwarded to the servers increases linearly.
   * >
   * > - Slow start is not supported by Basic Edition instances. Only Standard Edition and WAF Enhanced Edition instances support this feature.
   * > - Slow start can be configured for server groups of the server type and IP type, but not for server groups of the Function Compute type.
   * > - Slow start can be enabled only when the backend scheduling algorithm is set to the weighted polling algorithm.
   */
  slowStartConfig?: ListServerGroupsResponseBodyServerGroupsSlowStartConfig;
  /**
   * @remarks
   * The session persistence configuration.
   */
  stickySessionConfig?: ListServerGroupsResponseBodyServerGroupsStickySessionConfig;
  /**
   * @remarks
   * The list of tags bound to the server group.
   */
  tags?: ListServerGroupsResponseBodyServerGroupsTags[];
  /**
   * @remarks
   * The URL consistent hash parameter settings.
   */
  uchConfig?: ListServerGroupsResponseBodyServerGroupsUchConfig;
  /**
   * @remarks
   * Indicates whether upstream keep-alive is enabled. Valid values:
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  upstreamKeepaliveEnabled?: boolean;
  /**
   * @remarks
   * The VPC-connected instance ID.
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
      ipVersionAffinityMode: 'IpVersionAffinityMode',
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
      ipVersionAffinityMode: 'string',
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
   * The number of entries returned per request in a paginated query.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. Valid values:
   * - If **NextToken** is empty, no more results are available.
   * - If **NextToken** is returned, the value is the token for the next query.
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
   * CEF72CEB-54B6-4AE8-B225-F876******
   */
  requestId?: string;
  /**
   * @remarks
   * The list of backend server groups.
   */
  serverGroups?: ListServerGroupsResponseBodyServerGroups[];
  /**
   * @remarks
   * The total number of entries.
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

