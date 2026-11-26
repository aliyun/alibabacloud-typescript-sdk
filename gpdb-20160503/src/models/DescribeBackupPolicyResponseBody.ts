// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The retention period of data backups in days.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * Indicates whether automatic recovery points are enabled. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  enableRecoveryPoint?: boolean;
  /**
   * @remarks
   * The backup cycle. Separate multiple values with commas (,). Valid values:
   * 
   * - **Monday**: Monday.
   * - **Tuesday**: Tuesday.
   * - **Wednesday**: Wednesday.
   * - **Thursday**: Thursday.
   * - **Friday**: Friday.
   * - **Saturday**: Saturday.
   * - **Sunday**: Sunday.
   * 
   * @example
   * Wednesday,Friday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The backup time. Format: HH:mmZ-HH:mmZ (UTC).
   * 
   * @example
   * 12:00Z-13:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The recovery point frequency. Valid values:
   * 
   * - **1**: Every hour.
   * - **2**: Every two hours.
   * - **4**: Every four hours.
   * - **8**: Every eight hours.
   * 
   * @example
   * 1
   */
  recoveryPointPeriod?: string;
  /**
   * @remarks
   * The request ID.
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

