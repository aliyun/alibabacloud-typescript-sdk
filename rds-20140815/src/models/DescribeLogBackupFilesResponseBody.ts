// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogBackupFilesResponseBodyItemsBinLogFile extends $dara.Model {
  downloadLink?: string;
  fileSize?: number;
  intranetDownloadLink?: string;
  linkExpiredTime?: string;
  logBeginTime?: string;
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
  items?: DescribeLogBackupFilesResponseBodyItems;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  totalFileSize?: number;
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

