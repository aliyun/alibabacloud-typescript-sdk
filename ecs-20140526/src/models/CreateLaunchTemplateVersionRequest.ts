// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLaunchTemplateVersionRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy applied to the system disk.
   * 
   * @example
   * sp-bp1dgzpaxwc4load****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable performance burst. Valid values:
   * 
   * - true
   * - false
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * -   cloud: basic disk
   * -   cloud_efficiency: ultra disk
   * -   cloud_ssd: standard SSD
   * -   cloud_auto: ESSD AutoPL disk
   * -   cloud_essd: ESSD. You can use the `SystemDisk.PerformanceLevel` parameter for the performance level settings of the disk.
   * -   cloud_essd_entry: ESSD Entry disk
   * 
   * Default value: cloud for retired instance types that are not I/O optimization instances, and cloud_efficiency for other instance types.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release the system disk when the instance is released. Valid values:
   * 
   * - true: Release the system disk when the instance is released.
   * - false: Do not release the system disk when the instance is released.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the system disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * testSystemDiskDescription
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
   * Specifies whether to encrypt the system disk. Valid values:
   * 
   * - true: Encrypts the system disk.
   * 
   * - false: Does not encrypt the system disk.
   * 
   * Default value: false.
   * 
   * > You cannot encrypt the system disk when you create an instance in Hong Kong (China) Zone D or Singapore Zone A.
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * 30000
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
   * The performance level settings of the ESSD used as the system disk. Valid values:
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
   * The number of provisioned read/write IOPS for the ESSD AutoPL disk. Valid values: 0 to min{50000, 1000 × Capacity - Baseline performance}.
   * 
   * Baseline performance = min{1800 + 50 × Capacity, 50000}.
   * 
   * > This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html) and [Modify the provisioned performance of an ESSD AutoPL disk](https://help.aliyun.com/document_detail/413275.html).
   * 
   * @example
   * 50000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values:
   * 
   * - cloud: 20 to 500
   * - Other disk categories: 20 to 2048
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

export class CreateLaunchTemplateVersionRequestDataDisk extends $dara.Model {
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
   * Specifies whether to enable performance burst. Valid values:
   * 
   * - true
   * - false
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of data disk N. Valid values:
   * 
   * - cloud_efficiency: ultra disk
   * - cloud_ssd: standard SSD
   * - cloud_essd: ESSD
   * - cloud: basic disk
   * - cloud_auto: ESSD AutoPL disk
   * - cloud_regional_disk_auto: regional ESSD
   * - cloud_essd_entry: ESSD Entry disk
   *   > The `cloud_essd_entry` value is supported only when `InstanceType` is set to an instance type in the `ecs.u1` or `ecs.e` family.
   * - elastic_ephemeral_disk_standard: standard elastic ephemeral disk
   * - elastic_ephemeral_disk_premium: Premium Edition elastic ephemeral disk
   * 
   * Default value: cloud_efficiency for I/O optimization instances, and cloud for non-I/O optimization instances.
   * Parameter default value description:
   * 
   * - If the instance type is a retired instance type that is not I/O optimization, the default value is `cloud`.
   * - In other cases, the default value is `cloud_efficiency`.<props="china"> After January 30, 2026, if the I/O optimization instance type does not support cloud_auto, the default value is cloud_efficiency. Otherwise, the default value is cloud_auto, and performance burst is enabled by default, which incurs additional fees. For more details, see [Billing examples](~~368372#p_75k_2hp_7gp~~) and [Announcement on changes](https://www.aliyun.com/notice/117844).
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release the data disk when the instance is released. Valid values:
   * 
   * - true: Release the data disk when the instance is released.
   * - false: Do not release the data disk when the instance is released.
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
   * testDataDiskDescription
   */
  description?: string;
  /**
   * @remarks
   * The mount point of the data disk. The naming conventions for mount points vary based on the number of attached data disks:
   * - 1 to 25 data disks: /dev/xvd`[b-z]`
   * 
   * - More than 25 data disks: /dev/xvd`[aa-zz]`. For example, the 26th data disk is named /dev/xvdaa, and the 27th data disk is named /dev/xvdab.
   * 
   * > This parameter is applicable only to full images. You can set this parameter to the mount point of the data disk in the full image and modify the `DataDisk.N.Size` and `DataDisk.N.Category` parameters to change the category and size of the data disk in the full image.
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
   * The ID of the Key Management Service (KMS) key used by the data disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The performance level settings of the ESSD used as the data disk. The value of N must be the same as that in `DataDisk.N.Category=cloud_essd`. Valid values:
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
   * The number of provisioned read/write IOPS for the ESSD AutoPL disk. Valid values: 0 to min{50000, 1000 × Capacity - Baseline performance}.
   * 
   * Baseline performance = min{1800 + 50 × Capacity, 50000}.
   * 
   * > This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html) and [Modify the provisioned performance of an ESSD AutoPL disk](https://help.aliyun.com/document_detail/413275.html).
   * 
   * @example
   * 50000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of data disk N. Valid values of N: 1 to 16. Unit: GiB. Valid values:
   * 
   * -   cloud: 5 to 2000
   * -   cloud_efficiency: 20 to 32768
   * -   cloud_ssd: 20 to 32768
   * -   cloud_essd: The valid values are subject to the value of `DataDisk.N.PerformanceLevel`.   
   *     - PL0: 1 to 32768
   *     - PL1: 20 to 32768
   *     - PL2: 461 to 32768
   *     - PL3: 1261 to 32768
   * -   cloud_auto: 1 to 32768
   * -   cloud_essd_entry: 10 to 32768
   * 
   * The value of this parameter must be greater than or equal to the size of the snapshot specified by the `SnapshotId` parameter.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot used to create data disk N. Valid values of N: 1 to 16. When the `DataDisk.N.SnapshotId` parameter is specified, the `DataDisk.N.Size` parameter is ignored. The size of the created disk is the same as that of the specified snapshot.
   * 
   * You cannot use snapshots that were created on or before July 15, 2013. Otherwise, an error is returned and your request is rejected.
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

export class CreateLaunchTemplateVersionRequestImageOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether instances that use this image support logons by the ecs-user user. Valid values:
   * - true: Yes.
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

export class CreateLaunchTemplateVersionRequestNetworkInterface extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to retain the ENI when the instance is released. Valid values:
   * 
   * - true: Do not retain the ENI.
   * 
   * - false: Retain the ENI.
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
   * The description of the secondary elastic network interface controller (NIC). The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`. The value of N in `NetworkInterface.N` cannot be greater than 1.
   * 
   * @example
   * testNetworkInterfaceDescription
   */
  description?: string;
  /**
   * @remarks
   * The Elastic Network Interface (ENI) type. Valid values of N: 1 and 2. If N is set to 1, you can configure one primary ENI or one secondary ENI. If N is set to 2, you must configure one primary ENI and one secondary ENI.
   * 
   * Valid values:
   * 
   * - Primary: primary ENI
   * - Secondary: secondary ENI
   * 
   * Default value: Secondary.
   * 
   * @example
   * Secondary
   */
  instanceType?: string;
  /**
   * @remarks
   * The name of the secondary elastic network interface controller (NIC). The value of N in `NetworkInterface.N` cannot be greater than 1.
   * 
   * @example
   * testNetworkInterfaceName
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
   * The primary private IP address of the secondary elastic network interface controller (NIC). The value of N in `NetworkInterface.N` cannot be greater than 1.
   * 
   * @example
   * ``192.168.**.**``
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * The ID of the security group to which the secondary elastic network interface controller (NIC) belongs. The security group of the secondary elastic network interface controller (NIC) and the security group of the instance must be in the same VPC. The value of N in `NetworkInterface.N` cannot be greater than 1.
   * 
   * > You cannot specify both `NetworkInterface.N.SecurityGroupId` and `NetworkInterface.N.SecurityGroupIds.N`.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of one or more security groups to which the secondary elastic network interface controller (NIC) belongs. The security groups and the secondary elastic network interface controller (NIC) must be in the same VPC. The valid values of N in `SecurityGroupIds.N` depend on the quota of security groups to which the secondary elastic network interface controller (NIC) can be added. For more information, see [Limits](https://help.aliyun.com/document_detail/25412.html). The value of N in `NetworkInterface.N` cannot be greater than 1.
   * 
   * > You cannot specify both `NetworkInterface.N.SecurityGroupId` and `NetworkInterface.N.SecurityGroupIds.N`.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The ID of the vSwitch to which the secondary elastic network interface controller (NIC) belongs. The instance and the secondary elastic network interface controller (NIC) must be in the same active zone of the same VPC, but they can belong to different vSwitches. The value of N in `NetworkInterface.N` cannot be greater than 1.
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

export class CreateLaunchTemplateVersionRequestSecurityOptions extends $dara.Model {
  /**
   * @remarks
   * The trusted system mode. Valid values: vTPM.
   * 
   * Currently, the trusted system mode supports the following instance families:
   * - g7, c7, and r7.
   * - Security-enhanced instance families (g7t, c7t, and r7t).
   * 
   * When you create an ECS instance of the preceding instance families, you must configure the settings for this parameter. Details:
   * 
   * - If you use the Alibaba Cloud trusted system, set this parameter to vTPM. This way, the Alibaba Cloud trusted system performs trusted verification when the instance starts.
   * - If you do not use the Alibaba Cloud trusted system, you can leave this parameter empty. However, if the ECS instance that you create uses the Enclave-based confidential computing mode (`SecurityOptions.ConfidentialComputingMode=Enclave`), the trusted system is also enabled for the instance.
   * - To create a trusted ECS instance by invoking an API operation, you can only invoke the `RunInstances` operation. The `CreateInstance` operation does not support the `SecurityOptions.TrustedSystemMode` parameter.
   * > If you specify an instance as a trusted instance when you create it, you can only use images that support the trusted system when you replace the system disk.
   * 
   * For more information about the trusted system, see [Overview of the trusted feature for security-enhanced instances](https://help.aliyun.com/document_detail/201394.html).
   * 
   * @example
   * vTPM
   */
  trustedSystemMode?: string;
  static names(): { [key: string]: string } {
    return {
      trustedSystemMode: 'TrustedSystemMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateLaunchTemplateVersionRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instances, disks, and primary ENIs created by using this version. Valid values of N: 1 to 20. If you specify this parameter, it cannot be an empty string. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instances, disks, and primary ENIs created by using this version. Valid values of N: 1 to 20. If you specify this parameter, it can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.
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

export class CreateLaunchTemplateVersionRequest extends $dara.Model {
  systemDisk?: CreateLaunchTemplateVersionRequestSystemDisk;
  /**
   * @remarks
   * The automatic release time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * - If the value of seconds (`ss`) is not `00`, the time is automatically rounded down to the current minute (`mm`).
   * 
   * - The release time must be at least 30 minutes later than the current time.
   * 
   * - The release time cannot be more than three years later than the current time.
   * 
   * @example
   * 2018-01-01T12:05:00Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter takes effect only when the `InstanceChargeType` parameter is set to `PrePaid`. Valid values:
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
   * The operating mode of the burstable instance. Valid values:
   * 
   * - Standard: standard mode. For more information about the instance performance in this mode, see the "Standard mode" section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * - Unlimited: unlimited mode. For more information about the instance performance in this mode, see the "Unlimited mode" section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The data disks.
   */
  dataDisk?: CreateLaunchTemplateVersionRequestDataDisk[];
  /**
   * @remarks
   * The release protection property of the instance. This property specifies whether the instance can be released by using the ECS console or by calling the [DeleteInstance](https://help.aliyun.com/document_detail/25507.html) operation. Valid values:
   * - true: Enables release protection for the instance.
   * 
   * - false: Disables release protection for the instance.
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
   * The instance description. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the operating system configuration of the instance.
   * 
   * @example
   * false
   */
  enableVmOsConfig?: boolean;
  /**
   * @remarks
   * The hostname of the cloud server.
   * 
   * -   The hostname cannot start or end with a period (.) or a hyphen (-). It cannot contain consecutive periods (.) or hyphens (-).
   * -   For a Windows instance, the hostname must be 2 to 15 characters in length. It cannot contain periods (.) or contain only digits. It can contain letters, digits, and hyphens (-).
   * -   For an instance of other operating systems such as Linux, the hostname must be 2 to 64 characters in length. It can contain multiple periods (.). The characters between two consecutive periods are considered a segment. Each segment can contain letters, digits, and hyphens (-).
   * 
   * @example
   * testHostName
   */
  hostName?: string;
  /**
   * @remarks
   * Specifies whether to enable the access channel for instance metadata. Valid values:
   * 
   * - enabled: Enables the access channel.
   * - disabled: Disables the access channel.
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
   * - optional: Does not forcibly use the security hardening mode.
   * - required: Forcibly uses the security hardening mode. After you set this value, you cannot access instance metadata in normal mode.
   * 
   * Default value: optional.
   * 
   * > For more information about the modes for accessing instance metadata, see [Overview of instance metadata](https://help.aliyun.com/document_detail/108460.html).
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
   * The image-related properties.
   */
  imageOptions?: CreateLaunchTemplateVersionRequestImageOptions;
  /**
   * @remarks
   * The image source.
   * > This parameter will be deprecated soon. To improve compatibility, use other parameters instead.
   * 
   * @example
   * system
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * <props="china">
   * - PrePaid: subscription. If you select this billing method, you must confirm that your account supports balance payment and credit payment. Otherwise, an `InvalidPayMethod` fault is returned.
   * - PostPaid: pay-as-you-go.
   * 
   * 
   * <props="intl">
   * - PrePaid: subscription. If you select this billing method, you must confirm that your account supports credit payment. Otherwise, an `InvalidPayMethod` fault is returned.
   * - PostPaid: pay-as-you-go.
   * 
   * 
   * <props="partner">
   * - PrePaid: subscription. If you select this billing method, you must confirm that your account supports credit payment. Otherwise, an `InvalidPayMethod` fault is returned.
   * - PostPaid: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance name. The name must be 2 to 128 characters in length and can contain letters and digits in the Unicode letter category. It can contain colons (:), underscores (_), periods (.), and hyphens (-). The default value is the `InstanceId` of the instance.
   * 
   * When you create multiple ECS instances, you can specify sequential instance names in batches. The names can contain brackets ([]) and commas (,). For more information, see [Specify sequential instance names or hostnames](https://help.aliyun.com/document_detail/196048.html).
   * 
   * @example
   * k8s-node-[1,4]-alibabacloud
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type. For more information, see [instance family](https://help.aliyun.com/document_detail/25378.html). You can also invoke the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the most recent instance type list.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The billing method for outbound Internet bandwidth. Valid values:
   * 
   * - PayByBandwidth: pay-by-bandwidth
   * - PayByTraffic: pay-by-traffic
   * 
   * > In the **pay-by-traffic** pattern, the peak inbound and outbound bandwidths are used as upper limits of bandwidths instead of guaranteed performance specifications. In the event of resource contention, the peak bandwidths cannot be guaranteed. If your business requires guaranteed bandwidths, use the **pay-by-bandwidth** pattern.
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
   * 50
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100.
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Specifies whether the instance is an I/O optimized instance. Valid values:
   * 
   * -   none: The instance is not I/O optimization.
   * -   optimized: The instance is I/O optimization.
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
   * -   For a Windows instance, this parameter is ignored. Even if this parameter is specified, only the `Password` parameter takes effect.
   * -   For a Linux instance, password logon is disabled by default.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The launch template ID. For more information, call the [DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html) operation. You must specify `LaunchTemplateId` or `LaunchTemplateName` to identify the launch template.
   * 
   * @example
   * lt-m5eiaupmvm2op9d****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The name of the launch template. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testLaunchTemplateName
   */
  launchTemplateName?: string;
  /**
   * @remarks
   * The elastic network interface controller (NIC) information.
   */
  networkInterface?: CreateLaunchTemplateVersionRequestNetworkInterface[];
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * - vpc: VPC
   * - classic: classic network. The classic network is no longer available. For more information, see [Notice on the discontinuation of the classic network](https://help.aliyun.com/document_detail/2833134.html).
   * 
   * @example
   * vpc
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to use the preset password of the image. Valid values:
   * - true
   * - false
   * 
   * Default value: false.
   * 
   * > When you specify this parameter, leave the Password parameter empty. Make sure that the specified image has a preset password.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The subscription period of the instance. Unit: months. This parameter is required and takes effect only when `InstanceChargeType` is set to `PrePaid`. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription Billable methods. Valid values: 
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
   * When you specify a private IP address for a VPC-type ECS instance, make sure that the IP address is an idle IP address within the CIDR block of the vSwitch specified by `VSwitchId`.
   * 
   * @example
   * ``10.1.**.**``
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The name of the instance RAM role. You can call the RAM API operation [ListRoles](https://help.aliyun.com/document_detail/28713.html) to query the instance RAM roles that you have created.
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
   * The ID of the resource group.
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
   * -   Active: enables security hardening. This value is applicable only to public images.
   * -   Deactive: disables security hardening. This value is applicable to all image types.
   * 
   * @example
   * Active
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group to which the instance created by using this version belongs. Instances in the same security group can access each other.
   * 
   * > You cannot specify both `SecurityGroupId` and `SecurityGroupIds.N`.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The security groups to which the instance is added. The valid values of N are subject to the quota of security groups to which an instance can be added. For more information, see [Limits](https://help.aliyun.com/document_detail/25412.html).
   * 
   * > You cannot specify both `SecurityGroupId` and `SecurityGroupIds.N` at the same time.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The security options.
   */
  securityOptions?: CreateLaunchTemplateVersionRequestSecurityOptions;
  /**
   * @remarks
   * The protection period of the spot instance. Unit: hours. Default value: 1. Valid values:
   * - 1: Alibaba Cloud guarantees that the instance is not subject to automatic release for 1 hour after it is created. After 1 hour, the system compares the bid price with the marketplace price and checks the resource inventory to determine whether to retain or revoke the instance.
   * - 0: Alibaba Cloud does not guarantee that the instance is retained for 1 hour after it is created. The system compares the bid price with the marketplace price and checks the resource inventory to determine whether to retain or revoke the instance.
   * 
   * Alibaba Cloud sends you a notification by using an ECS system event 5 minutes before the instance is revoked. Spot instances use second billing. We recommend that you select an appropriate protection period based on the execution duration of your specific tasks.
   * 
   * > This parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit or SpotAsPriceGo.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The maximum hourly price of the instance. The value can be accurate to three decimal places.
   * 
   * @example
   * 0.97
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The preemption policy for the pay-as-you-go instance. This parameter takes effect when `InstanceChargeType` is set to `PostPaid`. Valid values:
   * 
   * -   NoSpot: Spot instance is a regular pay-as-you-go instance.
   * -   SpotWithPriceLimit: Spot instance is a preemptible instance with a user-defined maximum hourly price.
   * -   SpotAsPriceGo: Spot instance is a preemptible instance for which the market price is automatically used as the bid price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The tags of the instances, disks, and primary ENIs created by using this version.
   */
  tag?: CreateLaunchTemplateVersionRequestTag[];
  /**
   * @remarks
   * Instance user data of the instance. Instance user data must be encoded in Base64. The maximum size of the raw data is 32 KB.
   * 
   * @example
   * ZWNobyBoZWxsbyBl****
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the vSwitch. This parameter is required when you create a VPC-type instance.
   * 
   * @example
   * vsw-bp1s5fnvk4gn2tws0****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The description of the launch template version. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * testVersionDescription
   */
  versionDescription?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the instance belongs.
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
      launchTemplateId: 'LaunchTemplateId',
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
      userData: 'UserData',
      vSwitchId: 'VSwitchId',
      versionDescription: 'VersionDescription',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDisk: CreateLaunchTemplateVersionRequestSystemDisk,
      autoReleaseTime: 'string',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      creditSpecification: 'string',
      dataDisk: { 'type': 'array', 'itemType': CreateLaunchTemplateVersionRequestDataDisk },
      deletionProtection: 'boolean',
      deploymentSetId: 'string',
      description: 'string',
      enableVmOsConfig: 'boolean',
      hostName: 'string',
      httpEndpoint: 'string',
      httpPutResponseHopLimit: 'number',
      httpTokens: 'string',
      imageId: 'string',
      imageOptions: CreateLaunchTemplateVersionRequestImageOptions,
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
      launchTemplateId: 'string',
      launchTemplateName: 'string',
      networkInterface: { 'type': 'array', 'itemType': CreateLaunchTemplateVersionRequestNetworkInterface },
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
      securityOptions: CreateLaunchTemplateVersionRequestSecurityOptions,
      spotDuration: 'number',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      tag: { 'type': 'array', 'itemType': CreateLaunchTemplateVersionRequestTag },
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

