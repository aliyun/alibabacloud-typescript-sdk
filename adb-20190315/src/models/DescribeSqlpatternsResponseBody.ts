// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLPatternsResponseBodyPatternDetails extends $dara.Model {
  /**
   * @remarks
   * The client IP address from which the SQL statements matching this pattern were submitted.
   * 
   * @example
   * 192.168.xx.xx
   */
  accessIp?: string;
  /**
   * @remarks
   * The average execution time for statements matching this SQL pattern within the specified time range, in milliseconds.
   * 
   * @example
   * 234.78
   */
  averageExecutionTime?: number;
  /**
   * @remarks
   * The average CPU cost for statements matching this pattern, in milliseconds.
   * 
   * @example
   * 5
   */
  averageOperatorCost?: number;
  /**
   * @remarks
   * The average peak memory usage for statements matching this SQL pattern within the specified time range, in bytes.
   * 
   * @example
   * 234.22
   */
  averagePeakMemory?: number;
  /**
   * @remarks
   * The average query time for statements matching this SQL pattern within the specified time range, in milliseconds.
   * 
   * @example
   * 4
   */
  averageQueryTime?: number;
  /**
   * @remarks
   * The average CPU cost of table scans for statements matching this pattern, in milliseconds.
   * 
   * @example
   * 5
   */
  averageScanCost?: number;
  /**
   * @remarks
   * The average data scan size for statements matching this SQL pattern within the specified time range, in bytes.
   * 
   * @example
   * 234149.23
   */
  averageScanSize?: number;
  /**
   * @remarks
   * Specifies whether queries matching this pattern can be blocked. Valid values:
   * 
   * - **true**: The SQL pattern can be blocked.
   * 
   * - **false**: The SQL pattern cannot be blocked.
   * 
   * > AnalyticDB for MySQL supports blocking for only `SELECT` and `INSERT` statements.
   * 
   * @example
   * true
   */
  blockable?: boolean;
  /**
   * @remarks
   * The number of failed executions for statements matching this pattern within the specified time range.
   * 
   * @example
   * 234
   */
  failedCount?: number;
  /**
   * @remarks
   * The maximum execution time for statements matching this SQL pattern within the specified time range, in milliseconds.
   * 
   * @example
   * 2142
   */
  maxExecutionTime?: number;
  /**
   * @remarks
   * The maximum CPU cost for statements matching this pattern, in milliseconds.
   * 
   * @example
   * 5
   */
  maxOperatorCost?: number;
  /**
   * @remarks
   * The maximum peak memory usage for statements matching this SQL pattern within the specified time range, in bytes.
   * 
   * @example
   * 234149
   */
  maxPeakMemory?: number;
  /**
   * @remarks
   * The maximum query time for statements matching this SQL pattern within the specified time range, in milliseconds.
   * 
   * @example
   * 2341
   */
  maxQueryTime?: number;
  /**
   * @remarks
   * The maximum CPU cost of table scans for statements matching this pattern, in milliseconds.
   * 
   * @example
   * 5
   */
  maxScanCost?: number;
  /**
   * @remarks
   * The maximum data scan size for statements matching this SQL pattern within the specified time range, in bytes.
   * 
   * @example
   * 234149
   */
  maxScanSize?: number;
  /**
   * @remarks
   * The percentage of the total CPU cost from all patterns that the queries for this pattern consume.
   * 
   * @example
   * 20
   */
  operatorCostPercentage?: number;
  /**
   * @remarks
   * The total CPU cost for statements matching this pattern, in milliseconds.
   * 
   * @example
   * 5
   */
  operatorCostSum?: number;
  /**
   * @remarks
   * The earliest time a query matching this pattern was submitted within the specified time range. The time is in the `YYYY-MM-DD HH:MM:SS` format.
   * 
   * @example
   * 2021-11-12 03:06:00
   */
  patternCreationTime?: string;
  /**
   * @remarks
   * The ID of the SQL pattern.
   * 
   * @example
   * 5575924945138******
   */
  patternId?: string;
  /**
   * @remarks
   * The percentage of total peak memory usage from all patterns that the queries for this pattern consume.
   * 
   * @example
   * 10
   */
  peakMemoryPercentage?: number;
  /**
   * @remarks
   * The total peak memory used by statements matching this pattern, in bytes.
   * 
   * @example
   * 5
   */
  peakMemorySum?: number;
  /**
   * @remarks
   * The number of executions for statements matching this pattern within the specified time range.
   * 
   * @example
   * 345
   */
  queryCount?: number;
  /**
   * @remarks
   * The percentage of total query time from all patterns that the queries for this pattern consume.
   * 
   * @example
   * 10
   */
  queryTimePercentage?: number;
  /**
   * @remarks
   * The total query time for statements matching this pattern, in milliseconds.
   * 
   * @example
   * 5
   */
  queryTimeSum?: number;
  /**
   * @remarks
   * The SQL pattern statement.
   * 
   * @example
   * SELECT * FROM KEPLER_META_NODE_STATIC_INFO WHERE elastic_node = ? OR (elastic_node = ? AND enable = ?)
   */
  SQLPattern?: string;
  /**
   * @remarks
   * The percentage of the total CPU cost from all table scans that the queries for this pattern consume.
   * 
   * @example
   * 5
   */
  scanCostPercentage?: number;
  /**
   * @remarks
   * The total CPU cost of table scans for statements matching this pattern, in milliseconds.
   * 
   * @example
   * 5
   */
  scanCostSum?: number;
  /**
   * @remarks
   * The percentage of the total data scan size from all patterns that the queries for this pattern consume.
   * 
   * @example
   * 80
   */
  scanSizePercentage?: number;
  /**
   * @remarks
   * The total data scan size for statements matching this pattern, in bytes.
   * 
   * @example
   * 5
   */
  scanSizeSum?: number;
  /**
   * @remarks
   * The database table scanned by the queries in this pattern.
   * 
   * @example
   * tpch.orders
   */
  tables?: string;
  /**
   * @remarks
   * The database username that submitted the SQL statements matching this pattern.
   * 
   * @example
   * reporter
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      accessIp: 'AccessIp',
      averageExecutionTime: 'AverageExecutionTime',
      averageOperatorCost: 'AverageOperatorCost',
      averagePeakMemory: 'AveragePeakMemory',
      averageQueryTime: 'AverageQueryTime',
      averageScanCost: 'AverageScanCost',
      averageScanSize: 'AverageScanSize',
      blockable: 'Blockable',
      failedCount: 'FailedCount',
      maxExecutionTime: 'MaxExecutionTime',
      maxOperatorCost: 'MaxOperatorCost',
      maxPeakMemory: 'MaxPeakMemory',
      maxQueryTime: 'MaxQueryTime',
      maxScanCost: 'MaxScanCost',
      maxScanSize: 'MaxScanSize',
      operatorCostPercentage: 'OperatorCostPercentage',
      operatorCostSum: 'OperatorCostSum',
      patternCreationTime: 'PatternCreationTime',
      patternId: 'PatternId',
      peakMemoryPercentage: 'PeakMemoryPercentage',
      peakMemorySum: 'PeakMemorySum',
      queryCount: 'QueryCount',
      queryTimePercentage: 'QueryTimePercentage',
      queryTimeSum: 'QueryTimeSum',
      SQLPattern: 'SQLPattern',
      scanCostPercentage: 'ScanCostPercentage',
      scanCostSum: 'ScanCostSum',
      scanSizePercentage: 'ScanSizePercentage',
      scanSizeSum: 'ScanSizeSum',
      tables: 'Tables',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIp: 'string',
      averageExecutionTime: 'number',
      averageOperatorCost: 'number',
      averagePeakMemory: 'number',
      averageQueryTime: 'number',
      averageScanCost: 'number',
      averageScanSize: 'number',
      blockable: 'boolean',
      failedCount: 'number',
      maxExecutionTime: 'number',
      maxOperatorCost: 'number',
      maxPeakMemory: 'number',
      maxQueryTime: 'number',
      maxScanCost: 'number',
      maxScanSize: 'number',
      operatorCostPercentage: 'number',
      operatorCostSum: 'number',
      patternCreationTime: 'string',
      patternId: 'string',
      peakMemoryPercentage: 'number',
      peakMemorySum: 'number',
      queryCount: 'number',
      queryTimePercentage: 'number',
      queryTimeSum: 'number',
      SQLPattern: 'string',
      scanCostPercentage: 'number',
      scanCostSum: 'number',
      scanSizePercentage: 'number',
      scanSizeSum: 'number',
      tables: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPatternsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The details of the SQL patterns.
   */
  patternDetails?: DescribeSQLPatternsResponseBodyPatternDetails[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6BE0EDD1-0DE6-3EB6-81BF-BFE4F2******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      patternDetails: 'PatternDetails',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      patternDetails: { 'type': 'array', 'itemType': DescribeSQLPatternsResponseBodyPatternDetails },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.patternDetails)) {
      $dara.Model.validateArray(this.patternDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

