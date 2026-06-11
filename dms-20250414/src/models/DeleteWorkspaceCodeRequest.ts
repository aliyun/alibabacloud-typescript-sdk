// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWorkspaceCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The full path of the code file or directory. The path must be prefixed with `/Workspace/code/`.
   * 
   * This parameter is required.
   * 
   * @example
   * /Workspace/code/default/test.ipynb
   */
  path?: string;
  /**
   * @remarks
   * The repository information.
   * 
   * @example
   * database/adb
   */
  repo?: string;
  /**
   * @remarks
   * Specifies whether the item to delete is a symbolic link.
   * 
   * @example
   * false
   */
  symlink?: boolean;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 12****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      repo: 'Repo',
      symlink: 'Symlink',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      repo: 'string',
      symlink: 'boolean',
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

