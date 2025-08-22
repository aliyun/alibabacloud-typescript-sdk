// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditRoutineConfResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the execution errors and the version number of the latest environment configurations.
   */
  content?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BAECB354-6D42-42C1-87DA-C9992EF1E7C8
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

