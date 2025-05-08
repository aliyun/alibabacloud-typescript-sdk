// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWaitingRoomEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 7096621098****
   */
  siteId?: number;
  /**
   * @remarks
   * The ID of the waiting room event. This parameter is optional. You can specify this parameter to query a specific waiting room event.
   * 
   * @example
   * 89677721098****
   */
  waitingRoomEventId?: number;
  /**
   * @remarks
   * The unique ID of the waiting room, which can be obtained by calling the [ListWaitingRooms](https://help.aliyun.com/document_detail/2850279.html) operation.
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

