// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Identity } from "./Identity";


export class CancelAssignRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier. You can cancel only the role assigned to a user.
   * 
   * This parameter is required.
   */
  identity?: Identity;
  /**
   * @remarks
   * The ID of the resource that the role manages. Set the value to a group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 105***b82
   */
  manageResourceId?: string;
  /**
   * @remarks
   * The type of the resource that the role manages. Set the value to RT_Group, which specifies group.
   * 
   * This parameter is required.
   * 
   * @example
   * RT_Group
   */
  manageResourceType?: string;
  /**
   * @remarks
   * The ID of the role to be canceled. Set the value to SystemGroupAdmin, which is the ID of the group administrator role.
   * 
   * This parameter is required.
   * 
   * @example
   * SystemGroupAdmin
   */
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      identity: 'identity',
      manageResourceId: 'manage_resource_id',
      manageResourceType: 'manage_resource_type',
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identity: Identity,
      manageResourceId: 'string',
      manageResourceType: 'string',
      roleId: 'string',
    };
  }

  validate() {
    if(this.identity && typeof (this.identity as any).validate === 'function') {
      (this.identity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

