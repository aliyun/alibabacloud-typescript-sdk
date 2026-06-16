// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScalingConfigurationShrinkRequestImageOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to log on to the ECS instance as the ecs-user user. For more information, see [Manage logon usernames of ECS instances](https://help.aliyun.com/document_detail/388447.html). Valid values:
   * 
   * true: yes.
   * 
   * false: no.
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

export class ModifyScalingConfigurationShrinkRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the private pool. The private pool can be an Elastic Assurance service or a Capacity Reservation service.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The capacity option of the private pool for starting the instance. The private pool is generated after an Elastic Assurance service or a Capacity Reservation service takes effect. You can select a private pool to start an instance. Valid values:
   * 
   * - Open: open mode. The system automatically matches the instance with an open private pool. If no open private pools are available, the instance is started using public pool resources. You do not need to set the \\`PrivatePoolOptions.Id\\` parameter in this mode.
   * 
   * - Target: specified mode. The instance is started using the capacity of a specified private pool. If the specified private pool is unavailable, the instance fails to start. You must specify the private pool ID by setting the \\`PrivatePoolOptions.Id\\` parameter in this mode.
   * 
   * - None: no mode. The instance is not started using the capacity of a private pool.
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

export class ModifyScalingConfigurationShrinkRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy used for the system disk.
   * 
   * @example
   * sp-bp12m37ccmxvbmi5****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature for the system disk. Valid values:
   * 
   * - true: enable.
   * 
   * - false: disable.
   * 
   * > This parameter is supported only when `SystemDisk.Category` is set to `cloud_auto`.
   * 
   * <props="china">
   * 
   * For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * - cloud: basic disk.
   * 
   * - cloud_efficiency: ultra disk.
   * 
   * - cloud_ssd: standard SSD.
   * 
   * - cloud_essd: ESSD.
   * 
   * - ephemeral_ssd: local SSD.
   * 
   * You cannot specify this parameter and `SystemDiskCategories` at the same time. If neither this parameter nor `SystemDiskCategories` is specified, this parameter has a default value. If the instance type is from instance family I and the instance is not I/O optimized, the default value is \\`cloud\\`. Otherwise, the default value is \\`cloud_efficiency\\`.
   * 
   * @example
   * cloud_efficiency
   */
  category?: string;
  /**
   * @remarks
   * The description of the system disk. The description must be 2 to 256 English or Chinese characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * Test system disk.
   */
  description?: string;
  /**
   * @remarks
   * The name of the system disk. The name must be 2 to 128 English or Chinese characters in length. It must start with a letter or a Chinese character and cannot start with http\\:// or https\\://. It can contain digits, colons (:), underscores (_), and hyphens (-). Default value: empty
   * 
   * @example
   * cloud_ssdSystem
   */
  diskName?: string;
  /**
   * @remarks
   * The encryption algorithm used for the system disk. Valid values:
   * 
   * - AES-256.
   * 
   * - SM4-128.
   * 
   * Default value: AES-256.
   * 
   * @example
   * AES-256
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the system disk. Valid values:
   * 
   * - true: encrypt the system disk.
   * 
   * - false: do not encrypt the system disk.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the KMS key used for the system disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The performance level of the ESSD that is used as the system disk. Valid values:
   * 
   * - PL0: A single disk can deliver up to 10,000 random read/write IOPS.
   * 
   * - PL1: A single disk can deliver up to 50,000 random read/write IOPS.
   * 
   * - PL2: A single disk can deliver up to 100,000 random read/write IOPS.
   * 
   * - PL3: A single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * > For more information about how to select an ESSD performance level, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The pre-configured IOPS of the system disk.
   * 
   * > IOPS, or input/output operations per second, is the number of I/O operations that a block storage device can process per second. It indicates the read and write performance of the block storage device.
   * 
   * @example
   * 100
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Value range:
   * 
   * - Basic disks: 20 to 500.
   * 
   * - ESSDs:
   * 
   *   - PL0: 1 to 2048.
   * 
   *   - PL1: 20 to 2048.
   * 
   *   - PL2: 461 to 2048.
   * 
   *   - PL3: 1261 to 2048.
   * 
   * - ESSD AutoPL cloud disks: 1 to 2048.
   * 
   * - Other disk categories: 20 to 2048.
   * 
   * The value of this parameter must be greater than or equal to max{1, ImageSize}.
   * 
   * @example
   * 50
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

export class ModifyScalingConfigurationShrinkRequestCustomPriorities extends $dara.Model {
  /**
   * @remarks
   * The instance type of the ECS instance.
   * 
   * > The instance type must be included in the list of instance types in the scaling configuration.
   * 
   * @example
   * ecs.c6a.4xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * > The vSwitch must be included in the list of vSwitches in the scaling group.
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

export class ModifyScalingConfigurationShrinkRequestDataDisks extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy used for the data disk.
   * 
   * @example
   * sp-bp19nq9enxqkomib****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable performance burst for the system disk. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * > This parameter takes effect only when `SystemDisk.Category` is set to `cloud_auto`.
   * 
   * <props="china">
   * 
   * For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The categories of the data disk. Valid values:
   * 
   * - cloud: basic disk. The \\`DeleteWithInstance\\` attribute of a basic disk that is created with an instance is \\`true\\`.
   * 
   * - cloud_efficiency: ultra disk.
   * 
   * - cloud_ssd: standard SSD.
   * 
   * - cloud_essd: ESSD.
   * 
   * > You cannot specify this parameter and `DataDisk.Category` at the same time.
   */
  categories?: string[];
  /**
   * @remarks
   * The category of the data disk. Valid values:
   * 
   * - cloud: basic disk. The \\`DeleteWithInstance\\` attribute of a basic disk that is created with an instance is \\`true\\`.
   * 
   * - cloud_efficiency: ultra disk.
   * 
   * - cloud_ssd: standard SSD.
   * 
   * - ephemeral_ssd: local SSD.
   * 
   * - cloud_essd: ESSD.
   * 
   * You cannot specify this parameter and `DataDisk.Categories` at the same time. If neither this parameter nor `DataDisk.Categories` is specified, this parameter has a default value:
   * 
   * - For I/O optimized instances, the default value is \\`cloud_efficiency\\`.
   * 
   * - For non-I/O optimized instances, the default value is \\`cloud\\`.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release the data disk when the instance is released. Valid values:
   * 
   * - true: The disk is released with the instance.
   * 
   * - false: The disk is not released with the instance.
   * 
   * You can set this parameter only for independent cloud disks (\\`DataDisk.Category\\` is \\`cloud\\`, \\`cloud_efficiency\\`, \\`cloud_ssd\\`, \\`cloud_essd\\`, or \\`cloud_auto\\`). Otherwise, an error occurs.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the data disk. The description must be 2 to 256 English or Chinese characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * Test data disk.
   */
  description?: string;
  /**
   * @remarks
   * The mount point of the data disk. If you do not specify this parameter, the system allocates a mount point when the ECS instance is automatically created. The mount point starts from /dev/xvdb and goes to /dev/xvdz.
   * 
   * @example
   * /dev/xvdd
   */
  device?: string;
  /**
   * @remarks
   * The name of the data disk. The name must be 2 to 128 English or Chinese characters in length. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * cloud_ssdData
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether the system disk is encrypted. Valid values:
   * 
   * - true: The system disk is encrypted.
   * 
   * - false: The system disk is not encrypted.
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The ID of the KMS key for the data disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The performance level of the ESSD that is used as the data disk. Valid values:
   * 
   * - PL0: A single disk can deliver up to 10,000 random read/write IOPS.
   * 
   * - PL1: A single disk can deliver up to 50,000 random read/write IOPS.
   * 
   * - PL2: A single disk can deliver up to 100,000 random read/write IOPS.
   * 
   * - PL3: A single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * > For more information about how to select an ESSD performance level, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The pre-configured IOPS of the data disk.
   * 
   * > IOPS, or input/output operations per second, is the number of I/O operations that a block storage device can process per second. It indicates the read and write performance of the block storage device.
   * 
   * @example
   * 100
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of the data disk. Unit: GiB. Value range:
   * 
   * - cloud: 5 to 2000.
   * 
   * - cloud_efficiency: 20 to 32768.
   * 
   * - cloud_ssd: 20 to 32768.
   * 
   * - cloud_essd: 20 to 32768.
   * 
   * - ephemeral_ssd: 5 to 800.
   * 
   * If you specify this parameter, the disk size must be greater than or equal to the size of the snapshot specified by \\`SnapshotId\\`.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The snapshot that is used to create the data disk. If you specify this parameter, \\`DataDisk.Size\\` is ignored, and the size of the created disk is the size of the specified snapshot.
   * 
   * If the snapshot was created on or before July 15, 2013, the call is rejected, and the \\`InvalidSnapshot.TooOld\\` error is returned.
   * 
   * @example
   * s-snapshot****
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

export class ModifyScalingConfigurationShrinkRequestInstancePatternInfos extends $dara.Model {
  /**
   * @remarks
   * The architecture type of the instance type. Valid values:
   * 
   * - X86: x86.
   * 
   * - Heterogeneous: heterogeneous computing, such as GPU and FPGA.
   * 
   * - BareMental: ECS Bare Metal Instance.
   * 
   * - Arm: Arm.
   * 
   * Default value: all architecture types.
   */
  architectures?: string[];
  /**
   * @remarks
   * Specifies whether to include burstable instance types. Valid values:
   * 
   * - Exclude: do not include burstable instance types.
   * 
   * - Include: include burstable instance types.
   * 
   * - Required: include only burstable instance types.
   * 
   * Default value: Include.
   * 
   * @example
   * Include
   */
  burstablePerformance?: string;
  /**
   * @remarks
   * The number of vCPU cores of the instance type in intelligent configuration mode. This parameter is used to filter instance types. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * Note the following information:
   * 
   * - The \\`InstancePatternInfo\\` parameter is applicable only to scaling groups whose NetworkType is set to VPC.
   * 
   * - You must specify \\`InstancePatternInfo.Cores\\` and \\`InstancePatternInfo.Memory\\` at the same time.
   * 
   * - If you specify instance types using the \\`InstanceType\\` or \\`InstanceTypes\\` parameter, Auto Scaling preferentially uses the specified instance types for scale-out activities. If the specified instance types are out of stock, Auto Scaling uses the lowest-priced instance type among those that meet the requirements specified by the \\`InstancePatternInfo\\` parameter for scale-out activities.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The CPU architecture of the instance. Valid values:
   * 
   * > You can specify up to two CPU architectures.
   * 
   * - X86.
   * 
   * - ARM.
   */
  cpuArchitectures?: string[];
  /**
   * @remarks
   * The instance types to exclude. You can use a wildcard character (\\*) to exclude an instance type or an entire instance family. Examples:
   * 
   * - ecs.c6.large: excludes the ecs.c6.large instance type.
   * 
   * - ecs.c6.\\*: excludes all instance types of the c6 family.
   */
  excludedInstanceTypes?: string[];
  /**
   * @remarks
   * The GPU type.
   */
  gpuSpecs?: string[];
  /**
   * @remarks
   * The category of the instance type. Valid values:
   * 
   * - General-purpose: General-purpose.
   * 
   * - Compute-optimized: compute-optimized.
   * 
   * - Memory-optimized: memory-optimized.
   * 
   * - Big data: big data.
   * 
   * - Local SSDs: local SSD.
   * 
   * - High Clock Speed: high frequency.
   * 
   * - Enhanced: enhanced instance families.
   * 
   * - Shared: shared-resource instances.
   * 
   * - Compute-optimized with GPU: GPU.
   * 
   * - Visual Compute-optimized: visual compute-optimized.
   * 
   * - Heterogeneous Service: heterogeneous computing.
   * 
   * - Compute-optimized with FPGA: FPGA.
   * 
   * - Compute-optimized with NPU: NPU-accelerated.
   * 
   * - ECS Bare Metal: ECS Bare Metal Instance.
   * 
   * - High Performance Compute: high-performance computing (HPC).
   */
  instanceCategories?: string[];
  /**
   * @remarks
   * The level of the instance family. This parameter is used to filter instance types. This parameter takes effect only when \\`CostOptimization\\` is enabled. Valid values:
   * 
   * - EntryLevel: entry-level instances (shared). This instance type is cost-effective but does not provide stable computing performance. It is suitable for business scenarios that have low CPU utilization. For more information, see [Shared instance families](https://help.aliyun.com/document_detail/108489.html).
   * 
   * - EnterpriseLevel: enterprise-level instances. This instance type provides stable performance and dedicated resources, and is suitable for business scenarios that have high stability requirements. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * - CreditEntryLevel: credit entry-level instances (burstable). This instance type provides CPU credits to ensure computing performance. It is suitable for business scenarios that have low and sporadic CPU utilization. For more information, see [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The instance families to query. You can specify up to 10 instance families.
   */
  instanceTypeFamilies?: string[];
  /**
   * @remarks
   * The maximum hourly price that you can accept for a pay-as-you-go or spot instance in intelligent configuration mode. This parameter is used to filter instance types.
   * 
   * > This parameter is required when \\`SpotStrategy\\` is set to \\`SpotWithPriceLimit\\`. In other cases, this parameter is optional.
   * 
   * @example
   * 2
   */
  maxPrice?: number;
  /**
   * @remarks
   * The maximum number of vCPU cores of the instance type.
   * 
   * > The value of \\`MaximumCpuCoreCount\\` cannot be more than four times the value of \\`MinimumCpuCoreCount\\`.
   * 
   * @example
   * 4
   */
  maximumCpuCoreCount?: number;
  /**
   * @remarks
   * The maximum number of GPUs of the instance. Valid values: positive integers.
   * 
   * @example
   * 2
   */
  maximumGpuAmount?: number;
  /**
   * @remarks
   * The maximum memory size of the instance. Unit: GiB.
   * 
   * @example
   * 4
   */
  maximumMemorySize?: number;
  /**
   * @remarks
   * The memory size of the instance type in intelligent configuration mode. Unit: GiB. This parameter is used to filter instance types.
   * 
   * @example
   * 4
   */
  memory?: number;
  /**
   * @remarks
   * The minimum baseline vCPU computing performance (for all vCPUs) of a t5 or t6 burstable instance.
   * 
   * @example
   * 12
   */
  minimumBaselineCredit?: number;
  /**
   * @remarks
   * The minimum number of vCPU cores of the instance.
   * 
   * @example
   * 2
   */
  minimumCpuCoreCount?: number;
  /**
   * @remarks
   * The minimum number of IPv6 addresses that can be assigned to a single ENI of the instance.
   * 
   * @example
   * 1
   */
  minimumEniIpv6AddressQuantity?: number;
  /**
   * @remarks
   * The minimum number of IPv4 addresses that can be assigned to a single ENI of the instance.
   * 
   * @example
   * 2
   */
  minimumEniPrivateIpAddressQuantity?: number;
  /**
   * @remarks
   * The minimum number of ENIs that can be attached to the instance.
   * 
   * @example
   * 2
   */
  minimumEniQuantity?: number;
  /**
   * @remarks
   * The minimum number of GPUs of the instance. Valid values: positive integers.
   * 
   * @example
   * 2
   */
  minimumGpuAmount?: number;
  /**
   * @remarks
   * The minimum initial vCPU credit for a t5 or t6 burstable instance.
   * 
   * @example
   * 12
   */
  minimumInitialCredit?: number;
  /**
   * @remarks
   * The minimum memory size of the instance. Unit: GiB.
   * 
   * @example
   * 4
   */
  minimumMemorySize?: number;
  /**
   * @remarks
   * The processor model of the instance. You can specify up to 10 processor models.
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

export class ModifyScalingConfigurationShrinkRequestInstanceTypeCandidateOptions extends $dara.Model {
  /**
   * @remarks
   * When supplementing with vSwitches from other zones is allowed, you must specify the optional CIDR blocks for the vSwitches.
   */
  allowCidrBlocks?: string[];
  /**
   * @remarks
   * Specifies whether to allow supplementing with vSwitches from other zones.
   * 
   * > The instance type remains unchanged, and only new zones are selected as alternatives. When the scaling group cannot be scaled out in any of the selected zones due to issues such as insufficient inventory, the system automatically adds a new vSwitch in another zone to the scaling group based on this configuration.
   * > For example, if the scaling group is configured with zones cn-hangzhou-h and cn-hangzhou-g, and scale-out fails in both zones, ESS may create a vSwitch in cn-hangzhou-k and add it to the scaling group based on real-time inventory.
   * 
   * @example
   * true
   */
  allowCrossAz?: boolean;
  /**
   * @remarks
   * Specifies whether to allow supplementing with instance types from other generations.
   * 
   * - For example, if the current instance type is ecs.c7.large, you can enable this feature to use alternative instance types such as ecs.c6.large and ecs.c8.large.
   * 
   * @example
   * true
   */
  allowDifferentGeneration?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the alternative mode.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum price for alternative instance types.
   * 
   * @example
   * 1.5
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

