// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScalingConfigurationRequestImageOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use the ecs-user user to log on to the ECS instance. For more information, see [Manage logon usernames of ECS instances](https://help.aliyun.com/document_detail/388447.html). Valid values:
   * 
   * - true: Yes.
   * 
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
   * The ID of the private pool. This is the ID of the Elastic Assurance or Capacity Reservation service.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The private pool capacity option for instance startup. After an Elastic Assurance or a Capacity Reservation service takes effect, a private pool is generated. You can select a private pool to start an instance. Valid values:
   * 
   * - Open: open mode. The system automatically matches the instance with an open private pool. If no eligible private pool is found, the instance is started using public pool resources. You do not need to set the PrivatePoolOptions.Id parameter in this mode.
   * 
   * - Target: specified mode. The instance is started using the capacity of a specified private pool. If the specified private pool is unavailable, the instance fails to start. You must set the PrivatePoolOptions.Id parameter in this mode.
   * 
   * - None: no private pool is used. The instance is started without using a private pool.
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
   * The ID of the automatic snapshot policy to apply to the system disk.
   * 
   * @example
   * sp-bp12m37ccmxvbmi5****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature for the system disk. Valid values:
   * 
   * - true: enables the feature.
   * 
   * - false: disables the feature.
   * 
   * > You can set this parameter only when `SystemDisk.Category` is set to `cloud_auto`.
   * 
   * <props="china">
   * 
   * For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
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
   * - ephemeral_ssd: local SSD.
   * 
   * - cloud_essd: ESSD.
   * 
   * - cloud_auto: ESSD AutoPL disk.
   * 
   * You cannot specify this parameter and `SystemDiskCategories` at the same time. If you do not specify this parameter or `SystemDiskCategories`, the default value of this parameter is used:
   * 
   * - For I/O optimized instances, the default value is cloud_efficiency.
   * 
   * - For non-I/O optimized instances, the default value is cloud.
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
   * Test system disk.
   */
  description?: string;
  /**
   * @remarks
   * The name of the system disk. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * cloud_ssdSystem
   */
  diskName?: string;
  /**
   * @remarks
   * The encryption algorithm for the system disk. Valid values:
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
   * - true: encrypts the disk.
   * 
   * - false: does not encrypt the disk.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the KMS key to use for the system disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The performance level of the ESSD that is used as the system disk. Valid values:
   * 
   * - PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * 
   * - PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * 
   * - PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * 
   * - PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned IOPS of the system disk.
   * 
   * > IOPS (input/output operations per second) indicates the number of I/O operations that a block storage device can process per second. It represents the read and write capabilities of the device.
   * 
   * @example
   * 100
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values:
   * 
   * - Basic disk: 20 to 500.
   * 
   * - ESSD:
   * 
   *   - PL0: 1 to 2048.
   * 
   *   - PL1: 20 to 2048.
   * 
   *   - PL2: 461 to 2048.
   * 
   *   - PL3: 1261 to 2048.
   * 
   * - ESSD AutoPL disk: 1 to 2048.
   * 
   * - Other disk categories: 20 to 2048.
   * 
   * The value of this parameter must be greater than or equal to max{1, ImageSize}.
   * 
   * Default value: max{40, ImageSize}.
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
   * The instance type of the ECS instance.
   * 
   * >Notice: 
   * 
   * Must be included in the list of instance types in the scaling configuration.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * >Notice: 
   * 
   * Must be included in the list of vSwitches in the scaling group.
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
   * The ID of the automatic snapshot policy to apply to the data disk.
   * 
   * @example
   * sp-bp19nq9enxqkomib****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable performance burst for the system disk. Valid values:
   * 
   * - true: Enables performance burst.
   * 
   * - false: Disables performance burst.
   * 
   * > This parameter is available only when `SystemDisk.Category` is set to `cloud_auto`.
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
   * Multiple disk categories for the data disk. When a disk of a higher-priority category is unavailable, Auto Scaling automatically tries the next lower-priority category. Valid values:
   * 
   * - cloud: basic disk. The DeleteWithInstance attribute of a basic disk created with an instance is true.
   * 
   * - cloud_efficiency: ultra disk.
   * 
   * - cloud_ssd: standard SSD.
   * 
   * - cloud_essd: ESSD.
   * 
   * > If you specify this parameter, you cannot specify `DataDisks.Category`.
   */
  categories?: string[];
  /**
   * @remarks
   * The category of the data disk. Valid values:
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
   * - cloud_auto: ESSD AutoPL disk.
   * 
   * You cannot specify this parameter and DataDisk.Categories at the same time. If you do not specify this parameter or DataDisk.Categories, the default value of this parameter is used:
   * 
   * - For I/O optimized instances, the default value is cloud_efficiency.
   * 
   * - For non-I/O optimized instances, the default value is cloud.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release the data disk when the instance is released. Valid values:
   * 
   * - true: releases the disk when the instance is released.
   * 
   * - false: retains the disk when the instance is released.
   * 
   * This parameter can be set only for separately purchased cloud disks (DataDisks.Category is cloud, cloud_efficiency, cloud_ssd, or cloud_essd). Otherwise, an error occurs.
   * 
   * Default value: true.
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
   * Test data disk.
   */
  description?: string;
  /**
   * @remarks
   * The mount point of the data disk. If you do not specify this parameter, the system automatically assigns a mount point when creating the ECS instance, starting from /dev/xvdb and ending at /dev/xvdz.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The name of the data disk. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * cloud_ssdData
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the data disk. Valid values:
   * 
   * - true: encrypts the disk.
   * 
   * - false: does not encrypt the disk.
   * 
   * Default value: false.
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
   * - PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * 
   * - PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * 
   * - PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * 
   * - PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * > For information about how to select an ESSD performance level, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned IOPS of the data disk.
   * 
   * > IOPS (input/output operations per second) indicates the number of I/O operations that a block storage device can process per second. It represents the read and write capabilities of the device.
   * 
   * @example
   * 100
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of the data disk. Unit: GiB. Valid values:
   * 
   * - cloud: 5 to 2000.
   * 
   * - cloud_efficiency: 20 to 32768.
   * 
   * - cloud_essd: 20 to 32768.
   * 
   * - ephemeral_ssd: 5 to 800.
   * 
   * If you specify this parameter, the disk size must be greater than or equal to the snapshot size specified by SnapshotId.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The snapshot to use to create the data disk. If you specify this parameter, DataDisks.Size is ignored. The size of the created disk is the size of the specified snapshot.
   * 
   * If the snapshot was created on or before July 15, 2013, the call is rejected and an InvalidSnapshot.TooOld error is returned.
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
   * The architecture type of the instance type. Valid values:
   * 
   * - X86: X86 compute.
   * 
   * - Heterogeneous: heterogeneous computing, such as GPU or FPGA.
   * 
   * - BareMental: ECS Bare Metal Instance.
   * 
   * - Arm: Arm compute.
   * 
   * Default value: all architecture types are included.
   */
  architectures?: string[];
  /**
   * @remarks
   * Specifies whether to include burstable instance types. Valid values:
   * 
   * - Exclude: does not include burstable instance types.
   * 
   * - Include: includes burstable instance types.
   * 
   * - Required: includes only burstable instance types.
   * 
   * Default value: Include.
   * 
   * @example
   * Include
   */
  burstablePerformance?: string;
  /**
   * @remarks
   * In intelligent configuration mode, the number of vCPU cores of the instance type. This is used to filter instance types that meet the requirements. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * Note the following:
   * 
   * - The InstancePatternInfos parameter applies only when the network type of the scaling group is VPC.
   * 
   * - When using InstancePatternInfos, you must specify both InstancePatternInfos.Cores and InstancePatternInfos.Memory.
   * 
   * - If you have already specified instance types using the InstanceType or InstanceTypes parameter, Auto Scaling prioritizes the specified instance types for scale-outs. If the specified instance types are out of stock, Auto Scaling uses the instance type with the lowest price from the instance types that match the InstancePatternInfos parameter.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The CPU architecture of the instance. Valid values:
   * 
   * > You can specify multiple CPU architectures. N is an integer from 1 to 2.
   * 
   * - X86.
   * 
   * - ARM.
   */
  cpuArchitectures?: string[];
  /**
   * @remarks
   * The instance types to exclude. You can use a wildcard character (\\*) to exclude a single instance type or an entire instance family. For example:
   * 
   * - ecs.c6.large: excludes the ecs.c6.large instance type.
   * 
   * - ecs.c6.\\*: excludes all instance types in the c6 family.
   */
  excludedInstanceTypes?: string[];
  /**
   * @remarks
   * The GPU type.
   */
  gpuSpecs?: string[];
  /**
   * @remarks
   * The category of the instance. Valid values:
   * 
   * > You can specify multiple instance categories. N is an integer from 1 to 10.
   * 
   * - General-purpose: General-purpose.
   * 
   * - Compute-optimized: compute-optimized.
   * 
   * - Memory-optimized: memory-optimized.
   * 
   * - Big data: big data.
   * 
   * - Local SSDs : local SSDs.
   * 
   * - High Clock Speed : high frequency.
   * 
   * - Enhanced : enhanced instance families.
   * 
   * - Shared: shared-resource instances.
   * 
   * - Compute-optimized with GPU : GPU compute-optimized.
   * 
   * - Visual Compute-optimized : visual compute-optimized.
   * 
   * - Heterogeneous Service : heterogeneous service.
   * 
   * - Compute-optimized with FPGA : FPGA compute-optimized.
   * 
   * - Compute-optimized with NPU : NPU compute-optimized.
   * 
   * - ECS Bare Metal : ECS Bare Metal Instance.
   * 
   * - High Performance Compute: high-performance computing.
   */
  instanceCategories?: string[];
  /**
   * @remarks
   * The level of the instance family, used to filter instance types that meet the requirements. This parameter takes effect when `CostOptimization` is enabled. Valid values:
   * 
   * - EntryLevel: entry-level, which refers to shared-resource instances. This level offers lower costs but cannot guarantee stable computing performance. It is suitable for business scenarios with low CPU utilization. For more information, see [Shared-resource instances](https://help.aliyun.com/document_detail/108489.html).
   * 
   * - EnterpriseLevel: enterprise-level. This level provides stable performance and dedicated resources, suitable for business scenarios that require high stability. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * - CreditEntryLevel: credit entry-level, which refers to burstable instances. This level uses CPU credits to ensure computing performance and is suitable for business scenarios with low CPU utilization and occasional CPU bursts. For more information, see [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The instance families to query. You can specify multiple instance families. N is an integer from 1 to 10.
   */
  instanceTypeFamilies?: string[];
  /**
   * @remarks
   * In intelligent configuration mode, the maximum hourly price you are willing to pay for a pay-as-you-go or preemptible instance. This is used to filter instance types that meet the requirements.
   * 
   * > This parameter is required when SpotStrategy is set to SpotWithPriceLimit. In other cases, this parameter is optional.
   * 
   * @example
   * 2
   */
  maxPrice?: number;
  /**
   * @remarks
   * The maximum number of vCPU cores for the instance type.
   * 
   * > MaximumCpuCoreCount cannot be more than four times the value of MinimumCpuCoreCount.
   * 
   * @example
   * 4
   */
  maximumCpuCoreCount?: number;
  /**
   * @remarks
   * The maximum number of GPUs for the instance. The value must be a positive integer.
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
   * In intelligent configuration mode, the memory size of the instance type. Unit: GiB. This is used to filter instance types that meet the requirements.
   * 
   * @example
   * 4
   */
  memory?: number;
  /**
   * @remarks
   * The minimum baseline vCPU performance (the sum of all vCPUs) for burstable instances of the t5 or t6 family.
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
   * The minimum number of IPv6 addresses that can be assigned to a single ENI.
   * 
   * @example
   * 1
   */
  minimumEniIpv6AddressQuantity?: number;
  /**
   * @remarks
   * The minimum number of private IPv4 addresses to assign to a single elastic network interface (ENI) of an instance.
   * 
   * @example
   * 2
   */
  minimumEniPrivateIpAddressQuantity?: number;
  /**
   * @remarks
   * The minimum number of elastic network interfaces (ENIs) that can be attached to an instance.
   * 
   * @example
   * 2
   */
  minimumEniQuantity?: number;
  /**
   * @remarks
   * The minimum number of GPUs for the instance. The value must be a positive integer.
   * 
   * @example
   * 2
   */
  minimumGpuAmount?: number;
  /**
   * @remarks
   * The minimum initial vCPU credit for burstable instances of the t5 or t6 family.
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
   * The processor model of the instance. You can specify multiple processor models. N is an integer from 1 to 10.
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

export class CreateScalingConfigurationRequestInstanceTypeCandidateOptions extends $dara.Model {
  /**
   * @remarks
   * When supplementing with vSwitches from other zones is allowed, you must specify the CIDR blocks for the candidate vSwitches.
   */
  allowCidrBlocks?: string[];
  /**
   * @remarks
   * Specifies whether to allow supplementing with vSwitches from other zones.
   * 
   * > The instance type remains unchanged; only new zones are considered as candidates. When a scaling group cannot scale out in any of the selected zones due to issues like insufficient inventory, this configuration allows ESS to automatically add a vSwitch from a new zone to the scaling group.
   * > For example, if a scaling group is configured for zones cn-hangzhou-h and cn-hangzhou-g, and neither can be scaled out, ESS might create and add a vSwitch in cn-hangzhou-k based on real-time inventory.
   * 
   * @example
   * true
   */
  allowCrossAz?: boolean;
  /**
   * @remarks
   * Specifies whether to allow supplementing with instance types from other generations.
   * 
   * - For example, if the current instance type is ecs.c7.large, enabling this allows ecs.c6.large and ecs.c8.large as candidate types.
   * 
   * @example
   * true
   */
  allowDifferentGeneration?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the candidate mode.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum price for candidate instance types.
   * 
   * @example
   * 2.10
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

