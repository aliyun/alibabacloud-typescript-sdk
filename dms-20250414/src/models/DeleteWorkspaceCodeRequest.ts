// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWorkspaceCodeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /Workspace/code/default/test.ipynb
   */
  path?: string;
  /**
   * @example
   * database/adb
   */
  repo?: string;
  /**
   * @example
   * false
   */
  symlink?: boolean;
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

