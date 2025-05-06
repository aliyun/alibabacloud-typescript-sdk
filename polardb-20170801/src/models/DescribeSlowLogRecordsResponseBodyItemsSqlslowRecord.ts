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

