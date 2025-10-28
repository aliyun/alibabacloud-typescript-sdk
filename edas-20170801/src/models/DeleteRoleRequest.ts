// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the RAM role.
   * 
   * This parameter is required.
   * 
   * @example
   * 99999999
   */
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

