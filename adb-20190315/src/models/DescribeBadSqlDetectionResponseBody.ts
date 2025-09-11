// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBadSqlDetectionResponseBodyDetectionItemsResultsDiagnosisResults extends $dara.Model {
  /**
   * @remarks
   * The diagnostic code.
   * 
   * @example
   * FILTER_NOT_PUSHDOWN
   */
  code?: string;
  /**
   * @remarks
   * The information about the diagnostic result.
   * 
   * @example
   * The query consumes a large amount of memory resources. Perform memory optimization on the query.
   */
  detail?: string;
  /**
   * @remarks
   * The operator ID.
   * 
   * @example
   * Join[234]
   */
  operatorId?: string;
  /**
   * @remarks
   * The stage ID.
   * 
   * @example
   * Stage[1]
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
   * 37
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
   * 12345
   */
  operatorCost?: number;
  /**
   * @remarks
   * The amount of returned data. Unit: bytes.
   * 
   * @example
   * 1234
   */
  outputDataSize?: number;
  /**
   * @remarks
   * The SQL pattern ID.
   * 
   * @example
   * -5978869478527645300
   */
  patternId?: string;
  /**
   * @remarks
   * The peak memory.
   * 
   * @example
   * 1234
   */
  peakMemory?: number;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * 2023120808405202104101604703151654257
   */
  processId?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * >  For performance considerations, an SQL statement cannot exceed 5,120 characters in length. Otherwise, the SQL statement is truncated. You can call the [DownloadDiagnosisRecords](https://help.aliyun.com/document_detail/308212.html) operation to download the information about SQL statements that meet a query condition for an AnalyticDB for MySQL cluster, including the complete SQL statements.
   * 
   * @example
   * select * from user
   */
  SQL?: string;
  /**
   * @remarks
   * The amount of scanned data. Unit: bytes.
   * 
   * @example
   * 1234
   */
  scanSize?: number;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2024-05-05T02:13Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of stages generated.
   * 
   * @example
   * 123
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
   * The information about the diagnostic result.
   * 
   * @example
   * Multiple bad SQL statements are detected. Perform optimization on the statements.
   */
  message?: string;
  /**
   * @remarks
   * The name of the detection item.
   * 
   * @example
   * PeakMemory
   * OperatorCost
   * ScanSize
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
   * @example
   * NORMAL
   * WARNNING
   * CRITICAL
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
   * am-xxx
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
   * 32C6E870-81E5-5E2A-BE7D-F9623F090DAB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
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

