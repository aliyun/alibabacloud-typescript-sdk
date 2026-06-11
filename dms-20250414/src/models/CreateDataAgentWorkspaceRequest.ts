// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  isSessionShareEnabled?: boolean;
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * Space for test
   */
  workspaceDesc?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * workspaceTest
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      DMSUnit: 'DMSUnit',
      isSessionShareEnabled: 'IsSessionShareEnabled',
      workspaceDesc: 'WorkspaceDesc',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DMSUnit: 'string',
      isSessionShareEnabled: 'boolean',
      workspaceDesc: 'string',
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

