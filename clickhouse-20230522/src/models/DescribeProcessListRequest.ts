// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessListRequest extends $dara.Model {
  /**
   * @remarks
   * The compute group ID.
   * 
   * @example
   * cc-gs5j3sua77******-clickhouse
   */
  computingGroupId?: string;
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
   * The query user.
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
   * The execution duration of slow SQL statements. Unit: ms. Minimum value: 1000 ms.
   * 
   * @example
   * 1000
   */
  queryDurationMs?: string;
  /**
   * @remarks
   * Sorts results in descending order by the specified columns.
   * 
   * - 0: Sorts only by query_duration_ms.
   * 
   * - 1: Sorts by query_duration_ms and query_start_time.
   * 
   * - 2: Sorts by query_duration_ms, query_start_time, and user.
   * 
   * @example
   * 0
   */
  queryOrder?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      computingGroupId: 'ComputingGroupId',
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
      computingGroupId: 'string',
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

