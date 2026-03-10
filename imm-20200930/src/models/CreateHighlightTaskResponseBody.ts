// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHighlightTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 0ED-1Bz8z71k5TtsUejT4UJ16Es****
   */
  eventId?: string;
  /**
   * @example
   * CA995EFD-083D-4F40-BE8A-BDF75FFFE0B6
   */
  requestId?: string;
  /**
   * @example
   * Highlight-4d51241b-04d4-4343-aa25-****
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

