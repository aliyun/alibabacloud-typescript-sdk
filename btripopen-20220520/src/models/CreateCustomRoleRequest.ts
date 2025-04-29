// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomRoleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123abc
   */
  roleId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleId: 'role_id',
      roleName: 'role_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

