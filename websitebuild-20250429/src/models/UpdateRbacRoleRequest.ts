// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRbacRoleRequest extends $dara.Model {
  /**
   * @example
   * WD20250814102215000001
   */
  bizId?: string;
  /**
   * @example
   * {"name":"customer","label":"xx1
   * ","is_default":true,"is_system":false}
   */
  roleData?: string;
  /**
   * @example
   * agent@ly-online
   */
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      roleData: 'RoleData',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      roleData: 'string',
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

