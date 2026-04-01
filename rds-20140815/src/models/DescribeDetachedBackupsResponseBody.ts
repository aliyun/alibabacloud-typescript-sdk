// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDetachedBackupsResponseBodyItemsBackup extends $dara.Model {
  backupDownloadURL?: string;
  backupEndTime?: string;
  backupId?: string;
  backupIntranetDownloadURL?: string;
  backupMethod?: string;
  backupMode?: string;
  backupSize?: number;
  backupStartTime?: string;
  backupStatus?: string;
  backupType?: string;
  consistentTime?: number;
  DBInstanceComment?: string;
  DBInstanceId?: string;
  hostInstanceID?: string;
  isAvail?: number;
  metaStatus?: string;
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

