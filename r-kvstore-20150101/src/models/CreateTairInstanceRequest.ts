// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTairInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. A tag key and a tag value form a key-value pair.
   * > You can specify up to 5 tag key-value pairs at a time.
   * 
   * @example
   * key1_test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * > **N** indicates the sequence number of the tag. For example, **Tag.1.Value** indicates the value of the first tag, and **Tag.2.Value** indicates the value of the second tag.
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
   * Specifies whether to enable auto-renewal. Valid values:
   * * **true**: enables auto-renewal.
   * * **false**: disables auto-renewal. This is the default value.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal epoch. Unit: months. Valid values: **1**, **2**, **3**, **6**, and **12**.
   * > This parameter is required when the **AutoRenew** parameter is set to **true**.
   * 
   * @example
   * 3
   */
  autoRenewPeriod?: string;
  /**
   * @remarks
   * Specifies whether to use a voucher. Valid values:
   * * **true**: uses a voucher.
   * * **false**: does not use a voucher. This is the default value.
   * 
   * @example
   * true
   */
  autoUseCoupon?: string;
  /**
   * @remarks
   * The ID of the backup set of the source instance. The system uses the data in the specified backup set to create the instance. You can invoke the [DescribeBackups](https://help.aliyun.com/document_detail/473823.html) operation to query the backup set ID. If the source instance is a cluster instance, you must enter the backup set IDs of all shards in the source instance and separate them with commas, such as "10**,11**,15**".
   * > If your instance is a cloud-native architecture instance, we recommend that you invoke the [DescribeClusterBackupList](https://help.aliyun.com/document_detail/2679168.html) operation to query the cluster backup set ID, such as "cb-xx", and then specify the ClusterBackupId request parameter to clone the cluster instance. This saves you the trouble of entering the backup set ID of each shard.
   * 
   * @example
   * 2158****20
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
   * The billing method. Valid values:
   * - **PrePaid**: subscription. This is the default value.
   * - **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token is case-sensitive and can be up to 64 ASCII characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the cluster backup set. Some new cluster architectures support cluster backup set IDs. You can call the [DescribeClusterBackupList](https://help.aliyun.com/document_detail/2679168.html) operation to obtain the ID.
   * * If the cluster architecture supports cluster backup sets, you can enter the specified cluster backup set ID. You do not need to specify the **BackupId** parameter.
   * * If the cluster architecture does not support cluster backup sets, enter the backup set IDs of all shards in the source instance in the BackupId parameter and separate them with commas, such as "2158\\*\\*\\*\\*20,2158\\*\\*\\*\\*22".
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
   * > The endpoint is in the following format: <Prefix-Instance ID>.redis.rds.aliyuncs.com.
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
   * Specifies whether to perform a dry run before you create the instance. Valid values:
   * * **true**: performs a dry run without creating the instance. The system checks the request parameters, request format, service limits, and available resources. If the request fails the dry run, the system returns an error. If the request passes the dry run, the system returns the `DryRunOperation` error code.
   * * **false**: sends the request. If the request passes the check, the instance is created. This is the default value.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The database engine version. Default value: **1.0**. The value varies based on the Tair instance type:
   * - Tair_rdb: Tair memory-enhanced instances are compatible with Redis 5.0, Redis 6.0, and Redis 7.0 protocols. Set the value to **5.0**, **6.0**, or **7.0**.
   * - Tair_scm: Tair persistent memory-optimized instances are compatible with the Redis 6.0 protocol. Set the value to **1.0**.
   * - Tair_essd: Tair disk-based (ESSD/SSD) instances are compatible with the Redis 6.0 protocol. Set the value to **1.0** for ESSD-based instances and **2.0** for SSD-based instances.
   * 
   * @example
   * 1.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * Specifies whether to use the new instance as a child instance in a distributed instance. You can use this parameter to create a distributed instance.
   * * To use the new instance as the first child instance, set the value to **true**.
   * * To use the new instance as the second or third child instance, set the value to the ID of the distributed instance, such as gr-bp14rkqrhac****.
   * * If you do not want to use the new instance as a child instance in a distributed instance, leave this parameter empty.
   * > The new instance must be a Tair memory-enhanced instance if you want to use it as a child instance in a distributed instance.
   * 
   * @example
   * gr-bp14rkqrhac****
   */
  globalInstanceId?: string;
  /**
   * @remarks
   * The global IP address whitelist templates of the instance. Separate multiple whitelist templates with commas (,). Each template must be unique.
   * 
   * @example
   * g-zsldxfiwjmti0kcm****
   */
  globalSecurityGroupIds?: string;
  /**
   * @remarks
   * The instance type. For more information, see:
   * - [Memory-enhanced instance types](https://help.aliyun.com/document_detail/2527112.html).
   * - [Persistent memory-optimized instance types](https://help.aliyun.com/document_detail/2527110.html).
   * - [Disk-based instance types](https://help.aliyun.com/document_detail/2527111.html).
   * 
   * This parameter is required.
   * 
   * @example
   * tair.scm.standard.4m.32d
   */
  instanceClass?: string;
  /**
   * @remarks
   * The endpoint type used when you create a cloud-native Dual-active-zone deployment read/write splitting instance. If you do not specify this parameter, the default value is AzIndependentEndpoint.
   * 
   * - **AzIndependentEndpoint**: active zone-independent endpoint. This is the **default value**. Independent endpoints are provided for the primary and secondary active zones. You can use different endpoints to achieve nearest access.
   * - **UnifiedEndpoint**: unified endpoint. A unified endpoint is provided to access nodes in both the primary and secondary active zones. However, cross-active-zone access may occur.
   * 
   * >Notice: This parameter applies only to cloud-native Dual-active-zone deployment read/write splitting instances. For other types of instances, only active zone-independent endpoints are supported. Even if you specify UnifiedEndpoint, it does not take effect.
   * 
   * >Notice: The UnifiedEndpoint parameter is currently available only to whitelisted users. If you are not a whitelisted user and specify this parameter, an invoke error is returned. To request access, commit a ticket.
   * 
   * @example
   * AzIndependentEndpoint
   */
  instanceEndpointType?: string;
  /**
   * @remarks
   * The instance name. The name must meet the following requirements:
   * * The name must be 2 to 80 characters in length.
   * * The name must start with a letter or a Chinese character. It cannot contain spaces or the following special characters: `@/:=”<>{[]}`.
   * 
   * @example
   * apitest
   */
  instanceName?: string;
  /**
   * @remarks
   * The storage medium. Valid values:
   * * **tair_rdb**: memory-enhanced.
   * * **tair_scm**: persistent memory-optimized.
   * * **tair_essd**: disk-based.
   * 
   * This parameter is required.
   * 
   * @example
   * tair_scm
   */
  instanceType?: string;
  /**
   * @remarks
   * The end time of the maintenance window. Specify the time in the <i>HH:mm</i>Z format. The time must be in UTC. For example, if you want the maintenance window to end at 02:00 (UTC+8), set the value to `18:00Z`.
   * 
   * > The interval between the start time and the end time must be at least 1 hour.
   * 
   * > If you do not specify this parameter, the default value is 22:00 (UTC), which is 06:00 (UTC+8).
   * 
   * @example
   * 18:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window. Specify the time in the <i>HH:mm</i>Z format. The time must be in UTC. For example, if you want the maintenance window to start at 01:00 (UTC+8), set the value to `17:00Z`.
   * 
   * > If you do not specify this parameter, the default value is 18:00 (UTC), which is 02:00 (UTC+8).
   * 
   * @example
   * 17:00Z
   */
  maintainStartTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the parameter template. The instance is created based on the parameters in the specified template. Each template ID must be unique.
   * 
   * @example
   * g-50npzjcqb1ua6q6j****
   */
  paramGroupId?: string;
  /**
   * @remarks
   * The instance password. The password must meet the following requirements:
   * * The password must be 8 to 32 characters in length.
   * * The password must contain at least three of the following character types: uppercase letters, lowercase letters, special characters, and digits. Supported special characters are `!@#$%^&*()_+-=`.
   * 
   * @example
   * Pass!123456
   */
  password?: string;
  /**
   * @remarks
   * The subscription duration. Unit: months. Valid values: **1** to **9**, **12**, **24**, **36**, and **60**.
   * > This parameter is required when the **ChargeType** parameter is set to **PrePaid**.
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
   * The internal IP address of the instance.
   * 
   * > The IP address must fall within the CIDR block of the vSwitch to which the instance belongs. You can call the [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) operation of the VPC API to query the CIDR block information.
   * 
   * @example
   * 172.16.88.***
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The number of read-only nodes in the primary zone. This parameter applies only when you create a cloud-native read/write splitting instance.
   * * If the instance uses the standard architecture, valid values are 1 to 9.
   * * If the instance uses the cluster architecture, valid values are 1 to 4, which indicate the number of read-only nodes per data shard.
   * > If you create a multi-zone instance, you can use this parameter and the SlaveReadOnlyCount parameter to specify the number of read-only nodes in the primary and secondary zones.
   * > * If the instance uses the standard architecture, the sum of the values of this parameter and the SlaveReadOnlyCount parameter cannot exceed 9.
   * > * If the instance uses the cluster architecture, the sum of the values of this parameter and the SlaveReadOnlyCount parameter cannot exceed 4.
   * 
   * @example
   * 5
   */
  readOnlyCount?: number;
  /**
   * @remarks
   * Specifies whether to restore the account, kernel parameters, and whitelist from the original backup set when you create an instance by using a specified backup set. For example, to restore the account information, set the value to account.
   * 
   * Default value: empty. An empty value indicates that the account, kernel parameters, and whitelist are not restored from the original backup set.
   * > This parameter applies only to cloud-native instances and requires that the original backup set contains the account, kernel parameters, and whitelist information. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/473823.html) operation to query whether the RecoverConfigMode parameter of a specified backup set contains the preceding information.
   * 
   * @example
   * whitelist,config,account
   */
  recoverConfigMode?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the most recent region list. Use this parameter to specify the region where you want to create the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of secondary nodes in the primary zone. This parameter applies only when you create a cloud-native cluster instance with multiple replicas. You can use this parameter to specify the number of secondary nodes. Valid values: 1 to 4.
   * > If you create a multi-zone instance, you can use this parameter and the SlaveReplicaCount parameter to specify the number of secondary nodes in the primary and secondary zones. The sum of the values of this parameter and the SlaveReplicaCount parameter cannot exceed 4.
   * 
   * @example
   * 2
   */
  replicaCount?: number;
  /**
   * @remarks
   * The ID of the destination resource group.
   * 
   * > * You can invoke the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation or use the console to obtain the resource group ID list. For related operations, see [View the basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * > * Before you change the resource group to which the instance belongs, you can invoke the [ListResources](https://help.aliyun.com/document_detail/158866.html) operation to view the current resource group of the instance.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which you want to restore the source instance. If the data flashback feature is enabled for the source instance, you can specify a point in time within the backup retention period of the source instance. The system uses the backup data of the source instance at the specified point in time to create the instance. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * 
   * @example
   * 2021-07-06T07:25:57Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The secondary zone ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the most recent zone list.
   * 
   * > The value of this parameter cannot be the same as the value of the ZoneId parameter, and you cannot specify the ID of a multi-zone deployment.
   * 
   * @example
   * cn-hangzhou-g
   */
  secondaryZoneId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The number of data nodes in the instance. Valid values:
   * * **1**: creates a [standard instance](https://help.aliyun.com/document_detail/52228.html) that has only one data node. This is the default value.
   * * **2** to **32**: creates a [cluster instance](https://help.aliyun.com/document_detail/52228.html) that has the specified number of data nodes.
   * 
   * > You can set this parameter to a value from **2** to **32** only when the **InstanceType** parameter is set to **tair_rdb** or **tair_scm**. This means that only memory-enhanced and persistent memory-optimized instances support the cluster architecture.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  /**
   * @remarks
   * The instance edition. Valid values:
   * - **MASTER_SLAVE**: High-availability Edition. This edition uses a primary/secondary architecture to ensure high availability. This is the default value.
   * - **STAND_ALONE**: Standalone Edition. This edition uses a single-node architecture. If a node fails, data is lost and the system automatically creates a new empty instance. This edition is supported only in **single-zone** deployments and does not support cluster or read/write splitting architectures.
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
   * The number of secondary nodes in the secondary zone.
   * 
   * @example
   * 2
   */
  slaveReplicaCount?: number;
  /**
   * @remarks
   * Instance ID of the source instance. If you want to create an instance based on the backup set of an existing instance, specify instance ID of the source instance in this parameter.
   * > Then, specify the backup set or point in time by using the **BackupId**, **ClusterBackupId** (recommended for cloud-native cluster architectures), or **RestoreTime** parameter. This parameter must be used in combination with one of the preceding three parameters.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  srcDBInstanceId?: string;
  /**
   * @remarks
   * The storage capacity of the disk-based instance. The valid values vary based on the instance type. For more information, see [Disk-based instance types](https://help.aliyun.com/document_detail/2527111.html).
   * > This parameter is required only when the **InstanceType** parameter is set to **tair_essd** and you create an ESSD-based instance. If you create a Tair disk-based **SSD** instance, the capacity field is defined as a fixed value based on the instance type, and you do not need to specify this field.
   * 
   * @example
   * 60
   */
  storage?: number;
  /**
   * @remarks
   * The storage type. Valid values: **essd_pl1**, **essd_pl2**, and **essd_pl3**.
   * > This parameter is required only when the **InstanceType** parameter is set to **tair_essd** and you create an ESSD-based instance.
   * 
   * @example
   * essd_pl1
   */
  storageType?: string;
  /**
   * @remarks
   * The tag information of the instance.
   */
  tag?: CreateTairInstanceRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch in the VPC. You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) operation of the VPC API to obtain the vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) operation of the VPC API to query the VPC ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The primary active zone ID. You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the most recent active zone list. Use this parameter to specify the active zone where you want to create the instance.
   * > You can also specify the SecondaryZoneId parameter to set the secondary active zone. The primary and secondary nodes will be placed in the specified primary and secondary active zones to implement a dual-active-zone primary/secondary architecture deployment. For example, set the ZoneId parameter to "cn-hangzhou-h" and the SecondaryZoneId parameter to "cn-hangzhou-g".
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

