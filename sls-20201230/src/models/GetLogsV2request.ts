// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogsV2Request extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to page forward or backward for scan or phrase queries.
   * 
   * @example
   * false
   */
  forward?: boolean;
  /**
   * @remarks
   * The start time of the query. This time refers to the log time specified when log data is written.
   * 
   * The time range defined by the from and to request parameters follows the left-closed, right-open principle. The time range includes the start time but excludes the end time. If the values of from and to are the same, the time range is invalid and the function returns an error.
   * The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1627268185
   */
  from?: number;
  /**
   * @remarks
   * Specifies whether to enable highlighting.
   * 
   * @example
   * false
   */
  highlight?: boolean;
  /**
   * @remarks
   * Specifies whether to enable nanosecond-precision ordering.
   * 
   * @example
   * true
   */
  isAccurate?: boolean;
  /**
   * @remarks
   * The maximum number of logs to return. This parameter is valid only when the query parameter is a query statement (not an analytic statement). Minimum value: 0. Maximum value: 100. Default value: 100.
   * 
   * @example
   * 100
   */
  line?: number;
  /**
   * @remarks
   * The row from which the query starts. This parameter is valid only when the query parameter is a query statement (not an analytic statement). The value starts from 0. Default value: 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * Specifies whether to enable Dedicated SQL. Disabled by default.
   * 
   * @example
   * false
   */
  powerSql?: boolean;
  /**
   * @remarks
   * The query statement or analytic statement. For more information, see [query overview](https://help.aliyun.com/document_detail/43772.html) and [analysis overview](https://help.aliyun.com/document_detail/53608.html).
   * 
   * Add set session parallel_sql=true; to the analytic statement in the query parameter to use Dedicated SQL. Example: * | set session parallel_sql=true; select count(*) as pv.
   * 
   * Note: When the query parameter contains an analytic statement (SQL statement), the line and offset parameters of this API are invalid. Set them to 0. Use the LIMIT syntax in the SQL statement for pagination. For more information, see Display query and analysis results by page.
   * 
   * @example
   * status: 401 | SELECT remote_addr,COUNT(*) as pv GROUP by remote_addr ORDER by pv desc limit 5
   */
  query?: string;
  /**
   * @remarks
   * Specifies whether to return logs in reverse chronological order of log timestamps, accurate to the minute level. This parameter is valid only when the query parameter is a query statement (not an analytic statement).
   * 
   * - true: Returns logs in descending order of log timestamps.
   * - false (default): Returns logs in ascending order of log timestamps.
   * 
   * To sort results in an analytic statement, use the ORDER BY syntax. If ORDER BY is set to asc (default), logs are returned in ascending order. If ORDER BY is set to desc, logs are returned in descending order.
   * 
   * @example
   * false
   */
  reverse?: boolean;
  /**
   * @remarks
   * The query parameter.
   * 
   * @example
   * mode=scan
   */
  session?: string;
  /**
   * @remarks
   * The end time of the query. This time refers to the log time specified when log data is written.
   * 
   * The time range defined by the from and to request parameters follows the left-closed, right-open principle. The time range includes the start time but excludes the end time. If the values of from and to are the same, the time range is invalid and the function returns an error.
   * The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1627268185
   */
  to?: number;
  /**
   * @remarks
   * The topic. Default value: empty string.
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
      isAccurate: 'isAccurate',
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
      isAccurate: 'boolean',
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

