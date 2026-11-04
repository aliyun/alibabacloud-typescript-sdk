// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRbacRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID of the application instance.
   * 
   * @example
   * WD20250821161210000001
   */
  bizId?: string;
  /**
   * @remarks
   * The storage management role ID, including predefined and custom roles:
   * 
   * - 25: Storage management administrator (predefined role)
   * - 26: Developer (predefined role)
   * - 27: Analyst (predefined role)
   * - 30: Viewer (predefined role)
   * - Custom role: the role ID of the custom role.
   * 
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

