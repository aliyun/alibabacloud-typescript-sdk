// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWaitingRoomResponseBody extends $dara.Model {
  requestId?: string;
  waitingRoomId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waitingRoomId: 'WaitingRoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      waitingRoomId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

