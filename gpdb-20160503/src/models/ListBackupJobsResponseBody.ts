// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBackupJobsResponseBodyItemsBackupJob extends $dara.Model {
  /**
   * @remarks
   * The backup job ID.
   * 
   * @example
   * 123
   */
  backupJobId?: string;
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
  backupMode?: string;
  /**
   * @remarks
   * The backup status. Valid values:
   * 
   * *   **Success**
   * *   **Failure**
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * The progress of the backup job.
   * 
   * @example
   * 50%
   */
  process?: string;
  /**
   * @remarks
   * The time when the backup job started. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-11T09:26:43Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupJobId: 'BackupJobId',
      backupMode: 'BackupMode',
      backupStatus: 'BackupStatus',
      process: 'Process',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJobId: 'string',
      backupMode: 'string',
      backupStatus: 'string',
      process: 'string',
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

export class ListBackupJobsResponseBodyItems extends $dara.Model {
  backupJob?: ListBackupJobsResponseBodyItemsBackupJob[];
  static names(): { [key: string]: string } {
    return {
      backupJob: 'BackupJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJob: { 'type': 'array', 'itemType': ListBackupJobsResponseBodyItemsBackupJob },
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

export class ListBackupJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried backup jobs.
   */
  items?: ListBackupJobsResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
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
      items: ListBackupJobsResponseBodyItems,
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

