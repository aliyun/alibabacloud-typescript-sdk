// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatMessagesTaskStopRequest extends $dara.Model {
  /**
   * @example
   * app-iBuGU1VxEY42zrQRQfNA****
   */
  apiId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 09a81048-0528-4de5-9dbd-12c8a12b****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
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

