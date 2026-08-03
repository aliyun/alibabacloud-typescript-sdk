// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the workspace.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the workspace where the service resides.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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

