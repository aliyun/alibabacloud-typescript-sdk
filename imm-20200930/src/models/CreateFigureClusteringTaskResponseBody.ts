// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFigureClusteringTaskResponseBody extends $dara.Model {
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
   * 1B3D5E0A-D8B8-4DA0-8127-ED32C851****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * formatconvert-00bec802-073a-4b61-ba3b-39bc****
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

