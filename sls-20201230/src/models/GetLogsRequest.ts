// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The start of the query time range, based on the log time specified when the log data was written.
   * 
   * - The **from** and **to** parameters define a left-closed, right-open interval [from, to). If **from** equals **to**, the interval is invalid and the system returns an error.
   * 
   * - Value: a UNIX timestamp representing the number of seconds elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > To avoid missing data, align the query time to the minute level. If a time range is specified in the analytic statement, that time range takes precedence.
   * 
   * To specify a time in seconds within an analytic statement, use the [from_unixtime function](https://help.aliyun.com/document_detail/63451.html) or the [to_unixtime function](https://help.aliyun.com/document_detail/63451.html) to convert the time format. Examples:
   * 
   * - `* | SELECT * FROM log WHERE from_unixtime(__time__) > from_unixtime(1664186624) AND from_unixtime(__time__) < now()`
   * 
   * - `* | SELECT * FROM log WHERE __time__ > to_unixtime(date_parse(\\"2022-10-19 15:46:05\\", \\"%Y-%m-%d %H:%i:%s\\")) AND __time__ < to_unixtime(now())`
   * 
   * This parameter is required.
   * 
   * @example
   * 1627268185
   */
  from?: number;
  /**
   * @remarks
   * Valid only when the query parameter is a search statement. Maximum number of logs to return. Valid values: 0 to 100. Default value: 100. See [Page through query and analysis results](https://help.aliyun.com/document_detail/89994.html).
   * 
   * @example
   * 100
   */
  line?: number;
  /**
   * @remarks
   * Valid only when the query parameter is a search statement. The starting row for the query. Default value: 0. See [Page through query and analysis results](https://help.aliyun.com/document_detail/89994.html).
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * Whether to enable the Exclusive SQL feature. See [Enable the Exclusive SQL feature](https://help.aliyun.com/document_detail/223777.html).
   * 
   * - true: Enable Exclusive SQL.
   * 
   * - false (default): Use standard SQL.
   * 
   * Alternatively, add `set session parallel_sql=true;` to the analytic statement in the **query** parameter to enable Exclusive SQL.
   * 
   * @example
   * false
   */
  powerSql?: boolean;
  /**
   * @remarks
   * The search statement or analytic statement. See [Query overview](https://help.aliyun.com/document_detail/43772.html) and [Analysis overview](https://help.aliyun.com/document_detail/53608.html). To enable the Exclusive SQL feature, add `set session parallel_sql=true;` to the analytic statement. Example: `* | set session parallel_sql=true; select count(*) as pv`. For common query and analysis issues, see [Common errors that occur when you query and analyze logs](https://help.aliyun.com/document_detail/61628.html).
   * 
   * > When the query parameter contains an analytic statement (SQL statement), the `line` and `offset` parameters are ignored. Set both to 0 and use the LIMIT clause in the SQL statement for pagination. See [Page through query and analysis results](https://help.aliyun.com/document_detail/89994.html).
   * 
   * @example
   * status: 401 | SELECT remote_addr,COUNT(*) as pv GROUP by remote_addr ORDER by pv desc limit 5
   */
  query?: string;
  /**
   * @remarks
   * Whether to return logs in descending order of timestamp, with minute-level precision.
   * 
   * - true: Descending order (newest first).
   * 
   * - false (default): Ascending order (oldest first).
   * 
   * >Notice: 
   * 
   * - When the query parameter is a search statement, the reverse parameter controls the sort order.
   * 
   * - When the query parameter includes an analytic statement, the reverse parameter is ignored. Use the ORDER BY clause in the SQL statement instead. ORDER BY defaults to ascending (asc). Specify desc for descending order.
   * 
   * @example
   * false
   */
  reverse?: boolean;
  /**
   * @remarks
   * The end of the query time range, based on the log time specified when the log data was written.
   * 
   * - The **from** and **to** parameters define a left-closed, right-open interval [from, to). If **from** equals **to**, the interval is invalid and the system returns an error.
   * 
   * - Value: a UNIX timestamp representing the number of seconds elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > To avoid missing data, align the query time to the minute level. If a time range is specified in the analytic statement, that time range takes precedence.
   * 
   * To specify a time in seconds within an analytic statement, use the [from_unixtime function](https://help.aliyun.com/document_detail/63451.html) or the [to_unixtime function](https://help.aliyun.com/document_detail/63451.html) to convert the time format. Examples:
   * 
   * - `* | SELECT * FROM log WHERE from_unixtime(__time__) > from_unixtime(1664186624) AND from_unixtime(__time__) < now()`
   * 
   * - `* | SELECT * FROM log WHERE __time__ > to_unixtime(date_parse(\\"2022-10-19 15:46:05\\", \\"%Y-%m-%d %H:%i:%s\\")) AND __time__ < to_unixtime(now())`
   * 
   * This parameter is required.
   * 
   * @example
   * 1627269085
   */
  to?: number;
  /**
   * @remarks
   * The log topic. Default value: an empty string. See [Topic](https://help.aliyun.com/document_detail/48881.html).
   * 
   * @example
   * topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      line: 'line',
      offset: 'offset',
      powerSql: 'powerSql',
      query: 'query',
      reverse: 'reverse',
      to: 'to',
      topic: 'topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      line: 'number',
      offset: 'number',
      powerSql: 'boolean',
      query: 'string',
      reverse: 'boolean',
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

