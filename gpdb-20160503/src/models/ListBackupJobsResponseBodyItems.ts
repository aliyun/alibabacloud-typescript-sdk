// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListBackupJobsResponseBodyItemsBackupJob } from "./ListBackupJobsResponseBodyItemsBackupJob";


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

