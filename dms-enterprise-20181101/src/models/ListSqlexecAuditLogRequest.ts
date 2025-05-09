// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSQLExecAuditLogRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * >  The end time supports fuzzy match. Specify the time in the YYYY-MM-DD hh:mm:ss format. We recommend that you use the StartTime and EndTime parameters to specify a time range that does not exceed one day. The returned entries can be displayed by page to improve query efficiency.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-08 11:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The execution status of the SQL statement. Valid values:
   * 
   * *   **FAIL**: The SQL statement fails to be executed.
   * *   **NOEXE**: The SQL statement has not been executed.
   * *   **RUNNING**: The SQL statement is being executed.
   * *   **CANCEL**: The execution of the SQL statement is canceled.
   * *   **SUCCESS**: The SQL statement is executed.
   * 
   * @example
   * SUCCESS
   */
  execState?: string;
  /**
   * @remarks
   * The nickname of the user who wrote the SQL statement.
   * 
   * @example
   * test_OpUserName
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
   * The number of entries to return on each page. The value cannot exceed 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the database or instance based on which you want to query SQL statements.
   * 
   * >  If the SQL statements to be queried are at the instance level, you can set this parameter to an instance name. If the SQL statements to be queried are at the database level, you can set this parameter to a database name.
   * 
   * @example
   * test_SearchName
   */
  searchName?: string;
  /**
   * @remarks
   * The type of the SQL statement. Valid values:
   * 
   * *   **SELECT**: the SQL statement that is used to query data.
   * *   **INSERT**: the SQL statement that is used to insert data.
   * *   **DELETE**: the SQL statement that is used to delete data.
   * *   **CREATE_TABLE**: the SQL statement that is used to create tables.
   * 
   * >  To view more types of SQL statements, log on to the DMS console and click Security and Specifications. In the left-side navigation pane, click **Operation Audit**. Then, you can view all supported types of SQL statements from the **SQL type** drop-down list.
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * >  The start time supports fuzzy match. Specify the time in the YYYY-MM-DD hh:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-08 11:04:00
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      execState: 'ExecState',
      opUserName: 'OpUserName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchName: 'SearchName',
      sqlType: 'SqlType',
      startTime: 'StartTime',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      execState: 'string',
      opUserName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchName: 'string',
      sqlType: 'string',
      startTime: 'string',
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

