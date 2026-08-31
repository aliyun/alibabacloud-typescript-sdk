// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestHibernationOptions extends $dara.Model {
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
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

export class CreateInstanceRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the private pool. The ID of the private pool is the same as the ID of the elasticity assurance or capacity reservation that generates the private pool.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The private pool option for launching the instance. A private pool is generated after an elasticity assurance or capacity reservation takes effect. You can select a private pool when you start an instance. Valid values:
   * 
   * - Open: open mode. The system automatically matches an open private pool. If no matching private pool is available, the public pool is used to launch the instance. You do not need to set `PrivatePoolOptions.Id`.
   * - Target: specified mode. The instance is launched by using the capacity of the specified private pool. If the specified private pool is unavailable, the instance fails to be launched. Set `PrivatePoolOptions.Id` to the ID of the private pool.
   * - None: no private pool is used. The instance does not use the capacity of a private pool to launch.
   * 
   * Default value: None.
   * 
   * In the following scenarios, the private pool option can only be set to `None` or left empty:
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

export class CreateInstanceRequestSystemDisk extends $dara.Model {
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
   * > The cloud_essd_entry value is supported only when `InstanceType` is set to a [universal instance family u1](https://help.aliyun.com/document_detail/457079.html) (`ecs.u1`) or [e, economy instance family](https://help.aliyun.com/document_detail/108489.html) (`ecs.e`) instance type that provides the corresponding computing power.
   * 
   * For retired instance types that are not I/O optimized instances, the default value is cloud. For other instance types, the default value is cloud_efficiency.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The description of the system disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * Default value: empty.
   * 
   * @example
   * TestDescription
   */
  description?: string;
  /**
   * @remarks
   * The name of the system disk. The name must be 2 to 128 characters in length and can contain letters, digits, and Unicode characters classified under the letter category (including Chinese characters). The name can also contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * Default value: empty.
   * 
   * @example
   * SystemDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * The performance level of the enterprise SSD used as the system disk. Set this parameter when you create an enterprise SSD as the system disk. Valid values:
   * 
   * - PL0: a single disk can deliver up to 10,000 random read/write IOPS.
   * - PL1 (default): a single disk can deliver up to 50,000 random read/write IOPS.
   * - PL2: a single disk can deliver up to 100,000 random read/write IOPS.
   * - PL3: a single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For more information about how to select an ESSD performance level, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values:
   * 
   * - Basic disk: 20 to 500
   * 
   * - Other disk types: 20 to 2048
   * 
   * The value of this parameter must be greater than or equal to max{20, ImageSize}.
   * 
   * Default value: max{40, ImageSize}.
   * 
   * @example
   * 40
   */
  size?: number;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster. To use a disk in a dedicated block storage cluster as the system disk when you create an ECS instance, specify this parameter.
   * 
   * @example
   * dbsc-j5e1sf2vaf5he8m2****
   */
  storageClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      description: 'Description',
      diskName: 'DiskName',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
      storageClusterId: 'StorageClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      diskName: 'string',
      performanceLevel: 'string',
      size: 'number',
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

export class CreateInstanceRequestArn extends $dara.Model {
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * 1234567890
   */
  assumeRoleFor?: number;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * Primary
   */
  roleType?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
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

export class CreateInstanceRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The category of data disk N. Valid values:
   * 
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: enterprise SSD.
   * - cloud: basic disk.
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_essd_entry: ESSD Entry disk.
   *   > The cloud_essd_entry value is supported only when `InstanceType` is set to an `ecs.u1` or `ecs.e` instance family type.
   * - elastic_ephemeral_disk_standard: elastic ephemeral disk - standard.
   * - elastic_ephemeral_disk_premium: elastic ephemeral disk - Premium Edition.
   * 
   * For I/O optimized instances, the default value is cloud_efficiency. For non-I/O optimized instances, the default value is cloud.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release the data disk when the instance is released.
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
   * TestDescription
   */
  description?: string;
  /**
   * @remarks
   * The mount point of the data disk.
   * 
   * > This parameter is applicable only to full image (system image) scenarios. You can set this parameter to the mount point of the data disk in the full image and modify the corresponding `DataDisk.N.Size` and `DataDisk.N.Category` parameters to change the category and size of the data disk in the full image.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The name of the data disk. The name must be 2 to 128 characters in length and can contain letters, digits, and Unicode characters classified under the letter category (including Chinese characters). The name can also contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * @example
   * DataDiskName
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
   * Specifies whether to encrypt data disk N.
   * 
   * - true: encrypts the data disk.
   * 
   * - false: does not encrypt the data disk.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The KMS key ID for the disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The performance level of the enterprise SSD used as the Nth data disk. The value of N must be the same as that in `DataDisk.N.Category=cloud_essd`. Set this parameter when you create an enterprise SSD as a data disk. Valid values:
   * 
   * - PL0: a single disk can deliver up to 10,000 random read/write IOPS.
   * - PL1 (default): a single disk can deliver up to 50,000 random read/write IOPS.
   * - PL2: a single disk can deliver up to 100,000 random read/write IOPS.
   * - PL3: a single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For more information about how to select an ESSD performance level, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL2
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of data disk N. Valid values of N: 1 to 16. Unit: GiB. Valid values:
   * 
   * - cloud_efficiency: 20 to 32768.
   * - cloud_ssd: 20 to 32768.
   * - cloud_essd: depends on the value of `DataDisk.N.PerformanceLevel`.
   *     - PL0: 1 to 65536.
   *     - PL1: 20 to 65536.
   *     - PL2: 461 to 65536.
   *     - PL3: 1261 to 65536.
   * - cloud: 5 to 2000.
   * 
   * > The value of this parameter must be greater than or equal to the size of the snapshot specified by `SnapshotId`.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot used to create data disk N. Valid values of N: 1 to 16.
   * 
   * - If `DataDisk.N.SnapshotId` is specified, `DataDisk.N.Size` is ignored. The disk is created with the size of the specified snapshot.
   * 
   * - Snapshots created on or before July 15, 2013 cannot be used. Requests that use such snapshots are rejected.
   * 
   * @example
   * s-bp17441ohwka0yuh****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster. If you want to use disks in a dedicated block storage cluster as data disks when you create an ECS instance, set this parameter.
   * 
   * @example
   * dbsc-j5e1sf2vaf5he8m2****
   */
  storageClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      device: 'Device',
      diskName: 'DiskName',
      encryptAlgorithm: 'EncryptAlgorithm',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
      snapshotId: 'SnapshotId',
      storageClusterId: 'StorageClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deleteWithInstance: 'boolean',
      description: 'string',
      device: 'string',
      diskName: 'string',
      encryptAlgorithm: 'string',
      encrypted: 'boolean',
      KMSKeyId: 'string',
      performanceLevel: 'string',
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

export class CreateInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance, disk, and primary ENI. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance, disk, and primary ENI. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
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

export class CreateInstanceRequest extends $dara.Model {
  hibernationOptions?: CreateInstanceRequestHibernationOptions;
  privatePoolOptions?: CreateInstanceRequestPrivatePoolOptions;
  systemDisk?: CreateInstanceRequestSystemDisk;
  /**
   * @remarks
   * Specifies whether the instance on a dedicated host is associated with the dedicated host. Valid values:
   * 
   * - default: The instance is not associated with the dedicated host. When an instance that has economical mode enabled is restarted after it is stopped, the instance is deployed on another dedicated host in the automatic deployment resource pool if the resources of the original dedicated host are insufficient.
   * 
   * - host: The instance is associated with the dedicated host. When an instance that has economical mode enabled is restarted after it is stopped, the instance remains on the original dedicated host. If the resources of the original dedicated host are insufficient, the instance fails to restart.
   * 
   * Default value: default.
   * 
   * @example
   * default
   */
  affinity?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   */
  arn?: CreateInstanceRequestArn[];
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter takes effect only when `InstanceChargeType` is set to `PrePaid`. Valid values:
   * 
   * - true: enables auto-renewal.
   * - false (default): disables auto-renewal.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period. This parameter is required when AutoRenew is set to true.
   * 
   * <props="china">If PeriodUnit is set to Week, valid values of AutoRenewPeriod are 1, 2, and 3.
   * 
   * If PeriodUnit is set to Month, valid values of AutoRenewPeriod are 1, 2, 3, 6, and 12.
   * 
   * @example
   * 2
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the cluster in which the instance resides.
   * 
   * > This parameter will be deprecated. To improve compatibility, use other parameters.
   * 
   * @example
   * c-bp67acfmxazb4p****
   */
  clusterId?: string;
  /**
   * @remarks
   * The performance mode of the burstable instance. Valid values:
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
  dataDisk?: CreateInstanceRequestDataDisk[];
  /**
   * @remarks
   * The ID of the dedicated host.
   * <props="china">You can call [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html) to query the list of dedicated host IDs.
   * 
   * <props="intl">You can call [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html) to query the list of dedicated host IDs.
   * 
   * >Notice: Spot instances cannot be created on dedicated hosts. If you specify `DedicatedHostId`, the `SpotStrategy` and `SpotPriceLimit` settings in the request are automatically ignored.</notice>
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The release protection attribute of the instance. Specifies whether the instance can be released from the ECS console or by calling [DeleteInstance](https://help.aliyun.com/document_detail/25507.html).
   * 
   * - true: enables release protection.
   * - false (default): disables release protection.
   * 
   * > This attribute is applicable only to pay-as-you-go instances. It can only prevent manual release, not system-initiated release.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The number of the deployment set group in which to deploy the instance. If the deployment set specified for the instance uses the high availability group strategy (AvailabilityGroup), you can use this parameter to specify a group in the deployment set. Valid values: 1 to 7.
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
   * Default value: empty.
   * 
   * @example
   * InstanceTest
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * - true: performs only a dry run. The system checks whether the required parameters are specified, whether the request format is valid, whether the service limits are not exceeded, and whether the specified ECS resources are available. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * - false (default): performs a dry run and sends the request. If the check succeeds, the instance is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The hostname of the Elastic Compute Service server.
   * 
   * - The hostname cannot start or end with a period (.) or hyphen (-), and cannot contain consecutive periods or hyphens.
   * - Windows instances: The hostname must be 2 to 15 characters in length and cannot contain periods (.) or consist entirely of digits. It can contain letters, digits, and hyphens (-).
   * - Other instances (such as Linux): The hostname must be 2 to 64 characters in length and can contain multiple periods (.). Each segment separated by a period can contain letters, digits, and hyphens (-).
   * 
   * @example
   * LocalHostName
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the HPC cluster to which the instance belongs.
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
   * > This parameter is not publicly available.
   * 
   * @example
   * 0
   */
  httpPutResponseHopLimit?: number;
  /**
   * @remarks
   * Specifies whether to forcefully use the security-hardened mode (IMDSv2) to access instance metadata. Valid values:
   * - optional: does not forcefully use the security-hardened mode.
   * - required: forcefully uses the security-hardened mode. After you set this parameter to required, you cannot access instance metadata in normal mode.
   * 
   * Default value: optional.
   * > For more information about the modes for accessing instance metadata, see [Access mode of instance metadata](https://help.aliyun.com/document_detail/150575.html).
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The name of the image family. You can set this parameter to obtain the latest available image from the specified image family to create the instance.
   * - If you set `ImageId`, you cannot set this parameter.
   * - If you do not set `ImageId`, you can set this parameter.
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image used to start the instance. You can call [DescribeImages](https://help.aliyun.com/document_detail/25534.html) to query available images. To use an Alibaba Cloud Marketplace image, you can view the `ImageId` on the image product page. This parameter is required if you do not set `ImageFamily` to select the latest available image from an image family.
   * 
   * @example
   * ubuntu_18_04_64_20G_alibase_20190624.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The internal IP address of the instance.
   * 
   * @example
   * ``192.168.**.**``
   */
  innerIpAddress?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - PrePaid: subscription. If you set this parameter to PrePaid, make sure that your account supports credit payment or balance payment. Otherwise, an `InvalidPayMethod` error is returned.
   * - PostPaid (default): pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The name of the instance. The name must be 2 to 128 characters in length and can contain letters, digits, and Unicode characters classified under the letter category (including Chinese characters). The name can also contain colons (:), underscores (_), periods (.), or hyphens (-). If you do not specify this parameter, the instance ID is used as the default value.
   * 
   * @example
   * k8s-node-[1,4]-alibabacloud
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * - Instance type selection: See [Instance family](https://help.aliyun.com/document_detail/25378.html) or invoke [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query the performance data of the target instance type. You can also see [Best practices for instance type selection](https://help.aliyun.com/document_detail/58291.html) to learn how to select an instance type.
   * - Check active resources: Invoke [DescribeAvailableResource](https://help.aliyun.com/document_detail/66186.html) to query active resources in a specific region or zone.
   * 
   * This parameter is required.
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
   * - PayByTraffic (default): pay-by-traffic.
   * 
   * > In **pay-by-traffic** mode, the peak inbound and outbound bandwidths are used as bandwidth upper limits and are not guaranteed. When resource contention occurs, the peak bandwidth may be limited. If you require guaranteed bandwidth, use **pay-by-bandwidth** mode.
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
   * Default value: 0.
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Specifies whether the instance is I/O optimized. Valid values:
   * 
   * - none: The instance is not I/O optimized.
   * - optimized: The instance is I/O optimized.
   * 
   * For [retired instance types](https://help.aliyun.com/document_detail/55263.html), the default value is none.
   * 
   * For other instance types, the default value is optimized.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * > For Windows instances, this parameter is ignored. The default value is empty. Even if you specify this parameter, only the `Password` content is used.
   * 
   * @example
   * KeyPairTestName
   */
  keyPairName?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  nodeControllerId?: string;
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
   * Note the following items:
   * 
   * - For security reasons, use HTTPS to send requests if the Password parameter is specified.
   * - For Windows instances, the password cannot start with a forward slash (/).
   * - For instances that run certain operating systems, passwords are not supported. Only key pairs are supported. Examples: Others Linux and Fedora CoreOS.
   * 
   * @example
   * TestEcs123!
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the password preset in the image. If you set this parameter, the Password parameter must be empty. Make sure that the image you use has a password preset.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The subscription period of the instance. Unit: specified by `PeriodUnit`. This parameter is required and takes effect only when `InstanceChargeType` is set to `PrePaid`. If `DedicatedHostId` is specified, the value of this parameter cannot exceed the subscription period of the dedicated host. Valid values:
   * 
   * <props="china">
   * - If PeriodUnit is set to Week: 1, 2, 3, and 4.
   * - If PeriodUnit is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * 
   * 
   * <props="intl">If PeriodUnit is set to Month: 1, 2, 3, 6, and 12.
   * 
   * <props="partner">If PeriodUnit is set to Month: 1, 2, 3, 6, and 12.
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
   * - Month.
   * 
   * 
   * 
   * <props="intl">Month.
   * 
   * <props="partner">Month.
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The private IP address of the instance. The IP address must be an available address within the CIDR block of the specified vSwitch (VSwitchId).
   * 
   * @example
   * 172.16.236.*
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The name of the instance RAM role. You can call the RAM API [ListRoles](https://help.aliyun.com/document_detail/28713.html) to query the instance RAM roles that you have created.
   * 
   * @example
   * RAMTestName
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
   * - Active: enables security hardening. This value is applicable only to public images.
   * - Deactive: disables security hardening. This value is applicable to all image types.
   * 
   * @example
   * Active
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group to which the instance belongs.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The protection period of the spot instance. Unit: hours. Default value: 1. Valid values:
   * 
   * - 1: After a spot instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After the 1-hour protection period ends, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain automatic release the instance.
   * - 0: After a spot instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system compares the bid price with the market price and checks the resource inventory to determine whether to retain automatic release the instance.
   * 
   * > 
   * > - This parameter supports only the value 0 or 1.
   * > - Spot instances are billed by second. Select an appropriate protection period based on the execution duration of your tasks.
   * > - Alibaba Cloud sends an ECS system event notification 5 minutes before the instance is released.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The interruption pattern of the spot instance. Valid values:
   * 
   * - Terminate: The instance is directly released.
   * 
   * - Stop: The instance enters economical mode.
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
   * The maximum hourly price of the instance. This parameter supports up to three decimal places and takes effect only when `SpotStrategy` is set to `SpotWithPriceLimit`.
   * 
   * @example
   * 0.98
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The bidding policy for the instance. This parameter takes effect only when `InstanceChargeType` is set to `PostPaid`. Valid values:
   * 
   * - NoSpot (default): The instance is a regular pay-as-you-go instance.
   * - SpotWithPriceLimit: The instance is a spot instance with a user-defined maximum hourly price.
   * - SpotAsPriceGo: The instance is a spot instance for which the market price at the time of purchase is automatically used as the bid price.
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
   * ss-bp1j4i2jdf3owlhe****
   */
  storageSetId?: string;
  /**
   * @remarks
   * The maximum number of partitions in the storage set. Valid values: 2 and greater.
   * 
   * @example
   * 2
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateInstanceRequestTag[];
  /**
   * @remarks
   * Specifies whether to create the instance on a dedicated host. Valid values:
   * 
   * - default: creates the instance on a non-dedicated host.
   * 
   * - host: creates the instance on a dedicated host. If you do not specify `DedicatedHostId`, Alibaba Cloud automatically selects a dedicated host for the instance.
   * 
   * Default value: default.
   * 
   * @example
   * default
   */
  tenancy?: string;
  /**
   * @remarks
   * Specifies whether to use the virtual machine system configuration provided by Alibaba Cloud (Windows: NTP and KMS. Linux: NTP and YUM).
   * 
   * @example
   * true
   */
  useAdditionalService?: boolean;
  /**
   * @remarks
   * The instance user data. The data must be encoded in Base64. The raw data can be up to 32 KB in size.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * The vSwitch ID. This parameter is required if you are creating a VPC-connected instance. You can invoke [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) to query active vSwitches.
   * 
   * > If you specify `VSwitchId`, the zone specified by `ZoneId` must be the same as the zone of the vSwitch. You can also leave `ZoneId` empty. The system then selects the zone of the specified vSwitch.
   * 
   * @example
   * vsw-bp1s5fnvk4gn2tws0****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual local area network (VLAN) ID.
   * 
   * @example
   * 10
   */
  vlanId?: string;
  /**
   * @remarks
   * The zone ID of the instance. For more information, call [DescribeZones](https://help.aliyun.com/document_detail/25610.html) to query available zones.
   * 
   * > If you specify `VSwitchId`, the zone specified by `ZoneId` must be the same as the zone of the vSwitch. You can also leave `ZoneId` empty. The system then selects the zone of the specified vSwitch.
   * 
   * Default value: empty. The system automatically selects a zone.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      hibernationOptions: 'HibernationOptions',
      privatePoolOptions: 'PrivatePoolOptions',
      systemDisk: 'SystemDisk',
      affinity: 'Affinity',
      arn: 'Arn',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      creditSpecification: 'CreditSpecification',
      dataDisk: 'DataDisk',
      dedicatedHostId: 'DedicatedHostId',
      deletionProtection: 'DeletionProtection',
      deploymentSetGroupNo: 'DeploymentSetGroupNo',
      deploymentSetId: 'DeploymentSetId',
      description: 'Description',
      dryRun: 'DryRun',
      hostName: 'HostName',
      hpcClusterId: 'HpcClusterId',
      httpEndpoint: 'HttpEndpoint',
      httpPutResponseHopLimit: 'HttpPutResponseHopLimit',
      httpTokens: 'HttpTokens',
      imageFamily: 'ImageFamily',
      imageId: 'ImageId',
      innerIpAddress: 'InnerIpAddress',
      instanceChargeType: 'InstanceChargeType',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      keyPairName: 'KeyPairName',
      nodeControllerId: 'NodeControllerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
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
      spotDuration: 'SpotDuration',
      spotInterruptionBehavior: 'SpotInterruptionBehavior',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      storageSetId: 'StorageSetId',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
      tag: 'Tag',
      tenancy: 'Tenancy',
      useAdditionalService: 'UseAdditionalService',
      userData: 'UserData',
      vSwitchId: 'VSwitchId',
      vlanId: 'VlanId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hibernationOptions: CreateInstanceRequestHibernationOptions,
      privatePoolOptions: CreateInstanceRequestPrivatePoolOptions,
      systemDisk: CreateInstanceRequestSystemDisk,
      affinity: 'string',
      arn: { 'type': 'array', 'itemType': CreateInstanceRequestArn },
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      clusterId: 'string',
      creditSpecification: 'string',
      dataDisk: { 'type': 'array', 'itemType': CreateInstanceRequestDataDisk },
      dedicatedHostId: 'string',
      deletionProtection: 'boolean',
      deploymentSetGroupNo: 'number',
      deploymentSetId: 'string',
      description: 'string',
      dryRun: 'boolean',
      hostName: 'string',
      hpcClusterId: 'string',
      httpEndpoint: 'string',
      httpPutResponseHopLimit: 'number',
      httpTokens: 'string',
      imageFamily: 'string',
      imageId: 'string',
      innerIpAddress: 'string',
      instanceChargeType: 'string',
      instanceName: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      keyPairName: 'string',
      nodeControllerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
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
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      storageSetId: 'string',
      storageSetPartitionNumber: 'number',
      tag: { 'type': 'array', 'itemType': CreateInstanceRequestTag },
      tenancy: 'string',
      useAdditionalService: 'boolean',
      userData: 'string',
      vSwitchId: 'string',
      vlanId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.hibernationOptions && typeof (this.hibernationOptions as any).validate === 'function') {
      (this.hibernationOptions as any).validate();
    }
    if(this.privatePoolOptions && typeof (this.privatePoolOptions as any).validate === 'function') {
      (this.privatePoolOptions as any).validate();
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(Array.isArray(this.arn)) {
      $dara.Model.validateArray(this.arn);
    }
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
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

