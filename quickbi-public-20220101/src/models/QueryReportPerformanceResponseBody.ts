// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReportPerformanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The average duration of cache hits.
   * 
   * @example
   * 2.2
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
   * The number of times the chart is queried.
   * 
   * @example
   * 1
   */
  componentQueryCount?: number;
  /**
   * @remarks
   * The average number of times the chart is queried.
   * 
   * @example
   * 2.0
   */
  componentQueryCountAvg?: number;
  /**
   * @remarks
   * The average query duration associated with the SQL pattern.
   * 
   * @example
   * 0.2
   */
  costTimeAvg?: number;
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
   * 3.3
   */
  queryCountAvg?: number;
  /**
   * @remarks
   * The percentage of the number of queries that exceed the 5S.
   * 
   * @example
   * 0.5
   */
  queryOverFivePercentNum?: number;
  /**
   * @remarks
   * Query the proportion of more than 5S.
   * 
   * @example
   * 0.5
   */
  queryOverFiveSecPercent?: string;
  /**
   * @remarks
   * The percentage of queries that exceed 10s.
   * 
   * @example
   * 0.5
   */
  queryOverTenSecPercent?: string;
  /**
   * @remarks
   * The number of queries that exceed 10 seconds.
   * 
   * @example
   * 0.5
   */
  queryOverTenSecPercentNum?: number;
  /**
   * @remarks
   * The number of times that the chart query times out.
   * 
   * @example
   * 8
   */
  queryTimeoutCount?: number;
  /**
   * @remarks
   * The percentage of timeout times for chart queries.
   * 
   * @example
   * 0.5
   */
  queryTimeoutCountPercent?: number;
  /**
   * @remarks
   * The average time consumed by the Quick engine query.
   * 
   * @example
   * 10
   */
  quickIndexCostTimeAvg?: number;
  /**
   * @remarks
   * The number of times that the Quick engine is hit.
   * 
   * @example
   * 5
   */
  quickIndexQueryCount?: number;
  /**
   * @remarks
   * The proportion of duplicate queries.
   * 
   * @example
   * 0.8
   */
  repeatQueryPercent?: string;
  /**
   * @remarks
   * The number of duplicate queries.
   * 
   * @example
   * 3
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
   * 0.7
   */
  repeatSqlQueryPercent?: string;
  /**
   * @remarks
   * The ID of the work.
   * 
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  /**
   * @remarks
   * The name of the report.
   * 
   * @example
   * ClusterAddonUpgradeReport
   */
  reportName?: string;
  /**
   * @remarks
   * The format of the report.
   * 
   * @example
   * report
   */
  reportType?: string;
  /**
   * @remarks
   * The ID of the workspace to which the work belongs.
   * 
   * @example
   * ab46ed33-6278-4ef7-8013-8c1335f266ee
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * test
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      cacheCostTimeAvg: 'CacheCostTimeAvg',
      cacheQueryCount: 'CacheQueryCount',
      componentQueryCount: 'ComponentQueryCount',
      componentQueryCountAvg: 'ComponentQueryCountAvg',
      costTimeAvg: 'CostTimeAvg',
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
      reportId: 'ReportId',
      reportName: 'ReportName',
      reportType: 'ReportType',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheCostTimeAvg: 'number',
      cacheQueryCount: 'number',
      componentQueryCount: 'number',
      componentQueryCountAvg: 'number',
      costTimeAvg: 'number',
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
      reportId: 'string',
      reportName: 'string',
      reportType: 'string',
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

export class QueryReportPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1FC71085-D5FD-08E0-813A-4D4BD1031BC5
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: QueryReportPerformanceResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * True
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
      result: { 'type': 'array', 'itemType': QueryReportPerformanceResponseBodyResult },
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

