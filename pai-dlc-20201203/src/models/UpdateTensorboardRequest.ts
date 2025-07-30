// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTensorboardRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the jobs. Valid values:
   * 
   * *   PUBLIC: The jobs are public in the workspace.
   * *   PRIVATE: The jobs are visible only to you and the administrator of the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The maximum running time. Unit: minutes.
   * 
   * @example
   * 300
   */
  maxRunningTimeMinutes?: number;
  priority?: string;
  /**
   * @remarks
   * The workspace ID.
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

