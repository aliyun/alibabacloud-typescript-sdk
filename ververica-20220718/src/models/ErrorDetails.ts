// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ErrorDetails extends $dara.Model {
  columnNumber?: string;
  endColumnNumber?: string;
  endLineNumber?: string;
  invalidflinkConf?: string[];
  lineNumber?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      columnNumber: 'columnNumber',
      endColumnNumber: 'endColumnNumber',
      endLineNumber: 'endLineNumber',
      invalidflinkConf: 'invalidflinkConf',
      lineNumber: 'lineNumber',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnNumber: 'string',
      endColumnNumber: 'string',
      endLineNumber: 'string',
      invalidflinkConf: { 'type': 'array', 'itemType': 'string' },
      lineNumber: 'string',
      message: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.invalidflinkConf)) {
      $dara.Model.validateArray(this.invalidflinkConf);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

