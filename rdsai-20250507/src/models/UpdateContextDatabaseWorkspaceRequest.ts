// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContextDatabaseWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the target workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-as1llqmkol****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The new name of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * my-workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

