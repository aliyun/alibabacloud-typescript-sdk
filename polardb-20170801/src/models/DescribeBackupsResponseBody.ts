// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsResponseBodyItemsBackup extends $dara.Model {
  /**
   * @remarks
   * The end time of the backup task. The time is displayed in UTC.
   * 
   * @example
   * 2020-11-15T07:30:20Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 61*******
   */
  backupId?: string;
  /**
   * @remarks
   * The backup method. Only **Snapshot** may be returned.
   * 
   * @example
   * Snapshot
   */
  backupMethod?: string;
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
   * The size of the backup set. Unit: bytes.
   * 
   * > After you delete the target snapshot backups, the storage space that is consumed by the backups is released. The released storage space is smaller than the size of the backup file, because the snapshots share specific data blocks. For more information, see [FAQ about backup](https://help.aliyun.com/document_detail/164881.html).
   * 
   * @example
   * 4639948800
   */
  backupSetSize?: string;
  /**
   * @remarks
   * The start time of the backup task. The time is displayed in UTC. Unit: seconds.
   * 
   * @example
   * 2020-11-15T07:30:05Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The status of the backup set. Valid values:
   * 
   * *   **Success**
   * *   **Failed**
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * The type of the backup. Only **FullBackup** may be returned.
   * 
   * @example
   * FullBackup
   */
  backupType?: string;
  /**
   * @remarks
   * The level of the backup set. Valid values:
   * 
   * *   **Level-1**
   * *   **Level-2**
   * 
   * @example
   * Level-1
   */
  backupsLevel?: string;
  /**
   * @remarks
   * The snapshot checkpoint time. The value follows the Unix time format. Unit: seconds.
   * 
   * @example
   * 1605425407
   */
  consistentTime?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The expected expiration time of the backup set (This parameter is supported only for clusters for which sparse backup is enabled).
   * 
   * @example
   * 2022-10-24T08:13:23Z
   */
  expectExpireTime?: string;
  /**
   * @remarks
   * The expected expiration type of the backup set (This parameter is supported only for instances that are enabled with sparse backup).
   * 
   * Valid values:
   * 
   * *   NEVER
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   EXPIRED
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DELAY
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * EXPIRED
   */
  expectExpireType?: string;
  /**
   * @remarks
   * Indicates whether the backup set is available. Valid values:
   * 
   * *   **0**: The backup set is unavailable.
   * *   **1**: The backup set is available.
   * 
   * @example
   * 0
   */
  isAvail?: string;
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupMethod: 'BackupMethod',
      backupMode: 'BackupMode',
      backupSetSize: 'BackupSetSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      backupsLevel: 'BackupsLevel',
      consistentTime: 'ConsistentTime',
      DBClusterId: 'DBClusterId',
      expectExpireTime: 'ExpectExpireTime',
      expectExpireType: 'ExpectExpireType',
      isAvail: 'IsAvail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'string',
      backupId: 'string',
      backupMethod: 'string',
      backupMode: 'string',
      backupSetSize: 'string',
      backupStartTime: 'string',
      backupStatus: 'string',
      backupType: 'string',
      backupsLevel: 'string',
      consistentTime: 'string',
      DBClusterId: 'string',
      expectExpireTime: 'string',
      expectExpireType: 'string',
      isAvail: 'string',
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
   * 1
   */
  pageRecordCount?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 24A1990B-4F6E-482B-B8CB-75C612******
   */
  requestId?: string;
  /**
   * @example
   * 4639948800
   */
  totalLevel2BackupSize?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalLevel2BackupSize: 'TotalLevel2BackupSize',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeBackupsResponseBodyItems,
      pageNumber: 'string',
      pageRecordCount: 'string',
      requestId: 'string',
      totalLevel2BackupSize: 'string',
      totalRecordCount: 'string',
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

