// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEmployeesToCustomRoleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  roleId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * **if can be null:**
   * false
   */
  userIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      roleId: 'role_id',
      userIdListShrink: 'user_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'string',
      userIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

