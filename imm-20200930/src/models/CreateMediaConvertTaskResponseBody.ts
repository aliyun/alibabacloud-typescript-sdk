// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMediaConvertTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Event ID.
   * 
   * @example
   * 0ED-1Bz8z71k5TtsUejT4UJ16Es****
   */
  eventId?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * CA995EFD-083D-4F40-BE8A-BDF75FFFE0B6
   */
  requestId?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * MediaConvert-adb1ee28-c4c9-42a7-9f54-3b8eadcb****
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

