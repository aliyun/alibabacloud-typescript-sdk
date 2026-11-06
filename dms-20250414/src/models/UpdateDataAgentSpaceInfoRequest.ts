// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataAgentSpaceInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace configuration items.
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
   * Specifies whether to enable the session sharing feature for the workspace.
   * 
   * @example
   * true
   */
  isSessionShareEnabled?: boolean;
  /**
   * @remarks
   * The new description of the workspace.
   * 
   * @example
   * space for test new
   */
  workspaceDesc?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 20923*****7291
   */
  workspaceId?: string;
  /**
   * @remarks
   * The new name of the workspace.
   * 
   * @example
   * yunqitest_v2
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      DMSUnit: 'DMSUnit',
      isSessionShareEnabled: 'IsSessionShareEnabled',
      workspaceDesc: 'WorkspaceDesc',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      DMSUnit: 'string',
      isSessionShareEnabled: 'boolean',
      workspaceDesc: 'string',
      workspaceId: 'string',
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

