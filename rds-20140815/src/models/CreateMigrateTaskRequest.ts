// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMigrateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the cloud migration task. Valid values:
   * * **FULL**: performs a restore operation by using a full backup file. This value is applicable to first-time migrations or full data recovery scenarios.
   * * **UPDF**: restores incremental data by using an incremental backup file or log file. This value is applicable to incremental synchronization scenarios where a full backup already exists.
   * 
   * This parameter is required.
   * 
   * @example
   * FULL
   */
  backupMode?: string;
  /**
   * @remarks
   * The consistency check method after the database is brought online. This parameter takes effect only when IsOnlineDB is set to True. Valid values:
   * 
   * - **SyncExecuteDBCheck**: performs a synchronous database check. This value is applicable to scenarios that require high data consistency.
   * - **AsyncExecuteDBCheck**: performs an asynchronous database check. This value provides higher performance but may delay the detection of potential issues.
   * 
   * Default value: **AsyncExecuteDBCheck** (compatible with SQL Server 2008 R2).
   * 
   * @example
   * AsyncExecuteDBCheck
   */
  checkDBMode?: string;
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to query the instance ID.
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
   * Specifies whether to bring the restored database online so that users can access it. Valid values:
   * 
   * * **True**: Brings the database online.
   * * **False**: Does not bring the database online.
   * 
   * > * For SQL Server 2008 R2, this value is always True.
   * > * When **IsOnlineDB** is set to **True**, **BackupMode** must be set to **FULL**.
   * > * When **IsOnlineDB** is set to **False**, **BackupMode** must be set to **UPDF**.
   * 
   * This parameter is required.
   * 
   * @example
   * True
   */
  isOnlineDB?: string;
  /**
   * @remarks
   * The migration task ID. Valid values:
   * 
   * - When **BackupMode** is set to **FULL**, leave this parameter empty (compatible with SQL Server 2008 R2).
   * - When **BackupMode** is set to **UPDF**, set this parameter to the ID of the corresponding FULL task. You can call DescribeMigrateTasks to query the task ID.
   * 
   * @example
   * None
   */
  migrateTaskId?: string;
  /**
   * @remarks
   * The shared URL of the backup file on OSS (URL-encoded). If multiple URLs exist, separate them with vertical bars (|) before encoding, and then pass the encoded value.
   * 
   * > This parameter is required for SQL Server 2008 R2.
   * 
   * @example
   * check_cdn_oss.sh www.******.mobi
   */
  OSSUrls?: string;
  /**
   * @remarks
   * The OSS file information, which consists of the following three parts separated by colons (:):
   * - **OSS endpoint**: oss-ap-southeast-1.aliyuncs.com.
   * - **OSS bucket name**: rdsmssqlsingapore.
   * - **Backup file name on OSS**: autotest_2008R2_TestMigration_FULL.bak.
   * 
   * > This parameter is required for SQL Server versions later than SQL Server 2008 R2.
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

