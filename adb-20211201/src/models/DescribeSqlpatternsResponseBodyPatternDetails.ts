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
   * Indicates whether the execution of the SQL pattern can be intercepted. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  Only SELECT and INSERT statements can be intercepted.
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
   * 18
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
  maxScanCost?: number;
  /**
   * @remarks
   * The maximum amount of data scanned based on the SQL pattern within the query time range. Unit: bytes.
   * 
   * @example
   * 32212254
   */
  maxScanSize?: number;
  operatorCostPercentage?: number;
  operatorCostSum?: number;
  /**
   * @remarks
   * The earliest commit time of the SQL pattern within the query time range.
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
  peakMemoryPercentage?: number;
  peakMemorySum?: number;
  /**
   * @remarks
   * The number of queries executed in association with the SQL pattern within the query time range.
   * 
   * @example
   * 345
   */
  queryCount?: number;
  queryTimePercentage?: number;
  queryTimeSum?: number;
  /**
   * @remarks
   * The statement of the SQL pattern.
   * 
   * @example
   * SELECT * FROM KEPLER_META_NODE_STATIC_INFO WHERE elastic_node = ? OR (elastic_node = ? AND enable = ?)
   */
  SQLPattern?: string;
  scanCostPercentage?: number;
  scanCostSum?: number;
  scanSizePercentage?: number;
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
   * The name of the database account that is used to commit the SQL pattern.
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

