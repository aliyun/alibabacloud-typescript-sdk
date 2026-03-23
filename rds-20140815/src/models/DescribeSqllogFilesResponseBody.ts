// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLLogFilesResponseBodyItemsLogFile extends $dara.Model {
  fileID?: string;
  logDownloadURL?: string;
  logEndTime?: string;
  logSize?: string;
  logStartTime?: string;
  logStatus?: string;
  static names(): { [key: string]: string } {
    return {
      fileID: 'FileID',
      logDownloadURL: 'LogDownloadURL',
      logEndTime: 'LogEndTime',
      logSize: 'LogSize',
      logStartTime: 'LogStartTime',
      logStatus: 'LogStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileID: 'string',
      logDownloadURL: 'string',
      logEndTime: 'string',
      logSize: 'string',
      logStartTime: 'string',
      logStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogFilesResponseBodyItems extends $dara.Model {
  logFile?: DescribeSQLLogFilesResponseBodyItemsLogFile[];
  static names(): { [key: string]: string } {
    return {
      logFile: 'LogFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logFile: { 'type': 'array', 'itemType': DescribeSQLLogFilesResponseBodyItemsLogFile },
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

export class DescribeSQLLogFilesResponseBody extends $dara.Model {
  items?: DescribeSQLLogFilesResponseBodyItems;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  totalRecordCount?: number;
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
      items: DescribeSQLLogFilesResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
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

