// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLLogRecordsResponseBodyItemsSQLRecord extends $dara.Model {
  accountName?: string;
  DBName?: string;
  executeTime?: string;
  hostAddress?: string;
  returnRowCounts?: number;
  SQLText?: string;
  threadID?: string;
  totalExecutionTimes?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBName: 'DBName',
      executeTime: 'ExecuteTime',
      hostAddress: 'HostAddress',
      returnRowCounts: 'ReturnRowCounts',
      SQLText: 'SQLText',
      threadID: 'ThreadID',
      totalExecutionTimes: 'TotalExecutionTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBName: 'string',
      executeTime: 'string',
      hostAddress: 'string',
      returnRowCounts: 'number',
      SQLText: 'string',
      threadID: 'string',
      totalExecutionTimes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogRecordsResponseBodyItems extends $dara.Model {
  SQLRecord?: DescribeSQLLogRecordsResponseBodyItemsSQLRecord[];
  static names(): { [key: string]: string } {
    return {
      SQLRecord: 'SQLRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLRecord: { 'type': 'array', 'itemType': DescribeSQLLogRecordsResponseBodyItemsSQLRecord },
    };
  }

  validate() {
    if(Array.isArray(this.SQLRecord)) {
      $dara.Model.validateArray(this.SQLRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogRecordsResponseBody extends $dara.Model {
  items?: DescribeSQLLogRecordsResponseBodyItems;
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
      items: DescribeSQLLogRecordsResponseBodyItems,
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

