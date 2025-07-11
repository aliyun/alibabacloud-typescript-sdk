// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOasAnomalySQLListResponseBodyDataSqlList extends $dara.Model {
  /**
   * @remarks
   * The average CPU time.
   * 
   * @example
   * 100.24
   */
  avgCpuTime?: number;
  /**
   * @remarks
   * The average DB time.
   * 
   * @example
   * 100
   */
  avgDbTime?: number;
  /**
   * @remarks
   * The average response time.
   * 
   * @example
   * 100.28
   */
  avgElapsedTime?: number;
  /**
   * @remarks
   * The average plan generation time.
   * 
   * @example
   * 0
   */
  avgGetPlanTime?: number;
  /**
   * @remarks
   * The average number of logical reads.
   * 
   * @example
   * 25
   */
  avgLogicalReads?: number;
  /**
   * @remarks
   * The average number of retries.
   * 
   * @example
   * 4
   */
  avgRetryCount?: number;
  /**
   * @remarks
   * The total CPU time.
   * 
   * @example
   * 100.23
   */
  cpuTime?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test_hsp****eway
   */
  dbName?: string;
  /**
   * @remarks
   * The diagnostic types.
   */
  diagTypes?: string[];
  /**
   * @remarks
   * The diagnostic details. 
   * 
   * > This parameter is deprecated.
   * 
   * @example
   * -
   */
  diagnosis?: string;
  /**
   * @remarks
   * The total number of executions.
   * 
   * @example
   * 100
   */
  executions?: number;
  /**
   * @remarks
   * The last execution time.
   * 
   * @example
   * 2023-04-12T04:38:38Z
   */
  lastExecutedTime?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * LOW
   */
  riskLevel?: string;
  /**
   * @remarks
   * The ID of the SQL statement.
   * 
   * @example
   * 3A645****789F13DE0CF6D084FF9****
   */
  sqlId?: string;
  /**
   * @remarks
   * The prefix of the SQL text.
   * 
   * @example
   * select * from test
   */
  sqlTextShort?: string;
  /**
   * @remarks
   * The suggestion on the suspicious SQL statement.
   * 
   * @example
   * {\\"Role\\": \\"eSG\\", \\"Result\\": \\"100\\", \\"Suggestion\\": \\"TRACER_OTHER_ERR\\"}
   */
  suggestion?: string;
  /**
   * @remarks
   * The total DB time.
   * 
   * @example
   * 100
   */
  sumDbTime?: number;
  /**
   * @remarks
   * The total response time.
   * 
   * @example
   * 11452126.36
   */
  sumElapsedTime?: number;
  /**
   * @remarks
   * The total number of retries.
   * 
   * @example
   * 6
   */
  sumRetryCount?: number;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test_user
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      avgCpuTime: 'AvgCpuTime',
      avgDbTime: 'AvgDbTime',
      avgElapsedTime: 'AvgElapsedTime',
      avgGetPlanTime: 'AvgGetPlanTime',
      avgLogicalReads: 'AvgLogicalReads',
      avgRetryCount: 'AvgRetryCount',
      cpuTime: 'CpuTime',
      dbName: 'DbName',
      diagTypes: 'DiagTypes',
      diagnosis: 'Diagnosis',
      executions: 'Executions',
      lastExecutedTime: 'LastExecutedTime',
      riskLevel: 'RiskLevel',
      sqlId: 'SqlId',
      sqlTextShort: 'SqlTextShort',
      suggestion: 'Suggestion',
      sumDbTime: 'SumDbTime',
      sumElapsedTime: 'SumElapsedTime',
      sumRetryCount: 'SumRetryCount',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgCpuTime: 'number',
      avgDbTime: 'number',
      avgElapsedTime: 'number',
      avgGetPlanTime: 'number',
      avgLogicalReads: 'number',
      avgRetryCount: 'number',
      cpuTime: 'number',
      dbName: 'string',
      diagTypes: { 'type': 'array', 'itemType': 'string' },
      diagnosis: 'string',
      executions: 'number',
      lastExecutedTime: 'string',
      riskLevel: 'string',
      sqlId: 'string',
      sqlTextShort: 'string',
      suggestion: 'string',
      sumDbTime: 'number',
      sumElapsedTime: 'number',
      sumRetryCount: 'number',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diagTypes)) {
      $dara.Model.validateArray(this.diagTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

