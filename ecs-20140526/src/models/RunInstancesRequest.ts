// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunInstancesRequestCpuOptions extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * <props="china">Default value: For more information, see [Customize CPU options](https://help.aliyun.com/document_detail/145895.html).
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
   * - `CpuOptions.ThreadsPerCore=1` indicates that CPU hyper-threading is disabled.
   * 
   * - Only specific instance types support setting the number of threads per CPU core.
   * 
   * <props="china">For information about valid values and default values, see [Customize CPU options](https://help.aliyun.com/document_detail/145895.html).
   * 
   * @example
   * 2
   */
  threadsPerCore?: number;
  /**
   * @remarks
   * The CPU topology type of the instance. Valid values:
   * 
   * - ContinuousCoreToHTMapping: The hyper-threads (HTs) within the same core of the instance CPU topology are continuous.
   * - DiscreteCoreToHTMapping: The HTs within the same core of the instance are discrete.
   * 
   * Default value: null.
   * 
   * >Only specific instance families support this parameter. For information about supported instance families, see [View and modify the CPU topology structure](https://help.aliyun.com/document_detail/2636059.html).
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
   * >This parameter is in invitational preview and is not publicly available.
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
   * The private pool option for launching the instance. After an elasticity assurance or capacity reservation takes effect, a private pool is generated for the instance to select during launch. Valid values:
   * 
   * - Open: open mode. The system automatically matches available open private pool capacity. If no matching private pool capacity is available, public pool resources are used to launch the instance. In this mode, you do not need to set `PrivatePoolOptions.Id`.
   * - Target: specified mode. The instance is launched by using the capacity of the specified private pool. If the specified private pool capacity is unavailable, the instance fails to launch. In this mode, you must specify the private pool ID, that is, `PrivatePoolOptions.Id` is required.
   * - None: none mode. The instance does not use private pool capacity for launch.
   * 
   * Default value: None.
   * 
   * In any of the following scenarios, the private pool option can only be set to `None` or left empty:
   * - Creating a spot instance.
   * - Creating an ECS instance on a dedicated host.
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
   * Specifies the dedicated host cluster to which the ECS instance belongs. The system automatically selects a dedicated host in the cluster to deploy the ECS instance.
   * 
   * > This parameter takes effect only when `Tenancy` is set to `host`.
   * 
   * If you specify both a dedicated host (`DedicatedHostId`) and a dedicated host cluster (`SchedulerOptions.DedicatedHostClusterId`):
   * - If the dedicated host belongs to the dedicated host cluster, the ECS instance is preferentially deployed on the specified dedicated host.
   * - If the dedicated host does not belong to the dedicated host cluster, the ECS instance fails to be created.
   * 
   * <props="china">You can call the [DescribeDedicatedHostClusters](https://help.aliyun.com/document_detail/184145.html) operation to query the list of dedicated host cluster IDs.
   * 
   * <props="intl">You can call the [DescribeDedicatedHostClusters](https://help.aliyun.com/document_detail/184145.html) operation to query the list of dedicated host cluster IDs.
   * 
   * <props="partner">You can call the [DescribeDedicatedHostClusters](https://help.aliyun.com/document_detail/184145.html) operation to query the list of dedicated host cluster IDs.
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
   * The confidential computing mode. Set the value to Enclave.
   * 
   * When this parameter is set to Enclave, the ECS instance uses Enclave to build a confidential computing environment. Currently, only instance families c7, g7, and r7 support specifying this parameter when you call `RunInstances` to use Enclave confidential computing. Take note of the following items:
   * 
   * - The confidential computing feature is in invitational preview.
   * 
   * - When you create an ECS instance with Enclave confidential computing by calling an OpenAPI operation, you can only call `RunInstances`. `CreateInstance` does not support the `SecurityOptions.ConfidentialComputingMode` parameter.
   * 
   * - Enclave confidential computing relies on the trusted system (vTPM). When you specify that an ECS instance uses Enclave to build a confidential computing environment, the trusted system is also enabled for the instance. Therefore, when you call this operation, if you set `SecurityOptions.ConfidentialComputingMode=Enclave`, the created ECS instance has both Enclave confidential computing mode and the trusted system enabled, regardless of whether you set `SecurityOptions.TrustedSystemMode=vTPM`.
   * 
   * For more information about confidential computing, see [Build a confidential computing environment by using Enclave](https://help.aliyun.com/document_detail/203433.html).
   * 
   * @example
   * Enclave
   */
  confidentialComputingMode?: string;
  /**
   * @remarks
   * The trusted system mode. Set the value to vTPM.
   * 
   * The following instance families support the trusted system mode:
   * - g7, c7, and r7.
   * - Security-enhanced instance families (g7t, c7t, and r7t).
   * 
   * When you create instances of the preceding instance families, you must set this parameter. Take note of the following items:
   * 
   * - To use Alibaba Cloud Trusted System, set this parameter to vTPM. Then, Alibaba Cloud Trusted System performs trusted verification when the instance starts.
   * - If you do not want to use Alibaba Cloud Trusted System, you can leave this parameter empty. However, if the ECS instance that you create uses the Enclave confidential computing mode (`SecurityOptions.ConfidentialComputingMode=Enclave`), the trusted system is also enabled for the instance.
   * - When you create a trusted ECS instance by calling an OpenAPI operation, you can only call `RunInstances`. `CreateInstance` does not support the `SecurityOptions.TrustedSystemMode` parameter.
   * >If you specify the instance as a trusted instance during creation, you can only use images that support the trusted system when you replace the system disk.
   * 
   * For more information about the trusted system, see [Overview of the trusted feature for security-enhanced instance families](https://help.aliyun.com/document_detail/201394.html).
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
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: enterprise SSD (ESSD).
   * - cloud: basic disk.
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_essd_entry: ESSD Entry disk.
   * 
   * Default value description:
   * 
   * - If InstanceType is a retired instance type that is not I/O optimized, the default value is `cloud`.
   * - In other cases, the default value is `cloud_efficiency`.<props="china"> After January 30, 2026, for instance types that support only cloud_essd, the default value changes from cloud_efficiency to cloud_essd PL0. For more information, refer to [Change notice](https://www.aliyun.com/notice/117844).
   * 
   * >This parameter supports the value `cloud_essd_entry` only when `InstanceType` is set to the [u1, universal instance family](https://help.aliyun.com/document_detail/457079.html) (`ecs.u1`) or the [e, economy instance family](https://help.aliyun.com/document_detail/108489.html) (`ecs.e`).
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
   * The name of the system disk. The name must be 2 to 128 characters in length and can contain characters from the Unicode letter category (including English letters, Chinese characters, and digits). It can also contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * @example
   * cloud_ssdSystem
   */
  diskName?: string;
  /**
   * @remarks
   * The performance level of the enterprise SSD used as the system disk. This parameter takes effect only when you create an enterprise SSD as the system disk. Valid values:
   * 
   * - PL0: A single disk can deliver up to 10,000 random read/write IOPS.
   * - PL1 (default): A single disk can deliver up to 50,000 random read/write IOPS.
   * - PL2: A single disk can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For information about how to select an ESSD performance level, refer to [Enterprise SSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk, in GiB. Valid values:
   * 
   * - Basic disk: 20 to 500.
   * - Enterprise SSD:
   *   - PL0: 1 to 2048.
   *   - PL1: 20 to 2048.
   *   - PL2: 461 to 2048.
   *   - PL3: 1261 to 2048.
   * - ESSD AutoPL disk: 1 to 2048.
   * - Other disk types: 20 to 2048.
   * 
   * The value of this parameter must be greater than or equal to max{1, ImageSize}.
   * 
   * Default value: max{40, size of the image specified by the ImageId parameter}.
   * 
   * @example
   * 40
   */
  size?: string;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature. Valid values:
   * 
   * - true: enables the performance burst feature.
   * - false: does not enable the performance burst feature.
   * 
   * >This parameter is supported only when `SystemDisk.Category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * >This parameter is not publicly available.
   * 
   * @example
   * null
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the system disk. Valid values:
   * 
   * - true: encrypts the system disk.
   * 
   * - false: does not encrypt the system disk.
   * 
   * Default value: false.
   * 
   * >Hong Kong (China) Zone D and Singapore Zone A do not support system disk encryption during instance creation.
   * 
   * >Notice: When you use a shared encrypted image to create a disk based on an encrypted snapshot, you must specify the request parameter Encrypted=true to ensure that the created disk uses the key of the image recipient.
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The ID of the KMS key for the system disk.
   * 
   * > If Encrypted is set to true and KMSKeyId is not specified, the default key is used for encryption. The KMSKeyId value is returned after the instance is created.
   * > - - If the disk is created from a non-shared encrypted snapshot: The encryption key used by the snapshot is used by default.
   * > - - If the disk is created from a shared encrypted snapshot: The service key is used by default.
   * > - - If the disk is created in a region where account-level default encryption for block storage is enabled: The specified account-level key is used by default.
   * > - - In other cases: The service key is used by default.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50,000, 1000 × Capacity - Baseline performance}.
   * 
   * Baseline performance = min{1,800 + 50 × Capacity, 50,000}.
   * 
   * >This parameter is supported only when `SystemDisk.Category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster. If you want to use a disk in a dedicated block storage cluster as the system disk when you create an ECS instance, set this parameter.
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
   * >This parameter is not publicly available.
   * 
   * @example
   * null
   */
  assumeRoleFor?: number;
  /**
   * @remarks
   * >This parameter is not publicly available.
   * 
   * @example
   * null
   */
  roleType?: string;
  /**
   * @remarks
   * >This parameter is not publicly available.
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
   * - enabled: enables PTP.
   * 
   * - disabled: disables PTP.
   * 
   * Default value: disabled.
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
   * - true: enables the performance burst feature.
   * - false: does not enable the performance burst feature.
   * 
   * >This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of data disk N. Valid values:
   * 
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: enterprise SSD (ESSD).
   * - cloud: basic disk.
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_regional_disk_auto: regional ESSD.
   * - cloud_essd_entry: ESSD Entry disk.
   *   >The `cloud_essd_entry` value is supported only when `InstanceType` is set to an instance type in the `ecs.u1` or `ecs.e` instance family.
   * - elastic_ephemeral_disk_standard: elastic ephemeral disk - Standard Edition.
   * - elastic_ephemeral_disk_premium: elastic ephemeral disk - Premium Edition.
   * 
   * For I/O optimized instances, the default value is cloud_efficiency. For non-I/O optimized instances, the default value is cloud.
   * Default value description:
   * 
   * - If InstanceType is a retired instance type that is non-I/O optimized, the default value is `cloud`.
   * - In other cases, the default value is `cloud_efficiency`.<props="china">After January 30, 2026, if the I/O optimized instance type does not support cloud_auto, the default value is cloud_efficiency. Otherwise, the default value is cloud_auto, and performance burst is enabled by default (which incurs additional fees. For more information, see [Billing examples](~~368372#p_75k_2hp_7gp~~)). For more information, see [Change notice](https://www.aliyun.com/notice/117844).
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release the data disk when the instance is released. Valid values:
   * - true: releases the data disk when the instance is released.
   * - false: does not release the data disk when the instance is released.
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
   * DataDisk_Description
   */
  description?: string;
  /**
   * @remarks
   * The mount point of the data disk. The naming conventions for mount points vary based on the number of data disks attached:
   * 
   * - 1 to 25 data disks: /dev/xvd`[b-z]`
   * 
   * - More than 25 data disks: /dev/xvd`[aa-zz]`. For example, the 26th data disk is named /dev/xvdaa, the 27th data disk is named /dev/xvdab, and so on.
   * 
   * > - This parameter is applicable only to full image (system image) scenarios. You can set this parameter to the mount point of a data disk in the full image and modify the corresponding `DataDisk.N.Size` and `DataDisk.N.Category` parameters to change the disk type and size of the data disk in the full image.
   * > - When you use a full image to create an instance, the data disks in the full image are created as the first 1 to n data disks of the ECS instance.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The name of the data disk. The name must be 2 to 128 characters in length and can contain letters, digits, and characters that are supported by Unicode in the letter category. The name can contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * @example
   * cloud_ssdData
   */
  diskName?: string;
  /**
   * @remarks
   * >This parameter is not publicly available.
   * 
   * @example
   * null
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt data disk N. Valid values:
   * - true: encrypts the data disk.
   * - false: does not encrypt the data disk.
   * 
   * Default value: false.
   * 
   * 
   * >Notice: When you use a shared encrypted image to create a disk based on an encrypted snapshot, you must specify the request parameter Encrypted=true to ensure that the created disk uses the key of the image recipient.
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key for the data disk.
   * 
   * > If Encrypted is set to true and KMSKeyId is not specified, the default key is used for encryption. The KMSKeyId value is returned after the instance is created.
   * > - - If the disk is created from a non-shared encrypted snapshot: The encryption key used by the snapshot is used by default.
   * > - - If the disk is created from a shared encrypted snapshot: The service key is used by default.
   * > - - If the disk is created in a region where account-level default encryption for block storage is enabled: The specified account-level key is used by default.
   * > - - In other cases: The service key is used by default.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * Settings the performance level of the data disk when you create an enterprise SSD as a data disk. The value of N must be consistent with the N in `DataDisk.N.Category=cloud_essd`. Valid values:
   * 
   * - PL0: A single disk can deliver up to 10,000 random read/write IOPS.
   * - PL1 (default): A single disk can deliver up to 50,000 random read/write IOPS.
   * - PL2: A single disk can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For information about how to select an ESSD performance level, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50,000, 1000 × Capacity - Baseline performance}.
   * 
   * Baseline performance = min{1,800 + 50 × Capacity, 50,000}.
   * 
   * >This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of data disk N. Valid values of N: 1 to 16. Unit: GiB. Valid values:
   * 
   * - cloud_efficiency: 20 to 32768.
   * - cloud_ssd: 20 to 32768.
   * - cloud_essd: The valid value range depends on the value of `DataDisk.N.PerformanceLevel`. 
   *     - PL0: 1 to 65,536.
   *     - PL1: 20 to 65,536.
   *     - PL2: 461 to 65,536.
   *     - PL3: 1261 to 65,536.
   * - cloud: 5 to 2000.
   * - cloud_auto: 1 to 65,536.
   * - cloud_essd_entry: 10 to 32768.
   * 
   * >The value of this parameter must be greater than or equal to the size of the snapshot specified by `SnapshotId`.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot to use to create data disk N. Valid values of N: 1 to 16.
   * 
   * After you specify `DataDisk.N.SnapshotId`, `DataDisk.N.Size` is ignored and the disk is created with the size of the specified snapshot. Snapshots created on or before July 15, 2013 cannot be used. Requests that use such snapshots are rejected.
   * 
   * @example
   * s-bp17441ohwka0yuh****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster. If you want to use a disk in a dedicated block storage cluster as the data disk when you create an ECS instance, set this parameter.
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
   * - true: supported.
   * 
   * - false: not supported.
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
   * - true: does not retain the ENI.
   * 
   * - false: retains the ENI.
   * 
   * Default value: true.
   * 
   * >This parameter takes effect only for secondary ENIs.
   * 
   * @example
   * true
   */
  deleteOnRelease?: boolean;
  /**
   * @remarks
   * The description of the ENI.
   * 
   * Note the following items:
   * 
   * - The valid values of N do not exceed the number of network interface controllers (NICs) supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the number of network interface controllers (NICs) supported by the target instance type.
   * - The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you do not need to set this parameter.
   * 
   * @example
   * Network_Description
   */
  description?: string;
  /**
   * @remarks
   * The type of the ENI. The valid values of N do not exceed the number of network interface controllers (NICs) supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the number of network interface controllers (NICs) supported by the target instance type.
   * 
   * Valid values:
   * 
   * - Primary: primary ENI.
   * - Secondary: secondary ENI.
   * 
   * Default value: Secondary.
   * 
   * @example
   * Secondary
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies one or more IPv6 addresses for the primary ENI. You can specify up to 10 IPv6 addresses. Valid values of the second N: 1 to 10.
   * 
   * Example: `Ipv6Address.1=2001:db8:1234:1a00::***`
   * 
   * Note the following items:
   * 
   * - This parameter takes effect only when `NetworkInterface.N.InstanceType` is set to `Primary`. If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, you cannot set this parameter.
   * 
   * - After you set this parameter, the value of `Amount` can only be 1, and you cannot set `Ipv6AddressCount`, `Ipv6Address.N`, or `NetworkInterface.N.Ipv6AddressCount`.
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The number of randomly generated IPv6 addresses for the primary ENI. Valid values: 1 to 10.
   * 
   * Note the following items:
   * 
   * - This parameter takes effect only when `NetworkInterface.N.InstanceType` is set to `Primary`. If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, you cannot set this parameter.
   * 
   * - After you set this parameter, you cannot set `Ipv6AddressCount`, `Ipv6Address.N`, or `NetworkInterface.N.Ipv6Address.N`.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The index of the physical network card specified for the network interface controller (NIC).
   * 
   * Note the following items:
   * - Only specific instance types support specifying a physical network card index.
   * - If NetworkInterface.N.InstanceType is set to Primary, for instance types that support physical network cards, this parameter can only be set to 0.
   * - If NetworkInterface.N.InstanceType is set to Secondary or left empty, for instance types that support physical network cards, this parameter can be set based on the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * 0
   */
  networkCardIndex?: number;
  /**
   * @remarks
   * The ID of the ENI to attach to the instance.
   * 
   * After you set this parameter, the value of `Amount` can only be 1.
   * 
   * >This parameter takes effect only for secondary ENIs. After you specify an existing secondary ENI, you cannot configure other network interface controller (NIC) creation parameters.
   * 
   * @example
   * eni-bp1gn106np8jhxhj****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The name of the ENI. The name must be 2 to 128 characters in length and can contain letters, digits, and characters that are supported by Unicode in the letter categorization. The name can contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * Note the following items:
   * 
   * - The valid values of N do not exceed the number of network interface controllers (NICs) supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the number of network interface controllers (NICs) supported by the target instance type.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you do not need to set this parameter.
   * 
   * @example
   * Network_Name
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The communication mode of the network interface controller (NIC). Valid values:
   * 
   * - Standard: uses the TCP communication mode.
   * - HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the RDMA communication mode.
   * 
   * Default value: Standard.
   * 
   * >The number of Elastic Network Interfaces (ENIs) in RDMA mode cannot exceed the limit of the instance family. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * Standard
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * Adds an ENI and sets the primary IP address.
   * 
   * Note the following items:
   * 
   * - The valid values of N do not exceed the number of network interface controllers (NICs) supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the number of network interface controllers (NICs) supported by the target instance type.
   *     - When you set one ENI, you can set one primary ENI or one secondary ENI. If the value of `Amount` is greater than 1 and you set the primary ENI with this parameter specified, consecutive primary IP addresses starting from the specified IP address are allocated to multiple ECS instances during batch creation. In this case, you cannot attach secondary ENIs to the instances.
   *     - If the value of `Amount` is greater than 1 and this parameter is set for the primary ENI, you cannot set a secondary ENI (that is, you cannot set `NetworkInterface.2.InstanceType=Secondary`).
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, this parameter has the same effect as `PrivateIpAddress`, but you cannot specify the `PrivateIpAddress` parameter at the same time.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, this parameter specifies the primary IP address of the secondary ENI. By default, an IP address is randomly selected from the CIDR block of the vSwitch to which the ENI belongs.
   * 
   * >- The first and last three IP addresses of each vSwitch CIDR block are system reserved IP addresses and cannot be specified.
   * For example, if the CIDR block of the vSwitch is 192.168.1.0/24, the IP addresses 192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255 are system reserved IP addresses.
   * 
   * @example
   * ``172.16.**.**``
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * The number of queues for the ENI.
   * 
   * Note the following items:
   * 
   * - The valid values of N do not exceed the number of network interface controllers (NICs) supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the number of network interface controllers (NICs) supported by the target instance type.
   * 
   * - The value cannot exceed the maximum number of queues per ENI allowed by the instance type.
   * 
   * - The total number of queues for all ENIs on the instance cannot exceed the queue quota allowed by the instance type. You can call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query the `MaximumQueueNumberPerEni` and `TotalEniQueueQuantity` fields for the maximum number of queues per ENI and the total quota.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary` and this parameter is set, you cannot set the `NetworkInterfaceQueueNumber` parameter.
   * 
   * @example
   * 8
   */
  queueNumber?: number;
  /**
   * @remarks
   * The number of queues for the RDMA ENI.
   * 
   * If you want to attach multiple RDMA ENIs to the instance, we recommend that you manually specify QueuePairNumber for each ENI based on the upper limit of QueuePairNumber supported by the instance type and the number of ENIs you plan to use. Make sure that the total QueuePairNumber of all ENIs does not exceed the maximum value allowed by the instance type. Call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the upper limit of the instance type.
   * 
   * >Notice: If QueuePairNumber is not specified for an RDMA ENI, the upper limit of QueuePairNumber supported by the instance type is used by default. Therefore, after you attach one RDMA ENI without specifying QueuePairNumber, you cannot attach more RDMA ENIs (regular ENIs are not affected by this limit).
   * 
   * @example
   * 0
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The inbound queue depth of the network interface controller (NIC).
   * 
   * 
   * <props="china">
   * 
   * >This parameter is in invitational preview and is not publicly available. If you need to use this feature, [submit a ticket](https://selfservice.console.aliyun.com/ticket/createIndex) to request access.
   * 
   * 
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is in invitational preview and is not publicly available. If you need to use this feature, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl) to request access.
   * 
   * 
   * 
   * Note the following items when you use this parameter:
   * 
   * - This parameter is applicable only to seventh-generation and later ECS instance types.
   * 
   * - This parameter is currently applicable only to Linux images.
   * 
   * - A larger inbound queue depth can improve inbound throughput and reduce packet loss, but consumes more memory.
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The number of secondary private IPv4 addresses to allocate to the network interface controller (NIC). Valid values: 1 to 49.
   * 
   * - The value cannot exceed the IP address limit for the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * - `NetworkInterface.N.SecondaryPrivateIpAddressCount` specifies the number of secondary private IPv4 addresses to allocate to the network interface controller (NIC) (excluding the primary private IP address of the NIC). The system randomly allocates IP addresses from the available CIDR block of the vSwitch (`NetworkInterface.N.VSwitchId`) to which the network interface controller (NIC) belongs.
   * 
   * @example
   * 10
   */
  secondaryPrivateIpAddressCount?: number;
  /**
   * @remarks
   * The ID of the security group to which the ENI belongs.
   * 
   * Note the following items:
   * 
   * - The valid values of N do not exceed the number of network interface controllers (NICs) supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the number of network interface controllers (NICs) supported by the target instance type.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you must set this parameter. In this case, this parameter has the same effect as `SecurityGroupId`, but you cannot specify `SecurityGroupId`, `SecurityGroupIds.N`, or `NetworkInterface.N.SecurityGroupIds.N`.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, this parameter is optional. Default value: the security group of the ECS instance.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of one or more security groups to which the ENI belongs.
   * 
   * - The valid values of N do not exceed the number of network interface controllers (NICs) supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the number of network interface controllers (NICs) supported by the target instance type.
   * - The second N indicates that you can specify one or more security group IDs. The valid values of N depend on the maximum number of security groups to which an instance can belong. For more information, see [Security group limits](~~25412#SecurityGroupQuota1~~).
   * 
   * Note the following items:
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you must set this parameter or `NetworkInterface.N.SecurityGroupId`. In this case, this parameter has the same effect as `SecurityGroupIds.N`, but you cannot specify `SecurityGroupId`, `SecurityGroupIds.N`, or `NetworkInterface.N.SecurityGroupId`.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, this parameter is optional. Default value: the security group of the ECS instance.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable source/destination checking. We recommend that you enable this feature to improve network security. Valid values:
   * 
   * - true: enables source/destination checking.
   * 
   * - false: disables source/destination checking.
   * 
   * Default value: false.
   * 
   * > This feature is supported only in specific regions. Before you use this feature, read [Source/destination checking](https://help.aliyun.com/document_detail/2863210.html).
   * 
   * @example
   * false
   */
  sourceDestCheck?: boolean;
  /**
   * @remarks
   * The outbound queue depth of the network interface controller (NIC).
   * 
   * 
   * <props="china">
   * 
   * >This parameter is in invitational preview and is not publicly available. If you need to use this feature, [submit a ticket](https://selfservice.console.aliyun.com/ticket/createIndex) to request access.
   * 
   * 
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is in invitational preview and is not publicly available. If you need to use this feature, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl) to request access.
   * 
   * 
   * 
   * Note the following items when you use this parameter:
   * 
   * - This parameter is applicable only to seventh-generation and later ECS instance types.
   * 
   * - This parameter is currently applicable only to Linux images.
   * 
   * - A larger outbound queue depth can improve outbound throughput and reduce packet loss, but consumes more memory.
   * 
   * @example
   * 8192
   */
  txQueueSize?: number;
  /**
   * @remarks
   * The ID of the vSwitch to which the ENI belongs.
   * 
   * Note the following items:
   * 
   * - The valid values of N do not exceed the number of network interface controllers (NICs) supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the number of network interface controllers (NICs) supported by the target instance type.  
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you must set this parameter. In this case, this parameter has the same effect as `VSwitchId`, but you cannot specify the `VSwitchId` parameter at the same time.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, this parameter is optional. Default value: the vSwitch to which the ECS instance belongs.
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
   * The bandwidth weight value of the instance. Different instance types support different value ranges. You can call DescribeInstanceTypes to query the supported bandwidth weight tiers for a specific instance type. The returned BandwidthWeighting field indicates the supported bandwidth weight tiers for that instance type. The dictionary value can be the name field in the returned values, such as Vpc-L1 or Ebs-L1.
   * 
   * @example
   * Default
   */
  bandwidthWeighting?: string;
  /**
   * @remarks
   * Specifies whether to enable the Jumbo frame feature for the instance. Valid values:
   * 
   * - false: disables Jumbo frame. The MTU of all ENIs (including the primary ENI and secondary ENIs) on the instance is set to 1500.
   * 
   * - true: enables Jumbo frame. The MTU of all ENIs (including the primary ENI and secondary ENIs) on the instance is set to 8500.
   * 
   * Default value: true.
   * 
   * >Only some instance types of the eighth generation and later support the Jumbo frame feature. For more information, see [ECS instance MTU](https://help.aliyun.com/document_detail/200512.html).
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
   * - true: enables the resolution.
   * 
   * - false: disables the resolution.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  enableInstanceIdDnsAAAARecord?: boolean;
  /**
   * @remarks
   * Specifies whether to enable DNS resolution from the instance ID-based domain name to the IPv4 address. Valid values:
   * 
   * - true: enables the resolution.
   * 
   * - false: disables the resolution.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableInstanceIdDnsARecord?: boolean;
  /**
   * @remarks
   * Specifies whether to enable DNS resolution from the IP-based domain name to the IPv4 address. Valid values:
   * 
   * - true: enables the resolution.
   * - false: disables the resolution.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  enableIpDnsARecord?: boolean;
  /**
   * @remarks
   * Specifies whether to enable reverse DNS resolution from the IPv4 address to the IP-based domain name. Valid values:
   * 
   * - true: enables the resolution.
   * - false: disables the resolution.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableIpDnsPtrRecord?: boolean;
  /**
   * @remarks
   * The hostname type. Valid values:
   * 
   * - Custom: custom.
   * - IpBased: IP-based hostname.
   * - InstanceIdBased: instance ID-based hostname.
   * 
   * Default value: Custom.
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
   * The tag key for the instance, disks, and primary ENI. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
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
   * - default: The instance is not associated with the dedicated host. When an instance that has the economical mode enabled is restarted after it is stopped, if the original dedicated host has insufficient resources, the instance is placed on another dedicated host in the automatic deployment resource pool.
   * 
   * - host: The instance is associated with the dedicated host. When an instance that has the economical mode enabled is restarted after it is stopped, the instance remains on the original dedicated host. If the original dedicated host has insufficient resources, the instance fails to restart.
   * 
   * Default value: default.
   * 
   * @example
   * default
   */
  affinity?: string;
  /**
   * @remarks
   * The number of ECS instances to create. Valid values: 1 to 100.
   * 
   * The number of successfully created ECS instances depends on the specified Amount and minAmount values:
   * 
   * - If minAmount is not specified: Instances are created based on the Amount value. If inventory is insufficient, the API returns a failure and no instances are created.
   * 
   * - If minAmount is specified:
   *   - If ECS inventory < minAmount: No instances are created and the API returns a failure.
   *   - If minAmount ≤ ECS inventory < Amount: Instances are created based on the available inventory and the API returns success.
   *   - If ECS inventory ≥ Amount: Instances are created based on the specified Amount and the API returns success.
   * 
   * Default value: 1.
   * 
   * @example
   * 3
   */
  amount?: number;
  /**
   * @remarks
   * >This parameter is not publicly available.
   */
  arn?: RunInstancesRequestArn[];
  /**
   * @remarks
   * Specifies whether to automatically complete automatic payment when you create the instance. Valid values:
   * 
   * - true: automatically completes automatic payment.
   * 
   *     > Make sure that your payment method has a sufficient balance. Otherwise, an abnormal order is generated and can only be canceled. If your payment method has an insufficient balance, you can set `AutoPay` to `false` to generate an unpaid order. Then, you can log on to the ECS console to pay for the order.
   * 
   * - false: generates the order without completing automatic payment.
   * 
   *     > If `InstanceChargeType` is set to `PostPaid`, `AutoPay` cannot be set to `false`.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The automatic release time of the pay-as-you-go instance. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the UTC+0 time zone. The format is `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * - If the seconds (`ss`) value is not `00`, it is automatically set to the start of the current minute (`mm`).
   * 
   * - The earliest release time is 30 minutes after the current time.
   * 
   * - The latest release time cannot exceed three years from the current time.
   * 
   * @example
   * 2018-01-01T12:05:00Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter takes effect only when `InstanceChargeType` is set to `PrePaid`. Valid values:
   * 
   * - true: Enable auto-renewal.
   * - false: Disable auto-renewal.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period for each renewal. Valid values: 
   *          
   * <props="china">
   * - When PeriodUnit=Week: 1, 2, or 3.
   * - When PeriodUnit=Month: 1, 2, 3, 6, 12, 24, 36, 48, or 60.
   * 
   * 
   * 
   * <props="intl">When PeriodUnit=Month: 1, 2, 3, 6, 12, 24, 36, 48, or 60.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * A client token used to ensure the idempotence of the request. Generate a unique value from your client. **ClientToken** supports only ASCII characters and cannot exceed 64 characters in length. For more information, refer to [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
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
   * - Standard: standard mode. For more information, see the "Performance constrained mode" section in [What are burstable instances?](https://help.aliyun.com/document_detail/59977.html).
   * - Unlimited: unlimited mode. For more information, see the "Unlimited mode" section in [What are burstable instances?](https://help.aliyun.com/document_detail/59977.html).
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
   * <props="china">You can call [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html) to query the list of dedicated host IDs.
   * 
   * <props="intl">You can call [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html) to query the list of dedicated host IDs.
   * 
   * >Notice: Dedicated hosts do not support the creation of spot instances. If you specify `DedicatedHostId`, the `SpotStrategy` and `SpotPriceLimit` settings in the request are automatically ignored.
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * Specifies whether to enable release protection for the instance. This parameter determines whether the instance can be released from the console or by calling the [DeleteInstance](https://help.aliyun.com/document_detail/25507.html) operation. Valid values: 
   * 
   * - true: enables release protection.
   * - false: disables release protection.
   * 
   * Default value: false.
   * 
   * > This parameter is applicable only to pay-as-you-go instances. It can only restrict manual release operations but does not take effect on system-initiated release operations.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The group number of the instance in the deployment set when the deployment set uses the high availability group strategy (AvailabilityGroup). Valid values: 1 to 7.
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
   * - true: Only a dry run is performed. The system checks whether required parameters are specified, whether the request format is valid, whether business restrictions are met, and whether ECS inventory is sufficient. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * - false (default): A request is sent. If the check succeeds, instances are created directly.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The hostname of the instance. The following limits apply:
   * 
   * - It cannot start or end with a period (.) or hyphen (-), and cannot contain consecutive periods or hyphens.
   * - Windows instances: The hostname must be 2 to 15 characters in length and cannot contain periods (.) or consist entirely of digits. It can contain uppercase and lowercase letters, digits, and hyphens (-).
   * - Other instances (such as Linux):
   *     - The hostname must be 2 to 64 characters in length and can contain multiple periods (.). Each segment between periods can contain uppercase and lowercase letters, digits, and hyphens (-).
   *     - You can use the placeholder `${instance_id}` to include the instance ID in the `HostName` parameter. For example, if `HostName=k8s-${instance_id}` and the created ECS instance ID is `i-123abc****`, the hostname is `k8s-i-123abc****`.
   * 
   * When creating multiple ECS instances, you can:
   * 
   * - Batch configure sequential hostnames. For more information, refer to [Batch configure sequential names or hostnames for instances](https://help.aliyun.com/document_detail/196048.html).
   * - Use the `HostNames.N` parameter to set hostnames for multiple instances individually. Note that `HostName` and `HostNames.N` cannot be set at the same time.
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
   * This parameter is required when you create Super Computing Cluster (SCC) instances. You can create an HPC cluster by referring to [CreateHpcCluster](https://help.aliyun.com/document_detail/109138.html).
   * 
   * @example
   * hpc-bp67acfmxazb4p****
   */
  hpcClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the access channel for instance metadata. Valid values:
   * - enabled: enables the access channel.
   * - disabled: disables the access channel.
   * 
   * Default value: enabled.
   * >For information about instance metadata, see [Overview of ECS instance metadata](https://help.aliyun.com/document_detail/49122.html).
   * 
   * @example
   * enabled
   */
  httpEndpoint?: string;
  /**
   * @remarks
   * >This parameter is not publicly available.
   * 
   * @example
   * 0
   */
  httpPutResponseHopLimit?: number;
  /**
   * @remarks
   * Specifies whether to forcefully use the security-hardened mode (IMDSv2) to access instance metadata. Valid values:
   * - optional: does not forcefully use the security-hardened mode.
   * - required: forcefully uses the security-hardened mode. After you set this value, the normal mode cannot be used to access instance metadata.
   * 
   * Default value: optional.
   * >For information about the modes for accessing instance metadata, see [Access mode of instance metadata](https://help.aliyun.com/document_detail/150575.html).
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The name of the image family. When you set this parameter, the latest available image from the specified image family is used to create the instance.
   * 
   * The name must be 2 to 128 characters in length. It cannot start with a special character, digit, http://, or https://. It can contain only the following special characters: periods (.), underscores (_), hyphens (-), and colons (:).
   * 
   * Note the following items:
   * 
   * - If you set `ImageId`, you cannot set this parameter.
   * - If you do not set `ImageId`, but the launch template specified by `LaunchTemplateId` or `LaunchTemplateName` has `ImageId` configured, you cannot set this parameter.
   * - If you do not set `ImageId`, and the launch template specified by `LaunchTemplateId` or `LaunchTemplateName` does not have `ImageId` configured, you can set this parameter.
   * - If you do not set `ImageId` and do not set `LaunchTemplateId` or `LaunchTemplateName`, you can set this parameter.
   * > For information about image families associated with Alibaba Cloud public images, refer to [Public image overview](https://help.aliyun.com/document_detail/108393.html).
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The image ID. Specifies the image resource used to start the instance. You can call [DescribeImages](https://help.aliyun.com/document_detail/25534.html) to query available image resources. If you do not specify `LaunchTemplateId` or `LaunchTemplateName` to use a launch template, and do not specify `ImageFamily` to use the latest available image from an image family, `ImageId` is required.
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
   * - PrePaid: subscription.
   * - PostPaid: pay-as-you-go.
   * 
   * Default value: PostPaid.
   * 
   * <props="china">If you select subscription, make sure that your account supports balance payment or credit payment. Otherwise, the error `InvalidPayMethod` is returned.
   * 
   * <props="intl">If you select subscription, make sure that your account supports credit payment. Otherwise, the error `InvalidPayMethod` is returned.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance name. The name must be 2 to 128 characters in length and can contain characters from the Unicode letter category (including English letters, Chinese characters, and digits). It can also contain colons (:), underscores (_), periods (.), or hyphens (-). The default value is the `InstanceId` of the instance.
   * 
   * When creating multiple ECS instances, you can batch configure sequential instance names that can contain brackets ([]) and commas (,). For more information, refer to [Batch configure sequential names or hostnames for instances](https://help.aliyun.com/document_detail/196048.html).
   * 
   * @example
   * k8s-node-[1,4]-alibabacloud
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type. If you do not specify `LaunchTemplateId` or `LaunchTemplateName` to use a launch template, `InstanceType` is required.  
   * 
   * - Product selection: Refer to [Instance families](https://help.aliyun.com/document_detail/25378.html) or invoke [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query performance data of the target instance type. You can also refer to [Best practices for instance type selection](https://help.aliyun.com/document_detail/58291.html) to learn how to select an instance type from the appropriate instance family.
   * - Inventory query: Invoke [DescribeAvailableResource](https://help.aliyun.com/document_detail/66186.html) to query active resource availability in a specific region or zone. Use the relevant parameters to filter results.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The billing method for network usage. Valid values:
   * 
   * - PayByBandwidth: pay-by-bandwidth.
   * - PayByTraffic: pay-by-traffic.
   * 
   * Default value: PayByTraffic.
   * 
   * > In **pay-by-traffic** mode, the peak inbound and outbound bandwidths are upper limits and are not guaranteed. When resource contention occurs, the peak bandwidth may be throttled. If your workloads require guaranteed bandwidth, use **pay-by-bandwidth** mode.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth, in Mbit/s. Valid values:
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
   * The maximum outbound public bandwidth, in Mbit/s. Valid values: 0 to 100.
   * 
   * Default value: 0.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Specifies whether the instance is I/O optimized. The default value for [retired instance types](https://help.aliyun.com/document_detail/55263.html) is none. The default value for other instance types is optimized. Valid values:
   * 
   * - none: The instance is not I/O optimized.
   * - optimized: The instance is I/O optimized.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * Specifies one or more IPv6 addresses for the primary ENI. You can specify up to 10 IPv6 addresses. Valid values of N: 1 to 10.
   * 
   * Example: `Ipv6Address.1=2001:db8:1234:1a00::***`.
   * 
   * Note the following items:
   * 
   * - If you set `Ipv6Address.N`, the value of `Amount` can only be 1, and you cannot set `Ipv6AddressCount` at the same time.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot set `Ipv6Addresses.N` or `Ipv6AddressCount`. Instead, set `NetworkInterface.N.Ipv6Addresses.N` or `NetworkInterface.N.Ipv6AddressCount`.
   * 
   * @example
   * Ipv6Address.1=2001:db8:1234:1a00::***
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The number of randomly generated IPv6 addresses to assign to the primary ENI. Valid values: 1 to 10.
   *          
   * Take note of the following items:
   * 
   * - You cannot set both `Ipv6Address.N` and `Ipv6AddressCount`.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot set `Ipv6Address.N` or `Ipv6AddressCount`. You can only set `NetworkInterface.N.Ipv6Address.N` or `NetworkInterface.N.Ipv6AddressCount`.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * >This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  isp?: string;
  /**
   * @remarks
   * The name of the key pair.
   * >For Windows instances, this parameter is ignored. The default value is empty. Even if you specify this parameter, only the `Password` content is used.
   * 
   * @example
   * KeyPair_Name
   */
  keyPairName?: string;
  /**
   * @remarks
   * The ID of the launch template. For more information, call [DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html).
   * 
   * When you use a launch template to create instances, you must specify either `LaunchTemplateId` or `LaunchTemplateName` to determine the launch template.
   * 
   * @example
   * lt-bp1apo0bbbkuy0rj****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The name of the launch template.
   * 
   * When you use a launch template to create instances, you must specify either `LaunchTemplateId` or `LaunchTemplateName` to determine the launch template.
   * 
   * @example
   * LaunchTemplate_Name
   */
  launchTemplateName?: string;
  /**
   * @remarks
   * The version of the launch template. If you specify `LaunchTemplateId` or `LaunchTemplateName` without specifying the launch template version, the default version is used.
   * 
   * @example
   * 3
   */
  launchTemplateVersion?: number;
  /**
   * @remarks
   * The minimum number of ECS instances to purchase. Valid values: 1 to 100.
   * 
   * The number of successfully created ECS instances depends on the specified Amount and minAmount values:
   * 
   * - If minAmount is not specified: Instances are created based on the Amount value. If inventory is insufficient, the API returns a failure and no instances are created.
   * 
   * - If minAmount is specified:
   *   - If ECS inventory < minAmount: No instances are created and the API returns a failure.
   *   - If minAmount ≤ ECS inventory < Amount: Instances are created based on the available inventory and the API returns success.
   *   - If ECS inventory ≥ Amount: Instances are created based on the specified Amount and the API returns success.
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
   * The number of queues supported by the primary ENI. Take note of the following items:
   * 
   * - The value cannot exceed the maximum number of queues per ENI allowed for the instance type.
   * 
   * - The total number of queues for all ENIs on the instance cannot exceed the queue quota allowed for the instance type. You can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the `MaximumQueueNumberPerEni` and `TotalEniQueueQuantity` fields for the maximum queue number per ENI and the total queue quota.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot set `NetworkInterfaceQueueNumber`. You can only set `NetworkInterface.N.QueueNumber`.
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
   * ```
   * ()`~!@#$%^&*-_+=|{}[]:;\\"<>,.?/
   * ```
   * 
   * For Windows instances, the password cannot start with a forward slash (/).
   * 
   * > If you specify `Password`, use HTTPS to send the request to avoid password leaks.
   * 
   * @example
   * EcsV587!
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the password preset in the image. Valid values:
   * 
   * - true: Use the preset password.
   * - false: Do not use the preset password.
   * 
   * Default value: false.
   * 
   * > When you use this parameter, the Password parameter must be empty. Make sure that the image you use has a password configured.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The subscription duration of the resource. The unit is specified by `PeriodUnit`. This parameter takes effect and is required only when `InstanceChargeType` is set to `PrePaid`. If `DedicatedHostId` is specified, the value cannot exceed the subscription duration of the dedicated host. Valid values:
   * 
   * <props="china">
   * - When PeriodUnit=Week: 1, 2, 3, or 4.
   * - When PeriodUnit=Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, or 60.
   * 
   * 
   * 
   * <props="intl">When PeriodUnit=Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, or 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values: 
   * 
   * <props="china">
   * - Week.
   * - Month (default).
   * 
   * 
   * 
   * <props="intl">Month (default).
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The private domain name configuration of the instance.
   * 
   * 
   * For more information about private private domain resolution, see [ECS private private domain resolution](https://help.aliyun.com/document_detail/2844797.html).
   */
  privateDnsNameOptions?: RunInstancesRequestPrivateDnsNameOptions;
  /**
   * @remarks
   * The private IP address of the instance. When you specify system reserved IP address for a VPC-type ECS instance, the IP address must be from the idle CIDR block of the vSwitch (`VSwitchId`).
   * 
   * Take note of the following items:
   * 
   * - After you set `PrivateIpAddress`:
   *     - If `Amount` is set to 1, system reserved IP address is assigned to the created ECS instance.
   *     - If `Amount` is set to a value greater than 1, consecutive private IP addresses are assigned to the instances in a batch creation, starting from the specified private IP address. In this case, you cannot attach secondary ENIs to the instances (that is, you cannot set `NetworkInterface.N.*` parameters).
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot set `PrivateIpAddress`. You can only set `NetworkInterface.N.PrimaryIpAddress`.
   * 
   * >The first and last three IP addresses of each vSwitch CIDR block are reserved by the system and cannot be specified.
   * For example, if the vSwitch CIDR block is 192.168.1.0/24, the IP addresses 192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255 are reserved by the system.
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
   * - Active: Enable security hardening. This value is applicable only to public images.
   * - Deactive: Disable security hardening. This value is applicable to all image types.
   * 
   * @example
   * Active
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group to which the new instance belongs. Instances in the same security group can communicate with each other. The maximum number of instances that a security group can contain varies based on the security group type. For more information, refer to the security group section in [Limits](~~25412#SecurityGroupQuota~~).
   * 
   * > `SecurityGroupId` determines the network type of the instance. For example, if the specified security group is of the VPC type, the instance is a VPC-type instance, and you must also specify `VSwitchId`.
   * 
   * If you do not set `LaunchTemplateId` or `LaunchTemplateName` to use a launch template, the security group ID is required. Note the following items:
   * 
   * - You can set one security group by using `SecurityGroupId`, or set one or more security groups by using `SecurityGroupIds.N`. However, you cannot set both `SecurityGroupId` and `SecurityGroupIds.N` at the same time.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot set `SecurityGroupId` or `SecurityGroupIds.N`. You can only set `NetworkInterface.N.SecurityGroupId` or `NetworkInterface.N.SecurityGroupIds.N`.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Adds the instance to multiple security groups. The valid values of N depend on the maximum number of security groups to which an instance can belong. For more information, see [Security group limits](https://help.aliyun.com/document_detail/101348.html).
   * 
   * Note the following items:
   * 
   * - You cannot specify both `SecurityGroupId` and `SecurityGroupIds.N`.
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify `SecurityGroupId` or `SecurityGroupIds.N`. Instead, specify `NetworkInterface.N.SecurityGroupId` or `NetworkInterface.N.SecurityGroupIds.N`.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The protection period of the spot instance, in hours. Valid values:
   * - 1: After the instance is created, Alibaba Cloud guarantees that the instance will not be automatically released for 1 hour. After 1 hour, the system compares the bid price with the marketplace price in real-time and checks resource inventory to determine whether to retain or revoke the instance.
   * - 0: After the instance is created, Alibaba Cloud does not guarantee a runtime. The system compares the bid price with the marketplace price in real-time and checks resource inventory to determine whether to retain or revoke the instance.
   * 
   * Default value: 1.
   * > 
   * > - This parameter currently supports only the values 0 and 1.
   * > - Spot instances are billed by second. Select an appropriate protection period based on the execution duration of your tasks.
   * > - Alibaba Cloud sends a notification through an ECS system event 5 minutes before the instance is revoked.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The interruption mode of the spot instance. Valid values:
   * 
   * - Terminate: The instance is directly released.
   * - Stop: The instance enters economical mode.
   * 
   *   For more information about economical mode, refer to [Economical mode for pay-as-you-go instances](https://help.aliyun.com/document_detail/63353.html).
   * 
   * Default value: Terminate.
   * 
   * @example
   * Terminate
   */
  spotInterruptionBehavior?: string;
  /**
   * @remarks
   * The maximum hourly price of the instance. This parameter supports up to three decimal places and takes effect when `SpotStrategy` is set to `SpotWithPriceLimit`.
   * 
   * @example
   * 0.97
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The bidding policy for the pay-as-you-go instance. This parameter takes effect when `InstanceChargeType` is set to `PostPaid`. Valid values:
   * 
   * - NoSpot: regular pay-as-you-go instance.
   * - SpotWithPriceLimit: spot instance with a maximum price limit.
   * - SpotAsPriceGo: spot instance priced at the market price at the time of purchase.
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
   * The maximum number of partitions in the storage set. Valid values: greater than or equal to 1.
   * 
   * @example
   * 2
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The tags for the instance, disks, and primary ENI.
   */
  tag?: RunInstancesRequestTag[];
  /**
   * @remarks
   * Specifies whether to create the instance on a dedicated host. Valid values:
   * 
   * - default: creates a non-dedicated-host instance.
   * 
   * - host: creates an instance on a dedicated host. If you do not specify `DedicatedHostId`, Alibaba Cloud automatically selects a dedicated host for the instance.
   * 
   * Default value: default.
   * 
   * @example
   * default
   */
  tenancy?: string;
  /**
   * @remarks
   * Specifies whether to automatically append sequential suffixes to `HostName` and `InstanceName` when creating multiple instances. Sequential suffixes start from 001 and cannot exceed 999. Valid values:
   * - true: Append sequential suffixes.
   * - false: Do not append sequential suffixes.
   * 
   * Default value: false.
   * 
   * When `HostName` or `InstanceName` is set in a specified sequential format without the `name_suffix` suffix (that is, the format is `name_prefix[begin_number,bits]`), `UniqueSuffix` does not take effect, and names are ordered only based on the specified sequence.
   * 
   * For more information, refer to [Batch configure sequential names or hostnames for instances](https://help.aliyun.com/document_detail/196048.html).
   * 
   * @example
   * true
   */
  uniqueSuffix?: boolean;
  /**
   * @remarks
   * The user data of the instance. The data must be Base64-encoded. The maximum size of the raw data before Base64 encoding is 32 KB.
   * 
   * For more information about usage limits, formats, and execution frequency of instance user data, refer to [Instance user data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * >To ensure the security of UserData during transmission, avoid passing sensitive data such as passwords and private keys in plaintext. If you need to pass such information, encrypt it first, encode it in Base64, and then decrypt it inside the instance.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * The vSwitch ID. If you are creating a VPC-type ECS instance, you must specify a vSwitch ID. The security group and the vSwitch must belong to the same VPC. You can call [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) to query created vSwitches.
   * 
   * Note the following items:
   * 
   * - If you set `VSwitchId`, the `ZoneId` parameter must match the zone of the vSwitch. You can also leave `ZoneId` unspecified, and the system automatically selects the zone of the specified vSwitch.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot set `VSwitchId`. You can only set `NetworkInterface.N.VSwitchId`.
   * 
   * @example
   * vsw-bp1s5fnvk4gn2tws0****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the instance. You can call [DescribeZones](https://help.aliyun.com/document_detail/25610.html) to query available zones.
   * 
   * > If you specify `VSwitchId`, the specified `ZoneId` must match the zone of the vSwitch. You can also leave `ZoneId` unspecified, and the system automatically selects the zone of the specified vSwitch.
   * 
   * Default value: automatically selected by the system.
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

