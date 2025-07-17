// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteScriptResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The fields that are queried after the SQL statement is executed.
   */
  columnNames?: string[];
  /**
   * @remarks
   * The error message that is returned if the SQL statement fails to be executed. For example, an error message is returned because the SQL statement is invalid.
   * 
   * @example
   * UnknownError
   */
  message?: string;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 1
   */
  rowCount?: number;
  /**
   * @remarks
   * The rows that are queried after the SQL statement is executed.
   */
  rows?: { [key: string]: any }[];
  /**
   * @remarks
   * Indicates whether the SQL statement is executed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnNames: 'ColumnNames',
      message: 'Message',
      rowCount: 'RowCount',
      rows: 'Rows',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnNames: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      rowCount: 'number',
      rows: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.columnNames)) {
      $dara.Model.validateArray(this.columnNames);
    }
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteScriptResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message about the gateway.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FE8EE2F1-4880-46BC-A704-5CF63EAF9A04
   */
  requestId?: string;
  /**
   * @remarks
   * The results of the SQL statements that are executed, in the format of an array. Each entry in the array indicates the result of an SQL statement.
   */
  results?: ExecuteScriptResponseBodyResults[];
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      results: 'Results',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': ExecuteScriptResponseBodyResults },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

