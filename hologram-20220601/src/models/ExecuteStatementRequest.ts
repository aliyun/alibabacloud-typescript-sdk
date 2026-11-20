// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteStatementRequest extends $dara.Model {
  /**
   * @remarks
   * The database.
   * 
   * @example
   * test_db
   */
  dbName?: string;
  /**
   * @remarks
   * The maximum amount of data to return in a single request, in bytes. Default value: 10485760 (10 MB). Excess data is truncated and indicated by setting truncated to true.
   * 
   * @example
   * 1024
   */
  maxBytes?: number;
  /**
   * @remarks
   * The maximum number of rows to return. Default value: 200. Maximum value: 1000. Excess rows are truncated and indicated by the Truncated field in the response.
   * 
   * @example
   * 300
   */
  maxRows?: number;
  /**
   * @remarks
   * The list of parameters to attach to the SQL parameterized query, which correspond in sequence to placeholders such as $1 and $2 in the SQL statement. Supported value types include String, Long, Double, Boolean, and null, which represents NULL. Using a parameterized query effectively prevents SQL injection and improves the cache reuse rate of precompiled statements. The parameter list applies to each SQL statement in Statements.
   */
  parameters?: any[];
  /**
   * @remarks
   * The timeout period for SQL execution, in seconds. Default value: 30. Maximum value: 30. Minimum value: 1. If a timeout occurs, the server actively cancels the query.
   * 
   * @example
   * 5
   */
  queryTimeout?: number;
  /**
   * @remarks
   * The SQL statement to be executed. The maximum length is 16,384 characters. Multiple SQL statements separated by semicolons are supported. If multiple statements are specified, the result of the last statement is returned.
   * 
   * @example
   * select * from test_table limit 10;
   */
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'dbName',
      maxBytes: 'maxBytes',
      maxRows: 'maxRows',
      parameters: 'parameters',
      queryTimeout: 'queryTimeout',
      sql: 'sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      maxBytes: 'number',
      maxRows: 'number',
      parameters: { 'type': 'array', 'itemType': 'any' },
      queryTimeout: 'number',
      sql: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

