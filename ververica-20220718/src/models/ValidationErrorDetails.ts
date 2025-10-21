// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidationErrorDetails extends $dara.Model {
  columnNumber?: string;
  endColumnNumber?: string;
  endLineNumber?: string;
  lineNumber?: string;
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

