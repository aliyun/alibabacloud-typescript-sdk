// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServerGroupRequestHealthCheckConfig extends $dara.Model {
  /**
   * @remarks
   * The port of the backend server used for health checks.
   * 
   * Valid values: **0** to **65535**.
   * 
   * Default value: **0**. This value indicates that the port of the backend server is used for health checks.
   * 
   * @example
   * 0
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The maximum timeout period for a health check response. Unit: seconds.
   * Valid values: **1** to **300**.
   * Default value: **5**.
   * 
   * @example
   * 5
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name used for health checks. Valid values:
   * 
   * - **$SERVER_IP**: the internal IP address of the backend server.
   * 
   * - **domain**: a specified domain name. The domain name must be 1 to 80 characters in length, and can contain only letters, digits, hyphens (-), and periods (.).
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
   * - **true** (default): enables health checks.
   * 
   * - **false**: disables health checks.
   * 
   * @example
   * true
   */
  healthCheckEnabled?: boolean;
  /**
   * @remarks
   * The query string in the request for UDP listener health checks. The string can contain only letters and digits, and can be up to 512 characters in length.
   * 
   * @example
   * ok
   */
  healthCheckExp?: string;
  /**
   * @remarks
   * The HTTP status codes for healthy responses. Separate multiple status codes with commas (,).
   * Valid values: **http_2xx** (default), **http_3xx**, **http_4xx**, and **http_5xx**.
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   */
  healthCheckHttpCode?: string[];
  /**
   * @remarks
   * The HTTP protocol version for health checks. Valid values: **HTTP1.0** (default) and **HTTP1.1**.
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
   * - If **HealthCheckType** is set to **UDP**, valid values are **1** to **300**. You must set the interval to be greater than or equal to the response timeout period to ensure that UDP probe responses are not misjudged as unresponsive due to a timeout.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The query string in the request for UDP listener health checks. The string can contain only letters and digits, and can be up to 512 characters in length.
   * 
   * @example
   * hello
   */
  healthCheckReq?: string;
  /**
   * @remarks
   * The protocol used for health checks. Valid values:
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
   * The path must be 1 to 80 characters in length, and can contain only letters, digits, and the following special characters: `-/.%?#&`. It must start with a forward slash (/).
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckUrl?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks that must occur before the health check status of a backend server is changed from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * Default value: **2**.
   * 
   * @example
   * 2
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The HTTP method used for health checks. Valid values: **GET** (default) and **HEAD**.
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * GET
   */
  httpCheckMethod?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks that must occur before the health check status of a backend server is changed from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * Default value: **2**.
   * 
   * @example
   * 2
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

export class CreateServerGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 64 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`. It can contain letters, digits, underscores (_), periods (.), colons (:), forward slashes (/), equal signs (=), plus signs (+), hyphens (-), and at signs (@).
   * 
   * You can add up to 20 tags in a single call.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`. It can contain letters, digits, underscores (_), periods (.), colons (:), forward slashes (/), equal signs (=), plus signs (+), hyphens (-), and at signs (@).
   * 
   * You can add up to 20 tags in a single call.
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

