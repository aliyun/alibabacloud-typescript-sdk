// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeAgentTaskRequest extends $dara.Model {
  /**
   * @remarks
   * An additional prompt to guide the task. This parameter applies only when a task is in the `PAUSED` state, for example, while waiting for user input.
   * 
   * @example
   * 验证码为***。
   */
  additionalPrompt?: string;
  /**
   * @remarks
   * A list of task IDs.
   * 
   * This parameter is required.
   */
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      additionalPrompt: 'AdditionalPrompt',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPrompt: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
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

