// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * 7
   */
  backupRetentionPeriod?: number;
  /**
   * @example
   * 123124
   */
  backupSize?: string;
  /**
   * @example
   * Monday
   */
  preferredBackupPeriod?: string;
  /**
   * @example
   * 15:00Z-16:00Z
   */
  preferredBackupTime?: string;
  /**
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  /**
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

