// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTaskStatusResponseBodyTaskStatus } from "./GetTaskStatusResponseBodyTaskStatus";


export class GetTaskStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 005F4623-AE53-504D-830F-44825F7DC211
   */
  requestId?: string;
  /**
   * @remarks
   * The status information about the task.
   */
  taskStatus?: GetTaskStatusResponseBodyTaskStatus;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskStatus: GetTaskStatusResponseBodyTaskStatus,
    };
  }

  validate() {
    if(this.taskStatus && typeof (this.taskStatus as any).validate === 'function') {
      (this.taskStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

