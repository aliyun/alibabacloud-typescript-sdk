// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServerGroupsResponseBodyServerGroupsHealthCheck extends $dara.Model {
  /**
   * @remarks
   * The port of the backend server used for health checks.
   * 
   * Valid values: **0** to **65535**.
   * 
   * A value of **0** indicates that the port of the backend server is used for health checks.
   * 
   * @example
   * 200
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The maximum timeout period for a health check response. Unit: seconds. Default value: **5**.
   * 
   * Valid values: **1** to **300**.
   * 
   * @example
   * 200
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name used for health checks. Valid values:
   * 
   * - **$SERVER_IP**: the private IP address of the backend server.
   * 
   * - **domain**: a specific domain name. The domain name can be 1 to 80 characters in length and can contain only lowercase letters, digits, hyphens (-), and periods (.).
   * 
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * $SERVER_IP
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * Indicates whether health check is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  healthCheckEnabled?: boolean;
  /**
   * @remarks
   * The response string for UDP listener health checks. The string can contain only letters and digits and can be up to 512 characters in length.
   * 
   * @example
   * ok
   */
  healthCheckExp?: string;
  /**
   * @remarks
   * The HTTP status codes for a healthy response. Multiple status codes are separated by commas (,).
   * Valid values: **http_2xx**, **http_3xx**, **http_4xx**, and **http_5xx**.
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   */
  healthCheckHttpCode?: string[];
  /**
   * @remarks
   * The HTTP version for health checks. Valid values: **HTTP1.0** and **HTTP1.1**.
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
   * - If **HealthCheckType** is set to **UDP**, valid values are **1** to **300**. Set the interval to a value greater than or equal to the response timeout period to prevent UDP probe responses from being incorrectly identified as non-responses due to timeout.
   * 
   * @example
   * 10
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The request string for UDP listener health checks. The string can contain only letters and digits and can be up to 512 characters in length.
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
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckUrl?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks required before a backend server is declared healthy (status changes from **fail** to **success**).
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 2
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The health check method. Valid values: **GET** and **HEAD**.
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * GET
   */
  httpCheckMethod?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks required before a backend server is declared unhealthy (status changes from **success** to **fail**).
   * 
   * Valid values: **2** to **10**.
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

export class ListServerGroupsResponseBodyServerGroupsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 10 tag keys.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * Test
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 10 tag values.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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

