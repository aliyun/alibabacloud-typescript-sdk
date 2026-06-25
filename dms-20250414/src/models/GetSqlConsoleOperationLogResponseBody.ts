// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSqlConsoleOperationLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of affected rows.
   * 
   * @example
   * 100
   */
  affectRows?: number;
  /**
   * @remarks
   * The execution duration. Unit: milliseconds.
   * 
   * @example
   * 10
   */
  cost?: number;
  /**
   * @remarks
   * The database search name.
   * 
   * @example
   * mysql@xxx.com
   */
  databaseSearchName?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Access Denied
   */
  error?: string;
  /**
   * @remarks
   * The database schema.
   * 
   * @example
   * mysql
   */
  schema?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * SELECT * FROM user;
   */
  sql?: string;
  /**
   * @remarks
   * The SQL type.
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The start time of the logs.
   * 
   * @example
   * 2026-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * Indicates whether the statement is executed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * user
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      affectRows: 'AffectRows',
      cost: 'Cost',
      databaseSearchName: 'DatabaseSearchName',
      error: 'Error',
      schema: 'Schema',
      sql: 'Sql',
      sqlType: 'SqlType',
      startTime: 'StartTime',
      success: 'Success',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectRows: 'number',
      cost: 'number',
      databaseSearchName: 'string',
      error: 'string',
      schema: 'string',
      sql: 'string',
      sqlType: 'string',
      startTime: 'string',
      success: 'boolean',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlConsoleOperationLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: GetSqlConsoleOperationLogResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 400
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID, which is used to locate logs and troubleshoot issues.
   * 
   * @example
   * C0A813EB-4623-523A-8598-86390CB4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of logs.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetSqlConsoleOperationLogResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

