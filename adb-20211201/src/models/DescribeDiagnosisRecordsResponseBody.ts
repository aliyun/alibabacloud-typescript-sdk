// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisRecordsResponseBodyQuerysQueryProperties extends $dara.Model {
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * max_select_items_count
   */
  name?: string;
  /**
   * @remarks
   * The property value.
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
   * 
   * > This duration is the sum of `QueuedTime`, `TotalPlanningTime`, and `ExecutionTime`.
   * 
   * @example
   * 10
   */
  cost?: number;
  /**
   * @remarks
   * The name of the database where the SQL statement is executed.
   * 
   * @example
   * adb_demo
   */
  database?: string;
  /**
   * @remarks
   * The number of rows written to a table in an ETL task.
   * 
   * @example
   * 0
   */
  etlWriteRows?: number;
  /**
   * @remarks
   * The execution duration of the query. Unit: milliseconds (ms).
   * 
   * @example
   * 6
   */
  executionTime?: number;
  /**
   * @remarks
   * The amount of returned data. Unit: bytes.
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
   * 
   * > Call the [DescribePatternPerformance](https://help.aliyun.com/document_detail/612503.html) operation to view the detailed execution metrics of the SQL pattern within a specified time range.
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
   * The query ID.
   * 
   * @example
   * 2021093000414401000000023503151******
   */
  processId?: string;
  /**
   * @remarks
   * The list of properties that are in effect for the current query.
   * 
   * > For a list of common properties, see [Config and Hint configuration parameters](https://help.aliyun.com/document_detail/408955.html).
   */
  queryProperties?: DescribeDiagnosisRecordsResponseBodyQuerysQueryProperties[];
  /**
   * @remarks
   * The amount of time that the query waited in a queue before execution. Unit: milliseconds (ms).
   * 
   * @example
   * 6
   */
  queueTime?: number;
  /**
   * @remarks
   * The IP address and port number of the AnalyticDB for MySQL frontend node that is used to execute the SQL statement.
   * 
   * @example
   * 10.0.XX.XX:3004
   */
  rcHost?: string;
  /**
   * @remarks
   * The ranking of the execution duration of an operator in the SQL statement.
   * 
   * > This parameter is returned only for SQL statements that are in the `running` state.
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
   * 
   * > For performance, an SQL statement can be up to 5,120 characters long. Longer statements are truncated. Call the [DownloadDiagnosisRecords](https://help.aliyun.com/document_detail/308212.html) operation to download the summary information of SQL statements that meet the specified conditions, including the complete SQL statements.
   * 
   * @example
   * SELECT count(*)\\nFROM nation
   */
  SQL?: string;
  /**
   * @remarks
   * Indicates whether the length of the query result exceeds the threshold. If the length exceeds the threshold, the query result is truncated. Valid values:
   * 
   * - **true**: The length of the query result exceeds the threshold.
   * 
   * - **false**: The length of the query result does not exceed the threshold.
   * 
   * @example
   * false
   */
  SQLTruncated?: boolean;
  /**
   * @remarks
   * The truncation threshold for the SQL statement. The value is fixed at 5,120 characters. SQL statements that exceed this limit are truncated.
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
   * The amount of scanned data. Unit: bytes.
   * 
   * @example
   * 9
   */
  scanSize?: number;
  /**
   * @remarks
   * The start time of the SQL execution. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1632933704000
   */
  startTime?: number;
  /**
   * @remarks
   * The state of the SQL statement. Valid values:
   * 
   * - **running**: The statement is running.
   * 
   * - **finished**: The statement is complete.
   * 
   * - **failed**: The statement failed to be executed.
   * 
   * @example
   * finished
   */
  status?: string;
  /**
   * @remarks
   * The amount of time that was required to generate the execution plan. Unit: milliseconds (ms).
   * 
   * @example
   * 4
   */
  totalPlanningTime?: number;
  /**
   * @remarks
   * The total number of stages generated for the query.
   * 
   * @example
   * 2
   */
  totalStages?: number;
  /**
   * @remarks
   * The username used to execute the SQL statement.
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
   * The page number. The value is an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **30** (default)
   * 
   * - **50**
   * 
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of SQL statement details.
   */
  querys?: DescribeDiagnosisRecordsResponseBodyQuerys[];
  /**
   * @remarks
   * The request ID.
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

