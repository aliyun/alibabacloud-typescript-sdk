// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedCensAssociatedCen extends $dara.Model {
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * @example
   * cen-kojok19xxx****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the account to which the CEN instance belongs.
   * 
   * @example
   * 1688000000000****
   */
  cenOwnerId?: number;
  /**
   * @remarks
   * The status of the CEN instance. Valid values:
   * 
   * *   **Attached**
   * *   **Attaching**
   * *   **Detached**
   * *   **Detaching**
   * *   If no value is returned, the VBR is not attached to a CEN instance.
   * 
   * @example
   * Attached
   */
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
  /**
   * @remarks
   * The circuit code of the Express Connect circuit, which is provided by the connectivity provider.
   * 
   * @example
   * longtel0**
   */
  circuitCode?: string;
  /**
   * @remarks
   * Indicates whether IPv6 is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * The IPv4 address of the VBR on the Alibaba Cloud side.
   * 
   * @example
   * 192.168.XX.XX
   */
  localGatewayIp?: string;
  /**
   * @remarks
   * The IPv6 address of the VBR on the Alibaba Cloud side.
   * 
   * @example
   * 2001:XXXX:3c4d:0015:0000:0000:0000:1a2b
   */
  localIpv6GatewayIp?: string;
  /**
   * @remarks
   * The IPv4 address of the VBR on the user side.
   * 
   * @example
   * 116.62.XX.XX
   */
  peerGatewayIp?: string;
  /**
   * @remarks
   * The IPv6 address of the VBR on the user side.
   * 
   * @example
   * 2001:XXXX:3c4d:0015:0000:0000:0000:1a2b
   */
  peerIpv6GatewayIp?: string;
  /**
   * @remarks
   * The subnet mask for the IPv6 addresses on the user side and on the Alibaba Cloud side.
   * 
   * Both IPv6 addresses must belong to the same subnet.
   * 
   * @example
   * 2408:4004:cc:400::/56
   */
  peeringIpv6SubnetMask?: string;
  /**
   * @remarks
   * The subnet mask for the IPv4 addresses of the VBR on the user side and on the Alibaba Cloud side.
   * 
   * Both IPv4 addresses must belong to the same subnet.
   * 
   * @example
   * 255.255.255.252
   */
  peeringSubnetMask?: string;
  /**
   * @remarks
   * The business status of the Express Connect circuit. Valid values:
   * 
   * *   **Normal:** The Express Connect circuit is running as normal.
   * *   **FinancialLocked:** The Express Connect circuit is locked due to overdue payments.
   * 
   * @example
   * Normal
   */
  physicalConnectionBusinessStatus?: string;
  /**
   * @remarks
   * The ID of the Express Connect circuit.
   * 
   * @example
   * pc-119mfjzm7****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The ID of the account to which the Express Connect circuit belongs.
   * 
   * @example
   * 12345678****
   */
  physicalConnectionOwnerUid?: string;
  /**
   * @remarks
   * The status of the Express Connect circuit. Valid values:
   * 
   * *   **Initial:** The application is under review.
   * *   **Approved**: The application is approved.
   * *   **Allocating**: The system is allocating resources.
   * *   **Allocated**: The Express Connect circuit is under construction.
   * *   **Confirmed**: The Express Connect circuit is to be confirmed.
   * *   **Enabled**: The Express Connect circuit is enabled.
   * *   **Rejected**: The application is rejected.
   * *   **Canceled**: The application is canceled.
   * *   **Allocation Failed:** The system failed to allocate resources.
   * *   **Terminated:** The Express Connect circuit is disabled.
   * 
   * @example
   * Enabled
   */
  physicalConnectionStatus?: string;
  /**
   * @remarks
   * The status of the VBR. Valid values:
   * 
   * *   **unconfirmed**
   * *   **active:**
   * *   **terminating**
   * *   **terminated**
   * *   **recovering**
   * *   **deleting:**
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The VLAN ID of the VBR.
   * 
   * @example
   * 0
   */
  vlanId?: string;
  /**
   * @remarks
   * The ID of the VBR interface, which can be used as a next hop of a VBR route.
   * 
   * @example
   * ri-kojok19x3j0q6k****
   */
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
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * @example
   * FinanceJoshua
   */
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
  /**
   * @remarks
   * The ID of the access point.
   * 
   * @example
   * ap-cn-kojok1x****
   */
  accessPointId?: string;
  /**
   * @remarks
   * The time when the VBR was activated for the first time.
   * 
   * @example
   * 2021-06-08T12:20:55
   */
  activationTime?: string;
  /**
   * @remarks
   * The information about the Cloud Enterprise Network (CEN) instance to which the VBR is attached.
   */
  associatedCens?: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedCens;
  /**
   * @remarks
   * The information about the Express Connect circuit that is associated with the VBR.
   */
  associatedPhysicalConnections?: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedPhysicalConnections;
  /**
   * @remarks
   * The bandwidth value of the VBR. Unit: Mbit/s.
   * 
   * @example
   * 50
   */
  bandwidth?: number;
  /**
   * @remarks
   * The circuit code of the Express Connect circuit, which is provided by the connectivity provider.
   * 
   * @example
   * longtel0****
   */
  circuitCode?: string;
  /**
   * @remarks
   * The ID of the cloud box.
   * 
   * @example
   * cb-****
   */
  cloudBoxInstanceId?: string;
  /**
   * @remarks
   * The time when the VBR was created.
   * 
   * @example
   * 2020-06-08T12:20:55
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the VBR.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The multiple of the detection time.
   * 
   * This value indicates the maximum number of dropped packets that is allowed by the receiver when the initiator transmits packets. This value can be used to check whether the connection works as expected.
   * 
   * Valid values: **3 to 10**.
   * 
   * @example
   * 3
   */
  detectMultiplier?: number;
  /**
   * @remarks
   * The ID of the Express Cloud Connect (ECC) instance.
   * 
   * @example
   * ecc-h****
   */
  eccId?: string;
  /**
   * @remarks
   * The status of the ECR. Valid values:
   * 
   * *   **Attached**
   * *   **Attaching**
   * *   **Detached**
   * *   **Detaching**
   * *   If no value is returned, the VBR is not attached to a CEN instance.
   * 
   * @example
   * Attached
   */
  ecrAttatchStatus?: string;
  /**
   * @remarks
   * The ID of the Express Connect Router (ECR).
   * 
   * @example
   * ecr-7vrbqv9lcgvzqbwwkm
   */
  ecrId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account (primary account)  to which the ECR belongs.
   * 
   * @example
   * 192732132151xxxx
   */
  ecrOwnerId?: string;
  /**
   * @remarks
   * Indicates whether IPv6 is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * The IPv4 address of the VBR on the Alibaba Cloud side.
   * 
   * @example
   * 192.168.XX.XX
   */
  localGatewayIp?: string;
  /**
   * @remarks
   * The IPv6 address of the VBR on the Alibaba Cloud side.
   * 
   * @example
   * 2001:XXXX:3c4d:0015:0000:0000:0000:1a2b
   */
  localIpv6GatewayIp?: string;
  /**
   * @remarks
   * The time interval to receive BFD packets. Valid values: **200 to 1000**. Unit: milliseconds.
   * 
   * @example
   * 300
   */
  minRxInterval?: number;
  /**
   * @remarks
   * The time interval to send Bidirectional Forwarding Detection (BFD) packets. Valid values: **200 to 1000**. Unit: milliseconds.
   * 
   * @example
   * 300
   */
  minTxInterval?: number;
  /**
   * @remarks
   * The VBR name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The billing method of the VBR. Valid values:
   * 
   * *   **PrePaid:** subscription. If you choose this billing method, make sure that your account supports balance payments or credit payments.
   * *   **PostPaid:** pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  PConnVbrChargeType?: string;
  /**
   * @remarks
   * The time when the VBR expires.
   * 
   * @example
   * 2021-06-08T12:20:55
   */
  PConnVbrExpireTime?: string;
  /**
   * @remarks
   * The IPv4 address of the VBR on the user side.
   * 
   * @example
   * 192.168.XX.XX
   */
  peerGatewayIp?: string;
  /**
   * @remarks
   * The IPv6 address of the VBR on the user side.
   * 
   * @example
   * 2001:XXXX:3c4d:0015:0000:0000:0000:1a2b
   */
  peerIpv6GatewayIp?: string;
  /**
   * @remarks
   * The subnet mask for the IPv6 addresses on the user side and on the Alibaba Cloud side.
   * 
   * @example
   * 2000:1234:0:a000::/55
   */
  peeringIpv6SubnetMask?: string;
  /**
   * @remarks
   * The subnet mask for the IPv4 addresses on the Alibaba Cloud side and on the user side.
   * 
   * @example
   * 255.255.255.252
   */
  peeringSubnetMask?: string;
  /**
   * @remarks
   * The business status of the Express Connect circuit. Valid values:
   * 
   * *   **Normal:** The Express Connect circuit is running as normal.
   * *   **FinancialLocked:** The Express Connect circuit is locked due to overdue payments.
   * 
   * @example
   * Normal
   */
  physicalConnectionBusinessStatus?: string;
  /**
   * @remarks
   * The ID of the Express Connect circuit to which the VBR belongs.
   * 
   * @example
   * pc-119mfjzm7x****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The ID of the account to which the Express Connect circuit belongs.
   * 
   * @example
   * 1688000000000****
   */
  physicalConnectionOwnerUid?: string;
  /**
   * @remarks
   * The status of the Express Connect circuit. Valid values:
   * 
   * *   **Initial:** The application is under review.
   * *   **Approved**: The application is approved.
   * *   **Allocating**: The system is allocating resources.
   * *   **Allocated**: The Express Connect circuit is under construction.
   * *   **Confirmed**: The Express Connect circuit is to be confirmed.
   * *   **Enabled**: The Express Connect circuit is enabled.
   * *   **Rejected**: The application is rejected.
   * *   **Canceled**: The application is canceled.
   * *   **Allocation Failed:** The system failed to allocate resources.
   * *   **Terminated:** The Express Connect circuit is disabled.
   * 
   * @example
   * Normal
   */
  physicalConnectionStatus?: string;
  /**
   * @remarks
   * The last time when the status of the VBR changed from **terminated** to **active**.
   * 
   * @example
   * 2021-05-08T12:20:55
   */
  recoveryTime?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.html).
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the route table of the VBR.
   * 
   * @example
   * rtb-bp1****
   */
  routeTableId?: string;
  /**
   * @remarks
   * Indicates whether to allow service access between data centers. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  If no value is returned, service access between data centers is not allowed.
   * 
   * @example
   * false
   */
  sitelinkEnable?: boolean;
  /**
   * @remarks
   * The status of the VBR. Valid values:
   * 
   * *   **unconfirmed**
   * *   **active**
   * *   **terminating**
   * *   **terminated**
   * *   **recovering**
   * *   **deleting:**
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The tag of the resource.
   */
  tags?: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeTags;
  /**
   * @remarks
   * The last time when the VBR was terminated.
   * 
   * @example
   * 2021-06-08T12:20:55
   */
  terminationTime?: string;
  /**
   * @remarks
   * The VBR type.
   * 
   * @example
   * pconnVBR
   */
  type?: string;
  /**
   * @remarks
   * The VBR ID.
   * 
   * @example
   * vbr-bp1jcg5cmxjbl9xgc****
   */
  vbrId?: string;
  /**
   * @remarks
   * The VLAN ID of the VBR.
   * 
   * @example
   * 10
   */
  vlanId?: number;
  /**
   * @remarks
   * The ID of the VBR interface.
   * 
   * @example
   * ri-2zeo3xzyf38r4xx****
   */
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
  /**
   * @remarks
   * The information about the VBR.
   */
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

