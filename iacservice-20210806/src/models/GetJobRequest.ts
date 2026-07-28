// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobRequest extends $dara.Model {
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - Task: regular task (default)
   * - SceneTestingTask: scenario-based testing task
   * - Stack: resource stack.
   * 
   * @example
   * SceneTestingTask
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

