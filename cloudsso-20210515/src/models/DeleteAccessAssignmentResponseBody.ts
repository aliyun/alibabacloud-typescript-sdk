// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteAccessAssignmentResponseBodyTask } from "./DeleteAccessAssignmentResponseBodyTask";


export class DeleteAccessAssignmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5C9D0CF4-5CE8-5CE6-932A-826EF4ADD007
   */
  requestId?: string;
  /**
   * @remarks
   * The task information.
   */
  task?: DeleteAccessAssignmentResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: DeleteAccessAssignmentResponseBodyTask,
    };
  }

  validate() {
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

