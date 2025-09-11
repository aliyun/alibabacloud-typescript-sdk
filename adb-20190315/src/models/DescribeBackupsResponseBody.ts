// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsResponseBodyItemsBackup extends $dara.Model {
  /**
   * @remarks
   * The end time of the backup.
   * 
   * @example
   * 2022-06-02T16:00Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The expiration time of the backup set.
   * 
   * @example
   * 2022-07-02T16:00Z
   */
  backupExpiredTime?: string;
  /**
   * @remarks
   * The backup set ID.
   * 
   * @example
   * 32732****
   */
  backupId?: string;
  /**
   * @remarks
   * The backup method. Only Snapshot is returned.
   * 
   * @example
   * Snapshot
   */
  backupMethod?: string;
  /**
   * @remarks
   * The size of the backup set. Unit: bytes.
   * 
   * @example
   * 2167808
   */
  backupSize?: number;
  /**
   * @remarks
   * The start time of the backup.
   * 
   * @example
   * 2022-06-01T16:00Z
   */
  backupStartTime?: string;
  backupStatus?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * *   **FullBackup**
   * *   **IncrementalBackup**
   * 
   * @example
   * FullBackup
   */
  backupType?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * @example
   * am-bp18934i73vb5****
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupExpiredTime: 'BackupExpiredTime',
      backupId: 'BackupId',
      backupMethod: 'BackupMethod',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'string',
      backupExpiredTime: 'string',
      backupId: 'string',
      backupMethod: 'string',
      backupSize: 'number',
      backupStartTime: 'string',
      backupStatus: 'string',
      backupType: 'string',
      DBClusterId: 'string',
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
   * The free size of backup sets. Unit: bytes.
   * 
   * @example
   * 0
   */
  freeBackupSize?: number;
  /**
   * @remarks
   * The queried backup sets.
   */
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
   * The number of entries per page.
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
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The total size of backup sets. Unit: bytes.
   * 
   * @example
   * 64953700
   */
  totalBackupSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
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

