// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBackupLogsResponseBodyItemsBackupLog } from "./DescribeBackupLogsResponseBodyItemsBackupLog";


export class DescribeBackupLogsResponseBodyItems extends $dara.Model {
  backupLog?: DescribeBackupLogsResponseBodyItemsBackupLog[];
  static names(): { [key: string]: string } {
    return {
      backupLog: 'BackupLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupLog: { 'type': 'array', 'itemType': DescribeBackupLogsResponseBodyItemsBackupLog },
    };
  }

  validate() {
    if(Array.isArray(this.backupLog)) {
      $dara.Model.validateArray(this.backupLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

