// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditWorkspaceQueueRequestResourceSpec extends $dara.Model {
  /**
   * @example
   * 1000
   */
  cu?: number;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

