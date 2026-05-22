// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurgeCachesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * ET5BF670-09D5-4D0B-BEBY-D96A2A528000
   */
  requestId?: string;
  /**
   * @remarks
   * Task ID, which is returned when you create a refresh or preheat task.
   * 
   * @example
   * 15940956620
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

