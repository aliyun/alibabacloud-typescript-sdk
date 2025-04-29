// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelOrderInfoQueryResponseBodyModuleBaseOrderInfo } from "./HotelOrderInfoQueryResponseBodyModuleBaseOrderInfo";
import { HotelOrderInfoQueryResponseBodyModuleBookerInfo } from "./HotelOrderInfoQueryResponseBodyModuleBookerInfo";
import { HotelOrderInfoQueryResponseBodyModuleHotelInfo } from "./HotelOrderInfoQueryResponseBodyModuleHotelInfo";
import { HotelOrderInfoQueryResponseBodyModuleHotelOrderFeeInfo } from "./HotelOrderInfoQueryResponseBodyModuleHotelOrderFeeInfo";
import { HotelOrderInfoQueryResponseBodyModuleHotelOrderRefundInfo } from "./HotelOrderInfoQueryResponseBodyModuleHotelOrderRefundInfo";
import { HotelOrderInfoQueryResponseBodyModuleRoomTraverInfo } from "./HotelOrderInfoQueryResponseBodyModuleRoomTraverInfo";


export class HotelOrderInfoQueryResponseBodyModule extends $dara.Model {
  baseOrderInfo?: HotelOrderInfoQueryResponseBodyModuleBaseOrderInfo;
  bookerInfo?: HotelOrderInfoQueryResponseBodyModuleBookerInfo;
  hotelInfo?: HotelOrderInfoQueryResponseBodyModuleHotelInfo;
  hotelOrderFeeInfo?: HotelOrderInfoQueryResponseBodyModuleHotelOrderFeeInfo;
  hotelOrderRefundInfo?: HotelOrderInfoQueryResponseBodyModuleHotelOrderRefundInfo[];
  roomTraverInfo?: HotelOrderInfoQueryResponseBodyModuleRoomTraverInfo[];
  static names(): { [key: string]: string } {
    return {
      baseOrderInfo: 'base_order_info',
      bookerInfo: 'booker_info',
      hotelInfo: 'hotel_info',
      hotelOrderFeeInfo: 'hotel_order_fee_info',
      hotelOrderRefundInfo: 'hotel_order_refund_info',
      roomTraverInfo: 'room_traver_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseOrderInfo: HotelOrderInfoQueryResponseBodyModuleBaseOrderInfo,
      bookerInfo: HotelOrderInfoQueryResponseBodyModuleBookerInfo,
      hotelInfo: HotelOrderInfoQueryResponseBodyModuleHotelInfo,
      hotelOrderFeeInfo: HotelOrderInfoQueryResponseBodyModuleHotelOrderFeeInfo,
      hotelOrderRefundInfo: { 'type': 'array', 'itemType': HotelOrderInfoQueryResponseBodyModuleHotelOrderRefundInfo },
      roomTraverInfo: { 'type': 'array', 'itemType': HotelOrderInfoQueryResponseBodyModuleRoomTraverInfo },
    };
  }

  validate() {
    if(this.baseOrderInfo && typeof (this.baseOrderInfo as any).validate === 'function') {
      (this.baseOrderInfo as any).validate();
    }
    if(this.bookerInfo && typeof (this.bookerInfo as any).validate === 'function') {
      (this.bookerInfo as any).validate();
    }
    if(this.hotelInfo && typeof (this.hotelInfo as any).validate === 'function') {
      (this.hotelInfo as any).validate();
    }
    if(this.hotelOrderFeeInfo && typeof (this.hotelOrderFeeInfo as any).validate === 'function') {
      (this.hotelOrderFeeInfo as any).validate();
    }
    if(Array.isArray(this.hotelOrderRefundInfo)) {
      $dara.Model.validateArray(this.hotelOrderRefundInfo);
    }
    if(Array.isArray(this.roomTraverInfo)) {
      $dara.Model.validateArray(this.roomTraverInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