export class ModifyScalingConfigurationShrinkRequestInstanceTypeOverrides extends $dara.Model {
  /**
   * @remarks
   * If you want to specify the capacity of an instance type in a scaling configuration, specify this parameter and \\`InstanceTypeOverride.WeightedCapacity\\`.
   * 
   * This parameter is used to specify an instance type. You can specify this parameter multiple times. You can use this parameter with the \\`InstanceTypeOverride.WeightedCapacity\\` parameter to enable custom weights for multiple instance types.
   * 
   * > If you specify this parameter, you cannot specify \\`instanceTypes\\`.
   * 
   * Valid values of InstanceType: available ECS instance types.
   * 
   * @example
   * ecs.c5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * If you want the scaling group to scale based on the capacity of instance types, specify this parameter after you specify \\`LaunchTemplateOverride.InstanceType\\`.
   * 
   * This parameter specifies the weight of an instance type, which indicates the capacity of a single instance of the specified instance type in the scaling group. A higher weight indicates that a smaller number of instances of the specified instance type are required to meet the expected capacity.
   * 
   * You can set different weights for different instance types as needed because the performance metrics, such as the number of vCPUs and memory size, vary based on the instance type.
   * 
   * For example:
   * 
   * - Current capacity: 0.
   * 
   * - Expected capacity: 6.
   * 
   * - Capacity of the ecs.c5.xlarge instance type: 4.
   * 
   * To meet the expected capacity, the scaling group scales out two ecs.c5.xlarge instances.
   * 
   * > The capacity of the scaling group after a scale-out activity cannot exceed the sum of the maximum capacity (MaxSize) and the maximum weight of an instance type.
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

export class ModifyScalingConfigurationShrinkRequestNetworkInterfaces extends $dara.Model {
  /**
   * @remarks
   * The type of the ENI. When you use this parameter, you must use \\`NetworkInterfaces\\` to configure the primary ENI. You cannot set the \\`SecurityGroupId\\` or \\`SecurityGroupIds\\` parameter. Valid values:
   * 
   * - Primary: primary ENI.
   * 
   * - Secondary: secondary ENI.
   * 
   * Default value: Secondary.
   * 
   * @example
   * Primary
   */
  instanceType?: string;
  /**
   * @remarks
   * The number of randomly generated IPv6 addresses to be assigned to the primary ENI. Note:
   * 
   * This parameter takes effect only when \\`NetworkInterface.InstanceType\\` is set to \\`Primary\\`. You cannot set this parameter if \\`NetworkInterface.InstanceType\\` is set to \\`Secondary\\` or is empty.
   * 
   * After you set this parameter, you cannot set \\`Ipv6AddressCount\\`.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The communication mode of the NIC. Valid values:
   * 
   * - Standard: uses the TCP communication mode.
   * 
   * - HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the RDMA communication mode.
   * 
   * Default value: Standard.
   * 
   * > The number of ENIs in RDMA mode cannot exceed the limit for the instance family. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * HighPerformance
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The number of secondary private IPv4 addresses to assign to the NIC. Valid values: 1 to 49.
   * 
   * - The value cannot exceed the limit on the number of IP addresses for the instance type. For more information, see [Instance families](https://help.aliyun.com/zh/ecs/user-guide/overview-of-instance-families).
   * 
   * - \\`NetworkInterface.N.SecondaryPrivateIpAddressCount\\` is used to assign a number of secondary private IPv4 addresses to the NIC, excluding the primary private IP address of the NIC. The system randomly assigns the addresses from the available CIDR block of the vSwitch where the NIC is located (\\`NetworkInterface.N.VSwitchId\\`).
   * 
   * @example
   * 6
   */
  secondaryPrivateIpAddressCount?: number;
  /**
   * @remarks
   * The IDs of one or more security groups to which the ENI belongs.
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

export class ModifyScalingConfigurationShrinkRequestResourcePoolOptionsPrivatePoolTags extends $dara.Model {
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

export class ModifyScalingConfigurationShrinkRequestResourcePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the private pool. The private pool can be an Elastic Assurance service or a Capacity Reservation service. You can only specify the ID of a Target private pool. You cannot specify this parameter and the \\`PrivatePoolTags\\` parameter at the same time.
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * Filter available Target private pools by tag. You can specify up to 20 tags.
   * Description:
   * 
   * - When you configure this parameter, the system filters only the associated Target private pools under your account to find private pools that match the tags and meet the constraints of the scaling group, such as zone and instance type.
   * 
   * - Tag matching rule: The private pool must match all specified tags.
   * 
   * - You cannot specify this parameter and the \\`PrivatePoolIds\\` parameter at the same time.
   */
  privatePoolTags?: ModifyScalingConfigurationShrinkRequestResourcePoolOptionsPrivatePoolTags[];
  /**
   * @remarks
   * The resource pool includes the private pool generated after an Elastic Assurance service or a Capacity Reservation service takes effect, and the public pool. You can select a resource pool to start an instance. Valid values:
   * 
   * - PrivatePoolFirst: The private pool is used first. If you select this policy and specify \\`ResourcePoolOptions.PrivatePoolIds\\` or meet the \\`PrivatePoolTags\\` conditions, the corresponding private pool is used first. If you do not specify a private pool or the specified private pool has insufficient capacity, the system automatically matches an open private pool. If no eligible private pools are available, a public pool is used to create the instance.
   * 
   * - PrivatePoolOnly: Only the private pool is used. If you select this policy, you must specify \\`ResourcePoolOptions.PrivatePoolIds\\`. If the specified private pool has insufficient capacity, the instance fails to start.
   * 
   * - PublicPoolFirst: The public pool is used first. A public pool is used first to create the instance. If the public pool has insufficient resources, a private pool is used. The system preferentially matches an open private pool. If no eligible private pools are available, the system uses the Target private pool that is specified by \\`ResourcePoolOptions.PrivatePoolIds\\` or meets the \\`PrivatePoolTags\\` conditions. (This policy is in invitational preview and is not yet available for use.)
   * 
   * - None: No resource pool policy is used.
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
      privatePoolTags: 'PrivatePoolTags',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolIds: { 'type': 'array', 'itemType': 'string' },
      privatePoolTags: { 'type': 'array', 'itemType': ModifyScalingConfigurationShrinkRequestResourcePoolOptionsPrivatePoolTags },
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

export class ModifyScalingConfigurationShrinkRequestSecurityOptions extends $dara.Model {
  /**
   * @remarks
   * The confidential computing mode. Valid values:
   * 
   * - Enclave: The ECS instance uses an enclave to build a confidential computing environment. For more information, see [Build a confidential computing environment using an enclave](https://help.aliyun.com/document_detail/203433.html).
   * 
   * - TDX: builds a TDX confidential computing environment. For more information, see [Build a TDX confidential computing environment](https://help.aliyun.com/document_detail/479090.html).
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

export class ModifyScalingConfigurationShrinkRequestSpotPriceLimits extends $dara.Model {
  /**
   * @remarks
   * The instance type of the spot instance. This parameter is in effect when \\`SpotStrategy\\` is set to \\`SpotWithPriceLimit\\`.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The bid for the spot instance. This parameter is in effect when \\`SpotStrategy\\` is set to \\`SpotWithPriceLimit\\`.
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

export class ModifyScalingConfigurationShrinkRequest extends $dara.Model {
  imageOptions?: ModifyScalingConfigurationShrinkRequestImageOptions;
  privatePoolOptions?: ModifyScalingConfigurationShrinkRequestPrivatePoolOptions;
  systemDisk?: ModifyScalingConfigurationShrinkRequestSystemDisk;
  /**
   * @remarks
   * Specifies whether to associate the instance on a dedicated host with the dedicated host. Valid values:
   * 
   * - default: The instance is not associated with the dedicated host. If you restart an instance that was stopped in economical mode, the instance may be placed on a different dedicated host in the automatic deployment resource pool if the resources of the original dedicated host are insufficient.
   * 
   * - host: The instance is associated with the dedicated host. If you restart an instance that was stopped in economical mode, the instance is still placed on the original dedicated host. If the resources of the original dedicated host are insufficient, the instance fails to restart.
   * 
   * @example
   * default
   */
  affinity?: string;
  /**
   * @remarks
   * The number of vCPUs. Unit: cores.
   * 
   * You can specify both \\`Cpu\\` and \\`Memory\\` to define a range of instance types. For example, if you set \\`Cpu\\` to 2 and \\`Memory\\` to 16, all instance types with 2 vCPUs and 16 GiB of memory are matched. Auto Scaling determines the available instance types based on factors such as I/O optimization and zone, and then creates the instance of the lowest-priced instance type.
   * 
   * > This configuration is effective only when the cost optimization mode is enabled and no instance types are specified in the scaling configuration.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The performance mode of the burstable instance. Valid values:
   * 
   * - Standard: the standard mode. For more information about the instance performance, see the "Performance modes" section in [What is a burstable instance?](https://help.aliyun.com/document_detail/59977.html).
   * 
   * - Unlimited: the unlimited mode. For more information about the instance performance, see the "Performance modes" section in [What is a burstable instance?](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The custom priority of the ECS instance type and vSwitch.
   * >Notice: This parameter is in effect only when the scaling policy of the scaling group is set to the priority-based policy.
   * 
   * If an instance cannot be created using the instance type and vSwitch with a higher priority, Auto Scaling automatically uses the instance type and vSwitch combination with the next priority to create the instance.
   * 
   * > If you specify custom priorities for only some instance type and vSwitch combinations, the combinations for which you do not specify custom priorities have a lower priority than the combinations for which you specify custom priorities. The priority of the combinations for which you do not specify custom priorities is determined by the order of vSwitches in the scaling group and the order of instance types in the scaling configuration.
   * >
   * > - For example, if the vSwitches in the scaling group are ordered as vsw1 and vsw2, the instance types in the scaling configuration are ordered as type1 and type2, and the custom priority is set to ["vsw2+type2", "vsw1+type2"], the final priority is: "vsw2+type2" > "vsw1+type2" > "vsw1+type1" > "vsw2+type1".
   */
  customPriorities?: ModifyScalingConfigurationShrinkRequestCustomPriorities[];
  /**
   * @remarks
   * The collection of data disk information.
   */
  dataDisks?: ModifyScalingConfigurationShrinkRequestDataDisks[];
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
   * Specifies whether to create the ECS instance on a dedicated host. If you specify \\`DedicatedHostId\\`, the \\`SpotStrategy\\` and \\`SpotPriceLimit\\` settings in the request are ignored. This is because dedicated hosts do not support spot instances.
   * 
   * You can call the DescribeDedicatedHosts operation to query the list of dedicated host IDs.
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The release protection attribute of the instance. This parameter specifies whether you can release the instance using the ECS console or by calling the DeleteInstance operation. This prevents the instance from being accidentally released. Valid values:
   * 
   * - true: enables release protection. You cannot release the instance using the ECS console or by calling the DeleteInstance operation.
   * 
   * - false: disables release protection. You can release the instance using the ECS console or by calling the DeleteInstance operation.
   * 
   * > This attribute applies only to pay-as-you-go instances. It prevents the instances that are scaled out by Auto Scaling from being accidentally released. This attribute does not affect normal scale-in activities. Instances for which release protection is enabled can be released during scale-in activities.
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
   * ds-bp13v7bjnj9gis****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The hostname of the ECS instance. A period (.) or a hyphen (-) cannot be used as the first or last character of the hostname. Consecutive periods (.) or hyphens (-) are not allowed. The naming conventions for hostnames vary based on the instance operating system:
   * 
   * - For Windows instances, the hostname must be 2 to 15 characters in length and can contain letters, digits, and hyphens (-). It cannot contain periods (.) or consist of only digits.
   * 
   * - For other instance types, such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate the hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
   * 
   * @example
   * hos****
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the HPC cluster to which the ECS instance belongs.
   * 
   * @example
   * hpc-clusterid
   */
  hpcClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the access channel for instance metadata. Valid values:
   * 
   * - enabled: enable.
   * 
   * - disabled: disable.
   * 
   * Default value: enabled.
   * 
   * > For more information about instance metadata, see [Overview of instance metadata](https://help.aliyun.com/document_detail/108460.html).
   * 
   * @example
   * enabled
   */
  httpEndpoint?: string;
  /**
   * @remarks
   * Specifies whether to enforce the security-hardened mode (IMDSv2) when you access instance metadata. Valid values:
   * 
   * - optional: does not enforce the use of IMDSv2.
   * 
   * - required: enforces the use of IMDSv2. If you set the value to \\`required\\`, you cannot access instance metadata in normal mode.
   * 
   * Default value: optional.
   * 
   * > For more information about how to access instance metadata, see [Access modes of instance metadata](https://help.aliyun.com/document_detail/108460.html).
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The name of the image family. You can set this parameter to obtain the latest available image from the specified image family to create instances. If you have set the `ImageId` parameter, you cannot set this parameter.
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image file that is used to create the instances.
   * 
   * > If the image that was previously used in the scaling configuration includes a system disk and data disks, the original data disk information is cleared after you change the image.
   * 
   * @example
   * centos6u5_64_20G_aliaegis_2014****.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image file. The image name must be unique in a region. If you specify \\`ImageId\\`, \\`ImageName\\` is ignored.
   * 
   * You cannot use \\`ImageName\\` to specify a Marketplace image.
   * 
   * @example
   * suse11sp3_64_20G_aliaegis_2015****.vhd
   */
  imageName?: string;
  /**
   * @remarks
   * The description of the ECS instance. The description must be 2 to 256 English or Chinese characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * Test instance.
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The name of the ECS instances that are automatically created using this scaling configuration.
   * 
   * @example
   * inst****
   */
  instanceName?: string;
  /**
   * @remarks
   * The collection of intelligent configuration information that is used to filter instance types that meet the specified requirements.
   */
  instancePatternInfos?: ModifyScalingConfigurationShrinkRequestInstancePatternInfos[];
  /**
   * @remarks
   * After you enable the alternative mode, if issues such as insufficient inventory occur, the system supplements the selected instance types with similar instance types of the same size, or creates vSwitches in alternative zones and adds them to the scaling group.
   */
  instanceTypeCandidateOptions?: ModifyScalingConfigurationShrinkRequestInstanceTypeCandidateOptions;
  /**
   * @remarks
   * The information about the specified instance types.
   */
  instanceTypeOverrides?: ModifyScalingConfigurationShrinkRequestInstanceTypeOverrides[];
  /**
   * @remarks
   * The instance types. If you use \\`InstanceTypes\\`, \\`InstanceType\\` is ignored.
   * 
   * If an instance cannot be created using the instance type with a higher priority, Auto Scaling automatically uses the instance type with the next priority to create the instance.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method for network usage. Valid values:
   * 
   * - PayByBandwidth: pay-by-bandwidth. If you set the value to PayByBandwidth, the value of \\`InternetMaxBandwidthOut\\` is the selected fixed bandwidth.
   * 
   * - PayByTraffic: pay-by-data-transfer. If you set the value to PayByTraffic, the value of \\`InternetMaxBandwidthOut\\` is the maximum bandwidth, and the billing is based on the actual network traffic.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s. Value range:
   * 
   * - If the purchased outbound public bandwidth is less than or equal to 10 Mbit/s: 1 to 10. The default value is 10.
   * 
   * - If the purchased outbound public bandwidth is greater than 10 Mbit/s: 1 to the value of `InternetMaxBandwidthOut`. The default value is the value of `InternetMaxBandwidthOut`.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100.
   * 
   * Default value: 0.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Specifies whether the instance is I/O optimized. Valid values:
   * 
   * - none: The instance is not I/O optimized.
   * 
   * - optimized: The instance is I/O optimized.
   * 
   * @example
   * none
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The number of randomly generated IPv6 addresses to be assigned to the ENI.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The name of the key pair that is used to log on to the ECS instance.
   * 
   * - For Windows instances, this parameter is ignored. The default value is empty.
   * 
   * - For Linux instances, password-based logon is disabled by default.
   * 
   * @example
   * KeyPair_Name
   */
  keyPairName?: string;
  /**
   * @remarks
   * The weight of the backend server. Valid values: 1 to 100.
   * 
   * @example
   * 50
   */
  loadBalancerWeight?: number;
  /**
   * @remarks
   * The memory size. Unit: GiB.
   * 
   * You can specify both \\`Cpu\\` and \\`Memory\\` to define a range of instance types. For example, if you set \\`Cpu\\` to 2 and \\`Memory\\` to 16, all instance types with 2 vCPUs and 16 GiB of memory are matched. Auto Scaling determines the available instance types based on factors such as I/O optimization and zone, and then creates the instance of the lowest-priced instance type.
   * 
   * > This configuration is effective only when the cost optimization mode is enabled and no instance types are specified in the scaling configuration.
   * 
   * @example
   * 16
   */
  memory?: number;
  /**
   * @remarks
   * The list of ENIs.
   */
  networkInterfaces?: ModifyScalingConfigurationShrinkRequestNetworkInterfaces[];
  /**
   * @remarks
   * Specifies whether to overwrite the parameter. Valid values:
   * 
   * - true: Overwrite the parameter.
   * 
   * - false: Do not overwrite the parameter.
   * 
   * @example
   * true
   */
  override?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the ECS instance. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters can be:
   * 
   * \\`()\\~!@#$%^&\\*-_+=|{}[]:;\\"<>,.?/
   * 
   * For Windows instances, the password cannot start with a forward slash (/).
   * 
   * > If you specify the \\`Password\\` parameter, we recommend that you send requests over HTTPS to prevent password leaks.
   * 
   * @example
   * 123abc****
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the password that is preset in the image. If you use this parameter, make sure that a password is set for the image.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The name of the RAM role of the ECS instance. The RAM role is provided and maintained by RAM. You can call the ListRoles operation to query the available RAM roles. For information about how to create a RAM role, see API CreateRole.
   * 
   * @example
   * RamRoleTest
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The ID of the resource group to which the ECS instance belongs.
   * 
   * @example
   * abcd1234abcd****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The resource pool policy to use when creating an instance. Note the following when you set this parameter:
   * 
   * - This parameter is in effect only when you create a pay-as-you-go instance.
   * 
   * - You cannot set this parameter and \\`PrivatePoolOptions.MatchCriteria\\` or \\`PrivatePoolOptions.Id\\` at the same time.
   */
  resourcePoolOptions?: ModifyScalingConfigurationShrinkRequestResourcePoolOptions;
  /**
   * @remarks
   * The ID of the scaling configuration that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * asc-bp16har3jpj6fjbx****
   */
  scalingConfigurationId?: string;
  /**
   * @remarks
   * The name of the scaling configuration. The name must be 2 to 64 English or Chinese characters in length. It must start with a digit, a letter, or a Chinese character. The name can contain digits, underscores (_), hyphens (-), and periods (.).
   * 
   * The name of a scaling configuration must be unique within a scaling group in the same region. If you do not specify this parameter, the ID of the scaling configuration is used by default.
   * 
   * @example
   * test-modify
   */
  scalingConfigurationName?: string;
  /**
   * @remarks
   * The scheduling options.
   * 
   * @example
   * ["testManagedPrivateSpaceId****"]
   */
  schedulerOptionsShrink?: string;
  /**
   * @remarks
   * The ID of the security group to which the ECS instance belongs. ECS instances in the same security group can access each other.
   * 
   * @example
   * sg-F876F****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the security group.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The security options.
   */
  securityOptions?: ModifyScalingConfigurationShrinkRequestSecurityOptions;
  /**
   * @remarks
   * The protection period of the spot instance. Unit: hours. Valid values:
   * 
   * - 1: Alibaba Cloud ensures that the instance runs for 1 hour and is not automatically released. After 1 hour, the system automatically compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
   * 
   * - 0: Alibaba Cloud does not ensure that the instance runs for 1 hour after it is created. The system automatically compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
   * 
   * > Alibaba Cloud sends a notification to you through ECS system events 5 minutes before the instance is released. Spot instances are billed by the second. Select a protection period based on the time required to complete your task.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The interruption mode of the spot instance. Currently, only Terminate is supported, which is the default value. This value indicates that the instance is directly released.
   * 
   * @example
   * Terminate
   */
  spotInterruptionBehavior?: string;
  /**
   * @remarks
   * The information about the spot instance types.
   */
  spotPriceLimits?: ModifyScalingConfigurationShrinkRequestSpotPriceLimits[];
  /**
   * @remarks
   * The preemption policy for the pay-as-you-go instance. Valid values:
   * 
   * - NoSpot: a regular pay-as-you-go instance.
   * 
   * - SpotWithPriceLimit: a spot instance for which you specify the maximum hourly price.
   * 
   * - SpotAsPriceGo: a spot instance for which the system automatically bids based on the current market price.
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
   * The maximum number of partitions in the storage set. The value must be an integer that is greater than or equal to 2.
   * 
   * @example
   * 2
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The categories of the system disk. If a disk of a category with a higher priority cannot be created, Auto Scaling automatically tries to create a disk of a category with the next priority. Valid values:
   * 
   * - cloud: basic disk.
   * 
   * - cloud_efficiency: ultra disk.
   * 
   * - cloud_ssd: standard SSD.
   * 
   * - cloud_essd: ESSD.
   * 
   * > You cannot specify this parameter and `SystemDisk.Category` at the same time.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The tags of the ECS instance. You can specify up to 20 tags in key-value pairs. The following limits apply to keys and values:
   * 
   * - A key can be up to 64 characters in length, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`. If you specify tags, the key cannot be an empty string.
   * 
   * - A value can be up to 128 characters in length, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`. The value can be an empty string.
   * 
   * @example
   * {"key1":"value1","key2":"value2", ... "key5":"value5"}
   */
  tags?: string;
  /**
   * @remarks
   * Specifies whether to create the instance on a dedicated host. Valid values:
   * 
   * - default: Create the instance not on a dedicated host.
   * 
   * - host: Create the instance on a dedicated host. If you do not specify \\`DedicatedHostId\\`, Alibaba Cloud automatically selects a dedicated host for the instance.
   * 
   * @example
   * default
   */
  tenancy?: string;
  /**
   * @remarks
   * The custom data of the ECS instance. The data must be Base64-encoded. The raw data can be up to 32 KB in size.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the zone to which the ECS instance belongs.
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
      instanceTypeCandidateOptions: 'InstanceTypeCandidateOptions',
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
      override: 'Override',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      passwordInherit: 'PasswordInherit',
      ramRoleName: 'RamRoleName',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourcePoolOptions: 'ResourcePoolOptions',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingConfigurationName: 'ScalingConfigurationName',
      schedulerOptionsShrink: 'SchedulerOptions',
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
      imageOptions: ModifyScalingConfigurationShrinkRequestImageOptions,
      privatePoolOptions: ModifyScalingConfigurationShrinkRequestPrivatePoolOptions,
      systemDisk: ModifyScalingConfigurationShrinkRequestSystemDisk,
      affinity: 'string',
      cpu: 'number',
      creditSpecification: 'string',
      customPriorities: { 'type': 'array', 'itemType': ModifyScalingConfigurationShrinkRequestCustomPriorities },
      dataDisks: { 'type': 'array', 'itemType': ModifyScalingConfigurationShrinkRequestDataDisks },
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
      instancePatternInfos: { 'type': 'array', 'itemType': ModifyScalingConfigurationShrinkRequestInstancePatternInfos },
      instanceTypeCandidateOptions: ModifyScalingConfigurationShrinkRequestInstanceTypeCandidateOptions,
      instanceTypeOverrides: { 'type': 'array', 'itemType': ModifyScalingConfigurationShrinkRequestInstanceTypeOverrides },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      ipv6AddressCount: 'number',
      keyPairName: 'string',
      loadBalancerWeight: 'number',
      memory: 'number',
      networkInterfaces: { 'type': 'array', 'itemType': ModifyScalingConfigurationShrinkRequestNetworkInterfaces },
      override: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      passwordInherit: 'boolean',
      ramRoleName: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourcePoolOptions: ModifyScalingConfigurationShrinkRequestResourcePoolOptions,
      scalingConfigurationId: 'string',
      scalingConfigurationName: 'string',
      schedulerOptionsShrink: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      securityOptions: ModifyScalingConfigurationShrinkRequestSecurityOptions,
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      spotPriceLimits: { 'type': 'array', 'itemType': ModifyScalingConfigurationShrinkRequestSpotPriceLimits },
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
    if(this.instanceTypeCandidateOptions && typeof (this.instanceTypeCandidateOptions as any).validate === 'function') {
      (this.instanceTypeCandidateOptions as any).validate();
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

