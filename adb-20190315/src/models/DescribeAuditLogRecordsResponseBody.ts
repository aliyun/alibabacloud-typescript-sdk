// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditLogRecordsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * This parameter is invalid.
   * 
   * @example
   * 无
   */
  connId?: string;
  /**
   * @remarks
   * The name of the database on which the SQL statement was executed.
   * 
   * @example
   * adb_test
   */
  DBName?: string;
  /**
   * @remarks
   * The start time of the SQL statement execution. The time is in the yyyy-MM-dd HH:mm:ss format and is your local time.
   * 
   * @example
   * 2022-01-23 16:05:08
   */
  executeTime?: string;
  executeTimestamp?: number;
  /**
   * @remarks
   * The IP address and port number of the client that was used to execute the SQL statement.
   * 
   * @example
   * 100.104.XX.XX:43908
   */
  hostAddress?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 202106081752021720161662490345362390
   */
  processID?: string;
  /**
   * @remarks
   * The details of the SQL statement.
   * 
   * @example
   * SELECT * FROM tb_courses
   */
  SQLText?: string;
  /**
   * @remarks
   * The type of the SQL statement.
   * 
   * @example
   * SELECT
   */
  SQLType?: string;
  /**
   * @remarks
   * Indicates whether the SQL statement was successfully executed. Valid values:
   * 
   * - **true**: The SQL statement was successfully executed.
   * 
   * - **false**: The SQL statement failed to be executed.
   * 
   * @example
   * true
   */
  succeed?: string;
  /**
   * @remarks
   * The execution duration of the SQL statement. Unit: milliseconds (ms).
   * 
   * @example
   * 216
   */
  totalTime?: string;
  /**
   * @remarks
   * The username that was used to execute the SQL statement.
   * 
   * @example
   * test_user
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      connId: 'ConnId',
      DBName: 'DBName',
      executeTime: 'ExecuteTime',
      executeTimestamp: 'ExecuteTimestamp',
      hostAddress: 'HostAddress',
      processID: 'ProcessID',
      SQLText: 'SQLText',
      SQLType: 'SQLType',
      succeed: 'Succeed',
      totalTime: 'TotalTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connId: 'string',
      DBName: 'string',
      executeTime: 'string',
      executeTimestamp: 'number',
      hostAddress: 'string',
      processID: 'string',
      SQLText: 'string',
      SQLType: 'string',
      succeed: 'string',
      totalTime: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-t4nj8619bz2w3****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The details of the SQL audit logs.
   */
  items?: DescribeAuditLogRecordsResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8A564B7F-8C00-43C0-8EC5-919FBB70573
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      items: { 'type': 'array', 'itemType': DescribeAuditLogRecordsResponseBodyItems },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
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

