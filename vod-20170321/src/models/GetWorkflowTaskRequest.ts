// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The workflow task ID. It is returned by the SubmitWorkflowJob operation and is used to query the execution status and result of the task.
   * 
   * @example
   * 70422****
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

