// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderDetailInfoResponseBodyModuleFlightInfoList extends $dara.Model {
  airlineCode?: string;
  airlineName?: string;
  airlineSimpleName?: string;
  arrAirport?: string;
  arrAirportCode?: string;
  arrAirportCodeName?: string;
  arrCity?: string;
  arrCityCode?: string;
  arrTerminal?: string;
  arrTime?: string;
  baggage?: string;
  buildPrice?: number;
  cabin?: string;
  cabinClass?: string;
  carrier?: string;
  depAirport?: string;
  depAirportCode?: string;
  depAirportCodeName?: string;
  depCity?: string;
  depCityCode?: string;
  depTerminal?: string;
  depTime?: string;
  flightNo?: string;
  lastCabin?: string;
  lastFlightNo?: string;
  meal?: string;
  oilPrice?: number;
  segmentType?: number;
  stopArrTime?: string;
  stopCity?: string;
  stopDepTime?: string;
  ticketPrice?: number;
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
  openTicketStatus?: string;
  pnrCode?: string;
  ticketNo?: string;
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
  birthDate?: string;
  certNo?: string;
  certType?: string;
  openTicketStatus?: number;
  passengerName?: string;
  passengerType?: string;
  phone?: string;
  ticketNo?: string;
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
  alipayTradeNo?: string;
  bookUserId?: string;
  btripOrderId?: number;
  contactName?: string;
  contactPhone?: string;
  disOrderId?: string;
  extra?: string;
  flightInfoList?: FlightOrderDetailInfoResponseBodyModuleFlightInfoList[];
  lastPayTime?: string;
  payStatus?: number;
  payTime?: string;
  promotionPrice?: number;
  settleAmount?: number;
  settleType?: number;
  status?: number;
  ticketInfoList?: FlightOrderDetailInfoResponseBodyModuleTicketInfoList[];
  totalBuildPrice?: number;
  totalOilPrice?: number;
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
  code?: string;
  message?: string;
  module?: FlightOrderDetailInfoResponseBodyModule;
  requestId?: string;
  success?: boolean;
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

