// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetYikeUserRoleRequest extends $dara.Model {
  /**
   * @example
   * Admin
   */
  roleName?: string;
  /**
   * @example
   * id
   */
  yikeUserId?: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
      yikeUserId: 'YikeUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
      yikeUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

