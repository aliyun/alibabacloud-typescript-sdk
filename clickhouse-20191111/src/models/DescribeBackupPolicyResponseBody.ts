// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backup retention period. Default value: 7 days. Valid values: 7 to 730. Unit: days.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * The backup size. Unit: MB.
   * 
   * @example
   * 123124
   */
  backupSize?: string;
  /**
   * @remarks
   * The backup cycle. Valid values:
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
   * Monday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The backup time in UTC.
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
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the backup service is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  switch?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      backupSize: 'BackupSize',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      requestId: 'RequestId',
      switch: 'Switch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'number',
      backupSize: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      requestId: 'string',
      switch: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

