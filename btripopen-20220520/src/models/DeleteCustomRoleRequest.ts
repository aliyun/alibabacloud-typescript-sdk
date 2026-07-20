// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomRoleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

