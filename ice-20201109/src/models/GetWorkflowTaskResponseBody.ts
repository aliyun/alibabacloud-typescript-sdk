// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWorkflowTaskResponseBodyWorkflowTask } from "./GetWorkflowTaskResponseBodyWorkflowTask";


export class GetWorkflowTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******0C-7870-15FE-B96F-8880BB******
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the workflow task.
   */
  workflowTask?: GetWorkflowTaskResponseBodyWorkflowTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workflowTask: 'WorkflowTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workflowTask: GetWorkflowTaskResponseBodyWorkflowTask,
    };
  }

  validate() {
    if(this.workflowTask && typeof (this.workflowTask as any).validate === 'function') {
      (this.workflowTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

