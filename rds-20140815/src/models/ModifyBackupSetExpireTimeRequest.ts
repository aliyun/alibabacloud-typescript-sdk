// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupSetExpireTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set. You can call the DescribeBackups operation to query the ID. The supported backup set must meet the following conditions:
   * 
   * - Engine (database type): SQLServer
   * - BackupMode (backup mode): Manual (manual backup)
   * - BackupMethod (backup method): Physical (physical backup)
   * - BackupType (backup type): FullBackup (full backup)
   * - BackupStatus (backup set status): Success (backup completed)
   * 
   * This parameter is required.
   * 
   * @example
   * 262186****
   */
  backupId?: number;
  /**
   * @remarks
   * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-7xv8f2zcia0e4****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The new expiration time of the backup set. Specify the time in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * The specified time cannot be earlier than the current expiration time. You can call the DescribeBackups operation to query the current expiration time (ExpectExpireTime).
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

