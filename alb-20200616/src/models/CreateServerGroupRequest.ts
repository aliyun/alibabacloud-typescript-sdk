// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServerGroupRequestConnectionDrainConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable connection draining. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
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
   * The HTTP status code that indicates healthy backend servers.
   */
  healthCheckCodes?: string[];
  /**
   * @remarks
   * The backend port that is used for health checks.
   * 
   * Valid values: **0** to **65535**
   * 
   * The default value is **0**, which specifies that the port of a backend server is used for health checks.
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
   * >  If the **ServerGroupType** parameter is set to **Instance** or **Ip**, the health check feature is enabled by default. If the **ServerGroupType** parameter is set to **Fc**, the health check feature is disabled by default.
   * 
   * This parameter is required.
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
   * www.example.com
   */
  healthCheckHost?: string;
  /**
   * @remarks
   * The version of the HTTP protocol. Valid values: **HTTP1.0** and **HTTP1.1**. Default value: HTTP1.1.
   * 
   * >  This parameter takes effect only if **HealthCheckProtocol** is set to **HTTP** or **HTTPS**.
   * 
   * @example
   * HTTP1.1
   */
  healthCheckHttpVersion?: string;
  /**
   * @remarks
   * The interval at which health checks are performed. Unit: seconds
   * 
   * Valid values: **1** to **50**
   * 
   * Default value: **2**.
   * 
   * @example
   * 2
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The HTTP method that is used for health checks. Valid values:
   * 
   * *   **GET**: If the length of a response exceeds 8 KB, the response is truncated. However, the health check result is not affected.
   * *   **POST**: By default, gRPC health checks use the POST method.
   * *   **HEAD** (default): By default, HTTP and HTTPS use the HEAD method.
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
   * The URL must be 1 to 80 characters in length, and can contain letters, digits, and the following special characters: `- / . % ? # & =`. It can also contain the following extended characters: `_ ; ~ ! ( ) * [ ] @ $ ^ : \\" , +`. The URL must start with a forward slash (/).
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
   * *   **HTTPS**: HTTPS health checks simulate browser behaviors by sending HEAD or GET requests to probe the availability of backend servers. HTTPS provides higher security than HTTP because HTTPS supports data encryption.
   * *   **TCP**: TCP health checks send TCP SYN packets to a backend server to probe the availability of backend servers.
   * *   **gRPC**: gRPC health checks send POST or GET requests to a backend server to check whether the backend server is healthy.
   * 
   * @example
   * HTTP
   */
  healthCheckProtocol?: string;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend server does not respond within the specified timeout period, the backend server is declared unhealthy. Unit: seconds
   * 
   * Valid values: **1** to **300**
   * 
   * Default value: **5**
   * 
   * @example
   * 5
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health check status of the backend server changes from **fail** to **success**.
   * 
   * Valid values: **2** to **10**
   * 
   * Default value: **3**.
   * 
   * @example
   * 3
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health check status of the backend server changes from **success** to **fail**.
   * 
   * Valid values: **2** to **10**
   * 
   * Default value: **3**
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
   * The duration of a slow start.
   * Valid values: 30 to 900.
   * Default value: 30.
   * 
   * @example
   * 30
   */
  slowStartDuration?: number;
  /**
   * @remarks
   * Specifies whether to enable slow starts. Valid values:
   * 
   * - true
   * 
   * - false(default)
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
   * The cookie that you want to configure for the server.
   * 
   * The cookie must be 1 to 200 characters in length, and can contain only ASCII letters and digits. It cannot contain commas (,), semicolons (;), or space characters. It cannot start with a dollar sign ($).
   * 
   * >  This parameter takes effect only when **StickySessionEnabled** is set to **true** and **StickySessionType** is set to **server**.
   * 
   * @example
   * B490B5EBF6F3CD402E515D22BCDA****
   */
  cookie?: string;
  /**
   * @remarks
   * The maximum amount of time to wait before the session cookie expires. Unit: seconds
   * 
   * Valid values: **1** to **86400**
   * 
   * Default value: **1000**
   * 
   * >  This parameter takes effect only when **StickySessionEnabled** is set to **true** and **StickySessionType** is set to **Insert**.
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
   * *   **false**
   * 
   * >  This parameter takes effect when the **ServerGroupType** parameter is set to **Instance** or **Ip**.
   * 
   * @example
   * false
   */
  stickySessionEnabled?: boolean;
  /**
   * @remarks
   * The method that is used to handle cookies. Valid values:
   * 
   * *   **Insert** (default value): inserts a cookie. The first time a client accesses ALB, ALB inserts the SERVERID cookie into the HTTP or HTTPS response packet. Subsequent requests from the client that carry this cookie are forwarded to the same backend server as the first request.
   * *   **Server**: rewrites a cookie. ALB rewrites the custom cookies in requests from a client. Subsequent requests from the client that carry the new cookie are forwarded to the same backend server as the first request.
   * 
   * >  This parameter takes effect when the **StickySessionEnabled** parameter is set to **true**.
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
   * The tag key. The tag key can be up to 128 characters in length, and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length, and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
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
   * The type of the parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * QueryString
   */
  type?: string;
  /**
   * @remarks
   * The parameter value for consistent hashing.
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * The configurations of connection draining.
   * 
   * After connection draining is enabled, ALB maintains data transmission for a period of time after the backend server is removed or declared unhealthy.
   * 
   * 
   * >*   Basic ALB instances do not support connection draining. Standard and WAF-enabled ALB instances support connection draining.
   * >*   Server groups of the instance and IP types support connection draining. Server groups of the Function Compute type do not support connection draining.
   */
  connectionDrainConfig?: CreateServerGroupRequestConnectionDrainConfig;
  /**
   * @remarks
   * Specifies whether to enable cross-zone load balancing. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * > *   Basic ALB instances do not support server groups that have cross-zone load balancing disabled. Only Standard and WAF-enabled ALB instances support server groups that have cross-zone load balancing.
   * > *   Cross-zone load balancing can be disabled for server groups of the server and IP type, but not for server groups of the Function Compute type.
   * > *   When cross-zone load balancing is disabled, session persistence cannot be enabled.
   * 
   * @example
   * true
   */
  crossZoneEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The configuration of the health check feature.
   * 
   * This parameter is required.
   */
  healthCheckConfig?: CreateServerGroupRequestHealthCheckConfig;
  /**
   * @remarks
   * Specifies whether to enable Ipv6.
   * 
   * @example
   * false
   */
  ipv6Enabled?: boolean;
  /**
   * @remarks
   * The backend protocol. Valid values:
   * 
   * *   **HTTP**: allows you to associate an HTTPS, HTTP, or QUIC listener with the server group. This is the default value.
   * *   **HTTPS**: allows you to associate HTTPS listeners with backend servers.
   * *   **gRPC**: allows you to associate an HTTPS or QUIC listener with the server group.
   * 
   * >  You do not need to specify a backend protocol if you set **ServerGroupType** to **Fc**.
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
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **Wrr** (default): The weighted round-robin algorithm is used. Backend servers that have higher weights receive more requests than those that have lower weights.
   * *   **Wlc**: The weighted least connections algorithm is used. Requests are distributed based on the weights and the number of connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections is expected to receive more requests.
   * *   **Sch**: The consistent hashing algorithm is used. Requests from the same source IP address are distributed to the same backend server.
   * 
   * > This parameter takes effect when the **ServerGroupType** parameter is set to **Instance** or **Ip**.
   * 
   * @example
   * Wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The name of the server group. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-atstuj3rtoptyui****
   */
  serverGroupName?: string;
  /**
   * @remarks
   * The type of server group. Valid values:
   * 
   * *   **Instance** (default): allows you to add servers by specifying **Ecs**, **Eni**, or **Eci**.
   * *   **Ip**: allows you to add servers by specifying IP addresses.
   * *   **Fc**: allows you to add servers by specifying functions of Function Compute.
   * 
   * @example
   * Instance
   */
  serverGroupType?: string;
  /**
   * @remarks
   * This parameter is available only if the ALB Ingress controller is used. In this case, set this parameter to the name of the `Kubernetes Service` that is associated with the server group.
   * 
   * @example
   * test
   */
  serviceName?: string;
  /**
   * @remarks
   * The configurations of slow starts.
   * After slow starts are enabled, SLB prefetches data to newly added backend servers. Requests distributed to the backend servers gradually increase.
   * 
   * > - Basic SLB instances do not support slow starts. Standard and WAF-enabled SLB instances support slow starts. 
   * >* Server groups of the server and IP types support slow starts. Server groups of the Function Compute type do not support slow starts.
   * >* Slow start is supported only by the weighted round-robin scheduling algorithm.
   */
  slowStartConfig?: CreateServerGroupRequestSlowStartConfig;
  /**
   * @remarks
   * The configuration of session persistence.
   * 
   * >  This parameter takes effect when the **ServerGroupType** parameter is set to **Instance** or **Ip**.
   */
  stickySessionConfig?: CreateServerGroupRequestStickySessionConfig;
  /**
   * @remarks
   * The tag.
   */
  tag?: CreateServerGroupRequestTag[];
  /**
   * @remarks
   * The configuration of consistent hashing based on URLs.
   */
  uchConfig?: CreateServerGroupRequestUchConfig;
  /**
   * @remarks
   * Specifies whether to enable persistent TCP connections.
   * 
   * @example
   * false
   */
  upstreamKeepaliveEnabled?: boolean;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). You can add only servers that are deployed in the specified VPC to the server group.
   * 
   * >  This parameter takes effect when the **ServerGroupType** parameter is set to **Instance** or **Ip**.
   * 
   * @example
   * vpc-bp15zckdt37pq72zv****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      connectionDrainConfig: 'ConnectionDrainConfig',
      crossZoneEnabled: 'CrossZoneEnabled',
      dryRun: 'DryRun',
      healthCheckConfig: 'HealthCheckConfig',
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

