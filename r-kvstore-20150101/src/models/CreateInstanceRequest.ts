// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * > * **N** indicates the sequence number of the tag key. You can attach up to 20 tags to a single instance. For example, Tag.1.Key indicates the key of the first tag, and Tag.2.Key indicates the key of the second tag.
   * > * If the key of the tag does not exist, the system performs automatic creation.
   * 
   * @example
   * testkey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * > **N** indicates the sequence number of the tag value. For example, **Tag.1.Value** indicates the value of the first tag, and **Tag.2.Value** indicates the value of the second tag.
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
   * The AOF parameter settings of the new instance. Valid values:
   * - **yes** (default): enables AOF persistence.
   * - **no**: shutdown AOF persistence.
   * > This parameter applies to classic instances. Cloud-native instances do not support specifying the AOF parameter.
   * 
   * @example
   * yes
   */
  appendonly?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * * **true**: enables auto-renewal.
   * * **false** (default): disables auto-renewal.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal epoch. Unit: months. Valid values: **1**, **2**, **3**, **6**, and **12**.
   * 
   * > This parameter is required when the AutoRenew parameter is set to **true**.
   * 
   * @example
   * 3
   */
  autoRenewPeriod?: string;
  /**
   * @remarks
   * Specifies whether to use a voucher. Valid values:
   * * **true**: uses a voucher.
   * * **false** (default): does not use a voucher.
   * 
   * @example
   * false
   */
  autoUseCoupon?: string;
  /**
   * @remarks
   * You can specify the backup set ID of the source instance in this parameter. The system uses the data saved in the backup set to create the new instance. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/473823.html) operation to query the BackupId. If the source instance is a cluster instance, you must enter the backup set IDs of all shards in the source instance and separate them with commas, such as "10**,11**,15**".
   * > If your instance is a cloud-native architecture instance and a cluster instance, we recommend that you call the [DescribeClusterBackupList](https://help.aliyun.com/document_detail/2679168.html) operation to query the cluster backup set ID, such as "cb-xx", and then enter it in the ClusterBackupId request parameter to clone the cluster instance. This saves you the trouble of entering the backup set ID of each shard.
   * 
   * @example
   * 111111111
   */
  backupId?: string;
  /**
   * @remarks
   * The ID of the promotional event or business information.
   * 
   * @example
   * 000000000
   */
  businessInfo?: string;
  /**
   * @remarks
   * The storage capacity of the instance. Unit: MB.
   * 
   * > When you call this operation, you must specify at least one of the Capacity and InstanceClass parameters.
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
   * The ID of the cluster backup set. Some new cluster architectures support cluster backup set IDs. You can call the [DescribeClusterBackupList](https://help.aliyun.com/document_detail/2679168.html) operation to obtain the ID.
   * * If the architecture supports cluster backup sets, you can enter the specified cluster backup set ID without specifying the BackupId parameter.
   * * If the architecture does not support cluster backup sets, specify the backup set IDs of all shards in the source instance in the BackupId parameter and separate them with commas, such as "2158\\*\\*\\*\\*20,2158\\*\\*\\*\\*22".
   * 
   * @example
   * cb-hyxdof5x9kqb****
   */
  clusterBackupId?: string;
  /**
   * @remarks
   * The prefix of the endpoint. The prefix must be 8 to 40 characters in length and can contain lowercase letters and digits. It must start with a lowercase letter.
   * 
   * > 
   * > The endpoint format is: <Prefix>.redis.rds.aliyuncs.com.
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
   * The ID of the dedicated cluster. This parameter is required when you create an ApsaraDB for Redis instance in a dedicated cluster.
   * 
   * @example
   * dhg-uv4fnk6r7zff****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the instance creation request. Valid values:
   * * **true**: performs a dry run without creating the instance. The system checks the request parameters, request format, service limits, and available resources. If the request fails the dry run, the system returns an error. If the request passes the dry run, the system returns the DryRunOperation error code.
   * * **false** (default): sends the normal request and creates the instance after the request passes the check.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The engine version of the Redis **classic instance**. Valid values:
   * * **2.8** (Not recommended. [End-of-life is planned](https://help.aliyun.com/document_detail/2674657.html).)
   * * **4.0** (Not recommended)
   * * **5.0**
   * 
   * The engine version of the Redis **cloud-native instance**. Valid values:
   * * **5.0**
   * * **6.0** (Recommended)
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
   * Specifies whether to use the new instance as the first child instance of a distributed instance. You can create a distributed instance in this way. Valid values:
   * 
   * * **true**: uses the new instance as the first child instance.
   * * **false** (default): does not use the new instance as the first child instance.
   * 
   * > * If you set this parameter to **true**, the new instance must be a Tair memory-optimized instance and the DPI engine version must be 5.0.
   * > * This parameter applies only to the China site.
   * 
   * @example
   * false
   */
  globalInstance?: boolean;
  /**
   * @remarks
   * The distributed instance ID. This parameter applies only to the China site.
   * 
   * <props="china"> If you want to append the new ApsaraDB for Redis instance as a new child instance to a distributed instance, this parameter is active and required. For more information and console operations, see [Add a child instance to a distributed instance](https://help.aliyun.com/document_detail/106885.html).
   * 
   * @example
   * gr-bp14rkqrhac****
   */
  globalInstanceId?: string;
  /**
   * @remarks
   * The global IP address whitelist templates of the instance. Separate multiple templates with commas (,). Duplicate templates are not allowed.
   * >Notice: This parameter applies only to cloud-native instances. Classic instances do not support the whitelist template feature.</notice>
   * 
   * @example
   * g-zsldxfiwjmti0kcm****
   */
  globalSecurityGroupIds?: string;
  /**
   * @remarks
   * The instance type. For example, redis.master.small.default indicates a 1 GB Community Edition (classic architecture) instance with the standard architecture and two replicas. For more information, see [Overview of instance types](https://help.aliyun.com/document_detail/26350.html). 
   * 
   * > When you call this operation, you must specify at least one of the Capacity and InstanceClass parameters.
   * 
   * @example
   * redis.master.small.default
   */
  instanceClass?: string;
  /**
   * @remarks
   * The type of the endpoint used when you create a cloud-native dual-zone deployment read/write splitting instance. If you do not explicitly specify this parameter, the default value is AzIndependentEndpoint.
   * 
   * - **AzIndependentEndpoint**: **Default value**. Active zone-independent endpoints. The primary and secondary active zones provide independent endpoints. You can use different endpoints to implement nearest access for active zones.
   * - **UnifiedEndpoint**: Unified endpoint. A unified endpoint is provided to access nodes in both the primary and secondary active zones, but cross-zone access may occur.
   * 
   * >Notice: This parameter applies only to cloud-native dual-zone deployment read/write splitting instances. For other types of instances, only active zone-independent endpoints are supported. Even if you specify UnifiedEndpoint, it does not take effect.</notice>
   * 
   * >Notice: The UnifiedEndpoint parameter is currently available only to whitelisted users. If a non-whitelisted user specifies this parameter, an invocation error is returned. To apply for the permissions, submit a ticket.</notice>
   * 
   * @example
   * AzIndependentEndpoint
   */
  instanceEndpointType?: string;
  /**
   * @remarks
   * The name of the instance. The name must be 2 to 80 characters in length, and must start with a letter or a Chinese character. It cannot contain the following special characters: `@/:=”<>{[]}` and spaces.
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
   * The end time of the maintenance window for the instance. Specify the time in the <i>HH:mm</i>Z format. The time must be in UTC. For example, if you want the maintenance window to end at 02:00 (UTC+8), set the value to `18:00Z`.
   * 
   * > The interval between the start time and the end time must be at least 1 hour.
   * 
   * > If you do not specify this parameter, the default value is 22:00 (UTC), which is 06:00 (UTC+8).
   * 
   * @example
   * 07:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window for the instance. Specify the time in the <i>HH:mm</i>Z format. The time must be in UTC. For example, if you want the maintenance window to start at 01:00 (UTC+8), set the value to `17:00Z`.
   * 
   * > If you do not specify this parameter, the default value is 18:00 (UTC), which is 02:00 (UTC+8).
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
   * * **MASTER_SLAVE**: high-availability (two replicas)
   * * **STAND_ALONE**: single replica
   * * **double**: two replicas
   * * **single**: single replica
   * > For cloud-native instances, select **MASTER_SLAVE** or **STAND_ALONE**. For classic instances, select **double** or **single**.
   * 
   * @example
   * STAND_ALONE
   */
  nodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The globally unique ID of the parameter template.>Notice: This parameter applies only to cloud-native instances.</notice>
   * 
   * @example
   * rpg-test**
   */
  paramGroupId?: string;
  /**
   * @remarks
   * The password of the instance. The password must be 8 to 32 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, special characters, and digits. The allowed special characters include `!@#$%^&*()_+-=`.
   * 
   * @example
   * Pass!123456
   */
  password?: string;
  /**
   * @remarks
   * The subscription duration. Unit: months. Valid values: **1** to **9**, **12**, **24**, **36**, and **60**.
   * 
   * > This parameter is required and takes effect only when the ChargeType parameter is set to **PrePaid**.
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
   * The number of read-only nodes in the primary zone. This parameter applies only to cloud-native read/write splitting instances.
   * * If the instance uses the standard architecture, valid values are 1 to 9.
   * * If the instance uses the cluster architecture, valid values are 1 to 4, which indicates the number of read-only nodes per shard.
   * > If you create a multi-zone instance, you can use this parameter and the SlaveReadOnlyCount parameter to specify the number of read-only nodes in the primary and secondary zones.
   * > - If the instance uses the standard architecture, the sum of this parameter and the SlaveReadOnlyCount parameter cannot exceed 9.
   * > - If the instance uses the cluster architecture, the sum of this parameter and the SlaveReadOnlyCount parameter cannot exceed 4.
   * 
   * @example
   * 2
   */
  readOnlyCount?: number;
  /**
   * @remarks
   * Specifies whether to restore the account, kernel parameters, and whitelist information from the original backup set when you create an instance by using a specified backup set. For example, to restore the account information, set the value to `account`.
   * 
   * Default value: empty, which indicates that the account, kernel parameters, and whitelist information are not restored from the original backup set.
   * > This parameter applies only to cloud-native instances, and the original backup set must contain the account, kernel parameters, and whitelist information. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/473823.html) operation to query whether the RecoverConfigMode parameter of the specified backup set contains the preceding information.
   * 
   * @example
   * whitelist,config,account
   */
  recoverConfigMode?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of secondary nodes in the primary zone. This parameter applies only to cloud-native cluster instances with multiple replicas. You can use this parameter to specify a custom number of secondary nodes. Valid values: 1 to 4.
   * 
   * > If you create a multi-zone instance, you can use this parameter and the SlaveReplicaCount parameter to specify the number of secondary nodes in the primary and secondary zones. The sum of this parameter and the SlaveReplicaCount parameter cannot exceed 4.
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
   * The point in time to which you want to restore the source instance. If the data flashback feature is enabled for the source instance, you can specify any point in time within the backup retention period of the source instance. The system uses the backup data of the source instance at the specified point in time to create the new instance. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * 
   * @example
   * 2019-06-19T16:00:00Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The secondary zone ID. You can call the [DescribeZones](https://help.aliyun.com/document_detail/473764.html) operation to query the most recent zone list.
   * > The value of this parameter cannot be the same as the value of the ZoneId parameter, and cannot be the ID of a multi-zone deployment.
   * 
   * @example
   * cn-hangzhou-g
   */
  secondaryZoneId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The number of shards. This parameter applies only to cloud-native instances. You can use this parameter to specify a custom number of shards.
   * 
   * - 1: creates a non-cluster architecture.
   * - A value greater than 1: creates a cluster architecture.
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
   * The number of secondary nodes in the secondary zone.
   * 
   * @example
   * 2
   */
  slaveReplicaCount?: number;
  /**
   * @remarks
   * If you want to create a new instance based on the backup set of an instance, specify the source instance ID in this parameter first.
   * > Then, specify the backup set or point in time by using the BackupId, ClusterBackupId (recommended for cloud-native cluster architecture), or RestoreTime parameter. This parameter must be used in combination with one of the preceding three parameters.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  srcDBInstanceId?: string;
  /**
   * @remarks
   * The tag information of the instance.
   */
  tag?: CreateInstanceRequestTag[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token is case-sensitive and can be up to 64 ASCII characters in length.
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
   * The primary active zone ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the most recent active zone list, and use this parameter to specify the active zone where you want to create the instance.
   * > You can also specify the SecondaryZoneId parameter to set the secondary active zone. The deployment of the primary and secondary nodes is in the specified primary and secondary active zones to implement a primary/secondary architecture. For example, you can set the ZoneId parameter to "cn-hangzhou-h" and the SecondaryZoneId parameter to "cn-hangzhou-g".
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

