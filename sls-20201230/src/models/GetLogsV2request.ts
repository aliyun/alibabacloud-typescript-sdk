// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogsV2Request extends $dara.Model {
  /**
   * @remarks
   * For a scan or phrase query, specifies whether to page forward or backward.
   * 
   * @example
   * false
   */
  forward?: boolean;
  /**
   * @remarks
   * The start of the time range to query. The value is the log time that was specified when the log was written.
   * 
   * The time range is a left-closed right-open interval. This means the range includes the start time but not the end time. If the from and to values are the same, the interval is invalid and an error is returned. The value is a UNIX timestamp that represents the number of seconds since 00:00:00 UTC on January 1, 1970.
   * 
   * This parameter is required.
   * 
   * @example
   * 1627268185
   */
  from?: number;
  /**
   * @remarks
   * Specifies whether to highlight the results.
   * 
   * @example
   * false
   */
  highlight?: boolean;
  /**
   * @remarks
   * Specifies whether to enable nanosecond-level sorting.
   * 
   * @example
   * true
   */
  isAccurate?: boolean;
  /**
   * @remarks
   * The maximum number of logs to return. This parameter is valid only if the query parameter contains a query statement. The value must be an integer from 0 to 100. The default value is 100.
   * 
   * @example
   * 100
   */
  line?: number;
  /**
   * @remarks
   * The line number from which to start the query. This parameter is valid only if the query parameter contains a query statement. The default value is 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * Specifies whether to enable enhanced SQL. The default value is false.
   * 
   * @example
   * false
   */
  powerSql?: boolean;
  /**
   * @remarks
   * The query statement or analytic statement. For more information, see [Query overview](https://help.aliyun.com/document_detail/43772.html) and [Analysis overview](https://help.aliyun.com/document_detail/53608.html).
   * 
   * To use the Exclusive SQL feature, add set session parallel_sql=true; to the analytic statement in the query parameter. Example: \\* | set session parallel_sql=true; select count(\\*) as pv.
   * 
   * Note: If the query parameter contains an analytic statement (SQL statement), the line and offset parameters are invalid. Set them to 0. Use the LIMIT clause in the SQL statement for paging. For more information, see Paginate query and analysis results.
   * 
   * @example
   * status: 401 | SELECT remote_addr,COUNT(*) as pv GROUP by remote_addr ORDER by pv desc limit 5
   */
  query?: string;
  /**
   * @remarks
   * Specifies whether to return logs in descending order of their timestamps. The precision is at the minute level.
   * 
   * true: Returns logs in descending order of their timestamps. false (default): Returns logs in ascending order of their timestamps. Note: If the query parameter contains a query statement, the reverse parameter is valid and specifies the sorting order. If the query parameter contains a query and analysis statement, the reverse parameter is invalid. The sorting order is specified by the ORDER BY clause in the analytic statement. If ORDER BY is asc (default), logs are sorted in ascending order. If ORDER BY is desc, logs are sorted in descending order.
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
   * The end of the time range to query. The value is the log time that was specified when the log was written.
   * 
   * The time range is a left-closed right-open interval. This means the range includes the start time but not the end time. If the from and to values are the same, the interval is invalid and an error is returned. The value is a UNIX timestamp that represents the number of seconds since 00:00:00 UTC on January 1, 1970.
   * 
   * This parameter is required.
   * 
   * @example
   * 1627268185
   */
  to?: number;
  /**
   * @remarks
   * The log topic. The default value is double quotation marks ("").
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

