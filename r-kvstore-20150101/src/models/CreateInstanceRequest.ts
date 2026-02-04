// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The keys of the tags that are added to the instance.
   * 
   * > *   **N** specifies the serial number of the tag. Up to 20 tags can be added to a single instance. For example, Tag.1.Key specifies the key of the first tag and Tag.2.Key specifies the key of the second tag.
   * > *   If the key of the tag does not exist, the tag is automatically created.
   * 
   * @example
   * testkey
   */
  key?: string;
  /**
   * @remarks
   * The values of the tags that are added to the instance.
   * 
   * > **N** specifies the serial number of the tag. For example, **Tag.1.Value** specifies the value of the first tag and **Tag.2.Value** specifies the value of the second tag.
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
   * Specifies whether to enable append-only file (AOF) persistence for the instance. Valid values:
   * 
   * *   **yes** (default): enables AOF persistence.
   * *   **no**: disables AOF persistence.
   * 
   * **
   * 
   * **Description** This parameter is applicable to classic instances, and is unavailable for cloud-native instances.
   * 
   * @example
   * yes
   */
  appendonly?: string;
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
   * false
   */
  autoUseCoupon?: string;
  /**
   * @remarks
   * If your instance is a cloud-native cluster instance, we recommend that you use [DescribeClusterBackupList](https://help.aliyun.com/document_detail/2679168.html) to query the backup set ID of the cluster instance, such as cb-xx. Then, set the ClusterBackupId request parameter to the backup set ID to clone the cluster instance. This eliminates the need to specify the backup set ID of each shard.
   * 
   * You can set the BackupId parameter to the backup set ID of the source instance. The system uses the data stored in the backup set to create an instance. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/473823.html) operation to query backup set IDs. If the source instance is a cluster instance, set the BackupId parameter to the backup set IDs of all shards of the source instance, separated by commas (,). Example: "10\\*\\*,11\\*\\*,15\\*\\*".
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
   * > You must specify at least one of the **Capacity** and **InstanceClass** parameters when you call this operation.
   * 
   * @example
   * 16384
   */
  capacity?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PrePaid**: subscription
   * *   **PostPaid** (default): pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * This parameter is supported for specific new cluster instances. You can query the backup set ID by using the [DescribeClusterBackupList](https://help.aliyun.com/document_detail/2679168.html) operation.
   * 
   * *   If this parameter is supported, you can specify the backup set ID. In this case, you do not need to specify the **BackupId** parameter.
   * *   If this parameter is not supported, set the BackupId parameter to the IDs of backup sets for all shards of the source instance, separated by commas (,). Example: "2158\\*\\*\\*\\*20,2158\\*\\*\\*\\*22".
   * 
   * @example
   * cb-hyxdof5x9kqbtust
   */
  clusterBackupId?: string;
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **AllocateInstancePublicConnection**.
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
   * The ID of the dedicated cluster. This parameter is required if you create an instance in a dedicated cluster.
   * 
   * @example
   * dhg-uv4fnk6r7zff****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs a dry run and does not create the instance. The system prechecks the request parameters, request format, service limits, and available resources. If the request fails to pass the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false**: performs a dry run and sends the request. If the request passes the dry run, the instance is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The engine version. Valid values for **classic instances**:
   * 
   * *   **2.8** (not recommended due to [scheduled EOFS](https://help.aliyun.com/document_detail/2674657.html))
   * *   **4.0** (not recommended)
   * *   **5.0**
   * 
   * Valid values for **cloud-native instances**:
   * 
   * *   **5.0**
   * *   **6.0** (recommended)
   * *   **7.0**
   * 
   * >  The default value is **5.0**.
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * Specifies whether to use the new instance as the first child instance of a distributed instance. Valid values:
   * 
   * *   **true**: uses the new instance as the first child instance.
   * *   **false** (default): does not use the new instance as the first child instance.
   * 
   * > 
   * 
   * *   If you want to create a Tair DRAM-based instance that runs Redis 5.0, you must set this parameter to **true**.
   * 
   * *   This parameter is available only on the China site (aliyun.com).
   * 
   * @example
   * false
   */
  globalInstance?: boolean;
  /**
   * @remarks
   * The ID of the distributed instance. This parameter is available only on the China site (aliyun.com).
   * 
   * @example
   * gr-bp14rkqrhac****
   */
  globalInstanceId?: string;
  /**
   * @remarks
   * The global IP whitelist template for the instance. Multiple IP whitelist templates should be separated by English commas (,) and cannot be duplicated.
   * 
   * @example
   * g-zsldxfiwjmti0kcm****
   */
  globalSecurityGroupIds?: string;
  /**
   * @remarks
   * The instance type. For example, redis.master.small.default indicates a Community Edition standard master-replica instance that has 1 GB of memory. For more information, see [Overview](https://help.aliyun.com/document_detail/26350.html).
   * 
   * **
   * 
   * **Description** You must specify at least one of the **Capacity** and **InstanceClass** parameters when you call the CreateInstance operation.
   * 
   * @example
   * redis.master.small.default
   */
  instanceClass?: string;
  /**
   * @remarks
   * The name of the instance. The name must be 2 to 80 characters in length and must start with a letter. It cannot contain spaces or specific special characters. These special characters include `@ / : = " < > { [ ] }`
   * 
   * @example
   * apitest
   */
  instanceName?: string;
  /**
   * @remarks
   * The database engine of the instance. Valid values:
   * 
   * *   **Redis** (default)
   * *   **Memcache**
   * 
   * @example
   * Redis
   */
  instanceType?: string;
  /**
   * @remarks
   * The network type. Valid value:
   * 
   * *   **VPC** (default)
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * *   **MASTER_SLAVE**: high availability (master-replica)
   * *   **STAND_ALONE**: standalone
   * *   **double**: master-replica
   * *   **single**: standalone
   * 
   * >  To create a cloud-native instance, set this parameter to **MASTER_SLAVE** or **STAND_ALONE**. To create a classic instance, set this parameter to **double** or **single**.
   * 
   * @example
   * STAND_ALONE
   */
  nodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The parameter template ID, which must be globally unique.
   * 
   * @example
   * rpg-test**
   */
  paramGroupId?: string;
  /**
   * @remarks
   * The password that is used to connect to the instance. The password must be 8 to 32 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and specific special characters. These special characters include `! @ # $ % ^ & * ( ) _ + - =`
   * 
   * @example
   * Pass!123456
   */
  password?: string;
  /**
   * @remarks
   * The subscription duration. Valid values: **1**, 2, 3, 4, 5, 6, 7, 8, **9**, **12**, **24**,**36**, and **60**. Unit: months.
   * 
   * > This parameter is available and required only if the **ChargeType** parameter is set to **PrePaid**.
   * 
   * @example
   * 12
   */
  period?: string;
  /**
   * @remarks
   * The port number that is used to connect to the instance. Valid values: **1024** to **65535**. Default value: **6379**.
   * 
   * @example
   * 6379
   */
  port?: string;
  /**
   * @remarks
   * The private IP address of the instance.
   * 
   * > The private IP address must be available within the CIDR block of the vSwitch to which to connect the instance.
   * 
   * @example
   * 172.16.0.***
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The number of read replicas in the primary zone. This parameter applies only to read/write splitting instances that use cloud disks. You can use this parameter to customize the number of read replicas. Valid values: 1 to 9.
   * 
   * >  The sum of the values of this parameter and SlaveReadOnlyCount cannot be greater than 9.
   * 
   * @example
   * 5
   */
  readOnlyCount?: number;
  /**
   * @remarks
   * When creating an instance using a specified backup set, whether to restore account, kernel parameter (whitelist), and whitelist (config) information from the original backup set. For example, if you need to restore account information, the value should be `{"account":true}`.
   * By default, it is empty, indicating that no account, kernel parameter, or whitelist information will be restored from the original backup set. 
   * > This parameter applies only to cloud-native instances and requires that the original backup set has saved the account, kernel parameter, and whitelist information. You can use the [DescribeBackups](https://help.aliyun.com/document_detail/473823.html) API to check if the RecoverConfigMode parameter in the specified backup set contains the above information.
   * 
   * @example
   * {"whitelist":true,"config":true,"account":true}
   */
  recoverConfigMode?: string;
  /**
   * @remarks
   * The ID of the region where you want to create the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of slave replicas in the primary availability zone. This parameter is applicable only for creating cloud-native cluster edition multi-replica instances, allowing you to customize the number of slave replicas. The value range is 1 to 4.
   * > > - The sum of this parameter and SlaveReplicaCount cannot exceed 4. 
   * >> - Only one of this parameter and ReadOnlyCount can be passed; there are no instances that simultaneously include both replicas and read-only nodes. 
   * >> - Primary-secondary instances do not support multiple replicas.
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
   * If data flashback is enabled for the source instance, you can use this parameter to specify a point in time within the backup retention period of the source instance. The system uses the backup data of the source instance at the point in time to create an instance. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2019-06-19T16:00:00Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The secondary zone ID of the instance. You can call the [DescribeZones](https://help.aliyun.com/document_detail/473764.html) operation to query the most recent zone list.
   * 
   * > If you specify this parameter, the master node and replica node of the instance can be deployed in different zones and disaster recovery is implemented across zones. The instance can withstand failures in data centers.
   * 
   * @example
   * cn-hangzhou-h
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * 系统自动生成的安全 Token，无需传入
   */
  securityToken?: string;
  /**
   * @remarks
   * The number of shards. This parameter applies only to cloud-native cluster instances.
   * 
   * @example
   * 4
   */
  shardCount?: number;
  /**
   * @remarks
   * The number of read replicas in the secondary zone. This parameter is used to create a read/write splitting instance that is deployed across multiple zones. The sum of the values of this parameter and ReadOnlyCount cannot be greater than 9.
   * 
   * > When you create a multi-zone read/write splitting instance, you must specify both SlaveReadOnlyCount and SecondaryZoneId.
   * 
   * @example
   * 2
   */
  slaveReadOnlyCount?: number;
  /**
   * @remarks
   * Used for specifying the number of slave replicas in the secondary availability zone when creating a multi-AZ cloud-native cluster edition with multiple replicas. The sum of this parameter and ReplicaCount cannot exceed 4. <notice>When creating a multi-AZ cloud-native cluster edition with multiple replicas, both SlaveReplicaCount and SecondaryZoneId parameters must be specified.</notice>
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
   * The tags of the instance.
   */
  tag?: CreateInstanceRequestTag[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the token is unique among different requests. The token is case-sensitive. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  token?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which you want the instance to connect.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The primary zone ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-e
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
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
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
      instanceName: 'string',
      instanceType: 'string',
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

