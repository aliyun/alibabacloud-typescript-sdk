// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchSyntheticTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to start or stop the task. Valid values:
   * 
   * *   **0**: stops the task
   * *   **1**: starts the task
   * 
   * @example
   * 0
   */
  switchStatus?: number;
  /**
   * @remarks
   * The task IDs. You can specify up to 30 task IDs at a time.
   */
  taskIds?: number[];
  static names(): { [key: string]: string } {
    return {
      switchStatus: 'SwitchStatus',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchStatus: 'number',
      taskIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

