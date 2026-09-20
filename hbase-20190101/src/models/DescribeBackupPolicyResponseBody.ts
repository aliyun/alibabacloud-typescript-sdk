// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of days for which backups are retained.
   * 
   * @example
   * 10
   */
  backupRetentionPeriod?: string;
  /**
   * @remarks
   * The UTC time when the backup ends.
   * 
   * @example
   * 18:00Z
   */
  preferredBackupEndTimeUTC?: string;
  /**
   * @remarks
   * The backup cycle. For example, Friday indicates that the backup is performed every Friday.
   * 
   * @example
   * Friday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The UTC time when the backup starts.
   * 
   * @example
   * 17:00Z
   */
  preferredBackupStartTimeUTC?: string;
  /**
   * @remarks
   * The backup time range in the current time zone.
   * 
   * @example
   * 01:00-02:00
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 94AC38B6-7C6D-45B2-BC03-B8750071A482
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      preferredBackupEndTimeUTC: 'PreferredBackupEndTimeUTC',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupStartTimeUTC: 'PreferredBackupStartTimeUTC',
      preferredBackupTime: 'PreferredBackupTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'string',
      preferredBackupEndTimeUTC: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupStartTimeUTC: 'string',
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