export class ListServerGroupsResponseBodyServerGroups extends $dara.Model {
  /**
   * @remarks
   * The protocol version. Valid values:
   * 
   * - **Ipv4**: IPv4 type.
   * - **DualStack**: dual-stack type.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The user UID.
   * 
   * @example
   * 165820696622****
   */
  aliUid?: number;
  /**
   * @remarks
   * Indicates whether all-port forwarding is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  anyPortEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether connection draining is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  connectionDrainEnabled?: boolean;
  /**
   * @remarks
   * The connection draining timeout period. Unit: seconds.
   * Valid values: **10** to **900**.
   * 
   * @example
   * 200
   */
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * The health check configuration.
   */
  healthCheck?: ListServerGroupsResponseBodyServerGroupsHealthCheck;
  /**
   * @remarks
   * The traffic scheduling policy in dual-stack mode:
   * 
   * - NonAffinity (default): non-affinity mode. Traffic is forwarded to healthy backends based on the scheduling algorithm regardless of the IP protocol version of the source.
   * - Affinity: affinity mode. Traffic is forwarded based on the IP protocol version of the request source. IPv4 requests are forwarded only to IPv4 backends, and IPv6 requests are forwarded only to IPv6 backends.
   * > This parameter takes effect only when **AddressIPVersion** is set to **DualStack**.
   * 
   * @example
   * Affinity
   */
  ipVersionAffinityMode?: string;
  /**
   * @remarks
   * Indicates whether client IP preservation is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * > When **AddressIPVersion** is set to **ipv4**, the default value is **true**. When **AddressIPVersion** is set to **ipv6**, the value can only be **false**. This will be changed to **true** after the underlying infrastructure supports it.
   * 
   * @example
   * true
   */
  preserveClientIpEnabled?: boolean;
  /**
   * @remarks
   * The backend forwarding protocol. Valid values: **TCP** and **UDP**.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The region ID of the Network Load Balancer (NLB) load balancing instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of Network Load Balancer (NLB) load balancing instances.
   */
  relatedLoadBalancerIds?: string[];
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
   * - **Wrr**: weighted round-robin. Backend servers with higher weights are polled more frequently.
   * - **Wlc**: weighted least connections. In addition to polling based on the weight configured for each backend server, the actual load (number of connections) of the backend server is also considered. When the weights are the same, backend servers with fewer current connections are polled more frequently.
   * - **rr**: round-robin. Requests are distributed to backend servers in access sequence.
   * - **sch**: source IP hashing. Requests from the same source address are scheduled to the same backend server.
   * - **tch**: four-element hashing. Consistent hashing based on four elements (source IP, destination IP address, source port, and destination port). Requests from the same flow are scheduled to the same backend server.
   * - **qch**: QUIC ID hashing. Requests with the same QUIC ID are hashed to the same backend server.
   * 
   * @example
   * Wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The number of backend servers.
   * 
   * @example
   * 2
   */
  serverCount?: number;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * sgp-atstuj3rtoptyui****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The server group name.
   * 
   * @example
   * NLB_ServerGroup
   */
  serverGroupName?: string;
  /**
   * @remarks
   * The server group status. Valid values:
   * 
   * - **Creating**: The server group is being created.
   * - **Available**: The server group is available.
   * - **Configuring**: The server group is being modified.
   * 
   * @example
   * Available
   */
  serverGroupStatus?: string;
  /**
   * @remarks
   * The type of the server group. Valid values:
   * 
   * - **Instance**: server type. This type of server group supports adding **Ecs**, **Ens**, and **Eci** instances.
   * - **Ip**: IP address type. This type of server group supports adding IP addresses directly.
   * 
   * @example
   * Instance
   */
  serverGroupType?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListServerGroupsResponseBodyServerGroupsTags[];
  /**
   * @remarks
   * The ID of the VPC to which the server group belongs.
   * 
   * @example
   * vpc-bp15zckdt37pq72zv****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      addressIPVersion: 'AddressIPVersion',
      aliUid: 'AliUid',
      anyPortEnabled: 'AnyPortEnabled',
      connectionDrainEnabled: 'ConnectionDrainEnabled',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      healthCheck: 'HealthCheck',
      ipVersionAffinityMode: 'IpVersionAffinityMode',
      preserveClientIpEnabled: 'PreserveClientIpEnabled',
      protocol: 'Protocol',
      regionId: 'RegionId',
      relatedLoadBalancerIds: 'RelatedLoadBalancerIds',
      resourceGroupId: 'ResourceGroupId',
      scheduler: 'Scheduler',
      serverCount: 'ServerCount',
      serverGroupId: 'ServerGroupId',
      serverGroupName: 'ServerGroupName',
      serverGroupStatus: 'ServerGroupStatus',
      serverGroupType: 'ServerGroupType',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIPVersion: 'string',
      aliUid: 'number',
      anyPortEnabled: 'boolean',
      connectionDrainEnabled: 'boolean',
      connectionDrainTimeout: 'number',
      healthCheck: ListServerGroupsResponseBodyServerGroupsHealthCheck,
      ipVersionAffinityMode: 'string',
      preserveClientIpEnabled: 'boolean',
      protocol: 'string',
      regionId: 'string',
      relatedLoadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      scheduler: 'string',
      serverCount: 'number',
      serverGroupId: 'string',
      serverGroupName: 'string',
      serverGroupStatus: 'string',
      serverGroupType: 'string',
      tags: { 'type': 'array', 'itemType': ListServerGroupsResponseBodyServerGroupsTags },
      vpcId: 'string',
    };
  }

  validate() {
    if(this.healthCheck && typeof (this.healthCheck as any).validate === 'function') {
      (this.healthCheck as any).validate();
    }
    if(Array.isArray(this.relatedLoadBalancerIds)) {
      $dara.Model.validateArray(this.relatedLoadBalancerIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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
   * The number of entries per page. Valid values: **1** to **100**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * - If **NextToken** is empty, no next query exists.
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B28E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  /**
   * @remarks
   * The list of backend server groups.
   */
  serverGroups?: ListServerGroupsResponseBodyServerGroups[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
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

