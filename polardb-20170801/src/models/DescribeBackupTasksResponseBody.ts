// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupTasksResponseBodyItemsBackupJob extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup task.
   * 
   * @example
   * 11111111
   */
  backupJobId?: string;
  /**
   * @remarks
   * The state of the backup task. Valid values:
   * 
   * *   **NoStart**
   * *   **Preparing**
   * *   **Waiting**
   * *   **Uploading**
   * *   **Checking**
   * *   **Finished**
   * 
   * @example
   * NoStart
   */
  backupProgressStatus?: string;
  /**
   * @remarks
   * The backup mode. Valid values:
   * 
   * *   **Automated**
   * *   **Manual**
   * 
   * @example
   * Automated
   */
  jobMode?: string;
  /**
   * @remarks
   * The progress of the backup task in percentage.
   * 
   * @example
   * 0
   */
  process?: string;
  /**
   * @remarks
   * The time when the backup task started. The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2020-08-08T07:24:01Z
   */
  startTime?: string;
  /**
   * @remarks
   * The type of the backup task. Valid values:
   * 
   * *   **TempBackupTask**: The backup task is an adhoc backup task.
   * *   **NormalBackupTask**: The backup task is a common backup task.
   * 
   * @example
   * NormalBackupTask
   */
  taskAction?: string;
  static names(): { [key: string]: string } {
    return {
      backupJobId: 'BackupJobId',
      backupProgressStatus: 'BackupProgressStatus',
      jobMode: 'JobMode',
      process: 'Process',
      startTime: 'StartTime',
      taskAction: 'TaskAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJobId: 'string',
      backupProgressStatus: 'string',
      jobMode: 'string',
      process: 'string',
      startTime: 'string',
      taskAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTasksResponseBodyItems extends $dara.Model {
  backupJob?: DescribeBackupTasksResponseBodyItemsBackupJob[];
  static names(): { [key: string]: string } {
    return {
      backupJob: 'BackupJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJob: { 'type': 'array', 'itemType': DescribeBackupTasksResponseBodyItemsBackupJob },
    };
  }

  validate() {
    if(Array.isArray(this.backupJob)) {
      $dara.Model.validateArray(this.backupJob);
    }
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
  items?: DescribeBackupTasksResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FA8C1EF1-E3D4-44D7-B809-823187******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeBackupTasksResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

