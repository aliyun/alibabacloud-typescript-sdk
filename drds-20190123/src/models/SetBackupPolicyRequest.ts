// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The databases to be backed up. Separate multiple databases with commas (,).
   * 
   * >  This parameter takes effect only when the backup level is database level.
   * 
   * @example
   * test1,test2
   */
  backupDbNames?: string;
  /**
   * @remarks
   * The level of the backup. Valid values:
   * 
   * *   db: The database type.
   * *   instance: instance
   * 
   * @example
   * db
   */
  backupLevel?: string;
  /**
   * @remarks
   * Specifies whether to enable log Backup. Valid values:
   * 
   * *   1: enabled.
   * *   0: disabled.
   * 
   * @example
   * 1
   */
  backupLog?: string;
  /**
   * @remarks
   * The backup mode. Valid values:
   * 
   * *   **Logic **: logical backup
   * *   **phy**: physical backup
   * 
   * @example
   * phy
   */
  backupMode?: string;
  /**
   * @remarks
   * The retention period of the backup data. Value range: 7 to 730.
   * 
   * @example
   * 7
   */
  dataBackupRetentionPeriod?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The log retention period. Valid values: 7 to 730. This value must be less than or equal to the number of data backup days.
   * 
   * @example
   * 7
   */
  logBackupRetentionPeriod?: string;
  /**
   * @remarks
   * The end time of the backup.
   * 
   * @example
   * 12:30:30
   */
  preferredBackupEndTime?: string;
  /**
   * @remarks
   * The backup cycle. Valid values:
   * 
   * *   0: Monday
   * *   1: Tuesday
   * *   2: Wednesday
   * *   3: Thursday
   * *   4: Friday
   * *   5: Saturday
   * *   6: Sunday
   * 
   * @example
   * 0
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The start time of the backup.
   * 
   * @example
   * 11:30:30
   */
  preferredBackupStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupDbNames: 'BackupDbNames',
      backupLevel: 'BackupLevel',
      backupLog: 'BackupLog',
      backupMode: 'BackupMode',
      dataBackupRetentionPeriod: 'DataBackupRetentionPeriod',
      drdsInstanceId: 'DrdsInstanceId',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      preferredBackupEndTime: 'PreferredBackupEndTime',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupStartTime: 'PreferredBackupStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDbNames: 'string',
      backupLevel: 'string',
      backupLog: 'string',
      backupMode: 'string',
      dataBackupRetentionPeriod: 'string',
      drdsInstanceId: 'string',
      logBackupRetentionPeriod: 'string',
      preferredBackupEndTime: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

