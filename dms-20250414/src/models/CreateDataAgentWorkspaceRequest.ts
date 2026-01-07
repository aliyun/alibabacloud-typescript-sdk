// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentWorkspaceRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @example
   * Space for test
   */
  workspaceDesc?: string;
  /**
   * @example
   * workspaceTest
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      DMSUnit: 'DMSUnit',
      workspaceDesc: 'WorkspaceDesc',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DMSUnit: 'string',
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

