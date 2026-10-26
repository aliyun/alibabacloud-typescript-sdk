// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCubeOptimizationResponseBodyResultCubePerformanceDiagnoseModel extends $dara.Model {
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
   * 2
   */
  cacheQueryCount?: number;
  /**
   * @remarks
   * The average query duration.
   * 
   * @example
   * 1.0
   */
  costTimeAvg?: number;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * 3e45b61a-9ba8-4c7c-8248-8dbe69945636
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
   * 2
   */
  queryCountAvg?: number;
  /**
   * @remarks
   * The proportion of queries that exceed 5 seconds.
   * 
   * @example
   * 0.1
   */
  queryOverFivePercentNum?: number;
  /**
   * @remarks
   * The percentage of queries that exceed 5 seconds.
   * 
   * @example
   * 0.5
   */
  queryOverFiveSecPercent?: string;
  /**
   * @remarks
   * The percentage of queries that exceed 10 seconds.
   * 
   * @example
   * 0.1
   */
  queryOverTenSecPercent?: string;
  /**
   * @remarks
   * The proportion of queries that exceed 10 seconds.
   * 
   * @example
   * 0.3
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
   * The percentage of chart query timeouts.
   * 
   * @example
   * 0.3
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
   * 2
   */
  quickIndexQueryCount?: number;
  /**
   * @remarks
   * The percentage of repeated queries.
   * 
   * @example
   * 0.1
   */
  repeatQueryPercent?: string;
  /**
   * @remarks
   * The number of repeated queries.
   * 
   * @example
   * 2
   */
  repeatQueryPercentNum?: number;
  /**
   * @remarks
   * The number of repeated SQL queries.
   * 
   * @example
   * 2
   */
  repeatSqlQueryCount?: number;
  /**
   * @remarks
   * The percentage of repeated queries.
   * 
   * @example
   * 0.3
   */
  repeatSqlQueryPercent?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 6ea74bff-c818-4188-b462-dbb45a24dbac
   */
  workspaceId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * eco0sh0prods
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

export class QueryCubeOptimizationResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The type of the suggestion. Valid values:
   * - **OPEN_CACHE**: Enable caching.
   * - **OPEN_QUICK_ENGINE**: Enable the Quick engine.
   * - **INCREASE_CACHE_TIME**: Increase the cache duration.
   * 
   * @example
   * OPENQUICKENGINE
   */
  adviceType?: string;
  /**
   * @remarks
   * The dataset diagnostics information.
   */
  cubePerformanceDiagnoseModel?: QueryCubeOptimizationResponseBodyResultCubePerformanceDiagnoseModel;
  static names(): { [key: string]: string } {
    return {
      adviceType: 'AdviceType',
      cubePerformanceDiagnoseModel: 'CubePerformanceDiagnoseModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceType: 'string',
      cubePerformanceDiagnoseModel: QueryCubeOptimizationResponseBodyResultCubePerformanceDiagnoseModel,
    };
  }

  validate() {
    if(this.cubePerformanceDiagnoseModel && typeof (this.cubePerformanceDiagnoseModel as any).validate === 'function') {
      (this.cubePerformanceDiagnoseModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubeOptimizationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The list of dataset optimization suggestions, which includes dataset performance diagnostics information and corresponding optimization suggestion types.
   */
  result?: QueryCubeOptimizationResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - true: The request is successful.
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
      result: { 'type': 'array', 'itemType': QueryCubeOptimizationResponseBodyResult },
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

