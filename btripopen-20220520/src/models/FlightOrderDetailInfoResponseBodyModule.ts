// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOrderDetailInfoResponseBodyModuleFlightInfoList } from "./FlightOrderDetailInfoResponseBodyModuleFlightInfoList";
import { FlightOrderDetailInfoResponseBodyModuleTicketInfoList } from "./FlightOrderDetailInfoResponseBodyModuleTicketInfoList";
import { FlightOrderDetailInfoResponseBodyModuleTravelerInfoList } from "./FlightOrderDetailInfoResponseBodyModuleTravelerInfoList";


export class FlightOrderDetailInfoResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 2389927372772
   */
  alipayTradeNo?: string;
  /**
   * @example
   * 1223
   */
  bookUserId?: string;
  /**
   * @example
   * 123
   */
  btripOrderId?: number;
  contactName?: string;
  /**
   * @example
   * 12345678909
   */
  contactPhone?: string;
  /**
   * @example
   * dis123
   */
  disOrderId?: string;
  /**
   * @example
   * {}
   */
  extra?: string;
  flightInfoList?: FlightOrderDetailInfoResponseBodyModuleFlightInfoList[];
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  lastPayTime?: string;
  /**
   * @example
   * 0
   */
  payStatus?: number;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  payTime?: string;
  /**
   * @example
   * 1000
   */
  promotionPrice?: number;
  /**
   * @example
   * 100
   */
  settleAmount?: number;
  /**
   * @example
   * 0
   */
  settleType?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  ticketInfoList?: FlightOrderDetailInfoResponseBodyModuleTicketInfoList[];
  /**
   * @example
   * 1000
   */
  totalBuildPrice?: number;
  /**
   * @example
   * 1000
   */
  totalOilPrice?: number;
  /**
   * @example
   * 1000
   */
  totalOrderPrice?: number;
  travelerInfoList?: FlightOrderDetailInfoResponseBodyModuleTravelerInfoList[];
  static names(): { [key: string]: string } {
    return {
      alipayTradeNo: 'alipay_trade_no',
      bookUserId: 'book_user_id',
      btripOrderId: 'btrip_order_id',
      contactName: 'contact_name',
      contactPhone: 'contact_phone',
      disOrderId: 'dis_order_id',
      extra: 'extra',
      flightInfoList: 'flight_info_list',
      lastPayTime: 'last_pay_time',
      payStatus: 'pay_status',
      payTime: 'pay_time',
      promotionPrice: 'promotion_price',
      settleAmount: 'settle_amount',
      settleType: 'settle_type',
      status: 'status',
      ticketInfoList: 'ticket_info_list',
      totalBuildPrice: 'total_build_price',
      totalOilPrice: 'total_oil_price',
      totalOrderPrice: 'total_order_price',
      travelerInfoList: 'traveler_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayTradeNo: 'string',
      bookUserId: 'string',
      btripOrderId: 'number',
      contactName: 'string',
      contactPhone: 'string',
      disOrderId: 'string',
      extra: 'string',
      flightInfoList: { 'type': 'array', 'itemType': FlightOrderDetailInfoResponseBodyModuleFlightInfoList },
      lastPayTime: 'string',
      payStatus: 'number',
      payTime: 'string',
      promotionPrice: 'number',
      settleAmount: 'number',
      settleType: 'number',
      status: 'number',
      ticketInfoList: { 'type': 'array', 'itemType': FlightOrderDetailInfoResponseBodyModuleTicketInfoList },
      totalBuildPrice: 'number',
      totalOilPrice: 'number',
      totalOrderPrice: 'number',
      travelerInfoList: { 'type': 'array', 'itemType': FlightOrderDetailInfoResponseBodyModuleTravelerInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.flightInfoList)) {
      $dara.Model.validateArray(this.flightInfoList);
    }
    if(Array.isArray(this.ticketInfoList)) {
      $dara.Model.validateArray(this.ticketInfoList);
    }
    if(Array.isArray(this.travelerInfoList)) {
      $dara.Model.validateArray(this.travelerInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

