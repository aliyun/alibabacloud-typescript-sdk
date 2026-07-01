// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIAgentCallInfo extends $dara.Model {
  /**
   * @remarks
   * The duration of the call, in seconds.
   * 
   * @example
   * 5
   */
  callDuration?: number;
  /**
   * @remarks
   * The time the call ended, in ISO 8601 format.
   * 
   * @example
   * 2026-04-01T16:53:58.875932+00:00
   */
  callEndTime?: string;
  /**
   * @remarks
   * The time the call started, in ISO 8601 format.
   * 
   * @example
   * 2026-04-01T16:53:53.184797+00:00
   */
  callStartTime?: string;
  /**
   * @remarks
   * The number of the called party.
   * 
   * @example
   * 136******794
   */
  calleeNumber?: string;
  /**
   * @remarks
   * The number of the calling party.
   * 
   * @example
   * 183*****333
   */
  callerNumber?: string;
  /**
   * @remarks
   * Indicates which party ended the call.
   * 0: The agent ended the call.
   * 1: The user ended the call.
   * 2: The system ended the call for a transfer.
   * 
   * @example
   * 0
   */
  hangupRole?: number;
  /**
   * @remarks
   * The status of the call.
   * 
   * @example
   * 4
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      callDuration: 'CallDuration',
      callEndTime: 'CallEndTime',
      callStartTime: 'CallStartTime',
      calleeNumber: 'CalleeNumber',
      callerNumber: 'CallerNumber',
      hangupRole: 'HangupRole',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDuration: 'number',
      callEndTime: 'string',
      callStartTime: 'string',
      calleeNumber: 'string',
      callerNumber: 'string',
      hangupRole: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

