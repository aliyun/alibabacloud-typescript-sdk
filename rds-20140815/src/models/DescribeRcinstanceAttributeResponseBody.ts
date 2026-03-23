// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceAttributeResponseBodyDataDisksDataDisk extends $dara.Model {
  category?: string;
  deleteWithInstance?: boolean;
  /**
   * @example
   * /dev/xvdb
   */
  device?: string;
  encrypted?: string;
  performanceLevel?: string;
  size?: number;
  /**
   * @example
   * rcds-bp18um4r4f2fve24**
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      device: 'Device',
      encrypted: 'Encrypted',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deleteWithInstance: 'boolean',
      device: 'string',
      encrypted: 'string',
      performanceLevel: 'string',
      size: 'number',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCInstanceAttributeResponseBodyDataDisks extends $dara.Model {
  dataDisk?: DescribeRCInstanceAttributeResponseBodyDataDisksDataDisk[];
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': DescribeRCInstanceAttributeResponseBodyDataDisksDataDisk },
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

export class DescribeRCInstanceAttributeResponseBodyDedicatedHostAttribute extends $dara.Model {
  /**
   * @remarks
   * The ID of the dedicated host.
   * 
   * @example
   * None
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The name of the dedicated host.
   * 
   * @example
   * None
   */
  dedicatedHostName?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      dedicatedHostName: 'DedicatedHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeRCInstanceAttributeResponseBodyEipAddress extends $dara.Model {
  /**
   * @remarks
   * The EIP ID.
   * 
   * @example
   * eip-bp14k3rz6cbg6zxbe****
   */
  allocationId?: string;
  /**
   * @remarks
   * The maximum Internet bandwidth of the EIP. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billing method of the Internet-facing instance. Valid values:
   * 
   * *   **paybytraffic:** pay-by-data-transfer
   * *   **paybybandwidth**: pay-by-bandwidth
   * 
   * >  If the **pay-by-traffic** billing method is used for network usage, the maximum inbound and outbound bandwidths are used as the upper limits of bandwidths instead of guaranteed performance specifications. In scenarios in which demands exceed resource supplies, the maximum bandwidths may not be reached. If you want guaranteed bandwidths for your instance, use the **pay-by-bandwidth** billing method for network usage.
   * 
   * @example
   * paybytraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The EIP.
   * 
   * @example
   * 8.147.XXX.XXX
   */
  ipAddress?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      bandwidth: 'Bandwidth',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      bandwidth: 'number',
      internetChargeType: 'string',
      ipAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCInstanceAttributeResponseBodyInnerIpAddress extends $dara.Model {
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

export class DescribeRCInstanceAttributeResponseBodyOperationLocksLockReason extends $dara.Model {
  lockReason?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeRCInstanceAttributeResponseBodyOperationLocks extends $dara.Model {
  lockReason?: DescribeRCInstanceAttributeResponseBodyOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeRCInstanceAttributeResponseBodyOperationLocksLockReason },
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

export class DescribeRCInstanceAttributeResponseBodyPublicIpAddress extends $dara.Model {
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

export class DescribeRCInstanceAttributeResponseBodySecurityGroupIds extends $dara.Model {
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

export class DescribeRCInstanceAttributeResponseBodySystemDisk extends $dara.Model {
  /**
   * @remarks
   * A backup parameter.
   * 
   * @example
   * None
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * Specifies whether to encrypt the disk. Valid values:
   * 
   * - **true**: Yes
   * - **false**: No
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The system disk category. Valid values:
   * 
   * - **cloud_efficiency**: ultra disk.
   * - **cloud_ssd**: standard SSD.
   * - **cloud_essd**: enterprise SSD (ESSD).
   * - **cloud_auto**: premium performance disk.
   * 
   * @example
   * cloud_essd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * Performance level of the system disk when it is an enterprise SSD (ESSD). Valid values:
   * 
   * - **PL0**
   * - **PL1**
   * - **PL2**
   * - **PL3**
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * System disk size, in GiB.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      deleteWithInstance: 'DeleteWithInstance',
      encrypted: 'Encrypted',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskPerformanceLevel: 'SystemDiskPerformanceLevel',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteWithInstance: 'boolean',
      encrypted: 'string',
      systemDiskCategory: 'string',
      systemDiskPerformanceLevel: 'string',
      systemDiskSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCInstanceAttributeResponseBodyTagsTag extends $dara.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
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

export class DescribeRCInstanceAttributeResponseBodyTags extends $dara.Model {
  tag?: DescribeRCInstanceAttributeResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeRCInstanceAttributeResponseBodyTagsTag },
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

export class DescribeRCInstanceAttributeResponseBodyVpcAttributesPrivateIpAddress extends $dara.Model {
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

export class DescribeRCInstanceAttributeResponseBodyVpcAttributes extends $dara.Model {
  /**
   * @remarks
   * The network address translation (NAT) IP address of the instance. The NAT IP address is used by instances in different VPCs for communication.
   * 
   * @example
   * None
   */
  natIpAddress?: string;
  privateIpAddress?: DescribeRCInstanceAttributeResponseBodyVpcAttributesPrivateIpAddress;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1nt15muovrc5qdj****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-2zeu747v4765aw2id****
   */
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
      privateIpAddress: DescribeRCInstanceAttributeResponseBodyVpcAttributesPrivateIpAddress,
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

export class DescribeRCInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the instance. Valid values:
   * 
   * * **true**: Yes
   * * **false**: No
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The ID of the cluster to which the instance belongs.
   * 
   * >  This parameter will be deprecated. We recommend that you use other parameters to ensure compatibility.
   * 
   * @example
   * None
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @remarks
   * Indicates whether the instance is added to an ACK cluster. Valid values:  
   * 
   * - **1**: Yes  
   * - **0**: No
   * 
   * @example
   * 0
   */
  createMode?: number;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-04-22T06:52:23Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The performance mode of the burstable instance.
   * 
   * @example
   * None
   */
  creditSpecification?: string;
  dataDisks?: DescribeRCInstanceAttributeResponseBodyDataDisks;
  /**
   * @remarks
   * The database type. Valid values:
   * 
   * - **mssql**: SQL Server
   * - **mysql**: MySQL
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The attributes of the dedicated hosts.
   * 
   * **if can be null:**
   * true
   */
  dedicatedHostAttribute?: DescribeRCInstanceAttributeResponseBodyDedicatedHostAttribute;
  /**
   * @remarks
   * Whether deletion protection is enabled. Valid values:
   * * **true**: Enabled
   * * **false**: Disabled
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The ID of the deployment set.
   * 
   * @example
   * ds-uf6c8qerk019bj1l****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  diskType?: string;
  /**
   * @remarks
   * The Elastic Compute Service (ECS) instance family.
   * 
   * @example
   * ecs.g6.2xlarge
   */
  ecsInstanceType?: string;
  /**
   * @remarks
   * The elastic IP address (EIP) associated with the instance.
   */
  eipAddress?: DescribeRCInstanceAttributeResponseBodyEipAddress;
  /**
   * @remarks
   * Indicates whether the Jumbo Frame feature is enabled for the instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  enableJumboFrame?: boolean;
  /**
   * @remarks
   * The expiration time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-08-10T00:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * Number of GPUs.
   * 
   * @example
   * 2
   */
  gpu?: number;
  /**
   * @remarks
   * The GPU type.
   * 
   * @example
   * NVIDIA V100
   */
  gpuTypes?: string;
  /**
   * @remarks
   * The instance hostname.
   * 
   * @example
   * iZ2zej1n3cin51rlmby****
   */
  hostName?: string;
  /**
   * @remarks
   * The storage type of the host. Valid values:
   * 
   * *   **dhg_cloud_ssd**: ESSD
   * *   **dhg_local_ssd**: local SSD
   * 
   * @example
   * dhg_cloud_ssd
   */
  hostType?: string;
  /**
   * @remarks
   * The image ID of the instance.
   * 
   * @example
   * m-2oqiu973jwcxe****
   */
  imageId?: string;
  innerIpAddress?: DescribeRCInstanceAttributeResponseBodyInnerIpAddress;
  /**
   * @remarks
   * Billing method. Valid values:
   * * **PrePaid**: subscription
   * * **PostPaid**: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rc-dh2jf9n6j4s14926****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   **classic**
   * *   **vpc**
   * 
   * @example
   * vpc
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * mysql.x4.xlarge.6cm
   */
  instanceType?: string;
  /**
   * @remarks
   * The billing method for network usage. Valid values:
   * 
   * *   **PayByBandwidth**: pay-by-bandwidth
   * *   **PayByTraffic**: pay-by-data-transfer
   * 
   * >  If the **pay-by-traffic** billing method is used for network usage, the maximum inbound and outbound bandwidths are used as the upper limits of bandwidths instead of guaranteed performance specifications. In scenarios in which demands exceed resource supplies, the maximum bandwidths may not be reached. If you want guaranteed bandwidths for your instance, use the **pay-by-bandwidth** billing method for network usage.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound bandwidth from the Internet. Unit: Mbit/s.
   * 
   * @example
   * 1
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound bandwidth to the Internet. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Indicates whether the instance is I/O optimized.
   * 
   * *   **optimized**: The instance is I/O optimized.
   * *   **none**: The instance is not I/O optimized.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * test_01
   */
  keyPairName?: string;
  /**
   * @remarks
   * The memory capacity of the instance. Unit: MiB.
   * 
   * @example
   * 8192
   */
  memory?: number;
  /**
   * @remarks
   * The File Type. When the value is **rds_vnode**, it indicates that the node is a container node.
   * 
   * @example
   * rds_vnode
   */
  nodeType?: string;
  operationLocks?: DescribeRCInstanceAttributeResponseBodyOperationLocks;
  publicIpAddress?: DescribeRCInstanceAttributeResponseBodyPublicIpAddress;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EA2D4F34-01A7-46EB-A339-D80882135206
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aeky6z354ks****
   */
  resourceGroupId?: string;
  securityGroupIds?: DescribeRCInstanceAttributeResponseBodySecurityGroupIds;
  /**
   * @remarks
   * The serial number of the instance.
   * 
   * @example
   * b076f6ff-46d1-4234-a608-4e951ed6****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The spot strategy for pay-as-you-go instances. Valid values:
   * 
   * - **NoSpot**: Normal pay-as-you-go instance.
   * - **SpotAsPriceGo**: The system automatically bids based on the current marketplace price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * *   **Pending**
   * *   **Running**
   * *   **Starting**
   * *   **Stopping**
   * *   **Stopped**
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the billing of the instance continues after the instance is stopped. Valid values:
   * 
   * *   **KeepCharging**: The billing of the instance continues after the instance is stopped, and resources are retained for the instance.
   * *   **StopCharging**: The billing of the instance stops after the instance is stopped. After the instance is stopped, resources such as CPU cores, memory resources, and public IP address are released. The instance may be unable to restart if some required resources are out of stock in the current region.
   * *   **Not-applicable**: The No Fees for Stopped Instances feature is not supported for the instance.
   * 
   * @example
   * Not-applicable
   */
  stoppedMode?: string;
  /**
   * @remarks
   * System disk specifications.
   */
  systemDisk?: DescribeRCInstanceAttributeResponseBodySystemDisk;
  tags?: DescribeRCInstanceAttributeResponseBodyTags;
  /**
   * @remarks
   * The custom data of the instance, formatted as a base64-encoded string.
   * 
   * > If the instance does not have custom data, an empty string is returned.
   * 
   * @example
   * IyEvYmluL3NoCmVjaG8gXCJIZWxsbyBXb3JsZC4gVGhlIHRpbWUgaXMgbm93ICQoZGF0ZSAtUikhXCIgfCB0ZWUgL3Jvb3QvdXNlcmRhdGFfdGVzdDA2MjB0d28udHh0
   */
  userData?: string;
  /**
   * @remarks
   * The virtual LAN (VLAN) ID of the instance.
   * 
   * >  This parameter will be deprecated. We recommend that you use other parameters to ensure compatibility.
   * 
   * @example
   * None
   */
  vlanId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) attributes of the instance.
   * 
   * **if can be null:**
   * true
   */
  vpcAttributes?: DescribeRCInstanceAttributeResponseBodyVpcAttributes;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clusterId: 'ClusterId',
      cpu: 'Cpu',
      createMode: 'CreateMode',
      creationTime: 'CreationTime',
      creditSpecification: 'CreditSpecification',
      dataDisks: 'DataDisks',
      dbType: 'DbType',
      dedicatedHostAttribute: 'DedicatedHostAttribute',
      deletionProtection: 'DeletionProtection',
      deploymentSetId: 'DeploymentSetId',
      description: 'Description',
      diskType: 'DiskType',
      ecsInstanceType: 'EcsInstanceType',
      eipAddress: 'EipAddress',
      enableJumboFrame: 'EnableJumboFrame',
      expiredTime: 'ExpiredTime',
      gpu: 'Gpu',
      gpuTypes: 'GpuTypes',
      hostName: 'HostName',
      hostType: 'HostType',
      imageId: 'ImageId',
      innerIpAddress: 'InnerIpAddress',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceNetworkType: 'InstanceNetworkType',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      keyPairName: 'KeyPairName',
      memory: 'Memory',
      nodeType: 'NodeType',
      operationLocks: 'OperationLocks',
      publicIpAddress: 'PublicIpAddress',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupIds: 'SecurityGroupIds',
      serialNumber: 'SerialNumber',
      spotStrategy: 'SpotStrategy',
      status: 'Status',
      stoppedMode: 'StoppedMode',
      systemDisk: 'SystemDisk',
      tags: 'Tags',
      userData: 'UserData',
      vlanId: 'VlanId',
      vpcAttributes: 'VpcAttributes',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      clusterId: 'string',
      cpu: 'number',
      createMode: 'number',
      creationTime: 'string',
      creditSpecification: 'string',
      dataDisks: DescribeRCInstanceAttributeResponseBodyDataDisks,
      dbType: 'string',
      dedicatedHostAttribute: DescribeRCInstanceAttributeResponseBodyDedicatedHostAttribute,
      deletionProtection: 'boolean',
      deploymentSetId: 'string',
      description: 'string',
      diskType: 'string',
      ecsInstanceType: 'string',
      eipAddress: DescribeRCInstanceAttributeResponseBodyEipAddress,
      enableJumboFrame: 'boolean',
      expiredTime: 'string',
      gpu: 'number',
      gpuTypes: 'string',
      hostName: 'string',
      hostType: 'string',
      imageId: 'string',
      innerIpAddress: DescribeRCInstanceAttributeResponseBodyInnerIpAddress,
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceNetworkType: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      keyPairName: 'string',
      memory: 'number',
      nodeType: 'string',
      operationLocks: DescribeRCInstanceAttributeResponseBodyOperationLocks,
      publicIpAddress: DescribeRCInstanceAttributeResponseBodyPublicIpAddress,
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      securityGroupIds: DescribeRCInstanceAttributeResponseBodySecurityGroupIds,
      serialNumber: 'string',
      spotStrategy: 'string',
      status: 'string',
      stoppedMode: 'string',
      systemDisk: DescribeRCInstanceAttributeResponseBodySystemDisk,
      tags: DescribeRCInstanceAttributeResponseBodyTags,
      userData: 'string',
      vlanId: 'string',
      vpcAttributes: DescribeRCInstanceAttributeResponseBodyVpcAttributes,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.dataDisks && typeof (this.dataDisks as any).validate === 'function') {
      (this.dataDisks as any).validate();
    }
    if(this.dedicatedHostAttribute && typeof (this.dedicatedHostAttribute as any).validate === 'function') {
      (this.dedicatedHostAttribute as any).validate();
    }
    if(this.eipAddress && typeof (this.eipAddress as any).validate === 'function') {
      (this.eipAddress as any).validate();
    }
    if(this.innerIpAddress && typeof (this.innerIpAddress as any).validate === 'function') {
      (this.innerIpAddress as any).validate();
    }
    if(this.operationLocks && typeof (this.operationLocks as any).validate === 'function') {
      (this.operationLocks as any).validate();
    }
    if(this.publicIpAddress && typeof (this.publicIpAddress as any).validate === 'function') {
      (this.publicIpAddress as any).validate();
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
    if(this.vpcAttributes && typeof (this.vpcAttributes as any).validate === 'function') {
      (this.vpcAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

