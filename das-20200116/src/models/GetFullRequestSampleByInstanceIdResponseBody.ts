// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFullRequestSampleByInstanceIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * dbtest
   */
  database?: string;
  /**
   * @remarks
   * The number of rows fetched by the PolarDB-X 2.0 compute node (CN).
   * 
   * @example
   * 0
   */
  frows?: number;
  /**
   * @remarks
   * The lock wait duration. Unit: seconds.
   * 
   * @example
   * 0.0137
   */
  lockWaitTime?: number;
  /**
   * @remarks
   * The number of logical reads.
   * 
   * @example
   * 165848
   */
  logicalRead?: number;
  /**
   * @remarks
   * The source of the access.
   * 
   * @example
   * 172.17.XX.XX
   */
  originHost?: string;
  /**
   * @remarks
   * The number of physical asynchronous reads.
   * 
   * @example
   * 0
   */
  physicalAsyncRead?: number;
  /**
   * @remarks
   * The number of physical synchronous reads.
   * 
   * @example
   * 0
   */
  physicalSyncRead?: number;
  /**
   * @remarks
   * The number of rows updated or returned by the PolarDB-X 2.0 compute node (CN).
   * 
   * @example
   * 0
   */
  rows?: number;
  /**
   * @remarks
   * The total number of rows examined.
   * > Currently, the following databases support this field: ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, and PolarDB for MySQL.
   * 
   * @example
   * 2048576
   */
  rowsExamined?: number;
  /**
   * @remarks
   * The number of rows returned.
   * 
   * @example
   * 14
   */
  rowsReturned?: number;
  /**
   * @remarks
   * The execution duration. Unit: seconds.
   * 
   * @example
   * 0.409789
   */
  rt?: number;
  /**
   * @remarks
   * The number of rows scanned.
   * 
   * @example
   * 0
   */
  scanRows?: number;
  /**
   * @remarks
   * The number of DN requests from the PolarDB-X 2.0 compute node (CN).
   * 
   * @example
   * 0
   */
  scnt?: number;
  /**
   * @remarks
   * The SQL sample.
   * 
   * @example
   * select * from testdb01 where ****
   */
  sql?: string;
  /**
   * @remarks
   * SQL ID。
   * 
   * @example
   * 651b56fe9418d48edb8fdf0980ec****
   */
  sqlId?: string;
  /**
   * @remarks
   * The type of the SQL statement. Valid values: **SELECT**, **INSERT**, **UPDATE**, **DELETE**, **LOGIN**, **LOGOUT**, **MERGE**, **ALTER**, **CREATEINDEX**, **DROPINDEX**, **CREATE**, **DROP**, **SET**, **DESC**, **REPLACE**, **CALL**, **BEGIN**, **DESCRIBE**, **ROLLBACK**, **FLUSH**, **USE**, **SHOW**, **START**, **COMMIT**, and **RENAME**.
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The time when the SQL statement was executed. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1660100753556
   */
  timestamp?: number;
  /**
   * @remarks
   * The number of rows updated.
   * 
   * @example
   * 0
   */
  updateRows?: number;
  /**
   * @remarks
   * The username that executed the SQL statement.
   * 
   * @example
   * testuser
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      frows: 'Frows',
      lockWaitTime: 'LockWaitTime',
      logicalRead: 'LogicalRead',
      originHost: 'OriginHost',
      physicalAsyncRead: 'PhysicalAsyncRead',
      physicalSyncRead: 'PhysicalSyncRead',
      rows: 'Rows',
      rowsExamined: 'RowsExamined',
      rowsReturned: 'RowsReturned',
      rt: 'Rt',
      scanRows: 'ScanRows',
      scnt: 'Scnt',
      sql: 'Sql',
      sqlId: 'SqlId',
      sqlType: 'SqlType',
      timestamp: 'Timestamp',
      updateRows: 'UpdateRows',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      frows: 'number',
      lockWaitTime: 'number',
      logicalRead: 'number',
      originHost: 'string',
      physicalAsyncRead: 'number',
      physicalSyncRead: 'number',
      rows: 'number',
      rowsExamined: 'number',
      rowsReturned: 'number',
      rt: 'number',
      scanRows: 'number',
      scnt: 'number',
      sql: 'string',
      sqlId: 'string',
      sqlType: 'string',
      timestamp: 'number',
      updateRows: 'number',
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

export class GetFullRequestSampleByInstanceIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetFullRequestSampleByInstanceIdResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * > If the request is successful, **Successful** is returned. If the request fails, an error message that contains information such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A74B755-98B7-59DB-8724-1321B394****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetFullRequestSampleByInstanceIdResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

