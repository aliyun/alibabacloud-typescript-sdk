// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * > - **N** specifies the sequence number of the tag. For example, **Tag.1.Key** specifies the key of the first tag, and **Tag.2.Key** specifies the key of the second tag.
   * 
   * @example
   * testdatabase
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * > **N** specifies the sequence number of the tag. For example, **Tag.1.Value** specifies the value of the first tag, and **Tag.2.Value** specifies the value of the second tag.
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
   * - It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * - Special characters include !@#$%^&*()_+-=.
   * - It must be 8 to 32 characters in length.
   * 
   * > For more information about how to resolve the issue where database connection fails due to special characters in the account password in the connection string, see [What do I do if the connection to an ApsaraDB for MongoDB instance fails because the username or password in the connection string contains special characters?](https://help.aliyun.com/document_detail/471568.html).
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
   * - **false**: disables auto-renewal. In this case, you must manually renew the instance. This is the default value.
   * 
   * > This parameter is valid and optional only when the **ChargeType** parameter is set to **PrePaid**.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The ID of the backup set. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/62172.html) operation to query the backup set ID.
   * > This parameter is required only when you call this operation to clone an instance from a backup set. You must also specify the **SrcDBInstanceId** parameter.
   * 
   * @example
   * 32994****
   */
  backupId?: string;
  /**
   * @remarks
   * The additional parameter for business information.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **PostPaid**: pay-as-you-go. This is the default value.
   * - **PrePaid**: subscription.
   * 
   * > When this parameter is set to **PrePaid**, you must also specify the **Period** parameter.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. The value must be unique across different requests and can be up to 64 ASCII characters in length. The value cannot contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * - **default** or **null**: uses a coupon. This is the default value.
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
   * The name of the instance. The name must meet the following requirements:
   * 
   * - It must start with a letter or a Chinese character.
   * - It can contain digits, letters, Chinese characters, underscores (_), periods (.), and hyphens (-).
   * - It must be 2 to 256 characters in length.
   * 
   * @example
   * test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance storage. Unit: GB.
   * 
   * The valid values are subject to the instance type. For details, see [Replica set instance types](https://help.aliyun.com/document_detail/311410.html).
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
   * > When you call this operation to clone an instance, you can specify this parameter to specify the databases to be cloned. If you do not specify this parameter, all databases of the instance are cloned.
   * 
   * @example
   * mongodbtest
   */
  databaseNames?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * - true: performs a dry run without calling the operation. The system checks items such as request parameters, request format, business limits, and inventory. If the check fails, the corresponding error is returned. If the check succeeds, the DryRunOperation error code is returned.
   * - false (default): sends a normal request. After the check succeeds, the operation is directly executed.
   */
  dryRun?: boolean;
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
   * The ID of the custom key.
   * 
   * @example
   * 2axxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The database engine. Set the value to **MongoDB**.
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
   * > When you call this operation to clone clone instance or restore clone instance from the recycle bin, the value of this parameter must be the same as that of the source instance.
   * 
   * >Warning: Versions 3.4 and earlier are no longer available for sale.
   * 
   * This parameter is required.
   * 
   * @example
   * 4.4
   */
  engineVersion?: string;
  /**
   * @remarks
   * The global IP address whitelist templates of the instance. Separate multiple templates with commas (,). Duplicate templates are not allowed. This feature is in canary release.
   * 
   * @example
   * g-qxieqf40xjst1ngpr3jz
   */
  globalSecurityGroupIds?: string;
  /**
   * @remarks
   * The zone where the hidden node resides. You can specify this parameter for multi-zone deployment. Valid values:
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
   * > - This parameter is active only when the instance uses cloud disks.
   * > - The value of this parameter cannot be the same as the value of the **ZoneId** or **SecondaryZoneId** parameter.
   * 
   * @example
   * cn-hangzhou-i
   */
  hiddenZoneId?: string;
  /**
   * @remarks
   * The end time of the maintenance window.
   * 
   * @example
   * 22:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window.
   * 
   * @example
   * 18:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * **VPC**: Virtual Private Cloud (VPC).
   * 
   * @example
   * VPC
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration of the instance. Unit: month.
   * 
   * Valid values: **1** to **9** (integers), **12**, **24**, **36**, and **60**.
   * 
   * > This parameter is required and valid only when the **ChargeType** parameter is set to **PrePaid**.
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
   * The number of **read-only nodes** in the replica set instance. Valid values: **0** to **5** (integers). Default value: **0**.
   * 
   * @example
   * 0
   */
  readonlyReplicas?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the region ID.
   * > When you call this operation to clone clone instance or restore clone instance from the recycle bin, the value of this parameter must be the same as that of the source instance.
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
   * - **5**
   * - **7**
   * 
   * >Notice: You do not need to specify this parameter for a standalone instance.
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
   * The point in time to which you want to restore the instance. You can specify any point in time within the last seven days. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * > This parameter is required only when you call this operation to clone an instance to a specific point in time. You must also specify the **SrcDBInstanceId** parameter.
   * 
   * @example
   * 2022-03-13T12:11:14Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The backup restoration type of the instance. Valid values:
   * - 0: restores the instance to a specified backup set
   * - 1: restores the instance to a specified point in time
   * - 2: restores a released instance to a specified backup set
   * - 3: restores the instance to a specified geo-redundancy backup set
   * 
   * @example
   * 0
   */
  restoreType?: string;
  /**
   * @remarks
   * The zone where the secondary node resides. You can specify this parameter for multi-zone deployment. Valid values:
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
   * > - This parameter is active only when the instance uses cloud disks.
   * > - The value of this parameter cannot be the same as the value of the **ZoneId** or **HiddenZoneId** parameter.
   * 
   * @example
   * cn-hangzhou-h
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The IP address whitelist of the instance. Separate multiple IP addresses with commas (,). Duplicate IP addresses are not allowed. The following three formats are supported:
   * 
   * - 0.0.0.0/0
   * - IP address format, such as 10.23.12.24.
   * - CIDR format, such as 10.23.12.0/24. 24 indicates the length of the prefix in the CIDR block, and the valid range is 1 to 32.
   * 
   * > - You can add up to 1,000 IP addresses or CIDR blocks to each instance. The total number of IP addresses or CIDR blocks in all IP address whitelist groups cannot exceed 1,000.
   * > - 0.0.0.0/0 indicates that all IP addresses can access the databases of the instance. This is a high-risk setting. Proceed with caution.
   * 
   * @example
   * 192.168.xx.xx,192.168.xx.xx
   */
  securityIPList?: string;
  /**
   * @remarks
   * The source instance ID.
   * > When you call this operation to clone an instance, you must specify this parameter and the **BackupId** or **RestoreTime** parameter. When you call this operation to restore a revoked instance, you only need to specify this parameter, and you do not need to specify the **BackupId** or **RestoreTime** parameter.
   * 
   * @example
   * dds-bp1ee12ad351****
   */
  srcDBInstanceId?: string;
  /**
   * @remarks
   * The region where the source instance resides.
   * 
   * >- This parameter is required when the backup restoration type is 2 or 3.
   * 
   * @example
   * 2
   */
  srcRegion?: string;
  /**
   * @remarks
   * The storage engine of the instance. Set the value to **WiredTiger**.
   * > - When you call this operation to clone clone instance or restore clone instance from the recycle bin, the value of this parameter must be the same as that of the source instance.
   * > - For more information about the constraints on the selection of storage engines and versions, see [Versions and storage engines](https://help.aliyun.com/document_detail/61906.html).
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
   * - **cloud_auto**: ESSD AutoPL cloud disk.
   * - **local_ssd**: local SSD.
   * 
   * > - If you specify cloud_essd1 when you purchase a standalone instance, the instance actually uses a cloud_essd cloud disk.
   * > - ESSD AutoPL cloud disks are supported only on the Alibaba Cloud China site.
   * > - The default value for instances of version 4.4 and later is **cloud_essd1**.
   * > - The default value for instances of version 4.2 and earlier is **local_ssd**.
   * 
   * @example
   * cloud_essd1
   */
  storageType?: string;
  /**
   * @remarks
   * Specifies whether to enable TTL index cleanup for the restored instance. A value of true or an empty value indicates that cleanup is enabled.
   */
  TTLEnabled?: boolean;
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
      dryRun: 'DryRun',
      encrypted: 'Encrypted',
      encryptionKey: 'EncryptionKey',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      globalSecurityGroupIds: 'GlobalSecurityGroupIds',
      hiddenZoneId: 'HiddenZoneId',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
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
      TTLEnabled: 'TTLEnabled',
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
      dryRun: 'boolean',
      encrypted: 'boolean',
      encryptionKey: 'string',
      engine: 'string',
      engineVersion: 'string',
      globalSecurityGroupIds: 'string',
      hiddenZoneId: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
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
      TTLEnabled: 'boolean',
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

