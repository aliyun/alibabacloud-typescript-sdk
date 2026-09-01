// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyPythonFileResponseBodySyntax extends $dara.Model {
  /**
   * @remarks
   * The ending column number of the code that contains an error.
   * 
   * @example
   * 5
   */
  endColumn?: number;
  /**
   * @remarks
   * The ending line number of the code that contains an error.
   * 
   * @example
   * 5
   */
  endLineNumber?: number;
  /**
   * @remarks
   * The error message for the code.
   * 
   * @example
   * undefined name \\"ab\\"
   */
  message?: string;
  /**
   * @remarks
   * The error level of the code.
   * 
   * - 4: General error
   * 
   * - 8: Critical error
   * 
   * @example
   * 4
   */
  severity?: number;
  /**
   * @remarks
   * The starting column number of the code that contains an error.
   * 
   * @example
   * 2
   */
  startColumn?: number;
  /**
   * @remarks
   * The starting line number of the code that contains an error.
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
   * The request ID. Alibaba Cloud generates a unique ID for each request. Use this ID to troubleshoot issues.
   * 
   * @example
   * F72685FB-A6E6-5A9A-97F7-6DC1056E63CE
   */
  requestId?: string;
  /**
   * @remarks
   * The result set of the Python code verification. If this parameter is empty, the code syntax is correct.
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

