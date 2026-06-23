// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectRequest extends $dara.Model {
  /**
   * @remarks
   * An optional description of the workspace.
   * 
   * @example
   * Financial analysis group project data development
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the development environment. Valid values:
   * 
   * - `true`: Enables the development environment for the workspace and isolates it from the production environment.
   * 
   * - `false`: Uses only the production environment.
   * 
   * **Important**: You cannot disable the development environment after you enable it.
   * 
   * @example
   * true
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to disable the development role, which grants permissions for workflow and code editing. Valid values:
   * 
   * - `false`: Enables the development role. This is the default value.
   * 
   * - `true`: Disables the development role.
   * 
   * **Important**: After you enable the development role (by setting this parameter to `false`), you cannot disable it.
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
   * The ID of the DataWorks workspace. To find the workspace ID, log in to the [DataWorks console](https://dataworks.console.aliyun.com/workspace/list) and go to the Workspace Management page.
   * 
   * This parameter specifies the DataWorks workspace to use for the API call.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  id?: number;
  /**
   * @remarks
   * Specifies whether to enable task scheduling for Machine Learning Platform for AI (PAI). Valid values:
   * 
   * - `true`: You can create PAI nodes in the DataWorks workspace and run them on a schedule.
   * 
   * - `false`: Disables task scheduling for PAI.
   * 
   * @example
   * true
   */
  paiTaskEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable or disable the workspace. Valid values:
   * 
   * - `Available`: Enables the workspace.
   * 
   * - `Forbidden`: Disables the workspace.
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

