// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestHibernationOptions extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
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
   * The ID of the private pool. The ID of a private pool is the same as that of the elasticity assurance or capacity reservation for which the private pool is generated.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The type of the private pool to use to start the instance. A private pool is generated when an elasticity assurance or a capacity reservation takes effect. You can select a private pool to start instances. Valid values:
   * 
   * *   Open: open private pool. The system selects a matching open private pool to start the instance. If no matching open private pools are found, resources in the public pool are used. When you set this parameter to Open, you can leave the `PrivatePoolOptions.Id` parameter empty.
   * *   Target: specified private pool. The system uses the capacity in a specified private pool to start the instance. If the specified private pool is unavailable, the instance cannot be started. If you set this parameter to Target, you must specify the `PrivatePoolOptions.Id` parameter.
   * *   None: no private pool. The capacity in private pools is not used.
   * 
   * Default value: none.
   * 
   * In the following scenarios, the PrivatePoolOptions.MatchCriteria parameter can be set only to `None` or left empty:
   * 
   * *   Create a spot instance.
   * *   Create an instance in the classic network.
   * *   Create an instance on a dedicated host.
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
   * *   cloud_essd: ESSD. If SystemDisk.Category is set to this value, you can use `SystemDisk.PerformanceLevel` to specify the performance level of the disk.
   * *   cloud_efficiency: ultra disk.
   * *   cloud_ssd: standard SSD.
   * *   cloud: basic disk.
   * 
   * For non-I/O optimized instances of retired instance types, the default value is cloud. For other types of instances, the default value is cloud_efficiency.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The description of the system disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * This parameter is empty by default.
   * 
   * @example
   * TestDescription
   */
  description?: string;
  /**
   * @remarks
   * The name of the system disk. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * This parameter is empty by default.
   * 
   * @example
   * SystemDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * The performance level of the ESSD that is used as the system disk. Default value: PL1. Valid values:
   * 
   * *   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1 (default): A single ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For information about ESSD performance levels, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values:
   * 
   * *   Basic disks: 20 to 500.
   * *   Other disks: 20 to 2048.
   * 
   * The value of this parameter must be at least 20 and greater than or equal to the size of the image.
   * 
   * Default value: 40 or the size of the image, whichever is greater.
   * 
   * @example
   * 40
   */
  size?: number;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster. If you want to use disks in a dedicated block storage cluster as system disks when you create instances, you need to specify this parameter.
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
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * 1234567890
   */
  assumeRoleFor?: number;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * Primary
   */
  roleType?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
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
   * *   cloud_efficiency: utra disk.
   * 
   * *   cloud_ssd: standard SSD.
   * 
   * *   cloud_essd: ESSD.
   * 
   * *   cloud: basic disk.
   * 
   * *   cloud_auto: ESSD AutoPL disk.
   * 
   * *   cloud_essd_entry: ESSD Entry disk.
   * 
   *     **
   * 
   *     **Note** This parameter can be set to `cloud_essd_entry` only when `InstanceType` is set to `ecs.u1` or `ecs.e`.
   * 
   * *   elastic_ephemeral_disk_standard: standard elastic ephemeral disk.
   * 
   * *   elastic_ephemeral_disk_premium: premium elastic ephemeral disk.
   * 
   * For I/O optimized instances, the default value is cloud_efficiency. For non-I/O optimized instances, the default value is cloud.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release data disk N when the instance is released. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of data disk N. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * TestDescription
   */
  description?: string;
  /**
   * @remarks
   * The mount point of data disk N.
   * 
   * >  This parameter is applicable to scenarios in which a full image is used to create instances. A full image is an image that contains an operating system, application software, and business data. For these scenarios, you can set this parameter to the mount point of data disk N contained in the full image and modify the `DataDisk.N.Size` and `DataDisk.N.Category` parameters to change the category and size of data disk N created based on the image.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The name of data disk N. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * DataDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * hide
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt data disk N. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the KMS key to use for data disk N.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The performance level of the ESSD to use as data disk N. The value of N must be the same as that in `DataDisk.N.Category` when DataDisk.N.Category is set to cloud_essd. Valid values:
   * 
   * *   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1 (default): A single ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For more information about ESSD performance levels, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL2
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of data disk N. Valid values of N: 1 to 16. Unit: GiB. Valid values:
   * 
   * *   Valid values if you set DataDisk.N.Category to cloud_efficiency: 20 to 32768.
   * 
   * *   Valid values if you set DataDisk.N.Category to cloud_ssd: 20 to 32768.
   * 
   * *   Valid values if you set DataDisk.N.Category to cloud_essd: vary based on the `DataDisk.N.PerformanceLevel` value.
   * 
   *     *   Valid values when DataDisk.N.PerformanceLevel is set to PL0: 1 to 65536.
   *     *   Valid values when DataDisk.N.PerformanceLevel is set to PL1: 20 to 65536.
   *     *   Valid values when DataDisk.N.PerformanceLevel is set to PL2: 461 to 65536.
   *     *   Valid values when DataDisk.N.PerformanceLevel is set to PL3: 1261 to 65536.
   * 
   * *   Valid values if you set DataDisk.N.Category to cloud: 5 to 2000.
   * 
   * >  The value of this parameter must be greater than or equal to the size of the snapshot specified by `SnapshotId`.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot to use to create data disk N. Valid values of N: 1 to 16.
   * 
   * *   If `DataDisk.N.SnapshotId` is specified, `DataDisk.N.Size` is ignored. The data disk is created based on the size of the specified snapshot.
   * *   Use snapshots created on or after July 15, 2013. Otherwise, an error is returned and your request is rejected.
   * 
   * @example
   * s-bp17441ohwka0yuh****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster to which data disk N belongs. If you want to use a disk in a dedicated block storage cluster as data disk N when you create the instance, specify this parameter.
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
   * The key of tag N to add to the instance, disks, and primary ENI. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the instance, disks, and primary ENI. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
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
   * *   default: does not associate the instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance is automatically deployed to another dedicated host in the automatic deployment resource pool if the available resources of the original dedicated host are insufficient.
   * *   host: associates the instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance remains on the original dedicated host. If the available resources of the original dedicated host are insufficient, the instance cannot start.
   * 
   * Default value: default.
   * 
   * @example
   * default
   */
  affinity?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   */
  arn?: CreateInstanceRequestArn[];
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. This parameter is valid only if `InstanceChargeType` is set to `PrePaid`. Valid values:
   * 
   * *   true: enables auto-renewal.
   * *   false: does not enable auto-renewal.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period of the instance. This parameter is required if AutoRenew is set to true.
   * 
   * Valid values if PeriodUnit is set to Month: 1, 2, 3, 6, and 12.
   * 
   * @example
   * 2
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.**** For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the cluster in which to create the instance.
   * 
   * >  This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
   * 
   * @example
   * c-bp67acfmxazb4p****
   */
  clusterId?: string;
  /**
   * @remarks
   * The performance mode of the burstable instance. Valid values:
   * 
   * *   Standard: standard mode. For more information, see the "Standard mode" section in the [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html) topic.
   * *   Unlimited: unlimited mode. For more information, see the "Unlimited mode" section in the [Burstable instances](https://help.aliyun.com/document_detail/59977.html) topic.
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The data disks.
   */
  dataDisk?: CreateInstanceRequestDataDisk[];
  /**
   * @remarks
   * The ID of the dedicated host on which to create the instance.
   * 
   * You can call the [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html) operation to query the list of dedicated host IDs.
   * 
   * > Spot instances (spot instances) cannot be created on dedicated hosts. If you specify DedicatedHostId, SpotStrategy and SpotPriceLimit are automatically ignored.
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * Specifies whether to enable release protection for the instance. This parameter indicates whether you can use the ECS console or call the [DeleteInstance](https://help.aliyun.com/document_detail/25507.html) operation to release the instance.
   * 
   * *   true: enables release protection.
   * *   false (default): disables release protection.
   * 
   * >  This parameter is applicable only to pay-as-you-go instances. It can protect instances against manual releases, but not against automatic releases.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The number of the deployment set group to which to deploy the instance. If the deployment set specified by the DeploymentSetId parameter uses the high availability group strategy (AvailabilityGroup), you can use the DeploymentSetGroupNo parameter to specify a deployment set group in the deployment set. Valid values: 1 to 7.
   * 
   * @example
   * 1
   */
  deploymentSetGroupNo?: number;
  /**
   * @remarks
   * The ID of the deployment set to which to deploy the instance.
   * 
   * @example
   * ds-bp1brhwhoqinyjd6****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The description of the instance. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * This parameter is empty by default.
   * 
   * @example
   * InstanceTest
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   true: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, service limits, and unavailable ECS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   false (default): performs a dry run and performs the actual request. If the request passes the dry run, the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The hostname of the instance.
   * 
   * *   The hostname cannot start or end with a period (.) or hyphen (-). It cannot contain consecutive periods (.) or hyphens (-).
   * *   For a Windows instance, the hostname must be 2 to 15 characters in length and cannot contain periods (.) or contain only digits. It can contain letters, digits, and hyphens (-).
   * *   For an instance that runs another type of operating system such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate the hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
   * 
   * @example
   * LocalHostName
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the high performance computing (HPC) cluster to which to assign the instance.
   * 
   * @example
   * hpc-bp67acfmxazb4p****
   */
  hpcClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the access channel for instance metadata. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * Default value: enabled.
   * 
   * >  For more information about instance metadata, see [Overview of instance metadata](https://help.aliyun.com/document_detail/49122.html).
   * 
   * @example
   * enabled
   */
  httpEndpoint?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * 0
   */
  httpPutResponseHopLimit?: number;
  /**
   * @remarks
   * Specifies whether to forcibly use the security hardening mode (IMDSv2) to access instance metadata. Valid values:
   * 
   * *   optional: does not forcefully use the security hardening mode (IMDSv2).
   * *   required: forcefully uses the security hardening mode (IMDSv2). After you set this parameter to required, you cannot access instance metadata in normal mode.
   * 
   * Default value: optional.
   * 
   * >  For more information about the modes of accessing instance metadata, see [Access mode of instance metadata](https://help.aliyun.com/document_detail/150575.html).
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The name of the image family. You can set this parameter to obtain the latest available custom image from the specified image family to create the instance.
   * 
   * *   ImageFamily must be empty if `ImageId` is specified.
   * *   ImageFamily can be specified if `ImageId` is not specified.
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image to use to create the instance. To use an Alibaba Cloud Marketplace image, you can view the `image ID` on the product page of the Alibaba Cloud Marketplace image. This parameter is required if you do not specify `ImageFamily` to obtain the latest available custom image from the specified image family.
   * 
   * @example
   * ubuntu_18_04_64_20G_alibase_20190624.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The internal IP address to assign to the instance.
   * 
   * @example
   * ``192.168.**.**``
   */
  innerIpAddress?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   PrePaid: subscription. If you set this parameter to PrePaid, make sure that you have sufficient balance or credit in your account. Otherwise, an `InvalidPayMethod` error is returned.
   * *   PostPaid (default): pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The name of the instance. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-). If you do not specify this parameter, the instance ID is used as the instance name by default.
   * 
   * @example
   * 2018-12-06T103200Z
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * *   Instance type selection: See [Instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the performance data of instance types, or see [Best practices for instance type selection](https://help.aliyun.com/document_detail/58291.html) to learn about how to select instance types.
   * *   Query of available resources: Call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/66186.html) operation to query resources available in a specific region or zone.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The billing method for network usage. Default value: PayByTraffic. Valid values:
   * 
   * *   PayByBandwidth: pay-by-bandwidth
   * *   PayByTraffic (default): pay-by-traffic
   * 
   * >  When the **pay-by-traffic** billing method is used for network usage, the maximum inbound and outbound bandwidths are used as the upper limits of bandwidths instead of guaranteed performance specifications. In scenarios where demand outstrips resource supplies, these maximum bandwidth values may be limited. If you want guaranteed bandwidths for your instance, use the **pay-by-bandwidth** billing method for network usage.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s. Valid values:
   * 
   * *   When the purchased outbound public bandwidth is less than or equal to 10 Mbit/s, the valid values of this parameter are 1 to 10 and the default value is 10.
   * *   When the purchased outbound public bandwidth is greater than 10 Mbit/s, the valid values of this parameter are 1 to the `InternetMaxBandwidthOut` value and the default value is the `InternetMaxBandwidthOut` value.
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
   * *   none: The instance is not I/O optimized.
   * *   optimized: The ECS instance is I/O optimized.
   * 
   * For retired instance types, the default value is none. For more information, see [Retired instance types](https://help.aliyun.com/document_detail/55263.html).
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
   * >  For Windows instances, this parameter is ignored. This parameter is empty by default. The `Password` parameter takes effect even if the KeyPairName parameter is specified.
   * 
   * @example
   * KeyPairTestName
   */
  keyPairName?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * hide
   */
  nodeControllerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the instance. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported:
   * 
   *     ( ) ` ~ ! @ # $ % ^ & * - _ + = | { } [ ] : ; \\" < > , . ? /
   * 
   * Take note of the following items:
   * 
   * *   For security reasons, we recommend that you use HTTPS to send requests if the Password parameter is specified.
   * *   Passwords of Windows instances cannot start with a forward slash (/).
   * *   Passwords cannot be set for instances that run specific types of operating systems such as Others Linux and Fedora CoreOS. For these instances, only key pairs can be set.
   * 
   * @example
   * TestEcs123!
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the password preset in the image. When you use this parameter, leave the Password parameter empty and make sure that the selected image has a password preset.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The subscription period of the instance. The unit is specified by `PeriodUnit`. This parameter is valid and required only when `InstanceChargeType` is set to `PrePaid`. If `DedicatedHostId` is specified, the value of Period must not exceed the subscription period of the specified dedicated host. Valid values:
   * 
   * Valid values if PeriodUnit is set to Month: 1, 2, 3, 6, and 12.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period. Valid values:
   * 
   * Month
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The private IP address to assign to the instance. The private IP address must be an available IP address in the CIDR block of the specified vSwitch.
   * 
   * @example
   * 172.16.236.*
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The name of the instance Resource Access Management (RAM) role. You can call the [ListRoles](https://help.aliyun.com/document_detail/28713.html) operation provided by RAM to query the instance RAM roles that you created.
   * 
   * @example
   * RAMTestName
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The ID of the region in which to create the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the instance.
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
   * *   Active: enables security hardening. This value applies only to public images.
   * *   Deactive: disables security hardening. This value is applicable to all images.
   * 
   * @example
   * Active
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group to which to assign the instance.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The protection period of the spot instance. Unit: hours. Default value: 1. Valid values:
   * 
   * *   1: After a spot instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After the 1-hour protection period ends, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
   * *   0: After a spot instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
   * 
   * Alibaba Cloud sends an ECS system event to notify you 5 minutes before the instance is released. Spot instances are billed by second. We recommend that you specify an appropriate protection period based on your business requirements.
   * 
   * >  This parameter takes effect only if the SpotStrategy parameter is set to SpotWithPriceLimit or SpotAsPriceGo.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The interruption mode of the spot instance. Valid values:
   * 
   * *   Terminate: The instance is released.
   * 
   * *   Stop: The instance is stopped in economical mode.
   * 
   *     For information about the economical mode, see [Economical mode](https://help.aliyun.com/document_detail/63353.html).
   * 
   * Default value: Terminate.
   * 
   * @example
   * Terminate
   */
  spotInterruptionBehavior?: string;
  /**
   * @remarks
   * The maximum hourly price of the instance. The value is accurate to three decimal places. This parameter is valid only when `SpotStrategy` is set to `SpotWithPriceLimit`.
   * 
   * @example
   * 0.98
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The bidding policy for the pay-as-you-go instance. This parameter is valid only if you set `InstanceChargeType` to `PostPaid`. Valid values:
   * 
   * *   NoSpot (default): The instance is created as a regular pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is a spot instance for which you specify the maximum hourly price.
   * *   SpotAsPriceGo: The instance is a spot instance for which the market price at the time of purchase is automatically used as the bid price. The market price can be up to the pay-as-you-go price.
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
   * The tags to add to the instance.
   */
  tag?: CreateInstanceRequestTag[];
  /**
   * @remarks
   * Specifies whether to create the instance on a dedicated host. Valid values:
   * 
   * *   default: creates the instance on a non-dedicated host.
   * *   host: creates the instance on a dedicated host. If you do not specify `DedicatedHostId`, Alibaba Cloud selects a dedicated host for the instance.
   * 
   * Default value: default.
   * 
   * @example
   * default
   */
  tenancy?: string;
  /**
   * @remarks
   * Specifies whether to use the system configurations for virtual machines. Alibaba Cloud provides the Network Time Protocol (NTP) and Key Management Service (KMS) system configurations for Windows and the NTP and Yellowdog Updater, Modified (YUM) system configurations for Linux.
   * 
   * @example
   * true
   */
  useAdditionalService?: boolean;
  /**
   * @remarks
   * The user data of the instance. The user data must be encoded in Base64. The maximum size of raw data is 32 KB.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which to connect the instance. This parameter is required when you create an instance in a VPC. You can call the [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) operation to query available vSwitches.
   * 
   * >  If `VSwitchId` is specified, the zone specified by `ZoneId` must be the zone where the specified vSwitch resides. You can also leave `ZoneId` empty. Then, the system selects the zone where the specified vSwitch resides.
   * 
   * @example
   * vsw-bp1s5fnvk4gn2tws0****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual LAN (VLAN).
   * 
   * @example
   * 10
   */
  vlanId?: string;
  /**
   * @remarks
   * The ID of the zone in which to create the instance. You can call the [DescribeZones](https://help.aliyun.com/document_detail/25610.html) operation to query the zones in a specific region.
   * 
   * >  If `VSwitchId` is specified, the zone specified by `ZoneId` must be the zone where the specified vSwitch resides. You can also leave `ZoneId` empty. Then, the system selects the zone where the specified vSwitch resides.
   * 
   * This parameter is empty by default.
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

