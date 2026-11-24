// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckSqlContentResponseBodyDataErrorList extends $dara.Model {
  /**
   * @remarks
   * The SQL snippet where the error occurred.
   * 
   * @example
   * SELECT FROM source_table
   */
  codeSnippet?: string;
  /**
   * @remarks
   * The starting column number of the error.
   * 
   * @example
   * 8
   */
  columnNumber?: number;
  /**
   * @remarks
   * The ending column number of the error.
   * 
   * @example
   * 12
   */
  endColumnNumber?: number;
  /**
   * @remarks
   * The ending line number of the error.
   * 
   * @example
   * 1
   */
  endLineNumber?: number;
  /**
   * @remarks
   * The error type.
   * 
   * @example
   * SYNTAX_ERROR
   */
  errorType?: string;
  /**
   * @remarks
   * The starting line number of the error.
   * 
   * @example
   * 1
   */
  lineNumber?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * SQL parse failed near FROM
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      codeSnippet: 'CodeSnippet',
      columnNumber: 'ColumnNumber',
      endColumnNumber: 'EndColumnNumber',
      endLineNumber: 'EndLineNumber',
      errorType: 'ErrorType',
      lineNumber: 'LineNumber',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeSnippet: 'string',
      columnNumber: 'number',
      endColumnNumber: 'number',
      endLineNumber: 'number',
      errorType: 'string',
      lineNumber: 'number',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSqlContentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of SQL validation errors.
   */
  errorList?: CheckSqlContentResponseBodyDataErrorList[];
  /**
   * @remarks
   * Indicates whether the SQL statement passed the validation.
   * 
   * @example
   * false
   */
  valid?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorList: 'ErrorList',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorList: { 'type': 'array', 'itemType': CheckSqlContentResponseBodyDataErrorList },
      valid: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.errorList)) {
      $dara.Model.validateArray(this.errorList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSqlContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: CheckSqlContentResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 062D8E8B-8D47-5DCC-BB12-5A1D93C3A66B
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
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CheckSqlContentResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

