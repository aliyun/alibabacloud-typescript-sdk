// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsCustomPriorities extends $dara.Model {
  /**
   * @remarks
   * The ECS instance type.
   * 
   * @example
   * ecs.c6a.4xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The vSwitch ID.
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
   * The ID of the automatic snapshot policy that is applied to the data disk.
   * 
   * @example
   * sp-bp19nq9enxqkomib****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Indicates whether the Performance Burst feature is enabled for the data disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  This parameter is available only when you set `DataDisk.Category` to `cloud_auto`.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The categories of the data disks. The values are sorted based on their priorities. The first value has the highest priority. If Auto Scaling cannot create instances by using the disk category of the highest priority, Auto Scaling creates instances by using the disk category of the next highest priority. Valid values:
   * 
   * *   cloud: basic disk. DeleteWithInstance of a basic disk created along with the ECS instance is set to true.
   * *   cloud_efficiency: ultra disk.
   * *   cloud_ssd: standard SSD.
   * *   cloud_essd: ESSD.
   */
  categories?: string[];
  /**
   * @remarks
   * The category of the data disk. Valid values:
   * 
   * *   cloud: basic disk. DeleteWithInstance of a basic disk created along with the ECS instance is set to true.
   * *   cloud_efficiency: ultra disk.
   * *   cloud_ssd: standard SSD.
   * *   ephemeral_ssd: local SSD.
   * *   cloud_essd: ESSD.
   * *   cloud_auto: ESSD AutoPL.
   * 
   * @example
   * cloud
   */
  category?: string;
  /**
   * @remarks
   * Indicates whether the data disk is released when the instance to which the data disk is attached is released. Valid values:
   * 
   * *   true
   * *   false
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
   * Indicates whether the data disk is encrypted. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key that is applied to the data disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The PL of the data disk that is an ESSD.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned IOPS of the data disk.
   * 
   * >  IOPS measures the number of read and write operations that an Elastic Block Storage (EBS) device can process per second.
   * 
   * @example
   * 100
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of the data disk. Unit: GB. Valid values:
   * 
   * *   5 to 2000 if you set Category to cloud.
   * *   20 to 32768 if you set Category to cloud_efficiency.
   * *   20 to 32768 if you set Category to cloud_ssd.
   * *   20 to 32768 if you set Category to cloud_essd.
   * *   5 to 800 if you set Category to ephemeral_ssd.
   * 
   * @example
   * 200
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot based on which the data disk is created.
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
   * The architectures of instance types. Valid values:
   * 
   * *   X86: x86.
   * *   Heterogeneous: heterogeneous computing, such as GPU-accelerated or FPGA-accelerated.
   * *   BareMetal: ECS Bare Metal Instance.
   * *   Arm: Arm.
   */
  architectures?: string[];
  /**
   * @remarks
   * Indicates whether burstable instance types are included. Valid values:
   * 
   * *   Exclude: Burstable instance types are not included.
   * *   Include: Burstable instance types are included.
   * *   Required: Only burstable instance types are included.
   * 
   * @example
   * Include
   */
  burstablePerformance?: string;
  /**
   * @remarks
   * The number of vCPUs of the instance type.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The CPU architectures of the instance types. Valid values:
   * 
   * >  You can specify 1 to 2 CPU architectures.
   * 
   * *   x86
   * *   Arm
   */
  cpuArchitectures?: string[];
  /**
   * @remarks
   * The instance types that are excluded. You can use wildcard characters, such as an asterisk (\\*), to exclude an instance type or an instance family. Examples:
   * 
   * *   ecs.c6.large: The ecs.c6.large instance type is excluded.
   * *   ecs.c6.\\*: The c6 instance family is excluded.
   */
  excludedInstanceTypes?: string[];
  /**
   * @remarks
   * The GPU models.
   */
  gpuSpecs?: string[];
  /**
   * @remarks
   * The categories of ECS instances. Valid values:
   * 
   * >  Up to 10 categories of ECS instances are supported.
   * 
   * *   General-purpose: general-purpose instance type.
   * *   Compute-optimized: compute-optimized instance type.
   * *   Memory-optimized: memory-optimized instance type.
   * *   Big data: big data instance type.
   * *   Local SSDs: instance type with local SSDs.
   * *   High Clock Speed: instance type with high clock speeds.
   * *   Enhanced: enhanced instance type.
   * *   Shared: shared instance type.
   * *   Compute-optimized with GPU: GPU-accelerated compute-optimized instance type.
   * *   Visual Compute-optimized: visual compute-optimized instance type.
   * *   Heterogeneous Service: heterogeneous service instance type.
   * *   Compute-optimized with FPGA: FPGA-accelerated compute-optimized instance type.
   * *   Compute-optimized with NPU: NPU-accelerated compute-optimized instance type.
   * *   ECS Bare Metal: ECS Bare Metal Instance type.
   * *   High Performance Compute: HPC-optimized instance type.
   */
  instanceCategories?: string[];
  /**
   * @remarks
   * The level of the instance family.
   * 
   * *   EntryLevel: entry level (shared instance types). Instance types of this level are the most cost-effective but may not provide stable computing performance. Instance types of this level are suitable for scenarios in which the CPU utilization is low. For more information, see [Shared instance families](https://help.aliyun.com/document_detail/108489.html).
   * *   EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources, and are suitable for scenarios that require high stability. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html).
   * *   CreditEntryLevel: credit entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for scenarios in which the CPU utilization is low but may fluctuate in specific cases. For more information, see [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The instance families that are queried. You can query 1 to 10 instance families in each call.
   */
  instanceTypeFamilies?: string[];
  /**
   * @remarks
   * The maximum hourly price for the pay-as-you-go or preemptible instances.
   * 
   * @example
   * 2
   */
  maxPrice?: number;
  /**
   * @remarks
   * The maximum number of vCPUs per instance type.
   * 
   * >  The value of MaximumCpuCoreCount cannot exceed four times the value of MinimumCpuCoreCount.
   * 
   * @example
   * 4
   */
  maximumCpuCoreCount?: number;
  /**
   * @remarks
   * The maximum number of GPUs per instance. The value must be a positive integer.
   * 
   * @example
   * 2
   */
  maximumGpuAmount?: number;
  /**
   * @remarks
   * The maximum memory size per instance. Unit: GiB.
   * 
   * @example
   * 4
   */
  maximumMemorySize?: number;
  /**
   * @remarks
   * The memory size of the instance type. Unit: GiB.
   * 
   * @example
   * 4
   */
  memory?: number;
  /**
   * @remarks
   * The baseline vCPU computing performance (overall baseline performance of all vCPUs) per t5 or t6 burstable instance.
   * 
   * @example
   * 12
   */
  minimumBaselineCredit?: number;
  /**
   * @remarks
   * The minimum number of vCPUs per instance type.
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
   * The minimum number of elastic network interfaces (ENIs) per instance.
   * 
   * @example
   * 2
   */
  minimumEniQuantity?: number;
  /**
   * @remarks
   * The minimum number of GPUs per instance. The value must be a positive integer.
   * 
   * @example
   * 2
   */
  minimumGpuAmount?: number;
  /**
   * @remarks
   * The initial vCPU credits per t5 or t6 burstable instance.
   * 
   * @example
   * 12
   */
  minimumInitialCredit?: number;
  /**
   * @remarks
   * The minimum memory size per instance. Unit: GiB.
   * 
   * @example
   * 4
   */
  minimumMemorySize?: number;
  /**
   * @remarks
   * The processor models of the instance types. You can specify 1 to 10 processor models.
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

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsNetworkInterfaces extends $dara.Model {
  /**
   * @remarks
   * The ENI type. Valid values:
   * 
   * *   Primary: the primary ENI
   * *   Secondary: the secondary ENI
   * 
   * @example
   * Primary
   */
  instanceType?: string;
  /**
   * @remarks
   * The number of randomly generated IPv6 addresses that are allocated to the primary ENI.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The communication mode of the ENI. Valid values:
   * 
   * *   Standard: The TCP communication mode is used.
   * *   HighPerformance: The Elastic RDMA Interface (ERI) is enabled and the remote direct memory access (RDMA) communication mode is used.
   * 
   * @example
   * HighPerformance
   */
  networkInterfaceTrafficMode?: string;
  secondaryPrivateIpAddressCount?: number;
  /**
   * @remarks
   * The IDs of the security groups to which the ENIs belong.
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

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsResourcePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The IDs of private pools. The ID of a private pool is the same as the ID of the elasticity assurance or capacity reservation that is associated with the private pool.
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * The resource pool used for instance creation, which can be the public pool or a private pool associated with any active elasticity assurance or capacity reservation. Valid values:
   * 
   * *   PrivatePoolFirst: prioritizes private pools. When this option is set along with ResourcePoolOptions.PrivatePoolIds, the specified private pools are used first. If you leave ResourcePoolOptions.PrivatePoolIds empty or if the specified private pools lack sufficient capacity, the system will automatically use available open private pools instead. If no matching private pools are available, the system defaults to the public pool.
   * *   PrivatePoolOnly: uses only private pools. If you use this value, you must specify ResourcePoolOptions.PrivatePoolIds. If the specified private pools lack sufficient capacity, instance creation will fail.
   * *   None: uses no resource pools.
   * 
   * @example
   * PrivatePoolFirst
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      privatePoolIds: 'PrivatePoolIds',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolIds: { 'type': 'array', 'itemType': 'string' },
      strategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.privatePoolIds)) {
      $dara.Model.validateArray(this.privatePoolIds);
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
   * >  This parameter is in invitational preview and is not available for use.
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
   * The instance type of the preemptible instances.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The price limit of the preemptible instances.
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
   * The tag key of the ECS instance. You can specify up to 20 tags for each ECS instance.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 128 characters in length. It cannot start with `acs:` or `aliyun` and cannot contain `http://` or `https://`.
   * 
   * @example
   * binary
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the ECS instance. You can specify up to 20 tags for each ECS instance.
   * 
   * The tag value can be an empty string. The tag value can be up to 128 characters in length. It cannot start with `acs:` and cannot contain `http://` or `https://`.
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
   * Indicates whether the ECS instance on a dedicated host is associated with the dedicated host. Valid values:
   * 
   * *   default: The instance is not associated with the dedicated host. If you restart an instance that was stopped in Economical Mode and the original dedicated host of the instance has insufficient resources, the instance is automatically deployed to another dedicated host in the automatic deployment resource pool.
   * *   host: The instance is associated with the dedicated host. If you restart an instance that was stopped in Economical Mode, the instance remains on the original dedicated host. If the available resources of the original dedicated host are insufficient, the instance cannot be restarted.
   * 
   * @example
   * default
   */
  affinity?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * You can specify CPU and Memory to define the range of instance types. For example, if you set CPU to 2 and Memory to 16, the instance types that have 2 vCPUs and 16 GiB are returned. If you specify CPU and Memory, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones and preferentially creates instances by using the lowest-priced instance type.
   * 
   * >  You can specify CPU and Memory to define instance types only when you set Scaling Policy to Cost Optimization and no instance type is specified in the scaling configuration.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The time at which the scaling configuration was created.
   * 
   * @example
   * 2014-08-14T10:58Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The performance mode of the burstable instances. Valid values:
   * 
   * *   Standard: the standard mode. For more information, see the "Standard mode" section in the [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html) topic.
   * *   Unlimited: the unlimited mode. For more information, see the "Unlimited mode" section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The priority of the custom ECS instance type + vSwitch combination.
   * 
   * >  This parameter takes effect only when Scaling Policy of the scaling group is set to Priority Policy.
   * 
   * If Auto Scaling cannot create ECS instances by using the custom ECS instance type + vSwitch combination of the highest priority, Auto Scaling creates ECS instances by using the custom ECS instance type + vSwitch combination of the next highest priority.
   * 
   * >  If you specify the priorities of only a portion of custom ECS instance type + vSwitch combinations, Auto Scaling preferentially creates ECS instances by using the custom combinations that have specified priorities. If the custom combinations that have specified priorities do not provide sufficient resources, Auto Scaling creates ECS instances by using the custom combinations that do not have specified priorities based on the specified orders of vSwitches and instance types.
   * 
   * *   Example: the specified order of vSwitches for your scaling group is vsw1 and vsw2 and the specified order of instance types in your scaling configuration is type1 and type 2. In addition, you use CustomPriorities to specify ["vsw2+type2", "vsw1+type2"]. In this example, the vsw2+type2 combination has the highest priority and the vsw2+type1 combination has the lowest priority. The vsw1+type2 combination has a higher priority than the vsw1+type1 combination.
   */
  customPriorities?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsCustomPriorities[];
  /**
   * @remarks
   * The data disks.
   */
  dataDisks?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsDataDisks[];
  /**
   * @remarks
   * The ID of the dedicated host cluster.
   * 
   * @example
   * dc-zm04u8r3lohsq****
   */
  dedicatedHostClusterId?: string;
  /**
   * @remarks
   * The ID of the dedicated host on which the ECS instance is created. Preemptible instances are not supported by dedicated hosts. Therefore, if you specify DedicatedHostId, SpotStrategy and SpotPriceLimit are ignored.
   * 
   * You can call the DescribeDedicatedHosts operation to query the IDs of dedicated hosts.
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * Indicates whether Release Protection is enabled for the ECS instances. You can specify this parameter to determine whether the ECS instances can be deleted by using the ECS console or calling the DeleteInstance operation. Valid values:
   * 
   * *   true: Release Protection is enabled for the ECS instances. You cannot delete the ECS instances by using the ECS console or calling the DeleteInstance operation.
   * *   false: Release Protection is disabled for the ECS instances. You can delete the ECS instances by using the ECS console or calling the DeleteInstance operation.
   * 
   * >  You can enable Release Protection for only pay-as-you-go instances to prevent unexpected instance deletion during scale-in events. The Release Protection feature does not affect normal scaling activities. In other words, an instance that meets the criteria of scale-in policies may be removed from a scaling group during a scale-in event even if you enabled Release Protection for the instance.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The ID of the deployment set to which the Elastic Compute Service (ECS) instances belong.
   * 
   * @example
   * ds-bp1frxuzdg87zh4p****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The hostname series of the ECS instances.
   * 
   * @example
   * LocalHost
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the High Performance Computing (HPC) cluster to which the ECS instances belong.
   * 
   * @example
   * hpc-clus****
   */
  hpcClusterId?: string;
  /**
   * @remarks
   * Indicates whether the access channel is enabled for instance metadata. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  httpEndpoint?: string;
  /**
   * @remarks
   * Indicates whether the security hardening mode (IMDSv2) is forcefully used to access instance metadata. Valid values:
   * 
   * *   optional: The security hardening mode IMDSv2 is not forcibly used.
   * *   required: The security hardening mode (IMDSv2) is forcibly used. After you set this parameter to required, you cannot access instance metadata in normal mode.
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The name of the image family. You can specify this parameter to obtain the latest available images in the current image family for instance creation. If you specify ImageId, you cannot specify `ImageFamily`.
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image file that provides the image resource for Auto Scaling to create ECS instances.
   * 
   * @example
   * centos6u5_64_20G_aliaegis_2014****.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image file.
   * 
   * @example
   * centos6u5_64_20G_aliaegis_2014****.vhd
   */
  imageName?: string;
  /**
   * @remarks
   * Indicates whether the ecs-user username can be used to log on to an ECS instance created from the scaling configuration. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  imageOptionsLoginAsNonRoot?: boolean;
  /**
   * @remarks
   * The image source. Valid values:
   * 
   * *   system: a public image provided by Alibaba Cloud
   * *   self: a custom image that you created
   * *   others: a shared image from another Alibaba Cloud account or a community image published by another Alibaba Cloud account
   * *   marketplace: an Alibaba Cloud Marketplace image
   * 
   * @example
   * system
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The description of the ECS instances.
   * 
   * @example
   * FinanceDept
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The generation of the ECS instances.
   * 
   * @example
   * ecs-3
   */
  instanceGeneration?: string;
  /**
   * @remarks
   * The naming series of the ECS instances.
   * 
   * @example
   * instance****
   */
  instanceName?: string;
  /**
   * @remarks
   * The intelligent configuration settings, which determine the available instance types.
   */
  instancePatternInfos?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsInstancePatternInfos[];
  /**
   * @remarks
   * The instance types of the ECS instances.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The ECS instance types.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method for network usage. Valid values:
   * 
   * *   PayByBandwidth: pay-by-bandwidth. You are charged for the bandwidth that you specified by using InternetMaxBandwidthOut.
   * *   PayByTraffic: pay-by-traffic. You are charged for the actual traffic that you used. InternetMaxBandwidthOut specifies only the maximum available bandwidth.
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
   * 200
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 0
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Indicates whether the ECS instances are I/O optimized. Valid values:
   * 
   * *   none: The ECS instances are not I/O optimized.
   * *   optimized: The ECS instances are I/O optimized.
   * 
   * @example
   * none
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The number of randomly generated IPv6 addresses that are allocated to the elastic network interface (ENI).
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The name of the key pair that is used to log on to an ECS instance created from the scaling configuration.
   * 
   * @example
   * keypair****
   */
  keyPairName?: string;
  /**
   * @remarks
   * The status of the scaling configuration in the scaling group. Valid values:
   * 
   * *   Active: The scaling configuration is active in the scaling group. Auto Scaling uses the scaling configuration that is in the Active state to create ECS instances during scale-out events.
   * *   Inactive: The scaling configuration is inactive in the scaling group. Scaling configurations that are in the Inactive state are still contained in the scaling group, but Auto Scaling does not use the inactive scaling configurations to create ECS instances during scale-out events.
   * 
   * @example
   * Active
   */
  lifecycleState?: string;
  /**
   * @remarks
   * The weight of an ECS instance as a backend server. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  loadBalancerWeight?: number;
  /**
   * @remarks
   * The memory size. Unit: GiB.
   * 
   * You can specify CPU and Memory to define the range of instance types. For example, if you set CPU to 2 and Memory to 16, the instance types that have 2 vCPUs and 16 GiB are returned. If you specify CPU and Memory, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones and preferentially creates instances by using the lowest-priced instance type.
   * 
   * >  You can specify CPU and Memory to define instance types only when you set Scaling Policy to Cost Optimization and no instance type is specified in the scaling configuration.
   * 
   * @example
   * 16
   */
  memory?: number;
  /**
   * @remarks
   * The ENIs.
   */
  networkInterfaces?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsNetworkInterfaces[];
  /**
   * @remarks
   * Indicates whether the password preconfigured in the image is used.
   * 
   * @example
   * true
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * Indicates whether a password is configured for the instance.
   * 
   * @example
   * false
   */
  passwordSetted?: boolean;
  privatePoolOptions_id?: string;
  privatePoolOptions_matchCriteria?: string;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role assumed by the ECS instances. This name is provided and maintained by RAM. You can call the ListRoles operation to query the available RAM roles.
   * 
   * @example
   * ramrole****
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The ID of the resource group to which the ECS instances belong.
   * 
   * @example
   * rg-aekzn2ou7xo****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource pools used for instance creation, which can be the public pool or a private pool associated with any active elasticity assurance or capacity reservation.
   * 
   * *   This parameter takes effect only when you create pay-as-you-go instances.
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
   * >  This parameter is in invitational preview and is not available for use.
   */
  schedulerOptions?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsSchedulerOptions;
  /**
   * @remarks
   * Indicates whether Security Hardening is enabled. Valid values:
   * 
   * *   Active: Security Hardening is enabled. This value is applicable to only public images.
   * *   Deactive: Security Hardening is disabled. This value is applicable to all images.
   * 
   * @example
   * Active
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group to which the ECS instances belong. ECS instances that belong to the same security group can communicate with each other.
   * 
   * @example
   * sg-bp18kz60mefs****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of the security groups to which the ECS instances belong. ECS instances that belong to the same security group can communicate with each other.
   */
  securityGroupIds?: string[];
  securityOptions?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsSecurityOptions;
  /**
   * @remarks
   * The protection period of the preemptible instances. Unit: hours.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The interruption event of the preemptible instances.
   * 
   * @example
   * Terminate
   */
  spotInterruptionBehavior?: string;
  /**
   * @remarks
   * The preemptible instances.
   */
  spotPriceLimits?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsSpotPriceLimits[];
  /**
   * @remarks
   * The preemption policy that is applied to pay-as-you-go instances. Valid values:
   * 
   * *   NoSpot: The instances are created as regular pay-as-you-go instances.
   * *   SpotWithPriceLimit: The instances are created as preemptible instances that have a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instances are preemptible instances for which the market price at the time of purchase is automatically used as the bid price.
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
   * The maximum number of partitions in the storage set. The value is an integer that is greater than or equal to 2.
   * 
   * @example
   * 2
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The ID of the automatic snapshot policy that is applied to the system disk.
   * 
   * @example
   * sp-bp12m37ccmxvbmi5****
   */
  systemDiskAutoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Indicates whether the Performance Burst feature is enabled for the system disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  This parameter is available only when you set SystemDisk.Category to cloud_auto.
   * 
   * @example
   * false
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The categories of the system disks. The values are sorted based on their priorities. The first value has the highest priority. If Auto Scaling cannot create instances by using the disk category of the highest priority, Auto Scaling creates instances by using the disk category of the next highest priority. Valid values:
   * 
   * *   cloud: basic disk
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   cloud_essd: ESSD
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * *   cloud: basic disk
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   ephemeral_ssd: local SSD
   * *   cloud_essd: enterprise SSD (ESSD)
   * *   cloud_auto: ESSD AutoPL
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
   * The encryption algorithm that is applied to the system disk. Valid values:
   * 
   * *   AES-256
   * *   SM4-128
   * 
   * @example
   * AES-256
   */
  systemDiskEncryptAlgorithm?: string;
  /**
   * @remarks
   * Indicates whether the system disk is encrypted. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  systemDiskEncrypted?: boolean;
  /**
   * @remarks
   * The ID of the KMS key that is applied to the system disk.
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
   * The performance level (PL) of the system disk that is an ESSD.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The provisioned IOPS of the system disk.
   * 
   * >  IOPS measures the number of read and write operations that an EBS device can process per second.
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
   * The tags.
   */
  tags?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsTags[];
  /**
   * @remarks
   * Indicates whether the ECS instance is created on a dedicated host. Valid values:
   * 
   * *   default: The ECS instance is created on a non-dedicated host.
   * *   host: The ECS instance is created on a dedicated host. If you do not specify DedicatedHostId, the system selects a dedicated host for the ECS instance.
   * 
   * Default value: default.
   * 
   * @example
   * default
   */
  tenancy?: string;
  /**
   * @remarks
   * The user data of the ECS instances.
   * 
   * @example
   * echo hello ecs!
   */
  userData?: string;
  /**
   * @remarks
   * The weights of the instance types. The value of this parameter indicates the capacity of an instance of the specified instance type in the scaling group. A higher weight indicates that a smaller number of instances of the instance type are required to meet the expected capacity requirement.
   */
  weightedCapacities?: number[];
  /**
   * @remarks
   * The ID of the zone in which the ECS instances are created. You can call the DescribeZones operation to query the zone IDs.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      affinity: 'Affinity',
      cpu: 'Cpu',
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
    if(Array.isArray(this.customPriorities)) {
      $dara.Model.validateArray(this.customPriorities);
    }
    if(Array.isArray(this.dataDisks)) {
      $dara.Model.validateArray(this.dataDisks);
    }
    if(Array.isArray(this.instancePatternInfos)) {
      $dara.Model.validateArray(this.instancePatternInfos);
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The scaling configurations.
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

