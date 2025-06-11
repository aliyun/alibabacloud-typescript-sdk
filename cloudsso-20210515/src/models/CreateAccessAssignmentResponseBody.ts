// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAccessAssignmentResponseBodyTask } from "./CreateAccessAssignmentResponseBodyTask";


export class CreateAccessAssignmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4726AA56-E138-5C99-85E4-F493536D042F
   */
  requestId?: string;
  /**
   * @remarks
   * The queried task.
   */
  task?: CreateAccessAssignmentResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: CreateAccessAssignmentResponseBodyTask,
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

