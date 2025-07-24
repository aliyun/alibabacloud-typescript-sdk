// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSqlStatementResponseBodyDataSqlOutputs extends $dara.Model {
  /**
   * @remarks
   * The queried data, which is a string in the JSON format.
   * 
   * @example
   * [{\\"values\\":[\\"test_db\\",\\"test_table\\",false]}
   */
  rows?: string;
  rowsFilePath?: string;
  /**
   * @remarks
   * The information about the schema, which is a string in the JSON format.
   * 
   * @example
   * {\\"type\\":\\"struct\\",\\"fields\\":[{\\"name\\":\\"namespace\\",\\"type\\":\\"string\\",\\"nullable\\":false,\\"metadata\\":{}},{\\"name\\":\\"tableName\\",\\"type\\":\\"string\\",\\"nullable\\":false,\\"metadata\\":{}},{\\"name\\":\\"isTemporary\\",\\"type\\":\\"boolean\\",\\"nullable\\":false,\\"metadata\\":{}}]}
   */
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      rows: 'rows',
      rowsFilePath: 'rowsFilePath',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rows: 'string',
      rowsFilePath: 'string',
      schema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlStatementResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of time that is consumed by SQL queries.
   */
  executionTime?: number[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ERROR-102
   */
  sqlErrorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * error message
   */
  sqlErrorMessage?: string;
  /**
   * @remarks
   * The query results.
   */
  sqlOutputs?: GetSqlStatementResponseBodyDataSqlOutputs[];
  /**
   * @remarks
   * The query status.
   * 
   * Valid values:
   * 
   * *   running
   * *   available
   * *   cancelled
   * *   error
   * *   cancelling
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * st-1231311abadfaa
   */
  statementId?: string;
  static names(): { [key: string]: string } {
    return {
      executionTime: 'executionTime',
      sqlErrorCode: 'sqlErrorCode',
      sqlErrorMessage: 'sqlErrorMessage',
      sqlOutputs: 'sqlOutputs',
      state: 'state',
      statementId: 'statementId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionTime: { 'type': 'array', 'itemType': 'number' },
      sqlErrorCode: 'string',
      sqlErrorMessage: 'string',
      sqlOutputs: { 'type': 'array', 'itemType': GetSqlStatementResponseBodyDataSqlOutputs },
      state: 'string',
      statementId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.executionTime)) {
      $dara.Model.validateArray(this.executionTime);
    }
    if(Array.isArray(this.sqlOutputs)) {
      $dara.Model.validateArray(this.sqlOutputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlStatementResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetSqlStatementResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSqlStatementResponseBodyData,
      requestId: 'string',
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

