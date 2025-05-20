// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Identity } from "./Identity";


export class AssignRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of a user. The group administrator role can only be assigned to a user.
   * 
   * This parameter is required.
   */
  identity?: Identity;
  /**
   * @remarks
   * The ID of the resource that the role can manage. You can only set this parameter to the ID of a group.
   * 
   * This parameter is required.
   * 
   * @example
   * 105***b82
   */
  manageResourceId?: string;
  /**
   * @remarks
   * The type of the resource that the role can manage. Valid value: RT_Group.
   * 
   * This parameter is required.
   * 
   * @example
   * RT_Group
   */
  manageResourceType?: string;
  /**
   * @remarks
   * The ID of the role that is assigned to a user. Valid value: SystemGroupAdmin.
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

