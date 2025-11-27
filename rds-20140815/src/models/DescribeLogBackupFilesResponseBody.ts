// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogBackupFilesResponseBodyItemsBinLogFile extends $dara.Model {
  /**
   * @remarks
   * The HTTP-based download URL of the log file. If the log file cannot be downloaded, an empty string is returned.
   * 
   * @example
   * http://rdsbak-hz-v3.oss-cn-hangzhou.aliyuncs.com/xxxxx
   */
  downloadLink?: string;
  /**
   * @remarks
   * The size of the log file. Unit: bytes.
   * 
   * @example
   * 788480
   */
  fileSize?: number;
  /**
   * @remarks
   * The URL that is used to download the log file over an internal network. If the log file cannot be downloaded, an empty string is returned. This URL is valid for one hour.
   * 
   * @example
   * http://rdsbak-hz-v3.oss-cn-hangzhou.aliyuncs.com/xxxxx
   */
  intranetDownloadLink?: string;
  /**
   * @remarks
   * The expiration time of the URL. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-03-01T15:04:13Z
   */
  linkExpiredTime?: string;
  /**
   * @remarks
   * The start time of the log file. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-10-31T08:40Z
   */
  logBeginTime?: string;
  /**
   * @remarks
   * The end time of the log file. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-10-31T08:40Z
   */
  logEndTime?: string;
  static names(): { [key: string]: string } {
    return {
      downloadLink: 'DownloadLink',
      fileSize: 'FileSize',
      intranetDownloadLink: 'IntranetDownloadLink',
      linkExpiredTime: 'LinkExpiredTime',
      logBeginTime: 'LogBeginTime',
      logEndTime: 'LogEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadLink: 'string',
      fileSize: 'number',
      intranetDownloadLink: 'string',
      linkExpiredTime: 'string',
      logBeginTime: 'string',
      logEndTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupFilesResponseBodyItems extends $dara.Model {
  binLogFile?: DescribeLogBackupFilesResponseBodyItemsBinLogFile[];
  static names(): { [key: string]: string } {
    return {
      binLogFile: 'BinLogFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binLogFile: { 'type': 'array', 'itemType': DescribeLogBackupFilesResponseBodyItemsBinLogFile },
    };
  }

  validate() {
    if(Array.isArray(this.binLogFile)) {
      $dara.Model.validateArray(this.binLogFile);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of log files.
   */
  items?: DescribeLogBackupFilesResponseBodyItems;
  /**
   * @remarks
   * The page number of the page returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of log files on the current page.
   * 
   * @example
   * 100
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8EC669C-FC85-43D7-AF06-C3641626B37E
   */
  requestId?: string;
  /**
   * @remarks
   * The total size of log files. Unit: bytes.
   * 
   * @example
   * 2300
   */
  totalFileSize?: number;
  /**
   * @remarks
   * The total number of log files.
   * 
   * @example
   * 17
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalFileSize: 'TotalFileSize',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeLogBackupFilesResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalFileSize: 'number',
      totalRecordCount: 'number',
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

