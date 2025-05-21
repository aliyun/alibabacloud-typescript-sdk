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
   * Specifies whether to enable the origin protocol policy.
   * 
   * *   true: enabled
   * *   false: disabled
   * 
   * @example
   * true
   */
  enableBackupLog?: string;
  /**
   * @remarks
   * The number of days for which log backup files are retained.
   * 
   * @example
   * 7
   */
  logBackupRetentionPeriod?: number;
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
   * @example
   * Tuesday,Friday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The backup time. Specify the time in the HH:mmZ-HH:mmZ format.
   * 
   * @example
   * 15:00Z-16:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The ID of the request.
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

