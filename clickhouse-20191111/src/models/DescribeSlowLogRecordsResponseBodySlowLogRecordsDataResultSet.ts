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

