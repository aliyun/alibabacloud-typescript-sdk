// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

