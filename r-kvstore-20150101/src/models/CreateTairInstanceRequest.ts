// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTairInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * > A single request can contain up to five key-value pairs.
   * 
   * @example
   * key1_test
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * > **N** specifies the Nth tag in the request. For example, **Tag.1.Value** specifies the value of the first tag, and **Tag.2.Value** specifies the value of the second tag.
   * 
   * @example
   * value1_test
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

export class CreateTairInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Set the value to **true**.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * 
   * - **true**: Enable auto-renewal.
   * 
   * - **false** (default): Disable auto-renewal.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal duration. Unit: month. Valid values: **1**, **2**, **3**, **6**, and **12**.
   * 
   * > This parameter is required only when the **AutoRenew** parameter is set to **true**.
   * 
   * @example
   * 3
   */
  autoRenewPeriod?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * 
   * - **true**: Use a coupon.
   * 
   * - **false** (default): Do not use a coupon.
   * 
   * @example
   * true
   */
  autoUseCoupon?: string;
  /**
   * @remarks
   * The ID of the backup set from the source instance. The system creates a new instance based on the data in this backup set. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/473823.html) operation to query the backup set ID. If the source instance is a cluster instance, you must specify the backup ID for each shard, separated by commas, for example, "10\\*\\*,11\\*\\*,15\\*\\*".
   * 
   * > If your instance is a cloud-native cluster instance, we recommend that you call the [DescribeClusterBackupList](https://help.aliyun.com/document_detail/2679168.html) operation to query the cluster backup ID, such as `cb-xx`. Then, specify the cluster backup ID for the `ClusterBackupId` parameter to clone the cluster instance. This avoids the need to specify the backup ID of each shard.
   * 
   * @example
   * 2158****20
   */
  backupId?: string;
  /**
   * @remarks
   * The business information. This can be the ID of a promotion or a business context.
   * 
   * @example
   * 000000000
   */
  businessInfo?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **PrePaid** (default): The subscription billing method.
   * 
   * - **PostPaid**: The pay-as-you-go billing method.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of the request. The token must be unique among different requests. It is case-sensitive and cannot exceed 64 ASCII characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the cluster backup set. Some instances that use the cluster architecture support cluster backup sets. You can call the [DescribeClusterBackupList](https://help.aliyun.com/document_detail/2679168.html) operation to query for cluster backup set IDs.
   * 
   * - If this feature is supported, you can specify this parameter and leave the **BackupId** parameter empty.
   * 
   * - If this feature is not supported, you must specify the backup ID of each shard of the source instance for the `BackupId` parameter. Separate the backup IDs with commas, for example, "2158\\*\\*\\*\\*20,2158\\*\\*\\*\\*22".
   * 
   * @example
   * cb-hyxdof5x9kqb****
   */
  clusterBackupId?: string;
  /**
   * @remarks
   * The prefix of the connection string. It must start with a lowercase letter, consist of lowercase letters and digits, and be 8 to 40 characters in length.
   * 
   * > The full connection string is in the format of `<prefix>-<instance ID>.redis.rds.aliyuncs.com`.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * Specifies whether to perform a precheck for this request. Valid values:
   * 
   * - **true**: Performs a precheck and does not create the instance. The system checks the request parameters, request format, service limits, and available inventory. If the request fails the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): Sends a normal request and creates the instance after the request passes the precheck.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The database version. Default value: **1.0**. The valid values depend on the Tair instance series:
   * 
   * - **tair_rdb**: Tair memory-enhanced instances are compatible with Redis 5.0, Redis 6.0, and Redis 7.0. Set the value to **5.0**, **6.0**, or **7.0**.
   * 
   * - **tair_scm**: Tair persistent memory-optimized instances are compatible with Redis 6.0. Set the value to **1.0**.
   * 
   * - **tair_essd**: Tair disk-based instances (ESSD/SSD) are compatible with Redis 6.0. Set the value to **1.0** to create an ESSD-based instance or **2.0** to create an SSD-based instance.
   * 
   * @example
   * 1.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * Specifies whether to create the instance as a child instance in a distributed instance. By using this parameter, you can create a distributed instance.
   * 
   * - To create the first child instance, set this parameter to **true**.
   * 
   * - To create the second or third child instance, specify the ID of the distributed instance, such as `gr-bp14rkqrhac****`.
   * 
   * - If you do not want to create a distributed instance, do not specify this parameter.
   * 
   * > To be created as a child instance of a distributed instance, the new instance must be a Tair memory-enhanced instance.
   * 
   * @example
   * gr-bp14rkqrhac****
   */
  globalInstanceId?: string;
  /**
   * @remarks
   * The IDs of the global IP whitelist templates for the instance. To specify multiple template IDs, separate them with commas. The IDs cannot be repeated.
   * 
   * @example
   * g-zsldxfiwjmti0kcm****
   */
  globalSecurityGroupIds?: string;
  /**
   * @remarks
   * The instance type. For more information, see the following topics:
   * 
   * - [Memory-enhanced instance types](https://help.aliyun.com/document_detail/2527112.html)
   * 
   * - [Persistent memory-optimized instance types](https://help.aliyun.com/document_detail/2527110.html)
   * 
   * - [Disk-based instance types](https://help.aliyun.com/document_detail/2527111.html)
   * 
   * This parameter is required.
   * 
   * @example
   * tair.scm.standard.4m.32d
   */
  instanceClass?: string;
  /**
   * @remarks
   * The type of connection string to use when creating a cloud-native, dual-zone instance with the read/write splitting architecture. If you do not specify this parameter, the default value `AzIndependentEndpoint` is used.
   * 
   * - **AzIndependentEndpoint** (**default**): Zone-specific connection string. The primary and secondary zones each provide an independent connection string, allowing clients to connect to the nearest zone.
   * 
   * - **UnifiedEndpoint**: Unified connection string. A single connection string is provided to access nodes in both the primary and secondary zones, but this may cause cross-zone access.
   * 
   * >Notice: 
   * 
   * This parameter applies only to cloud-native, dual-zone instances with the read/write splitting architecture. Other instance types support only zone-specific connection strings.
   * 
   * 
   * 
   * >Notice: 
   * 
   * The `UnifiedEndpoint` option is available only to users on a whitelist. If a non-whitelisted user specifies this value, the request fails. To request access, submit a ticket.
   * 
   * @example
   * AzIndependentEndpoint
   */
  instanceEndpointType?: string;
  /**
   * @remarks
   * The name of the instance. The name must meet the following requirements:
   * 
   * - It must be 2 to 80 characters in length.
   * 
   * - It must start with an uppercase or lowercase letter or a Chinese character. It cannot contain spaces or the following special characters: `@/:=”<>{[]}`.
   * 
   * @example
   * apitest
   */
  instanceName?: string;
  /**
   * @remarks
   * The Tair instance series, which determines the storage medium. Valid values:
   * 
   * - **tair_rdb**: memory-enhanced
   * 
   * - **tair_scm**: persistent memory-optimized
   * 
   * - **tair_essd**: disk-based
   * 
   * This parameter is required.
   * 
   * @example
   * tair_scm
   */
  instanceType?: string;
  /**
   * @remarks
   * The end time of the maintenance window. Specify the time in the *HH:mm*Z format (UTC). For example, to end the maintenance at 02:00 (UTC+8), set this parameter to `18:00Z`.
   * 
   * > The maintenance window must be at least one hour long.
   * 
   * > If this parameter is not specified, the maintenance window ends at 22:00 UTC (06:00 UTC+8) by default.
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window. Specify the time in the *HH:mm*Z format (UTC). For example, to start the maintenance at 01:00 (UTC+8), set this parameter to `17:00Z`.
   * 
   * > If this parameter is not specified, the maintenance window starts at 18:00 UTC (02:00 UTC+8) by default.
   */
  maintainStartTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the parameter template. The instance is created by using the parameters defined in this template.
   * 
   * @example
   * g-50npzjcqb1ua6q6j****
   */
  paramGroupId?: string;
  /**
   * @remarks
   * The password of the instance. The password must meet the following requirements:
   * 
   * - It must be 8 to 32 characters in length.
   * 
   * - It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The supported special characters are `!@#$%^&*()_+-=`.
   * 
   * @example
   * Pass!123456
   */
  password?: string;
  /**
   * @remarks
   * The subscription duration, in months. Valid values: **1**, **2**, **3**, **4**, **5**, **6**, 7, 8, 9, 12, 24, 36, and 60.
   * 
   * > This parameter is required only when you set the `ChargeType` parameter to `PrePaid`.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The service port of the instance. Valid values: 1 to 65535. Default value: 6379.
   * 
   * @example
   * 6379
   */
  port?: number;
  /**
   * @remarks
   * The private IP address of the instance.
   * 
   * > The IP address must be within the CIDR block of the vSwitch to which the instance belongs. You can call the [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) operation to query the CIDR block information.
   * 
   * @example
   * 172.16.88.***
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The number of read-only nodes in the primary zone. This parameter is applicable only to cloud-native instances that use the read/write splitting architecture.
   * 
   * - If the instance uses the standard architecture, the valid values are 1 to 9.
   * 
   * - If the instance uses the cluster architecture, specify the number of read-only nodes per shard. The valid values are 1 to 4.
   * 
   * > If you create a multi-zone instance, you can use this parameter and the `SlaveReadOnlyCount` parameter to customize the number of read-only nodes in the primary and secondary zones.
   * >
   * > - If the instance uses the standard architecture, the sum of `ReadOnlyCount` and `SlaveReadOnlyCount` cannot exceed 9.
   * >
   * > - If the instance uses the cluster architecture, the sum of `ReadOnlyCount` and `SlaveReadOnlyCount` cannot exceed 4.
   * 
   * @example
   * 5
   */
  readOnlyCount?: number;
  /**
   * @remarks
   * When creating an instance from a backup set, specifies whether to restore configurations such as account information (`account`), kernel parameters (`config`), and whitelists (`whitelist`) from the source backup set. To restore a specific configuration, specify its keyword. To restore multiple configurations, separate the keywords with commas.
   * 
   * If this parameter is not specified, no configurations are restored from the source backup set.
   * 
   * > This parameter applies only to cloud-native instances, and the source backup set must contain the specified configuration information. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/473823.html) operation and check the `RecoverConfigMode` parameter in the response to check if the backup set contains the information.
   * 
   * @example
   * whitelist,config,account
   */
  recoverConfigMode?: string;
  /**
   * @remarks
   * The ID of the region where you want to create the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of replica nodes in the primary zone. This parameter is applicable only to cloud-native, multi-replica cluster instances. You can use this parameter to customize the number of replica nodes. Valid values: 1 to 4.
   * 
   * > If you create a multi-zone instance, you can use this parameter and the `SlaveReplicaCount` parameter to customize the number of replica nodes in the primary and secondary zones. The sum of `ReplicaCount` and `SlaveReplicaCount` cannot exceed 4.
   * 
   * @example
   * 2
   */
  replicaCount?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * > - You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation or use the Resource Management console to query the IDs of resource groups. For more information, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * >
   * > - Before you change the resource group of an instance, you can call the [ListResources](https://help.aliyun.com/document_detail/158866.html) operation to view the current resource group of the instance.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * If point-in-time recovery (PITR) is enabled for the source instance, you can specify a point in time within the backup retention period. The system creates a new instance by using the backup data of the source instance at that point in time. Specify the time in the *yyyy-MM-dd*T*HH:mm:ss*Z format (UTC).
   * 
   * @example
   * 2021-07-06T07:25:57Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The ID of the secondary zone. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query available zones.
   * 
   * > The value of this parameter cannot be the same as the value of the `ZoneId` parameter. You cannot specify a multi-zone ID.
   * 
   * @example
   * cn-hangzhou-g
   */
  secondaryZoneId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The number of shards in the instance. Valid values:
   * 
   * - **1** (default): Creates a standard architecture instance with a single shard.
   * 
   * - From **2** to **32**: Creates a cluster architecture instance with the specified number of shards.
   * 
   * > You can specify a value from **2** to **32** for this parameter only when you set the **InstanceType** parameter to `tair_rdb` or `tair_scm`. Only memory-enhanced and persistent memory-optimized instances support the cluster architecture.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  /**
   * @remarks
   * The architecture type of the instance. Valid values:
   * 
   * - **MASTER_SLAVE** (default): The primary/replica architecture, which provides high availability.
   * 
   * - **STAND_ALONE**: single-replica. This architecture uses a single node. If the node fails, data is lost, and the system automatically creates a new, empty instance. This architecture is supported only for **single-zone** deployments and does not support cluster or read/write splitting architectures.
   * 
   * @example
   * MASTER_SLAVE
   */
  shardType?: string;
  /**
   * @remarks
   * The number of read-only nodes in the secondary zone.
   * 
   * @example
   * 1
   */
  slaveReadOnlyCount?: number;
  /**
   * @remarks
   * The number of replica nodes in the secondary zone.
   * 
   * @example
   * 2
   */
  slaveReplicaCount?: number;
  /**
   * @remarks
   * To create an instance from a backup set of an existing instance, specify the ID of the source instance.
   * 
   * > You must also specify the backup data by using one of the following parameters: **BackupId**, **ClusterBackupId**, or **RestoreTime**. We recommend that you use `ClusterBackupId` for cloud-native instances that use a cluster architecture.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  srcDBInstanceId?: string;
  /**
   * @remarks
   * The storage space of the disk-based instance. The valid values of this parameter vary based on the instance type. For more information, see [Disk-based instance types](https://help.aliyun.com/document_detail/2527111.html).
   * 
   * > This parameter is required only when you set the **InstanceType** parameter to `tair_essd` to create a Tair instance that uses an ESSD. For Tair instances that use standard `SSD`s, the storage capacity is determined by the instance type and you do not need to specify this parameter.
   * 
   * @example
   * 60
   */
  storage?: number;
  /**
   * @remarks
   * The storage type. Valid values: **essd_pl1**, **essd_pl2**, and **essd_pl3**.
   * 
   * > This parameter is required only when you set the **InstanceType** parameter to `tair_essd` to create a Tair instance that uses an Enhanced SSD (ESSD).
   * 
   * @example
   * essd_pl1
   */
  storageType?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tag?: CreateTairInstanceRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch in the specified VPC. You can call the VPC API operation [DescribeVSwitches](https://help.aliyun.com/document_detail/35739.html) to obtain the vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the Virtual Private Cloud (VPC) where you want to create the instance. You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) operation to query available VPCs.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the primary zone where you want to create the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query available zones.
   * 
   * > You can also specify a secondary zone by using the `SecondaryZoneId` parameter. This deploys the primary and replica nodes in different zones within the same region for a high-availability primary/replica architecture. For example, you can set `ZoneId` to `cn-hangzhou-h` and `SecondaryZoneId` to `cn-hangzhou-g`.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      autoUseCoupon: 'AutoUseCoupon',
      backupId: 'BackupId',
      businessInfo: 'BusinessInfo',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      clusterBackupId: 'ClusterBackupId',
      connectionStringPrefix: 'ConnectionStringPrefix',
      couponNo: 'CouponNo',
      dryRun: 'DryRun',
      engineVersion: 'EngineVersion',
      globalInstanceId: 'GlobalInstanceId',
      globalSecurityGroupIds: 'GlobalSecurityGroupIds',
      instanceClass: 'InstanceClass',
      instanceEndpointType: 'InstanceEndpointType',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      paramGroupId: 'ParamGroupId',
      password: 'Password',
      period: 'Period',
      port: 'Port',
      privateIpAddress: 'PrivateIpAddress',
      readOnlyCount: 'ReadOnlyCount',
      recoverConfigMode: 'RecoverConfigMode',
      regionId: 'RegionId',
      replicaCount: 'ReplicaCount',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      secondaryZoneId: 'SecondaryZoneId',
      securityToken: 'SecurityToken',
      shardCount: 'ShardCount',
      shardType: 'ShardType',
      slaveReadOnlyCount: 'SlaveReadOnlyCount',
      slaveReplicaCount: 'SlaveReplicaCount',
      srcDBInstanceId: 'SrcDBInstanceId',
      storage: 'Storage',
      storageType: 'StorageType',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'string',
      autoRenewPeriod: 'string',
      autoUseCoupon: 'string',
      backupId: 'string',
      businessInfo: 'string',
      chargeType: 'string',
      clientToken: 'string',
      clusterBackupId: 'string',
      connectionStringPrefix: 'string',
      couponNo: 'string',
      dryRun: 'boolean',
      engineVersion: 'string',
      globalInstanceId: 'string',
      globalSecurityGroupIds: 'string',
      instanceClass: 'string',
      instanceEndpointType: 'string',
      instanceName: 'string',
      instanceType: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      paramGroupId: 'string',
      password: 'string',
      period: 'number',
      port: 'number',
      privateIpAddress: 'string',
      readOnlyCount: 'number',
      recoverConfigMode: 'string',
      regionId: 'string',
      replicaCount: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      secondaryZoneId: 'string',
      securityToken: 'string',
      shardCount: 'number',
      shardType: 'string',
      slaveReadOnlyCount: 'number',
      slaveReplicaCount: 'number',
      srcDBInstanceId: 'string',
      storage: 'number',
      storageType: 'string',
      tag: { 'type': 'array', 'itemType': CreateTairInstanceRequestTag },
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

