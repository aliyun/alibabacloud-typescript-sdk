// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServerGroupAttributeRequestConnectionDrainConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable connection draining. Valid values:
   * 
   * - **true**: enables connection draining.
   * - **false**: disables connection draining.
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

export class UpdateServerGroupAttributeRequestHealthCheckConfig extends $dara.Model {
  /**
   * @remarks
   * The list of status codes that indicate a successful health check.
   */
  healthCheckCodes?: string[];
  /**
   * @remarks
   * The port of the backend server that is used for health checks.
   * 
   * Valid values: **0** to **65535**.
   * 
   * A value of **0** indicates that the port of the backend server is used for health checks.
   * 
   * > The parameter settings take effect only when **HealthCheckEnabled** is set to **true** for the server group.
   * 
   * @example
   * 80
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * Specifies whether to enable health checks. Valid values:
   * - **true**: enables health checks.
   * - **false**: disables health checks.
   * 
   * @example
   * true
   */
  healthCheckEnabled?: boolean;
  /**
   * @remarks
   * The domain name that is used for health checks.
   * 
   * - **Internal IP address of the backend server** (default): The internal IP address of the backend server is used as the domain name for health checks.
   * 
   * - **Custom domain name**: Enter a domain name.
   * 
   *   - The domain name must be 1 to 80 characters in length.
   * 
   *   - It can contain lowercase letters, digits, hyphens (-), and periods (.).
   * 
   *   - It must contain at least one period (.), and the period (.) cannot be at the beginning or end.
   * 
   *   - The rightmost domain label can contain only letters, and cannot contain digits or hyphens (-).
   * 
   *   - The domain name cannot start or end with a hyphen (-).
   * 
   * > This parameter takes effect only when **HealthCheckProtocol** is set to **HTTP**, **HTTPS**, or **gRPC**.
   * 
   * @example
   * example.com
   */
  healthCheckHost?: string;
  /**
   * @remarks
   * The HTTP version that is used for health checks. Valid values:
   * 
   * - **HTTP1.0**
   * - **HTTP1.1**
   * 
   * > This parameter takes effect only when **HealthCheckEnabled** is set to true and **HealthCheckProtocol** is set to **HTTP** or **HTTPS** for the server group.
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
   * > The parameter settings take effect only when **HealthCheckEnabled** is set to **true** for the server group.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The HTTP method that is used for health checks. Valid values:
   * 
   * - **GET**: If the length of the response message exceeds 8 KB, the message is truncated. However, the health check result is not affected.
   * 
   * - **POST**: The POST method is used by default for gRPC listener health checks.
   * 
   * - **HEAD**: The HEAD method is used by default for HTTP and HTTPS listener health checks.
   * 
   * > This parameter takes effect only when **HealthCheckEnabled** is set to true and **HealthCheckProtocol** is set to **HTTP**, **HTTPS**, or **gRPC** for the server group.
   * 
   * @example
   * HEAD
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The path that is used for health checks.
   * 
   * The path must be 1 to 80 characters in length, and can contain only letters, digits, the characters `-/.%?#&=`, and the extension characters `_;~!()*[]@$^:\",+`. The path must start with a forward slash.
   * 
   * > This parameter takes effect only when **HealthCheckEnabled** is set to **true** and the **HealthCheckProtocol** settings are **HTTP** or **HTTPS** for the server group.
   * 
   * @example
   * /test/index.html
   */
  healthCheckPath?: string;
  /**
   * @remarks
   * The protocol that is used for health checks. Valid values:
   * 
   * - **HTTP**: sends HEAD or GET requests for browser impersonation to check whether the server application is healthy.
   * 
   * - **HTTPS**: sends HEAD or GET requests for browser impersonation to check whether the server application is healthy. (Data encryption makes it more secure than HTTP.)
   * 
   * - **TCP**: sends SYN handshake packets to check whether the server port is alive.
   * 
   * - **gRPC**: sends POST or GET requests to check whether the server application is healthy.
   * 
   * @example
   * HTTP
   */
  healthCheckProtocol?: string;
  /**
   * @remarks
   * The timeout period to accept a response from a health check. If the backend ECS instance does not respond correctly within the specified time, the health check is failed. Unit: seconds.
   * 
   * Valid values: **1** to **300**.
   * 
   * > The parameter settings take effect only when **HealthCheckEnabled** is set to **true** for the server group.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The number of consecutive successful health checks that must occur before the health check status of a backend server changes from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The number of consecutive failed health checks that must occur before the health check status of a backend server changes from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
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

export class UpdateServerGroupAttributeRequestSlowStartConfig extends $dara.Model {
  /**
   * @remarks
   * The slow start duration.
   * 
   * Valid values: **30** to **900**.
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
   * - **false**: disables slow start.
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

export class UpdateServerGroupAttributeRequestStickySessionConfig extends $dara.Model {
  /**
   * @remarks
   * The cookie configured on the server.
   * 
   * The cookie must be 1 to 200 characters in length, and can contain only ASCII letters and digits. It cannot contain commas (,), semicolons (;), or spaces, and cannot start with a dollar sign ($).
   * 
   * > This parameter takes effect only when **StickySessionEnabled** is set to **true** and **StickySessionType** is set to **Server** for the server group.
   * 
   * @example
   * B490B5EBF6F3CD402E515D22B******
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of the cookie. Unit: seconds.
   * 
   * Valid values: **1** to **86400**.
   * 
   * > This parameter takes effect only when **StickySessionEnabled** is set to **true** and **StickySessionType** is set to **Insert** for the server group.
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
   * @example
   * false
   */
  stickySessionEnabled?: boolean;
  /**
   * @remarks
   * The method that is used to handle cookies. Valid values:
   * 
   * - **Insert**: inserts a cookie.
   * When a client accesses the server for the first time, load balancing inserts a cookie (SERVERID) into the HTTP or HTTPS response. The next time the client accesses the server with this cookie, the load balancing service forwards the request to the recorded backend server.
   * - **Server**: rewrites a cookie.
   * When ALB detects a user-defined cookie, it rewrites the original cookie. The next time the client accesses the server with the new cookie, ALB forwards the request to the recorded backend server.
   * 
   * > This parameter takes effect only when **StickySessionEnabled** is set to **true** for the server group.
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

export class UpdateServerGroupAttributeRequestUchConfig extends $dara.Model {
  /**
   * @remarks
   * The parameter type. Only QueryString is supported.
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

export class UpdateServerGroupAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request may be different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3******
   */
  clientToken?: string;
  /**
   * @remarks
   * The graceful connection break configuration.
   * 
   * After the graceful connection break is enabled, load balancing allows existing connections to be normally transmitted within a specified period after a backend server is removed or a health check is failed.
   * > 
   * > - Basic Edition instances do not support connection draining. Only Standard Edition and WAF-enhanced Edition instances support this feature.
   * > - Server group types that support connection draining include server type and IP type. Function Compute type is not supported.
   */
  connectionDrainConfig?: UpdateServerGroupAttributeRequestConnectionDrainConfig;
  /**
   * @remarks
   * Specifies whether to enable cross-zone load balancing for the server group. Valid values:
   * 
   * - **true**: enables cross-zone load balancing (default).
   * 
   * - **false**: disables cross-zone load balancing.
   * 
   * > 
   * > - Basic Edition instances do not support server groups with cross-zone load balancing disabled. Only Standard Edition and WAF-enhanced Edition instances support this feature.
   * > - Server group types that support disabling cross-zone load balancing include server type and IP type. Function Compute type is not supported.
   * > - Session persistence cannot be enabled when cross-zone load balancing is disabled.
   * 
   * @example
   * true
   */
  crossZoneEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * - **true**: performs only a dry run and does not modify resources. The system checks the required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the actual request. If the request passes the dry run, an HTTP `2xx` status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The health check configuration struct.
   * 
   * @example
   * true
   */
  healthCheckConfig?: UpdateServerGroupAttributeRequestHealthCheckConfig;
  /**
   * @remarks
   * The IP version affinity mode. Valid values:
   * - NonAffinity (default): no affinity mode.
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
   * The scheduling algorithm. Valid values:
   * 
   * - **Wrr**: weighted round-robin. Backend servers with higher weights receive more requests.
   * - **Wlc**: weighted least connections. Requests are distributed based on the weights and actual loads (number of connections) of backend servers. If backend servers have the same weight, the server with the fewest connections receives more requests.
   * - **Sch**: consistent hashing. Requests with the same hash factor are scheduled to the same backend server. If the UchConfig parameter is not configured, the default hash factor is the source IP address, and requests from the same source IP address are distributed to the same backend server. If the UchConfig parameter is configured, the hash factor is the URL parameter, and requests with the same URL parameter are distributed to the same backend server.
   * 
   * @example
   * Wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * This parameter is required.
   * 
   * @example
   * sgp-atstuj3rtop****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The name of the server group.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), hyphens (-), and spaces. It must start with a letter or a digit.
   * 
   * @example
   * test
   */
  serverGroupName?: string;
  /**
   * @remarks
   * This parameter is applicable only to ALB Ingress scenarios and specifies the name of the `K8s Service` that corresponds to the server group.
   * 
   * @example
   * test2
   */
  serviceName?: string;
  /**
   * @remarks
   * The slow start configuration.
   * 
   * After slow start is enabled, newly added backend servers in the backend server group are warmed up within the specified time period, and the number of requests forwarded to the servers increases linearly.
   * >
   * > - Basic Edition instances do not support slow start. Only Standard Edition and WAF-enhanced Edition instances support this feature.
   * > - Server group types that support slow start include server type and IP type. Function Compute type is not supported.
   * > - Slow start can be enabled only when the backend scheduling algorithm is weighted round-robin polling.
   */
  slowStartConfig?: UpdateServerGroupAttributeRequestSlowStartConfig;
  /**
   * @remarks
   * The session persistence configuration struct.
   */
  stickySessionConfig?: UpdateServerGroupAttributeRequestStickySessionConfig;
  /**
   * @remarks
   * The URL consistent hashing parameter settings.
   */
  uchConfig?: UpdateServerGroupAttributeRequestUchConfig;
  /**
   * @remarks
   * Specifies whether to enable backend keep-alive. Valid values:
   * 
   * - **true**: enables backend keep-alive.
   * 
   * - **false**: disables backend keep-alive.
   * 
   * @example
   * false
   */
  upstreamKeepaliveEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      connectionDrainConfig: 'ConnectionDrainConfig',
      crossZoneEnabled: 'CrossZoneEnabled',
      dryRun: 'DryRun',
      healthCheckConfig: 'HealthCheckConfig',
      ipVersionAffinityMode: 'IpVersionAffinityMode',
      scheduler: 'Scheduler',
      serverGroupId: 'ServerGroupId',
      serverGroupName: 'ServerGroupName',
      serviceName: 'ServiceName',
      slowStartConfig: 'SlowStartConfig',
      stickySessionConfig: 'StickySessionConfig',
      uchConfig: 'UchConfig',
      upstreamKeepaliveEnabled: 'UpstreamKeepaliveEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      connectionDrainConfig: UpdateServerGroupAttributeRequestConnectionDrainConfig,
      crossZoneEnabled: 'boolean',
      dryRun: 'boolean',
      healthCheckConfig: UpdateServerGroupAttributeRequestHealthCheckConfig,
      ipVersionAffinityMode: 'string',
      scheduler: 'string',
      serverGroupId: 'string',
      serverGroupName: 'string',
      serviceName: 'string',
      slowStartConfig: UpdateServerGroupAttributeRequestSlowStartConfig,
      stickySessionConfig: UpdateServerGroupAttributeRequestStickySessionConfig,
      uchConfig: UpdateServerGroupAttributeRequestUchConfig,
      upstreamKeepaliveEnabled: 'boolean',
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
    if(this.uchConfig && typeof (this.uchConfig as any).validate === 'function') {
      (this.uchConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

