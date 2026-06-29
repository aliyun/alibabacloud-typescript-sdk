// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWorkNodeWorkforceRequest extends $dara.Model {
  /**
   * @remarks
   * User List.
   */
  userIds?: number[];
  static names(): { [key: string]: string } {
    return {
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

