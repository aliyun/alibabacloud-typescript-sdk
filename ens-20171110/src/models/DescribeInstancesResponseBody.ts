// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceDataDiskDataDisk extends $dara.Model {
  /**
   * @remarks
   * The category of the cloud disk or local disk. Valid values:
   * 
   * *   **file**: local disk.
   * *   **pangu**: ultra disk.
   * *   **local_hdd**: local HDD.
   * 
   * @example
   * file
   */
  category?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-5ip4c2dhmas0vjd5u1r****
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * DiskName
   */
  diskName?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 100
   */
  diskSize?: number;
  /**
   * @remarks
   * The KMS key ID used by the cloud drive.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fxxxxx
   */
  encryptKeyId?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the disk.
   * 
   * @example
   * true
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The size of the disk. Unit: MiB.
   * 
   * @example
   * 51200
   */
  size?: number;
  /**
   * @remarks
   * The extended field of the disk category. Valid values:
   * 
   * *   **file**: local disk.
   * *   **pangu**: ultra disk.
   * *   **local_hdd**: local HDD.
   * 
   * @example
   * pangu
   */
  deviceType?: string;
  /**
   * @remarks
   * The type of the cloud disk or local disk. Valid values:
   * 
   * **system**: system disk. **data**: data disk.
   * 
   * @example
   * system
   */
  diskType?: string;
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The size of the disk. Unit: MiB.
   * 
   * @example
   * 20480
   */
  storage?: number;
  /**
   * @remarks
   * The UUID of the disk.
   * 
   * @example
   * d-5itef1wtxj961mbff8xe9****
   */
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
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * n-2zeuphj08tt7q3brd****
   */
  networkId?: string;
  /**
   * @remarks
   * Details of the private IP addresses.
   */
  privateIpAddress?: DescribeInstancesResponseBodyInstancesInstanceNetworkAttributesPrivateIpAddress;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2zeh0r1pabwtg6wcs****
   */
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
  /**
   * @remarks
   * IPv6 addresses N of the ENI. You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
   * 
   * @example
   * 2408:4005:396:3200:****:6609:821e:df7a
   */
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
  /**
   * @remarks
   * Indicates whether the IP address is the primary private IP address. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  primary?: boolean;
  /**
   * @remarks
   * The private IP address.
   * 
   * >  This parameter is available only if ScheduleAreaLevel is set to Region and cannot be configured if ScheduleAreaLevel is set to other values. Otherwise, an error occurs. If you specify a private IP address, the number of instances must be 1. The private IP address takes effect only when the private IP address and the vSwitch ID are not empty.
   * 
   * @example
   * 10.75.66.***
   */
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
  /**
   * @remarks
   * The IPv6 addresses of the ENI. This parameter has a value only when `AdditionalAttributes.N` is set to `NETWORK_PRIMARY_ENI_IP`.
   */
  ipv6Sets?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesIpv6Sets;
  /**
   * @remarks
   * The MAC address of the ENI.
   * 
   * @example
   * 00:16:3e:4f:5f:ca
   */
  macAddress?: string;
  /**
   * @remarks
   * The ID of the ENI.
   * 
   * @example
   * eni-0wlonoy6jo8532gfzuama****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The primary IP address of the ENI.
   * 
   * @example
   * ***************
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * The private IP addresses of the ENI.
   */
  privateIpSets?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesPrivateIpSets;
  /**
   * @remarks
   * The type of the disk. Valid values:
   * 
   * *   system: system disk.
   * *   data: data disk.
   * 
   * @example
   * Secondary
   */
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
  /**
   * @remarks
   * The gateway.
   * 
   * @example
   * 119.147.xx.xx
   */
  gateWay?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 119.147.xx.xx
   */
  ip?: string;
  /**
   * @remarks
   * The ISP.
   * 
   * @example
   * cmcc
   */
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
  /**
   * @remarks
   * The gateway.
   * 
   * @example
   * 119.147.xx.xx
   */
  gateWay?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 119.147.xx.xx
   */
  ip?: string;
  /**
   * @remarks
   * The Internet service provider (ISP).
   * 
   * @example
   * unicom
   */
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
  /**
   * @remarks
   * The category of the cloud disk or local disk. Valid values:
   * 
   * *   **file**: local disk.
   * *   **pangu**: ultra disk.
   * *   **local_hdd**: local HDD.
   * 
   * @example
   * file
   */
  category?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-5ip4c2dhmas0rn7rt0p9****
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * DiskName
   */
  diskName?: string;
  /**
   * @remarks
   * The size of the disk. Unit: MiB.
   * 
   * @example
   * 51200
   */
  size?: number;
  /**
   * @remarks
   * The extended field of the disk category. Valid values:
   * 
   * *   **file**: local disk.
   * *   **pangu**: ultra disk.
   * *   **local_hdd**: local HDD.
   * 
   * @example
   * pangu
   */
  deviceType?: string;
  /**
   * @remarks
   * The type of the cloud disk or local disk. Valid values:
   * 
   * *   **system**: system disk.
   * *   **data**: data disk.
   * 
   * @example
   * system
   */
  diskType?: string;
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * DiskName
   */
  name?: string;
  /**
   * @remarks
   * The size of the disk. Unit: MiB.
   * 
   * @example
   * 20480
   */
  storage?: number;
  /**
   * @remarks
   * The UUID of the disk.
   * 
   * @example
   * d-5ip4c2dhmas0rn7rt0p96****
   */
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
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
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
  /**
   * @remarks
   * The automatic release time of the instance.
   * 
   * @example
   * 2023-06-28T14:38:52Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 2
   */
  cpu?: string;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-07-26T06:40:43Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Details of the data disk.
   */
  dataDisk?: DescribeInstancesResponseBodyInstancesInstanceDataDisk;
  deletionProtection?: boolean;
  /**
   * @remarks
   * The total size of the disk. Unit: MiB.
   * 
   * @example
   * 71680
   */
  disk?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The expiration time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2119-07-13T02:38:57Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The hostname of the instance.
   * 
   * *   The hostname cannot start or end with a period (.) or hyphen (-). It cannot contain consecutive periods (.) or hyphens (-).
   * *   For a Windows instance, the hostname must be 2 to 15 characters in length and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits.
   * *   For an instance that runs another operating system such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate the hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
   * 
   * @example
   * testHostName
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-****
   */
  imageId?: string;
  /**
   * @remarks
   * The private IP addresses of the instances.
   */
  innerIpAddress?: DescribeInstancesResponseBodyInstancesInstanceInnerIpAddress;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-instanc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * i-5itef0f28t17bcdw9deu6meub
   */
  instanceName?: string;
  /**
   * @remarks
   * The category of the instance. Valid values:
   * 
   * *   EnsInstance: ENS instances that you purchase.
   * *   EnsService: ENS instances that belong to edge services.
   * *   BuildMachine: ENS instances that are configured with image builders.
   * *   EnsPostPaidInstance: pay-as-you-go ENS instances that you purchase.
   * 
   * @example
   * EnsService
   */
  instanceResourceType?: string;
  /**
   * @remarks
   * The instance family. Valid values:
   * 
   * *   x86_vm: x86-based computing instance.
   * *   x86_pm: x86-based physical machine.
   * *   x86_bmi: x86-based bare metal instance.
   * *   x86_bm: bare metal instance with the SmartNIC.
   * *   pc_bmi: heterogeneous bare metal instance.
   * *   pc_vm: heterogeneous virtual machine.
   * *   arm_bmi: Arm-based computing instance.
   * 
   * @example
   * x86_vm
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The maximum outbound bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 40
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The minimum inbound bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The name of the SSH key pair.
   * 
   * @example
   * terraform-example
   */
  keyPairName?: string;
  /**
   * @remarks
   * The memory size. Unit: MB.
   * 
   * @example
   * 2048
   */
  memory?: number;
  /**
   * @remarks
   * Details of the network.
   */
  networkAttributes?: DescribeInstancesResponseBodyInstancesInstanceNetworkAttributes;
  /**
   * @remarks
   * The ENI attached to the instance.
   */
  networkInterfaces?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfaces;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * centos 6.8 x86_64
   */
  OSName?: string;
  /**
   * @remarks
   * Details of the private IP addresses.
   */
  privateIpAddresses?: DescribeInstancesResponseBodyInstancesInstancePrivateIpAddresses;
  /**
   * @remarks
   * The public IP addresses of the instances.
   */
  publicIpAddress?: DescribeInstancesResponseBodyInstancesInstancePublicIpAddress;
  /**
   * @remarks
   * Details of the public IP addresses.
   */
  publicIpAddresses?: DescribeInstancesResponseBodyInstancesInstancePublicIpAddresses;
  /**
   * @remarks
   * The IDs of the security groups.
   */
  securityGroupIds?: DescribeInstancesResponseBodyInstancesInstanceSecurityGroupIds;
  /**
   * @remarks
   * The ID of your Alibaba Cloud account.
   * 
   * @example
   * Deleting
   */
  serviceStatus?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ens.sn1.stiny
   */
  specName?: string;
  /**
   * @remarks
   * The bidding policy of the preemptible instance.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   Running
   * *   Expired
   * *   Stopped
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Details of the system disk.
   */
  systemDisk?: DescribeInstancesResponseBodyInstancesInstanceSystemDisk;
  /**
   * @remarks
   * The tags of the instance.
   * 
   * >  This operation does not return tag information. You can call this operation in combination with the tag-related operations.
   */
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
  /**
   * @remarks
   * The information about the instance is returned in an array of InstanceAttributesType.
   */
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

