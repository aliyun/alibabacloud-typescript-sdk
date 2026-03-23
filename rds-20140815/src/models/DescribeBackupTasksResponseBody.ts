// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupTasksResponseBodyItemsBackupJob extends $dara.Model {
  backupId?: string;
  backupJobId?: string;
  backupProgressStatus?: string;
  backupStatus?: string;
  jobMode?: string;
  process?: string;
  taskAction?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      backupJobId: 'BackupJobId',
      backupProgressStatus: 'BackupProgressStatus',
      backupStatus: 'BackupStatus',
      jobMode: 'JobMode',
      process: 'Process',
      taskAction: 'TaskAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      backupJobId: 'string',
      backupProgressStatus: 'string',
      backupStatus: 'string',
      jobMode: 'string',
      process: 'string',
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

