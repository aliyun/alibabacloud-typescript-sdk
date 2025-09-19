// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateVirusEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B72BEC03-001C-5C77-A4BB-1E6XXXXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task to handle multiple alert events at a time.
   * 
   * @example
   * 1
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

