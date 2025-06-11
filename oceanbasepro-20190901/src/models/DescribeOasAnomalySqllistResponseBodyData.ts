// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOasAnomalySQLListResponseBodyDataSqlList } from "./DescribeOasAnomalySqllistResponseBodyDataSqlList";


export class DescribeOasAnomalySQLListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Average CPU time of the suspicious SQL.
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
   * Average response time of the suspicious SQL.
   * 
   * @example
   * 100.28
   */
  avgElapsedTime?: number;
  /**
   * @remarks
   * Average time to obtain the execution plan of the suspicious SQL.
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
   * CPU time of the suspicious SQL.
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
   * db_***
   */
  dbName?: string;
  /**
   * @remarks
   * The type of the diagnosis.
   */
  diagTypes?: string[];
  /**
   * @remarks
   * The details of diagnosis.
   * 
   * @example
   * -
   */
  diagnosis?: string;
  /**
   * @remarks
   * 是否动态SQL
   * 
   * @example
   * false
   */
  dynamicSql?: boolean;
  /**
   * @remarks
   * Total execution count of the suspicious SQL.
   * 
   * @example
   * 1
   */
  executions?: number;
  /**
   * @remarks
   * Last execution time of the suspicious SQL.
   * 
   * @example
   * 2023-04-12T04:38:38Z
   */
  lastExecutedTime?: number;
  /**
   * @remarks
   * Risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * SQL ID.
   * 
   * @example
   * 8D6E84****0B8FB1823D199E2CA1****
   */
  sqlId?: string;
  /**
   * @remarks
   * The list of SQL statements.
   */
  sqlList?: DescribeOasAnomalySQLListResponseBodyDataSqlList[];
  /**
   * @remarks
   * Prefix of the SQL text.
   */
  sqlTextShort?: string;
  /**
   * @remarks
   * Suggestion for the suspicious SQL.
   * 
   * @example
   * review
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
   * Total response time of the suspicious SQL.
   * 
   * @example
   * 11452126.36
   */
  sumElapsedTime?: string;
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
   * Username.
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
      dynamicSql: 'DynamicSql',
      executions: 'Executions',
      lastExecutedTime: 'LastExecutedTime',
      riskLevel: 'RiskLevel',
      sqlId: 'SqlId',
      sqlList: 'SqlList',
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
      dynamicSql: 'boolean',
      executions: 'number',
      lastExecutedTime: 'number',
      riskLevel: 'string',
      sqlId: 'string',
      sqlList: { 'type': 'array', 'itemType': DescribeOasAnomalySQLListResponseBodyDataSqlList },
      sqlTextShort: 'string',
      suggestion: 'string',
      sumDbTime: 'number',
      sumElapsedTime: 'string',
      sumRetryCount: 'number',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diagTypes)) {
      $dara.Model.validateArray(this.diagTypes);
    }
    if(Array.isArray(this.sqlList)) {
      $dara.Model.validateArray(this.sqlList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

