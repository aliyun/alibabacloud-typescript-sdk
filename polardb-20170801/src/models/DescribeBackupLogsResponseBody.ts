// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupLogsResponseBodyItemsBackupLog extends $dara.Model {
  backupLogEndTime?: string;
  backupLogId?: string;
  backupLogName?: string;
  backupLogSize?: string;
  backupLogStartTime?: string;
  downloadLink?: string;
  intranetDownloadLink?: string;
  linkExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupLogEndTime: 'BackupLogEndTime',
      backupLogId: 'BackupLogId',
      backupLogName: 'BackupLogName',
      backupLogSize: 'BackupLogSize',
      backupLogStartTime: 'BackupLogStartTime',
      downloadLink: 'DownloadLink',
      intranetDownloadLink: 'IntranetDownloadLink',
      linkExpiredTime: 'LinkExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupLogEndTime: 'string',
      backupLogId: 'string',
      backupLogName: 'string',
      backupLogSize: 'string',
      backupLogStartTime: 'string',
      downloadLink: 'string',
      intranetDownloadLink: 'string',
      linkExpiredTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeBackupLogsResponseBody extends $dara.Model {
  items?: DescribeBackupLogsResponseBodyItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 2
   */
  pageRecordCount?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ADAC63DB-0691-4ECE-949A-FAEA68******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 2
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
      items: DescribeBackupLogsResponseBodyItems,
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

