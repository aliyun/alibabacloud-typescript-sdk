// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAndStartBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup gateway.
   * 
   * > - This parameter is required if **SourceEndpoint**.**InstanceType** is set to **agent**.
   * >
   * > - For more information about how to create a backup gateway, see [Add a backup gateway](https://help.aliyun.com/document_detail/93250.html).
   * >
   * > - You can call the [DescribeBackupGatewayList](https://help.aliyun.com/document_detail/2869840.html) operation to view the list of existing backup gateways.
   * 
   * @example
   * 23313123312
   */
  backupGatewayId?: number;
  /**
   * @remarks
   * The interval for incremental backups, in seconds.
   * 
   * > This parameter is required only for **physical backups**.
   * 
   * @example
   * 1000
   */
  backupLogIntervalSeconds?: number;
  /**
   * @remarks
   * The backup method. Valid values:
   * 
   * - **logical**: logical backup
   * 
   * - **physical**: physical backup
   * 
   * This parameter is required.
   * 
   * @example
   * logical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The backup objects.
   * 
   * @example
   * [     {         "DBName":"待备份库名",         "SchemaName":"待备份 Schema 名",         "TableIncludes":[{             "TableName":"待备份表表名"         }],         "TableExcludes":[{             "TableName":"待备份库名不需要备份表的表名"         }]     } ]
   */
  backupObjects?: string;
  /**
   * @remarks
   * The full backup cycle. Valid values:
   * 
   * - **Monday**
   * 
   * - **Tuesday**
   * 
   * - **Wednesday**
   * 
   * - **Thursday**
   * 
   * - **Friday**
   * 
   * - **Saturday**
   * 
   * - **Sunday**
   * 
   * > You can select multiple values. Separate them with commas (,).
   * 
   * @example
   * Monday
   */
  backupPeriod?: string;
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * @example
   * dbstooi0*******
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The custom name of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi0*******
   */
  backupPlanName?: string;
  /**
   * @remarks
   * The network bandwidth throttling limit, in KB/s. The maximum allowed value is 10 GB.
   * 
   * > This parameter is valid only for MySQL physical backups.
   * 
   * @example
   * 262144
   */
  backupRateLimit?: number;
  /**
   * @remarks
   * The retention period for backup data, in days. Valid values: 0 to 1825. Default value: 730.
   * 
   * @example
   * 730
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * The disk I/O limit, in KB/s.
   * 
   * > This parameter is valid only for MySQL physical backups.
   * 
   * @example
   * 262144
   */
  backupSpeedLimit?: number;
  /**
   * @remarks
   * The start time for the full backup. The time is in the *HH:mm* format and is in UTC.
   * 
   * @example
   * 14:22
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The built-in storage type:
   * 
   * - Empty (default): Backup data is stored in your OSS bucket.
   * 
   * - system: Backup data is stored in the built-in OSS bucket of DBS.
   * 
   * @example
   * 无
   */
  backupStorageType?: string;
  /**
   * @remarks
   * The full backup strategy. Valid values:
   * 
   * - **simple**: periodic backup. Use this value with BackupPeriod and BackupStartTime.
   * 
   * - **manual**: manual backup.
   * 
   * > The default value is **simple**.
   * 
   * @example
   * simple
   */
  backupStrategyType?: string;
  /**
   * @remarks
   * A client token used to ensure the idempotence of the request. This prevents duplicate requests.
   * 
   * @example
   * ASDASDASDSADASFCZXVZ
   */
  clientToken?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account for cross-account backup.
   * 
   * @example
   * 1648821913******
   */
  crossAliyunId?: string;
  /**
   * @remarks
   * The name of the RAM role for cross-account backup.
   * 
   * @example
   * test123
   */
  crossRoleName?: string;
  /**
   * @remarks
   * The region where the database is located.
   * 
   * @example
   * cn-hangzhou
   */
  databaseRegion?: string;
  /**
   * @remarks
   * The database type. Valid values:
   * 
   * - **MySQL**
   * 
   * - **MSSQL**
   * 
   * - **Oracle**
   * 
   * - **MariaDB**
   * 
   * - **PostgreSQL**
   * 
   * - **DRDS**
   * 
   * - **MongoDB**
   * 
   * - **Redis**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The time after which backup data is converted to archive storage, in days. Default value: 365.
   * 
   * @example
   * 365
   */
  duplicationArchivePeriod?: number;
  /**
   * @remarks
   * The time after which backup data is converted to Infrequent Access (IA) storage, in days. Default value: 180.
   * 
   * @example
   * 180
   */
  duplicationInfrequentAccessPeriod?: number;
  /**
   * @remarks
   * Specifies whether to enable incremental log backup. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  enableBackupLog?: boolean;
  /**
   * @remarks
   * The source of the request. The default value is OpenApi. You do not need to set this parameter.
   * 
   * @example
   * OpenApi
   */
  fromApp?: string;
  /**
   * @remarks
   * The specification of the backup plan. Valid values:
   * 
   * - **micro**
   * 
   * - **small**
   * 
   * - **medium**
   * 
   * - **large**
   * 
   * - **xlarge**
   * 
   * > Higher specifications provide better backup and recovery performance. For more information, see [Specifications](https://help.aliyun.com/document_detail/84372.html).
   * 
   * This parameter is required.
   * 
   * @example
   * micro
   */
  instanceClass?: string;
  /**
   * @remarks
   * The database instance type. Valid values:
   * 
   * - **RDS**
   * 
   * - **PolarDB**
   * 
   * - **DDS**: Alibaba Cloud MongoDB
   * 
   * - **Kvstore**: Alibaba Cloud Redis
   * 
   * - **Other**: A database connected over an IP address and port.
   * 
   * - **dg**: A self-managed database without a public IP address or port, connected through Database Gateway (DG).
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket.
   * Default: The system automatically generates a new name.
   * 
   * @example
   * TestOssBucket
   */
  OSSBucketName?: string;
  ownerId?: string;
  /**
   * @remarks
   * The payment method. Valid value:
   * 
   * **prepay**: subscription
   * 
   * @example
   * prepay
   */
  payType?: string;
  /**
   * @remarks
   * The billing cycle of the subscription instance. Valid values:
   * 
   * - **Year**
   * 
   * - **Month**
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The region where DBS is available. To view the available regions, call the [DescribeRegions](https://help.aliyun.com/document_detail/2869853.html) operation.
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
   * The database name.
   * 
   * > This parameter is required if the database type is **PostgreSQL** or **MongoDB**.
   * 
   * @example
   * testRDS
   */
  sourceEndpointDatabaseName?: string;
  /**
   * @remarks
   * The database endpoint.
   * 
   * > This parameter is required if **SourceEndpoint**.**InstanceType** is set to **express**, **agent**, or **other**.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx.mysql.rds.aliyuncs.com
   */
  sourceEndpointIP?: string;
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * > This parameter is required if **SourceEndpoint**.**InstanceType** is set to **RDS**, **ECS**, **DDS**, or **Express**.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  sourceEndpointInstanceID?: string;
  /**
   * @remarks
   * The location of the database. Valid values:
   * 
   * - **RDS**
   * 
   * - **ECS**
   * 
   * - **Express**: A database connected through a leased line, VPN Gateway, or Smart Access Gateway.
   * 
   * - **Agent**: A database connected through a backup gateway.
   * 
   * - **DDS**: Alibaba Cloud MongoDB
   * 
   * - **Other**: A database connected directly over an IP address and port.
   * 
   * - **dg**: A self-managed database without a public IP address or port, connected through Database Gateway (DG).
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  sourceEndpointInstanceType?: string;
  /**
   * @remarks
   * The Oracle system ID (SID). This parameter is required if the database type is Oracle.
   * 
   * @example
   * test
   */
  sourceEndpointOracleSID?: string;
  /**
   * @remarks
   * The password for the database account.
   * 
   * > This parameter is optional if the database type is **Redis**, or if the database location is **agent** and the database type is **MSSQL**. In all other cases, this parameter is required.
   * 
   * @example
   * testPassword
   */
  sourceEndpointPassword?: string;
  /**
   * @remarks
   * The database port.
   * 
   * > This parameter is required if **SourceEndpoint**.**InstanceType** is set to **express**, **agent**, **other**, or **ECS**.
   * 
   * @example
   * 3306
   */
  sourceEndpointPort?: number;
  /**
   * @remarks
   * The region where the database is located.
   * 
   * > This parameter is required if **SourceEndpoint**.**InstanceType** is set to **RDS**, **ECS**, **DDS**, **Express**, or **Agent**.
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * The database account.
   * 
   * > This parameter is optional if the database type is **Redis**, or if the database location is **agent** and the database type is **MSSQL**. In all other cases, this parameter is required.
   * 
   * @example
   * testRDS
   */
  sourceEndpointUserName?: string;
  /**
   * @remarks
   * The storage region.
   * 
   * @example
   * cn-hangzhou
   */
  storageRegion?: string;
  /**
   * @remarks
   * This parameter is not yet available.
   * 
   * @example
   * 无
   */
  storageType?: string;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * 
   * - If **Period** is set to **Year**, the value of **UsedTime** can be 1 to 5.
   * 
   * - If **Period** is set to **Month**, the value of **UsedTime** can be 1 to 11.
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

