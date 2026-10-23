// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoProvisioningGroupRequestLaunchConfigurationArn extends $dara.Model {
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

export class CreateAutoProvisioningGroupRequestLaunchConfigurationDataDisk extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy applied to the data disk.
   * 
   * Take note of the following items when you configure this parameter:
   * - This parameter takes effect only when you create an auto provisioning group of the instant delivery type (AutoProvisioningGroupType=instant).
   * 
   * @example
   * sp-bp67acfmxazb4p****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature. Valid values:
   * 
   * - true: yes.
   * - false: no.
   * 
   * > This parameter is supported only when the DiskCategory parameter is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
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
   * - cloud_essd: enterprise SSD.
   * - cloud: basic disk.
   * 
   * For I/O optimized instances, the default value is cloud_efficiency. For non-I/O optimized instances, the default value is cloud.
   * 
   * If both the launch template and the launch configuration are specified, the launch template takes precedence.
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
   * If both the launch template and the launch configurations are specified, the launch template takes precedence.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the data disk. The description must be 2 to 256 characters in length and cannot start with http:// or https://. If both the launch template and the launch configurations are specified, the launch template takes precedence.
   * 
   * @example
   * DataDisk_Description
   */
  description?: string;
  /**
   * @remarks
   * The mount point of the data disk. If both the launch template and the launch configurations are specified, the launch template takes precedence.
   * 
   * @example
   * /dev/vd1
   */
  device?: string;
  /**
   * @remarks
   * The name of the data disk. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
   * 
   * Default value: null.
   * 
   * If both the launch template and the launch configurations are specified, the launch template takes precedence.
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
   * 
   * - true: The data disk is encrypted.
   * - false: The data disk is not encrypted.
   * 
   * Default value: false.
   * 
   * If both the launch template and the launch configurations are specified, the launch template takes precedence.
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
   * When you create an enterprise SSD as a data disk, set the performance level of the disk. The value of N must be the same as the value of N in LaunchConfiguration.DataDisk.N.Category. Valid values:
   * 
   * - PL0: A single enterprise SSD can deliver up to 10,000 random read/write IOPS.
   * - PL1 (default): A single enterprise SSD can deliver up to 50,000 random read/write IOPS.
   * - PL2: A single enterprise SSD can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single enterprise SSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For more information about how to select the performance level of an enterprise SSD, see [Enterprise SSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * If both the launch template and the launch configuration are specified, the launch template takes precedence.
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
   * 
   * > This parameter is supported only when the DiskCategory parameter is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of data disk N. Unit: GiB. Valid values of N: 1 to 16. Valid values:
   * 
   * - cloud_efficiency: 20 to 32768.
   * - cloud_ssd: 20 to 32768.
   * - cloud_essd: The valid values vary based on the value of LaunchConfiguration.DataDisk.N.PerformanceLevel.
   *     - PL0: 40 to 32768.
   *     - PL1: 20 to 32768.
   *     - PL2: 461 to 32768.
   *     - PL3: 1261 to 32768.
   * - cloud: 5 to 2000.
   * 
   * > The value of this parameter must be greater than or equal to the size of the snapshot specified by the LaunchConfiguration.DataDisk.N.SnapshotId parameter.
   * 
   * If both the launch template and the launch configurations are specified, the launch template takes precedence.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot used to create data disk N. Valid values of N: 1 to 16.
   * 
   * If this parameter is specified, the LaunchConfiguration.DataDisk.N.Size parameter is ignored, and the size of the created disk is the same as the size of the specified snapshot. You cannot use snapshots that were created on or before July 15, 2013. Otherwise, the request is rejected and an error is returned.
   * 
   * If both the launch template and the launch configurations are specified, the launch template takes precedence.
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

export class CreateAutoProvisioningGroupRequestLaunchConfigurationSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy applied to the system disk.
   * 
   * Take note of the following items when you configure this parameter:
   * - This parameter takes effect only when you create an auto provisioning group of the instant delivery type (AutoProvisioningGroupType=instant).
   * 
   * @example
   * sp-bp67acfmxazb4p****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature. Valid values:
   * 
   * - true: yes.
   * - false: no.
   * 
   * > This parameter is supported only when the SystemDisk.Category parameter is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The encryption algorithm of the system disk. Valid values:
   * 
   * - aes-256.
   * 
   * - sm4-128.
   * 
   * Default value: aes-256.
   * 
   * If both the launch template and the launch configurations are specified, the launch template takes precedence.
   * 
   * > This parameter is not available.
   * 
   * @example
   * aes-256
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt system disk N. Valid values:
   * 
   * - true: The system disk is encrypted.
   * 
   * - false: The system disk is not encrypted.
   * 
   * Default value: false.
   * 
   * If both the launch template and the launch configurations are specified, the launch template takes precedence.
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
   * > This parameter is supported only when the SystemDisk.Category parameter is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
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

export class CreateAutoProvisioningGroupRequestLaunchConfigurationTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. Valid values of N: 1 to 20. If this parameter is specified, it cannot be left empty. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://. If both the launch template and the launch configurations are specified, the launch template takes precedence.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance. Valid values of N: 1 to 20. If this parameter is specified, it can be an empty string. The tag value can be up to 128 characters in length. It cannot start with acs:, and cannot contain http:// or https://. If both the launch template and the launch configurations are specified, the launch template takes precedence.
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

export class CreateAutoProvisioningGroupRequestLaunchConfigurationCpuOptions extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * Default value: For more information, see [Customize CPU options](https://www.alibabacloud.com/help/en/ecs/user-guide/specify-and-view-cpu-options).
   * 
   * @example
   * 2
   */
  core?: number;
  /**
   * @remarks
   * The number of threads per core. The number of vCPUs of the ECS instance = the value of CpuOptions.Core × the value of CpuOptions.ThreadsPerCore.
   * 
   * A value of 1 for CpuOptions.ThreadsPerCore indicates that CPU hyper-threading is disabled.
   * 
   * Only specific instance types support the configuration of the number of threads per core.
   * 
   * Valid values and default value: For more information, see [Customize CPU options](https://www.alibabacloud.com/help/en/ecs/user-guide/specify-and-view-cpu-options).
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

export class CreateAutoProvisioningGroupRequestLaunchConfigurationImageOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the instance that uses this image supports logons by using the ecs-user username. Valid values:
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

export class CreateAutoProvisioningGroupRequestLaunchConfigurationSchedulerOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the dedicated host cluster.
   */
  dedicatedHostClusterId?: string;
  /**
   * @remarks
   * The ID of the dedicated host.
   */
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

