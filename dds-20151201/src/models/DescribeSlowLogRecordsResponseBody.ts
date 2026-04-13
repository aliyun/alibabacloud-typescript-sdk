// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsResponseBodyItemsLogRecords extends $dara.Model {
  accountName?: string;
  DBName?: string;
  docsExamined?: number;
  executionStartTime?: string;
  hostAddress?: string;
  keysExamined?: number;
  queryTimes?: string;
  returnRowCounts?: number;
  SQLText?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBName: 'DBName',
      docsExamined: 'DocsExamined',
      executionStartTime: 'ExecutionStartTime',
      hostAddress: 'HostAddress',
      keysExamined: 'KeysExamined',
      queryTimes: 'QueryTimes',
      returnRowCounts: 'ReturnRowCounts',
      SQLText: 'SQLText',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBName: 'string',
      docsExamined: 'number',
      executionStartTime: 'string',
      hostAddress: 'string',
      keysExamined: 'number',
      queryTimes: 'string',
      returnRowCounts: 'number',
      SQLText: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodyItems extends $dara.Model {
  logRecords?: DescribeSlowLogRecordsResponseBodyItemsLogRecords[];
  static names(): { [key: string]: string } {
    return {
      logRecords: 'LogRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRecords: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodyItemsLogRecords },
    };
  }

  validate() {
    if(Array.isArray(this.logRecords)) {
      $dara.Model.validateArray(this.logRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database engine.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  items?: DescribeSlowLogRecordsResponseBodyItems;
  /**
   * @remarks
   * The page number of the returned page. The value is a positive integer that does not exceed the maximum value of the INTEGER data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of slow query log entries returned on the page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8076C4BA-DDBD-529C-BFF4-D8620C3F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      items: DescribeSlowLogRecordsResponseBodyItems,
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

