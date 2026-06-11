// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceCodeRequest extends $dara.Model {
  /**
   * @remarks
   * If the file is in JSON format, set this parameter to `true` to convert the returned content to YAML format.
   * 
   * @example
   * false
   */
  iac?: string;
  /**
   * @remarks
   * The path to the code file. For example: `/Workspace/code/test.py`.
   * 
   * This parameter is required.
   * 
   * @example
   * /Workspace/code/default/test.ipynb
   */
  path?: string;
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
      iac: 'Iac',
      path: 'Path',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iac: 'string',
      path: 'string',
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

