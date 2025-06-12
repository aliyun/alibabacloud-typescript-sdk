// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRolesResponseBodyData extends $dara.Model {
  /**
   * @example
   * Admin
   */
  name?: string;
  /**
   * @example
   * Admin@ccc-test
   */
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

