// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUsersFromGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The account IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * [user_d6sbsuumeta4h66ec3il7yxxxx}
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      userIds: 'userIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userIds: { 'type': 'array', 'itemType': 'string' },
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

