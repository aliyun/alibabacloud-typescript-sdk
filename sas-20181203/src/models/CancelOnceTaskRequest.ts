// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelOnceTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task.
   * 
   * >  You can call the [GenerateOnceTask](~~GenerateOnceTask~~) operation to query the IDs of tasks.
   * 
   * This parameter is required.
   * 
   * @example
   * ec9c0d88f36cc27765a98c554ee2****
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

