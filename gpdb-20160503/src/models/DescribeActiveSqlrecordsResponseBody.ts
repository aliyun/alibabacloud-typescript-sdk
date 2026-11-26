// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveSQLRecordsResponseBodyQueries extends $dara.Model {
  /**
   * @remarks
   * The client address.
   * 
   * @example
   * 0.0.0.0
   */
  clientAddr?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * xg_analyse
   */
  database?: string;
  /**
   * @remarks
   * The process ID.
   * 
   * @example
   * 6164
   */
  PID?: string;
  /**
   * @remarks
   * The SQL text of the query.
   * 
   * @example
   * Select * from t1,t2 where t1.id=t2.id;
   */
  query?: string;
  /**
   * @remarks
   * The execution duration of the query, in seconds.
   * 
   * @example
   * 60
   */
  queryDuration?: string;
  /**
   * @remarks
   * The start time of the query.
   * 
   * @example
   * 2022-05-07T06:59Z
   */
  queryStart?: string;
  /**
   * @remarks
   * The ID of the session to which the query belongs.
   * 
   * @example
   * 6612
   */
  sessionID?: string;
  /**
   * @remarks
   * Specifies whether the SQL statement is truncated. Valid values:
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * false
   */
  sqlTruncated?: string;
  /**
   * @remarks
   * The truncation threshold for the SQL statement.
   * 
   * @example
   * 1024
   */
  sqlTruncatedThreshold?: string;
  /**
   * @remarks
   * The execution status of the asynchronous request. Valid values:
   * - **running**: Running.
   * - **block**: Blocked.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * testuser
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      clientAddr: 'ClientAddr',
      database: 'Database',
      PID: 'PID',
      query: 'Query',
      queryDuration: 'QueryDuration',
      queryStart: 'QueryStart',
      sessionID: 'SessionID',
      sqlTruncated: 'SqlTruncated',
      sqlTruncatedThreshold: 'SqlTruncatedThreshold',
      state: 'State',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientAddr: 'string',
      database: 'string',
      PID: 'string',
      query: 'string',
      queryDuration: 'string',
      queryStart: 'string',
      sessionID: 'string',
      sqlTruncated: 'string',
      sqlTruncatedThreshold: 'string',
      state: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveSQLRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The query details.
   */
  queries?: DescribeActiveSQLRecordsResponseBodyQueries[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      queries: 'Queries',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      queries: { 'type': 'array', 'itemType': DescribeActiveSQLRecordsResponseBodyQueries },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.queries)) {
      $dara.Model.validateArray(this.queries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

