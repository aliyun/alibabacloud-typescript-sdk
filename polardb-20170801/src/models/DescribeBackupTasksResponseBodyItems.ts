// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBackupTasksResponseBodyItemsBackupJob } from "./DescribeBackupTasksResponseBodyItemsBackupJob";


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

