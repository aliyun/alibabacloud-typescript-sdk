// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAITaskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the TaskOutput parameter. The TaskOutput parameter specifies the outputs of the AI task. Valid values:
   * 
   * *   Enabled
   * *   Disabled (default)
   * 
   * >  The value of TaskOutput may be excessively long. If you do not require the outputs of the task, we recommend that you set OutputOption to Disabled to improve the response speed of the API operation.
   * 
   * @example
   * Disabled
   */
  outputOption?: string;
  /**
   * @remarks
   * The ID of the AI task.
   * 
   * @example
   * t-asasas*****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      outputOption: 'OutputOption',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputOption: 'string',
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

