// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneDBInstanceShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. Specify this parameter to attach a tag to the instance.
   * 
   * * If the specified tag key already exists, the tag is directly attached to the instance. You can call the ListTagResources operation to query existing tags.
   * * If the specified tag key does not exist, the tag key is created and then attached to the instance.
   * * Empty strings are not allowed.
   * * This parameter must be used together with **Tag.Value**.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value that corresponds to the tag key. Specify this parameter to attach a tag to the instance.
   * 
   * * If the specified tag value already exists for the corresponding tag key, the tag value is directly attached to the instance. You can call the ListTagResources operation to query existing tags.
   * * If the specified tag value does not exist for the corresponding tag key, the tag value is created and then attached to the instance.
   * * This parameter must be used together with **Tag.Key**.
   * 
   * @example
   * testvalue1
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

export class CloneDBInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * 1. **true**: enables automatic payment. Make sure that your account balance is sufficient.
   * 
   * 1. **false**: generates an order without charging the account.
   * 
   * 
   * 
   * 
   * > Default value: true. If your payment method has insufficient balance, set AutoPay to false. In this case, an unpaid order is generated. You can log on to the ApsaraDB RDS console to pay for the order.
   * >
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The backup set ID.
   * 
   * You can call the DescribeBackups operation to query the backup set list.
   * 
   * > You must specify at least one of **BackupId** and **RestoreTime**.
   * 
   * @example
   * 902****
   */
  backupId?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * * **FullBackup**: full backup.
   * * **IncrementalBackup**: incremental backup.
   * 
   * @example
   * FullBackup
   */
  backupType?: string;
  bpeEnabled?: string;
  /**
   * @remarks
   * Specifies whether to enable the I/O burst feature for the Premium ESSD cloud disk. Valid values:
   * * **true**: enables the feature.
   * * **false**: disables the feature.
   * > For more information about the I/O burst feature, see [What is Premium ESSD?](https://help.aliyun.com/document_detail/2340501.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * - **Basic**: Basic Edition.
   * - **HighAvailability**: High-availability Edition.
   * - **AlwaysOn**: Cluster Edition (SQL Server).
   * - **cluster**: Cluster Edition (MySQL).
   * - **Finance**: Enterprise Edition. This value is supported only on the China site (aliyun.com).
   * 
   * **Serverless instances**
   * - **serverless_basic**: Serverless Basic Edition. This value is valid only for ApsaraDB RDS for MySQL and ApsaraDB RDS for PostgreSQL instances.
   * - **serverless_standard**: MySQL Serverless High-availability Edition.
   * - **serverless_ha**: SQL Server Serverless High-availability Edition.
   * > You do not need to specify this parameter. The clone instance uses the same edition as the source instance.
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88**********
   */
  clientToken?: string;
  customExtraInfo?: string;
  /**
   * @remarks
   * The instance type. For more information, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * > Default value: the instance type of the source instance.
   * 
   * @example
   * mysql.n1.micro.1
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The name of the instance. The name must be 2 to 255 characters in length. It must start with a letter or a Chinese character and can contain digits, Chinese characters, letters, underscores (_), and hyphens (-).
   * > The name cannot start with http:// or https://.
   * 
   * @example
   * testInstance
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Instance storage capacity of the instance. Unit: GB. The value increases in increments of 5 GB. For more information, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
   * > Default value: instance storage capacity of the source instance.
   * 
   * @example
   * 1000
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The instance storage type. Valid values:
   * 
   * * **general_essd**: Premium ESSD (recommended).
   * * **local_ssd**: local SSD.
   * * **cloud_ssd**: standard SSD.
   * * **cloud_essd**: PL1 ESSD.
   * * **cloud_essd2**: PL2 ESSD.
   * * **cloud_essd3**: PL3 ESSD.
   * 
   * > Serverless instances support only PL1 ESSDs and Premium ESSDs.
   * 
   * @example
   * general_essd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The database names in the following format: `OriginalDatabaseName1,OriginalDatabaseName2`.
   * 
   * @example
   * test1,test2
   */
  dbNames?: string;
  /**
   * @remarks
   * The dedicated cluster ID.
   * 
   * @example
   * dhg-7a9****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable the release protection feature. Valid values:
   * * **true**: enables the feature.
   * * **false** (default): disables the feature.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * * **VPC**: virtual private cloud (VPC).
   * * **Classic**: classic network.
   * 
   * > Default value: the network type of the source instance.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * Specifies whether to enable the Buffer Pool Extension (BPE) feature for the Premium ESSD cloud disk. Valid values:
   * 
   *  - **1**: enables the feature.
   *  - **0**: disables the feature.
   * 
   * > For more information about the BPE feature, see [Buffer Pool Extension (BPE)](https://help.aliyun.com/document_detail/2527067.html).
   * 
   * @example
   * 0
   */
  ioAccelerationEnabled?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * * **Postpaid**: pay-as-you-go.
   * * **Prepaid**: subscription.
   * * **Serverless**: serverless. This value is not supported for ApsaraDB RDS for MariaDB instances. For more information, see [Overview of MySQL Serverless instances](https://help.aliyun.com/document_detail/411291.html), [Overview of SQL Server Serverless instances](https://help.aliyun.com/document_detail/604344.html), and [Overview of PostgreSQL Serverless instances](https://help.aliyun.com/document_detail/607742.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * * **Year**
   * * **Month**
   * 
   * > This parameter is required if PayType is set to **Prepaid**.
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The internal IP address of the new instance. The IP address must be within the IP address range of the specified vSwitch. The system automatically assigns an internal IP address based on the values of **VPCId** and **VSwitchId**.
   * 
   * @example
   * 172.XX.XX.69
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to restore individual databases and tables. Set this parameter to **true** to restore individual databases and tables. Otherwise, leave this parameter empty.
   * 
   * @example
   * true
   */
  restoreTable?: string;
  /**
   * @remarks
   * Any point in time within the backup retention period. Specify the time in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * > You must specify at least one of **BackupId** and **RestoreTime**.
   * 
   * @example
   * 2011-06-11T16:00:00Z
   */
  restoreTime?: string;
  serverlessConfigShrink?: string;
  /**
   * @remarks
   * The information about the databases and tables that you want to restore. Format:
   * ```[{"type":"db","name":"Database1Name","newname":"NewDatabase1Name","tables":[{"type":"table","name":"Table1NameInDatabase1","newname":"NewTable1Name"},{"type":"table","name":"Table2NameInDatabase1","newname":"NewTable2Name"}]},{"type":"db","name":"Database2Name","newname":"NewDatabase2Name","tables":[{"type":"table","name":"Table1NameInDatabase2","newname":"NewTable1Name"},{"type":"table","name":"Table2NameInDatabase2","newname":"NewTable2Name"}]}]```
   * 
   * @example
   * [{"type":"db","name":"testdb1","newname":"testdb1_new","tables":[{"type":"table","name":"testdb1table1","newname":"testdb1table1_new"}]}]
   */
  tableMeta?: string;
  /**
   * @remarks
   * The tag list.
   */
  tag?: CloneDBInstanceShrinkRequestTag[];
  /**
   * @remarks
   * The subscription duration. Valid values:
   * * If **Period** is set to **Year**, the value of UsedTime ranges from **1 to 3**.
   * * If **Period** is set to **Month**, the value of UsedTime ranges from **1 to 9**.
   * 
   * > This parameter is required if PayType is set to **Prepaid**.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
   * The VPC ID.
   * > Make sure that the VPC belongs to the corresponding region.
   * 
   * @example
   * vpc-uf6f7l4fg90****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID. The zone of the vSwitch must correspond to the active zone ID specified in **ZoneId**.
   * 
   * - The network type (**InstanceNetworkType**) must be set to **VPC**.
   * - If you specify **ZoneSlaveId1** (secondary zone ID), you must specify two vSwitch IDs separated by a comma (,).
   * 
   * @example
   * vsw-uf6adz52c2p****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The primary zone ID. You can call the DescribeRegions operation to query the zone ID.
   * 
   * > Default value: the zone of the source instance.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone ID of the secondary node. If this parameter is set to the same value as **ZoneId**, the single-zone deployment method is used. If this parameter is set to a different value from **ZoneId**, the multi-zone deployment method is used.
   * 
   * @example
   * cn-hangzhou-c
   */
  zoneIdSlave1?: string;
  /**
   * @remarks
   * <props="intl">The zone ID of the logger node. If this parameter is set to the same value as **ZoneId**, the single-zone deployment method is used. If this parameter is set to a different value from **ZoneId**, the multi-zone deployment method is used.
   * 
   * <props="china">The zone ID of the secondary node or logger node. If this parameter is set to the same value as **ZoneId**, the single-zone deployment method is used. If this parameter is set to a different value from **ZoneId**, the multi-zone deployment method is used.
   * 
   * @example
   * cn-hangzhou-d
   */
  zoneIdSlave2?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      backupId: 'BackupId',
      backupType: 'BackupType',
      bpeEnabled: 'BpeEnabled',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      clientToken: 'ClientToken',
      customExtraInfo: 'CustomExtraInfo',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      dbNames: 'DbNames',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      deletionProtection: 'DeletionProtection',
      instanceNetworkType: 'InstanceNetworkType',
      ioAccelerationEnabled: 'IoAccelerationEnabled',
      payType: 'PayType',
      period: 'Period',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTable: 'RestoreTable',
      restoreTime: 'RestoreTime',
      serverlessConfigShrink: 'ServerlessConfig',
      tableMeta: 'TableMeta',
      tag: 'Tag',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      zoneIdSlave1: 'ZoneIdSlave1',
      zoneIdSlave2: 'ZoneIdSlave2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      backupId: 'string',
      backupType: 'string',
      bpeEnabled: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      clientToken: 'string',
      customExtraInfo: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      dbNames: 'string',
      dedicatedHostGroupId: 'string',
      deletionProtection: 'boolean',
      instanceNetworkType: 'string',
      ioAccelerationEnabled: 'string',
      payType: 'string',
      period: 'string',
      privateIpAddress: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
      restoreTable: 'string',
      restoreTime: 'string',
      serverlessConfigShrink: 'string',
      tableMeta: 'string',
      tag: { 'type': 'array', 'itemType': CloneDBInstanceShrinkRequestTag },
      usedTime: 'number',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      zoneIdSlave1: 'string',
      zoneIdSlave2: 'string',
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

