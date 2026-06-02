// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceCodeRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  iac?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /Workspace/code/default/test.ipynb
   */
  path?: string;
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

