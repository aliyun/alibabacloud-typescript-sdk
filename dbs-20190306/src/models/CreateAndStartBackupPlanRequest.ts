// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAndStartBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The backup gateway ID.
   * 
   * > 
   * 
   * *   If **SourceEndpointInstanceType** is set to **Agent**, this parameter is required.****
   * 
   * *   For more information about how to install a backup gateway, see [Install a backup gateway](https://help.aliyun.com/document_detail/93250.html).
   * 
   * *   You can query a list of existing backup gateways by calling the [DescribeBackupGatewayList](https://help.aliyun.com/document_detail/2869840.html) operation.
   * 
   * @example
   * 23313123312
   */
  backupGatewayId?: number;
  /**
   * @remarks
   * The interval at which you want to perform incremental log backups. Unit: seconds.
   * 
   * >  This parameter is required only if you set BackupMethod to **physical**.
   * 
   * @example
   * 1000
   */
  backupLogIntervalSeconds?: number;
  /**
   * @remarks
   * The method that is used to generate the backup file. Valid values:
   * 
   * *   **logical**: logical backup
   * *   **physical**: physical backup
   * *   **duplication**: dump backup
   * 
   * This parameter is required.
   * 
   * @example
   * logical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The object to be backed up.
   * 
   * @example
   * [ { "DBName":"Name of the database to be backed up", "SchemaName":"Name of the schema to be backed up", "TableIncludes":[{ "TableName":"Name of the table to be backed up" }], "TableExcludes":[{ "TableName":"Name of the table that you do not want to back up" }] } ]
   */
  backupObjects?: string;
  /**
   * @remarks
   * The day of the week on which you want to perform full backup. Valid values:
   * 
   * *   **Monday**
   * *   **Tuesday**
   * *   **Wednesday**
   * *   **Thursday**
   * *   **Friday**
   * *   **Saturday**
   * *   **Sunday**
   * 
   * >  You can specify multiple values. Separate multiple values with commas (,).
   * 
   * @example
   * Monday
   */
  backupPeriod?: string;
  /**
   * @remarks
   * The ID of the backup schedule.
   * 
   * @example
   * dbstooi0*******
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The name of the backup schedule.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi0*******
   */
  backupPlanName?: string;
  /**
   * @remarks
   * The network bandwidth throttling. Unit: KB/s. DBS allows a maximum bandwidth of 10 GB/s.
   * 
   * >  This parameter takes effect only when physical backups for MySQL databases are performed.
   * 
   * @example
   * 262144
   */
  backupRateLimit?: number;
  /**
   * @remarks
   * The number of days for which the backup data is retained. Valid values: 0 to 1825. Default value: 730.
   * 
   * @example
   * 730
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * The I/O limit for the disk. Unit: KB/s.
   * 
   * >  This parameter takes effect only when physical backups for MySQL databases are performed.
   * 
   * @example
   * 262144
   */
  backupSpeedLimit?: number;
  /**
   * @remarks
   * The start time of full backup tasks. Specify the value in the *HH:mm* format. The time must be in UTC.
   * 
   * @example
   * 14:22
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * *   Empty: If you do not specify this parameter, the system stores backup data in your OSS bucket.
   * *   system : The system stores backup data in the built-in OSS bucket of DBS.
   * 
   * @example
   * N/A
   */
  backupStorageType?: string;
  /**
   * @remarks
   * The backup method that you want to use for full backups. Valid values:
   * 
   * *   **simple**: scheduled backup. If you specify this value for the BackupStrategyType parameter, you must also specify the BackupPeriod and BackupStartTime parameters.
   * *   **Manual**: manual backup.
   * 
   * > Default value: **simple**.
   * 
   * @example
   * simple
   */
  backupStrategyType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * DBS
   */
  clientToken?: string;
  /**
   * @remarks
   * The unique ID (UID) of the Alibaba Cloud account to which the source database belongs.
   * 
   * @example
   * 2xxx7778xxxxxxxxxx
   */
  crossAliyunId?: string;
  /**
   * @remarks
   * The name of the RAM role that is used to perform backups across Alibaba Cloud accounts.
   * 
   * @example
   * test123
   */
  crossRoleName?: string;
  /**
   * @remarks
   * The region in which the database that you want to back up resides.
   * 
   * > This parameter is required if the **PayType** parameter is set to **postpay**.
   * 
   * @example
   * cn-hangzhou
   */
  databaseRegion?: string;
  /**
   * @remarks
   * The type of the source database. Valid values:
   * 
   * *   **MySQL**
   * *   **MSSQL**
   * *   **Oracle**
   * *   **MariaDB**
   * *   **PostgreSQL**
   * *   **DRDS**
   * *   **MongoDB**
   * *   **Redis**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The number of days after which the storage class of the backup data is changed to Archive. Default value: 365.
   * 
   * @example
   * 365
   */
  duplicationArchivePeriod?: number;
  /**
   * @remarks
   * The number of days after which the storage class of the backup data is changed to Infrequent Access (IA). Default value: 180.
   * 
   * @example
   * 180
   */
  duplicationInfrequentAccessPeriod?: number;
  /**
   * @remarks
   * Specifies whether to enable the incremental log backup feature. Valid values:
   * 
   * *   **true**: enables the incremental log backup feature.
   * *   **false**: disables the incremental log backup feature.
   * 
   * @example
   * true
   */
  enableBackupLog?: boolean;
  /**
   * @remarks
   * The request source. Default value: OpenApi. You do not need to set this parameter.
   * 
   * @example
   * OpenApi
   */
  fromApp?: string;
  /**
   * @remarks
   * The type of the backup schedule. Valid values:
   * 
   * *   **micro**
   * *   **small**
   * *   **medium**
   * *   **large**
   * *   **xlarge**
   * 
   * >  A backup schedule type with higher specifications offers higher backup and restoration performance. For more information, see [Select a backup schedule type](https://help.aliyun.com/document_detail/84372.html).
   * 
   * This parameter is required.
   * 
   * @example
   * micro
   */
  instanceClass?: string;
  /**
   * @remarks
   * The type of the source database instance. Valid values:
   * 
   * *   **RDS**: ApsaraDB RDS.
   * *   **PolarDB**: PolarDB.
   * *   **DDS**: ApsaraDB for MongoDB.
   * *   **Kvstore**: ApsaraDB for Redis.
   * *   **Other**: Database connected by using an IP address and a port number.
   * *   **dg**: Self-managed database that has no public IP address or port number and is connected over Database Gateway.
   * 
   * >  If **PayType** is set to **postpay**, this parameter is required.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket used to store backup files. By default, the system automatically generates a name for the OSS bucket.
   * 
   * @example
   * TestOssBucket
   */
  OSSBucketName?: string;
  ownerId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   **postpay**: pay-as-you-go.
   * *   **prepay**: subscription.
   * 
   * >  The default value is **prepay**. You can set this parameter to **postpay** only if you set **BackupMethod** to **duplication**.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * Specifies whether to use yearly subscription or monthly subscription for the instance. Valid values:
   * 
   * *   **Year**: yearly subscription
   * *   **Month**: monthly subscription
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The ID of the region in which you want to store the backup data. You can query the supported regions of DBS by calling the [DescribeRegions](https://help.aliyun.com/document_detail/2869853.html) operation.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzecovzti****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * > This parameter is required if the DatabaseType parameter is set to **PostgreSQL** or **MongoDB**.
   * 
   * @example
   * testRDS
   */
  sourceEndpointDatabaseName?: string;
  /**
   * @remarks
   * The endpoint of the database.
   * 
   * > This parameter is required if the **SourceEndpointInstanceType** parameter is set to **Express**, **Agent**, or **Other**.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx.mysql.rds.aliyuncs.com
   */
  sourceEndpointIP?: string;
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * > This parameter is required if the **SourceEndpointInstanceType** parameter is set to **RDS**, **ECS**, **DDS**, or **Express**.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  sourceEndpointInstanceID?: string;
  /**
   * @remarks
   * The location of the source database. Valid values:
   * 
   * *   **RDS**: The database is on an ApsaraDB RDS instance.
   * *   **ECS**: The database is on an Elastic Compute Service (ECS) instance.
   * *   **Express**: The database is connected to DBS by using Express Connect, VPN Gateway, or Smart Access Gateway.
   * *   **Agent**: The database is connected to DBS over a DBS backup gateway.
   * *   **DDS**: The database is on an ApsaraDB for MongoDB instance.
   * *   **Other**: The database is connected to DBS by using an IP address and a port number.
   * *   **dg**: The database is a self-managed database that has no public IP address or port number and is connected to DBS over Database Gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  sourceEndpointInstanceType?: string;
  /**
   * @remarks
   * The system ID (SID) of the Oracle database. This parameter is required if the source database is an Oracle database.
   * 
   * @example
   * test
   */
  sourceEndpointOracleSID?: string;
  /**
   * @remarks
   * The password of the account that is used to connect to the database.
   * 
   * > This parameter is required except that the database is an SQL Server database that is connected to DBS over a DBS backup gateway or a Redis database.
   * 
   * @example
   * testPassword
   */
  sourceEndpointPassword?: string;
  /**
   * @remarks
   * The port of the database.
   * 
   * > This parameter is required if the **SourceEndpointInstanceType** parameter is set to **Express**, **Agent**, **Other**, or **ECS**.
   * 
   * @example
   * 3306
   */
  sourceEndpointPort?: number;
  /**
   * @remarks
   * The region in which the database that you want to back up resides.
   * 
   * > This parameter is required if the **SourceEndpointInstanceType** parameter is set to **RDS**, **ECS**, **DDS**, **Express**, or **Agent**.
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * The username of the account that is used to connect to the database.
   * 
   * > This parameter is required except that the database is an SQL Server database that is connected to DBS over a DBS backup gateway or a Redis database.
   * 
   * @example
   * testRDS
   */
  sourceEndpointUserName?: string;
  /**
   * @remarks
   * The region in which you want to store the backup data.
   * 
   * > This parameter is required if the **PayType** parameter is set to **postpay**.
   * 
   * @example
   * cn-hangzhou
   */
  storageRegion?: string;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * N/A
   */
  storageType?: string;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * 
   * *   If **Period** is set to **Year**, the valid values of **UsedTime** range from 1 to 5.
   * *   If **Period** is set to **Month**, the valid values of **UsedTime** range from 1 to 11.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      backupLogIntervalSeconds: 'BackupLogIntervalSeconds',
      backupMethod: 'BackupMethod',
      backupObjects: 'BackupObjects',
      backupPeriod: 'BackupPeriod',
      backupPlanId: 'BackupPlanId',
      backupPlanName: 'BackupPlanName',
      backupRateLimit: 'BackupRateLimit',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      backupSpeedLimit: 'BackupSpeedLimit',
      backupStartTime: 'BackupStartTime',
      backupStorageType: 'BackupStorageType',
      backupStrategyType: 'BackupStrategyType',
      clientToken: 'ClientToken',
      crossAliyunId: 'CrossAliyunId',
      crossRoleName: 'CrossRoleName',
      databaseRegion: 'DatabaseRegion',
      databaseType: 'DatabaseType',
      duplicationArchivePeriod: 'DuplicationArchivePeriod',
      duplicationInfrequentAccessPeriod: 'DuplicationInfrequentAccessPeriod',
      enableBackupLog: 'EnableBackupLog',
      fromApp: 'FromApp',
      instanceClass: 'InstanceClass',
      instanceType: 'InstanceType',
      OSSBucketName: 'OSSBucketName',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      sourceEndpointPassword: 'SourceEndpointPassword',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointUserName: 'SourceEndpointUserName',
      storageRegion: 'StorageRegion',
      storageType: 'StorageType',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      backupLogIntervalSeconds: 'number',
      backupMethod: 'string',
      backupObjects: 'string',
      backupPeriod: 'string',
      backupPlanId: 'string',
      backupPlanName: 'string',
      backupRateLimit: 'number',
      backupRetentionPeriod: 'number',
      backupSpeedLimit: 'number',
      backupStartTime: 'string',
      backupStorageType: 'string',
      backupStrategyType: 'string',
      clientToken: 'string',
      crossAliyunId: 'string',
      crossRoleName: 'string',
      databaseRegion: 'string',
      databaseType: 'string',
      duplicationArchivePeriod: 'number',
      duplicationInfrequentAccessPeriod: 'number',
      enableBackupLog: 'boolean',
      fromApp: 'string',
      instanceClass: 'string',
      instanceType: 'string',
      OSSBucketName: 'string',
      ownerId: 'string',
      payType: 'string',
      period: 'string',
      region: 'string',
      resourceGroupId: 'string',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointOracleSID: 'string',
      sourceEndpointPassword: 'string',
      sourceEndpointPort: 'number',
      sourceEndpointRegion: 'string',
      sourceEndpointUserName: 'string',
      storageRegion: 'string',
      storageType: 'string',
      usedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

