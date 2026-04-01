// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceDataDiskDataDisk extends $dara.Model {
  category?: string;
  diskId?: string;
  diskName?: string;
  diskSize?: number;
  encryptKeyId?: string;
  encrypted?: boolean;
  size?: number;
  deviceType?: string;
  diskType?: string;
  name?: string;
  storage?: number;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      diskId: 'DiskId',
      diskName: 'DiskName',
      diskSize: 'DiskSize',
      encryptKeyId: 'EncryptKeyId',
      encrypted: 'Encrypted',
      size: 'Size',
      deviceType: 'device_type',
      diskType: 'disk_type',
      name: 'name',
      storage: 'storage',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      diskId: 'string',
      diskName: 'string',
      diskSize: 'number',
      encryptKeyId: 'string',
      encrypted: 'boolean',
      size: 'number',
      deviceType: 'string',
      diskType: 'string',
      name: 'string',
      storage: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceDataDisk extends $dara.Model {
  dataDisk?: DescribeInstancesResponseBodyInstancesInstanceDataDiskDataDisk[];
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceDataDiskDataDisk },
    };
  }

  validate() {
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
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

export class DescribeInstancesResponseBodyInstancesInstanceNetworkAttributesPrivateIpAddress extends $dara.Model {
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

export class DescribeInstancesResponseBodyInstancesInstanceNetworkAttributes extends $dara.Model {
  networkId?: string;
  privateIpAddress?: DescribeInstancesResponseBodyInstancesInstanceNetworkAttributesPrivateIpAddress;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      networkId: 'NetworkId',
      privateIpAddress: 'PrivateIpAddress',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkId: 'string',
      privateIpAddress: DescribeInstancesResponseBodyInstancesInstanceNetworkAttributesPrivateIpAddress,
      vSwitchId: 'string',
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

export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesIpv6SetsIpv6Set extends $dara.Model {
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

export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesIpv6Sets extends $dara.Model {
  ipv6Set?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesIpv6SetsIpv6Set[];
  static names(): { [key: string]: string } {
    return {
      ipv6Set: 'Ipv6Set',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Set: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesIpv6SetsIpv6Set },
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

export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesPrivateIpSetsPrivateIpSet extends $dara.Model {
  primary?: boolean;
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      primary: 'Primary',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primary: 'boolean',
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

export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesPrivateIpSets extends $dara.Model {
  privateIpSet?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesPrivateIpSetsPrivateIpSet[];
  static names(): { [key: string]: string } {
    return {
      privateIpSet: 'PrivateIpSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpSet: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesPrivateIpSetsPrivateIpSet },
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

export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaces extends $dara.Model {
  ipv6Sets?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesIpv6Sets;
  macAddress?: string;
  networkInterfaceId?: string;
  primaryIpAddress?: string;
  privateIpSets?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesPrivateIpSets;
  type?: string;
  static names(): { [key: string]: string } {
    return {
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
      ipv6Sets: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesIpv6Sets,
      macAddress: 'string',
      networkInterfaceId: 'string',
      primaryIpAddress: 'string',
      privateIpSets: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesPrivateIpSets,
      type: 'string',
    };
  }

  validate() {
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
  networkInterfaces?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaces[];
  static names(): { [key: string]: string } {
    return {
      networkInterfaces: 'NetworkInterfaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaces: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaces },
    };
  }

  validate() {
    if(Array.isArray(this.networkInterfaces)) {
      $dara.Model.validateArray(this.networkInterfaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstancePrivateIpAddressesPrivateIpAddress extends $dara.Model {
  gateWay?: string;
  ip?: string;
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      gateWay: 'GateWay',
      ip: 'Ip',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gateWay: 'string',
      ip: 'string',
      isp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstancePrivateIpAddresses extends $dara.Model {
  privateIpAddress?: DescribeInstancesResponseBodyInstancesInstancePrivateIpAddressesPrivateIpAddress[];
  static names(): { [key: string]: string } {
    return {
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpAddress: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstancePrivateIpAddressesPrivateIpAddress },
    };
  }

  validate() {
    if(Array.isArray(this.privateIpAddress)) {
      $dara.Model.validateArray(this.privateIpAddress);
    }
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

export class DescribeInstancesResponseBodyInstancesInstancePublicIpAddressesPublicIpAddress extends $dara.Model {
  gateWay?: string;
  ip?: string;
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      gateWay: 'GateWay',
      ip: 'Ip',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gateWay: 'string',
      ip: 'string',
      isp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstancePublicIpAddresses extends $dara.Model {
  publicIpAddress?: DescribeInstancesResponseBodyInstancesInstancePublicIpAddressesPublicIpAddress[];
  static names(): { [key: string]: string } {
    return {
      publicIpAddress: 'PublicIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIpAddress: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstancePublicIpAddressesPublicIpAddress },
    };
  }

  validate() {
    if(Array.isArray(this.publicIpAddress)) {
      $dara.Model.validateArray(this.publicIpAddress);
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

export class DescribeInstancesResponseBodyInstancesInstanceSystemDisk extends $dara.Model {
  category?: string;
  diskId?: string;
  diskName?: string;
  size?: number;
  deviceType?: string;
  diskType?: string;
  name?: string;
  storage?: number;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      diskId: 'DiskId',
      diskName: 'DiskName',
      size: 'Size',
      deviceType: 'device_type',
      diskType: 'disk_type',
      name: 'name',
      storage: 'storage',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      diskId: 'string',
      diskName: 'string',
      size: 'number',
      deviceType: 'string',
      diskType: 'string',
      name: 'string',
      storage: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceTagsTags extends $dara.Model {
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
  tags?: DescribeInstancesResponseBodyInstancesInstanceTagsTags[];
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceTagsTags },
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

export class DescribeInstancesResponseBodyInstancesInstance extends $dara.Model {
  autoReleaseTime?: string;
  cpu?: string;
  creationTime?: string;
  dataDisk?: DescribeInstancesResponseBodyInstancesInstanceDataDisk;
  deletionProtection?: boolean;
  disk?: number;
  ensRegionId?: string;
  expiredTime?: string;
  hostName?: string;
  imageId?: string;
  innerIpAddress?: DescribeInstancesResponseBodyInstancesInstanceInnerIpAddress;
  instanceId?: string;
  instanceName?: string;
  instanceResourceType?: string;
  instanceTypeFamily?: string;
  internetMaxBandwidthIn?: number;
  internetMaxBandwidthOut?: number;
  keyPairName?: string;
  memory?: number;
  networkAttributes?: DescribeInstancesResponseBodyInstancesInstanceNetworkAttributes;
  networkInterfaces?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfaces;
  OSName?: string;
  privateIpAddresses?: DescribeInstancesResponseBodyInstancesInstancePrivateIpAddresses;
  publicIpAddress?: DescribeInstancesResponseBodyInstancesInstancePublicIpAddress;
  publicIpAddresses?: DescribeInstancesResponseBodyInstancesInstancePublicIpAddresses;
  securityGroupIds?: DescribeInstancesResponseBodyInstancesInstanceSecurityGroupIds;
  serviceStatus?: string;
  specName?: string;
  spotStrategy?: string;
  status?: string;
  systemDisk?: DescribeInstancesResponseBodyInstancesInstanceSystemDisk;
  tags?: DescribeInstancesResponseBodyInstancesInstanceTags;
  static names(): { [key: string]: string } {
    return {
      autoReleaseTime: 'AutoReleaseTime',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      dataDisk: 'DataDisk',
      deletionProtection: 'DeletionProtection',
      disk: 'Disk',
      ensRegionId: 'EnsRegionId',
      expiredTime: 'ExpiredTime',
      hostName: 'HostName',
      imageId: 'ImageId',
      innerIpAddress: 'InnerIpAddress',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceResourceType: 'InstanceResourceType',
      instanceTypeFamily: 'InstanceTypeFamily',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      keyPairName: 'KeyPairName',
      memory: 'Memory',
      networkAttributes: 'NetworkAttributes',
      networkInterfaces: 'NetworkInterfaces',
      OSName: 'OSName',
      privateIpAddresses: 'PrivateIpAddresses',
      publicIpAddress: 'PublicIpAddress',
      publicIpAddresses: 'PublicIpAddresses',
      securityGroupIds: 'SecurityGroupIds',
      serviceStatus: 'ServiceStatus',
      specName: 'SpecName',
      spotStrategy: 'SpotStrategy',
      status: 'Status',
      systemDisk: 'SystemDisk',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReleaseTime: 'string',
      cpu: 'string',
      creationTime: 'string',
      dataDisk: DescribeInstancesResponseBodyInstancesInstanceDataDisk,
      deletionProtection: 'boolean',
      disk: 'number',
      ensRegionId: 'string',
      expiredTime: 'string',
      hostName: 'string',
      imageId: 'string',
      innerIpAddress: DescribeInstancesResponseBodyInstancesInstanceInnerIpAddress,
      instanceId: 'string',
      instanceName: 'string',
      instanceResourceType: 'string',
      instanceTypeFamily: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      keyPairName: 'string',
      memory: 'number',
      networkAttributes: DescribeInstancesResponseBodyInstancesInstanceNetworkAttributes,
      networkInterfaces: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfaces,
      OSName: 'string',
      privateIpAddresses: DescribeInstancesResponseBodyInstancesInstancePrivateIpAddresses,
      publicIpAddress: DescribeInstancesResponseBodyInstancesInstancePublicIpAddress,
      publicIpAddresses: DescribeInstancesResponseBodyInstancesInstancePublicIpAddresses,
      securityGroupIds: DescribeInstancesResponseBodyInstancesInstanceSecurityGroupIds,
      serviceStatus: 'string',
      specName: 'string',
      spotStrategy: 'string',
      status: 'string',
      systemDisk: DescribeInstancesResponseBodyInstancesInstanceSystemDisk,
      tags: DescribeInstancesResponseBodyInstancesInstanceTags,
    };
  }

  validate() {
    if(this.dataDisk && typeof (this.dataDisk as any).validate === 'function') {
      (this.dataDisk as any).validate();
    }
    if(this.innerIpAddress && typeof (this.innerIpAddress as any).validate === 'function') {
      (this.innerIpAddress as any).validate();
    }
    if(this.networkAttributes && typeof (this.networkAttributes as any).validate === 'function') {
      (this.networkAttributes as any).validate();
    }
    if(this.networkInterfaces && typeof (this.networkInterfaces as any).validate === 'function') {
      (this.networkInterfaces as any).validate();
    }
    if(this.privateIpAddresses && typeof (this.privateIpAddresses as any).validate === 'function') {
      (this.privateIpAddresses as any).validate();
    }
    if(this.publicIpAddress && typeof (this.publicIpAddress as any).validate === 'function') {
      (this.publicIpAddress as any).validate();
    }
    if(this.publicIpAddresses && typeof (this.publicIpAddresses as any).validate === 'function') {
      (this.publicIpAddresses as any).validate();
    }
    if(this.securityGroupIds && typeof (this.securityGroupIds as any).validate === 'function') {
      (this.securityGroupIds as any).validate();
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
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
  /**
   * @remarks
   * The returned service code. 0 indicates that the request was successful.
   * 
   * @example
   * 0
   */
  code?: number;
  instances?: DescribeInstancesResponseBodyInstances;
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
   * 60
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
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instances: DescribeInstancesResponseBodyInstances,
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

