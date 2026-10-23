// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupLogDownloadLinksResponseBodyBackupLogDownloadLinkItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the redo log backup.
   * 
   * @example
   * 78167430
   */
  backupLogId?: string;
  /**
   * @remarks
   * The public download link for the redo log backup.
   */
  downloadLink?: string;
  /**
   * @remarks
   * The error code for the individual record. Empty if the request is successful.
   * 
   * @example
   * BackupLogNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The internal network download link for the redo log backup.
   */
  intranetDownloadLink?: string;
  /**
   * @remarks
   * The expiration time of the download link in UTC.
   * 
   * @example
   * 2026-10-23T03:00:00Z
   */
  linkExpiredTime?: string;
  /**
   * @remarks
   * The error message for the individual record. Empty if the request is successful.
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
   * The details of the redo log backups.
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