export class CreateServerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The protocol version. Valid values:
   * 
   * - **ipv4** (default): IPv4.
   * 
   * - **DualStack**: dual-stack.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable all-port forwarding. Valid values:
   * 
   * - **true**: enables all-port forwarding.
   * 
   * - **false** (default): disables all-port forwarding.
   * 
   * @example
   * false
   */
  anyPortEnabled?: boolean;
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
   * - **true**: enables connection draining.
   * 
   * - **false** (default): disables connection draining.
   * 
   * @example
   * false
   */
  connectionDrainEnabled?: boolean;
  /**
   * @remarks
   * The timeout period for connection draining. Unit: seconds.
   * Valid values: **0** to **900**.
   * 
   * @example
   * 10
   */
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: prechecks the request without creating the server group. The system checks whether required parameters are specified, the request format, and service limits. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The health check configuration.
   */
  healthCheckConfig?: CreateServerGroupRequestHealthCheckConfig;
  /**
   * @remarks
   * The traffic scheduling policy in dual-stack mode. Valid values:
   * 
   * - NonAffinity (default): non-affinity mode. Traffic is forwarded to healthy backend servers based on the scheduling algorithm regardless of the IP protocol version of the source.
   * - Affinity: affinity mode. Traffic is forwarded based on the IP protocol version of the request source. IPv4 requests are forwarded only to IPv4 backend servers, and IPv6 requests are forwarded only to IPv6 backend servers.
   * > This parameter takes effect only when **AddressIPVersion** is set to **DualStack**.
   * 
   * @example
   * Affinity
   */
  ipVersionAffinityMode?: string;
  /**
   * @remarks
   * Specifies whether to enable client IP address preservation. Valid values:
   * 
   * - **true** (default): enables client IP address preservation.
   * - **false**: disables client IP address preservation.
   * 
   * 
   * > 
   * > If **Protocol** is set to **TCP** and this parameter is set to **true**, the server group cannot be associated with **TCPSSL** listeners.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   */
  preserveClientIpEnabled?: boolean;
  /**
   * @remarks
   * The communication protocol used to forward traffic to backend servers. Valid values:
   * 
   * - **TCP** (default)
   * - **UDP**
   * - **TCP_UDP**
   * > 
   * > - If this parameter is set to **UDP**, the server group can be associated only with **UDP** listeners.
   * > - If this parameter is set to **TCP** and **PreserveClientIpEnabled** is set to **true**, the server group can be associated only with **TCP** listeners.
   * > - If this parameter is set to **TCP** and **PreserveClientIpEnabled** is set to **false**, the server group can be associated with **TCPSSL** and **TCP** listeners.
   * > - If this parameter is set to **TCP_UDP**, the server group can be associated with **TCP** and **UDP** listeners.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The region ID of the Network Load Balancer (NLB) instance. 
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the server group belongs.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * - **Wrr** (default): weighted round-robin. Backend servers with higher weights are more likely to be polled.
   * 
   * - **Wlc**: weighted least connections. In addition to the weight of each backend server, the actual load (number of connections) of the backend server is also considered. If the weights are the same, backend servers with fewer current connections are more likely to be polled.
   * 
   * - **rr**: round-robin. External requests are distributed to backend servers in sequence.
   * 
   * - **sch**: source IP hash. Requests from the same source IP address are scheduled to the same backend server.
   * 
   * - **tch**: 4-tuple hash. Consistent hashing based on the 4-tuple (source IP address, destination IP address, source port, and destination port). Requests from the same flow are scheduled to the same backend server.
   * 
   * - **qch**: QUIC ID hash. Requests with the same QUIC ID are scheduled to the same backend server.
   * 
   * > QUIC ID hash is supported only when the backend protocol is UDP.
   * 
   * @example
   * Wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The name of the server group.
   * 
   * The name must be 2 to 128 characters in length, and must start with a letter or Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * NLB_ServerGroup
   */
  serverGroupName?: string;
  /**
   * @remarks
   * The server group type. Valid values:
   * 
   * - **Instance** (default): server type. This type of server group supports adding **Ecs**, **Eni**, and **Eci** instances.
   * 
   * - **Ip**: IP address type. This type of server group supports directly adding backend servers by IP address.
   * 
   * @example
   * Instance
   */
  serverGroupType?: string;
  /**
   * @remarks
   * The list of tags.
   * 
   * **if can be null:**
   * true
   */
  tag?: CreateServerGroupRequestTag[];
  /**
   * @remarks
   * The ID of the VPC where the server group is deployed.
   * 
   * > If **ServerGroupType** is set to **Instance**, only servers in this VPC can be added to the server group.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp15zckdt37pq72zv****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      addressIPVersion: 'AddressIPVersion',
      anyPortEnabled: 'AnyPortEnabled',
      clientToken: 'ClientToken',
      connectionDrainEnabled: 'ConnectionDrainEnabled',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      dryRun: 'DryRun',
      healthCheckConfig: 'HealthCheckConfig',
      ipVersionAffinityMode: 'IpVersionAffinityMode',
      preserveClientIpEnabled: 'PreserveClientIpEnabled',
      protocol: 'Protocol',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scheduler: 'Scheduler',
      serverGroupName: 'ServerGroupName',
      serverGroupType: 'ServerGroupType',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIPVersion: 'string',
      anyPortEnabled: 'boolean',
      clientToken: 'string',
      connectionDrainEnabled: 'boolean',
      connectionDrainTimeout: 'number',
      dryRun: 'boolean',
      healthCheckConfig: CreateServerGroupRequestHealthCheckConfig,
      ipVersionAffinityMode: 'string',
      preserveClientIpEnabled: 'boolean',
      protocol: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      scheduler: 'string',
      serverGroupName: 'string',
      serverGroupType: 'string',
      tag: { 'type': 'array', 'itemType': CreateServerGroupRequestTag },
      vpcId: 'string',
    };
  }

  validate() {
    if(this.healthCheckConfig && typeof (this.healthCheckConfig as any).validate === 'function') {
      (this.healthCheckConfig as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

