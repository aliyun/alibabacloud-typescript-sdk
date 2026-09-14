// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunInstancesRequestCpuOptions extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * <props="china">Default value: see [Customize CPU options](https://help.aliyun.com/document_detail/145895.html).
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
   * The number of threads per CPU core. The number of vCPUs for an ECS instance equals `CpuOptions.Core` × `CpuOptions.ThreadsPerCore`.
   * 
   * - Setting `CpuOptions.ThreadsPerCore=1` disables hyper-threading.
   * 
   * - Only some instance types support configuring the number of threads per core.
   * 
   * <props="china">For valid values and default values, see [Customize CPU options](https://help.aliyun.com/document_detail/145895.html).
   * 
   * @example
   * 2
   */
  threadsPerCore?: number;
  /**
   * @remarks
   * The CPU topology type of the instance. Valid values:
   * 
   * - ContinuousCoreToHTMapping: In the CPU topology structure, the hyper-threads (HTs) of the same core are contiguous.
   * - DiscreteCoreToHTMapping: In the CPU topology structure, the HTs of the same core are discrete.
   * 
   * Default value: none.
   * 
   * > Only some instance families support this parameter. For the supported instance families, see [View and modify the CPU topology structure](https://help.aliyun.com/document_detail/2636059.html).
   * 
   * @example
   * DiscreteCoreToHTMapping
   */
  topologyType?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not available for general use.
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
   * > This parameter is currently in invitational preview and is not available for use.
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
   * The ID of the private pool, which is the ID of the elasticity assurance or capacity reservation.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The private pool capacity option for starting the instance. After an elasticity assurance or capacity reservation takes effect, a private pool is generated for launching instances. Valid values:
   * 
   * - Open: open mode. The system automatically matches an open private pool. If no matching private pool is available, the instance is launched from the public pool. In this mode, you do not need to set `PrivatePoolOptions.Id`.
   * - Target: targeted mode. The instance is launched from the specified private pool. If the specified private pool is unavailable, the instance fails to start. In this mode, you must specify a private pool ID by setting `PrivatePoolOptions.Id`.
   * - None: no private pool mode. The instance is launched without using a private pool.
   * 
   * Default value: None.
   * 
   * In the following scenarios, the private pool capacity option can only be set to `None` or left unset:
   * - Creating a spot instance.
   * - Creating an ECS instance on a dedicated host (DDH).
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
   * The ID of the dedicated host cluster to which the ECS instance belongs. The system automatically selects a dedicated host from the specified cluster to deploy the ECS instance.
   * 
   * > This parameter takes effect only when `Tenancy` is set to `host`.
   * 
   * If you specify both a dedicated host (`DedicatedHostId`) and a dedicated host cluster (`SchedulerOptions.DedicatedHostClusterId`):
   * - If the dedicated host belongs to the specified cluster, the ECS instance is preferentially deployed on the specified dedicated host.
   * - If the dedicated host does not belong to the specified cluster, the ECS instance fails to be created.
   * 
   * <props="china">To query the list of dedicated host cluster IDs, call [DescribeDedicatedHostClusters](https://help.aliyun.com/document_detail/184145.html).
   * 
   * <props="intl">To query the list of dedicated host cluster IDs, call [DescribeDedicatedHostClusters](https://help.aliyun.com/document_detail/184145.html).
   * 
   * <props="partner">To query the list of dedicated host cluster IDs, call [DescribeDedicatedHostClusters](https://help.aliyun.com/document_detail/184145.html).
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
   * Setting this parameter to Enclave means the ECS instance uses Enclave to build a confidential computing environment. Currently, only instance types in instance families c7, g7, and r7 support setting this parameter when invoking `RunInstances`. Note the following:
   * 
   * - The confidential computing feature is in invitational preview.
   * 
   * - To create an Enclave-based confidential computing instance by invoking an API operation, use `RunInstances`. `CreateInstance` does not support the `SecurityOptions.ConfidentialComputingMode` parameter.
   * 
   * - Enclave-based confidential computing relies on the trusted system (vTPM). If you configure an instance to use Enclave, the trusted system is also enabled. Therefore, if you set `SecurityOptions.ConfidentialComputingMode=Enclave`, the instance will have both Enclave confidential computing pattern and the trusted system enabled, regardless of whether you set `SecurityOptions.TrustedSystemMode=vTPM`.
   * 
   * For more information about confidential computing, see [Use Enclave to build a confidential computing environment](https://help.aliyun.com/document_detail/203433.html).
   * 
   * @example
   * Enclave
   */
  confidentialComputingMode?: string;
  /**
   * @remarks
   * The trusted system mode. Set the value to vTPM.
   * 
   * The trusted system mode supports the following instance families:
   * - g7, c7, r7.
   * - Security-enhanced instance families (g7t, c7t, r7t).
   * 
   * If you create an ECS instance that belongs to one of the above instance families, configure this parameter as follows:
   * 
   * - To use the Alibaba Cloud Trusted System, set this parameter to vTPM. The trusted system then performs a trusted verification when the instance starts.
   * - If you do not use the Alibaba Cloud Trusted System, you can leave this parameter unset. However, if the instance uses Enclave-based confidential computing (`SecurityOptions.ConfidentialComputingMode=Enclave`), the trusted system is also enabled.
   * - To create a trusted instance by invoking an API operation, use `RunInstances`. `CreateInstance` does not support the `SecurityOptions.TrustedSystemMode` parameter.
   * > If you configure an instance as a trusted instance at creation time, you can only use images that support the trusted system when replacing the system disk.
   * 
   * For more information about the trusted system, see [Overview of the trusted feature for security-enhanced instances](https://help.aliyun.com/document_detail/201394.html).
   * 
   * @example
   * vTPM
   */
  trustedSystemMode?: string;
  /**
   * @remarks
   * Specifies whether to enable UEFI Secure Boot.
   */
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
   * The disk type of the system disk. Valid values:
   * 
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: enterprise SSD.
   * - cloud: basic disk.
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_essd_entry: ESSD Entry disk.
   * 
   * Default value description:
   * 
   * - If the instance type is a retired non-I/O optimized instance type, the default value is `cloud`.
   * - In all other cases, the default value is `cloud_efficiency`.<props="china">After January 30, 2026, for instance types that support only cloud_essd, the default value changes from cloud_efficiency to cloud_essd PL0. For more information, see [Change notice](https://www.aliyun.com/notice/117844).
   * 
   * > `cloud_essd_entry` is supported only when `InstanceType` is set to [u1, universal instance family](https://help.aliyun.com/document_detail/457079.html) (`ecs.u1`) or [e, economy instance family](https://help.aliyun.com/document_detail/108489.html) (`ecs.e`).
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
   * The name of the system disk. The name must be 2 to 128 characters in length and can contain Unicode letters (including English, Chinese, and digits). It can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * cloud_ssdSystem
   */
  diskName?: string;
  /**
   * @remarks
   * The performance level of the enterprise SSD used as the system disk. This parameter takes effect when you create an enterprise SSD as the system disk. Valid values:
   * 
   * - PL0: maximum random read/write IOPS of 10,000 per disk.
   * - PL1 (default): maximum random read/write IOPS of 50,000 per disk.
   * - PL2: maximum random read/write IOPS of 100,000 per disk.
   * - PL3: maximum random read/write IOPS of 1,000,000 per disk.
   * 
   * For information about how to choose an ESSD performance level, see [Enterprise SSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values:
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
   * The value must be greater than or equal to max{1, ImageSize}.
   * 
   * Default value: max{40, the size of the image specified by the ImageId parameter}.
   * 
   * @example
   * 40
   */
  size?: string;
  /**
   * @remarks
   * Specifies whether to enable the burst feature (performance burst). Valid values:
   * 
   * - true: yes.
   * - false: no.
   * 
   * >This parameter is valid only when `SystemDisk.Category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disk](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * >This parameter is not available for use.
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
   * >Encrypting the system disk during instance creation is not supported in China (Hong Kong) Zone D or Singapore Zone A.
   * 
   * >Notice: When you use a shared encrypted image to create a disk based on an encrypted snapshot, you must set the request parameter Encrypted=true for the disk to ensure that the disk uses the key of the account with which the image is shared.
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The ID of the KMS key used for the system disk.
   * 
   * > If Encrypted is set to true and KMSKeyId is not specified, the default key is used for encryption. The KMSKeyId value is returned after the instance is created successfully.
   * > - - Disk created from a non-shared encrypted snapshot: The encryption key used by the snapshot is used by default.
   * > - - Disk created from a shared encrypted snapshot: The service key is used by default.
   * > - - Disk created in a region where account-level default encryption for block storage is enabled: The specified account-level key is used by default.
   * > - - All other cases: The service key is used by default.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50,000, 1,000 × capacity − baseline performance}.
   * 
   * Baseline performance = min{1,800 + 50 × capacity, 50,000}.
   * 
   * >This parameter is valid only when `SystemDisk.Category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disk](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster. If you want to use a disk from a dedicated block storage cluster as the system disk when creating an ECS instance, set this parameter.
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
   * >This parameter is not available for use.
   * 
   * @example
   * null
   */
  assumeRoleFor?: number;
  /**
   * @remarks
   * >This parameter is not available for use.
   * 
   * @example
   * null
   */
  roleType?: string;
  /**
   * @remarks
   * >This parameter is not available for use.
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
   * The ID of the automatic snapshot policy applied to the data disk.
   * 
   * @example
   * sp-bp67acfmxazb4p****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the burst feature (performance burst). Valid values:
   * 
   * - true: yes.
   * - false: no.
   * 
   * >This parameter is valid only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL disk](https://help.aliyun.com/document_detail/368372.html).
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
   * - cloud_essd: enterprise SSD.
   * - cloud: basic disk.
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_regional_disk_auto: regional Enterprise SSD (ESSD).
   * - cloud_essd_entry: ESSD Entry disk.
   *   >This value is supported only when `InstanceType` is set to an instance type in the `ecs.u1` or `ecs.e` instance family.
   * - elastic_ephemeral_disk_standard: elastic ephemeral disk - standard edition.
   * - elastic_ephemeral_disk_premium: elastic ephemeral disk - premium edition.
   * 
   * For I/O optimized instances, the default value is cloud_efficiency. For non-I/O optimized instances, the default value is cloud.
   * Default value description:
   * 
   * - If InstanceType is a retired non-I/O optimized instance type, the default value is `cloud`.
   * - In all other cases, the default value is `cloud_efficiency`.<props="china"> After January 30, 2026, if the I/O optimized instance type does not support cloud_auto, the default value is cloud_efficiency. Otherwise, the default value is cloud_auto, and performance burst is enabled by default (additional fees apply; for details, see [Billing examples](~~368372#p_75k_2hp_7gp~~)). For more information, see the [change notice](https://www.aliyun.com/notice/117844).
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release the data disk when the instance is released. Valid values:
   * - true: The data disk is released when the instance is released.
   * - false: The data disk is not released when the instance is released.
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
   * The mount point of the data disk. The naming convention for mount points varies based on the number of data disks attached:
   * 
   * - 1 to 25 data disks: /dev/xvd`[b-z]`
   * 
   * - More than 25 data disks: /dev/xvd`[aa-zz]`. For example, the 26th data disk is named /dev/xvdaa, the 27th is /dev/xvdab, and so on.
   * 
   * > - This parameter is used only for full images (system images). You can set this parameter to the mount point of a data disk in the full image, and modify the corresponding `DataDisk.N.Size` and `DataDisk.N.Category` parameters to change the category and size of that data disk.
   * > - When you create an instance from a full image, the data disks in the full image are created as the first 1 to n data disks of the ECS instance.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The name of the data disk. The name must be 2 to 128 characters in length and can contain Unicode characters in the letter category, including letters in English, Chinese, and digits. It can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * cloud_ssdData
   */
  diskName?: string;
  /**
   * @remarks
   * >This parameter is not available for use.
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
   * >Notice: When you use a shared encrypted image to create a disk based on an encrypted snapshot, you must set the request parameter Encrypted=true for the disk to ensure that the disk uses the key of the account with which the image is shared.
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The ID of the KMS key used for the data disk.
   * 
   * > If Encrypted is set to true and KMSKeyId is not specified, the default key is used for encryption. The KMSKeyId value is returned after the instance is created successfully.
   * > - - Disk created from a non-shared encrypted snapshot: The encryption key used by the snapshot is used by default.
   * > - - Disk created from a shared encrypted snapshot: The service key is used by default.
   * > - - Disk created in a region where account-level default encryption for block storage is enabled: The specified account-level key is used by default.
   * > - - All other cases: The service key is used by default.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * Settings for the performance level of the enterprise SSD (ESSD) used as the data disk. The value of N must match the N in `DataDisk.N.Category=cloud_essd`. Valid values:
   * 
   * - PL0: maximum random read/write IOPS of 10,000 per disk.
   * - PL1 (default): maximum random read/write IOPS of 50,000 per disk.
   * - PL2: maximum random read/write IOPS of 100,000 per disk.
   * - PL3: maximum random read/write IOPS of 1,000,000 per disk.
   * 
   * For information about how to choose an ESSD performance level, see [Enterprise SSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50,000, 1,000 × capacity − baseline performance}.
   * 
   * Baseline performance = min{1,800 + 50 × capacity, 50,000}.
   * 
   * >This parameter is valid only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL disk](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of data disk N, in GiB. The valid values of N range from 1 to 16. Valid values:
   * 
   * - cloud_efficiency: 20 to 32768.
   * - cloud_ssd: 20 to 32768.
   * - cloud_essd: The valid range depends on the value of `DataDisk.N.PerformanceLevel`. 
   *     - PL0: 1 to 65,536.
   *     - PL1: 20 to 65,536.
   *     - PL2: 461 to 65,536.
   *     - PL3: 1,261 to 65,536.
   * - cloud: 5 to 2,000.
   * - cloud_auto: 1 to 65,536.
   * - cloud_essd_entry: 10 to 32,768.
   * 
   * >The value of this parameter must be greater than or equal to the size of the snapshot specified by `SnapshotId`.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The snapshot used to create data disk N. The valid values of N range from 1 to 16.
   * 
   * If `DataDisk.N.SnapshotId` is specified, `DataDisk.N.Size` is ignored. The size of the created disk equals the size of the specified snapshot. Snapshots created on or before July 15, 2013 are not supported. Requests that use such snapshots are rejected.
   * 
   * @example
   * s-bp17441ohwka0yuh****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster. If you want to use a disk from a dedicated block storage cluster as a data disk when creating an ECS instance, set this parameter.
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
   * Specifies whether the instance that uses this image supports logon as the ecs-user user. Valid values:
   * 
   * - true: yes.
   * 
   * - false: no.
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
   * - true: The ENI is not retained.
   * 
   * - false: The ENI is retained.
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
   * The description of the Elastic Network Interface (ENI).
   * 
   * Note:
   * 
   * - The valid values of N must not exceed the maximum number of ENIs supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or invoke [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the maximum number of ENIs supported by the target instance type.
   * - The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you do not need to set this parameter.
   * 
   * @example
   * Network_Description
   */
  description?: string;
  /**
   * @remarks
   * The type of the Elastic Network Interface (ENI). The valid values of N must not exceed the maximum number of ENIs supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or invoke [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the maximum number of ENIs supported by the target instance type.
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
   * One or more IPv6 addresses assigned to the primary ENI. You can specify up to 10 IPv6 addresses. The valid values of the second N range from 1 to 10.
   * 
   * Example: `Ipv6Address.1=2001:db8:1234:1a00::***`
   * 
   * Note:
   * 
   * - This parameter takes effect only when `NetworkInterface.N.InstanceType` is set to `Primary`. If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, you cannot set this parameter.
   * 
   * - If this parameter is set, `Amount` can only be set to 1, and you cannot set `Ipv6AddressCount`, `Ipv6Address.N`, or `NetworkInterface.N.Ipv6AddressCount` at the same time.
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The number of randomly generated IPv6 addresses assigned to the primary ENI. Valid values: 1 to 10.
   * 
   * Note:
   * 
   * - This parameter takes effect only when `NetworkInterface.N.InstanceType` is set to `Primary`. If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, you cannot set this parameter.
   * 
   * - If this parameter is set, you cannot set `Ipv6AddressCount`, `Ipv6Address.N`, or `NetworkInterface.N.Ipv6Address.N` at the same time.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The index of the physical network card assigned to the ENI.
   * 
   * Note:
   * - Only specific instance types support specifying a physical network card index.
   * - If NetworkInterface.N.InstanceType is set to Primary, and the instance type supports physical network cards, you can only set this parameter to 0.
   * - If NetworkInterface.N.InstanceType is set to Secondary or left empty, and the instance type supports physical network cards, you can set this parameter based on the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * 0
   */
  networkCardIndex?: number;
  /**
   * @remarks
   * The ID of the Elastic Network Interface (ENI) to attach to the instance.
   * 
   * If this parameter is set, `Amount` can only be set to 1.
   * 
   * >This parameter takes effect only for secondary ENIs. After you specify an existing secondary ENI, you cannot configure other network interface controller (NIC) creation parameters.
   * 
   * @example
   * eni-bp1gn106np8jhxhj****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The name of the Elastic Network Interface (ENI). The name must be 2 to 128 characters in length and can contain Unicode characters in the letter categorization, including letters in English, Chinese, and digits. It can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * Note:
   * 
   * - The valid values of N must not exceed the maximum number of ENIs supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or invoke [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the maximum number of ENIs supported by the target instance type.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you do not need to set this parameter.
   * 
   * @example
   * Network_Name
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The communication pattern of the Elastic Network Interface (ENI). Valid values:
   * 
   * - Standard: uses the TCP communication mode.
   * - HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the RDMA communication mode.
   * 
   * Default value: Standard.
   * 
   * >The number of ENIs in RDMA mode cannot exceed the limit for the instance family. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * Standard
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The primary IP address of the Elastic Network Interface (ENI) to add.
   * 
   * Note:
   * 
   * - The valid values of N must not exceed the maximum number of ENIs supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or invoke [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the maximum number of ENIs supported by the target instance type.
   *     - When you add one ENI, you can add one primary ENI or one secondary ENI. If `Amount` is greater than 1 and you configure a primary ENI with this parameter, the system assigns consecutive primary IP addresses to multiple ECS instances starting from the specified IP address in batch. In this case, you cannot attach a secondary ENI to the instances.
   *     - If `Amount` is greater than 1 and this parameter is set for the primary ENI, you cannot configure a secondary ENI (that is, you cannot set `NetworkInterface.2.InstanceType=Secondary`).
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, this parameter has the same effect as `PrivateIpAddress`. However, you cannot set both `PrivateIpAddress` and this parameter at the same time.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, this parameter specifies the primary IP address of the secondary ENI. By default, a random IP address is allocated from the CIDR block of the vSwitch to which the ENI belongs.
   * 
   * >The first and last three IP addresses of each vSwitch CIDR block are system reserved IP addresses and cannot be specified. For example, if the vSwitch CIDR block is 192.168.1.0/24, the addresses 192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255 are reserved.
   * 
   * @example
   * ``172.16.**.**``
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * The number of queues for the Elastic Network Interface (ENI).
   * 
   * Note:
   * 
   * - The valid values of N must not exceed the maximum number of ENIs supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or invoke [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the maximum number of ENIs supported by the target instance type.
   * 
   * - The value cannot exceed the maximum number of queues per ENI allowed by the instance type.
   * 
   * - The total number of queues across all ENIs on the instance cannot exceed the total queue quota for the instance type. You can call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query the `MaximumQueueNumberPerEni` and `TotalEniQueueQuantity` fields for the maximum number of queues per ENI and the total queue quota.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary` and this parameter is set, you cannot set `NetworkInterfaceQueueNumber` at the same time.
   * 
   * @example
   * 8
   */
  queueNumber?: number;
  /**
   * @remarks
   * The number of queue pairs for the RDMA ENI.
   * 
   * If you plan to attach multiple RDMA ENIs to the instance, set QueuePairNumber for each ENI based on the maximum QueuePairNumber supported by the instance type and the number of ENIs you plan to use. Make sure the total QueuePairNumber across all ENIs does not exceed the maximum allowed for the instance type. Call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the limit for the instance type.
   * 
   * >Notice: If QueuePairNumber is not specified for an RDMA ENI, the maximum QueuePairNumber supported by the instance type is used by default. Therefore, once you attach an RDMA ENI without specifying QueuePairNumber, you cannot attach additional RDMA ENIs (this restriction does not apply to standard ENIs).</notice>
   * 
   * @example
   * 0
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The inbound queue depth of the Elastic Network Interface (ENI).
   * 
   * 
   * <props="china">
   * 
   * >This parameter is in invitational preview and is not available for general use. To use this parameter, [submit a ticket](https://selfservice.console.aliyun.com/ticket/createIndex).
   * 
   * 
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is in invitational preview and is not available for general use. To use this parameter, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl).
   * 
   * 
   * 
   * Note:
   * 
   * - This parameter applies only to seventh-generation and later ECS instance types.
   * 
   * - This parameter currently applies only to Linux images.
   * 
   * - A larger inbound queue depth improves inbound throughput and reduces packet loss, but consumes more memory.
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The number of secondary private IPv4 addresses to assign to the network interface controller (NIC). Valid values: 1 to 49.
   * 
   * - The value cannot exceed the IP address limit for the instance type. For more information, see [Instance families](~~~25378~~).
   * - `NetworkInterface.N.SecondaryPrivateIpAddressCount` specifies the number of secondary private IPv4 addresses to allocate to the ENI (excluding the primary private IP address of the ENI). The system randomly allocates the addresses from the available CIDR block of the vSwitch (`NetworkInterface.N.VSwitchId`) to which the ENI belongs.
   * 
   * @example
   * 10
   */
  secondaryPrivateIpAddressCount?: number;
  /**
   * @remarks
   * The ID of the security group to which the Elastic Network Interface (ENI) belongs.
   * 
   * Note:
   * 
   * - The valid values of N must not exceed the maximum number of ENIs supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or invoke [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the maximum number of ENIs supported by the target instance type.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, this parameter is required. It has the same effect as `SecurityGroupId`. However, you cannot set `SecurityGroupId`, `SecurityGroupIds.N`, or `NetworkInterface.N.SecurityGroupIds.N` at the same time.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, this parameter is optional. The default value is the security group of the ECS instance.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of one or more security groups to which the Elastic Network Interface (ENI) belongs.
   * 
   * - The valid values of N must not exceed the maximum number of ENIs supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or invoke [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the maximum number of ENIs supported by the target instance type.
   * - The second N indicates that you can specify one or more security group IDs. The valid values of the second N depend on the maximum number of security groups to which an instance can belong. For more information, see [Security group limits](~~25412#SecurityGroupQuota1~~).
   * 
   * Note:
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you must set this parameter or `NetworkInterface.N.SecurityGroupId`. This parameter has the same effect as `SecurityGroupIds.N`. However, you cannot set `SecurityGroupId`, `SecurityGroupIds.N`, or `NetworkInterface.N.SecurityGroupId` at the same time.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, this parameter is optional. The default value is the security group of the ECS instance.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable source/destination checking. We recommend that you enable this feature to improve network security. Valid values:
   * 
   * - true: yes.
   * 
   * - false: no.
   * 
   * Default value: false.
   * 
   * > This feature is supported only in certain regions. Before using it, read [Source/destination checking](https://help.aliyun.com/document_detail/2863210.html) carefully.
   * 
   * @example
   * false
   */
  sourceDestCheck?: boolean;
  /**
   * @remarks
   * The outbound queue depth of the Elastic Network Interface (ENI).
   * 
   * 
   * <props="china">
   * 
   * >This parameter is in invitational preview and is not available for general use. To use this parameter, [submit a ticket](https://selfservice.console.aliyun.com/ticket/createIndex).
   * 
   * 
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is in invitational preview and is not available for general use. To use this parameter, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl).
   * 
   * 
   * 
   * Note:
   * 
   * - This parameter applies only to seventh-generation and later ECS instance types.
   * 
   * - This parameter currently applies only to Linux images.
   * 
   * - A larger outbound queue depth improves outbound throughput and reduces packet loss, but consumes more memory.
   * 
   * @example
   * 8192
   */
  txQueueSize?: number;
  /**
   * @remarks
   * The ID of the vSwitch to which the Elastic Network Interface (ENI) belongs.
   * 
   * Note:
   * 
   * - The valid values of N must not exceed the maximum number of ENIs supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or invoke [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the maximum number of ENIs supported by the target instance type.
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, this parameter is required. It has the same effect as `VSwitchId`. However, you cannot set `VSwitchId` at the same time.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, this parameter is optional. The default value is the vSwitch of the ECS instance.
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
   * The bandwidth weight of the instance. The valid values vary by instance type. To query the bandwidth weight tiers supported by a specific instance type, call DescribeInstanceTypes. The BandwidthWeighting field in the response lists the supported tiers. You can use the name field values from the response, such as Vpc-L1 and Ebs-L1.
   * 
   * @example
   * Default
   */
  bandwidthWeighting?: string;
  /**
   * @remarks
   * Specifies whether to enable the Jumbo Frame feature for the instance. Valid values:
   * 
   * - false: disables Jumbo Frame. The MTU of all ENIs on the instance (including the primary ENI and secondary ENIs) is set to 1500.
   * 
   * - true: enables Jumbo Frame. The MTU of all ENIs on the instance (including the primary ENI and secondary ENIs) is set to 8500.
   * 
   * Default value: true.
   * 
   * >Only some eighth-generation and later instance types support the Jumbo Frame feature. For more information, see [ECS instance MTU](https://help.aliyun.com/document_detail/200512.html).
   * 
   * @example
   * false
   */
  enableJumboFrame?: boolean;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not available for general use.
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
   * Specifies whether to enable DNS resolution from the instance ID-based domain name to an IPv6 address. Valid values:
   * 
   * - true: enabled.
   * 
   * - false: disabled.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  enableInstanceIdDnsAAAARecord?: boolean;
  /**
   * @remarks
   * Specifies whether to enable DNS resolution from the instance ID-based domain name to an IPv4 address. Valid values:
   * 
   * - true: enabled.
   * 
   * - false: disabled.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableInstanceIdDnsARecord?: boolean;
  /**
   * @remarks
   * Specifies whether to enable DNS resolution from the IP-based domain name to an IPv4 address. Valid values:
   * 
   * - true: enabled.
   * - false: disabled.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  enableIpDnsARecord?: boolean;
  /**
   * @remarks
   * Specifies whether to enable reverse DNS resolution from an IPv4 address to the IP-based domain name. Valid values:
   * 
   * - true: enabled.
   * - false: disabled.
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
   * - Custom: custom hostname.
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
   * The tag key of the instance, disk, and primary ENI. Valid values of N: 1 to 20. If this parameter is specified, it cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance, disk, and primary ENI. Valid values of N: 1 to 20. If this parameter is specified, it can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.
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
   * Specifies whether to associate the instance with a dedicated host. Valid values:
   * 
   * - default: The instance is not associated with a dedicated host. If the instance is stopped in economical mode and then restarted, and the original dedicated host has insufficient resources, the instance is placed on another dedicated host in the automatic deployment resource pool.
   * 
   * - host: The instance is associated with a dedicated host. If the instance is stopped in economical mode and then restarted, it remains on the original dedicated host. If the original dedicated host has insufficient resources, the restart fails.
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
   * The number of instances successfully created depends on the values of Amount and MinAmount:
   * 
   * - If MinAmount is not specified: instances are created according to the Amount value. If inventory is insufficient, the API returns a creation failure and no instances are created.
   * 
   * - If MinAmount is specified:
   *   - If the available ECS inventory < MinAmount: no instances are created and the API returns a creation failure.
   *   - If MinAmount ≤ available ECS inventory < Amount: instances are created based on the available inventory and the API returns a creation success.
   *   - If the available ECS inventory ≥ Amount: instances are created according to the specified Amount and the API returns a creation success.
   * 
   * Default value: 1.
   * 
   * @example
   * 3
   */
  amount?: number;
  /**
   * @remarks
   * >This parameter is not available for use.
   */
  arn?: RunInstancesRequestArn[];
  /**
   * @remarks
   * Specifies whether to automatically complete the payment when creating an instance. Valid values:
   * 
   * - true: automatically completes the payment.
   * 
   *     > If automatic payment is enabled, make sure that your payment method has sufficient balance. Otherwise, an abnormal order is generated and can only be voided. If your payment method has insufficient balance, set `AutoPay` to `false`. An unpaid order is then generated, which you can pay for in the ECS console.
   * 
   * - false: generates an order without charging.
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
   * The automatic release time for pay-as-you-go instances. Specify the time in [ISO 8601](https://help.aliyun.com/document_detail/25696.html) format in UTC+0. The format is `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * - If the seconds (`ss`) value is not `00`, it is automatically set to the start of the current minute (`mm`).
   * 
   * - The earliest release time is 30 minutes from the current time.
   * 
   * - The latest release time cannot be more than three years from the current time.
   * 
   * @example
   * 2018-01-01T12:05:00Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter takes effect only when `InstanceChargeType` is set to `PrePaid`. Valid values:
   * 
   * - true: enables auto-renewal.
   * - false: disables auto-renewal.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period for a single renewal. Valid values: 
   *          
   * <props="china">
   * - When PeriodUnit=Week: 1, 2, 3.
   * - When PeriodUnit=Month: 1, 2, 3, 6, 12, 24, 36, 48, 60.
   * 
   * 
   * 
   * <props="intl">When PeriodUnit=Month: 1, 2, 3, 6, 12, 24, 36, 48, 60.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The client token used to ensure the idempotency of the request. Generate a unique value for this parameter from your client to ensure that different requests use different values. **ClientToken** supports only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotency](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance clock parameters.
   */
  clockOptions?: RunInstancesRequestClockOptions;
  /**
   * @remarks
   * Sets the running mode of a burstable instance. Valid values:
   * 
   * - Standard: standard mode. For more information about the performance of instances in standard mode, see the performance constraint mode section in [What are burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * - Unlimited: unlimited mode. For more information about the performance of instances in unlimited mode, see the unlimited mode section in [What are burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The list of data disk information collections.
   */
  dataDisk?: RunInstancesRequestDataDisk[];
  /**
   * @remarks
   * The ID of the dedicated host.
   * <props="china">You can call [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html) to query the list of dedicated host IDs.
   * 
   * <props="intl">You can call [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html) to query the list of dedicated host IDs.
   * 
   * >Notice: Dedicated hosts do not support spot instances. If `DedicatedHostId` is specified, the `SpotStrategy` and `SpotPriceLimit` settings in the request are automatically ignored.
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the instance. This parameter controls whether the instance can be released through the console or by calling [DeleteInstance](https://help.aliyun.com/document_detail/25507.html). Valid values: 
   * 
   * - true: enables deletion protection.
   * - false: disables deletion protection.
   * 
   * Default value: false.
   * 
   * > This parameter applies only to pay-as-you-go instances. It prevents manual release only and does not apply to system-initiated release operations.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The group number of the instance within the deployment set. This parameter applies when the deployment set uses the AvailabilityGroup strategy. Valid values: 1 to 7.
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
   * Specifies whether to perform only a dry run for this request. Valid values:
   * 
   * - true: sends a check request without creating the instance. The check includes whether required parameters are specified, the request format, business limits, and ECS inventory. If the check fails, the corresponding error is returned. If the check passes, the error code `DryRunOperation` is returned.
   * - false (default): sends a normal request. After passing the check, the instance is created immediately.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The hostname of the instance. The following limits apply:
   * 
   * - Periods (.) and hyphens (-) cannot be used as the first or last character, and cannot be used consecutively.
   * - Windows instances: The hostname must be 2 to 15 characters in length. Periods (.) are not supported. The hostname cannot consist of digits only. It can contain uppercase and lowercase letters, digits, and hyphens (-).
   * - Other instance types (such as Linux):
   *     - The hostname must be 2 to 64 characters in length. Multiple periods (.) are supported. Each segment between periods can contain uppercase and lowercase letters, digits, and hyphens (-).
   *     - You can use the placeholder `${instance_id}` to write the instance ID into the `HostName` parameter. For example, if `HostName=k8s-${instance_id}` and the ECS instance ID is `i-123abc****`, the hostname of the instance is `k8s-i-123abc****`.
   * 
   * When creating multiple ECS instances, you can:
   * 
   * - Set sequential hostnames in batch. For more information, see [Set sequential instance names or hostnames in batch](https://help.aliyun.com/document_detail/196048.html).
   * - Use the `HostNames.N` parameter to set a different hostname for each instance. Note that `HostName` and `HostNames.N` cannot be specified at the same time.
   * 
   * @example
   * k8s-node-[1,4]-ecshost
   */
  hostName?: string;
  /**
   * @remarks
   * The hostnames of instances when you create multiple instances at a time. Each instance is assigned a unique hostname.
   * 
   * @example
   * ecs-host-01
   */
  hostNames?: string[];
  /**
   * @remarks
   * The ID of the HPC cluster to which the instance belongs. 
   * 
   * This parameter is required when creating an SCC instance. You can create an HPC cluster by referring to [CreateHpcCluster](https://help.aliyun.com/document_detail/109138.html).
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
   * > For more information about instance metadata, see [Overview of instance metadata](https://help.aliyun.com/document_detail/49122.html).
   * 
   * @example
   * enabled
   */
  httpEndpoint?: string;
  /**
   * @remarks
   * > This parameter is not available for use.
   * 
   * @example
   * 0
   */
  httpPutResponseHopLimit?: number;
  /**
   * @remarks
   * Specifies whether to enforce the use of the hardened mode (IMDSv2) to access instance metadata. Valid values:
   * - optional: does not enforce the use of the hardened mode.
   * - required: enforces the use of the hardened mode. After you set this value, the normal mode cannot be used to access instance metadata.
   * 
   * Default value: optional.
   * > For more information about the modes for accessing instance metadata, see [Access modes for instance metadata](https://help.aliyun.com/document_detail/150575.html).
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The name of the image family. Set this parameter to use the latest available image from the specified image family to create the instance.
   * 
   * The name must be 2 to 128 characters in length. It cannot start with a special character, a digit, `http://`, or `https://`. It can contain only the following special characters: periods (.), underscores (_), hyphens (-), and colons (:).
   * 
   * Note the following:
   * 
   * - If `ImageId` is specified, do not set this parameter.
   * - If `ImageId` is not specified but the launch template identified by `LaunchTemplateId` or `LaunchTemplateName` has `ImageId` configured, do not set this parameter.
   * - If `ImageId` is not specified and the launch template identified by `LaunchTemplateId` or `LaunchTemplateName` does not have `ImageId` configured, you can set this parameter.
   * - If `ImageId` is not specified and neither `LaunchTemplateId` nor `LaunchTemplateName` is specified, you can set this parameter.
   * > For image family information associated with Alibaba Cloud official images, see [Public image overview](https://help.aliyun.com/document_detail/108393.html).
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image used to create the instance. You can call [DescribeImages](https://help.aliyun.com/document_detail/25534.html) to query available images. If you do not specify `LaunchTemplateId` or `LaunchTemplateName` to identify a launch template, and do not use `ImageFamily` to select the latest available image from an image family, ImageId is required.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200324.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The image-related attributes.
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
   * <props="china">If you select subscription, make sure your account supports balance payment or credit payment. Otherwise, the error `InvalidPayMethod` is returned.
   * 
   * <props="intl">If you select subscription, make sure your account supports credit payment. Otherwise, the error `InvalidPayMethod` is returned.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance name. The name must be 2 to 128 characters in length and can contain Unicode letters (including English and Chinese characters) and digits. It can also contain colons (:), underscores (_), periods (.), and hyphens (-). The default value is the `InstanceId` of the instance.
   * 
   * When creating multiple ECS instances, you can set sequential instance names in batch. The name can contain brackets ([]) and commas (,). For more information, see [Set sequential instance names or hostnames in batch](https://help.aliyun.com/document_detail/196048.html).
   * 
   * @example
   * k8s-node-[1,4]-alibabacloud
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type. If you do not specify `LaunchTemplateId` or `LaunchTemplateName` to identify a launch template, InstanceType is required.
   * 
   * - To select an instance type: see [Instance families](https://help.aliyun.com/document_detail/25378.html) or invoke [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query the performance data of a target instance type. You can also see [Select instance types](https://help.aliyun.com/document_detail/58291.html) for guidance on how to choose an instance type.
   * - To check inventory: invoke [DescribeAvailableResource](https://help.aliyun.com/document_detail/66186.html) to query resource availability in a specified region or zone.
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
   * > In **pay-by-traffic** mode, the peak inbound and outbound bandwidth values are upper limits and are not guaranteed. When resource contention occurs, the peak bandwidth may be limited. If your workloads require guaranteed bandwidth, use **pay-by-bandwidth** mode.
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
   * Specifies whether the instance is an I/O optimized instance. The default value for [retired instance types](https://help.aliyun.com/document_detail/55263.html) is none. The default value for all other instance types is optimized. Valid values:
   * 
   * - none: not I/O optimized.
   * - optimized: I/O optimized.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * One or more IPv6 addresses assigned to the primary ENI. You can specify up to 10 IPv6 addresses. The valid values of N range from 1 to 10.
   * 
   * Example: `Ipv6Address.1=2001:db8:1234:1a00::***`.
   * 
   * Note:
   * 
   * - If `Ipv6Address.N` is set, `Amount` can only be set to 1, and you cannot set `Ipv6AddressCount` at the same time.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot set `Ipv6Addresses.N` or `Ipv6AddressCount`. Set `NetworkInterface.N.Ipv6Addresses.N` or `NetworkInterface.N.Ipv6AddressCount` instead.
   * 
   * @example
   * Ipv6Address.1=2001:db8:1234:1a00::***
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The number of randomly generated IPv6 addresses to assign to the primary ENI. Valid values: 1 to 10.
   *          
   * Note the following:
   * 
   * - You cannot specify both `Ipv6Address.N` and `Ipv6AddressCount`.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot set `Ipv6Address.N` or `Ipv6AddressCount`. Use `NetworkInterface.N.Ipv6Address.N` or `NetworkInterface.N.Ipv6AddressCount` instead.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * > This parameter is currently in invitational preview and is not available for use.
   * 
   * @example
   * null
   */
  isp?: string;
  /**
   * @remarks
   * The name of the SSH key pair.
   * > This parameter is ignored for Windows instances and is empty by default. Even if this parameter is specified, only the `Password` content is used.
   * 
   * @example
   * KeyPair_Name
   */
  keyPairName?: string;
  /**
   * @remarks
   * The ID of the launch template. For more information, call [DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html).
   * 
   * When creating an instance from a launch template, you must specify `LaunchTemplateId` or `LaunchTemplateName` to identify the template.
   * 
   * @example
   * lt-bp1apo0bbbkuy0rj****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The name of the launch template.
   * 
   * When creating an instance from a launch template, you must specify `LaunchTemplateId` or `LaunchTemplateName` to identify the template.
   * 
   * @example
   * LaunchTemplate_Name
   */
  launchTemplateName?: string;
  /**
   * @remarks
   * The version of the launch template. If you specify `LaunchTemplateId` or `LaunchTemplateName` without specifying a version number, the default version is used.
   * 
   * @example
   * 3
   */
  launchTemplateVersion?: number;
  /**
   * @remarks
   * The unique identifier of the platform-managed host, such as mh-f2d3647ca21****.
   * 
   * @example
   * mh-f2d3647ca21****
   */
  managedHostId?: string;
  /**
   * @remarks
   * The minimum number of ECS instances to purchase. Valid values: 1 to 100.
   * 
   * The number of instances successfully created depends on the values of Amount and MinAmount:
   * 
   * - If MinAmount is not specified: instances are created according to the Amount value. If inventory is insufficient, the API returns a creation failure and no instances are created.
   * 
   * - If MinAmount is specified:
   *   - If the available ECS inventory < MinAmount: no instances are created and the API returns a creation failure.
   *   - If MinAmount ≤ available ECS inventory < Amount: instances are created based on the available inventory and the API returns a creation success.
   *   - If the available ECS inventory ≥ Amount: instances are created according to the specified Amount and the API returns a creation success.
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
   * The number of queues for the primary ENI. Note the following:
   * 
   * - The value cannot exceed the maximum number of queues per ENI allowed by the instance type.
   * 
   * - The total number of queues across all ENIs on the instance cannot exceed the total queue quota for the instance type. To query the maximum number of queues per ENI and the total queue quota for an instance type, call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) and check the `MaximumQueueNumberPerEni` and `TotalEniQueueQuantity` fields.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot set `NetworkInterfaceQueueNumber`. Use `NetworkInterface.N.QueueNumber` instead.
   * 
   * @example
   * 8
   */
  networkInterfaceQueueNumber?: number;
  /**
   * @remarks
   * The network-related parameters.
   */
  networkOptions?: RunInstancesRequestNetworkOptions;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The logon password of the instance. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported:
   * 
   * ```
   * ()`~!@#$%^&*-_+=|{}[]:;\\"<>,.?/
   * ```
   * 
   * For Windows instances, the password cannot start with a forward slash (/).
   * 
   * > If you specify `Password`, use HTTPS to send the request to prevent password leakage.
   * 
   * @example
   * EcsV587!
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the password preset in the image. Valid values:
   * 
   * - true: uses the preset password.
   * - false: does not use the preset password.
   * 
   * Default value: false.
   * 
   * > When you use this parameter, the Password parameter must be empty, and the image you use must have a password configured.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The subscription period of the resource. The unit is specified by `PeriodUnit`. This parameter takes effect and is required only when `InstanceChargeType` is set to `PrePaid`. If `DedicatedHostId` is specified, the value cannot exceed the subscription period of the dedicated host. Valid values:
   * 
   * <props="china">
   * - When PeriodUnit=Week: 1, 2, 3, 4.
   * - When PeriodUnit=Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
   * 
   * 
   * 
   * <props="intl">When PeriodUnit=Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription billing period. Valid values:
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
   * The private DNS name configuration for the instance.
   * 
   * 
   * For information about private Private domain resolution, see [ECS private Private domain resolution](https://help.aliyun.com/document_detail/2844797.html).
   */
  privateDnsNameOptions?: RunInstancesRequestPrivateDnsNameOptions;
  /**
   * @remarks
   * The private IP address of the instance. When setting a private IP address for a VPC-type ECS instance, you must select an available IP address from the CIDR block of the vSwitch (VSwitchId).
   * 
   * Note the following:
   * 
   * - After you set PrivateIpAddress:
   *     - If Amount is set to 1, a private IP address is assigned to the created ECS instance.
   *     - If Amount is set to a value greater than 1, the specified private IP address is used as the starting address, and consecutive private IP addresses are assigned to multiple ECS instances in sequence. In this case, secondary ENIs cannot be attached to the instances (that is, NetworkInterface.N.* parameters are not supported).
   * 
   * - If NetworkInterface.N.InstanceType is set to Primary, you cannot set PrivateIpAddress. Set NetworkInterface.N.PrimaryIpAddress instead.
   * 
   * >The first IP address and the last three IP addresses of each vSwitch are reserved by the system and cannot be specified.
   * For example, if the CIDR block of a vSwitch is 192.168.1.0/24, the addresses 192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255 are reserved.
   * 
   * @example
   * ``10.1.**.**``
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The name of the instance RAM role. You can call the RAM API [ListRoles](https://help.aliyun.com/document_detail/28713.html) to query the instance RAM roles you have created.
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
   * - Active: enables security hardening. This value applies only to public images.
   * - Deactive: disables security hardening. This value applies to all image types.
   * 
   * @example
   * Active
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group to which the new instance belongs. Instances in the same security group can communicate with each other. The maximum number of instances a security group can contain depends on the security group type. For more information, see the security group section in [Limits](~~25412#SecurityGroupQuota~~).
   * 
   * > The network type of the instance is determined by `SecurityGroupId`. For example, if the security group uses a VPC network, the instance is also VPC-type, and you must also specify `VSwitchId`.
   * 
   * If you do not specify `LaunchTemplateId` or `LaunchTemplateName` to identify a launch template, the security group ID is required. Note the following:
   * 
   * - You can specify one security group using `SecurityGroupId`, or one or more security groups using `SecurityGroupIds.N`. You cannot specify both `SecurityGroupId` and `SecurityGroupIds.N` at the same time.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, do not set `SecurityGroupId` or `SecurityGroupIds.N`. Use `NetworkInterface.N.SecurityGroupId` or `NetworkInterface.N.SecurityGroupIds.N` instead.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Adds the instance to multiple security groups at the same time. The valid values of N depend on the maximum number of security groups to which an instance can belong. For more information, see [Security group limits](https://help.aliyun.com/document_detail/101348.html).
   * 
   * Note:
   * 
   * - You cannot specify both `SecurityGroupId` and `SecurityGroupIds.N` at the same time.
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot set `SecurityGroupId` or `SecurityGroupIds.N`. Set `NetworkInterface.N.SecurityGroupId` or `NetworkInterface.N.SecurityGroupIds.N` instead.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The retention period of the spot instance. Unit: hours. Valid values:
   * - 1: Alibaba Cloud guarantees that the instance runs for 1 hour after creation without being automatically released. After 1 hour, the system compares the bid price against the market price and checks resource inventory in real time to determine whether to retain or revoke the instance.
   * - 0: Alibaba Cloud does not guarantee the runtime of the instance after creation. The system compares the bid price against the market price and checks resource inventory in real time to determine whether to retain or revoke the instance.
   * 
   * Default value: 1.
   * >
   * > - This parameter currently supports only the values 0 and 1.
   * > - Spot instances are billed by the second. Choose a retention period based on the expected execution duration of your task.
   * > - Alibaba Cloud sends a notification through an ECS system event 5 minutes before the instance is reclaimed.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The interruption mode for spot instances. Valid values:
   * 
   * - Terminate: releases the instance immediately.
   * - Stop: puts the instance into economical mode.
   * 
   *   For more information about economical mode, see [Economical mode for pay-as-you-go instances](https://help.aliyun.com/document_detail/63353.html).
   * 
   * Default value: Terminate.
   * 
   * @example
   * Terminate
   */
  spotInterruptionBehavior?: string;
  /**
   * @remarks
   * The maximum hourly price for the instance. This parameter supports up to three decimal places and takes effect when `SpotStrategy` is set to `SpotWithPriceLimit`.
   * 
   * @example
   * 0.97
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The bidding strategy for pay-as-you-go instances. This parameter takes effect when `InstanceChargeType` is set to `PostPaid`. Valid values:
   * 
   * - NoSpot: regular pay-as-you-go instance.
   * - SpotWithPriceLimit: spot instance with a maximum price.
   * - SpotAsPriceGo: spot instance where the system automatically bids at the current market price.
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
   * The maximum number of partitions in the storage set. The value must be greater than or equal to 1.
   * 
   * @example
   * 2
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The tags of the instance, disk, and primary ENI.
   */
  tag?: RunInstancesRequestTag[];
  /**
   * @remarks
   * Specifies whether to create the instance on a dedicated host. Valid values:
   * 
   * - default: creates a non-dedicated-host instance.
   * 
   * - host: creates a dedicated host instance. If you do not specify `DedicatedHostId`, Alibaba Cloud automatically selects a dedicated host for the instance.
   * 
   * Default value: default.
   * 
   * @example
   * default
   */
  tenancy?: string;
  /**
   * @remarks
   * Specifies whether to automatically append a sequential suffix to `HostName` and `InstanceName` when creating multiple instances. The sequential suffix starts from 001 and cannot exceed 999. Valid values:
   * - true: appends the suffix.
   * - false: does not append the suffix.
   * 
   * Default value: false.
   * 
   * If `HostName` or `InstanceName` is set in a specified sort format without a name suffix (`name_suffix`), that is, the naming format is `name_prefix[begin_number,bits]`, UniqueSuffix does not take effect and names are sorted only in the specified order.
   * 
   * For more information, see [Set sequential instance names or hostnames in batch](https://help.aliyun.com/document_detail/196048.html).
   * 
   * @example
   * true
   */
  uniqueSuffix?: boolean;
  /**
   * @remarks
   * The custom data of the instance. The data must be Base64-encoded, and the size of the data before Base64 encoding cannot exceed 32 KB.
   * 
   * For information about the limits, formats, and execution frequency of instance user data, see [Instance user data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * > To protect the security of UserData during transmission, avoid passing sensitive data such as passwords and private keys in plaintext. If you need to pass such information, encrypt it first and then Base64-encode it. Decrypt the data inside the instance to ensure security.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the vSwitch. If you are creating a VPC-type ECS instance, you must specify a vSwitch ID. The security group and vSwitch must belong to the same VPC. You can call [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) to query information about existing vSwitches.
   * 
   * Note the following:
   * 
   * - If you specify `VSwitchId`, the `ZoneId` you specify must match the zone where the vSwitch resides. You can also omit `ZoneId`, and the system automatically selects the zone where the specified vSwitch resides.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, do not set `VSwitchId`. Use `NetworkInterface.N.VSwitchId` instead.
   * 
   * @example
   * vsw-bp1s5fnvk4gn2tws0****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone where the instance resides. You can call [DescribeZones](https://help.aliyun.com/document_detail/25610.html) to query the list of zones.
   * 
   * > If you specify `VSwitchId`, the `ZoneId` you specify must match the zone where the vSwitch resides. You can also omit `ZoneId`, and the system automatically selects the zone where the specified vSwitch resides.
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
      managedHostId: 'ManagedHostId',
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
      managedHostId: 'string',
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

