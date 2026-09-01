// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerProcessTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the handling action. Valid values:
   * 
   * - **remove**: Removes a block or an asset from isolation.
   * 
   * - **retry**: Resubmits the task.
   * 
   * This parameter is required.
   * 
   * @example
   * remove
   */
  actionType?: string;
  /**
   * @remarks
   * The unique ID of the handling task.
   * 
   * > Call the [DescribeProcessTasks](~~DescribeProcessTasks~~) operation to obtain this parameter.
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

