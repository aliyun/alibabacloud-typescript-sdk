// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StatementResultSchema extends $dara.Model {
  /**
   * @remarks
   * The name of the column.
   */
  name?: string;
  /**
   * @remarks
   * The data type of the column.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StatementResult extends $dara.Model {
  /**
   * @remarks
   * A temporary URL to download the result set, provided only when the result set is too large to return directly.
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The error message, present only if the execution fails.
   */
  error?: string;
  /**
   * @remarks
   * The error code, present only if the execution fails.
   */
  errorCode?: string;
  /**
   * @remarks
   * The statement\\"s total execution time, in milliseconds.
   */
  executionTime?: number;
  /**
   * @remarks
   * The zero-based index of the SQL statement in a batch execution.
   */
  index?: number;
  /**
   * @remarks
   * The number of rows affected or returned by the statement.
   */
  rowCount?: number;
  /**
   * @remarks
   * An array of objects describing the result set\\"s schema. Each object defines a column.
   */
  schema?: StatementResultSchema[];
  /**
   * @remarks
   * The original SQL statement.
   */
  sql?: string;
  /**
   * @remarks
   * The statement\\"s execution status. Possible values are `RUNNING`, `FINISHED`, `CANCELED`, or `FAILED`.
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'downloadUrl',
      error: 'error',
      errorCode: 'errorCode',
      executionTime: 'executionTime',
      index: 'index',
      rowCount: 'rowCount',
      schema: 'schema',
      sql: 'sql',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      error: 'string',
      errorCode: 'string',
      executionTime: 'number',
      index: 'number',
      rowCount: 'number',
      schema: { 'type': 'array', 'itemType': StatementResultSchema },
      sql: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.schema)) {
      $dara.Model.validateArray(this.schema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

