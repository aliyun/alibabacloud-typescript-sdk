// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCubePerformanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The average duration for cache hits.
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
   * The average query duration.
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
   * The dataset name.
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
   * The proportion of queries that take more than 5 seconds.
   * 
   * @example
   * 1.0
   */
  queryOverFivePercentNum?: number;
  /**
   * @remarks
   * The percentage of queries that take more than 5 seconds.
   * 
   * @example
   * 1.0
   */
  queryOverFiveSecPercent?: string;
  /**
   * @remarks
   * The percentage of queries that take more than 10 seconds.
   * 
   * @example
   * 1.0
   */
  queryOverTenSecPercent?: string;
  /**
   * @remarks
   * The proportion of queries that take more than 10 seconds.
   * 
   * @example
   * 1.0
   */
  queryOverTenSecPercentNum?: number;
  /**
   * @remarks
   * The number of chart query timeouts.
   * 
   * @example
   * 1
   */
  queryTimeoutCount?: number;
  /**
   * @remarks
   * The proportion of chart query timeouts.
   * 
   * @example
   * 1
   */
  queryTimeoutCountPercent?: number;
  /**
   * @remarks
   * The average query duration for Quick engine hits.
   * 
   * @example
   * 1
   */
  quickIndexCostTimeAvg?: number;
  /**
   * @remarks
   * The number of Quick engine hits.
   * 
   * @example
   * 1
   */
  quickIndexQueryCount?: number;
  /**
   * @remarks
   * The proportion of repeated queries.
   * 
   * @example
   * 0.3
   */
  repeatQueryPercent?: string;
  /**
   * @remarks
   * The number of repeated queries.
   * 
   * @example
   * 1
   */
  repeatQueryPercentNum?: number;
  /**
   * @remarks
   * The number of repeated queries.
   * 
   * @example
   * 1
   */
  repeatSqlQueryCount?: number;
  /**
   * @remarks
   * The proportion of repeated queries.
   * 
   * @example
   * 1
   */
  repeatSqlQueryPercent?: string;
  /**
   * @remarks
   * The ID of the workspace to which the resource belongs.
   * 
   * @example
   * 87c6b145-090c-43e1-9426-8f93be23****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * Test workspace
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

export class QueryCubePerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 685072a0-1fd5-40ef-ae6b-cf94e79e718f
   */
  requestId?: string;
  /**
   * @remarks
   * The list of dataset performance logs, which includes dataset information and performance statistics information such as query count, query duration, and cache hits.
   */
  result?: QueryCubePerformanceResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request succeeded.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryCubePerformanceResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

