// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceAdditionalInfo extends $dara.Model {
  enableHighDensityMode?: boolean;
  nodeSerialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      enableHighDensityMode: 'EnableHighDensityMode',
      nodeSerialNumber: 'NodeSerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableHighDensityMode: 'boolean',
      nodeSerialNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceClockOptions extends $dara.Model {
  ptpStatus?: string;
  static names(): { [key: string]: string } {
    return {
      ptpStatus: 'PtpStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ptpStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceCpuOptions extends $dara.Model {
  coreCount?: number;
  enableVISST?: boolean;
  enableVRDT?: boolean;
  /**
   * @example
   * enabled
   */
  nestedVirtualization?: string;
  numa?: string;
  threadsPerCore?: number;
  topologyType?: string;
  turboMode?: string;
  static names(): { [key: string]: string } {
    return {
      coreCount: 'CoreCount',
      enableVISST: 'EnableVISST',
      enableVRDT: 'EnableVRDT',
      nestedVirtualization: 'NestedVirtualization',
      numa: 'Numa',
      threadsPerCore: 'ThreadsPerCore',
      topologyType: 'TopologyType',
      turboMode: 'TurboMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreCount: 'number',
      enableVISST: 'boolean',
      enableVRDT: 'boolean',
      nestedVirtualization: 'string',
      numa: 'string',
      threadsPerCore: 'number',
      topologyType: 'string',
      turboMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceDedicatedHostAttribute extends $dara.Model {
  dedicatedHostClusterId?: string;
  dedicatedHostId?: string;
  dedicatedHostName?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostClusterId: 'DedicatedHostClusterId',
      dedicatedHostId: 'DedicatedHostId',
      dedicatedHostName: 'DedicatedHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostClusterId: 'string',
      dedicatedHostId: 'string',
      dedicatedHostName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceDedicatedInstanceAttribute extends $dara.Model {
  affinity?: string;
  tenancy?: string;
  static names(): { [key: string]: string } {
    return {
      affinity: 'Affinity',
      tenancy: 'Tenancy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affinity: 'string',
      tenancy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceEcsCapacityReservationAttr extends $dara.Model {
  capacityReservationId?: string;
  capacityReservationPreference?: string;
  static names(): { [key: string]: string } {
    return {
      capacityReservationId: 'CapacityReservationId',
      capacityReservationPreference: 'CapacityReservationPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityReservationId: 'string',
      capacityReservationPreference: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceEipAddress extends $dara.Model {
  allocationId?: string;
  bandwidth?: number;
  internetChargeType?: string;
  ipAddress?: string;
  isSupportUnassociate?: boolean;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      bandwidth: 'Bandwidth',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
      isSupportUnassociate: 'IsSupportUnassociate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      bandwidth: 'number',
      internetChargeType: 'string',
      ipAddress: 'string',
      isSupportUnassociate: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceHibernationOptions extends $dara.Model {
  configured?: boolean;
  static names(): { [key: string]: string } {
    return {
      configured: 'Configured',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configured: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceImageOptions extends $dara.Model {
  currentOSNVMeSupported?: boolean;
  loginAsNonRoot?: boolean;
  static names(): { [key: string]: string } {
    return {
      currentOSNVMeSupported: 'CurrentOSNVMeSupported',
      loginAsNonRoot: 'LoginAsNonRoot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentOSNVMeSupported: 'boolean',
      loginAsNonRoot: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceInnerIpAddress extends $dara.Model {
  ipAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipAddress)) {
      $dara.Model.validateArray(this.ipAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceMetadataOptions extends $dara.Model {
  httpEndpoint?: string;
  httpPutResponseHopLimit?: number;
  httpTokens?: string;
  static names(): { [key: string]: string } {
    return {
      httpEndpoint: 'HttpEndpoint',
      httpPutResponseHopLimit: 'HttpPutResponseHopLimit',
      httpTokens: 'HttpTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpEndpoint: 'string',
      httpPutResponseHopLimit: 'number',
      httpTokens: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv4PrefixSetsIpv4PrefixSet extends $dara.Model {
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

export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv4PrefixSets extends $dara.Model {
  ipv4PrefixSet?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv4PrefixSetsIpv4PrefixSet[];
  static names(): { [key: string]: string } {
    return {
      ipv4PrefixSet: 'Ipv4PrefixSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4PrefixSet: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv4PrefixSetsIpv4PrefixSet },
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

export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6PrefixSetsIpv6PrefixSet extends $dara.Model {
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

export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6PrefixSets extends $dara.Model {
  ipv6PrefixSet?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6PrefixSetsIpv6PrefixSet[];
  static names(): { [key: string]: string } {
    return {
      ipv6PrefixSet: 'Ipv6PrefixSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6PrefixSet: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6PrefixSetsIpv6PrefixSet },
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

export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6SetsIpv6Set extends $dara.Model {
  ipv6Address?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6Address: 'Ipv6Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Address: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6Sets extends $dara.Model {
  ipv6Set?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6SetsIpv6Set[];
  static names(): { [key: string]: string } {
    return {
      ipv6Set: 'Ipv6Set',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Set: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6SetsIpv6Set },
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

export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacePrivateIpSetsPrivateIpSet extends $dara.Model {
  primary?: boolean;
  privateDnsName?: string;
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      primary: 'Primary',
      privateDnsName: 'PrivateDnsName',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primary: 'boolean',
      privateDnsName: 'string',
      privateIpAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacePrivateIpSets extends $dara.Model {
  privateIpSet?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacePrivateIpSetsPrivateIpSet[];
  static names(): { [key: string]: string } {
    return {
      privateIpSet: 'PrivateIpSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpSet: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacePrivateIpSetsPrivateIpSet },
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

export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterface extends $dara.Model {
  ipv4PrefixSets?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv4PrefixSets;
  ipv6PrefixSets?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6PrefixSets;
  ipv6Sets?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6Sets;
  macAddress?: string;
  networkInterfaceId?: string;
  primaryIpAddress?: string;
  privateIpSets?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacePrivateIpSets;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ipv4PrefixSets: 'Ipv4PrefixSets',
      ipv6PrefixSets: 'Ipv6PrefixSets',
      ipv6Sets: 'Ipv6Sets',
      macAddress: 'MacAddress',
      networkInterfaceId: 'NetworkInterfaceId',
      primaryIpAddress: 'PrimaryIpAddress',
      privateIpSets: 'PrivateIpSets',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4PrefixSets: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv4PrefixSets,
      ipv6PrefixSets: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6PrefixSets,
      ipv6Sets: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6Sets,
      macAddress: 'string',
      networkInterfaceId: 'string',
      primaryIpAddress: 'string',
      privateIpSets: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacePrivateIpSets,
      type: 'string',
    };
  }

  validate() {
    if(this.ipv4PrefixSets && typeof (this.ipv4PrefixSets as any).validate === 'function') {
      (this.ipv4PrefixSets as any).validate();
    }
    if(this.ipv6PrefixSets && typeof (this.ipv6PrefixSets as any).validate === 'function') {
      (this.ipv6PrefixSets as any).validate();
    }
    if(this.ipv6Sets && typeof (this.ipv6Sets as any).validate === 'function') {
      (this.ipv6Sets as any).validate();
    }
    if(this.privateIpSets && typeof (this.privateIpSets as any).validate === 'function') {
      (this.privateIpSets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfaces extends $dara.Model {
  networkInterface?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterface[];
  static names(): { [key: string]: string } {
    return {
      networkInterface: 'NetworkInterface',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterface: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterface },
    };
  }

  validate() {
    if(Array.isArray(this.networkInterface)) {
      $dara.Model.validateArray(this.networkInterface);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceOperationLocksLockReason extends $dara.Model {
  lockMsg?: string;
  lockReason?: string;
  static names(): { [key: string]: string } {
    return {
      lockMsg: 'LockMsg',
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockMsg: 'string',
      lockReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceOperationLocks extends $dara.Model {
  lockReason?: DescribeInstancesResponseBodyInstancesInstanceOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceOperationLocksLockReason },
    };
  }

  validate() {
    if(Array.isArray(this.lockReason)) {
      $dara.Model.validateArray(this.lockReason);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstancePrivateDnsNameOptions extends $dara.Model {
  enableInstanceIdDnsAAAARecord?: boolean;
  enableInstanceIdDnsARecord?: boolean;
  enableIpDnsARecord?: boolean;
  enableIpDnsPtrRecord?: boolean;
  hostnameType?: string;
  static names(): { [key: string]: string } {
    return {
      enableInstanceIdDnsAAAARecord: 'EnableInstanceIdDnsAAAARecord',
      enableInstanceIdDnsARecord: 'EnableInstanceIdDnsARecord',
      enableIpDnsARecord: 'EnableIpDnsARecord',
      enableIpDnsPtrRecord: 'EnableIpDnsPtrRecord',
      hostnameType: 'HostnameType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInstanceIdDnsAAAARecord: 'boolean',
      enableInstanceIdDnsARecord: 'boolean',
      enableIpDnsARecord: 'boolean',
      enableIpDnsPtrRecord: 'boolean',
      hostnameType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstancePublicIpAddress extends $dara.Model {
  ipAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipAddress)) {
      $dara.Model.validateArray(this.ipAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceRdmaIpAddress extends $dara.Model {
  ipAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipAddress)) {
      $dara.Model.validateArray(this.ipAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceSecurityGroupIds extends $dara.Model {
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

export class DescribeInstancesResponseBodyInstancesInstanceTagsTag extends $dara.Model {
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

export class DescribeInstancesResponseBodyInstancesInstanceTags extends $dara.Model {
  tag?: DescribeInstancesResponseBodyInstancesInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceTagsTag },
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

export class DescribeInstancesResponseBodyInstancesInstanceVpcAttributesPrivateIpAddress extends $dara.Model {
  ipAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipAddress)) {
      $dara.Model.validateArray(this.ipAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceVpcAttributes extends $dara.Model {
  natIpAddress?: string;
  privateIpAddress?: DescribeInstancesResponseBodyInstancesInstanceVpcAttributesPrivateIpAddress;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      natIpAddress: 'NatIpAddress',
      privateIpAddress: 'PrivateIpAddress',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natIpAddress: 'string',
      privateIpAddress: DescribeInstancesResponseBodyInstancesInstanceVpcAttributesPrivateIpAddress,
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.privateIpAddress && typeof (this.privateIpAddress as any).validate === 'function') {
      (this.privateIpAddress as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstance extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  additionalInfo?: DescribeInstancesResponseBodyInstancesInstanceAdditionalInfo;
  autoReleaseTime?: string;
  clockOptions?: DescribeInstancesResponseBodyInstancesInstanceClockOptions;
  clusterId?: string;
  cpu?: number;
  cpuOptions?: DescribeInstancesResponseBodyInstancesInstanceCpuOptions;
  creationTime?: string;
  creditSpecification?: string;
  dedicatedHostAttribute?: DescribeInstancesResponseBodyInstancesInstanceDedicatedHostAttribute;
  dedicatedInstanceAttribute?: DescribeInstancesResponseBodyInstancesInstanceDedicatedInstanceAttribute;
  deletionProtection?: boolean;
  deploymentSetGroupNo?: number;
  deploymentSetId?: string;
  description?: string;
  deviceAvailable?: boolean;
  ecsCapacityReservationAttr?: DescribeInstancesResponseBodyInstancesInstanceEcsCapacityReservationAttr;
  eipAddress?: DescribeInstancesResponseBodyInstancesInstanceEipAddress;
  enableNVS?: boolean;
  expiredTime?: string;
  GPUAmount?: number;
  GPUSpec?: string;
  hibernationOptions?: DescribeInstancesResponseBodyInstancesInstanceHibernationOptions;
  hostName?: string;
  hpcClusterId?: string;
  ISP?: string;
  imageId?: string;
  imageOptions?: DescribeInstancesResponseBodyInstancesInstanceImageOptions;
  innerIpAddress?: DescribeInstancesResponseBodyInstancesInstanceInnerIpAddress;
  instanceChargeType?: string;
  instanceId?: string;
  instanceName?: string;
  instanceNetworkType?: string;
  instanceType?: string;
  instanceTypeFamily?: string;
  internetChargeType?: string;
  internetMaxBandwidthIn?: number;
  internetMaxBandwidthOut?: number;
  ioOptimized?: boolean;
  keyPairName?: string;
  localStorageAmount?: number;
  localStorageCapacity?: number;
  memory?: number;
  metadataOptions?: DescribeInstancesResponseBodyInstancesInstanceMetadataOptions;
  networkInterfaces?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfaces;
  OSName?: string;
  OSNameEn?: string;
  OSType?: string;
  operationLocks?: DescribeInstancesResponseBodyInstancesInstanceOperationLocks;
  privateDnsNameOptions?: DescribeInstancesResponseBodyInstancesInstancePrivateDnsNameOptions;
  publicIpAddress?: DescribeInstancesResponseBodyInstancesInstancePublicIpAddress;
  rdmaIpAddress?: DescribeInstancesResponseBodyInstancesInstanceRdmaIpAddress;
  recyclable?: boolean;
  regionId?: string;
  resourceGroupId?: string;
  saleCycle?: string;
  securityGroupIds?: DescribeInstancesResponseBodyInstancesInstanceSecurityGroupIds;
  serialNumber?: string;
  spotDuration?: number;
  spotInterruptionBehavior?: string;
  spotPriceLimit?: number;
  spotStrategy?: string;
  startTime?: string;
  status?: string;
  stoppedMode?: string;
  tags?: DescribeInstancesResponseBodyInstancesInstanceTags;
  vlanId?: string;
  vpcAttributes?: DescribeInstancesResponseBodyInstancesInstanceVpcAttributes;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalInfo: 'AdditionalInfo',
      autoReleaseTime: 'AutoReleaseTime',
      clockOptions: 'ClockOptions',
      clusterId: 'ClusterId',
      cpu: 'Cpu',
      cpuOptions: 'CpuOptions',
      creationTime: 'CreationTime',
      creditSpecification: 'CreditSpecification',
      dedicatedHostAttribute: 'DedicatedHostAttribute',
      dedicatedInstanceAttribute: 'DedicatedInstanceAttribute',
      deletionProtection: 'DeletionProtection',
      deploymentSetGroupNo: 'DeploymentSetGroupNo',
      deploymentSetId: 'DeploymentSetId',
      description: 'Description',
      deviceAvailable: 'DeviceAvailable',
      ecsCapacityReservationAttr: 'EcsCapacityReservationAttr',
      eipAddress: 'EipAddress',
      enableNVS: 'EnableNVS',
      expiredTime: 'ExpiredTime',
      GPUAmount: 'GPUAmount',
      GPUSpec: 'GPUSpec',
      hibernationOptions: 'HibernationOptions',
      hostName: 'HostName',
      hpcClusterId: 'HpcClusterId',
      ISP: 'ISP',
      imageId: 'ImageId',
      imageOptions: 'ImageOptions',
      innerIpAddress: 'InnerIpAddress',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceNetworkType: 'InstanceNetworkType',
      instanceType: 'InstanceType',
      instanceTypeFamily: 'InstanceTypeFamily',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      keyPairName: 'KeyPairName',
      localStorageAmount: 'LocalStorageAmount',
      localStorageCapacity: 'LocalStorageCapacity',
      memory: 'Memory',
      metadataOptions: 'MetadataOptions',
      networkInterfaces: 'NetworkInterfaces',
      OSName: 'OSName',
      OSNameEn: 'OSNameEn',
      OSType: 'OSType',
      operationLocks: 'OperationLocks',
      privateDnsNameOptions: 'PrivateDnsNameOptions',
      publicIpAddress: 'PublicIpAddress',
      rdmaIpAddress: 'RdmaIpAddress',
      recyclable: 'Recyclable',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      saleCycle: 'SaleCycle',
      securityGroupIds: 'SecurityGroupIds',
      serialNumber: 'SerialNumber',
      spotDuration: 'SpotDuration',
      spotInterruptionBehavior: 'SpotInterruptionBehavior',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      startTime: 'StartTime',
      status: 'Status',
      stoppedMode: 'StoppedMode',
      tags: 'Tags',
      vlanId: 'VlanId',
      vpcAttributes: 'VpcAttributes',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalInfo: DescribeInstancesResponseBodyInstancesInstanceAdditionalInfo,
      autoReleaseTime: 'string',
      clockOptions: DescribeInstancesResponseBodyInstancesInstanceClockOptions,
      clusterId: 'string',
      cpu: 'number',
      cpuOptions: DescribeInstancesResponseBodyInstancesInstanceCpuOptions,
      creationTime: 'string',
      creditSpecification: 'string',
      dedicatedHostAttribute: DescribeInstancesResponseBodyInstancesInstanceDedicatedHostAttribute,
      dedicatedInstanceAttribute: DescribeInstancesResponseBodyInstancesInstanceDedicatedInstanceAttribute,
      deletionProtection: 'boolean',
      deploymentSetGroupNo: 'number',
      deploymentSetId: 'string',
      description: 'string',
      deviceAvailable: 'boolean',
      ecsCapacityReservationAttr: DescribeInstancesResponseBodyInstancesInstanceEcsCapacityReservationAttr,
      eipAddress: DescribeInstancesResponseBodyInstancesInstanceEipAddress,
      enableNVS: 'boolean',
      expiredTime: 'string',
      GPUAmount: 'number',
      GPUSpec: 'string',
      hibernationOptions: DescribeInstancesResponseBodyInstancesInstanceHibernationOptions,
      hostName: 'string',
      hpcClusterId: 'string',
      ISP: 'string',
      imageId: 'string',
      imageOptions: DescribeInstancesResponseBodyInstancesInstanceImageOptions,
      innerIpAddress: DescribeInstancesResponseBodyInstancesInstanceInnerIpAddress,
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceNetworkType: 'string',
      instanceType: 'string',
      instanceTypeFamily: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'boolean',
      keyPairName: 'string',
      localStorageAmount: 'number',
      localStorageCapacity: 'number',
      memory: 'number',
      metadataOptions: DescribeInstancesResponseBodyInstancesInstanceMetadataOptions,
      networkInterfaces: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfaces,
      OSName: 'string',
      OSNameEn: 'string',
      OSType: 'string',
      operationLocks: DescribeInstancesResponseBodyInstancesInstanceOperationLocks,
      privateDnsNameOptions: DescribeInstancesResponseBodyInstancesInstancePrivateDnsNameOptions,
      publicIpAddress: DescribeInstancesResponseBodyInstancesInstancePublicIpAddress,
      rdmaIpAddress: DescribeInstancesResponseBodyInstancesInstanceRdmaIpAddress,
      recyclable: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      saleCycle: 'string',
      securityGroupIds: DescribeInstancesResponseBodyInstancesInstanceSecurityGroupIds,
      serialNumber: 'string',
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      startTime: 'string',
      status: 'string',
      stoppedMode: 'string',
      tags: DescribeInstancesResponseBodyInstancesInstanceTags,
      vlanId: 'string',
      vpcAttributes: DescribeInstancesResponseBodyInstancesInstanceVpcAttributes,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.additionalInfo && typeof (this.additionalInfo as any).validate === 'function') {
      (this.additionalInfo as any).validate();
    }
    if(this.clockOptions && typeof (this.clockOptions as any).validate === 'function') {
      (this.clockOptions as any).validate();
    }
    if(this.cpuOptions && typeof (this.cpuOptions as any).validate === 'function') {
      (this.cpuOptions as any).validate();
    }
    if(this.dedicatedHostAttribute && typeof (this.dedicatedHostAttribute as any).validate === 'function') {
      (this.dedicatedHostAttribute as any).validate();
    }
    if(this.dedicatedInstanceAttribute && typeof (this.dedicatedInstanceAttribute as any).validate === 'function') {
      (this.dedicatedInstanceAttribute as any).validate();
    }
    if(this.ecsCapacityReservationAttr && typeof (this.ecsCapacityReservationAttr as any).validate === 'function') {
      (this.ecsCapacityReservationAttr as any).validate();
    }
    if(this.eipAddress && typeof (this.eipAddress as any).validate === 'function') {
      (this.eipAddress as any).validate();
    }
    if(this.hibernationOptions && typeof (this.hibernationOptions as any).validate === 'function') {
      (this.hibernationOptions as any).validate();
    }
    if(this.imageOptions && typeof (this.imageOptions as any).validate === 'function') {
      (this.imageOptions as any).validate();
    }
    if(this.innerIpAddress && typeof (this.innerIpAddress as any).validate === 'function') {
      (this.innerIpAddress as any).validate();
    }
    if(this.metadataOptions && typeof (this.metadataOptions as any).validate === 'function') {
      (this.metadataOptions as any).validate();
    }
    if(this.networkInterfaces && typeof (this.networkInterfaces as any).validate === 'function') {
      (this.networkInterfaces as any).validate();
    }
    if(this.operationLocks && typeof (this.operationLocks as any).validate === 'function') {
      (this.operationLocks as any).validate();
    }
    if(this.privateDnsNameOptions && typeof (this.privateDnsNameOptions as any).validate === 'function') {
      (this.privateDnsNameOptions as any).validate();
    }
    if(this.publicIpAddress && typeof (this.publicIpAddress as any).validate === 'function') {
      (this.publicIpAddress as any).validate();
    }
    if(this.rdmaIpAddress && typeof (this.rdmaIpAddress as any).validate === 'function') {
      (this.rdmaIpAddress as any).validate();
    }
    if(this.securityGroupIds && typeof (this.securityGroupIds as any).validate === 'function') {
      (this.securityGroupIds as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.vpcAttributes && typeof (this.vpcAttributes as any).validate === 'function') {
      (this.vpcAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstances extends $dara.Model {
  instance?: DescribeInstancesResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $dara.Model {
  instances?: DescribeInstancesResponseBodyInstances;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances queried.
   * 
   * >  If you specify the `MaxResults` and `NextToken` request parameters to perform a paged query, the value of the `TotalCount` response parameter is invalid.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeInstancesResponseBodyInstances,
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instances && typeof (this.instances as any).validate === 'function') {
      (this.instances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

