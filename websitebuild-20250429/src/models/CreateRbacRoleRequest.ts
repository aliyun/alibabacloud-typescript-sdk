// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRbacRoleRequest extends $dara.Model {
  /**
   * @example
   * WS20250731233102000001
   */
  bizId?: string;
  /**
   * @example
   * {"name":"customer","label":"xx
   * ","is_default":true,"is_system":false}
   */
  roleData?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      roleData: 'RoleData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      roleData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

