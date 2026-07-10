// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationArn extends $dara.Model {
  /**
   * @remarks
   * > This parameter is in invitational preview and is not available for use.
   * 
   * @example
   * 123456789012****
   */
  assumeRoleFor?: number;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not available for use.
   * 
   * @example
   * 34458433936495****:alice
   */
  roleType?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not available for use.
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
   * The ID of the automatic snapshot policy applied to the data disk.
   * 
   * Note:
   * - This parameter takes effect only when you create a one-time synchronous delivery auto provisioning group (AutoProvisioningGroupType=instant).
   * 
   * @example
   * sp-bp67acfmxazb4p****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature. Valid values:
   * 
   * - true: enables the feature.
   * - false: disables the feature.
   * 
   * > This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of data disk N. Valid values of N: 1 to 16. Valid values:
   * 
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: enterprise SSD (ESSD).
   * - cloud: basic disk.
   * 
   * For I/O optimized instances, the default value is cloud_efficiency. For non-I/O optimized instances, the default value is cloud.
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether the data disk is released when the instance is released. Valid values:
   * - true: the data disk is released when the instance is released.
   * - false: the data disk is not released when the instance is released.
   * 
   * Default value: true.
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the data disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`. If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * DataDisk_Description
   */
  description?: string;
  /**
   * @remarks
   * The mount point of the data disk. If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * /dev/vd1
   */
  device?: string;
  /**
   * @remarks
   * The name of the data disk. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. It can contain digits, periods (.), colons (:), underscores (_), and hyphens (-).
   * 
   * Default value: empty.
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * cloud_ssdData
   */
  diskName?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether data disk N is encrypted. Valid values:
   * 
   * - true: encrypted.
   * - false: not encrypted.
   * 
   * Default value: false.
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the KMS key for the data disk. If both a launch template and launch configuration are specified, the launch template takes precedence.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The performance level of the enterprise SSD used as a data disk. The value of N must be consistent with the N in `LaunchConfiguration.DataDisk.N.Category`. Valid values:
   * 
   * - PL0: a single disk can deliver up to 10,000 random read/write IOPS.
   * - PL1 (default): a single disk can deliver up to 50,000 random read/write IOPS.
   * - PL2: a single disk can deliver up to 100,000 random read/write IOPS.
   * - PL3: a single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For information about how to select an ESSD performance level, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50,000, 1000 × capacity - baseline performance}.
   * 
   * Baseline performance = min{1,800 + 50 × capacity, 50,000}.
   * 
   * > This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
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
   * - cloud_essd: depends on the value of `LaunchConfiguration.DataDisk.N.PerformanceLevel`.
   *     - PL0: 40 to 32768.
   *     - PL1: 20 to 32768.
   *     - PL2: 461 to 32768.
   *     - PL3: 1261 to 32768.
   * - cloud: 5 to 2000.
   * 
   * > The value of this parameter must be greater than or equal to the size of the snapshot specified by `LaunchConfiguration.DataDisk.N.SnapshotId`.
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot used to create data disk N. Valid values of N: 1 to 16.
   * 
   * After you specify this parameter, the `LaunchConfiguration.DataDisk.N.Size` parameter is ignored. The actual size of the created disk is the size of the specified snapshot. Snapshots created on or before July 15, 2013 cannot be used. Requests that use such snapshots are rejected.
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
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
   * The ID of the automatic snapshot policy to apply to the system disk.
   * 
   * After you set this parameter, note the following items:
   * - This parameter takes effect only when you create a one-time synchronization delivery auto provisioning group (AutoProvisioningGroupType=instant).
   * 
   * @example
   * sp-bp67acfmxazb4p****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature. Valid values:
   * 
   * - true: enables the feature.
   * - false: does not enable the feature.
   * 
   * > This parameter is supported only when `SystemDisk.Category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disk](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The encryption algorithm for the system disk. Valid values:
   * 
   * - aes-256
   * - sm4-128
   * 
   * Default value: aes-256.
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * > This parameter is not publicly available.
   * 
   * @example
   * aes-256
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether the system disk is encrypted. Valid values:
   * 
   * - true: encrypted.
   * 
   * - false: not encrypted.
   * 
   * Default value: false.
   * 
   * If you specify both.
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The KMS key ID of the system disk.
   * 
   * When both a launch template and launch configuration information are specified, the launch template takes precedence.
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
   * > This parameter is supported only when SystemDisk.Category is set to cloud_auto. For more information, see [ESSD AutoPL disk](https://help.aliyun.com/document_detail/368372.html).
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
   * The tag key of the instance. Valid values of N: 1 to 20. The tag key cannot be an empty string. It can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain `http://` or `https://`. If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance. Valid values of N: 1 to 20. The tag value can be an empty string. It can be up to 128 characters in length and cannot start with acs:. It cannot contain `http://` or `https://`. If you specify both a launch template and launch configuration information, the launch template takes precedence.
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
   * Default value: see [Specify and view CPU options](https://www.alibabacloud.com/help/en/ecs/user-guide/specify-and-view-cpu-options).
   * 
   * @example
   * 2
   */
  core?: number;
  /**
   * @remarks
   * The number of threads per CPU core. The number of vCPUs of the ECS instance = CpuOptions.Core value × CpuOptions.ThreadsPerCore value.
   * 
   * If CpuOptions.ThreadsPerCore is set to 1, CPU hyper-threading is disabled.
   * 
   * Only specific instance types support custom CPU thread counts.
   * 
   * For valid values and default values, see [Specify and view CPU options](https://www.alibabacloud.com/help/en/ecs/user-guide/specify-and-view-cpu-options).
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
   * Specifies whether the instance that uses this image supports logon as the ecs-user user. Valid values:
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
   * > This parameter is in invitational preview and is not available for use.
   */
  arn?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationArn[];
  /**
   * @remarks
   * The automatic release time of the pay-as-you-go instance. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * - If the value of seconds (`ss`) is not `00`, the time is automatically rounded down to the start of the current minute (`mm`).
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
   * The running mode of the burstable instance. Valid values:
   * 
   * - Standard: standard mode. For more information about instance performance, see the performance constrained mode section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * - Unlimited: unlimited mode. For more information about instance performance, see the unlimited mode section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * Default value: none.
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The list of data disk configurations in the launch configuration.
   */
  dataDisk?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationDataDisk[];
  /**
   * @remarks
   * The ID of the deployment set.
   * 
   * @example
   * ds-bp1frxuzdg87zh4p****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The hostname of the instance. The following limits apply:
   * 
   * - Periods (.) and hyphens (-) cannot be used as the first or last characters and cannot be used consecutively.
   * - Windows instances: The hostname must be 2 to 15 characters in length and cannot contain periods (.) or consist entirely of digits. It can contain letters, digits, and hyphens (-).
   * - Instances of other types (such as Linux): The hostname must be 2 to 64 characters in length and can contain multiple periods (.). Each segment between periods can contain letters, digits, and hyphens (-).
   * - You cannot specify both `LaunchConfiguration.HostName` and `LaunchConfiguration.HostNames.N`. Otherwise, an error is returned.
   * - If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * k8s-node-[1,4]-ecshost
   */
  hostName?: string;
  /**
   * @remarks
   * The list of hostnames for one or more instances. The following limits apply:
   * 
   * - This parameter takes effect only when you create a one-time synchronous delivery auto provisioning group (`AutoProvisioningGroupType=instant`).
   * - N indicates the number of instances. Valid values of N: 1 to 1000. The value must be consistent with the TotalTargetCapacity parameter.
   * - Periods (.) and hyphens (-) cannot be used as the first or last characters and cannot be used consecutively.
   * - If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * ecs-host-01
   */
  hostNames?: string[];
  /**
   * @remarks
   * The name of the image family. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `aliyun` or `acs:`. The name cannot contain `http://` or `https://`. The name can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image used to launch instances. You can call [DescribeImages](https://help.aliyun.com/document_detail/25534.html) to query available image resources. If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * m-bp1g7004ksh0oeuc****
   */
  imageId?: string;
  /**
   * @remarks
   * The description of the instance. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`. If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * Instance_Description
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The name of the instance. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. It can contain Chinese characters, letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * Default value: the `InstanceId` of the instance.
   * 
   * When you create multiple ECS instances, you can batch configure sequential instance names. For more information, see [Batch configure sequential names or hostnames for multiple instances](https://help.aliyun.com/document_detail/196048.html).
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * k8s-node-[1,4]-alibabacloud
   */
  instanceName?: string;
  /**
   * @remarks
   * The billing method for network usage. Valid values:
   * 
   * - PayByBandwidth: pay-by-bandwidth.
   * - PayByTraffic: pay-by-traffic.
   * 
   * > In pay-by-traffic mode, the peak inbound and outbound bandwidths are used as upper limits of bandwidths instead of guaranteed performance metrics. When resources are contended, the peak bandwidths may be limited. If you require guaranteed bandwidth, use pay-by-bandwidth.
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s. Valid values:
   * 
   * - If the maximum outbound public bandwidth is less than or equal to 10 Mbit/s: 1 to 10. Default value: 10.
   * - If the maximum outbound public bandwidth is greater than 10 Mbit/s: 1 to the value of `LaunchConfiguration.InternetMaxBandwidthOut`. Default value: the value of `LaunchConfiguration.InternetMaxBandwidthOut`.
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
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
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Specifies whether the instance is an I/O optimized instance. Valid values:
   * 
   * - none: non-I/O optimization.
   * - optimized: I/O optimization.
   * 
   * For retired instance types, the default value is none. For other instance types, the default value is optimized.
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * -   For Windows instances, this parameter is ignored and is empty by default.
   * -   For Linux instances, password-based logon is disabled during initialization.
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * KeyPair_Name
   */
  keyPairName?: string;
  /**
   * @remarks
   * The password of the instance. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported:
   * 
   * ``()`~!@#$%^&*-_+=|{}`[]`:;\\"<>,.?/``
   * 
   * For Windows instances, the password cannot start with a forward slash (/).
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
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
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * true
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The name of the instance RAM role. You can call the RAM API [ListRoles](https://help.aliyun.com/document_detail/28713.html) to query the instance RAM roles that you have created. If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * RAM_Name
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable security hardening. Valid values:
   * 
   * -   Active: enables security hardening. This value is applicable only to public images.
   * -   Deactive: disables security hardening. This value is applicable to all image types.
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * Active
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group to which the instance belongs. If both a launch template and launch configuration information are specified, the launch template takes precedence.
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
   * The system disk information of the instance. If you specify both a launch template and launch configuration information, the launch template takes precedence.
   */
  systemDisk?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationSystemDisk;
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * -   cloud_efficiency: ultra disk.
   * -   cloud_ssd: standard SSD.
   * -   cloud_essd: enterprise SSD (ESSD).
   * -   cloud: basic disk.
   * 
   * For retired instance types that are non-I/O optimization instances, the default value is cloud. For other instance types, the default value is cloud_efficiency.
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The description of the system disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * SystemDisk_Description
   */
  systemDiskDescription?: string;
  /**
   * @remarks
   * The name of the system disk. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. It can contain digits, periods (.), colons (:), underscores (_), and hyphens (-).
   * 
   * Default value: empty.
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * cloud_ssdSystem
   */
  systemDiskName?: string;
  /**
   * @remarks
   * The performance level (PL) of the enterprise SSD used as the system disk. Valid values:
   * 
   * - PL0 (default): a single disk can deliver up to 10,000 random read/write IOPS.
   * - PL1: a single disk can deliver up to 50,000 random read/write IOPS.
   * - PL2: a single disk can deliver up to 100,000 random read/write IOPS.
   * - PL3: a single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For information about how to select an ESSD performance level, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * PL0
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values: 20 to 500. The value of this parameter must be greater than or equal to max{20, size of the image specified by LaunchConfiguration.ImageId}.
   * 
   * Default value: max{40, size of the image specified by LaunchConfiguration.ImageId}.
   * 
   * If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The list of tags in the launch configuration.
   */
  tag?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationTag[];
  /**
   * @remarks
   * Instance user data of the instance. Instance user data must be Base64-encoded. The maximum size of the raw data is 32 KB. If you specify both a launch template and launch configuration information, the launch template takes precedence.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter takes effect when you create subscription instances. Valid values:
   * 
   * - true: enables auto-renewal.
   * - false (default): does not enable auto-renewal.
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
   * The CPU-related configurations.
   */
  cpuOptions?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationCpuOptions;
  /**
   * @remarks
   * The image-related property information.
   * 
   * After you set this parameter, note the following items:
   * - This parameter takes effect only when you create a one-time synchronization delivery auto provisioning group (AutoProvisioningGroupType=instant).
   */
  imageOptions?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationImageOptions;
  /**
   * @remarks
   * The subscription duration of the resource. Unit: specified by `PeriodUnit`. This parameter is required when you create subscription instances. Valid values:
   * 
   * <props="china">
   * - If PeriodUnit is set to Week, valid values of Period: 1, 2, 3, and 4.
   * - If PeriodUnit is set to Month, valid values of Period: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * 
   * 
   * <props="intl">If PeriodUnit is set to Month, valid values of Period: 1, 2, 3, 6, and 12.
   * 
   * <props="partner">If PeriodUnit is set to Month, valid values of Period: 1, 2, 3, 6, and 12.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription billable methods duration. Valid values: 
   * 
   * <props="china">
   * - Week
   * - Month (default)
   * 
   * 
   * 
   * <props="intl">Month (default).
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  schedulerOptions?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationSchedulerOptions;
  securityOptions?: CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationSecurityOptions;
  /**
   * @remarks
   * The protection period of the spot instance. Unit: hours. Default value: 1. Valid values:
   * - 1: After a spot instance is created, Alibaba Cloud ensures that the instance is not subject to automatic release within 1 hour. After the 1-hour protection period ends, the system compares the bid price with the marketplace price and checks the resource inventory to determine whether to retain or revoke the instance.
   * - 0: After a spot instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system compares the bid price with the marketplace price and checks the resource inventory to determine whether to retain or revoke the instance.
   * 
   * Alibaba Cloud sends an ECS system event notification 5 minutes before the instance is released. Spot instances are billed by second. Select an appropriate protection period based on the expected task execution duration.
   * 
   * After you set this parameter, note the following items:
   * - This parameter takes effect only when you create a one-time synchronization delivery auto provisioning group (AutoProvisioningGroupType=instant).
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The spot instance break mode. Valid values:
   * 
   * - Terminate: directly releases the instance.
   * 
   * - Stop: puts the instance into economical mode.
   * 
   * For more information about economical mode, see [Economical mode](https://help.aliyun.com/document_detail/63353.html).
   * 
   * Default value: Terminate.
   * 
   * After you set this parameter, note the following items:
   * - This parameter takes effect only when you create a one-time synchronization delivery auto provisioning group (AutoProvisioningGroupType=instant).
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
   * The category of the data disk. You can specify multiple candidate disk categories. The specified order determines the priority of each disk category. When a disk category is unavailable, the system automatically switches to the next category. Valid values:
   * 
   * -   cloud_efficiency: ultra disk.
   * -   cloud_ssd: standard SSD.
   * -   cloud_essd: enterprise SSD (ESSD).
   * -   cloud: basic disk.
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
   * Specifies whether to include burstable instance types. Valid values:
   * 
   * - Exclude: excludes burstable instance types.
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
   * The list of vCPU core counts for instance types.
   */
  cores?: number[];
  /**
   * @remarks
   * The list of instance types to exclude.
   */
  excludedInstanceTypes?: string[];
  /**
   * @remarks
   * The image ID. You can use this parameter to set the image for the current resource pool. If not set, the image specified in `LaunchConfiguration.ImageId` or the launch template is used by default. You can call [DescribeImages](https://help.aliyun.com/document_detail/25534.html) to query available image resources.
   * Note: This parameter is supported only when `AutoProvisioningGroupType = instant`.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20210425.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The level of the instance family, used to filter instance types that meet the requirements. Valid values:
   * 
   * - EntryLevel: entry level, which refers to shared instance types. Lower cost but no guarantee of stable computing performance. Suitable for scenarios with low average CPU utilization. For more information, see [Shared instance families](https://help.aliyun.com/document_detail/108489.html).
   * - EnterpriseLevel: enterprise level. Stable performance with dedicated resources. Suitable for scenarios that require high stability. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * - CreditEntryLevel: credit-based entry level, which refers to burstable instances. Uses CPU credits to ensure computing performance. Suitable for scenarios with low average CPU utilization and occasional bursts. For more information, see [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The instance type in the extended launch template. Valid values of N: 1 to 20. For valid values, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum price for spot instances in the extended launch template.
   * 
   * > After you set `LaunchTemplateConfig`, `LaunchTemplateConfig.N.MaxPrice` is required.
   * 
   * @example
   * 3
   */
  maxPrice?: number;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not available for use.
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
   * The ID of the vSwitch to which the ECS instance in the extended launch template is connected. The zone of the ECS instance created from the extended template is determined by the vSwitch.
   * 
   * > If you specify LaunchTemplateConfig, LaunchTemplateConfig.N.VSwitchId is required.
   * 
   * @example
   * vsw-sn5bsitu4lfzgc5o7****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The weight of the instance type in the extended launch template. A higher value indicates that a single instance can meet more computing power requirements, which reduces the number of instances required. Valid values: greater than 0.
   * 
   * You can calculate the weight based on the computing power of the specified instance type and the minimum computing power of a single node in the cluster. For example, if the minimum computing power of a single node is 8 vCPUs and 60 GiB:
   * 
   * - The weight of an instance type with 8 vCPUs and 60 GiB can be set to 1.
   * - The weight of an instance type with 16 vCPUs and 120 GiB can be set to 2.
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
   * The set of instance types. Duplicate values are not allowed, and the instance types must be within the range of LaunchTemplateConfig.InstanceType.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The minimum number of instances to deliver within the `InstanceTypes` range.
   * 
   * > The sum of all MinTargetCapacity values (`sum(MinTargetCapacity) <= TotalTargetCapacity`) cannot exceed TotalTargetCapacity. If any instance type set cannot meet the MinTargetCapacity requirement due to insufficient inventory or other reasons, the entire request fails.
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
   * The category of the system disk. You can specify multiple candidate disk categories. The specified order determines the priority of each disk category. When a disk category is unavailable, the system automatically switches to the next category. Valid values:
   * 
   * -   cloud_efficiency: ultra disk.
   * -   cloud_ssd: standard SSD.
   * -   cloud_essd: enterprise SSD (ESSD).
   * -   cloud: basic disk.
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
   * Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. The tag key cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the auto provisioning group.
   * 
   * Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.
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
   * The name of the auto provisioning group. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * apg-test
   */
  autoProvisioningGroupName?: string;
  /**
   * @remarks
   * The delivery type of the auto provisioning group. Valid values:
   * 
   * - request: one-time asynchronous delivery. The group delivers an instance cluster asynchronously only at startup. If scheduling fails, no retry is performed.
   * 
   * - instant: one-time synchronous delivery. The group synchronously creates instances only at startup and returns the list of successfully created instances and the causes of creation failures in the response.
   * 
   * - maintain: continuous delivery. The group attempts to deliver an instance cluster at startup and monitors real-time capacity. If the target capacity is not reached, the group continues to create ECS instances.
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of data disk configurations.
   */
  dataDiskConfig?: CreateAutoProvisioningGroupShrinkRequestDataDiskConfig[];
  /**
   * @remarks
   * The billing method for the capacity difference when the sum of `PayAsYouGoTargetCapacity` and `SpotTargetCapacity` is less than `TotalTargetCapacity`. Valid values:
   * 
   * - PayAsYouGo: pay-as-you-go instances.
   * - Spot: spot instances.
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
   * Specifies whether to release instances when the real-time capacity of the auto provisioning group exceeds the target capacity and a scale-in event is triggered. Valid values:
   * 
   * - termination: releases the scaled-in instances.
   * - no-termination: only removes the scaled-in instances from the auto provisioning group.
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
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * false
   */
  hibernationOptionsConfigured?: boolean;
  /**
   * @remarks
   * The list of extended launch templates.
   */
  launchTemplateConfig?: CreateAutoProvisioningGroupShrinkRequestLaunchTemplateConfig[];
  /**
   * @remarks
   * The ID of the instance launch template associated with the auto provisioning group. You can invoke [DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html) to query active instance launch templates. If you specify both a launch template and launch configuration information (`LaunchConfiguration.*`), the launch template takes precedence.
   * 
   * @example
   * lt-bp1fgzds4bdogu03****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The version of the instance launch template associated with the auto provisioning group. You can invoke [DescribeLaunchTemplateVersions](https://help.aliyun.com/document_detail/73761.html) to query active instance launch template versions.
   * 
   * Default value: the default version of the launch template.
   * 
   * @example
   * 1
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The maximum price for spot instances in the auto provisioning group.
   * 
   * > If both `MaxSpotPrice` and `LaunchTemplateConfig.N.MaxPrice` are specified, the lower value is used.
   * 
   * @example
   * 2
   */
  maxSpotPrice?: number;
  /**
   * @remarks
   * The minimum target capacity of the auto provisioning group. Valid values
   * 
   * @example
   * 20
   */
  minTargetCapacity?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The policy for creating pay-as-you-go instances. Valid values:
   * 
   * - lowest-price: cost optimization policy. Selects the instance type with the lowest price.
   * 
   * - prioritized: priority-based policy. Creates instances based on the priority specified by `LaunchTemplateConfig.N.Priority`.
   * 
   * Default value: lowest-price.
   * 
   * @example
   * prioritized
   */
  payAsYouGoAllocationStrategy?: string;
  /**
   * @remarks
   * The target capacity of pay-as-you-go instances in the auto provisioning group. Valid values: less than or equal to the parameter value of `TotalTargetCapacity`.
   * 
   * @example
   * 30
   */
  payAsYouGoTargetCapacity?: string;
  /**
   * @remarks
   * The detailed capacity configuration for subscription instances.
   */
  prePaidOptions?: CreateAutoProvisioningGroupShrinkRequestPrePaidOptions;
  /**
   * @remarks
   * The ID of the region in which the auto provisioning group resides. You can invoke [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the auto provisioning group belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource pool policy used to create instances. After you set this parameter, note the following items:
   * - This parameter takes effect only when you create pay-as-you-go instances.
   * - This parameter takes effect only when you create a one-time synchronization delivery auto provisioning group (`AutoProvisioningGroupType=instant`).
   */
  resourcePoolOptionsShrink?: string;
  /**
   * @remarks
   * The policy for creating spot instances. Valid values:
   * 
   * - lowest-price: cost optimization policy. Selects the instance type with the lowest price.
   * 
   * - diversified: balanced zone distribution policy. Creates instances in the zones specified in the extended launch template and evenly distributes them across zones.
   * 
   * - capacity-optimized: capacity optimization distribution policy. Selects the optimal instance type and zone based on inventory availability.
   * 
   * Default value: lowest-price.
   * 
   * @example
   * diversified
   */
  spotAllocationStrategy?: string;
  /**
   * @remarks
   * The action to take when a spot instance is interrupted. Valid values:
   * 
   * - stop: stops the instance.
   * 
   * - terminate: releases the instance.
   * 
   * Default value: terminate.
   * 
   * @example
   * terminate
   */
  spotInstanceInterruptionBehavior?: string;
  /**
   * @remarks
   * Takes effect when `SpotAllocationStrategy` is set to `lowest-price`. Specifies the number of instance types with the lowest prices from which the auto provisioning group creates instances.
   * 
   * Valid values: less than the value of N in `LaunchTemplateConfig.N`.
   * 
   * @example
   * 2
   */
  spotInstancePoolsToUseCount?: number;
  /**
   * @remarks
   * The target capacity of spot instances in the auto provisioning group. Valid values: less than or equal to the parameter value of `TotalTargetCapacity`.
   * 
   * @example
   * 20
   */
  spotTargetCapacity?: string;
  /**
   * @remarks
   * The list of system disk configurations.
   */
  systemDiskConfig?: CreateAutoProvisioningGroupShrinkRequestSystemDiskConfig[];
  /**
   * @remarks
   * The tags to attach to the auto provisioning group.
   */
  tag?: CreateAutoProvisioningGroupShrinkRequestTag[];
  /**
   * @remarks
   * Specifies whether to release instances auto provisioning group when the auto-provisioning group is deleted. Valid values:
   * 
   * - true: releases instances auto provisioning group.
   * - false: retains instances auto provisioning group.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  terminateInstances?: boolean;
  /**
   * @remarks
   * Specifies whether to release instances auto provisioning group when the auto-provisioning group expires. Valid values:
   * 
   * - true: releases instances auto provisioning group.
   * - false: only removes instances from the auto-provisioning group.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  terminateInstancesWithExpiration?: boolean;
  /**
   * @remarks
   * The total target capacity of the auto provisioning group. Valid values: positive integers.
   * 
   * The total capacity must be greater than or equal to the sum of `PayAsYouGoTargetCapacity` (the target capacity of pay-as-you-go instances) and `SpotTargetCapacity` (the target capacity of spot instances).
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  totalTargetCapacity?: string;
  /**
   * @remarks
   * The time when the auto provisioning group is started. Used together with `ValidUntil` to determine the valid period.
   * 
   * Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0.
   * 
   * Default value: the UNIX timestamp at which the request takes effect immediately.
   * 
   * @example
   * 2019-04-01T15:10:20Z
   */
  validFrom?: string;
  /**
   * @remarks
   * The time when the auto provisioning group expires. Used together with `ValidFrom` to determine the valid period.
   * 
   * Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0.
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

