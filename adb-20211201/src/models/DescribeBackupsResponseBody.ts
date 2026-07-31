// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsResponseBodyItemsBackup extends $dara.Model {
  backupEndTime?: string;
  backupExpiredTime?: string;
  backupId?: string;
  backupMethod?: string;
  backupRegion?: string;
  backupSize?: number;
  backupStartTime?: string;
  backupStatus?: string;
  backupType?: string;
  DBClusterId?: string;
  parentBackupId?: string;
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupExpiredTime: 'BackupExpiredTime',
      backupId: 'BackupId',
      backupMethod: 'BackupMethod',
      backupRegion: 'BackupRegion',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      DBClusterId: 'DBClusterId',
      parentBackupId: 'ParentBackupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'string',
      backupExpiredTime: 'string',
      backupId: 'string',
      backupMethod: 'string',
      backupRegion: 'string',
      backupSize: 'number',
      backupStartTime: 'string',
      backupStatus: 'string',
      backupType: 'string',
      DBClusterId: 'string',
      parentBackupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyItems extends $dara.Model {
  backup?: DescribeBackupsResponseBodyItemsBackup[];
  static names(): { [key: string]: string } {
    return {
      backup: 'Backup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backup: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyItemsBackup },
    };
  }

  validate() {
    if(Array.isArray(this.backup)) {
      $dara.Model.validateArray(this.backup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The free backup space. Unit: bytes.
   * 
   * @example
   * 0
   */
  freeBackupSize?: number;
  items?: DescribeBackupsResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of backup sets on the current page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CE17270B-F8F8-5A31-9DB4-DADDFDAD7940
   */
  requestId?: string;
  /**
   * @remarks
   * The total size of the backup sets. Unit: bytes.
   * 
   * @example
   * 64953700
   */
  totalBackupSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 300
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      freeBackupSize: 'FreeBackupSize',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalBackupSize: 'TotalBackupSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      freeBackupSize: 'number',
      items: DescribeBackupsResponseBodyItems,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalBackupSize: 'number',
      totalCount: 'string',
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

