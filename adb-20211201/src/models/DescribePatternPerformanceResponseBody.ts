// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePatternPerformanceResponseBodyPerformancesSeries extends $dara.Model {
  /**
   * @remarks
   * The name of the performance value. The value of this parameter varies based on the value of `Key`:
   * 
   * - If `Key` is `AnalyticDB_PatternQueryCount`, this parameter returns `pattern_query_count`, which indicates the query count for the sql pattern.
   * 
   * - If `Key` is `AnalyticDB_PatternQueryTime`, this parameter can be one of the following values:
   * 
   *   - `average_query_time`: the average total time of queries that match the sql pattern.
   * 
   *   - `max_query_time`: the maximum total time of queries that match the sql pattern.
   * 
   * - If `Key` is `AnalyticDB_PatternExecutionTime`, this parameter can be one of the following values:
   * 
   *   - `average_execution_time`: the average execution time of queries that match the sql pattern.
   * 
   *   - `max_execution_time`: the maximum execution time of queries that match the sql pattern.
   * 
   * - If `Key` is `AnalyticDB_PatternPeakMemory`, this parameter can be one of the following values:
   * 
   *   - `average_peak_memory`: the average peak memory usage of queries that match the sql pattern.
   * 
   *   - `max_peak_memory`: the maximum peak memory usage of queries that match the sql pattern.
   * 
   * - If `Key` is `AnalyticDB_PatternScanSize`, this parameter can be one of the following values:
   * 
   *   - `average_scan_size`: the average data scan size of queries that match the sql pattern.
   * 
   *   - `max_scan_size`: the maximum data scan size of queries that match the sql pattern.
   * 
   * @example
   * max_query_time
   */
  name?: string;
  /**
   * @remarks
   * The list of performance values.
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
   * The performance metric. Valid values:
   * 
   * - **AnalyticDB_PatternQueryCount**: The total number of queries that match the sql pattern.
   * 
   * - **AnalyticDB_PatternQueryTime**: The total time for queries that match the sql pattern.
   * 
   * - **AnalyticDB_PatternExecutionTime**: The total execution time of queries that match the sql pattern.
   * 
   * - **AnalyticDB_PatternPeakMemory**: The peak memory usage of queries that match the sql pattern.
   * 
   * - **AnalyticDB_PatternScanSize**: The total data scan size of queries that match the sql pattern.
   * 
   * @example
   * AnalyticDB_PatternExecutionTime
   */
  key?: string;
  /**
   * @remarks
   * The time series data for the performance metric.
   */
  series?: DescribePatternPerformanceResponseBodyPerformancesSeries[];
  /**
   * @remarks
   * The unit of the performance metric. The returned unit varies based on the value of `Key`:
   * 
   * - If `Key` is `AnalyticDB_PatternQueryTime` or `AnalyticDB_PatternExecutionTime`, the unit is **ms**.
   * 
   * - If `Key` is `AnalyticDB_PatternPeakMemory`, the unit is **MB**.
   * 
   * - If `Key` is `AnalyticDB_PatternScanSize`, the unit is **MB**.
   * 
   * - If `Key` is `AnalyticDB_PatternQueryCount`, this parameter is empty.
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
  /**
   * @remarks
   * The client IP address that submitted the queries that match the sql pattern.
   * 
   * @example
   * 172.16.14.*
   */
  accessIp?: string;
  /**
   * @remarks
   * The end of the query time range. The time is in UTC and is formatted as *yyyy-MM-ddTHH:mmZ*.
   * 
   * @example
   * 2022-08-22T01:06:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of failed executions for the sql pattern within the query time range.
   * 
   * @example
   * 1
   */
  failedCount?: number;
  /**
   * @remarks
   * The performance metrics.
   */
  performances?: DescribePatternPerformanceResponseBodyPerformances[];
  /**
   * @remarks
   * The number of executions for the sql pattern within the query time range.
   * 
   * @example
   * 1202
   */
  queryCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F21AF487-B8C9-57E0-8E3A-A92BC3611FB6
   */
  requestId?: string;
  /**
   * @remarks
   * The SQL statement for the sql pattern.
   * 
   * @example
   * SELECT *nFROM HIVE.`ADB_EXTERNAL_TPCH_10GB`.`External_customer`nLIMIT ?
   */
  SQLPattern?: string;
  /**
   * @remarks
   * The start of the query time range. The time is in UTC and is formatted as *yyyy-MM-ddTHH:mmZ*.
   * 
   * @example
   * 2022-08-21T02:15:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The tables queried by the sql pattern.
   * 
   * @example
   * tpch_1g.part;tpch_1g.supplier;tpch_1g.lineitem;tpch_1g.partsupp;tpch_1g.orders;tpch_1g.nation
   */
  tables?: string;
  /**
   * @remarks
   * The database account that executes the SQL statements.
   * 
   * @example
   * test_user
   */
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

