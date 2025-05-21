// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePatternPerformanceResponseBodyPerformancesSeries } from "./DescribePatternPerformanceResponseBodyPerformancesSeries";


export class DescribePatternPerformanceResponseBodyPerformances extends $dara.Model {
  /**
   * @remarks
   * The performance metric that was queried. Valid values:
   * 
   * *   **AnalyticDB_PatternQueryCount**: the total number of queries executed in association with the SQL pattern.
   * *   **AnalyticDB_PatternQueryTime**: the total amount of time consumed by the queries executed in association with the SQL pattern.
   * *   **AnalyticDB_PatternExecutionTime**: the total execution duration of the queries executed in association with the SQL pattern.
   * *   **AnalyticDB_PatternPeakMemory**: the peak memory usage of the queries executed in association with the SQL pattern.
   * *   **AnalyticDB_PatternScanSize**: the amount of data scanned in the queries executed in association with the SQL pattern.
   * 
   * @example
   * AnalyticDB_PatternQueryCount
   */
  key?: string;
  /**
   * @remarks
   * The queried performance metrics.
   */
  series?: DescribePatternPerformanceResponseBodyPerformancesSeries[];
  /**
   * @remarks
   * The unit of the performance metric. Valid values:
   * 
   * *   When the performance metric is related to the query duration (the `Key` value is `AnalyticDB_PatternQueryTime` or `AnalyticDB_PatternExecutionTime`), **ms** is returned.
   * *   When the performance metric is related to the memory usage (the `Key` value is `AnalyticDB_PatternPeakMemory`), **MB** is returned.
   * *   When the performance metric is related to the amount of data scanned (the `Key` value is `AnalyticDB_PatternScanSize`), **MB** is returned.
   * *   When the performance metric is related to the number of queries (the `Key` value is `AnalyticDB_PatternQueryCount`), this parameter is empty.
   * 
   * @example
   * ms
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      series: 'Series',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      series: { 'type': 'array', 'itemType': DescribePatternPerformanceResponseBodyPerformancesSeries },
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.series)) {
      $dara.Model.validateArray(this.series);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

