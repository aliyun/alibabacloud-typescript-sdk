// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTensorboardRequest extends $dara.Model {
  /**
   * @remarks
   * Visibility of the task. Valid values:
   * 
   * - PUBLIC: Visible to all users in this workspace.
   * 
   * - PRIVATE: Visible only to you and administrators in this workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * Maximum runtime. Unit: minutes.
   * 
   * @example
   * 300
   */
  maxRunningTimeMinutes?: number;
  priority?: string;
  /**
   * @remarks
   * Workspace ID. For more information about how to get a workspace ID, see [ListWorkspaces]().
   * 
   * @example
   * 380
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      maxRunningTimeMinutes: 'MaxRunningTimeMinutes',
      priority: 'Priority',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      maxRunningTimeMinutes: 'number',
      priority: 'string',
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

