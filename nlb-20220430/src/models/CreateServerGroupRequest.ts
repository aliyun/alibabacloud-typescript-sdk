// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServerGroupRequestHealthCheckConfig extends $dara.Model {
  /**
   * @remarks
   * The port that you want to use for health checks on backend servers.
   * 
   * Valid values: **0** to **65535**.
   * 
   * Default value: **0**. If you set this parameter to 0, the port that the backend server uses to provide services is also used for health checks.
   * 
   * @example
   * 0
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout period for a health check response. Unit: seconds. Valid values: **1** to **300**. Default value: **5**.
   * 
   * @example
   * 5
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name that is used for health checks. Valid values:
   * 
   * *   **$SERVER_IP**: the internal IP address of a backend server.
   * *   **domain**: a domain name. The domain name must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), and periods (.).
   * 
   * >  This parameter takes effect only if you set **HealthCheckType** to **HTTP**.
   * 
   * @example
   * $SERVER_IP
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * Specifies whether to enable health checks. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  healthCheckEnabled?: boolean;
  /**
   * @remarks
   * The response string that backend servers return to UDP listeners for health checks. The string must be 1 to 512 characters in length and can contain only letters and digits.
   * 
   * @example
   * ok
   */
  healthCheckExp?: string;
  /**
   * @remarks
   * The HTTP status codes to return for health checks. Separate multiple HTTP status codes with commas (,). Valid values: **http_2xx** (default), **http_3xx**, **http_4xx**, and **http_5xx**.
   * 
   * >  This parameter takes effect only if you set **HealthCheckType** to **HTTP**.
   */
  healthCheckHttpCode?: string[];
  /**
   * @remarks
   * The HTTP version used for health checks. Valid values: **HTTP1.0** (default) and **HTTP1.1**.
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
   * *   If you set **HealthCheckType** to **TCP** or **HTTP**, valid values are **1** to **50**.
   * *   If you set **HealthCheckType** to **UDP**, valid values are **1** to **300**. Set the health check interval equal to or larger than the response timeout period to ensure that UDP response timeouts are not determined as no responses.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The request string that UDP listeners send to backend servers for health checks. The string must be 1 to 512 characters in length and can contain only letters and digits.
   * 
   * @example
   * hello
   */
  healthCheckReq?: string;
  /**
   * @remarks
   * The protocol that you want to use for health checks. Valid values:
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
   * The URL path to which health check probes are sent.
   * 
   * The URL path must be 1 to 80 characters in length, and can contain letters, digits, and the following special characters: ` - / . % ? # &  `. It must start with a forward slash (/).
   * 
   * >  This parameter takes effect only if you set **HealthCheckType** to **HTTP**.
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
   * Default value: **2**.
   * 
   * @example
   * 2
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The HTTP method that is used for health checks. Valid values: **GET** (default) and **HEAD**.
   * 
   * >  This parameter takes effect only if you set **HealthCheckType** to **HTTP**.
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
   * The key of the tag. The tag key can be up to 64 characters in length, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`. The tag key can contain letters, digits, and the following special characters: _ . : / = + - @
   * 
   * You can specify up to 20 tags in each call.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. The tag value can be up to 128 characters in length, cannot start with `acs:` or `aliyun`, and cannot contain `http://` or `https://`. The tag value can contain letters, digits, and the following special characters: _ . : / = + - @
   * 
   * You can specify up to 20 tags in each call.
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
   * The IP version. Valid values:
   * 
   * *   **ipv4** (default): IPv4
   * *   **DualStack**: dual-stack
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable multi-port forwarding. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  anyPortEnabled?: boolean;
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token. Ensure that the token is unique among different requests. Only ASCII characters are allowed.
   * 
   * >  If you do not set this parameter, the value of **RequestId** is used.**** The value of **RequestId** is different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
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
   * Specifies a timeout period for connection draining. Unit: seconds. Valid values: **0** to **900**.
   * 
   * @example
   * 10
   */
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true:**: validates the request without performing the operation. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the validation, the corresponding error message is returned. If the request passes the validation, the `DryRunOperation` error code is returned.
   * *   **false** (default): validates the request and performs the operation. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The configurations of health checks.
   */
  healthCheckConfig?: CreateServerGroupRequestHealthCheckConfig;
  /**
   * @remarks
   * Specifies whether to enable client IP preservation. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * >  If you set this parameter to **true** and **Protocol** to **TCP**, the server group cannot be associated with **TCPSSL** listeners.
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
   * The protocol between the NLB instance and backend servers. Valid values:
   * 
   * *   **TCP** (default)
   * *   **UDP**
   * *   **TCP_UDP**
   * 
   * > *   If you set this parameter to **UDP**, you can associate the server group only with **UDP** listeners.
   * > *   If you set this parameter to **TCP** and **PreserveClientIpEnabled** to **true**, you can associate the server group only with **TCP** listeners.
   * > *   If you set this parameter to **TCP** and **PreserveClientIpEnabled** to **false**, you can associate the server group with **TCPSSL** and **TCP** listeners.
   * > *   If you set this parameter to **TCP_UDP**, you can associate the server group with **TCP** and **UDP** listeners.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the region where the NLB instance is deployed.
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
   * *   **Wrr** (default): weighted round-robin. Backend servers with higher weights receive more requests.
   * *   **Wlc**: weighted least connections. Requests are distributed based on the weights and the number of connections to backend servers. If multiple backend servers have the same weight, requests are forwarded to the backend server with the least connections.
   * *   **rr**: Requests are forwarded to backend servers in sequence.
   * *   **sch**: source IP hash. Requests from the same source IP address are forwarded to the same backend server.
   * *   **tch**: consistent hashing based on four factors: source IP address, destination IP address, source port, and destination port. Requests that contain the same four factors are forwarded to the same backend server.
   * *   **qch**: QUIC ID hash. Requests that contain the same QUIC ID are forwarded to the same backend server.
   * 
   * >  QUIC ID hash is supported only when the backend protocol is set to UDP.
   * 
   * @example
   * Wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The server group name.
   * 
   * The name must be 2 to 128 characters in length, can contain digits, periods (.), underscores (_), and hyphens (-), and must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * NLB_ServerGroup
   */
  serverGroupName?: string;
  /**
   * @remarks
   * The type of the server group. Valid values:
   * 
   * *   **Instance** (default): allows you to specify servers of the **Ecs**, **Eni**, or **Eci** type.
   * *   **Ip**: allows you to specify IP addresses.
   * 
   * @example
   * Instance
   */
  serverGroupType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * **if can be null:**
   * true
   */
  tag?: CreateServerGroupRequestTag[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where the server group is deployed.
   * 
   * >  If **ServerGroupType** is set to **Instance**, only servers in the specified VPC can be added to the server group.
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

