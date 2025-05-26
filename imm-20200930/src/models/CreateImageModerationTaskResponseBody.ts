// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageModerationTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 2E6-1I0FGn0zFnl5AflRfhzClma*****
   */
  eventId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1B3D5E0A-D8B8-4DA0-8127-ED32C851****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ImageModeration-179ef4f8-d583-4f0c-a293-7c0889c*****
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

