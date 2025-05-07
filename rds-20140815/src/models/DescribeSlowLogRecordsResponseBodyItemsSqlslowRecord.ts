// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord extends $dara.Model {
  /**
   * @remarks
   * The name of the application that is connected to the instance.
   * 
   * > This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * example
   */
  applicationName?: string;
  /**
   * @remarks
   * The hostname of the client.
   * 
   * > This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * example
   */
  clientHostName?: string;
  /**
   * @remarks
   * The duration during which the SQL statement is processed by the CPU. Unit: milliseconds.
   * 
   * > This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0.002
   */
  cpuTime?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  /**
   * @remarks
   * The time when the execution of the SQL statement started. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2020-06-18T01:40:44Z
   */
  executionStartTime?: string;
  /**
   * @remarks
   * The name and IP address of the client that is connected to the database.
   * 
   * @example
   * xxx[xxx] @  [1xx.xxx.xxx.xx]
   */
  hostAddress?: string;
  /**
   * @remarks
   * The number of rows that are affected by the last SQL statement.
   * 
   * > This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 2
   */
  lastRowsAffectedCount?: number;
  /**
   * @remarks
   * The lock duration of the query. Unit: seconds.
   * 
   * @example
   * 0
   */
  lockTimes?: number;
  /**
   * @remarks
   * The number of logical reads.
   * 
   * > This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 383
   */
  logicalIORead?: number;
  /**
   * @remarks
   * The number of parsed rows.
   * 
   * @example
   * 1
   */
  parseRowCounts?: number;
  /**
   * @remarks
   * The number of physical reads.
   * 
   * > This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 200
   */
  physicalIORead?: number;
  /**
   * @remarks
   * The execution duration of the query. Unit: milliseconds.
   * 
   * @example
   * 2001
   */
  queryTimeMS?: number;
  /**
   * @remarks
   * The execution duration of the query. Unit: seconds.
   * 
   * @example
   * 2
   */
  queryTimes?: number;
  /**
   * @remarks
   * The number of rows returned.
   * 
   * @example
   * 1
   */
  returnRowCounts?: number;
  /**
   * @remarks
   * The number of affected rows.
   * 
   * > This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 34
   */
  rowsAffectedCount?: number;
  /**
   * @remarks
   * The unique ID of the SQL statement.
   * 
   * @example
   * U2FsdGVk****
   */
  SQLHash?: string;
  /**
   * @remarks
   * The details of the SQL statement.
   * 
   * @example
   * select sleep(2)
   */
  SQLText?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * > This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * user
   */
  userName?: string;
  /**
   * @remarks
   * The number of I/O writes.
   * 
   * > This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 22
   */
  writeIOCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      clientHostName: 'ClientHostName',
      cpuTime: 'CpuTime',
      DBName: 'DBName',
      executionStartTime: 'ExecutionStartTime',
      hostAddress: 'HostAddress',
      lastRowsAffectedCount: 'LastRowsAffectedCount',
      lockTimes: 'LockTimes',
      logicalIORead: 'LogicalIORead',
      parseRowCounts: 'ParseRowCounts',
      physicalIORead: 'PhysicalIORead',
      queryTimeMS: 'QueryTimeMS',
      queryTimes: 'QueryTimes',
      returnRowCounts: 'ReturnRowCounts',
      rowsAffectedCount: 'RowsAffectedCount',
      SQLHash: 'SQLHash',
      SQLText: 'SQLText',
      userName: 'UserName',
      writeIOCount: 'WriteIOCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      clientHostName: 'string',
      cpuTime: 'number',
      DBName: 'string',
      executionStartTime: 'string',
      hostAddress: 'string',
      lastRowsAffectedCount: 'number',
      lockTimes: 'number',
      logicalIORead: 'number',
      parseRowCounts: 'number',
      physicalIORead: 'number',
      queryTimeMS: 'number',
      queryTimes: 'number',
      returnRowCounts: 'number',
      rowsAffectedCount: 'number',
      SQLHash: 'string',
      SQLText: 'string',
      userName: 'string',
      writeIOCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

