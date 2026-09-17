// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ItemsMetricValuesValue } from "./ItemsMetricValuesValue";


export class DescribeSqlPatternCompareReportResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The display string of the average execution duration for Time 2, in seconds. This field is returned only for the CPU_COST dimension.
   * 
   * @example
   * 0.4s
   */
  avgExecutionTime?: string;
  /**
   * @remarks
   * The display string of the average planning duration for Time 2, in seconds. This field is returned only for the CPU_COST dimension.
   * 
   * @example
   * 0.1s
   */
  avgPlanningTime?: string;
  /**
   * @remarks
   * The display string of the average query response time for Time 2, in seconds. This field is returned for all analysis dimensions.
   * 
   * @example
   * 0.5s
   */
  avgRt?: string;
  /**
   * @remarks
   * The display string of the maximum execution duration for Time 2, in seconds. This field is returned only for the CPU_COST dimension.
   * 
   * @example
   * 1.8s
   */
  maxExecutionTime?: string;
  /**
   * @remarks
   * The display string of the maximum planning duration for Time 2, in seconds. This field is returned only for the CPU_COST dimension.
   * 
   * @example
   * 0.2s
   */
  maxPlanningTime?: string;
  /**
   * @remarks
   * The display string of the maximum query response time for Time 2, in seconds. This field is returned for all analysis dimensions.
   * 
   * @example
   * 2s
   */
  maxRt?: string;
  /**
   * @remarks
   * The primary metric mapping for the current analysis dimension. Valid keys:
   * 
   * - `QUERY_COUNT`: the number of query executions.
   * - `CPU_COST`: the CPU consumption.
   * - `SHUFFLE_SIZE`: the shuffle data volume.
   * - `PEAK_MEMORY`: the peak memory consumption.
   * - `SCAN_SIZE`: the scan data volume.
   * 
   * > Each result contains only one key that matches the `MetricType` request parameter.
   */
  metricValues?: { [key: string]: ItemsMetricValuesValue };
  /**
   * @remarks
   * The parameterized SQL Pattern text. This field is empty or not returned when IncludePattern is set to false. When the text is unavailable, a prompt containing a hash identifier may be returned.
   * 
   * @example
   * SELECT * FROM orders WHERE order_id = ?
   */
  pattern?: string;
  /**
   * @remarks
   * The number of query executions for Time 2, in count. This field is returned for the CPU_COST, SHUFFLE_SIZE, PEAK_MEMORY, and SCAN_SIZE dimensions.
   * 
   * @example
   * 120
   */
  queryCount?: number;
  /**
   * @remarks
   * The display string of the number of query executions for Time 2. The applicable scope is the same as QueryCount.
   * 
   * @example
   * 120 times
   */
  queryCountDisplayValue?: string;
  /**
   * @remarks
   * The global sequence number in the current filtered and sorted results, starting from 1 and numbered continuously across pages.
   * 
   * @example
   * 1
   */
  rank?: number;
  /**
   * @remarks
   * The change level for the current analysis dimension. Valid values:
   * 
   * - `NEW`: A new Pattern. Returned only for NEW reports.
   * - `SLIGHT`: A slight change. The average change rate is in the range of (0%, 20%].
   * - `MODERATE`: A moderate change. The average change rate is in the range of (20%, 50%].
   * - `HIGH`: A high change. The average change rate is in the range of (50%, 100%].
   * - `SEVERE`: A severe change. The average change rate is greater than 100%, or the change represents zero-baseline growth.
   * 
   * > The change level only indicates the magnitude of metric growth and cannot be used alone to determine the cause of a fault.
   * 
   * @example
   * SEVERE
   */
  riskLevel?: string;
  /**
   * @remarks
   * The hash identifier of the SQL Pattern, returned as a string. Store and pass this value as a string to avoid precision loss caused by numeric conversion.
   * 
   * @example
   * 1234567890123456789
   */
  sqlPatternHash?: string;
  /**
   * @remarks
   * The display string of the total query duration for Time 2, in seconds. This field is returned only for the QUERY_COUNT dimension.
   * 
   * @example
   * 60s
   */
  totalQueryTime?: string;
  /**
   * @remarks
   * The display string of the total scan duration for Time 2, in seconds. This field is returned only for the SCAN_SIZE dimension.
   * 
   * @example
   * 12s
   */
  totalScanCost?: string;
  static names(): { [key: string]: string } {
    return {
      avgExecutionTime: 'AvgExecutionTime',
      avgPlanningTime: 'AvgPlanningTime',
      avgRt: 'AvgRt',
      maxExecutionTime: 'MaxExecutionTime',
      maxPlanningTime: 'MaxPlanningTime',
      maxRt: 'MaxRt',
      metricValues: 'MetricValues',
      pattern: 'Pattern',
      queryCount: 'QueryCount',
      queryCountDisplayValue: 'QueryCountDisplayValue',
      rank: 'Rank',
      riskLevel: 'RiskLevel',
      sqlPatternHash: 'SqlPatternHash',
      totalQueryTime: 'TotalQueryTime',
      totalScanCost: 'TotalScanCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgExecutionTime: 'string',
      avgPlanningTime: 'string',
      avgRt: 'string',
      maxExecutionTime: 'string',
      maxPlanningTime: 'string',
      maxRt: 'string',
      metricValues: { 'type': 'map', 'keyType': 'string', 'valueType': ItemsMetricValuesValue },
      pattern: 'string',
      queryCount: 'number',
      queryCountDisplayValue: 'string',
      rank: 'number',
      riskLevel: 'string',
      sqlPatternHash: 'string',
      totalQueryTime: 'string',
      totalScanCost: 'string',
    };
  }

  validate() {
    if(this.metricValues) {
      $dara.Model.validateMap(this.metricValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlPatternCompareReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Pattern details on the current page. An empty array is returned if no results match the conditions.
   */
  items?: DescribeSqlPatternCompareReportResponseBodyItems[];
  /**
   * @remarks
   * The analysis metric. Valid values:
   * 
   * - `QUERY_COUNT`: the number of query executions.
   * - `CPU_COST`: the CPU consumption.
   * - `SHUFFLE_SIZE`: the amount of shuffle data.
   * - `PEAK_MEMORY`: the peak memory consumption.
   * - `SCAN_SIZE`: the amount of scanned data.
   * 
   * @example
   * CPU_COST
   */
  metricType?: string;
  /**
   * @remarks
   * The page number of the returned page, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries returned per page for this query.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the SQL Pattern comparison report.
   * 
   * @example
   * 1001
   */
  reportId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A1B2C3D-4E5F-6789-ABCD-0123456789AB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of Patterns that match the current report, analysis dimension, and change rate filter conditions. This is not the number of entries on the current page.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      metricType: 'MetricType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reportId: 'ReportId',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeSqlPatternCompareReportResponseBodyItems },
      metricType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      reportId: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

