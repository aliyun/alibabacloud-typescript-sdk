// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of days to retain data backups.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * Indicates whether real-time log backup is enabled. Valid values:
   * 
   * - **Enable**: enabled.
   * 
   * - **Disable**: disabled.
   * 
   * @example
   * true
   */
  enableBackupLog?: string;
  /**
   * @remarks
   * The number of days to retain log backups.
   * 
   * @example
   * 7
   */
  logBackupRetentionPeriod?: number;
  /**
   * @remarks
   * The data backup cycle. Separate multiple values with commas (,). Valid values:
   * 
   * - Monday
   * 
   * - Tuesday
   * 
   * - Wednesday
   * 
   * - Thursday
   * 
   * - Friday
   * 
   * - Saturday
   * 
   * - Sunday
   * 
   * @example
   * Wednesday,Saturday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The data backup time. The time is in the HH:mmZ-HH:mmZ format.
   * 
   * @example
   * 15:00Z-16:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      enableBackupLog: 'EnableBackupLog',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'number',
      enableBackupLog: 'string',
      logBackupRetentionPeriod: 'number',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
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

