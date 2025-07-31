// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupTasksResponseBodyBackupJobs extends $dara.Model {
  /**
   * @remarks
   * The backup task status. Valid values:
   * 
   * *   **Scheduled**: The backup task is in planning. Regular backup tasks that have not started are also in this state.
   * *   **Checking**: The instance is being checked before the backup.
   * *   **Backuping**: The backup task is in progress.
   * *   **Finished**: The backup task is completed.
   * 
   * @example
   * Scheduled
   */
  backupSetStatus?: string;
  /**
   * @remarks
   * The start time of the backup task.
   * 
   * @example
   * 2024-01-16T11:04:56Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The ID of the backup task.
   * 
   * @example
   * 170034
   */
  backupjobId?: string;
  /**
   * @remarks
   * The backup mode. Valid values:
   * 
   * *   **Automated**: automatic backup
   * *   **Manual**: manual backup
   * 
   * @example
   * Manual
   */
  jobMode?: string;
  /**
   * @remarks
   * The progress of the backup task. Unit: %. The progress is returned only for running backup tasks.
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
   * The details of the backup task.
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

