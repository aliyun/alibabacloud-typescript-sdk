// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatMessagesTaskStopRequest extends $dara.Model {
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **ChatMessagesTaskStop**.
   * 
   * This parameter is required.
   * 
   * @example
   * 09a81048-0528-4de5-9dbd-12c8a12b****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