export class CreateScalingConfigurationRequestInstanceTypeOverrides extends $dara.Model {
  /**
   * @remarks
   * If you want the scaling group to scale based on the capacity of instance types, specify both this parameter and WeightedCapacity.
   * 
   * This parameter specifies the instance type and overwrites the instance type in the launch template. You can specify this parameter up to 20 times. N is an integer from 1 to 20.
   * 
   * > This parameter takes effect only when a launch template is specified by the LaunchTemplateId parameter.
   * 
   * Valid values for InstanceType: available ECS instance types.
   * 
   * @example
   * ecs.c5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * To specify the capacity of an instance type in the scaling configuration, specify this parameter after you specify InstanceTypeOverrides.InstanceType.
   * 
   * This parameter specifies the weight of the instance type. The weight indicates the capacity of a single instance of the specified instance type in the scaling group. A higher weight means that fewer instances of that type are needed to meet the desired capacity.
   * 
   * You can configure different weights for different instance types based on their performance metrics, such as the number of vCPUs and memory size.
   * 
   * For example:
   * 
   * - Current capacity: 0.
   * 
   * - Expected capacity: 6.
   * 
   * - Capacity of ecs.c5.xlarge: 4.
   * 
   * To meet the expected capacity, the scaling group will scale out two ecs.c5.xlarge instances.
   * 
   * > During a scale-out, the capacity of the scaling group cannot exceed the sum of MaxSize and the maximum weight of the instance type.
   * 
   * Valid values for WeightedCapacity: 1 to 500.
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
   * @remarks
   * The type of ENI. When using this parameter, you must use NetworkInterfaces to set the primary NIC and cannot set the SecurityGroupId or SecurityGroupIds parameters. Valid values:
   * 
   * - Primary: primary NIC.
   * 
   * - Secondary: secondary NIC.
   * 
   * Default value: Secondary.
   * 
   * @example
   * Primary
   */
  instanceType?: string;
  /**
   * @remarks
   * The number of randomly generated IPv6 addresses to assign to the primary NIC.
   * Note:
   * 
   * - This parameter takes effect only when NetworkInterface.InstanceType is set to Primary. If NetworkInterface.InstanceType is set to Secondary or is empty, you cannot set this parameter.
   * 
   * - If you set this parameter, you cannot set Ipv6AddressCount.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The communication mode of the NIC. Valid values:
   * 
   * - Standard: uses TCP communication mode.
   * 
   * - HighPerformance: enables the Elastic RDMA Interface (ERI) and uses RDMA communication mode.
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
   * - The value cannot exceed the IP address limit for the instance type. For more information, see [Instance families](https://help.aliyun.com/en/ecs/user-guide/overview-of-instance-families).
   * 
   * - NetworkInterface.N.SecondaryPrivateIpAddressCount is used to assign a number of secondary private IPv4 addresses to the NIC (excluding the primary private IP address). The system randomly assigns these addresses from the available CIDR block of the vSwitch (NetworkInterface.N.VSwitchId) where the NIC is located.
   * 
   * @example
   * 6
   */
  secondaryPrivateIpAddressCount?: number;
  /**
   * @remarks
   * One or more security group IDs to which the ENI belongs.
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

export class CreateScalingConfigurationRequestResourcePoolOptionsPrivatePoolTags extends $dara.Model {
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

export class CreateScalingConfigurationRequestResourcePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the private pool. This is the ID of the Elastic Assurance or Capacity Reservation service. This parameter can only accept Target mode private pool IDs and cannot be specified at the same time as the PrivatePoolTags parameter.
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * Filter available Target private pools by tags. N is an integer from 1 to 20.
   * Note:
   * 
   * - When this parameter is configured, the system only selects from the associated Target private pools under the account that have matching tags and also meet the scaling group constraints (such as zone, instance type, etc.).
   * 
   * - Tag matching rule: The private pool must match all specified tags.
   * 
   * - This parameter cannot be specified at the same time as the PrivatePoolIds parameter.
   */
  privatePoolTags?: CreateScalingConfigurationRequestResourcePoolOptionsPrivatePoolTags[];
  /**
   * @remarks
   * The resource pool, which includes private pools generated after an Elastic Assurance or Capacity Reservation service takes effect, and the public pool, can be selected for instance startup. Valid values:
   * 
   * - PrivatePoolFirst: Private pool first. When this policy is selected, if you specify ResourcePoolOptions.PrivatePoolIds or meet the PrivatePoolTags conditions, the corresponding private pool is used first. If no private pool is specified or the specified private pool has insufficient capacity, the system automatically matches an open-type private pool. If no eligible private pool is found, the instance is created using the public pool.
   * 
   * - PrivatePoolOnly: Private pool only. When this policy is selected, you must specify ResourcePoolOptions.PrivatePoolIds. If the specified private pool has insufficient capacity, the instance fails to start.
   * 
   * - PublicPoolFirst: Public pool resources first. The system prioritizes creating the instance using the public pool. When public pool resources are insufficient, private pool resources are used as a supplement. The system first automatically matches an open-type private pool. If no eligible private pool is found, it uses a Target-type private pool that is specified by ResourcePoolOptions.PrivatePoolIds or meets the PrivatePoolTags conditions. (This policy is in invitational preview and is not yet available for use.)
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
      privatePoolTags: { 'type': 'array', 'itemType': CreateScalingConfigurationRequestResourcePoolOptionsPrivatePoolTags },
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

export class CreateScalingConfigurationRequestSecurityOptions extends $dara.Model {
  /**
   * @remarks
   * The confidential computing mode. Possible values:
   * 
   * - Enclave: The ECS instance uses an Enclave to build a confidential computing environment. For more information, see [Build a confidential computing environment using an Enclave](https://help.aliyun.com/document_detail/203433.html).
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

export class CreateScalingConfigurationRequestSpotPriceLimits extends $dara.Model {
  /**
   * @remarks
   * The instance type of the preemptible instance. This parameter takes effect when SpotStrategy is set to SpotWithPriceLimit.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The bid price for the preemptible instance. This parameter takes effect when SpotStrategy is set to SpotWithPriceLimit.
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
   * Specifies whether to associate the instance with the dedicated host. Valid values:
   * 
   * - default: The instance is not associated with the dedicated host. When you restart an instance that was stopped in economical mode, the instance may be placed on a different dedicated host in the automatic deployment resource pool if the original dedicated host has insufficient resources.
   * 
   * - host: The instance is associated with the dedicated host. When you restart an instance that was stopped in economical mode, the instance is still placed on the original dedicated host. If the original dedicated host has insufficient resources, the instance fails to restart.
   * 
   * Default value: default.
   * 
   * @example
   * default
   */
  affinity?: string;
  /**
   * @remarks
   * Ensures the idempotence of the request. You can use the client to generate a unique parameter value to make sure that the same request is not repeated. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The number of vCPUs. Unit: cores.
   * 
   * You can specify both Cpu and Memory to define a range of instance types. For example, if you set Cpu to 2 and Memory to 16, all instance types with 2 vCPUs and 16 GiB of memory are selected. Auto Scaling determines the available instance types based on factors such as I/O optimization and zone, and then creates an instance of the instance type that has the lowest price.
   * 
   * > This configuration is effective only when the cost optimization policy is enabled for the scaling group and no instance types are specified in the scaling configuration.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The performance mode of the burstable instance. Valid values:
   * 
   * - Standard: standard mode.
   * 
   * - Unlimited: unlimited mode.
   * 
   * For more information, see the Performance modes section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The custom priority for the combination of an ECS instance type and a vSwitch.
   * >Notice: This is effective only when the scaling policy of the scaling group is set to the priority policy.
   * 
   * If an instance cannot be created from a combination of an instance type and a vSwitch with a higher priority, Auto Scaling automatically tries the next combination in the list.
   * 
   * > If you specify custom priorities for only some combinations of instance types and vSwitches, the unspecified combinations have a lower priority than the specified ones. The unspecified combinations are still prioritized based on the order of vSwitches in the scaling group and the order of instance types in the scaling configuration.
   * >
   * > - For example, if the vSwitch order in the scaling group is vsw1, vsw2, the instance type order in the scaling configuration is type1, type2, and the custom priority order is ["vsw2+type2", "vsw1+type2"], the final priority will be: "vsw2+type2" > "vsw1+type2" > "vsw1+type1" > "vsw2+type1".
   */
  customPriorities?: CreateScalingConfigurationRequestCustomPriorities[];
  /**
   * @remarks
   * A collection of data disk information.
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
   * Specifies whether to create the ECS instance on a dedicated host. If you specify the DedicatedHostId parameter, the SpotStrategy and SpotPriceLimit settings in the request are automatically ignored. This is because dedicated hosts do not support creating preemptible instances.
   * 
   * You can call the DescribeDedicatedHosts operation to query the list of dedicated host IDs.
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The release protection attribute of the instance. This specifies whether you can release the instance through the ECS console or by calling the DeleteInstance API. This prevents accidental release of the instance. Valid values:
   * 
   * - true: enables release protection. You cannot release the instance through the ECS console or by calling the DeleteInstance API.
   * 
   * - false: disables release protection. You can release the instance through the ECS console or by calling the DeleteInstance API.
   * 
   * Default value: false.
   * 
   * > This attribute applies only to pay-as-you-go instances to prevent accidental release of instances scaled out by Auto Scaling. It does not affect normal scale-in activities. Instances with release protection enabled can be released during scale-in activities.
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
   * ds-bp1frxuzdg87zh4pz****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The hostname of the ECS instance. A period (.) or a hyphen (-) cannot be used as the first or last character of a hostname. Consecutive periods (.) or hyphens (-) are not allowed. The naming conventions for different instance types are as follows:
   * 
   * - For Windows instances, the hostname must be 2 to 15 characters in length and can contain letters, digits, and hyphens (-). It cannot contain periods (.) or be all digits.
   * 
   * - For other instance types, such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate the hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
   * 
   * @example
   * host****
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the High Performance Computing (HPC) cluster to which the ECS instance belongs.
   * 
   * @example
   * hpc-clusterid
   */
  hpcClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the access channel for instance metadata. Valid values:
   * 
   * - enabled: enables the channel.
   * 
   * - disabled: disables the channel.
   * 
   * Default value: enabled.
   * 
   * > For information about instance metadata, see [Overview of instance metadata](https://help.aliyun.com/document_detail/108460.html).
   * 
   * @example
   * enabled
   */
  httpEndpoint?: string;
  /**
   * @remarks
   * Specifies whether to enforce the security-hardened mode (IMDSv2) when accessing instance metadata. Valid values:
   * 
   * - optional: does not enforce the mode.
   * 
   * - required: enforces the mode. If you set this value, you cannot access instance metadata in normal mode.
   * 
   * Default value: optional.
   * 
   * > For information about instance metadata access modes, see [Instance metadata access modes](https://help.aliyun.com/document_detail/108460.html).
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The name of the image family. You can set this parameter to obtain the latest available image from the specified image family to create the instance. If you have specified the `ImageId` parameter, you cannot set this parameter.
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image file to use for creating instances.
   * 
   * @example
   * centos6u5_64_20G_aliaegis****.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image file. Image names must be unique within a region. If you specify ImageId, ImageName is ignored.
   * 
   * You cannot use ImageName to specify a Marketplace image.
   * 
   * @example
   * image****
   */
  imageName?: string;
  /**
   * @remarks
   * The description of the ECS instance. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * Test instance.
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The name of the ECS instances that are created using the scaling configuration.
   * 
   * @example
   * instance****
   */
  instanceName?: string;
  /**
   * @remarks
   * A collection of intelligent configuration information used to filter instance types that meet the requirements.
   */
  instancePatternInfos?: CreateScalingConfigurationRequestInstancePatternInfos[];
  /**
   * @remarks
   * The instance type of the ECS instance. For more information, see Instance families.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * After you enable the candidate mode, if issues such as insufficient inventory occur, the system supplements the currently selected instance types with similar-sized alternatives or creates vSwitches in candidate zones and adds them to the scaling group.
   */
  instanceTypeCandidateOptions?: CreateScalingConfigurationRequestInstanceTypeCandidateOptions;
  /**
   * @remarks
   * Information about the specified instance types.
   */
  instanceTypeOverrides?: CreateScalingConfigurationRequestInstanceTypeOverrides[];
  /**
   * @remarks
   * Multiple instance types. If you use InstanceTypes, InstanceType is ignored.
   * 
   * If an instance cannot be created from an instance type with a higher priority, Auto Scaling automatically tries the next instance type in the list.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method for network usage. Valid values:
   * 
   * - PayByBandwidth: pay-by-bandwidth. InternetMaxBandwidthOut specifies the fixed bandwidth.
   * 
   * - PayByTraffic: pay-by-data-transfer. InternetMaxBandwidthOut specifies the maximum bandwidth. You are charged for the actual data transfer.
   * 
   * If you do not specify this parameter, the default value is PayByBandwidth for classic network and PayByTraffic for VPC.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s. Valid values:
   * 
   * - If the purchased outbound public bandwidth is less than or equal to 10 Mbit/s: 1 to 10. Default value: 10.
   * 
   * - If the purchased outbound public bandwidth is greater than 10 Mbit/s: 1 to the value of `InternetMaxBandwidthOut`. Default value: the value of `InternetMaxBandwidthOut`.
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
   * none: The instance is not I/O optimized.
   * optimized: The instance is I/O optimized.
   * 
   * For retired instance types, the default value is none. For other instance types, the default value is optimized.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The number of randomly generated IPv6 addresses to assign to the ENI.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The name of the key pair to use to log on to the ECS instance.
   * 
   * - For Windows instances, this parameter is ignored. The default value is empty.
   * 
   * - For Linux instances, password-based logon is disabled.
   * 
   * @example
   * KeyPairTest
   */
  keyPairName?: string;
  /**
   * @remarks
   * The weight of the ECS instance as a backend server of the load balancer. Valid values: 1 to 100.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  loadBalancerWeight?: number;
  /**
   * @remarks
   * The memory size. Unit: GiB.
   * 
   * You can specify both Cpu and Memory to define a range of instance types. For example, if you set Cpu to 2 and Memory to 16, all instance types with 2 vCPUs and 16 GiB of memory are selected. Auto Scaling determines the available instance types based on factors such as I/O optimization and zone, and then creates an instance of the instance type that has the lowest price.
   * 
   * > This configuration is effective only when the cost optimization policy is enabled for the scaling group and no instance types are specified in the scaling configuration.
   * 
   * @example
   * 16
   */
  memory?: number;
  /**
   * @remarks
   * The list of ENIs.
   */
  networkInterfaces?: CreateScalingConfigurationRequestNetworkInterfaces[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the ECS instance. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters can be:
   * 
   * \\`()` ~!@#$%^&*-_+=\\|{}[]:;\\"<>,.?/`
   * 
   * For Windows instances, the password cannot start with a forward slash (/).
   * 
   * > If you specify the Password parameter, we recommend that you send the request over HTTPS to prevent password leaks.
   * 
   * @example
   * 123abc****
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the password preset in the image. If you use this parameter, make sure that a password is preset in the image. Valid values:
   * 
   * - true: uses the preset password.
   * 
   * - false: does not use the preset password.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The name of the RAM role for the ECS instance. The name is provided and maintained by RAM. You can call the ListRoles operation to query the available RAM roles.
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
   * rg-resource****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The resource pool policy to use when creating an instance. Note the following when you set this parameter:
   * 
   * - This parameter takes effect only when creating pay-as-you-go instances.
   * 
   * - You cannot set this parameter at the same time as PrivatePoolOptions.MatchCriteria and PrivatePoolOptions.Id.
   */
  resourcePoolOptions?: CreateScalingConfigurationRequestResourcePoolOptions;
  /**
   * @remarks
   * The name of the scaling configuration. The name must be 2 to 64 characters in length, and can contain digits, underscores (_), hyphens (-), and periods (.). It must start with a digit, a letter, or a Chinese character.
   * 
   * The name of a scaling configuration must be unique within a scaling group in a region. If you do not specify this parameter, the ID of the scaling configuration is used.
   * 
   * @example
   * scalingconfig****
   */
  scalingConfigurationName?: string;
  /**
   * @remarks
   * The ID of the scaling group to which the scaling configuration belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp14wlu85wrpchm0****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The scheduling options.
   * 
   * @example
   * ["testManagedPrivateSpaceId****"]
   */
  schedulerOptions?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether to enable security hardening. Valid values:
   * 
   * - Active: enables security hardening. This setting is valid only for public images.
   * 
   * - Deactive: disables security hardening. This setting is valid for all image types.
   * 
   * @example
   * Active
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group to which the ECS instance belongs. ECS instances in the same security group can communicate with each other.
   * 
   * @example
   * sg-280ih****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Adds the ECS instance to multiple security groups. For more information, see the Security groups section in [Limits](https://help.aliyun.com/document_detail/25412.html).
   * 
   * > You cannot specify both SecurityGroupId and SecurityGroupIds.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The security options.
   */
  securityOptions?: CreateScalingConfigurationRequestSecurityOptions;
  /**
   * @remarks
   * The protection period of the preemptible instance. Unit: hours. Valid values:
   * 
   * - 1: The instance is retained for 1 hour after it is created. After 1 hour, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
   * 
   * - 0: The instance is not guaranteed to be retained for 1 hour after it is created. The system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
   * 
   * > Alibaba Cloud sends a notification to you through an ECS system event 5 minutes before the instance is released. Preemptible instances are billed by the second. We recommend that you select a protection period based on the time required for your task to complete.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The interruption mode of the preemptible instance. Currently, only terminate is supported, which releases the instance by default.
   * 
   * @example
   * Terminate
   */
  spotInterruptionBehavior?: string;
  /**
   * @remarks
   * A collection of billing information for preemptible instances.
   */
  spotPriceLimits?: CreateScalingConfigurationRequestSpotPriceLimits[];
  /**
   * @remarks
   * The preemption policy for pay-as-you-go instances. Valid values:
   * 
   * - NoSpot: The instance is a regular pay-as-you-go instance.
   * 
   * - SpotWithPriceLimit: The instance is a preemptible instance with a user-defined maximum hourly price.
   * 
   * - SpotAsPriceGo: The instance is a preemptible instance for which the price is automatically bid based on the current market price.
   * 
   * Default value: NoSpot.
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
   * The maximum number of partitions in the storage set. The value must be greater than or equal to 2.
   * 
   * @example
   * 2
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * Multiple disk categories for the system disk. When a disk of a higher-priority category is unavailable, Auto Scaling automatically tries the next lower-priority category to create the system disk. Valid values:
   * 
   * - cloud: basic disk.
   * 
   * - cloud_efficiency: ultra disk.
   * 
   * - cloud_ssd: standard SSD.
   * 
   * - cloud_essd: ESSD.
   * 
   * > If you specify this parameter, you cannot specify `SystemDisk.Category`.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The tags of the ECS instance. You can specify up to 20 tags in key-value pairs. The following limits apply to keys and values:
   * 
   * - A key can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain `http://` or `https://`. If you use tags, the key cannot be an empty string.
   * 
   * - A value can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain `http://` or `https://`. The value can be an empty string.
   * 
   * @example
   * {"key1":"value1","key2":"value2", ... "key5":"value5"}
   */
  tags?: string;
  /**
   * @remarks
   * Specifies whether to create the instance on a dedicated host. Valid values:
   * 
   * - default: creates the instance on a non-dedicated host.
   * 
   * - host: creates the instance on a dedicated host. If you do not specify DedicatedHostId, Alibaba Cloud automatically selects a dedicated host for the instance.
   * 
   * Default value: default.
   * 
   * @example
   * default
   */
  tenancy?: string;
  /**
   * @remarks
   * The custom data of the ECS instance. The data must be Base64 encoded. The raw data can be up to 32 KB in size.
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
      instanceTypeCandidateOptions: CreateScalingConfigurationRequestInstanceTypeCandidateOptions,
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

