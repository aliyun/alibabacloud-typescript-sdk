// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisSQLInfoResponseBody extends $dara.Model {
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
   * The total execution duration of the query, in seconds.
   * 
   * @example
   * 16
   */
  duration?: number;
  /**
   * @remarks
   * The maximum number of output rows.
   * 
   * @example
   * 10
   */
  maxOutputRows?: string;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * 71403480878****
   */
  queryID?: string;
  /**
   * @remarks
   * The operator information.
   * 
   * @example
   * {\"children\":********\"startTime\":1660719602199}
   */
  queryPlan?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 425AAA6A-63E0-1929-A1CE-3D9036CBC463
   */
  requestId?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * select n_live_tup, n_live_tup + n_dead_tup, pg_relation_size(table_name), last_vacuum from pg_stat_user_tables where relid = table_name::regclass
   */
  SQLStmt?: string;
  /**
   * @remarks
   * The ID of the session to which the query belongs.
   * 
   * @example
   * 658****
   */
  sessionID?: string;
  /**
   * @remarks
   * The sorting structure based on metrics.
   * 
   * @example
   * {\"costSort\":******:\"Seq Scan-9\",\"value\":0.0}]}
   */
  sortedMetrics?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1660719602199
   */
  startTime?: number;
  /**
   * @remarks
   * The execution status of the SQL statement. Valid values:
   * 
   * - **running**: The SQL statement is being executed.
   * - **finished**: The execution of the SQL statement is complete.
   * 
   * @example
   * finished
   */
  status?: string;
  /**
   * @remarks
   * The query plan information.
   * 
   * @example
   * Seq Scan on example_table
   */
  textPlan?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * adbpguser
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      duration: 'Duration',
      maxOutputRows: 'MaxOutputRows',
      queryID: 'QueryID',
      queryPlan: 'QueryPlan',
      requestId: 'RequestId',
      SQLStmt: 'SQLStmt',
      sessionID: 'SessionID',
      sortedMetrics: 'SortedMetrics',
      startTime: 'StartTime',
      status: 'Status',
      textPlan: 'TextPlan',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      duration: 'number',
      maxOutputRows: 'string',
      queryID: 'string',
      queryPlan: 'string',
      requestId: 'string',
      SQLStmt: 'string',
      sessionID: 'string',
      sortedMetrics: 'string',
      startTime: 'number',
      status: 'string',
      textPlan: 'string',
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

