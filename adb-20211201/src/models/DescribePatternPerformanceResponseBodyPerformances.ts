// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePatternPerformanceResponseBodyPerformancesSeries } from "./DescribePatternPerformanceResponseBodyPerformancesSeries";


export class DescribePatternPerformanceResponseBodyPerformances extends $dara.Model {
  /**
   * @remarks
   * The queried performance metric. Valid values:
   * 
   * *   **AnalyticDB_PatternQueryCount**: the total number of queries executed in association with the SQL pattern.
   * *   **AnalyticDB_PatternQueryTime**: the total amount of time consumed by the queries executed in association with the SQL pattern.
   * *   **AnalyticDB_PatternExecutionTime**: the execution duration of the queries executed in association with the SQL pattern.
   * *   **AnalyticDB_PatternPeakMemory**: the peak memory usage of the queries executed in association with the SQL pattern.
   * *   **AnalyticDB_PatternScanSize**: the amount of data scanned in the queries executed in association with the SQL pattern.
   * 
   * @example
   * AnalyticDB_PatternExecutionTime
   */
  key?: string;
  /**
   * @remarks
   * The values of the performance metrics.
   */
  series?: DescribePatternPerformanceResponseBodyPerformancesSeries[];
  /**
   * @remarks
   * The unit of the performance metric. Valid values:
   * 
   * *   If the performance metric is related to the query time (the value of `Key` is `AnalyticDB_PatternQueryTime` or `AnalyticDB_PatternExecutionTime`), **ms** is returned.
   * *   If the performance metric is related to the peak memory usage (the value of `Key` is `AnalyticDB_PatternPeakMemory`), **MB** is returned.
   * *   If the performance metric is related to the amount of data scanned (the value of `Key` is `AnalyticDB_PatternScanSize`), **MB** is returned.
   * *   If the performance metric is related to the number of queries (the value of `Key` is `AnalyticDB_PatternQueryCount`), null is returned.
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

