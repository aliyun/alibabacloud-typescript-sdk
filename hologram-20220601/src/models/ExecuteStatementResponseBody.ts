// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteStatementResponseBodyDataResultsColumnMetadata extends $dara.Model {
  /**
   * @example
   * id
   */
  name?: string;
  nullable?: boolean;
  /**
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
  columnMetadata?: ExecuteStatementResponseBodyDataResultsColumnMetadata[];
  count?: number;
  errorCode?: string;
  errorMessage?: string;
  /**
   * @remarks
   * **Query ID**
   * 
   * @example
   * E3F4B2A7-1234-5678-9ABC-DEF012345678
   */
  queryId?: string;
  records?: string[][];
  sql?: string;
  success?: boolean;
  truncated?: boolean;
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
   * @example
   * InvalidParameterValue
   */
  errorCode?: string;
  errorMessage?: string;
  results?: ExecuteStatementResponseBodyDataResults[];
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
  data?: ExecuteStatementResponseBodyData;
  /**
   * @example
   * InvalidParameterValue
   */
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 819A7F0F-2951-540F-BD94-6A41ECF0281F
   */
  requestId?: string;
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

