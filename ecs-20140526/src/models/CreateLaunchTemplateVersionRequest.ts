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
   * Specifies whether to enable the performance burst feature. Valid values:
   * 
   * - true: enables the performance burst feature.
   * - false: does not enable the performance burst feature.
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * -   cloud: basic disk.
   * -   cloud_efficiency: ultra disk.
   * -   cloud_ssd: standard SSD.
   * -   cloud_auto: ESSD AutoPL disk.
   * -   cloud_essd: enterprise SSD (ESSD). You can use the `SystemDisk.PerformanceLevel` parameter to configure the performance level of the disk.
   * - cloud_essd_entry: ESSD Entry disk.
   * 
   * For retired instance types that are not I/O optimization instances, the default value is cloud. For other instance types, the default value is cloud_efficiency.
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
   * The description of the system disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * testSystemDiskDescription
   */
  description?: string;
  /**
   * @remarks
   * The name of the system disk. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * cloud_ssdSystem
   */
  diskName?: string;
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
   * > System disk encryption is not supported in Zone D of the Hong Kong (China) region or Zone A of the Singapore region when you create an instance.
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
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
   * The performance level of the ESSD used as the system disk. Configure the performance level based on the following valid values:
   * 
   * - PL0 (default): A single disk can deliver up to 10,000 random read/write IOPS.
   * - PL1: A single disk can deliver up to 50,000 random read/write IOPS.
   * - PL2: A single disk can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For information about how to select an ESSD performance level, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk used as the system disk. Valid values: 0 to min{50000, 1000 × Capacity - Baseline Performance}.
   * 
   * Baseline Performance = min{1,800 + 50 × Capacity, 50,000}.
   * 
   * > This parameter is available only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html) and [Modify the provisioned performance of an ESSD AutoPL disk](https://help.aliyun.com/document_detail/413275.html).
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
   * Specifies whether to enable the performance burst feature. Valid values:
   * 
   * - true: enables the performance burst feature.
   * - false: does not enable the performance burst feature.
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
   * - cloud_essd: enterprise SSD.
   * - cloud: basic disk.
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_regional_disk_auto: regional ESSD.
   * - cloud_essd_entry: ESSD Entry disk.
   *   >The cloud_essd_entry value is supported only when `InstanceType` is configured as an instance type in the `ecs.u1` or `ecs.e` family.
   * - elastic_ephemeral_disk_standard: elastic ephemeral disk - Standard.
   * - elastic_ephemeral_disk_premium: elastic ephemeral disk - Premium Edition.
   * 
   * For I/O optimization instances, the default value is cloud_efficiency. For non-I/O optimization instances, the default value is cloud.
   * Default value details:
   * 
   * - When InstanceType is set to a retired instance type that is not I/O optimized, the default parameter value is `cloud`.
   * - In other cases, the default value is `cloud_efficiency`.<props="china">After January 30, 2026, when the I/O optimized instance type does not support cloud_auto, the default value is cloud_efficiency. Otherwise, the default value is cloud_auto, and the performance burst feature is enabled by default (which incurs additional fees. For details, see [Billing examples](~~368372#p_75k_2hp_7gp~~)). For more information, see [Change notice](https://www.aliyun.com/notice/117844).
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
   * The description of the data disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * testDataDiskDescription
   */
  description?: string;
  /**
   * @remarks
   * The mount point of the data disk. The naming conventions for mount points vary based on the number of data disks attached:
   * - 1 to 25 data disks: /dev/xvd`[b-z]`
   * 
   * - More than 25 data disks: /dev/xvd`[aa-zz]`. For example, the 26th data disk is named /dev/xvdaa, the 27th data disk is named /dev/xvdab, and so on.
   * 
   * > This parameter is applicable only to full image (system image) scenarios. You can set this parameter to the mount point of the data disk in the full image and modify the corresponding `DataDisk.N.Size` and `DataDisk.N.Category` parameters to change the disk category and size of the data disk in the full image.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The name of the data disk. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (_), and hyphens (-).
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
   * The KMS key ID for the data disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The performance level of the ESSD used as a data disk. The value of N must be the same as that in `DataDisk.N.Category=cloud_essd`. Configure the performance level based on the following valid values:
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
   * The provisioned read/write IOPS of the ESSD AutoPL disk used as the system disk. Valid values: 0 to min{50000, 1000 × Capacity - Baseline Performance}.
   * 
   * Baseline Performance = min{1,800 + 50 × Capacity, 50,000}.
   * 
   * > This parameter is available only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html) and [Modify the provisioned performance of an ESSD AutoPL disk](https://help.aliyun.com/document_detail/413275.html).
   * 
   * @example
   * 50000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of data disk N. Valid values of N: 1 to 16. Unit: GiB. Valid values:
   * 
   * -   cloud: 5 to 2000.
   * -   cloud_efficiency: 20 to 32768.
   * -   cloud_ssd: 20 to 32768.
   * -   cloud_essd: The valid value range depends on the value of `DataDisk.N.PerformanceLevel`.   
   *     - PL0: 1 to 32768.
   *     - PL1: 20 to 32768.
   *     - PL2: 461 to 32768.
   *     - PL3: 1261 to 32768.
   * - cloud_auto: 1 to 32,768.
   * - cloud_essd_entry: 10 to 32,768.
   * 
   * The value of this parameter must be greater than or equal to the size of the snapshot specified by `SnapshotId`.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot used to create data disk N. Valid values of N: 1 to 16. When `DataDisk.N.SnapshotId` is specified, `DataDisk.N.Size` is ignored. The actual size of the created disk is the size of the specified snapshot.
   * 
   * Snapshots created on or before July 15, 2013 cannot be used. Requests that use such snapshots are rejected.
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
   * Specifies whether instances that use this image support logon with the ecs-user user.
   * Valid values:
   * - true: supported.
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

export class CreateLaunchTemplateVersionRequestNetworkInterface extends $dara.Model {
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
   * The description of the secondary network interface controller (NIC). The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`. The value of N in `NetworkInterface.N` cannot be greater than 1.
   * 
   * @example
   * testNetworkInterfaceDescription
   */
  description?: string;
  /**
   * @remarks
   * The type of the ENI. Valid values of N: 1 to 2. If you configure one ENI, you can configure either a primary network interface controller (NIC) or a secondary ENI. If you configure two ENIs, you must configure one primary NIC and one secondary ENI.
   * 
   * Valid values:
   * 
   * - Primary: primary NIC.
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
   * The name of the secondary network interface controller (NIC). The value of N in `NetworkInterface.N` cannot be greater than 1.
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
   * The primary private IP address of the secondary network interface controller (NIC). The value of N in `NetworkInterface.N` cannot be greater than 1.
   * 
   * @example
   * ``192.168.**.**``
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * The ID of the security group to which the secondary network interface controller (NIC) belongs. The security group of the secondary NIC must belong to the same VPC as the instance. The value of N in `NetworkInterface.N` cannot be greater than 1.
   * 
   * > You cannot specify both `NetworkInterface.N.SecurityGroupId` and `NetworkInterface.N.SecurityGroupIds.N`.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of one or more security groups to which the secondary network interface controller (NIC) belongs. The security groups and the secondary NIC must belong to the same VPC. The valid values of N in `SecurityGroupIds.N` depend on the quota for the maximum number of security groups to which a secondary NIC can belong. For more information, see [Limits](https://help.aliyun.com/document_detail/25412.html). The value of N in `NetworkInterface.N` cannot be greater than 1.
   * 
   * > You cannot specify both `NetworkInterface.N.SecurityGroupId` and `NetworkInterface.N.SecurityGroupIds.N`.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The ID of the vSwitch to which the secondary network interface controller (NIC) belongs. The instance and the secondary NIC must be in the same VPC and the same active zone but can belong to different vSwitches. The value of N in `NetworkInterface.N` cannot be greater than 1.
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
   * The trusted system mode. Set the value to vTPM.
   * 
   * The following instance families support trusted system mode:
   * - g7, c7, and r7.
   * - Security-enhanced instance family (g7t, c7t, and r7t).
   * 
   * When you create ECS instances of the preceding instance families, you must configure this parameter. Details:
   * 
   * - To use the Alibaba Cloud Trusted System, set this parameter to vTPM. The trusted verification is completed by the Alibaba Cloud Trusted System when the instance starts.
   * - If you do not use the Alibaba Cloud Trusted System, you can leave this parameter empty. However, if the ECS instance that you create uses the Enclave-based confidential computing mode (`SecurityOptions.ConfidentialComputingMode=Enclave`), the trusted system is also enabled for the instance.
   * - When you create a trusted ECS instance by invoking an API operation, you can only invoke `RunInstances`. `CreateInstance` does not support configuring the `SecurityOptions.TrustedSystemMode` parameter.
   * > If you specify an instance as a trusted instance during creation, you can only use images that support the trusted system when you replace the system disk.
   * 
   * For more information about the trusted system, see [Overview of trusted features for security-enhanced instances](https://help.aliyun.com/document_detail/201394.html).
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
   * The tag key of the instances, disks, and primary ENIs created by using this version. Valid values of N: 1 to 20. The tag key cannot be an empty string. It can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instances, disks, and primary ENIs created by using this version. Valid values of N: 1 to 20. The tag value can be an empty string. It can be up to 128 characters in length and cannot contain http:// or https://.
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
   * The automatic release time. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * - If the value of seconds (`ss`) is not `00`, the time is automatically rounded to the start of the current minute (`mm`).
   * 
   * - The earliest release time is 30 minutes after the current time.
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
   * - false: does not enable auto-renewal.
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
   * - If PeriodUnit is set to Week: 1, 2, and 3.
   * - If PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * 
   * 
   * <props="intl">If PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The running mode of the burstable instance. Valid values:
   * 
   * - Standard: standard mode. For more information, see the performance constrained mode section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * - Unlimited: unlimited mode. For more information, see the unlimited mode section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The list of data disks.
   */
  dataDisk?: CreateLaunchTemplateVersionRequestDataDisk[];
  /**
   * @remarks
   * The release protection attribute of the instance. Specifies whether the instance can be released from the console or by calling [DeleteInstance](https://help.aliyun.com/document_detail/25507.html). Valid values:
   * - true: enables release protection.
   * 
   * - false: disables release protection.
   * 
   * Default value: false.
   * 
   * > This attribute is applicable only to pay-as-you-go instances. It can only restrict manual release operations and does not take effect on system-initiated release operations.
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
   * The description of the instance. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
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
   * The hostname of the Elastic Compute Service (ECS) server.
   * 
   * -   The hostname cannot start or end with a period (.) or hyphen (-), and cannot contain consecutive periods or hyphens.
   * -   Windows instances: The hostname must be 2 to 15 characters in length and cannot contain periods (.) or consist entirely of digits. It can contain letters, digits, and hyphens (-).
   * -   Other instances (such as Linux): The hostname must be 2 to 64 characters in length. It can contain multiple periods (.), with each segment between periods allowing letters, digits, and hyphens (-).
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
   * > For more information about instance metadata, see [Overview of ECS instance metadata](https://help.aliyun.com/document_detail/108460.html).
   * 
   * @example
   * enabled
   */
  httpEndpoint?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * 3
   */
  httpPutResponseHopLimit?: number;
  /**
   * @remarks
   * Specifies whether to forcefully use the security-hardened mode (IMDSv2) to access instance metadata. Valid values:
   * 
   * - optional: does not forcefully use the security-hardened mode.
   * - required: forcefully uses the security-hardened mode. After you set this value, the normal mode cannot be used to access instance metadata.
   * 
   * Default value: optional.
   * 
   * > For more information about the modes for accessing instance metadata, see [Overview of ECS instance metadata](https://help.aliyun.com/document_detail/108460.html).
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The ID of the image used to create the instance. You can call [DescribeImages](https://help.aliyun.com/document_detail/25534.html) to query available image resources.
   * 
   * @example
   * win2008r2_64_ent_sp1_en-us_40G_alibase_20170915.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The image-related property information.
   */
  imageOptions?: CreateLaunchTemplateVersionRequestImageOptions;
  /**
   * @remarks
   * The source of the image.
   * > This parameter will be deprecated. To improve compatibility, use other parameters.
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
   * - PrePaid: subscription. If you set this parameter to PrePaid, confirm that your account supports balance payment or credit payment. Otherwise, an `InvalidPayMethod` fault is returned.
   * - PostPaid: pay-as-you-go.
   * 
   * 
   * <props="intl">
   * - PrePaid: subscription. If you set this parameter to PrePaid, confirm that your account supports credit payment. Otherwise, an `InvalidPayMethod` fault is returned.
   * - PostPaid: pay-as-you-go.
   * 
   * 
   * <props="partner">
   * - PrePaid: subscription. If you set this parameter to PrePaid, confirm that your account supports credit payment. Otherwise, an `InvalidPayMethod` fault is returned.
   * - PostPaid: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The name of the instance. The name must be 2 to 128 characters in length and can contain letters, digits, and characters from the Unicode letter category (which includes characters from various languages). The name can contain colons (:), underscores (_), periods (.), and hyphens (-). The default value is the `InstanceId` of the instance.
   * 
   * When you create multiple ECS instances at a time, you can batch configure sequential instance names that contain brackets ([]) and commas (,). For more information, see [Batch configure sequential names or hostnames for multiple instances](https://help.aliyun.com/document_detail/196048.html).
   * 
   * @example
   * k8s-node-[1,4]-alibabacloud
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type. For more information, see [Instance family](https://help.aliyun.com/document_detail/25378.html). You can also call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query the most recent instance type list.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The billing method for outbound Internet bandwidth. Valid values:
   * 
   * - PayByBandwidth: pay-by-bandwidth.
   * - PayByTraffic: pay-by-traffic.
   * 
   * > In **pay-by-traffic** mode, the peak inbound and outbound bandwidths are used as upper limits of bandwidths instead of guaranteed performance specifications. When resource contention occurs, the peak bandwidths may be limited. If you want guaranteed bandwidth, use the **pay-by-bandwidth** mode.
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
   * -   none: The instance is not I/O optimized.
   * -   optimized: The instance is I/O optimization enabled.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The number of IPv6 addresses to randomly generate for the primary ENI. Valid values: 1 to 10.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * -   For Windows instances, this parameter is ignored. Even if you specify this parameter, only the `Password` content is used.
   * -   For Linux instances, password-based logon is disabled during initialization.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The ID of the launch template. For more information, call [DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html). You must specify `LaunchTemplateId` or `LaunchTemplateName` to determine the launch template.
   * 
   * @example
   * lt-m5eiaupmvm2op9d****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The name of the launch template. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testLaunchTemplateName
   */
  launchTemplateName?: string;
  /**
   * @remarks
   * The network interface controller (NIC) information.
   */
  networkInterface?: CreateLaunchTemplateVersionRequestNetworkInterface[];
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * - vpc: VPC.
   * - classic: classic network. The classic network has been retired. For more information, see [Retirement notice](https://help.aliyun.com/document_detail/2833134.html).
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
   * > When you use this parameter, the Password parameter must be empty. You must also make sure that the image has a preset password.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The subscription duration of the resource. Unit: months. This parameter takes effect and is required only when `InstanceChargeType` is set to `PrePaid`. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
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
   * The private IP address of the instance.
   * 
   * When you specify a private IP address for a VPC-connected ECS instance, the IP address must be from the idle CIDR block of the vSwitch (`VSwitchId`).
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
   * testRamRoleName
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * -   Deactive: does not enable security hardening. This value is applicable to all image types.
   * 
   * @example
   * Active
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group to which the instance created by using this version belongs. Instances in the same security group can communicate with each other.
   * 
   * > You cannot specify both `SecurityGroupId` and `SecurityGroupIds.N`.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of one or more security groups to which the instance belongs. The valid values of N depend on the maximum number of security groups to which an instance can belong. For more information, see [Limits](https://help.aliyun.com/document_detail/25412.html).
   * 
   * > You cannot specify both `SecurityGroupId` and `SecurityGroupIds.N`.
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
   * - 1: After a spot instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After the 1-hour protection period ends, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain automatic release the instance.
   * - 0: After a spot instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system compares the bid price with the market price and checks the resource inventory to determine whether to retain automatic release the instance.
   * 
   * Alibaba Cloud sends an ECS system event notification 5 minutes before the instance is released. Spot instances are billed by second. We recommend that you select an appropriate protection period based on the expected task execution duration.
   * 
   * > This parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit or SpotAsPriceGo.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The maximum hourly price of the instance. A maximum of three decimal places are supported.
   * 
   * @example
   * 0.97
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The preemption policy for the pay-as-you-go instance. This parameter takes effect when `InstanceChargeType` is set to `PostPaid`. Valid values:
   * 
   * -   NoSpot: The instance is a regular pay-as-you-go instance.
   * -   SpotWithPriceLimit: The instance is a spot instance with a user-defined maximum hourly price.
   * -   SpotAsPriceGo: The instance is a spot instance for which the market price at the time of purchase is automatically used as the bid price.
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
   * Instance user data of the instance. Instance user data must be encoded in Base64. The raw data can be up to 32 KB in size.
   * 
   * @example
   * ZWNobyBoZWxsbyBl****
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the vSwitch. You must specify this parameter when you create a VPC-connected instance.
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

