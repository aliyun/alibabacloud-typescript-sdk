// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworksResponseBodyNetworksNetworkRouteTableIds } from "./DescribeNetworksResponseBodyNetworksNetworkRouteTableIds";
import { DescribeNetworksResponseBodyNetworksNetworkTags } from "./DescribeNetworksResponseBodyNetworksNetworkTags";
import { DescribeNetworksResponseBodyNetworksNetworkVSwitchIds } from "./DescribeNetworksResponseBodyNetworksNetworkVswitchIds";


export class DescribeNetworksResponseBodyNetworksNetwork extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR block of the network.
   * 
   * @example
   * 10.0.xx.xx/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The timestamp when the instance was created. Unit: milliseconds.
   * 
   * @example
   * 2020-06-16T06:33:15Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the network.
   * 
   * @example
   * exampleDescription
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
   * rt-5*****tbs
   */
  gatewayRouteTableId?: string;
  /**
   * @remarks
   * The ID of the network access control list (ACL).
   * 
   * @example
   * nacl-a2do9e413e0spxscd****
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
   * The name of the network.
   * 
   * @example
   * example
   */
  networkName?: string;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * @example
   * rt-5*****pks
   */
  routeTableId?: string;
  /**
   * @remarks
   * The IDs of the route tables.
   */
  routeTableIds?: DescribeNetworksResponseBodyNetworksNetworkRouteTableIds;
  /**
   * @remarks
   * The route table ID.
   * 
   * @example
   * rtb-5**
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
  tags?: DescribeNetworksResponseBodyNetworksNetworkTags;
  /**
   * @remarks
   * The list of vSwitches in the network.
   */
  vSwitchIds?: DescribeNetworksResponseBodyNetworksNetworkVSwitchIds;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      createdTime: 'CreatedTime',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      gatewayRouteTableId: 'GatewayRouteTableId',
      networkAclId: 'NetworkAclId',
      networkId: 'NetworkId',
      networkName: 'NetworkName',
      routeTableId: 'RouteTableId',
      routeTableIds: 'RouteTableIds',
      routerTableId: 'RouterTableId',
      status: 'Status',
      tags: 'Tags',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      createdTime: 'string',
      description: 'string',
      ensRegionId: 'string',
      gatewayRouteTableId: 'string',
      networkAclId: 'string',
      networkId: 'string',
      networkName: 'string',
      routeTableId: 'string',
      routeTableIds: DescribeNetworksResponseBodyNetworksNetworkRouteTableIds,
      routerTableId: 'string',
      status: 'string',
      tags: DescribeNetworksResponseBodyNetworksNetworkTags,
      vSwitchIds: DescribeNetworksResponseBodyNetworksNetworkVSwitchIds,
    };
  }

  validate() {
    if(this.routeTableIds && typeof (this.routeTableIds as any).validate === 'function') {
      (this.routeTableIds as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
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

