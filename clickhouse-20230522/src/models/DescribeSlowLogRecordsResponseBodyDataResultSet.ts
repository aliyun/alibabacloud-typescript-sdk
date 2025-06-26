// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsResponseBodyDataResultSet extends $dara.Model {
  /**
   * @remarks
   * The address to which the query statement is sent.
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
   * The user who executes the query statement.
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
   * The query statement that is running.
   * 
   * @example
   * select * from test
   */
  query?: string;
  /**
   * @remarks
   * The execution duration of slow SQL queries. Minimum value: **1000**. Unit: milliseconds.
   * 
   * @example
   * 3000
   */
  queryDurationMs?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The time is in the yyyy-MM-dd hh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2023-09-11 16:00:00
   */
  queryStartTime?: string;
  /**
   * @remarks
   * The size of the data that is scanned. Unit: bytes.
   * 
   * @example
   * 4507128020832
   */
  readBytes?: number;
  /**
   * @remarks
   * The number of read rows.
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
   * The type of the slow query logs.
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

