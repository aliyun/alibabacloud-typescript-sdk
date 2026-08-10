// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the query. This time refers to the log time specified when the log data was written.
   * 
   * The time interval defined by the request parameters from and to follows the left-closed, right-open principle. That is, the interval includes the start time but does not include the end time. If the values of from and to are the same, the interval is invalid, and the function returns an error directly.
   * Unix timestamp format, indicating the number of seconds elapsed since 1970-01-01 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1627268100
   */
  from?: number;
  /**
   * @remarks
   * Optional: The query statement used to filter the logs to be updated. For more information, see [Query overview](https://help.aliyun.com/document_detail/43772.html).
   * 
   * Note: This parameter supports only query statements. Analysis statements such as SPL and SQL are not supported.
   * 
   * @example
   * status:400
   */
  query?: string;
  /**
   * @remarks
   * Optional: The value of the built-in field __rowid__ that is automatically returned in the query results.
   * 
   * One of rowId and query must be specified. If both are specified, rowId takes precedence.
   * 
   * @example
   * 0|1000001|638732499
   */
  rowId?: string;
  /**
   * @remarks
   * The end time of the query. This time refers to the log time specified when the log data was written.
   * 
   * The time interval defined by the request parameters from and to follows the left-closed, right-open principle. That is, the interval includes the start time but does not include the end time. If the values of from and to are the same, the interval is invalid, and the function returns an error directly.
   * Unix timestamp format, indicating the number of seconds elapsed since 1970-01-01 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1627268200
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      query: 'query',
      rowId: 'rowId',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      query: 'string',
      rowId: 'string',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

