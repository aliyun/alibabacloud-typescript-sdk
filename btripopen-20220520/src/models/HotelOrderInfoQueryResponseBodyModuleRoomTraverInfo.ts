// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfos } from "./HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfos";


export class HotelOrderInfoQueryResponseBodyModuleRoomTraverInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  liveRoomNo?: string;
  roomTypeName?: string;
  traverInfos?: HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfos[];
  static names(): { [key: string]: string } {
    return {
      liveRoomNo: 'live_room_no',
      roomTypeName: 'room_type_name',
      traverInfos: 'traver_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveRoomNo: 'string',
      roomTypeName: 'string',
      traverInfos: { 'type': 'array', 'itemType': HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfos },
    };
  }

  validate() {
    if(Array.isArray(this.traverInfos)) {
      $dara.Model.validateArray(this.traverInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

