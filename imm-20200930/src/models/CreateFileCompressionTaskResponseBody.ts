// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileCompressionTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 0ED-1Bz8z71k5TtsUejT4UJ16Es*****
   */
  eventId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC564A9A-BA5C-4499-A087-D9B9E76E*****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * FileCompression-3579a380-6f7a-4a9d-b9d2-65996*****
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

