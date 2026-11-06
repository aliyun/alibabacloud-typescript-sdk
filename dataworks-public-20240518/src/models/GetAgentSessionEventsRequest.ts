// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentSessionEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The epoch identifier of the event stream, obtained from data.eventEpoch in the stream_open control frame of the server. Pass the original value only when Last-Event-Id of the same native session and the same epoch is provided. Omit this parameter when subscribing for the first time or when the epoch is not obtained. Do not construct it yourself or reuse it across native sessions.
   * 
   * @example
   * epoch_example
   */
  eventEpoch?: string;
  /**
   * @remarks
   * The ID of the target agent session. Set the value to the SessionId returned by CreateAgentSession. The parameter name for this API operation is SessionCode.
   * 
   * This parameter is required.
   * 
   * @example
   * session_example
   */
  sessionCode?: string;
  static names(): { [key: string]: string } {
    return {
      eventEpoch: 'EventEpoch',
      sessionCode: 'SessionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventEpoch: 'string',
      sessionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

