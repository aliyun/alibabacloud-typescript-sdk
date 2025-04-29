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

