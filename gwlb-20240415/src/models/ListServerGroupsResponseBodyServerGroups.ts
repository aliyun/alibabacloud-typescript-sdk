// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServerGroupsResponseBodyServerGroupsConnectionDrainConfig } from "./ListServerGroupsResponseBodyServerGroupsConnectionDrainConfig";
import { ListServerGroupsResponseBodyServerGroupsHealthCheckConfig } from "./ListServerGroupsResponseBodyServerGroupsHealthCheckConfig";
import { ListServerGroupsResponseBodyServerGroupsTags } from "./ListServerGroupsResponseBodyServerGroupsTags";


export class ListServerGroupsResponseBodyServerGroups extends $dara.Model {
  /**
   * @remarks
   * The configurations of connection draining.
   */
  connectionDrainConfig?: ListServerGroupsResponseBodyServerGroupsConnectionDrainConfig;
  /**
   * @remarks
   * The time when the resource was created. The time follows the ISO 8601 standard in the **yyyy-MM-ddTHH:mm:ssZ** format. The time is displayed in UTC.
   * 
   * @example
   * 2024-08-05T18:24:07Z
   */
  createTime?: string;
  /**
   * @remarks
   * The configuration of health checks.
   */
  healthCheckConfig?: ListServerGroupsResponseBodyServerGroupsHealthCheckConfig;
  /**
   * @remarks
   * The backend protocol. Valid values:
   * 
   * *   **GENEVE**.
   * 
   * @example
   * GENEVE
   */
  protocol?: string;
  /**
   * @remarks
   * The IDs of the GWLB instances that are associated with the server group.
   */
  relatedLoadBalancerIds?: string[];
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **5TCH**: indicates consistent hashing that is based on the following factors: source IP address, destination IP address, source port, protocol, and destination port. Requests that contain the same information based on the preceding factors are forwarded to the same backend server.
   * *   **3TCH**: indicates consistent hashing that is based on the following factors: source IP address, destination IP address, and protocol. Requests that contain the same information based on the preceding factors are forwarded to the same backend server.
   * *   **2TCH**: indicates consistent hashing that is based on the following factors: source IP address and destination IP address. Requests that contain the same information based on the preceding factors are forwarded to the same backend server.
   * 
   * @example
   * 5TCH
   */
  scheduler?: string;
  /**
   * @remarks
   * The number of server groups.
   * 
   * @example
   * 2
   */
  serverCount?: number;
  /**
   * @remarks
   * Specifies how GWLB processes requests over existing connections when a backend server is not running as expected. Valid values:
   * 
   * *   **NoRebalance**: GWLB continues to forward requests over existing connections to the unhealthy backend server.
   * *   **Rebalance**: GWLB forwards requests over existing connections to the remaining healthy backend servers.
   * 
   * @example
   * NoRebalance
   */
  serverFailoverMode?: string;
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
   * testServerGroupName
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
   * The server group type. Valid values:
   * 
   * *   **Instance**: allows you to specify servers of the **Ecs**, **Eni**, or **Eci** type.
   * *   **Ip**: allows you to add servers of by specifying IP addresses.
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
   * The VPC ID.
   * 
   * @example
   * vpc-bp15zckdt37pq72zv****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionDrainConfig: 'ConnectionDrainConfig',
      createTime: 'CreateTime',
      healthCheckConfig: 'HealthCheckConfig',
      protocol: 'Protocol',
      relatedLoadBalancerIds: 'RelatedLoadBalancerIds',
      resourceGroupId: 'ResourceGroupId',
      scheduler: 'Scheduler',
      serverCount: 'ServerCount',
      serverFailoverMode: 'ServerFailoverMode',
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
      connectionDrainConfig: ListServerGroupsResponseBodyServerGroupsConnectionDrainConfig,
      createTime: 'string',
      healthCheckConfig: ListServerGroupsResponseBodyServerGroupsHealthCheckConfig,
      protocol: 'string',
      relatedLoadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      scheduler: 'string',
      serverCount: 'number',
      serverFailoverMode: 'string',
      serverGroupId: 'string',
      serverGroupName: 'string',
      serverGroupStatus: 'string',
      serverGroupType: 'string',
      tags: { 'type': 'array', 'itemType': ListServerGroupsResponseBodyServerGroupsTags },
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

