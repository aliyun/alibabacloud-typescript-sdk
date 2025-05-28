// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCubePerformanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The average duration of cache hits.
   * 
   * @example
   * 1
   */
  cacheCostTimeAvg?: number;
  /**
   * @remarks
   * The number of cache hits.
   * 
   * @example
   * 1
   */
  cacheQueryCount?: number;
  /**
   * @remarks
   * The average query duration associated with the SQL pattern.
   * 
   * @example
   * 1
   */
  costTimeAvg?: number;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * test
   */
  cubeName?: string;
  /**
   * @remarks
   * The number of queries.
   * 
   * @example
   * 50
   */
  queryCount?: number;
  /**
   * @remarks
   * The average number of queries.
   * 
   * @example
   * 1
   */
  queryCountAvg?: number;
  /**
   * @remarks
   * The percentage of the number of queries that exceed the 5S.
   * 
   * @example
   * 1.0
   */
  queryOverFivePercentNum?: number;
  /**
   * @remarks
   * Query the proportion of more than 5S.
   * 
   * @example
   * 1.0
   */
  queryOverFiveSecPercent?: string;
  /**
   * @remarks
   * The percentage of queries that exceed 10s.
   * 
   * @example
   * 1.0
   */
  queryOverTenSecPercent?: string;
  /**
   * @remarks
   * The percentage of queries that exceed 10s.
   * 
   * @example
   * 1.0
   */
  queryOverTenSecPercentNum?: number;
  /**
   * @remarks
   * The number of times that the chart query times out.
   * 
   * @example
   * 1
   */
  queryTimeoutCount?: number;
  /**
   * @remarks
   * The percentage of timeout times for chart queries.
   * 
   * @example
   * 1
   */
  queryTimeoutCountPercent?: number;
  /**
   * @remarks
   * The average time consumed by the Quick engine query.
   * 
   * @example
   * 1
   */
  quickIndexCostTimeAvg?: number;
  /**
   * @remarks
   * The number of times that the Quick engine is hit.
   * 
   * @example
   * 1
   */
  quickIndexQueryCount?: number;
  /**
   * @remarks
   * The proportion of duplicate queries.
   * 
   * @example
   * 0.3
   */
  repeatQueryPercent?: string;
  /**
   * @remarks
   * The number of duplicate queries.
   * 
   * @example
   * 1
   */
  repeatQueryPercentNum?: number;
  /**
   * @remarks
   * The number of times the query is repeated.
   * 
   * @example
   * 1
   */
  repeatSqlQueryCount?: number;
  /**
   * @remarks
   * The proportion of duplicate queries.
   * 
   * @example
   * 1
   */
  repeatSqlQueryPercent?: string;
  /**
   * @remarks
   * The ID of the workspace to which the work belongs.
   * 
   * @example
   * 87c6b145-090c-43e1-9426-8f93be23****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * taascontainerprod
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      cacheCostTimeAvg: 'CacheCostTimeAvg',
      cacheQueryCount: 'CacheQueryCount',
      costTimeAvg: 'CostTimeAvg',
      cubeId: 'CubeId',
      cubeName: 'CubeName',
      queryCount: 'QueryCount',
      queryCountAvg: 'QueryCountAvg',
      queryOverFivePercentNum: 'QueryOverFivePercentNum',
      queryOverFiveSecPercent: 'QueryOverFiveSecPercent',
      queryOverTenSecPercent: 'QueryOverTenSecPercent',
      queryOverTenSecPercentNum: 'QueryOverTenSecPercentNum',
      queryTimeoutCount: 'QueryTimeoutCount',
      queryTimeoutCountPercent: 'QueryTimeoutCountPercent',
      quickIndexCostTimeAvg: 'QuickIndexCostTimeAvg',
      quickIndexQueryCount: 'QuickIndexQueryCount',
      repeatQueryPercent: 'RepeatQueryPercent',
      repeatQueryPercentNum: 'RepeatQueryPercentNum',
      repeatSqlQueryCount: 'RepeatSqlQueryCount',
      repeatSqlQueryPercent: 'RepeatSqlQueryPercent',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheCostTimeAvg: 'number',
      cacheQueryCount: 'number',
      costTimeAvg: 'number',
      cubeId: 'string',
      cubeName: 'string',
      queryCount: 'number',
      queryCountAvg: 'number',
      queryOverFivePercentNum: 'number',
      queryOverFiveSecPercent: 'string',
      queryOverTenSecPercent: 'string',
      queryOverTenSecPercentNum: 'number',
      queryTimeoutCount: 'number',
      queryTimeoutCountPercent: 'number',
      quickIndexCostTimeAvg: 'number',
      quickIndexQueryCount: 'number',
      repeatQueryPercent: 'string',
      repeatQueryPercentNum: 'number',
      repeatSqlQueryCount: 'number',
      repeatSqlQueryPercent: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

