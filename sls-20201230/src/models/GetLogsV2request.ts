// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogsV2Request extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to page forward or backward for the scan-based query or phrase search.
   * 
   * @example
   * false
   */
  forward?: boolean;
  /**
   * @remarks
   * The beginning of the time range to query. The value is the log time that is specified when log data is written.
   * 
   * The time range that is specified in this operation is a left-closed, right-open interval. The interval includes the start time specified by the from parameter, but does not include the end time specified by the to parameter. If you specify the same value for the from and to parameters, the interval is invalid, and an error message is returned. The value is a timestamp that follows the UNIX time format. It is the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1627268185
   */
  from?: number;
  /**
   * @remarks
   * Specifies whether to highlight the returned result.
   * 
   * @example
   * false
   */
  highlight?: boolean;
  /**
   * @remarks
   * The maximum number of logs to return for the request. This parameter takes effect only when the query parameter is set to a search statement. Valid values: 0 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  line?: number;
  /**
   * @remarks
   * The line from which the query starts. This parameter takes effect only when the query parameter is set to a search statement. Default value: 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * Specifies whether to enable the SQL enhancement feature. By default, the feature is disabled.
   * 
   * @example
   * false
   */
  powerSql?: boolean;
  /**
   * @remarks
   * The search statement or query statement. For more information, see the "Log search overview" and "Log analysis overview" topics.
   * 
   * If you add set session parallel_sql=true; to the analytic statement in the query parameter, Dedicated SQL is used. Example: \\* | set session parallel_sql=true; select count(\\*) as pv.
   * 
   * Note: If you specify an analytic statement in the query parameter, the line and offset parameters do not take effect in this operation. In this case, we recommend that you set the line and offset parameters to 0 and use the LIMIT clause to specify the number of logs to return on each page. For more information, see the "Perform paged queries" topic.
   * 
   * @example
   * status: 401 | SELECT remote_addr,COUNT(*) as pv GROUP by remote_addr ORDER by pv desc limit 5
   */
  query?: string;
  /**
   * @remarks
   * Specifies whether to return logs in reverse chronological order of log timestamps. The log timestamps are accurate to minutes. Valid values:
   * 
   * true: Logs are returned in reverse chronological order of log timestamps. false (default): Logs are returned in chronological order of log timestamps. Note: The reverse parameter takes effect only when the query parameter is set to a search statement. The reverse parameter specifies the method used to sort returned logs. If the query parameter is set to a query statement, the reverse parameter does not take effect. The method used to sort returned logs is specified by the ORDER BY clause in the analytic statement. If you use the keyword asc in the ORDER BY clause, the logs are sorted in chronological order. If you use the keyword desc in the ORDER BY clause, the logs are sorted in reverse chronological order. By default, asc is used in the ORDER BY clause.
   * 
   * @example
   * false
   */
  reverse?: boolean;
  /**
   * @remarks
   * The parameter that is used to query data.
   * 
   * @example
   * mode=scan
   */
  session?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is the log time that is specified when log data is written.
   * 
   * The time range that is specified in this operation is a left-closed, right-open interval. The interval includes the start time specified by the from parameter, but does not include the end time specified by the to parameter. If you specify the same value for the from and to parameters, the interval is invalid, and an error message is returned. The value is a timestamp that follows the UNIX time format. It is the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1627268185
   */
  to?: number;
  /**
   * @remarks
   * The topic of the logs. Default value: double quotation marks ("").
   * 
   * @example
   * ""
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      forward: 'forward',
      from: 'from',
      highlight: 'highlight',
      line: 'line',
      offset: 'offset',
      powerSql: 'powerSql',
      query: 'query',
      reverse: 'reverse',
      session: 'session',
      to: 'to',
      topic: 'topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forward: 'boolean',
      from: 'number',
      highlight: 'boolean',
      line: 'number',
      offset: 'number',
      powerSql: 'boolean',
      query: 'string',
      reverse: 'boolean',
      session: 'string',
      to: 'number',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

