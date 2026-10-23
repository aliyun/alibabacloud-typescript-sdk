// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLaunchTemplateRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy applied to the system disk.
   * 
   * @example
   * sp-gc7c37d4ylw7mtnk****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature. Valid values:
   * 
   * - true: enables the feature.
   * - false: disables the feature.
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * - cloud: basic disk.
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: ESSD. You can use the SystemDisk.PerformanceLevel parameter to set the performance level of the disk.
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_essd_entry: ESSD Entry disk.
   * 
   * Default value: cloud for retired instance types that are not I/O optimized instances, and cloud_efficiency for other instance types.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release the system disk when the instance is released. Valid values:
   * 
   * - true: releases the system disk when the instance is released.
   * - false: does not release the system disk when the instance is released.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the system disk. The description must be 2 to 256 characters in length and can contain letters and Chinese characters. It cannot start with http:// or https://.
   * 
   * @example
   * testSystemDiskDescription
   */
  description?: string;
  /**
   * @remarks
   * The name of the system disk. The name must be 2 to 128 characters in length and can contain letters and Chinese characters. It must start with a letter or a Chinese character and cannot start with http:// or https://. It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testSystemDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the system disk. Valid values:
   * 
   * - true: encrypts the system disk.
   * - false: does not encrypt the system disk.
   * 
   * Default value: false.
   * 
   * > You cannot encrypt the system disk when you create an instance in Zone D of the Hong Kong (China) region or Zone A of the Singapore region.
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not available.
   * 
   * @example
   * null
   */
  iops?: number;
  /**
   * @remarks
   * The KMS key ID of the system disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The performance level of the ESSD used as the system disk. Valid values:
   * 
   * - PL0 (default): A single ESSD can deliver up to 10,000 random read/write IOPS.
   * - PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * - PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For more details about how to select the performance level of an ESSD, see [ESSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50000, 1000 × Capacity - Baseline performance}.
   * 
   * Baseline performance = min{1800 + 50 × Capacity, 50000}.
   * 
   * > This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html) and [Modify the provisioned information of an ESSD AutoPL disk](https://help.aliyun.com/document_detail/413275.html).
   * 
   * @example
   * 50000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values:
   * 
   * - cloud: 20 to 500.
   * - Other disk categories: 20 to 2048.
   * 
   * The value of this parameter must be greater than or equal to max{20, ImageSize}.
   * 
   * @example
   * 40
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      diskName: 'DiskName',
      encrypted: 'Encrypted',
      iops: 'Iops',
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
      deleteWithInstance: 'boolean',
      description: 'string',
      diskName: 'string',
      encrypted: 'string',
      iops: 'number',
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

export class CreateLaunchTemplateRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy applied to the data disk.
   * 
   * @example
   * sp-m5e7fa9ute44ssa****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature. Valid values:
   * 
   * - true: enables the feature.
   * - false: disables the feature.
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of data disk N. Valid values:
   * 
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: ESSD.
   * - cloud: basic disk.
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_regional_disk_auto: regional ESSD.
   * - cloud_essd_entry: ESSD Entry disk.
   *   > This parameter can be set to cloud_essd_entry only when InstanceType is set to an instance type in the ecs.u1 or ecs.e instance family.
   * - elastic_ephemeral_disk_standard: standard elastic ephemeral disk.
   * - elastic_ephemeral_disk_premium: Premium Edition elastic ephemeral disk.
   * 
   * Default values: cloud_efficiency for I/O optimized instances, and cloud for non-I/O optimized instances.
   * Default value description:
   * 
   * - If the instance type is a retired and non-I/O optimized instance type, the default value is cloud.
   * - In other cases, the default value is cloud_efficiency. <props="china">After January 30, 2026, if the I/O optimized instance type does not support cloud_auto, the default value is cloud_efficiency. Otherwise, the default value is cloud_auto, and the performance burst feature is enabled by default (which incurs additional fees. For more details, see [Billing examples](~~368372#p_75k_2hp_7gp~~)). For more details, see [Announcement](https://www.aliyun.com/notice/117844).
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release the data disk when the instance is released. Valid values:
   * 
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
   * The description of the data disk. The description must be 2 to 256 characters in length and can contain letters and Chinese characters. It cannot start with http:// or https://.
   * 
   * @example
   * testDataDiskDescription
   */
  description?: string;
  /**
   * @remarks
   * The mount point of the data disk. The naming convention for mount points varies based on the number of attached data disks:
   * - 1 to 25 data disks: /dev/xvd[b-z].
   * 
   * - More than 25 data disks: /dev/xvd[aa-zz]. For example, the 26th data disk is named /dev/xvdaa, and the 27th data disk is named /dev/xvdab.
   * 
   * > This parameter is applicable only to full images. You can set this parameter to the mount point of the data disk in the full image and modify the DataDisk.N.Size and DataDisk.N.Category parameters to change the category and size of the data disk in the full image.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The name of the data disk. The name must be 2 to 128 characters in length and can contain letters and Chinese characters. It must start with a letter or a Chinese character and cannot start with http:// or https://. It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testDataDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the data disk.
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key used to encrypt the data disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The performance level of the ESSD used as the data disk. The value of N must be the same as the value of N in DataDisk.N.Category=cloud_essd. Valid values:
   * 
   * - PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * - PL1 (default): A single ESSD can deliver up to 50,000 random read/write IOPS.
   * - PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For more details about how to select the performance level of an ESSD, see [ESSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50000, 1000 × Capacity - Baseline performance}.
   * 
   * Baseline performance = min{1800 + 50 × Capacity, 50000}.
   * 
   * > This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html) and [Modify the provisioned information of an ESSD AutoPL disk](https://help.aliyun.com/document_detail/413275.html).
   * 
   * @example
   * 50000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of data disk N. Valid values of N: 1 to 16. Unit: GiB. Valid values:
   * 
   * - cloud: 5 to 2000.
   * - cloud_efficiency: 20 to 32768.
   * - cloud_ssd: 20 to 32768.
   * - cloud_essd: The valid values are subject to the value of DataDisk.N.PerformanceLevel.
   *     - PL0: 1 to 32768.
   *     - PL1: 20 to 32768.
   *     - PL2: 461 to 32768.
   *     - PL3: 1261 to 32768.
   * - cloud_auto: 1 to 32768.
   * - cloud_essd_entry: 10 to 32768.
   * 
   * The value of this parameter must be greater than or equal to the size of the snapshot specified by the SnapshotId parameter.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot used to create data disk N. Valid values of N: 1 to 16. If you specify the DataDisk.N.SnapshotId parameter, the DataDisk.N.Size parameter is ignored. The actual size of the created disk is the size of the specified snapshot.
   * 
   * > You cannot use snapshots created on or before July 15, 2013. Otherwise, the request is rejected.
   * 
   * @example
   * s-bp17441ohwka0yuh****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      burstingEnabled: 'BurstingEnabled',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLaunchTemplateRequestImageOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the instance that uses this image supports logon as the ecs-user user. Valid values:
   * - true: yes.
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

export class CreateLaunchTemplateRequestNetworkInterface extends $dara.Model {
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
   * > This parameter takes effect only for secondary ENIs.
   * 
   * @example
   * true
   */
  deleteOnRelease?: boolean;
  /**
   * @remarks
   * The description of the secondary ENI. The description must be 2 to 256 characters in length and cannot start with http:// or https://. The value of N in NetworkInterface.N cannot be greater than 1.
   * 
   * @example
   * testEniDescription
   */
  description?: string;
  /**
   * @remarks
   * The type of the ENI. Valid values of N: 1 to 2. When you configure one ENI, you can configure one primary ENI or one secondary ENI. When you configure two ENIs, you can configure only one primary ENI and one secondary ENI at the same time.
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
   * The name of the ENI.
   * 
   * Note:
   * 
   * - Valid values of N: 1 to 2. When you configure one ENI, you can configure one primary ENI or one secondary ENI. When you configure two ENIs, you can configure only one primary ENI and one secondary ENI at the same time.
   * 
   * - If NetworkInterface.N.InstanceType is set to Primary, you do not need to specify this parameter.
   * 
   * @example
   * testEniName
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The communication mode of the primary ENI. Valid values:
   * 
   * - Standard: uses the TCP communication mode.
   * - HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the RDMA communication mode.
   * 
   * @example
   * Standard
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * Adds an ENI and configures the primary IP address.
   * 
   * Note:
   * 
   * - Valid values of N: 1 to 2:
   *     - When you configure one ENI, you can configure one primary ENI or one secondary ENI. If the Amount parameter is set to a value greater than 1, and you configure a primary ENI and specify this parameter, consecutive primary IP addresses starting from the specified primary IP address are allocated to multiple ECS instances that are created in a batch. Note that you cannot bind secondary ENIs to the instances in this case.
   *     - When you configure two ENIs, you can configure only one primary ENI and one secondary ENI at the same time. Note that if the Amount parameter is set to a value greater than 1 and you specify this parameter for the primary ENI, you cannot configure a secondary ENI (that is, you cannot set NetworkInterface.2.InstanceType=Secondary).
   * 
   * - If NetworkInterface.N.InstanceType is set to Primary, this parameter serves the same purpose as PrivateIpAddress, but you cannot specify both PrivateIpAddress and this parameter at the same time.
   * 
   * - If NetworkInterface.N.InstanceType is set to Secondary or left empty, this parameter specifies the primary IP address for the secondary ENI. By default, an IP address is randomly selected from the vSwitch CIDR block to which the ENI belongs.
   * 
   * > When you create an ECS instance, you can add only one secondary ENI. After the instance is created, you can call the [CreateNetworkInterface](https://help.aliyun.com/document_detail/58504.html) and [AttachNetworkInterface](https://help.aliyun.com/document_detail/58515.html) operations to add more secondary ENIs.
   * 
   * @example
   * ``192.168.**.**``
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * The ID of the security group to which the ENI belongs.
   * 
   * Note:
   * 
   * - Valid values of N: 1 to 2. When you configure one ENI, you can configure one primary ENI or one secondary ENI. When you configure two ENIs, you can configure only one primary ENI and one secondary ENI at the same time.
   * 
   * - If NetworkInterface.N.InstanceType is set to Primary, you must specify this parameter. In this case, this parameter serves the same purpose as SecurityGroupId, but you cannot specify SecurityGroupId, SecurityGroupIds.N, or NetworkInterface.N.SecurityGroupIds.N at the same time.
   * 
   * - If NetworkInterface.N.InstanceType is set to Secondary or left empty, this parameter is optional. The default value is the security group to which the ECS instance belongs.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of one or more security groups to which the ENI belongs.
   * 
   * - The valid values of the first N are 1 to 2. When you configure one ENI, you can configure one primary ENI or one secondary ENI. When you configure two ENIs, you can configure only one primary ENI and one secondary ENI at the same time.
   * - The second N specifies one or more security group IDs. The valid values of N depend on the quota of security groups to which an instance can be added. For more information, see [Security group limits](~~25412#SecurityGroupQuota1~~).
   * 
   * Note:
   * 
   * - If NetworkInterface.N.InstanceType is set to Primary, you must specify this parameter or NetworkInterface.N.SecurityGroupId. In this case, this parameter serves the same purpose as SecurityGroupIds.N, but you cannot specify SecurityGroupId, SecurityGroupIds.N, or NetworkInterface.N.SecurityGroupId at the same time.
   * 
   * - If NetworkInterface.N.InstanceType is set to Secondary or left empty, this parameter is optional. The default value is the security group to which the ECS instance belongs.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The ID of the vSwitch to which the ENI belongs.
   * 
   * Note:
   * 
   * - Valid values of N: 1 to 2. When you configure one ENI, you can configure one primary ENI or one secondary ENI. When you configure two ENIs, you can configure only one primary ENI and one secondary ENI at the same time.
   * 
   * - If NetworkInterface.N.InstanceType is set to Primary, you must specify this parameter. In this case, this parameter serves the same purpose as VSwitchId, but you cannot specify both VSwitchId and this parameter at the same time.
   * 
   * - If NetworkInterface.N.InstanceType is set to Secondary or left empty, this parameter is optional. The default value is the vSwitch to which the ECS instance belongs.
   * 
   * @example
   * vsw-bp1s5fnvk4gn2tws0****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteOnRelease: 'DeleteOnRelease',
      description: 'Description',
      instanceType: 'InstanceType',
      networkInterfaceName: 'NetworkInterfaceName',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      primaryIpAddress: 'PrimaryIpAddress',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteOnRelease: 'boolean',
      description: 'string',
      instanceType: 'string',
      networkInterfaceName: 'string',
      networkInterfaceTrafficMode: 'string',
      primaryIpAddress: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      vSwitchId: 'string',
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

export class CreateLaunchTemplateRequestSecurityOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable secure boot.
   */
  enableSecureBoot?: boolean;
  /**
   * @remarks
   * The trusted system pattern. Valid value: vTPM.
   * 
   * Currently, the trusted system pattern supports the following instance families:
   * - g7, c7, and r7.
   * - security-enhanced instance families (g7t, c7t, and r7t).
   * 
   * When you create an ECS instance of the preceding instance families, you must configure this parameter. Details:
   * 
   * - If you use the Alibaba Cloud trusted system, configure this parameter to vTPM. This way, the Alibaba Cloud trusted system performs trusted verification when the instance starts.
   * - If you do not use the Alibaba Cloud trusted system, you can leave this parameter empty. However, if the ECS instance that you create uses the Enclave confidential computing pattern (SecurityOptions.ConfidentialComputingMode=Enclave), the trusted system is also enabled for the ECS instance.
   * - When you create an ECS instance with the trusted system enabled by calling an API operation, you can only call the RunInstances operation. The CreateInstance operation does not support configuring the SecurityOptions.TrustedSystemMode parameter.
   * > If you specify an instance as a trusted instance when you create it, you can only use an image that supports the trusted system when you replace the system disk.
   * 
   * For more information about the trusted system, see [Overview of the trusted feature for security-enhanced instance families](https://help.aliyun.com/document_detail/201394.html).
   * 
   * @example
   * vTPM
   */
  trustedSystemMode?: string;
  static names(): { [key: string]: string } {
    return {
      enableSecureBoot: 'EnableSecureBoot',
      trustedSystemMode: 'TrustedSystemMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSecureBoot: 'boolean',
      trustedSystemMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLaunchTemplateRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instances, cloud disks, and primary ENIs that are created by using this version of the launch template. Valid values of N: 1 to 20. The tag key cannot be an empty string. It can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instances, cloud disks, and primary ENIs that are created by using this version of the launch template. Valid values of N: 1 to 20. The tag value can be an empty string. It can be up to 128 characters in length and cannot contain http:// or https://.
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

export class CreateLaunchTemplateRequestTemplateTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the launch template. Valid values of N: 1 to 20. If you specify this parameter, it cannot be an empty string. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the launch template. Valid values of N: 1 to 20. If you specify this parameter, it can be an empty string. The tag value can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
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

export class CreateLaunchTemplateRequest extends $dara.Model {
  systemDisk?: CreateLaunchTemplateRequestSystemDisk;
  /**
   * @remarks
   * The automatic release time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * - If the ss value is not 00, the time is automatically rounded down to the current minute (mm).
   * - The earliest release time is half an hour after the current time.
   * - The latest release time cannot be more than three years after the current time.
   * [ISO 8601](https://help.aliyun.com/document_detail/25696.html)
   * 
   * @example
   * 2018-01-01T12:05:00Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - true: enables auto-renewal.
   * - false: disables auto-renewal.
   * 
   * Default value: false.
   * 
   * > This parameter takes effect only when the InstanceChargeType parameter is set to PrePaid.
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
   * - Valid values when PeriodUnit is set to Week: 1, 2, and 3.
   * - Valid values when PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * 
   * 
   * <props="intl">Valid values when PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The performance mode of the burstable instance. Valid values:
   * 
   * - Standard: standard mode. For more information about the performance of the instance, see the "Standard mode" section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * - Unlimited: unlimited mode. For more information about the performance of the instance, see the "Unlimited mode" section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The list of data disks.
   */
  dataDisk?: CreateLaunchTemplateRequestDataDisk[];
  /**
   * @remarks
   * The release protection property of the instance. It specifies whether the instance can be released by using the console or by calling the [DeleteInstance](https://help.aliyun.com/document_detail/25507.html) operation. Valid values:
   * - true: enables release protection for the instance.
   * 
   * - false: disables release protection for the instance.
   * 
   * Default value: false.
   * 
   * > This property applies only to pay-as-you-go instances. It can prevent only manual release operations, but not system release operations.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
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
   * The instance description. The description must be 2 to 256 characters in length and can contain letters and Chinese characters. It cannot start with http:// or https://.
   * 
   * @example
   * testECSDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the operating system configuration of the instance.
   * > This parameter will be deprecated. To improve compatibility, we recommend that you use other parameters.
   * 
   * @example
   * false
   */
  enableVmOsConfig?: boolean;
  /**
   * @remarks
   * The hostname of the Elastic Compute Service server.
   * 
   * - The hostname cannot start or end with a period (.) or a hyphen (-). It cannot contain consecutive periods (.) or hyphens (-).
   * - For Windows instances, the hostname must be 2 to 15 characters in length and cannot contain periods (.). It cannot contain only digits. It can contain uppercase and lowercase letters, digits, and hyphens (-).
   * - For instances of other operating systems such as Linux, the hostname must be 2 to 64 characters in length. It can contain multiple segments separated by periods (.). Each segment can contain uppercase and lowercase letters, digits, and hyphens (-).
   * 
   * @example
   * testHostName
   */
  hostName?: string;
  /**
   * @remarks
   * Specifies whether to enable the access channel for instance metadata. Valid values:
   * 
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
   * > This parameter is not available.
   * 
   * @example
   * 3
   */
  httpPutResponseHopLimit?: number;
  /**
   * @remarks
   * Specifies whether to forcibly use the security hardening mode (IMDSv2) to access instance metadata. Valid values:
   * 
   * - optional: does not forcibly use the security hardening mode.
   * - required: forcibly uses the security hardening mode. After you set this parameter to required, you cannot access instance metadata in normal mode.
   * 
   * Default value: optional.
   * 
   * > For more information about the modes of accessing instance metadata, see [Overview of instance metadata](https://help.aliyun.com/document_detail/108460.html).
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The image ID. This is the image resource selected when the instance is started. You can call the [DescribeImages](https://help.aliyun.com/document_detail/25534.html) operation to query the available image resources.
   * 
   * @example
   * win2008r2_64_ent_sp1_en-us_40G_alibase_20170915.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The image-related property information.
   */
  imageOptions?: CreateLaunchTemplateRequestImageOptions;
  /**
   * @remarks
   * The source of the image. Valid values:
   * 
   * - system: public images provided by Alibaba Cloud.
   * - self: custom images that you created.
   * - others: shared images from other Alibaba Cloud accounts.
   * - marketplace: images provided by <props="china"><ph>[Alibaba Cloud Marketplace](https://market.aliyun.com/)</ph><props="intl"><ph>[Alibaba Cloud Marketplace](https://marketplace.alibabacloud.com/)</ph>. You can use the Alibaba Cloud Marketplace images that you queried without subscribing to them in advance. You must pay attention to the billing details of the Alibaba Cloud Marketplace images.
   * 
   * @example
   * system
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - PrePaid: subscription. If you select this billing method, <props="china"><ph>you must confirm that your account supports balance payment and credit payment</ph><props="intl"><ph>you must confirm that your account supports credit payment</ph>. Otherwise, an InvalidPayMethod fault is returned.
   * - PostPaid: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance name. The name must be 2 to 128 characters in length and can contain characters in the Letter category of Unicode, including letters and digits. It can contain colons (:), underscores (_), periods (.), and hyphens (-). Default value: the InstanceId of the instance.
   * 
   * When you create multiple ECS instances, you can batch specify sequential instance names, which can contain square brackets ([]) and commas (,). For more information, see [Batch specify sequential instance names or hostnames](https://help.aliyun.com/document_detail/196048.html).
   * 
   * @example
   * k8s-node-[1,4]-alibabacloud
   */
  instanceName?: string;
  /**
   * @remarks
   * The resource specifications of the instance. For more information, see [Instance family](https://help.aliyun.com/document_detail/25378.html). You can also invoke the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to obtain the most recent instance type list.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The billing method for network usage. Valid values:
   * 
   * - PayByBandwidth: pay-by-bandwidth.
   * - PayByTraffic: pay-by-traffic.
   * 
   * > In the pay-by-traffic pattern, the peak inbound and outbound bandwidths are used as upper limits of bandwidths instead of guaranteed performance specifications. In the event of resource contention, the peak bandwidths cannot be guaranteed. If your business requires guaranteed bandwidths, use the pay-by-bandwidth billing method.
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
   * - When the purchased outbound public bandwidth is greater than 10 Mbit/s: 1 to the value of InternetMaxBandwidthOut. Default value: the value of InternetMaxBandwidthOut.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Specifies whether the instance is an I/O optimized instance. Valid values:
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
   * The number of IPv6 addresses to be randomly generated for the primary ENI. Valid values: 1 to 10.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * - For Windows instances, this parameter is ignored. Even if you specify this parameter, only the Password parameter takes effect.
   * - For Linux instances, the password logon method is disabled by default.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The name of the instance launch template. The name must be 2 to 128 characters in length and can contain letters and Chinese characters. It must start with a letter or a Chinese character and cannot start with http:// or https://. It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * testLaunchTemplateName
   */
  launchTemplateName?: string;
  /**
   * @remarks
   * The Elastic Network Interface (ENI) information.
   */
  networkInterface?: CreateLaunchTemplateRequestNetworkInterface[];
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * - classic: classic network. This network type is phased out. For more information, see [Phasing-out notice](https://help.aliyun.com/document_detail/2833134.html).
   * - vpc: VPC.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to use the preset password of the image.
   * 
   * > When you specify this parameter, leave Password empty and make sure that the selected image has a preset password.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The subscription period of the instance. Unit: months. This parameter is valid and required only when InstanceChargeType is set to PrePaid. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The time unit for the subscription Billable methods. Valid values: 
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
   * The private IP address of the instance.
   * 
   * When you specify the private IP address for an ECS instance in a VPC, the IP address must be selected from the idle CIDR block of the vSwitch specified by VSwitchId.
   * 
   * @example
   * ``10.1.**.**``
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The name of the instance RAM role. You can call the [ListRoles](https://help.aliyun.com/document_detail/28713.html) operation provided by RAM to query the instance RAM roles that you have created.
   * 
   * @example
   * testRamRoleName
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the enterprise resource group to which the instance, block storage, and elastic network interface (ENI) belong.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable security hardening for the operating system. Valid values:
   * 
   * - Active: enables security hardening. This value is applicable only to public images.
   * - Deactive: disables security hardening. This value is applicable to all image types.
   * 
   * @example
   * Deactive
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group to which the new instance belongs. Instances in the same security group can access each other. A security group can manage up to 1,000 instances.
   * 
   * > You cannot specify both SecurityGroupId and SecurityGroupIds.N at the same time.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of one or more security groups to which the instance is added. The valid values of N depend on the quota of security groups to which an instance can be added. For more information, see [Limits](https://help.aliyun.com/document_detail/25412.html).
   * 
   * > You cannot specify both SecurityGroupId and SecurityGroupIds.N.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The security options.
   */
  securityOptions?: CreateLaunchTemplateRequestSecurityOptions;
  /**
   * @remarks
   * The protection period of the spot instance. Unit: hours. Default value: 1. Valid values:
   * - 1: Alibaba Cloud guarantees that the instance is not subject to automatic release within 1 hour after it is created. After 1 hour, the system automatically compares the bid price with the marketplace price and checks resource inventory to determine whether to retain or revoke the instance.
   * - 0: Alibaba Cloud does not guarantee that the instance is retained for 1 hour after it is created. The system automatically compares the bid price with the marketplace price and checks resource inventory to determine whether to retain or revoke the instance.
   * 
   * Alibaba Cloud sends you a notification by using an ECS system event 5 minutes before the instance is revoked. Spot instances use the billing method by second. We recommend that you select an appropriate protection period based on the execution duration of your tasks.
   * 
   * > This parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit or SpotAsPriceGo.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The maximum hourly price of the instance. The value can be accurate to three decimal places. This parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
   * 
   * @example
   * 0.97
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The preemption policy for the pay-as-you-go instance. This parameter takes effect only when InstanceChargeType is set to PostPaid. Valid values:
   * 
   * - NoSpot: The instance is a regular pay-as-you-go instance.
   * - SpotWithPriceLimit: The instance is a spot instance with a user-defined maximum hourly price.
   * - SpotAsPriceGo: The instance is a spot instance for which the market price is automatically used as the bid price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The tag information of the instances, cloud disks, and primary ENIs that are created by using this version of the launch template.
   * 
   * <details>
   * <summary>Scenarios</summary>
   * After you call the CreateLaunchTemplate operation to create a launch template and use the automatically generated default version to create instances, this tag is used to tag the instances, cloud disks, and primary ENIs.
   * </details>
   */
  tag?: CreateLaunchTemplateRequestTag[];
  /**
   * @remarks
   * The ID of the enterprise resource group to which the launch template belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  templateResourceGroupId?: string;
  /**
   * @remarks
   * The tags of the launch template.
   * 
   * > You can only create and query the tags of launch templates by calling API operations. You cannot create or view the tags in the console.
   */
  templateTag?: CreateLaunchTemplateRequestTemplateTag[];
  /**
   * @remarks
   * Instance user data of the instance. Instance user data must be encoded in Base64. The maximum size of the raw data is 32 KB.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the vSwitch. This parameter is required when you create a VPC instance.
   * 
   * @example
   * vsw-bp1s5fnvk4gn2tws0****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The description of the instance launch template version. The description must be 2 to 256 characters in length and can contain letters and Chinese characters. It cannot start with http:// or https://.
   * 
   * @example
   * testVersionDescription
   */
  versionDescription?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-bp12433upq1y5scen****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      systemDisk: 'SystemDisk',
      autoReleaseTime: 'AutoReleaseTime',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      creditSpecification: 'CreditSpecification',
      dataDisk: 'DataDisk',
      deletionProtection: 'DeletionProtection',
      deploymentSetId: 'DeploymentSetId',
      description: 'Description',
      enableVmOsConfig: 'EnableVmOsConfig',
      hostName: 'HostName',
      httpEndpoint: 'HttpEndpoint',
      httpPutResponseHopLimit: 'HttpPutResponseHopLimit',
      httpTokens: 'HttpTokens',
      imageId: 'ImageId',
      imageOptions: 'ImageOptions',
      imageOwnerAlias: 'ImageOwnerAlias',
      instanceChargeType: 'InstanceChargeType',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      ipv6AddressCount: 'Ipv6AddressCount',
      keyPairName: 'KeyPairName',
      launchTemplateName: 'LaunchTemplateName',
      networkInterface: 'NetworkInterface',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      passwordInherit: 'PasswordInherit',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      privateIpAddress: 'PrivateIpAddress',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      securityOptions: 'SecurityOptions',
      spotDuration: 'SpotDuration',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      tag: 'Tag',
      templateResourceGroupId: 'TemplateResourceGroupId',
      templateTag: 'TemplateTag',
      userData: 'UserData',
      vSwitchId: 'VSwitchId',
      versionDescription: 'VersionDescription',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDisk: CreateLaunchTemplateRequestSystemDisk,
      autoReleaseTime: 'string',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      creditSpecification: 'string',
      dataDisk: { 'type': 'array', 'itemType': CreateLaunchTemplateRequestDataDisk },
      deletionProtection: 'boolean',
      deploymentSetId: 'string',
      description: 'string',
      enableVmOsConfig: 'boolean',
      hostName: 'string',
      httpEndpoint: 'string',
      httpPutResponseHopLimit: 'number',
      httpTokens: 'string',
      imageId: 'string',
      imageOptions: CreateLaunchTemplateRequestImageOptions,
      imageOwnerAlias: 'string',
      instanceChargeType: 'string',
      instanceName: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      ipv6AddressCount: 'number',
      keyPairName: 'string',
      launchTemplateName: 'string',
      networkInterface: { 'type': 'array', 'itemType': CreateLaunchTemplateRequestNetworkInterface },
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      passwordInherit: 'boolean',
      period: 'number',
      periodUnit: 'string',
      privateIpAddress: 'string',
      ramRoleName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityEnhancementStrategy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      securityOptions: CreateLaunchTemplateRequestSecurityOptions,
      spotDuration: 'number',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      tag: { 'type': 'array', 'itemType': CreateLaunchTemplateRequestTag },
      templateResourceGroupId: 'string',
      templateTag: { 'type': 'array', 'itemType': CreateLaunchTemplateRequestTemplateTag },
      userData: 'string',
      vSwitchId: 'string',
      versionDescription: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    if(this.imageOptions && typeof (this.imageOptions as any).validate === 'function') {
      (this.imageOptions as any).validate();
    }
    if(Array.isArray(this.networkInterface)) {
      $dara.Model.validateArray(this.networkInterface);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    if(this.securityOptions && typeof (this.securityOptions as any).validate === 'function') {
      (this.securityOptions as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.templateTag)) {
      $dara.Model.validateArray(this.templateTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

