// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * The name must be 1 to 64 characters in length, and can contain letters, digits, periods (.), and hyphens (-).
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

