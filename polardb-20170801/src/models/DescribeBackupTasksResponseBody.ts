// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupTasksResponseBodyItemsBackupJob extends $dara.Model {
  backupJobId?: string;
  backupProgressStatus?: string;
  jobMode?: string;
  process?: string;
  startTime?: string;
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

