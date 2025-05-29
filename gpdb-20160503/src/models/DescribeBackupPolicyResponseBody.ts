// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of days for which data backup files are retained.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * Indicates whether automatic point-in-time backup is enabled. Valid values:
   * 
   * *   **true**: Automatic point-in-time backup is enabled.
   * *   **false**: Automatic point-in-time backup is disabled.
   * 
   * @example
   * true
   */
  enableRecoveryPoint?: boolean;
  /**
   * @remarks
   * The cycle based on which backups are performed. If more than one day of the week is specified, the days of the week are separated by commas (,). Valid values:
   * 
   * *   **Monday**
   * *   **Tuesday**
   * *   **Wednesday**
   * *   **Thursday**
   * *   **Friday**
   * *   **Saturday**
   * *   **Sunday**
   * 
   * @example
   * Wednesday,Friday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The backup time. The time is in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 12:00Z-13:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The frequency of the point-in-time backup. Valid values:
   * 
   * *   **1**: per hour
   * *   **2**: per 2 hours
   * *   **4**: per 4 hours
   * *   **8**: per 8 hours
   * 
   * @example
   * 1
   */
  recoveryPointPeriod?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9E6B3287-A3E2-5A87-B8D8-E9**********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      enableRecoveryPoint: 'EnableRecoveryPoint',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      recoveryPointPeriod: 'RecoveryPointPeriod',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'number',
      enableRecoveryPoint: 'boolean',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      recoveryPointPeriod: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

