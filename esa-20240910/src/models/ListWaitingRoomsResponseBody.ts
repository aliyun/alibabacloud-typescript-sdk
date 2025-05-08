// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWaitingRoomsResponseBodyWaitingRooms } from "./ListWaitingRoomsResponseBodyWaitingRooms";


export class ListWaitingRoomsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which is used to trace a call.
   * 
   * @example
   * CB1A380B-09F0-41BB-A198-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The waiting rooms.
   */
  waitingRooms?: ListWaitingRoomsResponseBodyWaitingRooms[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waitingRooms: 'WaitingRooms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      waitingRooms: { 'type': 'array', 'itemType': ListWaitingRoomsResponseBodyWaitingRooms },
    };
  }

  validate() {
    if(Array.isArray(this.waitingRooms)) {
      $dara.Model.validateArray(this.waitingRooms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

