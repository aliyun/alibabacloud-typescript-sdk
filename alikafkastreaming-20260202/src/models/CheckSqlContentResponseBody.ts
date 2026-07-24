// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckSqlContentResponseBodyDataErrorList extends $dara.Model {
  codeSnippet?: string;
  columnNumber?: number;
  endColumnNumber?: number;
  endLineNumber?: number;
  errorType?: string;
  lineNumber?: number;
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
  code?: number;
  data?: CheckSqlContentResponseBodyData;
  requestId?: string;
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

