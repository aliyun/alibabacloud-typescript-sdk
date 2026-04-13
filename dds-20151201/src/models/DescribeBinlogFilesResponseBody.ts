// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBinlogFilesResponseBodyItemsLogFile extends $dara.Model {
  binLogId?: string;
  downloadLink?: string;
  dumpBucket?: string;
  dumpDownloadURL?: string;
  dumpState?: number;
  fileId?: string;
  fileSize?: string;
  linkExpiredTime?: string;
  logBeginTime?: string;
  logEndTime?: string;
  logFileName?: string;
  logStatus?: string;
  OSSEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      binLogId: 'BinLogId',
      downloadLink: 'DownloadLink',
      dumpBucket: 'DumpBucket',
      dumpDownloadURL: 'DumpDownloadURL',
      dumpState: 'DumpState',
      fileId: 'FileId',
      fileSize: 'FileSize',
      linkExpiredTime: 'LinkExpiredTime',
      logBeginTime: 'LogBeginTime',
      logEndTime: 'LogEndTime',
      logFileName: 'LogFileName',
      logStatus: 'LogStatus',
      OSSEndpoint: 'OSSEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binLogId: 'string',
      downloadLink: 'string',
      dumpBucket: 'string',
      dumpDownloadURL: 'string',
      dumpState: 'number',
      fileId: 'string',
      fileSize: 'string',
      linkExpiredTime: 'string',
      logBeginTime: 'string',
      logEndTime: 'string',
      logFileName: 'string',
      logStatus: 'string',
      OSSEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBinlogFilesResponseBodyItems extends $dara.Model {
  logFile?: DescribeBinlogFilesResponseBodyItemsLogFile[];
  static names(): { [key: string]: string } {
    return {
      logFile: 'LogFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logFile: { 'type': 'array', 'itemType': DescribeBinlogFilesResponseBodyItemsLogFile },
    };
  }

  validate() {
    if(Array.isArray(this.logFile)) {
      $dara.Model.validateArray(this.logFile);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBinlogFilesResponseBody extends $dara.Model {
  items?: DescribeBinlogFilesResponseBodyItems;
  /**
   * @example
   * 30
   */
  maxRecordsPerPage?: number;
  /**
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @example
   * F8CA8312-530A-413A-9129-F2BB32A8D404
   */
  requestId?: string;
  /**
   * @example
   * 240
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      maxRecordsPerPage: 'MaxRecordsPerPage',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeBinlogFilesResponseBodyItems,
      maxRecordsPerPage: 'number',
      pageNumber: 'number',
      requestId: 'string',
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

