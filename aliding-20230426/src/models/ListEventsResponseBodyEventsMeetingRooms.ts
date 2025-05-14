// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventsResponseBodyEventsMeetingRooms extends $dara.Model {
  displayName?: string;
  /**
   * @example
   * accepted
   */
  responseStatus?: string;
  /**
   * @example
   * c10315a8b4e740a317813ab6fxxxxxx
   */
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      responseStatus: 'ResponseStatus',
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      responseStatus: 'string',
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

