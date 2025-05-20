// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFullRequestSampleByInstanceIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * dbtest
   */
  database?: string;
  /**
   * @remarks
   * The number of rows fetched by PolarDB-X 2.0 compute nodes.
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
   * The source IP address.
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
   * The number of rows updated or returned on PolarDB-X 2.0 compute nodes.
   * 
   * @example
   * 0
   */
  rows?: number;
  /**
   * @remarks
   * The total number of scanned rows.
   * 
   * > This parameter is returned only for ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, and PolarDB for MySQL databases.
   * 
   * @example
   * 2048576
   */
  rowsExamined?: number;
  /**
   * @remarks
   * The number of rows returned by the SQL statement.
   * 
   * @example
   * 14
   */
  rowsReturned?: number;
  /**
   * @remarks
   * The amount of time consumed to execute the SQL statement. Unit: seconds.
   * 
   * @example
   * 0.409789
   */
  rt?: number;
  /**
   * @remarks
   * The number of scanned rows.
   * 
   * @example
   * 0
   */
  scanRows?: number;
  /**
   * @remarks
   * The number of requests sent from PolarDB-X 2.0 compute nodes to data nodes.
   * 
   * @example
   * 0
   */
  scnt?: number;
  /**
   * @remarks
   * The sample SQL statement.
   * 
   * @example
   * select * from testdb01 where ****
   */
  sql?: string;
  /**
   * @remarks
   * The SQL statement ID.
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
   * The time when the SQL statement was executed. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1660100753556
   */
  timestamp?: number;
  /**
   * @remarks
   * The number of updated rows.
   * 
   * @example
   * 0
   */
  updateRows?: number;
  /**
   * @remarks
   * The name of the user who executes the SQL statement.
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

