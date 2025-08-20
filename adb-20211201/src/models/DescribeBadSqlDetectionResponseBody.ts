// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBadSqlDetectionResponseBodyDetectionItemsResultsDiagnosisResults extends $dara.Model {
  /**
   * @remarks
   * The diagnostic code.
   * 
   * @example
   * Large amounts of data are returned to the client.
   */
  code?: string;
  /**
   * @remarks
   * The information about the diagnostic result.
   * 
   * @example
   * Large amounts of data are returned to the client. Import the data to OSS.
   */
  detail?: string;
  /**
   * @remarks
   * The operator ID.
   * 
   * @example
   * TableScan[234]
   */
  operatorId?: string;
  /**
   * @remarks
   * The stage ID.
   * 
   * @example
   * Stage[67]
   */
  stageId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detail: 'Detail',
      operatorId: 'OperatorId',
      stageId: 'StageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detail: 'string',
      operatorId: 'string',
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

export class DescribeBadSqlDetectionResponseBodyDetectionItemsResults extends $dara.Model {
  /**
   * @remarks
   * The total execution duration. Unit: milliseconds.
   * 
   * >  This value is the cumulative value of the `QueuedTime`, `TotalPlanningTime`, and `ExecutionTime` parameters.
   * 
   * @example
   * 709
   */
  cost?: number;
  /**
   * @remarks
   * The diagnostic result items.
   */
  diagnosisResults?: DescribeBadSqlDetectionResponseBodyDetectionItemsResultsDiagnosisResults[];
  /**
   * @remarks
   * The total CPU time consumed by all operators in the stage, which is equivalent to the total CPU time of the stage. You can use this parameter to determine which parts of the stage consume a large amount of computing resources. Unit: milliseconds.
   * 
   * @example
   * 2345
   */
  operatorCost?: number;
  /**
   * @remarks
   * The amount of returned data. Unit: bytes.
   * 
   * @example
   * 235433
   */
  outputDataSize?: number;
  /**
   * @remarks
   * The SQL pattern ID.
   * 
   * @example
   * 3467484070025860498
   */
  patternId?: string;
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
   * The query ID.
   * 
   * @example
   * 202410161002191720161451770345363xxxx
   */
  processId?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * >  For performance considerations, an SQL statement cannot exceed 5,120 characters in length. Otherwise, the SQL statement is truncated. You can call the [DownloadDiagnosisRecords](https://help.aliyun.com/document_detail/308212.html) operation to download the information about SQL statements that meet a query condition for an AnalyticDB for MySQL cluster, including the complete SQL statements.
   * 
   * @example
   * SELECT * FROM device WHERE product_key = \\"h66zXfxet2X\\" AND name = \\"device@zntbtfptv5_9237117\\"
   */
  SQL?: string;
  /**
   * @remarks
   * The amount of scanned data. Unit: bytes.
   * 
   * @example
   * 2342
   */
  scanSize?: number;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2024-09-06T02:11:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of stages generated.
   * 
   * @example
   * 5
   */
  totalStages?: number;
  static names(): { [key: string]: string } {
    return {
      cost: 'Cost',
      diagnosisResults: 'DiagnosisResults',
      operatorCost: 'OperatorCost',
      outputDataSize: 'OutputDataSize',
      patternId: 'PatternId',
      peakMemory: 'PeakMemory',
      processId: 'ProcessId',
      SQL: 'SQL',
      scanSize: 'ScanSize',
      startTime: 'StartTime',
      totalStages: 'TotalStages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      diagnosisResults: { 'type': 'array', 'itemType': DescribeBadSqlDetectionResponseBodyDetectionItemsResultsDiagnosisResults },
      operatorCost: 'number',
      outputDataSize: 'number',
      patternId: 'string',
      peakMemory: 'number',
      processId: 'string',
      SQL: 'string',
      scanSize: 'number',
      startTime: 'string',
      totalStages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.diagnosisResults)) {
      $dara.Model.validateArray(this.diagnosisResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBadSqlDetectionResponseBodyDetectionItems extends $dara.Model {
  /**
   * @remarks
   * The information about the detection result.
   * 
   * @example
   * SQL statements that result in high peak memory are detected.
   */
  message?: string;
  /**
   * @remarks
   * The name of the detection item.
   * 
   * @example
   * Cost
   */
  name?: string;
  /**
   * @remarks
   * The detection result items.
   */
  results?: DescribeBadSqlDetectionResponseBodyDetectionItemsResults[];
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
      results: { 'type': 'array', 'itemType': DescribeBadSqlDetectionResponseBodyDetectionItemsResults },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBadSqlDetectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the request denial.
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
   * The cluster ID.
   * 
   * @example
   * amv-xxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried detection items and detection results.
   */
  detectionItems?: DescribeBadSqlDetectionResponseBodyDetectionItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 584CFCAE-E3C8-5BBB-B46C-724E77A830A7
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 50
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      DBClusterId: 'DBClusterId',
      detectionItems: 'DetectionItems',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      DBClusterId: 'string',
      detectionItems: { 'type': 'array', 'itemType': DescribeBadSqlDetectionResponseBodyDetectionItems },
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

