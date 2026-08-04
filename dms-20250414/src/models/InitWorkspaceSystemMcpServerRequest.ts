// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitWorkspaceSystemMcpServerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Data Agent workspace for which to initialize system MCP services. The caller must have at least MEMBER permissions on the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-1
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

