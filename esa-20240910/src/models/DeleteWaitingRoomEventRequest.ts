// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWaitingRoomEventRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  waitingRoomEventId?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      waitingRoomEventId: 'WaitingRoomEventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
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

