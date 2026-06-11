// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataAgentSpaceInfoRequest extends $dara.Model {
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
   * Specifies whether to enable session sharing for the workspace. Valid values: true and false.
   * 
   * @example
   * true
   */
  isSessionShareEnabled?: boolean;
  /**
   * @remarks
   * The new description for the workspace.
   * 
   * @example
   * space for test new
   */
  workspaceDesc?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 20923*****7291
   */
  workspaceId?: string;
  /**
   * @remarks
   * The new name for the workspace.
   * 
   * @example
   * yunqitest_v2
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      DMSUnit: 'DMSUnit',
      isSessionShareEnabled: 'IsSessionShareEnabled',
      workspaceDesc: 'WorkspaceDesc',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

