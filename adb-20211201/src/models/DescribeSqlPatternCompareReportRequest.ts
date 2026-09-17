// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlPatternCompareReportRequest extends $dara.Model {
  /**
   * @remarks
   * The average change rate filter range for CHANGED reports. The format is `left~right`, where values are expressed as percentages and the interval is left-exclusive and right-inclusive. Examples:
   * 
   * - `100~500`: greater than 100% and less than or equal to 500%.
   * - `100~`: greater than 100% with no upper limit.
   * 
   * > - The left boundary is required and must be no less than 0. The right boundary must be no less than the left boundary.
   * > - This parameter is ignored for NEW reports.
   * > - When the time window 1 metric value is 0 and the time window 2 value is greater than 0, the Pattern is classified as zero-baseline growth and is categorized as `SEVERE` (significant change). To exclude such Patterns, set an upper limit for the change rate.
   * 
   * @example
   * 100~500
   */
  changeRate?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * am-2ze1234567890****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to return the parameterized SQL Pattern text. Valid values:
   * 
   * - `true`: Returns the Pattern text.
   * - `false`: Does not return the Pattern text, which reduces the response size.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  includePattern?: boolean;
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
   * This parameter is required.
   * 
   * @example
   * CPU_COST
   */
  metricType?: string;
  /**
   * @remarks
   * Sorts the query results by a specified field. The value is a JSON array string, such as `[{"Field":"Time2SumValue","Type":"Desc"}]`. The array can contain only one object. Parameters:
   * 
   * - `Field`: the sort field. This parameter is case-sensitive. Valid values:
   *     - NEW report: `Time2SumValue`, `Time2AvgValue`, `Time2MaxValue`.
   *     - CHANGED report: `AvgChangeRatePercent`, `AvgTime1Value`, `AvgTime2Value`, `SumChangeRatePercent`, `SumTime1Value`, `SumTime2Value`, `MaxChangeRatePercent`, `MaxTime1Value`, `MaxTime2Value`.
   *     - All report types and analysis metrics: `AvgRt`, `MaxRt`.
   *     - `QUERY_COUNT`: `TotalQueryTime`.
   *     - `CPU_COST`: `QueryCount`, `AvgPlanningTime`, `MaxPlanningTime`, `AvgExecutionTime`, `MaxExecutionTime`.
   *     - `SHUFFLE_SIZE`, `PEAK_MEMORY`: `QueryCount`.
   *     - `SCAN_SIZE`: `QueryCount`, `TotalScanCost`.
   * - `Type`: the sort order. This parameter is case-insensitive. Valid values:
   *     - `Asc`: ascending order.
   *     - `Desc`: descending order.
   * 
   * > - NEW reports are sorted by `Time2SumValue` in descending order by default.
   * > - CHANGED reports are sorted by `AvgChangeRatePercent` in descending order by default.
   * > - The value of `Field` must be applicable to the current report type and `MetricType`.
   * 
   * @example
   * [{"Field":"AvgChangeRatePercent","Type":"Desc"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the SQL Pattern comparison report.
   * 
   * This parameter is required.
   * 
   * @example
   * 1001
   */
  reportId?: number;
  static names(): { [key: string]: string } {
    return {
      changeRate: 'ChangeRate',
      DBClusterId: 'DBClusterId',
      includePattern: 'IncludePattern',
      metricType: 'MetricType',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeRate: 'string',
      DBClusterId: 'string',
      includePattern: 'boolean',
      metricType: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      reportId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

