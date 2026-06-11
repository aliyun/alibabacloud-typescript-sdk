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
   * Specifies whether to forcibly overwrite the file. If set to true, the file is overwritten regardless of whether it has been modified by others.
   * 
   * @example
   * True
   */
  force?: boolean;
  /**
   * @remarks
   * Specifies whether the file is an infrastructure as code template file. Set this parameter to true for YAML configuration files that are edited in the visual editor.
   * 
   * @example
   * false
   */
  iac?: boolean;
  /**
   * @remarks
   * The file modification time. The GetWorkspaceCode operation returns this mtime value. When you call SaveWorkspaceCode, include this mtime value to check whether the file has been changed on the server. If the mtime values do not match, the save operation fails, which indicates that the server-side version has been modified.
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
   * The repository information. Specify this parameter when creating a git repository directory during the save operation.
   * 
   * @example
   * git@codeup.aliyun.com:test/abc.git
   */
  repo?: string;
  /**
   * @remarks
   * The workspace ID (numeric ID).
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

