// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScalingConfigurationRequestImageOptions extends $dara.Model {
  /**
   * @remarks
   * For more information about whether an ECS instance uses the ecs-user user user to log on to an ECS instance, see [Manage the login name of an ECS instance](https://help.aliyun.com/document_detail/388447.html). Value range:
   * 
   * - true: Yes.
   * - false: No.
   * 
   * Default value: false.
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

export class CreateScalingConfigurationRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the private pool. The ID of a private pool is the same as the ID of the elasticity assurance or capacity reservation for which the private pool is generated.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The type of the private pool that you want to use to start ECS instances. A private pool is generated when an elasticity assurance or a capacity reservation takes effect. You can select a private pool to create ECS instances. Valid values:
   * 
   * *   Open: open private pool. Auto Scaling selects a matching open private pool to start instances. If no matching open private pools are found, Auto Scaling uses the resources in the public pool to start instances. In this case, you do not need to specify PrivatePoolOptions.Id.
   * *   Target: specified private pool. Auto Scaling uses the resources in the specified private pool to start ECS instances. If the specified private pool is unavailable, Auto Scaling cannot start ECS instances. If you set this parameter to Target, you must specify PrivatePoolOptions.Id.
   * *   None: no private pool. Auto Scaling does not use the resources in private pools to start ECS instances.
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

export class CreateScalingConfigurationRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy that you want to apply to the system disk.
   * 
   * @example
   * sp-bp12m37ccmxvbmi5****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the burst feature for the system disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * > This parameter is available only if you set `SystemDisk.Category` to `cloud_auto`.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * *   cloud: basic disk
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   ephemeral_ssd: local SSD
   * *   cloud_essd: enhanced SSD (ESSD)
   * *   cloud_auto: ESSD AutoPL disk
   * 
   * If you specify SystemDisk.Category, you cannot specify `SystemDiskCategories`. If you do not specify SystemDisk.Category or `SystemDiskCategories`, the default value of SystemDisk.Category is used.
   * 
   * *   For I/O optimized instances, the default value is cloud_efficiency.
   * *   For non-I/O optimized instances, the default value is cloud.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The description of the system disk. The description must be 2 to 256 characters in length. The description can contain letters and cannot start with `http://` or `https://`.
   * 
   * @example
   * Test system disk.
   */
  description?: string;
  /**
   * @remarks
   * The name of the system disk. The name must be 2 to 128 characters in length. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * cloud_ssdSystem
   */
  diskName?: string;
  /**
   * @remarks
   * The encryption algorithm that you want to use to encrypt the system disk. Valid values:
   * 
   * *   AES-256
   * *   SM4-128
   * 
   * Default value: AES-256
   * 
   * @example
   * AES-256
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the system disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the KMS key that you want to use to encrypt the system disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The performance level (PL) of the system disk that is an enhanced SSD (ESSD). Valid values:
   * 
   * *   PL0: An ESSD can provide up to 10,000 random read/write IOPS.
   * *   PL1: An ESSD can provide up to 50,000 random read/write IOPS.
   * *   PL2: An ESSD can provide up to 100,000 random read/write IOPS.
   * *   PL3: An ESSD can provide up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The IOPS metric that is preconfigured for the system disk.
   * 
   * > IOPS measures the number of read and write operations that an EBS device can process per second.
   * 
   * @example
   * 100
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB.
   * 
   * *   Basic disk: 20 to 500.
   * 
   * *   ESSD (cloud_essd): The valid values vary based on the performance level of the ESSD.
   * 
   *     *   PL0 ESSD: 1 to 2048.
   *     *   PL1 ESSD: 20 to 2048.
   *     *   PL2 ESSD: 461 to 2048.
   *     *   PL3 ESSD: 1261 to 2048.
   * 
   * *   ESSD AutoPL disk (cloud_auto): 1 to 2048.
   * 
   * *   Other disk categories: 20 to 2048.
   * 
   * The value of this parameter must be at least 1 and greater than or equal to the image size.
   * 
   * Default value: 40 or the size of the image, whichever is larger.
   * 
   * @example
   * 100
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      description: 'Description',
      diskName: 'DiskName',
      encryptAlgorithm: 'EncryptAlgorithm',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      description: 'string',
      diskName: 'string',
      encryptAlgorithm: 'string',
      encrypted: 'boolean',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationRequestCustomPriorities extends $dara.Model {
  /**
   * @remarks
   * The ECS instance type.
   * 
   * >  The ECS instance type must be included in the instance types specified in the scaling configuration.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * >  The vSwitch must be included in the vSwitch list of the scaling group.
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

export class CreateScalingConfigurationRequestDataDisks extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy that you want to apply to the data disk.
   * 
   * @example
   * sp-bp19nq9enxqkomib****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the burst feature for the system disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * > This parameter is available only if you set `SystemDisk.Category` to `cloud_auto`.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The categories of the data disks. If Auto Scaling cannot create instances by using the disk category that has the highest priority, Auto Scaling creates instances by using the disk category that has the next highest priority. Valid values:
   * 
   * *   cloud: basic disk. For a basic disk that is created together with the instance, DeleteWithInstance is set to true.
   * *   cloud_efficiency: ultra disk.
   * *   cloud_ssd: standard SSD.
   * *   cloud_essd: ESSD.
   * 
   * > If you specify Categories, you cannot specify `DataDisks.Category`.
   */
  categories?: string[];
  /**
   * @remarks
   * The category of the data disk. Valid values:
   * 
   * *   cloud: basic disk
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   cloud_essd: ESSD
   * *   ephemeral_ssd: local SSD
   * *   cloud_auto: ESSD AutoPL disk
   * 
   * If you specify this parameter, you cannot specify Categories. If you do not specify Category or Categories, the default value of Category is used.
   * 
   * *   For I/O optimized instances, the default value is cloud_efficiency.
   * *   For non-I/O optimized instances, the default value is cloud.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release the data disk when the instance to which the data disk is attached is released. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is available only for independent disks whose value of Category is set to cloud, cloud_efficiency, cloud_ssd, or cloud_essd. If you specify this parameter for other disks, an error is reported.
   * 
   * Default value: true
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the data disk. The description must be 2 to 256 characters in length. The description can contain letters and cannot start with `http://` or `https://`.
   * 
   * @example
   * Test data disk.
   */
  description?: string;
  /**
   * @remarks
   * The mount target of the data disk. If you do not specify Device, a mount target is automatically assigned when Auto Scaling creates ECS instances. The names of mount targets range from /dev/xvdb to /dev/xvdz.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The name of the system disk. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * cloud_ssdData
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the data disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The ID of the KMS key that you want to use to encrypt the data disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The PL of the data disk that is an ESSD. Valid values:
   * 
   * *   PL0: An ESSD can provide up to 10,000 random read/write IOPS.
   * *   PL1: An ESSD can provide up to 50,000 random read/write IOPS.
   * *   PL2: An ESSD can provide up to 100,000 random read/write IOPS.
   * *   PL3: An ESSD can provide up to 1,000,000 random read/write IOPS.
   * 
   * > For more information about how to select ESSD PLs, see [ESSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The IOPS metric that is preconfigured for the data disk.
   * 
   * > IOPS measures the number of read and write operations that an EBS device can process per second.
   * 
   * @example
   * 100
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of the data disk. Unit: GiB. Valid values:
   * 
   * *   If you set Categories to cloud: 5 to 2000.
   * *   If you set Categories to cloud_efficiency: 20 to 32768.
   * *   If you set Categories to cloud_essd: 20 to 32768.
   * *   If you set Categories to ephemeral_ssd: 5 to 800.
   * 
   * The size of the data disk must be greater than or equal to the size of the snapshot that is specified by SnapshotId.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot that you want to use to create data disks. If you specify this parameter, DataDisks.Size is ignored. The size of the data disk is the same as the size of the specified snapshot.
   * 
   * If you specify a snapshot that is created on or before July 15, 2013, the operation fails and the system returns InvalidSnapshot.TooOld.
   * 
   * @example
   * s-280s7****
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

export class CreateScalingConfigurationRequestInstancePatternInfos extends $dara.Model {
  /**
   * @remarks
   * The architecture types of the instance types. Valid values:
   * 
   * *   X86: x86 architecture.
   * *   Heterogeneous: heterogeneous computing, such as GPU-accelerated or FPGA-accelerated.
   * *   BareMetal: ECS Bare Metal Instance.
   * *   Arm: Arm.
   * 
   * By default, all values are selected.
   */
  architectures?: string[];
  /**
   * @remarks
   * Specifies whether to include burstable instance types. Valid values:
   * 
   * *   Exclude: excludes burstable instance types.
   * *   Include: includes burstable instance types.
   * *   Required: includes only burstable instance types.
   * 
   * Default value: Include.
   * 
   * @example
   * Include
   */
  burstablePerformance?: string;
  /**
   * @remarks
   * The number of vCPUs per instance type in intelligent configuration mode. You can specify this parameter to filter the available instance types. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * Take note of the following items:
   * 
   * *   InstancePatternInfos applies only to scaling groups that reside in virtual private clouds (VPCs).
   * *   If you specify InstancePatternInfos, you must also specify InstancePatternInfos.Cores and InstancePatternInfos.Memory.
   * *   If you specify InstanceType or InstanceTypes, Auto Scaling preferentially uses the instance type specified by InstanceType or InstanceTypes to create instances during scale-out events. If the specified instance type has insufficient inventory, Auto Scaling uses the lowest-priced instance type specified by InstancePatternInfos to create instances during scale-out events.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The CPU architectures of the instance types. Valid values:
   * 
   * >  You can specify up to two CPU architectures.
   * 
   * *   x86
   * *   Arm
   */
  cpuArchitectures?: string[];
  /**
   * @remarks
   * The instance types that you want to exclude. You can use an asterisk (\\*) as a wildcard character to exclude an instance type or an instance family. Examples:
   * 
   * *   ecs.c6.large: excludes the ecs.c6.large instance type.
   * *   ecs.c6.\\*: excludes the c6 instance family.
   */
  excludedInstanceTypes?: string[];
  /**
   * @remarks
   * The GPU models.
   */
  gpuSpecs?: string[];
  /**
   * @remarks
   * The categories of the instance types. Valid values:
   * 
   * >  You can specify up to 10 categories.
   * 
   * *   General-purpose: general-purpose instance type.
   * *   Compute-optimized: compute-optimized instance type.
   * *   Memory-optimized: memory-optimized instance type.
   * *   Big data: big data instance type.
   * *   Local SSDs: instance type that uses local SSDs.
   * *   High Clock Speed: instance type that has high clock speeds.
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
   * The level of the instance family. You can specify this parameter to match the available instance types. This parameter takes effect only if you set `CostOptimization` to true. Valid values:
   * 
   * *   EntryLevel: entry-level (shared instance types). Instance types of this level are the most cost-effective but may not ensure stable computing performance. Instance types of this level are suitable for scenarios in which the CPU utilization is low. For more information, see [Shared instance families](https://help.aliyun.com/document_detail/108489.html).
   * *   EnterpriseLevel: enterprise-level. Instance types of this level provide stable performance and dedicated resources and are suitable for business scenarios that require high stability. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html).
   * *   CreditEntryLevel: credit entry-level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for scenarios in which the CPU utilization is low but may fluctuate in specific cases. For more information, see [Overview](https://help.aliyun.com/document_detail/59977.html) of burstable instances.
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The instance families that you want to specify. You can specify up to 10 instance families in each call.
   */
  instanceTypeFamilies?: string[];
  /**
   * @remarks
   * The maximum hourly price of pay-as-you-go or preemptible instances in intelligent configuration mode. You can specify this parameter to filter the available instance types.
   * 
   * >  If you set SpotStrategy to SpotWithPriceLimit, you must specify this parameter. In other cases, this parameter is optional.
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
   * The memory size per instance type in intelligent configuration mode. Unit: GiB. You can specify this parameter to filter the available instance types.
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
   * The processor models of the instance types. You can specify up to 10 processor models.
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

export class CreateScalingConfigurationRequestInstanceTypeOverrides extends $dara.Model {
  /**
   * @remarks
   * If you want to scale instances in the scaling group based on the weight of an instance type, you must specify this property and WeightedCapacity.
   * 
   * The instance type specified by using this parameter overwrites the instance type of the launch template. You can specify N instance types by using the Extend Launch Template feature. You can specify 1 to 10 memory sizes, indicated by N.
   * 
   * >  This parameter takes effect only if you specify LaunchTemplateId.
   * 
   * You can use this parameter to specify any instance types that are available for purchase.
   * 
   * @example
   * ecs.c5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * If you need to specify the capacity of the instance type in the scaling configuration, you must specify this parameter after you specify InstanceTypeOverrides.InstanceType.
   * 
   * The weight specifies the capacity of an instance of the specified instance type in the scaling group. A higher weight specifies that a smaller number of instances of the specified instance type are required to meet the expected capacity requirement.
   * 
   * Performance metrics such as the number of vCPUs and memory size vary with each instance type. You can specify different weights for different instance types based on your business requirements.
   * 
   * For example:
   * 
   * *   Current capacity: 0.
   * *   Expected capacity: 6
   * *   Capacity of ecs.c5.xlarge: 4.
   * 
   * To reach the expected capacity, Auto Scaling must scale out two instances of ecs.c5.xlarge.
   * 
   * >  The total capacity of the scaling group is constrained and cannot surpass the combined total of the maximum group size defined by MaxSize and the highest weight assigned to any instance type.
   * 
   * Valid values of WeightedCapacity: 1 to 500.
   * 
   * @example
   * 4
   */
  weightedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      weightedCapacity: 'WeightedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      weightedCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationRequestNetworkInterfaces extends $dara.Model {
  /**
   * @example
   * Primary
   */
  instanceType?: string;
  /**
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @example
   * HighPerformance
   */
  networkInterfaceTrafficMode?: string;
  secondaryPrivateIpAddressCount?: number;
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

export class CreateScalingConfigurationRequestResourcePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The IDs of private pools. The ID of a private pool is the same as the ID of the elasticity assurance or capacity reservation that is associated with the private pool. You can specify the IDs of only targeted private pools for this parameter.
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * The resource pool used for instance creation, which can be the public pool or a private pool associated with any active elasticity assurance or capacity reservation. Valid values:
   * 
   * *   PrivatePoolFirst: prioritizes private pools. When this option is set along with ResourcePoolOptions.PrivatePoolIds, the specified private pools are used first. If you leave ResourcePoolOptions.PrivatePoolIds empty or if the specified private pools lack sufficient capacity, the system will automatically use available open private pools instead. If no matching private pools are available, the system defaults to the public pool.
   * *   PrivatePoolOnly: uses only private pools. If you set this value, you must specify ResourcePoolOptions.PrivatePoolIds. If the specified private pools lack sufficient capacity, instance creation will fail.
   * *   None: uses no resource pools.
   * 
   * Default value: None.
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

export class CreateScalingConfigurationRequestSecurityOptions extends $dara.Model {
  /**
   * @remarks
   * The confidential computing mode. Valid values:
   * 
   * *   Enclave: An enclave-based confidential computing environment is built on the instance. For more information, see [Build a confidential computing environment by using Enclave](https://help.aliyun.com/document_detail/203433.html).
   * *   TDX: A Trust Domain Extensions (TDX) confidential computing environment is built on the instance. For more information, see [Build a TDX confidential computing environment](https://help.aliyun.com/document_detail/479090.html).
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

export class CreateScalingConfigurationRequestSpotPriceLimits extends $dara.Model {
  /**
   * @remarks
   * The instance type of the spot instances. This parameter takes effect only if you set SpotStrategy to SpotWithPriceLimit.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The price limit of the spot instances. This parameter takes effect only if you set SpotStrategy to SpotWithPriceLimit.
   * 
   * @example
   * 0.5
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

export class CreateScalingConfigurationRequest extends $dara.Model {
  imageOptions?: CreateScalingConfigurationRequestImageOptions;
  privatePoolOptions?: CreateScalingConfigurationRequestPrivatePoolOptions;
  systemDisk?: CreateScalingConfigurationRequestSystemDisk;
  /**
   * @remarks
   * Specifies whether to associate an ECS instance on a dedicated host with the dedicated host. Valid values:
   * 
   * *   default: does not associate the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode and the original dedicated host has insufficient resources, the ECS instance is automatically deployed to another dedicated host in the automatic deployment resource pool.
   * *   host: associates the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode, the instance remains on the original dedicated host. If the original dedicated host has insufficient resources, the ECS instance fails to start.
   * 
   * Default value: default
   * 
   * @example
   * default
   */
  affinity?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see the "[How to ensure the idempotence of a request](https://help.aliyun.com/document_detail/25693.html)" topic.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set CPU to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
   * 
   * > You can specify Cpu and Memory to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The performance mode of the burstable instance. Valid values:
   * 
   * *   Standard: standard mode
   * *   Unlimited: unlimited mode
   * 
   * For more information, see the "Performance modes" section in the "[Overview](https://help.aliyun.com/document_detail/59977.html)" topic.
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
   * >  If you specify the priorities of only partial custom ECS instance type + vSwitch combinations, Auto Scaling preferentially creates ECS instances by using the custom combinations that have specified priorities. If the custom combinations that have specified priorities do not provide sufficient resources, Auto Scaling creates ECS instances by using the custom combinations that do not have specified priorities based on the specified orders of vSwitches and instance types.
   * 
   * *   Example: the specified order of vSwitches for your scaling group is vsw1 and vsw2 and the specified order of instance types in your scaling configuration is type1 and type 2. In addition, you use CustomPriorities to specify ["vsw2+type2", "vsw1+type2"]. In this example, the vsw2+type2 combination has the highest priority and the vsw2+type1 combination has the lowest priority. The vsw1+type2 combination has a higher priority than the vsw1+type1 combination.
   */
  customPriorities?: CreateScalingConfigurationRequestCustomPriorities[];
  /**
   * @remarks
   * The data disks.
   */
  dataDisks?: CreateScalingConfigurationRequestDataDisks[];
  /**
   * @remarks
   * The ID of the dedicated host cluster.
   * 
   * @example
   * dc-2zedxc67zqzt7lb4****
   */
  dedicatedHostClusterId?: string;
  /**
   * @remarks
   * The ID of the dedicated host on which you want to create an ECS instance. You cannot create preemptible instances on dedicated hosts. If you specify DedicatedHostId, SpotStrategy and SpotPriceLimit are ignored.
   * 
   * You can call the DescribeDedicatedHosts operation to query dedicated host IDs.
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The ID of the deployment set of the ECS instances that are created by using the scaling configuration.
   * 
   * @example
   * ds-bp1frxuzdg87zh4pz****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The hostname of the ECS instance. The hostname cannot start or end with a period (.) or a hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-). Naming conventions for different types of instances:
   * 
   * *   Windows instances: The hostname must be 2 to 15 characters in length and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits.
   * *   Other instances, such as Linux instances: The hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
   * 
   * @example
   * host****
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the Elastic High Performance Computing (E-HPC) cluster to which the ECS instances that are created by using the scaling configuration belong.
   * 
   * @example
   * hpc-clusterid
   */
  hpcClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the access channel for instance metadata. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * Default value: enabled.
   * 
   * >  For information about instance metadata, see [Obtain instance metadata](https://help.aliyun.com/document_detail/108460.html).
   * 
   * @example
   * enabled
   */
  httpEndpoint?: string;
  /**
   * @remarks
   * Specifies whether to forcibly use the security hardening mode (IMDSv2) to access instance metadata. Valid values:
   * 
   * *   optional: does not forcibly use the security hardening mode (IMDSv2).
   * *   required: forcibly uses the security hardening mode (IMDSv2). If you set this parameter to required, you cannot access instance metadata in normal mode.
   * 
   * Default value: optional.
   * 
   * >  For more information about instance metadata access modes, see [Access modes of instance metadata](https://help.aliyun.com/document_detail/108460.html).
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The name of the image family. If you specify this parameter, the most recent custom images that are available in the specified image family are returned. You can use the images to create instances. If you specify ImageId, you cannot specify ImageFamily.
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image that Auto Scaling uses to automatically create ECS instances.
   * 
   * @example
   * centos6u5_64_20G_aliaegis****.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image. Each image name must be unique in a region. If you specify ImageId, ImageName is ignored.
   * 
   * You cannot use ImageName to specify images that are purchased from Alibaba Cloud Marketplace.
   * 
   * @example
   * image****
   */
  imageName?: string;
  /**
   * @remarks
   * The description of the ECS instance. The description must be 2 to 256 characters in length. The description can contain letters and cannot start with `http://` or `https://`.
   * 
   * @example
   * Test instance.
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The name of the ECS instance that Auto Scaling creates based on the scaling configuration.
   * 
   * @example
   * instance****
   */
  instanceName?: string;
  /**
   * @remarks
   * The intelligent configuration settings, which determine the available instance types.
   */
  instancePatternInfos?: CreateScalingConfigurationRequestInstancePatternInfos[];
  /**
   * @remarks
   * The instance type of the ECS instance. For more information, see the [Instance families](https://help.aliyun.com/document_detail/25378.html) topic.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The information about instance types.
   */
  instanceTypeOverrides?: CreateScalingConfigurationRequestInstanceTypeOverrides[];
  /**
   * @remarks
   * The instance types. If you specify InstanceTypes, InstanceType is ignored.
   * 
   * Auto Scaling creates instances based on a priority list of instance types. If it fails to create instances using the highest-priority type, it automatically moves to the next type in the priority order.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The metering method for network usage. Valid values:
   * 
   * *   PayByBandwidth: You are charged for the maximum available bandwidth that is specified by InternetMaxBandwidthOut.
   * *   PayByTraffic: You are charged based on the amount of transferred data. InternetMaxBandwidthOut specifies only the maximum available bandwidth.
   * 
   * For the classic network, the default value is PayByBandwidth. For VPCs, the default value is PayByTraffic.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s. Valid values:
   * 
   * *   If the purchased outbound public bandwidth is less than or equal to 10 Mbit/s, the valid values of this parameter are 1 to 10, and the default value is 10.
   * *   If the purchased outbound public bandwidth is greater than 10 Mbit/s, the valid values of this parameter are 1 to the value of `InternetMaxBandwidthOut`, and the default value is the value of `InternetMaxBandwidthOut`.
   * 
   * @example
   * 100
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100.
   * 
   * Default value: 0.
   * 
   * @example
   * 50
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Specifies whether to create an I/O optimized instance. Valid values:
   * 
   * none: does not create an I/O optimized instance. optimized: creates an I/O optimized instance.
   * 
   * For instances of retired instance types, the default value is none. For instances of other instance types, the default value is optimized.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The number of randomly generated IPv6 addresses that you want to allocate to the elastic network interface (ENI).
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The name of the key pair that you want to use to log on to an ECS instance.
   * 
   * *   Windows instances do not support this parameter.
   * *   By default, the username and password authentication method is disabled for Linux instances.
   * 
   * @example
   * KeyPairTest
   */
  keyPairName?: string;
  /**
   * @remarks
   * The weight of an ECS instance as a backend server. Valid values: 1 to 100.
   * 
   * Default value: 50
   * 
   * @example
   * 50
   */
  loadBalancerWeight?: number;
  /**
   * @remarks
   * The memory size. Unit: GiB.
   * 
   * You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set Cpu to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
   * 
   * > You can specify Cpu and Memory to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
   * 
   * @example
   * 16
   */
  memory?: number;
  networkInterfaces?: CreateScalingConfigurationRequestNetworkInterfaces[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password that you want to use to log on to an ECS instance. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported:
   * 
   * `` `() ~!@#$%^&*-_+=\\|{}[]:;\\"<>,.?/ ``
   * 
   * The password of a Windows instance cannot start with a forward slash (/).
   * 
   * > For security reasons, we recommend that you use HTTPS to send requests if you specify Password.
   * 
   * @example
   * 123abc****
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the password that is preconfigured in the image. Before you use this parameter, make sure that a password is configured in the image. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The name of the RAM role that you attach to the ECS instance. The name is provided and maintained by Resource Access Management (RAM). You can call the ListRoles operation to query the available RAM roles.
   * 
   * @example
   * ramrole****
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The ID of the resource group to which the ECS instances that are created by using the scaling configuration belong.
   * 
   * @example
   * rg-resource****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The resource pools used for instance creation, which can be the public pool or a private pool associated with any active elasticity assurance or capacity reservation. When you specify this parameter, take note of the following items:
   * 
   * *   This parameter takes effect only when you create pay-as-you-go instances.
   * *   If you specify this parameter, you cannot specify PrivatePoolOptions.MatchCriteria or PrivatePoolOptions.Id.
   */
  resourcePoolOptions?: CreateScalingConfigurationRequestResourcePoolOptions;
  /**
   * @remarks
   * The name of the scaling configuration. The name must be 2 to 64 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). The name must start with a letter or a digit.
   * 
   * The name of the scaling configuration must be unique in a region. If you do not specify this parameter, the scaling configuration ID is used.
   * 
   * @example
   * scalingconfig****
   */
  scalingConfigurationName?: string;
  /**
   * @remarks
   * The ID of the scaling group in which you want to create a scaling configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp14wlu85wrpchm0****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The scheduler options.
   * 
   * @example
   * ["testManagedPrivateSpaceId****"]
   */
  schedulerOptions?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether to enable security hardening. Valid values:
   * 
   * *   Active: enables security hardening. This value is applicable only to public images.
   * *   Deactive: disables security hardening. This value is applicable to all image types.
   * 
   * @example
   * Active
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group with which ECS instances are associated. ECS instances that are associated with the same security group can access each other.
   * 
   * @example
   * sg-280ih****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of the security groups with which you want to associate the ECS instances that are created by using the scaling configuration. For more information, see the "Security group limits" section of the "[Limits](https://help.aliyun.com/document_detail/25412.html)" topic.
   * 
   * > If you specify SecurityGroupId, you cannot specify SecurityGroupIds.
   */
  securityGroupIds?: string[];
  securityOptions?: CreateScalingConfigurationRequestSecurityOptions;
  /**
   * @remarks
   * The retention period of the preemptible instance. Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
   * 
   * *   The following retention periods are available in invitational preview: 2, 3, 4, 5, and 6 hours. If you want to set this parameter to one of these values, submit a ticket.
   * *   If you set this parameter to 0, no protection period is specified for the preemptible instance.
   * 
   * Default value: 1
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The interruption mode of the preemptible instance. Set the value to Terminate. The value specifies that the preemptible instance is to be released.
   * 
   * @example
   * Terminate
   */
  spotInterruptionBehavior?: string;
  /**
   * @remarks
   * The billing information of the spot instances.
   */
  spotPriceLimits?: CreateScalingConfigurationRequestSpotPriceLimits[];
  /**
   * @remarks
   * The preemption policy that you want to apply to pay-as-you-go and preemptible instances. Valid values:
   * 
   * *   NoSpot: The instance is created as a pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is a preemptible instance that has a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is automatically used as the bid price.
   * 
   * Default value: NoSpot
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @example
   * ss-bp67acfmxazb4p****
   */
  storageSetId?: string;
  /**
   * @example
   * 2
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The categories of the system disks. If Auto Scaling cannot create instances by using the disk category that has the highest priority, Auto Scaling creates instances by using the disk category that has the next highest priority. Valid values:
   * 
   * *   cloud: basic disk
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   cloud_essd: ESSD
   * 
   * > If you specify SystemDiskCategories, you cannot specify `SystemDisk.Category`.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The tags of the ECS instance. Tags must be specified as key-value pairs. You can specify up to 20 tags. When you specify tag keys and tag values, take note of the following items:
   * 
   * *   A tag key can be up to 64 characters in length. The key cannot start with acs: or aliyun and cannot contain `http://` or `https://`. You cannot specify an empty string as a tag key.
   * *   A tag value can be up to 128 characters in length. The value cannot start with acs: or aliyun and cannot contain `http://` or `https://`. You can specify an empty string as a tag value.
   * 
   * @example
   * {"key1":"value1","key2":"value2", ... "key5":"value5"}
   */
  tags?: string;
  /**
   * @remarks
   * Specifies whether to create an ECS instance on a dedicated host. Valid values:
   * 
   * *   default: does not create an ECS instance on a dedicated host.
   * *   host: creates an ECS instance on a dedicated host. If you do not specify DedicatedHostId, Alibaba Cloud selects a dedicated host for the ECS instance.
   * 
   * Default value: default
   * 
   * @example
   * default
   */
  tenancy?: string;
  /**
   * @remarks
   * The user data of the Elastic Compute Service (ECS) instance. The user data must be encoded in Base64 format. The size of raw data before Base64 encoding cannot exceed 32 KB.
   * 
   * @example
   * echo hello ecs!
   */
  userData?: string;
  /**
   * @remarks
   * The zone ID of the ECS instance.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      imageOptions: 'ImageOptions',
      privatePoolOptions: 'PrivatePoolOptions',
      systemDisk: 'SystemDisk',
      affinity: 'Affinity',
      clientToken: 'ClientToken',
      cpu: 'Cpu',
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
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      instancePatternInfos: 'InstancePatternInfos',
      instanceType: 'InstanceType',
      instanceTypeOverrides: 'InstanceTypeOverrides',
      instanceTypes: 'InstanceTypes',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      ipv6AddressCount: 'Ipv6AddressCount',
      keyPairName: 'KeyPairName',
      loadBalancerWeight: 'LoadBalancerWeight',
      memory: 'Memory',
      networkInterfaces: 'NetworkInterfaces',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      passwordInherit: 'PasswordInherit',
      ramRoleName: 'RamRoleName',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourcePoolOptions: 'ResourcePoolOptions',
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
      systemDiskCategories: 'SystemDiskCategories',
      tags: 'Tags',
      tenancy: 'Tenancy',
      userData: 'UserData',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageOptions: CreateScalingConfigurationRequestImageOptions,
      privatePoolOptions: CreateScalingConfigurationRequestPrivatePoolOptions,
      systemDisk: CreateScalingConfigurationRequestSystemDisk,
      affinity: 'string',
      clientToken: 'string',
      cpu: 'number',
      creditSpecification: 'string',
      customPriorities: { 'type': 'array', 'itemType': CreateScalingConfigurationRequestCustomPriorities },
      dataDisks: { 'type': 'array', 'itemType': CreateScalingConfigurationRequestDataDisks },
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
      instanceDescription: 'string',
      instanceName: 'string',
      instancePatternInfos: { 'type': 'array', 'itemType': CreateScalingConfigurationRequestInstancePatternInfos },
      instanceType: 'string',
      instanceTypeOverrides: { 'type': 'array', 'itemType': CreateScalingConfigurationRequestInstanceTypeOverrides },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      ipv6AddressCount: 'number',
      keyPairName: 'string',
      loadBalancerWeight: 'number',
      memory: 'number',
      networkInterfaces: { 'type': 'array', 'itemType': CreateScalingConfigurationRequestNetworkInterfaces },
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      passwordInherit: 'boolean',
      ramRoleName: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourcePoolOptions: CreateScalingConfigurationRequestResourcePoolOptions,
      scalingConfigurationName: 'string',
      scalingGroupId: 'string',
      schedulerOptions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      securityEnhancementStrategy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      securityOptions: CreateScalingConfigurationRequestSecurityOptions,
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      spotPriceLimits: { 'type': 'array', 'itemType': CreateScalingConfigurationRequestSpotPriceLimits },
      spotStrategy: 'string',
      storageSetId: 'string',
      storageSetPartitionNumber: 'number',
      systemDiskCategories: { 'type': 'array', 'itemType': 'string' },
      tags: 'string',
      tenancy: 'string',
      userData: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.imageOptions && typeof (this.imageOptions as any).validate === 'function') {
      (this.imageOptions as any).validate();
    }
    if(this.privatePoolOptions && typeof (this.privatePoolOptions as any).validate === 'function') {
      (this.privatePoolOptions as any).validate();
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
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
    if(Array.isArray(this.instanceTypeOverrides)) {
      $dara.Model.validateArray(this.instanceTypeOverrides);
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
    if(this.schedulerOptions) {
      $dara.Model.validateMap(this.schedulerOptions);
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

