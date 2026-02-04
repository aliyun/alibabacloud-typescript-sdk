// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTairInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. A tag is a key-value pair.
   * 
   * >  A maximum of five key-value pairs can be specified at a time.
   * 
   * @example
   * key1_test
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * >  **N** specifies the value of the nth tag. For example, **Tag.1.Value** specifies the value of the first tag, and **Tag.2.Value** specifies the value of the second tag.
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
   * *   **true**: enables auto-renewal.
   * *   **false** (default): disables auto-renewal.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The subscription duration that is supported by auto-renewal. Unit: month. Valid values: **1**, **2**, **3**, **6**, and **12**.
   * 
   * >  This parameter is required if the **AutoRenew** parameter is set to **true**.
   * 
   * @example
   * 3
   */
  autoRenewPeriod?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * 
   * *   **true**: uses a coupon.
   * *   **false** (default): does not use a coupon.
   * 
   * @example
   * true
   */
  autoUseCoupon?: string;
  /**
   * @remarks
   * You can set the BackupId parameter to the backup set ID of the source instance. The system uses the data stored in the backup set to create an instance. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/473823.html) operation to query the backup set ID. If the source instance is a cluster instance, set the BackupId parameter to the backup set IDs of all shards of the source instance, separated by commas (,). Example: "10\\*\\*,11\\*\\*,15\\*\\*".
   * 
   * >  If your instance is a cloud-native cluster instance, we recommend that you use [DescribeClusterBackupList](https://help.aliyun.com/document_detail/2679168.html) to query the backup set ID of the cluster instance, such as cb-xx. Then, set the ClusterBackupId request parameter to the backup set ID to clone the cluster instance. This eliminates the need to specify the backup set ID of each shard.
   * 
   * @example
   * 11111111
   */
  backupId?: string;
  /**
   * @remarks
   * The ID of the promotional event or the business information.
   * 
   * @example
   * 000000000
   */
  businessInfo?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PrePaid** (default): subscription
   * *   **PostPaid**: pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests and is case-sensitive. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is supported for specific new cluster instances. You can query the backup set ID by calling the [DescribeClusterBackupList](https://help.aliyun.com/document_detail/2679168.html) operation.
   * 
   * *   If this parameter is supported, you can specify the backup set ID. In this case, you do not need to specify the **BackupId** parameter.
   * *   If this parameter is not supported, set the BackupId parameter to the IDs of backup sets in all shards of the source instance, separated by commas (,). Example: "2158\\*\\*\\*\\*20,2158\\*\\*\\*\\*22".
   * 
   * @example
   * cb-hyxdof5x9kqb****
   */
  clusterBackupId?: string;
  /**
   * @remarks
   * The prefix of the endpoint. The prefix must be 8 to 40 characters in length and can contain lowercase letters and digits. It must start with a lowercase letter.
   * 
   * >  The endpoint must be in the \\<prefix>.redis.rds.aliyuncs.com format.
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
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs a dry run and does not create the instance. The system prechecks the request parameters, request format, service limits, and available resources. If the request fails the dry run, an error code is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (false): performs a dry run and performs the actual request. If the request passes the dry run, the instance is directly created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The database engine version. Default value: **1.0**. The parameter value varies based on the Tair instance series.
   * 
   * *   To create a Tair DRAM-based instance (Tair_rdb) that is compatible with Redis 5.0, 6.0, or 7.0, set this parameter to **5.0**, **6.0**, or **7.0**.
   * *   To create a Tair persistent memory-optimized instance (tair_scm) that is compatible with Redis 6.0, set this parameter to **1.0**.
   * *   To create a Tair ESSD-based instance (tair_essd) that is compatible with Redis 6.0, set this parameter to **1.0**. To create a Tair SSD-based instance that is compatible with Redis 6.0, set this parameter to **2.0**.
   * 
   * @example
   * 1.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * Specifies whether to use the created instance as a child instance of a distributed instance.
   * 
   * *   If you want the created instance to be used as the first child instance, enter **true**.
   * *   If you want the created instance to be used as the second or third child instance, enter the ID of the distributed instance, such as gr-bp14rkqrhac\\*\\*\\*\\*.
   * *   If you do not want the created instance to be used as a distributed instance, leave the parameter empty.
   * 
   * >  If you want the created instance to be used as a distributed instance, the created instance must be a Tair DRAM-based instance.
   * 
   * @example
   * gr-bp14rkqrhac****
   */
  globalInstanceId?: string;
  /**
   * @remarks
   * The global IP whitelist templates of the instance. Separate multiple IP whitelist templates with commas (,). Each IP whitelist template must be unique.
   * 
   * @example
   * g-zsldxfiwjmti0kcm****
   */
  globalSecurityGroupIds?: string;
  /**
   * @remarks
   * The instance series. For more information, see the following topics:
   * 
   * *   [DRAM-based instances](https://help.aliyun.com/document_detail/2527112.html)
   * *   [Persistent memory-optimized instances](https://help.aliyun.com/document_detail/2527110.html)
   * *   [ESSD/SSD-based instances](https://help.aliyun.com/document_detail/2527111.html)
   * 
   * This parameter is required.
   * 
   * @example
   * tair.scm.standard.4m.32d
   */
  instanceClass?: string;
  /**
   * @remarks
   * The name of the instance. The name must meet the following requirements:
   * 
   * *   The name must be 2 to 80 characters in length.
   * *   The name must start with a letter and cannot contain spaces or special characters. Special characters include `@ / : = " < > { [ ] }`
   * 
   * @example
   * apitest
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance series. Valid values:
   * 
   * *   **tair_rdb**: Tair DRAM-based instance
   * *   **tair_scm**: Tair persistent memory-optimized instance
   * *   **tair_essd**: Tair ESSD/SSD-based instance
   * 
   * This parameter is required.
   * 
   * @example
   * tair_scm
   */
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the parameter template. The instance is created based on the parameters in the parameter template. The ID must be unique.
   * 
   * @example
   * g-50npzjcqb1ua6q6j****
   */
  paramGroupId?: string;
  /**
   * @remarks
   * The password that is used to connect to the instance. The password must meet the following requirements:
   * 
   * *   The password must be 8 to 32 characters in length.
   * *   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include `! @ # $ % ^ & * ( ) _ + - =`
   * 
   * @example
   * Pass!123456
   */
  password?: string;
  /**
   * @remarks
   * The subscription duration. Valid values: **1**, 2, 3, 4, 5, 6, 7, 8, **9**, **12**, **24**,**36**, and **60**. Unit: month.
   * 
   * >  This parameter is required only if the **ChargeType** parameter is set to **PrePaid**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The service port number of the instance. Valid values: 1024 to 65535. Default value: 6379.
   * 
   * @example
   * 6379
   */
  port?: number;
  /**
   * @remarks
   * The internal IP address of the instance.
   * 
   * >  The IP address must be within the CIDR block of the vSwitch to which you want the instance to connect. You can call the [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) operation of VPC to query the CIDR block information.
   * 
   * @example
   * 172.16.88.***
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The number of read replicas in the primary zone. This parameter applies only to cloud-native read/write splitting instances. Valid values: 1 to 9.
   * 
   * >  The sum of the values of this parameter and the SlaveReadOnlyCount parameter cannot exceed 9.
   * 
   * @example
   * 5
   */
  readOnlyCount?: number;
  /**
   * @remarks
   * Specifies whether to restore the account, kernel parameter, and whitelist information from the original backup set when you create an instance from the specified backup set. For example, if you want to restore the account information, set the parameter to `{"account":true}`.
   * 
   * This parameter is empty by default, which indicates that the account, kernel parameter, and whitelist information is not restored from the original backup set.
   * 
   * >  This parameter applies only to cloud-native cluster instances. The account, kernel parameter, and whitelist information must be stored in the original backup set. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/473823.html) operation to check whether the RecoverConfigMode configurations in the specified backup set contain the preceding information.
   * 
   * @example
   * {"whitelist":true,"config":true,"account":true}
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
   * The number of replica nodes in the primary zone. This parameter applies only to cloud-native multi-replica cluster instances. Valid values: 1 to 4.
   * 
   * > 
   * 
   * *   The sum of the values of this parameter and the SlaveReplicaCount parameter cannot exceed 4.
   * 
   * *   You can specify only one of the ReplicaCount and ReadOnlyCount parameters.
   * 
   * *   Master-replica instances do not support multiple replicas.
   * 
   * @example
   * 2
   */
  replicaCount?: number;
  /**
   * @remarks
   * The ID of the resource group that you want to manage.
   * 
   * > 
   * 
   * *   You can query resource group IDs in the console or by calling the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation. For more information, see [View the basic information about a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * *   Before you modify the resource group to which an instance belongs, you can call the [ListResources](https://help.aliyun.com/document_detail/158866.html) operation to view the current resource group of the instance.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * If data flashback is enabled for the source instance, you can use this parameter to specify a point in time within the backup retention period of the source instance. The system uses the backup data of the source instance at the point in time to create an instance. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2021-07-06T07:25:57Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The ID of the secondary zone. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the ID of the secondary zone.
   * 
   * >  You cannot specify multiple zone IDs or set this parameter to a value that is the same as that of the ZoneId parameter.
   * 
   * @example
   * cn-hangzhou-h
   */
  secondaryZoneId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The number of data nodes in the instance. Valid values:
   * 
   * *   **1** (default): You can create a [standard instance](https://help.aliyun.com/document_detail/52228.html) that contains only one data node.
   * *   **2** to **32**: You can create a [cluster instance](https://help.aliyun.com/document_detail/52228.html) that contains the specified number of data nodes.
   * 
   * >  When the **InstanceType** parameter is set to **tair_rdb** or **tair_scm**, this parameter can be set to a value in the range of **2** to **32**. Only DRAM-based and persistent memory-optimized instances support the cluster architecture.
   * 
   * @example
   * 1
   */
  shardCount?: number;
  /**
   * @remarks
   * The shard type of the instance. Valid values:
   * 
   * *   **MASTER_SLAVE** (default): runs in a master-replica architecture that provides high availability.
   * *   **STAND_ALONE**: runs in a standalone architecture. If the only node fails, the system creates a new instance and switches the workloads to the new instance. This may cause data loss. You can set the ShardType parameter to this value only if the instance uses the **single-zone** deployment mode. If you set the ShardType parameter to this value, you cannot create cluster or read/write splitting instances.
   * 
   * @example
   * MASTER_SLAVE
   */
  shardType?: string;
  /**
   * @remarks
   * The number of read replicas in the secondary zone when you create a multi-zone read/write splitting instance. The sum of the values of this parameter and the ReadOnlyCount parameter cannot exceed 9.
   * 
   * > When you create a multi-zone read/write splitting instance, you must specify both SlaveReadOnlyCount and SecondaryZoneId.
   * 
   * @example
   * 1
   */
  slaveReadOnlyCount?: number;
  /**
   * @remarks
   * The number of replica nodes in the secondary zone when you create a cloud-native multi-replica cluster instance deployed across multiple zones. The sum of the values of this parameter and the ReplicaCount parameter cannot exceed 4.
   * 
   * >  When you create a cloud-native multi-replica cluster instance deployed across multiple zones, you must specify both SlaveReplicaCount and SecondaryZoneId.
   * 
   * @example
   * 2
   */
  slaveReplicaCount?: number;
  /**
   * @remarks
   * If you want to create an instance based on the backup set of an existing instance, set this parameter to the ID of the source instance.
   * 
   * >  After you specify the SrcDBInstanceId parameter, use the **BackupId**, **ClusterBackupId** (recommended for cloud-native cluster instances), or **RestoreTime** parameter to specify the backup set or the specific point in time that you want to use to create an instance. The SrcDBInstanceId parameter must be used in combination with one of the preceding three parameters.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  srcDBInstanceId?: string;
  /**
   * @remarks
   * The storage capacity of the ESSD/SSD-based instance. The valid values vary based on the instance type. For more information, see [ESSD/SSD-based instances](https://help.aliyun.com/document_detail/2527111.html).
   * 
   * >  This parameter is required only when you set the **InstanceType** parameter to **tair_essd** to create an ESSD-based instance. If you create a Tair **SSD**-based instance, the Storage parameter is automatically specified based on predefined specifications. You do not need to specify this parameter.
   * 
   * @example
   * 60
   */
  storage?: number;
  /**
   * @remarks
   * The storage type. Valid values: **essd_pl1**, **essd_pl2**, and **essd_pl3**.
   * 
   * >  This parameter is required only when you set the **InstanceType** parameter to **tair_essd** to create an ESSD-based instance.
   * 
   * Enumerated values:
   * 
   * *   essd_pl0
   * *   essd_pl1
   * *   essd_pl2
   * *   essd_pl3
   * 
   * @example
   * essd_pl1
   */
  storageType?: string;
  /**
   * @remarks
   * Details of the tags.
   */
  tag?: CreateTairInstanceRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch that belongs to the VPC. You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) operation to query vSwitch IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC. You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) operation to query VPC IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the primary zone. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the most recent zone list.
   * 
   * >  You can also set the SecondaryZoneId parameter to specify the secondary zone. The primary and secondary nodes will then be deployed in the specified primary and secondary zones to implement the master-replica zone-disaster recovery architecture. For example, you can set the ZoneId parameter to cn-hangzhou-h and the SecondaryZoneId parameter to cn-hangzhou-g.
   * 
   * @example
   * cn-hangzhou-e
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
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
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
      instanceName: 'string',
      instanceType: 'string',
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

