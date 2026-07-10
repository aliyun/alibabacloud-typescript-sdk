// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessListRequest extends $dara.Model {
  /**
   * @remarks
   * The computing group ID.
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
   * The keyword in the query statement.
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
   * The number of entries to return on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The minimum query execution duration, in milliseconds (ms). Only queries that run for this duration or longer are returned. The minimum value is 1,000.
   * 
   * @example
   * 1000
   */
  queryDurationMs?: string;
  /**
   * @remarks
   * The criteria by which to sort the results. The results are sorted in descending order. Valid values:
   * 
   * - 0: Sorts by `query_duration_ms`.
   * 
   * - 1: Sorts by `query_duration_ms` and `query_start_time`.
   * 
   * - 2: Sorts by `query_duration_ms`, `query_start_time`, and `user`.
   * 
   * @example
   * 0
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

