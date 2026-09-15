// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckSqlContentResponseBodyDataErrorList extends $dara.Model {
  /**
   * @example
   * SELECT FROM source_table
   */
  codeSnippet?: string;
  /**
   * @example
   * 8
   */
  columnNumber?: number;
  /**
   * @example
   * 12
   */
  endColumnNumber?: number;
  /**
   * @example
   * 1
   */
  endLineNumber?: number;
  /**
   * @example
   * SYNTAX_ERROR
   */
  errorType?: string;
  /**
   * @example
   * 1
   */
  lineNumber?: number;
  /**
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
  errorList?: CheckSqlContentResponseBodyDataErrorList[];
  /**
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
   * @example
   * 200
   */
  code?: number;
  data?: CheckSqlContentResponseBodyData;
  /**
   * @example
   * 062D8E8B-8D47-5DCC-BB12-5A1D93C3A66B
   */
  requestId?: string;
  /**
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

