// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneDBInstanceShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify this parameter to bind a tag to the instance.
   * 
   * * If the specified tag key already exists, the tag key is directly bound to the instance. You can call the ListTagResources operation to query the created tags.
   * * If the specified tag key does not exist, the tag key is created and then bound to the instance.
   * * Empty strings are not allowed.
   * * This parameter must be used together with the **Tag.Value** parameter and cannot be used alone.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value that corresponds to the tag key. You can specify this parameter to bind a tag to the instance.
   * 
   * * If the specified tag value already exists for the corresponding tag key, the tag value is directly bound to the instance. You can call the ListTagResources operation to query the created tags.
   * * If the specified tag value does not exist for the corresponding tag key, the tag value is created and then bound to the instance.
   * * This parameter must be used together with the **Tag.Key** parameter and cannot be used alone.
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
   * 1. **false**: generates an order but does not deduct fees.
   * 
   * > Default value: true. If your payment method has an insufficient balance, you can set the AutoPay parameter to false. In this case, an unpaid order is generated, and you can log on to the ApsaraDB RDS console to complete the payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * You can call the DescribeBackups operation to query the backup sets.
   * 
   * >You must specify at least one of the **BackupId** and **RestoreTime** parameters.
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
   * Specifies whether to enable the I/O performance burst feature for Premium ESSD cloud disks. Valid values:
   * * **true**: enables the feature.
   * * **false**: shutdown.
   * > For more information about the I/O performance burst feature, see [What is a premium performance disk](https://help.aliyun.com/document_detail/2340501.html).
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
   * - **HighAvailability**: high availability Edition (active).
   * - **AlwaysOn**: Cluster Edition (SQL Server).
   * - **cluster**: Cluster Edition (MySQL).
   * - **Finance**: Finance Edition (supported only on the China site).
   * 
   * **Serverless instances**
   * - **serverless_basic**: Serverless Basic Edition (applicable only to MySQL and PostgreSQL).
   * - **serverless_standard**: MySQL Serverless high availability Edition (active).
   * - **serverless_ha**: SQL Server Serverless high availability Edition (active).
   * > You do not need to specify this parameter. The cloned instance inherits the edition of the source instance.
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the value, but you must ensure that the value is unique among different requests. The value can be up to 64 ASCII characters in length and cannot contain non-ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88**********
   */
  clientToken?: string;
  /**
   * @remarks
   * The internal reserved field. You do not need to specify this parameter.
   * 
   * @example
   * Internal reserved field. You do not need to specify this parameter
   */
  customExtraInfo?: string;
  /**
   * @remarks
   * The instance type. For more information, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * >Default value: the instance type of the primary instance.
   * 
   * @example
   * mysql.n1.micro.1
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance name. It must be 2 to 255 characters in length. It must start with a letter or a Chinese character and can contain letters, digits, Chinese characters, underscores (_), and hyphens (-).
   * >It cannot start with http:// or https://.
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
   * Instance storage capacity of the instance. Unit: GB. Instance storage capacity increases in increments of 5 GB. For more information, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
   * >Default value: instance storage capacity of the primary instance.
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
   * * **local_ssd**: premium local disk.
   * * **cloud_ssd**: standard SSD.
   * * **cloud_essd**: PL1 ESSD.
   * * **cloud_essd2**: PL2 ESSD.
   * * **cloud_essd3**: PL3 ESSD.
   * 
   * > Serverless instances support only PL1 ESSD and Premium ESSD.
   * 
   * @example
   * general_essd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The names of the databases. Format: `Original database name 1,Original database name 2`.
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
   * * **VPC**: Virtual Private Cloud (VPC).
   * * **Classic**: classic network.
   * 
   * >Default value: the network type of the primary instance.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * Specifies whether to enable the Buffer Pool Extension (BPE) feature for Premium ESSD cloud disks. Valid values:
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
   * The billing method of the instance. Valid values:
   * * **Postpaid**: pay-as-you-go.
   * * **Prepaid**: subscription.
   * * **Serverless**: serverless. This value is not supported for ApsaraDB RDS for MariaDB instances. For more information, see [Overview of serverless ApsaraDB RDS for MySQL instances](https://help.aliyun.com/document_detail/411291.html), [Overview of serverless ApsaraDB RDS for SQL Server instances](https://help.aliyun.com/document_detail/604344.html), and [Overview of serverless ApsaraDB RDS for PostgreSQL instances](https://help.aliyun.com/document_detail/607742.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription period of the subscription instance. Valid values:
   * * **Year**: yearly subscription.
   * * **Month**: monthly subscription.
   * 
   * > This parameter is required when the billing method is set to **Prepaid**.
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The internal network IP address of the new instance. The IP address must be within the IP address range of the specified vSwitch. By default, the system automatically allocates an IP address based on the **VPCId** and **VSwitchId** parameters.
   * 
   * @example
   * 172.XX.XX.69
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to view the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to restore individual databases and tables. A value of **true** specifies that individual databases and tables are restored. If you do not want to restore individual databases and tables, leave this parameter empty.
   * 
   * @example
   * true
   */
  restoreTable?: string;
  /**
   * @remarks
   * The point in time to which you want to restore the instance. The point in time must be within the backup retention period. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * 
   * >You must specify at least one of the **BackupId** and **RestoreTime** parameters.
   * 
   * @example
   * 2011-06-11T16:00:00Z
   */
  restoreTime?: string;
  serverlessConfigShrink?: string;
  /**
   * @remarks
   * The information about the databases and tables that you want to restore. This parameter is required when you restore individual databases and tables. Format:
   * ```[{"type":"db","name":"Name of database 1","newname":"New name of database 1","tables":[{"type":"table","name":"Name of table 1 in database 1","newname":"New name of table 1"},{"type":"table","name":"Name of table 2 in database 1","newname":"New name of table 2"}]},{"type":"db","name":"Name of database 2","newname":"New name of database 2","tables":[{"type":"table","name":"Name of table 1 in database 2","newname":"New name of table 1"},{"type":"table","name":"Name of table 2 in database 2","newname":"New name of table 2"}]}]```
   * 
   * @example
   * [{"type":"db","name":"testdb1","newname":"testdb1_new","tables":[{"type":"table","name":"testdb1table1","newname":"testdb1table1_new"}]}]
   */
  tableMeta?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CloneDBInstanceShrinkRequestTag[];
  /**
   * @remarks
   * The subscription duration. Valid values:
   * * Valid values when the **Period** parameter is set to **Year**: **1**, **2**, and **3**.
   * * Valid values when the **Period** parameter is set to **Month**: **1** to **9**.
   * 
   * > This parameter is required when the billing method is set to **Prepaid**.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
   * The VPC ID.
   * >Make sure that the VPC belongs to the region where the instance is deployed.
   * 
   * @example
   * vpc-uf6f7l4fg90****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID. The zone (active zone) where the vSwitch is located must match the zone (active zone) ID specified in **ZoneId**.
   * 
   * - The network type **InstanceNetworkType** must be set to **VPC**.
   * - If you specify **ZoneSlaveId1** (the secondary active zone ID), you must specify two vSwitch IDs and separate them with commas (,).
   * 
   * @example
   * vsw-uf6adz52c2p****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The primary zone ID. You can call the DescribeRegions operation to view the zone ID.
   * 
   * >Default value: the zone ID of the source instance.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The secondary zone (active zone) ID. If this parameter is set to the same value as the **ZoneId** parameter, the instance uses a single-zone (active zone) deployment. If this parameter is set to a different value from the **ZoneId** parameter, the instance uses a multi-zone (active zone) deployment.
   * 
   * @example
   * cn-hangzhou-c
   */
  zoneIdSlave1?: string;
  /**
   * @remarks
   * <props="intl">The logger zone (active zone) ID. If this parameter is set to the same value as the **ZoneId** parameter, the instance uses a single-zone (active zone) deployment. If this parameter is set to a different value from the **ZoneId** parameter, the instance uses a multi-zone (active zone) deployment.
   * 
   * <props="china">The secondary zone (active zone) ID or logger zone (active zone) ID. If this parameter is set to the same value as the **ZoneId** parameter, the instance uses a single-zone (active zone) deployment. If this parameter is set to a different value from the **ZoneId** parameter, the instance uses a multi-zone (active zone) deployment.
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

