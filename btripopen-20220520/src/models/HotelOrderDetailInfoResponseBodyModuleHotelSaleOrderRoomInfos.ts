// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderDetailInfoResponseBodyModuleHotelSaleOrderRoomInfos extends $dara.Model {
  checkinDate?: string;
  checkoutDate?: string;
  penalSum?: number;
  realCheckoutDate?: string;
  refundStatus?: number;
  roomNo?: number;
  roomPrice?: number;
  roomRefundPrice?: number;
  travelerId?: string;
  travelerName?: string;
  static names(): { [key: string]: string } {
    return {
      checkinDate: 'checkin_date',
      checkoutDate: 'checkout_date',
      penalSum: 'penal_sum',
      realCheckoutDate: 'real_checkout_date',
      refundStatus: 'refund_status',
      roomNo: 'room_no',
      roomPrice: 'room_price',
      roomRefundPrice: 'room_refund_price',
      travelerId: 'traveler_id',
      travelerName: 'traveler_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkinDate: 'string',
      checkoutDate: 'string',
      penalSum: 'number',
      realCheckoutDate: 'string',
      refundStatus: 'number',
      roomNo: 'number',
      roomPrice: 'number',
      roomRefundPrice: 'number',
      travelerId: 'string',
      travelerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

