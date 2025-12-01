// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the automatic backup feature.
   * 
   * *   **true**: enables the automatic backup feature.
   * *   **false**: disables the automatic backup feature.
   * 
   * @example
   * false
   */
  autoStartBackup?: boolean;
  /**
   * @remarks
   * The backup gateway ID. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain it.
   * 
   * >  If you set **SourceEndpointInstanceType** to **Agent**, this parameter is required.
   * 
   * @example
   * 23313123312
   */
  backupGatewayId?: number;
  /**
   * @remarks
   * The interval at which you want to perform incremental log backups. Unit: seconds.
   * 
   * >  Only physical backup supports this parameter.
   * 
   * @example
   * 1000
   */
  backupLogIntervalSeconds?: number;
  /**
   * @remarks
   * The objects to be backed up. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the objects.
   * 
   * @example
   * [ { "DBName":"Name of the database to be backed up", "SchemaName":"Name of the schema to be backed up", "TableIncludes":[{ "TableName":"Name of the table to be backed up" }], "TableExcludes":[{ "TableName":"Name of the table to be excluded during the backup" }] } ]
   */
  backupObjects?: string;
  /**
   * @remarks
   * The day of each week when the full backup task runs. Valid values:
   * 
   * *   **Monday**
   * *   **Tuesday**
   * *   **Wednesday**
   * *   **Thursday**
   * *   **Friday**
   * *   **Saturday**
   * *   **Sunday**
   * 
   * @example
   * Monday
   */
  backupPeriod?: string;
  /**
   * @remarks
   * The ID of the backup schedule. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain it.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi0*******
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The name of the backup schedule. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the name.
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
   * > This parameter takes effect only when physical backups for MySQL databases are performed.
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
   * The disk I/O limit. Unit: KB/s.
   * 
   * >  This parameter takes effect only during the physical backup of a MySQL database.
   * 
   * @example
   * 262144
   */
  backupSpeedLimit?: number;
  /**
   * @remarks
   * The start time of the full backup. Specify the time in the *HH:mm*Z format. The time must be in UTC. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the start time of full backup tasks.
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
   * *   system: The system stores backup data in the built-in OSS bucket of DBS.
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The unique ID (UID) of the Alibaba Cloud account to which the backup schedule belongs. You can call the [DescribeRestoreTaskList](https://help.aliyun.com/document_detail/2869838.html) operation to obtain the UID.
   * 
   * @example
   * 2xxx7778xxxxxxxxxx
   */
  crossAliyunId?: string;
  /**
   * @remarks
   * The name of the RAM role that is used to perform backup across Alibaba Cloud accounts. You can call the [DescribeRestoreTaskList](https://help.aliyun.com/document_detail/2869838.html) operation to obtain the RAM role.
   * 
   * @example
   * test123
   */
  crossRoleName?: string;
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
   * The name of the OSS bucket.
   * 
   * >  By default, the system automatically generates an OSS bucket name.
   * 
   * @example
   * TestOssBucket
   */
  OSSBucketName?: string;
  ownerId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzecovzti****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The source database name. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain it.
   * 
   * >  If the source database runs the **PostgreSQL** database engine or **MongoDB** database engine, this parameter is required.
   * 
   * @example
   * testRDS
   */
  sourceEndpointDatabaseName?: string;
  /**
   * @remarks
   * The source database endpoint. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain it.
   * 
   * >  If you set **SourceEndpointInstanceType** to **Express**, **Agent**, or **Other**, this parameter is required.
   * 
   * @example
   * rm-uf6wjk5*******.mysql.rds.aliyuncs.com
   */
  sourceEndpointIP?: string;
  /**
   * @remarks
   * The database instance ID. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the ID.
   * 
   * >  If you set **SourceEndpoint****InstanceType** to **RDS**, **ECS**, **DDS**, or **Express**, this parameter is required.
   * 
   * @example
   * rm-uf6wjk5*********
   */
  sourceEndpointInstanceID?: string;
  /**
   * @remarks
   * The location of the database. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the location. Valid values:
   * 
   * *   **RDS**
   * *   **ECS**
   * *   **Express**: The database is connected to Database Backup (DBS) via Express Connect, VPN Gateway, or Smart Access Gateway.
   * *   **Agent**: The database is connected over a DBS backup gateway.
   * *   **DDS**: The database is an ApsaraDB for MongoDB database.
   * *   **Other**: The database is connected to DBS by using the IP address and port of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  sourceEndpointInstanceType?: string;
  /**
   * @remarks
   * The system ID (SID) of the Oracle database.
   * 
   * > This parameter is required if the database is an Oracle database.
   * 
   * @example
   * test
   */
  sourceEndpointOracleSID?: string;
  /**
   * @remarks
   * The password of the account that is used to connect to the database.
   * 
   * > This parameter is required except that the database is an **SQL Server** database that is connected to DBS over a DBS backup gateway or a **Redis** database.
   * 
   * @example
   * testPassword
   */
  sourceEndpointPassword?: string;
  /**
   * @remarks
   * The port that is used to connect to the source database. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the port.
   * 
   * >  If you set **SourceEndpoint****InstanceType** to **Express**, **Agent**, **Other**, or **ECS**, this parameter is required.
   * 
   * @example
   * 3306
   */
  sourceEndpointPort?: number;
  /**
   * @remarks
   * The region in which the source database resides. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the region.
   * 
   * >  If you set **SourceEndpointInstanceType** to RDS, ECS, DDS, Express, or Agent, this parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * The username of the account that is used to connect to the database.
   * 
   * > This parameter is required except that the database is an **SQL Server** database that is connected to DBS over a DBS backup gateway or a **Redis** database.
   * 
   * @example
   * testRDS
   */
  sourceEndpointUserName?: string;
  static names(): { [key: string]: string } {
    return {
      autoStartBackup: 'AutoStartBackup',
      backupGatewayId: 'BackupGatewayId',
      backupLogIntervalSeconds: 'BackupLogIntervalSeconds',
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
      duplicationArchivePeriod: 'DuplicationArchivePeriod',
      duplicationInfrequentAccessPeriod: 'DuplicationInfrequentAccessPeriod',
      enableBackupLog: 'EnableBackupLog',
      OSSBucketName: 'OSSBucketName',
      ownerId: 'OwnerId',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoStartBackup: 'boolean',
      backupGatewayId: 'number',
      backupLogIntervalSeconds: 'number',
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
      duplicationArchivePeriod: 'number',
      duplicationInfrequentAccessPeriod: 'number',
      enableBackupLog: 'boolean',
      OSSBucketName: 'string',
      ownerId: 'string',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

