// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServerGroupRequestConnectionDrainConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable connection draining. Valid values:
   * 
   * - **true**: enables connection draining.
   * - **false**: disables connection draining (default).
   * 
   * @example
   * false
   */
  connectionDrainEnabled?: boolean;
  /**
   * @remarks
   * The connection draining timeout period.
   * 
   * Valid values: **0** to **900**.
   * 
   * Default value: **300**.
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

export class CreateServerGroupRequestHealthCheckConfig extends $dara.Model {
  /**
   * @remarks
   * The list of status codes that indicate a successful health check.
   */
  healthCheckCodes?: string[];
  /**
   * @remarks
   * The port of the backend server used for health checks.
   * 
   * Valid values: **0** to **65535**.
   * 
   * Default value: **0**, which indicates that the port of the backend server is used for health checks.
   * 
   * @example
   * 80
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * Specifies whether to enable health checks. Valid values:
   * 
   * - **true**: enables health checks.
   * 
   * - **false**: disables health checks.
   * 
   * > By default, health checks are enabled when **ServerGroupType** is set to **Instance** or **Ip**, and disabled when **ServerGroupType** is set to **Fc**.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  healthCheckEnabled?: boolean;
  /**
   * @remarks
   * The domain name used for health checks. Valid values:
   * 
   * - **Internal IP address of the backend server** (default): uses the internal IP address of the backend server as the domain name for health checks.
   * 
   * - **Custom domain name**: specifies a domain name.
   * 
   *   - The domain name must be 1 to 80 characters in length.
   * 
   *   - It can contain lowercase letters, digits, hyphens (-), and periods (.).
   * 
   *   - It must contain at least one period (.), and the period (.) cannot be at the beginning or end.
   * 
   *   - The rightmost domain label can contain only letters, and cannot contain digits or hyphens (-).
   * 
   *   - The hyphen (-) cannot be at the beginning or end.
   * 
   * > This parameter takes effect only when **HealthCheckProtocol** is set to **HTTP**, **HTTPS**, or **gRPC**.
   * 
   * @example
   * www.example.com
   */
  healthCheckHost?: string;
  /**
   * @remarks
   * The HTTP version used for health checks. Valid values: **HTTP1.0** and **HTTP1.1** (default).
   * 
   * > This parameter takes effect only when **HealthCheckProtocol** is set to **HTTP** or **HTTPS**.
   * 
   * @example
   * HTTP1.1
   */
  healthCheckHttpVersion?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds.
   * 
   * Valid values: **1** to **50**.
   * 
   * Default value: **2**.
   * 
   * @example
   * 2
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The HTTP method used for health checks. Valid values:
   * 
   * - **GET**: if the length of the response message exceeds 8 KB, it is truncated, but this does not affect the health check result.
   * 
   * - **POST**: the default method for gRPC listener health checks.
   * 
   * - **HEAD** (default): the default method for HTTP and HTTPS listener health checks.
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
   * The path must be 1 to 80 characters in length, and can contain only letters, digits, and the following special characters: `-/.%?#&=` and extended characters `_;~!()*[]@$^:\",+`. The URL must start with a forward slash (/).
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
   * - **HTTP**: sends HEAD or GET requests to perform impersonation of browser access and check whether the server application is healthy.
   * 
   * - **HTTPS**: sends HEAD or GET requests to perform impersonation of browser access and check whether the server application is healthy (data encryption, which makes it more secure than HTTP).
   * 
   * - **TCP**: sends SYN handshake messages to check whether the server port is alive.
   * 
   * - **gRPC**: sends POST or GET requests to check whether the server application is healthy.
   * 
   * @example
   * HTTP
   */
  healthCheckProtocol?: string;
  /**
   * @remarks
   * The timeout period for a health check response. If the backend server does not respond within the specified timeout period, the health check fails. Unit: seconds.
   * 
   * Valid values: **1** to **300**.
   * 
   * Default value: **5**.
   * 
   * @example
   * 5
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The number of consecutive successful health checks required to change the health check status of a backend server from **Failed** to **Successful**.
   * 
   * Valid values: **2** to **10**.
   * 
   * Default value: **3**.
   * 
   * @example
   * 3
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The number of consecutive failed health checks required to change the health check status of a backend server from **Successful** to **Failed**.
   * 
   * Valid values: **2** to **10**.
   * 
   * Default value: **3**.
   * 
   * @example
   * 3
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

export class CreateServerGroupRequestSlowStartConfig extends $dara.Model {
  /**
   * @remarks
   * The slow start duration.
   * 
   * Valid values: **30** to **900**.
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  slowStartDuration?: number;
  /**
   * @remarks
   * Specifies whether to enable slow start. Valid values:
   * 
   * - **true**: enables slow start.
   * - **false**: disables slow start (default).
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

export class CreateServerGroupRequestStickySessionConfig extends $dara.Model {
  /**
   * @remarks
   * The cookie configured on the server.
   * 
   * The cookie must be 1 to 200 characters in length, and can contain only ASCII letters and digits. It cannot contain commas (,), semicolons (;), or spaces, and cannot start with a dollar sign ($).
   * 
   * > This parameter takes effect only when **StickySessionEnabled** is set to **true** and **StickySessionType** is set to **server**.
   * 
   * @example
   * B490B6EBF6F3CD402E515D22BCDA****
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of the cookie. Unit: seconds.
   * 
   * Valid values: **1** to **86400**.
   * 
   * Default value: **1000**.
   * 
   * > This parameter takes effect only when **StickySessionEnabled** is set to **true** and **StickySessionType** is set to **Insert**.
   * 
   * @example
   * 1000
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable session persistence. Valid values:
   * 
   * - **true**: enables session persistence.
   * - **false**: disables session persistence.
   * 
   * > This parameter takes effect only when **ServerGroupType** is set to **Instance** or **Ip**.
   * 
   * @example
   * false
   */
  stickySessionEnabled?: boolean;
  /**
   * @remarks
   * The method used to handle cookies. Valid values:
   * 
   * - **Insert** (default): inserts a cookie.
   * When a client accesses the server for the first time, load balancing inserts a cookie (that is, inserts SERVERID into the HTTP or HTTPS response message). The next time the client accesses the server with this cookie, load balancing forwards the request to the previously recorded backend server.
   * 
   * - **Server**: rewrites a cookie.
   * When load balancing detects a user-defined cookie, it rewrites the original cookie. The next time the client accesses the server with the new cookie, load balancing forwards the request to the previously recorded backend server.
   * 
   * > This parameter takes effect only when **StickySessionEnabled** is set to **true**.
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

export class CreateServerGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The key can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
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

export class CreateServerGroupRequestUchConfig extends $dara.Model {
  /**
   * @remarks
   * The parameter type. Set the value to **QueryString**.
   * 
   * This parameter is required.
   * 
   * @example
   * QueryString
   */
  type?: string;
  /**
   * @remarks
   * The consistent hashing parameter value.
   * 
   * This parameter is required.
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

export class CreateServerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 5A2CAF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @remarks
   * The graceful connection break configuration.
   * 
   * After graceful connection break is enabled, load balancing allows existing connections to be transmitted normally within a specified period of time after a backend server is removed or a health check failed.
   * 
   * >
   * > - Basic Edition instances do not support graceful connection break. Only Standard Edition and WAF-enhanced Edition instances support this feature.
   * > - Server type and IP type server groups support graceful connection break. Function Compute type server groups do not support this feature.
   */
  connectionDrainConfig?: CreateServerGroupRequestConnectionDrainConfig;
  /**
   * @remarks
   * Specifies whether to enable cross-zone load balancing for the server group. Valid values:
   * 
   * - **true**: enables cross-zone load balancing (default).
   * 
   * - **false**: disables cross-zone load balancing.
   * 
   * > 
   * > - Basic Edition instances do not support associating with server groups that have cross-zone load balancing disabled. Only Standard Edition and WAF-enhanced Edition instances support this feature.
   * > - Server type and IP type server groups support disabling cross-zone load balancing. Function Compute type server groups do not support this feature.
   * > - Session persistence cannot be enabled when cross-zone load balancing is disabled.
   * 
   * @example
   * true
   */
  crossZoneEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - **true**: prechecks the request without creating the server group. The system checks whether the required parameters are specified, the request format, and the service limits. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the DryRunOperation error code is returned.
   * - **false** (default): sends the normal request. After the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The health check configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-123
   */
  healthCheckConfig?: CreateServerGroupRequestHealthCheckConfig;
  /**
   * @remarks
   * The IP version affinity mode. Valid values:
   * - NonAffinity: non-affinity mode. This is the default value.
   * - Affinity: affinity mode.  
   * 
   * This parameter takes effect only when Ipv6Enabled is set to true.
   * 
   * @example
   * Affinity
   */
  ipVersionAffinityMode?: string;
  /**
   * @remarks
   * Specifies whether the IP protocol version used by load balancing to forward traffic to the backend server group supports IPv6. Valid values:
   * - **false** (default): IPv6 is not supported. The IPv4 type supports adding only IPv4 backend servers.
   * - **true**: the dual-stack type is used. Both IPv4 and IPv6 backend servers can be added.
   * 
   * @example
   * true
   */
  ipv6Enabled?: boolean;
  /**
   * @remarks
   * The backend protocol. Valid values:
   * 
   * - **HTTP** (default): supports associating with HTTPS, HTTP, and QUIC listeners.
   * 
   * - **HTTPS**: supports associating with HTTP and HTTPS listeners.
   * 
   * - **gRPC**: associates with HTTPS listeners.
   * 
   * > You do not need to configure the backend protocol when **ServerGroupType** is set to **Fc**.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3rsop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * - **Wrr** (default): weighted round-robin. Backend servers with higher weights are more likely to be polled.
   * 
   * - **Wlc**: weighted least connections. In addition to polling based on the weight of each backend server, this algorithm also considers the actual load (number of connections) of the backend servers. When the weights are the same, backend servers with fewer current connections are more likely to be polled.
   * 
   * - **Sch**: consistent hashing. Requests with the same hash factor calculation result are scheduled to the same backend server. If the **UchConfig** parameter is not configured, the default hash factor is the source IP address, and requests from the same source IP address are distributed to the same backend server. If the **UchConfig** parameter is configured, the hash factor is the URL parameter, and requests with the same URL parameter are distributed to the same backend server.
   * 
   * 
   * > This parameter takes effect only when **ServerGroupType** is set to **Instance** or **Ip**.
   * 
   * @example
   * Wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The name of the server group. The name must be 2 to 128 characters in length, and must start with a letter, Chinese character, or digit. It can contain digits, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  serverGroupName?: string;
  /**
   * @remarks
   * The type of the server group. Valid values:
   * 
   * - **Instance** (default): server type. This type of server group supports adding **Ecs**, **Eni**, and **Eci** instances.
   * 
   * - **Ip**: IP address type. This type of server group supports adding backend servers by IP address.
   * 
   * - **Fc**: Function Compute type. This type of server group supports adding Function Compute backend servers.
   * 
   * @example
   * Instance
   */
  serverGroupType?: string;
  /**
   * @remarks
   * The name of the `K8s Service` that corresponds to the server group. This parameter is applicable only to ALB Ingress scenarios.
   * 
   * @example
   * test
   */
  serviceName?: string;
  /**
   * @remarks
   * The slow start configuration.
   * 
   * After slow start is enabled, newly added backend servers in the server group are warmed up within the specified time period, and the number of requests forwarded to the servers increases linearly.
   * 
   * > 
   * > - Basic Edition instances do not support slow start. Only Standard Edition and WAF-enhanced Edition instances support this feature.
   * > - Server type and IP backend server groups support slow start. Function Compute backend server groups do not support this feature.
   * > - Slow start can be enabled only when the backend scheduling algorithm is weighted round-robin.
   */
  slowStartConfig?: CreateServerGroupRequestSlowStartConfig;
  /**
   * @remarks
   * The session persistence configuration.
   * 
   * > This parameter takes effect only when **ServerGroupType** is set to **Instance** or **Ip**.
   */
  stickySessionConfig?: CreateServerGroupRequestStickySessionConfig;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateServerGroupRequestTag[];
  /**
   * @remarks
   * The URL consistent hashing parameter settings.
   */
  uchConfig?: CreateServerGroupRequestUchConfig;
  /**
   * @remarks
   * Specifies whether to enable backend keep-alive. Valid values:
   * 
   * - **true**: enables backend keep-alive.
   * - **false** (default): disables backend keep-alive.
   * 
   * @example
   * false
   */
  upstreamKeepaliveEnabled?: boolean;
  /**
   * @remarks
   * The VPC-connected instance ID. Only servers in this VPC can be added to the server group.
   * 
   * > This parameter takes effect only when **ServerGroupType** is set to **Instance** or **Ip**.
   * 
   * @example
   * vpc-bp15zdkdt37pq72zv****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      connectionDrainConfig: 'ConnectionDrainConfig',
      crossZoneEnabled: 'CrossZoneEnabled',
      dryRun: 'DryRun',
      healthCheckConfig: 'HealthCheckConfig',
      ipVersionAffinityMode: 'IpVersionAffinityMode',
      ipv6Enabled: 'Ipv6Enabled',
      protocol: 'Protocol',
      resourceGroupId: 'ResourceGroupId',
      scheduler: 'Scheduler',
      serverGroupName: 'ServerGroupName',
      serverGroupType: 'ServerGroupType',
      serviceName: 'ServiceName',
      slowStartConfig: 'SlowStartConfig',
      stickySessionConfig: 'StickySessionConfig',
      tag: 'Tag',
      uchConfig: 'UchConfig',
      upstreamKeepaliveEnabled: 'UpstreamKeepaliveEnabled',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      connectionDrainConfig: CreateServerGroupRequestConnectionDrainConfig,
      crossZoneEnabled: 'boolean',
      dryRun: 'boolean',
      healthCheckConfig: CreateServerGroupRequestHealthCheckConfig,
      ipVersionAffinityMode: 'string',
      ipv6Enabled: 'boolean',
      protocol: 'string',
      resourceGroupId: 'string',
      scheduler: 'string',
      serverGroupName: 'string',
      serverGroupType: 'string',
      serviceName: 'string',
      slowStartConfig: CreateServerGroupRequestSlowStartConfig,
      stickySessionConfig: CreateServerGroupRequestStickySessionConfig,
      tag: { 'type': 'array', 'itemType': CreateServerGroupRequestTag },
      uchConfig: CreateServerGroupRequestUchConfig,
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
    if(this.slowStartConfig && typeof (this.slowStartConfig as any).validate === 'function') {
      (this.slowStartConfig as any).validate();
    }
    if(this.stickySessionConfig && typeof (this.stickySessionConfig as any).validate === 'function') {
      (this.stickySessionConfig as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
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

