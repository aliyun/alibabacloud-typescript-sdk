// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServerGroupsResponseBodyServerGroupsHealthCheck extends $dara.Model {
  /**
   * @remarks
   * The backend port that is used for health checks.
   * 
   * Valid values: **0** to **65535**.
   * 
   * A value of **0** indicates that the port on a backend server is used for health checks.
   * 
   * @example
   * 200
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The maximum timeout period of a health check response. Unit: seconds. Default value: **5**.
   * 
   * Valid values: **1** to **300**
   * 
   * @example
   * 200
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name that you want to use for health checks. Valid values:
   * 
   * *   **$SERVER_IP**: the private IP address of a backend server.
   * *   **domain**: a specified domain name. The domain name must be 1 to 80 characters in length, and can contain lowercase letters, digits, hyphens (-), and periods (.).
   * 
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * $SERVER_IP
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  healthCheckEnabled?: boolean;
  /**
   * @remarks
   * The response string of UDP health checks. The string must be 1 to 512 characters in length, and can contain letters and digits.
   * 
   * @example
   * ok
   */
  healthCheckExp?: string;
  /**
   * @remarks
   * The HTTP status codes returned for health checks. Multiple HTTP status codes are separated by commas (,). Valid values: **http_2xx**, **http_3xx**, **http_4xx**, and **http_5xx**.
   * 
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   */
  healthCheckHttpCode?: string[];
  /**
   * @remarks
   * The version of the HTTP protocol. Valid values: **HTTP1.0** and **HTTP1.1**.
   * 
   * >  This parameter takes effect only if you set **HealthCheckType** to **HTTP**.
   * 
   * @example
   * HTTP1.0
   */
  healthCheckHttpVersion?: string;
  /**
   * @remarks
   * The interval at which health checks are performed. Unit: seconds. Default value: **5**.
   * 
   * *   If you set **HealthCheckType** to **TCP** or **HTTP**, valid values are **1 to 50**.
   * *   If you set **HealthCheckType** to **UDP**, valid values are **1 to 300**. Set the health check interval equal to or larger than the response timeout period to ensure that UDP response timeouts are not determined as no responses.
   * 
   * @example
   * 200
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The request string of UDP health checks. The string must be 1 to 512 characters in length, and can contain letters and digits.
   * 
   * @example
   * hello
   */
  healthCheckReq?: string;
  /**
   * @remarks
   * The protocol that is used for health checks. Valid values:
   * 
   * *   **TCP**
   * *   **HTTP**
   * *   **UDP**
   * 
   * @example
   * TCP
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The path to which health check probes are sent.
   * 
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckUrl?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status changes from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 2
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The HTTP method that is used for health checks. Valid values: **GET** and **HEAD**.
   * 
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * GET
   */
  httpCheckMethod?: string;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status changes from **success** to **fail**.
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
   * The tag key. At most 10 tag keys are returned.
   * 
   * The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * Test
   */
  key?: string;
  /**
   * @remarks
   * The tag value. At most 10 tag values are returned.
   * 
   * The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
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
   * The IP version. Valid values:
   * 
   * *   **ipv4**
   * *   **DualStack**
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 165820696622****
   */
  aliUid?: number;
  /**
   * @remarks
   * Indicates whether the feature of forwarding requests to all ports is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  anyPortEnabled?: boolean;
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
   * The timeout period of connection draining. Unit: seconds. Valid values: **10** to **900**.
   * 
   * @example
   * 200
   */
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * The configurations of health checks.
   */
  healthCheck?: ListServerGroupsResponseBodyServerGroupsHealthCheck;
  ipVersionAffinityMode?: string;
  /**
   * @remarks
   * Indicates whether client IP preservation is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > This parameter is set to **true** by default when **AddressIPVersion** is set to **ipv4**. This parameter is set to **false** when **AddressIPVersion** is set to **ipv6**. **true** will be supported by later versions.
   * 
   * @example
   * true
   */
  preserveClientIpEnabled?: boolean;
  /**
   * @remarks
   * The backend protocol. Valid values: **TCP** and **UDP**.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The NLB instances.
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
   * The routing algorithm. Valid values:
   * 
   * *   **Wrr**: Backend servers with higher weights receive more requests than backend servers with lower weights.
   * *   **rr**: Requests are forwarded to the backend servers in sequence. sch: Requests are forwarded to the backend servers based on source IP address hashing.
   * *   **sch**: Requests from the same source IP address are forwarded to the same backend server.
   * *   **tch**: Four-element hashing, which specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port, and destination port. Requests that contain the same information based on the four factors are forwarded to the same backend server.
   * *   **qch**: QUIC ID hashing. Requests that contain the same QUIC ID are forwarded to the same backend server.
   * 
   * @example
   * Wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The number of server groups associated with the NLB instances.
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
   * The status of the server group. Valid values:
   * 
   * *   **Creating**
   * *   **Available**
   * *   **Configuring**
   * 
   * @example
   * Available
   */
  serverGroupStatus?: string;
  /**
   * @remarks
   * The type of server group. Valid values:
   * 
   * *   **Instance** : contains servers of the **Ecs**, **Ens**, and **Eci** types.
   * *   **Ip**: contains servers specified by IP addresses.
   * 
   * @example
   * Instance
   */
  serverGroupType?: string;
  /**
   * @remarks
   * The tag.
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
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
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
   * A list of server groups.
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

