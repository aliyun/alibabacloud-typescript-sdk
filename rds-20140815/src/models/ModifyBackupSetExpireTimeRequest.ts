// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupSetExpireTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The backup set ID. You can call the DescribeBackups operation to query the backup set ID. The backup set must meet the following requirements:
   * 
   * *   The Engine parameter is SQLServer
   * *   The BackupMode parameter is set to Manual.
   * *   The BackupMethod parameter is set to Physical.
   * *   The BackupType parameter is set to FullBackup.
   * *   The BackupStatus parameter is set to Success.
   * 
   * This parameter is required.
   * 
   * @example
   * b-n8tpg24c6i0v****
   */
  backupId?: number;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The point in time to which you want to extend the expiration time of the backup set. Specify the time in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * The time cannot be earlier than the current expiration time. You can call the DescribeBackups operation to view the current expiration time of the backup set.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-06-17T12:10:23Z
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

