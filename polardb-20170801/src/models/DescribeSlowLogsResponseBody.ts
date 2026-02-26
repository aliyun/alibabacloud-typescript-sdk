// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogsResponseBodyItemsSQLSlowLog extends $dara.Model {
  createTime?: string;
  DBName?: string;
  DBNodeId?: string;
  maxExecutionTime?: number;
  maxExecutionTimeMs?: string;
  maxLockTime?: number;
  parseMaxRowCount?: number;
  parseTotalRowCounts?: number;
  returnMaxRowCount?: number;
  returnTotalRowCounts?: number;
  SQLHASH?: string;
  SQLText?: string;
  totalExecutionCounts?: number;
  totalExecutionTimes?: number;
  totalLockTimes?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      DBName: 'DBName',
      DBNodeId: 'DBNodeId',
      maxExecutionTime: 'MaxExecutionTime',
      maxExecutionTimeMs: 'MaxExecutionTimeMs',
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
      maxExecutionTimeMs: 'string',
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
   * The ID of cluster.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end date of the query.
   * 
   * @example
   * 2021-05-30Z
   */
  endTime?: string;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * polardb_mysql
   */
  engine?: string;
  items?: DescribeSlowLogsResponseBodyItems;
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of SQL statements that are returned on the current page.
   * 
   * @example
   * 6
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
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
   * 2021-05-01Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 5
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
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
      DBClusterId: 'string',
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

