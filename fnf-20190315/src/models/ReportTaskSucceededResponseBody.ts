// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportTaskSucceededResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * 1
   */
  eventId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * testRequestId
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

