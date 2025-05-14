// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMeetingRoomsRequestMeetingRoomsToAdd extends $dara.Model {
  /**
   * @example
   * 4002fxxxxx
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

