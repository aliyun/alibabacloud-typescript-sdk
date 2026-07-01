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
   * The private pool ID, which is the ID of the elasticity assurance or capacity reservation.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The private pool option for launching the instance. A private pool is generated when an elasticity assurance or capacity reservation takes effect. You can select a private pool when you start an instance. Valid values:
   * 
   * - Open: open mode. The system automatically matches an open private pool. If no matching private pool is available, the instance is launched using public pool resources. You do not need to set `PrivatePoolOptions.Id`.
   * - Target: specified mode. The instance is launched using the specified private pool. If the specified private pool is unavailable, the instance fails to launch. In this mode, you must specify the private pool ID. Set `PrivatePoolOptions.Id` to the private pool ID.
   * - None: does not use a private pool. The instance is launched without using any private pool.
   * 
   * Default value: None.
   * 
   * In any of the following scenarios, the private pool option can only be set to `None` or left empty:
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
   * > The cloud_essd_entry value is supported only when `InstanceType` is set to the [u1, universal instance family](https://help.aliyun.com/document_detail/457079.html) (`ecs.u1`) or the [e, economy instance family](https://help.aliyun.com/document_detail/108489.html) (`ecs.e`). Settings of this parameter determine the computing power and optimization level of the system disk.
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
   * The name of the system disk. The name must be 2 to 128 characters in length and can contain letters in the Unicode letter category (including English and Chinese characters and digits). The name can contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * Default value: empty.
   * 
   * @example
   * SystemDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * The performance level (PL) of the enterprise SSD used as the system disk. Settings of this parameter apply only when the disk category is not standard SSD. Valid values:
   * 
   * - PL0: a single disk can deliver up to 10,000 random read/write IOPS.
   * - PL1 (default): a single disk can deliver up to 50,000 random read/write IOPS.
   * - PL2: a single disk can deliver up to 100,000 random read/write IOPS.
   * - PL3: a single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For information about how to select an ESSD performance level, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk, in GiB. Valid values:
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
   * The ID of the dedicated block storage cluster. To use a disk in a dedicated block storage cluster as the system disk when you create an ECS instance, set this parameter.
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
   * - cloud_essd: enterprise SSD (ESSD).
   * - cloud: basic disk.
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_essd_entry: ESSD Entry disk.
   *   > The cloud_essd_entry value is supported only when `InstanceType` is set to the `ecs.u1` or `ecs.e` instance family. Settings of this parameter determine the optimization level of the data disk.
   * - elastic_ephemeral_disk_standard: elastic ephemeral disk - standard.
   * - elastic_ephemeral_disk_premium: elastic ephemeral disk - Premium Edition.
   * 
   * The default value is cloud_efficiency for I/O optimized instances and cloud for non-I/O optimized instances.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether the data disk is released when the instance is released.
   * 
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
   * TestDescription
   */
  description?: string;
  /**
   * @remarks
   * The mount point of the data disk.
   * 
   * > This parameter is applicable only to full image (system image) scenarios. You can set this parameter to the mount point of the data disk in the full image and modify the corresponding `DataDisk.N.Size` and `DataDisk.N.Category` parameters to change the disk category and size of the data disk in the full image.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The name of the data disk. The name must be 2 to 128 characters in length and can contain letters in the Unicode letter category (including English and Chinese characters and digits). The name can contain colons (:), underscores (_), periods (.), or hyphens (-).
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
   * Specifies whether data disk N is encrypted.
   * 
   * - true: encrypted.
   * 
   * - false: not encrypted.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The KMS key ID used by the disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The performance level (PL) of the enterprise SSD used as a data disk. Settings of this parameter apply only when the disk category is not standard SSD. The value of N must be the same as that in `DataDisk.N.Category=cloud_essd`. Valid values:
   * 
   * - PL0: a single disk can deliver up to 10,000 random read/write IOPS.
   * - PL1 (default): a single disk can deliver up to 50,000 random read/write IOPS.
   * - PL2: a single disk can deliver up to 100,000 random read/write IOPS.
   * - PL3: a single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For information about how to select an ESSD performance level, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL2
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of data disk N, in GiB. Valid values of N: 1 to 16. Valid values:
   * 
   * - cloud_efficiency: 20 to 32768.
   * - cloud_ssd: 20 to 32768.
   * - cloud_essd: The valid values depend on the value of `DataDisk.N.PerformanceLevel`.
   *     - PL0: 1 to 65,536.
   *     - PL1: 20 to 65,536.
   *     - PL2: 461 to 65,536.
   *     - PL3: 1261 to 65,536.
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
   * The snapshot ID used to create data disk N. Valid values of N: 1 to 16.
   * 
   * - If `DataDisk.N.SnapshotId` is specified, `DataDisk.N.Size` is ignored. The actual size of the created disk is the size of the specified snapshot.
   * 
   * - Snapshots created on or before July 15, 2013 cannot be used. Requests with such snapshots are rejected.
   * 
   * @example
   * s-bp17441ohwka0yuh****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster. To use a disk in a dedicated block storage cluster as a data disk when you create an ECS instance, set this parameter.
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
   * The tag key for the instance, disk, and primary ENI. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value for the instance, disk, and primary ENI. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
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
   * Specifies whether the instance is associated with a dedicated host. Valid values:
   * 
   * - default: The instance is not associated with a dedicated host. When an instance that has economical mode enabled is restarted after it is stopped, the instance is deployed to another dedicated host in the automatic deployment resource pool if the resources of the original dedicated host are insufficient.
   * 
   * - host: The instance is associated with a dedicated host. When an instance that has economical mode enabled is restarted after it is stopped, the instance remains on the original dedicated host. If the resources of the original dedicated host are insufficient, the instance fails to restart.
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
   * The auto-renewal period. This parameter is required when AutoRenew is set to True.
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
   * The cluster ID of the instance.
   * 
   * > This parameter will be deprecated. To improve compatibility, use other parameters instead.
   * 
   * @example
   * c-bp67acfmxazb4p****
   */
  clusterId?: string;
  /**
   * @remarks
   * The performance mode of the burstable instance. Valid values:
   * 
   * - Standard: standard mode. For more information, see the performance constrained mode section in [What are burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * - Unlimited: unlimited mode. For more information, see the unlimited performance mode section in [What are burstable instances](https://help.aliyun.com/document_detail/59977.html).
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
   * >Notice: Spot instances cannot be created on dedicated hosts. If you specify `DedicatedHostId`, the `SpotStrategy` and `SpotPriceLimit` settings in the request are automatically ignored.
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The release protection attribute of the instance. Specifies whether the instance can be released from the ECS console or by calling [DeleteInstance](https://help.aliyun.com/document_detail/25507.html).
   * 
   * -   true: enables release protection.
   * -   false (default): disables release protection.
   * 
   * > This attribute is applicable only to pay-as-you-go instances. It can only prevent manual release, not system-initiated release.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The group number of the instance in the deployment set. This parameter takes effect only when the deployment set uses the high availability group strategy (AvailabilityGroup). Valid values: 1 to 7.
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
   * - true: performs only a dry run. The system checks whether the required parameters are specified, whether the request format is valid, whether service limits are met, and whether the specified ECS resources are available. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * - false (default): performs a dry run and sends the request. If the check succeeds, the instance is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The hostname of the server.
   * 
   * - The hostname cannot start or end with a period (.) or hyphen (-), and cannot contain consecutive periods or hyphens.
   * - Windows instances: The hostname must be 2 to 15 characters in length and cannot contain periods (.) or consist entirely of digits. It can contain uppercase and lowercase letters, digits, and hyphens (-).
   * - Other instances (such as Linux): The hostname must be 2 to 64 characters in length and can contain multiple periods (.). Each segment separated by a period can contain uppercase and lowercase letters, digits, and hyphens (-).
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
   * - enabled: enabled.
   * - disabled: disabled.
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
   * - required: forcefully uses the security-hardened mode. After this value is set, instance metadata cannot be accessed in normal mode.
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
   * The name of the image family. Set this parameter to obtain the latest available image from the specified image family to create the instance.
   * - If `ImageId` is specified, you cannot set this parameter.
   * - If `ImageId` is not specified, you can set this parameter.
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image used to start the instance. To use an Alibaba Cloud Marketplace image, you can view the `ImageId` on the image product page. If you do not use `ImageFamily` to select the latest available image from an image family, this parameter is required.
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
   * The name of the instance. The name must be 2 to 128 characters in length and can contain letters in the Unicode letter category (including English and Chinese characters) and digits. The name can contain colons (:), underscores (_), periods (.), or hyphens (-). If this parameter is not specified, the default value is the instance ID.
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
   * > In **pay-by-traffic** mode, the peak inbound and outbound bandwidths are both upper limits and are not guaranteed. When resource contention occurs, the peak bandwidth may be throttled. If your workloads require guaranteed bandwidth, use **pay-by-bandwidth** mode.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth, in Mbit/s. Valid values:
   * 
   * - If the purchased outbound bandwidth is less than or equal to 10 Mbit/s: 1 to 10. Default value: 10.
   * - If the purchased outbound bandwidth is greater than 10 Mbit/s: 1 to the value of `InternetMaxBandwidthOut`. Default value: the value of `InternetMaxBandwidthOut`.
   * 
   * @example
   * 50
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth, in Mbit/s. Valid values: 0 to 100.
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
   * - none: not I/O optimized.
   * - optimized: I/O optimized.
   * 
   * The default value for [retired instance types](https://help.aliyun.com/document_detail/55263.html) is none.
   * 
   * The default value for other instance types is optimized.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * > For Windows instances, this parameter is ignored. The default value is empty. Even if this parameter is specified, only the `Password` content is used.
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
   * - For security purposes, use HTTPS to send requests if the Password parameter is specified.
   * - For Windows instances, the password cannot start with a forward slash (/).
   * - For instances that run certain operating systems, passwords are not supported. Only key pairs are supported. Examples: Others Linux and Fedora CoreOS.
   * 
   * @example
   * TestEcs123!
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the password preset in the image. When you use this parameter, the Password parameter must be empty. Make sure that the image has a password configured.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The subscription duration of the instance. The unit is specified by `PeriodUnit`. This parameter is required and takes effect only when `InstanceChargeType` is set to `PrePaid`. If `DedicatedHostId` is specified, the value of this parameter cannot exceed the subscription duration of the dedicated host. Valid values:
   * 
   * <props="china">
   * - If PeriodUnit is set to Week, valid values of Period are 1, 2, 3, and 4.
   * - If PeriodUnit is set to Month, valid values of Period are 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * 
   * 
   * <props="intl">If PeriodUnit is set to Month, valid values of Period are 1, 2, 3, 6, and 12.
   * 
   * <props="partner">If PeriodUnit is set to Month, valid values of Period are 1, 2, 3, 6, and 12.
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
   * The protection period of the spot instance, in hours. Default value: 1. Valid values:
   * 
   * - 1: After the instance is created, Alibaba Cloud ensures that the instance is not automatically released for 1 hour. After 1 hour, the system automatically compares the bid price with the market price and checks resource availability to determine whether to retain automatic release the instance.
   * - 0: After the instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system automatically compares the bid price with the market price and checks resource availability to determine whether to retain automatic release the instance.
   * 
   * > 
   * > - This parameter supports only the value 0 or 1.
   * > - Spot instances are billed by second. Set the protection period based on the expected task execution duration.
   * > - Alibaba Cloud sends an ECS system event notification 5 minutes before the instance is released.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The break mode of the spot instance. Valid values:
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
   * The maximum hourly price of the instance. This value can be accurate to three decimal places. This parameter takes effect only when `SpotStrategy` is set to `SpotWithPriceLimit`.
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
   * The maximum number of partitions in the storage set. Valid values: greater than or equal to 2.
   * 
   * @example
   * 2
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The list of tags.
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
   * The instance user data. The data must be encoded in Base64. The maximum size of the raw data is 32 KB.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * The vSwitch ID. This parameter is required when you create a VPC-connected instance. You can call [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) to query available vSwitches.
   * 
   * > If you specify `VSwitchId`, the specified `ZoneId` must be in the same zone as the vSwitch. You can also leave `ZoneId` empty, and the system automatically selects the zone of the specified vSwitch.
   * 
   * @example
   * vsw-bp1s5fnvk4gn2tws0****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual local area network ID.
   * 
   * @example
   * 10
   */
  vlanId?: string;
  /**
   * @remarks
   * The zone ID of the instance. For more information, call [DescribeZones](https://help.aliyun.com/document_detail/25610.html) to query the zone list.
   * 
   * > If you specify `VSwitchId`, the specified `ZoneId` must be in the same zone as the vSwitch. You can also leave `ZoneId` empty, and the system automatically selects the zone of the specified vSwitch.
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

