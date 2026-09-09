// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComfyTaskWaitingQueueResponseBodyTaskWaitingQueue extends $dara.Model {
  /**
   * @remarks
   * The number of waiting tasks.
   * 
   * @example
   * 20
   */
  waitingCount?: number;
  static names(): { [key: string]: string } {
    return {
      waitingCount: 'WaitingCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      waitingCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComfyTaskWaitingQueueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 0 indicates success.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The waiting queue information.
   */
  taskWaitingQueue?: DescribeComfyTaskWaitingQueueResponseBodyTaskWaitingQueue;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      taskWaitingQueue: 'TaskWaitingQueue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      taskWaitingQueue: DescribeComfyTaskWaitingQueueResponseBodyTaskWaitingQueue,
    };
  }

  validate() {
    if(this.taskWaitingQueue && typeof (this.taskWaitingQueue as any).validate === 'function') {
      (this.taskWaitingQueue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

