// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsCpuOptions extends $dara.Model {
  /**
   * @remarks
   * Nested virtualization, whether to enable hardware-based nested virtualization. Valid values:
   * 
   * - enabled: Enabled.
   * 
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  nestedVirtualization?: string;
  static names(): { [key: string]: string } {
    return {
      nestedVirtualization: 'NestedVirtualization',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsCustomPriorities extends $dara.Model {
  /**
   * @remarks
   * The instance type of the ECS instance.
   * 
   * @example
   * ecs.c6a.4xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the virtual switch.
   * 
   * @example
   * vsw-bp14zolna43z266bq****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsDataDisks extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy applied to the data disk.
   * 
   * @example
   * sp-bp19nq9enxqkomib****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Whether Burst (performance burst) is enabled for the data disk. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * > This parameter appears only when `DataDisk.Category` is `cloud_auto`.
   * 
   * <props="china">
   * 
   * For more information, see [ESSD AutoPL](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * Multiple disk categories for the data disk. The first disk category has the highest priority, followed by others in descending order. If Auto Scaling cannot use a higher-priority disk category, it automatically tries the next priority category to create the data disk. Valid values:
   * 
   * - cloud: basic disk. Basic disks created with an instance have DeleteWithInstance set to true.
   * 
   * - cloud_efficiency: ultra disk.
   * 
   * - cloud_ssd: standard SSD.
   * 
   * - cloud_essd: ESSD.
   */
  categories?: string[];
  /**
   * @remarks
   * The disk category of the data disk. Valid values:
   * 
   * - cloud: basic disk. Basic disks created with an instance have DeleteWithInstance set to true.
   * 
   * - cloud_efficiency: ultra disk.
   * 
   * - cloud_ssd: standard SSD.
   * 
   * - ephemeral_ssd: local SSD.
   * 
   * - cloud_essd: ESSD.
   * 
   * - cloud_auto: ESSD AutoPL.
   * 
   * @example
   * cloud
   */
  category?: string;
  /**
   * @remarks
   * Whether to release the data disk when releasing the instance. Valid values:
   * 
   * - true: Release the disk along with the instance.
   * 
   * - false: Keep the disk when releasing the instance.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the data disk.
   * 
   * @example
   * FinanceDept
   */
  description?: string;
  /**
   * @remarks
   * The mount target of the data disk.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The name of the data disk.
   * 
   * @example
   * cloud_ssdData
   */
  diskName?: string;
  /**
   * @remarks
   * Whether the data disk is encrypted. Valid values:
   * 
   * - true: Encrypted.
   * 
   * - false: Not encrypted.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The KMS key ID corresponding to the data disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The performance level of the ESSD data disk.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned IOPS (Input/Output Operations Per Second) performance metric for the data disk.
   * 
   * > IOPS (Input/Output Operations Per Second) measures the number of I/O operations per second, indicating block storage read/write capability. Unit: operations.
   * 
   * @example
   * 100
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of the data disk. Unit: GiB. Valid values:
   * 
   * - cloud: 5–2000.
   * 
   * - cloud_efficiency: 20–32768.
   * 
   * - cloud_ssd: 20–32768.
   * 
   * - cloud_essd: 20–32768.
   * 
   * - ephemeral_ssd: 5–800.
   * 
   * @example
   * 200
   */
  size?: number;
  /**
   * @remarks
   * The snapshot ID used to create the data disk.
   * 
   * @example
   * s-23f2i****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      burstingEnabled: 'BurstingEnabled',
      categories: 'Categories',
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      device: 'Device',
      diskName: 'DiskName',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      size: 'Size',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      burstingEnabled: 'boolean',
      categories: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      deleteWithInstance: 'boolean',
      description: 'string',
      device: 'string',
      diskName: 'string',
      encrypted: 'string',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
      size: 'number',
      snapshotId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsInstancePatternInfos extends $dara.Model {
  /**
   * @remarks
   * The architecture type of the instance type. Valid values:
   * 
   * - X86: X86 compute.
   * 
   * - Heterogeneous: Heterogeneous compute, such as GPU or FPGA.
   * 
   * - BareMetal: ECS Bare Metal Instance.
   * 
   * - Arm: Arm compute.
   */
  architectures?: string[];
  /**
   * @remarks
   * Whether the instance type supports performance burst. Valid values:
   * 
   * - Exclude: Exclude burstable instance types.
   * 
   * - Include: Include burstable instance types.
   * 
   * - Required: Include only burstable instance types.
   * 
   * @example
   * Include
   */
  burstablePerformance?: string;
  /**
   * @remarks
   * The number of vCPU cores for the instance type.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The CPU architecture of the instance type. Valid values:
   * 
   * > N indicates multiple CPU architectures can be specified. N ranges from 1 to 2.
   * 
   * - X86.
   * 
   * - ARM.
   */
  cpuArchitectures?: string[];
  /**
   * @remarks
   * The instance types to exclude. Use wildcard characters (\\*) to exclude a single instance type or an entire instance family. Examples:
   * 
   * - ecs.c6.large: Excludes the ecs.c6.large instance type.
   * 
   * - ecs.c6.\\*: Excludes all instance types in the c6 family.
   */
  excludedInstanceTypes?: string[];
  /**
   * @remarks
   * GPU types.
   */
  gpuSpecs?: string[];
  /**
   * @remarks
   * Instance categories. Valid values:
   * 
   * > N indicates multiple instance categories can be specified. N ranges from 1 to 10.
   * 
   * - General-purpose: General-purpose.
   * 
   * - Compute-optimized: Compute-optimized.
   * 
   * - Memory-optimized: Memory-optimized.
   * 
   * - Big data: Big data.
   * 
   * - Local SSDs: Local SSD.
   * 
   * - High Clock Speed: High frequency.
   * 
   * - Enhanced: Enhanced.
   * 
   * - Shared: Shared-resource.
   * 
   * - Compute-optimized with GPU: GPU.
   * 
   * - Visual Compute-optimized: Visual compute.
   * 
   * - Heterogeneous Service: Heterogeneous computing.
   * 
   * - Compute-optimized with FPGA: FPGA.
   * 
   * - Compute-optimized with NPU: NPU.
   * 
   * - ECS Bare Metal: ECS Bare Metal Instance.
   * 
   * - High Performance Compute: High-performance computing (HPC).
   */
  instanceCategories?: string[];
  /**
   * @remarks
   * The instance family level.
   * 
   * - EntryLevel: Entry-level, i.e., shared-resource instances. Lower cost but cannot guarantee stable compute performance. Suitable for workloads with low average CPU usage. For more information, see [Shared-resource instances](https://help.aliyun.com/document_detail/108489.html).
   * 
   * - EnterpriseLevel: Enterprise-level. Stable performance with dedicated resources. Suitable for workloads requiring high stability. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * - CreditEntryLevel: Credit entry-level, i.e., burstable instances. Uses CPU credits to ensure compute performance. Suitable for workloads with low average CPU usage and occasional bursts. For more information, see [Burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The instance families to query. N indicates multiple instance families can be specified. N ranges from 1 to 10.
   */
  instanceTypeFamilies?: string[];
  /**
   * @remarks
   * The maximum hourly price acceptable for pay-as-you-go or spot instances.
   * 
   * @example
   * 2
   */
  maxPrice?: number;
  /**
   * @remarks
   * The maximum number of vCPU cores for the instance type.
   * 
   * > MaximumCpuCoreCount cannot exceed four times MinimumCpuCoreCount.
   * 
   * @example
   * 4
   */
  maximumCpuCoreCount?: number;
  /**
   * @remarks
   * The maximum number of GPUs. Valid values: positive integers.
   * 
   * @example
   * 2
   */
  maximumGpuAmount?: number;
  /**
   * @remarks
   * The maximum memory size. Unit: GiB.
   * 
   * @example
   * 4
   */
  maximumMemorySize?: number;
  /**
   * @remarks
   * The memory size for the instance type. Unit: GiB.
   * 
   * @example
   * 4
   */
  memory?: number;
  /**
   * @remarks
   * The minimum baseline vCPU compute performance (sum of all vCPUs) for burstable instances t5 and t6.
   * 
   * @example
   * 12
   */
  minimumBaselineCredit?: number;
  /**
   * @remarks
   * The minimum number of vCPU cores for the instance type.
   * 
   * @example
   * 2
   */
  minimumCpuCoreCount?: number;
  /**
   * @remarks
   * The minimum number of IPv6 addresses per ENI.
   * 
   * @example
   * 1
   */
  minimumEniIpv6AddressQuantity?: number;
  /**
   * @remarks
   * The minimum number of IPv4 addresses per ENI.
   * 
   * @example
   * 2
   */
  minimumEniPrivateIpAddressQuantity?: number;
  /**
   * @remarks
   * The minimum number of elastic network interfaces (ENIs) that the instance type supports attaching.
   * 
   * @example
   * 2
   */
  minimumEniQuantity?: number;
  /**
   * @remarks
   * The minimum number of GPUs. Valid values: positive integers.
   * 
   * @example
   * 2
   */
  minimumGpuAmount?: number;
  /**
   * @remarks
   * The minimum initial vCPU credit for burstable instances t5 and t6.
   * 
   * @example
   * 12
   */
  minimumInitialCredit?: number;
  /**
   * @remarks
   * The minimum memory size. Unit: GiB.
   * 
   * @example
   * 4
   */
  minimumMemorySize?: number;
  /**
   * @remarks
   * The processor models of the instance. N indicates multiple processor models can be specified. N ranges from 1 to 10.
   */
  physicalProcessorModels?: string[];
  static names(): { [key: string]: string } {
    return {
      architectures: 'Architectures',
      burstablePerformance: 'BurstablePerformance',
      cores: 'Cores',
      cpuArchitectures: 'CpuArchitectures',
      excludedInstanceTypes: 'ExcludedInstanceTypes',
      gpuSpecs: 'GpuSpecs',
      instanceCategories: 'InstanceCategories',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instanceTypeFamilies: 'InstanceTypeFamilies',
      maxPrice: 'MaxPrice',
      maximumCpuCoreCount: 'MaximumCpuCoreCount',
      maximumGpuAmount: 'MaximumGpuAmount',
      maximumMemorySize: 'MaximumMemorySize',
      memory: 'Memory',
      minimumBaselineCredit: 'MinimumBaselineCredit',
      minimumCpuCoreCount: 'MinimumCpuCoreCount',
      minimumEniIpv6AddressQuantity: 'MinimumEniIpv6AddressQuantity',
      minimumEniPrivateIpAddressQuantity: 'MinimumEniPrivateIpAddressQuantity',
      minimumEniQuantity: 'MinimumEniQuantity',
      minimumGpuAmount: 'MinimumGpuAmount',
      minimumInitialCredit: 'MinimumInitialCredit',
      minimumMemorySize: 'MinimumMemorySize',
      physicalProcessorModels: 'PhysicalProcessorModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectures: { 'type': 'array', 'itemType': 'string' },
      burstablePerformance: 'string',
      cores: 'number',
      cpuArchitectures: { 'type': 'array', 'itemType': 'string' },
      excludedInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      gpuSpecs: { 'type': 'array', 'itemType': 'string' },
      instanceCategories: { 'type': 'array', 'itemType': 'string' },
      instanceFamilyLevel: 'string',
      instanceTypeFamilies: { 'type': 'array', 'itemType': 'string' },
      maxPrice: 'number',
      maximumCpuCoreCount: 'number',
      maximumGpuAmount: 'number',
      maximumMemorySize: 'number',
      memory: 'number',
      minimumBaselineCredit: 'number',
      minimumCpuCoreCount: 'number',
      minimumEniIpv6AddressQuantity: 'number',
      minimumEniPrivateIpAddressQuantity: 'number',
      minimumEniQuantity: 'number',
      minimumGpuAmount: 'number',
      minimumInitialCredit: 'number',
      minimumMemorySize: 'number',
      physicalProcessorModels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.architectures)) {
      $dara.Model.validateArray(this.architectures);
    }
    if(Array.isArray(this.cpuArchitectures)) {
      $dara.Model.validateArray(this.cpuArchitectures);
    }
    if(Array.isArray(this.excludedInstanceTypes)) {
      $dara.Model.validateArray(this.excludedInstanceTypes);
    }
    if(Array.isArray(this.gpuSpecs)) {
      $dara.Model.validateArray(this.gpuSpecs);
    }
    if(Array.isArray(this.instanceCategories)) {
      $dara.Model.validateArray(this.instanceCategories);
    }
    if(Array.isArray(this.instanceTypeFamilies)) {
      $dara.Model.validateArray(this.instanceTypeFamilies);
    }
    if(Array.isArray(this.physicalProcessorModels)) {
      $dara.Model.validateArray(this.physicalProcessorModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsInstanceTypeCandidateOptions extends $dara.Model {
  /**
   * @remarks
   * When supplementing switches in other zones, specify the CIDR blocks for eligible switches.
   */
  allowCidrBlocks?: string[];
  /**
   * @remarks
   * Indicates whether ESS can add vSwitches from other zones.
   * 
   * > The instance type remains unchanged. Only alternative zones are considered. If all selected zones in the scaling group cannot scale out due to inventory shortages or similar issues, ESS automatically adds a vSwitch from a new zone to the scaling group based on this setting.
   * > For example, if the scaling group is configured with zones cn-hangzhou-h and cn-hangzhou-g, and neither zone can scale out, ESS might create a vSwitch in zone cn-hangzhou-k based on real-time inventory availability and add it to the scaling group.
   * 
   * @example
   * true
   */
  allowCrossAz?: boolean;
  /**
   * @remarks
   * Whether to allow supplementing instance types from different generations.
   * 
   * - For example, if the current type is ecs.c7.large, enabling this allows alternatives like ecs.c6.large and ecs.c8.large.
   * 
   * @example
   * true
   */
  allowDifferentGeneration?: boolean;
  /**
   * @remarks
   * Whether to enable alternative mode.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The price cap for alternative instance types.
   * 
   * @example
   * 2
   */
  maxPrice?: number;
  static names(): { [key: string]: string } {
    return {
      allowCidrBlocks: 'AllowCidrBlocks',
      allowCrossAz: 'AllowCrossAz',
      allowDifferentGeneration: 'AllowDifferentGeneration',
      enabled: 'Enabled',
      maxPrice: 'MaxPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCidrBlocks: { 'type': 'array', 'itemType': 'string' },
      allowCrossAz: 'boolean',
      allowDifferentGeneration: 'boolean',
      enabled: 'boolean',
      maxPrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.allowCidrBlocks)) {
      $dara.Model.validateArray(this.allowCidrBlocks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsNetworkInterfaces extends $dara.Model {
  /**
   * @remarks
   * The elastic network interface type. Valid values:
   * 
   * - Primary: Primary network interface.
   * 
   * - Secondary: Secondary elastic network interface.
   * 
   * @example
   * Primary
   */
  instanceType?: string;
  /**
   * @remarks
   * The number of randomly generated IPv6 addresses assigned to the primary network interface.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The communication mode of the elastic network interface. Valid values:
   * 
   * - Standard: Uses TCP communication mode.
   * 
   * - HighPerformance: Enables ERI (Elastic RDMA Interface) and uses RDMA communication mode.
   * 
   * @example
   * HighPerformance
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The number of secondary private IPv4 addresses assigned to the network interface. Valid values: 1–49.
   * 
   * - The value cannot exceed the IP address limit for the instance type. For more information, see [Instance families](https://help.aliyun.com/zh/ecs/user-guide/overview-of-instance-families).
   * 
   * - NetworkInterface.N.SecondaryPrivateIpAddressCount assigns secondary private IPv4 addresses (excluding the primary private IP) to the network interface. The system randomly assigns addresses from the available CIDR block of the virtual switch (NetworkInterface.N.VSwitchId).
   * 
   * @example
   * 2
   */
  secondaryPrivateIpAddressCount?: number;
  /**
   * @remarks
   * The IDs of one or more security groups to which the elastic network interface belongs.
   */
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      ipv6AddressCount: 'Ipv6AddressCount',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      secondaryPrivateIpAddressCount: 'SecondaryPrivateIpAddressCount',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      ipv6AddressCount: 'number',
      networkInterfaceTrafficMode: 'string',
      secondaryPrivateIpAddressCount: 'number',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsResourcePoolOptionsPrivatePoolTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the private pool.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the private pool.
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

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsResourcePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The private pool ID. This is either the elastic provisioning service ID or the capacity reservation service ID.
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * Filters available Target private pools by tag.
   */
  privatePoolTags?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsResourcePoolOptionsPrivatePoolTags[];
  /**
   * @remarks
   * Resource pools include private pools generated after elastic provisioning or capacity reservation services take effect, along with public pools, for instance startup selection. Valid values:
   * 
   * - PrivatePoolFirst: Private pool first. With this strategy, if ResourcePoolOptions.PrivatePoolIds is specified or PrivatePoolTags conditions are met, the corresponding private pool is prioritized. If no private pool is specified or the specified private pool lacks capacity, open-type private pools are automatically matched. If no matching private pool exists, public pool resources are used.
   * 
   * - PrivatePoolOnly: Private pool only. With this strategy, ResourcePoolOptions.PrivatePoolIds must be specified. If the specified private pool lacks capacity, the instance fails to start.
   * 
   * - PublicPoolFirst: Public pool first. Public pool resources are prioritized for instance creation. If public pool resources are insufficient, private pool resources supplement them. Open-type private pools are automatically matched first. If no matching private pool exists, specified ResourcePoolOptions.PrivatePoolIds or Target-type private pools meeting PrivatePoolTags conditions are used.
   * 
   * - None: Do not use resource pool strategy.
   * 
   * @example
   * PrivatePoolFirst
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      privatePoolIds: 'PrivatePoolIds',
      privatePoolTags: 'PrivatePoolTags',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolIds: { 'type': 'array', 'itemType': 'string' },
      privatePoolTags: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurationsResourcePoolOptionsPrivatePoolTags },
      strategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.privatePoolIds)) {
      $dara.Model.validateArray(this.privatePoolIds);
    }
    if(Array.isArray(this.privatePoolTags)) {
      $dara.Model.validateArray(this.privatePoolTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsSchedulerOptions extends $dara.Model {
  /**
   * @remarks
   * > This parameter is in invitational preview and is not yet available for general use.
   * 
   * @example
   * testManagedPrivateSpaceId
   */
  managedPrivateSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      managedPrivateSpaceId: 'ManagedPrivateSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedPrivateSpaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsSecurityOptions extends $dara.Model {
  /**
   * @remarks
   * The confidential computing mode. Valid values:
   * 
   * - Enclave: The ECS instance uses Enclave to build a confidential computing environment. For more information, see [Use Enclave to build a confidential computing environment](https://help.aliyun.com/document_detail/203433.html).
   * 
   * - TDX: Builds a TDX confidential computing environment. For more information, see [Build a TDX confidential computing environment](https://help.aliyun.com/document_detail/479090.html).
   * 
   * @example
   * TDX
   */
  confidentialComputingMode?: string;
  static names(): { [key: string]: string } {
    return {
      confidentialComputingMode: 'ConfidentialComputingMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidentialComputingMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsSpotPriceLimits extends $dara.Model {
  /**
   * @remarks
   * The instance type of the spot instance.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The bid price for the spot instance.
   * 
   * @example
   * 0.125
   */
  priceLimit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      priceLimit: 'PriceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      priceLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. N ranges from 1 to 20.
   * 
   * If you specify this value, it cannot be an empty string. It can contain up to 128 characters, must not start with `aliyun` or `acs:`, and must not contain `http://` or `https://`.
   * 
   * @example
   * binary
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance. N ranges from 1 to 20.
   * 
   * If you specify this value, it can be an empty string. It can contain up to 128 characters, must not start with `acs:`, and must not contain `http://` or `https://`.
   * 
   * @example
   * alterTable
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

export class DescribeScalingConfigurationsResponseBodyScalingConfigurations extends $dara.Model {
  /**
   * @remarks
   * Whether the Dedicated Host instance is associated with a dedicated host. Valid values:
   * 
   * - default: The instance is not associated with a dedicated host. If economical mode is enabled, when the instance restarts after being stopped and the original dedicated host lacks sufficient resources, the instance is placed on another dedicated host in the automatic deployment resource pool.
   * 
   * - host: The instance is associated with a dedicated host. If economical mode is enabled, when the instance restarts after being stopped, it remains on the original dedicated host. If the original dedicated host lacks sufficient resources, the instance fails to restart.
   * 
   * @example
   * default
   */
  affinity?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * Specifying both CPU and Memory defines a range of instance types. For example, CPU=2 and Memory=16 defines all instance types with 2 vCPUs and 16 GiB memory. Auto Scaling determines available instance types based on I/O optimization, zone, and other factors, then creates the lowest-priced instance according to price sorting.
   * 
   * > This range-based configuration takes effect only in cost optimization mode when no instance type is specified in the scaling configuration.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * CPU options.
   */
  cpuOptions?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsCpuOptions;
  /**
   * @remarks
   * The creation time of the scaling configuration.
   * 
   * @example
   * 2014-08-14T10:58Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The operating mode for burstable instances. Valid values:
   * 
   * - Standard: Standard mode. For performance details, see the Performance-constrained mode section in [What are burstable instances?](https://help.aliyun.com/document_detail/59977.html)
   * 
   * - Unlimited: Unlimited mode. For performance details, see the Unlimited mode section in [What are burstable instances?](https://help.aliyun.com/document_detail/59977.html)
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The custom priority for ECS instance type plus vSwitch combinations.
   * >Notice: This parameter takes effect only when the scaling group\\"s scaling policy is set to priority-based.
   * 
   * If Auto Scaling cannot create an instance using a higher-priority instance type plus vSwitch combination, it automatically tries the next priority combination.
   * 
   * > If you specify custom priorities for only some instance type plus vSwitch combinations, unspecified combinations have lower priority. Among unspecified combinations, priority follows the scaling group\\"s vSwitch order and the scaling configuration\\"s instance type order.
   * >
   * > - Example: Scaling group vSwitch order is vsw1, vsw2. Scaling configuration instance type order is type1, type2. Custom priority order is ["vsw2+type2", "vsw1+type2"]. Final priority order is: "vsw2+type2" > "vsw1+type2" > "vsw1+type1" > "vsw2+type1".
   */
  customPriorities?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsCustomPriorities[];
  /**
   * @remarks
   * The collection of data disk information.
   */
  dataDisks?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsDataDisks[];
  /**
   * @remarks
   * The dedicated host cluster ID.
   * 
   * @example
   * dc-zm04u8r3lohsq****
   */
  dedicatedHostClusterId?: string;
  /**
   * @remarks
   * Whether to create the ECS instance on a Dedicated Host. Since Dedicated Hosts do not support spot instances, specifying DedicatedHostId automatically ignores SpotStrategy and SpotPriceLimit settings in the request.
   * 
   * You can call the DescribeDedicatedHosts API to query the list of Dedicated Host IDs.
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The instance release protection attribute, specifying whether the instance can be directly released through the ECS console or API (DeleteInstance). Valid values:
   * 
   * - true: Enable instance release protection. The instance cannot be directly released through the ECS console or API (DeleteInstance).
   * 
   * - false: Disable instance release protection. The instance can be directly released through the ECS console or API (DeleteInstance).
   * 
   * > This attribute applies only to pay-as-you-go instances to prevent accidental deletion of instances scaled out by Auto Scaling. It does not affect normal scale-in activities. Instances with release protection enabled can still be released during scale-in activities.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The ID of the deployment set to which the ECS instance belongs.
   * 
   * @example
   * ds-bp1frxuzdg87zh4p****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The hostname of the ECS instance.
   * 
   * @example
   * LocalHost
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the HPC cluster to which the ECS instance belongs.
   * 
   * @example
   * hpc-clus****
   */
  hpcClusterId?: string;
  /**
   * @remarks
   * Whether to enable the instance metadata access channel. Valid values:
   * 
   * - enabled: Enabled.
   * 
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  httpEndpoint?: string;
  /**
   * @remarks
   * Whether to enforce hardened mode (IMDSv2) when accessing instance metadata. Valid values:
   * 
   * - optional: Do not enforce.
   * 
   * - required: Enforce. When set, standard mode cannot access instance metadata.
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The image family name. Setting this parameter retrieves the latest available image within the specified image family for instance creation. If ImageId is already set, do not set this parameter.
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The image file ID used as the image resource for automatic instance creation.
   * 
   * @example
   * centos6u5_64_20G_aliaegis_2014****.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The image file name.
   * 
   * @example
   * centos6u5_64_20G_aliaegis_2014****.vhd
   */
  imageName?: string;
  /**
   * @remarks
   * Whether the ECS instance uses the ecs-user account to log on. Valid values:
   * 
   * - true: Yes.
   * 
   * - false: No.
   * 
   * @example
   * false
   */
  imageOptionsLoginAsNonRoot?: boolean;
  /**
   * @remarks
   * The image source. Valid values:
   * 
   * - system: Public images provided by Alibaba Cloud.
   * 
   * - self: Custom images you created.
   * 
   * - others: Shared or community images provided by other Alibaba Cloud users.
   * 
   * - marketplace: Images provided by Alibaba Cloud Marketplace.
   * 
   * @example
   * system
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The description of the ECS instance.
   * 
   * @example
   * FinanceDept
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The series of the ECS instance.
   * 
   * @example
   * ecs-3
   */
  instanceGeneration?: string;
  /**
   * @remarks
   * The name of the ECS instance.
   * 
   * @example
   * instance****
   */
  instanceName?: string;
  /**
   * @remarks
   * The collection of intelligent configuration information used to filter eligible instance type ranges.
   */
  instancePatternInfos?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsInstancePatternInfos[];
  /**
   * @remarks
   * The instance type of the ECS instance.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * When alternative mode is enabled, if issues like inventory shortages occur, similar instance types of the same size are supplemented based on the currently selected instance type, or switches in alternative zones are created and added to the scaling group.
   */
  instanceTypeCandidateOptions?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsInstanceTypeCandidateOptions;
  /**
   * @remarks
   * The collection of ECS instance types.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The network billing type. Valid values:
   * 
   * - PayByBandwidth: Pay-by-bandwidth. InternetMaxBandwidthOut is the fixed bandwidth value.
   * 
   * - PayByTraffic: Pay-by-data-transfer. InternetMaxBandwidthOut is only a bandwidth cap. Billing is based on actual network traffic.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Whether the instance is I/O optimized. Valid values:
   * 
   * - none: Not I/O optimized.
   * 
   * - optimized: I/O optimized.
   * 
   * @example
   * none
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The number of randomly generated IPv6 addresses assigned to the elastic network interface.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The name of the key pair used to log on to the ECS instance.
   * 
   * @example
   * keypair****
   */
  keyPairName?: string;
  /**
   * @remarks
   * The status of the scaling configuration within the scaling group. Valid values:
   * 
   * - Active: The scaling configuration is active. The scaling group uses active scaling configurations to automatically create ECS instances.
   * 
   * - Inactive: The scaling configuration is inactive. Inactive scaling configurations exist in the scaling group but are not used to automatically create ECS instances.
   * 
   * @example
   * Active
   */
  lifecycleState?: string;
  /**
   * @remarks
   * The weight of the ECS instance as a backend server. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  loadBalancerWeight?: number;
  /**
   * @remarks
   * Memory size. Unit: GiB.
   * 
   * Specifying both CPU and Memory defines a range of instance types. For example, CPU=2 and Memory=16 defines all instance types with 2 vCPUs and 16 GiB memory. Auto Scaling determines available instance types based on I/O optimization, zone, and other factors, then creates the lowest-priced instance according to price sorting.
   * 
   * > This range-based configuration takes effect only in cost optimization mode when no instance type is specified in the scaling configuration.
   * 
   * @example
   * 16
   */
  memory?: number;
  /**
   * @remarks
   * The list of elastic network interfaces.
   */
  networkInterfaces?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsNetworkInterfaces[];
  /**
   * @remarks
   * Whether to use the password preset in the image.
   * 
   * @example
   * true
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * Whether to set an instance password. Valid values:
   * 
   * - true: Set instance password.
   * 
   * - false: Do not set instance password.
   * 
   * @example
   * false
   */
  passwordSetted?: boolean;
  /**
   * @remarks
   * The private pool ID. This is either the elastic provisioning service ID or the capacity reservation service ID.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  privatePoolOptions_id?: string;
  /**
   * @remarks
   * The private pool capacity option for instance startup. After elastic provisioning or capacity reservation services take effect, they generate private pool capacity for instance startup selection. Valid values:
   * 
   * - Open: Open mode. Automatically matches open-type private pool capacity. If no matching private pool capacity exists, uses public pool resources to start the instance.
   * 
   * - Target: Target mode. Starts the instance using the specified private pool capacity. If that capacity is unavailable, the instance fails to start.
   * 
   * - None: Do not use mode. Instance startup does not use private pool capacity.
   * 
   * @example
   * Open
   */
  privatePoolOptions_matchCriteria?: string;
  /**
   * @remarks
   * The RAM role name of the ECS instance. RAM role names are provided and maintained by RAM. You can call ListRoles to query available RAM roles.
   * 
   * @example
   * ramrole****
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The ID of the resource group to which the ECS instance belongs.
   * 
   * @example
   * rg-aekzn2ou7xo****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource pool strategy used when creating instances.
   * 
   * - This parameter takes effect only when creating pay-as-you-go instances.
   */
  resourcePoolOptions?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsResourcePoolOptions;
  /**
   * @remarks
   * The ID of the scaling configuration.
   * 
   * @example
   * asc-bp1ezrfgoyn5kijl****
   */
  scalingConfigurationId?: string;
  /**
   * @remarks
   * The name of the scaling configuration.
   * 
   * @example
   * scalingconfigura****
   */
  scalingConfigurationName?: string;
  /**
   * @remarks
   * The ID of the scaling group to which the scaling configuration belongs.
   * 
   * @example
   * asg-bp17pelvl720x3v7****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not yet available for general use.
   */
  schedulerOptions?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsSchedulerOptions;
  /**
   * @remarks
   * Whether to enable security hardening. Valid values:
   * 
   * - Active: Enable security hardening. Applies only to public images.
   * 
   * - Deactive: Disable security hardening. Applies to all image types.
   * 
   * @example
   * Active
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group to which the ECS instance belongs. ECS instances in the same security group can access each other.
   * 
   * @example
   * sg-bp18kz60mefs****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of multiple security groups to which the ECS instance belongs. ECS instances in the same security group can access each other.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * Security options.
   */
  securityOptions?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsSecurityOptions;
  /**
   * @remarks
   * The reserved duration for the spot instance. Unit: hours.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The interruption mode for spot instances.
   * 
   * @example
   * Terminate
   */
  spotInterruptionBehavior?: string;
  /**
   * @remarks
   * The collection of spot instance information.
   */
  spotPriceLimits?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsSpotPriceLimits[];
  /**
   * @remarks
   * The preemption policy for pay-as-you-go instances. Valid values:
   * 
   * - NoSpot: standard pay-as-you-go instance.
   * 
   * - SpotWithPriceLimit: spot instance with a maximum price limit.
   * 
   * - SpotAsPriceGo: system automatically bids based on current market price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The storage set ID.
   * 
   * @example
   * ss-bp67acfmxazb4p****
   */
  storageSetId?: string;
  /**
   * @remarks
   * The maximum number of partitions in the storage set. Value must be an integer greater than or equal to 2.
   * 
   * @example
   * 2
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The ID of the automatic snapshot policy applied to the system disk.
   * 
   * @example
   * sp-bp12m37ccmxvbmi5****
   */
  systemDiskAutoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Whether Burst (performance burst) is enabled for the system disk. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * > This parameter is supported only when SystemDisk.Category is cloud_auto.
   * 
   * @example
   * false
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * Multiple disk categories for the system disk. The first disk category has the highest priority, followed by others in descending order. If Auto Scaling cannot use a higher-priority disk category, it automatically tries the next priority category to create the system disk. Valid values:
   * 
   * - cloud: basic disk.
   * 
   * - cloud_efficiency: ultra disk.
   * 
   * - cloud_ssd: standard SSD.
   * 
   * - cloud_essd: ESSD.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The disk category of the system disk. Valid values:
   * 
   * - cloud: basic disk.
   * 
   * - cloud_efficiency: ultra disk.
   * 
   * - cloud_ssd: standard SSD.
   * 
   * - ephemeral_ssd: local SSD.
   * 
   * - cloud_essd: ESSD.
   * 
   * - cloud_auto: ESSD AutoPL.
   * 
   * @example
   * cloud
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The description of the system disk.
   * 
   * @example
   * Test system disk.
   */
  systemDiskDescription?: string;
  /**
   * @remarks
   * The encryption algorithm used for the system disk. Valid values:
   * 
   * - AES-256.
   * 
   * - SM4-128.
   * 
   * @example
   * AES-256
   */
  systemDiskEncryptAlgorithm?: string;
  /**
   * @remarks
   * Whether the system disk is encrypted. Valid values:
   * 
   * - true: Encrypted.
   * 
   * - false: Not encrypted.
   * 
   * @example
   * false
   */
  systemDiskEncrypted?: boolean;
  /**
   * @remarks
   * The KMS key ID used for the system disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKMSKeyId?: string;
  /**
   * @remarks
   * The name of the system disk.
   * 
   * @example
   * cloud_ssd_Test
   */
  systemDiskName?: string;
  /**
   * @remarks
   * The performance level of the ESSD system disk.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The provisioned IOPS (Input/Output Operations Per Second) performance metric for the system disk.
   * 
   * > IOPS (Input/Output Operations Per Second) measures the number of I/O operations per second, indicating block storage read/write capability. Unit: operations.
   * 
   * @example
   * 100
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB.
   * 
   * @example
   * 100
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The collection of tag information.
   */
  tags?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsTags[];
  /**
   * @remarks
   * Whether to create the instance on a Dedicated Host. Valid values:
   * 
   * - default: Create a non-Dedicated Host instance.
   * 
   * - host: Create a Dedicated Host instance. If you do not specify DedicatedHostId, Alibaba Cloud automatically selects a Dedicated Host to place the instance.
   * 
   * Default value: default.
   * 
   * @example
   * default
   */
  tenancy?: string;
  /**
   * @remarks
   * The custom data for the ECS instance.
   * 
   * @example
   * echo hello ecs!
   */
  userData?: string;
  /**
   * @remarks
   * The weights corresponding to specified instance types, representing the capacity size of a single instance in the scaling group. Higher weights require fewer instances of that type to meet the desired capacity.
   */
  weightedCapacities?: number[];
  /**
   * @remarks
   * The zone ID of the instance. You can call DescribeZones to get the zone list.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      affinity: 'Affinity',
      cpu: 'Cpu',
      cpuOptions: 'CpuOptions',
      creationTime: 'CreationTime',
      creditSpecification: 'CreditSpecification',
      customPriorities: 'CustomPriorities',
      dataDisks: 'DataDisks',
      dedicatedHostClusterId: 'DedicatedHostClusterId',
      dedicatedHostId: 'DedicatedHostId',
      deletionProtection: 'DeletionProtection',
      deploymentSetId: 'DeploymentSetId',
      hostName: 'HostName',
      hpcClusterId: 'HpcClusterId',
      httpEndpoint: 'HttpEndpoint',
      httpTokens: 'HttpTokens',
      imageFamily: 'ImageFamily',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOptionsLoginAsNonRoot: 'ImageOptionsLoginAsNonRoot',
      imageOwnerAlias: 'ImageOwnerAlias',
      instanceDescription: 'InstanceDescription',
      instanceGeneration: 'InstanceGeneration',
      instanceName: 'InstanceName',
      instancePatternInfos: 'InstancePatternInfos',
      instanceType: 'InstanceType',
      instanceTypeCandidateOptions: 'InstanceTypeCandidateOptions',
      instanceTypes: 'InstanceTypes',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      ipv6AddressCount: 'Ipv6AddressCount',
      keyPairName: 'KeyPairName',
      lifecycleState: 'LifecycleState',
      loadBalancerWeight: 'LoadBalancerWeight',
      memory: 'Memory',
      networkInterfaces: 'NetworkInterfaces',
      passwordInherit: 'PasswordInherit',
      passwordSetted: 'PasswordSetted',
      privatePoolOptions_id: 'PrivatePoolOptions.Id',
      privatePoolOptions_matchCriteria: 'PrivatePoolOptions.MatchCriteria',
      ramRoleName: 'RamRoleName',
      resourceGroupId: 'ResourceGroupId',
      resourcePoolOptions: 'ResourcePoolOptions',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingConfigurationName: 'ScalingConfigurationName',
      scalingGroupId: 'ScalingGroupId',
      schedulerOptions: 'SchedulerOptions',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      securityOptions: 'SecurityOptions',
      spotDuration: 'SpotDuration',
      spotInterruptionBehavior: 'SpotInterruptionBehavior',
      spotPriceLimits: 'SpotPriceLimits',
      spotStrategy: 'SpotStrategy',
      storageSetId: 'StorageSetId',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
      systemDiskAutoSnapshotPolicyId: 'SystemDiskAutoSnapshotPolicyId',
      systemDiskBurstingEnabled: 'SystemDiskBurstingEnabled',
      systemDiskCategories: 'SystemDiskCategories',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskDescription: 'SystemDiskDescription',
      systemDiskEncryptAlgorithm: 'SystemDiskEncryptAlgorithm',
      systemDiskEncrypted: 'SystemDiskEncrypted',
      systemDiskKMSKeyId: 'SystemDiskKMSKeyId',
      systemDiskName: 'SystemDiskName',
      systemDiskPerformanceLevel: 'SystemDiskPerformanceLevel',
      systemDiskProvisionedIops: 'SystemDiskProvisionedIops',
      systemDiskSize: 'SystemDiskSize',
      tags: 'Tags',
      tenancy: 'Tenancy',
      userData: 'UserData',
      weightedCapacities: 'WeightedCapacities',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affinity: 'string',
      cpu: 'number',
      cpuOptions: DescribeScalingConfigurationsResponseBodyScalingConfigurationsCpuOptions,
      creationTime: 'string',
      creditSpecification: 'string',
      customPriorities: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurationsCustomPriorities },
      dataDisks: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurationsDataDisks },
      dedicatedHostClusterId: 'string',
      dedicatedHostId: 'string',
      deletionProtection: 'boolean',
      deploymentSetId: 'string',
      hostName: 'string',
      hpcClusterId: 'string',
      httpEndpoint: 'string',
      httpTokens: 'string',
      imageFamily: 'string',
      imageId: 'string',
      imageName: 'string',
      imageOptionsLoginAsNonRoot: 'boolean',
      imageOwnerAlias: 'string',
      instanceDescription: 'string',
      instanceGeneration: 'string',
      instanceName: 'string',
      instancePatternInfos: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurationsInstancePatternInfos },
      instanceType: 'string',
      instanceTypeCandidateOptions: DescribeScalingConfigurationsResponseBodyScalingConfigurationsInstanceTypeCandidateOptions,
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      ipv6AddressCount: 'number',
      keyPairName: 'string',
      lifecycleState: 'string',
      loadBalancerWeight: 'number',
      memory: 'number',
      networkInterfaces: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurationsNetworkInterfaces },
      passwordInherit: 'boolean',
      passwordSetted: 'boolean',
      privatePoolOptions_id: 'string',
      privatePoolOptions_matchCriteria: 'string',
      ramRoleName: 'string',
      resourceGroupId: 'string',
      resourcePoolOptions: DescribeScalingConfigurationsResponseBodyScalingConfigurationsResourcePoolOptions,
      scalingConfigurationId: 'string',
      scalingConfigurationName: 'string',
      scalingGroupId: 'string',
      schedulerOptions: DescribeScalingConfigurationsResponseBodyScalingConfigurationsSchedulerOptions,
      securityEnhancementStrategy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      securityOptions: DescribeScalingConfigurationsResponseBodyScalingConfigurationsSecurityOptions,
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      spotPriceLimits: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurationsSpotPriceLimits },
      spotStrategy: 'string',
      storageSetId: 'string',
      storageSetPartitionNumber: 'number',
      systemDiskAutoSnapshotPolicyId: 'string',
      systemDiskBurstingEnabled: 'boolean',
      systemDiskCategories: { 'type': 'array', 'itemType': 'string' },
      systemDiskCategory: 'string',
      systemDiskDescription: 'string',
      systemDiskEncryptAlgorithm: 'string',
      systemDiskEncrypted: 'boolean',
      systemDiskKMSKeyId: 'string',
      systemDiskName: 'string',
      systemDiskPerformanceLevel: 'string',
      systemDiskProvisionedIops: 'number',
      systemDiskSize: 'number',
      tags: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurationsTags },
      tenancy: 'string',
      userData: 'string',
      weightedCapacities: { 'type': 'array', 'itemType': 'number' },
      zoneId: 'string',
    };
  }

  validate() {
    if(this.cpuOptions && typeof (this.cpuOptions as any).validate === 'function') {
      (this.cpuOptions as any).validate();
    }
    if(Array.isArray(this.customPriorities)) {
      $dara.Model.validateArray(this.customPriorities);
    }
    if(Array.isArray(this.dataDisks)) {
      $dara.Model.validateArray(this.dataDisks);
    }
    if(Array.isArray(this.instancePatternInfos)) {
      $dara.Model.validateArray(this.instancePatternInfos);
    }
    if(this.instanceTypeCandidateOptions && typeof (this.instanceTypeCandidateOptions as any).validate === 'function') {
      (this.instanceTypeCandidateOptions as any).validate();
    }
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    if(Array.isArray(this.networkInterfaces)) {
      $dara.Model.validateArray(this.networkInterfaces);
    }
    if(this.resourcePoolOptions && typeof (this.resourcePoolOptions as any).validate === 'function') {
      (this.resourcePoolOptions as any).validate();
    }
    if(this.schedulerOptions && typeof (this.schedulerOptions as any).validate === 'function') {
      (this.schedulerOptions as any).validate();
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    if(this.securityOptions && typeof (this.securityOptions as any).validate === 'function') {
      (this.securityOptions as any).validate();
    }
    if(Array.isArray(this.spotPriceLimits)) {
      $dara.Model.validateArray(this.spotPriceLimits);
    }
    if(Array.isArray(this.systemDiskCategories)) {
      $dara.Model.validateArray(this.systemDiskCategories);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.weightedCapacities)) {
      $dara.Model.validateArray(this.weightedCapacities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
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
   * 50
   */
  pageSize?: number;
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
   * The collection of scaling configuration information.
   */
  scalingConfigurations?: DescribeScalingConfigurationsResponseBodyScalingConfigurations[];
  /**
   * @remarks
   * The total number of scaling configurations.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scalingConfigurations: 'ScalingConfigurations',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scalingConfigurations: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurations },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scalingConfigurations)) {
      $dara.Model.validateArray(this.scalingConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

