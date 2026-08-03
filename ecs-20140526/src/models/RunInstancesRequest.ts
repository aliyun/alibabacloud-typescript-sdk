// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunInstancesRequestCpuOptions extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 2
   */
  core?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  numa?: string;
  /**
   * @remarks
   * The number of threads per CPU core. The number of vCPUs of the ECS instance = `CpuOptions.Core` value × `CpuOptions.ThreadsPerCore` value.
   * 
   * @example
   * 2
   */
  threadsPerCore?: number;
  /**
   * @remarks
   * The CPU topology type of the instance. Valid values:
   * 
   * @example
   * DiscreteCoreToHTMapping
   */
  topologyType?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * enabled
   */
  nestedVirtualization?: string;
  static names(): { [key: string]: string } {
    return {
      core: 'Core',
      numa: 'Numa',
      threadsPerCore: 'ThreadsPerCore',
      topologyType: 'TopologyType',
      nestedVirtualization: 'NestedVirtualization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      core: 'number',
      numa: 'string',
      threadsPerCore: 'number',
      topologyType: 'string',
      nestedVirtualization: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequestHibernationOptions extends $dara.Model {
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * false
   */
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

export class RunInstancesRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The private pool ID, which is the ID of the elasticity assurance or capacity reservation.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The private pool capacity option for instance startup. A private pool is generated after an elasticity assurance or capacity reservation takes effect. You can select a private pool when you start an instance. Valid values:
   * 
   * @example
   * Open
   */
  matchCriteria?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      matchCriteria: 'MatchCriteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      matchCriteria: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequestSchedulerOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the dedicated host cluster to which the ECS instance belongs. The system automatically selects a dedicated host in the specified cluster to deploy the ECS instance.
   * 
   * @example
   * dc-bp12wlf6am0vz9v2****
   */
  dedicatedHostClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostClusterId: 'DedicatedHostClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequestSecurityOptions extends $dara.Model {
  /**
   * @remarks
   * The confidential computing mode. Valid value: Enclave.
   * 
   * @example
   * Enclave
   */
  confidentialComputingMode?: string;
  /**
   * @remarks
   * The trusted system mode. Valid value: vTPM.
   * 
   * @example
   * vTPM
   */
  trustedSystemMode?: string;
  enableSecureBoot?: boolean;
  static names(): { [key: string]: string } {
    return {
      confidentialComputingMode: 'ConfidentialComputingMode',
      trustedSystemMode: 'TrustedSystemMode',
      enableSecureBoot: 'EnableSecureBoot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidentialComputingMode: 'string',
      trustedSystemMode: 'string',
      enableSecureBoot: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy applied to the system disk.
   * 
   * @example
   * sp-bp67acfmxazb4p****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The description of the system disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * SystemDisk_Description
   */
  description?: string;
  /**
   * @remarks
   * The name of the system disk. The name must be 2 to 128 characters in length and can contain characters from the Unicode letter category (including English and Chinese characters and digits). The name can contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * @example
   * cloud_ssdSystem
   */
  diskName?: string;
  /**
   * @remarks
   * The performance level of the enterprise SSD used as the system disk. Settings for the performance level. This parameter takes effect only when the system disk is a standard SSD or enterprise SSD. Valid values:
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk, in GiB. Valid values:
   * 
   * @example
   * 40
   */
  size?: string;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature. Valid values:
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the system disk. Valid values:
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The KMS key ID of the system disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50,000, 1000 × Capacity - baseline performance}.
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster. If you want to use a disk in a dedicated block storage cluster as the system disk when you create an ECS instance, specify this parameter.
   * 
   * @example
   * dbsc-j5e1sf2vaf5he8m2****
   */
  storageClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      category: 'Category',
      description: 'Description',
      diskName: 'DiskName',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
      burstingEnabled: 'BurstingEnabled',
      encryptAlgorithm: 'EncryptAlgorithm',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      provisionedIops: 'ProvisionedIops',
      storageClusterId: 'StorageClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      category: 'string',
      description: 'string',
      diskName: 'string',
      performanceLevel: 'string',
      size: 'string',
      burstingEnabled: 'boolean',
      encryptAlgorithm: 'string',
      encrypted: 'string',
      KMSKeyId: 'string',
      provisionedIops: 'number',
      storageClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequestArn extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  assumeRoleFor?: number;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  roleType?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  rolearn?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      roleType: 'RoleType',
      rolearn: 'Rolearn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'number',
      roleType: 'string',
      rolearn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequestClockOptions extends $dara.Model {
  /**
   * @remarks
   * The PTP status. Valid values:
   * 
   * @example
   * enabled
   */
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

export class RunInstancesRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy to apply to the data disk.
   * 
   * @example
   * sp-bp67acfmxazb4p****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature. Valid values:
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of data disk N. Valid values:
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release the data disk when the instance is released. Valid values:
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the data disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * DataDisk_Description
   */
  description?: string;
  /**
   * @remarks
   * The mount point of the data disk. The naming conventions for mount points vary based on the number of data disks attached:
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The name of the data disk. The name must be 2 to 128 characters in length and can contain letters, digits, and characters categorized as letter in Unicode. The name can contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * @example
   * cloud_ssdData
   */
  diskName?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt data disk N. Valid values:
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The KMS key ID for the data disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * Settings for the performance level of the data disk when you create an enterprise SSD as a data disk. The value of N must be the same as that in `DataDisk.N.Category=cloud_essd`. Valid values:
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50,000, 1000 × Capacity - baseline performance}.
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of data disk N. Valid values of N: 1 to 16. Unit: GiB. Valid values:
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot to use to create data disk N. Valid values of N: 1 to 16.
   * 
   * @example
   * s-bp17441ohwka0yuh****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster. If you want to use a disk in a dedicated block storage cluster as the data disk when you create an ECS instance, specify this parameter.
   * 
   * @example
   * dbsc-j5e1sf2vaf5he8m2****
   */
  storageClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      device: 'Device',
      diskName: 'DiskName',
      encryptAlgorithm: 'EncryptAlgorithm',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      size: 'Size',
      snapshotId: 'SnapshotId',
      storageClusterId: 'StorageClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      deleteWithInstance: 'boolean',
      description: 'string',
      device: 'string',
      diskName: 'string',
      encryptAlgorithm: 'string',
      encrypted: 'string',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
      size: 'number',
      snapshotId: 'string',
      storageClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequestImageOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the instance that uses this image supports logon with the ecs-user user. Valid values:
   * 
   * @example
   * false
   */
  loginAsNonRoot?: boolean;
  static names(): { [key: string]: string } {
    return {
      loginAsNonRoot: 'LoginAsNonRoot',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class RunInstancesRequestNetworkInterface extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to retain the ENI when the instance is released. Valid values:
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
   * Network_Description
   */
  description?: string;
  /**
   * @remarks
   * The type of the network interface controller (NIC). Valid values of N cannot exceed the number of NICs supported by the instance family. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or invoke [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the number of NICs supported by the target instance type.
   * 
   * @example
   * Secondary
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies one or more IPv6 addresses for the primary ENI. You can specify up to 10 IPv6 addresses. Valid values of the second N: 1 to 10.
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The number of randomly generated IPv6 addresses for the primary ENI. Valid values: 1 to 10.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The index of the physical network card specified for the ENI.
   * 
   * @example
   * 0
   */
  networkCardIndex?: number;
  /**
   * @remarks
   * The ID of the network interface controller (NIC) to attach to the instance.
   * 
   * @example
   * eni-bp1gn106np8jhxhj****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The name of the network interface controller (NIC). The name must be 2 to 128 characters in length and can contain letters, digits, and characters categorized under the Unicode letter categorization (which includes characters from various languages such as English, Chinese, and digits). The name can contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * @example
   * Network_Name
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The communication mode of the ENI. Valid values:
   * 
   * @example
   * Standard
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * Adds a network interface controller (NIC) and settings for the primary IP address.
   * 
   * @example
   * ``172.16.**.**``
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * The number of queues for the network interface controller (NIC).
   * 
   * @example
   * 8
   */
  queueNumber?: number;
  /**
   * @remarks
   * The number of queues for the RDMA network interface.
   * 
   * @example
   * 0
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The inbound queue depth of the network interface controller (NIC).
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The number of secondary private IPv4 addresses for the ENI. Valid values: 1 to 49.
   * 
   * @example
   * 10
   */
  secondaryPrivateIpAddressCount?: number;
  /**
   * @remarks
   * The ID of the security group to which the network interface controller (NIC) belongs.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of one or more security groups to which the network interface controller (NIC) belongs.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable source/destination checking. We recommend that you enable this feature to improve network security. Valid values:
   * 
   * @example
   * false
   */
  sourceDestCheck?: boolean;
  /**
   * @remarks
   * The outbound queue depth of the network interface controller (NIC).
   * 
   * @example
   * 8192
   */
  txQueueSize?: number;
  /**
   * @remarks
   * The ID of the vSwitch to which the network interface controller (NIC) belongs.
   * 
   * @example
   * vsw-bp67acfmxazb4p****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteOnRelease: 'DeleteOnRelease',
      description: 'Description',
      instanceType: 'InstanceType',
      ipv6Address: 'Ipv6Address',
      ipv6AddressCount: 'Ipv6AddressCount',
      networkCardIndex: 'NetworkCardIndex',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceName: 'NetworkInterfaceName',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      primaryIpAddress: 'PrimaryIpAddress',
      queueNumber: 'QueueNumber',
      queuePairNumber: 'QueuePairNumber',
      rxQueueSize: 'RxQueueSize',
      secondaryPrivateIpAddressCount: 'SecondaryPrivateIpAddressCount',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      sourceDestCheck: 'SourceDestCheck',
      txQueueSize: 'TxQueueSize',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteOnRelease: 'boolean',
      description: 'string',
      instanceType: 'string',
      ipv6Address: { 'type': 'array', 'itemType': 'string' },
      ipv6AddressCount: 'number',
      networkCardIndex: 'number',
      networkInterfaceId: 'string',
      networkInterfaceName: 'string',
      networkInterfaceTrafficMode: 'string',
      primaryIpAddress: 'string',
      queueNumber: 'number',
      queuePairNumber: 'number',
      rxQueueSize: 'number',
      secondaryPrivateIpAddressCount: 'number',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      sourceDestCheck: 'boolean',
      txQueueSize: 'number',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipv6Address)) {
      $dara.Model.validateArray(this.ipv6Address);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequestNetworkOptions extends $dara.Model {
  /**
   * @remarks
   * The bandwidth weight value of the instance. The valid values vary by instance type. To query the supported bandwidth weight levels for a specific instance type, call DescribeInstanceTypes. The BandwidthWeighting field in the response indicates the supported bandwidth weight levels. You can use the name field in the returned values as the dictionary value, such as Vpc-L1 or Ebs-L1.
   * 
   * @example
   * Default
   */
  bandwidthWeighting?: string;
  /**
   * @remarks
   * Specifies whether to enable the Jumbo frame feature for the instance. Valid values:
   * 
   * @example
   * false
   */
  enableJumboFrame?: boolean;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   */
  enableNetworkEncryption?: boolean;
  static names(): { [key: string]: string } {
    return {
      bandwidthWeighting: 'BandwidthWeighting',
      enableJumboFrame: 'EnableJumboFrame',
      enableNetworkEncryption: 'EnableNetworkEncryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthWeighting: 'string',
      enableJumboFrame: 'boolean',
      enableNetworkEncryption: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequestPrivateDnsNameOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable DNS resolution from the instance ID-based domain name to the IPv6 address. Valid values:
   * 
   * @example
   * true
   */
  enableInstanceIdDnsAAAARecord?: boolean;
  /**
   * @remarks
   * Specifies whether to enable DNS resolution from the instance ID-based domain name to the IPv4 address. Valid values:
   * 
   * @example
   * false
   */
  enableInstanceIdDnsARecord?: boolean;
  /**
   * @remarks
   * Specifies whether to enable DNS resolution from the IP-based domain name to the IPv4 address. Valid values:
   * 
   * @example
   * true
   */
  enableIpDnsARecord?: boolean;
  /**
   * @remarks
   * Specifies whether to enable reverse DNS resolution from the IPv4 address to the IP-based domain name. Valid values:
   * 
   * @example
   * false
   */
  enableIpDnsPtrRecord?: boolean;
  /**
   * @remarks
   * The hostname type. Valid values:
   * 
   * @example
   * Custom
   */
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

export class RunInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key for the instance, disks, and primary ENI. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. The tag key cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value for the instance, disks, and primary ENI. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.
   * 
   * @example
   * TestValue
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

export class RunInstancesRequest extends $dara.Model {
  cpuOptions?: RunInstancesRequestCpuOptions;
  hibernationOptions?: RunInstancesRequestHibernationOptions;
  privatePoolOptions?: RunInstancesRequestPrivatePoolOptions;
  schedulerOptions?: RunInstancesRequestSchedulerOptions;
  securityOptions?: RunInstancesRequestSecurityOptions;
  systemDisk?: RunInstancesRequestSystemDisk;
  /**
   * @remarks
   * Specifies whether the instance on a dedicated host is associated with the dedicated host. Valid values:
   * 
   * @example
   * default
   */
  affinity?: string;
  /**
   * @remarks
   * The number of ECS instances to create. Valid values: 1 to 100.
   * 
   * @example
   * 3
   */
  amount?: number;
  /**
   * @remarks
   * > This parameter is not publicly available.
   */
  arn?: RunInstancesRequestArn[];
  /**
   * @remarks
   * Specifies whether automatic payment is enabled when you create the instance. Valid values:
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The automatic release time of the pay-as-you-go instance. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the UTC+0 time zone. The format is `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * @example
   * 2018-01-01T12:05:00Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter takes effect only when `InstanceChargeType` is set to `PrePaid`. Valid values:
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period for a single renewal. Valid values:
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The clock-related property parameters of the instance.
   */
  clockOptions?: RunInstancesRequestClockOptions;
  /**
   * @remarks
   * The running mode of the burstable instance. Valid values:
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The list of data disk information.
   */
  dataDisk?: RunInstancesRequestDataDisk[];
  /**
   * @remarks
   * The ID of the dedicated host.
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The release protection attribute of the instance. Specifies whether the instance can be released from the console or by calling [DeleteInstance](https://help.aliyun.com/document_detail/25507.html). Valid values:
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * If the deployment set policy is set to the high availability group policy (AvailabilityGroup), you can use this parameter to specify the group number of the instance in the deployment set. Valid values: 1 to 7.
   * 
   * @example
   * 1
   */
  deploymentSetGroupNo?: number;
  /**
   * @remarks
   * The ID of the deployment set.
   * 
   * @example
   * ds-bp1brhwhoqinyjd6****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The description of the instance. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * Instance_Description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The hostname of the instance. The following limits apply:
   * 
   * @example
   * k8s-node-[1,4]-ecshost
   */
  hostName?: string;
  /**
   * @remarks
   * Specifies a different hostname for each instance when you create multiple instances.
   * 
   * @example
   * ecs-host-01
   */
  hostNames?: string[];
  /**
   * @remarks
   * The ID of the HPC cluster to which the instance belongs.
   * 
   * @example
   * hpc-bp67acfmxazb4p****
   */
  hpcClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the access channel for instance metadata. Valid values:
   * 
   * @example
   * enabled
   */
  httpEndpoint?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * 0
   */
  httpPutResponseHopLimit?: number;
  /**
   * @remarks
   * Specifies whether to forcefully use the security-hardened mode (IMDSv2) to access instance metadata. Valid values:
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The name of the image family. Set this parameter to obtain the latest available image from the specified image family to create the instance.
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The image ID. Specifies the image resource used to start the instance. You can call [DescribeImages](https://help.aliyun.com/document_detail/25534.html) to query available image resources. If you do not specify `LaunchTemplateId` or `LaunchTemplateName` to determine a launch template, and do not specify `ImageFamily` to use the latest available image from an image family, `ImageId` is required.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200324.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The image-related property information.
   */
  imageOptions?: RunInstancesRequestImageOptions;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance name. The name must be 2 to 128 characters in length and can contain characters from the Unicode letter category (including English and Chinese characters) and digits. The name can contain colons (:), underscores (_), periods (.), or hyphens (-). Default value: the `InstanceId` of the instance.
   * 
   * @example
   * k8s-node-[1,4]-alibabacloud
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type. If you do not specify `LaunchTemplateId` or `LaunchTemplateName` to determine a launch template, `InstanceType` is required.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The billing method for network usage. Valid values:
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth, in Mbit/s. Valid values:
   * 
   * @example
   * 10
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth, in Mbit/s. Valid values: 0 to 100.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Specifies whether the instance is an I/O optimized instance. The default value for [retired instance types](https://help.aliyun.com/document_detail/55263.html) is none, which indicates that the instance is not I/O optimization enabled. The default value for other instance types is optimized. Valid values:
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * Specifies one or more IPv6 addresses for the primary ENI. You can specify up to 10 IPv6 addresses. Valid values of N: 1 to 10.
   * 
   * @example
   * Ipv6Address.1=2001:db8:1234:1a00::***
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The number of randomly generated IPv6 addresses for the primary ENI. Valid values: 1 to 10.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  isp?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * KeyPair_Name
   */
  keyPairName?: string;
  /**
   * @remarks
   * The launch template ID. For more information, call [DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html).
   * 
   * @example
   * lt-bp1apo0bbbkuy0rj****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The launch template name.
   * 
   * @example
   * LaunchTemplate_Name
   */
  launchTemplateName?: string;
  /**
   * @remarks
   * The launch template version. If you specify `LaunchTemplateId` or `LaunchTemplateName` but do not specify the launch template version, the default version is used.
   * 
   * @example
   * 3
   */
  launchTemplateVersion?: number;
  /**
   * @remarks
   * The minimum Quantity of ECS instances to purchase. Valid values: 1 to 100.
   * 
   * @example
   * 2
   */
  minAmount?: number;
  /**
   * @remarks
   * The network interface controller (NIC) information.
   */
  networkInterface?: RunInstancesRequestNetworkInterface[];
  /**
   * @remarks
   * The number of queues supported by the primary ENI. Note the following items:
   * 
   * @example
   * 8
   */
  networkInterfaceQueueNumber?: number;
  /**
   * @remarks
   * The network-related property parameters.
   */
  networkOptions?: RunInstancesRequestNetworkOptions;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the instance. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported:
   * 
   * @example
   * EcsV587!
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the password preset in the image. Valid values:
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The subscription duration of the resource. The unit is specified by `PeriodUnit`. This parameter takes effect and is required only when `InstanceChargeType` is set to `PrePaid`. If `DedicatedHostId` is specified, the value of this parameter cannot exceed the subscription duration of the dedicated host. Valid values:
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription billable methods duration. Valid values:
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The private DNS name configuration of the instance.
   */
  privateDnsNameOptions?: RunInstancesRequestPrivateDnsNameOptions;
  /**
   * @remarks
   * The private IP address of the instance. For a VPC-type ECS instance, the private IP address must be from the idle CIDR block of the vSwitch specified by `VSwitchId`.
   * 
   * @example
   * ``10.1.**.**``
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The name of the instance RAM role. You can call the RAM API [ListRoles](https://help.aliyun.com/document_detail/28713.html) to query the instance RAM roles that you have created.
   * 
   * @example
   * RAM_Name
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the enterprise resource group to which the instance belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable security hardening. Valid values:
   * 
   * @example
   * Active
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group to which the new instance belongs. Instances in the same security group can communicate with each other. The maximum number of instances that a security group can contain depends on the security group type. For more information, see the security group section in [Limits](~~25412#SecurityGroupQuota~~).
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Adds the instance to multiple security groups. Valid values of N depend on the maximum number of security groups to which an instance can belong. For more information, see [Security group limits](https://help.aliyun.com/document_detail/101348.html).
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The retention period of the spot instance, in hours. Valid values:
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The interruption pattern of the spot instance. Valid values:
   * 
   * @example
   * Terminate
   */
  spotInterruptionBehavior?: string;
  /**
   * @remarks
   * The maximum hourly price of the instance. This value supports up to three decimal places. This parameter takes effect when the `SpotStrategy` parameter is set to `SpotWithPriceLimit`.
   * 
   * @example
   * 0.97
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The bidding policy for the pay-as-you-go instance. This parameter takes effect when the `InstanceChargeType` parameter is set to `PostPaid`. Valid values:
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The ID of the storage set.
   * 
   * @example
   * ss-bp67acfmxazb4p****
   */
  storageSetId?: string;
  /**
   * @remarks
   * The maximum number of partitions in the storage set. Valid values: greater than or equal to 1.
   * 
   * @example
   * 2
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The tag information for the instance, disks, and primary ENI.
   */
  tag?: RunInstancesRequestTag[];
  /**
   * @remarks
   * Specifies whether to create the instance on a dedicated host. Valid values:
   * 
   * @example
   * default
   */
  tenancy?: string;
  /**
   * @remarks
   * Specifies whether to automatically append sequential suffixes to `HostName` and `InstanceName` when you create multiple instances. The sequential suffix ranges from 001 to 999. Valid values:
   * 
   * @example
   * true
   */
  uniqueSuffix?: boolean;
  /**
   * @remarks
   * The instance user data. The data must be Base64-encoded. The maximum size of the raw data before Base64 encoding is 32 KB.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * The vSwitch ID. If you are creating a VPC-type ECS instance, you must specify a vSwitch ID. The security group and the vSwitch must belong to the same VPC. You can call [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) to query created vSwitches.
   * 
   * @example
   * vsw-bp1s5fnvk4gn2tws0****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the instance. You can call [DescribeZones](https://help.aliyun.com/document_detail/25610.html) to query the zone list.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cpuOptions: 'CpuOptions',
      hibernationOptions: 'HibernationOptions',
      privatePoolOptions: 'PrivatePoolOptions',
      schedulerOptions: 'SchedulerOptions',
      securityOptions: 'SecurityOptions',
      systemDisk: 'SystemDisk',
      affinity: 'Affinity',
      amount: 'Amount',
      arn: 'Arn',
      autoPay: 'AutoPay',
      autoReleaseTime: 'AutoReleaseTime',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      clockOptions: 'ClockOptions',
      creditSpecification: 'CreditSpecification',
      dataDisk: 'DataDisk',
      dedicatedHostId: 'DedicatedHostId',
      deletionProtection: 'DeletionProtection',
      deploymentSetGroupNo: 'DeploymentSetGroupNo',
      deploymentSetId: 'DeploymentSetId',
      description: 'Description',
      dryRun: 'DryRun',
      hostName: 'HostName',
      hostNames: 'HostNames',
      hpcClusterId: 'HpcClusterId',
      httpEndpoint: 'HttpEndpoint',
      httpPutResponseHopLimit: 'HttpPutResponseHopLimit',
      httpTokens: 'HttpTokens',
      imageFamily: 'ImageFamily',
      imageId: 'ImageId',
      imageOptions: 'ImageOptions',
      instanceChargeType: 'InstanceChargeType',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      ipv6Address: 'Ipv6Address',
      ipv6AddressCount: 'Ipv6AddressCount',
      isp: 'Isp',
      keyPairName: 'KeyPairName',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateName: 'LaunchTemplateName',
      launchTemplateVersion: 'LaunchTemplateVersion',
      minAmount: 'MinAmount',
      networkInterface: 'NetworkInterface',
      networkInterfaceQueueNumber: 'NetworkInterfaceQueueNumber',
      networkOptions: 'NetworkOptions',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      passwordInherit: 'PasswordInherit',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      privateDnsNameOptions: 'PrivateDnsNameOptions',
      privateIpAddress: 'PrivateIpAddress',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      spotDuration: 'SpotDuration',
      spotInterruptionBehavior: 'SpotInterruptionBehavior',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      storageSetId: 'StorageSetId',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
      tag: 'Tag',
      tenancy: 'Tenancy',
      uniqueSuffix: 'UniqueSuffix',
      userData: 'UserData',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuOptions: RunInstancesRequestCpuOptions,
      hibernationOptions: RunInstancesRequestHibernationOptions,
      privatePoolOptions: RunInstancesRequestPrivatePoolOptions,
      schedulerOptions: RunInstancesRequestSchedulerOptions,
      securityOptions: RunInstancesRequestSecurityOptions,
      systemDisk: RunInstancesRequestSystemDisk,
      affinity: 'string',
      amount: 'number',
      arn: { 'type': 'array', 'itemType': RunInstancesRequestArn },
      autoPay: 'boolean',
      autoReleaseTime: 'string',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      clockOptions: RunInstancesRequestClockOptions,
      creditSpecification: 'string',
      dataDisk: { 'type': 'array', 'itemType': RunInstancesRequestDataDisk },
      dedicatedHostId: 'string',
      deletionProtection: 'boolean',
      deploymentSetGroupNo: 'number',
      deploymentSetId: 'string',
      description: 'string',
      dryRun: 'boolean',
      hostName: 'string',
      hostNames: { 'type': 'array', 'itemType': 'string' },
      hpcClusterId: 'string',
      httpEndpoint: 'string',
      httpPutResponseHopLimit: 'number',
      httpTokens: 'string',
      imageFamily: 'string',
      imageId: 'string',
      imageOptions: RunInstancesRequestImageOptions,
      instanceChargeType: 'string',
      instanceName: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      ipv6Address: { 'type': 'array', 'itemType': 'string' },
      ipv6AddressCount: 'number',
      isp: 'string',
      keyPairName: 'string',
      launchTemplateId: 'string',
      launchTemplateName: 'string',
      launchTemplateVersion: 'number',
      minAmount: 'number',
      networkInterface: { 'type': 'array', 'itemType': RunInstancesRequestNetworkInterface },
      networkInterfaceQueueNumber: 'number',
      networkOptions: RunInstancesRequestNetworkOptions,
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      passwordInherit: 'boolean',
      period: 'number',
      periodUnit: 'string',
      privateDnsNameOptions: RunInstancesRequestPrivateDnsNameOptions,
      privateIpAddress: 'string',
      ramRoleName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityEnhancementStrategy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      storageSetId: 'string',
      storageSetPartitionNumber: 'number',
      tag: { 'type': 'array', 'itemType': RunInstancesRequestTag },
      tenancy: 'string',
      uniqueSuffix: 'boolean',
      userData: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.cpuOptions && typeof (this.cpuOptions as any).validate === 'function') {
      (this.cpuOptions as any).validate();
    }
    if(this.hibernationOptions && typeof (this.hibernationOptions as any).validate === 'function') {
      (this.hibernationOptions as any).validate();
    }
    if(this.privatePoolOptions && typeof (this.privatePoolOptions as any).validate === 'function') {
      (this.privatePoolOptions as any).validate();
    }
    if(this.schedulerOptions && typeof (this.schedulerOptions as any).validate === 'function') {
      (this.schedulerOptions as any).validate();
    }
    if(this.securityOptions && typeof (this.securityOptions as any).validate === 'function') {
      (this.securityOptions as any).validate();
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(Array.isArray(this.arn)) {
      $dara.Model.validateArray(this.arn);
    }
    if(this.clockOptions && typeof (this.clockOptions as any).validate === 'function') {
      (this.clockOptions as any).validate();
    }
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    if(Array.isArray(this.hostNames)) {
      $dara.Model.validateArray(this.hostNames);
    }
    if(this.imageOptions && typeof (this.imageOptions as any).validate === 'function') {
      (this.imageOptions as any).validate();
    }
    if(Array.isArray(this.ipv6Address)) {
      $dara.Model.validateArray(this.ipv6Address);
    }
    if(Array.isArray(this.networkInterface)) {
      $dara.Model.validateArray(this.networkInterface);
    }
    if(this.networkOptions && typeof (this.networkOptions as any).validate === 'function') {
      (this.networkOptions as any).validate();
    }
    if(this.privateDnsNameOptions && typeof (this.privateDnsNameOptions as any).validate === 'function') {
      (this.privateDnsNameOptions as any).validate();
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

