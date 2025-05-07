// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDBBackupDownloadLinkByDB } from "./DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDbbackupDownloadLinkByDb";


export class DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDB extends $dara.Model {
  backupDownloadLinkByDB?: DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDBBackupDownloadLinkByDB[];
  static names(): { [key: string]: string } {
    return {
      backupDownloadLinkByDB: 'BackupDownloadLinkByDB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDownloadLinkByDB: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDBBackupDownloadLinkByDB },
    };
  }

  validate() {
    if(Array.isArray(this.backupDownloadLinkByDB)) {
      $dara.Model.validateArray(this.backupDownloadLinkByDB);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

