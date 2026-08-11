// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. This is a UNIX timestamp in seconds.
   * 
   * @example
   * 1710432000
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNum?: string;
  /**
   * @remarks
   * The number of entries to return on each page. The default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The search statement.
   * 
   * @example
   * status: 200 AND totalTime > 0.01
   */
  query?: string;
  /**
   * @remarks
   * The start of the time range to query. This is a UNIX timestamp in seconds.
   * 
   * @example
   * 1706340600
   */
  startTime?: string;
  /**
   * @remarks
   * The log type. Valid values: \\`select\\` (query logs) and \\`push\\` (write logs).
   * 
   * @example
   * push
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      query: 'query',
      startTime: 'startTime',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNum: 'string',
      pageSize: 'string',
      query: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

