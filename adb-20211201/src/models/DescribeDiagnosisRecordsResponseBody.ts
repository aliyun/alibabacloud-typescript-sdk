// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisRecordsResponseBodyQuerysQueryProperties extends $dara.Model {
  /**
   * @remarks
   * The name of the property.
   * 
   * @example
   * max_select_items_count
   */
  name?: string;
  /**
   * @remarks
   * The value of the property.
   * 
   * @example
   * 1024
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisRecordsResponseBodyQuerys extends $dara.Model {
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 59.82.XX.XX
   */
  clientIp?: string;
  /**
   * @remarks
   * The total execution duration of the query. Unit: milliseconds.
   * > This metric is the sum of QueuedTime, TotalPlanningTime, and ExecutionTime.
   * 
   * @example
   * 10
   */
  cost?: number;
  /**
   * @remarks
   * The name of the database in which the SQL statement is executed.
   * 
   * @example
   * adb_demo
   */
  database?: string;
  /**
   * @remarks
   * The number of rows written to the table by the ETL task.
   * 
   * @example
   * 0
   */
  etlWriteRows?: number;
  /**
   * @remarks
   * The execution duration of the query. Unit: milliseconds.
   * 
   * @example
   * 6
   */
  executionTime?: number;
  /**
   * @remarks
   * The size of the returned data. Unit: bytes.
   * 
   * @example
   * 9
   */
  outputDataSize?: number;
  /**
   * @remarks
   * The number of returned rows.
   * 
   * @example
   * 1
   */
  outputRows?: number;
  /**
   * @remarks
   * The ID of the SQL pattern.
   * > You can call the [DescribePatternPerformance](https://help.aliyun.com/document_detail/612503.html) operation to query the detailed metrics of the SQL pattern executed within a specified time period.
   * 
   * @example
   * -5575924945138******
   */
  patternId?: string;
  /**
   * @remarks
   * The peak memory. Unit: bytes.
   * 
   * @example
   * 16648
   */
  peakMemory?: number;
  /**
   * @remarks
   * The ID of the query.
   * 
   * @example
   * 2021093000414401000000023503151******
   */
  processId?: string;
  /**
   * @remarks
   * The list of properties that ultimately take effect for the current query.
   * 
   * > For a list of common properties, see the official documentation: [Config and Hint parameters](https://help.aliyun.com/document_detail/408955.html).
   */
  queryProperties?: DescribeDiagnosisRecordsResponseBodyQuerysQueryProperties[];
  /**
   * @remarks
   * The queue time before the query is executed. Unit: milliseconds.
   * 
   * @example
   * 6
   */
  queueTime?: number;
  /**
   * @remarks
   * The IP address and port of the AnalyticDB for MySQL frontend node that executes the SQL statement.
   * 
   * @example
   * 10.0.XX.XX:3004
   */
  rcHost?: string;
  /**
   * @remarks
   * The ranking of the execution duration of internal operators in the SQL statement.
   * > This field is returned only for SQL statements that are running, which means the Status field is set to running.
   * 
   * @example
   * 1
   */
  resourceCostRank?: number;
  /**
   * @remarks
   * The resource pool to which the SQL statement belongs.
   * 
   * @example
   * user_default
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The details of the SQL statement.
   * > For performance reasons, a maximum of 5,120 characters can be displayed for an SQL statement. SQL statements that exceed this limit are truncated. You can call the [DownloadDiagnosisRecords](https://help.aliyun.com/document_detail/308212.html) operation to download the summary information of the SQL statements that meet the specified conditions, including the complete SQL statements.
   * 
   * @example
   * SELECT count(*)\\nFROM nation
   */
  SQL?: string;
  /**
   * @remarks
   * Indicates whether the length of the query result exceeds the threshold and is truncated. Valid values:
   * - **true**: The length of the query result exceeds the threshold.
   * - **false**: The length of the query result does not exceed the threshold.
   * 
   * @example
   * false
   */
  SQLTruncated?: boolean;
  /**
   * @remarks
   * The truncation threshold for the SQL statement. The value is fixed to 5,120 characters. SQL statements that exceed this length are truncated.
   * 
   * @example
   * 5120
   */
  SQLTruncatedThreshold?: number;
  /**
   * @remarks
   * The number of scanned rows.
   * 
   * @example
   * 1
   */
  scanRows?: number;
  /**
   * @remarks
   * The scan size. Unit: bytes.
   * 
   * @example
   * 9
   */
  scanSize?: number;
  /**
   * @remarks
   * The start time of the SQL statement execution. The time is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1632933704000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the SQL statement. Valid values:
   * - **running**: The SQL statement is running.
   * - **finished**: The SQL statement is completed.
   * - **failed**: The SQL statement failed.
   * 
   * @example
   * finished
   */
  status?: string;
  /**
   * @remarks
   * The time taken to generate the execution plan. Unit: milliseconds.
   * 
   * @example
   * 4
   */
  totalPlanningTime?: number;
  /**
   * @remarks
   * The total number of stages generated by the query.
   * 
   * @example
   * 2
   */
  totalStages?: number;
  /**
   * @remarks
   * The username that executes the SQL statement.
   * 
   * @example
   * test_user
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      cost: 'Cost',
      database: 'Database',
      etlWriteRows: 'EtlWriteRows',
      executionTime: 'ExecutionTime',
      outputDataSize: 'OutputDataSize',
      outputRows: 'OutputRows',
      patternId: 'PatternId',
      peakMemory: 'PeakMemory',
      processId: 'ProcessId',
      queryProperties: 'QueryProperties',
      queueTime: 'QueueTime',
      rcHost: 'RcHost',
      resourceCostRank: 'ResourceCostRank',
      resourceGroup: 'ResourceGroup',
      SQL: 'SQL',
      SQLTruncated: 'SQLTruncated',
      SQLTruncatedThreshold: 'SQLTruncatedThreshold',
      scanRows: 'ScanRows',
      scanSize: 'ScanSize',
      startTime: 'StartTime',
      status: 'Status',
      totalPlanningTime: 'TotalPlanningTime',
      totalStages: 'TotalStages',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      cost: 'number',
      database: 'string',
      etlWriteRows: 'number',
      executionTime: 'number',
      outputDataSize: 'number',
      outputRows: 'number',
      patternId: 'string',
      peakMemory: 'number',
      processId: 'string',
      queryProperties: { 'type': 'array', 'itemType': DescribeDiagnosisRecordsResponseBodyQuerysQueryProperties },
      queueTime: 'number',
      rcHost: 'string',
      resourceCostRank: 'number',
      resourceGroup: 'string',
      SQL: 'string',
      SQLTruncated: 'boolean',
      SQLTruncatedThreshold: 'number',
      scanRows: 'number',
      scanSize: 'number',
      startTime: 'number',
      status: 'string',
      totalPlanningTime: 'number',
      totalStages: 'number',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.queryProperties)) {
      $dara.Model.validateArray(this.queryProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the INTEGER data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * - **30** (default)
   * - **50**
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The details of the SQL statements.
   */
  querys?: DescribeDiagnosisRecordsResponseBodyQuerys[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7F88BEFA-CF0B-5C95-8BB1-92EC9F09E40D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      querys: 'Querys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      querys: { 'type': 'array', 'itemType': DescribeDiagnosisRecordsResponseBodyQuerys },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.querys)) {
      $dara.Model.validateArray(this.querys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

