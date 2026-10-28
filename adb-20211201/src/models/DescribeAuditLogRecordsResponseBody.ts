// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditLogRecordsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The communication ID.
   * 
   * @example
   * 14356****
   */
  connId?: string;
  /**
   * @remarks
   * The name of the database on which the target SQL statement is executed.
   * 
   * @example
   * adb_demo
   */
  DBName?: string;
  /**
   * @remarks
   * The start time of the target SQL statement execution. The time is displayed in local time and in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2022-08-12 10:10:00
   */
  executeTime?: string;
  /**
   * @remarks
   * The start time of the target SQL statement execution, represented as a millisecond timestamp.
   * 
   * @example
   * 1774600396584
   */
  executeTimestamp?: number;
  /**
   * @remarks
   * Indicates whether diagnostic information is included.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  hasDiagnosticInfo?: boolean;
  /**
   * @remarks
   * The IP address and port number of the client that executes the target SQL statement.
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
   * SELECT * FROM adb_hdfs_import_source
   */
  SQLText?: string;
  /**
   * @remarks
   * The type of the target SQL statement.
   * 
   * @example
   * SELECT
   */
  SQLType?: string;
  /**
   * @remarks
   * Indicates whether the target SQL statement is executed successfully. Valid values:
   * - **true**: The SQL statement is executed successfully.
   * - **false**: The SQL statement fails to be executed.
   * 
   * @example
   * true
   */
  succeed?: string;
  /**
   * @remarks
   * The execution duration of the target SQL statement. Unit: milliseconds (ms).
   * 
   * @example
   * 216
   */
  totalTime?: string;
  /**
   * @remarks
   * The username that executes the target SQL statement.
   * 
   * @example
   * test
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      connId: 'ConnId',
      DBName: 'DBName',
      executeTime: 'ExecuteTime',
      executeTimestamp: 'ExecuteTimestamp',
      hasDiagnosticInfo: 'HasDiagnosticInfo',
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
      hasDiagnosticInfo: 'boolean',
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
   * <props="china">The cluster ID of an Enterprise Edition, Basic Edition, or Lakehouse Edition cluster.
   * <props="intl">The cluster ID of a Lakehouse Edition cluster.
   * 
   * @example
   * amv-t4nj8619bz2w3****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The list.
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
   * The number of entries per page.
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
   * The total number of records.
   * 
   * @example
   * 6974
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

