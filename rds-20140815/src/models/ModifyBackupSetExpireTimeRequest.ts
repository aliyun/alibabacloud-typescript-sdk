// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupSetExpireTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The backup set ID. You can invoke DescribeBackups to query the backup set ID. The backup set must meet the following conditions:
   * 
   * - Engine (database type): SQLServer
   * - BackupMode (backup pattern): Manual (manual backup)
   * - BackupMethod: Physical (physical backup)
   * - BackupType: FullBackup (full backup)
   * - BackupStatus: Success (backup completed)
   * 
   * This parameter is required.
   * 
   * @example
   * 262186****
   */
  backupId?: number;
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-7xv8f2zcia0e4****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The time to which you want to extend the expiration time of the backup set. Specify the time in the yyyy-MM-ddTHH:mmZ format (UTC).
   * 
   * The specified time cannot be earlier than the current expiration time. You can call DescribeBackups to query the current expiration time (ExpectExpireTime).
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-07-15T12:10:23Z
   */
  expectExpireTime?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      DBInstanceId: 'DBInstanceId',
      expectExpireTime: 'ExpectExpireTime',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'number',
      DBInstanceId: 'string',
      expectExpireTime: 'string',
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

