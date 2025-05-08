// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWaitingRoomsRequest extends $dara.Model {
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 120876698010528
   */
  siteId?: number;
  /**
   * @remarks
   * The ID of the waiting room. Specify this parameter to query the information about a specific waiting room.
   * 
   * @example
   * 6a51d5bc6460887abd1291dc7d4d****
   */
  waitingRoomId?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      waitingRoomId: 'WaitingRoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
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

