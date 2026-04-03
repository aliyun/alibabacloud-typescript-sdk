// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIAgentCallInfo extends $dara.Model {
  callDuration?: number;
  callEndTime?: string;
  callStartTime?: string;
  calleeNumber?: string;
  callerNumber?: string;
  hangupRole?: number;
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

