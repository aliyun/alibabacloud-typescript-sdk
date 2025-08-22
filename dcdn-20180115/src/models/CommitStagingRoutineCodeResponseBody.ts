// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommitStagingRoutineCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The version number of the code.
   * 
   * @example
   * 1620876959997924701
   */
  content?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5CC228B4-7A67-4016-9C9F-4A4133494A91
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

