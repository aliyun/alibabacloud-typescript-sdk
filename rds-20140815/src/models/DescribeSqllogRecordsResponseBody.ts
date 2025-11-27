// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLLogRecordsResponseBodyItemsSQLRecord extends $dara.Model {
  /**
   * @remarks
   * The username of the account that is recorded in the SQL audit log entry.
   * 
   * @example
   * accounttest
   */
  accountName?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  /**
   * @remarks
   * The time at which the SQL statement was executed. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2011-06-11T15:00:23Z
   */
  executeTime?: string;
  /**
   * @remarks
   * The IP address of the client that is connected to the instance.
   * 
   * @example
   * 192.168.0.121
   */
  hostAddress?: string;
  /**
   * @remarks
   * The number of SQL audit log entries that are returned.
   * 
   * @example
   * 30
   */
  returnRowCounts?: number;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * update test.zxb set id=0 limit 1
   */
  SQLText?: string;
  /**
   * @remarks
   * The thread ID.
   * 
   * @example
   * 1025865428
   */
  threadID?: string;
  /**
   * @remarks
   * The execution duration of the SQL statement. Unit: microseconds.
   * 
   * @example
   * 600
   */
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
  /**
   * @remarks
   * The details about each SQL audit log entry.
   */
  items?: DescribeSQLLogRecordsResponseBodyItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of SQL audit log entries on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 08A3B71B-FE08-4B03-974F-CC7EA6DB1828
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
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

