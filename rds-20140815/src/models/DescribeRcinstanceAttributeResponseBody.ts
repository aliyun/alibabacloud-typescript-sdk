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
   * The dedicated host ID.
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
   * The ID of the EIP.
   * 
   * @example
   * eip-bp14k3rz6cbg6zxbe****
   */
  allocationId?: string;
  /**
   * @remarks
   * The Internet bandwidth throttling of the EIP. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billing method for the public network instance. Valid values:
   * 
   * - **paybytraffic**: pay-by-data-transfer.
   * - **paybybandwidth**: pay-by-bandwidth.
   * > In **pay-by-data-transfer** mode, the peak inbound and outbound bandwidths are both bandwidth upper limits and are not guaranteed. When resource contention occurs, the peak bandwidth may be throttled. If your business requires guaranteed bandwidth, use the **pay-by-bandwidth** mode.
   * 
   * @example
   * paybytraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The EIP address.
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
   * A reserved parameter.
   * 
   * @example
   * None
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * Indicates whether the cloud disk is encrypted. Valid values:
   * 
   * - **true**: Encrypted.
   * - **false**: Not encrypted.
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The type of the system cloud disk. Valid values:
   * 
   * - **cloud_efficiency**: ultra cloud disk.
   * - **cloud_ssd**: standard SSD.
   * - **cloud_essd**: ESSD.
   * - **cloud_auto**: premium performance disk.
   * 
   * @example
   * cloud_essd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level (PL) of the system cloud disk when it is an ESSD. When the system cloud disk is a standard SSD, this parameter is not returned. Valid values:
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
   * The size of the system cloud disk. Unit: GiB.
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
   * The IP address of the cloud service, which is used for network communication between VPC-connected cloud services.
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
   * * **true**: Enabled.
   * * **false**: Disabled.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The ID of the cluster to which the instance belongs.
   * >This parameter will be deprecated. For better compatibility, use other parameters.
   * 
   * @example
   * None
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @remarks
   * Indicates whether the instance has joined an ACK cluster. Valid values:
   * 
   * - **1**: Yes.
   * - **0**: No.
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
   * The running mode of the burstable instance.
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
   * The dedicated host attributes.
   * 
   * **if can be null:**
   * true
   */
  dedicatedHostAttribute?: DescribeRCInstanceAttributeResponseBodyDedicatedHostAttribute;
  /**
   * @remarks
   * Indicates whether the release protection feature is enabled. Valid values:
   * * **true**: Enabled.
   * * **false**: Disabled.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The deployment set ID.
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
   * A reserved parameter.
   * 
   * @example
   * None
   */
  diskType?: string;
  /**
   * @remarks
   * The corresponding ECS instance family.
   * 
   * @example
   * ecs.g6.2xlarge
   */
  ecsInstanceType?: string;
  /**
   * @remarks
   * The elastic IP address (EIP) binding information.
   */
  eipAddress?: DescribeRCInstanceAttributeResponseBodyEipAddress;
  /**
   * @remarks
   * Indicates whether the Jumbo frame feature is enabled for the instance. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
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
   * The number of GPUs.
   * 
   * @example
   * 2
   * 
   * **if can be null:**
   * false
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
   * The hostname of the instance.
   * 
   * @example
   * iZ2zej1n3cin51rlmby****
   */
  hostName?: string;
  /**
   * @remarks
   * The host storage type. Valid values:
   * * **dhg_cloud_ssd**: ESSD cloud disk.
   * * **dhg_local_ssd**: local standard SSD.
   * 
   * @example
   * dhg_cloud_ssd
   */
  hostType?: string;
  /**
   * @remarks
   * The ID of the image that the instance is running.
   * 
   * @example
   * m-2oqiu973jwcxe****
   */
  imageId?: string;
  innerIpAddress?: DescribeRCInstanceAttributeResponseBodyInnerIpAddress;
  /**
   * @remarks
   * The billing method. Valid values:
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
   * - **classic**: classic network.
   * - **vpc**: VPC.
   * 
   * @example
   * vpc
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * mysql.x4.xlarge.6cm
   */
  instanceType?: string;
  /**
   * @remarks
   * The billing method for Internet bandwidth. Valid values:
   * 
   * - **PayByBandwidth**: pay-by-bandwidth.
   * - **PayByTraffic**: pay-by-data-transfer.
   * 
   * > In the **pay-by-data-transfer** mode, the peak inbound and outbound bandwidths are both bandwidth upper limits and are not guaranteed. When resource contention occurs, the peak bandwidth may be throttled. If your business requires guaranteed bandwidth, use the **pay-by-bandwidth** mode.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound Internet bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 1
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound Internet bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Indicates whether the instance is an I/O optimized instance.
   * 
   * - **optimized**: I/O optimization enabled.
   * - **none**: not I/O optimized.
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
   * The memory size. Unit: MiB.
   * 
   * @example
   * 8192
   */
  memory?: number;
  /**
   * @remarks
   * The node type. If **rds_vnode** is returned, the node is a container node.
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
   * The bidding strategy for the pay-as-you-go instance. Valid values:
   * 
   * - **NoSpot**: a regular pay-as-you-go instance.
   * - **SpotAsPriceGo**: the system automatically bids, following the current market price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * - **Pending**: being created.
   * - **Running**: running.
   * - **Starting**: starting.
   * - **Stopping**: stopping.
   * - **Stopped**: stopped.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the instance continues to be billed after it is stopped. Valid values:
   * 
   * - **KeepCharging**: The instance continues to be billed after it is stopped. Inventory resources are reserved for the instance.
   * - **StopCharging**: The instance is not billed after it is stopped. After the instance is stopped, its resources such as vCPUs, memory, and public IP addresses are released. Whether the instance can be restarted depends on the available resource inventory in the current region.
   * - **Not-applicable**: The instance does not support the No Fees for Stopped Instances feature.
   * 
   * @example
   * Not-applicable
   */
  stoppedMode?: string;
  /**
   * @remarks
   * The system cloud disk specifications.
   */
  systemDisk?: DescribeRCInstanceAttributeResponseBodySystemDisk;
  tags?: DescribeRCInstanceAttributeResponseBodyTags;
  /**
   * @remarks
   * The custom data of the instance, in Base64-encoded format.
   * 
   * > If the instance does not have custom data, an empty string is returned.
   * 
   * @example
   * IyEvYmluL3NoCmVjaG8gXCJIZWxsbyBXb3JsZC4gVGhlIHRpbWUgaXMgbm93ICQoZGF0ZSAtUikhXCIgfCB0ZWUgL3Jvb3QvdXNlcmRhdGFfdGVzdDA2MjB0d28udHh0
   */
  userData?: string;
  /**
   * @remarks
   * The VLAN ID of the instance.
   * > This parameter will be deprecated. For better compatibility, use other parameters.
   * 
   * @example
   * None
   */
  vlanId?: string;
  /**
   * @remarks
   * The VPC attributes.
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

