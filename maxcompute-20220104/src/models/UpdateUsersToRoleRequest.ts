// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUsersToRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The accounts.
   */
  add?: string[];
  /**
   * @remarks
   * The accounts.
   */
  remove?: string[];
  static names(): { [key: string]: string } {
    return {
      add: 'add',
      remove: 'remove',
    };
  }

  static types(): { [key: string]: any } {
    return {
      add: { 'type': 'array', 'itemType': 'string' },
      remove: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.add)) {
      $dara.Model.validateArray(this.add);
    }
    if(Array.isArray(this.remove)) {
      $dara.Model.validateArray(this.remove);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

