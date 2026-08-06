// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StatementResultSchema extends $dara.Model {
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * string
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
   * The presigned URL of the Arrow IPC file. This parameter is returned when a result set exists. The URL is valid for 1 hour and contains full data. The value is null for an empty result set (rowCount == 0).
   * 
   * @example
   * https://xxx.oss-cn-hangzhou.aliyuncs.com/xxxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The error message. This parameter is returned only when the status is FAILED.
   * 
   * @example
   * SQL_ERROR
   */
  error?: string;
  /**
   * @remarks
   * The error code. This parameter is returned only when the status is FAILED.
   * 
   * @example
   * This feature is not implemented: xxx
   */
  errorCode?: string;
  /**
   * @remarks
   * The execution duration of the statement, in milliseconds.
   * 
   * @example
   * 100
   */
  executionTime?: number;
  /**
   * @remarks
   * The statement sequence number (0-based).
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * The total number of rows in the result. The value is 0 for statements that do not return a result set.
   * 
   * @example
   * 1000
   */
  rowCount?: number;
  /**
   * @remarks
   * The result column information. This parameter is returned when a result set exists.
   */
  schema?: StatementResultSchema[];
  /**
   * @remarks
   * The SQL text of the statement.
   * 
   * @example
   * select * from table_name;
   */
  sql?: string;
  /**
   * @remarks
   * The status of the statement. Valid values: COMPLETED and FAILED.
   * 
   * @example
   * COMPLETED
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

