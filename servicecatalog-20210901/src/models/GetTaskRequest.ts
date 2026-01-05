// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * task-bp1dmg242c****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

