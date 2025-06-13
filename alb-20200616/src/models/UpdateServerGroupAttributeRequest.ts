// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateServerGroupAttributeRequestConnectionDrainConfig } from "./UpdateServerGroupAttributeRequestConnectionDrainConfig";
import { UpdateServerGroupAttributeRequestHealthCheckConfig } from "./UpdateServerGroupAttributeRequestHealthCheckConfig";
import { UpdateServerGroupAttributeRequestSlowStartConfig } from "./UpdateServerGroupAttributeRequestSlowStartConfig";
import { UpdateServerGroupAttributeRequestStickySessionConfig } from "./UpdateServerGroupAttributeRequestStickySessionConfig";
import { UpdateServerGroupAttributeRequestUchConfig } from "./UpdateServerGroupAttributeRequestUchConfig";


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

