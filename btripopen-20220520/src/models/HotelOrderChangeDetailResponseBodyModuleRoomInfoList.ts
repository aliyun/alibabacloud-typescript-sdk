// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelOrderChangeDetailResponseBodyModuleRoomInfoListRoomDailyRefundInfos } from "./HotelOrderChangeDetailResponseBodyModuleRoomInfoListRoomDailyRefundInfos";


export class HotelOrderChangeDetailResponseBodyModuleRoomInfoList extends $dara.Model {
  cancelDate?: string[];
  roomDailyRefundInfos?: HotelOrderChangeDetailResponseBodyModuleRoomInfoListRoomDailyRefundInfos[];
  /**
   * @example
   * 1
   */
  roomNo?: number;
  static names(): { [key: string]: string } {
    return {
      cancelDate: 'cancel_date',
      roomDailyRefundInfos: 'room_daily_refund_infos',
      roomNo: 'room_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelDate: { 'type': 'array', 'itemType': 'string' },
      roomDailyRefundInfos: { 'type': 'array', 'itemType': HotelOrderChangeDetailResponseBodyModuleRoomInfoListRoomDailyRefundInfos },
      roomNo: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cancelDate)) {
      $dara.Model.validateArray(this.cancelDate);
    }
    if(Array.isArray(this.roomDailyRefundInfos)) {
      $dara.Model.validateArray(this.roomDailyRefundInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

