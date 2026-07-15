// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateDBInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * > - **N** specifies the Nth tag. For example, **Tag.1.Key** specifies the key of the first tag, and **Tag.2.Key** specifies the key of the second tag.
   * 
   * @example
   * testdatabase
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * > **N** specifies the Nth tag. For example, **Tag.1.Value** specifies the value of the first tag, and **Tag.2.Value** specifies the value of the second tag.
   * 
   * @example
   * apitest
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

export class CreateDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The password for the root account. The password must meet the following requirements:
   * 
   * - It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * - The special characters are !@#$%^&\\*()_+-=
   * 
   * - It must be 8 to 32 characters long.
   * 
   * > For more information about connection failures caused by special characters in passwords, see [How do I fix a connection failure that is caused by special characters in a password?]().
   * 
   * @example
   * 123456Aa
   */
  accountPassword?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * 
   * - **true**: Enables auto-renewal.
   * 
   * - **false**: The default value. Disables auto-renewal. You must manually renew the instance.
   * 
   * > This parameter is optional and takes effect only when you set the **ChargeType** parameter to **PrePaid**.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The backup point ID. To query the backup point ID, call the [DescribeBackups]() operation.
   * 
   * > You must specify this parameter and the **SrcDBInstanceId** parameter only when you clone an instance based on a backup point.
   * 
   * @example
   * 32994****
   */
  backupId?: string;
  /**
   * @remarks
   * The business information. This is an optional parameter.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **PostPaid**: The default value. Pay-as-you-go.
   * 
   * - **PrePaid**: Subscription.
   * 
   * > If you set this parameter to **PrePaid**, you must also specify the **Period** parameter.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. You can use the client to generate the token. Make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot be more than 64 characters long.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * 
   * - **default** or **null** (default): Uses a coupon.
   * 
   * - **youhuiquan_promotion_option_id_for_blank**: Does not use a coupon.
   * 
   * @example
   * default
   */
  couponNo?: string;
  /**
   * @remarks
   * The instance type. To query instance types, call the [DescribeAvailableResource]() operation.
   * 
   * This parameter is required.
   * 
   * @example
   * dds.mongo.standard
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance name. The name must meet the following requirements:
   * 
   * - It must start with a letter or a Chinese character.
   * 
   * - It can contain letters, Chinese characters, digits, underscores (_), periods (.), and hyphens (-).
   * 
   * - It must be 2 to 256 characters long.
   * 
   * @example
   * test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The storage space of the instance in GB.
   * 
   * The value of this parameter varies based on the instance type. For more information, see [Replica set instance types]().
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The database name.
   * 
   * > When you clone an instance, you can specify this parameter to clone specific databases. If you do not specify this parameter, all databases of the instance are cloned.
   * 
   * @example
   * mongodbtest
   */
  databaseNames?: string;
  /**
   * @remarks
   * Specifies whether to enable disk encryption.
   * 
   * @example
   * true
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The custom key ID.
   * 
   * @example
   * 2axxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The database engine. The value is fixed as **MongoDB**.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version. Valid values:
   * 
   * - **8.0**
   * 
   * - **7.0**
   * 
   * - **6.0**
   * 
   * - **5.0**
   * 
   * - **4.4**
   * 
   * - **4.2**
   * 
   * - **4.0**
   * 
   * > When you clone an instance or restore an instance from the recycle bin, this parameter must be the same as the engine version of the source instance.
   * 
   * >Warning: 
   * 
   * Versions 3.4 and earlier are discontinued.
   * 
   * This parameter is required.
   * 
   * @example
   * 4.4
   */
  engineVersion?: string;
  /**
   * @remarks
   * The global IP address whitelist templates for the instance. Separate multiple templates with commas (,). The templates cannot be repeated. This feature is in canary release.
   * 
   * @example
   * g-qxieqf40xjst1ngpr3jz
   */
  globalSecurityGroupIds?: string;
  /**
   * @remarks
   * The zone where the hidden node is deployed. This parameter is used for multi-zone deployment. Valid values:
   * 
   * - **cn-hangzhou-g**: Zone G in Hangzhou.
   * 
   * - **cn-hangzhou-h**: Zone H in Hangzhou.
   * 
   * - **cn-hangzhou-i**: Zone I in Hangzhou.
   * 
   * - **cn-hongkong-b**: Zone B in Hong Kong (China).
   * 
   * - **cn-hongkong-c**: Zone C in Hong Kong (China).
   * 
   * - **cn-hongkong-d**: Zone D in Hong Kong (China).
   * 
   * - **cn-wulanchabu-a**: Zone A in Ulanqab.
   * 
   * - **cn-wulanchabu-b**: Zone B in Ulanqab.
   * 
   * - **cn-wulanchabu-c**: Zone C in Ulanqab.
   * 
   * - **ap-southeast-1a**: Zone A in Singapore.
   * 
   * - **ap-southeast-1b**: Zone B in Singapore.
   * 
   * - **ap-southeast-1c**: Zone C in Singapore.
   * 
   * - **ap-southeast-5a**: Zone A in Jakarta.
   * 
   * - **ap-southeast-5b**: Zone B in Jakarta.
   * 
   * - **ap-southeast-5c**: Zone C in Jakarta.
   * 
   * - **eu-central-1a**: Zone A in Frankfurt.
   * 
   * - **eu-central-1b**: Zone B in Frankfurt.
   * 
   * - **eu-central-1c**: Zone C in Frankfurt.
   * 
   * > * This parameter is available when the instance uses disks.
   * >
   * > * The value of this parameter cannot be the same as the value of the **ZoneId** or **SecondaryZoneId** parameter.
   * 
   * @example
   * cn-hangzhou-i
   */
  hiddenZoneId?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * **VPC**: virtual private cloud (VPC).
   * 
   * @example
   * VPC
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration of the instance in months.
   * 
   * Valid values: **1** to **9** (integers), **12**, **24**, **36**, and **60**.
   * 
   * > This parameter is required and takes effect only when you set the **ChargeType** parameter to **PrePaid**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The provisioned IOPS (input/output operations per second). Valid values: 0 to 50000.
   * 
   * @example
   * 1960
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The number of **read-only nodes** in the replica set instance. Valid values are integers from **0** to **5**. The default value is **0**.
   * 
   * @example
   * 0
   */
  readonlyReplicas?: string;
  /**
   * @remarks
   * The region ID. To query the region ID, call the [DescribeRegions]() operation.
   * 
   * > When you clone an instance or restore an instance from the recycle bin, this parameter must be the same as the region ID of the source instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of **primary and secondary nodes** in the replica set instance. Valid values:
   * 
   * - **3** (default)
   * 
   * - **5**
   * 
   * - **7**
   * 
   * >Notice: 
   * 
   * You do not need to specify this parameter for standalone instances.
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which you want to restore the instance. You can specify any point in time within the last seven days. The time must be in the *yyyy-MM-dd*T*HH:mm:ss*Z format and in UTC.
   * 
   * > You must specify this parameter and the **SrcDBInstanceId** parameter only when you clone an instance based on a point in time.
   * 
   * @example
   * 2022-03-13T12:11:14Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The method to restore an instance from a backup.
   * 
   * - 0: Restores the instance to a specified backup set.
   * 
   * - 1: Restores the instance to a specified point in time.
   * 
   * - 2: Restores a released instance to a specified backup set.
   * 
   * - 3: Restores the instance to a specified geo-redundant backup set.
   * 
   * @example
   * 0
   */
  restoreType?: string;
  /**
   * @remarks
   * The zone where the secondary node is deployed. This parameter is used for multi-zone deployment. Valid values:
   * 
   * - **cn-hangzhou-g**: Zone G in Hangzhou.
   * 
   * - **cn-hangzhou-h**: Zone H in Hangzhou.
   * 
   * - **cn-hangzhou-i**: Zone I in Hangzhou.
   * 
   * - **cn-hongkong-b**: Zone B in Hong Kong (China).
   * 
   * - **cn-hongkong-c**: Zone C in Hong Kong (China).
   * 
   * - **cn-hongkong-d**: Zone D in Hong Kong (China).
   * 
   * - **cn-wulanchabu-a**: Zone A in Ulanqab.
   * 
   * - **cn-wulanchabu-b**: Zone B in Ulanqab.
   * 
   * - **cn-wulanchabu-c**: Zone C in Ulanqab.
   * 
   * - **ap-southeast-1a**: Zone A in Singapore.
   * 
   * - **ap-southeast-1b**: Zone B in Singapore.
   * 
   * - **ap-southeast-1c**: Zone C in Singapore.
   * 
   * - **ap-southeast-5a**: Zone A in Jakarta.
   * 
   * - **ap-southeast-5b**: Zone B in Jakarta.
   * 
   * - **ap-southeast-5c**: Zone C in Jakarta.
   * 
   * - **eu-central-1a**: Zone A in Frankfurt.
   * 
   * - **eu-central-1b**: Zone B in Frankfurt.
   * 
   * - **eu-central-1c**: Zone C in Frankfurt.
   * 
   * > * This parameter is available when the instance uses disks.
   * >
   * > * The value of this parameter cannot be the same as the value of the **ZoneId** or **HiddenZoneId** parameter.
   * 
   * @example
   * cn-hangzhou-h
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The IP address whitelist of the instance. Separate multiple IP addresses with commas (,). Each IP address in the whitelist must be unique. The whitelist can be in one of the following formats:
   * 
   * - 0.0.0.0/0
   * 
   * - An IP address, for example, 10.23.12.24.
   * 
   * - A CIDR block, for example, 10.23.12.0/24. The /24 indicates that the prefix of the CIDR block is 24 bits in length. You can set the prefix to a value from 1 to 32.
   * 
   * > * You can add a maximum of 1,000 IP addresses or CIDR blocks to all IP address whitelists.
   * >
   * > * If you set the whitelist to 0.0.0.0/0, all IP addresses can access the instance. This is a high-risk setting. Use this with caution.
   * 
   * @example
   * 192.168.xx.xx,192.168.xx.xx
   */
  securityIPList?: string;
  /**
   * @remarks
   * The source instance ID.
   * 
   * > When you clone an instance, you must specify this parameter and the **BackupId** or **RestoreTime** parameter. When you restore an instance from the recycle bin, you only need to specify this parameter. You do not need to specify the **BackupId** or **RestoreTime** parameter.
   * 
   * @example
   * dds-bp1ee12ad351****
   */
  srcDBInstanceId?: string;
  /**
   * @remarks
   * The region where the source instance is located.
   * 
   * > - This parameter is required when RestoreType is set to 2 or 3.
   * 
   * @example
   * 2
   */
  srcRegion?: string;
  /**
   * @remarks
   * The storage engine of the instance. The value is fixed as **WiredTiger**.
   * 
   * > - When you clone an instance or restore an instance from the recycle bin, this parameter must be the same as the storage engine of the source instance.
   * >
   * > - For more information about the constraints on storage engines and database versions, see [Versions and storage engines]().
   * 
   * @example
   * WiredTiger
   */
  storageEngine?: string;
  /**
   * @remarks
   * The storage class. Valid values:
   * 
   * - **cloud_essd1**: ESSD PL1 disk.
   * 
   * - **cloud_essd2**: ESSD PL2 disk.
   * 
   * - **cloud_essd3**: ESSD PL3 disk.
   * 
   * - **cloud_auto**: ESSD AutoPL disk.
   * 
   * - **local_ssd**: Local SSD.
   * 
   * > * For standalone instances, if you pass the value cloud_essd1, an ESSD disk is used.
   * >
   * > * ESSD AutoPL disks are available only on the China site (aliyun.com).
   * >
   * > * For instances of version 4.4 or later, the default value is **cloud_essd1**.
   * >
   * > * For instances of version 4.2 or earlier, the default value is **local_ssd**.
   * 
   * @example
   * cloud_essd1
   */
  storageType?: string;
  /**
   * @remarks
   * The custom tags.
   */
  tag?: CreateDBInstanceRequestTag[];
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID. To query the zone ID, call the [DescribeRegions]() operation.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountPassword: 'AccountPassword',
      autoRenew: 'AutoRenew',
      backupId: 'BackupId',
      businessInfo: 'BusinessInfo',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      couponNo: 'CouponNo',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceStorage: 'DBInstanceStorage',
      databaseNames: 'DatabaseNames',
      encrypted: 'Encrypted',
      encryptionKey: 'EncryptionKey',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      globalSecurityGroupIds: 'GlobalSecurityGroupIds',
      hiddenZoneId: 'HiddenZoneId',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      provisionedIops: 'ProvisionedIops',
      readonlyReplicas: 'ReadonlyReplicas',
      regionId: 'RegionId',
      replicationFactor: 'ReplicationFactor',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      restoreType: 'RestoreType',
      secondaryZoneId: 'SecondaryZoneId',
      securityIPList: 'SecurityIPList',
      srcDBInstanceId: 'SrcDBInstanceId',
      srcRegion: 'SrcRegion',
      storageEngine: 'StorageEngine',
      storageType: 'StorageType',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPassword: 'string',
      autoRenew: 'string',
      backupId: 'string',
      businessInfo: 'string',
      chargeType: 'string',
      clientToken: 'string',
      clusterId: 'string',
      couponNo: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceStorage: 'number',
      databaseNames: 'string',
      encrypted: 'boolean',
      encryptionKey: 'string',
      engine: 'string',
      engineVersion: 'string',
      globalSecurityGroupIds: 'string',
      hiddenZoneId: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      provisionedIops: 'number',
      readonlyReplicas: 'string',
      regionId: 'string',
      replicationFactor: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      restoreType: 'string',
      secondaryZoneId: 'string',
      securityIPList: 'string',
      srcDBInstanceId: 'string',
      srcRegion: 'string',
      storageEngine: 'string',
      storageType: 'string',
      tag: { 'type': 'array', 'itemType': CreateDBInstanceRequestTag },
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

