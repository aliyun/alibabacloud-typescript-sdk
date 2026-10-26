// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMigrateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the cloud migration task. Valid values:
   * * **FULL**: restores data by using a full backup file. This value is applicable to the first migration or full data recovery scenarios.
   * * **UPDF**: restores incremental data by using an incremental backup file or log file. This value is applicable to incremental synchronization scenarios based on an existing full backup.
   * 
   * This parameter is required.
   * 
   * @example
   * FULL
   */
  backupMode?: string;
  /**
   * @remarks
   * The consistency check method used after the database is opened. This parameter takes effect only when IsOnlineDB is set to True. Valid values:
   * 
   * - **SyncExecuteDBCheck**: synchronously executes the database check. This value is applicable to scenarios that require high data consistency.
   * - **AsyncExecuteDBCheck**: asynchronously executes the database check. This value provides higher performance but may delay the discovery of potential issues.
   * 
   * Default value: **AsyncExecuteDBCheck** (compatible with SQL Server 2008 R2).
   * 
   * @example
   * AsyncExecuteDBCheck
   */
  checkDBMode?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the destination database.
   * 
   * This parameter is required.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  /**
   * @remarks
   * Specifies whether to bring the restored database online for user access. Valid values:
   * 
   * * **True**: brings the database online.
   * * **False**: does not bring the database online.
   * 
   * > * For SQL Server 2008 R2, this value is always True.
   * > * If **IsOnlineDB** is set to **True**, **BackupMode** must be set to **FULL**.
   * > * If **IsOnlineDB** is set to **False**, **BackupMode** must be set to **UPDF**.
   * 
   * This parameter is required.
   * 
   * @example
   * True
   */
  isOnlineDB?: string;
  /**
   * @remarks
   * Specifies whether to retain the database- and table-level Change Data Capture (CDC) switches and change table data. This parameter takes effect only when IsOnlineDB is set to True. Regardless of the value of this parameter, CDC jobs are not rebuilt.
   * 
   * @example
   * true
   */
  keepCDC?: boolean;
  /**
   * @remarks
   * The ID of the migration task. Valid values:
   * 
   * - If **BackupMode** is set to **FULL**, leave this parameter empty. This ensures compatibility with SQL Server 2008 R2.
   * - If **BackupMode** is set to **UPDF**, set this parameter to the ID of the corresponding FULL task. You can call the DescribeMigrateTasks operation to query the ID.
   * 
   * @example
   * None
   */
  migrateTaskId?: string;
  /**
   * @remarks
   * The shared URL of the backup file in OSS. The URL must be encoded. If multiple URLs exist, separate them with vertical bars (|) and then encode the string before passing it as the parameter value.
   * 
   * > This parameter is required for SQL Server 2008 R2.
   * 
   * @example
   * check_cdn_oss.sh www.******.mobi
   */
  OSSUrls?: string;
  /**
   * @remarks
   * The components of the OSS file. The value consists of the following three parts separated by colons (:):
   * - **OSS endpoint**: oss-ap-southeast-1.aliyuncs.com.
   * - **OSS bucket name**: rdsmssqlsingapore.
   * - **Backup file name in OSS**: autotest_2008R2_TestMigration_FULL.bak.
   * 
   * > This parameter is required for SQL Server versions later than 2008 R2.
   * 
   * @example
   * oss-ap-southeast-1.aliyuncs.com:rdsmssqlsingapore:autotest_2008R2_TestMigration_FULL.bak
   */
  ossObjectPositions?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupMode: 'BackupMode',
      checkDBMode: 'CheckDBMode',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      isOnlineDB: 'IsOnlineDB',
      keepCDC: 'KeepCDC',
      migrateTaskId: 'MigrateTaskId',
      OSSUrls: 'OSSUrls',
      ossObjectPositions: 'OssObjectPositions',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMode: 'string',
      checkDBMode: 'string',
      DBInstanceId: 'string',
      DBName: 'string',
      isOnlineDB: 'string',
      keepCDC: 'boolean',
      migrateTaskId: 'string',
      OSSUrls: 'string',
      ossObjectPositions: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

