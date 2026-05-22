// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWaitingRoomEventsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  waitingRoomEventId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  waitingRoomId?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      waitingRoomEventId: 'WaitingRoomEventId',
      waitingRoomId: 'WaitingRoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      waitingRoomEventId: 'number',
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

