// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord extends $dara.Model {
  /**
   * @remarks
   * Database name.
   * 
   * @example
   * testdb
   */
  DBName?: string;
  /**
   * @remarks
   * Node ID.
   * 
   * @example
   * pi-*****************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * Time when the SQL starts execution. The format is `YYYY-MM-DDThh:mmZ` (UTC time).
   * 
   * @example
   * 2021-04-07T03:47Z
   */
  executionStartTime?: string;
  /**
   * @remarks
   * Client address connecting to the database.
   * 
   * @example
   * testdb[testdb] @  [100.**.**.242]
   */
  hostAddress?: string;
  /**
   * @remarks
   * SQL lock duration in seconds.
   * 
   * @example
   * 0
   */
  lockTimes?: number;
  /**
   * @remarks
   * Number of rows parsed.
   * 
   * @example
   * 0
   */
  parseRowCounts?: number;
  /**
   * @remarks
   * Query time. Unit: milliseconds.
   * 
   * @example
   * 100
   */
  queryTimeMS?: number;
  /**
   * @remarks
   * SQL execution duration, in seconds.
   * 
   * @example
   * 20
   */
  queryTimes?: number;
  /**
   * @remarks
   * Number of rows returned.
   * 
   * @example
   * 0
   */
  returnRowCounts?: number;
  /**
   * @remarks
   * Unique identifier for the SQL statement in slow log statistics.
   * 
   * @example
   * U2FsdGVk****
   */
  SQLHash?: string;
  /**
   * @remarks
   * Query statement.
   */
  SQLText?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      DBNodeId: 'DBNodeId',
      executionStartTime: 'ExecutionStartTime',
      hostAddress: 'HostAddress',
      lockTimes: 'LockTimes',
      parseRowCounts: 'ParseRowCounts',
      queryTimeMS: 'QueryTimeMS',
      queryTimes: 'QueryTimes',
      returnRowCounts: 'ReturnRowCounts',
      SQLHash: 'SQLHash',
      SQLText: 'SQLText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      DBNodeId: 'string',
      executionStartTime: 'string',
      hostAddress: 'string',
      lockTimes: 'number',
      parseRowCounts: 'number',
      queryTimeMS: 'number',
      queryTimes: 'number',
      returnRowCounts: 'number',
      SQLHash: 'string',
      SQLText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodyItems extends $dara.Model {
  SQLSlowRecord?: DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord[];
  static names(): { [key: string]: string } {
    return {
      SQLSlowRecord: 'SQLSlowRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLSlowRecord: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord },
    };
  }

  validate() {
    if(Array.isArray(this.SQLSlowRecord)) {
      $dara.Model.validateArray(this.SQLSlowRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * 
   * @example
   * pc-*****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Database engine.
   * 
   * @example
   * polardb_mysql
   */
  engine?: string;
  /**
   * @remarks
   * List of slow log details.
   */
  items?: DescribeSlowLogRecordsResponseBodyItems;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of records on this page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A7E6A8FD-C50B-46B2-BA85-D8B8D3******
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of SQL statements.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      engine: 'string',
      items: DescribeSlowLogRecordsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
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

