// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFigureClustersMergingTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * 0ED-1Bz8z71k5TtsUejT4UJ16E****
   */
  eventId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CA995EFD-083D-4F40-BE8A-BDF75FF****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 92376fbb-171f-4259-913f-705f7ee0****
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

