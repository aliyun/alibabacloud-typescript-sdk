// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderDetailInfoResponseBodyModuleFlightInfoList extends $dara.Model {
  /**
   * @example
   * CA
   */
  airlineCode?: string;
  airlineName?: string;
  airlineSimpleName?: string;
  arrAirport?: string;
  /**
   * @example
   * LHW
   */
  arrAirportCode?: string;
  arrAirportCodeName?: string;
  /**
   * @example
   * HGH
   */
  arrCity?: string;
  /**
   * @example
   * LHW
   */
  arrCityCode?: string;
  arrTerminal?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  arrTime?: string;
  /**
   * @example
   * “”
   */
  baggage?: string;
  /**
   * @example
   * 100
   */
  buildPrice?: number;
  cabin?: string;
  cabinClass?: string;
  /**
   * @example
   * "CA1351_PEK_CAN_2000-00-00 08:00
   */
  carrier?: string;
  depAirport?: string;
  /**
   * @example
   * NGB
   */
  depAirportCode?: string;
  depAirportCodeName?: string;
  /**
   * @example
   * BJS
   */
  depCity?: string;
  /**
   * @example
   * NGB
   */
  depCityCode?: string;
  depTerminal?: string;
  /**
   * @example
   * 2000-01-01 00:00:00
   */
  depTime?: string;
  /**
   * @example
   * CA1351
   */
  flightNo?: string;
  /**
   * @example
   * Y
   */
  lastCabin?: string;
  /**
   * @example
   * CA1351
   */
  lastFlightNo?: string;
  meal?: string;
  /**
   * @example
   * 100
   */
  oilPrice?: number;
  /**
   * @example
   * 0
   */
  segmentType?: number;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  stopArrTime?: string;
  /**
   * @example
   * CAN
   */
  stopCity?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  stopDepTime?: string;
  /**
   * @example
   * 100
   */
  ticketPrice?: number;
  /**
   * @example
   * “”
   */
  tuigaiqianInfo?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      airlineSimpleName: 'airline_simple_name',
      arrAirport: 'arr_airport',
      arrAirportCode: 'arr_airport_code',
      arrAirportCodeName: 'arr_airport_code_name',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrTerminal: 'arr_terminal',
      arrTime: 'arr_time',
      baggage: 'baggage',
      buildPrice: 'build_price',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      carrier: 'carrier',
      depAirport: 'dep_airport',
      depAirportCode: 'dep_airport_code',
      depAirportCodeName: 'dep_airport_code_name',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depTerminal: 'dep_terminal',
      depTime: 'dep_time',
      flightNo: 'flight_no',
      lastCabin: 'last_cabin',
      lastFlightNo: 'last_flight_no',
      meal: 'meal',
      oilPrice: 'oil_price',
      segmentType: 'segment_type',
      stopArrTime: 'stop_arr_time',
      stopCity: 'stop_city',
      stopDepTime: 'stop_dep_time',
      ticketPrice: 'ticket_price',
      tuigaiqianInfo: 'tuigaiqian_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      airlineSimpleName: 'string',
      arrAirport: 'string',
      arrAirportCode: 'string',
      arrAirportCodeName: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      arrTerminal: 'string',
      arrTime: 'string',
      baggage: 'string',
      buildPrice: 'number',
      cabin: 'string',
      cabinClass: 'string',
      carrier: 'string',
      depAirport: 'string',
      depAirportCode: 'string',
      depAirportCodeName: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depTerminal: 'string',
      depTime: 'string',
      flightNo: 'string',
      lastCabin: 'string',
      lastFlightNo: 'string',
      meal: 'string',
      oilPrice: 'number',
      segmentType: 'number',
      stopArrTime: 'string',
      stopCity: 'string',
      stopDepTime: 'string',
      ticketPrice: 'number',
      tuigaiqianInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailInfoResponseBodyModuleTicketInfoList extends $dara.Model {
  /**
   * @example
   * 0
   */
  openTicketStatus?: string;
  /**
   * @example
   * KF0528
   */
  pnrCode?: string;
  /**
   * @example
   * 444-000000000
   */
  ticketNo?: string;
  /**
   * @example
   * 1
   */
  ticketStatus?: string;
  static names(): { [key: string]: string } {
    return {
      openTicketStatus: 'open_ticket_status',
      pnrCode: 'pnr_code',
      ticketNo: 'ticket_no',
      ticketStatus: 'ticket_status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openTicketStatus: 'string',
      pnrCode: 'string',
      ticketNo: 'string',
      ticketStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailInfoResponseBodyModuleTravelerInfoList extends $dara.Model {
  /**
   * @example
   * 2000-01-01
   */
  birthDate?: string;
  /**
   * @example
   * 1234
   */
  certNo?: string;
  /**
   * @example
   * 0
   */
  certType?: string;
  /**
   * @example
   * 0
   */
  openTicketStatus?: number;
  passengerName?: string;
  /**
   * @example
   * 0
   */
  passengerType?: string;
  /**
   * @example
   * 12345678909
   */
  phone?: string;
  /**
   * @example
   * 444-000000000
   */
  ticketNo?: string;
  /**
   * @example
   * 123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      birthDate: 'birth_date',
      certNo: 'cert_no',
      certType: 'cert_type',
      openTicketStatus: 'open_ticket_status',
      passengerName: 'passenger_name',
      passengerType: 'passenger_type',
      phone: 'phone',
      ticketNo: 'ticket_no',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthDate: 'string',
      certNo: 'string',
      certType: 'string',
      openTicketStatus: 'number',
      passengerName: 'string',
      passengerType: 'string',
      phone: 'string',
      ticketNo: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class FlightOrderDetailInfoResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: FlightOrderDetailInfoResponseBodyModule;
  /**
   * @example
   * A5009956-1077-52FB-B520-EA8C7E91D722
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 21041ce316577904808056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: FlightOrderDetailInfoResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

