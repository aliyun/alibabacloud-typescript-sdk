// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingDetailResponseBodyModuleFlightInfoList extends $dara.Model {
  /**
   * @example
   * MU
   */
  airlineCode?: string;
  airlineName?: string;
  airlineSimpleName?: string;
  arrAirport?: string;
  /**
   * @example
   * HGH
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
  /**
   * @example
   * T3
   */
  arrTerminal?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  arrTime?: string;
  baggage?: string;
  /**
   * @example
   * 100
   */
  buildPrice?: number;
  /**
   * @example
   * V
   */
  cabin?: string;
  cabinClass?: string;
  /**
   * @example
   * MU3849
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
  /**
   * @example
   * T4
   */
  depTerminal?: string;
  /**
   * @example
   * 2000-01-01 00:00:00
   */
  depTime?: string;
  /**
   * @example
   * MU3849
   */
  flightNo?: string;
  /**
   * @example
   * Y
   */
  lastCabin?: string;
  /**
   * @example
   * CA1982
   */
  lastFlightNo?: string;
  /**
   * @example
   * 3
   */
  meal?: string;
  /**
   * @example
   * 100
   */
  oilPrice?: number;
  segmentType?: number;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  stopArrTime?: string;
  /**
   * @example
   * NGB
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

export class TicketChangingDetailResponseBodyModuleTravelerInfoList extends $dara.Model {
  /**
   * @example
   * 2000-01-01
   */
  birthDate?: string;
  /**
   * @example
   * 12345
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
   * 012992
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

export class TicketChangingDetailResponseBodyModule extends $dara.Model {
  alipayTradeNo?: string;
  /**
   * @example
   * 1002
   */
  btripOrderId?: number;
  /**
   * @example
   * 37772
   */
  btripSubOrderId?: number;
  /**
   * @example
   * dis123
   */
  disOrderId?: string;
  /**
   * @example
   * chang123
   */
  disSubOrderId?: string;
  /**
   * @example
   * {}
   */
  extra?: string;
  flightInfoList?: TicketChangingDetailResponseBodyModuleFlightInfoList[];
  /**
   * @example
   * 2022-12-30 11:30:00
   */
  lastPayTime?: string;
  /**
   * @example
   * 0
   */
  payStatus?: number;
  /**
   * @example
   * 2022-12-30 11:30:00
   */
  payTime?: string;
  /**
   * @example
   * 100
   */
  settlePrice?: number;
  settleType?: number;
  status?: number;
  /**
   * @example
   * 100
   */
  totalChangePrice?: number;
  /**
   * @example
   * 100
   */
  totalPrice?: number;
  /**
   * @example
   * 100
   */
  totalUpgradePrice?: number;
  travelerInfoList?: TicketChangingDetailResponseBodyModuleTravelerInfoList[];
  static names(): { [key: string]: string } {
    return {
      alipayTradeNo: 'alipay_trade_no',
      btripOrderId: 'btrip_order_id',
      btripSubOrderId: 'btrip_sub_order_id',
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      extra: 'extra',
      flightInfoList: 'flight_info_list',
      lastPayTime: 'last_pay_time',
      payStatus: 'pay_status',
      payTime: 'pay_time',
      settlePrice: 'settle_price',
      settleType: 'settle_type',
      status: 'status',
      totalChangePrice: 'total_change_price',
      totalPrice: 'total_price',
      totalUpgradePrice: 'total_upgrade_price',
      travelerInfoList: 'traveler_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayTradeNo: 'string',
      btripOrderId: 'number',
      btripSubOrderId: 'number',
      disOrderId: 'string',
      disSubOrderId: 'string',
      extra: 'string',
      flightInfoList: { 'type': 'array', 'itemType': TicketChangingDetailResponseBodyModuleFlightInfoList },
      lastPayTime: 'string',
      payStatus: 'number',
      payTime: 'string',
      settlePrice: 'number',
      settleType: 'number',
      status: 'number',
      totalChangePrice: 'number',
      totalPrice: 'number',
      totalUpgradePrice: 'number',
      travelerInfoList: { 'type': 'array', 'itemType': TicketChangingDetailResponseBodyModuleTravelerInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.flightInfoList)) {
      $dara.Model.validateArray(this.flightInfoList);
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

export class TicketChangingDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  message?: string;
  module?: TicketChangingDetailResponseBodyModule;
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
   * 210f079e16603757182131635d866a
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
      module: TicketChangingDetailResponseBodyModule,
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

