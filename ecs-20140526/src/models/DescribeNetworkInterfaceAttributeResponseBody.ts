// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInterfaceAttributeResponseBodyAssociatedPublicIp extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * @example
   * null
   */
  allocationId?: string;
  /**
   * @remarks
   * The EIP address.
   * 
   * @example
   * ``116.62.**.**``
   */
  publicIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      publicIpAddress: 'PublicIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      publicIpAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyAttachmentMemberNetworkInterfaceIds extends $dara.Model {
  memberNetworkInterfaceId?: string[];
  static names(): { [key: string]: string } {
    return {
      memberNetworkInterfaceId: 'MemberNetworkInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberNetworkInterfaceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.memberNetworkInterfaceId)) {
      $dara.Model.validateArray(this.memberNetworkInterfaceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyAttachment extends $dara.Model {
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * hide
   */
  deviceIndex?: number;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * hide
   */
  instanceId?: string;
  memberNetworkInterfaceIds?: DescribeNetworkInterfaceAttributeResponseBodyAttachmentMemberNetworkInterfaceIds;
  /**
   * @remarks
   * The index of the network card to which the ENI is attached.
   * 
   * @example
   * 0
   */
  networkCardIndex?: number;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * hide
   */
  trunkNetworkInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIndex: 'DeviceIndex',
      instanceId: 'InstanceId',
      memberNetworkInterfaceIds: 'MemberNetworkInterfaceIds',
      networkCardIndex: 'NetworkCardIndex',
      trunkNetworkInterfaceId: 'TrunkNetworkInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIndex: 'number',
      instanceId: 'string',
      memberNetworkInterfaceIds: DescribeNetworkInterfaceAttributeResponseBodyAttachmentMemberNetworkInterfaceIds,
      networkCardIndex: 'number',
      trunkNetworkInterfaceId: 'string',
    };
  }

  validate() {
    if(this.memberNetworkInterfaceIds && typeof (this.memberNetworkInterfaceIds as any).validate === 'function') {
      (this.memberNetworkInterfaceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecificationSlaveInterfaceSpecificationSlaveInterfaceSpecificationSet extends $dara.Model {
  bondNetworkInterfaceId?: string;
  slaveNetworkInterfaceId?: string;
  workState?: string;
  static names(): { [key: string]: string } {
    return {
      bondNetworkInterfaceId: 'BondNetworkInterfaceId',
      slaveNetworkInterfaceId: 'SlaveNetworkInterfaceId',
      workState: 'WorkState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondNetworkInterfaceId: 'string',
      slaveNetworkInterfaceId: 'string',
      workState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecificationSlaveInterfaceSpecification extends $dara.Model {
  slaveInterfaceSpecificationSet?: DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecificationSlaveInterfaceSpecificationSlaveInterfaceSpecificationSet[];
  static names(): { [key: string]: string } {
    return {
      slaveInterfaceSpecificationSet: 'SlaveInterfaceSpecificationSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slaveInterfaceSpecificationSet: { 'type': 'array', 'itemType': DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecificationSlaveInterfaceSpecificationSlaveInterfaceSpecificationSet },
    };
  }

  validate() {
    if(Array.isArray(this.slaveInterfaceSpecificationSet)) {
      $dara.Model.validateArray(this.slaveInterfaceSpecificationSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecification extends $dara.Model {
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  bondMode?: string;
  slaveInterfaceSpecification?: DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecificationSlaveInterfaceSpecification;
  static names(): { [key: string]: string } {
    return {
      bondMode: 'BondMode',
      slaveInterfaceSpecification: 'SlaveInterfaceSpecification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondMode: 'string',
      slaveInterfaceSpecification: DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecificationSlaveInterfaceSpecification,
    };
  }

  validate() {
    if(this.slaveInterfaceSpecification && typeof (this.slaveInterfaceSpecification as any).validate === 'function') {
      (this.slaveInterfaceSpecification as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyConnectionTrackingConfiguration extends $dara.Model {
  /**
   * @remarks
   * The timeout period for a TCP connection in the TIME_WAIT or CLOSED state. Unit: seconds. Valid values: an integer from 3 to 15.
   * 
   * @example
   * 3
   */
  tcpClosedAndTimeWaitTimeout?: number;
  /**
   * @remarks
   * The timeout period for an established TCP connection. Unit: seconds. Valid values: [30, 60, 80, 100, 200, 300, 500, 700, 910].
   * 
   * @example
   * 910
   */
  tcpEstablishedTimeout?: number;
  /**
   * @remarks
   * The timeout period for a UDP flow. Unit: seconds. Valid values: [10, 20, 30, 60, 80, 100].
   * 
   * @example
   * 30
   */
  udpTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      tcpClosedAndTimeWaitTimeout: 'TcpClosedAndTimeWaitTimeout',
      tcpEstablishedTimeout: 'TcpEstablishedTimeout',
      udpTimeout: 'UdpTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tcpClosedAndTimeWaitTimeout: 'number',
      tcpEstablishedTimeout: 'number',
      udpTimeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyEnhancedNetwork extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not yet available for use.
   * 
   * @example
   * true
   */
  enableRss?: boolean;
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * false
   */
  enableSriov?: boolean;
  virtualFunctionQuantity?: number;
  virtualFunctionTotalQueueNumber?: number;
  static names(): { [key: string]: string } {
    return {
      enableRss: 'EnableRss',
      enableSriov: 'EnableSriov',
      virtualFunctionQuantity: 'VirtualFunctionQuantity',
      virtualFunctionTotalQueueNumber: 'VirtualFunctionTotalQueueNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableRss: 'boolean',
      enableSriov: 'boolean',
      virtualFunctionQuantity: 'number',
      virtualFunctionTotalQueueNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyIpv4PrefixSetsIpv4PrefixSet extends $dara.Model {
  ipv4Prefix?: string;
  static names(): { [key: string]: string } {
    return {
      ipv4Prefix: 'Ipv4Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4Prefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyIpv4PrefixSets extends $dara.Model {
  ipv4PrefixSet?: DescribeNetworkInterfaceAttributeResponseBodyIpv4PrefixSetsIpv4PrefixSet[];
  static names(): { [key: string]: string } {
    return {
      ipv4PrefixSet: 'Ipv4PrefixSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4PrefixSet: { 'type': 'array', 'itemType': DescribeNetworkInterfaceAttributeResponseBodyIpv4PrefixSetsIpv4PrefixSet },
    };
  }

  validate() {
    if(Array.isArray(this.ipv4PrefixSet)) {
      $dara.Model.validateArray(this.ipv4PrefixSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyIpv6PrefixSetsIpv6PrefixSet extends $dara.Model {
  ipv6Prefix?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6Prefix: 'Ipv6Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Prefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyIpv6PrefixSets extends $dara.Model {
  ipv6PrefixSet?: DescribeNetworkInterfaceAttributeResponseBodyIpv6PrefixSetsIpv6PrefixSet[];
  static names(): { [key: string]: string } {
    return {
      ipv6PrefixSet: 'Ipv6PrefixSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6PrefixSet: { 'type': 'array', 'itemType': DescribeNetworkInterfaceAttributeResponseBodyIpv6PrefixSetsIpv6PrefixSet },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6PrefixSet)) {
      $dara.Model.validateArray(this.ipv6PrefixSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyIpv6SetsIpv6Set extends $dara.Model {
  ipv6Address?: string;
  primary?: boolean;
  static names(): { [key: string]: string } {
    return {
      ipv6Address: 'Ipv6Address',
      primary: 'Primary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Address: 'string',
      primary: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyIpv6Sets extends $dara.Model {
  ipv6Set?: DescribeNetworkInterfaceAttributeResponseBodyIpv6SetsIpv6Set[];
  static names(): { [key: string]: string } {
    return {
      ipv6Set: 'Ipv6Set',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Set: { 'type': 'array', 'itemType': DescribeNetworkInterfaceAttributeResponseBodyIpv6SetsIpv6Set },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6Set)) {
      $dara.Model.validateArray(this.ipv6Set);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyNetworkInterfaceTrafficConfig extends $dara.Model {
  /**
   * @remarks
   * The communication mode of the network interface controller (NIC).
   * 
   * @example
   * HighPerformance
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The number of queues supported by the network interface controller (NIC).
   * 
   * @example
   * 8
   */
  queueNumber?: number;
  /**
   * @remarks
   * The number of queues supported by the RDMA ENI.
   * 
   * @example
   * 8
   */
  queuePairNumber?: number;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      queueNumber: 'QueueNumber',
      queuePairNumber: 'QueuePairNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceTrafficMode: 'string',
      queueNumber: 'number',
      queuePairNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSetsPrivateIpSetAssociatedPublicIp extends $dara.Model {
  allocationId?: string;
  publicIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      publicIpAddress: 'PublicIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      publicIpAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSetsPrivateIpSet extends $dara.Model {
  associatedPublicIp?: DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSetsPrivateIpSetAssociatedPublicIp;
  primary?: boolean;
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      associatedPublicIp: 'AssociatedPublicIp',
      primary: 'Primary',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedPublicIp: DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSetsPrivateIpSetAssociatedPublicIp,
      primary: 'boolean',
      privateIpAddress: 'string',
    };
  }

  validate() {
    if(this.associatedPublicIp && typeof (this.associatedPublicIp as any).validate === 'function') {
      (this.associatedPublicIp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSets extends $dara.Model {
  privateIpSet?: DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSetsPrivateIpSet[];
  static names(): { [key: string]: string } {
    return {
      privateIpSet: 'PrivateIpSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpSet: { 'type': 'array', 'itemType': DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSetsPrivateIpSet },
    };
  }

  validate() {
    if(Array.isArray(this.privateIpSet)) {
      $dara.Model.validateArray(this.privateIpSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyQoSConfigQoS extends $dara.Model {
  /**
   * @remarks
   * The maximum inbound internal bandwidth limit.
   * 
   * @example
   * 50000
   */
  bandwidthRx?: number;
  /**
   * @remarks
   * The maximum outbound internal bandwidth limit.
   * 
   * @example
   * 50000
   */
  bandwidthTx?: number;
  /**
   * @remarks
   * The maximum number of sessions.
   * 
   * @example
   * 50000
   */
  concurrentConnections?: number;
  /**
   * @remarks
   * The inbound internal network packet forwarding rate.
   * 
   * @example
   * 50000
   */
  ppsRx?: number;
  /**
   * @remarks
   * The outbound internal network packet forwarding rate.
   * 
   * @example
   * 50000
   */
  ppsTx?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthRx: 'BandwidthRx',
      bandwidthTx: 'BandwidthTx',
      concurrentConnections: 'ConcurrentConnections',
      ppsRx: 'PpsRx',
      ppsTx: 'PpsTx',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthRx: 'number',
      bandwidthTx: 'number',
      concurrentConnections: 'number',
      ppsRx: 'number',
      ppsTx: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyQoSConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether QoS rate limiting is enabled.
   */
  enableQoS?: boolean;
  /**
   * @remarks
   * The QoS rate limiting settings.
   */
  qoS?: DescribeNetworkInterfaceAttributeResponseBodyQoSConfigQoS;
  static names(): { [key: string]: string } {
    return {
      enableQoS: 'EnableQoS',
      qoS: 'QoS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableQoS: 'boolean',
      qoS: DescribeNetworkInterfaceAttributeResponseBodyQoSConfigQoS,
    };
  }

  validate() {
    if(this.qoS && typeof (this.qoS as any).validate === 'function') {
      (this.qoS as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodySecurityGroupIds extends $dara.Model {
  securityGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupId)) {
      $dara.Model.validateArray(this.securityGroupId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodySlaveInterfaceSpecification extends $dara.Model {
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  bondNetworkInterfaceId?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  slaveNetworkInterfaceId?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  workState?: string;
  static names(): { [key: string]: string } {
    return {
      bondNetworkInterfaceId: 'BondNetworkInterfaceId',
      slaveNetworkInterfaceId: 'SlaveNetworkInterfaceId',
      workState: 'WorkState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondNetworkInterfaceId: 'string',
      slaveNetworkInterfaceId: 'string',
      workState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyTagsTag extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBodyTags extends $dara.Model {
  tag?: DescribeNetworkInterfaceAttributeResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeNetworkInterfaceAttributeResponseBodyTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Elastic IP Address (EIP) associated with the secondary private IP address of the network interface controller (NIC).
   */
  associatedPublicIp?: DescribeNetworkInterfaceAttributeResponseBodyAssociatedPublicIp;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   */
  attachment?: DescribeNetworkInterfaceAttributeResponseBodyAttachment;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   */
  bondInterfaceSpecification?: DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecification;
  /**
   * @remarks
   * The collection of network connectivity tracking configuration information.
   */
  connectionTrackingConfiguration?: DescribeNetworkInterfaceAttributeResponseBodyConnectionTrackingConfiguration;
  /**
   * @remarks
   * The time when the network interface controller (NIC) was created.
   * 
   * @example
   * 2019-12-25T12:31:31Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the ENI is retained when the associated instance is released. Valid values:
   * 
   * @example
   * true
   */
  deleteOnRelease?: boolean;
  /**
   * @remarks
   * The description of the network interface controller (NIC).
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * This parameter is not publicly available.
   */
  enhancedNetwork?: DescribeNetworkInterfaceAttributeResponseBodyEnhancedNetwork;
  /**
   * @remarks
   * The ID of the instance to which the network interface controller (NIC) is attached.
   * 
   * @example
   * i-bp1e2l6djkndyuli****
   */
  instanceId?: string;
  ipv4PrefixSets?: DescribeNetworkInterfaceAttributeResponseBodyIpv4PrefixSets;
  ipv6PrefixSets?: DescribeNetworkInterfaceAttributeResponseBodyIpv6PrefixSets;
  ipv6Sets?: DescribeNetworkInterfaceAttributeResponseBodyIpv6Sets;
  /**
   * @remarks
   * The MAC address of the network interface controller (NIC).
   * 
   * @example
   * 00:16:3e:12:**:**
   */
  macAddress?: string;
  /**
   * @remarks
   * The ID of the network interface controller (NIC).
   * 
   * @example
   * eni-bp125p95hhdhn3ot****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The name of the network interface controller (NIC).
   * 
   * @example
   * my-eni-name
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The traffic parameters of the network interface controller (NIC).
   */
  networkInterfaceTrafficConfig?: DescribeNetworkInterfaceAttributeResponseBodyNetworkInterfaceTrafficConfig;
  /**
   * @remarks
   * The communication mode of the network interface controller (NIC). Valid values:
   * 
   * @example
   * Standard
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The ID of the account that owns the network interface controller (NIC).
   * 
   * @example
   * 123456****
   */
  ownerId?: string;
  /**
   * @remarks
   * The private network IP address of the network interface controller (NIC).
   * 
   * @example
   * ``10.1.**.**``
   */
  privateIpAddress?: string;
  privateIpSets?: DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSets;
  /**
   * @remarks
   * The QoS rate limiting settings.
   */
  qoSConfig?: DescribeNetworkInterfaceAttributeResponseBodyQoSConfig;
  /**
   * @remarks
   * The number of queues supported by the network interface controller (NIC).
   * 
   * @example
   * 8
   */
  queueNumber?: number;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * 22
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. When you use this parameter to filter resources, the resource count cannot exceed 1000.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  securityGroupIds?: DescribeNetworkInterfaceAttributeResponseBodySecurityGroupIds;
  /**
   * @remarks
   * The ID of the Virtual Network Operator (VNO) to which the network interface controller (NIC) belongs.
   * 
   * @example
   * 12345678910
   */
  serviceID?: number;
  /**
   * @remarks
   * Indicates whether the user of the network interface controller (NIC) is an Alibaba Cloud service or a VNO.
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   */
  slaveInterfaceSpecification?: DescribeNetworkInterfaceAttributeResponseBodySlaveInterfaceSpecification;
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * false
   */
  sourceDestCheck?: boolean;
  /**
   * @remarks
   * The status of the network interface controller (NIC). Valid values:
   * 
   * @example
   * Available
   */
  status?: string;
  tags?: DescribeNetworkInterfaceAttributeResponseBodyTags;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  tcpOptionAddressEnabled?: string;
  /**
   * @remarks
   * The type of the network interface controller (NIC). Valid values:
   * 
   * @example
   * Secondary
   */
  type?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the network interface controller (NIC) belongs.
   * 
   * @example
   * vsw-bp1s5fnvk4gn2tws0****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the network interface controller (NIC) belongs.
   * 
   * @example
   * vpc-bp67acfmxazb4p****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      associatedPublicIp: 'AssociatedPublicIp',
      attachment: 'Attachment',
      bondInterfaceSpecification: 'BondInterfaceSpecification',
      connectionTrackingConfiguration: 'ConnectionTrackingConfiguration',
      creationTime: 'CreationTime',
      deleteOnRelease: 'DeleteOnRelease',
      description: 'Description',
      enhancedNetwork: 'EnhancedNetwork',
      instanceId: 'InstanceId',
      ipv4PrefixSets: 'Ipv4PrefixSets',
      ipv6PrefixSets: 'Ipv6PrefixSets',
      ipv6Sets: 'Ipv6Sets',
      macAddress: 'MacAddress',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceName: 'NetworkInterfaceName',
      networkInterfaceTrafficConfig: 'NetworkInterfaceTrafficConfig',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      ownerId: 'OwnerId',
      privateIpAddress: 'PrivateIpAddress',
      privateIpSets: 'PrivateIpSets',
      qoSConfig: 'QoSConfig',
      queueNumber: 'QueueNumber',
      queuePairNumber: 'QueuePairNumber',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupIds: 'SecurityGroupIds',
      serviceID: 'ServiceID',
      serviceManaged: 'ServiceManaged',
      slaveInterfaceSpecification: 'SlaveInterfaceSpecification',
      sourceDestCheck: 'SourceDestCheck',
      status: 'Status',
      tags: 'Tags',
      tcpOptionAddressEnabled: 'TcpOptionAddressEnabled',
      type: 'Type',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedPublicIp: DescribeNetworkInterfaceAttributeResponseBodyAssociatedPublicIp,
      attachment: DescribeNetworkInterfaceAttributeResponseBodyAttachment,
      bondInterfaceSpecification: DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecification,
      connectionTrackingConfiguration: DescribeNetworkInterfaceAttributeResponseBodyConnectionTrackingConfiguration,
      creationTime: 'string',
      deleteOnRelease: 'boolean',
      description: 'string',
      enhancedNetwork: DescribeNetworkInterfaceAttributeResponseBodyEnhancedNetwork,
      instanceId: 'string',
      ipv4PrefixSets: DescribeNetworkInterfaceAttributeResponseBodyIpv4PrefixSets,
      ipv6PrefixSets: DescribeNetworkInterfaceAttributeResponseBodyIpv6PrefixSets,
      ipv6Sets: DescribeNetworkInterfaceAttributeResponseBodyIpv6Sets,
      macAddress: 'string',
      networkInterfaceId: 'string',
      networkInterfaceName: 'string',
      networkInterfaceTrafficConfig: DescribeNetworkInterfaceAttributeResponseBodyNetworkInterfaceTrafficConfig,
      networkInterfaceTrafficMode: 'string',
      ownerId: 'string',
      privateIpAddress: 'string',
      privateIpSets: DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSets,
      qoSConfig: DescribeNetworkInterfaceAttributeResponseBodyQoSConfig,
      queueNumber: 'number',
      queuePairNumber: 'number',
      requestId: 'string',
      resourceGroupId: 'string',
      securityGroupIds: DescribeNetworkInterfaceAttributeResponseBodySecurityGroupIds,
      serviceID: 'number',
      serviceManaged: 'boolean',
      slaveInterfaceSpecification: DescribeNetworkInterfaceAttributeResponseBodySlaveInterfaceSpecification,
      sourceDestCheck: 'boolean',
      status: 'string',
      tags: DescribeNetworkInterfaceAttributeResponseBodyTags,
      tcpOptionAddressEnabled: 'string',
      type: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.associatedPublicIp && typeof (this.associatedPublicIp as any).validate === 'function') {
      (this.associatedPublicIp as any).validate();
    }
    if(this.attachment && typeof (this.attachment as any).validate === 'function') {
      (this.attachment as any).validate();
    }
    if(this.bondInterfaceSpecification && typeof (this.bondInterfaceSpecification as any).validate === 'function') {
      (this.bondInterfaceSpecification as any).validate();
    }
    if(this.connectionTrackingConfiguration && typeof (this.connectionTrackingConfiguration as any).validate === 'function') {
      (this.connectionTrackingConfiguration as any).validate();
    }
    if(this.enhancedNetwork && typeof (this.enhancedNetwork as any).validate === 'function') {
      (this.enhancedNetwork as any).validate();
    }
    if(this.ipv4PrefixSets && typeof (this.ipv4PrefixSets as any).validate === 'function') {
      (this.ipv4PrefixSets as any).validate();
    }
    if(this.ipv6PrefixSets && typeof (this.ipv6PrefixSets as any).validate === 'function') {
      (this.ipv6PrefixSets as any).validate();
    }
    if(this.ipv6Sets && typeof (this.ipv6Sets as any).validate === 'function') {
      (this.ipv6Sets as any).validate();
    }
    if(this.networkInterfaceTrafficConfig && typeof (this.networkInterfaceTrafficConfig as any).validate === 'function') {
      (this.networkInterfaceTrafficConfig as any).validate();
    }
    if(this.privateIpSets && typeof (this.privateIpSets as any).validate === 'function') {
      (this.privateIpSets as any).validate();
    }
    if(this.qoSConfig && typeof (this.qoSConfig as any).validate === 'function') {
      (this.qoSConfig as any).validate();
    }
    if(this.securityGroupIds && typeof (this.securityGroupIds as any).validate === 'function') {
      (this.securityGroupIds as any).validate();
    }
    if(this.slaveInterfaceSpecification && typeof (this.slaveInterfaceSpecification as any).validate === 'function') {
      (this.slaveInterfaceSpecification as any).validate();
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

