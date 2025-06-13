// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServerGroupsResponseBodyServerGroupsConnectionDrainConfig } from "./ListServerGroupsResponseBodyServerGroupsConnectionDrainConfig";
import { ListServerGroupsResponseBodyServerGroupsHealthCheckConfig } from "./ListServerGroupsResponseBodyServerGroupsHealthCheckConfig";
import { ListServerGroupsResponseBodyServerGroupsSlowStartConfig } from "./ListServerGroupsResponseBodyServerGroupsSlowStartConfig";
import { ListServerGroupsResponseBodyServerGroupsStickySessionConfig } from "./ListServerGroupsResponseBodyServerGroupsStickySessionConfig";
import { ListServerGroupsResponseBodyServerGroupsTags } from "./ListServerGroupsResponseBodyServerGroupsTags";
import { ListServerGroupsResponseBodyServerGroupsUchConfig } from "./ListServerGroupsResponseBodyServerGroupsUchConfig";


export class ListServerGroupsResponseBodyServerGroups extends $dara.Model {
  /**
   * @remarks
   * Indicates whether configuration management is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  configManagedEnabled?: boolean;
  /**
   * @remarks
   * The configurations of connection draining.
   * 
   * After connection draining is enabled, ALB maintains data transmission for a period of time after the backend server is removed or declared unhealthy.
   * > 
   * > - Basic ALB instances do not support connection draining. Standard and WAF-enabled ALB instances support connection draining. 
   * > -  Server groups of the instance and IP types support connection draining. Server groups of the Function Compute type do not support connection draining.
   */
  connectionDrainConfig?: ListServerGroupsResponseBodyServerGroupsConnectionDrainConfig;
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * @example
   * 2022-07-02T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether cross-zone load balancing is enabled. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  crossZoneEnabled?: boolean;
  /**
   * @remarks
   * The health check configurations.
   */
  healthCheckConfig?: ListServerGroupsResponseBodyServerGroupsHealthCheckConfig;
  /**
   * @remarks
   * Indicates whether IPv6 is supported. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  ipv6Enabled?: boolean;
  /**
   * @remarks
   * The backend protocol. Valid values:
   * 
   * *   **HTTP**: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers.
   * *   **HTTPS**: allows you to associate HTTPS listeners with backend servers.
   * *   **GRPC**: allows you to associate HTTPS and QUIC listeners with backend servers.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the ALB instance associated with the server group.
   */
  relatedLoadBalancerIds?: string[];
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **Wrr**: weighted round-robin. Backend servers with higher weights receive more requests than backend servers with lower weights.
   * *   **Wlc**: weighted least connections. Requests are distributed based on the weight and load of each backend server. The load refers to the number of connections on a backend server. If multiple backend servers have the same weight, requests are forwarded to the backend server with the least number of connections.
   * *   **Sch**: consistent hashing. Requests that have the same hash factors are distributed to the same backend server. If you do not specify the UchConfig parameter, the source IP address is used as the hash factor by default. Requests that are from the same IP address are distributed to the same backend server. If you specify the UchConfig parameter, the URL string is used as the hash factor. Requests that have the same URL string are distributed to the same backend server.
   * 
   * @example
   * Wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The number of backend servers in the server group.
   * 
   * @example
   * 1
   */
  serverCount?: number;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * sgp-cige6j****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The server group name.
   * 
   * @example
   * Group3
   */
  serverGroupName?: string;
  /**
   * @remarks
   * The status of the server group. Valid values:
   * 
   * *   **Creating**.
   * *   **Available**
   * *   **Configuring**
   * 
   * @example
   * Available
   */
  serverGroupStatus?: string;
  /**
   * @remarks
   * The server group type. Valid values:
   * 
   * *   **Instance**: instances, including ECS instances, ENIs, and elastic container instances.
   * *   **Ip**: IP addresses.
   * *   **Fc**: Function Compute
   * 
   * @example
   * Instance
   */
  serverGroupType?: string;
  /**
   * @remarks
   * The name of the server group.
   * 
   * @example
   * test
   */
  serviceName?: string;
  /**
   * @remarks
   * The configurations of slow starts.
   * 
   * After slow starts are enabled, ALB prefetches data to newly added backend servers. Requests distributed to the backend servers gradually increase.
   * 
   * > 
   * > - Basic ALB instances do not support slow starts. Standard and WAF-enabled ALB instances support slow starts.
   * > - Server groups of the instance and IP types support slow starts. Server groups of the Function Compute type do not support slow starts.
   * > - Slow start is supported only by the weighted round-robin scheduling algorithm.
   */
  slowStartConfig?: ListServerGroupsResponseBodyServerGroupsSlowStartConfig;
  /**
   * @remarks
   * The configuration of session persistence.
   */
  stickySessionConfig?: ListServerGroupsResponseBodyServerGroupsStickySessionConfig;
  /**
   * @remarks
   * The tags that are added to the server group.
   */
  tags?: ListServerGroupsResponseBodyServerGroupsTags[];
  /**
   * @remarks
   * The configuration of consistent hashing based on URLs.
   */
  uchConfig?: ListServerGroupsResponseBodyServerGroupsUchConfig;
  /**
   * @remarks
   * Indicates whether persistent TCP connections are enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  upstreamKeepaliveEnabled?: boolean;
  /**
   * @remarks
   * The ID of the VPC to which the ALB instance belongs.
   * 
   * @example
   * vpc-bp15zckdt37pq72zv****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      configManagedEnabled: 'ConfigManagedEnabled',
      connectionDrainConfig: 'ConnectionDrainConfig',
      createTime: 'CreateTime',
      crossZoneEnabled: 'CrossZoneEnabled',
      healthCheckConfig: 'HealthCheckConfig',
      ipv6Enabled: 'Ipv6Enabled',
      protocol: 'Protocol',
      relatedLoadBalancerIds: 'RelatedLoadBalancerIds',
      resourceGroupId: 'ResourceGroupId',
      scheduler: 'Scheduler',
      serverCount: 'ServerCount',
      serverGroupId: 'ServerGroupId',
      serverGroupName: 'ServerGroupName',
      serverGroupStatus: 'ServerGroupStatus',
      serverGroupType: 'ServerGroupType',
      serviceName: 'ServiceName',
      slowStartConfig: 'SlowStartConfig',
      stickySessionConfig: 'StickySessionConfig',
      tags: 'Tags',
      uchConfig: 'UchConfig',
      upstreamKeepaliveEnabled: 'UpstreamKeepaliveEnabled',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configManagedEnabled: 'boolean',
      connectionDrainConfig: ListServerGroupsResponseBodyServerGroupsConnectionDrainConfig,
      createTime: 'string',
      crossZoneEnabled: 'boolean',
      healthCheckConfig: ListServerGroupsResponseBodyServerGroupsHealthCheckConfig,
      ipv6Enabled: 'boolean',
      protocol: 'string',
      relatedLoadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      scheduler: 'string',
      serverCount: 'number',
      serverGroupId: 'string',
      serverGroupName: 'string',
      serverGroupStatus: 'string',
      serverGroupType: 'string',
      serviceName: 'string',
      slowStartConfig: ListServerGroupsResponseBodyServerGroupsSlowStartConfig,
      stickySessionConfig: ListServerGroupsResponseBodyServerGroupsStickySessionConfig,
      tags: { 'type': 'array', 'itemType': ListServerGroupsResponseBodyServerGroupsTags },
      uchConfig: ListServerGroupsResponseBodyServerGroupsUchConfig,
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
    if(Array.isArray(this.relatedLoadBalancerIds)) {
      $dara.Model.validateArray(this.relatedLoadBalancerIds);
    }
    if(this.slowStartConfig && typeof (this.slowStartConfig as any).validate === 'function') {
      (this.slowStartConfig as any).validate();
    }
    if(this.stickySessionConfig && typeof (this.stickySessionConfig as any).validate === 'function') {
      (this.stickySessionConfig as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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

