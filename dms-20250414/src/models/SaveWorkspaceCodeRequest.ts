// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveWorkspaceCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The code content.
   * 
   * This parameter is required.
   * 
   * @example
   * print(123)
   */
  content?: string;
  /**
   * @remarks
   * Specifies whether to forcibly overwrite the file regardless of whether it has been modified by others.
   * 
   * @example
   * True
   */
  force?: boolean;
  /**
   * @remarks
   * Specifies whether the file is an infrastructure as code template file. Set this parameter to true for YAML configuration files edited through the visual editor.
   * 
   * @example
   * false
   */
  iac?: boolean;
  /**
   * @remarks
   * The file modification time. The GetWorkspaceCode operation returns this mtime value. When calling SaveWorkspaceCode, include this mtime to compare against the server-side value. If the mtime does not match, the save fails, indicating that the server-side version has changed.
   * 
   * @example
   * 2026-01-01T10:11:12Z
   */
  mtime?: string;
  /**
   * @remarks
   * The file path to save.
   * 
   * This parameter is required.
   * 
   * @example
   * /Workspace/code/test.py
   */
  path?: string;
  /**
   * @remarks
   * The repository information. Pass this parameter when creating a git repo directory during the save action.
   * 
   * @example
   * git@codeup.aliyun.com:test/abc.git
   */
  repo?: string;
  /**
   * @remarks
   * The ID of the workspace to publish (numeric ID).
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      force: 'Force',
      iac: 'Iac',
      mtime: 'Mtime',
      path: 'Path',
      repo: 'Repo',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      force: 'boolean',
      iac: 'boolean',
      mtime: 'string',
      path: 'string',
      repo: 'string',
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

