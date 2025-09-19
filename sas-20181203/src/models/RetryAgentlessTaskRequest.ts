// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryAgentlessTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task. You can call the [ListAgentlessTask](~~ListAgentlessTask~~) operation to obtain the IDs of tasks.
   * 
   * @example
   * 5347c7b6-c85c-4070-846a-3029e08e****
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

