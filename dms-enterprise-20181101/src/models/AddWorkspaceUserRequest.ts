// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWorkspaceUserRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  dmsUserIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 31****
   */
  roleId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INNER
   */
  roleSource?: string;
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
      dmsUserIds: 'DmsUserIds',
      roleId: 'RoleId',
      roleSource: 'RoleSource',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dmsUserIds: 'string',
      roleId: 'string',
      roleSource: 'string',
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

