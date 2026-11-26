// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWaitingSQLRecordsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test
   */
  database?: string;
  /**
   * @remarks
   * The process ID, which is the unique identifier of the SQL statement for the waiting query.
   * 
   * @example
   * 100
   */
  PID?: string;
  /**
   * @remarks
   * The SQL text of the query.
   * 
   * @example
   * Select * from t1,t2 where t1.id=t2.id;
   */
  SQLStmt?: string;
  /**
   * @remarks
   * The ID of the session to which the query belongs.
   * 
   * @example
   * 50
   */
  sessionID?: string;
  /**
   * @remarks
   * The start time of the query. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1660902033374
   */
  startTime?: number;
  /**
   * @remarks
   * The wait status of the query. Valid values:
   * 
   * - **LockWaiting**: The query is waiting for a lock.
   * - **ResourceWaiting**: The query is waiting for resources.
   * 
   * @example
   * LockWaiting
   */
  status?: string;
  /**
   * @remarks
   * The user who executed the query.
   * 
   * @example
   * testUser
   */
  user?: string;
  /**
   * @remarks
   * The wait time of the SQL statement, in milliseconds.
   * 
   * @example
   * 26911000
   */
  waitingTime?: number;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      PID: 'PID',
      SQLStmt: 'SQLStmt',
      sessionID: 'SessionID',
      startTime: 'StartTime',
      status: 'Status',
      user: 'User',
      waitingTime: 'WaitingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      PID: 'string',
      SQLStmt: 'string',
      sessionID: 'string',
      startTime: 'number',
      status: 'string',
      user: 'string',
      waitingTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWaitingSQLRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of queries.
   */
  items?: DescribeWaitingSQLRecordsResponseBodyItems[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeWaitingSQLRecordsResponseBodyItems },
      pageNumber: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

