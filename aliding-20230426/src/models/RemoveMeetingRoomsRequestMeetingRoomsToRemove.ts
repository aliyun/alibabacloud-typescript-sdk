// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveMeetingRoomsRequestMeetingRoomsToRemove extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * U5Kxxxxx
   */
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

