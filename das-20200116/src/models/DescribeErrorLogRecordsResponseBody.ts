// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeErrorLogRecordsResponseBodyDataLogs extends $dara.Model {
  /**
   * @remarks
   * The log category. Valid values:
   * - **NETWORK**: network connectivity log.
   * - **ACCESS**: access control log.
   * - **-**: common log.
   * - **COMMAND**: slow log.
   * - **SHARDING**: cluster log.
   * - **STORAGE**: storage engine log.
   * - **CONNPOOL**: connection pool log.
   * - **ASIO**: asynchronous I/O log.
   * - **WRITE**: slow update log.
   * 
   * > This parameter is supported only for ApsaraDB for MongoDB instances.
   * 
   * @example
   * NETWORK
   */
  category?: string;
  /**
   * @remarks
   * The log connection information.
   * 
   * > This parameter is supported only for ApsaraDB for MongoDB instances.
   * 
   * @example
   * conn18xxxxxx
   */
  connInfo?: string;
  /**
   * @remarks
   * The error log content.
   * 
   * @example
   * 2025-07-15T15:14:27.175188+08:00 0 [Note] [MY-012468] [InnoDB] Transactions deadlock detected, dumping detailed information.
   */
  content?: string;
  /**
   * @remarks
   * The time when the error log was generated. The value is a UNIX timestamp in milliseconds.
   * 
   * >Notice: For ApsaraDB for MongoDB instances, the time is in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 1731983067000
   */
  createTime?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * > This parameter is supported only for ApsaraDB for MongoDB instances.
   * 
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
   * @remarks
   * The end time of the query. The time is in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2025-07-23T05:48:43Z
   */
  endTime?: string;
  /**
   * @remarks
   * The total number of log entries returned on the current page.
   * 
   * @example
   * 10
   */
  itemsNumbers?: number;
  /**
   * @remarks
   * The log details.
   */
  logs?: DescribeErrorLogRecordsResponseBodyDataLogs[];
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 10
   */
  maxRecordsPerPage?: number;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumbers?: number;
  /**
   * @remarks
   * The start time of the query. The time is in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2025-07-22T05:48:43Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of log entries within the specified time range.
   * 
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
   * @remarks
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data details.
   */
  data?: DescribeErrorLogRecordsResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * >  If the request is successful, **Successful** is returned. If the request fails, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAA17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**
   * - **false**
   * 
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

