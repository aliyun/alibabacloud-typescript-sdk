// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScalingConfigurationShrinkRequestImageOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to log on to the ECS instance as the ecs-user user. For more information, see [Manage the logon username of an ECS instance](https://help.aliyun.com/document_detail/388447.html). Valid values:
   * 
   * - true: yes.
   * 
   * - false: no.
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

export class CreateScalingConfigurationShrinkRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the private pool. It is the ID of the elasticity assurance or capacity reservation.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The private pool options for instance startup. After an elasticity assurance or a capacity reservation takes effect, a private pool is generated for you to select when you start instances. Valid values:
   * 
   * - Open: open mode. The system automatically matches an open private pool. If no matching private pool is available, the system uses resources from the public pool. In this mode, you do not need to specify the PrivatePoolOptions.Id parameter.
   * 
   * - Target: specified mode. The system uses the specified private pool to start the instance. If the specified private pool is unavailable, the instance fails to start. In this mode, you must specify the private pool ID by using the PrivatePoolOptions.Id parameter.
   * 
   * - None: no private pool. The system does not use private pools to start the instance.
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

export class CreateScalingConfigurationShrinkRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy applied to the system cloud disk.
   * 
   * @example
   * sp-bp12m37ccmxvbmi5****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the burst (performance burst) feature for the system cloud disk. Valid values:
   * 
   * - true: enables the feature.
   * - false: disables the feature.
   * > This parameter is supported only when `SystemDisk.Category` is set to `cloud_auto`.
   * 
   * <props="china">For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of the system cloud disk. Valid values:
   * 
   * - cloud: basic cloud disk.
   * 
   * - cloud_efficiency: ultra cloud disk.
   * 
   * - cloud_ssd: standard SSD cloud disk.
   * 
   * - ephemeral_ssd: local SSD.
   * 
   * - cloud_essd: ESSD.
   * 
   * - cloud_auto: ESSD AutoPL.
   * 
   * You cannot specify this parameter together with `SystemDiskCategories`. If neither this parameter nor `SystemDiskCategories` is specified, the default value is used:
   * 
   * - For I/O optimized instances, the default value is cloud_efficiency.
   * - For non-I/O optimized instances, the default value is cloud.
   * 
   * This parameter specifies only one system cloud disk type. If you want the system to automatically try other types when the preferred disk type is unavailable, use `SystemDiskCategories` and configure multiple disk types in order of priority.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The description of the system cloud disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * Test system disk.
   */
  description?: string;
  /**
   * @remarks
   * The name of the system cloud disk. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * @example
   * cloud_ssdSystem
   */
  diskName?: string;
  /**
   * @remarks
   * The encryption algorithm used for the system cloud disk. Valid values:
   * 
   * - AES-256.
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
   * Specifies whether to encrypt the system cloud disk. Valid values:
   * 
   * - true: encrypts the system cloud disk.
   * - false: does not encrypt the system cloud disk.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the KMS key used for the system cloud disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The settings of the performance level for the system cloud disk when it is an ESSD. Valid values:
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
   * The provisioned IOPS (Input/Output Operations Per Second) performance metrics for the system cloud disk.
   * 
   * > IOPS refers to the number of I/O operations that can be processed per second. It indicates the read and write processing capability of block storage. Unit: operations per second.
   * 
   * @example
   * 100
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GiB. Valid values:
   * 
   * - Basic cloud disk: 20 to 500.
   * - ESSD:
   *   - PL0: 1 to 2048.
   *   - PL1: 20 to 2048.
   *   - PL2: 461 to 2048.
   *   - PL3: 1261 to 2048.
   * - ESSD AutoPL: 1 to 2048.
   * - Other cloud disk types: 20 to 2048.
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

export class CreateScalingConfigurationShrinkRequestCustomPriorities extends $dara.Model {
  /**
   * @remarks
   * The instance type of the ECS instance.
   * 
   * >Notice: The instance type must be included in the instance type list of the scaling configuration.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * >Notice: The vSwitch must be included in the vSwitch list of the scaling group.
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

export class CreateScalingConfigurationShrinkRequestDataDisks extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy applied to the data cloud disk.
   * 
   * @example
   * sp-bp19nq9enxqkomib****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the burstable performance feature for the data cloud disk. Valid values:
   * 
   * - true: enables the feature.
   * - false: disables the feature. 
   * > You can set this parameter only when `SystemDisk.Category` is set to `cloud_auto`.
   * 
   * <props="china">For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The multiple disk types of the data cloud disk. If the disk type with a higher priority is unavailable, Auto Scaling automatically tries the disk type with the next highest priority to create the data cloud disk. Valid values:
   * - cloud: basic cloud disk. The DeleteWithInstance property of a basic cloud disk created together with the instance is set to true.
   * - cloud_efficiency: ultra cloud disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: ESSD.
   * - ephemeral_ssd: local SSD.
   * - cloud_auto: ESSD AutoPL.
   * - cloud_regional_disk_auto: regional ESSD.
   * 
   * > If you specify this parameter, you cannot specify `DataDisks.Category` at the same time.
   */
  categories?: string[];
  /**
   * @remarks
   * The category of the data cloud disk. Valid values:
   * 
   * - cloud: basic cloud disk. The DeleteWithInstance attribute of a basic cloud disk created together with the instance is set to true.
   * - cloud_efficiency: ultra cloud disk.
   * - cloud_ssd: standard SSD cloud disk.
   * - cloud_essd: ESSD.
   * - ephemeral_ssd: local SSD.
   * - cloud_auto: ESSD AutoPL.
   * - cloud_regional_disk_auto: regional ESSD.
   * 
   * You cannot specify this parameter together with DataDisk.Categories. If neither this parameter nor DataDisk.Categories is specified, the default value is used:
   * - For I/O optimized instances, the default value is cloud_efficiency.
   * - For non-I/O optimized instances, the default value is cloud.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release the data cloud disk when the instance is released. Valid values:
   * 
   * - true: releases the data cloud disk when the instance is released.
   * - false: retains the data cloud disk when the instance is released.
   * 
   * You can set this parameter only for independent cloud disks (when DataDisks.Category is set to cloud, cloud_efficiency, cloud_ssd, or cloud_essd). Otherwise, an error is returned.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the data cloud disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * Test data disk.
   */
  description?: string;
  /**
   * @remarks
   * The mount point of the data cloud disk. If you do not specify this parameter, the system automatically allocates a mount point by default during automatic creation of the ECS instance. The mount point starts from /dev/xvdb and ends at /dev/xvdz.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The name of the data cloud disk. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * @example
   * cloud_ssdData
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the data cloud disk. Valid values:
   * 
   * - true: encrypts the data cloud disk.
   * - false: does not encrypt the data cloud disk.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key used by the data cloud disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The settings of the performance level for the data cloud disk when it is an ESSD. Valid values:
   * 
   * - PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * - PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * - PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * > For more information about how to select the performance level of an ESSD, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned IOPS (Input/Output Operations Per Second) performance metrics of the data cloud disk.
   * 
   * > IOPS indicates the number of I/O operations that can be processed per second. It measures the read and write capabilities of block storage. Unit: operations per second.
   * 
   * @example
   * 100
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of the data cloud disk. Unit: GiB. Valid values:
   * 
   * - cloud: 5 to 2000.
   * - cloud_efficiency: 20 to 32768.
   * - cloud_essd: 20 to 32768.
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
   * The snapshot used to create the data cloud disk. If this parameter is specified, DataDisks.Size is ignored, and the actual size of the created disk is the size of the specified snapshot.
   * 
   * If the snapshot was created on or before July 15, 2013, the call is rejected and the InvalidSnapshot.TooOld error code is returned.
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

export class CreateScalingConfigurationShrinkRequestInstancePatternInfos extends $dara.Model {
  /**
   * @remarks
   * The architecture type of the instance type. Valid values:
   * 
   * - X86: x86 computing.
   * - Heterogeneous: heterogeneous computing, such as GPU or FPGA.
   * - BareMental: ECS bare metal server.
   * - Arm: Arm computing.
   * 
   * Default value: all architecture types.
   */
  architectures?: string[];
  /**
   * @remarks
   * Specifies whether the instance type is a burstable instance type. Valid values:
   * 
   * - Exclude: does not include burstable instance types.
   * - Include: includes burstable instance types.
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
   * The number of vCPUs of the instance type in intelligent configuration mode. This parameter is used to filter instance types that meet your requirements. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * Take note of the following items:
   * 
   * - The InstancePatternInfos parameter is applicable only when the network type of the scaling group is VPC.
   * 
   * - You must configure both InstancePatternInfos.Cores and InstancePatternInfos.Memory when you use the InstancePatternInfos parameter.
   * 
   * - If you have already specified instance types by using the InstanceType or InstanceTypes parameter, Auto Scaling preferentially uses the specified instance types for scale-out. If the specified instance types are out of stock, Auto Scaling preferentially uses the instance type that has the lowest price among the instance types that meet the requirements specified by the InstancePatternInfos parameter.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The CPU architecture of the instance. Valid values:
   * 
   * >N indicates that you can specify multiple CPU architectures. Valid values of N: 1 to 2.
   * 
   * - X86.
   * - ARM.
   */
  cpuArchitectures?: string[];
  /**
   * @remarks
   * The instance types to be excluded. You can use a wildcard (*) to exclude a single instance type or an entire instance family. Examples:
   * 
   * - ecs.c6.large: excludes the ecs.c6.large instance type.
   * - ecs.c6.*: excludes all instance types in the c6 instance family.
   */
  excludedInstanceTypes?: string[];
  /**
   * @remarks
   * The GPU type.
   */
  gpuSpecs?: string[];
  /**
   * @remarks
   * The instance categorization. Valid values:
   * 
   * >N indicates the Settings for multiple instance categories. Valid values of N: 1 to 10.
   * 
   * - General-purpose: general-purpose.
   * - Compute-optimized: compute-optimized.
   * - Memory-optimized: memory-optimized.
   * - Big data: big data.
   * - Local SSDs: local SSD.
   * - High Clock Speed: high frequency.
   * - Enhanced: enhanced.
   * - Shared: shared.
   * - Compute-optimized with GPU: GPU computing.
   * - Visual Compute-optimized: visual compute-optimized.
   * - Heterogeneous Service: heterogeneous service.
   * - Compute-optimized with FPGA: FPGA-accelerated compute-optimized.
   * - Compute-optimized with NPU: NPU-accelerated compute-optimized.
   * - ECS Bare Metal: ECS Bare Metal Instance.
   * - High Performance Compute: high-performance computing (HPC).
   */
  instanceCategories?: string[];
  /**
   * @remarks
   * The level of the instance family. This parameter is used to filter instance types that meet your requirements and takes effect when `CostOptimization` is enabled. Valid values:
   * 
   * - EntryLevel: shared instance types. These instance types are more cost-effective but cannot ensure consistent computing performance. They are suitable for scenarios where the CPU utilization is typically low. For more information, see [Shared instance families](https://help.aliyun.com/document_detail/108489.html).
   * - EnterpriseLevel: enterprise-level instance types. These instance types provide consistent performance and dedicated resources. They are suitable for scenarios that require high stability. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * - CreditEntryLevel: credit-based entry-level instance types, which are burstable instances. These instance types use CPU credits to ensure computing performance and are suitable for scenarios where the CPU utilization is typically low but occasionally bursts. For more information, see [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The instance families to be queried. N indicates that you can specify multiple instance families. Valid values of N: 1 to 10.
   */
  instanceTypeFamilies?: string[];
  /**
   * @remarks
   * The maximum acceptable hourly price for pay-as-you-go or spot instances in intelligent configuration mode. This parameter is used to filter instance types that meet your requirements.
   * 
   * > This parameter is required when SpotStrategy is set to SpotWithPriceLimit. In other cases, this parameter is optional.
   * 
   * @example
   * 2
   */
  maxPrice?: number;
  /**
   * @remarks
   * The maximum number of vCPUs of the instance type.
   * 
   * > The value of MaximumCpuCoreCount cannot exceed four times the value of MinimumCpuCoreCount.
   * 
   * @example
   * 4
   */
  maximumCpuCoreCount?: number;
  /**
   * @remarks
   * The maximum number of GPUs for the instance. Valid values: positive integers.
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
   * The memory size of the instance type in intelligent configuration mode. Unit: GiB. This parameter is used to filter instance types that meet your requirements.
   * 
   * @example
   * 4
   */
  memory?: number;
  /**
   * @remarks
   * The minimum baseline vCPU computing performance (the sum of all vCPUs) for t5 and t6 burstable instances.
   * 
   * @example
   * 12
   */
  minimumBaselineCredit?: number;
  /**
   * @remarks
   * The minimum number of vCPUs of the instance type.
   * 
   * @example
   * 2
   */
  minimumCpuCoreCount?: number;
  /**
   * @remarks
   * The minimum upper limit on the number of IPv6 addresses per elastic network interfaces (ENIs) or network interface controller (NIC) for the instance.
   * 
   * @example
   * 1
   */
  minimumEniIpv6AddressQuantity?: number;
  /**
   * @remarks
   * The minimum upper limit on the number of IPv4 addresses per elastic network interfaces (ENIs) or network interface controller (NIC) for the instance.
   * 
   * @example
   * 2
   */
  minimumEniPrivateIpAddressQuantity?: number;
  /**
   * @remarks
   * The minimum upper limit on the number of network interface controller (NIC) devices that can be mounted to the instance.
   * 
   * @example
   * 2
   */
  minimumEniQuantity?: number;
  /**
   * @remarks
   * The minimum number of GPUs for the instance. Valid values: positive integers.
   * 
   * @example
   * 2
   */
  minimumGpuAmount?: number;
  /**
   * @remarks
   * The minimum initial vCPU credit value for t5 and t6 burstable instances.
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
   * The physical processor model of the instance. N indicates that you can specify multiple processor models. Valid values of N: 1 to 10.
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

export class CreateScalingConfigurationShrinkRequestInstanceTypeCandidateOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies the CIDR blocks of the optional vSwitches when you add vSwitches in other zones.
   */
  allowCidrBlocks?: string[];
  /**
   * @remarks
   * Specifies whether to allow supplementing vSwitches in other zones.
   * > The instance types remain unchanged, and only new zones are used as candidates. If the scaling group cannot scale out in all selected zones due to issues such as insufficient stock, the system automatically adds vSwitches in new zones to the scaling group based on this configuration.
   * > For example, if the scaling group is configured with the cn-hangzhou-h and cn-hangzhou-g zones, and scale-out fails in both zones, Auto Scaling may create a vSwitch in the cn-hangzhou-k zone and add it to the scaling group based on real-time stock availability.
   * 
   * @example
   * true
   */
  allowCrossAz?: boolean;
  /**
   * @remarks
   * Specifies whether to allow supplementing instance types of other generations.
   * 
   * - For example, if the current instance type is ecs.c7.large, instance types such as ecs.c6.large and ecs.c8.large can be used as candidates after this feature is enabled.
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

export class CreateScalingConfigurationShrinkRequestInstanceTypeOverrides extends $dara.Model {
  /**
   * @remarks
   * When you need the scaling group to scale based on the capacity of the instance type, specify both this parameter and WeightedCapacity.
   * 
   * This parameter specifies the instance type and overrides the instance type in the launch template. You can specify N instance types to extend the launch template to support N instance types. Valid values of N: 1 to 20.
   * 
   * > This parameter takes effect only when LaunchTemplateId is specified.
   * 
   * Valid values of InstanceType: available ECS instance types.
   * 
   * @example
   * ecs.c5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * When you need to specify the capacity of the instance type in the scaling configuration, specify this parameter after you specify InstanceTypeOverrides.InstanceType.
   * 
   * This parameter specifies the weight of the instance type, which indicates the capacity that a single instance of the instance type provides in the scaling group. A greater weight indicates that fewer instances of this instance type are required to meet the expected capacity.
   * 
   * Because instance types have different performance metrics such as the number of vCPUs and memory size, you can configure different weights for different instance types based on your business requirements.
   * 
   * Example:
   * 
   * - Current capacity: 0.
   * - Expected capacity: 6.
   * - Capacity of the ecs.c5.xlarge instance type: 4.
   * 
   * To meet the expected capacity, the scaling group scales out by adding two ecs.c5.xlarge instances.
   * 
   * > During scale-out, the capacity of the scaling group cannot exceed the sum of the maximum capacity (MaxSize) and the maximum weight of the instance type.
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

export class CreateScalingConfigurationShrinkRequestNetworkInterfaces extends $dara.Model {
  /**
   * @remarks
   * The elastic network interfaces (ENIs) type. When you use this parameter, you must use the NetworkInterfaces Settings for the primary network interface controller (NIC), and you cannot set the SecurityGroupId or SecurityGroupIds parameter. Valid values:
   * 
   * - Primary: primary elastic network interface (ENI).
   * 
   * - Secondary: secondary elastic network interface (ENI).
   * 
   * Default value: Secondary.
   * 
   * @example
   * Primary
   */
  instanceType?: string;
  /**
   * @remarks
   * The number of randomly generated IPv6 addresses for the primary ENI.
   * Take note of the following items:
   * 
   * - This parameter takes effect only when NetworkInterface.InstanceType is set to Primary. If NetworkInterface.InstanceType is set to Secondary or left empty, you cannot configure this parameter.
   * 
   * - After you configure this parameter, you cannot configure Ipv6AddressCount.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The communication pattern of the network interface controller (NIC). Valid values of the parameter:
   * 
   * - Standard: uses the TCP communication pattern.
   * - HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the RDMA communication pattern.
   * 
   * Default value: Standard.
   * 
   * > The number of elastic network interfaces (ENIs) in RDMA pattern cannot exceed the limit of the instance family. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * HighPerformance
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The number of secondary private IPv4 addresses to be assigned to the ENI. Valid values: 1 to 49.
   * 
   * - The value cannot exceed the limit on the number of IP addresses for the instance type. For more information, see [Instance families](https://www.alibabacloud.com/help/en/ecs/user-guide/overview-of-instance-families).
   * 
   * - NetworkInterface.N.SecondaryPrivateIpAddressCount specifies the number of secondary private IPv4 addresses to be assigned to the ENI, excluding the primary private IP address of the ENI. The system randomly assigns these addresses from the available CIDR block of the vSwitch (NetworkInterface.N.VSwitchId) to which the ENI belongs.
   * 
   * @example
   * 6
   */
  secondaryPrivateIpAddressCount?: number;
  /**
   * @remarks
   * The IDs of one or more security groups to which the elastic network interfaces (ENIs) belong.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The ID of the vSwitch to which the elastic network interfaces (ENIs) belong. N indicates the Settings for multiple vSwitches. Valid values of N: 1 to 10.
   * 
   * Take note of the following items:
   * - If InstanceType is set to Primary, you cannot set this parameter. The default value is the vSwitch to which the instance belongs.
   * - If InstanceType is set to Secondary or left empty, this parameter is optional.
   * - The system selects a vSwitch that is in the same zone as the primary network interface controller (NIC) and has the most active IP addresses.
   */
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      ipv6AddressCount: 'Ipv6AddressCount',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      secondaryPrivateIpAddressCount: 'SecondaryPrivateIpAddressCount',
      securityGroupIds: 'SecurityGroupIds',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      ipv6AddressCount: 'number',
      networkInterfaceTrafficMode: 'string',
      secondaryPrivateIpAddressCount: 'number',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationShrinkRequestResourcePoolOptionsPrivatePoolTags extends $dara.Model {
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

export class CreateScalingConfigurationShrinkRequestResourcePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the private pool, which is the ID of the elasticity assurance or capacity reservation service. You can only specify the ID of a private pool in Target mode, and you cannot specify this parameter together with PrivatePoolTags.
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * Filters available Target private pools by tag. Valid values of N: 1 to 20.
   * Note:
   * - When you configure this parameter, the system filters private pools from the Target private pools associated with your account. The filtered private pools must match the tags and meet the scaling group constraints, such as zone and instance type.
   * - Tag matching rule: The private pool must match all specified tags.
   * - You cannot specify this parameter together with PrivatePoolIds.
   */
  privatePoolTags?: CreateScalingConfigurationShrinkRequestResourcePoolOptionsPrivatePoolTags[];
  /**
   * @remarks
   * Resource pools include private pools generated after the elasticity assurance or capacity reservation service takes effect, as well as public pools. They are available for selection when the instance starts. Valid values:
   * 
   * - PrivatePoolFirst: private pools take precedence. When you select this policy, if ResourcePoolOptions.PrivatePoolIds is specified or the PrivatePoolTags condition is met, the corresponding private pool is preferentially used. If no private pool is specified or the specified private pool has insufficient capacity, the system automatically matches an open private pool. If no eligible private pool is available, the public pool is used to create the instance.
   * 
   * - PrivatePoolOnly: only private pools are used. When you select this policy, you must specify ResourcePoolOptions.PrivatePoolIds. If the specified private pool has insufficient capacity, the instance fails to start.
   * 
   * - PublicPoolFirst: public pool resources take precedence. The public pool is preferentially used to create the instance. When public pool resources are insufficient, private pool resources are used as a supplement. The system preferentially and automatically matches an open private pool. If no eligible private pool is available, the specified ResourcePoolOptions.PrivatePoolIds or a Target private pool that meets the PrivatePoolTags condition is used. (This policy is in invitational preview and is not supported yet.)
   * 
   * - None: no resource pool policy is used.
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
      privatePoolTags: { 'type': 'array', 'itemType': CreateScalingConfigurationShrinkRequestResourcePoolOptionsPrivatePoolTags },
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

export class CreateScalingConfigurationShrinkRequestSecurityOptions extends $dara.Model {
  /**
   * @remarks
   * The confidential computing mode. Valid values:
   * -  Enclave: The ECS instance uses Enclave to build a confidential computing environment. For more information, see [Build a confidential computing environment by using Enclave](https://help.aliyun.com/document_detail/203433.html).
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

export class CreateScalingConfigurationShrinkRequestSpotPriceLimits extends $dara.Model {
  /**
   * @remarks
   * The instance type of the spot instance. This parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum hourly price for the spot instance. This parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
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

export class CreateScalingConfigurationShrinkRequest extends $dara.Model {
  imageOptions?: CreateScalingConfigurationShrinkRequestImageOptions;
  privatePoolOptions?: CreateScalingConfigurationShrinkRequestPrivatePoolOptions;
  systemDisk?: CreateScalingConfigurationShrinkRequestSystemDisk;
  /**
   * @remarks
   * Specifies whether to associate the instance on a dedicated host with the dedicated host. Valid values:
   * 
   * - default: The instance is not associated with the dedicated host. If an instance with the economical mode enabled is stopped and then started, and the resources of the original dedicated host are insufficient, the instance is automatically deployed to another dedicated host in the automatic deployment resource pool.
   * 
   * - host: The instance is associated with the dedicated host. If an instance with the economical mode enabled is stopped and then started, it remains on the original dedicated host. If the resources of the original dedicated host are insufficient, the instance fails to start.
   * 
   * Default value: default.
   * 
   * @example
   * default
   */
  affinity?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The number of vCPUs. Unit: cores.
   * 
   * You can specify both Cpu and Memory to define the range of instance types. For example, if you set Cpu to 2 and Memory to 16, all instance types with 2 vCPUs and 16 GiB of memory are matched. Auto Scaling determines the available instance types based on factors such as I/O optimization and zone, and creates instances with the lowest price.
   * > This configuration takes effect only when the scaling mode is set to cost optimization and no instance type is specified in the scaling configuration.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * Specifies the running pattern of the burstable instance. Valid values:
   * 
   * - Standard: standard pattern.
   * 
   * - Unlimited: unlimited pattern.
   * 
   * For more information, see the performance schema section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The custom priority of the ECS instance type and vSwitch combination.
   * >Notice: This parameter takes effect only when the scaling policy of the scaling group is set to the priority-based policy.
   * 
   * If an instance cannot be created based on the instance type and vSwitch combination with a higher priority, Auto Scaling automatically selects the combination with the next highest priority to create the instance.
   * 
   * > If you specify custom priorities for only some instance type and vSwitch combinations, the unspecified combinations have lower priorities than the specified ones. The priorities of the unspecified combinations are determined based on the vSwitch sequence in the scaling group and the instance type sequence in the scaling configuration.
   * > - Example: If the vSwitch sequence in the scaling group is vsw1 and vsw2, the instance type sequence in the scaling configuration is type1 and type2, and the custom priority sequence is ["vsw2+type2", "vsw1+type2"], the final priority sequence is: "vsw2+type2" > "vsw1+type2" > "vsw1+type1" > "vsw2+type1".
   */
  customPriorities?: CreateScalingConfigurationShrinkRequestCustomPriorities[];
  /**
   * @remarks
   * The collection of data cloud disk information.
   */
  dataDisks?: CreateScalingConfigurationShrinkRequestDataDisks[];
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
   * Specifies whether to create the ECS instance on a dedicated host. Because dedicated hosts do not support spot instances, the SpotStrategy and SpotPriceLimit parameters are automatically ignored if DedicatedHostId is specified.
   * 
   * You can call the DescribeDedicatedHosts operation to query the list of dedicated host IDs.
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The release protection property of the instance. This property specifies whether the instance can be directly released by using the ECS console or the DeleteInstance API operation, which prevents accidental deletion of the instance. Valid values:
   * 
   * - true: enables release protection for the instance. The instance cannot be directly released by using the ECS console or the DeleteInstance API operation.
   * 
   * - false: shutdown release protection for the instance. The instance can be directly released by using the ECS console or the DeleteInstance API operation.
   * 
   * Default value: false.
   * > This property applies only to pay-as-you-go instances to prevent instances created by Auto Scaling during scale-out from being accidentally deleted. It does not affect normal scale-in activities. Instances with release protection enabled can still be released during scale-in activities.
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
   * The hostname of the ECS instance. The hostname cannot start or end with a period (.) or a hyphen (-) and cannot contain consecutive periods (.) or hyphens (-). The naming requirements for different instance types are as follows:
   * 
   * - Windows instances: The hostname must be 2 to 15 characters in length and can contain letters, digits, and hyphens (-). It cannot contain periods (.) or contain only digits.
   * - Other instance types such as Linux instances: The hostname must be 2 to 64 characters in length and can contain multiple periods (.). The string between two periods is a segment, which can contain letters, digits, and hyphens (-).
   * 
   * @example
   * host****
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
   * - enabled: enables the access channel.
   * - disabled: disables the access channel.
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
   * Specifies whether to forcibly use the security-hardened mode (IMDSv2) to access instance metadata. Valid values:
   * 
   * - optional: does not forcibly use the security-hardened mode.
   * - required: forcibly uses the security-hardened mode. After you set this value, you cannot access instance metadata in normal mode.
   * 
   * Default value: optional.
   * 
   * > For more information about the modes for accessing instance metadata, see [Access modes of instance metadata](https://help.aliyun.com/document_detail/108460.html).
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The name of the image family. You can set this parameter to obtain the latest available image in the image family to create instances. If `ImageId` is specified, you cannot specify this parameter.
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image file. The image resource used during automatic creation of instances.
   * 
   * @example
   * centos6u5_64_20G_aliaegis****.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image file. The image name must be unique within a region. If ImageId is specified, ImageName is ignored.
   * 
   * 
   * You cannot use ImageName to specify an Alibaba Cloud Marketplace image.
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
   * The name of the ECS instance during automatic creation by using this scaling configuration.
   * 
   * @example
   * instance****
   */
  instanceName?: string;
  /**
   * @remarks
   * The collection of intelligent configuration information used to filter instance types that meet your requirements.
   */
  instancePatternInfos?: CreateScalingConfigurationShrinkRequestInstancePatternInfos[];
  /**
   * @remarks
   * The instance type of the ECS instance. For more information, see instance families.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * After you enable the candidate mode, if issues such as insufficient stock occur, the system supplements the currently selected instance types with similar instance types of the same size, or creates vSwitches in candidate zones and adds them to the scaling group.
   */
  instanceTypeCandidateOptions?: CreateScalingConfigurationShrinkRequestInstanceTypeCandidateOptions;
  /**
   * @remarks
   * The information used to specify instance types.
   */
  instanceTypeOverrides?: CreateScalingConfigurationShrinkRequestInstanceTypeOverrides[];
  /**
   * @remarks
   * The multiple instance types. If InstanceTypes is specified, InstanceType is ignored.
   * 
   * If an instance cannot be created based on the instance type with a higher priority, Auto Scaling automatically selects the instance type with the next highest priority to create the instance.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The network billing method. Valid values:
   * 
   * - PayByBandwidth: pay-by-bandwidth. In this case, InternetMaxBandwidthOut specifies the fixed bandwidth value.
   * 
   * - PayByTraffic: pay-by-traffic. In this case, InternetMaxBandwidthOut specifies only the maximum bandwidth, and you are billed based on the actual network traffic.
   * 
   * If this parameter is not specified, the default value is PayByBandwidth for the classic network and PayByTraffic for a VPC.
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
   * Specifies whether the instance is an I/O optimization instance. Valid values:
   * 
   * - none: The instance is not an I/O optimization instance.
   * - optimized: The instance is an I/O optimization instance.
   * 
   * The default value is none for retired instance types and optimized for other instance types.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The number of IPv6 addresses that are randomly generated for the network interface controller (NIC).
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The name of the key pair used to log on to the ECS instance. 
   *          
   * - For Windows instances, this parameter is ignored and left empty by default. 
   * - For Linux instances, password-based logon is disabled by default.
   * 
   * @example
   * KeyPairTest
   */
  keyPairName?: string;
  /**
   * @remarks
   * The weight of the ECS instance as a load balancing backend server. Valid values: 1 to 100.
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
   * You can specify both Cpu and Memory to define the range of instance types. For example, if you set Cpu to 2 and Memory to 16, all instance types with 2 vCPUs and 16 GiB of memory are matched. Auto Scaling determines the available instance types based on factors such as I/O optimization and zone, and creates instances with the lowest price.
   * 
   * > This configuration takes effect only when the scaling mode is set to cost optimization and no instance type is specified in the scaling configuration.
   * 
   * @example
   * 16
   */
  memory?: number;
  /**
   * @remarks
   * The list of network interface controller (NIC) devices.
   */
  networkInterfaces?: CreateScalingConfigurationShrinkRequestNetworkInterfaces[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the ECS instance. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include:
   * 
   * \\`()` ~!@#$%^&*-_+=\\|{}[]:;\\"<>,.?/`
   * 
   * For Windows instances, the password cannot start with a forward slash (/).
   * 
   * > If you specify the Password parameter, send requests over HTTPS to prevent password leaks.
   * 
   * @example
   * 123abc****
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the preset password of the image. When you use this parameter, make sure that a password is preset in the image. Valid values:
   * 
   * - true: uses the preset password of the image.
   * - false: does not use the preset password of the image.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role for the ECS instance. RAM roles are provided and maintained by RAM. You can call the ListRoles operation to query available RAM roles.
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
   * The resource pool policy used when creating the instance. Take note of the following items when you configure this parameter:
   * 
   * - This parameter takes effect only when you create pay-as-you-go instances.
   * 
   * - You cannot configure this parameter together with PrivatePoolOptions.MatchCriteria or PrivatePoolOptions.Id.
   */
  resourcePoolOptions?: CreateScalingConfigurationShrinkRequestResourcePoolOptions;
  /**
   * @remarks
   * The name of the scaling configuration. The name must be 2 to 64 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). It must start with a letter, digit, or Chinese character.
   * 
   * The name must be unique within a scaling group in a region. If you do not specify this parameter, the ID of the scaling configuration is used by default.
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
  schedulerOptionsShrink?: string;
  /**
   * @remarks
   * Specifies whether a vSwitch available for secondary elastic network interfaces (ENIs) must be selected from the list when the VSwitchIds parameter is specified for the secondary ENIs. Valid values:
   * - Strict: strict mode. If no vSwitch in the VSwitchIds list meets the requirements, instance creation fails.
   * - Tolerant: fault-tolerant mode. If no vSwitch in the VSwitchIds list meets the requirements, no secondary ENI is configured, and the instance is still created.
   * 
   * Default value: Strict.
   * 
   * @example
   * Strict
   */
  secondaryEniVSwitchConstraint?: string;
  /**
   * @remarks
   * Specifies whether to enable security hardening. Valid values:
   * 
   * - Active: enables security hardening. This value applies only to public images.
   * - Deactive: disables security hardening. This value applies to all image types.
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
   * sg-280ih****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Adds the ECS instance to multiple security groups at the same time. For more information, see the Security groups section in [Limits](https://help.aliyun.com/document_detail/25412.html).
   * 
   * > You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The security options.
   */
  securityOptions?: CreateScalingConfigurationShrinkRequestSecurityOptions;
  /**
   * @remarks
   * The protection period of the spot instance. Unit: hours. Valid values:
   * 
   * - 1: Alibaba Cloud guarantees that the instance runs for 1 hour after it is created and is not automatically released. After 1 hour, the system automatically compares your bid with the market price and checks resource inventory to determine whether to retain automatic release the instance.
   * - 0: Alibaba Cloud does not guarantee that the instance runs for 1 hour after it is created. The system automatically compares your bid with the market price and checks resource inventory to determine whether to retain automatic release the instance.
   * 
   * > Alibaba Cloud sends you a notification by using ECS system events 5 minutes before the instance is released. Spot instances are billed by the second. Select an appropriate protection period based on the execution duration of your tasks.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The break mode of the spot instance. Currently, only terminate (default) is supported, which releases the instance directly.
   * 
   * @example
   * Terminate
   */
  spotInterruptionBehavior?: string;
  /**
   * @remarks
   * The collection of billing information for spot instances.
   */
  spotPriceLimits?: CreateScalingConfigurationShrinkRequestSpotPriceLimits[];
  /**
   * @remarks
   * The preemption policy for the pay-as-you-go instance. Valid values:
   *          
   * - NoSpot: regular pay-as-you-go instance.
   * - SpotWithPriceLimit: spot instance with a maximum hourly price.
   * - SpotAsPriceGo: spot instance whose price is automatically set based on the current market price.
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
   * The maximum number of partitions in the storage set. Valid values: integers greater than or equal to 2.
   * 
   * @example
   * 2
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The disk types for the system cloud disk. If a disk type with a higher priority is unavailable, Auto Scaling automatically attempts to use the disk type with the next highest priority to create the system cloud disk. Valid values:
   * - cloud: basic cloud disk.
   * - cloud_efficiency: ultra cloud disk.
   * - cloud_ssd: standard SSD cloud disk.
   * - cloud_essd: ESSD cloud disk.
   * 
   * > You cannot specify both this parameter and `SystemDisk.Category` at the same time.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The tags of the ECS instance. Tags are passed in as key-value pairs. You can add up to 20 tags. The requirements for keys and values are as follows:
   *          
   * - A key can be up to 64 characters in length. It cannot start with aliyun or acs: and cannot contain `http://` or `https://`. A key cannot be an empty string.
   * - A value can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain `http://` or `https://`. A value can be an empty string.
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
   * The user data of the ECS instance. It must be encoded in Base64. The maximum size of the raw data before encoding is 32 KB.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
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
      schedulerOptionsShrink: 'SchedulerOptions',
      secondaryEniVSwitchConstraint: 'SecondaryEniVSwitchConstraint',
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
      imageOptions: CreateScalingConfigurationShrinkRequestImageOptions,
      privatePoolOptions: CreateScalingConfigurationShrinkRequestPrivatePoolOptions,
      systemDisk: CreateScalingConfigurationShrinkRequestSystemDisk,
      affinity: 'string',
      clientToken: 'string',
      cpu: 'number',
      creditSpecification: 'string',
      customPriorities: { 'type': 'array', 'itemType': CreateScalingConfigurationShrinkRequestCustomPriorities },
      dataDisks: { 'type': 'array', 'itemType': CreateScalingConfigurationShrinkRequestDataDisks },
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
      instancePatternInfos: { 'type': 'array', 'itemType': CreateScalingConfigurationShrinkRequestInstancePatternInfos },
      instanceType: 'string',
      instanceTypeCandidateOptions: CreateScalingConfigurationShrinkRequestInstanceTypeCandidateOptions,
      instanceTypeOverrides: { 'type': 'array', 'itemType': CreateScalingConfigurationShrinkRequestInstanceTypeOverrides },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      ipv6AddressCount: 'number',
      keyPairName: 'string',
      loadBalancerWeight: 'number',
      memory: 'number',
      networkInterfaces: { 'type': 'array', 'itemType': CreateScalingConfigurationShrinkRequestNetworkInterfaces },
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      passwordInherit: 'boolean',
      ramRoleName: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourcePoolOptions: CreateScalingConfigurationShrinkRequestResourcePoolOptions,
      scalingConfigurationName: 'string',
      scalingGroupId: 'string',
      schedulerOptionsShrink: 'string',
      secondaryEniVSwitchConstraint: 'string',
      securityEnhancementStrategy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      securityOptions: CreateScalingConfigurationShrinkRequestSecurityOptions,
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      spotPriceLimits: { 'type': 'array', 'itemType': CreateScalingConfigurationShrinkRequestSpotPriceLimits },
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

