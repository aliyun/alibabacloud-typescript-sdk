// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSupabaseBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The interval between automatic recovery points, in minutes. A value greater than 0 indicates that automatic recovery points are enabled. If the feature is disabled, -1 is returned.
   * 
   * @example
   * -1
   */
  backupInterval?: number;
  /**
   * @remarks
   * The data backup retention period, in days.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * Indicates whether automatic recovery points are enabled. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   */
  enableRecoveryPoint?: boolean;
  /**
   * @remarks
   * The data backup cycle. Separate multiple values with commas (,). Valid values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.
   * 
   * @example
   * Wednesday,Friday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The data backup time window in UTC. The format is HH:mmZ-HH:mmZ.
   * 
   * @example
   * 01:00Z-02:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The interval for the automatic creation of recovery points, in hours. Valid values: 1/6 (10 minutes), 1/2 (30 minutes), 1, 2, 4, and 8. This value is valid only when EnableRecoveryPoint is set to true. If automatic recovery points are shutdown, 0 is returned.
   * 
   * @example
   * 0
   */
  recoveryPointPeriod?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupInterval: 'BackupInterval',
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
      backupInterval: 'number',
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

