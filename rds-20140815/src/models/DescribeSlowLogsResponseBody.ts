// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogsResponseBodyItemsSQLSlowLog extends $dara.Model {
  avgExecutionTime?: number;
  avgIOWriteCounts?: number;
  avgLastRowsAffectedCounts?: number;
  avgLogicalReadCounts?: number;
  avgPhysicalReadCounts?: number;
  avgRowsAffectedCounts?: number;
  createTime?: string;
  DBName?: string;
  maxExecutionTime?: number;
  maxExecutionTimeMS?: number;
  maxIOWriteCounts?: number;
  maxLastRowsAffectedCounts?: number;
  maxLockTime?: number;
  maxLockTimeMS?: number;
  maxLogicalReadCounts?: number;
  maxPhysicalReadCounts?: number;
  maxRowsAffectedCounts?: number;
  minIOWriteCounts?: number;
  minLastRowsAffectedCounts?: number;
  minLogicalReadCounts?: number;
  minPhysicalReadCounts?: number;
  minRowsAffectedCounts?: number;
  mySQLTotalExecutionCounts?: number;
  mySQLTotalExecutionTimes?: number;
  parseMaxRowCount?: number;
  parseTotalRowCounts?: number;
  reportTime?: string;
  returnMaxRowCount?: number;
  returnTotalRowCounts?: number;
  SQLHASH?: string;
  SQLIdStr?: string;
  SQLServerAvgCpuTime?: number;
  SQLServerAvgExecutionTime?: number;
  SQLServerMaxCpuTime?: number;
  SQLServerMinCpuTime?: number;
  SQLServerMinExecutionTime?: number;
  SQLServerTotalCpuTime?: number;
  SQLServerTotalExecutionCounts?: number;
  SQLServerTotalExecutionTimes?: number;
  SQLText?: string;
  slowLogId?: number;
  totalIOWriteCounts?: number;
  totalLastRowsAffectedCounts?: number;
  totalLockTimes?: number;
  totalLogicalReadCounts?: number;
  totalPhysicalReadCounts?: number;
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

export class DescribeSlowLogsResponseBodyItems extends $dara.Model {
  SQLSlowLog?: DescribeSlowLogsResponseBodyItemsSQLSlowLog[];
  static names(): { [key: string]: string } {
    return {
      SQLSlowLog: 'SQLSlowLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLSlowLog: { 'type': 'array', 'itemType': DescribeSlowLogsResponseBodyItemsSQLSlowLog },
    };
  }

  validate() {
    if(Array.isArray(this.SQLSlowLog)) {
      $dara.Model.validateArray(this.SQLSlowLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end date of the query.
   * 
   * @example
   * 2011-05-30Z
   */
  endTime?: string;
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  items?: DescribeSlowLogsResponseBodyItems;
  /**
   * @remarks
   * The number of the page returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of SQL statements that are returned on the current page.
   * 
   * @example
   * 10
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2553A660-E4EB-4AF4-A402-8AFF70A49143
   */
  requestId?: string;
  /**
   * @remarks
   * The start date of the query.
   * 
   * @example
   * 2011-05-30Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 5
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      engine: 'Engine',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      startTime: 'StartTime',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      engine: 'string',
      items: DescribeSlowLogsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      startTime: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

