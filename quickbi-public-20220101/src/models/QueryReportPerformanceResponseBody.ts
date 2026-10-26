// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReportPerformanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The average time consumed for cache hits.
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
   * The number of chart queries.
   * 
   * @example
   * 1
   */
  componentQueryCount?: number;
  /**
   * @remarks
   * The average number of chart queries.
   * 
   * @example
   * 2.0
   */
  componentQueryCountAvg?: number;
  /**
   * @remarks
   * The average query time.
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
   * The proportion of queries that take more than 5 seconds.
   * 
   * @example
   * 0.5
   */
  queryOverFivePercentNum?: number;
  /**
   * @remarks
   * The percentage of queries that take more than 5 seconds.
   * 
   * @example
   * 0.5
   */
  queryOverFiveSecPercent?: string;
  /**
   * @remarks
   * The percentage of queries that take more than 10 seconds.
   * 
   * @example
   * 0.5
   */
  queryOverTenSecPercent?: string;
  /**
   * @remarks
   * The number of queries that take more than 10 seconds.
   * 
   * @example
   * 0.5
   */
  queryOverTenSecPercentNum?: number;
  /**
   * @remarks
   * The number of chart query timeouts.
   * 
   * @example
   * 8
   */
  queryTimeoutCount?: number;
  /**
   * @remarks
   * The proportion of chart query timeouts.
   * 
   * @example
   * 0.5
   */
  queryTimeoutCountPercent?: number;
  /**
   * @remarks
   * The average query time for Quick engine hits.
   * 
   * @example
   * 10
   */
  quickIndexCostTimeAvg?: number;
  /**
   * @remarks
   * The number of Quick engine hits.
   * 
   * @example
   * 5
   */
  quickIndexQueryCount?: number;
  /**
   * @remarks
   * The proportion of repeated queries.
   * 
   * @example
   * 0.8
   */
  repeatQueryPercent?: string;
  /**
   * @remarks
   * The number of repeated queries.
   * 
   * @example
   * 3
   */
  repeatQueryPercentNum?: number;
  /**
   * @remarks
   * The number of repeated SQL queries.
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
   * 0.7
   */
  repeatSqlQueryPercent?: string;
  /**
   * @remarks
   * The report ID.
   * 
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  /**
   * @remarks
   * The report name.
   * 
   * @example
   * ClusterAddonUpgradeReport
   */
  reportName?: string;
  /**
   * @remarks
   * The report type.
   * 
   * @example
   * report
   */
  reportType?: string;
  /**
   * @remarks
   * The ID of the workspace to which the report belongs.
   * 
   * @example
   * ab46ed33-6278-4ef7-8013-8c1335f266ee
   */
  workspaceId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * Custom template
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
   * The list of report performance logs, which includes report information and performance statistics such as query count, query duration, and cache hits.
   */
  result?: QueryReportPerformanceResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * - false: The request fails.
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

