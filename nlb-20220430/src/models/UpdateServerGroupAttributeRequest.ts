// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServerGroupAttributeRequestHealthCheckConfig extends $dara.Model {
  /**
   * @remarks
   * The backend port that is used for health checks. Valid values: **0** to **65535**. If you set this parameter to **0**, the port that the backend server uses to provide services is also used for health checks.
   * 
   * @example
   * 0
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout period for a health check response. Unit: seconds. Valid values: **1 to 300**. Default value: **5**.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name used for health checks. Valid values:
   * 
   * *   **$SERVER_IP**: the internal IP address of a backend server.
   * *   **domain**: the specified domain name. The domain name must be 1 to 80 characters in length, and can contain lowercase letters, digits, hyphens (-), and periods (.).
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
   * The HTTP status codes to return for health checks. Separate multiple HTTP status codes with commas (,). Valid values: **http_2xx** (default), **http_3xx**, **http_4xx**, and **http_5xx**.
   * 
   * >  This parameter takes effect only if you set **HealthCheckType** to **HTTP**.
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
   * 5
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
   * The path must be 1 to 80 characters in length and can contain only letters, digits, and the following special characters: `- / . % ? # & =`. It can also contain the following extended characters: `_ ; ~ ! ( ) * [ ] @ $ ^ : \\" , +`. It must start with a forward slash (/).
   * 
   * >  This parameter takes effect only if you set **HealthCheckType** to **HTTP**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckUrl?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status changes from **fail** to **success**. Valid values: **2** to **10**.
   * 
   * @example
   * 3
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The HTTP method used for health checks. Valid values: **GET** and **HEAD**.
   * 
   * >  This parameter takes effect only if you set **HealthCheckType** to **HTTP**.
   * 
   * @example
   * GET
   */
  httpCheckMethod?: string;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status changes from **success** to **fail**. Valid values: **2** to **10**.
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
   * The client token used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token. Ensure that the token is unique among different requests. Only ASCII characters are allowed.
   * 
   * >  If you do not specify this parameter, the value of **RequestId** is used.**** The value of **RequestId** is different for each request.
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
   * *   **false**
   * 
   * @example
   * false
   */
  connectionDrainEnabled?: boolean;
  /**
   * @remarks
   * Specify a timeout period for connection draining. Unit: seconds. Valid values: **0** to **900**.
   * 
   * @example
   * 10
   */
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: validates the request without performing the operation. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the validation, the corresponding error message is returned. If the request passes the validation, the `DryRunOperation` error code is returned.
   * *   **false** (default): validates the request and performs the operation. If the request passes the validation, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Health check configurations.
   */
  healthCheckConfig?: UpdateServerGroupAttributeRequestHealthCheckConfig;
  ipVersionAffinityMode?: string;
  /**
   * @remarks
   * Specifies whether to enable client IP preservation. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  You cannot set this parameter to **true** if **PreserveClientIpEnabled** is set to **false** and the server group is associated with a listener that uses **SSL over TCP**.
   * 
   * @example
   * false
   */
  preserveClientIpEnabled?: boolean;
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
   * The scheduling algorithm. Valid values:
   * 
   * *   **Wrr**: weighted round-robin. Backend servers with higher weights receive more requests.
   * *   **Wlc**: weighted least connections. Requests are distributed based on the weight and load of each backend server. The load refers to the number of connections on a backend server. If multiple backend servers have the same weight, requests are forwarded to the backend server with the least connections.
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
   * The server group ID.
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
   * The name must be 2 to 128 characters in length, can contain digits, periods (.), underscores (_), and hyphens (-), and must start with a letter.
   * 
   * @example
   * NLB_ServerGroup1
   */
  serverGroupName?: string;
  static names(): { [key: string]: string } {
    return {
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

