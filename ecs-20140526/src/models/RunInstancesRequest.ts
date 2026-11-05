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
   * **[Deprecated]** This parameter is deprecated.
   * 
   * @example
   * 1
   */
  numa?: string;
  /**
   * @remarks
   * The number of CPU threads. The number of vCPUs of the ECS instance is calculated by using the following formula: Number of vCPUs = Value of CpuOptions.Core × Value of CpuOptions.ThreadsPerCore.
   * 
   * - CpuOptions.ThreadsPerCore=1 indicates that CPU hyper-threading is disabled.
   * 
   * - Only specific instance types support the configuration of the number of CPU threads.
   * 
   * <props="china">Valid values and default value: For more information, see [Customize CPU options](https://help.aliyun.com/document_detail/145895.html).
   * 
   * @example
   * 2
   */
  threadsPerCore?: number;
  /**
   * @remarks
   * The CPU topology type of the instance. Valid values:
   * 
   * - ContinuousCoreToHTMapping: When ContinuousCoreToHTMapping is selected, the hyper-threads (HTs) of the same core in the CPU topology of the instance are continuous.
   * - DiscreteCoreToHTMapping: When DiscreteCoreToHTMapping is selected, the HTs of the same core in the instance are discrete.
   * 
   * Default value: None.
   * 
   * > Only specific instance types support this parameter. For more information about the supported instance types, see [View and modify the CPU topology](https://help.aliyun.com/document_detail/2636059.html).
   * 
   * @example
   * DiscreteCoreToHTMapping
   */
  topologyType?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not available.
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
   * > This parameter is in invitational preview and is not available.
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
   * The ID of the private pool, which is the ID of the elasticity assurance or capacity reservation service.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The private pool options for instance startup. After the elasticity assurance or capacity reservation service takes effect, private pool capacity is generated for you to select when you start the instance. Valid values:
   * 
   * - Open: Open mode. The system automatically matches open private pool capacity. If no eligible private pool capacity is available, the instance is started by using public pool resources. In this mode, you do not need to specify the PrivatePoolOptions.Id parameter.
   * - Target: Specified mode. The instance is started by using the specified private pool capacity. If the specified private pool capacity is unavailable, the instance fails to be started. In this mode, you must specify the private pool ID, which means the PrivatePoolOptions.Id parameter is required.
   * - None: Unused mode. The instance is started without using private pool capacity.
   * 
   * Default value: None.
   * 
   * In any of the following scenarios, the private pool options for instance startup can only be set to None or left unspecified:
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
   * The ID of the dedicated host cluster to which the ECS instance belongs. The system automatically selects a dedicated host from the specified dedicated host cluster to deploy the ECS instance.
   * 
   * > This parameter takes effect only when Tenancy is set to host.
   * 
   * If you specify both a dedicated host (DedicatedHostId) and a dedicated host cluster (SchedulerOptions.DedicatedHostClusterId):
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
   * The confidential computing mode. Valid value: Enclave.
   * 
   * When this parameter is set to Enclave, the ECS instance uses Enclave to build a confidential computing environment. Currently, only the c7, g7, and r7 instance types support specifying this parameter to use Enclave confidential computing when you call RunInstances. Details:
   * 
   * - The confidential computing feature is in invitational preview.
   * 
   * - To create an ECS instance with Enclave confidential computing by calling an API operation, you can only call RunInstances. CreateInstance does not support the SecurityOptions.ConfidentialComputingMode parameter.
   * 
   * - Enclave confidential computing relies on the trusted system (vTPM). When you specify that an ECS instance uses Enclave to build a confidential computing environment, the trusted system is also enabled for the instance. Therefore, when you call this operation, if you set SecurityOptions.ConfidentialComputingMode=Enclave, the created ECS instance will have both the Enclave confidential computing mode and the trusted system enabled, regardless of whether you set SecurityOptions.TrustedSystemMode=vTPM.
   * 
   * For more information about confidential computing, see [Use Enclave to build a confidential computing environment](https://help.aliyun.com/document_detail/203433.html).
   * 
   * @example
   * Enclave
   */
  confidentialComputingMode?: string;
  /**
   * @remarks
   * The trusted system mode. Valid value: vTPM.
   * 
   * Currently, the trusted system mode supports the following instance types:
   * - g7, c7, and r7.
   * - security-enhanced instance families (g7t, c7t, and r7t).
   * 
   * When you create an ECS instance of one of the preceding instance types, you must configure this parameter. Details:
   * 
   * - If you use the Alibaba Cloud trusted system, set this parameter to vTPM. This allows the Alibaba Cloud trusted system to perform trusted verification when the instance starts.
   * - If you do not use the Alibaba Cloud trusted system, you can leave this parameter unspecified. However, note that if the ECS instance you create uses the Enclave confidential computing mode (SecurityOptions.ConfidentialComputingMode=Enclave), the trusted system is also enabled for the instance.
   * - To create a trusted ECS instance by calling an API operation, you can only call RunInstances. CreateInstance does not support the SecurityOptions.TrustedSystemMode parameter.
   * > If you specify an instance as a trusted instance when you create it, you can only use images that support the trusted system when you replace the system disk.
   * 
   * For more information about the trusted system, see [Overview of the trusted feature for security-enhanced instance families](https://help.aliyun.com/document_detail/201394.html).
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
   * The system disk category. Valid values:
   * 
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: ESSD.
   * - cloud: basic disk.
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_essd_entry: ESSD Entry disk.
   * 
   * Default value descriptions:
   * 
   * - If InstanceType is a retired and non-I/O optimized instance type, the default value is `cloud`.
   * - In other cases, the default value is `cloud_efficiency`.<props="china">After January 30, 2026, for instance families that only support ESSD, the default value will be changed from cloud_efficiency to cloud_essd PL0. For more information, see [Announcement](https://www.aliyun.com/notice/117844).
   * 
   * > This parameter can be set to `cloud_essd_entry` only when `InstanceType` is set to [u1, universal instance family](https://help.aliyun.com/document_detail/457079.html) (`ecs.u1`) or [e, economy instance family](https://help.aliyun.com/document_detail/108489.html) (`ecs.e`).
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The system disk description. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * SystemDisk_Description
   */
  description?: string;
  /**
   * @remarks
   * The system disk name. The name must be 2 to 128 characters in length. It can contain letters (including English and Chinese letters) and digits in the Unicode letter category. It can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * cloud_ssdSystem
   */
  diskName?: string;
  /**
   * @remarks
   * When creating an ESSD as the system disk, set the performance level of the disk. Valid values:
   * 
   * - PL0: A single disk can deliver up to 10,000 random read/write IOPS.
   * - PL1 (default): A single disk can deliver up to 50,000 random read/write IOPS.
   * - PL2: A single disk can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For details on how to select an ESSD performance level, see [ESSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The system disk size. Unit: GiB. Valid values:
   * 
   * - Basic disk: 20 to 500.
   * - ESSD:
   *   - PL0: 1 to 2048.
   *   - PL1: 20 to 2048.
   *   - PL2: 461 to 2048.
   *   - PL3: 1261 to 2048.
   * - ESSD AutoPL disk: 1 to 2048.
   * - Other disk categories: 20 to 2048.
   * 
   * The value of this parameter must be greater than or equal to max{1, ImageSize}.
   * 
   * Default value: max{40, the size of the image specified by the ImageId parameter}.
   * 
   * @example
   * 40
   */
  size?: string;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature. Valid values:
   * 
   * - true: Enables the feature.
   * - false: Disables the feature.
   * 
   * >This parameter is supported only when SystemDisk.Category is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * >This parameter is not available.
   * 
   * @example
   * null
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the system disk. Valid values:
   * 
   * - true: Encrypts the system disk.
   * 
   * - false: Does not encrypt the system disk.
   * 
   * Default value: false.
   * 
   * >You cannot encrypt the system disk when you create an instance in active Zone D of the China (Hong Kong) region or active Zone A of the Singapore region.
   * 
   * >Notice: When you use a shared encrypted image to create a cloud disk based on an encrypted snapshot, you must set the Encrypted request parameter of the cloud disk to true. This ensures that the created cloud disk uses the key of the shared image recipient.</notice>
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The ID of the KMS key used to encrypt the system disk.
   * 
   * > If Encrypted is set to true and KMSKeyId is not specified, the default key is used for encryption, and the KMSKeyId value is returned after the instance is created.
   * > - - If the cloud disk is created from a non-shared encrypted snapshot, the encryption key used by the snapshot is used by default.
   * > - - If the cloud disk is created from a shared encrypted snapshot, the service key is used by default.
   * > - - If the cloud disk is created in a region where account-level default encryption for Block Storage is enabled, the specified account-level key is used by default.
   * > - - In other cases, the service key is used by default.
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
   * >This parameter is supported only when SystemDisk.Category is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster. If you want to use cloud disk resources in a dedicated block storage cluster as the system disk when you create an ECS instance, specify this parameter.
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
   * >This parameter is not available.
   * 
   * @example
   * null
   */
  assumeRoleFor?: number;
  /**
   * @remarks
   * >This parameter is not available.
   * 
   * @example
   * null
   */
  roleType?: string;
  /**
   * @remarks
   * >This parameter is not available.
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
   * The Precision Time Protocol (PTP) status. Valid values:
   * 
   * - enabled: Enables PTP.
   * 
   * - disabled: Disables PTP.
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
   * Specifies whether to enable the performance burst feature. Valid values:
   * 
   * - true: Enables the feature.
   * - false: Disables the feature.
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
   * - cloud_essd: enterprise SSD.
   * - cloud: basic disk.
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_regional_disk_auto: regional enterprise SSD.
   * - cloud_essd_entry: ESSD Entry disk.
   *   >This parameter supports cloud_essd_entry only when InstanceType is set to an instance type in the ecs.u1 or ecs.e instance family.
   * - elastic_ephemeral_disk_standard: standard elastic ephemeral disk.
   * - elastic_ephemeral_disk_premium: elastic ephemeral disk - Premium Edition.
   * 
   * For I/O optimized instances, the default value is cloud_efficiency. For non-I/O optimized instances, the default value is cloud.
   * Default value description:
   * 
   * - If InstanceType is set to a retired and non-I/O optimized instance type, the default value is cloud.
   * - In other cases, the default value is cloud_efficiency. <props="china">After January 30, 2026, if the I/O optimized instance type does not support cloud_auto, the default value is cloud_efficiency. Otherwise, the default value is cloud_auto, and the performance burst feature is enabled by default (which incurs additional fees. For more information, see [Billing examples](~~368372#p_75k_2hp_7gp~~)). For more details, see [Announcement](https://www.aliyun.com/notice/117844).
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release the data disk when the instance is released. Valid values:
   * - true: Releases the data disk when the instance is released.
   * - false: Retains the data disk when the instance is released.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the data disk. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * DataDisk_Description
   */
  description?: string;
  /**
   * @remarks
   * The mount point of the data disk. The naming convention for mount points varies based on the number of attached data disks:
   * 
   * - 1 to 25 data disks: /dev/xvd[b-z]
   * 
   * - More than 25 data disks: /dev/xvd[aa-zz]. For example, the 26th data disk is named /dev/xvdaa, the 27th data disk is named /dev/xvdab, and so on.
   * 
   * > - This parameter is applicable only to full images (instance images). You can set this parameter to the mount point of the data disk in the full image, and modify the DataDisk.N.Size and DataDisk.N.Category parameters to change the category and size of the data disk in the full image.
   * > - When you use a full image to create an instance, the data disks in the full image are created as the first n data disks of the ECS instance.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The name of the data disk. The name must be 2 to 128 characters in length. It can contain letters and digits in the Unicode letter category. It can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * cloud_ssdData
   */
  diskName?: string;
  /**
   * @remarks
   * >This parameter is not available.
   * 
   * @example
   * null
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt data disk N. Valid values:
   * - true: Encrypts the data disk.
   * - false: Does not encrypt the data disk.
   * 
   * Default value: false.
   * 
   * 
   * >Notice: When you use a shared encrypted image to create a cloud disk based on an encrypted snapshot, you must set the Encrypted request parameter of the cloud disk to true. This ensures that the created cloud disk uses the key of the shared image recipient.</notice>
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The ID of the KMS key used to encrypt the data disk.
   * 
   * > If Encrypted is set to true and KMSKeyId is not specified, the default key is used for encryption, and the KMSKeyId value is returned after the instance is created.
   * > - - If the cloud disk is created from a non-shared encrypted snapshot, the encryption key used by the snapshot is used by default.
   * > - - If the cloud disk is created from a shared encrypted snapshot, the service key is used by default.
   * > - - If the cloud disk is created in a region where account-level default encryption for Block Storage is enabled, the specified account-level key is used by default.
   * > - - In other cases, the service key is used by default.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * Specifies the performance level of the ESSD used as a data disk. The value of N must be the same as the value of N in DataDisk.N.Category=cloud_essd. Valid values:
   * 
   * - PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * - PL1 (default): A single ESSD can deliver up to 50,000 random read/write IOPS.
   * - PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For more information about how to select the performance level of an ESSD, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
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
   * - cloud_essd: The valid values depend on the value of DataDisk.N.PerformanceLevel. 
   *     - PL0: 1 to 65,536.
   *     - PL1: 20 to 65,536.
   *     - PL2: 461 to 65,536.
   *     - PL3: 1261 to 65,536.
   * - cloud: 5 to 2000.
   * - cloud_auto: 1 to 65,536.
   * - cloud_essd_entry: 10 to 32768.
   * 
   * >The value of this parameter must be greater than or equal to the size of the snapshot specified by the SnapshotId parameter.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot used to create data disk N. Valid values of N: 1 to 16.
   * 
   * After you specify the DataDisk.N.SnapshotId parameter, the DataDisk.N.Size parameter is ignored. The actual size of the created cloud disk is the same as the size of the specified snapshot. You cannot use snapshots created on or before July 15, 2013. Otherwise, the request is rejected and an error is reported.
   * 
   * @example
   * s-bp17441ohwka0yuh****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster. If you want to use cloud disk resources in a dedicated block storage cluster as data disks when you create an ECS instance, specify this parameter.
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
   * Specifies whether the instance that uses the image supports logon as the ecs-user user. Valid values:
   * 
   * - true: Supports logon as the ecs-user user.
   * 
   * - false: Does not support logon as the ecs-user user.
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
   * - true: Does not retain the ENI.
   * 
   * - false: Retains the ENI.
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
   * Take note of the following items:
   * 
   * - The valid values of N cannot exceed the maximum number of network interface controllers (NICs) supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or invoke the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the maximum number of network interface controllers (NICs) supported by the instance type.
   * - The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * - If NetworkInterface.N.InstanceType is set to Primary, you do not need to specify this parameter.
   * 
   * @example
   * Network_Description
   */
  description?: string;
  /**
   * @remarks
   * The type of the ENI. The valid values of N cannot exceed the maximum number of network interface controllers (NICs) supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or invoke the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the maximum number of network interface controllers (NICs) supported by the instance type.
   * 
   * Valid values of the parameter:
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
   * Example: Ipv6Address.1=2001:db8:1234:1a00::***.
   * 
   * Take note of the following items:
   * 
   * - This parameter takes effect only when NetworkInterface.N.InstanceType is set to Primary. If NetworkInterface.N.InstanceType is set to Secondary or left empty, you cannot specify this parameter.
   * 
   * - After you specify this parameter, Amount can only be set to 1, and you cannot specify Ipv6AddressCount, Ipv6Address.N, or NetworkInterface.N.Ipv6AddressCount.
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The number of IPv6 addresses to be randomly generated for the primary ENI. Valid values: 1 to 10.
   * 
   * Take note of the following items:
   * 
   * - This parameter takes effect only when NetworkInterface.N.InstanceType is set to Primary. If NetworkInterface.N.InstanceType is set to Secondary or left empty, you cannot specify this parameter.
   * 
   * - After you specify this parameter, you cannot specify Ipv6AddressCount, Ipv6Address.N, or NetworkInterface.N.Ipv6Address.N.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The index of the network card specified for the ENI.
   * 
   * Take note of the following items:
   * - Only specific instance types support specifying the network card index.
   * - When NetworkInterface.N.InstanceType is set to Primary, if the instance type supports network cards and you specify this parameter, you can only set it to 0.
   * - When NetworkInterface.N.InstanceType is set to Secondary or left empty, if the instance type supports network cards, you can specify this parameter based on the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * 0
   */
  networkCardIndex?: number;
  /**
   * @remarks
   * The ID of the ENI attached to the instance.
   * 
   * After you specify this parameter, Amount can only be set to 1.
   * 
   * >This parameter takes effect only for secondary ENIs. After you specify an existing secondary ENI, you cannot configure other ENI creation parameters.
   * 
   * @example
   * eni-bp1gn106np8jhxhj****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The name of the ENI. The name must be 2 to 128 characters in length. It can contain letters and digits in the Unicode letter category. It can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * Take note of the following items:
   * 
   * - The valid values of N cannot exceed the maximum number of network interface controllers (NICs) supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or invoke the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the maximum number of network interface controllers (NICs) supported by the instance type.
   * 
   * - If NetworkInterface.N.InstanceType is set to Primary, you do not need to specify this parameter.
   * 
   * @example
   * Network_Name
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The communication mode of the network interface controller (NIC). Valid values of the parameter:
   * 
   * - Standard: Uses the TCP communication mode.
   * - HighPerformance: Enables the Elastic RDMA Interface (ERI) and uses the RDMA communication mode.
   * 
   * Default value: Standard.
   * 
   * >The number of Elastic Network Interfaces (ENIs) in RDMA mode cannot exceed the limit of the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * Standard
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * Adds an ENI and specifies a primary IP address.
   * 
   * Take note of the following items:
   * 
   * - The valid values of N cannot exceed the maximum number of network interface controllers (NICs) supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or invoke the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the maximum number of network interface controllers (NICs) supported by the instance type.
   *     - When you configure one ENI, you can configure one primary ENI or one secondary ENI. If the Amount parameter is set to a value greater than 1, and you configure a primary ENI and specify this parameter, consecutive primary IP addresses are allocated to multiple ECS instances starting from the specified primary IP address when you create instances in batches. Note that you cannot attach secondary ENIs to instances in this case.
   *     - Note that if the Amount parameter is set to a value greater than 1 and you specify this parameter for the primary ENI, you cannot configure secondary ENIs. This means you cannot set NetworkInterface.2.InstanceType to Secondary.
   * 
   * - If NetworkInterface.N.InstanceType is set to Primary, this parameter serves the same purpose as PrivateIpAddress, but you cannot specify both PrivateIpAddress and this parameter.
   * 
   * - If NetworkInterface.N.InstanceType is set to Secondary or left empty, this parameter specifies the primary IP address for the secondary ENI. By default, an IP address is randomly selected from the vSwitch CIDR block of the vSwitch to which the ENI belongs.
   * 
   * >- The first and last three IP addresses of each vSwitch are system reserved IP addresses and cannot be specified.
   * For example, if the vSwitch CIDR block is 192.168.1.0/24, the following four IP addresses are system reserved IP addresses: 192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255.
   * 
   * @example
   * ``172.16.**.**``
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * The number of ENI queues.
   * 
   * Take note of the following items:
   * 
   * - The valid values of N cannot exceed the maximum number of network interface controllers (NICs) supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or invoke the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the maximum number of network interface controllers (NICs) supported by the instance type.
   * 
   * - The value cannot exceed the maximum number of queues per ENI allowed by the instance type.
   * 
   * - The total number of queues for all ENIs of the instance cannot exceed the total queue quota allowed by the instance type. You can invoke the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation and query the MaximumQueueNumberPerEni and TotalEniQueueQuantity fields to obtain the maximum number of queues per ENI and the total queue quota for the instance type.
   * 
   * - If NetworkInterface.N.InstanceType is set to Primary and you specify this parameter, you cannot specify the NetworkInterfaceQueueNumber parameter.
   * 
   * @example
   * 8
   */
  queueNumber?: number;
  /**
   * @remarks
   * The number of RDMA ENI queues.
   * 
   * If you want to attach multiple RDMA ENIs to the instance, we recommend that you manually specify QueuePairNumber for each ENI based on the maximum QueuePairNumber supported by the instance type and the planned number of ENIs. Make sure that the total QueuePairNumber of all ENIs does not exceed the maximum value allowed by the instance type. You can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the maximum value for the instance type.
   * 
   * >Notice: If QueuePairNumber is not specified for an RDMA ENI, the maximum QueuePairNumber supported by all RDMA ENIs for the instance type is used by default. Therefore, after you attach an RDMA ENI for which QueuePairNumber is not specified, you cannot attach more RDMA ENIs. Regular ENIs are not subject to this limit.</notice>
   * 
   * @example
   * 0
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The inbound queue depth of the ENI.
   * 
   * 
   * <props="china">
   * 
   * >This parameter is in invitational preview and is not available. If you want to use this parameter, [submit a ticket](https://selfservice.console.aliyun.com/ticket/createIndex) to apply for the whitelist.
   * 
   * 
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is in invitational preview and is not available. If you want to use this parameter, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl) to apply for the whitelist.
   * 
   * 
   * 
   * Take note of the following items when you use this parameter:
   * 
   * - This parameter is applicable only to seventh-generation and later ECS instance types.
   * 
   * - This parameter is applicable only to Linux images.
   * 
   * - A larger inbound queue depth can improve inbound throughput and reduce the packet loss rate, but it consumes more memory.
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The number of secondary private IPv4 addresses to be allocated to the ENI. Valid values: 1 to 49.
   * 
   * - The value cannot exceed the limit on the number of IP addresses for the instance type. For more information, see [Instance families](~~~25378~~).
   * - NetworkInterface.N.SecondaryPrivateIpAddressCount specifies the number of secondary private IPv4 addresses to be allocated to the ENI, excluding the primary private IP address of the ENI. The system randomly allocates the addresses from the active CIDR block of the vSwitch (NetworkInterface.N.VSwitchId) to which the ENI belongs.
   * 
   * @example
   * 10
   */
  secondaryPrivateIpAddressCount?: number;
  /**
   * @remarks
   * The ID of the security group to which the ENI belongs.
   * 
   * Take note of the following items:
   * 
   * - The valid values of N cannot exceed the maximum number of network interface controllers (NICs) supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or invoke the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the maximum number of network interface controllers (NICs) supported by the instance type.
   * 
   * - If NetworkInterface.N.InstanceType is set to Primary, you must specify this parameter. In this case, this parameter serves the same purpose as SecurityGroupId, but you cannot specify SecurityGroupId, SecurityGroupIds.N, or NetworkInterface.N.SecurityGroupIds.N.
   * 
   * - If NetworkInterface.N.InstanceType is set to Secondary or left empty, this parameter is optional. The default value is the security group to which the ECS instance belongs.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of one or more security groups to which the ENI belongs.
   * 
   * - The valid values of N cannot exceed the maximum number of network interface controllers (NICs) supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or invoke the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the maximum number of network interface controllers (NICs) supported by the instance type.
   * - The second N indicates that you can specify one or more security group IDs. The valid values of N depend on the quota of security groups to which the instance can be added. For more information, see [Security group limits](~~25412#SecurityGroupQuota1~~).
   * 
   * Take note of the following items:
   * 
   * - If NetworkInterface.N.InstanceType is set to Primary, you must specify this parameter or NetworkInterface.N.SecurityGroupId. In this case, this parameter serves the same purpose as SecurityGroupIds.N, but you cannot specify SecurityGroupId, SecurityGroupIds.N, or NetworkInterface.N.SecurityGroupId.
   * 
   * - If NetworkInterface.N.InstanceType is set to Secondary or left empty, this parameter is optional. The default value is the security group to which the ECS instance belongs.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable the source/destination checking feature. We recommend that you enable this feature to improve network security. Valid values:
   * 
   * - true: Enables the feature.
   * 
   * - false: Disables the feature.
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
   * The outbound queue depth of the ENI.
   * 
   * 
   * <props="china">
   * 
   * >This parameter is in invitational preview and is not available. If you want to use this parameter, [submit a ticket](https://selfservice.console.aliyun.com/ticket/createIndex) to apply for the whitelist.
   * 
   * 
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is in invitational preview and is not available. If you want to use this parameter, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl) to apply for the whitelist.
   * 
   * 
   * 
   * Take note of the following items when you use this parameter:
   * 
   * - This parameter is applicable only to seventh-generation and later ECS instance types.
   * 
   * - This parameter is applicable only to Linux images.
   * 
   * - A larger outbound queue depth can improve outbound throughput and reduce the packet loss rate, but it consumes more memory.
   * 
   * @example
   * 8192
   */
  txQueueSize?: number;
  /**
   * @remarks
   * The ID of the vSwitch to which the ENI belongs.
   * 
   * Take note of the following items:
   * 
   * - The valid values of N cannot exceed the maximum number of network interface controllers (NICs) supported by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or invoke the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the maximum number of network interface controllers (NICs) supported by the instance type.  
   * - If NetworkInterface.N.InstanceType is set to Primary, you must specify this parameter. In this case, this parameter serves the same purpose as VSwitchId, but you cannot specify both VSwitchId and this parameter.
   * 
   * - If NetworkInterface.N.InstanceType is set to Secondary or left empty, this parameter is optional. The default value is the vSwitch to which the ECS instance belongs.
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
   * The bandwidth weight of the instance. The valid values vary based on the instance type. You can call the DescribeInstanceTypes operation to query the valid values for a specific instance type. The BandwidthWeighting field in the response indicates the bandwidth weight levels supported by the instance type. You can use the name field in the response as the dictionary value, such as Vpc-L1 and Ebs-L1.
   * 
   * @example
   * Default
   */
  bandwidthWeighting?: string;
  /**
   * @remarks
   * Specifies whether to enable the Jumbo Frame feature for the instance. Valid values:
   * 
   * - false: Disables the Jumbo Frame feature. The maximum transmission unit (MTU) of all ENIs (including the primary ENI and secondary ENIs) of the instance is set to 1500.
   * 
   * - true: Enables the Jumbo Frame feature. The MTU of all ENIs (including the primary ENI and secondary ENIs) of the instance is set to 8500.
   * 
   * Default value: true.
   * 
   * >Only specific eighth-generation and later instance types support the Jumbo Frame feature. For more information, see [MTU of ECS instances](https://help.aliyun.com/document_detail/200512.html).
   * 
   * @example
   * false
   */
  enableJumboFrame?: boolean;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not available.
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
   * Specifies whether to enable or disable the resolution of instance ID-based domain names to IPv6 addresses. Valid values:
   * 
   * - true: Enables the resolution.
   * 
   * - false: Disables the resolution.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  enableInstanceIdDnsAAAARecord?: boolean;
  /**
   * @remarks
   * Specifies whether to enable or disable the resolution of instance ID-based domain names to IPv4 addresses. Valid values:
   * 
   * - true: Enables the resolution.
   * 
   * - false: Disables the resolution.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableInstanceIdDnsARecord?: boolean;
  /**
   * @remarks
   * Specifies whether to enable or disable the resolution of IP-based domain names to IPv4 addresses. Valid values:
   * 
   * - true: Enables the resolution.
   * - false: Disables the resolution.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  enableIpDnsARecord?: boolean;
  /**
   * @remarks
   * Specifies whether to enable or disable the reverse resolution of IPv4 addresses to IP-based domain names. Valid values:
   * 
   * - true: Enables the resolution.
   * - false: Disables the resolution.
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
   * - Custom: Custom hostname.
   * - IpBased: IP-based hostname.
   * - InstanceIdBased: Instance ID-based hostname.
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
   * The tag key of the instance, cloud disks, and primary ENI. Valid values of N: 1 to 20. If you specify this parameter, it cannot be an empty string. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance, cloud disks, and primary ENI. Valid values of N: 1 to 20. If you specify this parameter, it can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.
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
   * Specifies whether to associate the instance on a dedicated host with the dedicated host. Valid values:
   * - default: Does not associate the instance with the dedicated host. If an instance for which the economical mode is enabled is stopped and then started, and the available resources of the original dedicated host are insufficient, the instance is deployed on another dedicated host in the automatic deployment resource pool.
   * - host: Associates the instance with the dedicated host. If an instance for which the economical mode is enabled is stopped and then started, the instance is still deployed on the original dedicated host. If the available resources of the original dedicated host are insufficient, the instance fails to be restarted.
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
   * The number of successfully created ECS instances depends on the specified Amount and minAmount:
   * 
   * - When minAmount is not specified: Instances are created based on the Amount value. If the inventory is insufficient, the API returns a creation failure, and no instances are created.
   * 
   * - When minAmount is specified:
   *   - If the ECS inventory < minAmount: No ECS instances are created, and the API returns a creation failure.
   *   - If minAmount ≤ ECS inventory < Amount: Instances are created based on the inventory, and the API returns a creation success.
   *   - If the ECS inventory ≥ Amount: Instances are created based on the specified Amount, and the API returns a creation success.
   * 
   * Default value: 1.
   * 
   * @example
   * 3
   */
  amount?: number;
  /**
   * @remarks
   * >This parameter is not available.
   */
  arn?: RunInstancesRequestArn[];
  /**
   * @remarks
   * Specifies whether to automatically pay for the instance when you create it. Valid values:
   * 
   * - true: Automatically pays for the instance.
   * 
   *     > If you enable automatic payment, make sure that your payment method has sufficient balance. Otherwise, an abnormal order is generated and can only be canceled. If your payment method has insufficient balance, you can set AutoPay to false. In this case, an unpaid order is generated, and you can log on to the ECS console to complete the payment.
   * 
   * - false: Generates an order without deducting fees.
   * 
   *     > If InstanceChargeType is set to PostPaid, you cannot set AutoPay to false.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The automatic release time of the pay-as-you-go instance. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * - If the seconds (`ss`) value is not `00`, it is automatically set to the start of the current minute (`mm`).
   * 
   * - The shortest release time is half an hour after the current time.
   * 
   * - The longest release time cannot exceed three years from the current time.
   * 
   * @example
   * 2018-01-01T12:05:00Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter takes effect only when `InstanceChargeType` is set to `PrePaid`. Valid values:
   * 
   * - true: Enables auto-renewal.
   * - false: Disables auto-renewal.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period. Valid values: 
   *          
   * <props="china">
   * - When PeriodUnit is set to Week: 1, 2, and 3.
   * - When PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * 
   * 
   * <props="intl">When PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The clock attribute configurations of the instance.
   */
  clockOptions?: RunInstancesRequestClockOptions;
  /**
   * @remarks
   * The running mode of the burstable instance. Valid values:
   * 
   * - Standard: standard mode. For more information about the instance performance, see the "Standard mode" section in [What are burstable instances?](https://help.aliyun.com/document_detail/59977.html).
   * - Unlimited: unlimited mode. For more information about the instance performance, see the "Unlimited mode" section in [What are burstable instances?](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The data disk configurations.
   */
  dataDisk?: RunInstancesRequestDataDisk[];
  /**
   * @remarks
   * The dedicated host ID.
   * <props="china">You can call [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html) to query the dedicated host ID list.
   * 
   * <props="intl">You can call [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html) to query the dedicated host ID list.
   * 
   * >Notice: Dedicated hosts do not support the creation of spot instances. After you specify the `DedicatedHostId` parameter, the `SpotStrategy` and `SpotPriceLimit` settings in the request are automatically ignored.</notice>
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The release protection attribute of the instance. Specifies whether the instance can be released by using the console or by calling the [DeleteInstance](https://help.aliyun.com/document_detail/25507.html) operation. Valid values:
   * - true: Enables release protection for the instance.
   * - false: Disables release protection for the instance.
   * Default value: false.
   * > This attribute applies only to pay-as-you-go instances and restricts only manual release operations. It does not take effect on system release operations.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The group number of the instance in the deployment set. If the policy of the deployment set is AvailabilityGroup, you can use this parameter to specify the group number. Valid values: 1 to 7.
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
   * The instance description. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * Instance_Description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to pre-check this request. Valid values:
   * 
   * -  true: Sends a check request. No instances are created. Check items include whether required parameters are filled in, request format, business limits, and ECS inventory. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * -  false (default): Sends a regular request. Instances are created directly after the check succeeds.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The hostname of the instance. Limits:
   * 
   * - Periods (.) and hyphens (-) cannot be used as the first or last character and cannot be used consecutively.
   * - Windows instances: The hostname must be 2 to 15 characters in length. It cannot contain periods (.) or contain only digits. It can contain uppercase and lowercase letters, digits, and hyphens (-).
   * - Other instances (such as Linux instances):
   *     - The hostname must be 2 to 64 characters in length. It can contain multiple periods (.). The string between two consecutive periods is a segment, which can contain uppercase and lowercase letters, digits, and hyphens (-).
   *     - You can use the `${instance_id}` placeholder to write the instance ID into the `HostName` parameter. For example, if `HostName=k8s-${instance_id}` and the created ECS instance ID is `i-123abc****`, the hostname of the instance is `k8s-i-123abc****`.
   * 
   * When you create multiple ECS instances, you can:
   * 
   * - Batch configure sequential hostnames. For more information, see [Batch configure sequential names or hostnames for instances](https://help.aliyun.com/document_detail/196048.html).
   * - Use the `HostNames.N` parameter to set hostnames for multiple instances separately. Note that you cannot set both `HostName` and `HostNames.N`.
   * 
   * @example
   * k8s-node-[1,4]-ecshost
   */
  hostName?: string;
  /**
   * @remarks
   * Specifies different hostnames for each instance when you create multiple instances.
   * 
   * @example
   * ecs-host-01
   */
  hostNames?: string[];
  /**
   * @remarks
   * The ID of the HPC cluster to which the instance belongs. 
   * 
   * This parameter is required when you create an SCC instance. You can refer to [CreateHpcCluster](https://help.aliyun.com/document_detail/109138.html) to create an HPC cluster.
   * 
   * @example
   * hpc-bp67acfmxazb4p****
   */
  hpcClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the access channel for instance metadata. Valid values:
   * - enabled: Enables the access channel.
   * - disabled: Disables the access channel.
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
   * > This parameter is not available.
   * 
   * @example
   * 0
   */
  httpPutResponseHopLimit?: number;
  /**
   * @remarks
   * Specifies whether to forcibly use the hardened mode (IMDSv2) when you access instance metadata. Valid values:
   * - optional: Does not forcibly use the hardened mode.
   * - required: Forcibly uses the hardened mode. After you set this value, you cannot access instance metadata in normal mode.
   * 
   * Default value: optional.
   * > For more information about the modes for accessing instance metadata, see [Instance metadata access modes](https://help.aliyun.com/document_detail/150575.html).
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The image family name. Set this parameter to use the latest available image in the specified image family to create the instance.
   * 
   * The name must be 2 to 128 characters in length. It cannot start with a special character, digit, http://, or https://. It can contain periods (.), underscores (_), hyphens (-), and colons (:).
   * 
   * Take note of the following items:
   * 
   * - If `ImageId` is specified, you cannot set this parameter.
   * - If `ImageId` is not specified but `ImageId` is set in the launch template specified by `LaunchTemplateId` or `LaunchTemplateName`, you cannot set this parameter.
   * - If `ImageId` is not specified and `ImageId` is not set in the launch template specified by `LaunchTemplateId` or `LaunchTemplateName`, you can set this parameter.
   * - If neither `ImageId` nor `LaunchTemplateId` and `LaunchTemplateName` are specified, you can set this parameter.
   * > For information about the image families associated with Alibaba Cloud public images, see [Public image overview](https://help.aliyun.com/document_detail/108393.html).
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The image ID. The image used to start the instance. You can call [DescribeImages](https://help.aliyun.com/document_detail/25534.html) to query available images. If you do not specify `LaunchTemplateId` or `LaunchTemplateName` to determine a launch template, and do not specify `ImageFamily` to use the latest available image in an image family, `ImageId` is required.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200324.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The image attribute configurations.
   */
  imageOptions?: RunInstancesRequestImageOptions;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * -  PrePaid: subscription.
   * -  PostPaid: pay-as-you-go.
   * 
   * Default value: PostPaid.
   * 
   * <props="china">When you select subscription, you must ensure that your account supports balance payment or credit payment. Otherwise, an `InvalidPayMethod` error is returned.
   * 
   * <props="intl">When you select subscription, you must ensure that your account supports credit payment. Otherwise, an `InvalidPayMethod` error is returned.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance name. The name must be 2 to 128 characters in length. It can contain letters (including English and Chinese letters) and digits in the Unicode letter category. It can also contain colons (:), underscores (_), periods (.), and hyphens (-). Default value: the `InstanceId` of the instance.
   * 
   * When you create multiple ECS instances, you can batch configure sequential instance names, which can include brackets ([]) and commas (,). For more information, see [Batch configure sequential names or hostnames for instances](https://help.aliyun.com/document_detail/196048.html).
   * 
   * @example
   * k8s-node-[1,4]-alibabacloud
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type. If you do not specify `LaunchTemplateId` or `LaunchTemplateName` to determine a launch template, `InstanceType` is a required parameter.  
   * 
   * - Instance type selection: See [instance family](https://help.aliyun.com/document_detail/25378.html) or invoke [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to view the performance data of the target instance type. You can also see [Best practices for instance type selection](https://help.aliyun.com/document_detail/58291.html) to learn how to select an instance type.
   * - Inventory query: invoke [DescribeAvailableResource](https://help.aliyun.com/document_detail/66186.html) to check the resource availability in a specific region or zone.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The network billing method. Valid values:
   * 
   * - PayByBandwidth: pay-by-bandwidth.
   * - PayByTraffic: pay-by-traffic.
   * 
   * Default value: PayByTraffic.
   * 
   * > In the **pay-by-traffic** mode, the peak inbound and outbound bandwidths are upper limits and are not guaranteed service level indicators. When resource contention occurs, the peak bandwidths may be limited. If your business requires guaranteed bandwidth, use the **pay-by-bandwidth** mode.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s. Valid values:
   * 
   * - When the purchased outbound public bandwidth is less than or equal to 10 Mbit/s: 1 to 10. Default value: 10.
   * - When the purchased outbound public bandwidth is greater than 10 Mbit/s: 1 to the value of `InternetMaxBandwidthOut`. Default value: the value of `InternetMaxBandwidthOut`.
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
   * Specifies whether the instance is an I/O optimized instance. For [retired instance types](https://help.aliyun.com/document_detail/55263.html), the default value is none. For other instance types, the default value is optimized. Valid values:
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
   * Example: Ipv6Address.1=2001:db8:1234:1a00::***.
   * 
   * Take note of the following items:
   * 
   * - If you specify Ipv6Address.N, Amount can only be set to 1, and you cannot specify Ipv6AddressCount.
   * 
   * - If NetworkInterface.N.InstanceType is set to Primary, you cannot specify Ipv6Addresses.N or Ipv6AddressCount. Instead, you must specify NetworkInterface.N.Ipv6Addresses.N or NetworkInterface.N.Ipv6AddressCount.
   * 
   * @example
   * Ipv6Address.1=2001:db8:1234:1a00::***
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The number of IPv6 addresses to be randomly generated for the primary ENI. Valid values: 1 to 10.
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
   * > This parameter is in invitational preview and is not available.
   * 
   * @example
   * null
   */
  isp?: string;
  /**
   * @remarks
   * The key pair name.
   * > For Windows instances, this parameter is ignored. The default value is empty. Even if this parameter is specified, only the `Password` parameter takes effect.
   * 
   * @example
   * KeyPair_Name
   */
  keyPairName?: string;
  /**
   * @remarks
   * The launch template ID. For more information, call [DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html).
   * 
   * When you use a launch template to create an instance, you must specify `LaunchTemplateId` or `LaunchTemplateName` to determine the launch template.
   * 
   * @example
   * lt-bp1apo0bbbkuy0rj****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The launch template name.
   * 
   * When you use a launch template to create an instance, you must specify `LaunchTemplateId` or `LaunchTemplateName` to determine the launch template.
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
   * The unique identifier of the managed host, such as mh-f2d3647ca21****.
   * 
   * @example
   * mh-f2d3647ca21****
   */
  managedHostId?: string;
  /**
   * @remarks
   * The minimum quantity of ECS instances to purchase. Valid values: 1 to 100.
   * 
   * The number of successfully created ECS instances depends on the specified Amount and minAmount:
   * 
   * - When minAmount is not specified: Instances are created based on the Amount value. If the inventory is insufficient, the API returns a creation failure, and no instances are created.
   * 
   * - When minAmount is specified:
   *   - If the ECS inventory < minAmount: No ECS instances are created, and the API returns a creation failure.
   *   - If minAmount ≤ ECS inventory < Amount: Instances are created based on the inventory, and the API returns a creation success.
   *   - If the ECS inventory ≥ Amount: Instances are created based on the specified Amount, and the API returns a creation success.
   * 
   * @example
   * 2
   */
  minAmount?: number;
  /**
   * @remarks
   * The ENI information.
   */
  networkInterface?: RunInstancesRequestNetworkInterface[];
  /**
   * @remarks
   * The number of queues for the primary ENI. Note the following:
   * 
   * - The value cannot exceed the maximum number of queues per ENI allowed by the instance type.
   * 
   * - The total number of queues for all ENIs attached to the instance cannot exceed the total queue quota allowed by the instance type. To obtain the maximum number of queues per ENI and the total queue quota for the instance type, query the `MaximumQueueNumberPerEni` and `TotalEniQueueQuantity` fields by calling the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify `NetworkInterfaceQueueNumber`. You can specify only `NetworkInterface.N.QueueNumber`.
   * 
   * @example
   * 8
   */
  networkInterfaceQueueNumber?: number;
  /**
   * @remarks
   * The network attribute configurations.
   */
  networkOptions?: RunInstancesRequestNetworkOptions;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The instance password. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include:
   * 
   * ```
   * ()`~!@#$%^&*-_+=|{}[]:;\\"<>,.?/
   * ```
   * 
   * For Windows instances, the password cannot start with a forward slash (/).
   * 
   * > If you pass in the `Password` parameter, we recommend that you use HTTPS to send the request to prevent password leaks.
   * 
   * @example
   * EcsV587!
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the password preset in the image. Valid values:
   * 
   * - true: Uses the preset password.
   * - false: Does not use the preset password.
   * 
   * Default value: false.
   * 
   * > When you use this parameter, the Password parameter must be left empty. Make sure that the image you use has a password configured.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The subscription period of the resource. The unit is specified by `PeriodUnit`. This parameter takes effect and is required only when `InstanceChargeType` is set to `PrePaid`. If `DedicatedHostId` is specified, the subscription period cannot exceed the subscription period of the dedicated host. Valid values:
   * 
   * <props="china">
   * - When PeriodUnit is set to Week, valid values of Period are 1, 2, 3, and 4.
   * - When PeriodUnit is set to Month, valid values of Period are 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * 
   * 
   * <props="intl">When PeriodUnit is set to Month, valid values of Period are 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The time unit of the subscription billing method. Valid values: 
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
   * The private domain name configurations of the instance.
   * 
   * 
   * For more information about private private domain resolution, see [Private private domain resolution for ECS](https://help.aliyun.com/document_detail/2844797.html).
   */
  privateDnsNameOptions?: RunInstancesRequestPrivateDnsNameOptions;
  /**
   * @remarks
   * The private IP address of the instance. When you specify a private IP address for an ECS instance in a VPC, the IP address must be an available IP address within the CIDR block of the vSwitch specified by `VSwitchId`.
   * 
   * Note:
   * 
   * - After you specify `PrivateIpAddress`:
   *     - If `Amount` is set to 1, the specified private IP address is assigned to the created ECS instance.
   *     - If `Amount` is set to a value greater than 1, the specified private IP address is used as the starting IP address to assign consecutive private IP addresses to the ECS instances that you create in a batch. In this case, you cannot bind secondary ENIs to the instances. That is, you cannot specify parameters such as `NetworkInterface.N.*`.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify `PrivateIpAddress`. You can only specify `NetworkInterface.N.PrimaryIpAddress`.
   * 
   * > The first and last three IP addresses of each vSwitch are reserved by the system and cannot be specified.
   * For example, if the CIDR block of a vSwitch is 192.168.1.0/24, the following four IP addresses are reserved by the system: 192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255.
   * 
   * @example
   * ``10.1.**.**``
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The instance RAM role name. You can use the RAM API [ListRoles](https://help.aliyun.com/document_detail/28713.html) to query the instance RAM roles you have created.
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
   * - Active: Enables security hardening. This value takes effect only for public images.
   * - Deactive: Disables security hardening. This value takes effect for all image types.
   * 
   * @example
   * Active
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group to which the new instance belongs. Instances in the same security group can access each other. The maximum number of instances that a security group can contain depends on the security group type. For more information, see the "Security group limits" section in [Limits](~~25412#SecurityGroupQuota~~).
   * 
   * > `SecurityGroupId` determines the network type of the instance. For example, if the network type of the security group is VPC, the instance is of the VPC type, and you must also specify `VSwitchId`.
   * 
   * If you do not specify `LaunchTemplateId` or `LaunchTemplateName` to determine a launch template, the security group ID is required. Take note of the following items:
   * 
   * - You can set `SecurityGroupId` to specify one security group, or set `SecurityGroupIds.N` to specify one or more security groups. However, you cannot set both `SecurityGroupId` and `SecurityGroupIds.N`.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot set `SecurityGroupId` or `SecurityGroupIds.N`. You can only set `NetworkInterface.N.SecurityGroupId` or `NetworkInterface.N.SecurityGroupIds.N`.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Adds the instance to multiple security groups. The valid values of N depend on the quota of security groups to which the instance can be added. For more information, see [Security group limits](https://help.aliyun.com/document_detail/101348.html).
   * 
   * Take note of the following items:
   * 
   * - You cannot specify both SecurityGroupId and SecurityGroupIds.N.
   * - If NetworkInterface.N.InstanceType is set to Primary, you cannot specify SecurityGroupId or SecurityGroupIds.N. You can only specify NetworkInterface.N.SecurityGroupId or NetworkInterface.N.SecurityGroupIds.N.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The protection period of the spot instance. Unit: hours. Valid values:
   * - 1: After the spot instance is created, Alibaba Cloud guarantees that the spot instance will not be automatically released within 1 hour. After 1 hour, the system compares the bid price with the marketplace price and checks the resource inventory in real time to determine whether to retain or reclaim the spot instance.
   * - 0: After the spot instance is created, Alibaba Cloud does not guarantee the runtime duration of the spot instance. The system compares the bid price with the marketplace price and checks the resource inventory in real time to determine whether to retain or reclaim the spot instance.
   * 
   * Default value: 1.
   * > 
   * > - Currently, this parameter can only be set to 0 or 1.
   * > - Spot instances are billed by the second. We recommend that you select an appropriate protection period based on the execution duration of your specific task.
   * > - Alibaba Cloud sends a notification through an ECS system event 5 minutes before the spot instance is reclaimed.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The break mode for the spot instance. Valid values:
   * 
   * - Terminate: Releases the instance.
   * - Stop: Puts the instance into economical mode.
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
   * The maximum hourly price of the instance. It supports up to three decimal places. This parameter takes effect when `SpotStrategy` is set to `SpotWithPriceLimit`.
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
   * - SpotWithPriceLimit: spot instance with a maximum price.
   * - SpotAsPriceGo: spot instance for which the system automatically places bids based on the market price.
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
   * The maximum number of partitions in the storage set. Valid values: integers greater than or equal to 1.
   * 
   * @example
   * 2
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The tag information of the instance, cloud disks, and primary ENI.
   */
  tag?: RunInstancesRequestTag[];
  /**
   * @remarks
   * Specifies whether to create the instance on a dedicated host. Valid values:
   * - default: Creates a non-dedicated host instance.
   * - host: Creates an instance on a dedicated host. If you do not specify DedicatedHostId, Alibaba Cloud automatically selects a dedicated host to deploy the instance.
   * Default value: default.
   * 
   * @example
   * default
   */
  tenancy?: string;
  /**
   * @remarks
   * Specifies whether to automatically append sequential suffixes to `HostName` and `InstanceName` when you create multiple instances. The sequential suffix starts from 001 and increments up to 999. Valid values:
   * - true: Appends sequential suffixes.
   * - false: Does not append sequential suffixes.
   * 
   * Default value: false.
   * 
   * If `HostName` or `InstanceName` is set in a specified sorting format without the `name_suffix` naming suffix, meaning the naming format is `name_prefix[begin_number,bits]`, `UniqueSuffix` does not take effect, and the names are sorted only in the specified order.
   * 
   * For more information, see [Batch configure sequential names or hostnames for instances](https://help.aliyun.com/document_detail/196048.html).
   * 
   * @example
   * true
   */
  uniqueSuffix?: boolean;
  /**
   * @remarks
   * The user data of the instance. The data must be Base64-encoded. The size of the user data cannot exceed 32 KB before Base64 encoding.
   * 
   * For more information about the limits, format, and execution frequency of user data, see [Instance user data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * > To ensure the security of UserData during transmission, avoid transmitting sensitive data such as passwords and private keys in plaintext. If you need to transmit such information, encrypt it first, encode it in Base64, and then decrypt it inside the instance to ensure information security.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * The vSwitch ID. If you create a VPC-type ECS instance, you must specify a vSwitch ID. The security group and the vSwitch must belong to the same VPC. You can call [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) to query created vSwitches.
   * 
   * Take note of the following items:
   * 
   * - If you set `VSwitchId`, the `ZoneId` parameter must be set to the zone where the vSwitch resides. You can also leave `ZoneId` unspecified, and the system automatically selects the zone where the specified vSwitch resides.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot set `VSwitchId`. You can only set `NetworkInterface.N.VSwitchId`.
   * 
   * @example
   * vsw-bp1s5fnvk4gn2tws0****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the instance. You can call [DescribeZones](https://help.aliyun.com/document_detail/25610.html) to obtain the zone list.
   * 
   * > If you specify the `VSwitchId` parameter, the `ZoneId` parameter must be set to the zone where the vSwitch resides. You can also leave the `ZoneId` parameter unspecified, and the system automatically selects the zone where the specified vSwitch resides.
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

