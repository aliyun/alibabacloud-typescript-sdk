// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBadSqlDetectionResponseBodyDetectionItemsResultsDiagnosisResults } from "./DescribeBadSqlDetectionResponseBodyDetectionItemsResultsDiagnosisResults";


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

