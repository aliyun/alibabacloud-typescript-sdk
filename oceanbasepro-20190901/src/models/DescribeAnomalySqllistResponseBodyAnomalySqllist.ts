// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAnomalySQLListResponseBodyAnomalySQLList extends $dara.Model {
  /**
   * @remarks
   * The average CPU time, in ms.
   * 
   * @example
   * 50.13
   */
  cpuTime?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * database1
   */
  dbName?: string;
  /**
   * @remarks
   * The diagnosis information.
   * 
   * @example
   * Total number of executions = 80199, Average CPU time = 6.8 ms, Overall CPU utilization = 87%
   */
  diagnosis?: string;
  /**
   * @remarks
   * The diagnostic rule.
   * 
   * @example
   * Utilization above threshold
   */
  diagnosisRule?: string;
  /**
   * @remarks
   * The number of executions.
   * 
   * @example
   * 89043
   */
  executions?: number;
  /**
   * @remarks
   * The sequence number of the returned SQL statement.
   * 
   * @example
   * 1
   */
  key?: number;
  /**
   * @remarks
   * The request time, in ms.
   * 
   * @example
   * 50.00
   */
  requestTime?: number;
  /**
   * @remarks
   * The request time in UTC +0.
   * 
   * @example
   * 2022-01-11T07:08:00Z
   */
  requestTimeUTCString?: string;
  /**
   * @remarks
   * SQLID.
   * 
   * @example
   * 99E9D3BF****B486239E6C7BC79B****
   */
  SQLId?: string;
  /**
   * @remarks
   * The SQL text.
   * 
   * @example
   * SELECT  ****   FROM ****   WHERE **** = ? AND **** = ?   ORDER BY **** ASC
   */
  SQLText?: string;
  /**
   * @remarks
   * The suggestions.
   * 
   * @example
   * Check your business scenarios, data distribution changes, request surges, and execution plan changes.
   */
  suggestion?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * tester
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      cpuTime: 'CpuTime',
      dbName: 'DbName',
      diagnosis: 'Diagnosis',
      diagnosisRule: 'DiagnosisRule',
      executions: 'Executions',
      key: 'Key',
      requestTime: 'RequestTime',
      requestTimeUTCString: 'RequestTimeUTCString',
      SQLId: 'SQLId',
      SQLText: 'SQLText',
      suggestion: 'Suggestion',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuTime: 'number',
      dbName: 'string',
      diagnosis: 'string',
      diagnosisRule: 'string',
      executions: 'number',
      key: 'number',
      requestTime: 'number',
      requestTimeUTCString: 'string',
      SQLId: 'string',
      SQLText: 'string',
      suggestion: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

