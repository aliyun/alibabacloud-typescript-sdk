// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkAttributeResponseBodyCloudResources } from "./DescribeNetworkAttributeResponseBodyCloudResources";
import { DescribeNetworkAttributeResponseBodyHaVipIds } from "./DescribeNetworkAttributeResponseBodyHaVipIds";
import { DescribeNetworkAttributeResponseBodyInstanceIds } from "./DescribeNetworkAttributeResponseBodyInstanceIds";
import { DescribeNetworkAttributeResponseBodyLoadBalancerIds } from "./DescribeNetworkAttributeResponseBodyLoadBalancerIds";
import { DescribeNetworkAttributeResponseBodyNatGatewayIds } from "./DescribeNetworkAttributeResponseBodyNatGatewayIds";
import { DescribeNetworkAttributeResponseBodyNetworkInterfaceIds } from "./DescribeNetworkAttributeResponseBodyNetworkInterfaceIds";
import { DescribeNetworkAttributeResponseBodyRouteTableIds } from "./DescribeNetworkAttributeResponseBodyRouteTableIds";
import { DescribeNetworkAttributeResponseBodyVSwitchIds } from "./DescribeNetworkAttributeResponseBodyVswitchIds";


export class DescribeNetworkAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR block of the network.
   * 
   * @example
   * 10.0.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The list of resources in the network.
   */
  cloudResources?: DescribeNetworkAttributeResponseBodyCloudResources;
  /**
   * @remarks
   * The time when the network was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-06-01T00:00:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the network.
   * 
   * @example
   * abc
   */
  description?: string;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * @example
   * cn-beijing
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the gateway route table.
   * 
   * @example
   * rt-539***tbs
   */
  gatewayRouteTableId?: string;
  /**
   * @remarks
   * List of HaVipIds.
   */
  haVipIds?: DescribeNetworkAttributeResponseBodyHaVipIds;
  /**
   * @remarks
   * The instance IDs.
   */
  instanceIds?: DescribeNetworkAttributeResponseBodyInstanceIds;
  /**
   * @remarks
   * List of ELB instances.
   */
  loadBalancerIds?: DescribeNetworkAttributeResponseBodyLoadBalancerIds;
  /**
   * @remarks
   * List of NAT Gateways.
   */
  natGatewayIds?: DescribeNetworkAttributeResponseBodyNatGatewayIds;
  /**
   * @remarks
   * The ID of the network access control list (ACL).
   * 
   * @example
   * nacl-a2do9e413e0sp****
   */
  networkAclId?: string;
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * n-5***
   */
  networkId?: string;
  /**
   * @remarks
   * A list of multicast source IDs.
   */
  networkInterfaceIds?: DescribeNetworkAttributeResponseBodyNetworkInterfaceIds;
  /**
   * @remarks
   * The name of the network.
   * 
   * @example
   * abc
   */
  networkName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * @example
   * rt-539***fpu
   */
  routeTableId?: string;
  /**
   * @remarks
   * List of routing table IDs.
   */
  routeTableIds?: DescribeNetworkAttributeResponseBodyRouteTableIds;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * @example
   * rtb-5***
   */
  routerTableId?: string;
  /**
   * @remarks
   * The status of the network. Valid values:
   * 
   * *   Pending
   * *   Available
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The list of vSwitches in the network.
   */
  vSwitchIds?: DescribeNetworkAttributeResponseBodyVSwitchIds;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      cloudResources: 'CloudResources',
      createdTime: 'CreatedTime',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      gatewayRouteTableId: 'GatewayRouteTableId',
      haVipIds: 'HaVipIds',
      instanceIds: 'InstanceIds',
      loadBalancerIds: 'LoadBalancerIds',
      natGatewayIds: 'NatGatewayIds',
      networkAclId: 'NetworkAclId',
      networkId: 'NetworkId',
      networkInterfaceIds: 'NetworkInterfaceIds',
      networkName: 'NetworkName',
      requestId: 'RequestId',
      routeTableId: 'RouteTableId',
      routeTableIds: 'RouteTableIds',
      routerTableId: 'RouterTableId',
      status: 'Status',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      cloudResources: DescribeNetworkAttributeResponseBodyCloudResources,
      createdTime: 'string',
      description: 'string',
      ensRegionId: 'string',
      gatewayRouteTableId: 'string',
      haVipIds: DescribeNetworkAttributeResponseBodyHaVipIds,
      instanceIds: DescribeNetworkAttributeResponseBodyInstanceIds,
      loadBalancerIds: DescribeNetworkAttributeResponseBodyLoadBalancerIds,
      natGatewayIds: DescribeNetworkAttributeResponseBodyNatGatewayIds,
      networkAclId: 'string',
      networkId: 'string',
      networkInterfaceIds: DescribeNetworkAttributeResponseBodyNetworkInterfaceIds,
      networkName: 'string',
      requestId: 'string',
      routeTableId: 'string',
      routeTableIds: DescribeNetworkAttributeResponseBodyRouteTableIds,
      routerTableId: 'string',
      status: 'string',
      vSwitchIds: DescribeNetworkAttributeResponseBodyVSwitchIds,
    };
  }

  validate() {
    if(this.cloudResources && typeof (this.cloudResources as any).validate === 'function') {
      (this.cloudResources as any).validate();
    }
    if(this.haVipIds && typeof (this.haVipIds as any).validate === 'function') {
      (this.haVipIds as any).validate();
    }
    if(this.instanceIds && typeof (this.instanceIds as any).validate === 'function') {
      (this.instanceIds as any).validate();
    }
    if(this.loadBalancerIds && typeof (this.loadBalancerIds as any).validate === 'function') {
      (this.loadBalancerIds as any).validate();
    }
    if(this.natGatewayIds && typeof (this.natGatewayIds as any).validate === 'function') {
      (this.natGatewayIds as any).validate();
    }
    if(this.networkInterfaceIds && typeof (this.networkInterfaceIds as any).validate === 'function') {
      (this.networkInterfaceIds as any).validate();
    }
    if(this.routeTableIds && typeof (this.routeTableIds as any).validate === 'function') {
      (this.routeTableIds as any).validate();
    }
    if(this.vSwitchIds && typeof (this.vSwitchIds as any).validate === 'function') {
      (this.vSwitchIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

