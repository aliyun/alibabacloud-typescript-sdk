// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationArn extends $dara.Model {
  /**
   * @remarks
   * > This parameter is in invitational preview and is not supported.
   * 
   * @example
   * 123456789012****
   */
  assumeRoleFor?: number;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not supported.
   * 
   * @example
   * 34458433936495****:alice
   */
  roleType?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not supported.
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
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

export class CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationDataDisk extends $dara.Model {
  /**
   * @remarks
   * The automatic snapshot policy ID applied to the data disk.
   * 
   * Note:
   * 
   * - This parameter takes effect only when creating an auto provisioning group with AutoProvisioningGroupType=instant.
   * 
   * @example
   * sp-bp67acfmxazb4p****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable performance burst. Valid values:
   * 
   * - true: Enables performance burst.
   * 
   * - false: Disables performance burst.
   * 
   * > This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of data disk N. N ranges from 1 to 16. Valid values:
   * 
   * - cloud_efficiency: Ultra disk.
   * 
   * - cloud_ssd: Standard SSD.
   * 
   * - cloud_essd: ESSD.
   * 
   * - cloud: Basic disk.
   * 
   * For I/O optimized instances, the default value is cloud_efficiency. For non-I/O optimized instances, the default value is cloud.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release the data disk when the instance is released. Valid values:
   * 
   * - true: Releases the data disk with the instance.
   * 
   * - false: Does not release the data disk with the instance.
   * 
   * Default value: true.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the data disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`. When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * DataDisk_Description
   */
  description?: string;
  /**
   * @remarks
   * The mount point of the data disk. When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * /dev/vd1
   */
  device?: string;
  /**
   * @remarks
   * The name of the data disk. The name must be 2 to 128 characters in length and can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * Default value: empty.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * cloud_ssdData
   */
  diskName?: string;
  /**
   * @remarks
   * > This parameter is not yet available.
   * 
   * @example
   * null
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt data disk N. Valid values:
   * 
   * - true: Encrypts the disk.
   * 
   * - false: Does not encrypt the disk.
   * 
   * Default value: false.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The KMS key ID for the data disk. When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The performance level of the ESSD used as a data disk. The value of N must match the N in `LaunchConfiguration.DataDisk.N.Category`. Valid values:
   * 
   * - PL0: Up to 10,000 random read/write IOPS per disk.
   * 
   * - PL1 (default): Up to 50,000 random read/write IOPS per disk.
   * 
   * - PL2: Up to 100,000 random read/write IOPS per disk.
   * 
   * - PL3: Up to 1,000,000 random read/write IOPS per disk.
   * 
   * For more information about selecting ESSD performance levels, see [ESSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS for ESSD AutoPL disks. Valid values: 0 to min{50,000, 1000 × capacity - baseline performance}.
   * 
   * Baseline performance = min{1,800 + 50 × capacity, 50,000}.
   * 
   * > This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of data disk N, in GiB. N ranges from 1 to 16. Valid values:
   * 
   * - cloud_efficiency: 20–32768.
   * 
   * - cloud_ssd: 20–32768.
   * 
   * - cloud_essd: The valid range depends on the value of `LaunchConfiguration.DataDisk.N.PerformanceLevel`.
   * 
   *   - PL0: 40–32768.
   * 
   *   - PL1: 20–32768.
   * 
   *   - PL2: 461–32768.
   * 
   *   - PL3: 1261–32768
   * 
   * - cloud: 5–2000.
   * 
   * > The value must be greater than or equal to the size of the snapshot specified by `LaunchConfiguration.DataDisk.N.SnapshotId`.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The snapshot used to create data disk N. N ranges from 1 to 16.
   * 
   * After this parameter is specified, `LaunchConfiguration.DataDisk.N.Size` is ignored. The actual disk size equals the size of the specified snapshot. Snapshots created on or before July 15, 2013 are not supported and will cause the request to fail.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
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
      encryptAlgorithm: 'EncryptAlgorithm',
      encrypted: 'Encrypted',
      kmsKeyId: 'KmsKeyId',
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
      encryptAlgorithm: 'string',
      encrypted: 'boolean',
      kmsKeyId: 'string',
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

export class CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The automatic snapshot policy ID applied to the system disk.
   * 
   * Note:
   * 
   * - This parameter takes effect only when creating an auto provisioning group with AutoProvisioningGroupType=instant.
   * 
   * @example
   * sp-bp67acfmxazb4p****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable performance burst. Valid values:
   * 
   * - true: Enables performance burst.
   * 
   * - false: Disables performance burst.
   * 
   * > This parameter is supported only when `SystemDisk.Category` is set to `cloud_auto`. For more information, see [ESSD AutoPL](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The encryption algorithm for the system disk. Valid values:
   * 
   * - aes-256.
   * 
   * - sm4-128.
   * 
   * Default value: aes-256.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * aes-256
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt system disk N. Valid values:
   * 
   * - true: Encrypts the disk.
   * 
   * - false: Does not encrypt the disk.
   * 
   * Default value: false.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The KMS key ID for the system disk.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS for ESSD AutoPL disks. Valid values: 0 to min{50,000, 1000 × capacity - baseline performance}.
   * 
   * Baseline performance = min{1,800 + 50 × capacity, 50,000}.
   * 
   * > This parameter is supported only when SystemDisk.Category is set to cloud_auto. For more information, see [ESSD AutoPL](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      burstingEnabled: 'BurstingEnabled',
      encryptAlgorithm: 'EncryptAlgorithm',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      provisionedIops: 'ProvisionedIops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      burstingEnabled: 'boolean',
      encryptAlgorithm: 'string',
      encrypted: 'string',
      KMSKeyId: 'string',
      provisionedIops: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. N ranges from 1 to 20. If specified, the value cannot be an empty string. The key can be up to 128 characters in length and cannot start with aliyun or acs:. It also cannot contain `http://` or `https://`. When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance. N ranges from 1 to 20. If specified, the value can be an empty string. The value can be up to 128 characters in length and cannot start with acs:. It also cannot contain `http://` or `https://`. When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
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

export class CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationCpuOptions extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * Default value: See [Customize CPU options](https://help.aliyun.com/zh/ecs/user-guide/specify-and-view-cpu-options?spm=a2c4g.11186623.0.0.734f769asTEobd).
   * 
   * @example
   * 2
   */
  core?: number;
  /**
   * @remarks
   * The number of CPU threads. The vCPU count of an ECS instance equals CpuOptions.Core × CpuOptions.ThreadsPerCore.
   * 
   * CpuOptions.ThreadsPerCore=1 disables CPU hyper-threading.
   * 
   * Only specific instance types support setting the number of CPU threads.
   * 
   * Valid values and default values: See [Customize CPU options](https://help.aliyun.com/zh/ecs/user-guide/specify-and-view-cpu-options?spm=a2c4g.11186623.0.0.734f769aeIFsoj).
   * 
   * @example
   * 2
   */
  threadsPerCore?: number;
  static names(): { [key: string]: string } {
    return {
      core: 'Core',
      threadsPerCore: 'ThreadsPerCore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      core: 'number',
      threadsPerCore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationImageOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether instances using this image support logging on as the ecs-user. Valid values:
   * 
   * - true: Supported.
   * 
   * - false: Not supported.
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

export class CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationSchedulerOptions extends $dara.Model {
  dedicatedHostClusterId?: string;
  dedicatedHostId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostClusterId: 'DedicatedHostClusterId',
      dedicatedHostId: 'DedicatedHostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostClusterId: 'string',
      dedicatedHostId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationSecurityOptions extends $dara.Model {
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

export class CreateAutoProvisioningGroupShrinkRequestLaunchConfiguration extends $dara.Model {
  /**
   * @remarks
   * > This parameter is in invitational preview and is not supported.
   */
  arn?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationArn[];
  /**
   * @remarks
   * The automatic release time for pay-as-you-go instances. Specify the time in [ISO 8601](https://help.aliyun.com/document_detail/25696.html) format using UTC+0 time. Format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * - If seconds (`ss`) are not `00`, the time is rounded down to the start of the current minute (`mm`).
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
   * The running mode of burstable instances. Valid values:
   * 
   * - Standard: Standard mode. For more information, see the "Performance-constrained mode" section in [What are burstable instances?](https://help.aliyun.com/document_detail/59977.html)
   * 
   * - Unlimited: Unlimited mode. For more information, see the "Unlimited mode" section in [What are burstable instances?](https://help.aliyun.com/document_detail/59977.html)
   * 
   * Default value: None.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The list of data disk configurations for the extended launch template.
   */
  dataDisk?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationDataDisk[];
  /**
   * @remarks
   * The deployment set ID.
   * 
   * @example
   * ds-bp1frxuzdg87zh4p****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The hostname of the instance. Requirements:
   * 
   * - Periods (.) and hyphens (-) cannot be the first or last character and cannot appear consecutively.
   * 
   * - Windows instances: 2–15 characters. Periods (.) are not supported. Cannot consist of only digits. Can contain letters, digits, and hyphens (-).
   * 
   * - Other instances (such as Linux): 2–64 characters. Multiple periods (.) are supported. Each segment between periods can contain letters, digits, and hyphens (-).
   * 
   * - Do not set both `LaunchConfiguration.HostName` and `LaunchConfiguration.HostNames.N`. Otherwise, an error is returned.
   * 
   * - When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * k8s-node-[1,4]-ecshost
   */
  hostName?: string;
  /**
   * @remarks
   * The list of hostnames for one or more instances. Requirements:
   * 
   * - This parameter takes effect only when creating an auto provisioning group with `AutoProvisioningGroupType=instant`.
   * 
   * - N indicates the number of instances. Valid values: 1 to 1000. The value must match TotalTargetCapacity.
   * 
   * - Periods (.) and hyphens (-) cannot be the first or last character and cannot appear consecutively.
   * 
   * - When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * ecs-host-01
   */
  hostNames?: string[];
  /**
   * @remarks
   * The image family name. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It must start with a letter and cannot start with `aliyun` or `acs:`. It also cannot contain `http://` or `https://`.
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The image ID. This is the image used when launching instances. Call [DescribeImages](https://help.aliyun.com/document_detail/25534.html) to query available images. When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * m-bp1g7004ksh0oeuc****
   */
  imageId?: string;
  /**
   * @remarks
   * The instance description. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`. When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * Instance_Description
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The instance name. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * Default value: The instance `InstanceId`.
   * 
   * To create multiple ECS instances, you can batch configure sequential instance names. For more information, see [Batch configure sequential instance names or hostnames](https://help.aliyun.com/document_detail/196048.html).
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * k8s-node-[1,4]-alibabacloud
   */
  instanceName?: string;
  /**
   * @remarks
   * The network billing type. Valid values:
   * 
   * - PayByBandwidth: Pay-by-bandwidth.
   * 
   * - PayByTraffic: Pay-by-traffic.
   * 
   * > For pay-by-traffic, inbound and outbound bandwidth peaks represent upper limits and are not service-level commitments. Bandwidth may be throttled during resource contention. Use pay-by-bandwidth if your workload requires guaranteed bandwidth.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth, in Mbit/s. Valid values:
   * 
   * - When outbound public bandwidth is ≤ 10 Mbit/s: 1–10. Default: 10.
   * 
   * - When outbound public bandwidth is > 10 Mbit/s: 1–`LaunchConfiguration.InternetMaxBandwidthOut`. Default: `LaunchConfiguration.InternetMaxBandwidthOut`.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth, in Mbit/s. Valid values: 0–100.
   * 
   * Default value: 0.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Specifies whether the instance is I/O optimized. Valid values:
   * 
   * - none: Not I/O optimized.
   * 
   * - optimized: I/O optimized.
   * 
   * For retired instance types, the default value is none. For other instance types, the default value is optimized.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The key pair name.
   * 
   * - For Windows instances, this parameter is ignored. Default value: empty.
   * 
   * - For Linux instances, password logon is disabled after initialization.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * KeyPair_Name
   */
  keyPairName?: string;
  /**
   * @remarks
   * The instance password. The password must be 8 to 30 characters in length and include at least three of the following: uppercase letters, lowercase letters, digits, and special characters. Valid special characters:
   * 
   * ``()`~!@#$%^&*-_+=|{}`[]`:;\\"<>,.?/``
   * 
   * For Windows instances, the password cannot start with a forward slash (/).
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
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
   * 
   * - false: Does not use the preset password.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * true
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The RAM role name of the instance. Use the RAM API [ListRoles](https://help.aliyun.com/document_detail/28713.html) to query your created RAM roles. When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * RAM_Name
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The resource group ID of the instance. When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable security hardening. Valid values:
   * 
   * - Active: Enables security hardening. Applies only to public images.
   * 
   * - Deactive: Disables security hardening. Applies to all image types.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * Active
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The security group ID of the instance. When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The list of security groups to which the instance belongs.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * System disk information for the instance. When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   */
  systemDisk?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationSystemDisk;
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * - cloud_efficiency: Ultra disk.
   * 
   * - cloud_ssd: Standard SSD.
   * 
   * - cloud_essd: ESSD.
   * 
   * - cloud: Basic disk.
   * 
   * For retired instance types that are not I/O optimized, the default value is cloud. Otherwise, the default value is cloud_efficiency.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The description of the system disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * SystemDisk_Description
   */
  systemDiskDescription?: string;
  /**
   * @remarks
   * The name of the system disk. The name must be 2 to 128 characters in length and can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * Default value: empty.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * cloud_ssdSystem
   */
  systemDiskName?: string;
  /**
   * @remarks
   * The performance level of the ESSD used as the system disk. Valid values:
   * 
   * - PL0 (default): Up to 10,000 random read/write IOPS per disk.
   * 
   * - PL1: Up to 50,000 random read/write IOPS per disk.
   * 
   * - PL2: Up to 100,000 random read/write IOPS per disk.
   * 
   * - PL3: Up to 1,000,000 random read/write IOPS per disk.
   * 
   * For more information about selecting ESSD performance levels, see [ESSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * PL0
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk, in GiB. Valid values: 20–500. The value must be greater than or equal to max{20, size of the image specified by LaunchConfiguration.ImageId}.
   * 
   * Default value: max{40, size of the image specified by LaunchConfiguration.ImageId}.
   * 
   * When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The list of tags for the extended launch template.
   */
  tag?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationTag[];
  /**
   * @remarks
   * The instance user data. Encode the data in Base64. The raw data cannot exceed 32 KB. When both a launch template and launch configuration parameters are specified, the launch template takes precedence.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Takes effect when creating subscription instances. Valid values:
   * 
   * - true: Enables auto-renewal.
   * 
   * - false (default): Disables auto-renewal.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration per cycle. Valid values:
   * 
   * <props="china">
   * 
   * - When PeriodUnit=Week: 1, 2, 3.
   * 
   * - When PeriodUnit=Month: 1, 2, 3, 6, 12, 24, 36, 48, 60.
   * 
   * 
   * 
   * <props="intl">
   * 
   * When PeriodUnit=Month: 1, 2, 3, 6, 12, 24, 36, 48, 60.
   * 
   * 
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * CPU configuration.
   */
  cpuOptions?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationCpuOptions;
  /**
   * @remarks
   * Image-related properties.
   * 
   * Note:
   * 
   * - This parameter takes effect only when creating an auto provisioning group with AutoProvisioningGroupType=instant.
   */
  imageOptions?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationImageOptions;
  /**
   * @remarks
   * The subscription duration. The unit is specified by `PeriodUnit`. Required when creating subscription instances. Valid values:
   * 
   * <props="china">
   * 
   * - When PeriodUnit=Week, Period values: 1, 2, 3, 4.
   * 
   * - When PeriodUnit=Month, Period values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
   * 
   * 
   * 
   * <props="intl">
   * 
   * When PeriodUnit=Month, Period values: 1, 2, 3, 6, 12.
   * 
   * 
   * 
   * <props="partner">
   * 
   * When PeriodUnit=Month, Period values: 1, 2, 3, 6, 12.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The time unit for subscription billing. Valid values:
   * 
   * <props="china">
   * 
   * - Week.
   * 
   * - Month (default).
   * 
   * 
   * 
   * <props="intl">
   * 
   * Month (default).
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  schedulerOptions?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationSchedulerOptions;
  securityOptions?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationSecurityOptions;
  /**
   * @remarks
   * The reserved duration for spot instances, in hours. Default value: 1. Valid values:
   * 
   * - 1: Alibaba Cloud guarantees that the instance runs for 1 hour without being automatically released. After 1 hour, the system compares your bid price with the market price and checks inventory to decide whether to retain or reclaim the instance.
   * 
   * - 0: Alibaba Cloud does not guarantee that the instance runs for 1 hour. The system immediately compares your bid price with the market price and checks inventory to decide whether to retain or reclaim the instance.
   * 
   * Alibaba Cloud sends an ECS system event notification 5 minutes before reclaiming a spot instance. Spot instances are billed per second. Choose the reserved duration based on your task execution time.
   * 
   * Note:
   * 
   * - This parameter takes effect only when creating an auto provisioning group with AutoProvisioningGroupType=instant.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The interruption behavior for spot instances. Valid values:
   * 
   * - Terminate: Releases the instance immediately.
   * 
   * - Stop: Puts the instance into economical mode.
   * 
   * For more information about economical mode, see [Economical mode](https://help.aliyun.com/document_detail/63353.html).
   * 
   * Default value: Terminate.
   * 
   * Note:
   * 
   * - This parameter takes effect only when creating an auto provisioning group with AutoProvisioningGroupType=instant.
   * 
   * @example
   * Terminate
   */
  spotInterruptionBehavior?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      autoReleaseTime: 'AutoReleaseTime',
      creditSpecification: 'CreditSpecification',
      dataDisk: 'DataDisk',
      deploymentSetId: 'DeploymentSetId',
      hostName: 'HostName',
      hostNames: 'HostNames',
      imageFamily: 'ImageFamily',
      imageId: 'ImageId',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      keyPairName: 'KeyPairName',
      password: 'Password',
      passwordInherit: 'PasswordInherit',
      ramRoleName: 'RamRoleName',
      resourceGroupId: 'ResourceGroupId',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      systemDisk: 'SystemDisk',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskDescription: 'SystemDiskDescription',
      systemDiskName: 'SystemDiskName',
      systemDiskPerformanceLevel: 'SystemDiskPerformanceLevel',
      systemDiskSize: 'SystemDiskSize',
      tag: 'Tag',
      userData: 'UserData',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      cpuOptions: 'CpuOptions',
      imageOptions: 'ImageOptions',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      schedulerOptions: 'SchedulerOptions',
      securityOptions: 'SecurityOptions',
      spotDuration: 'SpotDuration',
      spotInterruptionBehavior: 'SpotInterruptionBehavior',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationArn },
      autoReleaseTime: 'string',
      creditSpecification: 'string',
      dataDisk: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationDataDisk },
      deploymentSetId: 'string',
      hostName: 'string',
      hostNames: { 'type': 'array', 'itemType': 'string' },
      imageFamily: 'string',
      imageId: 'string',
      instanceDescription: 'string',
      instanceName: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      keyPairName: 'string',
      password: 'string',
      passwordInherit: 'boolean',
      ramRoleName: 'string',
      resourceGroupId: 'string',
      securityEnhancementStrategy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      systemDisk: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationSystemDisk,
      systemDiskCategory: 'string',
      systemDiskDescription: 'string',
      systemDiskName: 'string',
      systemDiskPerformanceLevel: 'string',
      systemDiskSize: 'number',
      tag: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationTag },
      userData: 'string',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      cpuOptions: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationCpuOptions,
      imageOptions: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationImageOptions,
      period: 'number',
      periodUnit: 'string',
      schedulerOptions: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationSchedulerOptions,
      securityOptions: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationSecurityOptions,
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.arn)) {
      $dara.Model.validateArray(this.arn);
    }
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    if(Array.isArray(this.hostNames)) {
      $dara.Model.validateArray(this.hostNames);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(this.cpuOptions && typeof (this.cpuOptions as any).validate === 'function') {
      (this.cpuOptions as any).validate();
    }
    if(this.imageOptions && typeof (this.imageOptions as any).validate === 'function') {
      (this.imageOptions as any).validate();
    }
    if(this.schedulerOptions && typeof (this.schedulerOptions as any).validate === 'function') {
      (this.schedulerOptions as any).validate();
    }
    if(this.securityOptions && typeof (this.securityOptions as any).validate === 'function') {
      (this.securityOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoProvisioningGroupShrinkRequestCandidateOptions extends $dara.Model {
  evaluate?: boolean;
  /**
   * @example
   * 60
   */
  timeoutMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      evaluate: 'Evaluate',
      timeoutMinutes: 'TimeoutMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluate: 'boolean',
      timeoutMinutes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoProvisioningGroupShrinkRequestDataDiskConfig extends $dara.Model {
  /**
   * @remarks
   * The data disk type. You can specify multiple candidate disk types. The order specifies their priority. If one disk type is unavailable, the system automatically switches to the next type. Valid values:
   * 
   * - cloud_efficiency: Ultra disk.
   * 
   * - cloud_ssd: Standard SSD.
   * 
   * - cloud_essd: ESSD.
   * 
   * - cloud: Basic disk.
   * 
   * @example
   * cloud_efficiency
   */
  diskCategory?: string;
  static names(): { [key: string]: string } {
    return {
      diskCategory: 'DiskCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskCategory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoProvisioningGroupShrinkRequestLaunchTemplateConfig extends $dara.Model {
  /**
   * @remarks
   * The list of architecture types for instance types.
   */
  architectures?: string[];
  /**
   * @remarks
   * Specifies whether the instance type supports performance bursts. Valid values:
   * 
   * - Exclude: Excludes burstable instance types.
   * 
   * - Include: Includes burstable instance types.
   * 
   * - Required: Includes only burstable instance types.
   * 
   * Default value: Include.
   * 
   * @example
   * Include
   */
  burstablePerformance?: string;
  /**
   * @remarks
   * The list of vCPU counts for instance types.
   */
  cores?: number[];
  /**
   * @remarks
   * The list of instance types to exclude.
   */
  excludedInstanceTypes?: string[];
  /**
   * @remarks
   * The image ID. Use this parameter to specify the image for the current resource pool. If not set, the image specified in `LaunchConfiguration.ImageId` or the launch template is used by default. Call [DescribeImages](https://help.aliyun.com/document_detail/25534.html) to query available images.
   * Note: This parameter is supported only when `AutoProvisioningGroupType = instant`.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20210425.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The instance family level, used to filter eligible instance types. Valid values:
   * 
   * - EntryLevel: Entry-level, or shared-resource instances. Lower cost but no guaranteed stable computing performance. Suitable for workloads with low average CPU usage. For more information, see [Shared-resource instances](https://help.aliyun.com/document_detail/108489.html).
   * 
   * - EnterpriseLevel: Enterprise-level. Stable performance with dedicated resources. Suitable for workloads requiring high stability. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * - CreditEntryLevel: Credit entry-level, or burstable instances. Uses CPU credits to guarantee computing performance. Suitable for workloads with low average CPU usage and occasional bursts. For more information, see [Burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * N ranges from 1 to 10.
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The instance type corresponding to the extended launch template. N ranges from 1 to 20. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum hourly price for spot instances in the extended launch template.
   * 
   * > After `LaunchTemplateConfig` is set, `LaunchTemplateConfig.N.MaxPrice` is required.
   * 
   * @example
   * 3
   */
  maxPrice?: number;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not supported.
   * 
   * @example
   * false
   */
  maxQuantity?: number;
  /**
   * @remarks
   * The list of memory sizes for instance types.
   */
  memories?: number[];
  /**
   * @remarks
   * The priority of the extended launch template. A value of 0 indicates the highest priority. Valid values: 0 to +∞.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the virtual switch to which the ECS instance belongs in the extended launch template. The zone of the ECS instance launched from this template is determined by the virtual switch.
   * 
   * > After `LaunchTemplateConfig` is set, `LaunchTemplateConfig.N.VSwitchId` is required.
   * 
   * @example
   * vsw-sn5bsitu4lfzgc5o7****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The weight of the instance type in the extended launch template. A higher value indicates greater computing power per instance and fewer instances needed. Valid values: Greater than 0.
   * 
   * You can calculate the weight based on the computing power of the specified instance type and the minimum computing power required per node in the cluster. For example, if the minimum computing power per node is 8 vCPUs and 60 GiB memory:
   * 
   * - An instance type with 8 vCPUs and 60 GiB memory can have a weight of 1.
   * 
   * - An instance type with 16 vCPUs and 120 GiB memory can have a weight of 2.
   * 
   * @example
   * 2
   */
  weightedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      architectures: 'Architectures',
      burstablePerformance: 'BurstablePerformance',
      cores: 'Cores',
      excludedInstanceTypes: 'ExcludedInstanceTypes',
      imageId: 'ImageId',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instanceType: 'InstanceType',
      maxPrice: 'MaxPrice',
      maxQuantity: 'MaxQuantity',
      memories: 'Memories',
      priority: 'Priority',
      vSwitchId: 'VSwitchId',
      weightedCapacity: 'WeightedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectures: { 'type': 'array', 'itemType': 'string' },
      burstablePerformance: 'string',
      cores: { 'type': 'array', 'itemType': 'number' },
      excludedInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      imageId: 'string',
      instanceFamilyLevel: 'string',
      instanceType: 'string',
      maxPrice: 'number',
      maxQuantity: 'number',
      memories: { 'type': 'array', 'itemType': 'number' },
      priority: 'number',
      vSwitchId: 'string',
      weightedCapacity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.architectures)) {
      $dara.Model.validateArray(this.architectures);
    }
    if(Array.isArray(this.cores)) {
      $dara.Model.validateArray(this.cores);
    }
    if(Array.isArray(this.excludedInstanceTypes)) {
      $dara.Model.validateArray(this.excludedInstanceTypes);
    }
    if(Array.isArray(this.memories)) {
      $dara.Model.validateArray(this.memories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoProvisioningGroupShrinkRequestPrePaidOptionsSpecifyCapacityDistribution extends $dara.Model {
  /**
   * @remarks
   * The set of instance types. Duplicates are not allowed, and the types must be within the range of LaunchTemplateConfig.InstanceType.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The minimum number of instances to deliver within the `InstanceTypes` range.
   * 
   * > `sum(MinTargetCapacity)<= TotalTargetCapacity`. The sum of MinTargetCapacity across all instance type sets cannot exceed TotalTargetCapacity. If any instance type set fails to meet its MinTargetCapacity due to inventory issues, the entire request fails.
   * 
   * @example
   * 5
   */
  minTargetCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      instanceTypes: 'InstanceTypes',
      minTargetCapacity: 'MinTargetCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      minTargetCapacity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoProvisioningGroupShrinkRequestPrePaidOptions extends $dara.Model {
  /**
   * @remarks
   * The minimum capacity set for different instance types. This parameter is supported only when `AutoProvisioningGroupType = request`.
   */
  specifyCapacityDistribution?: CreateAutoProvisioningGroupShrinkRequestPrePaidOptionsSpecifyCapacityDistribution[];
  static names(): { [key: string]: string } {
    return {
      specifyCapacityDistribution: 'SpecifyCapacityDistribution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specifyCapacityDistribution: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupShrinkRequestPrePaidOptionsSpecifyCapacityDistribution },
    };
  }

  validate() {
    if(Array.isArray(this.specifyCapacityDistribution)) {
      $dara.Model.validateArray(this.specifyCapacityDistribution);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoProvisioningGroupShrinkRequestSystemDiskConfig extends $dara.Model {
  /**
   * @remarks
   * The system disk type. You can specify multiple candidate disk types. The order specifies their priority. If one disk type is unavailable, the system automatically switches to the next type. Valid values:
   * 
   * - cloud_efficiency: Ultra disk.
   * 
   * - cloud_ssd: Standard SSD.
   * 
   * - cloud_essd: ESSD.
   * 
   * - cloud: Basic disk.
   * 
   * @example
   * cloud_ssd
   */
  diskCategory?: string;
  static names(): { [key: string]: string } {
    return {
      diskCategory: 'DiskCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskCategory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoProvisioningGroupShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the auto provisioning group.
   * 
   * N ranges from 1 to 20. If specified, the value cannot be an empty string. The key can be up to 128 characters in length and cannot start with aliyun or acs:. It also cannot contain http\\:// or https\\://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the auto provisioning group.
   * 
   * N ranges from 1 to 20. If specified, the value can be an empty string. The value can be up to 128 characters in length and cannot contain http\\:// or https\\://.
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

export class CreateAutoProvisioningGroupShrinkRequest extends $dara.Model {
  launchConfiguration?: CreateAutoProvisioningGroupShrinkRequestLaunchConfiguration;
  /**
   * @remarks
   * The name of the auto provisioning group. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * @example
   * apg-test
   */
  autoProvisioningGroupName?: string;
  /**
   * @remarks
   * The delivery type of the auto provisioning group. Valid values:
   * 
   * - request: One-time asynchronous delivery. The group delivers the instance cluster only at startup. If scheduling fails, no retry occurs.
   * 
   * - instant: One-time synchronous delivery. The group creates instances synchronously at startup and returns the list of successfully created instances and reasons for failures in the response.
   * 
   * - maintain: Continuous provisioning. The group attempts to deliver the instance cluster at startup and monitors real-time capacity. If the target capacity is not met, it continues creating ECS instances.
   * 
   * Default value: maintain.
   * 
   * @example
   * maintain
   */
  autoProvisioningGroupType?: string;
  candidateOptions?: CreateAutoProvisioningGroupShrinkRequestCandidateOptions;
  /**
   * @remarks
   * Ensures request idempotence. Generate a unique value from your client for this parameter to ensure uniqueness across different requests. ClientToken supports only ASCII characters and cannot exceed 64 characters. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of data disk configurations for instances.
   */
  dataDiskConfig?: CreateAutoProvisioningGroupShrinkRequestDataDiskConfig[];
  /**
   * @remarks
   * Specifies the billing method for the capacity difference when the sum of `PayAsYouGoTargetCapacity` and `SpotTargetCapacity` is less than `TotalTargetCapacity`. Valid values:
   * 
   * - PayAsYouGo: Pay-as-you-go instances.
   * 
   * - Spot: Spot instances.
   * 
   * Default value: Spot.
   * 
   * @example
   * Spot
   */
  defaultTargetCapacityType?: string;
  /**
   * @remarks
   * The description of the auto provisioning group.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to release instances when the real-time capacity of the auto provisioning group exceeds the target capacity and scale-in is triggered. Valid values:
   * 
   * - termination: Releases scaled-in instances.
   * 
   * - no-termination: Only removes scaled-in instances from the auto provisioning group.
   * 
   * Default value: no-termination.
   * 
   * @example
   * termination
   */
  excessCapacityTerminationPolicy?: string;
  executionMode?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not yet available.
   * 
   * @example
   * false
   */
  hibernationOptionsConfigured?: boolean;
  /**
   * @remarks
   * The list of extended launch template configurations.
   */
  launchTemplateConfig?: CreateAutoProvisioningGroupShrinkRequestLaunchTemplateConfig[];
  /**
   * @remarks
   * The ID of the launch template associated with the auto provisioning group. Call [DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html) to query available launch templates. When both a launch template and launch configuration parameters (`LaunchConfiguration.*`) are specified, the launch template takes precedence.
   * 
   * @example
   * lt-bp1fgzds4bdogu03****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The version of the launch template associated with the auto provisioning group. Call [DescribeLaunchTemplateVersions](https://help.aliyun.com/document_detail/73761.html) to query available launch template versions.
   * 
   * Default value: The default version of the launch template.
   * 
   * @example
   * 1
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The maximum price for spot instances in the auto provisioning group.
   * 
   * > If both `MaxSpotPrice` and `LaunchTemplateConfig.N.MaxPrice` are set, the lower value takes effect.
   * 
   * @example
   * 2
   */
  maxSpotPrice?: number;
  /**
   * @remarks
   * The minimum target capacity of the auto provisioning group. Valid values: Positive integers.
   * 
   * Note:
   * 
   * - This parameter takes effect only when creating an auto provisioning group with `AutoProvisioningGroupType=instant`.
   * 
   * - If the instance inventory in the region is less than this value, the API call fails and no instances are created.
   * 
   * - If the instance inventory in the region is greater than this value, instances are created based on other configured parameters.
   * 
   * @example
   * 20
   */
  minTargetCapacity?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The strategy for creating pay-as-you-go instances. Valid values:
   * 
   * - lowest-price: Cost optimization strategy. Selects the instance type with the lowest price.
   * 
   * - prioritized: Priority-based strategy. Creates instances based on the priority specified in `LaunchTemplateConfig.N.Priority`.
   * 
   * Default value: lowest-price.
   * 
   * @example
   * prioritized
   */
  payAsYouGoAllocationStrategy?: string;
  /**
   * @remarks
   * The target capacity for pay-as-you-go instances in the auto provisioning group. Valid values: Integers less than or equal to the value of `TotalTargetCapacity`.
   * 
   * @example
   * 30
   */
  payAsYouGoTargetCapacity?: string;
  /**
   * @remarks
   * Detailed capacity configuration for subscription instances.
   */
  prePaidOptions?: CreateAutoProvisioningGroupShrinkRequestPrePaidOptions;
  /**
   * @remarks
   * The region ID of the auto provisioning group. Call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to view the latest Alibaba Cloud region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID of the auto provisioning group.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource pool strategy used when creating instances. Note:
   * 
   * - This parameter takes effect only when creating pay-as-you-go instances.
   * 
   * - This parameter takes effect only when creating an auto provisioning group with `AutoProvisioningGroupType=instant`.
   */
  resourcePoolOptionsShrink?: string;
  /**
   * @remarks
   * The strategy for creating spot instances. Valid values:
   * 
   * - lowest-price: Cost optimization strategy. Selects the instance type with the lowest price.
   * 
   * - diversified: Balanced zone distribution strategy. Creates instances across the zones specified in the launch template configurations and distributes them evenly.
   * 
   * - capacity-optimized: Capacity optimization strategy. Selects the optimal instance type and zone based on inventory availability.
   * 
   * Default value: lowest-price.
   * 
   * @example
   * diversified
   */
  spotAllocationStrategy?: string;
  /**
   * @remarks
   * The behavior when a spot instance is interrupted. Valid values:
   * 
   * - stop: Stops the instance.
   * 
   * - terminate: Releases the instance.
   * 
   * Default value: terminate.
   * 
   * @example
   * terminate
   */
  spotInstanceInterruptionBehavior?: string;
  /**
   * @remarks
   * Takes effect only when `SpotAllocationStrategy` is set to `lowest-price`. Specifies the number of lowest-priced instance types from which the auto provisioning group creates instances.
   * 
   * Valid values: Less than the value of N in `LaunchTemplateConfig.N`.
   * 
   * @example
   * 2
   */
  spotInstancePoolsToUseCount?: number;
  /**
   * @remarks
   * The target capacity for spot instances in the auto provisioning group. Valid values: Integers less than or equal to the value of `TotalTargetCapacity`.
   * 
   * @example
   * 20
   */
  spotTargetCapacity?: string;
  /**
   * @remarks
   * The list of system disk configurations for instances.
   */
  systemDiskConfig?: CreateAutoProvisioningGroupShrinkRequestSystemDiskConfig[];
  /**
   * @remarks
   * The list of tags bound to the auto provisioning group.
   */
  tag?: CreateAutoProvisioningGroupShrinkRequestTag[];
  /**
   * @remarks
   * Specifies whether to release instances in the group when you delete the auto provisioning group. Valid values:
   * 
   * - true: Releases instances in the group.
   * 
   * - false: Retains instances in the group.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  terminateInstances?: boolean;
  /**
   * @remarks
   * Specifies whether to release instances in the group when the auto provisioning group expires. Valid values:
   * 
   * - true: Releases instances in the group.
   * 
   * - false: Only removes instances from the auto provisioning group.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  terminateInstancesWithExpiration?: boolean;
  /**
   * @remarks
   * The total target capacity of the auto provisioning group. Valid values: Positive integers.
   * 
   * The total capacity must be greater than or equal to the sum of `PayAsYouGoTargetCapacity` (target capacity for pay-as-you-go instances) and `SpotTargetCapacity` (target capacity for spot instances).
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  totalTargetCapacity?: string;
  /**
   * @remarks
   * The start time of the auto provisioning group. Used together with `ValidUntil` to define the validity period.
   * 
   * Specify the time in [ISO 8601](https://help.aliyun.com/document_detail/25696.html) format using UTC+0 time. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * Default value: The timestamp when the API call takes effect immediately.
   * 
   * @example
   * 2019-04-01T15:10:20Z
   */
  validFrom?: string;
  /**
   * @remarks
   * The expiration time of the auto provisioning group. Used together with `ValidFrom` to define the validity period.
   * 
   * Specify the time in [ISO 8601](https://help.aliyun.com/document_detail/25696.html) format using UTC+0 time. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * Default value: 2099-12-31T23:59:59Z.
   * 
   * @example
   * 2019-06-01T15:10:20Z
   */
  validUntil?: string;
  static names(): { [key: string]: string } {
    return {
      launchConfiguration: 'LaunchConfiguration',
      autoProvisioningGroupName: 'AutoProvisioningGroupName',
      autoProvisioningGroupType: 'AutoProvisioningGroupType',
      candidateOptions: 'CandidateOptions',
      clientToken: 'ClientToken',
      dataDiskConfig: 'DataDiskConfig',
      defaultTargetCapacityType: 'DefaultTargetCapacityType',
      description: 'Description',
      excessCapacityTerminationPolicy: 'ExcessCapacityTerminationPolicy',
      executionMode: 'ExecutionMode',
      hibernationOptionsConfigured: 'HibernationOptionsConfigured',
      launchTemplateConfig: 'LaunchTemplateConfig',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      maxSpotPrice: 'MaxSpotPrice',
      minTargetCapacity: 'MinTargetCapacity',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payAsYouGoAllocationStrategy: 'PayAsYouGoAllocationStrategy',
      payAsYouGoTargetCapacity: 'PayAsYouGoTargetCapacity',
      prePaidOptions: 'PrePaidOptions',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourcePoolOptionsShrink: 'ResourcePoolOptions',
      spotAllocationStrategy: 'SpotAllocationStrategy',
      spotInstanceInterruptionBehavior: 'SpotInstanceInterruptionBehavior',
      spotInstancePoolsToUseCount: 'SpotInstancePoolsToUseCount',
      spotTargetCapacity: 'SpotTargetCapacity',
      systemDiskConfig: 'SystemDiskConfig',
      tag: 'Tag',
      terminateInstances: 'TerminateInstances',
      terminateInstancesWithExpiration: 'TerminateInstancesWithExpiration',
      totalTargetCapacity: 'TotalTargetCapacity',
      validFrom: 'ValidFrom',
      validUntil: 'ValidUntil',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchConfiguration: CreateAutoProvisioningGroupShrinkRequestLaunchConfiguration,
      autoProvisioningGroupName: 'string',
      autoProvisioningGroupType: 'string',
      candidateOptions: CreateAutoProvisioningGroupShrinkRequestCandidateOptions,
      clientToken: 'string',
      dataDiskConfig: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupShrinkRequestDataDiskConfig },
      defaultTargetCapacityType: 'string',
      description: 'string',
      excessCapacityTerminationPolicy: 'string',
      executionMode: 'string',
      hibernationOptionsConfigured: 'boolean',
      launchTemplateConfig: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupShrinkRequestLaunchTemplateConfig },
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      maxSpotPrice: 'number',
      minTargetCapacity: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payAsYouGoAllocationStrategy: 'string',
      payAsYouGoTargetCapacity: 'string',
      prePaidOptions: CreateAutoProvisioningGroupShrinkRequestPrePaidOptions,
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourcePoolOptionsShrink: 'string',
      spotAllocationStrategy: 'string',
      spotInstanceInterruptionBehavior: 'string',
      spotInstancePoolsToUseCount: 'number',
      spotTargetCapacity: 'string',
      systemDiskConfig: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupShrinkRequestSystemDiskConfig },
      tag: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupShrinkRequestTag },
      terminateInstances: 'boolean',
      terminateInstancesWithExpiration: 'boolean',
      totalTargetCapacity: 'string',
      validFrom: 'string',
      validUntil: 'string',
    };
  }

  validate() {
    if(this.launchConfiguration && typeof (this.launchConfiguration as any).validate === 'function') {
      (this.launchConfiguration as any).validate();
    }
    if(this.candidateOptions && typeof (this.candidateOptions as any).validate === 'function') {
      (this.candidateOptions as any).validate();
    }
    if(Array.isArray(this.dataDiskConfig)) {
      $dara.Model.validateArray(this.dataDiskConfig);
    }
    if(Array.isArray(this.launchTemplateConfig)) {
      $dara.Model.validateArray(this.launchTemplateConfig);
    }
    if(this.prePaidOptions && typeof (this.prePaidOptions as any).validate === 'function') {
      (this.prePaidOptions as any).validate();
    }
    if(Array.isArray(this.systemDiskConfig)) {
      $dara.Model.validateArray(this.systemDiskConfig);
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

