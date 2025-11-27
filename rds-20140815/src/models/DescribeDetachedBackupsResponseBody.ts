// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDetachedBackupsResponseBodyItemsBackup extends $dara.Model {
  /**
   * @remarks
   * The URL that is used to download the diagnostic report over the Internet. If the diagnostic report cannot be downloaded, an empty string is returned.
   * 
   * @example
   * http://rdsbak-hz-v3.oss-cn-hangzhou.aliyuncs.com/xxxxx
   */
  backupDownloadURL?: string;
  /**
   * @remarks
   * The end time of the backup task.
   * 
   * The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-02-13T12:20:00Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 321020562
   */
  backupId?: string;
  /**
   * @remarks
   * The URL that is used to download the log file over an internal network. If the log file cannot be downloaded, an empty string is returned.
   * 
   * @example
   * http://rdsbak-hz-v3.oss-cn-hangzhou-internal.aliyuncs.com/xxxxx
   */
  backupIntranetDownloadURL?: string;
  /**
   * @remarks
   * The method that is used to generate the data backup file. Valid values:
   * 
   * *   **Logical**: logical backup
   * *   **Physical**: physical backup
   * 
   * @example
   * Physical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The backup method. Valid values:
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
   * The backup size. Unit: bytes.
   * 
   * @example
   * 2167808
   */
  backupSize?: number;
  /**
   * @remarks
   * The start time of the backup task.
   * 
   * The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-02-03T12:20:00Z
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
   * The backup type of the backup file. Valid values:
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
   * The point in time at which the data in the backup set is consistent. The return value of this parameter is a timestamp.
   * 
   * >  If the instance runs MySQL 5.6, a timestamp is returned. Otherwise, the value 0 is returned.
   * 
   * @example
   * 1576506856
   */
  consistentTime?: number;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * test
   */
  DBInstanceComment?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the instance that generates the backup set. This parameter is used to indicate whether the instance that generates the backup set is a primary instance or a secondary instance.
   * 
   * @example
   * 5882781
   */
  hostInstanceID?: string;
  /**
   * @remarks
   * Indicates whether the backup set is available. Valid values:
   * 
   * *   **0**: The backup set is unavailable.
   * *   **1**: The backup set is available.
   * 
   * @example
   * 1
   */
  isAvail?: number;
  /**
   * @remarks
   * The status of the backup set that is used to restore individual databases or tables. Valid values:
   * 
   * *   **OK**: The backup set is normal.
   * *   **LARGE**: The backup set contains an abnormally large number of tables. It cannot be used to restore individual databases or tables.
   * *   **EMPTY**: The backup set is generated from a failed backup task.
   * 
   * @example
   * OK
   */
  metaStatus?: string;
  /**
   * @remarks
   * Indicates whether the data backup file can be deleted. Valid values:
   * 
   * *   **Enabled**
   * *   **Disabled**
   * 
   * @example
   * Disabled
   */
  storeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      backupDownloadURL: 'BackupDownloadURL',
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupIntranetDownloadURL: 'BackupIntranetDownloadURL',
      backupMethod: 'BackupMethod',
      backupMode: 'BackupMode',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      consistentTime: 'ConsistentTime',
      DBInstanceComment: 'DBInstanceComment',
      DBInstanceId: 'DBInstanceId',
      hostInstanceID: 'HostInstanceID',
      isAvail: 'IsAvail',
      metaStatus: 'MetaStatus',
      storeStatus: 'StoreStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDownloadURL: 'string',
      backupEndTime: 'string',
      backupId: 'string',
      backupIntranetDownloadURL: 'string',
      backupMethod: 'string',
      backupMode: 'string',
      backupSize: 'number',
      backupStartTime: 'string',
      backupStatus: 'string',
      backupType: 'string',
      consistentTime: 'number',
      DBInstanceComment: 'string',
      DBInstanceId: 'string',
      hostInstanceID: 'string',
      isAvail: 'number',
      metaStatus: 'string',
      storeStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDetachedBackupsResponseBodyItems extends $dara.Model {
  backup?: DescribeDetachedBackupsResponseBodyItemsBackup[];
  static names(): { [key: string]: string } {
    return {
      backup: 'Backup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backup: { 'type': 'array', 'itemType': DescribeDetachedBackupsResponseBodyItemsBackup },
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

export class DescribeDetachedBackupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried backup sets.
   */
  items?: DescribeDetachedBackupsResponseBodyItems;
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
  pageRecordCount?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A6D328C-84B8-40DC-BF49-6C73984D7494
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDetachedBackupsResponseBodyItems,
      pageNumber: 'string',
      pageRecordCount: 'string',
      requestId: 'string',
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

