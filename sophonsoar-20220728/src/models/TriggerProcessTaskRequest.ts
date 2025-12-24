// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerProcessTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the action. Valid values:
   * 
   * *   **remove**: cancels blocking or isolation.
   * *   **retry**: submits the task again.
   * 
   * This parameter is required.
   * 
   * @example
   * remove
   */
  actionType?: string;
  /**
   * @remarks
   * The ID of the handling task.
   * 
   * >  You can call the [DescribeProcessTasks](~~DescribeProcessTasks~~) operation to query the IDs of handling tasks.
   * 
   * This parameter is required.
   * 
   * @example
   * 15355xxxxxx82894882
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

