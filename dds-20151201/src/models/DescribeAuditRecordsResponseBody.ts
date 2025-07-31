// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditRecordsResponseBodyItemsSQLRecord extends $dara.Model {
  /**
   * @remarks
   * The account of the database.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test123
   */
  DBName?: string;
  /**
   * @remarks
   * The time when the statement was executed. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-03-11T03:30:27Z
   */
  executeTime?: string;
  /**
   * @remarks
   * The IP addresses of the client.
   * 
   * @example
   * 11.xxx.xxx.xxx
   */
  hostAddress?: string;
  /**
   * @remarks
   * The number of SQL audit log entries that are returned.
   * 
   * @example
   * 2
   */
  returnRowCounts?: number;
  /**
   * @remarks
   * The statement that was executed.
   * 
   * @example
   * { \\"atype\\" : \\"createCollection\\", \\"param\\" : { \\"ns\\" : \\"123.test1\\" }, \\"result\\": \\"OK\\" }
   */
  syntax?: string;
  /**
   * @remarks
   * The name of the collection.
   * 
   * @example
   * C1
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the thread.
   * 
   * @example
   * 140682188297984
   */
  threadID?: string;
  /**
   * @remarks
   * The duration of the statement execution. Unit: microseconds.
   * 
   * @example
   * 700
   */
  totalExecutionTimes?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBName: 'DBName',
      executeTime: 'ExecuteTime',
      hostAddress: 'HostAddress',
      returnRowCounts: 'ReturnRowCounts',
      syntax: 'Syntax',
      tableName: 'TableName',
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
      syntax: 'string',
      tableName: 'string',
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

export class DescribeAuditRecordsResponseBodyItems extends $dara.Model {
  SQLRecord?: DescribeAuditRecordsResponseBodyItemsSQLRecord[];
  static names(): { [key: string]: string } {
    return {
      SQLRecord: 'SQLRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLRecord: { 'type': 'array', 'itemType': DescribeAuditRecordsResponseBodyItemsSQLRecord },
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

export class DescribeAuditRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the information of audit log entries.
   */
  items?: DescribeAuditRecordsResponseBodyItems;
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
   * The maximum number of entries on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3278BEB8-503B-4E46-8F7E-D26E040C9769
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 40
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
      items: DescribeAuditRecordsResponseBodyItems,
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

