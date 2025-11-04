// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIWorkflowTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the workflow task.
   * 
   * @example
   * ********-266c-4bb8-b20c-6faa********
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

