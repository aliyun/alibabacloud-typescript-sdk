// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProxySQLExecAuditLogRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value of this parameter must be a timestamp that follows the UNIX time format.
   * 
   * This parameter is required.
   * 
   * @example
   * 1636962846000
   */
  endTime?: number;
  /**
   * @remarks
   * The execution status of the SQL statement. Valid values:
   * 
   * *   **FAIL**: The execution of the SQL statement fails.
   * *   **CANCEL**: The execution of the SQL statement is canceled.
   * *   **SUCCESS**: The SQL statement is executed.
   * 
   * @example
   * SUCCESS
   */
  execState?: string;
  /**
   * @remarks
   * The alias of the user.
   * 
   * @example
   * testNickName
   */
  opUserName?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum values: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of SQL statement. Valid values:
   * 
   * *   **SELECT**
   * *   **INSERT**
   * *   **DELETE**
   * *   **CREATE_TABLE**
   * 
   * >  You can choose Operation Audit > Secure Access Proxy in the top navigation bar of the DMS console to view more types of SQL statements.
   * 
   * @example
   * SELECT
   */
  SQLType?: string;
  /**
   * @remarks
   * The name of the database instance.
   * 
   * @example
   * test
   */
  searchName?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value of this parameter must be a timestamp that follows the UNIX time format.
   * 
   * This parameter is required.
   * 
   * @example
   * 1636876446000
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to query the tenant ID.
   * 
   * @example
   * 14****
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      execState: 'ExecState',
      opUserName: 'OpUserName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      SQLType: 'SQLType',
      searchName: 'SearchName',
      startTime: 'StartTime',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      execState: 'string',
      opUserName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      SQLType: 'string',
      searchName: 'string',
      startTime: 'number',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

