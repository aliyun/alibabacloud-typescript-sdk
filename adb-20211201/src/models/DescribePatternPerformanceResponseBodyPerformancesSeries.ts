// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePatternPerformanceResponseBodyPerformancesSeries extends $dara.Model {
  /**
   * @remarks
   * The name of the performance metric value. Valid values:
   * 
   * *   If the value of `Key` is `AnalyticDB_PatternQueryCount`, `pattern_query_count` is returned, which indicates the number of executions of the SQL statements in association with the SQL pattern.
   * 
   * *   If the value of `Key` is `AnalyticDB_PatternQueryTime`, the following values are returned:
   * 
   *     *   `average_query_time`, which indicates the average total amount of time consumed by the SQL statements in association with the SQL pattern.
   *     *   `max_query_time`, which indicates the maximum total amount of time consumed by the SQL statements in association with the SQL pattern.
   * 
   * *   If the value of `Key` is `AnalyticDB_PatternExecutionTime`, the following values are returned:
   * 
   *     *   `average_execution_time`, which indicates the average execution duration of the SQL statements in association with the SQL pattern.
   *     *   `max_execution_time`, which indicates the maximum execution duration of the SQL statements in association with the SQL pattern.
   * 
   * *   If the value of `Key` is `AnalyticDB_PatternPeakMemory`, the following values are returned:
   * 
   *     *   `average_peak_memory`, which indicates the average peak memory usage of the SQL statements in association with the SQL pattern.
   *     *   `max_peak_memory`, which indicates the maximum peak memory usage of the SQL statements in association with the SQL pattern.
   * 
   * *   If the value of `Key` is `AnalyticDB_PatternScanSize`, the following values are returned:
   * 
   *     *   `average_scan_size`, which indicates the average amount of data scanned by the SQL statements in association with the SQL pattern.
   *     *   `max_scan_size`, which indicates the maximum amount of data scanned by the SQL statements in association with the SQL pattern.
   * 
   * @example
   * max_query_time
   */
  name?: string;
  /**
   * @remarks
   * The values of the performance metric.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

