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
   * The number of CPU threads. The number of vCPUs of the ECS instance = CpuOptions.Core value × CpuOptions.ThreadsPerCore value.
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
   * - ContinuousCoreToHTMapping: The hyper-threads of the same core in the CPU topology are continuous.
   * - DiscreteCoreToHTMapping: The hyper-threads of the same core in the CPU topology are discrete.
   * 
   * Default value: none.
   * 
   * > Only specific instance families support this parameter. For more information about the supported instance families, see [View and modify the CPU topology](https://help.aliyun.com/document_detail/2636059.html).
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
   * > This parameter is in invitational preview and is not available for public use.
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
   * The ID of the private pool. It is the ID of the elasticity assurance or capacity reservation service.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The private pool options for instance startup. After the elasticity assurance or capacity reservation service takes effect, private pool capacity is generated for selection during instance startup. Valid values:
   * 
   * - Open: open mode. The system automatically matches open private pool capacity. If no eligible private pool capacity is available, public pool resources are used for startup. In this mode, you do not need to set the PrivatePoolOptions.Id parameter.
   * - Target: target mode. The system uses the specified private pool capacity to start the instance. If the specified private pool capacity is unavailable, the instance fails to start. In this mode, you must specify the private pool ID, which means the PrivatePoolOptions.Id parameter is required.
   * - None: no private pool mode. The instance startup does not use private pool capacity.
   * 
   * Default value: None.
   * 
   * In any of the following scenarios, the private pool option for instance startup can only be set to None or left empty.
   * - Creating spot instances.
   * - Creating ECS instances on a dedicated host (DDH).
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
   * When you specify both a dedicated host (DedicatedHostId) and a dedicated host cluster (SchedulerOptions.DedicatedHostClusterId):
   * - If the dedicated host belongs to the dedicated host cluster, the ECS instance is preferentially deployed on the specified dedicated host.
   * - If the dedicated host does not belong to the dedicated host cluster, the ECS instance fails to be created.
   * 
   * <props="china">You can call [DescribeDedicatedHostClusters](https://help.aliyun.com/document_detail/184145.html) to query the list of dedicated host cluster IDs.
   * 
   * <props="intl">You can call [DescribeDedicatedHostClusters](https://help.aliyun.com/document_detail/184145.html) to query the list of dedicated host cluster IDs.
   * 
   * <props="partner">You can call [DescribeDedicatedHostClusters](https://help.aliyun.com/document_detail/184145.html) to query the list of dedicated host cluster IDs.
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
   * If this parameter is set to Enclave, the ECS instance uses Enclave to build a confidential computing environment. Only the c7, g7, and r7 instance families support Enclave confidential computing when you call `RunInstances`. Take note of the following items:
   * 
   * - The confidential computing feature is in invitational preview.
   * 
   * - To create an ECS instance with Enclave confidential computing by calling API operations, you can only call `RunInstances`. `CreateInstance` does not support the `SecurityOptions.ConfidentialComputingMode` parameter.
   * 
   * - Enclave confidential computing relies on the trusted system (vTPM). When you specify that an ECS instance uses Enclave to build a confidential computing environment, the trusted system is also enabled for the instance. Therefore, if you set `SecurityOptions.ConfidentialComputingMode` to Enclave when you call this operation, the created ECS instance enables both the Enclave confidential computing mode and the trusted system, regardless of whether you set `SecurityOptions.TrustedSystemMode` to vTPM.
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
   * Currently, the instance families that support the trusted system mode include:
   * - g7, c7, and r7.
   * - Security-enhanced instance families (g7t, c7t, and r7t).
   * 
   * When you create an ECS instance of the preceding instance families, you must configure this parameter. Details:
   * 
   * - If you use the Alibaba Cloud trusted system, set this parameter to vTPM. This allows the instance to complete trusted verification through the Alibaba Cloud trusted system during startup.
   * - If you do not use the Alibaba Cloud trusted system, you can leave this parameter empty. However, if the ECS instance uses the Enclave confidential computing mode (`SecurityOptions.ConfidentialComputingMode=Enclave`), the trusted system is also enabled for the instance.
   * - To create a trusted ECS instance by calling API operations, you can only call `RunInstances`. `CreateInstance` does not support the `SecurityOptions.TrustedSystemMode` parameter.
   * > If you specify an instance as a trusted instance during creation, you can only use images that support the trusted system when you replace the system disk.
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
   * The ID of the automatic snapshot policy applied to the system cloud disk.
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
   * - cloud_essd: enterprise SSD.
   * - cloud: basic disk.
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_essd_entry: ESSD Entry disk.
   * 
   * Default value:
   * 
   * - If the instance type specified by InstanceType is a retired and non-I/O optimized instance type, the default value is cloud.
   * - In other cases, the default value is cloud_efficiency. <props="china">After January 30, 2026, for instance types that only support cloud_essd, the default value will be changed from cloud_efficiency to cloud_essd PL0. For more details, see [Announcement](https://www.aliyun.com/notice/117844).
   * 
   * > This parameter can be set to cloud_essd_entry only when InstanceType is set to [u1, universal instance family](https://help.aliyun.com/document_detail/457079.html) (ecs.u1) or [e, economy instance family](https://help.aliyun.com/document_detail/108489.html) (ecs.e).
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The description of the system cloud disk. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * SystemDisk_Description
   */
  description?: string;
  /**
   * @remarks
   * The name of the system cloud disk. The name must be 2 to 128 characters in length. It can contain letters and digits in Unicode, and can include colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * cloud_ssdSystem
   */
  diskName?: string;
  /**
   * @remarks
   * The performance level of the enterprise SSD used as the system disk. Valid values:
   * 
   * - PL0: A single enterprise SSD can deliver up to 10,000 random read/write IOPS.
   * - PL1 (default): A single enterprise SSD can deliver up to 50,000 random read/write IOPS.
   * - PL2: A single enterprise SSD can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single enterprise SSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For more information about how to select an enterprise SSD performance level, see [Enterprise SSDs](https://help.aliyun.com/document_detail/122389.html).
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
   * Specifies whether to enable performance burst. Valid values:
   * 
   * - true: yes.
   * - false: no.
   * 
   * > This parameter is supported only when `SystemDisk.Category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * null
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
   * > You cannot encrypt the system disk when you create an instance in Zone D of the China (Hong Kong) region or Zone A of the Singapore region.
   * 
   * >Notice: When you use a shared encrypted image to create a disk based on an encrypted snapshot, you must set the Encrypted request parameter of the disk to true to ensure that the created disk uses the key of the user to whom the image is shared.</notice>
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The ID of the KMS key used for the system cloud disk.
   * 
   * > If Encrypted is set to true and KMSKeyId is not specified, the default key is used for encryption, and the KMSKeyId value is returned after the instance is created.
   * > - - If the cloud disk is created from a non-shared encrypted snapshot, the encryption key used for the snapshot is used by default.
   * > - - If the cloud disk is created from a shared encrypted snapshot, the service key is used by default.
   * > - - If the cloud disk is created in a region where account-level default encryption for EBS is enabled, the specified account-level key is used by default.
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
   * > This parameter is supported only when `SystemDisk.Category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster. If you want to use cloud disk resources in a dedicated block storage cluster as the system cloud disk when you create an ECS instance, specify this parameter.
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
   * > This parameter is not available.
   * 
   * @example
   * null
   */
  assumeRoleFor?: number;
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * null
   */
  roleType?: string;
  /**
   * @remarks
   * > This parameter is not available.
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
   * - enabled: PTP is enabled.
   * 
   * - disabled: PTP is disabled.
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
   * The ID of the automatic snapshot policy applied to the data cloud disk.
   * 
   * @example
   * sp-bp67acfmxazb4p****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable performance burst. Valid values:
   * - true: yes.
   * - false: no.
   * 
   * > This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
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
   *   > This parameter supports `cloud_essd_entry` only when the `InstanceType` is set to an instance type in the `ecs.u1` or `ecs.e` instance family.
   * - elastic_ephemeral_disk_standard: standard elastic ephemeral disk.
   * - elastic_ephemeral_disk_premium: elastic ephemeral disk - Premium Edition.
   * 
   * For I/O optimized instances, the default value is cloud_efficiency. For non-I/O optimized instances, the default value is cloud.
   * Default value descriptions:
   * 
   * - If InstanceType is set to a retired and non-I/O optimized instance type, the default value is `cloud`.
   * - In other cases, the default value is `cloud_efficiency`.<props="china">After January 30, 2026, if the I/O optimized instance type does not support cloud_auto, the default value is cloud_efficiency. Otherwise, the default value is cloud_auto, and performance burst is enabled by default (which incurs additional fees. For details, see [Billing examples](~~368372#p_75k_2hp_7gp~~)). For more information, see [Announcement on changes](https://www.aliyun.com/notice/117844).
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release the data cloud disk when the instance is released. Valid values:
   * - true: The data cloud disk is released when the instance is released.
   * - false: The data cloud disk is not released when the instance is released.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the data cloud disk. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * DataDisk_Description
   */
  description?: string;
  /**
   * @remarks
   * The mount point of the data cloud disk. The naming convention for mount points varies based on the number of mounted data cloud disks:
   * 
   * - 1 to 25 data cloud disks: /dev/xvd`[b-z]`
   * 
   * - More than 25 data cloud disks: /dev/xvd`[aa-zz]`. For example, the 26th data cloud disk is named /dev/xvdaa, the 27th data cloud disk is named /dev/xvdab, and so on.
   * 
   * > - This parameter is applicable only to full images. You can set this parameter to the mount point of the data cloud disk in the full image and modify the DataDisk.N.Size and DataDisk.N.Category parameters to change the category and size of the data cloud disk in the full image.
   * > - When you create an instance from a full image, the data cloud disks in the full image are created as the first N data cloud disks of the ECS instance.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The name of the data cloud disk. The name must be 2 to 128 characters in length and can contain letters and digits in Unicode. It can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * cloud_ssdData
   */
  diskName?: string;
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * null
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt data disk N. Valid values:
   * - true: encrypts the disk.
   * - false: does not encrypt the disk.
   * 
   * Default value: false.
   * 
   * 
   * >Notice: When you use a shared encrypted image to create a disk based on an encrypted snapshot, you must set the Encrypted request parameter of the disk to true to ensure that the created disk uses the key of the user to whom the image is shared.</notice>
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key used for the data cloud disk.
   * 
   * > If Encrypted is set to true and KMSKeyId is not specified, the default key is used for encryption, and the KMSKeyId value is returned after the instance is created.
   * > - - If the cloud disk is created from a non-shared encrypted snapshot, the encryption key used for the snapshot is used by default.
   * > - - If the cloud disk is created from a shared encrypted snapshot, the service key is used by default.
   * > - - If the cloud disk is created in a region where account-level default encryption for Elastic Block Storage (EBS) is enabled, the specified account-level key is used by default.
   * > - - In other cases, the service key is used by default.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * When you create an ESSD as a data disk, specify the performance level of the disk. The value of N must be the same as the value of N in `DataDisk.N.Category=cloud_essd`. Valid values:
   * 
   * - PL0: A single disk can deliver up to 10,000 random read/write IOPS.
   * - PL1 (default): A single disk can deliver up to 50,000 random read/write IOPS.
   * - PL2: A single disk can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single disk can deliver up to 1,000,000 random read/write IOPS.
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
   * > This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of data cloud disk N. Valid values of N: 1 to 16. Unit: GiB. Valid values:
   * 
   * - cloud_efficiency: 20 to 32768.
   * - cloud_ssd: 20 to 32768.
   * - cloud_essd: The valid values vary based on the value of `DataDisk.N.PerformanceLevel`. 
   *     - PL0: 1 to 65,536.
   *     - PL1: 20 to 65,536.
   *     - PL2: 461 to 65,536.
   *     - PL3: 1261 to 65,536.
   * - cloud: 5 to 2000.
   * - cloud_auto: 1 to 65,536.
   * - cloud_essd_entry: 10 to 32768.
   * 
   * > The value of this parameter must be greater than or equal to the size of the snapshot specified by the SnapshotId parameter.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot used to create data cloud disk N. Valid values of N: 1 to 16.
   * 
   * If the `DataDisk.N.SnapshotId` parameter is specified, the `DataDisk.N.Size` parameter is ignored, and the size of the created cloud disk is the same as the size of the specified snapshot. You cannot use snapshots created on or before July 15, 2013. Otherwise, the request is rejected with an error.
   * 
   * @example
   * s-bp17441ohwka0yuh****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster. If you want to use cloud disk resources in a dedicated block storage cluster as data cloud disks when you create an ECS instance, specify this parameter.
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
   * - true: Yes.
   * 
   * - false: No.
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
   * > This parameter takes effect only for secondary ENIs.
   * 
   * @example
   * true
   */
  deleteOnRelease?: boolean;
  /**
   * @remarks
   * The description of the Elastic Network Interface (ENI).
   * 
   * Take note of the following items:
   * 
   * - The value of N cannot exceed the maximum number of network interface controllers (NICs) supported by the instance type. For more information about the number of network interface controllers (NICs) supported by an instance type, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the number of network interface controllers (NICs) supported by the target instance type.
   * - The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you do not need to specify this parameter.
   * 
   * @example
   * Network_Description
   */
  description?: string;
  /**
   * @remarks
   * The type of the Elastic Network Interface (ENI). The value of N cannot exceed the maximum number of network interface controllers (NICs) supported by the instance type. For more information about the number of network interface controllers (NICs) supported by an instance type, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the number of network interface controllers (NICs) supported by the target instance type.
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
   * Note:
   * 
   * - This parameter takes effect only when `NetworkInterface.N.InstanceType` is set to `Primary`. If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, you cannot specify this parameter.
   * 
   * - After you specify this parameter, the value of `Amount` can only be 1, and you cannot specify `Ipv6AddressCount`, `Ipv6Address.N`, or `NetworkInterface.N.Ipv6AddressCount`.
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * Specifies the number of randomly generated IPv6 addresses for the primary ENI. Valid values: 1 to 10.
   * 
   * Note:
   * 
   * - This parameter takes effect only when `NetworkInterface.N.InstanceType` is set to `Primary`. If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, you cannot specify this parameter.
   * 
   * - After you specify this parameter, you cannot specify `Ipv6AddressCount`, `Ipv6Address.N`, or `NetworkInterface.N.Ipv6Address.N`.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The index of the physical network card to which the network interface controller (NIC) is bound.
   * 
   * Take note of the following items:
   * - Only specific instance types support specifying the physical network card index.
   * - When NetworkInterface.N.InstanceType is set to Primary, if the instance type supports physical network cards and you specify this parameter, it can only be set to 0.
   * - When NetworkInterface.N.InstanceType is set to Secondary or left empty, if the instance type supports physical network cards, this parameter can be configured based on the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * 0
   */
  networkCardIndex?: number;
  /**
   * @remarks
   * The ID of the Elastic Network Interface (ENI) to be attached to the instance.
   * 
   * After this parameter is specified, `Amount` can only be set to 1.
   * 
   * > This parameter takes effect only for secondary ENIs. After you specify an existing secondary ENI, you cannot configure other ENI creation parameters.
   * 
   * @example
   * eni-bp1gn106np8jhxhj****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The name of the Elastic Network Interface (ENI). The name must be 2 to 128 characters in length and can contain letters and digits in the Unicode Letter categorization. It can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * Take note of the following items:
   * 
   * - The value of N cannot exceed the maximum number of network interface controllers (NICs) supported by the instance type. For more information about the number of network interface controllers (NICs) supported by an instance type, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the number of network interface controllers (NICs) supported by the target instance type.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you do not need to specify this parameter.
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
   * > The number of Elastic Network Interfaces (ENIs) in RDMA mode cannot exceed the limit of the instance family. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * Standard
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * Adds an Elastic Network Interface (ENI) and specifies its primary IP address.
   * 
   * Take note of the following items:
   * 
   * - The value of N cannot exceed the maximum number of network interface controllers (NICs) supported by the instance type. For more information about the number of network interface controllers (NICs) supported by an instance type, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the number of network interface controllers (NICs) supported by the target instance type.
   *     - When you configure one network interface controller (NIC), you can configure one primary network interface controller (NIC) or one secondary ENI. If the `Amount` parameter is set to a value greater than 1, and a primary network interface controller (NIC) is configured along with this parameter, it indicates that when multiple ECS instances are created in a batch, consecutive primary IP addresses are allocated to the ECS instances starting from the specified primary IP address. Note that in this case, you cannot attach secondary ENIs to target instances.
   *     - Note that if the `Amount` parameter is set to a value greater than 1 and this parameter is configured for the primary network interface controller (NIC), you cannot configure secondary ENIs (that is, you cannot set `NetworkInterface.2.InstanceType=Secondary`).
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, this parameter functions the same as `PrivateIpAddress`. Note that you cannot configure both this parameter and the `PrivateIpAddress` parameter at the same time.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, this parameter specifies the primary IP address for the secondary ENI. By default, an IP address is randomly selected from the vSwitch CIDR block of the vSwitch to which the network interface controller (NIC) belongs.
   * 
   * >- The first and the last three IP addresses of each vSwitch are system reserved IP addresses and cannot be specified.
   * For example, if the vSwitch CIDR block is 192.168.1.0/24, the IP addresses 192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255 are system reserved IP addresses.
   * 
   * @example
   * ``172.16.**.**``
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * The number of queues for the Elastic Network Interface (ENI).
   * 
   * Take note of the following items:
   * 
   * - The value of N cannot exceed the maximum number of network interface controllers (NICs) supported by the instance type. For more information about the number of network interface controllers (NICs) supported by an instance type, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the number of network interface controllers (NICs) supported by the target instance type.
   * 
   * - The value cannot exceed the maximum number of queues per network interface controller (NIC) allowed by the target instance type.
   * 
   * - The total number of queues for all network interface controllers (NICs) of the target instance cannot exceed the total queue quota allowed by the target instance type. You can query the `MaximumQueueNumberPerEni` and `TotalEniQueueQuantity` fields by calling the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to obtain the maximum number of queues per network interface controller (NIC) and the total queue quota for the target instance type.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary` and this parameter is specified, you cannot specify the `NetworkInterfaceQueueNumber` parameter.
   * 
   * @example
   * 8
   */
  queueNumber?: number;
  /**
   * @remarks
   * The number of queue pairs for the RDMA ENI.
   * 
   * If you want to attach multiple RDMA ENIs to the instance, we recommend that you manually specify the `QueuePairNumber` for each ENI based on the maximum `QueuePairNumber` supported by the instance type and the number of ENIs you plan to use. Make sure that the total number of queue pairs for all ENIs does not exceed the maximum value allowed by the instance type. You can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the maximum value for the instance type.
   * 
   * >Notice: If `QueuePairNumber` is not specified for an RDMA ENI, the maximum `QueuePairNumber` supported by the instance type for all RDMA ENIs is used by default. Therefore, after you attach an RDMA ENI for which `QueuePairNumber` is not specified, you cannot attach more RDMA ENIs (regular ENIs are not subject to this limit).</notice>
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
   * >This parameter is in invitational preview and is not yet available. If you need to use it, [submit a ticket](https://selfservice.console.aliyun.com/ticket/createIndex) to apply for whitelist access.
   * 
   * 
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is in invitational preview and is not yet available. If you need to use it, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl) to apply for whitelist access.
   * 
   * 
   * 
   * When you use this parameter, take note of the following items:
   * 
   * - It applies only to ECS instance types of Generation 7 and later.
   * 
   * - It currently applies only to Linux images.
   * 
   * - A larger inbound queue depth can improve inbound throughput and reduce the packet loss rate, but it consumes more memory.
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The number of secondary private IPv4 addresses to allocate to the network interface controller (NIC). Valid values: 1 to 49.
   * 
   * - The value cannot exceed the limit on the number of IP addresses for the instance type. For more information, see [Instance families](~~~25378~~).
   * - `NetworkInterface.N.SecondaryPrivateIpAddressCount` specifies the number of secondary private IPv4 addresses to allocate to the network interface controller (NIC) (excluding the primary private IP address of the network interface controller (NIC)). The system randomly allocates these addresses from the active CIDR block of the vSwitch (`NetworkInterface.N.VSwitchId`) to which the network interface controller (NIC) belongs.
   * 
   * @example
   * 10
   */
  secondaryPrivateIpAddressCount?: number;
  /**
   * @remarks
   * The ID of the security group to which the Elastic Network Interface (ENI) belongs.
   * 
   * Take note of the following items:
   * 
   * - The value of N cannot exceed the maximum number of network interface controllers (NICs) supported by the instance type. For more information about the number of network interface controllers (NICs) supported by an instance type, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the number of network interface controllers (NICs) supported by the target instance type.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you must specify this parameter. In this case, this parameter functions the same as `SecurityGroupId`. Note that you cannot specify `SecurityGroupId`, `SecurityGroupIds.N`, or `NetworkInterface.N.SecurityGroupIds.N` at the same time.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, this parameter is optional. The default value is the security group to which the ECS instance belongs.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of one or more security groups to which the Elastic Network Interface (ENI) belongs.
   * 
   * - The value of N cannot exceed the maximum number of network interface controllers (NICs) supported by the instance type. For more information about the number of network interface controllers (NICs) supported by an instance type, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the number of network interface controllers (NICs) supported by the target instance type.
   * - The second N indicates that you can specify one or more security group IDs. The valid values of N depend on the quota of security groups that the instance can join. For more information, see [Security group limits](~~25412#SecurityGroupQuota1~~).
   * 
   * Take note of the following items:
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you must specify this parameter or `NetworkInterface.N.SecurityGroupId`. In this case, this parameter functions the same as `SecurityGroupIds.N`. Note that you cannot specify `SecurityGroupId`, `SecurityGroupIds.N`, or `NetworkInterface.N.SecurityGroupId` at the same time.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, this parameter is optional. The default value is the security group to which the ECS instance belongs.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable the source/destination checking feature. We recommend that you enable this feature to improve network security. Valid values:
   * 
   * - true: Yes.
   * 
   * - false: No.
   * 
   * Default value: false.
   * 
   * > This feature is supported only in specific regions. Before you use this feature, read [Source/destination checking](https://help.aliyun.com/document_detail/2863210.html) carefully.
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
   * >This parameter is in invitational preview and is not yet available. If you need to use it, [submit a ticket](https://selfservice.console.aliyun.com/ticket/createIndex) to apply for whitelist access.
   * 
   * 
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is in invitational preview and is not yet available. If you need to use it, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl) to apply for whitelist access.
   * 
   * 
   * 
   * When you use this parameter, take note of the following items:
   * 
   * - It applies only to ECS instance types of Generation 7 and later.
   * 
   * - It currently applies only to Linux images.
   * 
   * - A larger outbound queue depth can improve outbound throughput and reduce the packet loss rate, but it consumes more memory.
   * 
   * @example
   * 8192
   */
  txQueueSize?: number;
  /**
   * @remarks
   * The ID of the vSwitch to which the Elastic Network Interface (ENI) belongs.
   * 
   * Take note of the following items:
   * 
   * - The value of N cannot exceed the maximum number of network interface controllers (NICs) supported by the instance type. For more information about the number of network interface controllers (NICs) supported by an instance type, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the number of network interface controllers (NICs) supported by the target instance type.  
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you must specify this parameter. In this case, this parameter functions the same as `VSwitchId`. Note that you cannot specify both this parameter and the `VSwitchId` parameter at the same time.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, this parameter is optional. The default value is the vSwitch to which the ECS instance belongs.
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
   * The bandwidth weight of the instance. The valid values vary based on the instance type. You can call the DescribeInstanceTypes operation to query the valid values for a specific instance type. The BandwidthWeighting field in the response indicates the bandwidth weight levels supported by the instance type. You can use the name field in the response as the dictionary value, such as Vpc-L1 or Ebs-L1.
   * 
   * @example
   * Default
   */
  bandwidthWeighting?: string;
  /**
   * @remarks
   * Specifies whether to enable the jumbo frame feature for the instance. Valid values:
   * 
   * - false: The jumbo frame feature is disabled. The maximum transmission unit (MTU) of all ENIs (including the primary ENI and secondary ENIs) under the instance is set to 1500.
   * 
   * - true: The jumbo frame feature is enabled. The MTU of all ENIs (including the primary ENI and secondary ENIs) under the instance is set to 8500.
   * 
   * Default value: true.
   * 
   * > The jumbo frame feature is supported only by specific eighth-generation and later instance types. For more information, see [MTU of ECS instances](https://help.aliyun.com/document_detail/200512.html).
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
   * - true: Enabled.
   * 
   * - false: Disabled.
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
   * - true: Enabled.
   * 
   * - false: Disabled.
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
   * - true: Enabled.
   * - false: Disabled.
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
   * - true: Enabled.
   * - false: Disabled.
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
   * The tag key of the instance, cloud disks, and primary ENI. Valid values of N: 1 to 20. The tag key cannot be an empty string. It can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance, cloud disks, and primary ENI. Valid values of N: 1 to 20. The tag value can be an empty string. It can be up to 128 characters in length and cannot contain http:// or https://.
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
   * - default: The instance is not associated with the dedicated host. If an instance in economical mode is stopped and then started, and the available resources on the original dedicated host are insufficient, the instance is placed on another dedicated host in the automatic deployment resource pool.
   * 
   * - host: The instance is associated with the dedicated host. If an instance in economical mode is stopped and then started, it is still placed on the original dedicated host. If the available resources on the original dedicated host are insufficient, the instance fails to restart.
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
   * - If minAmount is not specified: The system creates instances based on the Amount value. If the inventory is insufficient, the API returns a creation failure, and no instances are created.
   * 
   * - If minAmount is specified:
   *   - If the ECS inventory is less than minAmount: No ECS instances are created, and the API returns a creation failure.
   *   - If minAmount is less than or equal to the ECS inventory and the ECS inventory is less than Amount: Instances are created based on the inventory, and the API returns a creation success.
   *   - If the ECS inventory is greater than or equal to Amount: Instances are created based on the specified Amount, and the API returns a creation success.
   * 
   * Default value: 1.
   * 
   * @example
   * 3
   */
  amount?: number;
  /**
   * @remarks
   * > This parameter is not available.
   */
  arn?: RunInstancesRequestArn[];
  /**
   * @remarks
   * Specifies whether to automatically pay for the instance when you create it. Valid values:
   * 
   * - true: Automatic payment is enabled.
   * 
   *     > If you enable automatic payment, make sure that your payment method has sufficient balance. Otherwise, an abnormal order is generated and can only be canceled. If your payment method has insufficient balance, you can set the `AutoPay` parameter to false. In this case, an unpaid order is generated, and you can log on to the ECS console to pay for the order.
   * 
   * - false: Only an order is generated, and no fee is deducted.
   * 
   *     > If `InstanceChargeType` is set to `PostPaid`, you cannot set `AutoPay` to false.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The automatic release time of the pay-as-you-go instance. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * - If the seconds (ss) value is not 00, the release time is automatically rounded down to the current minute (mm).
   * 
   * - The earliest release time is half an hour after the current time.
   * 
   * - The latest release time cannot be more than three years after the current time.
   * [ISO 8601](https://help.aliyun.com/document_detail/25696.html)
   * 
   * @example
   * 2018-01-01T12:05:00Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter takes effect only when the InstanceChargeType parameter is set to PrePaid. Valid values:
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
   * The auto-renewal duration. Valid values: 
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The clock attribute parameters of the instance.
   */
  clockOptions?: RunInstancesRequestClockOptions;
  /**
   * @remarks
   * The performance mode of the burstable instance. Valid values:
   * 
   * - Standard: standard mode. For more information about the instance performance, see the "Standard mode" section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * - Unlimited: unlimited mode. For more information about the instance performance, see the "Unlimited mode" section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The list of data cloud disk information.
   */
  dataDisk?: RunInstancesRequestDataDisk[];
  /**
   * @remarks
   * The ID of the dedicated host.
   * <props="china">You can call [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html) to query the list of dedicated host IDs.
   * 
   * <props="intl">You can call [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html) to query the list of dedicated host IDs.
   * 
   * >Notice: Dedicated hosts do not support the creation of spot instances. After you specify the DedicatedHostId parameter, the SpotStrategy and SpotPriceLimit settings in the request are automatically ignored.</notice>
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The release protection attribute of the instance. It specifies whether the instance can be released through the console or API ([DeleteInstance](https://help.aliyun.com/document_detail/25507.html)). Valid values: 
   * 
   * - true: Enables release protection for the instance.
   * - false: Disables release protection for the instance.
   * 
   * Default value: false.
   * 
   * > This attribute applies only to pay-as-you-go instances and restricts only manual release operations. It does not take effect on system release operations.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The group number of the instance in the deployment set. You can specify this parameter if the deployment set uses the high availability group strategy (AvailabilityGroup). Valid values: 1 to 7.
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
   * The instance description. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * Instance_Description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to pre-check the request. Valid values:
   * 
   * -  true: Sends a check request. No instances are created. The system checks whether required parameters are specified, the request format, service limits, and ECS inventory. If the check fails, the corresponding error is returned. If the check succeeds, the DryRunOperation error code is returned.
   * -  false (default): Sends a normal request. Instances are created directly after the check succeeds.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The hostname of the instance. Limits:
   * 
   * - The hostname cannot start or end with a period (.) or a hyphen (-), and cannot contain consecutive periods (.) or hyphens (-).
   * - For Windows instances: The hostname must be 2 to 15 characters in length. It cannot contain periods (.) and cannot contain only digits. It can contain uppercase and lowercase letters, digits, and hyphens (-).
   * - For other operating systems such as Linux:
   *     - The hostname must be 2 to 64 characters in length. It can contain multiple periods (.). The string between two consecutive periods is a segment, which can contain uppercase and lowercase letters, digits, and hyphens (-).
   *     - You can use the ${instance_id} placeholder to write the instance ID into the HostName parameter. For example, if HostName is set to k8s-${instance_id} and the created ECS instance ID is i-123abc****, the hostname of the instance is k8s-i-123abc****.
   * 
   * When you create multiple ECS instances, you can:
   * 
   * - Specify sequential hostnames in batches. For more information, see [Specify sequential instance names or hostnames](https://help.aliyun.com/document_detail/196048.html).
   * - Use the HostNames.N parameter to specify hostnames for multiple instances separately. Note that you cannot specify both HostName and HostNames.N at the same time.
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
   * This parameter is required when you create an SCC instance. You can call the [CreateHpcCluster](https://help.aliyun.com/document_detail/109138.html) operation to create an HPC cluster.
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
   * Specifies whether to forcibly use the security hardening mode (IMDSv2) when accessing instance metadata. Valid values:
   * - optional: Does not forcibly use the security hardening mode.
   * - required: Forcibly uses the security hardening mode. After this value is set, instance metadata cannot be accessed in normal mode.
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
   * The name of the image family. You can set this parameter to use the latest available image in the specified image family to create the instance.
   * 
   * The name must be 2 to 128 characters in length. It cannot start with a special character, digit, http://, or https://. It can contain only the following special characters: periods (.), underscores (_), hyphens (-), and colons (:).
   * 
   * Take note of the following items:
   * 
   * - If ImageId is specified, you cannot specify this parameter.
   * - If ImageId is not specified but the launch template specified by LaunchTemplateId or LaunchTemplateName has ImageId configured, you cannot specify this parameter.
   * - If ImageId is not specified and the launch template specified by LaunchTemplateId or LaunchTemplateName does not have ImageId configured, you can specify this parameter.
   * - If neither ImageId nor LaunchTemplateId and LaunchTemplateName are specified, you can specify this parameter.
   * > For information about the image families associated with Alibaba Cloud official images, see [Public images](https://help.aliyun.com/document_detail/108393.html).
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The image ID. This parameter specifies the image resource used to start the instance. You can call the [DescribeImages](https://help.aliyun.com/document_detail/25534.html) operation to query available image resources. If you do not specify LaunchTemplateId or LaunchTemplateName to determine a launch template, and you do not specify ImageFamily to use the latest available image in an image family, ImageId is required.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200324.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The image attribute information.
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
   * <props="china">If you select subscription, you must ensure that your account supports balance payment or credit payment. Otherwise, an InvalidPayMethod error is returned.
   * 
   * <props="intl">If you select subscription, you must ensure that your account supports credit payment. Otherwise, an InvalidPayMethod error is returned.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance name. The name must be 2 to 128 characters in length. It can contain letters and digits in Unicode, and can include colons (:), underscores (_), periods (.), and hyphens (-). The default value is the InstanceId of the instance.
   * 
   * When you create multiple ECS instances, you can specify sequential instance names in batches. The names can contain square brackets ([]) and commas (,). For more information, see [Specify sequential instance names or hostnames](https://help.aliyun.com/document_detail/196048.html).
   * 
   * @example
   * k8s-node-[1,4]-alibabacloud
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type. If you do not specify LaunchTemplateId or LaunchTemplateName to determine a launch template, InstanceType is a required parameter.  
   * 
   * - Instance type selection: For more information about the performance data of the target instance type, see [instance family](https://help.aliyun.com/document_detail/25378.html) or call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html). For more information about how to select an instance type, see [Best practices for instance type selection](https://help.aliyun.com/document_detail/58291.html).
   * - Inventory query: Call [DescribeAvailableResource](https://help.aliyun.com/document_detail/66186.html) to view the active resources in a specified region or zone.
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
   * > In **pay-by-traffic** mode, the peak inbound and outbound bandwidths are upper limits and are not guaranteed service level indicators. During resource contention, the peak bandwidths may be limited. If your business requires guaranteed bandwidth, use the **pay-by-bandwidth** mode.
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
   * - If the purchased outbound public bandwidth is greater than 10 Mbit/s: 1 to the value of InternetMaxBandwidthOut. Default value: the value of InternetMaxBandwidthOut.
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
   * Specifies whether the instance is an I/O optimized instance. The default value is none for [retired instance types](https://help.aliyun.com/document_detail/55263.html) and optimized for other instance types. Valid values:
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
   * Note:
   * 
   * - If you specify `Ipv6Address.N`, the value of the `Amount` parameter can only be 1, and you cannot specify `Ipv6AddressCount` at the same time.
   * 
   * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify `Ipv6Addresses.N` or `Ipv6AddressCount`. Instead, you must specify `NetworkInterface.N.Ipv6Addresses.N` or `NetworkInterface.N.Ipv6AddressCount`.
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
   * - You cannot specify both Ipv6Address.N and Ipv6AddressCount.
   * 
   * - If NetworkInterface.N.InstanceType is set to Primary, you cannot specify Ipv6Address.N or Ipv6AddressCount. You can only specify NetworkInterface.N.Ipv6Address.N or NetworkInterface.N.Ipv6AddressCount.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not available for public use.
   * 
   * @example
   * null
   */
  isp?: string;
  /**
   * @remarks
   * The name of the key pair.
   * >For Windows instances, this parameter is ignored. The default value is empty. Even if this parameter is specified, only the Password parameter takes effect.
   * 
   * @example
   * KeyPair_Name
   */
  keyPairName?: string;
  /**
   * @remarks
   * The ID of the launch template. For more information, call the [DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html) operation.
   * 
   * When you use a launch template to create an instance, you must specify LaunchTemplateId or LaunchTemplateName to determine the launch template.
   * 
   * @example
   * lt-bp1apo0bbbkuy0rj****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The name of the launch template.
   * 
   * When you use a launch template to create an instance, you must specify LaunchTemplateId or LaunchTemplateName to determine the launch template.
   * 
   * @example
   * LaunchTemplate_Name
   */
  launchTemplateName?: string;
  /**
   * @remarks
   * The version of the launch template. If you specify LaunchTemplateId or LaunchTemplateName but do not specify the launch template version, the default version is used.
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
   * The minimum quantity of ECS instances to create. Valid values: 1 to 100.
   * 
   * The number of created ECS instances depends on the specified Amount and MinAmount values:
   * 
   * - If MinAmount is not specified: Instances are created based on the Amount value. If the inventory is insufficient, the API returns a creation failure, and no instances are created.
   * 
   * - If MinAmount is specified:
   *   - If the ECS inventory is less than MinAmount: No ECS instances are created, and the API returns a creation failure.
   *   - If MinAmount is less than or equal to the ECS inventory and the ECS inventory is less than Amount: Instances are created based on the inventory, and the API returns a creation success.
   *   - If the ECS inventory is greater than or equal to Amount: Instances are created based on the specified Amount value, and the API returns a creation success.
   * 
   * @example
   * 2
   */
  minAmount?: number;
  /**
   * @remarks
   * The elastic network interface (ENI) information.
   */
  networkInterface?: RunInstancesRequestNetworkInterface[];
  /**
   * @remarks
   * The number of queues for the primary ENI. Take note of the following items:
   * 
   * - The value cannot exceed the maximum number of queues per ENI allowed by the instance type.
   * 
   * - The total number of queues for all ENIs of the instance cannot exceed the total queue quota allowed by the instance type. You can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the MaximumQueueNumberPerEni and TotalEniQueueQuantity fields for the maximum number of queues per ENI and the total quota of the instance type.
   * 
   * - If NetworkInterface.N.InstanceType is set to Primary, you cannot set NetworkInterfaceQueueNumber. You can only set NetworkInterface.N.QueueNumber.
   * 
   * @example
   * 8
   */
  networkInterfaceQueueNumber?: number;
  /**
   * @remarks
   * The network attribute parameters.
   */
  networkOptions?: RunInstancesRequestNetworkOptions;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The instance password. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The special characters can be:
   * 
   * ```
   * ()`~!@#$%^&*-_+=|{}[]:;\\"<>,.?/
   * ```
   * 
   * For Windows instances, the password cannot start with a forward slash (/).
   * 
   * > If you specify the Password parameter, send the request over HTTPS to prevent password leaks.
   * 
   * @example
   * EcsV587!
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the preset password of the image. Valid values:
   * 
   * - true: Uses the preset password.
   * - false: Does not use the preset password.
   * 
   * Default value: false.
   * 
   * > If you specify this parameter, the Password parameter must be left empty. Make sure that the image you use has a preset password.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The subscription duration of the resource. The unit is specified by PeriodUnit. This parameter takes effect and is required only when the InstanceChargeType parameter is set to PrePaid. If DedicatedHostId is specified, the subscription duration cannot exceed the subscription duration of the dedicated host. Valid values:
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
   * The time unit for the subscription billing method. Valid values: 
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
   * The private domain name configuration information of the instance.
   * 
   * 
   * For more information about private private domain resolution, see [Private private domain resolution for ECS](https://help.aliyun.com/document_detail/2844797.html).
   */
  privateDnsNameOptions?: RunInstancesRequestPrivateDnsNameOptions;
  /**
   * @remarks
   * The private IP address of the instance. When you specify system reserved IP address for a VPC-type ECS instance, the IP address must be selected from the idle CIDR block of the vSwitch (VSwitchId).
   * 
   * Take note of the following items:
   * 
   * - After PrivateIpAddress is specified:
   *     - If the Amount parameter is set to 1, system reserved IP address is assigned to the single ECS instance created.
   *     - If the Amount parameter is greater than 1, consecutive private IP addresses starting from the specified private IP address are assigned to the multiple ECS instances created in batches. Note that in this case, you cannot bind secondary ENIs to the instances (that is, you cannot specify parameters such as NetworkInterface.N.*).
   * 
   * -  If NetworkInterface.N.InstanceType is set to Primary, you cannot specify PrivateIpAddress. You can only specify NetworkInterface.N.PrimaryIpAddress.
   * 
   * >The first and the last three IP addresses of each vSwitch are reserved by the system and cannot be specified.
   * For example, if the CIDR block of the vSwitch is 192.168.1.0/24, the four IP addresses 192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255 are reserved by the system.
   * 
   * @example
   * ``10.1.**.**``
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The name of the instance RAM role. You can use the RAM API operation [ListRoles](https://help.aliyun.com/document_detail/28713.html) to query the instance RAM roles that you have created.
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
   * The ID of the security group to which the new instance belongs. Instances in the same security group can communicate with each other. The maximum number of instances that a security group can contain depends on the security group type. For more information, see the "Security group limits" section in [Limits](~~25412#SecurityGroupQuota~~).
   * 
   * > SecurityGroupId determines the network type of the instance. For example, if the network type of the specified security group is VPC, the instance is a VPC-type instance, and you must also specify the VSwitchId parameter.
   * 
   * If you do not specify LaunchTemplateId or LaunchTemplateName to determine a launch template, the security group ID is required. Take note of the following items:
   * 
   * - You can specify one security group by using SecurityGroupId, or specify one or more security groups by using SecurityGroupIds.N. However, you cannot specify both SecurityGroupId and SecurityGroupIds.N at the same time.
   * 
   * - If NetworkInterface.N.InstanceType is set to Primary, you cannot specify SecurityGroupId or SecurityGroupIds.N. You can only specify NetworkInterface.N.SecurityGroupId or NetworkInterface.N.SecurityGroupIds.N.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Adds the instance to multiple security groups at the same time. The valid values of N depend on the quota of security groups that the instance can join. For more information, see [Security group limits](https://help.aliyun.com/document_detail/101348.html).
   * 
   * Note:
   * 
   * - You cannot specify both SecurityGroupId and SecurityGroupIds.N at the same time.
   * - If NetworkInterface.N.InstanceType is set to Primary, you cannot specify SecurityGroupId or SecurityGroupIds.N. You can only specify NetworkInterface.N.SecurityGroupId or NetworkInterface.N.SecurityGroupIds.N.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The protection period of the spot instance. Unit: hours. Valid values:
   * - 1: Alibaba Cloud guarantees that the instance runs for 1 hour after creation and is not automatically released. After 1 hour, the system compares the bid price with the marketplace price and checks the resource inventory in real time to determine whether to retain or release the instance.
   * - 0: Alibaba Cloud does not guarantee the runtime of the instance after creation. The system compares the bid price with the marketplace price and checks the resource inventory in real time to determine whether to retain or release the instance.
   * 
   * Default value: 1.
   * > 
   * > - This parameter can only be set to 0 or 1.
   * > - Spot instances are billed by the second. We recommend that you select an appropriate protection period based on the execution duration of your specific task.
   * > - Alibaba Cloud sends you a notification through an ECS system event 5 minutes before the instance is released.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The break mode of the spot instance. Valid values:
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
   * The maximum hourly price of the instance. The value can have up to three decimal places. This parameter takes effect only when the SpotStrategy parameter is set to SpotWithPriceLimit.
   * 
   * @example
   * 0.97
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The bidding policy for the pay-as-you-go instance. This parameter takes effect only when the InstanceChargeType parameter is set to PostPaid. Valid values:
   * 
   * - NoSpot: regular pay-as-you-go instance.
   * - SpotWithPriceLimit: spot instance with a maximum price limit.
   * - SpotAsPriceGo: spot instance for which the system automatically places bids based on the current market price.
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
   * 
   * - default: Creates the instance on a non-dedicated host.
   * 
   * - host: Creates the instance on a dedicated host. If you do not specify DedicatedHostId, Alibaba Cloud automatically selects a dedicated host for the instance.
   * 
   * Default value: default.
   * 
   * @example
   * default
   */
  tenancy?: string;
  /**
   * @remarks
   * Specifies whether to automatically append sequential suffixes to HostName and InstanceName when you create multiple instances. The sequential suffix starts from 001 and increments up to 999. Valid values:
   * - true: Appends sequential suffixes.
   * - false: Does not append sequential suffixes.
   * 
   * Default value: false.
   * 
   * If HostName or InstanceName is set in a specified sorting format without the name_suffix naming suffix, meaning the naming format is name_prefix[begin_number,bits], UniqueSuffix does not take effect, and the names are sorted only in the specified order.
   * 
   * For more information, see [Specify sequential instance names or hostnames](https://help.aliyun.com/document_detail/196048.html).
   * 
   * @example
   * true
   */
  uniqueSuffix?: boolean;
  /**
   * @remarks
   * Instance user data of the instance. The data must be Base64-encoded. The size of instance user data cannot exceed 32 KB before Base64 encoding.
   * 
   * For more information about the limits, format, and execution frequency of user data, see [User data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * >To ensure the security of UserData during transmission, avoid sending sensitive data such as passwords and private keys in plaintext. If you need to transmit such information, we recommend that you encrypt the data first, encode it in Base64, and then decrypt it inside the instance to ensure information security.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * The vSwitch ID. If you create a VPC-type ECS instance, you must specify a vSwitch ID. The security group and the vSwitch must belong to the same VPC. You can call the [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) operation to query information about existing vSwitches.
   * 
   * Take note of the following items:
   * 
   * - If you specify the VSwitchId parameter, the ZoneId parameter must be set to the zone where the vSwitch resides. You can also leave ZoneId unspecified, and the system automatically selects the zone where the specified vSwitch resides.
   * 
   * - If NetworkInterface.N.InstanceType is set to Primary, you cannot specify VSwitchId. You can only specify NetworkInterface.N.VSwitchId.
   * 
   * @example
   * vsw-bp1s5fnvk4gn2tws0****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the instance. You can call the [DescribeZones](https://help.aliyun.com/document_detail/25610.html) operation to query the zone list.
   * 
   * > If you specify the VSwitchId parameter, the ZoneId parameter must be set to the zone where the vSwitch resides. You can also leave the ZoneId parameter unspecified, and the system automatically selects the zone where the specified vSwitch resides.
   * 
   * Default value: The system automatically selects a zone.
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

