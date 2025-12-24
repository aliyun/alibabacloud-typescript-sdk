// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyPythonFileResponseBodySyntax extends $dara.Model {
  /**
   * @remarks
   * The number that indicates the end column of the error code.
   * 
   * @example
   * 5
   */
  endColumn?: number;
  /**
   * @remarks
   * The number that indicates the end line of the error code.
   * 
   * @example
   * 5
   */
  endLineNumber?: number;
  /**
   * @remarks
   * The error message for the error code.
   * 
   * @example
   * undefined name \\"ab\\"
   */
  message?: string;
  /**
   * @remarks
   * The severity level of the error code. Valid values:
   * 
   * *   4: moderate
   * *   8: serious
   * 
   * @example
   * 4
   */
  severity?: number;
  /**
   * @remarks
   * The number that indicates the start column of the error code.
   * 
   * @example
   * 2
   */
  startColumn?: number;
  /**
   * @remarks
   * The number that indicates the start line of the error code.
   * 
   * @example
   * 2
   */
  startLineNumber?: number;
  static names(): { [key: string]: string } {
    return {
      endColumn: 'EndColumn',
      endLineNumber: 'EndLineNumber',
      message: 'Message',
      severity: 'Severity',
      startColumn: 'StartColumn',
      startLineNumber: 'StartLineNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endColumn: 'number',
      endLineNumber: 'number',
      message: 'string',
      severity: 'number',
      startColumn: 'number',
      startLineNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPythonFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F72685FB-A6E6-5A9A-97F7-6DC1056E63CE
   */
  requestId?: string;
  /**
   * @remarks
   * The verification result. If the parameter is left empty, the syntax of the code snippet is correct.
   */
  syntax?: VerifyPythonFileResponseBodySyntax[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      syntax: 'Syntax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      syntax: { 'type': 'array', 'itemType': VerifyPythonFileResponseBodySyntax },
    };
  }

  validate() {
    if(Array.isArray(this.syntax)) {
      $dara.Model.validateArray(this.syntax);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

