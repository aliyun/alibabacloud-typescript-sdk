// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiagnosisRecordsResponseBodyQuerysQueryProperties } from "./DescribeDiagnosisRecordsResponseBodyQuerysQueryProperties";


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
   * The total execution duration. Unit: milliseconds.
   * 
   * >  This value is the cumulative value of the `QueuedTime`, `TotalPlanningTime`, and `ExecutionTime` parameters.
   * 
   * @example
   * 10
   */
  cost?: number;
  /**
   * @remarks
   * The name of the database on which the SQL statement is executed.
   * 
   * @example
   * adb_demo
   */
  database?: string;
  /**
   * @remarks
   * The number of rows written to the table by an extract-transform-load (ETL) job.
   * 
   * @example
   * 0
   */
  etlWriteRows?: number;
  /**
   * @remarks
   * The execution duration. Unit: milliseconds.
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
   * The number of rows returned.
   * 
   * @example
   * 1
   */
  outputRows?: number;
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
  queryProperties?: DescribeDiagnosisRecordsResponseBodyQuerysQueryProperties[];
  /**
   * @remarks
   * The amount of time that is consumed for queuing. Unit: milliseconds.
   * 
   * @example
   * 6
   */
  queueTime?: number;
  /**
   * @remarks
   * The IP address and port number of the AnalyticDB for MySQL frontend node on which the SQL statement is executed.
   * 
   * @example
   * 10.0.XX.XX:3004
   */
  rcHost?: string;
  /**
   * @remarks
   * The execution duration rank of operators that are used in the SQL statement.
   * 
   * >  This parameter is returned only for SQL statements whose `Status` parameter is `running`.
   * 
   * @example
   * 1
   */
  resourceCostRank?: number;
  /**
   * @remarks
   * The resource group to which the SQL statement belongs.
   * 
   * @example
   * user_default
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The queried SQL statement.
   * 
   * >  For performance considerations, an SQL statement cannot exceed 5,120 characters in length. Otherwise, the SQL statement is truncated. You can call the [DownloadDiagnosisRecords](https://help.aliyun.com/document_detail/308212.html) operation to download the information about SQL statements that meet a query condition for an AnalyticDB for MySQL cluster, including the complete SQL statements.
   * 
   * @example
   * SELECT count(*)\\nFROM nation
   */
  SQL?: string;
  /**
   * @remarks
   * Indicates whether the SQL statement is truncated. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  SQLTruncated?: boolean;
  /**
   * @remarks
   * The maximum length of the SQL statement. 5120 is returned. Unit: characters. SQL statements that exceed this limit are truncated.
   * 
   * @example
   * 5120
   */
  SQLTruncatedThreshold?: number;
  /**
   * @remarks
   * The number of rows scanned.
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
   * The execution start time of the SQL statement. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1632933704000
   */
  startTime?: number;
  /**
   * @remarks
   * The state of the SQL statement. Valid values:
   * 
   * *   **running**
   * *   **finished**
   * *   **failed**
   * 
   * @example
   * finished
   */
  status?: string;
  /**
   * @remarks
   * The amount of time that is consumed to generate an execution plan. Unit: milliseconds.
   * 
   * @example
   * 4
   */
  totalPlanningTime?: number;
  /**
   * @remarks
   * The total number of stages generated.
   * 
   * @example
   * 2
   */
  totalStages?: number;
  /**
   * @remarks
   * The username that is used to execute the SQL statements.
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

