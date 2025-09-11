// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePatternPerformanceResponseBodyPerformancesSeries extends $dara.Model {
  /**
   * @remarks
   * The name of the performance metric value. Valid values:
   * 
   * *   When the `Key` parameter is set to `AnalyticDB_PatternQueryCount`, `pattern_query_count` is returned, which indicates the number of executions of the SQL statements in association with the SQL pattern.
   * 
   * *   When the `Key` parameter is set to `AnalyticDB_PatternQueryTime`, the following values are returned:
   * 
   *     *   `average_query_time`, which indicates the average total amount of time consumed by the SQL statements in association with the SQL pattern.
   *     *   `max_query_time`, which indicates the maximum total amount of time consumed by the SQL statements in association with the SQL pattern.
   * 
   * *   When the `Key` parameter is set to `AnalyticDB_PatternExecutionTime`, the following values are returned:
   * 
   *     *   `average_execution_time`, which indicates the average execution duration of the SQL statements in association with the SQL pattern.
   *     *   `max_execution_time`, which indicates the maximum execution duration of the SQL statements in association with the SQL pattern.
   * 
   * *   When the `Key` parameter is set to `AnalyticDB_PatternPeakMemory`, the following values are returned:
   * 
   *     *   `average_peak_memory`, which indicates the average peak memory usage of the SQL statements in association with the SQL pattern.
   *     *   `max_peak_memory`, which indicates the maximum peak memory usage of the SQL statements in association with the SQL pattern.
   * 
   * *   When the `Key` parameter is set `AnalyticDB_PatternScanSize`, the following values are returned:
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
   * The queried performance metrics.
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

export class DescribePatternPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP address of the SQL client that submits the SQL pattern.
   * 
   * @example
   * 172.16.14.*
   */
  accessIp?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-18T18:05Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of failed SQL patterns within the time range.
   * 
   * @example
   * 0
   */
  failedCount?: number;
  /**
   * @remarks
   * The queried performance metrics.
   */
  performances?: DescribePatternPerformanceResponseBodyPerformances[];
  /**
   * @remarks
   * The number of queries executed in association with the SQL pattern within the time range.
   * 
   * @example
   * 35018
   */
  queryCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 210f47011634026610213529******
   */
  requestId?: string;
  /**
   * @remarks
   * The SQL statement that represents the SQL pattern.
   * 
   * @example
   * SELECT *nFROM HIVE.`ADB_EXTERNAL_TPCH_10GB`.`External_customer`nLIMIT ?
   */
  SQLPattern?: string;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-18T00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The tables that are in association with the SQL pattern.
   * 
   * @example
   * tpch_1g.part;tpch_1g.supplier;tpch_1g.lineitem;tpch_1g.partsupp;tpch_1g.orders;tpch_1g.nation
   */
  tables?: string;
  /**
   * @remarks
   * The database account that is used to execute the SQL statement.
   * 
   * @example
   * test
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

