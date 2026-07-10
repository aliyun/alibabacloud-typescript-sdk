// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingFlightListResponseBodyModuleFlightInfoListAirlineInfo extends $dara.Model {
  airlineCode?: string;
  airlineName?: string;
  airlineSimpleName?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      airlineSimpleName: 'airline_simple_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      airlineSimpleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListResponseBodyModuleFlightInfoListArrAirportInfo extends $dara.Model {
  airportCode?: string;
  airportName?: string;
  cityCode?: string;
  cityName?: string;
  terminal?: string;
  static names(): { [key: string]: string } {
    return {
      airportCode: 'airport_code',
      airportName: 'airport_name',
      cityCode: 'city_code',
      cityName: 'city_name',
      terminal: 'terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airportCode: 'string',
      airportName: 'string',
      cityCode: 'string',
      cityName: 'string',
      terminal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListResponseBodyModuleFlightInfoListCabinListModifyPriceList extends $dara.Model {
  passengerType?: number;
  ticketPrice?: number;
  upgradeFee?: number;
  upgradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      passengerType: 'passenger_type',
      ticketPrice: 'ticket_price',
      upgradeFee: 'upgrade_fee',
      upgradePrice: 'upgrade_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerType: 'number',
      ticketPrice: 'number',
      upgradeFee: 'number',
      upgradePrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListResponseBodyModuleFlightInfoListCabinList extends $dara.Model {
  cabin?: string;
  cabinClass?: string;
  cabinDesc?: string;
  cabinDiscount?: number;
  childCabin?: string;
  leftNum?: string;
  modifyPriceList?: TicketChangingFlightListResponseBodyModuleFlightInfoListCabinListModifyPriceList[];
  otaItemid?: string;
  static names(): { [key: string]: string } {
    return {
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinDesc: 'cabin_desc',
      cabinDiscount: 'cabin_discount',
      childCabin: 'child_cabin',
      leftNum: 'left_num',
      modifyPriceList: 'modify_price_list',
      otaItemid: 'ota_itemid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabin: 'string',
      cabinClass: 'string',
      cabinDesc: 'string',
      cabinDiscount: 'number',
      childCabin: 'string',
      leftNum: 'string',
      modifyPriceList: { 'type': 'array', 'itemType': TicketChangingFlightListResponseBodyModuleFlightInfoListCabinListModifyPriceList },
      otaItemid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modifyPriceList)) {
      $dara.Model.validateArray(this.modifyPriceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListResponseBodyModuleFlightInfoListDepAirportInfo extends $dara.Model {
  airportCode?: string;
  airportName?: string;
  cityCode?: string;
  cityName?: string;
  terminal?: string;
  static names(): { [key: string]: string } {
    return {
      airportCode: 'airport_code',
      airportName: 'airport_name',
      cityCode: 'city_code',
      cityName: 'city_name',
      terminal: 'terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airportCode: 'string',
      airportName: 'string',
      cityCode: 'string',
      cityName: 'string',
      terminal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListResponseBodyModuleFlightInfoListLowestCabinPrice extends $dara.Model {
  passengerType?: number;
  ticketPrice?: number;
  upgradeFee?: number;
  upgradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      passengerType: 'passenger_type',
      ticketPrice: 'ticket_price',
      upgradeFee: 'upgrade_fee',
      upgradePrice: 'upgrade_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerType: 'number',
      ticketPrice: 'number',
      upgradeFee: 'number',
      upgradePrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListResponseBodyModuleFlightInfoList extends $dara.Model {
  airlineInfo?: TicketChangingFlightListResponseBodyModuleFlightInfoListAirlineInfo;
  arrAirportInfo?: TicketChangingFlightListResponseBodyModuleFlightInfoListArrAirportInfo;
  cabinList?: TicketChangingFlightListResponseBodyModuleFlightInfoListCabinList[];
  carrierAirline?: string;
  carrierNo?: string;
  depAirportInfo?: TicketChangingFlightListResponseBodyModuleFlightInfoListDepAirportInfo;
  flightNo?: string;
  flightSize?: string;
  flightType?: string;
  isProtocol?: boolean;
  isShare?: boolean;
  isStop?: boolean;
  lowestCabin?: string;
  lowestCabinClass?: string;
  lowestCabinDesc?: string;
  lowestCabinNum?: string;
  lowestCabinPrice?: TicketChangingFlightListResponseBodyModuleFlightInfoListLowestCabinPrice[];
  mealDesc?: string;
  modifyFlightArrTime?: string;
  modifyFlightDepDate?: string;
  modifyFlightDepTime?: string;
  sessionId?: string;
  stopArrTime?: string;
  stopCity?: string;
  stopDepTime?: string;
  static names(): { [key: string]: string } {
    return {
      airlineInfo: 'airline_info',
      arrAirportInfo: 'arr_airport_info',
      cabinList: 'cabin_list',
      carrierAirline: 'carrier_airline',
      carrierNo: 'carrier_no',
      depAirportInfo: 'dep_airport_info',
      flightNo: 'flight_no',
      flightSize: 'flight_size',
      flightType: 'flight_type',
      isProtocol: 'is_protocol',
      isShare: 'is_share',
      isStop: 'is_stop',
      lowestCabin: 'lowest_cabin',
      lowestCabinClass: 'lowest_cabin_class',
      lowestCabinDesc: 'lowest_cabin_desc',
      lowestCabinNum: 'lowest_cabin_num',
      lowestCabinPrice: 'lowest_cabin_price',
      mealDesc: 'meal_desc',
      modifyFlightArrTime: 'modify_flight_arr_time',
      modifyFlightDepDate: 'modify_flight_dep_date',
      modifyFlightDepTime: 'modify_flight_dep_time',
      sessionId: 'session_id',
      stopArrTime: 'stop_arr_time',
      stopCity: 'stop_city',
      stopDepTime: 'stop_dep_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineInfo: TicketChangingFlightListResponseBodyModuleFlightInfoListAirlineInfo,
      arrAirportInfo: TicketChangingFlightListResponseBodyModuleFlightInfoListArrAirportInfo,
      cabinList: { 'type': 'array', 'itemType': TicketChangingFlightListResponseBodyModuleFlightInfoListCabinList },
      carrierAirline: 'string',
      carrierNo: 'string',
      depAirportInfo: TicketChangingFlightListResponseBodyModuleFlightInfoListDepAirportInfo,
      flightNo: 'string',
      flightSize: 'string',
      flightType: 'string',
      isProtocol: 'boolean',
      isShare: 'boolean',
      isStop: 'boolean',
      lowestCabin: 'string',
      lowestCabinClass: 'string',
      lowestCabinDesc: 'string',
      lowestCabinNum: 'string',
      lowestCabinPrice: { 'type': 'array', 'itemType': TicketChangingFlightListResponseBodyModuleFlightInfoListLowestCabinPrice },
      mealDesc: 'string',
      modifyFlightArrTime: 'string',
      modifyFlightDepDate: 'string',
      modifyFlightDepTime: 'string',
      sessionId: 'string',
      stopArrTime: 'string',
      stopCity: 'string',
      stopDepTime: 'string',
    };
  }

  validate() {
    if(this.airlineInfo && typeof (this.airlineInfo as any).validate === 'function') {
      (this.airlineInfo as any).validate();
    }
    if(this.arrAirportInfo && typeof (this.arrAirportInfo as any).validate === 'function') {
      (this.arrAirportInfo as any).validate();
    }
    if(Array.isArray(this.cabinList)) {
      $dara.Model.validateArray(this.cabinList);
    }
    if(this.depAirportInfo && typeof (this.depAirportInfo as any).validate === 'function') {
      (this.depAirportInfo as any).validate();
    }
    if(Array.isArray(this.lowestCabinPrice)) {
      $dara.Model.validateArray(this.lowestCabinPrice);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListResponseBodyModule extends $dara.Model {
  flightInfoList?: TicketChangingFlightListResponseBodyModuleFlightInfoList[];
  static names(): { [key: string]: string } {
    return {
      flightInfoList: 'flight_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightInfoList: { 'type': 'array', 'itemType': TicketChangingFlightListResponseBodyModuleFlightInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.flightInfoList)) {
      $dara.Model.validateArray(this.flightInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: TicketChangingFlightListResponseBodyModule;
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
      module: TicketChangingFlightListResponseBodyModule,
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

