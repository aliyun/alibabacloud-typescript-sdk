// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidationErrorDetails extends $dara.Model {
  /**
   * @remarks
   * The number of the column at which the error starts.
   * 
   * @example
   * 10
   */
  columnNumber?: string;
  /**
   * @remarks
   * The number of the column at which the error ends.
   * 
   * @example
   * 5
   */
  endColumnNumber?: string;
  /**
   * @remarks
   * The number of the row at which the error ends.
   * 
   * @example
   * 4
   */
  endLineNumber?: string;
  /**
   * @remarks
   * The number the row at which the error starts.
   * 
   * @example
   * 3
   */
  lineNumber?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * “”
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      columnNumber: 'columnNumber',
      endColumnNumber: 'endColumnNumber',
      endLineNumber: 'endLineNumber',
      lineNumber: 'lineNumber',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnNumber: 'string',
      endColumnNumber: 'string',
      endLineNumber: 'string',
      lineNumber: 'string',
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

