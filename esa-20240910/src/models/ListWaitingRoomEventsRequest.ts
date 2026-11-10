// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWaitingRoomEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7096621098****
   */
  siteId?: number;
  /**
   * @remarks
   * The waiting room event ID. This parameter is optional and is used to query a specific waiting room event.
   * 
   * @example
   * 89677721098****
   */
  waitingRoomEventId?: number;
  /**
   * @remarks
   * The waiting room ID, which is used to identify a specific waiting room. You can call the [ListWaitingRooms](https://help.aliyun.com/document_detail/2850279.html) operation to obtain the waiting room ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6a51d5bc6460887abd129****
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

