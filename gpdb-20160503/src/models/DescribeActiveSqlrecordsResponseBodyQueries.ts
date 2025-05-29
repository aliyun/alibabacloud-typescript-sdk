// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveSQLRecordsResponseBodyQueries extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 0.0.0.0
   */
  clientAddr?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * xg_analyse
   */
  database?: string;
  /**
   * @remarks
   * The progress ID.
   * 
   * @example
   * 6164
   */
  PID?: string;
  /**
   * @remarks
   * The SQL statement of the query.
   * 
   * @example
   * Select * from t1,t2 where t1.id=t2.id;
   */
  query?: string;
  /**
   * @remarks
   * The execution duration of the query. Unit: seconds.
   * 
   * @example
   * 60s
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
   * The session ID.
   * 
   * @example
   * 6612
   */
  sessionID?: string;
  /**
   * @remarks
   * Indicates whether the SQL statement is truncated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  sqlTruncated?: string;
  /**
   * @remarks
   * The threshold that is used to truncate the SQL statement.
   * 
   * @example
   * 1024
   */
  sqlTruncatedThreshold?: string;
  /**
   * @remarks
   * The status of the asynchronous request. Valid values:
   * 
   * *   **running**
   * *   **block**
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The name of the database account.
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

