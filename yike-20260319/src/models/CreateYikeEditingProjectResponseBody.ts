// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateYikeEditingProjectResponseBody extends $dara.Model {
  /**
   * @example
   * ***545bc38a94aa9840c89aff017b***
   */
  editingProjectId?: string;
  /**
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      editingProjectId: 'EditingProjectId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingProjectId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

