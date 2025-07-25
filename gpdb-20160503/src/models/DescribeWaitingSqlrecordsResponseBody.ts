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
   * The ID of the process that uniquely identifies the query.
   * 
   * @example
   * 100
   */
  PID?: string;
  /**
   * @remarks
   * The SQL statement of the query.
   * 
   * @example
   * Select * from t1,t2 where t1.id=t2.id;
   */
  SQLStmt?: string;
  /**
   * @remarks
   * The ID of the session that contains the query.
   * 
   * @example
   * 50
   */
  sessionID?: string;
  /**
   * @remarks
   * The start time of the query. This value is in the timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1660902033374
   */
  startTime?: number;
  /**
   * @remarks
   * The waiting state of the query. Valid values:
   * 
   * *   **LockWaiting**
   * *   **ResourceWaiting**
   * 
   * @example
   * LockWaiting
   */
  status?: string;
  /**
   * @remarks
   * The database account that is used to perform the query.
   * 
   * @example
   * testUser
   */
  user?: string;
  /**
   * @remarks
   * The waiting period of the query. Unit: milliseconds.
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
   * The list of lock diagnostics records.
   */
  items?: DescribeWaitingSQLRecordsResponseBodyItems[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
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

