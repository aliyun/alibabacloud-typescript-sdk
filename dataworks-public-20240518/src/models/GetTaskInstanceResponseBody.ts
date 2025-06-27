// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTaskInstanceResponseBodyTaskInstance } from "./GetTaskInstanceResponseBodyTaskInstance";


export class GetTaskInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the task instance.
   */
  taskInstance?: GetTaskInstanceResponseBodyTaskInstance;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInstance: 'TaskInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInstance: GetTaskInstanceResponseBodyTaskInstance,
    };
  }

  validate() {
    if(this.taskInstance && typeof (this.taskInstance as any).validate === 'function') {
      (this.taskInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

