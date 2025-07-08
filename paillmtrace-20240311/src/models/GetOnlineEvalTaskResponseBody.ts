// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOnlineEvalTaskResponseBodyTask } from "./GetOnlineEvalTaskResponseBodyTask";


export class GetOnlineEvalTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Internal error code. Set only when the response is in error.
   * 
   * @example
   * InvalidInputParams
   */
  code?: string;
  /**
   * @remarks
   * Response error message. Set only when the response is in error.
   * 
   * @example
   * task id is empty
   */
  message?: string;
  /**
   * @remarks
   * POP request ID
   * 
   * @example
   * 6F352A02-9C0D-54A7-B57C-663CF71D5714
   */
  requestId?: string;
  /**
   * @remarks
   * Task information
   */
  task?: GetOnlineEvalTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      task: GetOnlineEvalTaskResponseBodyTask,
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

