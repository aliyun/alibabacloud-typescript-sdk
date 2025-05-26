// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 392-1CqzvESGTEeNZ2OWFbRKIM****
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
   * CreateStory-4ef6ff43-edf3-4612-9cc4-0c7f9e19****
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

