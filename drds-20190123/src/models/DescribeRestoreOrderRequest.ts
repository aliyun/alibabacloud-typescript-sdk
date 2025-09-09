// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database involved in the backup.
   * 
   * @example
   * drds_flashback
   */
  backupDbNames?: string;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 1918df27-4563-11e9-8403-af4fbe******
   */
  backupId?: string;
  /**
   * @remarks
   * The level of the backup. Valid values:
   * 
   * *   **DB**: The database Level
   * *   **instance **: instance level
   * 
   * @example
   * db
   */
  backupLevel?: string;
  /**
   * @remarks
   * The backup mode. Valid values: **logic** or **phy**.
   * 
   * @example
   * phy
   */
  backupMode?: string;
  /**
   * @remarks
   * The ID of the instance for which to modify the backup policy.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The preferred backup time.
   * 
   * @example
   * 2019-09-16 15:12:53
   */
  preferredBackupTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupDbNames: 'BackupDbNames',
      backupId: 'BackupId',
      backupLevel: 'BackupLevel',
      backupMode: 'BackupMode',
      drdsInstanceId: 'DrdsInstanceId',
      preferredBackupTime: 'PreferredBackupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDbNames: 'string',
      backupId: 'string',
      backupLevel: 'string',
      backupMode: 'string',
      drdsInstanceId: 'string',
      preferredBackupTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

