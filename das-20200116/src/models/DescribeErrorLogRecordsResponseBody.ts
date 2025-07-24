// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeErrorLogRecordsResponseBodyDataLogs extends $dara.Model {
  /**
   * @example
   * NETWORK
   */
  category?: string;
  /**
   * @example
   * conn18xxxxxx
   */
  connInfo?: string;
  /**
   * @example
   * 2025-07-15T15:14:27.175188+08:00 0 [Note] [MY-012468] [InnoDB] Transactions deadlock detected, dumping detailed information.
   */
  content?: string;
  /**
   * @example
   * 1731983067000
   */
  createTime?: string;
  /**
   * @example
   * d-bp128a003436****
   */
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      connInfo: 'ConnInfo',
      content: 'Content',
      createTime: 'CreateTime',
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      connInfo: 'string',
      content: 'string',
      createTime: 'string',
      DBInstanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeErrorLogRecordsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2025-07-23T05:48:43Z
   */
  endTime?: string;
  /**
   * @example
   * 10
   */
  itemsNumbers?: number;
  logs?: DescribeErrorLogRecordsResponseBodyDataLogs[];
  /**
   * @example
   * 10
   */
  maxRecordsPerPage?: number;
  /**
   * @example
   * 1
   */
  pageNumbers?: number;
  /**
   * @example
   * 2025-07-22T05:48:43Z
   */
  startTime?: string;
  /**
   * @example
   * 100
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      itemsNumbers: 'ItemsNumbers',
      logs: 'Logs',
      maxRecordsPerPage: 'MaxRecordsPerPage',
      pageNumbers: 'PageNumbers',
      startTime: 'StartTime',
      totalRecords: 'TotalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      itemsNumbers: 'number',
      logs: { 'type': 'array', 'itemType': DescribeErrorLogRecordsResponseBodyDataLogs },
      maxRecordsPerPage: 'number',
      pageNumbers: 'number',
      startTime: 'string',
      totalRecords: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeErrorLogRecordsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: DescribeErrorLogRecordsResponseBodyData;
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * AAA17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeErrorLogRecordsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

