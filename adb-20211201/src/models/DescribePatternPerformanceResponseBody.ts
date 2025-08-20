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

export class DescribePatternPerformanceResponseBody extends $dara.Model {
  accessIp?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-22T01:06:00Z
   */
  endTime?: string;
  failedCount?: number;
  /**
   * @remarks
   * The queried performance metrics.
   */
  performances?: DescribePatternPerformanceResponseBodyPerformances[];
  queryCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F21AF487-B8C9-57E0-8E3A-A92BC3611FB6
   */
  requestId?: string;
  SQLPattern?: string;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-21T02:15:00Z
   */
  startTime?: string;
  tables?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      accessIp: 'AccessIp',
      endTime: 'EndTime',
      failedCount: 'FailedCount',
      performances: 'Performances',
      queryCount: 'QueryCount',
      requestId: 'RequestId',
      SQLPattern: 'SQLPattern',
      startTime: 'StartTime',
      tables: 'Tables',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIp: 'string',
      endTime: 'string',
      failedCount: 'number',
      performances: { 'type': 'array', 'itemType': DescribePatternPerformanceResponseBodyPerformances },
      queryCount: 'number',
      requestId: 'string',
      SQLPattern: 'string',
      startTime: 'string',
      tables: 'string',
      user: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.performances)) {
      $dara.Model.validateArray(this.performances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

