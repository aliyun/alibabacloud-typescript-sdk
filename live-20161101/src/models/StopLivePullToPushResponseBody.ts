// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopLivePullToPushResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * a05e6b15-15af-405b-a4a2-0152245d****
   */
  requestId?: string;
  /**
   * @remarks
   * The new task ID.
   * 
   * @example
   * fb0d4ac7-c7e3-4978-9743-0bf2f6e8****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

