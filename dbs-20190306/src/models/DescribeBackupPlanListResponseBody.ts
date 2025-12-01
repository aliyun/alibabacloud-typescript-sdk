// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPlanListResponseBodyItemsBackupPlanDetail extends $dara.Model {
  /**
   * @remarks
   * Backup gateway ID.
   * 
   * @example
   * 827362187368736
   */
  backupGatewayId?: number;
  /**
   * @remarks
   * Backup method. The return values are as follows:
   * - **logical**: Logical backup
   * - **physical**: Physical backup
   * - **duplication**: Replication backup
   * 
   * @example
   * logical
   */
  backupMethod?: string;
  /**
   * @remarks
   * Backup objects.
   */
  backupObjects?: string;
  /**
   * @remarks
   * Full backup cycle. The return values are as follows:
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
   * Timestamp of the backup plan creation.
   * 
   * @example
   * 1582527713000
   */
  backupPlanCreateTime?: number;
  /**
   * @remarks
   * Backup plan ID.
   * 
   * @example
   * dbstooi01eXXXX
   */
  backupPlanId?: string;
  /**
   * @remarks
   * Backup plan name.
   * 
   * @example
   * dbstooi01e****
   */
  backupPlanName?: string;
  /**
   * @remarks
   * Backup plan status. The return values are as follows:
   * - **wait**: Not configured
   * - **init**: Not started (pre-check failed)
   * - **running**: Running
   * - **stop**: Failed
   * - **pause**: Paused
   * - **locked**: Locked
   * - **check_pass**: Pre-check passed
   * 
   * @example
   * init
   */
  backupPlanStatus?: string;
  /**
   * @remarks
   * Backup data retention period, with a value range of 0 to 1825 days.
   * 
   * @example
   * 365
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * Download server directory of the backup set
   */
  backupSetDownloadDir?: string;
  /**
   * @remarks
   * Full data format for backup set download:
   * * **Native**
   * * **SQL**
   * * **CSV**
   * * **JSON**
   * 
   * @example
   * SQL
   */
  backupSetDownloadFullDataFormat?: string;
  /**
   * @remarks
   * Backup set download backup gateway ID.
   * 
   * @example
   * 123123
   */
  backupSetDownloadGatewayId?: number;
  /**
   * @remarks
   * Backup set download full data format:
   * * **Native**
   * * **SQL**
   * * **CSV**
   * * **JSON**
   * 
   * @example
   * SQL
   */
  backupSetDownloadIncrementDataFormat?: string;
  /**
   * @remarks
   * Backup set download target type.
   * 
   * > The only value is: agent, indicating that the backup gateway is installed.
   * 
   * @example
   * agent
   */
  backupSetDownloadTargetType?: string;
  /**
   * @remarks
   * Full backup start time, in the format HH:mm.
   * 
   * @example
   * 14:22
   */
  backupStartTime?: string;
  /**
   * @remarks
   * Built-in storage type. The return values are as follows:
   * 
   * - Empty (default): Backup data is stored on the user\\"s OSS.
   * - system: Backup data is stored on the built-in OSS of DBS.
   * 
   * @example
   * system
   */
  backupStorageType?: string;
  /**
   * @remarks
   * Start time for the database restore period, with a return value of 1554560477000.
   * 
   * @example
   * 1554560477000
   */
  beginTimestampForRestore?: number;
  /**
   * @remarks
   * UID for cross-Aliyun account backup.
   * 
   * @example
   * 2xxx7778xxxxxxxxxx
   */
  crossAliyunId?: string;
  /**
   * @remarks
   * RAM role name for cross-Aliyun account backup.
   * 
   * @example
   * test123
   */
  crossRoleName?: string;
  /**
   * @remarks
   * Database type.
   * 
   * @example
   * MySQL
   */
  databaseType?: string;
  /**
   * @remarks
   * Time (in days) to convert to archive cold backup storage.
   * 
   * @example
   * 365
   */
  duplicationArchivePeriod?: number;
  /**
   * @remarks
   * Time (in days) to convert to infrequent access storage.
   * 
   * @example
   * 180
   */
  duplicationInfrequentAccessPeriod?: number;
  /**
   * @remarks
   * Indicates whether incremental log backup is enabled, with return values as follows:
   * - **true**: Enabled
   * - **false**: Disabled
   * 
   * @example
   * true
   */
  enableBackupLog?: boolean;
  /**
   * @remarks
   * End time of the database restorable period, in timestamp format.
   * 
   * @example
   * 1554560477000
   */
  endTimestampForRestore?: number;
  /**
   * @remarks
   * Pre-check task error message.
   * 
   * @example
   * can not connect to oracle instance orcl with user dbs
   */
  errMessage?: string;
  /**
   * @remarks
   * Instance class, with return values as follows:
   * 
   * - **micro**: Entry-level
   * - **small**: Low-spec
   * - **medium**: Medium-spec
   * - **large**: High-spec
   * - **xlarge**: High-spec (no traffic limit)
   * 
   * @example
   * micro
   */
  instanceClass?: string;
  /**
   * @remarks
   * OSS Bucket name.
   * 
   * @example
   * dbs-backup-1857XXXXX489
   */
  OSSBucketName?: string;
  /**
   * @remarks
   * OSS Bucket region.
   * 
   * @example
   * cn-hangzhou
   */
  OSSBucketRegion?: string;
  /**
   * @remarks
   * Indicates whether the automatic backup set download feature is enabled.
   * 
   * @example
   * true
   */
  openBackupSetAutoDownload?: boolean;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-aekzecovzti****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Database name.
   * 
   * @example
   * test
   */
  sourceEndpointDatabaseName?: string;
  /**
   * @remarks
   * Database instance ID.
   * 
   * @example
   * test
   */
  sourceEndpointInstanceID?: string;
  /**
   * @remarks
   * Location of the database, the return values are as follows:
   * - **rds**
   * - **ecs**
   * - **express**: Database connected via dedicated line/VPN gateway/smart gateway
   * - **agent**: Database connected via backup gateway
   * - **dds**: Cloud MongoDB
   * - **other**: Database connected directly via IP:Port
   * 
   * @example
   * rds
   */
  sourceEndpointInstanceType?: string;
  /**
   * @remarks
   * Database connection address.
   * 
   * @example
   * 100.*.*.10:33204
   */
  sourceEndpointIpPort?: string;
  /**
   * @remarks
   * Oracle SID name.
   * 
   * @example
   * test
   */
  sourceEndpointOracleSID?: string;
  /**
   * @remarks
   * Database region.
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * Database username.
   * 
   * @example
   * test
   */
  sourceEndpointUserName?: string;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      backupMethod: 'BackupMethod',
      backupObjects: 'BackupObjects',
      backupPeriod: 'BackupPeriod',
      backupPlanCreateTime: 'BackupPlanCreateTime',
      backupPlanId: 'BackupPlanId',
      backupPlanName: 'BackupPlanName',
      backupPlanStatus: 'BackupPlanStatus',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      backupSetDownloadDir: 'BackupSetDownloadDir',
      backupSetDownloadFullDataFormat: 'BackupSetDownloadFullDataFormat',
      backupSetDownloadGatewayId: 'BackupSetDownloadGatewayId',
      backupSetDownloadIncrementDataFormat: 'BackupSetDownloadIncrementDataFormat',
      backupSetDownloadTargetType: 'BackupSetDownloadTargetType',
      backupStartTime: 'BackupStartTime',
      backupStorageType: 'BackupStorageType',
      beginTimestampForRestore: 'BeginTimestampForRestore',
      crossAliyunId: 'CrossAliyunId',
      crossRoleName: 'CrossRoleName',
      databaseType: 'DatabaseType',
      duplicationArchivePeriod: 'DuplicationArchivePeriod',
      duplicationInfrequentAccessPeriod: 'DuplicationInfrequentAccessPeriod',
      enableBackupLog: 'EnableBackupLog',
      endTimestampForRestore: 'EndTimestampForRestore',
      errMessage: 'ErrMessage',
      instanceClass: 'InstanceClass',
      OSSBucketName: 'OSSBucketName',
      OSSBucketRegion: 'OSSBucketRegion',
      openBackupSetAutoDownload: 'OpenBackupSetAutoDownload',
      resourceGroupId: 'ResourceGroupId',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointIpPort: 'SourceEndpointIpPort',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointUserName: 'SourceEndpointUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      backupMethod: 'string',
      backupObjects: 'string',
      backupPeriod: 'string',
      backupPlanCreateTime: 'number',
      backupPlanId: 'string',
      backupPlanName: 'string',
      backupPlanStatus: 'string',
      backupRetentionPeriod: 'number',
      backupSetDownloadDir: 'string',
      backupSetDownloadFullDataFormat: 'string',
      backupSetDownloadGatewayId: 'number',
      backupSetDownloadIncrementDataFormat: 'string',
      backupSetDownloadTargetType: 'string',
      backupStartTime: 'string',
      backupStorageType: 'string',
      beginTimestampForRestore: 'number',
      crossAliyunId: 'string',
      crossRoleName: 'string',
      databaseType: 'string',
      duplicationArchivePeriod: 'number',
      duplicationInfrequentAccessPeriod: 'number',
      enableBackupLog: 'boolean',
      endTimestampForRestore: 'number',
      errMessage: 'string',
      instanceClass: 'string',
      OSSBucketName: 'string',
      OSSBucketRegion: 'string',
      openBackupSetAutoDownload: 'boolean',
      resourceGroupId: 'string',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointIpPort: 'string',
      sourceEndpointOracleSID: 'string',
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

export class DescribeBackupPlanListResponseBodyItems extends $dara.Model {
  backupPlanDetail?: DescribeBackupPlanListResponseBodyItemsBackupPlanDetail[];
  static names(): { [key: string]: string } {
    return {
      backupPlanDetail: 'BackupPlanDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanDetail: { 'type': 'array', 'itemType': DescribeBackupPlanListResponseBodyItemsBackupPlanDetail },
    };
  }

  validate() {
    if(Array.isArray(this.backupPlanDetail)) {
      $dara.Model.validateArray(this.backupPlanDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * InvalidParameterValid
   */
  errCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * The specified parameter %s value is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Details of the backup plans.
   */
  items?: DescribeBackupPlanListResponseBodyItems;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of records per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 4F1888AC-1138-4995-B9FE-D2734F61C058
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of backup plans.
   * 
   * @example
   * 100
   */
  totalElements?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 4
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      items: DescribeBackupPlanListResponseBodyItems,
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

