// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEmployeesFromCustomRoleRequest extends $dara.Model {
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
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      roleId: 'role_id',
      userIdList: 'user_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'string',
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userIdList)) {
      $dara.Model.validateArray(this.userIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

