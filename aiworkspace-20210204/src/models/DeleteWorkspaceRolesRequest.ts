// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWorkspaceRolesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the roles to delete.
   */
  roleIds?: string[];
  static names(): { [key: string]: string } {
    return {
      roleIds: 'RoleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.roleIds)) {
      $dara.Model.validateArray(this.roleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

