// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBinlogFilesResponseBodyItemsBinLogFile extends $dara.Model {
  checksum?: string;
  downloadLink?: string;
  fileSize?: number;
  hostInstanceID?: string;
  intranetDownloadLink?: string;
  linkExpiredTime?: string;
  logBeginTime?: string;
  logEndTime?: string;
  logFileName?: string;
  remoteStatus?: string;
  static names(): { [key: string]: string } {
    return {
      checksum: 'Checksum',
      downloadLink: 'DownloadLink',
      fileSize: 'FileSize',
      hostInstanceID: 'HostInstanceID',
      intranetDownloadLink: 'IntranetDownloadLink',
      linkExpiredTime: 'LinkExpiredTime',
      logBeginTime: 'LogBeginTime',
      logEndTime: 'LogEndTime',
      logFileName: 'LogFileName',
      remoteStatus: 'RemoteStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checksum: 'string',
      downloadLink: 'string',
      fileSize: 'number',
      hostInstanceID: 'string',
      intranetDownloadLink: 'string',
      linkExpiredTime: 'string',
      logBeginTime: 'string',
      logEndTime: 'string',
      logFileName: 'string',
      remoteStatus: 'string',
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
  binLogFile?: DescribeBinlogFilesResponseBodyItemsBinLogFile[];
  static names(): { [key: string]: string } {
    return {
      binLogFile: 'BinLogFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binLogFile: { 'type': 'array', 'itemType': DescribeBinlogFilesResponseBodyItemsBinLogFile },
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

export class DescribeBinlogFilesResponseBody extends $dara.Model {
  items?: DescribeBinlogFilesResponseBodyItems;
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
      items: DescribeBinlogFilesResponseBodyItems,
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

