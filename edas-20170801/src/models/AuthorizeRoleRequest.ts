// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the role to be assigned. If you want to assign multiple roles to the specified RAM user, separate the IDs of the roles with semicolons (;). If you leave this parameter empty, the roles assigned to the specified RAM user are revoked.
   * 
   * This parameter is required.
   * 
   * @example
   * 1;2
   */
  roleIds?: string;
  /**
   * @remarks
   * The ID of the RAM user to which you want to assign the roles.
   * 
   * This parameter is required.
   * 
   * @example
   * test@133******
   */
  targetUserId?: string;
  static names(): { [key: string]: string } {
    return {
      roleIds: 'RoleIds',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleIds: 'string',
      targetUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

