// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEmployeesFromCustomRoleShrinkRequest extends $dara.Model {
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

