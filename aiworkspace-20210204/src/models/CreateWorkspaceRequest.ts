// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the workspace. The description can be up to 80 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The display name of the workspace. You can set it based on the purpose of the workspace. If left empty, the name of the workspace is used.
   * 
   * @example
   * display name
   */
  displayName?: string;
  /**
   * @remarks
   * The environment of the workspace.
   * 
   * *   Workspaces in basic mode can run only in the production environment (prod).
   * *   Workspaces in standard mode can run in both the development and production environments (dev and prod).
   * 
   * This parameter is required.
   */
  envTypes?: string[];
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the workspace. Format:
   * 
   * *   The name must be 3 to 23 characters in length, and can contain letters, underscores (_), and digits.
   * *   The name must start with a letter.
   * *   It must be unique in the current region.
   * 
   * This parameter is required.
   * 
   * @example
   * workspace_example
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      envTypes: 'EnvTypes',
      resourceGroupId: 'ResourceGroupId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      envTypes: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.envTypes)) {
      $dara.Model.validateArray(this.envTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

