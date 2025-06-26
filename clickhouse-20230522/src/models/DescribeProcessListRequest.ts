// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessListRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-xxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * 1
   */
  initialQueryId?: string;
  /**
   * @remarks
   * The user who executes the query statement.
   * 
   * @example
   * testuser
   */
  initialUser?: string;
  /**
   * @remarks
   * The keyword of the query statement.
   * 
   * @example
   * SELECT
   */
  keyword?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The execution duration of slow SQL queries. Minimum value: 1000. Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  queryDurationMs?: string;
  /**
   * @remarks
   * Specifies the columns by which the query results are sorted in descending order.
   * 
   * *   0: The query results are sorted by the query_duration_ms column.
   * *   1: The query results are sorted by the query_duration_ms and query_start_time columns.
   * *   2: The query results are sorted by the query_duration_ms, query_start_time, and user columns.
   * 
   * @example
   * id
   */
  queryOrder?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      initialQueryId: 'InitialQueryId',
      initialUser: 'InitialUser',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryDurationMs: 'QueryDurationMs',
      queryOrder: 'QueryOrder',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      initialQueryId: 'string',
      initialUser: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryDurationMs: 'string',
      queryOrder: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

