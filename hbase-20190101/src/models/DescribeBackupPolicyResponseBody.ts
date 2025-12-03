// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * 10
   */
  backupRetentionPeriod?: string;
  /**
   * @example
   * 18:00Z
   */
  preferredBackupEndTimeUTC?: string;
  /**
   * @example
   * Friday
   */
  preferredBackupPeriod?: string;
  /**
   * @example
   * 17:00Z
   */
  preferredBackupStartTimeUTC?: string;
  /**
   * @example
   * 01:00-02:00
   */
  preferredBackupTime?: string;
  /**
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

