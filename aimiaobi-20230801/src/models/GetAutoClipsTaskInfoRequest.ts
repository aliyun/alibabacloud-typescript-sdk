// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoClipsTaskInfoRequest extends $dara.Model {
  showAnalysisResults?: boolean;
  showResourceInfo?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0dbf1055f8a2475d99904c3b76a0ffba
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      showAnalysisResults: 'ShowAnalysisResults',
      showResourceInfo: 'ShowResourceInfo',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      showAnalysisResults: 'boolean',
      showResourceInfo: 'boolean',
      taskId: 'string',
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

