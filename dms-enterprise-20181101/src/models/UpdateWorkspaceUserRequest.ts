// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkspaceUserRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  dmsUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11,12
   */
  roleIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dmsUserId: 'DmsUserId',
      roleIds: 'RoleIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dmsUserId: 'string',
      roleIds: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

