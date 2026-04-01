// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneDBInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the automatic payment feature for the new instance. Valid values:
   * 
   * 1.  **true**: enables the feature. You must make sure that your account balance is sufficient.
   * 2.  **false**: disables the feature. An unpaid order is generated.
   * 
   * >  Default value: true. If your account balance is insufficient, you can set the AutoPay parameter to false to generate an unpaid order. Then, you can log on to the ApsaraDB RDS console to complete the payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The backup set ID.
   * 
   * You can call the DescribeBackups operation to query the backup set ID.
   * 
   * >  You must specify at least one of the **BackupId** or **RestoreTime** parameters.
   * 
   * @example
   * 902****
   */
  backupId?: string;
  /**
   * @remarks
   * The type of backup that is used to restore the data of the original instance. Valid values:
   * 
   * *   **FullBackup**
   * *   **IncrementalBackup**
   * 
   * @example
   * FullBackup
   */
  backupType?: string;
  /**
   * @remarks
   * A reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * false
   */
  bpeEnabled?: string;
  /**
   * @remarks
   * An invalid parameter. You do not need to specify this parameter.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The RDS edition of the instance. Valid values:
   * 
   * *   **Basic**: RDS Basic Edition.
   * *   **HighAvailability**: RDS High-availability Edition.
   * *   **AlwaysOn**: RDS Cluster Edition for ApsaraDB RDS for SQL Server.
   * *   **cluster**: RDS Cluster Edition for ApsaraDB RDS for MySQL.
   * *   **Finance**: RDS Enterprise Edition. This edition is available only on the China site (aliyun.com).
   * 
   * **Serverless instances**
   * 
   * *   **serverless_basic**: RDS Basic Edition. This edition is available only for serverless instances that run MySQL and PostgreSQL.
   * *   **serverless_standard**: RDS High-availability Edition for ApsaraDB RDS for MySQL
   * *   **serverless_ha**: RDS High-availability Edition for ApsaraDB RDS for SQL Server
   * 
   * >  You do not need to configure this parameter. The value of this parameter is the same as that of the original instance.
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
   * The instance type of the new instance. For information, see [Primary ApsaraDB RDS instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * > By default, the new instance uses the same instance type as the original primary instance.
   * 
   * @example
   * mysql.n1.micro.1
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance name. The value must be 2 to 255 characters in length The value can contain letters, digits, underscores (_), and hyphens (-), and must start with a letter.
   * 
   * >  The value cannot start with http:// or https://.
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
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The storage capacity of the new instance. Unit: GB. You can increase the storage capacity in increments of 5 GB. For more information, see [Primary ApsaraDB RDS instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * > By default, the new instance has the same storage capacity as the original primary instance.
   * 
   * @example
   * 1000
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The storage type of the new instance. Valid values:
   * 
   * *   **general_essd** (recommend): general Enterprise SSD (ESSD)
   * *   **local_ssd**: local SSD
   * *   **cloud_ssd**: standard SSD
   * *   **cloud_essd**: performance level 1 (PL1) ESSD
   * *   **cloud_essd2**: PL2 ESSD
   * *   **cloud_essd3**: PL3 ESSD
   * 
   * >  Serverless instances support only PL1 ESSDs and general ESSDs.
   * 
   * @example
   * cloud_essd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The name of the database. If you specify more than one database, the value is in the following format: `Original database name 1,Original database name 2`.
   * 
   * @example
   * test1,test2
   */
  dbNames?: string;
  /**
   * @remarks
   * The ID of the dedicated cluster.
   * 
   * @example
   * dhg-7a9xxxxxxxx
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable the release protection feature for the new instance. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The network type of the new instance. Valid values:
   * 
   * *   **VPC**
   * *   **Classic**
   * 
   * > By default, the new instance has the same network type as the original primary instance.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  ioAccelerationEnabled?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * *   **Serverless**: serverless. This value is not supported for instances that run MariaDB. For more information, see [Overview of serverless ApsaraDB RDS for MySQL instances](https://help.aliyun.com/document_detail/411291.html), [Overview of serverless ApsaraDB RDS for SQL Server instances](https://help.aliyun.com/document_detail/604344.html), and [Overview of serverless ApsaraDB RDS for PostgreSQL instances](https://help.aliyun.com/document_detail/607742.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit that is used to calculate the billing cycle of the new instance. This parameter takes effect only when you select the subscription billing method for the new instance. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * 
   * >  If you set the PayType parameter to **Prepaid**, you must specify this parameter.
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The internal IP address of the new instance, which must be within the CIDR block supported by the specified vSwitch. The system automatically assigns an internal IP address based on the values of the **VPCId** and **VSwitchId** parameters.
   * 
   * @example
   * 172.XX.XXX.69
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
   * Specifies whether to restore only the databases and tables that you specify. The value **1** specifies to restore only the specified databases and tables. If you do not want to restore only the specified databases or tables, you do not need to specify this parameter.
   * 
   * @example
   * 1
   */
  restoreTable?: string;
  /**
   * @remarks
   * The point in time to which you want to restore data. The point in time must fall within the specified backup retention period. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > You must specify at least one of the **BackupId** and **RestoreTime** parameters.
   * 
   * @example
   * 2011-06-11T16:00:00Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The specifications for the serverless instance. You must specify this parameter only when you restore data to a new serverless instance.
   * 
   * >  This parameter is available only on the China site (aliyun.com).
   */
  serverlessConfigShrink?: string;
  /**
   * @remarks
   * The information about the database and table that you want to restore. The value is in the following format: `[{"type":"db","name":"Name of Database 1","newname":"New name of Database 1","tables":[{"type":"table","name":"Name of Table 1 in Database 1","newname":"New name of Table 1"},{"type":"table","name":"Name of Table 2 in Database 1","newname":"New name of Table 2"}]},{"type":"db","name":"Name of Database 2","newname":"New name of Database 2","tables":[{"type":"table","name":"Name of Table 1 in Database 2","newname":"New name of Table 1"},{"type":"table","name":"Name of Table 2 in Database 2","newname":"New name of Table 2"}]}]`
   * 
   * @example
   * [{"type":"db","name":"testdb1","newname":"testdb1_new","tables":[{"type":"table","name":"testdb1table1","newname":"testdb1table1_new"}]}]
   */
  tableMeta?: string;
  /**
   * @remarks
   * The subscription duration of the new instance. Valid values:
   * 
   * *   If you set the **Period** parameter to **Year**, the value of the UsedTime parameter ranges from **1 to 3**.
   * *   If you set the **Period** parameter to **Month**, the value of the UsedTime parameter ranges from **1 to 9**.
   * 
   * > If you set the PayType parameter to **Prepaid**, you must also specify this parameter.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * >  Make sure that the VPC belongs to the required region.
   * 
   * @example
   * vpc-uf6f7l4fg90xxxxxxxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch. The vSwitch must belong to the zone that is specified by **ZoneId**.
   * 
   * *   If you set **InstanceNetworkType** to **VPC**, you must also specify this parameter.
   * *   If you specify the **ZoneSlaveId1** parameter, you must specify the IDs of two vSwitches for this parameter and separate the IDs with a comma (,).
   * 
   * @example
   * vsw-uf6adz52c2pxxxxxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the primary instance. You can call the DescribeRegions operation to query the zone ID.
   * 
   * >  Set this value to the zone ID of the original instance.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone ID of the secondary instance. If you set the ZoneIdSlave1 parameter and the **ZoneId** parameter to the same value, the single-zone deployment method is used. If you set the ZoneIdSlave1 parameter and the **ZoneId** parameter to different values, the multi-zone deployment method is used.
   * 
   * @example
   * cn-hangzhou-c
   */
  zoneIdSlave1?: string;
  /**
   * @remarks
   * The zone ID of the logger instance. If you set the ZoneIdSlave2 parameter to the same value as the **ZoneId** parameter, the single-zone deployment method is used. If you set the ZoneIdSlave2 parameter to a different value from the **ZoneId** parameter, the multi-zone deployment method is used.
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
      usedTime: 'number',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      zoneIdSlave1: 'string',
      zoneIdSlave2: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

