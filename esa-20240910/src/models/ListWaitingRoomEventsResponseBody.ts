// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWaitingRoomEventsResponseBodyWaitingRoomEvents } from "./ListWaitingRoomEventsResponseBodyWaitingRoomEvents";


export class ListWaitingRoomEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which is used to trace a call.
   * 
   * @example
   * f3c3700a-4c0f-4a24-b576-fd7dbf9e7c55
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the waiting room events.
   */
  waitingRoomEvents?: ListWaitingRoomEventsResponseBodyWaitingRoomEvents[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waitingRoomEvents: 'WaitingRoomEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      waitingRoomEvents: { 'type': 'array', 'itemType': ListWaitingRoomEventsResponseBodyWaitingRoomEvents },
    };
  }

  validate() {
    if(Array.isArray(this.waitingRoomEvents)) {
      $dara.Model.validateArray(this.waitingRoomEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

