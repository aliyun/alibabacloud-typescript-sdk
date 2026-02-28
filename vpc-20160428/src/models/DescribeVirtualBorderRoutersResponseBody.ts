// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedCensAssociatedCen extends $dara.Model {
  cenId?: string;
  cenOwnerId?: number;
  cenStatus?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      cenStatus: 'CenStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenOwnerId: 'number',
      cenStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedCens extends $dara.Model {
  associatedCen?: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedCensAssociatedCen[];
  static names(): { [key: string]: string } {
    return {
      associatedCen: 'AssociatedCen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedCen: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedCensAssociatedCen },
    };
  }

  validate() {
    if(Array.isArray(this.associatedCen)) {
      $dara.Model.validateArray(this.associatedCen);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedPhysicalConnectionsAssociatedPhysicalConnection extends $dara.Model {
  circuitCode?: string;
  enableIpv6?: boolean;
  localGatewayIp?: string;
  localIpv6GatewayIp?: string;
  peerGatewayIp?: string;
  peerIpv6GatewayIp?: string;
  peeringIpv6SubnetMask?: string;
  peeringSubnetMask?: string;
  physicalConnectionBusinessStatus?: string;
  physicalConnectionId?: string;
  physicalConnectionOwnerUid?: string;
  physicalConnectionStatus?: string;
  status?: string;
  vlanId?: string;
  vlanInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      circuitCode: 'CircuitCode',
      enableIpv6: 'EnableIpv6',
      localGatewayIp: 'LocalGatewayIp',
      localIpv6GatewayIp: 'LocalIpv6GatewayIp',
      peerGatewayIp: 'PeerGatewayIp',
      peerIpv6GatewayIp: 'PeerIpv6GatewayIp',
      peeringIpv6SubnetMask: 'PeeringIpv6SubnetMask',
      peeringSubnetMask: 'PeeringSubnetMask',
      physicalConnectionBusinessStatus: 'PhysicalConnectionBusinessStatus',
      physicalConnectionId: 'PhysicalConnectionId',
      physicalConnectionOwnerUid: 'PhysicalConnectionOwnerUid',
      physicalConnectionStatus: 'PhysicalConnectionStatus',
      status: 'Status',
      vlanId: 'VlanId',
      vlanInterfaceId: 'VlanInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      circuitCode: 'string',
      enableIpv6: 'boolean',
      localGatewayIp: 'string',
      localIpv6GatewayIp: 'string',
      peerGatewayIp: 'string',
      peerIpv6GatewayIp: 'string',
      peeringIpv6SubnetMask: 'string',
      peeringSubnetMask: 'string',
      physicalConnectionBusinessStatus: 'string',
      physicalConnectionId: 'string',
      physicalConnectionOwnerUid: 'string',
      physicalConnectionStatus: 'string',
      status: 'string',
      vlanId: 'string',
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

export class DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedPhysicalConnections extends $dara.Model {
  associatedPhysicalConnection?: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedPhysicalConnectionsAssociatedPhysicalConnection[];
  static names(): { [key: string]: string } {
    return {
      associatedPhysicalConnection: 'AssociatedPhysicalConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedPhysicalConnection: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedPhysicalConnectionsAssociatedPhysicalConnection },
    };
  }

  validate() {
    if(Array.isArray(this.associatedPhysicalConnection)) {
      $dara.Model.validateArray(this.associatedPhysicalConnection);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeTagsTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeTags extends $dara.Model {
  tags?: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeTagsTags[];
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeTagsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterType extends $dara.Model {
  accessPointId?: string;
  activationTime?: string;
  associatedCens?: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedCens;
  associatedPhysicalConnections?: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedPhysicalConnections;
  bandwidth?: number;
  circuitCode?: string;
  cloudBoxInstanceId?: string;
  creationTime?: string;
  description?: string;
  detectMultiplier?: number;
  eccId?: string;
  ecrAttatchStatus?: string;
  ecrId?: string;
  ecrOwnerId?: string;
  enableIpv6?: boolean;
  localGatewayIp?: string;
  localIpv6GatewayIp?: string;
  minRxInterval?: number;
  minTxInterval?: number;
  mtu?: number;
  name?: string;
  PConnVbrChargeType?: string;
  PConnVbrExpireTime?: string;
  peerGatewayIp?: string;
  peerIpv6GatewayIp?: string;
  peeringIpv6SubnetMask?: string;
  peeringSubnetMask?: string;
  physicalConnectionBusinessStatus?: string;
  physicalConnectionId?: string;
  physicalConnectionOwnerUid?: string;
  physicalConnectionStatus?: string;
  recoveryTime?: string;
  resourceGroupId?: string;
  routeTableId?: string;
  sitelinkEnable?: boolean;
  status?: string;
  tags?: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeTags;
  terminationTime?: string;
  type?: string;
  vbrId?: string;
  vlanId?: number;
  vlanInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      activationTime: 'ActivationTime',
      associatedCens: 'AssociatedCens',
      associatedPhysicalConnections: 'AssociatedPhysicalConnections',
      bandwidth: 'Bandwidth',
      circuitCode: 'CircuitCode',
      cloudBoxInstanceId: 'CloudBoxInstanceId',
      creationTime: 'CreationTime',
      description: 'Description',
      detectMultiplier: 'DetectMultiplier',
      eccId: 'EccId',
      ecrAttatchStatus: 'EcrAttatchStatus',
      ecrId: 'EcrId',
      ecrOwnerId: 'EcrOwnerId',
      enableIpv6: 'EnableIpv6',
      localGatewayIp: 'LocalGatewayIp',
      localIpv6GatewayIp: 'LocalIpv6GatewayIp',
      minRxInterval: 'MinRxInterval',
      minTxInterval: 'MinTxInterval',
      mtu: 'Mtu',
      name: 'Name',
      PConnVbrChargeType: 'PConnVbrChargeType',
      PConnVbrExpireTime: 'PConnVbrExpireTime',
      peerGatewayIp: 'PeerGatewayIp',
      peerIpv6GatewayIp: 'PeerIpv6GatewayIp',
      peeringIpv6SubnetMask: 'PeeringIpv6SubnetMask',
      peeringSubnetMask: 'PeeringSubnetMask',
      physicalConnectionBusinessStatus: 'PhysicalConnectionBusinessStatus',
      physicalConnectionId: 'PhysicalConnectionId',
      physicalConnectionOwnerUid: 'PhysicalConnectionOwnerUid',
      physicalConnectionStatus: 'PhysicalConnectionStatus',
      recoveryTime: 'RecoveryTime',
      resourceGroupId: 'ResourceGroupId',
      routeTableId: 'RouteTableId',
      sitelinkEnable: 'SitelinkEnable',
      status: 'Status',
      tags: 'Tags',
      terminationTime: 'TerminationTime',
      type: 'Type',
      vbrId: 'VbrId',
      vlanId: 'VlanId',
      vlanInterfaceId: 'VlanInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      activationTime: 'string',
      associatedCens: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedCens,
      associatedPhysicalConnections: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedPhysicalConnections,
      bandwidth: 'number',
      circuitCode: 'string',
      cloudBoxInstanceId: 'string',
      creationTime: 'string',
      description: 'string',
      detectMultiplier: 'number',
      eccId: 'string',
      ecrAttatchStatus: 'string',
      ecrId: 'string',
      ecrOwnerId: 'string',
      enableIpv6: 'boolean',
      localGatewayIp: 'string',
      localIpv6GatewayIp: 'string',
      minRxInterval: 'number',
      minTxInterval: 'number',
      mtu: 'number',
      name: 'string',
      PConnVbrChargeType: 'string',
      PConnVbrExpireTime: 'string',
      peerGatewayIp: 'string',
      peerIpv6GatewayIp: 'string',
      peeringIpv6SubnetMask: 'string',
      peeringSubnetMask: 'string',
      physicalConnectionBusinessStatus: 'string',
      physicalConnectionId: 'string',
      physicalConnectionOwnerUid: 'string',
      physicalConnectionStatus: 'string',
      recoveryTime: 'string',
      resourceGroupId: 'string',
      routeTableId: 'string',
      sitelinkEnable: 'boolean',
      status: 'string',
      tags: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeTags,
      terminationTime: 'string',
      type: 'string',
      vbrId: 'string',
      vlanId: 'number',
      vlanInterfaceId: 'string',
    };
  }

  validate() {
    if(this.associatedCens && typeof (this.associatedCens as any).validate === 'function') {
      (this.associatedCens as any).validate();
    }
    if(this.associatedPhysicalConnections && typeof (this.associatedPhysicalConnections as any).validate === 'function') {
      (this.associatedPhysicalConnections as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
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
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
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

