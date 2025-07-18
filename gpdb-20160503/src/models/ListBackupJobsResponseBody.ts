// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBackupJobsResponseBodyItemsBackupJob extends $dara.Model {
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
   * Success
   */
  backupStatus?: string;
  /**
   * @example
   * 50%
   */
  process?: string;
  /**
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
  items?: ListBackupJobsResponseBodyItems;
  /**
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

