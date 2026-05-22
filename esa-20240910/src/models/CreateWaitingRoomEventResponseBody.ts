// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWaitingRoomEventResponseBody extends $dara.Model {
  requestId?: string;
  waitingRoomEventId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waitingRoomEventId: 'WaitingRoomEventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      waitingRoomEventId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

