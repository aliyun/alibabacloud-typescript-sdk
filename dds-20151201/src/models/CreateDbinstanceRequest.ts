// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * > - **N** indicates the sequence number of the tag key. For example, **Tag.1.Key** indicates the key of the first tag, and **Tag.2.Key** indicates the key of the second tag.
   * 
   * @example
   * testdatabase
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * > **N** indicates the sequence number of the tag value. For example, **Tag.1.Value** indicates the value of the first tag, and **Tag.2.Value** indicates the value of the second tag.
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
   * The password of the root account. The password must meet the following requirements:
   * 
   * - Must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * - Special characters include !@#$%^&*()_+-=.
   * - Must be 8 to 32 characters in length.
   * 
   * > For information about how to database connection failures caused by special characters in the password, see [How do I database connection failures caused by special characters in the connection string?](https://help.aliyun.com/document_detail/471568.html).
   * 
   * @example
   * 123456Aa
   */
  accountPassword?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * 
   * - **true**: enables auto-renewal.
   * - **false**: default value. Disables auto-renewal. You must manually renew the instance.
   * 
   * > This parameter is available and optional when **ChargeType** is set to **PrePaid**.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The backup ID. You can invoke the [DescribeBackups](https://help.aliyun.com/document_detail/62172.html) operation to query the backup ID.
   * > This parameter is required only when you invoke this operation to clone a clone instance from a backup point. You must also configure the **SrcDBInstanceId** parameter.
   * 
   * @example
   * 32994****
   */
  backupId?: string;
  /**
   * @remarks
   * The additional information about the business.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **PostPaid**: default value. Pay-as-you-go.
   * - **PrePaid**: Subscription.
   * 
   * > If you set this parameter to **PrePaid**, you must also configure the **Period** parameter.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * - **default** or **null** (default): uses a coupon.
   * - **youhuiquan_promotion_option_id_for_blank**: does not use a coupon.
   * 
   * @example
   * default
   */
  couponNo?: string;
  /**
   * @remarks
   * The instance type. You can call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/149719.html) operation to query the available instance types.
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
   * - Must start with a Chinese character or a letter.
   * - Can contain digits, Chinese characters, letters, underscores (_), periods (.), and hyphens (-).
   * - Must be 2 to 256 characters in length.
   * 
   * @example
   * test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance storage capacity. Unit: GB.
   * 
   * The valid values depend on the instance type. For details, see [Replica set instance specifications](https://help.aliyun.com/document_detail/311410.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The name of the database.
   * > When you invoke this operation to clone a clone instance, you can specify this parameter to clone specific databases. If you do not specify this parameter, all databases are cloned.
   * 
   * @example
   * mongodbtest
   */
  databaseNames?: string;
  /**
   * @remarks
   * Specifies whether to enable cloud disk encryption.
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
   * - **8.0**
   * - **7.0**
   * - **6.0**
   * - **5.0**
   * - **4.4**
   * - **4.2**
   * - **4.0**
   * 
   * > If you call this operation to clone clone instance or restore clone instance from the recycle bin, set this parameter to the same value as that of the source instance.
   * 
   * >Warning: Versions 3.4 and earlier are no longer available for purchase.
   * 
   * This parameter is required.
   * 
   * @example
   * 4.4
   */
  engineVersion?: string;
  /**
   * @remarks
   * The global IP whitelist templates for the instance. Separate multiple templates with commas (,). Duplicate templates are not allowed. (This feature is in canary release.)
   * 
   * @example
   * g-qxieqf40xjst1ngpr3jz
   */
  globalSecurityGroupIds?: string;
  /**
   * @remarks
   * The zone where the hidden node is deployed to implement multi-zone deployment. Valid values:
   * 
   * - **cn-hangzhou-g**: Hangzhou Zone G.
   * - **cn-hangzhou-h**: Hangzhou Zone H.
   * - **cn-hangzhou-i**: Hangzhou Zone I.
   * - **cn-hongkong-b**: Hong Kong (China) Zone B.
   * - **cn-hongkong-c**: Hong Kong (China) Zone C.
   * - **cn-hongkong-d**: Hong Kong (China) Zone D.
   * - **cn-wulanchabu-a**: Ulanqab Zone A.
   * - **cn-wulanchabu-b**: Ulanqab Zone B.
   * - **cn-wulanchabu-c**: Ulanqab Zone C.
   * - **ap-southeast-1a**: Singapore Zone A.
   * - **ap-southeast-1b**: Singapore Zone B.
   * - **ap-southeast-1c**: Singapore Zone C.
   * - **ap-southeast-5a**: Jakarta Zone A.
   * - **ap-southeast-5b**: Jakarta Zone B.
   * - **ap-southeast-5c**: Jakarta Zone C.
   * - **eu-central-1a**: Frankfurt Zone A.
   * - **eu-central-1b**: Frankfurt Zone B.
   * - **eu-central-1c**: Frankfurt Zone C.
   * 
   * > - This parameter is available when the instance uses cloud disks.
   * > - The value of this parameter cannot be the same as the values of **ZoneId** and **SecondaryZoneId**.
   * 
   * @example
   * cn-hangzhou-i
   */
  hiddenZoneId?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * **VPC**: Virtual Private Cloud.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration of the instance. Unit: months.
   * 
   * Valid values: **1** to **9** (integers), **12**, **24**, **36**, and **60**.
   * 
   * > This parameter is available and required when **ChargeType** is set to **PrePaid**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The provisioned performance (IOPS). Valid values: 0 to 50000.
   * 
   * @example
   * 1960
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The **number of read-only nodes** in the replica set instance. Valid values: **0** to **5** (integers). Default value: **0**.
   * 
   * @example
   * 0
   */
  readonlyReplicas?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the region ID.
   * > If you call this operation to clone clone instance or restore clone instance from the recycle bin, set this parameter to the same value as that of the source instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The **number of primary and secondary nodes** in the replica set instance. Valid values:
   * 
   * - **3** (default)
   * - **5**
   * - **7**
   * 
   * >Notice: This parameter is not required for single-node instances.
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
   * The point in time to recover the instance to. You can specify any point in time within the last 7 days. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * > This parameter is required only when you invoke this operation to clone a clone instance to a point in time. You must also configure the **SrcDBInstanceId** parameter.
   * 
   * @example
   * 2022-03-13T12:11:14Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The backup restoration type. Valid values:
   * - 0: recovers the instance to a specified backup set.
   * - 1: recovers the instance to a specified point in time.
   * - 2: recovers a released instance to a specified backup set.
   * - 3: recovers the instance to a specified geo-redundancy backup set.
   * 
   * @example
   * 0
   */
  restoreType?: string;
  /**
   * @remarks
   * The zone where the secondary node is deployed to implement multi-zone deployment. Valid values:
   * 
   * - **cn-hangzhou-g**: Hangzhou Zone G.
   * - **cn-hangzhou-h**: Hangzhou Zone H.
   * - **cn-hangzhou-i**: Hangzhou Zone I.
   * - **cn-hongkong-b**: Hong Kong (China) Zone B.
   * - **cn-hongkong-c**: Hong Kong (China) Zone C.
   * - **cn-hongkong-d**: Hong Kong (China) Zone D.
   * - **cn-wulanchabu-a**: Ulanqab Zone A.
   * - **cn-wulanchabu-b**: Ulanqab Zone B.
   * - **cn-wulanchabu-c**: Ulanqab Zone C.
   * - **ap-southeast-1a**: Singapore Zone A.
   * - **ap-southeast-1b**: Singapore Zone B.
   * - **ap-southeast-1c**: Singapore Zone C.
   * - **ap-southeast-5a**: Jakarta Zone A.
   * - **ap-southeast-5b**: Jakarta Zone B.
   * - **ap-southeast-5c**: Jakarta Zone C.
   * - **eu-central-1a**: Frankfurt Zone A.
   * - **eu-central-1b**: Frankfurt Zone B.
   * - **eu-central-1c**: Frankfurt Zone C.
   * 
   * > - This parameter is available when the instance uses cloud disks.
   * > - The value of this parameter cannot be the same as the values of **ZoneId** and **HiddenZoneId**.
   * 
   * @example
   * cn-hangzhou-h
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The IP whitelist of the instance. Separate multiple IP addresses with commas (,). Duplicate IP addresses are not allowed. The following formats are supported:
   * 
   * - 0.0.0.0/0
   * - IP address format, such as 10.23.12.24.
   * - CIDR block format, such as 10.23.12.0/24. In this example, 24 indicates that the prefix of the CIDR block is 24 bits in length. The prefix length ranges from 1 to 32.
   * 
   * > - Each instance supports a maximum of 1,000 IP addresses or CIDR blocks across all IP whitelist groups.
   * > - 0.0.0.0/0 allows all IP addresses to access the instance database. This is a high-risk setting. Proceed with caution.
   * 
   * @example
   * 192.168.xx.xx,192.168.xx.xx
   */
  securityIPList?: string;
  /**
   * @remarks
   * The source instance ID.
   * > If you call this operation to clone clone instance, you must configure this parameter along with the **BackupId** or **RestoreTime** parameter. If you call this operation to restore clone instance from the recycle bin, you only need to configure this parameter. The **BackupId** and **RestoreTime** parameters are not required.
   * 
   * @example
   * dds-bp1ee12ad351****
   */
  srcDBInstanceId?: string;
  /**
   * @remarks
   * The region where the source instance resides.
   * 
   * > This parameter is required when the restoration type is 2 or 3.
   * 
   * @example
   * 2
   */
  srcRegion?: string;
  /**
   * @remarks
   * The storage engine of the instance. The value is fixed as **WiredTiger**.
   * > - If you call this operation to clone clone instance or restore clone instance from the recycle bin, set this parameter to the same value as that of the source instance.
   * > - For information about the constraints on storage engines and versions, see [Versions and storage engines](https://help.aliyun.com/document_detail/61906.html).
   * 
   * @example
   * WiredTiger
   */
  storageEngine?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * - **cloud_essd1**: PL1 ESSD.
   * - **cloud_essd2**: PL2 ESSD.
   * - **cloud_essd3**: PL3 ESSD.
   * - **cloud_auto**: ESSD AutoPL disk.
   * - **local_ssd**: local SSD.
   * 
   * > - For single-node instances, if you specify cloud_essd1, the instance uses a cloud_essd disk.
   * > - ESSD AutoPL disks are currently available only on the China site.
   * > - For instances running version 4.4 or later, the default value is **cloud_essd1**.
   * > - For instances running version 4.2 or earlier, the default value is **local_ssd**.
   * 
   * @example
   * cloud_essd1
   */
  storageType?: string;
  /**
   * @remarks
   * The user-defined tags.
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
   * The zone ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the zone ID.
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

