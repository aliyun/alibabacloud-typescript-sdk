// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentSessionEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The event data of the current frame. The content varies with the Event type and should be parsed according to the event type. Preserve the original session, turn, and tool invocation identifiers.
   * 
   * @example
   * {}
   */
  data?: any;
  /**
   * @remarks
   * The SSE event type, such as session_update. Process control frames and business frames separately.
   * 
   * @example
   * session_update
   */
  event?: string;
  /**
   * @remarks
   * The remote SSE event cursor. Save it after consumption for subsequent resumption using Last-Event-Id. Some control frames may not have a cursor. Do not generate a local cursor for them.
   * 
   * @example
   * 42
   */
  id?: string;
  /**
   * @remarks
   * The request ID of the current OpenAPI subscription request, used to troubleshoot subscription failures. It is not an event cursor or an interactive question ID.
   * 
   * @example
   * 01A0B6E0-E005-1465-B5DE-5CD17677426F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      event: 'Event',
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      event: 'string',
      id: 'string',
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

