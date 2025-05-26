// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFacesSearchingTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 0ED-1Bz8z71k5TtsUejT4UJ16****
   */
  eventId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B1E79399-05F7-06D8-95FE-EBE17BA*****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * CreateFacesSearchingTask-00bec802-073a-4b61-ba*****
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

