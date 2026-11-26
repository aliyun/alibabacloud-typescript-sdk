// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backup set ID.
   * 
   * > You can call the [DescribeDataBackups](https://help.aliyun.com/document_detail/210093.html) operation to query the IDs of all backup sets for the target instance.
   * 
   * @example
   * 1111111111
   */
  backupId?: string;
  /**
   * @remarks
   * The backup task ID.
   * 
   * @example
   * 123
   */
  backupJobId?: string;
  /**
   * @remarks
   * The backup mode. Valid values:
   * * **Automated**: automatic backup
   * * **Manual**: manual backup
   * 
   * @example
   * Automated
   */
  backupMode?: string;
  /**
   * @remarks
   * The backup status. Valid values:
   * * **schedule**: initializing
   * * **check**: checking
   * * **backup**: backing up
   * * **finish**: completed
   * 
   * @example
   * backup
   */
  backupStatus?: string;
  /**
   * @remarks
   * The progress percentage of the backup task.
   * 
   * @example
   * 50%
   */
  process?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the backup task in UTC. The format is YYYY-MM-DDThh:mm:ssZ.
   * 
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

