// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupTasksResponseBodyBackupJobs extends $dara.Model {
  /**
   * @remarks
   * The status of the backup job.
   * 
   * - **Scheduled**: The backup job is scheduled. This includes regular backup jobs that have not started.
   * 
   * - **Checking**: The instance is being checked before the backup.
   * 
   * - **Backuping**: The backup is in progress.
   * 
   * - **Finished**: The backup is complete.
   * 
   * @example
   * Scheduled
   */
  backupSetStatus?: string;
  /**
   * @remarks
   * The start time of the backup.
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
   * The backup mode. Valid values:
   * 
   * - **Automated**: automatic backup.
   * 
   * - **Manual**: manual backup.
   * 
   * @example
   * Manual
   */
  jobMode?: string;
  /**
   * @remarks
   * The backup progress in percentage. The progress is displayed only for running backup jobs.
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
   * The details of the backup jobs.
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

