// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * Financial analysis group project data development
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the development environment. Valid values:
   * 
   * *   true: enables the development environment. In this case, the development environment is isolated from the production environment in the workspace.
   * *   false: disables the development environment. In this case, only the production environment is used in the workspace.
   * 
   * @example
   * true
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to disable the Develop role. Valid values:
   * 
   * *   false (default)
   * *   true
   * 
   * Note: If you disable the Develop role, you cannot assume the Develop role to develop nodes in workflows and edit node code. The Develop role cannot be enabled again after it is disabled.
   * 
   * @example
   * true
   */
  devRoleDisabled?: boolean;
  /**
   * @remarks
   * The display name of the workspace.
   * 
   * @example
   * Sora financial analysis Space
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://dataworks.console.aliyun.com/workspace/list) and go to the workspace management page to obtain the ID.
   * 
   * This parameter is used to determine the DataWorks workspaces used for this API call.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  id?: number;
  /**
   * @remarks
   * Specifies whether to enable scheduling of Platform for AI (PAI) tasks. Valid values:
   * 
   * *   true: enables scheduling of PAI tasks. In this case, you can create a PAI node in a DataWorks workspace and configure scheduling properties for the node to implement periodic scheduling of PAI tasks.
   * *   false: disables scheduling of PAI tasks.
   * 
   * @example
   * true
   */
  paiTaskEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to disable or enable the workspace. Valid values:
   * 
   * *   Available: enables the workspace.
   * *   Forbidden: disables the workspace.
   * 
   * @example
   * Forbidden
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      devEnvironmentEnabled: 'DevEnvironmentEnabled',
      devRoleDisabled: 'DevRoleDisabled',
      displayName: 'DisplayName',
      id: 'Id',
      paiTaskEnabled: 'PaiTaskEnabled',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      devEnvironmentEnabled: 'boolean',
      devRoleDisabled: 'boolean',
      displayName: 'string',
      id: 'number',
      paiTaskEnabled: 'boolean',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

