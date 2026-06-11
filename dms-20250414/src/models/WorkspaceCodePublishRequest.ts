// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WorkspaceCodePublishRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration for the code deployment, specified as a JSON string. The `repos` array identifies the Git repositories in the workspace and specifies the branch to deploy. The `exclude` array lists directories to skip during the deployment.
   * 
   * This parameter is required.
   * 
   * @example
   * {"repos":[{"repo":"git@xxxx.git", "branch":"master"}], "exclude":["/.dms", "/username"]}
   */
  config?: string;
  /**
   * @remarks
   * The workspace ID (numeric ID) for the code deployment.
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

