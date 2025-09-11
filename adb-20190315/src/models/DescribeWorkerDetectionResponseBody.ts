// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorAggSearchResults extends $dara.Model {
  /**
   * @remarks
   * The average value of the operator metric.
   * 
   * @example
   * 234
   */
  avgValue?: number;
  /**
   * @remarks
   * The maximum value of the operator metric.
   * 
   * @example
   * 3
   */
  maxValue?: number;
  /**
   * @remarks
   * The number of occurrences of the operator.
   * 
   * @example
   * 345
   */
  operatorCount?: number;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * StageOutput
   */
  operatorName?: string;
  /**
   * @remarks
   * The cumulative value of the operator metric.
   * 
   * @example
   * 3333
   */
  totalValue?: number;
  static names(): { [key: string]: string } {
    return {
      avgValue: 'AvgValue',
      maxValue: 'MaxValue',
      operatorCount: 'OperatorCount',
      operatorName: 'OperatorName',
      totalValue: 'TotalValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgValue: 'number',
      maxValue: 'number',
      operatorCount: 'number',
      operatorName: 'string',
      totalValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorAgg extends $dara.Model {
  /**
   * @remarks
   * The name of the detection metric.
   * 
   * @example
   * OperatorCost
   */
  metricName?: string;
  /**
   * @remarks
   * The detection result items of operator metric aggregation.
   */
  searchResults?: DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorAggSearchResults[];
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      searchResults: 'SearchResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      searchResults: { 'type': 'array', 'itemType': DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorAggSearchResults },
    };
  }

  validate() {
    if(Array.isArray(this.searchResults)) {
      $dara.Model.validateArray(this.searchResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorDetailsSearchResults extends $dara.Model {
  /**
   * @remarks
   * The number of rows input by the operator.
   * 
   * @example
   * 235
   */
  inputRows?: number;
  /**
   * @remarks
   * The amount of data input by the operator. Unit: bytes.
   * 
   * @example
   * 2345
   */
  inputSize?: number;
  /**
   * @remarks
   * The total CPU time consumed by all operators in the stage, which is equivalent to the total CPU time of the stage. You can use this parameter to determine which parts of the stage consume a large amount of computing resources. Unit: milliseconds.
   * 
   * @example
   * 235
   */
  operatorCost?: number;
  /**
   * @remarks
   * The property information about the operator.
   * 
   * @example
   * Aggregate function: count
   */
  operatorInfo?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * TableScan
   */
  operatorName?: string;
  /**
   * @remarks
   * The number of rows output by the operator.
   * 
   * @example
   * 345
   */
  outputRows?: number;
  /**
   * @remarks
   * The amount of data output by the operator. Unit: bytes.
   * 
   * @example
   * 323
   */
  outputSize?: number;
  /**
   * @remarks
   * The peak memory. Unit: bytes.
   * 
   * @example
   * 234
   */
  peakMemory?: number;
  /**
   * @remarks
   * The query ID that can be used for diagnostics.
   * 
   * @example
   * 2024072416154919216812815303453136244
   */
  processId?: string;
  /**
   * @remarks
   * The stage ID.
   * 
   * @example
   * Stage[7]
   */
  stageId?: string;
  static names(): { [key: string]: string } {
    return {
      inputRows: 'InputRows',
      inputSize: 'InputSize',
      operatorCost: 'OperatorCost',
      operatorInfo: 'OperatorInfo',
      operatorName: 'OperatorName',
      outputRows: 'OutputRows',
      outputSize: 'OutputSize',
      peakMemory: 'PeakMemory',
      processId: 'ProcessId',
      stageId: 'StageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputRows: 'number',
      inputSize: 'number',
      operatorCost: 'number',
      operatorInfo: 'string',
      operatorName: 'string',
      outputRows: 'number',
      outputSize: 'number',
      peakMemory: 'number',
      processId: 'string',
      stageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorDetails extends $dara.Model {
  /**
   * @remarks
   * The name of the detection metric.
   * 
   * @example
   * Peak memory
   */
  metricName?: string;
  /**
   * @remarks
   * The detection result items of abnormal operators.
   */
  searchResults?: DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorDetailsSearchResults[];
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      searchResults: 'SearchResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      searchResults: { 'type': 'array', 'itemType': DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorDetailsSearchResults },
    };
  }

  validate() {
    if(Array.isArray(this.searchResults)) {
      $dara.Model.validateArray(this.searchResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkerDetectionResponseBodyDetectionItemsResultsPartitionedTables extends $dara.Model {
  /**
   * @remarks
   * The SQL statement that is used to create the table.
   * 
   * @example
   * create table user(id varchar)
   */
  DDL?: string;
  /**
   * @remarks
   * The number of partitions.
   * 
   * @example
   * 4
   */
  partitionCount?: string;
  /**
   * @remarks
   * The ID of the improper partition.
   * 
   * @example
   * [2025,2026]
   */
  partitionIds?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * kp_ods
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * lake_count
   */
  tableName?: string;
  /**
   * @remarks
   * 1234
   * 
   * @example
   * [2024,2025]
   */
  totalDataSize?: number;
  static names(): { [key: string]: string } {
    return {
      DDL: 'DDL',
      partitionCount: 'PartitionCount',
      partitionIds: 'PartitionIds',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      totalDataSize: 'TotalDataSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDL: 'string',
      partitionCount: 'string',
      partitionIds: 'string',
      schemaName: 'string',
      tableName: 'string',
      totalDataSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkerDetectionResponseBodyDetectionItemsResultsSkewedTables extends $dara.Model {
  /**
   * @remarks
   * The SQL statement that is used to create the table.
   * 
   * @example
   * create table(id varchar)
   */
  DDL?: string;
  /**
   * @remarks
   * The number of partitions.
   * 
   * @example
   * 3
   */
  partitionCount?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * kp_ods
   */
  schemaName?: string;
  /**
   * @remarks
   * The number of skewed rows in the table.
   * 
   * @example
   * 345
   */
  shardSkewedRows?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * train_data_test
   */
  tableName?: string;
  /**
   * @remarks
   * The total data size of the table. Unit: bytes.
   * 
   * @example
   * 2345
   */
  totalDataSize?: number;
  /**
   * @remarks
   * The size of hot data. Unit: bytes.
   * 
   * @example
   * 211
   */
  totalLocalDataSize?: string;
  /**
   * @remarks
   * The data size of the primary key. Unit: bytes.
   * 
   * @example
   * 1234
   */
  totalPkSize?: number;
  /**
   * @remarks
   * The size of cold data. Unit: bytes.
   * 
   * @example
   * 23456
   */
  totalRemoteDataSize?: number;
  /**
   * @remarks
   * The total number of rows in the table.
   * 
   * @example
   * 2335
   */
  totalRowCount?: number;
  static names(): { [key: string]: string } {
    return {
      DDL: 'DDL',
      partitionCount: 'PartitionCount',
      schemaName: 'SchemaName',
      shardSkewedRows: 'ShardSkewedRows',
      tableName: 'TableName',
      totalDataSize: 'TotalDataSize',
      totalLocalDataSize: 'TotalLocalDataSize',
      totalPkSize: 'TotalPkSize',
      totalRemoteDataSize: 'TotalRemoteDataSize',
      totalRowCount: 'TotalRowCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDL: 'string',
      partitionCount: 'number',
      schemaName: 'string',
      shardSkewedRows: 'string',
      tableName: 'string',
      totalDataSize: 'number',
      totalLocalDataSize: 'string',
      totalPkSize: 'number',
      totalRemoteDataSize: 'number',
      totalRowCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkerDetectionResponseBodyDetectionItemsResultsTopAccessTablesSearchResults extends $dara.Model {
  /**
   * @remarks
   * The number of accesses to the table.
   * 
   * @example
   * 345
   */
  accessCount?: number;
  /**
   * @remarks
   * The average amount of time for scanning. Unit: milliseconds.
   * 
   * @example
   * 234
   */
  avgScanCost?: number;
  /**
   * @remarks
   * The average data size for scanning. Unit: bytes.
   * 
   * @example
   * 234
   */
  avgScanSize?: number;
  /**
   * @remarks
   * The maximum amount of time for scanning. Unit: milliseconds.
   * 
   * @example
   * 2345
   */
  maxScanCost?: number;
  /**
   * @remarks
   * The maximum data size for scanning. Unit: bytes.
   * 
   * @example
   * 234
   */
  maxScanSize?: number;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * adb_lake_logs_pgsql
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      accessCount: 'AccessCount',
      avgScanCost: 'AvgScanCost',
      avgScanSize: 'AvgScanSize',
      maxScanCost: 'MaxScanCost',
      maxScanSize: 'MaxScanSize',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCount: 'number',
      avgScanCost: 'number',
      avgScanSize: 'number',
      maxScanCost: 'number',
      maxScanSize: 'number',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkerDetectionResponseBodyDetectionItemsResultsTopAccessTables extends $dara.Model {
  /**
   * @remarks
   * The name of the detection metric.
   * 
   * @example
   * Table accesses
   */
  metricName?: string;
  /**
   * @remarks
   * The detection result items of table access.
   */
  searchResults?: DescribeWorkerDetectionResponseBodyDetectionItemsResultsTopAccessTablesSearchResults[];
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      searchResults: 'SearchResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      searchResults: { 'type': 'array', 'itemType': DescribeWorkerDetectionResponseBodyDetectionItemsResultsTopAccessTablesSearchResults },
    };
  }

  validate() {
    if(Array.isArray(this.searchResults)) {
      $dara.Model.validateArray(this.searchResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkerDetectionResponseBodyDetectionItemsResults extends $dara.Model {
  /**
   * @remarks
   * The detection result items of operator metric aggregation.
   */
  operatorAgg?: DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorAgg[];
  /**
   * @remarks
   * The detection result items of abnormal operators.
   */
  operatorDetails?: DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorDetails[];
  /**
   * @remarks
   * The detection result items of improper partitioned tables.
   */
  partitionedTables?: DescribeWorkerDetectionResponseBodyDetectionItemsResultsPartitionedTables[];
  /**
   * @remarks
   * The detection result items of skewed tables.
   */
  skewedTables?: DescribeWorkerDetectionResponseBodyDetectionItemsResultsSkewedTables[];
  /**
   * @remarks
   * The detection result items of table access.
   */
  topAccessTables?: DescribeWorkerDetectionResponseBodyDetectionItemsResultsTopAccessTables[];
  static names(): { [key: string]: string } {
    return {
      operatorAgg: 'OperatorAgg',
      operatorDetails: 'OperatorDetails',
      partitionedTables: 'PartitionedTables',
      skewedTables: 'SkewedTables',
      topAccessTables: 'TopAccessTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorAgg: { 'type': 'array', 'itemType': DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorAgg },
      operatorDetails: { 'type': 'array', 'itemType': DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorDetails },
      partitionedTables: { 'type': 'array', 'itemType': DescribeWorkerDetectionResponseBodyDetectionItemsResultsPartitionedTables },
      skewedTables: { 'type': 'array', 'itemType': DescribeWorkerDetectionResponseBodyDetectionItemsResultsSkewedTables },
      topAccessTables: { 'type': 'array', 'itemType': DescribeWorkerDetectionResponseBodyDetectionItemsResultsTopAccessTables },
    };
  }

  validate() {
    if(Array.isArray(this.operatorAgg)) {
      $dara.Model.validateArray(this.operatorAgg);
    }
    if(Array.isArray(this.operatorDetails)) {
      $dara.Model.validateArray(this.operatorDetails);
    }
    if(Array.isArray(this.partitionedTables)) {
      $dara.Model.validateArray(this.partitionedTables);
    }
    if(Array.isArray(this.skewedTables)) {
      $dara.Model.validateArray(this.skewedTables);
    }
    if(Array.isArray(this.topAccessTables)) {
      $dara.Model.validateArray(this.topAccessTables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkerDetectionResponseBodyDetectionItems extends $dara.Model {
  /**
   * @remarks
   * The information about the detection result.
   * 
   * @example
   * Multiple abnormal operators are detected.
   */
  message?: string;
  /**
   * @remarks
   * The name of the detection item.
   * 
   * @example
   * Metric detection
   */
  name?: string;
  /**
   * @remarks
   * The detection result items.
   */
  results?: DescribeWorkerDetectionResponseBodyDetectionItemsResults;
  /**
   * @remarks
   * The severity level of the detection result. Valid values:
   * 
   * *   NORMAL
   * *   WARNING
   * *   CRITICAL
   * 
   * @example
   * WARNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      name: 'Name',
      results: 'Results',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      name: 'string',
      results: DescribeWorkerDetectionResponseBodyDetectionItemsResults,
      status: 'string',
    };
  }

  validate() {
    if(this.results && typeof (this.results as any).validate === 'function') {
      (this.results as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkerDetectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-xxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried detection items and detection results.
   */
  detectionItems?: DescribeWorkerDetectionResponseBodyDetectionItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 37A6F56E-B970-50AF-AF33-C71E57AB2C8E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 144
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      detectionItems: 'DetectionItems',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      detectionItems: { 'type': 'array', 'itemType': DescribeWorkerDetectionResponseBodyDetectionItems },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detectionItems)) {
      $dara.Model.validateArray(this.detectionItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

