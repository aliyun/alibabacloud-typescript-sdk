// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestHibernationOptions extends $dara.Model {
  /**
   * @remarks
   * > This parameter is in invitational preview and is not supported.
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
   * The ID of the private pool. It is the ID of the elasticity assurance or capacity reservation.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The private pool options for starting spot instance. After an elasticity assurance or a capacity reservation takes effect, a private pool is generated for you to select when you start spot instance. Valid values:
   * 
   * - Open: open mode. The system automatically matches an open private pool. If no matching private pool is available, the system uses resources from the public pool to start spot instance. In this mode, you do not need to specify the PrivatePoolOptions.Id parameter.
   * - Target: specified mode. The system uses the specified private pool to start spot instance. If the specified private pool is unavailable, spot instance fails to start. In this mode, you must specify the private pool ID, which means the PrivatePoolOptions.Id parameter is required.
   * - None: no private pool. Spot instance is started without using private pool capacity.
   * 
   * Default value: None.
   * 
   * In any of the following scenarios, the private pool option for starting spot instance can only be set to None or left empty:
   * - Create a preemptible instance.
   * - Create an ECS instance on a dedicated host.
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
   * The category of the system cloud disk. Valid values:
   * 
   * - cloud_efficiency: ultra cloud disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: ESSD.
   * - cloud: basic cloud disk.
   * - cloud_auto: ESSD AutoPL.
   * - cloud_essd_entry: ESSD Entry disk.
   * > This parameter supports the cloud_essd_entry value only when the InstanceType Settings are [general computing power instance family u1](https://help.aliyun.com/document_detail/457079.html) (ecs.u1) or [Economy instance family e](https://help.aliyun.com/document_detail/108489.html) (ecs.e).
   * 
   * For phased-out instance types that are not I/O optimized instances, the default value is cloud. For other instance types, the default value is cloud_efficiency.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The description of the system cloud disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * Default value: empty.
   * 
   * @example
   * TestDescription
   */
  description?: string;
  /**
   * @remarks
   * The name of the system cloud disk. The name must be 2 to 128 characters in length and can contain letters and digits. It can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * Default value: empty.
   * 
   * @example
   * SystemDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * Settings of the performance level of the ESSD used as the system cloud disk. Valid values:
   * 
   * - PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * - PL1: A single ESSD can deliver up to 50,000 random read/write IOPS. This is the default value.
   * - PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For more information about how to select the performance level of an ESSD, see [standard SSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GiB. Valid values:
   * 
   * - Basic cloud disk: 20 to 500.
   * 
   * - Other cloud disk types: 20 to 2048.
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
   * The dedicated block storage cluster ID. If you need to use a cloud disk in a dedicated block storage cluster as the system cloud disk when creating an ECS instance, specify this parameter.
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
   * > This parameter is in invitational preview and is not supported.
   * 
   * @example
   * 1234567890
   */
  assumeRoleFor?: number;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not supported.
   * 
   * @example
   * Primary
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

