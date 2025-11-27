// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeErrorLogsResponseBodyItemsErrorLog extends $dara.Model {
  /**
   * @remarks
   * The time when the error log entry was generated. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2011-05-30T12:11:04Z
   */
  createTime?: string;
  database?: string;
  /**
   * @remarks
   * The error log information.
   * 
   * @example
   * spid52 DBCC TRACEON 3499, server process ID (SPID) 52. This is an informational message only; no user action is required
   */
  errorInfo?: string;
  user?: string;
  userIp?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      database: 'Database',
      errorInfo: 'ErrorInfo',
      user: 'User',
      userIp: 'UserIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      database: 'string',
      errorInfo: 'string',
      user: 'string',
      userIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeErrorLogsResponseBodyItems extends $dara.Model {
  errorLog?: DescribeErrorLogsResponseBodyItemsErrorLog[];
  static names(): { [key: string]: string } {
    return {
      errorLog: 'ErrorLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorLog: { 'type': 'array', 'itemType': DescribeErrorLogsResponseBodyItemsErrorLog },
    };
  }

  validate() {
    if(Array.isArray(this.errorLog)) {
      $dara.Model.validateArray(this.errorLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeErrorLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the log entries returned.
   */
  items?: DescribeErrorLogsResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of error logs on the current page.
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
   * 98504E07-BB0E-40FC-B152-E4882615812C
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
      items: DescribeErrorLogsResponseBodyItems,
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

