// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStatisticLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The fields to query. Format: columns=wordsTopPv.
   * 
   * For more information, see [Metrics in statistical reports](https://help.aliyun.com/document_detail/187665.html).
   * 
   * @example
   * wordsTopPv
   */
  columns?: string;
  /**
   * @remarks
   * Specifies whether to use the distinct clause.
   * 
   * @example
   * true
   */
  distinct?: boolean;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The content of the query clause.
   * 
   * @example
   * "default:\\"OpenSearch\\""
   */
  query?: string;
  /**
   * @remarks
   * The content of the sort clause.
   * 
   * @example
   * "-id"
   */
  sortBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The default value is the timestamp of 00:00:00 on the current day.
   * 
   * @example
   * 1582214400
   */
  startTime?: number;
  /**
   * @remarks
   * The end of the time range to query. The default value is the timestamp of 24:00:00 on the current day.
   * 
   * @example
   * 1682222400
   */
  stopTime?: number;
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      distinct: 'distinct',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      query: 'query',
      sortBy: 'sortBy',
      startTime: 'startTime',
      stopTime: 'stopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: 'string',
      distinct: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      sortBy: 'string',
      startTime: 'number',
      stopTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