export class CreateInstanceRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The category of data cloud disk N. Valid values:
   * 
   * - cloud_efficiency: ultra cloud disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: ESSD.
   * - cloud: basic cloud disk.
   * - cloud_auto: ESSD AutoPL.
   * - cloud_essd_entry: ESSD Entry.
   *   > The cloud_essd_entry value is supported only when InstanceType is set to the ecs.u1 or ecs.e instance family.
   * - elastic_ephemeral_disk_standard: standard ESSD Entry disk.
   * - elastic_ephemeral_disk_premium: premium ESSD Entry disk.
   * 
   * For I/O optimized instances, the default value is cloud_efficiency. For non-I/O optimized instances, the default value is cloud.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release data cloud disk N when the instance is released.
   * 
   * - true: releases the data cloud disk.
   * - false: does not release the data cloud disk.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of data cloud disk N. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * TestDescription
   */
  description?: string;
  /**
   * @remarks
   * The mount point of data cloud disk N.
   * 
   * > This parameter is applicable only to full images. You can set this parameter to the mount point of the data cloud disk in the full image, and modify the DataDisk.N.Size and DataDisk.N.Category parameters to change the category and size of the data cloud disk in the full image.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The name of data cloud disk N. The name must be 2 to 128 characters in length and can contain letters and digits. It can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * DataDiskName
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
   * Specifies whether to encrypt data cloud disk N.
   * 
   * - true: encrypts the data cloud disk.
   * 
   * - false: does not encrypt the data cloud disk.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the KMS key used by the cloud disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * Settings of the performance level of the ESSD used as data cloud disk N. The value of N must be the same as the value of N in DataDisk.N.Category=cloud_essd. Valid values:
   * 
   * - PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * - PL1: A single ESSD can deliver up to 50,000 random read/write IOPS. This is the default value.
   * - PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For more information about how to select the performance level of an ESSD, see [standard SSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL2
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of data cloud disk N. Valid values of N: 1 to 16. Unit: GiB. Valid values:
   * 
   * -   cloud_efficiency: 20 to 32768.
   * -   cloud_ssd: 20 to 32768.
   * -   cloud_essd: The valid values depend on the value of DataDisk.N.PerformanceLevel.
   *     - PL0: 1 to 65,536.
   *     - PL1: 20 to 65,536.
   *     - PL2: 461 to 65,536.
   *     - PL3: 1261 to 65,536.
   * -   cloud: 5 to 2000.
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
   * - If you specify the DataDisk.N.SnapshotId parameter, the DataDisk.N.Size parameter is ignored, and the actual size of the created cloud disk is the size of the specified snapshot.
   * 
   * - You cannot use snapshots created on or before July 15, 2013. Otherwise, the request is rejected with an error.
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
   * The tag key of the instance, cloud disk, and primary ENI. Valid values of N: 1 to 20. If this parameter is specified, it cannot be an empty string. The tag key can be up to 128 characters in length, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance, cloud disk, and primary ENI. Valid values of N: 1 to 20. If this parameter is specified, it can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
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
   * Specifies whether to associate the instance on a dedicated host with the dedicated host. Valid values:
   * 
   * - default: The instance is not associated with the dedicated host. If an instance in the economical mode is stopped and then started, and the original dedicated host has insufficient resources, the instance is deployed on another dedicated host in the automatic deployment resource pool.
   * 
   * - host: The instance is associated with the dedicated host. If an instance in the economical mode is stopped and then started, it is still deployed on the original dedicated host. If the original dedicated host has insufficient resources, the instance fails to start.
   * 
   * Default value: default.
   * 
   * @example
   * default
   */
  affinity?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not supported.
   */
  arn?: CreateInstanceRequestArn[];
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter takes effect only when InstanceChargeType is set to PrePaid. Valid values:
   * 
   * - true: enables auto-renewal.
   * - false: disables auto-renewal. This is the default value.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration. This parameter is required when AutoRenew is set to true.
   * 
   * <props="china">When PeriodUnit is set to Week, valid values of AutoRenewPeriod are 1, 2, and 3.
   * 
   * When PeriodUnit is set to Month, valid values of AutoRenewPeriod are 1, 2, 3, 6, and 12.
   * 
   * @example
   * 2
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the cluster to which the instance belongs.
   * 
   * > This parameter is about to be deprecated. To improve compatibility, use other parameters instead.
   * 
   * @example
   * c-bp67acfmxazb4p****
   */
  clusterId?: string;
  /**
   * @remarks
   * The performance mode of the burstable instance. Valid values:
   * 
   * - Standard: standard mode. For more information about instance performance, see the "Standard mode" section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * - Unlimited: unlimited mode. For more information about instance performance, see the "Unlimited mode" section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The data cloud disks.
   */
  dataDisk?: CreateInstanceRequestDataDisk[];
  /**
   * @remarks
   * The ID of the dedicated host.
   * <props="china">You can call the [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html) operation to query the list of dedicated host IDs.
   * 
   * <props="intl">You can call the [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html) operation to query the list of dedicated host IDs.
   * 
   * >Notice: Dedicated hosts do not support spot instance. If you specify the DedicatedHostId parameter, the SpotStrategy and SpotPriceLimit Settings in the request are automatically ignored.</notice>
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The release protection attribute of the instance. It specifies whether the instance can be released through the console or by calling the [DeleteInstance](https://help.aliyun.com/document_detail/25507.html) operation.
   * 
   * -   true: enables release protection for the instance.
   * -   false: disables release protection for the instance. This is the default value.
   * 
   * > This attribute applies only to pay-as-you-go instances and restricts only manual release operations. It does not take effect on system release operations.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The group number of the instance in the deployment set. This parameter is valid when the deployment set uses the high availability group strategy (AvailabilityGroup). Valid values: 1 to 7.
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
   * Specifies whether to perform only a dry run on the request. Valid values:
   * 
   * - true: performs a dry run and does not create the instance. The system checks whether required parameters are specified, the request format, service limits, and ECS inventory. If the check fails, the corresponding error is returned. If the check succeeds, the DryRunOperation error code is returned.
   * - false: performs a dry run and creates the instance if the check succeeds. This is the default value.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The hostname of the instance.
   * 
   * - The hostname cannot start or end with a period (.) or a hyphen (-), and cannot contain consecutive periods (.) or hyphens (-).
   * - For Windows instances: The hostname must be 2 to 15 characters in length and cannot contain periods (.). It cannot contain only digits. It can contain uppercase and lowercase letters, digits, and hyphens (-).
   * - For other instances such as Linux instances: The hostname must be 2 to 64 characters in length and can contain multiple periods (.). The string between two consecutive periods is a segment, which can contain uppercase and lowercase letters, digits, and hyphens (-).
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
   * > This parameter is not available.
   * 
   * @example
   * 0
   */
  httpPutResponseHopLimit?: number;
  /**
   * @remarks
   * Specifies whether to forcibly use the security hardening mode (IMDSv2) to access instance metadata. Valid values:
   * - optional: does not forcibly use IMDSv2.
   * - required: forcibly uses IMDSv2. After you set this value, you cannot access instance metadata in normal mode.
   * 
   * Default value: optional.
   * > For more information about the modes for accessing instance metadata, see [Access modes of instance metadata](https://help.aliyun.com/document_detail/150575.html).
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The name of the image family. You can set this parameter to use the latest available image in the image family to create the instance.
   * - If ImageId is specified, you cannot specify this parameter.
   * - If ImageId is not specified, you can specify this parameter.
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image used to start the instance. To use an Alibaba Cloud Marketplace image, you can view the ImageId on the image details page in Alibaba Cloud Marketplace. This parameter is required unless you specify ImageFamily to use the latest available image in the image family.
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
   * - PrePaid: subscription. If you select this billing method, make sure that your account supports balance payment or credit payment. Otherwise, an InvalidPayMethod error is returned.
   * - PostPaid: pay-as-you-go. This is the default value.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The name of the instance. The name must be 2 to 128 characters in length and can contain letters and digits. It can also contain colons (:), underscores (_), periods (.), and hyphens (-). If this parameter is not specified, the default value is the instance ID.
   * 
   * @example
   * k8s-node-[1,4]-alibabacloud
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * - Instance type selection: See [Instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to view the performance data of the target instance type. Alternatively, see [Instance type selection](https://help.aliyun.com/document_detail/58291.html) to learn how to select an instance type.
   * - Inventory query: Call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/66186.html) operation to check the resource availability in a specified region or zone.
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
   * - PayByTraffic: pay-by-traffic. This is the default value.
   * 
   * > In **pay-by-traffic** mode, the peak inbound and outbound bandwidths are upper limits and are not guaranteed. When resource contention occurs, the peak bandwidths may be limited. If your business requires guaranteed bandwidth, use the **pay-by-bandwidth** mode.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s. Valid values:
   * 
   * - When the purchased outbound bandwidth is less than or equal to 10 Mbit/s: 1 to 10. Default value: 10.
   * - When the purchased outbound bandwidth is greater than 10 Mbit/s: 1 to the value of InternetMaxBandwidthOut. Default value: the value of InternetMaxBandwidthOut.
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
   * Specifies whether the instance is an I/O optimized instance. Valid values:
   * 
   * - none: The instance is not I/O optimized.
   * - optimized: The instance is I/O optimized.
   * 
   * For [phased-out instance types](https://help.aliyun.com/document_detail/55263.html), the default value is none.
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
   * > For Windows instances, this parameter is ignored. Default value: empty. Even if you specify this parameter, only the Password parameter takes effect.
   * 
   * @example
   * KeyPairTestName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The unique identifier of the platform-managed host, such as mh-f2d3647ca21****.
   * 
   * @example
   * mh-f2d3647ca21****
   */
  managedHostId?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not supported.
   * 
   * @example
   * null
   */
  nodeControllerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the instance. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported:
   * 
   * ```
   * ()`~!@#$%^&*-_+=|{}[]:;\\"<>,.?/
   * ```
   * 
   * Note:
   * 
   * - If you specify the Password parameter, send requests over HTTPS to prevent password leaks.
   * - For Windows instances, the password cannot start with a forward slash (/).
   * - Instances running certain operating systems do not support password configuration and only support key pair configuration, such as Others Linux and Fedora CoreOS.
   * 
   * @example
   * TestEcs123!
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the preset password of the image. When you use this parameter, leave the Password parameter empty and make sure that the selected image has a preset password.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The subscription period of the resource. The unit is specified by PeriodUnit. This parameter is required and takes effect only when InstanceChargeType is set to PrePaid. If DedicatedHostId is specified, the subscription period cannot exceed the subscription period of the dedicated host. Valid values:
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
   * - Week
   * - Month
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
   * The private IP address of the instance. The IP address must be an available IP address within the CIDR block of the vSwitch specified by VSwitchId.
   * 
   * @example
   * 172.16.236.*
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The name of the instance RAM role. You can use the RAM API operation [ListRoles](https://help.aliyun.com/document_detail/28713.html) to query the instance RAM roles that you have created.
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
   * The ID of the security group to which the new instance belongs.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The protection period of the preemptible instance. Unit: hours. Default value: 1. Valid values:
   * 
   * - 1: Alibaba Cloud guarantees that spot instance will not undergo automatic release within 1 hour after it is created. After 1 hour, the system automatically compares the bid price with the marketplace price and checks resource inventory to determine whether to retain or revoke spot instance.
   * - 0: Alibaba Cloud does not guarantee that spot instance runs for 1 hour after it is created. The system automatically compares the bid price with the marketplace price and checks resource inventory to determine whether to retain or revoke spot instance.
   * 
   * > 
   * > - The Settings of this parameter can only be 0 or 1.
   * > - Spot instances are billed by the second. Select an appropriate protection period based on the execution duration of your node.
   * > - Alibaba Cloud sends you a notification through ECS system events 5 minutes before spot instance is revoked.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The interruption behavior of the preemptible instance. Valid values:
   * 
   * - Terminate: releases the instance.
   * 
   * - Stop: puts the instance into the break mode.
   * 
   *   For more information about the break mode, see [Break mode for pay-as-you-go instances](https://help.aliyun.com/document_detail/63353.html).
   * 
   * Default value: Terminate.
   * 
   * @example
   * Terminate
   */
  spotInterruptionBehavior?: string;
  /**
   * @remarks
   * The maximum hourly price of the instance. The value can be accurate to three decimal places. This parameter takes effect when SpotStrategy is set to SpotWithPriceLimit.
   * 
   * @example
   * 0.98
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The preemption policy for spot instance. This parameter takes effect when InstanceChargeType is set to PostPaid. Valid values:
   * 
   * - NoSpot: Spot instance is a regular pay-as-you-go instance. This is the default value.
   * - SpotWithPriceLimit: Spot instance is a preemptible instance with a maximum hourly price.
   * - SpotAsPriceGo: Spot instance is a preemptible instance for which the market price is automatically used as the bid price.
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
   * - default: The instance is created on a non-dedicated host.
   * 
   * - host: The instance is created on a dedicated host. If you do not specify DedicatedHostId, Alibaba Cloud automatically selects a dedicated host to deploy the instance.
   * 
   * Default value: default.
   * 
   * @example
   * default
   */
  tenancy?: string;
  /**
   * @remarks
   * Specifies whether to use the virtual machine system configurations provided by Alibaba Cloud (Windows: NTP and KMS; Linux: NTP and YUM).
   * 
   * @example
   * true
   */
  useAdditionalService?: boolean;
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
   * The ID of the vSwitch. This parameter is required when you create a VPC-type instance. You can call the [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) operation to query the information of created vSwitches.
   * 
   * > If you specify the VSwitchId parameter, the ZoneId parameter must match the zone of the vSwitch. You can also leave the ZoneId parameter empty, and the system automatically selects the zone of the specified vSwitch.
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
   * The zone ID of the instance. For more information, see [DescribeZones](https://help.aliyun.com/document_detail/25610.html) to obtain the zone list.
   * 
   * > If you specify the VSwitchId parameter, the ZoneId parameter must match the zone of the vSwitch. You can also leave the ZoneId parameter empty, and the system automatically selects the zone of the specified vSwitch.
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
      managedHostId: 'ManagedHostId',
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
      managedHostId: 'string',
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

