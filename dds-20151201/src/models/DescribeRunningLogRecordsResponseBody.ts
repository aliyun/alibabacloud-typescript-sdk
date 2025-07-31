// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRunningLogRecordsResponseBodyItemsLogRecords extends $dara.Model {
  /**
   * @remarks
   * The category of the log entry.
   * 
   * @example
   * NETWORK
   */
  category?: string;
  /**
   * @remarks
   * The connection information of the log entry.
   * 
   * @example
   * conn18xxxxxx
   */
  connInfo?: string;
  /**
   * @remarks
   * The content of the log entry.
   * 
   * @example
   * end connection 11.xxx.xxx.xx:3xxxx (0 connections now open)\\n
   */
  content?: string;
  /**
   * @remarks
   * The time when the log entry was generated. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-02-26T12:09:34Z
   */
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      connInfo: 'ConnInfo',
      content: 'Content',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      connInfo: 'string',
      content: 'string',
      createTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRunningLogRecordsResponseBodyItems extends $dara.Model {
  logRecords?: DescribeRunningLogRecordsResponseBodyItemsLogRecords[];
  static names(): { [key: string]: string } {
    return {
      logRecords: 'LogRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRecords: { 'type': 'array', 'itemType': DescribeRunningLogRecordsResponseBodyItemsLogRecords },
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

export class DescribeRunningLogRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database engine.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * Details about the operational log entries.
   */
  items?: DescribeRunningLogRecordsResponseBodyItems;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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
   * 45D2B592-DEBA-4347-BBF3-47FF6C97DBBC
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
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
      items: DescribeRunningLogRecordsResponseBodyItems,
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

