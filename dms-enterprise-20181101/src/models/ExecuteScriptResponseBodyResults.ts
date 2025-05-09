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

