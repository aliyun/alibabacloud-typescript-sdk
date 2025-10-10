// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServerGroupAttributeRequestConnectionDrainConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable connection draining. Valid values:
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
   * The HTTP status codes that indicate healthy backend servers.
   */
  healthCheckCodes?: string[];
  /**
   * @remarks
   * The backend port that is used for health checks.
   * 
   * Valid values: **0** to **65535**.
   * 
   * If you set the value to **0**, the backend port is used for health checks.
   * 
   * >  This parameter takes effect only if you set **HealthCheckEnabled** to **true**.
   * 
   * @example
   * 80
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
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
   *     *   The domain name must be 1 to 80 characters in length.
   *     *   The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
   *     *   The domain name must contain at least one period (.) but cannot start or end with a period (.).
   *     *   The rightmost domain label of the domain name can contain only letters, and cannot contain digits or hyphens (-).
   *     *   The domain name cannot start or end with a hyphen (-).
   * 
   * >  This parameter takes effect only if **HealthCheckProtocol** is set to **HTTP**, **HTTPS**, or **gRPC**.
   * 
   * @example
   * example.com
   */
  healthCheckHost?: string;
  /**
   * @remarks
   * The HTTP version that is used for health checks. Valid values:
   * 
   * *   **HTTP1.0**
   * *   **HTTP1.1**
   * 
   * >  This parameter takes effect only if you set **HealthCheckEnabled** to true and **HealthCheckProtocol** to **HTTP** or **HTTPS**.
   * 
   * @example
   * HTTP1.1
   */
  healthCheckHttpVersion?: string;
  /**
   * @remarks
   * The interval at which health checks are performed. Unit: seconds.
   * 
   * Valid values: **1** to **50**.
   * 
   * >  This parameter takes effect only if you set **HealthCheckEnabled** to **true**.
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
   * >  This parameter takes effect only if you set **HealthCheckEnabled** to true and **HealthCheckProtocol** to **HTTP**, **HTTPS**, or **gRPC**.
   * 
   * @example
   * HEAD
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The URL that is used for health checks.
   * 
   * The URL must be 1 to 80 characters in length, and can contain letters, digits, and the following special characters: `- / . % ? # & =`. It can also contain the following extended characters: `_ ; ~ ! ( ) * [ ] @ $ ^ : \\" , +`. The URL must start with a forward slash (`/`).
   * 
   * >  This parameter takes effect only if you set **HealthCheckEnabled** to **true** and **HealthCheckProtocol** to **HTTP** or **HTTPS**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckPath?: string;
  /**
   * @remarks
   * The protocol that you want to use for health checks. Valid values:
   * 
   * *   **HTTP**: HTTP health checks simulate browser behaviors by sending HEAD or GET requests to probe the availability of backend servers.
   * *   **HTTPS**: HTTPS health checks simulate browser behaviors by sending HEAD or GET requests to probe the availability of backend servers. HTTPS supports encryption and provides higher security than HTTP.
   * *   **TCP**: TCP health checks send TCP SYN packets to a backend server to probe the availability of backend servers.
   * *   **gRPC**: gRPC health checks send POST or GET requests to a backend server to check whether the backend server is healthy.
   * 
   * @example
   * HTTP
   */
  healthCheckProtocol?: string;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds.
   * 
   * Valid values: **1** to **300**.
   * 
   * >  This parameter takes effect only if you set **HealthCheckEnabled** to **true**.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it can be declared healthy. In this case, the health check status of the backend server changes from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it can be declared unhealthy. In this case, the health check status of the backend server changes from **success** to **fail**.
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

