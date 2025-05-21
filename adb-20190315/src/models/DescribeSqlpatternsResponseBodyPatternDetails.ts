// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLPatternsResponseBodyPatternDetails extends $dara.Model {
  /**
   * @remarks
   * The IP address of the SQL client that commits the SQL pattern.
   * 
   * @example
   * 192.168.xx.xx
   */
  accessIp?: string;
  /**
   * @remarks
   * The average execution duration of the SQL pattern within the query time range. Unit: milliseconds.
   * 
   * @example
   * 234.78
   */
  averageExecutionTime?: number;
  /**
   * @remarks
   * The average operation duration.
   * 
   * @example
   * 5
   */
  averageOperatorCost?: number;
  /**
   * @remarks
   * The average peak memory usage of the SQL pattern within the query time range. Unit: bytes.
   * 
   * @example
   * 234.22
   */
  averagePeakMemory?: number;
  /**
   * @remarks
   * The average total amount of time consumed by the SQL pattern within the query time range. Unit: milliseconds.
   * 
   * @example
   * 4
   */
  averageQueryTime?: number;
  /**
   * @remarks
   * The average scan duration.
   * 
   * @example
   * 3
   */
  averageScanCost?: number;
  /**
   * @remarks
   * The average amount of data scanned based on the SQL pattern within the query time range. Unit: bytes.
   * 
   * @example
   * 234149.23
   */
  averageScanSize?: number;
  /**
   * @remarks
   * Indicates whether the execution of the SQL pattern can be blocked. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > Only SELECT and INSERT statements can be blocked.
   * 
   * @example
   * true
   */
  blockable?: boolean;
  /**
   * @remarks
   * The number of failed queries executed in association with the SQL pattern within the query time range.
   * 
   * @example
   * 234
   */
  failedCount?: number;
  /**
   * @remarks
   * The maximum execution duration of the SQL pattern within the query time range. Unit: milliseconds.
   * 
   * @example
   * 2142
   */
  maxExecutionTime?: number;
  /**
   * @remarks
   * The maximum operation duration.
   * 
   * @example
   * 10
   */
  maxOperatorCost?: number;
  /**
   * @remarks
   * The maximum peak memory usage of the SQL pattern within the query time range. Unit: bytes.
   * 
   * @example
   * 234149
   */
  maxPeakMemory?: number;
  /**
   * @remarks
   * The maximum total amount of time consumed by the SQL pattern within the query time range. Unit: milliseconds.
   * 
   * @example
   * 2341
   */
  maxQueryTime?: number;
  /**
   * @remarks
   * The maximum scan duration.
   * 
   * @example
   * 7
   */
  maxScanCost?: number;
  /**
   * @remarks
   * The maximum amount of data scanned based on the SQL pattern within the query time range. Unit: bytes.
   * 
   * @example
   * 234149
   */
  maxScanSize?: number;
  /**
   * @remarks
   * The operation duration percentage.
   * 
   * @example
   * 75
   */
  operatorCostPercentage?: number;
  /**
   * @remarks
   * The total operation duration.
   * 
   * @example
   * 20
   */
  operatorCostSum?: number;
  /**
   * @remarks
   * The earliest commit time of the SQL pattern within the query time range. Unit: milliseconds.
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
   * The peak memory percentage.
   * 
   * @example
   * 80
   */
  peakMemoryPercentage?: number;
  /**
   * @remarks
   * The total peak memory.
   * 
   * @example
   * 3600
   */
  peakMemorySum?: number;
  /**
   * @remarks
   * The number of queries executed in association with the SQL pattern within the query time range.
   * 
   * @example
   * 345
   */
  queryCount?: number;
  /**
   * @remarks
   * The queue duration of the SQL statement. Unit: milliseconds.
   * 
   * @example
   * 80
   */
  queryTimePercentage?: number;
  /**
   * @remarks
   * The total query duration.
   * 
   * @example
   * 5
   */
  queryTimeSum?: number;
  /**
   * @remarks
   * The statement of the SQL pattern.
   * 
   * @example
   * SELECT * FROM KEPLER_META_NODE_STATIC_INFO WHERE elastic_node = ? OR (elastic_node = ? AND enable = ?)
   */
  SQLPattern?: string;
  /**
   * @remarks
   * The scan duration percentage.
   * 
   * @example
   * 75
   */
  scanCostPercentage?: number;
  /**
   * @remarks
   * The total scan duration.
   * 
   * @example
   * 11
   */
  scanCostSum?: number;
  /**
   * @remarks
   * The amount of time consumed to scan data from a data source in the task. Unit: milliseconds.
   * 
   * @example
   * 80
   */
  scanSizePercentage?: number;
  /**
   * @remarks
   * Total total scan size.
   * 
   * @example
   * 3
   */
  scanSizeSum?: number;
  /**
   * @remarks
   * The tables scanned based on the SQL pattern.
   * 
   * @example
   * tpch.orders
   */
  tables?: string;
  /**
   * @remarks
   * The database username that is used to commit the SQL pattern.
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

