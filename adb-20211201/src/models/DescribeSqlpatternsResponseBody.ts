// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLPatternsResponseBodyPatternDetails extends $dara.Model {
  /**
   * @remarks
   * The client IP address used to submit the queries.
   * 
   * @example
   * 192.168.xx.xx
   */
  accessIp?: string;
  /**
   * @remarks
   * The average execution time of queries matching this pattern. Unit: milliseconds.
   * 
   * @example
   * 234.78
   */
  averageExecutionTime?: number;
  /**
   * @remarks
   * The average CPU cost for queries that match this pattern. Unit: milliseconds.
   * 
   * @example
   * 5
   */
  averageOperatorCost?: number;
  /**
   * @remarks
   * The average peak memory usage of queries matching this pattern. Unit: bytes.
   * 
   * @example
   * 234.22
   */
  averagePeakMemory?: number;
  /**
   * @remarks
   * The average duration of queries matching this pattern. Unit: milliseconds.
   * 
   * @example
   * 4
   */
  averageQueryTime?: number;
  /**
   * @remarks
   * The average scan time for queries that match this pattern. Unit: milliseconds.
   * 
   * @example
   * 5
   */
  averageScanCost?: number;
  /**
   * @remarks
   * The average amount of data scanned by queries matching this pattern. Unit: bytes.
   * 
   * @example
   * 234149.23
   */
  averageScanSize?: number;
  /**
   * @remarks
   * Indicates whether queries that match this pattern can be blocked. Valid values:
   * 
   * - **true**: The queries can be blocked.
   * 
   * - **false**: The queries cannot be blocked.
   * 
   * > Currently, AnalyticDB for MySQL allows you to block only SELECT and INSERT statements.
   * 
   * @example
   * true
   */
  blockable?: boolean;
  /**
   * @remarks
   * The number of failed queries that match this pattern.
   * 
   * @example
   * 18
   */
  failedCount?: number;
  /**
   * @remarks
   * The maximum execution time of a query matching this pattern. Unit: milliseconds.
   * 
   * @example
   * 2142
   */
  maxExecutionTime?: number;
  /**
   * @remarks
   * The maximum CPU cost for a query that matches this pattern. Unit: milliseconds.
   * 
   * @example
   * 5
   */
  maxOperatorCost?: number;
  /**
   * @remarks
   * The maximum peak memory usage of a query matching this pattern. Unit: bytes.
   * 
   * @example
   * 234149
   */
  maxPeakMemory?: number;
  /**
   * @remarks
   * The maximum duration of a query matching this pattern. Unit: milliseconds.
   * 
   * @example
   * 2341
   */
  maxQueryTime?: number;
  /**
   * @remarks
   * The maximum scan time for a query that matches this pattern. Unit: milliseconds.
   * 
   * @example
   * 5
   */
  maxScanCost?: number;
  /**
   * @remarks
   * The maximum amount of data scanned by a query matching this pattern. Unit: bytes.
   * 
   * @example
   * 32212254
   */
  maxScanSize?: number;
  /**
   * @remarks
   * The total CPU cost of queries matching this pattern as a percentage of the total CPU cost for all queries. Unit: %.
   * 
   * @example
   * 20
   */
  operatorCostPercentage?: number;
  /**
   * @remarks
   * The total CPU cost for all queries that match this pattern. Unit: milliseconds.
   * 
   * @example
   * 5
   */
  operatorCostSum?: number;
  /**
   * @remarks
   * The submission time of the first query that matches this pattern within the specified time range.
   * 
   * @example
   * 2022-09-06 05:06:00
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
   * The total peak memory usage of queries matching this pattern as a percentage of the total peak memory usage for all queries. Unit: %.
   * 
   * @example
   * 10
   */
  peakMemoryPercentage?: number;
  /**
   * @remarks
   * The sum of the peak memory usage for all queries that match this pattern. Unit: bytes.
   * 
   * @example
   * 5
   */
  peakMemorySum?: number;
  /**
   * @remarks
   * The number of executed queries that match this pattern.
   * 
   * @example
   * 345
   */
  queryCount?: number;
  /**
   * @remarks
   * The total query time of queries matching this pattern as a percentage of the total query time for all queries. Unit: %.
   * 
   * @example
   * 10
   */
  queryTimePercentage?: number;
  /**
   * @remarks
   * The total query duration for all queries that match this pattern. Unit: milliseconds.
   * 
   * @example
   * 5
   */
  queryTimeSum?: number;
  /**
   * @remarks
   * The SQL pattern.
   * 
   * @example
   * SELECT * FROM KEPLER_META_NODE_STATIC_INFO WHERE elastic_node = ? OR (elastic_node = ? AND enable = ?)
   */
  SQLPattern?: string;
  /**
   * @remarks
   * The total scan cost of queries matching this pattern as a percentage of the total scan cost for all queries. Unit: %.
   * 
   * @example
   * 5
   */
  scanCostPercentage?: number;
  /**
   * @remarks
   * The total scan cost for all queries that match this pattern. Unit: milliseconds.
   * 
   * @example
   * 5
   */
  scanCostSum?: number;
  /**
   * @remarks
   * The total amount of data scanned by queries matching this pattern as a percentage of the total data scanned by all queries. Unit: %.
   * 
   * @example
   * 80
   */
  scanSizePercentage?: number;
  /**
   * @remarks
   * The total amount of data scanned by all queries that match this pattern. Unit: bytes.
   * 
   * @example
   * 5
   */
  scanSizeSum?: number;
  /**
   * @remarks
   * The tables scanned by the SQL pattern.
   * 
   * @example
   * tpch.orders
   */
  tables?: string;
  /**
   * @remarks
   * The name of the database user who submitted the matching SQL statements.
   * 
   * @example
   * test
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
   * Details about the access denial. This parameter is returned only if RAM authentication fails.
   * 
   * @example
   * {
   *     "PolicyType": "AccountLevelIdentityBasedPolicy",
   *     "AuthPrincipalOwnerId": "1*****************7",
   *     "EncodedDiagnosticMessage": "AQIBIAAAAOPdwKY2QLOvgMEc7SkkoJfj1kvZwsaRqNYMh10Tv0wTe0fCzaCdrvgazfNb0EnJKETgXyhR+3BIQjx9WAqZryejBsp1Bl4qI5En/D9dEhcXAtKCxCmE2kZCiEzpy8BoEUt+bs0DmlaGWO5xkEpttypLIB4rUhDvZd+zwPg4EXk4KSSWSWsurxtqDkKEMshKlQFBTKvJcKwyhk62IeYly4hQ+5IpXjkh1GQXuDRCQ==",
   *     "AuthPrincipalType": "SubUser",
   *     "AuthPrincipalDisplayName": "2***************9",
   *     "NoPermissionType": "ImplicitDeny",
   *     "AuthAction": "adb:DescribeExcessivePrimaryKeys"
   * }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A list of SQL patterns.
   */
  patternDetails?: DescribeSQLPatternsResponseBodyPatternDetails[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F3174013-5B7A-5A47-9FE0-6B5D397BD86A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      patternDetails: 'PatternDetails',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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

