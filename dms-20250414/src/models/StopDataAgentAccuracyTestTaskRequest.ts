// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDataAgentAccuracyTestTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the accuracy test task.
   * 
   * @example
   * 692abb8f-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  accuracyTestTaskId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 8wfig6l33n4f4xxxxxxxxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accuracyTestTaskId: 'AccuracyTestTaskId',
      regionId: 'RegionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accuracyTestTaskId: 'string',
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

