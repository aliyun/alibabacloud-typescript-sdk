// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOfficeConversionTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 2C2-1I0EG57VR37J4rQ8oKG6C9*****
   */
  eventId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FF3B7D81-66AE-47E0-BF69-157DCF18*****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * formatconvert-00bec802-073a-4b61-ba3b-39bc2fdd*****
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

