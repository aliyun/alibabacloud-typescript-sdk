// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderBookerInfo } from "./IflightOrderDetailQueryResponseBodyModuleFlightSaleOrderBookerInfo";
import { IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderInsureList } from "./IflightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderInsureList";
import { IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketList } from "./IflightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketList";
import { IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightSegmentList } from "./IflightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightSegmentList";
import { IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderPassengerList } from "./IflightOrderDetailQueryResponseBodyModuleFlightSaleOrderPassengerList";


export class IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrder extends $dara.Model {
  /**
   * @example
   * 82587500
   */
  applyId?: number;
  /**
   * @example
   * 0
   */
  bookType?: number;
  bookerInfo?: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderBookerInfo;
  corpPayPrice?: number;
  /**
   * @example
   * 123
   */
  exceedApplyId?: string;
  flightOrderInsureList?: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderInsureList[];
  flightOrderTicketList?: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketList[];
  flightSegmentList?: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightSegmentList[];
  mixPay?: boolean;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  orderCreateTime?: string;
  /**
   * @example
   * 1003038200110661039
   */
  orderId?: string;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  orderPayTime?: string;
  orderReservePrice?: number;
  /**
   * @example
   * 5
   */
  orderStatus?: number;
  orderStatusDesc?: string;
  /**
   * @example
   * 1
   */
  orderType?: number;
  passengerList?: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderPassengerList[];
  /**
   * @example
   * 2
   */
  payType?: number;
  personPayPrice?: number;
  serviceFee?: number;
  /**
   * @example
   * business_trip_api_000001
   */
  thirdPartApplyId?: string;
  /**
   * @example
   * 1
   */
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      bookType: 'book_type',
      bookerInfo: 'booker_info',
      corpPayPrice: 'corp_pay_price',
      exceedApplyId: 'exceed_apply_id',
      flightOrderInsureList: 'flight_order_insure_list',
      flightOrderTicketList: 'flight_order_ticket_list',
      flightSegmentList: 'flight_segment_list',
      mixPay: 'mix_pay',
      orderCreateTime: 'order_create_time',
      orderId: 'order_id',
      orderPayTime: 'order_pay_time',
      orderReservePrice: 'order_reserve_price',
      orderStatus: 'order_status',
      orderStatusDesc: 'order_status_desc',
      orderType: 'order_type',
      passengerList: 'passenger_list',
      payType: 'pay_type',
      personPayPrice: 'person_pay_price',
      serviceFee: 'service_fee',
      thirdPartApplyId: 'third_part_apply_id',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      bookType: 'number',
      bookerInfo: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderBookerInfo,
      corpPayPrice: 'number',
      exceedApplyId: 'string',
      flightOrderInsureList: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderInsureList },
      flightOrderTicketList: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketList },
      flightSegmentList: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightSegmentList },
      mixPay: 'boolean',
      orderCreateTime: 'string',
      orderId: 'string',
      orderPayTime: 'string',
      orderReservePrice: 'number',
      orderStatus: 'number',
      orderStatusDesc: 'string',
      orderType: 'number',
      passengerList: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderPassengerList },
      payType: 'number',
      personPayPrice: 'number',
      serviceFee: 'number',
      thirdPartApplyId: 'string',
      tripType: 'number',
    };
  }

  validate() {
    if(this.bookerInfo && typeof (this.bookerInfo as any).validate === 'function') {
      (this.bookerInfo as any).validate();
    }
    if(Array.isArray(this.flightOrderInsureList)) {
      $dara.Model.validateArray(this.flightOrderInsureList);
    }
    if(Array.isArray(this.flightOrderTicketList)) {
      $dara.Model.validateArray(this.flightOrderTicketList);
    }
    if(Array.isArray(this.flightSegmentList)) {
      $dara.Model.validateArray(this.flightSegmentList);
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

