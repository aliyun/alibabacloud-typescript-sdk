// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadRoutineCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content returned, such as the code version number and information about the code upload.
   */
  content?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DFA2027F-86C0-4421-9593-581A7993696C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.content) {
      $dara.Model.validateMap(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

