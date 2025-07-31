// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateDBInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * > **N** specifies the serial number of the tag. For example, **Tag.1.Key** specifies the key of the first tag and **Tag.2.Key** specifies the key of the second tag.
   * 
   * @example
   * testdatabase
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * > **N** specifies the serial number of the tag. For example, **Tag.1.Value** specifies the value of the first tag and **Tag.2.Value** specifies the value of the second tag.
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
   * *   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * *   Special characters include ! # $ % ^ & \\* ( ) _ + - =
   * *   The password of the account must be 8 to 32 characters in length.
   * 
   * @example
   * 123456Aa
   */
  accountPassword?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Default value: false. Valid values:
   * 
   * *   **true**: The instance is automatically renewed.
   * *   **false**: The instance is manually renewed.
   * 
   * > This parameter is valid and optional when the **ChargeType** parameter is set to **PrePaid**.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The ID of the backup set. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/62172.html) operation to query the backup set ID.
   * 
   * > When you call this operation to clone an instance based on the backup set, this parameter is required. The **SrcDBInstanceId** parameter is also required.
   * 
   * @example
   * 32994****
   */
  backupId?: string;
  /**
   * @remarks
   * The business information. This is an additional parameter.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PostPaid**: pay-as-you-go. This is the default value.
   * *   **PrePaid**: subscription.
   * 
   * > If you set this parameter to **PrePaid**, you must also specify the **Period** parameter.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the dedicated cluster to which the instance belongs.
   * 
   * @example
   * dhg-2x78****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to use coupons. Default value: null. Valid values:
   * - **default** or **null**: uses coupons.
   * - **youhuiquan_promotion_option_id_for_blank**: does not use coupons.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The instance type. You can also call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/149719.html) operation to query the instance type.
   * 
   * This parameter is required.
   * 
   * @example
   * dds.mongo.standard
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The name of the instance. The name of the instance must meet the following requirements:
   * 
   * *   The name must start with a letter.
   * *   The name can contain digits, letters, underscores (_), and hyphens (-).
   * *   The name must be 2 to 256 characters in length.
   * 
   * @example
   * test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The storage capacity of the instance. Unit: GB.
   * 
   * The values that can be specified for this parameter vary based on the instance types. For more information, see [Replica set instance types](https://help.aliyun.com/document_detail/311410.html).
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
   * 
   * > When you call this operation to clone an instance, you can set this parameter to specify the database to clone. Otherwise, all databases of the instance are cloned.
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
   * The ID of the custom key.
   * 
   * @example
   * 2axxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The database engine of the instance. Set the value to **MongoDB**.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * The version of the database engine. Valid values:
   * 
   * *   **6.0**
   * *   **5.0**
   * *   **4.4**
   * *   **4.2**
   * *   **4.0**
   * 
   * > When you call this operation to clone an instance or restore an instance from the recycle bin, set the value of this parameter to the engine version of the source instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 4.4
   */
  engineVersion?: string;
  /**
   * @remarks
   * The global IP address whitelist template name of the instance. Multiple IP address whitelist template names are separated by commas (,) and each template name must be unique. (The template feature is available only in canary release.)
   * 
   * @example
   * g-qxieqf40xjst1ngp****
   */
  globalSecurityGroupIds?: string;
  /**
   * @remarks
   * The zone where the hidden node resides for multi-zone deployment. Valid values:
   * 
   * *   **cn-hangzhou-g**: Hangzhou Zone G.
   * *   **cn-hangzhou-h**: Hangzhou Zone H.
   * *   **cn-hangzhou-i**: Hangzhou Zone I.
   * *   **cn-hongkong-b**: Hongkong Zone B.
   * *   **cn-hongkong-c**: Hongkong Zone C.
   * *   **cn-hongkong-d**: Hongkong Zone D.
   * *   **cn-wulanchabu-a**: Ulanqab Zone A.
   * *   **cn-wulanchabu-b**: Ulanqab Zone B.
   * *   **cn-wulanchabu-c**: Ulanqab Zone C.
   * *   **ap-southeast-1a**: Singapore Zone A.
   * *   **ap-southeast-1b**: Singapore Zone B.
   * *   **ap-southeast-1c**: Singapore Zone C.
   * *   **ap-southeast-5a**: Jakarta Zone A.
   * *   **ap-southeast-5b**: Jakarta Zone B.
   * *   **ap-southeast-5c**: Jakarta Zone C.
   * *   **eu-central-1a**: Frankfurt Zone A.
   * *   **eu-central-1b**: Frankfurt Zone B.
   * *   **eu-central-1c**: Frankfurt Zone C.
   * 
   * >  *   This parameter is valid and required when the **EngineVersion** parameter is set to **4.4** or **5.0**.
   * >  *   The value of this parameter cannot be the same as the value of the **ZoneId** or **SecondaryZoneId** parameter.
   * 
   * @example
   * cn-hangzhou-i
   */
  hiddenZoneId?: string;
  /**
   * @remarks
   * The network type of the instance. Valid value:
   * 
   * **VPC**: Virtual Private Cloud (VPC)
   * 
   * @example
   * VPC
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription period of the instance. Unit: months.
   * 
   * Valid values: **1** to **9**, **12**, **24**, **36**, and **60**.
   * 
   * > When you set the **ChargeType** parameter to **PrePaid**, this parameter is valid and required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The provisioned IOPS. Valid values: 0 to 50000.
   * 
   * @example
   * 1960
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The number of **read-only nodes** in the replica set instance. Default value: **0**. Valid values: **0** to **5**.
   * 
   * @example
   * 0
   */
  readonlyReplicas?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of **nodes** in the replica set instance. Default value: 3. Valid values:
   * 
   * *   **3**
   * *   **5**
   * *   **7**
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which the instance is restored, which must be within seven days. The time is displayed in the *yyyy-MM-dd*T*HH:mm:ss*Z format (UTC time).
   * 
   * > When you call this operation to restore an instance to the specified time, this parameter is required. The **SrcDBInstanceId** parameter is also required.
   * 
   * @example
   * 2022-03-13T12:11:14Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The backup restore type of the instance.
   * - 0: restore an instance to the specified backup set.
   * - 1:  restore an instance to the specified time.
   * - 2: restore an  released instance to the specified backup set.
   * - 3：restore an instance to the specified cross-regional backup set.
   * 
   * @example
   * 0
   */
  restoreType?: string;
  /**
   * @remarks
   * The zone where the secondary node resides for multi-zone deployment. Valid values:
   * 
   * *   **cn-hangzhou-g**: Hangzhou Zone G.
   * *   **cn-hangzhou-h**: Hangzhou Zone H.
   * *   **cn-hangzhou-i**: Hangzhou Zone I.
   * *   **cn-hongkong-b**: Hongkong Zone B.
   * *   **cn-hongkong-c**: Hongkong Zone C.
   * *   **cn-hongkong-d**: Hongkong Zone D.
   * *   **cn-wulanchabu-a**: Ulanqab Zone A.
   * *   **cn-wulanchabu-b**: Ulanqab Zone B.
   * *   **cn-wulanchabu-c**: Ulanqab Zone C.
   * *   **ap-southeast-1a**: Singapore Zone A.
   * *   **ap-southeast-1b**: Singapore Zone B.
   * *   **ap-southeast-1c**: Singapore Zone C.
   * *   **ap-southeast-5a**: Jakarta Zone A.
   * *   **ap-southeast-5b**: Jakarta Zone B.
   * *   **ap-southeast-5c**: Jakarta Zone C.
   * *   **eu-central-1a**: Frankfurt Zone A.
   * *   **eu-central-1b**: Frankfurt Zone B.
   * *   **eu-central-1c**: Frankfurt Zone C.
   * 
   * >  *   This parameter is valid and required when the **EngineVersion** parameter is set to **4.4** or **5.0**.
   * >  *   The value of this parameter cannot be the same as the value of the **ZoneId** or **HiddenZoneId** parameter.
   * 
   * @example
   * cn-hangzhou-h
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The IP addresses in an IP address whitelist. Multiple IP addresses are separated by commas (,), and each IP address in the IP address whitelist must be unique. The following types of values are supported:
   * 
   * *   0.0.0.0/0
   * *   IP addresses, such as 10.23.12.24.
   * *   Classless Inter-Domain Routing (CIDR) blocks, such as 10.23.12.0/24. In this case, /24 indicates that the prefix of each IP address is 24-bit long. You can replace 24 with a value within the range of 1 to 32.
   * 
   * > *   A maximum of 1,000 IP addresses or CIDR blocks can be configured for each instance.
   * > *   If you enter 0.0.0.0/0, all IP addresses can access the instance. This may introduce security risks to the instance. Proceed with caution.
   * 
   * @example
   * 192.168.xx.xx,192.168.xx.xx
   */
  securityIPList?: string;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * > When you call this operation to clone an instance, this parameter is required. The **BackupId** or **RestoreTime** parameter is also required. When you call this operation to restore an instance from the recycle bin, this parameter is required. The **BackupId** or **RestoreTime** parameter is not required.
   * 
   * @example
   * dds-bp1ee12ad351****
   */
  srcDBInstanceId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * > -  This parameter is required when restore type is set to 2 or 3.
   * 
   * @example
   * 2
   */
  srcRegion?: string;
  /**
   * @remarks
   * The storage engine of the instance. Set the value to **WiredTiger**.
   * 
   * > * If you call this operation to clone an instance or restore an instance from the recycle bin, set this parameter to the storage engine of the source instance.
   * > * For more information about the limits on database versions and storage engines of an instance, see [MongoDB versions and storage engines](https://help.aliyun.com/document_detail/61906.html).
   * 
   * @example
   * WiredTiger
   */
  storageEngine?: string;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * *   **cloud_essd1** :ESSD PL1.
   * *   **cloud_essd2**: ESSD PL2.
   * *   **cloud_essd3**: ESSD PL3.
   * *   **local_ssd**: local SSD.
   * 
   * @example
   * cloud_essd1
   */
  storageType?: string;
  /**
   * @remarks
   * The custom tags added to the instance.
   */
  tag?: CreateDBInstanceRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch to which the instance is connected.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent zone list.
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

