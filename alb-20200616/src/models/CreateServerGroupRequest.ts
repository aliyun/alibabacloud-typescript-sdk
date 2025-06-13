// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateServerGroupRequestConnectionDrainConfig } from "./CreateServerGroupRequestConnectionDrainConfig";
import { CreateServerGroupRequestHealthCheckConfig } from "./CreateServerGroupRequestHealthCheckConfig";
import { CreateServerGroupRequestSlowStartConfig } from "./CreateServerGroupRequestSlowStartConfig";
import { CreateServerGroupRequestStickySessionConfig } from "./CreateServerGroupRequestStickySessionConfig";
import { CreateServerGroupRequestTag } from "./CreateServerGroupRequestTag";
import { CreateServerGroupRequestUchConfig } from "./CreateServerGroupRequestUchConfig";


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

