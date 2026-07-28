// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The description. The length is 0 to 128 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * dasd
   */
  comment?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - Task: regular task (default).
   * - SceneTestingTask: scenario-based testing task.
   * 
   * @example
   * Task
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

