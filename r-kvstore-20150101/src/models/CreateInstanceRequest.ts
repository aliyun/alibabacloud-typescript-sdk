// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * > * **N** specifies the sequence number of the tag. A maximum of 20 tags can be attached to a single instance. For example, Tag.1.Key specifies the key of the first tag, and Tag.2.Key specifies the key of the second tag.
   * > * If the tag key does not exist, the tag is automatically created.
   * 
   * @example
   * testkey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * > **N** specifies the sequence number of the tag. For example, **Tag.1.Value** specifies the value of the first tag, and **Tag.2.Value** specifies the value of the second tag.
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
   * The Append Only File (AOF) persistence parameter settings for the new instance. Valid values:
   * - **yes** (default): enables AOF persistence.
   * - **no**: disables AOF persistence.
   * > This parameter is applicable to classic instances. Cloud-native instances do not support specifying the AOF parameter.
   * 
   * @example
   * yes
   */
  appendonly?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * * **true**: enables auto-renewal.
   * * **false** (default): does not enable auto-renewal.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal epoch. Unit: months. Valid values: **1**, **2**, **3**, **6**, and **12**.
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
   * * **true**: uses a coupon.
   * * **false** (default): does not use a coupon.
   * 
   * @example
   * false
   */
  autoUseCoupon?: string;
  /**
   * @remarks
   * The ID of the backup set of the source instance. The system uses the data stored in the backup set to create the instance. You can invoke [DescribeBackups](https://help.aliyun.com/document_detail/473823.html) to query the BackupId. If the source instance is a cluster instance, specify the backup set IDs of all shards of the source instance, separated by commas (,). Example: "10\\*\\*,11\\*\\*,15\\*\\*".
   * > If your instance is a cloud-native architecture cluster instance, use [DescribeClusterBackupList](https://help.aliyun.com/document_detail/2679168.html) to query the cluster backup set ID, such as "cb-xx", and specify it in the ClusterBackupId request parameter to clone the cluster instance. This eliminates the need to specify individual shard backup set IDs.
   * 
   * @example
   * 111111111
   */
  backupId?: string;
  /**
   * @remarks
   * The activity ID and business information.
   * 
   * @example
   * 000000000
   */
  businessInfo?: string;
  /**
   * @remarks
   * The storage capacity of the instance. Unit: MB.
   * 
   * > You must specify at least one of the **Capacity** and **InstanceClass** parameters when you call this operation.
   * 
   * @example
   * 16384
   */
  capacity?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * * **PrePaid**: subscription.
   * * **PostPaid** (default): pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The cluster backup set ID, which is supported by some new cluster architecture instances. You can call [DescribeClusterBackupList](https://help.aliyun.com/document_detail/2679168.html) to obtain the ID.
   * * If supported, specify the cluster backup set ID. You do not need to specify the **BackupId** parameter.
   * * If not supported, specify the backup set IDs of all shards of the source instance in the BackupId parameter, separated by commas (,). Example: "2158\\*\\*\\*\\*20,2158\\*\\*\\*\\*22".
   * 
   * @example
   * cb-hyxdof5x9kqb****
   */
  clusterBackupId?: string;
  /**
   * @remarks
   * The prefix of the endpoint. The prefix must consist of lowercase letters and digits, start with a lowercase letter, and be 8 to 40 characters in length.
   * 
   * > 
   * > The endpoint is in the format of: <prefix>.redis.rds.aliyuncs.com.
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
   * The ID of the dedicated cluster. This parameter is required when you create an instance in a dedicated cluster.
   * 
   * @example
   * dhg-uv4fnk6r7zff****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this instance creation request. Valid values:
   * * **true**: performs a dry run without creating the instance. The system checks items such as the request parameters, request format, service limits, and available resources. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * * **false** (default): sends the request. After the request passes the check, the instance is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Redis **classic** engine version. Valid values:
   * * **2.8** (not recommended, [planned for end of support](https://help.aliyun.com/document_detail/2674657.html))
   * * **4.0** (not recommended)
   * * **5.0**
   * 
   * Redis **cloud-native** engine version. Valid values:
   * * **5.0**
   * * **6.0** (recommended)
   * * **7.0**
   * 
   * > Default value: **5.0**.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * Specifies whether to use the new instance as the first child instance of a distributed instance. This allows you to create a distributed instance. Valid values:
   * 
   * * **true**: uses the instance as the first child instance.
   * * **false** (default): does not use the instance as the first child instance.
   * 
   * > * To set this parameter to **true**, the new instance must be a Tair memory-optimized instance with a database DPI engine version of 5.0.
   * > * This parameter is applicable only to Chinese site (aliyun.com).
   * 
   * @example
   * false
   */
  globalInstance?: boolean;
  /**
   * @remarks
   * The instance ID of the distributed instance. This parameter is applicable only to Chinese site (aliyun.com).
   * 
   * <props="china"> To append the new Redis instance as a child instance of a distributed instance, this parameter is active and required. For more information and console operations, see [Add a child instance to a distributed instance](https://help.aliyun.com/document_detail/106885.html).
   * 
   * @example
   * gr-bp14rkqrhac****
   */
  globalInstanceId?: string;
  /**
   * @remarks
   * The global IP whitelist templates for the instance. Separate multiple templates with commas (,). Duplicates are not allowed.
   * >Notice: This parameter is applicable only to cloud-native instances. Classic instances do not support the whitelist template feature.</notice>
   * 
   * @example
   * g-zsldxfiwjmti0kcm****
   */
  globalSecurityGroupIds?: string;
  /**
   * @remarks
   * The instance type. For example, redis.master.small.default specifies a Community Edition (classic) standard architecture dual-replica 1 GB instance. For more information, see [Instance type overview](https://help.aliyun.com/document_detail/26350.html). 
   * 
   * > You must specify at least one of the **Capacity** and **InstanceClass** parameters when you call this operation.
   * 
   * @example
   * redis.master.small.default
   */
  instanceClass?: string;
  /**
   * @remarks
   * The endpoint type used when you create a cloud-native dual-zone deployment read/write splitting instance. If this parameter is not explicitly committed, the default value is AzIndependentEndpoint.
   * 
   * - **AzIndependentEndpoint**: **default value**. Zone-independent endpoints. The primary and secondary zones provide independent endpoints, which allow nearest access through different endpoints.
   * - **UnifiedEndpoint**: unified endpoint. A unified endpoint is provided to access nodes in both the primary and secondary zones, but cross-zone access may occur.
   * 
   * >Notice: This parameter is applicable only to cloud-native dual-zone deployment read/write splitting instances. For other instance types, only zone-independent endpoints are supported. Even if UnifiedEndpoint is specified, it does not take effect.</notice>
   * 
   * >Notice: The UnifiedEndpoint option is available only to users on the whitelist. If you are not on the whitelist and specify this parameter, the invocation returns an error. To request access, submit a ticket.</notice>
   * 
   * @example
   * AzIndependentEndpoint
   */
  instanceEndpointType?: string;
  /**
   * @remarks
   * The name of the instance. The name must be 2 to 80 characters in length and must start with a letter or a Chinese character. The name cannot contain `@/:="<>{[]}` or spaces.
   * 
   * @example
   * apitest
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * * **Redis** (default)
   * * **Memcache**
   * 
   * @example
   * Redis
   */
  instanceType?: string;
  /**
   * @remarks
   * The end time of the maintenance window. Specify the time in the <i>HH:mm</i>Z format in UTC. For example, to set the end time to 02:00 (UTC+8), specify `18:00Z`.
   * 
   * > The interval between the start time and end time must be at least 1 hour.
   * 
   * > If this parameter is not specified, the default value is 06:00 (UTC+8), which is 22:00Z in UTC.
   * 
   * @example
   * 07:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window. Specify the time in the <i>HH:mm</i>Z format in UTC. For example, to set the start time to 01:00 (UTC+8), specify `17:00Z`.
   * 
   * > If this parameter is not specified, the default value is 02:00 (UTC+8), which is 18:00Z in UTC.
   * 
   * @example
   * 03:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * * **VPC**: Virtual Private Cloud (VPC). This is the default value.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * * **MASTER_SLAVE**: high availability (dual-replica)
   * * **STAND_ALONE**: single replica
   * * **double**: dual-replica
   * * **single**: single replica
   * > For cloud-native instances, set this parameter to **MASTER_SLAVE** or **STAND_ALONE**. For classic instances, set this parameter to **double** or **single**.
   * 
   * @example
   * STAND_ALONE
   */
  nodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the parameter template. The ID is globally unique.>Notice: This parameter is applicable only to cloud-native instances.</notice>
   * 
   * @example
   * rpg-test**
   */
  paramGroupId?: string;
  /**
   * @remarks
   * The password of the instance. The password must be 8 to 32 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, special characters, and digits. The following special characters are supported: `!@#$%^&*()_+-=`.
   * 
   * @example
   * Pass!123456
   */
  password?: string;
  /**
   * @remarks
   * The subscription period. Unit: months. Valid values: **1** to **9**, **12**, **24**, **36**, and **60**.
   * 
   * > This parameter is available and required only when **ChargeType** is set to **PrePaid**.
   * 
   * @example
   * 12
   */
  period?: string;
  /**
   * @remarks
   * The service port of the instance. Valid values: **1** to **65535**. Default value: **6379**.
   * 
   * @example
   * 6379
   */
  port?: string;
  /**
   * @remarks
   * The internal network IP address of the new instance.
   * 
   * > The internal network IP address must be within the vSwitch CIDR block to which the instance belongs.
   * 
   * @example
   * 172.16.0.***
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The number of read-only nodes in the primary zone. This parameter is applicable only to cloud-native read/write splitting instances.
   * * For standard architecture instances, valid values are 1 to 9.
   * * For cluster architecture instances, valid values are 1 to 4, which specifies the number of read-only nodes per data shard.
   * > If you create a multi-zone instance, you can use this parameter together with the SlaveReadOnlyCount parameter to customize the number of read-only nodes in the primary and secondary zones.
   * > - For standard architecture instances, the sum of this parameter and SlaveReadOnlyCount cannot exceed 9.
   * > - For cluster architecture instances, the sum of this parameter and SlaveReadOnlyCount cannot exceed 4.
   * 
   * @example
   * 2
   */
  readOnlyCount?: number;
  /**
   * @remarks
   * Specifies whether to restore the account, kernel parameter (config), or whitelist information from the original backup set when you create an instance from a specified backup set. For example, to restore account information, set this parameter to `account`.
   * 
   * The default value is empty, which indicates that the account, kernel parameter, and whitelist information is not restored from the original backup set.
   * > This parameter is applicable only to cloud-native instances, and the original backup set must contain the account, kernel parameter, or whitelist information. You can call [DescribeBackups](https://help.aliyun.com/document_detail/473823.html) to check whether the RecoverConfigMode parameter of the specified backup set contains the preceding information.
   * 
   * @example
   * whitelist,config,account
   */
  recoverConfigMode?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) to query available regions. Use this parameter to specify the region in which to create the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of replica nodes in the primary zone. This parameter is applicable only to cloud-native cluster multi-replica instances. You can use this parameter to customize the number of replica nodes. Valid values: 1 to 4.
   * 
   * > If you create a multi-zone instance, you can use this parameter together with the SlaveReplicaCount parameter to customize the number of replica nodes in the primary and secondary zones. The sum of this parameter and the SlaveReplicaCount parameter cannot exceed 4.
   * 
   * @example
   * 2
   */
  replicaCount?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-resourcegroupid1
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * If flashback is enabled for the source instance, you can specify a point in time within the backup retention period. The system uses the backup data of the source instance at the specified point in time to create the instance. Specify the time in the ISO 8601 standard in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * 
   * @example
   * 2019-06-19T16:00:00Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The secondary zone ID. You can call [DescribeZones](https://help.aliyun.com/document_detail/473764.html) to query available zones.
   * > The value of this parameter must be different from the value of ZoneId. You cannot set this parameter to the ID of a multi-zone.
   * 
   * @example
   * cn-hangzhou-g
   */
  secondaryZoneId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The number of shards. This parameter is applicable only to cloud-native instances. You can use this parameter to customize the number of shards.
   * 
   * - 1: creates a non-cluster instance.
   * - A value greater than 1: creates a cluster instance.
   * 
   * @example
   * 4
   */
  shardCount?: number;
  /**
   * @remarks
   * The number of read-only nodes in the secondary zone.
   * 
   * @example
   * 2
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
   * To create an instance from a backup set of an existing instance, specify the instance ID of the source instance in this parameter.
   * > Then use the **BackupId**, **ClusterBackupId** (recommended for cloud-native cluster instances), or **RestoreTime** parameter to specify the backup set or point in time. This parameter must be used together with one of the preceding three parameters. The value is a string, not an array.
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
   * The client token that is used to ensure the idempotence of the request. The token value is generated by the client and must be unique among different requests. The token is case-sensitive and cannot exceed 64 ASCII characters in length.
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
   * The primary zone ID. You can invoke [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) to query active zones. Use this parameter to specify the zone in which to create the instance.
   * > You can also specify the SecondaryZoneId parameter to set the secondary zone. The primary and secondary nodes are deployed in the specified primary and secondary zones respectively, which implements a dual-center primary/secondary architecture in the same city. For example, set ZoneId to "cn-hangzhou-h" and SecondaryZoneId to "cn-hangzhou-g".
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

