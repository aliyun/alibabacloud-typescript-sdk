// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupTasksResponseBodyBackupJobs extends $dara.Model {
  /**
   * @remarks
   * The backup job status. Valid values:
   * * **Scheduled**: The backup task is scheduled, including routine backup tasks that have not started.
   * * **Checking**: The instance is being checked before the backup.
   * * **Backuping**: The backup is in progress.
   * * **Finished**: The backup is completed.
   * 
   * @example
   * Scheduled
   */
  backupSetStatus?: string;
  /**
   * @remarks
   * The backup start time in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2024-01-16T11:04:56Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The backup job ID.
   * 
   * @example
   * 170034
   */
  backupjobId?: string;
  /**
   * @remarks
   * The backup pattern. Valid values:
   * * **Automated**: Automatic backup.
   * * **Manual**: Manual backup.
   * 
   * @example
   * Manual
   */
  jobMode?: string;
  /**
   * @remarks
   * The backup progress in percentage. The progress is displayed only for running backups.
   * 
   * @example
   * 18%
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetStatus: 'BackupSetStatus',
      backupStartTime: 'BackupStartTime',
      backupjobId: 'BackupjobId',
      jobMode: 'JobMode',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetStatus: 'string',
      backupStartTime: 'string',
      backupjobId: 'string',
      jobMode: 'string',
      progress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backup job details.
   */
  backupJobs?: DescribeBackupTasksResponseBodyBackupJobs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D648B367-15B6-1B42-BD4B-47507C9CC****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupJobs: 'BackupJobs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJobs: { 'type': 'array', 'itemType': DescribeBackupTasksResponseBodyBackupJobs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.backupJobs)) {
      $dara.Model.validateArray(this.backupJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

