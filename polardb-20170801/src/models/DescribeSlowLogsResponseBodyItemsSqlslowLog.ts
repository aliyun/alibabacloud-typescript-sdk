// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogsResponseBodyItemsSQLSlowLog extends $dara.Model {
  /**
   * @remarks
   * The date when the data was generated.
   * 
   * @example
   * 2021-05-30Z
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * PolarDB_MySQL
   */
  DBName?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * pi-***************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The longest execution duration of a specific SQL statement in the query. Unit: seconds.
   * 
   * @example
   * 60
   */
  maxExecutionTime?: number;
  /**
   * @remarks
   * The longest lock duration that was caused by a specific SQL statement in the query. Unit: seconds.
   * 
   * @example
   * 1
   */
  maxLockTime?: number;
  /**
   * @remarks
   * The largest number of rows that were parsed by a specific SQL statement in the query.
   * 
   * @example
   * 1
   */
  parseMaxRowCount?: number;
  /**
   * @remarks
   * The total number of rows that were parsed by all SQL statements in the query.
   * 
   * @example
   * 2
   */
  parseTotalRowCounts?: number;
  /**
   * @remarks
   * The largest number of rows that were returned by a specific SQL statement in the query.
   * 
   * @example
   * 3
   */
  returnMaxRowCount?: number;
  /**
   * @remarks
   * The total number of rows that were returned by all SQL statements in the query.
   * 
   * @example
   * 1
   */
  returnTotalRowCounts?: number;
  /**
   * @remarks
   * The unique ID of the SQL statement. The ID is used to obtain the slow query logs of the SQL statement.
   * 
   * @example
   * U2FsdGVkxxxx
   */
  SQLHASH?: string;
  /**
   * @remarks
   * The SQL statement that is executed in the query.
   * 
   * @example
   * select id,name from tb_table
   */
  SQLText?: string;
  /**
   * @remarks
   * The total number of executions of the SQL statements.
   * 
   * @example
   * 2
   */
  totalExecutionCounts?: number;
  /**
   * @remarks
   * The total duration that was caused by all SQL statements in the query. Unit: seconds.
   * 
   * @example
   * 2
   */
  totalExecutionTimes?: number;
  /**
   * @remarks
   * The total lock duration that was caused by all SQL statements in the query. Unit: seconds.
   * 
   * @example
   * 1
   */
  totalLockTimes?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      DBName: 'DBName',
      DBNodeId: 'DBNodeId',
      maxExecutionTime: 'MaxExecutionTime',
      maxLockTime: 'MaxLockTime',
      parseMaxRowCount: 'ParseMaxRowCount',
      parseTotalRowCounts: 'ParseTotalRowCounts',
      returnMaxRowCount: 'ReturnMaxRowCount',
      returnTotalRowCounts: 'ReturnTotalRowCounts',
      SQLHASH: 'SQLHASH',
      SQLText: 'SQLText',
      totalExecutionCounts: 'TotalExecutionCounts',
      totalExecutionTimes: 'TotalExecutionTimes',
      totalLockTimes: 'TotalLockTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      DBName: 'string',
      DBNodeId: 'string',
      maxExecutionTime: 'number',
      maxLockTime: 'number',
      parseMaxRowCount: 'number',
      parseTotalRowCounts: 'number',
      returnMaxRowCount: 'number',
      returnTotalRowCounts: 'number',
      SQLHASH: 'string',
      SQLText: 'string',
      totalExecutionCounts: 'number',
      totalExecutionTimes: 'number',
      totalLockTimes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

