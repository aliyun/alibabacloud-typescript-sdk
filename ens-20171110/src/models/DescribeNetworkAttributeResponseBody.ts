// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkAttributeResponseBodyCloudResourcesCloudResourceSetType extends $dara.Model {
  /**
   * @remarks
   * The number of resources in the network.
   * 
   * @example
   * 3
   */
  resourceCount?: number;
  /**
   * @remarks
   * The resource type. VSwitch.
   * 
   * @example
   * VSwitch
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCount: 'ResourceCount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCount: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAttributeResponseBodyCloudResources extends $dara.Model {
  cloudResourceSetType?: DescribeNetworkAttributeResponseBodyCloudResourcesCloudResourceSetType[];
  static names(): { [key: string]: string } {
    return {
      cloudResourceSetType: 'CloudResourceSetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResourceSetType: { 'type': 'array', 'itemType': DescribeNetworkAttributeResponseBodyCloudResourcesCloudResourceSetType },
    };
  }

  validate() {
    if(Array.isArray(this.cloudResourceSetType)) {
      $dara.Model.validateArray(this.cloudResourceSetType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAttributeResponseBodyHaVipIds extends $dara.Model {
  haVipId?: string[];
  static names(): { [key: string]: string } {
    return {
      haVipId: 'HaVipId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVipId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.haVipId)) {
      $dara.Model.validateArray(this.haVipId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAttributeResponseBodyInstanceIds extends $dara.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAttributeResponseBodyLoadBalancerIds extends $dara.Model {
  loadBalancerId?: string[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.loadBalancerId)) {
      $dara.Model.validateArray(this.loadBalancerId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAttributeResponseBodyNatGatewayIds extends $dara.Model {
  natGatewayId?: string[];
  static names(): { [key: string]: string } {
    return {
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGatewayId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.natGatewayId)) {
      $dara.Model.validateArray(this.natGatewayId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAttributeResponseBodyNetworkInterfaceIds extends $dara.Model {
  networkInterfaceId?: string[];
  static names(): { [key: string]: string } {
    return {
      networkInterfaceId: 'NetworkInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.networkInterfaceId)) {
      $dara.Model.validateArray(this.networkInterfaceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAttributeResponseBodyRouteTableIds extends $dara.Model {
  routeTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.routeTableId)) {
      $dara.Model.validateArray(this.routeTableId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAttributeResponseBodySecondaryCidrBlocks extends $dara.Model {
  secondaryCidrBlock?: string[];
  static names(): { [key: string]: string } {
    return {
      secondaryCidrBlock: 'SecondaryCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secondaryCidrBlock: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.secondaryCidrBlock)) {
      $dara.Model.validateArray(this.secondaryCidrBlock);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAttributeResponseBodyVSwitchIds extends $dara.Model {
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchId)) {
      $dara.Model.validateArray(this.vSwitchId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  secondaryCidrBlocks?: DescribeNetworkAttributeResponseBodySecondaryCidrBlocks;
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
      secondaryCidrBlocks: 'SecondaryCidrBlocks',
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
      secondaryCidrBlocks: DescribeNetworkAttributeResponseBodySecondaryCidrBlocks,
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
    if(this.secondaryCidrBlocks && typeof (this.secondaryCidrBlocks as any).validate === 'function') {
      (this.secondaryCidrBlocks as any).validate();
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

