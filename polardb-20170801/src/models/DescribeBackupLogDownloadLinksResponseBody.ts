// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupLogDownloadLinksResponseBodyBackupLogDownloadLinkItem extends $dara.Model {
  /**
   * @remarks
   * The redo log backup ID.
   * 
   * @example
   * 78167430
   */
  backupLogId?: string;
  /**
   * @remarks
   * The public download link of the redo log backup.
   */
  downloadLink?: string;
  /**
   * @remarks
   * The error code for the single entry. Empty if the operation is successful.
   * 
   * @example
   * BackupLogNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The internal network download link of the redo log backup.
   */
  intranetDownloadLink?: string;
  /**
   * @remarks
   * The expiration time of the download links, in UTC.
   * 
   * @example
   * 2026-10-23T03:00:00Z
   */
  linkExpiredTime?: string;
  /**
   * @remarks
   * The error message for the single entry. Empty if the operation is successful.
   * 
   * @example
   * The specified archived log file does not exist or has been cleaned up.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      backupLogId: 'BackupLogId',
      downloadLink: 'DownloadLink',
      errorCode: 'ErrorCode',
      intranetDownloadLink: 'IntranetDownloadLink',
      linkExpiredTime: 'LinkExpiredTime',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupLogId: 'string',
      downloadLink: 'string',
      errorCode: 'string',
      intranetDownloadLink: 'string',
      linkExpiredTime: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupLogDownloadLinksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The redo log backup details.
   */
  backupLogDownloadLinkItem?: DescribeBackupLogDownloadLinksResponseBodyBackupLogDownloadLinkItem[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD35F3-F3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupLogDownloadLinkItem: 'BackupLogDownloadLinkItem',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupLogDownloadLinkItem: { 'type': 'array', 'itemType': DescribeBackupLogDownloadLinksResponseBodyBackupLogDownloadLinkItem },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.backupLogDownloadLinkItem)) {
      $dara.Model.validateArray(this.backupLogDownloadLinkItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

