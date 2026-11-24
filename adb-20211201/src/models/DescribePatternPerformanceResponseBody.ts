// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePatternPerformanceResponseBodyPerformancesSeries extends $dara.Model {
  /**
   * @remarks
   * The name of the performance value. Valid values:
   * - When the `Key` value is `AnalyticDB_PatternQueryCount`, this parameter returns `pattern_query_count`, which indicates the executions of SQL statements related to the current pattern.
   * - When the `Key` value is `AnalyticDB_PatternQueryTime`, this parameter returns:
   *     - `average_query_time`: the average total time consumed by SQL statements related to the current pattern.
   *     - `max_query_time`: the maximum total time consumed by SQL statements related to the current pattern.
   * - When the `Key` value is `AnalyticDB_PatternExecutionTime`, this parameter returns:
   *     - `average_execution_time`: the average execution duration of SQL statements related to the current pattern.
   *     - `max_execution_time`: the maximum execution duration of SQL statements related to the current pattern.
   * - When the `Key` value is `AnalyticDB_PatternPeakMemory`, this parameter returns:
   *     - `average_peak_memory`: the average peak memory consumed by SQL statements related to the current pattern.
   *     - `max_peak_memory`: the maximum peak memory consumed by SQL statements related to the current pattern.
   * - When the `Key` value is `AnalyticDB_PatternScanSize`, this parameter returns:
   *     - `average_scan_size`: the average data volume read by SQL statements related to the current pattern.
   *     - `max_scan_size`: the maximum data volume read by SQL statements related to the current pattern.
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
   * The queried performance metrics. Valid values:
   * - **AnalyticDB_PatternQueryCount**: the total number of queries related to the pattern.
   * - **AnalyticDB_PatternQueryTime**: the total time consumed by queries related to the pattern.
   * - **AnalyticDB_PatternExecutionTime**: the execution duration of queries related to the pattern.
   * - **AnalyticDB_PatternPeakMemory**: the peak memory consumed by queries related to the pattern.
   * - **AnalyticDB_PatternScanSize**: the data volume read by queries related to the pattern.
   * 
   * @example
   * AnalyticDB_PatternExecutionTime
   */
  key?: string;
  /**
   * @remarks
   * The details of each performance value under the performance metrics.
   */
  series?: DescribePatternPerformanceResponseBodyPerformancesSeries[];
  /**
   * @remarks
   * The units corresponding to the performance metrics. Valid values:
   * - **ms**: returned when the performance metric is related to query time, which means the `Key` value is `AnalyticDB_PatternQueryTime` or `AnalyticDB_PatternExecutionTime`.
   * - **MB**: returned when the performance metric is related to peak memory, which means the `Key` value is `AnalyticDB_PatternPeakMemory`.
   * - **MB**: returned when the performance metric is the data volume read, which means the `Key` value is `AnalyticDB_PatternScanSize`.
   * - Empty: returned when the performance metric is the number of queries, which means the `Key` value is `AnalyticDB_PatternQueryCount`.
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
   * The IP address of the client that submits the SQL statements related to the pattern.
   * 
   * @example
   * 172.16.14.*
   */
  accessIp?: string;
  /**
   * @remarks
   * The end time of the query. The time is in UTC and follows the <i>yyyy-MM-ddTHH:mmZ</i> format.
   * 
   * @example
   * 2022-08-22T01:06:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of failures of the pattern within the query time range.
   * 
   * @example
   * 1
   */
  failedCount?: number;
  /**
   * @remarks
   * The performance details.
   */
  performances?: DescribePatternPerformanceResponseBodyPerformances[];
  /**
   * @remarks
   * The number of executions of the pattern within the query time range.
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
   * The specific statement of the SQL pattern.
   * 
   * @example
   * SELECT *nFROM HIVE.`ADB_EXTERNAL_TPCH_10GB`.`External_customer`nLIMIT ?
   */
  SQLPattern?: string;
  /**
   * @remarks
   * The start time of the query. The time is in UTC and follows the <i>yyyy-MM-ddTHH:mmZ</i> format.
   * 
   * @example
   * 2022-08-21T02:15:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The information about the tables involved in the SQL pattern query.
   * 
   * @example
   * tpch_1g.part;tpch_1g.supplier;tpch_1g.lineitem;tpch_1g.partsupp;tpch_1g.orders;tpch_1g.nation
   */
  tables?: string;
  /**
   * @remarks
   * The database account that executes the SQL statement.
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

