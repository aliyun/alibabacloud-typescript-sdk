// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisRecordsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adbtest
   */
  database?: string;
  /**
   * @remarks
   * The execution duration of the query. Unit: seconds.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the query. It is a unique identifier of the query.
   * 
   * @example
   * 2022042612465401000000012903151998970
   */
  queryID?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * SELECT * FROM t1,t2 WHERE t1.id=t2.id;
   */
  SQLStmt?: string;
  /**
   * @remarks
   * Indicates whether the SQL statement needs to be truncated. Valid values:
   * 
   * *   **true**: The SQL statement needs to be truncated.
   * *   **false**: The SQL statement does not need to be truncated.
   * 
   * @example
   * false
   */
  SQLTruncated?: boolean;
  /**
   * @remarks
   * The threshold used to determine whether an SQL statement must be truncated. The value is the number of characters.
   * 
   * @example
   * 5120
   */
  SQLTruncatedThreshold?: number;
  /**
   * @remarks
   * The ID of the session that contains the query.
   * 
   * @example
   * 50
   */
  sessionID?: string;
  /**
   * @remarks
   * The start time of the query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1651877940000
   */
  startTime?: number;
  /**
   * @remarks
   * The execution state of the query. Valid values:
   * 
   * *   **running**: The query is being executed.
   * *   **finished**: The query is complete.
   * 
   * @example
   * finished
   */
  status?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * adbpguser
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      duration: 'Duration',
      queryID: 'QueryID',
      SQLStmt: 'SQLStmt',
      SQLTruncated: 'SQLTruncated',
      SQLTruncatedThreshold: 'SQLTruncatedThreshold',
      sessionID: 'SessionID',
      startTime: 'StartTime',
      status: 'Status',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      duration: 'number',
      queryID: 'string',
      SQLStmt: 'string',
      SQLTruncated: 'boolean',
      SQLTruncatedThreshold: 'number',
      sessionID: 'string',
      startTime: 'number',
      status: 'string',
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

