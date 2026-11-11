// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic backup. Valid values:
   * 
   * - **true**: enables automatic backup
   * - **false**: disables automatic backup
   * 
   * @example
   * false
   */
  autoStartBackup?: boolean;
  /**
   * @remarks
   * The ID of the backup gateway. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to query the value of this parameter.
   * 
   * > This parameter is required when **SourceEndpointInstanceType** is set to **agent**.
   * 
   * @example
   * 23313123312
   */
  backupGatewayId?: number;
  /**
   * @remarks
   * The interval for incremental backup, in seconds.
   * > This parameter is supported only for physical backup.
   * 
   * @example
   * 1000
   */
  backupLogIntervalSeconds?: number;
  /**
   * @remarks
   * The objects to be backed up. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to query the value of this parameter.
   * 
   * @example
   * [     {         "DBName":"DatabaseToBackUp",         "SchemaName":"SchemaToBackUp",         "TableIncludes":[{             "TableName":"TableToBackUp"         }],         "TableExcludes":[{             "TableName":"TableToExclude"         }]     } ]
   */
  backupObjects?: string;
  /**
   * @remarks
   * The full backup cycle. Valid values:
   * - **Monday**: Monday
   * - **Tuesday**: Tuesday
   * - **Wednesday**: Wednesday
   * - **Thursday**: Thursday
   * - **Friday**: Friday
   * - **Saturday**: Saturday
   * - **Sunday**: Sunday
   * 
   * @example
   * Monday
   */
  backupPeriod?: string;
  /**
   * @remarks
   * The ID of the backup plan. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to query the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi0*******
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The custom name of the backup plan. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to query the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi0*******
   */
  backupPlanName?: string;
  /**
   * @remarks
   * The network bandwidth throttling. Unit: KB/s. Maximum value: 10 GB.
   * > This parameter takes effect only for MySQL physical backup.
   * 
   * @example
   * 262144
   */
  backupRateLimit?: number;
  /**
   * @remarks
   * The retention period of backup data. Valid values: 0 to 1825. Default value: 730. Unit: days.
   * 
   * @example
   * 730
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * The disk I/O limit. Unit: KB/s.
   * > This parameter takes effect only for MySQL physical backup.
   * 
   * @example
   * 262144
   */
  backupSpeedLimit?: number;
  /**
   * @remarks
   * The start time of the full backup. The time is in the <i>HH:mm</i>Z format and displayed in UTC. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to query the value of this parameter.
   * 
   * @example
   * 14:22
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The encryption method for backup storage.
   * 
   * @example
   * encrypted
   */
  backupStorageEncryptMethod?: string;
  /**
   * @remarks
   * The built-in storage type. Valid values:
   * - Empty string (default): Backup data is stored in your OSS bucket.
   * - system: Backup data is stored in the built-in OSS bucket of DBS.
   * 
   * @example
   * None
   */
  backupStorageType?: string;
  /**
   * @remarks
   * The full backup epoch. Valid values:
   * - **simple**: periodic backup, which is used together with BackupPeriod and BackupStartTime
   * - **manual**: manual backup
   * 
   * > Default value: **simple**.
   * 
   * @example
   * simple
   */
  backupStrategyType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the value, and you must ensure that the value is unique among different requests. The value can be up to 64 ASCII characters in length and cannot contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account for cross-account backup. You can call the [DescribeRestoreTaskList](https://help.aliyun.com/document_detail/2869838.html) operation to query the value of this parameter.
   * 
   * @example
   * 2xxx7778xxxxxxxxxx
   */
  crossAliyunId?: string;
  /**
   * @remarks
   * The name of the RAM role for cross-account backup. You can call the [DescribeRestoreTaskList](https://help.aliyun.com/document_detail/2869838.html) operation to query the value of this parameter.
   * 
   * @example
   * test123
   */
  crossRoleName?: string;
  /**
   * @remarks
   * The period after which backup data is transitioned to Archive storage. Default value: 365. Unit: days.
   * 
   * @example
   * 365
   */
  duplicationArchivePeriod?: number;
  /**
   * @remarks
   * The period after which backup data is transitioned to Infrequent Access (IA) storage. Default value: 180. Unit: days.
   * 
   * @example
   * 180
   */
  duplicationInfrequentAccessPeriod?: number;
  /**
   * @remarks
   * Specifies whether to enable incremental log backup. Valid values:
   * - **true**: enables incremental log backup
   * - **false**: disables incremental log backup
   * 
   * @example
   * true
   */
  enableBackupLog?: boolean;
  /**
   * @remarks
   * Specifies whether to enable log backup for MySQL physical backup.
   * 
   * @example
   * true
   */
  enableMysqlPhysicalBackupBinlog?: string;
  /**
   * @remarks
   * Specifies whether to enable an SSL-encrypted connection to the source database instance.
   * 
   * @example
   * true
   */
  enableSourceEndpointSsl?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * > By default, the system automatically generates a new name.
   * 
   * @example
   * TestOssBucket
   */
  OSSBucketName?: string;
  ownerId?: string;
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
   * The name of the database. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to query the value of this parameter.
   * 
   * > This parameter is required when the database engine is **PostgreSQL** or **MongoDB**.
   * 
   * @example
   * testRDS
   */
  sourceEndpointDatabaseName?: string;
  /**
   * @remarks
   * The database connection address. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to query the value of this parameter.
   * 
   * > This parameter is required when **SourceEndpointInstanceType** is set to **express**, **agent**, or **other**.
   * 
   * @example
   * rm-uf6wjk5*******.mysql.rds.aliyuncs.com
   */
  sourceEndpointIP?: string;
  /**
   * @remarks
   * The database instance ID. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to query the value of this parameter.
   * 
   * > This parameter is required when **SourceEndpoint**.**InstanceType** is set to **RDS**, **ECS**, **DDS**, or **Express**.
   * 
   * @example
   * rm-uf6wjk5*********
   */
  sourceEndpointInstanceID?: string;
  /**
   * @remarks
   * The location of the database. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to query the value of this parameter. Valid values:
   * 
   * - **RDS**
   * - **ECS**
   * - **Express**: databases connected over Express Connect circuits, VPN gateways, or Smart Access Gateway (SAG)
   * - **Agent**: databases connected over backup gateways
   * - **DDS**: ApsaraDB for MongoDB
   * - **Other**: databases connected by using IP addresses and port numbers
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  sourceEndpointInstanceType?: string;
  /**
   * @remarks
   * Oracle Home
   * 
   * @example
   * /home/test
   */
  sourceEndpointOracleHome?: string;
  /**
   * @remarks
   * The Oracle system identifier (SID).
   * 
   * > This parameter is required when the database engine is Oracle.
   * 
   * @example
   * test
   */
  sourceEndpointOracleSID?: string;
  /**
   * @remarks
   * The password of the database account.
   * 
   * > This parameter is not required when the database engine is **Redis**, or when the database is connected over a backup gateway (**agent**) and the database engine is **SQL Server**. This parameter is required in other scenarios.
   * 
   * @example
   * testPassword
   */
  sourceEndpointPassword?: string;
  /**
   * @remarks
   * The port number of the database. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to query the value of this parameter.
   * 
   * > This parameter is required when **SourceEndpoint**.**InstanceType** is set to **express**, **agent**, **other**, or **ECS**.
   * 
   * @example
   * 3306
   */
  sourceEndpointPort?: number;
  /**
   * @remarks
   * The region of the database. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to query the value of this parameter.
   * 
   * > This parameter is required when **SourceEndpointInstanceType** is set to RDS, ECS, DDS, Express, or Agent.
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * The username of the database account.
   * 
   * > This parameter is not required when the database engine is **Redis**, or when the database is connected over a backup gateway (**agent**) and the database engine is **SQL Server**. This parameter is required in other scenarios.
   * 
   * @example
   * testRDS
   */
  sourceEndpointUserName?: string;
  /**
   * @remarks
   * The PEM certificate for the SSL-encrypted connection to the source database.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----
   */
  sslCaPem?: string;
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
      backupStorageEncryptMethod: 'BackupStorageEncryptMethod',
      backupStorageType: 'BackupStorageType',
      backupStrategyType: 'BackupStrategyType',
      clientToken: 'ClientToken',
      crossAliyunId: 'CrossAliyunId',
      crossRoleName: 'CrossRoleName',
      duplicationArchivePeriod: 'DuplicationArchivePeriod',
      duplicationInfrequentAccessPeriod: 'DuplicationInfrequentAccessPeriod',
      enableBackupLog: 'EnableBackupLog',
      enableMysqlPhysicalBackupBinlog: 'EnableMysqlPhysicalBackupBinlog',
      enableSourceEndpointSsl: 'EnableSourceEndpointSsl',
      OSSBucketName: 'OSSBucketName',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointOracleHome: 'SourceEndpointOracleHome',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      sourceEndpointPassword: 'SourceEndpointPassword',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointUserName: 'SourceEndpointUserName',
      sslCaPem: 'SslCaPem',
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
      backupStorageEncryptMethod: 'string',
      backupStorageType: 'string',
      backupStrategyType: 'string',
      clientToken: 'string',
      crossAliyunId: 'string',
      crossRoleName: 'string',
      duplicationArchivePeriod: 'number',
      duplicationInfrequentAccessPeriod: 'number',
      enableBackupLog: 'boolean',
      enableMysqlPhysicalBackupBinlog: 'string',
      enableSourceEndpointSsl: 'string',
      OSSBucketName: 'string',
      ownerId: 'string',
      resourceGroupId: 'string',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointOracleHome: 'string',
      sourceEndpointOracleSID: 'string',
      sourceEndpointPassword: 'string',
      sourceEndpointPort: 'number',
      sourceEndpointRegion: 'string',
      sourceEndpointUserName: 'string',
      sslCaPem: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

