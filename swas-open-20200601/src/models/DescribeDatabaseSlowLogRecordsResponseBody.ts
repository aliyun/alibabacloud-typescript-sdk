// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabaseSlowLogRecordsResponseBodySlowLogs extends $dara.Model {
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  /**
   * @remarks
   * The start time of the execution. The time is displayed in UTC and is in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * > The time displayed in the console is in the UTC+8 time zone, which is 8 hours later than the time in UTC.
   * 
   * @example
   * 2022-09-08T01:40:44Z
   */
  executionStartTime?: string;
  /**
   * @remarks
   * The IP address of the client that is used to connect to the database.
   * 
   * @example
   * xxx[xxx] @ [1xx.xxx.xxx.xx]
   */
  hostAddress?: string;
  /**
   * @remarks
   * The lock duration. Unit: seconds.
   * 
   * @example
   * 0
   */
  lockTimes?: number;
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
   * The execution duration. Unit: milliseconds.
   * 
   * @example
   * 2001
   */
  queryTimeMS?: number;
  /**
   * @remarks
   * The execution duration. Unit: seconds.
   * 
   * @example
   * 2
   */
  queryTimes?: number;
  /**
   * @remarks
   * The number of returned rows.
   * 
   * @example
   * 1
   */
  returnRowCounts?: number;
  /**
   * @remarks
   * The details of the SQL statement.
   * 
   * @example
   * select sleep(2)
   */
  SQLText?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      executionStartTime: 'ExecutionStartTime',
      hostAddress: 'HostAddress',
      lockTimes: 'LockTimes',
      parseRowCounts: 'ParseRowCounts',
      queryTimeMS: 'QueryTimeMS',
      queryTimes: 'QueryTimes',
      returnRowCounts: 'ReturnRowCounts',
      SQLText: 'SQLText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      executionStartTime: 'string',
      hostAddress: 'string',
      lockTimes: 'number',
      parseRowCounts: 'number',
      queryTimeMS: 'number',
      queryTimes: 'number',
      returnRowCounts: 'number',
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

export class DescribeDatabaseSlowLogRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database engine.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * Starts from 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 30 to 100.
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The number of logical reads.
   * 
   * @example
   * 200
   */
  physicalIORead?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The slow query logs.
   */
  slowLogs?: DescribeDatabaseSlowLogRecordsResponseBodySlowLogs[];
  /**
   * @remarks
   * The total number of slow query logs.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      physicalIORead: 'PhysicalIORead',
      requestId: 'RequestId',
      slowLogs: 'SlowLogs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      physicalIORead: 'number',
      requestId: 'string',
      slowLogs: { 'type': 'array', 'itemType': DescribeDatabaseSlowLogRecordsResponseBodySlowLogs },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.slowLogs)) {
      $dara.Model.validateArray(this.slowLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

