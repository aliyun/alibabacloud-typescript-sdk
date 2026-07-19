// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRbacRoleRequest extends $dara.Model {
  /**
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @example
   * 75b2f16f-35a5-4e90-949f-295ea14a4dc8
   */
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
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

