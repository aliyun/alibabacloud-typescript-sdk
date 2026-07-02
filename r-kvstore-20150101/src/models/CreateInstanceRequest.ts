// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * > - `N` represents the sequence number of the tag, from 1 to 20. You can add a maximum of 20 tags to an instance.
   * >
   * > - If the tag key does not exist, it is automatically created.
   * 
   * @example
   * testkey
   */
  key?: string;
  /**
   * @remarks
   * The value for tag `N`.
   * 
   * > The N in **Tag.N.Value** specifies the sequence number of the tag. For example, **Tag.1.Value** specifies the value of the first tag, and **Tag.2.Value** specifies the value of the second tag.
   * 
   * @example
   * testvalue
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
  /**
   * @remarks
   * Specifies whether to enable AOF persistence for the new instance. Valid values:
   * 
   * - **yes** (default): Enables AOF persistence.
   * 
   * - **no**: Disables AOF persistence.
   * 
   * > This parameter is available only for classic edition instances. AOF persistence cannot be configured for cloud native edition instances at creation.
   * 
   * @example
   * yes
   */
  appendonly?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * 
   * - **true**: Enables auto-renewal.
   * 
   * - **false** (default): Disables auto-renewal.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal duration, in months. Valid values: **1**, **2**, **3**, **6**, and **12**.
   * 
   * > This parameter is required when **AutoRenew** is set to **true**.
   * 
   * @example
   * 3
   */
  autoRenewPeriod?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * 
   * - **true**: Uses a coupon.
   * 
   * - **false** (default): Does not use a coupon.
   * 
   * @example
   * false
   */
  autoUseCoupon?: string;
  /**
   * @remarks
   * The ID of the backup that you want to use to create the new instance. You can obtain backup IDs by calling the [DescribeBackups](https://help.aliyun.com/document_detail/473823.html) operation. If the source instance has a cluster architecture, you must specify the backup IDs of all its shards, separated by commas (for example, "10\\*\\*,11\\*\\*,15\\*\\*").
   * 
   * > If your source instance is a cloud native cluster instance, it is recommended to call [DescribeClusterBackupList](https://help.aliyun.com/document_detail/2679168.html) to get a cluster backup ID (for example, "cb-xx") and use the `ClusterBackupId` parameter instead. This avoids the need to specify the backup ID for each shard.
   * 
   * @example
   * 111111111
   */
  backupId?: string;
  /**
   * @remarks
   * The campaign ID or business information.
   * 
   * @example
   * 000000000
   */
  businessInfo?: string;
  /**
   * @remarks
   * The storage capacity of the instance, in MB.
   * 
   * > You must specify either the **Capacity** or the **InstanceClass** parameter.
   * 
   * @example
   * 16384
   */
  capacity?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **PrePaid**: subscription.
   * 
   * - **PostPaid** (default): pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The ID of the cluster backup. You can get this ID by calling the [DescribeClusterBackupList](https://help.aliyun.com/document_detail/2679168.html) operation. This parameter is available for some cloud native cluster instances.
   * 
   * - This parameter is mutually exclusive with `BackupId`.
   * 
   * - If this parameter is not available for your instance, you must specify the backup ID of each shard in the `BackupId` parameter (for example, "2158\\*\\*\\*\\*20,2158\\*\\*\\*\\*22").
   * 
   * @example
   * cb-hyxdof5x9kqb****
   */
  clusterBackupId?: string;
  /**
   * @remarks
   * The prefix of the connection string. The prefix must be 8 to 40 characters long, start with a lowercase letter, and contain only lowercase letters and digits.
   * 
   * > The full connection string is in the format: \\<prefix>.redis.rds.aliyuncs.com.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The coupon code. Default value: `default`.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The ID of the dedicated host group. This parameter is required when you create a Redis instance in a dedicated host group.
   * 
   * @example
   * dhg-uv4fnk6r7zff****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Checks the request for validity without creating the instance. The system verifies required parameters, request format, and service limits. If the request is valid, the `DryRunOperation` error code is returned. If the request is invalid, an error message is returned.
   * 
   * - **false** (default): Sends the request. If the request is valid, the instance is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The Redis engine version. Valid values for **classic edition** instances:
   * 
   * - **2.8** (Not recommended. [Support for this version is scheduled to be discontinued](https://help.aliyun.com/document_detail/2674657.html).)
   * 
   * - **4.0** (Not recommended.)
   * 
   * - **5.0**
   * 
   * Valid values for **cloud native edition** instances:
   * 
   * - **5.0**
   * 
   * - **6.0** (Recommended)
   * 
   * - **7.0**
   * 
   * > The default value is **5.0**.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * Specifies whether to create the new instance as the first child instance of a distributed instance. Valid values:
   * 
   * - **true**: Creates the instance as the first child instance.
   * 
   * - **false** (default): Does not create the instance as the first child instance.
   * 
   * > * If you set this parameter to **true**, the new instance must be a Tair memory-enhanced instance that runs Redis 5.0.
   * >
   * > * This parameter is available only in Chinese mainland.
   * 
   * @example
   * false
   */
  globalInstance?: boolean;
  /**
   * @remarks
   * The ID of the distributed instance. This parameter is available only in Chinese mainland.
   * 
   * <props="china">
   * 
   * This parameter is required to add the new instance as a child of a distributed instance. For more information and the console procedure, see [Add a child instance to a distributed instance](https://help.aliyun.com/document_detail/106885.html).
   * 
   * @example
   * gr-bp14rkqrhac****
   */
  globalInstanceId?: string;
  /**
   * @remarks
   * The IDs of the security groups to associate with the instance. You can specify multiple security group IDs, separated by commas (,). IDs cannot be repeated.
   * >Notice: This parameter is available only for cloud native edition instances. Security groups are not supported for classic edition instances.
   * 
   * @example
   * g-zsldxfiwjmti0kcm****
   */
  globalSecurityGroupIds?: string;
  /**
   * @remarks
   * The instance type. For example, `redis.master.small.default` specifies a 1 GB Community Edition (classic edition) instance with a standard, dual-replica architecture. For more information, see [Instance specifications](https://help.aliyun.com/document_detail/26350.html).
   * 
   * > You must specify either the **Capacity** or the **InstanceClass** parameter.
   * 
   * @example
   * redis.master.small.default
   */
  instanceClass?: string;
  /**
   * @remarks
   * The connection endpoint type. This parameter is applicable only when you create a dual-zone, read/write splitting instance of the cloud native edition. If this parameter is not specified, `AzIndependentEndpoint` is used. Valid values:
   * 
   * - **AzIndependentEndpoint**: (**Default**) Zone-Independent Endpoint. The primary and secondary zones each provide an independent connection string for zone-local access.
   * 
   * - **UnifiedEndpoint**: Unified Endpoint. Provides a single connection string to access nodes in both zones, which may result in cross-zone access.
   * 
   * >Notice: 
   * 
   * This parameter is applicable only to dual-zone, read/write splitting instances of the cloud native edition. For other instance types, only zone-independent endpoints are supported, and specifying `UnifiedEndpoint` has no effect.
   * 
   * 
   * 
   * >Notice: 
   * 
   * The `UnifiedEndpoint` parameter is currently available only to allowlisted users. API calls will fail if you are not on the allowlist. To be added to the allowlist, submit a ticket.
   * 
   * @example
   * AzIndependentEndpoint
   */
  instanceEndpointType?: string;
  /**
   * @remarks
   * The name of the instance. The name must be 2 to 80 characters long, start with a letter (uppercase or lowercase) or a Chinese character, and not contain spaces or the characters `@/:=”<>{[]}`.
   * 
   * @example
   * apitest
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - **Redis** (default)
   * 
   * - **Memcache**
   * 
   * @example
   * Redis
   */
  instanceType?: string;
  /**
   * @remarks
   * The end time of the maintenance window. Specify the time in the *HH:mm*Z format (UTC). For example, to set the end time to 02:00 (UTC+8), specify `18:00Z`.
   * 
   * > The duration of the maintenance window must be at least one hour.
   * 
   * > If this parameter is not specified, the maintenance window ends at 06:00 (UTC+8), which is 22:00 (UTC).
   * 
   * @example
   * 07:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start of the maintenance window. Specify the time in the *HH:mm*Z format (UTC). For example, to set the start time to 01:00 (UTC+8), specify `17:00Z`.
   * 
   * > If this parameter is not specified, the maintenance window starts at 02:00 (UTC+8), which is 18:00 (UTC).
   * 
   * @example
   * 03:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The network type. Valid value:
   * 
   * - **VPC**: Deploys the instance in a Virtual Private Cloud. This is the default value.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * - **MASTER_SLAVE**: high-availability (primary-replica)
   * 
   * - **STAND_ALONE**: standalone (single-node)
   * 
   * - **double**: primary-replica
   * 
   * - **single**: standalone (single-node)
   * 
   * > Set this parameter to **MASTER_SLAVE** or **STAND_ALONE** for cloud native edition instances. Set this parameter to **double** or **single** for classic edition instances.
   * 
   * @example
   * STAND_ALONE
   */
  nodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the parameter group. This ID must be globally unique.>Notice:  This parameter is available only for cloud native edition instances.
   * 
   * @example
   * rpg-test**
   */
  paramGroupId?: string;
  /**
   * @remarks
   * The password for the instance. The password must be 8 to 32 characters long and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The allowed special characters are `!@#$%^&*()_+-=`.
   * 
   * @example
   * Pass!123456
   */
  password?: string;
  /**
   * @remarks
   * The subscription duration, in months. Valid values: **1** to **9**, **12**, **24**, **36**, and **60**.
   * 
   * > This parameter is available and required only when **ChargeType** is set to **PrePaid**.
   * 
   * @example
   * 12
   */
  period?: string;
  /**
   * @remarks
   * The service port of the instance. The port number must be between **1** and **65535**. The default value is **6379**.
   * 
   * @example
   * 6379
   */
  port?: string;
  /**
   * @remarks
   * The private IP address of the new instance.
   * 
   * > The IP address must be within the CIDR block of the specified vSwitch.
   * 
   * @example
   * 172.16.0.***
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The number of read-only replicas in the primary zone. This parameter is available only when creating a read/write splitting instance of the cloud native edition.
   * 
   * - For a standard-architecture instance, the value must be an integer from 1 to 9.
   * 
   * - For a cluster-architecture instance, the value must be an integer from 1 to 4. This specifies the number of read-only replicas for each data shard.
   * 
   * > If you create a multi-zone instance, you can use this parameter and `SlaveReadOnlyCount` to customize the number of read-only replicas in the primary and secondary zones.
   * >
   * > - The sum of this parameter and `SlaveReadOnlyCount` cannot exceed 9 for a standard-architecture instance.
   * >
   * > - The sum of this parameter and `SlaveReadOnlyCount` cannot exceed 4 for a cluster-architecture instance.
   * 
   * @example
   * 2
   */
  readOnlyCount?: number;
  /**
   * @remarks
   * Specifies which configurations to restore from the backup when creating an instance. Valid values include `account`, `config`, and `whitelist`. For example, to restore account settings, specify `account`. To restore multiple configurations, separate them with commas.
   * 
   * By default, this parameter is empty, which means no configurations are restored.
   * 
   * > This parameter is applicable only to cloud native edition instances. The source backup must contain the specified configurations. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/473823.html) operation and check the `RecoverConfigMode` field in the response to determine which configurations a backup contains.
   * 
   * @example
   * whitelist,config,account
   */
  recoverConfigMode?: string;
  /**
   * @remarks
   * The ID of the region in which to create the instance. Call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to get a list of region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of replicas in the primary zone. This parameter is available only for multi-replica cluster instances of the cloud native edition. You can specify a value from 1 to 4.
   * 
   * > When creating a multi-zone instance, you can use this parameter and `SlaveReplicaCount` to customize the number of replicas in the primary and secondary zones. The sum of `ReplicaCount` and `SlaveReplicaCount` cannot exceed 4.
   * 
   * @example
   * 2
   */
  replicaCount?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-resourcegroupid1
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which you want to restore data, specified in the *yyyy-MM-dd*T*HH:mm:ss*Z (UTC) format.
   * 
   * @example
   * 2019-06-19T16:00:00Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The ID of the secondary zone. You can call the [DescribeZones](https://help.aliyun.com/document_detail/473764.html) operation to query the latest list of zones.
   * 
   * > The value of this parameter cannot be the same as the value of the `ZoneId` parameter, and you cannot specify a multi-zone ID.
   * 
   * @example
   * cn-hangzhou-g
   */
  secondaryZoneId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The number of shards. This parameter is available only for cloud native edition instances.
   * 
   * - A value of **1** creates an instance with a standard architecture.
   * 
   * - A value greater than **1** creates an instance with a cluster architecture.
   * 
   * @example
   * 4
   */
  shardCount?: number;
  /**
   * @remarks
   * The number of read-only replicas in the secondary zone.
   * 
   * @example
   * 2
   */
  slaveReadOnlyCount?: number;
  /**
   * @remarks
   * The number of replicas in the secondary zone.
   * 
   * @example
   * 2
   */
  slaveReplicaCount?: number;
  /**
   * @remarks
   * To create an instance from a backup, specify the ID of the source instance.
   * 
   * > This parameter must be used in conjunction with one of the following parameters: **BackupId**, **ClusterBackupId** (recommended for cloud native, cluster-architecture instances), or **RestoreTime**.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  srcDBInstanceId?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tag?: CreateInstanceRequestTag[];
  /**
   * @remarks
   * A client-generated token to ensure the idempotence of the request. The token must be unique across requests, case-sensitive, and cannot exceed 64 ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  token?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the primary zone for the instance. You can call the [DescribeZones](https://help.aliyun.com/document_detail/473763.html) operation to query available zones.
   * 
   * > You can also specify a secondary zone by using the `SecondaryZoneId` parameter. The primary and replica nodes are then deployed in the specified primary and secondary zones to create a dual-zone architecture for in-city disaster recovery. For example, you can set the `ZoneId` parameter to "cn-hangzhou-h" and the `SecondaryZoneId` parameter to "cn-hangzhou-g".
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      appendonly: 'Appendonly',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      autoUseCoupon: 'AutoUseCoupon',
      backupId: 'BackupId',
      businessInfo: 'BusinessInfo',
      capacity: 'Capacity',
      chargeType: 'ChargeType',
      clusterBackupId: 'ClusterBackupId',
      connectionStringPrefix: 'ConnectionStringPrefix',
      couponNo: 'CouponNo',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dryRun: 'DryRun',
      engineVersion: 'EngineVersion',
      globalInstance: 'GlobalInstance',
      globalInstanceId: 'GlobalInstanceId',
      globalSecurityGroupIds: 'GlobalSecurityGroupIds',
      instanceClass: 'InstanceClass',
      instanceEndpointType: 'InstanceEndpointType',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      networkType: 'NetworkType',
      nodeType: 'NodeType',
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
      slaveReadOnlyCount: 'SlaveReadOnlyCount',
      slaveReplicaCount: 'SlaveReplicaCount',
      srcDBInstanceId: 'SrcDBInstanceId',
      tag: 'Tag',
      token: 'Token',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appendonly: 'string',
      autoRenew: 'string',
      autoRenewPeriod: 'string',
      autoUseCoupon: 'string',
      backupId: 'string',
      businessInfo: 'string',
      capacity: 'number',
      chargeType: 'string',
      clusterBackupId: 'string',
      connectionStringPrefix: 'string',
      couponNo: 'string',
      dedicatedHostGroupId: 'string',
      dryRun: 'boolean',
      engineVersion: 'string',
      globalInstance: 'boolean',
      globalInstanceId: 'string',
      globalSecurityGroupIds: 'string',
      instanceClass: 'string',
      instanceEndpointType: 'string',
      instanceName: 'string',
      instanceType: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      networkType: 'string',
      nodeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      paramGroupId: 'string',
      password: 'string',
      period: 'string',
      port: 'string',
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
      slaveReadOnlyCount: 'number',
      slaveReplicaCount: 'number',
      srcDBInstanceId: 'string',
      tag: { 'type': 'array', 'itemType': CreateInstanceRequestTag },
      token: 'string',
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