export class CreateAutoProvisioningGroupRequestLaunchConfigurationSecurityOptions extends $dara.Model {
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

export class CreateAutoProvisioningGroupRequestLaunchConfiguration extends $dara.Model {
  /**
   * @remarks
   * > This parameter is in invitational preview and is not supported.
   */
  arn?: CreateAutoProvisioningGroupRequestLaunchConfigurationArn[];
  /**
   * @remarks
   * The automatic release time of the pay-as-you-go instance. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * - If the value of seconds (ss) is not 00, the release time is automatically set to the start of the current minute (mm).
   * 
   * - The earliest release time is half an hour after the current time.
   * 
   * - The latest release time cannot be more than three years after the current time.
   * 
   * @example
   * 2018-01-01T12:05:00Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * The performance mode of the burstable instance. Valid values:
   * 
   * - Standard: standard mode. For more information about the performance of the instance, see the "Standard mode" section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * - Unlimited: unlimited mode. For more information about the performance of the instance, see the "Unlimited mode" section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * Default value: null.
   * 
   * If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The extended data disk configurations for the launch template.
   */
  dataDisk?: CreateAutoProvisioningGroupRequestLaunchConfigurationDataDisk[];
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
   * The hostname of the instance. Limits:
   * 
   * - The hostname cannot start or end with a period (.) or a hyphen (-). It cannot contain consecutive periods (.) or hyphens (-).
   * - For Windows instances, the hostname must be 2 to 15 characters in length. It cannot contain periods (.) and cannot contain only digits. It can contain letters, digits, and hyphens (-).
   * - For other instances such as Linux instances, the hostname must be 2 to 64 characters in length. It can contain multiple periods (.). The characters between two consecutive periods are considered a segment. Each segment can contain letters, digits, and hyphens (-).
   * - You cannot specify both `LaunchConfiguration.HostName` and `LaunchConfiguration.HostNames.N`. Otherwise, an error is returned.
   * - If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
   * 
   * @example
   * k8s-node-[1,4]-ecshost
   */
  hostName?: string;
  /**
   * @remarks
   * The list of hostnames for one or more instances. Limits:
   * 
   * - This parameter takes effect only when you create an auto provisioning group of the instant delivery type (AutoProvisioningGroupType=instant).
   * - N indicates the number of instances. Valid values of N: 1 to 1000. The value of N must be the same as the value of the TotalTargetCapacity parameter.
   * - Periods (.) and hyphens (-) cannot be used as the first or last characters, and cannot be used consecutively.
   * - If both the launch template and the launch configurations are specified, the launch template takes precedence.
   * 
   * @example
   * ecs-host-01
   */
  hostNames?: string[];
  /**
   * @remarks
   * The name of the image family. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with aliyun or acs:. It cannot contain http:// or https://. It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image. The image resource selected when the instance is started. You can call the [DescribeImages](https://help.aliyun.com/document_detail/25534.html) operation to query available image resources. If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
   * 
   * @example
   * m-bp1g7004ksh0oeuc****
   */
  imageId?: string;
  /**
   * @remarks
   * The description of the instance. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`. If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
   * 
   * @example
   * Instance_Description
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The name of the instance. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * Default value: the `InstanceId` of the instance.
   * 
   * When you create multiple ECS instances, you can batch configure sequential instance names. For more information, see [Configure sequential instance names or hostnames](https://help.aliyun.com/document_detail/196048.html).
   * 
   * If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
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
   * > In pay-by-traffic mode, the peak inbound and outbound bandwidths are upper limits and are not guaranteed service level indicators. When resource contention occurs, the peak bandwidths may be limited. If your business requires guaranteed bandwidth, use the pay-by-bandwidth mode.
   * 
   * If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s. Valid values:
   * 
   * - When the outbound public bandwidth is less than or equal to 10 Mbit/s: 1 to 10. Default value: 10.
   * - When the outbound public bandwidth is greater than 10 Mbit/s: 1 to the value of `LaunchConfiguration.InternetMaxBandwidthOut`. Default value: the value of `LaunchConfiguration.InternetMaxBandwidthOut`.
   * 
   * If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
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
   * If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
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
   * The default value is cloud for retired instance types and non-I/O optimized instances, and optimized for other instance types.
   * 
   * If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * - For Windows instances, this parameter is ignored. Default value: null.
   * - For Linux instances, password logon is disabled by default.
   * 
   * If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
   * 
   * @example
   * KeyPair_Name
   */
  keyPairName?: string;
  /**
   * @remarks
   * The password of the instance. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include:
   * 
   * ``()`~!@#$%^&*-_+=|{}`[]`:;\\"<>,.?/``
   * 
   * For Windows instances, the password cannot start with a forward slash (/).
   * 
   * If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
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
   * If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
   * 
   * @example
   * true
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The name of the instance RAM role. You can use the RAM API operation [ListRoles](https://help.aliyun.com/document_detail/28713.html) to query the instance RAM roles that you have created. If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
   * 
   * @example
   * RAM_Name
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable security hardening. Valid values:
   * 
   * - Active: enables security hardening. This value is applicable only to public images.
   * - Deactive: disables security hardening. This value is applicable to all image types.
   * 
   * If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
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
   * The system disk configuration of the instance. If both the launch template and the launch configurations are specified, the launch template takes precedence.
   */
  systemDisk?: CreateAutoProvisioningGroupRequestLaunchConfigurationSystemDisk;
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: enterprise SSD.
   * - cloud: basic disk.
   * 
   * The default value is cloud for retired instance types and non-I/O optimized instances, and cloud_efficiency for other instance types.
   * 
   * If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The description of the system disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
   * 
   * @example
   * SystemDisk_Description
   */
  systemDiskDescription?: string;
  /**
   * @remarks
   * The name of the system disk. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
   * 
   * Default value: null.
   * 
   * If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
   * 
   * @example
   * cloud_ssdSystem
   */
  systemDiskName?: string;
  /**
   * @remarks
   * The settings for the performance level of the enterprise SSD used as the system disk. Valid values:
   * 
   * - PL0 (default): A single enterprise SSD can deliver up to 10,000 random read/write IOPS.
   * - PL1: A single enterprise SSD can deliver up to 50,000 random read/write IOPS.
   * - PL2: A single enterprise SSD can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single enterprise SSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For more information about how to select enterprise SSD performance levels, see [enterprise SSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
   * 
   * @example
   * PL0
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values: 20 to 500. The value of this parameter must be greater than or equal to max{20, the size of the image specified by LaunchConfiguration.ImageId}.
   * 
   * Default value: max{40, the size of the image specified by LaunchConfiguration.ImageId}.
   * 
   * If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The extended list of tags for the launch template.
   */
  tag?: CreateAutoProvisioningGroupRequestLaunchConfigurationTag[];
  /**
   * @remarks
   * Instance user data of the instance. Instance user data must be encoded in Base64. The maximum size of the raw data is 32 KB. If you specify both a launch template and launch configurations, the system preferentially uses the launch template.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter takes effect when you create subscription instances. Valid values:
   * 
   * - true: Auto-renewal is enabled.
   * - false (default): Auto-renewal is disabled.
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
   * The CPU configurations.
   */
  cpuOptions?: CreateAutoProvisioningGroupRequestLaunchConfigurationCpuOptions;
  /**
   * @remarks
   * The image properties.
   * 
   * Take note of the following items when you configure this parameter:
   * - This parameter takes effect only when you create an auto provisioning group of the instant delivery type (AutoProvisioningGroupType=instant).
   */
  imageOptions?: CreateAutoProvisioningGroupRequestLaunchConfigurationImageOptions;
  /**
   * @remarks
   * The subscription period of the resource. The unit is specified by PeriodUnit. This parameter is required and takes effect only when you create subscription instances. Valid values:
   * 
   * <props="china">
   * - When PeriodUnit is set to Week, valid values of Period are 1, 2, 3, and 4.
   * - When PeriodUnit is set to Month, valid values of Period are 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * 
   * 
   * <props="intl">When PeriodUnit is set to Month, valid values of Period are 1, 2, 3, 6, and 12.
   * 
   * <props="partner">When PeriodUnit is set to Month, valid values of Period are 1, 2, 3, 6, and 12.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period. Valid values: 
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
   * The scheduling options.
   */
  schedulerOptions?: CreateAutoProvisioningGroupRequestLaunchConfigurationSchedulerOptions;
  /**
   * @remarks
   * The security options of the instance.
   */
  securityOptions?: CreateAutoProvisioningGroupRequestLaunchConfigurationSecurityOptions;
  /**
   * @remarks
   * The protection period of the spot instance. Unit: hours. Default value: 1. Valid values:
   * - 1: The instance is protected from automatic release for 1 hour after it is created. After the 1-hour protection period ends, the system compares your bid with the marketplace price and checks resource inventory to determine whether to retain or revoke the instance.
   * - 0: The instance is not protected after it is created. The system compares your bid with the marketplace price and checks resource inventory to determine whether to retain or revoke the instance.
   * 
   * Alibaba Cloud sends you a notification by using an ECS system event 5 minutes before the instance is revoked. Spot instances use billing by the second. We recommend that you select an appropriate protection period based on the execution duration of your specific tasks.
   * 
   * Take note of the following items when you set this parameter:
   * - This parameter takes effect only when you create an auto provisioning group of the one-time synchronization delivery type (AutoProvisioningGroupType=instant).
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The break mode of the spot instance. Valid values:
   * 
   * - Terminate: The instance is released.
   * 
   * - Stop: The instance enters the economical mode.
   * 
   * For more information about the economical mode, see [Economical mode](https://help.aliyun.com/document_detail/63353.html).
   * 
   * Default value: Terminate.
   * 
   * Take note of the following items when you set this parameter:
   * - This parameter takes effect only when you create an auto provisioning group of the one-time synchronization delivery type (AutoProvisioningGroupType=instant).
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
      arn: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupRequestLaunchConfigurationArn },
      autoReleaseTime: 'string',
      creditSpecification: 'string',
      dataDisk: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupRequestLaunchConfigurationDataDisk },
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
      systemDisk: CreateAutoProvisioningGroupRequestLaunchConfigurationSystemDisk,
      systemDiskCategory: 'string',
      systemDiskDescription: 'string',
      systemDiskName: 'string',
      systemDiskPerformanceLevel: 'string',
      systemDiskSize: 'number',
      tag: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupRequestLaunchConfigurationTag },
      userData: 'string',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      cpuOptions: CreateAutoProvisioningGroupRequestLaunchConfigurationCpuOptions,
      imageOptions: CreateAutoProvisioningGroupRequestLaunchConfigurationImageOptions,
      period: 'number',
      periodUnit: 'string',
      schedulerOptions: CreateAutoProvisioningGroupRequestLaunchConfigurationSchedulerOptions,
      securityOptions: CreateAutoProvisioningGroupRequestLaunchConfigurationSecurityOptions,
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

export class CreateAutoProvisioningGroupRequestCandidateOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to only evaluate the success rate of delivering the target capacity for candidate instance types in the current request. If you set this parameter to true, no scale-out is performed. The system only evaluates the delivery success rate and returns the result in the LaunchResult.CandidateEvaluateLevel field of the response. Default value: false.
   */
  evaluate?: boolean;
  /**
   * @remarks
   * The timeout period for the auto provisioning group to scale out to the target capacity. After the timeout period elapses, no further scale-out attempts are made. Unit: minutes.
   * 
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

export class CreateAutoProvisioningGroupRequestDataDiskConfig extends $dara.Model {
  /**
   * @remarks
   * The category of the data disk for the instance. You can use this parameter to specify multiple candidate disk categories. The specified order determines the priority of the disk categories. If a disk category is not active, the system automatically switches to the next disk category. Valid values:
   * 
   * -   cloud_efficiency: ultra disk.
   * -   cloud_ssd: standard SSD.
   * -   cloud_essd: enterprise SSD.
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

export class CreateAutoProvisioningGroupRequestLaunchTemplateConfig extends $dara.Model {
  /**
   * @remarks
   * The list of architecture types for the instance types.
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
   * The list of vCPU counts for the instance types.
   */
  cores?: number[];
  /**
   * @remarks
   * The list of instance types to be excluded.
   */
  excludedInstanceTypes?: string[];
  /**
   * @remarks
   * The ID of the image. You can use this parameter to specify the image used by the current resource pool. If this parameter is not specified, the image specified by `LaunchConfiguration.ImageId` or the image configured in the launch template is used by default. You can call the [DescribeImages](https://help.aliyun.com/document_detail/25534.html) operation to query available image resources.
   * Note: This parameter is supported only when `AutoProvisioningGroupType` is set to `instant`.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20210425.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The level of the instance family. This parameter is used to filter the instance types that meet the requirements. Valid values:
   * 
   * - EntryLevel: entry-level, which refers to shared instance types. These instance types are more cost-effective but cannot guarantee stable computing performance. They are suitable for business scenarios with low CPU utilization. For more information, see [Shared instance families](https://help.aliyun.com/document_detail/108489.html).
   * - EnterpriseLevel: enterprise-level. These instance types provide stable performance and dedicated resources, and are suitable for business scenarios that require high stability. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * - CreditEntryLevel: credit entry-level, which refers to burstable instances. These instance types use CPU credits to guarantee computing performance and are suitable for business scenarios with low CPU utilization but occasional CPU bursts. For more information, see [Burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The instance type in the extended launch template. Valid values of N: 1 to 20. For more information about valid values, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum price of spot instances in the extended launch template.
   * 
   * > After `LaunchTemplateConfig` is specified, `LaunchTemplateConfig.N.MaxPrice` is required.
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
   * The list of memory sizes for the instance types.
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
   * The weight of the instance type in the extended launch template. A higher weight indicates that a single instance has more computing power and fewer instances are required. Valid values: greater than 0.
   * 
   * You can calculate the weight based on the computing power of the specified instance type and the minimum computing power of a single node in the cluster. For example, if the minimum computing power of a single node is 8 vCPUs and 60 GiB of memory:
   * 
   * - You can set the weight of the instance type with 8 vCPUs and 60 GiB of memory to 1.
   * - You can set the weight of the instance type with 16 vCPUs and 120 GiB of memory to 2.
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

export class CreateAutoProvisioningGroupRequestPrePaidOptionsSpecifyCapacityDistribution extends $dara.Model {
  /**
   * @remarks
   * The set of instance types. Duplicate instance types are not allowed, and the instance types must be within the scope of LaunchTemplateConfig.InstanceType.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The minimum number of instances to be delivered within the scope of InstanceTypes.
   * 
   * > sum(MinTargetCapacity) <= TotalTargetCapacity. The sum of MinTargetCapacity for all instance type sets cannot exceed TotalTargetCapacity. If the MinTargetCapacity requirement for any instance type set cannot be met due to inventory or other reasons, the entire request fails.
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

export class CreateAutoProvisioningGroupRequestPrePaidOptions extends $dara.Model {
  /**
   * @remarks
   * The minimum capacity set for different instance types. This parameter is supported only when AutoProvisioningGroupType is set to request.
   */
  specifyCapacityDistribution?: CreateAutoProvisioningGroupRequestPrePaidOptionsSpecifyCapacityDistribution[];
  static names(): { [key: string]: string } {
    return {
      specifyCapacityDistribution: 'SpecifyCapacityDistribution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specifyCapacityDistribution: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupRequestPrePaidOptionsSpecifyCapacityDistribution },
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

export class CreateAutoProvisioningGroupRequestResourcePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The list of private pool IDs. You can specify 1 to 20 IDs.
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * The resource pool policy. Resource pools include private pools generated after the elasticity assurance or capacity reservation service takes effect, as well as the public pool. Valid values:
   * 
   * - PrivatePoolFirst: Private pools take precedence. If ResourcePoolOptions.PrivatePoolIds is specified, the specified private pools are used first. If no private pools are specified or the specified private pools have insufficient capacity, the system automatically matches open private pools. If no eligible private pools are available, the public pool is used to create instances.
   * 
   * - PrivatePoolOnly: Only private pools are used. If you select this policy, you must specify ResourcePoolOptions.PrivatePoolIds. If the specified private pools have insufficient capacity, the instances fail to start.
   *  
   * - PublicPoolOnly: The public pool is used to create instances.
   * 
   * Default value: PublicPoolOnly.
   * 
   * @example
   * PrivatePoolFirst
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      privatePoolIds: 'PrivatePoolIds',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolIds: { 'type': 'array', 'itemType': 'string' },
      strategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.privatePoolIds)) {
      $dara.Model.validateArray(this.privatePoolIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoProvisioningGroupRequestSystemDiskConfig extends $dara.Model {
  /**
   * @remarks
   * The category of the system disk for the instance. You can use this parameter to specify multiple candidate disk categories. The specified order determines the priority of the disk categories. If a disk category is not active, the system automatically switches to the next disk category. Valid values:
   * 
   * -   cloud_efficiency: ultra disk.
   * -   cloud_ssd: standard SSD.
   * -   cloud_essd: enterprise SSD.
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

export class CreateAutoProvisioningGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the auto provisioning group.
   * 
   * Valid values of N: 1 to 20. If this parameter is specified, it cannot be left empty. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the auto provisioning group.
   * 
   * Valid values of N: 1 to 20. If this parameter is specified, it can be an empty string. The tag value can be up to 128 characters in length. It cannot contain http:// or https://.
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

export class CreateAutoProvisioningGroupRequest extends $dara.Model {
  launchConfiguration?: CreateAutoProvisioningGroupRequestLaunchConfiguration;
  /**
   * @remarks
   * The name of the auto provisioning group. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * apg-test
   */
  autoProvisioningGroupName?: string;
  /**
   * @remarks
   * The delivery type of the auto provisioning group. Valid values:
   * 
   * - request: one-time asynchronous delivery. The auto provisioning group asynchronously delivers the instance cluster only at startup and does not retry if the scheduling failed.
   * 
   * - instant: one-time synchronization delivery. The auto provisioning group creates instances in synchronization only at startup and returns the list of created instances and the reasons why creation failed in the response.
   * 
   * - maintain: continuous delivery. The auto provisioning group attempts to deliver the instance cluster at startup, performs monitoring on the real-time capacity, and continues to create ECS instances if the target capacity is not reached.
   * 
   * Default value: maintain.
   * 
   * @example
   * maintain
   */
  autoProvisioningGroupType?: string;
  /**
   * @remarks
   * The configuration options when AutoProvisioningGroupType is set to candidate.
   */
  candidateOptions?: CreateAutoProvisioningGroupRequestCandidateOptions;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of data disk configurations for the instance.
   */
  dataDiskConfig?: CreateAutoProvisioningGroupRequestDataDiskConfig[];
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
   * Specifies whether to release the instances that are removed during a scale-down event when the real-time capacity of the auto provisioning group exceeds the target capacity and triggers a scale-down. Valid values:
   * 
   * - termination: releases the removed instances.
   * - no-termination: only removes the instances from the auto provisioning group.
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
   * > This parameter is in invitational preview and is not available.
   * 
   * @example
   * false
   */
  hibernationOptionsConfigured?: boolean;
  /**
   * @remarks
   * The extended launch templates.
   */
  launchTemplateConfig?: CreateAutoProvisioningGroupRequestLaunchTemplateConfig[];
  /**
   * @remarks
   * The ID of the instance launch template associated with the auto provisioning group. You can invoke the [DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html) operation to query active instance launch templates. If you specify both a launch template and launch configurations (`LaunchConfiguration.*`), the system preferentially uses the launch template.
   * 
   * @example
   * lt-bp1fgzds4bdogu03****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The version of the instance launch template associated with the auto provisioning group. You can invoke the [DescribeLaunchTemplateVersions](https://help.aliyun.com/document_detail/73761.html) operation to query active instance launch template versions.
   * 
   * Default value: the default version of the launch template.
   * 
   * @example
   * 1
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The maximum price of spot instances in the auto provisioning group.
   * 
   * > If the settings include both `MaxSpotPrice` and `LaunchTemplateConfig.N.MaxPrice`, the lower value is used.
   * 
   * @example
   * 2
   */
  maxSpotPrice?: number;
  /**
   * @remarks
   * The minimum target capacity of the auto provisioning group. Valid values: positive integers.
   * 
   * Take note of the following items when you configure this parameter:
   * - This parameter takes effect only when you create an auto provisioning group of the instant delivery type (AutoProvisioningGroupType=instant).
   * - If the instance inventory in the current region is less than the value of this parameter, the API call fails and no instances are created.
   * - If the instance inventory in the current region is greater than the value of this parameter, instances are created based on the values of other configured parameters.
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
   * - lowest-price: the cost optimization policy. The instance type with the lowest price is selected.
   * 
   * - prioritized: the priority-based policy. Instances are created based on the priorities specified by `LaunchTemplateConfig.N.Priority`.
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
   * The detailed capacity configurations for subscription instances.
   */
  prePaidOptions?: CreateAutoProvisioningGroupRequestPrePaidOptions;
  /**
   * @remarks
   * The ID of the region where the auto provisioning group resides. You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * The resource pool policy used when creating instances. Take note of the following items when you configure this parameter:
   * - This parameter takes effect only when you create pay-as-you-go instances.
   * - This parameter takes effect only when you create an auto provisioning group of the instant delivery type (AutoProvisioningGroupType=instant).
   */
  resourcePoolOptions?: CreateAutoProvisioningGroupRequestResourcePoolOptions;
  /**
   * @remarks
   * The policy for creating spot instances. Valid values:
   * 
   * - lowest-price: the cost optimization policy. The instance type with the lowest price is selected.
   * 
   * - diversified: the zone distribution balancing policy. Instances are created in the zones specified by the extended launch templates and evenly distributed across the zones.
   * 
   * - capacity-optimized: the capacity optimization policy. The optimal instance types and zones are selected based on the inventory.
   * 
   * Default value: lowest-price.
   * 
   * @example
   * diversified
   */
  spotAllocationStrategy?: string;
  /**
   * @remarks
   * The behavior of spot instances when they are interrupted. Valid values:
   * 
   * - stop: stops the instances.
   * 
   * - terminate: releases the instances.
   * 
   * Default value: terminate.
   * 
   * @example
   * terminate
   */
  spotInstanceInterruptionBehavior?: string;
  /**
   * @remarks
   * The number of instance types with the lowest prices that are selected by the auto provisioning group to create instances. This parameter takes effect only when `SpotAllocationStrategy` is set to `lowest-price`.
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
   * The list of system disk configurations for the instance.
   */
  systemDiskConfig?: CreateAutoProvisioningGroupRequestSystemDiskConfig[];
  /**
   * @remarks
   * The list of tags bound to the auto provisioning group.
   */
  tag?: CreateAutoProvisioningGroupRequestTag[];
  /**
   * @remarks
   * Specifies whether to release the instances in the auto-provisioning group when the group is deleted. Valid values:
   * 
   * - true: releases the instances auto provisioning group.
   * - false: retains the instances auto provisioning group.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  terminateInstances?: boolean;
  /**
   * @remarks
   * Specifies whether to release the instances in the auto provisioning group when the group expires. Valid values:
   * 
   * - true: releases the instances in the group.
   * - false: only removes the instances from the group.
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
   * The total target capacity must be greater than or equal to the sum of `PayAsYouGoTargetCapacity` (the target capacity of pay-as-you-go instances) and `SpotTargetCapacity` (the target capacity of spot instances).
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  totalTargetCapacity?: string;
  /**
   * @remarks
   * The time when the auto provisioning group starts. This parameter and `ValidUntil` determine the validity period.
   * 
   * Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * Default value: the UNIX timestamp when the API operation takes effect.
   * 
   * @example
   * 2019-04-01T15:10:20Z
   */
  validFrom?: string;
  /**
   * @remarks
   * The time when the auto provisioning group expires. This parameter and `ValidFrom` determine the validity period.
   * 
   * Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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
      resourcePoolOptions: 'ResourcePoolOptions',
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
      launchConfiguration: CreateAutoProvisioningGroupRequestLaunchConfiguration,
      autoProvisioningGroupName: 'string',
      autoProvisioningGroupType: 'string',
      candidateOptions: CreateAutoProvisioningGroupRequestCandidateOptions,
      clientToken: 'string',
      dataDiskConfig: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupRequestDataDiskConfig },
      defaultTargetCapacityType: 'string',
      description: 'string',
      excessCapacityTerminationPolicy: 'string',
      executionMode: 'string',
      hibernationOptionsConfigured: 'boolean',
      launchTemplateConfig: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupRequestLaunchTemplateConfig },
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      maxSpotPrice: 'number',
      minTargetCapacity: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payAsYouGoAllocationStrategy: 'string',
      payAsYouGoTargetCapacity: 'string',
      prePaidOptions: CreateAutoProvisioningGroupRequestPrePaidOptions,
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourcePoolOptions: CreateAutoProvisioningGroupRequestResourcePoolOptions,
      spotAllocationStrategy: 'string',
      spotInstanceInterruptionBehavior: 'string',
      spotInstancePoolsToUseCount: 'number',
      spotTargetCapacity: 'string',
      systemDiskConfig: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupRequestSystemDiskConfig },
      tag: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupRequestTag },
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
    if(this.resourcePoolOptions && typeof (this.resourcePoolOptions as any).validate === 'function') {
      (this.resourcePoolOptions as any).validate();
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

