// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterType extends $dara.Model {
  accessPointId?: string;
  activationTime?: string;
  circuitCode?: string;
  creationTime?: string;
  description?: string;
  localGatewayIp?: string;
  name?: string;
  peerGatewayIp?: string;
  peeringSubnetMask?: string;
  physicalConnectionBusinessStatus?: string;
  physicalConnectionId?: string;
  physicalConnectionOwnerUid?: string;
  physicalConnectionStatus?: string;
  recoveryTime?: string;
  routeTableId?: string;
  status?: string;
  terminationTime?: string;
  vbrId?: string;
  vlanId?: number;
  vlanInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      activationTime: 'ActivationTime',
      circuitCode: 'CircuitCode',
      creationTime: 'CreationTime',
      description: 'Description',
      localGatewayIp: 'LocalGatewayIp',
      name: 'Name',
      peerGatewayIp: 'PeerGatewayIp',
      peeringSubnetMask: 'PeeringSubnetMask',
      physicalConnectionBusinessStatus: 'PhysicalConnectionBusinessStatus',
      physicalConnectionId: 'PhysicalConnectionId',
      physicalConnectionOwnerUid: 'PhysicalConnectionOwnerUid',
      physicalConnectionStatus: 'PhysicalConnectionStatus',
      recoveryTime: 'RecoveryTime',
      routeTableId: 'RouteTableId',
      status: 'Status',
      terminationTime: 'TerminationTime',
      vbrId: 'VbrId',
      vlanId: 'VlanId',
      vlanInterfaceId: 'VlanInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      activationTime: 'string',
      circuitCode: 'string',
      creationTime: 'string',
      description: 'string',
      localGatewayIp: 'string',
      name: 'string',
      peerGatewayIp: 'string',
      peeringSubnetMask: 'string',
      physicalConnectionBusinessStatus: 'string',
      physicalConnectionId: 'string',
      physicalConnectionOwnerUid: 'string',
      physicalConnectionStatus: 'string',
      recoveryTime: 'string',
      routeTableId: 'string',
      status: 'string',
      terminationTime: 'string',
      vbrId: 'string',
      vlanId: 'number',
      vlanInterfaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSet extends $dara.Model {
  virtualBorderRouterType?: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterType[];
  static names(): { [key: string]: string } {
    return {
      virtualBorderRouterType: 'VirtualBorderRouterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      virtualBorderRouterType: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterType },
    };
  }

  validate() {
    if(Array.isArray(this.virtualBorderRouterType)) {
      $dara.Model.validateArray(this.virtualBorderRouterType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersResponseBody extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  virtualBorderRouterSet?: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSet;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      virtualBorderRouterSet: 'VirtualBorderRouterSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      virtualBorderRouterSet: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSet,
    };
  }

  validate() {
    if(this.virtualBorderRouterSet && typeof (this.virtualBorderRouterSet as any).validate === 'function') {
      (this.virtualBorderRouterSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

