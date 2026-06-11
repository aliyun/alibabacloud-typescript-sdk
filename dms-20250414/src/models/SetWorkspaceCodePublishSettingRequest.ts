// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetWorkspaceCodePublishSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The deployment configuration, provided as a JSON string. The repos array specifies the Git repositories in the workspace, primarily for setting the branch for publishing. The exclude parameter specifies which directories to skip.
   * 
   * This parameter is required.
   * 
   * @example
   * {"repos":[{"repo":"git@xxxx.git", "branch":"master"}], "exclude":["/.dms", "/username"]}
   */
  config?: string;
  /**
   * @remarks
   * The numeric ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
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

