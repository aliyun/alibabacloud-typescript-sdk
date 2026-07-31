// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditLogRecordsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The connection ID.
   * 
   * @example
   * 14356****
   */
  connId?: string;
  /**
   * @remarks
   * The name of the database on which the SQL statement ran.
   * 
   * @example
   * adb_demo
   */
  DBName?: string;
  /**
   * @remarks
   * The execution start time of the SQL statement. The time is in the `yyyy-MM-dd HH:mm:ss` format and in the local time zone.
   * 
   * @example
   * 2022-08-12 10:10:00
   */
  executeTime?: string;
  /**
   * @remarks
   * The execution start time of the SQL statement, as a millisecond timestamp.
   * 
   * @example
   * 1774600396584
   */
  executeTimestamp?: number;
  /**
   * @remarks
   * Specifies whether the response contains diagnostic information.
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
   * The IP address and port of the client that ran the SQL statement.
   * 
   * @example
   * 100.104.XX.XX:43908
   */
  hostAddress?: string;
  /**
   * @remarks
   * The process ID.
   * 
   * @example
   * 202106081752021720161662490345362390
   */
  processID?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * SELECT * FROM adb_hdfs_import_source
   */
  SQLText?: string;
  /**
   * @remarks
   * The SQL type.
   * 
   * @example
   * SELECT
   */
  SQLType?: string;
  /**
   * @remarks
   * Indicates whether the SQL statement succeeded. Valid values:
   * 
   * - **true**: The SQL statement succeeded.
   * 
   * - **false**: The SQL statement failed.
   * 
   * @example
   * true
   */
  succeed?: string;
  /**
   * @remarks
   * The execution duration of the SQL statement in milliseconds (ms).
   * 
   * @example
   * 216
   */
  totalTime?: string;
  /**
   * @remarks
   * The username of the account that ran the SQL statement.
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
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * @example
   * amv-t4nj8619bz2w3****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * A list of audit log records.
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
   * The number of records per page.
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

