// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgUserGroupDeleteRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the user group.
   */
  ids?: number[];
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

