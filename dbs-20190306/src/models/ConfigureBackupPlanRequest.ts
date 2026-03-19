// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * Enable automatic backup. Valid values:
   * 
   * - **true**: Enable
   * 
   * - **false**: Disable
   * 
   * @example
   * false
   */
  autoStartBackup?: boolean;
  /**
   * @remarks
   * The backup gateway ID. Call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) API to get this parameter\\"s value.
   * 
   * > This parameter is required when **SourceEndpointInstanceType** is **agent**.
   * 
   * @example
   * 23313123312
   */
  backupGatewayId?: number;
  /**
   * @remarks
   * The incremental interval in seconds (s).
   * 
   * > Only physical backup is supported.
   * 
   * @example
   * 1000
   */
  backupLogIntervalSeconds?: number;
  /**
   * @remarks
   * The backup objects. Call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) API to get this parameter\\"s value.
   * 
   * @example
   * [     {         "DBName":"待备份库名",         "SchemaName":"待备份 Schema 名",         "TableIncludes":[{             "TableName":"待备份表表名"         }],         "TableExcludes":[{             "TableName":"待备份库名不需要备份表的表名"         }]     } ]
   */
  backupObjects?: string;
  /**
   * @remarks
   * The full backup period. Valid values:
   * 
   * - **Monday**: Monday
   * 
   * - **Tuesday**: Tuesday
   * 
   * - **Wednesday**: Wednesday
   * 
   * - **Thursday**: Thursday
   * 
   * - **Friday**: Friday
   * 
   * - **Saturday**: Saturday
   * 
   * - **Sunday**: Sunday
   * 
   * @example
   * Monday
   */
  backupPeriod?: string;
  /**
   * @remarks
   * The backup plan ID. Call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) API to get this parameter\\"s value.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi0*******
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The custom backup plan name. Call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) API to get this parameter\\"s value.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi0*******
   */
  backupPlanName?: string;
  /**
   * @remarks
   * The network bandwidth throttling in KB/s. The maximum value is 10 GB.
   * 
   * > This parameter is valid only for MySQL physical backup.
   * 
   * @example
   * 262144
   */
  backupRateLimit?: number;
  /**
   * @remarks
   * The retention period for backup data. Valid values: 0 to 1825. Default value: 730 days.
   * 
   * @example
   * 730
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * The disk I/O limit in KB/s.
   * 
   * > This parameter is valid only for MySQL physical backup.
   * 
   * @example
   * 262144
   */
  backupSpeedLimit?: number;
  /**
   * @remarks
   * The full backup start time in *HH:mm*Z (UTC) format. Call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) API to get this parameter\\"s value.
   * 
   * @example
   * 14:22
   */
  backupStartTime?: string;
  /**
   * @example
   * encrypted
   */
  backupStorageEncryptMethod?: string;
  /**
   * @remarks
   * The built-in storage type:
   * 
   * - Empty (default): Backup data is stored on your OSS.
   * 
   * - system: Backup data is stored on the built-in OSS of DBS.
   * 
   * @example
   * 无
   */
  backupStorageType?: string;
  /**
   * @remarks
   * The full backup period. Valid values:
   * 
   * - **simple**: Periodic backup. Use this value with BackupPeriod and BackupStartTime.
   * 
   * - **manual**: Manual backup.
   * 
   * > Default value: **simple**.
   * 
   * @example
   * simple
   */
  backupStrategyType?: string;
  /**
   * @remarks
   * Ensure the idempotence of the request to prevent duplicate submissions. The client generates this parameter value. Ensure its uniqueness across different requests. The maximum length is 64 ASCII characters, and the value cannot contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The UID for cross-Alibaba Cloud account backup. Call the [DescribeRestoreTaskList](https://help.aliyun.com/document_detail/2869838.html) API to get this parameter\\"s value.
   * 
   * @example
   * 2xxx7778xxxxxxxxxx
   */
  crossAliyunId?: string;
  /**
   * @remarks
   * The RAM role name for cross-Alibaba Cloud account backup. Call the [DescribeRestoreTaskList](https://help.aliyun.com/document_detail/2869838.html) API to get this parameter\\"s value.
   * 
   * @example
   * test123
   */
  crossRoleName?: string;
  /**
   * @remarks
   * The period after which data is converted to archive cold storage. Default value: 365 days.
   * 
   * @example
   * 365
   */
  duplicationArchivePeriod?: number;
  /**
   * @remarks
   * The period after which data is converted to Infrequent Access storage. Default value: 180 days.
   * 
   * @example
   * 180
   */
  duplicationInfrequentAccessPeriod?: number;
  /**
   * @remarks
   * Enable incremental log backup. Valid values:
   * 
   * - **true**: Enable
   * 
   * - **false**: Disable
   * 
   * @example
   * true
   */
  enableBackupLog?: boolean;
  /**
   * @example
   * true
   */
  enableMysqlPhysicalBackupBinlog?: string;
  /**
   * @example
   * true
   */
  enableSourceEndpointSsl?: string;
  /**
   * @remarks
   * The OSS bucket name.
   * 
   * > The system automatically generates a new name by default.
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
   * The database name. Call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) API to get this parameter\\"s value.
   * 
   * > This parameter is required when the database type is **PostgreSQL** or **MongoDB**.
   * 
   * @example
   * testRDS
   */
  sourceEndpointDatabaseName?: string;
  /**
   * @remarks
   * The database endpoint. Call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) API to get this parameter\\"s value.
   * 
   * > This parameter is required when **SourceEndpointInstanceType** is **express**, **agent**, or **other**.
   * 
   * @example
   * rm-uf6wjk5*******.mysql.rds.aliyuncs.com
   */
  sourceEndpointIP?: string;
  /**
   * @remarks
   * The database instance ID. Call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) API to get this parameter\\"s value.
   * 
   * > This parameter is required when **SourceEndpoint**.**InstanceType** is **RDS**, **ECS**, **DDS**, or **Express**.
   * 
   * @example
   * rm-uf6wjk5*********
   */
  sourceEndpointInstanceID?: string;
  /**
   * @remarks
   * The location of the database. Call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) API to get this parameter\\"s value. Valid values:
   * 
   * - **RDS**
   * 
   * - **ECS**
   * 
   * - **Express**: A database connected through a leased line, VPN Gateway, or Smart Gateway.
   * 
   * - **Agent**: A database connected through a backup gateway.
   * 
   * - **DDS**: Cloud MongoDB.
   * 
   * - **Other**: A database directly connected through IP:Port.
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  sourceEndpointInstanceType?: string;
  /**
   * @example
   * /home/test
   */
  sourceEndpointOracleHome?: string;
  /**
   * @remarks
   * The Oracle SID name.
   * 
   * > This parameter is required when the database type is Oracle.
   * 
   * @example
   * test
   */
  sourceEndpointOracleSID?: string;
  /**
   * @remarks
   * The password.
   * 
   * > This parameter is optional when the database type is **Redis**, or when the database location is **agent** and the database type is **SQL Server**. It is required in other scenarios.
   * 
   * @example
   * testPassword
   */
  sourceEndpointPassword?: string;
  /**
   * @remarks
   * The database port. Call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) API to get this parameter\\"s value.
   * 
   * > This parameter is required when **SourceEndpoint**.**InstanceType** is **express**, **agent**, **other**, or **ECS**.
   * 
   * @example
   * 3306
   */
  sourceEndpointPort?: number;
  /**
   * @remarks
   * The region of the database. Call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) API to get this parameter\\"s value.
   * 
   * > This parameter is required when **SourceEndpointInstanceType** is RDS, ECS, DDS, Express, or Agent.
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * The database account.
   * 
   * > This parameter is optional when the database type is **Redis**, or when the database location is **agent** and the database type is **SQL Server**. It is required in other scenarios.
   * 
   * @example
   * testRDS
   */
  sourceEndpointUserName?: string;
  /**
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

