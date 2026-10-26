// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryComponentPerformanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The average duration of cache hits.
   * 
   * @example
   * 0.3
   */
  cacheCostTimeAvg?: number;
  /**
   * @remarks
   * The number of cache hits.
   * 
   * @example
   * 3
   */
  cacheQueryCount?: number;
  /**
   * @remarks
   * The component ID.
   * 
   * @example
   * 0696083a-ca72-4d89-8e7a-c017910e0***
   */
  componentId?: string;
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * Line chart
   */
  componentName?: string;
  /**
   * @remarks
   * The average query duration.
   * 
   * @example
   * 0.3
   */
  costTimeAvg?: number;
  /**
   * @remarks
   * The number of queries.
   * 
   * @example
   * 5
   */
  queryCount?: number;
  /**
   * @remarks
   * The average number of queries.
   * 
   * @example
   * 0.3
   */
  queryCountAvg?: number;
  /**
   * @remarks
   * The number of queries that take more than 5 seconds.
   * 
   * @example
   * 5
   */
  queryOverFivePercentNum?: number;
  /**
   * @remarks
   * The percentage of queries that take more than 5 seconds.
   * 
   * @example
   * 0.3
   */
  queryOverFiveSecPercent?: string;
  /**
   * @remarks
   * The percentage of queries that take more than 10 seconds.
   * 
   * @example
   * 0.3
   */
  queryOverTenSecPercent?: string;
  /**
   * @remarks
   * The number of queries that take more than 10 seconds.
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
   * The average query duration of Quick engine hits.
   * 
   * @example
   * 0.3
   */
  quickIndexCostTimeAvg?: number;
  /**
   * @remarks
   * The number of Quick engine hits.
   * 
   * @example
   * 3
   */
  quickIndexQueryCount?: number;
  /**
   * @remarks
   * The percentage of repeated queries.
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
   * 2
   */
  repeatQueryPercentNum?: number;
  /**
   * @remarks
   * The number of repeated SQL queries.
   * 
   * @example
   * 5
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
   * ClusterRiskReport
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
   * The unique ID of the workspace.
   * 
   * @example
   * 89713491-cb4f-4579-b889-e82c35f1****
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
      componentId: 'ComponentId',
      componentName: 'ComponentName',
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
      componentId: 'string',
      componentName: 'string',
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

export class QueryComponentPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BCE45E6D-9304-4F94-86BB-5A772B1615FF
   */
  requestId?: string;
  /**
   * @remarks
   * The list of component performance logs, including component information and performance statistics information such as query count, query duration, and cache hits.
   */
  result?: QueryComponentPerformanceResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * - false: The request fails.
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
      result: { 'type': 'array', 'itemType': QueryComponentPerformanceResponseBodyResult },
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

