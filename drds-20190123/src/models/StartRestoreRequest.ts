// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRestoreRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database to be restored. Separate multiple databases with commas (,).
   * 
   * >  If you do not specify any database name, all databases in the instance are restored by default.
   * 
   * @example
   * test1,test2
   */
  backupDbNames?: string;
  /**
   * @remarks
   * The ID of the DRDS backup set.
   * 
   * >  If you do not specify this parameter, the system restores data by time (PreferredBackupTime).
   * 
   * @example
   * 23***
   */
  backupId?: string;
  /**
   * @remarks
   * The level of the backup. Valid values:
   * 
   * *   db: The database level.
   * *   instance: the instance level.
   * 
   * @example
   * db
   */
  backupLevel?: string;
  /**
   * @remarks
   * The backup method. Valid values:
   * 
   * *   logic: the logical backup.
   * *   phy: fast backup
   * 
   * @example
   * phy
   */
  backupMode?: string;
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rds********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The restoration time of the instance, in the format of`  yyyy-MM-dd HH:mm:ss `.
   * 
   * @example
   * 2019-09-10 20:18:18
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

