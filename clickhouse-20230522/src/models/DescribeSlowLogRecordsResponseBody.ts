// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsResponseBodyDataResultSet extends $dara.Model {
  /**
   * @remarks
   * The IP address from which the query was initiated.
   * 
   * @example
   * 0:0:0:0:0:ffff:1edd65ea
   */
  initialAddress?: string;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * \\"ae915a3ad30e77e67a7215d05b658cc6\\"
   */
  initialQueryId?: string;
  /**
   * @remarks
   * The user who initiated the query.
   * 
   * @example
   * bany
   */
  initialUser?: string;
  /**
   * @remarks
   * The peak memory usage for the query. Unit: bytes.
   * 
   * @example
   * 4941696
   */
  memoryUsage?: number;
  /**
   * @remarks
   * The statement that was being executed.
   * 
   * @example
   * select * from test
   */
  query?: string;
  /**
   * @remarks
   * The execution duration of the slow query. The minimum value is **1000**. Unit: milliseconds.
   * 
   * @example
   * 3000
   */
  queryDurationMs?: number;
  /**
   * @remarks
   * The start time of the query. The time is in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-09-11 16:00:00
   */
  queryStartTime?: string;
  /**
   * @remarks
   * The size of the scanned data. Unit: bytes.
   * 
   * @example
   * 4507128020832
   */
  readBytes?: number;
  /**
   * @remarks
   * The number of rows read.
   * 
   * @example
   * 10
   */
  readRows?: number;
  /**
   * @remarks
   * The size of the result data. Unit: bytes.
   * 
   * @example
   * 10
   */
  resultBytes?: number;
  /**
   * @remarks
   * The type of the slow query log.
   * 
   * @example
   * ExceptionWhileProcessing
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
      memoryUsage: 'number',
      query: 'string',
      queryDurationMs: 'number',
      queryStartTime: 'string',
      readBytes: 'number',
      readRows: 'number',
      resultBytes: 'number',
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

export class DescribeSlowLogRecordsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp100p4q1g9z32****
   */
  DBInstanceID?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * Cluster test
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The list of slow log records.
   */
  resultSet?: DescribeSlowLogRecordsResponseBodyDataResultSet[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      resultSet: 'ResultSet',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'string',
      resultSet: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodyDataResultSet },
      totalCount: 'number',
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

export class DescribeSlowLogRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result.
   */
  data?: DescribeSlowLogRecordsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DF203CC8-5F68-5E3F-8050-3C77DD65731A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeSlowLogRecordsResponseBodyData,
      requestId: 'string',
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

