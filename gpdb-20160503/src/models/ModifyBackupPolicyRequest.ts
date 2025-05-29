// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days for which data backup files are retained. Default value: 7. Maximum value: 7. Valid values: 1 to 7.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic point-in-time backup.
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  enableRecoveryPoint?: boolean;
  /**
   * @remarks
   * The cycle based on which backups are performed. If more than one day of the week is specified, the days of the week are separated by commas (,). Valid values:
   * 
   * *   Monday
   * *   Tuesday
   * *   Wednesday
   * *   Thursday
   * *   Friday
   * *   Saturday
   * *   Sunday
   * 
   * This parameter is required.
   * 
   * @example
   * Tuesday, Thursday, Saturday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The backup window. Specify the backup window in the HH:mmZ-HH:mmZ format. The backup window must be in UTC. Default value: 00:00-01:00.
   * 
   * This parameter is required.
   * 
   * @example
   * 15:00Z-16:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The frequency of point-in-time backup.
   * 
   * *   1: per hour
   * *   2: per 2 hours
   * *   4: per 4 hours
   * *   8: per 8 hours
   * 
   * Default value: 8.
   * 
   * @example
   * 8
   */
  recoveryPointPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      DBInstanceId: 'DBInstanceId',
      enableRecoveryPoint: 'EnableRecoveryPoint',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      recoveryPointPeriod: 'RecoveryPointPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'number',
      DBInstanceId: 'string',
      enableRecoveryPoint: 'boolean',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      recoveryPointPeriod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