export class UpdateServerGroupAttributeRequestStickySessionConfig extends $dara.Model {
  /**
   * @remarks
   * The cookie to be configured on the server.
   * 
   * The cookie must be 1 to 200 characters in length and can contain only ASCII characters and digits. It cannot contain commas (,), semicolons (;), or space characters. It cannot start with a dollar sign ($).
   * 
   * > This parameter takes effect when the **StickySessionEnabled** parameter is set to **true** and the **StickySessionType** parameter is set to **Server**.
   * 
   * @example
   * B490B5EBF6F3CD402E515D22BCDA1598
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of a cookie. Unit: seconds.
   * 
   * Valid values: **1** to **86400**.
   * 
   * > This parameter takes effect when the **StickySessionEnabled** parameter is set to **true** and the **StickySessionType** parameter is set to **Insert**.
   * 
   * @example
   * 1000
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable session persistence. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  stickySessionEnabled?: boolean;
  /**
   * @remarks
   * The method that is used to handle a cookie. Valid values:
   * 
   * *   **Insert**: inserts a cookie.
   * 
   * ALB inserts a cookie (SERVERID) into the first HTTP or HTTPS response packet that is sent to a client. The next request from the client contains this cookie and the listener forwards this request to the recorded backend server.
   * 
   * *   **Server**: rewrites a cookie.
   * 
   * When ALB detects a user-defined cookie, it overwrites the original cookie with the user-defined cookie. Subsequent requests to ALB carry this user-defined cookie, and ALB determines the destination servers of the requests based on the cookies.
   * 
   * > This parameter takes effect when the **StickySessionEnabled** parameter is set to **true** for the server group.
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
   * The type of the parameter. Only query strings are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * QueryString
   */
  type?: string;
  /**
   * @remarks
   * The value of the parameter used for consistent hashing.
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * The configurations of connection draining.
   * 
   * After connection draining is enabled, SLB remains data transmission for a period of time after a backend server is removed or declared unhealthy.
   * 
   * > *   Basic SLB instances do not support connection draining. Standard and WAF-enabled SLB instances support connection draining.
   * > *   Server groups of the server and IP types support connection draining. Server groups of the Function Compute type do not support connection draining.
   */
  connectionDrainConfig?: UpdateServerGroupAttributeRequestConnectionDrainConfig;
  /**
   * @remarks
   * Indicates whether cross-zone load balancing is enabled for the server group. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * > *   Basic ALB instances do not support server groups that have cross-zone load balancing disabled. Only Standard and WAF-enabled ALB instances support server groups that have cross-zone load balancing.
   * >*   Cross-zone load balancing can be disabled for server groups of the server and IP type, but not for server groups of the Function Compute type.
   * >*   When cross-zone load balancing is disabled, session persistence cannot be enabled.
   * 
   * @example
   * true
   */
  crossZoneEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: checks the request without performing the operation. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a `2xx` HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The configuration of health checks.
   */
  healthCheckConfig?: UpdateServerGroupAttributeRequestHealthCheckConfig;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **Wrr**: the weighted round robin algorithm. Backend servers that have higher weights receive more requests than those that have lower weights.
   * *   **Wlc**: the weighted least connections algorithm. Requests are distributed based on the weights and the number of connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections is expected to receive more requests.
   * *   **Sch**: the consistent hashing algorithm. Requests from the same source IP address are distributed to the same backend server.
   * 
   * @example
   * Wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The server group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sgp-atstuj3rtop****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The server group name.
   * 
   * The name must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * test
   */
  serverGroupName?: string;
  /**
   * @remarks
   * This parameter is available only if the ALB Ingress controller is used. In this case, set this parameter to the name of the `Kubernetes Service` that is associated with the server group.
   * 
   * @example
   * test2
   */
  serviceName?: string;
  /**
   * @remarks
   * The configurations of slow starts.
   * 
   * After slow starts are enabled, ALB prefetches data to newly added backend servers. Requests distributed to the backend servers gradually increase.
   * 
   * > *   Basic ALB instances do not support slow starts. Standard and WAF-enabled ALB instances support slow starts.
   * >*   Server groups of the instance and IP types support slow starts. Server groups of the Function Compute type do not support slow starts.
   * >*   Slow start is supported only by the weighted round-robin scheduling algorithm.
   */
  slowStartConfig?: UpdateServerGroupAttributeRequestSlowStartConfig;
  /**
   * @remarks
   * The configuration of session persistence.
   */
  stickySessionConfig?: UpdateServerGroupAttributeRequestStickySessionConfig;
  /**
   * @remarks
   * The configurations of consistent hashing based on URLs.
   */
  uchConfig?: UpdateServerGroupAttributeRequestUchConfig;
  /**
   * @remarks
   * Specifies whether to enable persistent TCP connections.
   * 
   * @example
   * true
   */
  upstreamKeepaliveEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      connectionDrainConfig: 'ConnectionDrainConfig',
      crossZoneEnabled: 'CrossZoneEnabled',
      dryRun: 'DryRun',
      healthCheckConfig: 'HealthCheckConfig',
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

