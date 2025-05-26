// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageSplicingTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 10C-1R6p7Km0H5Ieg38LKXTIvw*****
   */
  eventId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 94D6F994-E298-037E-8E8B-0090F27*****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ImageSplicing-537cc157-7645-444a-a631-c8db4d02*****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
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

