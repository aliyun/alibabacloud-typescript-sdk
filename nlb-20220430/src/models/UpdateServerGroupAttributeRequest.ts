// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServerGroupAttributeRequestHealthCheckConfig extends $dara.Model {
  /**
   * @remarks
   * The port used for health checks on backend servers. Valid values: **0** to **65535**. A value of **0** indicates that the port of the backend server is used for health checks.
   * 
   * @example
   * 0
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The maximum timeout period for a health check response. Unit: seconds. Valid values: **1** to **300**. Default value: **5**.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name used for health checks. Valid values:
   * - **$SERVER_IP**: the internal IP address of the backend server.
   * - **domain**: a custom domain name. The domain name must be 1 to 80 characters in length, and can contain only lowercase letters, digits, hyphens (-), and periods (.).
   * 
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * $SERVER_IP
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * Specifies whether to enable health checks. Valid values:
   * 
   * - **true**: Enables health checks.
   * 
   * - **false**: Disables health checks.
   * 
   * @example
   * false
   */
  healthCheckEnabled?: boolean;
  /**
   * @remarks
   * The response string used for UDP health checks. The string can contain only letters and digits, and can be up to 512 characters in length.
   * 
   * @example
   * ok
   */
  healthCheckExp?: string;
  /**
   * @remarks
   * The HTTP status codes that indicate a successful health check. Separate multiple HTTP status codes with commas (,). Valid values: **http_2xx** (default), **http_3xx**, **http_4xx**, and **http_5xx**.
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   */
  healthCheckHttpCode?: string[];
  /**
   * @remarks
   * The HTTP version used for health checks. Valid values: **HTTP1.0** and **HTTP1.1**.
   * 
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * HTTP1.0
   */
  healthCheckHttpVersion?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds. Default value: **5**.
   * 
   * - If **HealthCheckType** is set to **TCP** or **HTTP**, valid values are **1** to **50**.
   * 
   * - If **HealthCheckType** is set to **UDP**, valid values are **1** to **300**. You must set the interval to a value greater than or equal to the response timeout period to ensure that UDP probe responses are not mistakenly identified as timeouts.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The request string used for UDP health checks. The string can contain only letters and digits, and can be up to 512 characters in length.
   * 
   * @example
   * hello
   */
  healthCheckReq?: string;
  /**
   * @remarks
   * The health check protocol. Valid values:
   * 
   * - **TCP**
   * - **HTTP**
   * - **UDP**
   * 
   * @example
   * TCP
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The health check path.
   * 
   * The path must be 1 to 80 characters in length. It can contain only letters, digits, the characters `-/.%?#&=`, and extension characters `_;~!()*[]@$^:\\",+`. It must start with a forward slash (/).
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckUrl?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks required to change the health status of a backend server from **Failed** to **Success**. Valid values: **2** to **10**.
   * 
   * @example
   * 3
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The HTTP method used for health checks. Valid values: **GET** and **HEAD**.
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * GET
   */
  httpCheckMethod?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks required to change the health status of a backend server from **Success** to **Failed**. Valid values: **2** to **10**.
   * 
   * @example
   * 3
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckExp: 'HealthCheckExp',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckReq: 'HealthCheckReq',
      healthCheckType: 'HealthCheckType',
      healthCheckUrl: 'HealthCheckUrl',
      healthyThreshold: 'HealthyThreshold',
      httpCheckMethod: 'HttpCheckMethod',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckEnabled: 'boolean',
      healthCheckExp: 'string',
      healthCheckHttpCode: { 'type': 'array', 'itemType': 'string' },
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckReq: 'string',
      healthCheckType: 'string',
      healthCheckUrl: 'string',
      healthyThreshold: 'number',
      httpCheckMethod: 'string',
      unhealthyThreshold: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.healthCheckHttpCode)) {
      $dara.Model.validateArray(this.healthCheckHttpCode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The IP version. Valid values: **ipv4** and **dualStack**.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable connection draining. Valid values:
   * 
   * - **true**: Enables connection draining.
   * 
   * - **false**: Disables connection draining.
   * 
   * @example
   * false
   */
  connectionDrainEnabled?: boolean;
  /**
   * @remarks
   * The timeout period for connection draining. Unit: seconds. Valid values: **0** to **900**.
   * 
   * @example
   * 10
   */
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run without updating the server group. The system checks whether required parameters are specified, the request format is valid, and the service limits are met. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * - **false** (default): performs a dry run and sends the actual request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The health check configuration.
   */
  healthCheckConfig?: UpdateServerGroupAttributeRequestHealthCheckConfig;
  /**
   * @remarks
   * The traffic scheduling policy in dual-stack mode. Valid values:
   * 
   * - **NonAffinity**: non-affinity mode. Requests are forwarded to healthy backend servers based on the scheduling algorithm regardless of the IP version of the source address. This is the default value.
   * - **Affinity**: affinity mode. Requests are forwarded to backend servers based on the IP version of the source address. IPv4 requests are forwarded only to IPv4 backend servers, and IPv6 requests are forwarded only to IPv6 backend servers.
   * > This parameter takes effect only when **AddressIPVersion** is set to **DualStack**.
   * 
   * @example
   * Affinity
   */
  ipVersionAffinityMode?: string;
  /**
   * @remarks
   * Specifies whether to enable client IP preservation. Valid values:
   * 
   * - **true**: Enables client IP preservation.
   * 
   * - **false**: Disables client IP preservation.
   * 
   * > If **PreserveClientIpEnabled** is set to **false** and the server group is associated with a **TCPSSL** listener, you cannot change the value of this parameter to **true**.
   * 
   * @example
   * false
   */
  preserveClientIpEnabled?: boolean;
  /**
   * @remarks
   * The region ID of the network load balancing instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to obtain the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * - **Wrr**: weighted round-robin. Backend servers with higher weights receive more requests.
   * 
   * - **Wlc**: weighted least connections. Requests are distributed based on the weights and actual loads (number of connections) of backend servers. If weights are the same, backend servers with fewer connections receive more requests.
   * 
   * - **rr**: round-robin. Requests are distributed to backend servers in sequence.
   * 
   * - **sch**: source IP hash. Requests from the same source IP address are distributed to the same backend server.
   * 
   * - **tch**: 4-tuple hash. Consistent hashing based on the 4-tuple (source IP address, destination IP address, source port, and destination port). Requests from the same flow are distributed to the same backend server.
   * 
   * - **qch**: QUIC ID hash. Requests with the same QUIC ID are distributed to the same backend server.
   * 
   * > QUIC ID hash is supported only when the backend protocol is UDP.
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
   * sgp-atstuj3rtoptyui****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The new name of the server group.
   * 
   * The name must be 2 to 128 characters in length, and must start with a letter or Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * NLB_ServerGroup1
   */
  serverGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      addressIPVersion: 'AddressIPVersion',
      clientToken: 'ClientToken',
      connectionDrainEnabled: 'ConnectionDrainEnabled',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      dryRun: 'DryRun',
      healthCheckConfig: 'HealthCheckConfig',
      ipVersionAffinityMode: 'IpVersionAffinityMode',
      preserveClientIpEnabled: 'PreserveClientIpEnabled',
      regionId: 'RegionId',
      scheduler: 'Scheduler',
      serverGroupId: 'ServerGroupId',
      serverGroupName: 'ServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIPVersion: 'string',
      clientToken: 'string',
      connectionDrainEnabled: 'boolean',
      connectionDrainTimeout: 'number',
      dryRun: 'boolean',
      healthCheckConfig: UpdateServerGroupAttributeRequestHealthCheckConfig,
      ipVersionAffinityMode: 'string',
      preserveClientIpEnabled: 'boolean',
      regionId: 'string',
      scheduler: 'string',
      serverGroupId: 'string',
      serverGroupName: 'string',
    };
  }

  validate() {
    if(this.healthCheckConfig && typeof (this.healthCheckConfig as any).validate === 'function') {
      (this.healthCheckConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

