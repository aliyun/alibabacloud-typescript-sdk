// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRunningLogRecordsResponseBodyItemsLogRecords extends $dara.Model {
  category?: string;
  connInfo?: string;
  content?: string;
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

