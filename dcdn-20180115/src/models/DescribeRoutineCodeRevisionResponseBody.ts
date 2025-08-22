// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRoutineCodeRevisionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the JavaScript code version.
   */
  content?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D24F0C48-1B27-4C58-8B84-1A0C001A514E
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

