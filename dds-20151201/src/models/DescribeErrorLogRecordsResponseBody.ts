// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeErrorLogRecordsResponseBodyItemsLogRecords extends $dara.Model {
  category?: string;
  connInfo?: string;
  content?: string;
  createTime?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      connInfo: 'ConnInfo',
      content: 'Content',
      createTime: 'CreateTime',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      connInfo: 'string',
      content: 'string',
      createTime: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeErrorLogRecordsResponseBodyItems extends $dara.Model {
  logRecords?: DescribeErrorLogRecordsResponseBodyItemsLogRecords[];
  static names(): { [key: string]: string } {
    return {
      logRecords: 'LogRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRecords: { 'type': 'array', 'itemType': DescribeErrorLogRecordsResponseBodyItemsLogRecords },
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

export class DescribeErrorLogRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database engine.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  items?: DescribeErrorLogRecordsResponseBodyItems;
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
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 68BCBEC2-1E66-471F-A1A8-E3C60C0A80B0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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
      items: DescribeErrorLogRecordsResponseBodyItems,
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

