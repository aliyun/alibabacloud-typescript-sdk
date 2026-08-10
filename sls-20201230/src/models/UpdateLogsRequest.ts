// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The data to be updated, in JSON format.
   * 
   * @example
   * {"status":"success"}
   */
  data?: string;
  /**
   * @remarks
   * The start time of the query. This time refers to the log time specified when the log data was written.
   * 
   * The time range defined by the request parameters from and to follows the left-closed, right-open principle. That is, the time range includes the start time but does not include the end time. If the values of from and to are the same, the range is invalid and the function returns an error directly.
   * Unix timestamp format, representing the number of seconds since 1970-01-01 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1627268185
   */
  from?: number;
  /**
   * @remarks
   * Optional: A query statement used to filter the logs to be updated. For more information, see [Query overview](https://help.aliyun.com/document_detail/43772.html).
   * 
   * Note: This parameter only supports query statements and does not support analysis statements such as SPL or SQL.
   * 
   * @example
   * status: 401
   */
  query?: string;
  /**
   * @remarks
   * Optional: The value of the built-in field __rowid__ that is automatically returned in the query results.
   * 
   * One of the two fields, rowId and query, must be specified. If both are specified, rowId takes higher priority.
   * 
   * @example
   * 0|1000001|638732499
   */
  rowId?: string;
  /**
   * @remarks
   * The end time of the query. This time refers to the log time specified when the log data was written.
   * 
   * The time range defined by the request parameters from and to follows the left-closed, right-open principle. That is, the time range includes the start time but does not include the end time. If the values of from and to are the same, the range is invalid and the function returns an error directly.
   * Unix timestamp format, representing the number of seconds since 1970-01-01 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1627268200
   */
  to?: number;
  /**
   * @remarks
   * Optional: The value can be full or partial. The default value is partial.
   *   - full —— The request body must contain all fields of the row. The server overwrites the entire old record with the new values.
   *   - partial —— The request body only needs to contain the fields to be modified. Fields that are not provided retain their original values.
   * 
   * @example
   * partial
   */
  updateMode?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      from: 'from',
      query: 'query',
      rowId: 'rowId',
      to: 'to',
      updateMode: 'updateMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      from: 'number',
      query: 'string',
      rowId: 'string',
      to: 'number',
      updateMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

