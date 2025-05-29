// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLLogsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The database account that executes the SQL statement.
   * 
   * @example
   * testadmin
   */
  accountName?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adbpgadmin
   */
  DBName?: string;
  /**
   * @remarks
   * The role of the database.
   * 
   * @example
   * master
   */
  DBRole?: string;
  /**
   * @remarks
   * The execution duration of the SQL statement.
   * 
   * @example
   * 2
   */
  executeCost?: number;
  /**
   * @remarks
   * The execution status of the SQL statement. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
   */
  executeState?: string;
  /**
   * @remarks
   * The type of the query language.
   * 
   * @example
   * DQL
   */
  operationClass?: string;
  /**
   * @remarks
   * The time when the SQL statement was executed.
   * 
   * @example
   * 2021-03-15T17:02:32Z
   */
  operationExecuteTime?: string;
  /**
   * @remarks
   * The type of the SQL statement.
   * 
   * @example
   * SELECT
   */
  operationType?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  returnRowCounts?: number;
  /**
   * @remarks
   * The SQL execution plan.
   * 
   * @example
   * ""
   */
  SQLPlan?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * select 1
   */
  SQLText?: string;
  /**
   * @remarks
   * The number of entries scanned.
   * 
   * @example
   * 1
   */
  scanRowCounts?: number;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 100.**.**.90
   */
  sourceIP?: string;
  /**
   * @remarks
   * The number of the source port.
   * 
   * @example
   * 50514
   */
  sourcePort?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBName: 'DBName',
      DBRole: 'DBRole',
      executeCost: 'ExecuteCost',
      executeState: 'ExecuteState',
      operationClass: 'OperationClass',
      operationExecuteTime: 'OperationExecuteTime',
      operationType: 'OperationType',
      returnRowCounts: 'ReturnRowCounts',
      SQLPlan: 'SQLPlan',
      SQLText: 'SQLText',
      scanRowCounts: 'ScanRowCounts',
      sourceIP: 'SourceIP',
      sourcePort: 'SourcePort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBName: 'string',
      DBRole: 'string',
      executeCost: 'number',
      executeState: 'string',
      operationClass: 'string',
      operationExecuteTime: 'string',
      operationType: 'string',
      returnRowCounts: 'number',
      SQLPlan: 'string',
      SQLText: 'string',
      scanRowCounts: 'number',
      sourceIP: 'string',
      sourcePort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

