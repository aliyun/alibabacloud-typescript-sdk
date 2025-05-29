// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupJobResponseBody extends $dara.Model {
  /**
   * @example
   * 1111111111
   */
  backupId?: string;
  /**
   * @example
   * 123
   */
  backupJobId?: string;
  /**
   * @example
   * Automated
   */
  backupMode?: string;
  /**
   * @example
   * backup
   */
  backupStatus?: string;
  /**
   * @example
   * 50%
   */
  process?: string;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @example
   * 2023-01-03T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      backupJobId: 'BackupJobId',
      backupMode: 'BackupMode',
      backupStatus: 'BackupStatus',
      process: 'Process',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      backupJobId: 'string',
      backupMode: 'string',
      backupStatus: 'string',
      process: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

