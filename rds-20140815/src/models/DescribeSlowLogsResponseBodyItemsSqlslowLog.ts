// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogsResponseBodyItemsSQLSlowLog extends $dara.Model {
  /**
   * @remarks
   * The average execution duration per SQL statement in the query. Unit: seconds.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 1
   */
  avgExecutionTime?: number;
  /**
   * @remarks
   * The average number of I/O writes per SQL statement in the query.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  avgIOWriteCounts?: number;
  /**
   * @remarks
   * The average number of rows that were affected by the last SQL statement in the query.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  avgLastRowsAffectedCounts?: number;
  /**
   * @remarks
   * The average number of logical reads per SQL statement in the query.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  avgLogicalReadCounts?: number;
  /**
   * @remarks
   * The average number of physical reads per SQL statement in the query.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  avgPhysicalReadCounts?: number;
  /**
   * @remarks
   * The average number of rows that were affected per SQL statement in the query.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  avgRowsAffectedCounts?: number;
  /**
   * @remarks
   * The date when the data was generated.
   * 
   * @example
   * 2011-05-30Z
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * RDS_MySQL
   */
  DBName?: string;
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
   * The longest execution duration of a specific SQL statement in the query. Unit: milliseconds.
   * 
   * @example
   * 60000
   */
  maxExecutionTimeMS?: number;
  /**
   * @remarks
   * The largest number of I/O writes that were performed by a specific SQL statement in the query.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  maxIOWriteCounts?: number;
  /**
   * @remarks
   * The largest number of rows that were affected by the last SQL statement in the query.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  maxLastRowsAffectedCounts?: number;
  /**
   * @remarks
   * The longest lock duration that was caused by a specific SQL statement in the query. Unit: seconds.
   * 
   * @example
   * 0
   */
  maxLockTime?: number;
  /**
   * @remarks
   * The longest lock duration that was caused by a specific SQL statement in the query. Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  maxLockTimeMS?: number;
  /**
   * @remarks
   * The largest number of logical reads that were performed by a specific SQL statement in the query.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  maxLogicalReadCounts?: number;
  /**
   * @remarks
   * The largest number of physical reads that were performed by a specific SQL statement in the query.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  maxPhysicalReadCounts?: number;
  /**
   * @remarks
   * The largest number of rows that were affected by a specific SQL statement in the query.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  maxRowsAffectedCounts?: number;
  /**
   * @remarks
   * The smallest number of I/O writes that were performed by a specific SQL statement in the query.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  minIOWriteCounts?: number;
  /**
   * @remarks
   * The smallest number of rows that were affected by the last SQL statement in the query.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  minLastRowsAffectedCounts?: number;
  /**
   * @remarks
   * The smallest number of logical reads that were performed by a specific SQL statement in the query.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  minLogicalReadCounts?: number;
  /**
   * @remarks
   * The smallest number of physical reads that were performed by a specific SQL statement in the query.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  minPhysicalReadCounts?: number;
  /**
   * @remarks
   * The smallest number of rows that were affected by a specific SQL statement in the query.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  minRowsAffectedCounts?: number;
  /**
   * @remarks
   * The total number of SQL statements that were executed in the query. This parameter is returned only for instances that run MySQL.
   * 
   * @example
   * 1
   */
  mySQLTotalExecutionCounts?: number;
  /**
   * @remarks
   * The total execution duration of all SQL statements in the query. Unit: seconds. This parameter is returned only for instances that run MySQL.
   * 
   * @example
   * 1
   */
  mySQLTotalExecutionTimes?: number;
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
   * 1
   */
  parseTotalRowCounts?: number;
  /**
   * @remarks
   * The date on which the data report was generated.
   * 
   * @example
   * 2011-05-30Z
   */
  reportTime?: string;
  /**
   * @remarks
   * The largest number of rows that were returned by a specific SQL statement in the query.
   * 
   * @example
   * 1
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
   * The ID of the SQL statement in the statistical template of slow query logs. This parameter is replaced by the **SQLHASH** parameter.
   * 
   * @example
   * 521584
   */
  SQLIdStr?: string;
  /**
   * @remarks
   * The average amount of CPU time per SQL statement in the query. Unit: seconds.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  SQLServerAvgCpuTime?: number;
  /**
   * @remarks
   * The average execution duration per SQL statement in the query. Unit: seconds.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  SQLServerAvgExecutionTime?: number;
  /**
   * @remarks
   * The largest amount of CPU time that was used by a specific SQL statement in the query. Unit: seconds.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  SQLServerMaxCpuTime?: number;
  /**
   * @remarks
   * The smallest amount of CPU time that was used by a specific SQL statement in the query. Unit: seconds.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  SQLServerMinCpuTime?: number;
  /**
   * @remarks
   * The smallest execution duration of a specific SQL statement in the query. Unit: seconds.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  SQLServerMinExecutionTime?: number;
  /**
   * @remarks
   * The total amount of CPU time that was used by all SQL statements in the query. Unit: seconds.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  SQLServerTotalCpuTime?: number;
  /**
   * @remarks
   * The total number of SQL statements that were executed in the query. This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 1
   */
  SQLServerTotalExecutionCounts?: number;
  /**
   * @remarks
   * The total execution duration of all SQL statements in the query. This parameter is returned only for instances that run SQL Server. Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  SQLServerTotalExecutionTimes?: number;
  /**
   * @remarks
   * The SQL statement that was executed in the query.
   * 
   * @example
   * select id,name from tb_table
   */
  SQLText?: string;
  /**
   * @remarks
   * The ID of the slow query log summary.
   * 
   * @example
   * 26584213
   */
  slowLogId?: number;
  /**
   * @remarks
   * The total number of I/O writes that were performed by all SQL statements in the query.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  totalIOWriteCounts?: number;
  /**
   * @remarks
   * The total number of rows that were affected by the last SQL statement in the query.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 0
   */
  totalLastRowsAffectedCounts?: number;
  /**
   * @remarks
   * The total lock duration that was caused by all SQL statements in the query. Unit: seconds.
   * 
   * @example
   * 0
   */
  totalLockTimes?: number;
  /**
   * @remarks
   * The total number of logical reads that were performed by all SQL statements in the query.
   * 
   * @example
   * 1
   */
  totalLogicalReadCounts?: number;
  /**
   * @remarks
   * The total number of physical reads that were performed by all SQL statements in the query.
   * 
   * @example
   * 1
   */
  totalPhysicalReadCounts?: number;
  /**
   * @remarks
   * The total number of rows that were affected by all SQL statements in the query.
   * 
   * @example
   * 0
   */
  totalRowsAffectedCounts?: number;
  static names(): { [key: string]: string } {
    return {
      avgExecutionTime: 'AvgExecutionTime',
      avgIOWriteCounts: 'AvgIOWriteCounts',
      avgLastRowsAffectedCounts: 'AvgLastRowsAffectedCounts',
      avgLogicalReadCounts: 'AvgLogicalReadCounts',
      avgPhysicalReadCounts: 'AvgPhysicalReadCounts',
      avgRowsAffectedCounts: 'AvgRowsAffectedCounts',
      createTime: 'CreateTime',
      DBName: 'DBName',
      maxExecutionTime: 'MaxExecutionTime',
      maxExecutionTimeMS: 'MaxExecutionTimeMS',
      maxIOWriteCounts: 'MaxIOWriteCounts',
      maxLastRowsAffectedCounts: 'MaxLastRowsAffectedCounts',
      maxLockTime: 'MaxLockTime',
      maxLockTimeMS: 'MaxLockTimeMS',
      maxLogicalReadCounts: 'MaxLogicalReadCounts',
      maxPhysicalReadCounts: 'MaxPhysicalReadCounts',
      maxRowsAffectedCounts: 'MaxRowsAffectedCounts',
      minIOWriteCounts: 'MinIOWriteCounts',
      minLastRowsAffectedCounts: 'MinLastRowsAffectedCounts',
      minLogicalReadCounts: 'MinLogicalReadCounts',
      minPhysicalReadCounts: 'MinPhysicalReadCounts',
      minRowsAffectedCounts: 'MinRowsAffectedCounts',
      mySQLTotalExecutionCounts: 'MySQLTotalExecutionCounts',
      mySQLTotalExecutionTimes: 'MySQLTotalExecutionTimes',
      parseMaxRowCount: 'ParseMaxRowCount',
      parseTotalRowCounts: 'ParseTotalRowCounts',
      reportTime: 'ReportTime',
      returnMaxRowCount: 'ReturnMaxRowCount',
      returnTotalRowCounts: 'ReturnTotalRowCounts',
      SQLHASH: 'SQLHASH',
      SQLIdStr: 'SQLIdStr',
      SQLServerAvgCpuTime: 'SQLServerAvgCpuTime',
      SQLServerAvgExecutionTime: 'SQLServerAvgExecutionTime',
      SQLServerMaxCpuTime: 'SQLServerMaxCpuTime',
      SQLServerMinCpuTime: 'SQLServerMinCpuTime',
      SQLServerMinExecutionTime: 'SQLServerMinExecutionTime',
      SQLServerTotalCpuTime: 'SQLServerTotalCpuTime',
      SQLServerTotalExecutionCounts: 'SQLServerTotalExecutionCounts',
      SQLServerTotalExecutionTimes: 'SQLServerTotalExecutionTimes',
      SQLText: 'SQLText',
      slowLogId: 'SlowLogId',
      totalIOWriteCounts: 'TotalIOWriteCounts',
      totalLastRowsAffectedCounts: 'TotalLastRowsAffectedCounts',
      totalLockTimes: 'TotalLockTimes',
      totalLogicalReadCounts: 'TotalLogicalReadCounts',
      totalPhysicalReadCounts: 'TotalPhysicalReadCounts',
      totalRowsAffectedCounts: 'TotalRowsAffectedCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgExecutionTime: 'number',
      avgIOWriteCounts: 'number',
      avgLastRowsAffectedCounts: 'number',
      avgLogicalReadCounts: 'number',
      avgPhysicalReadCounts: 'number',
      avgRowsAffectedCounts: 'number',
      createTime: 'string',
      DBName: 'string',
      maxExecutionTime: 'number',
      maxExecutionTimeMS: 'number',
      maxIOWriteCounts: 'number',
      maxLastRowsAffectedCounts: 'number',
      maxLockTime: 'number',
      maxLockTimeMS: 'number',
      maxLogicalReadCounts: 'number',
      maxPhysicalReadCounts: 'number',
      maxRowsAffectedCounts: 'number',
      minIOWriteCounts: 'number',
      minLastRowsAffectedCounts: 'number',
      minLogicalReadCounts: 'number',
      minPhysicalReadCounts: 'number',
      minRowsAffectedCounts: 'number',
      mySQLTotalExecutionCounts: 'number',
      mySQLTotalExecutionTimes: 'number',
      parseMaxRowCount: 'number',
      parseTotalRowCounts: 'number',
      reportTime: 'string',
      returnMaxRowCount: 'number',
      returnTotalRowCounts: 'number',
      SQLHASH: 'string',
      SQLIdStr: 'string',
      SQLServerAvgCpuTime: 'number',
      SQLServerAvgExecutionTime: 'number',
      SQLServerMaxCpuTime: 'number',
      SQLServerMinCpuTime: 'number',
      SQLServerMinExecutionTime: 'number',
      SQLServerTotalCpuTime: 'number',
      SQLServerTotalExecutionCounts: 'number',
      SQLServerTotalExecutionTimes: 'number',
      SQLText: 'string',
      slowLogId: 'number',
      totalIOWriteCounts: 'number',
      totalLastRowsAffectedCounts: 'number',
      totalLockTimes: 'number',
      totalLogicalReadCounts: 'number',
      totalPhysicalReadCounts: 'number',
      totalRowsAffectedCounts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

