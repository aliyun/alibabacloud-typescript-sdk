// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsResponseBodySlowLogRecordsDataResultSet extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client that initiated the query.
   * 
   * @example
   * ::ffff:100.104.XX.XX
   */
  initialAddress?: string;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * \\"b51496f2-6b0b-4546-aff9-e17951cb9410\\"
   */
  initialQueryId?: string;
  /**
   * @remarks
   * The username that is used to initiate the query.
   * 
   * @example
   * test_users
   */
  initialUser?: string;
  /**
   * @remarks
   * The peak memory usage for the query. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  memoryUsage?: string;
  /**
   * @remarks
   * The statement that was executed in the query.
   * 
   * @example
   * Select * from table
   */
  query?: string;
  /**
   * @remarks
   * The duration of the query. Unit: milliseconds.
   * 
   * @example
   * 2000
   */
  queryDurationMs?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The time is in the yyyy-MM-dd hh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-05-22 20:00:01
   */
  queryStartTime?: string;
  /**
   * @remarks
   * The size of the data read by executing the statement. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  readBytes?: string;
  /**
   * @remarks
   * The number of rows read by executing the statement.
   * 
   * @example
   * 10027008
   */
  readRows?: string;
  /**
   * @remarks
   * The size of the result data. Unit: bytes.
   * 
   * @example
   * 1024
   */
  resultBytes?: string;
  /**
   * @remarks
   * The query status. Valid values:
   * 
   * *   **QueryFinish**: The query is complete.
   * *   **Processing**: The query is running.
   * 
   * @example
   * QueryFinish
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      initialAddress: 'InitialAddress',
      initialQueryId: 'InitialQueryId',
      initialUser: 'InitialUser',
      memoryUsage: 'MemoryUsage',
      query: 'Query',
      queryDurationMs: 'QueryDurationMs',
      queryStartTime: 'QueryStartTime',
      readBytes: 'ReadBytes',
      readRows: 'ReadRows',
      resultBytes: 'ResultBytes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initialAddress: 'string',
      initialQueryId: 'string',
      initialUser: 'string',
      memoryUsage: 'string',
      query: 'string',
      queryDurationMs: 'string',
      queryStartTime: 'string',
      readBytes: 'string',
      readRows: 'string',
      resultBytes: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodySlowLogRecordsData extends $dara.Model {
  resultSet?: DescribeSlowLogRecordsResponseBodySlowLogRecordsDataResultSet[];
  static names(): { [key: string]: string } {
    return {
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultSet: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodySlowLogRecordsDataResultSet },
    };
  }

  validate() {
    if(Array.isArray(this.resultSet)) {
      $dara.Model.validateArray(this.resultSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodySlowLogRecordsStatistics extends $dara.Model {
  /**
   * @remarks
   * The total size of data that were read. Unit: bytes.
   * 
   * @example
   * 123456
   */
  bytesRead?: number;
  /**
   * @remarks
   * The time consumed by the slow query. Unit: milliseconds.
   * 
   * @example
   * 21.35
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The total number of rows that were read.
   * 
   * @example
   * 2016722
   */
  rowsRead?: number;
  static names(): { [key: string]: string } {
    return {
      bytesRead: 'BytesRead',
      elapsedTime: 'ElapsedTime',
      rowsRead: 'RowsRead',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytesRead: 'number',
      elapsedTime: 'number',
      rowsRead: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchemaResultSet extends $dara.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The type of the column.
   * 
   * @example
   * String
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchema extends $dara.Model {
  resultSet?: DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchemaResultSet[];
  static names(): { [key: string]: string } {
    return {
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultSet: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchemaResultSet },
    };
  }

  validate() {
    if(Array.isArray(this.resultSet)) {
      $dara.Model.validateArray(this.resultSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodySlowLogRecords extends $dara.Model {
  /**
   * @remarks
   * Details about the slow query logs.
   */
  data?: DescribeSlowLogRecordsResponseBodySlowLogRecordsData;
  /**
   * @remarks
   * The number of rows in the result set.
   * 
   * @example
   * 1
   */
  rows?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  rowsBeforeLimitAtLeast?: string;
  /**
   * @remarks
   * The statistics of the results.
   */
  statistics?: DescribeSlowLogRecordsResponseBodySlowLogRecordsStatistics;
  /**
   * @remarks
   * The schema of the table in the database.
   */
  tableSchema?: DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchema;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      rows: 'Rows',
      rowsBeforeLimitAtLeast: 'RowsBeforeLimitAtLeast',
      statistics: 'Statistics',
      tableSchema: 'TableSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeSlowLogRecordsResponseBodySlowLogRecordsData,
      rows: 'string',
      rowsBeforeLimitAtLeast: 'string',
      statistics: DescribeSlowLogRecordsResponseBodySlowLogRecordsStatistics,
      tableSchema: DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchema,
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.statistics && typeof (this.statistics as any).validate === 'function') {
      (this.statistics as any).validate();
    }
    if(this.tableSchema && typeof (this.tableSchema as any).validate === 'function') {
      (this.tableSchema as any).validate();
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
   * The request ID.
   * 
   * @example
   * DF203CC8-5F68-5E3F-8050-3C77DD65731A
   */
  requestId?: string;
  /**
   * @remarks
   * The details about the slow query logs.
   */
  slowLogRecords?: DescribeSlowLogRecordsResponseBodySlowLogRecords;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slowLogRecords: 'SlowLogRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slowLogRecords: DescribeSlowLogRecordsResponseBodySlowLogRecords,
    };
  }

  validate() {
    if(this.slowLogRecords && typeof (this.slowLogRecords as any).validate === 'function') {
      (this.slowLogRecords as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

