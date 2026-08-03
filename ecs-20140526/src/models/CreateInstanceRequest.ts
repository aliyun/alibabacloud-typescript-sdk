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
   * The ID of the private pool. The ID of the private pool is the same as that of the elasticity assurance or capacity reservation.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The private pool options for the instance launch. A private pool is generated when an elasticity assurance or a capacity reservation takes effect. You can select a private pool when you start an instance. Valid values:
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
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The description of the system disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * TestDescription
   */
  description?: string;
  /**
   * @remarks
   * The name of the system disk. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-). The name supports characters categorized as letters in Unicode, including Chinese characters.
   * 
   * @example
   * SystemDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * The performance level of the enterprise SSD used as the system disk. Settings depend on the disk category. Valid values:
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk, in GiB. Valid values:
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
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release the data disk when the instance is released.
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
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The name of the data disk. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-). The name supports characters categorized as letters in Unicode, including Chinese characters.
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
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key used by the disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The performance level of the enterprise SSD used as a data disk. Settings depend on the disk category. The value of N must be the same as that in `DataDisk.N.Category=cloud_essd`. Valid values:
   * 
   * @example
   * PL2
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of data disk N, in GiB. Valid values of N: 1 to 16. Valid values:
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot used to create data disk N. Valid values of N: 1 to 16.
   * 
   * @example
   * s-bp17441ohwka0yuh****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster. If you want to use disks in a dedicated block storage cluster as data disks when you create the ECS instance, set this parameter.
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
   * The tag key of the instance, disk, and primary ENI. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance, disk, and primary ENI. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length. It cannot contain `http://` or `https://`.
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
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period. This parameter is required when AutoRenew is set to True.
   * 
   * @example
   * 2
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the cluster to which the instance belongs.
   * 
   * @example
   * c-bp67acfmxazb4p****
   */
  clusterId?: string;
  /**
   * @remarks
   * The running mode of the burstable instance. Valid values:
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
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The release protection attribute of the instance. Specifies whether the instance can be released from the console or by calling the [DeleteInstance](https://help.aliyun.com/document_detail/25507.html) operation.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The number of the deployment set group to which to deploy the instance in the deployment set. This parameter takes effect only when the deployment set uses the high availability group strategy (AvailabilityGroup). Valid values: 1 to 7.
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
   * @example
   * InstanceTest
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The hostname of the Elastic Compute Service server.
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
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The name of the image family. You can set this parameter to obtain the latest available image from the specified image family to create the instance.
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image used to start the instance. To use an Alibaba Cloud Marketplace image, you can view the `ImageId` on the product page of the Alibaba Cloud Marketplace image. This parameter is required if you do not specify `ImageFamily` to select the latest available image from an image family.
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
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The name of the instance. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-). The name supports characters categorized as letters in Unicode, including Chinese characters. If this parameter is not specified, the default value is the instance ID.
   * 
   * @example
   * k8s-node-[1,4]-alibabacloud
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type of the instance.
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
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth, in Mbit/s. Valid values:
   * 
   * @example
   * 50
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth, in Mbit/s. Valid values: 0 to 100.
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Specifies whether the instance is I/O optimization enabled. Valid values:
   * The default value for [retired instance types](https://help.aliyun.com/document_detail/55263.html) is none. For other instance types, the default value is optimized.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The name of the key pair.
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
   * @example
   * TestEcs123!
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the password preset in the image. When you use this parameter, the Password parameter must be empty, and you must make sure that the image has a password configured.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The subscription period of the instance. The unit is specified by `PeriodUnit`. This parameter takes effect and is required only when `InstanceChargeType` is set to `PrePaid`. If `DedicatedHostId` is specified, the value of this parameter cannot exceed the subscription period of the dedicated host. Valid values:
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period. Valid values:
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The private IP address of the instance. The IP address must be an available address in the CIDR block of the specified vSwitch (VSwitchId).
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
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent list of regions.
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
   * The protection period of the spot instance, in hours. Default value: 1. Valid values:
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The break mode of the spot instance. Valid values:
   * 
   * @example
   * Terminate
   */
  spotInterruptionBehavior?: string;
  /**
   * @remarks
   * The maximum hourly price of the instance. A maximum of three decimal places are supported. This parameter takes effect only when `SpotStrategy` is set to `SpotWithPriceLimit`.
   * 
   * @example
   * 0.98
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The bidding policy for the instance. This parameter takes effect only when `InstanceChargeType` is set to `PostPaid`. Valid values:
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
   * The tags.
   */
  tag?: CreateInstanceRequestTag[];
  /**
   * @remarks
   * Specifies whether to create the instance on a dedicated host. Valid values:
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
   * Instance user data of the instance. Instance user data must be encoded in Base64. The raw data can be up to 32 KB in size.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * The vSwitch ID. This parameter is required if you create a VPC-connected instance. You can call [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) to query created vSwitches.
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

