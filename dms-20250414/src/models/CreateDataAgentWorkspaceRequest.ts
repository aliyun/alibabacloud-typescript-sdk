// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace configurations.
   * 
   * @example
   * {sql_config:null}
   */
  config?: string;
  /**
   * @remarks
   * The current DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * Specifies whether sessions within the workspace are shared.
   * 
   * @example
   * true
   */
  isSessionShareEnabled?: boolean;
  /**
   * @remarks
   * The description of the collaborative workspace.
   * 
   * @example
   * Space for test
   */
  workspaceDesc?: string;
  /**
   * @remarks
   * The name of the collaborative workspace.
   * 
   * @example
   * workspaceTest
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      DMSUnit: 'DMSUnit',
      isSessionShareEnabled: 'IsSessionShareEnabled',
      workspaceDesc: 'WorkspaceDesc',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
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

