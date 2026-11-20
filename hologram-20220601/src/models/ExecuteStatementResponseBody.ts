// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteStatementResponseBodyDataResultsColumnMetadata extends $dara.Model {
  /**
   * @remarks
   * The **column name**.
   * 
   * @example
   * id
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the column is nullable.
   */
  nullable?: boolean;
  /**
   * @remarks
   * The data type, such as int4, text, or bool.
   * 
   * @example
   * int4
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      nullable: 'nullable',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      nullable: 'boolean',
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

export class ExecuteStatementResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * The **column metadata**.
   */
  columnMetadata?: ExecuteStatementResponseBodyDataResultsColumnMetadata[];
  /**
   * @remarks
   * The number of rows returned.
   * 
   * @example
   * 25
   */
  count?: number;
  /**
   * @remarks
   * The error code for the SQL statement.
   * 
   * @example
   * SQL_ERROR
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message for the SQL statement.
   * 
   * @example
   * ERROR: relation \\"non_existent_table\\" does not exist\\n  Position: 15
   */
  errorMessage?: string;
  /**
   * @remarks
   * **Query ID**
   * 
   * @example
   * E3F4B2A7-1234-5678-9ABC-DEF012345678
   */
  queryId?: string;
  /**
   * @remarks
   * The set of query result rows. Each row is an array of strings. All values are serialized as strings, and NULL values are represented as \\N.
   */
  records?: string[][];
  /**
   * @remarks
   * The SQL statement that is actually executed.
   * 
   * @example
   * select * from test_table limit 10;
   */
  sql?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates whether the result is truncated. The value is true if the result exceeds MaxResults.
   */
  truncated?: boolean;
  /**
   * @remarks
   * The number of rows affected by the INSERT, UPDATE, or DELETE statement.
   * 
   * @example
   * 10
   */
  updateCount?: number;
  static names(): { [key: string]: string } {
    return {
      columnMetadata: 'columnMetadata',
      count: 'count',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      queryId: 'queryId',
      records: 'records',
      sql: 'sql',
      success: 'success',
      truncated: 'truncated',
      updateCount: 'updateCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnMetadata: { 'type': 'array', 'itemType': ExecuteStatementResponseBodyDataResultsColumnMetadata },
      count: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      queryId: 'string',
      records: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
      sql: 'string',
      success: 'boolean',
      truncated: 'boolean',
      updateCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.columnMetadata)) {
      $dara.Model.validateArray(this.columnMetadata);
    }
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteStatementResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error code. This field is empty if the request is successful.
   * 
   * @example
   * InvalidParameterValue
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. This field is empty if the request is successful.
   * 
   * @example
   * Invalid parameter value, such as an empty or excessively long SQL statement
   */
  errorMessage?: string;
  /**
   * @remarks
   * The list of execution results. The length is currently fixed to 1. If multiple SELECT queries are executed, only the result of the last SELECT query is returned.
   */
  results?: ExecuteStatementResponseBodyDataResults[];
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      results: 'results',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      results: { 'type': 'array', 'itemType': ExecuteStatementResponseBodyDataResults },
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

export class ExecuteStatementResponseBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether OpenAPI SQL execution is allowed. Valid values: true: Allowed. false: Not allowed.
   */
  data?: ExecuteStatementResponseBodyData;
  /**
   * @remarks
   * The error code. This field is empty if the request is successful.
   * 
   * @example
   * InvalidParameterValue
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. This field is empty if the request is successful.
   * 
   * @example
   * Invalid parameter value, such as an empty or excessively long SQL statement
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 819A7F0F-2951-540F-BD94-6A41ECF0281F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ExecuteStatementResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

