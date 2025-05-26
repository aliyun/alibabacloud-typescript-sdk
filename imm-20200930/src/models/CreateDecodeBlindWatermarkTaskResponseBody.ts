// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDecodeBlindWatermarkTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 27C-1jyAP5qQI7RoI8lFFwvMrWtl0ft
   */
  eventId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4A7A2D0E-D8B8-4DA0-8127-EB32C6600ADE
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * DecodeBlindWatermark-78ac8f3b-59e0-45a6-9b67-32168c3f22b9
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

