// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMigrateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the migration task. Valid values:
   * 
   * *   **FULL**: The migration task migrates full backup files.
   * *   **UPDF**: The migration task migrates incremental or log backup files.
   * 
   * This parameter is required.
   * 
   * @example
   * FULL
   */
  backupMode?: string;
  /**
   * @remarks
   * The consistency check method for the database. Valid values:
   * 
   * *   **SyncExecuteDBCheck**: synchronous database check
   * *   **AsyncExecuteDBCheck**: asynchronous database check
   * 
   * Default value: **AsyncExecuteDBCheck** (compatible with SQL Server 2008 R2)
   * 
   * >  This parameter is valid when **IsOnlineDB** is set to **True**.
   * 
   * @example
   * AsyncExecuteDBCheck
   */
  checkDBMode?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk******
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
   * Specifies whether to make the restored database data available for user access. Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * >  Set the value to **True** for instances that run SQL Server 2008 R2.
   * 
   * This parameter is required.
   * 
   * @example
   * True
   */
  isOnlineDB?: string;
  /**
   * @remarks
   * The migration task ID.
   * 
   * *   If you set **BackupMode** to **FULL**, the value of this parameter is empty. The full backup mode is compatible with instance that runs SQL Server 2008 R2.
   * *   If you set **BackupMode** to **UPDF**, the value of this parameter is the ID of the required full migration task.
   * 
   * > *   If you set **IsOnlineDB** to **True**, the value of **BackupMode** must be **FULL**.
   * > *   If you set **IsOnlineDB** to **False**, the value of **BackupMode** must be **UPDF**.
   * 
   * @example
   * None
   */
  migrateTaskId?: string;
  /**
   * @remarks
   * The shared URL of the backup file in the OSS bucket. The URL must be encoded.
   * 
   * If you specify multiple URLs, separate them with vertical bars (|) and then encode them.
   * 
   * >  This parameter is required for instances that run SQL Server 2008 R2.
   * 
   * @example
   * check_cdn_oss.sh www.xxxxxx.mobi
   */
  OSSUrls?: string;
  /**
   * @remarks
   * The information about the backup file in the OSS bucket. The values consist of three parts that are separated by colons (:):
   * 
   * *   OSS endpoint: oss-ap-southeast-1.aliyuncs.com.
   * *   Name of the OSS bucket: rdsmssqlsingapore.
   * *   Key of the backup file in the OSS bucket: autotest_2008R2_TestMigration_FULL.bak.
   * 
   * > *   This parameter is optional for instances that run SQL Server 2008 R2.
   * > *   This parameter is required for instances that run a major engine version later than SQL Server 2008 R2.
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

