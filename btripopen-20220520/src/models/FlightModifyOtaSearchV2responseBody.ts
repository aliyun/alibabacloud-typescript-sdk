// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleAgentInfoAttributeShowInfoMapValue } from "./ModuleAgentInfoAttributeShowInfoMapValue";
import { ModuleAgentInfosAttributeShowInfoMapValue } from "./ModuleAgentInfosAttributeShowInfoMapValue";


export class FlightModifyOtaSearchV2ResponseBodyModuleAgentInfosCabinClassInfo extends $dara.Model {
  cabinClass?: string;
  className?: string;
  innerCabinClass?: number;
  quantity?: string;
  static names(): { [key: string]: string } {
    return {
      cabinClass: 'cabin_class',
      className: 'class_name',
      innerCabinClass: 'inner_cabin_class',
      quantity: 'quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinClass: 'string',
      className: 'string',
      innerCabinClass: 'number',
      quantity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOtaSearchV2ResponseBodyModuleAgentInfosPriceInfoDTOReShopPriceInfoDTO extends $dara.Model {
  reShopAdultChangeFee?: number;
  reShopAdultPrice?: number;
  reShopAdultPriceGap?: number;
  reShopChildChangeFee?: number;
  reShopChildPrice?: number;
  reShopChildPriceGap?: number;
  reShopInfChangeFee?: number;
  reShopInfPrice?: number;
  reShopInfPriceGap?: number;
  static names(): { [key: string]: string } {
    return {
      reShopAdultChangeFee: 're_shop_adult_change_fee',
      reShopAdultPrice: 're_shop_adult_price',
      reShopAdultPriceGap: 're_shop_adult_price_gap',
      reShopChildChangeFee: 're_shop_child_change_fee',
      reShopChildPrice: 're_shop_child_price',
      reShopChildPriceGap: 're_shop_child_price_gap',
      reShopInfChangeFee: 're_shop_inf_change_fee',
      reShopInfPrice: 're_shop_inf_price',
      reShopInfPriceGap: 're_shop_inf_price_gap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reShopAdultChangeFee: 'number',
      reShopAdultPrice: 'number',
      reShopAdultPriceGap: 'number',
      reShopChildChangeFee: 'number',
      reShopChildPrice: 'number',
      reShopChildPriceGap: 'number',
      reShopInfChangeFee: 'number',
      reShopInfPrice: 'number',
      reShopInfPriceGap: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOtaSearchV2ResponseBodyModuleAgentInfosPriceInfoDTO extends $dara.Model {
  adultPrice?: number;
  adultTax?: number;
  adultTotalPrice?: number;
  beforeControlPrice?: number;
  childPrice?: number;
  childTax?: number;
  childTotalPrice?: number;
  infantPrice?: number;
  infantTax?: number;
  infantTotalPrice?: number;
  originalAdultPrice?: number;
  originalAdultTotalPrice?: number;
  reShopPriceInfoDTO?: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfosPriceInfoDTOReShopPriceInfoDTO;
  static names(): { [key: string]: string } {
    return {
      adultPrice: 'adult_price',
      adultTax: 'adult_tax',
      adultTotalPrice: 'adult_total_price',
      beforeControlPrice: 'before_control_price',
      childPrice: 'child_price',
      childTax: 'child_tax',
      childTotalPrice: 'child_total_price',
      infantPrice: 'infant_price',
      infantTax: 'infant_tax',
      infantTotalPrice: 'infant_total_price',
      originalAdultPrice: 'original_adult_price',
      originalAdultTotalPrice: 'original_adult_total_price',
      reShopPriceInfoDTO: 're_shop_price_info_d_t_o',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultPrice: 'number',
      adultTax: 'number',
      adultTotalPrice: 'number',
      beforeControlPrice: 'number',
      childPrice: 'number',
      childTax: 'number',
      childTotalPrice: 'number',
      infantPrice: 'number',
      infantTax: 'number',
      infantTotalPrice: 'number',
      originalAdultPrice: 'number',
      originalAdultTotalPrice: 'number',
      reShopPriceInfoDTO: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfosPriceInfoDTOReShopPriceInfoDTO,
    };
  }

  validate() {
    if(this.reShopPriceInfoDTO && typeof (this.reShopPriceInfoDTO as any).validate === 'function') {
      (this.reShopPriceInfoDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOtaSearchV2ResponseBodyModuleAgentInfos extends $dara.Model {
  attributeShowInfoMap?: { [key: string]: ModuleAgentInfosAttributeShowInfoMapValue[] };
  bestDiscount?: number;
  cabinClassInfo?: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfosCabinClassInfo;
  cabinCode?: number;
  cabinName?: string;
  itemId?: string;
  modifyTypeDesc?: string;
  modifyTypeName?: string;
  priceInfoDTO?: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfosPriceInfoDTO;
  quantity?: number;
  supportChildTicket?: boolean;
  static names(): { [key: string]: string } {
    return {
      attributeShowInfoMap: 'attribute_show_info_map',
      bestDiscount: 'best_discount',
      cabinClassInfo: 'cabin_class_info',
      cabinCode: 'cabin_code',
      cabinName: 'cabin_name',
      itemId: 'item_id',
      modifyTypeDesc: 'modify_type_desc',
      modifyTypeName: 'modify_type_name',
      priceInfoDTO: 'price_info_d_t_o',
      quantity: 'quantity',
      supportChildTicket: 'support_child_ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeShowInfoMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ModuleAgentInfosAttributeShowInfoMapValue } },
      bestDiscount: 'number',
      cabinClassInfo: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfosCabinClassInfo,
      cabinCode: 'number',
      cabinName: 'string',
      itemId: 'string',
      modifyTypeDesc: 'string',
      modifyTypeName: 'string',
      priceInfoDTO: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfosPriceInfoDTO,
      quantity: 'number',
      supportChildTicket: 'boolean',
    };
  }

  validate() {
    if(this.attributeShowInfoMap) {
      $dara.Model.validateMap(this.attributeShowInfoMap);
    }
    if(this.cabinClassInfo && typeof (this.cabinClassInfo as any).validate === 'function') {
      (this.cabinClassInfo as any).validate();
    }
    if(this.priceInfoDTO && typeof (this.priceInfoDTO as any).validate === 'function') {
      (this.priceInfoDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOtaSearchV2ResponseBodyModuleAgentInfoCabinClassInfo extends $dara.Model {
  cabinClass?: string;
  className?: string;
  innerCabinClass?: number;
  quantity?: string;
  static names(): { [key: string]: string } {
    return {
      cabinClass: 'cabin_class',
      className: 'class_name',
      innerCabinClass: 'inner_cabin_class',
      quantity: 'quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinClass: 'string',
      className: 'string',
      innerCabinClass: 'number',
      quantity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOtaSearchV2ResponseBodyModuleAgentInfoPriceInfoDTOReShopPriceInfoDTO extends $dara.Model {
  reShopAdultChangeFee?: number;
  reShopAdultPrice?: number;
  reShopAdultPriceGap?: number;
  reShopChildChangeFee?: number;
  reShopChildPrice?: number;
  reShopChildPriceGap?: number;
  reShopInfChangeFee?: number;
  reShopInfPrice?: number;
  reShopInfPriceGap?: number;
  static names(): { [key: string]: string } {
    return {
      reShopAdultChangeFee: 're_shop_adult_change_fee',
      reShopAdultPrice: 're_shop_adult_price',
      reShopAdultPriceGap: 're_shop_adult_price_gap',
      reShopChildChangeFee: 're_shop_child_change_fee',
      reShopChildPrice: 're_shop_child_price',
      reShopChildPriceGap: 're_shop_child_price_gap',
      reShopInfChangeFee: 're_shop_inf_change_fee',
      reShopInfPrice: 're_shop_inf_price',
      reShopInfPriceGap: 're_shop_inf_price_gap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reShopAdultChangeFee: 'number',
      reShopAdultPrice: 'number',
      reShopAdultPriceGap: 'number',
      reShopChildChangeFee: 'number',
      reShopChildPrice: 'number',
      reShopChildPriceGap: 'number',
      reShopInfChangeFee: 'number',
      reShopInfPrice: 'number',
      reShopInfPriceGap: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOtaSearchV2ResponseBodyModuleAgentInfoPriceInfoDTO extends $dara.Model {
  adultPrice?: number;
  adultTax?: number;
  adultTotalPrice?: number;
  beforeControlPrice?: number;
  childPrice?: number;
  childTax?: number;
  childTotalPrice?: number;
  infantPrice?: number;
  infantTax?: number;
  infantTotalPrice?: number;
  originalAdultPrice?: number;
  originalAdultTotalPrice?: number;
  reShopPriceInfoDTO?: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfoPriceInfoDTOReShopPriceInfoDTO;
  static names(): { [key: string]: string } {
    return {
      adultPrice: 'adult_price',
      adultTax: 'adult_tax',
      adultTotalPrice: 'adult_total_price',
      beforeControlPrice: 'before_control_price',
      childPrice: 'child_price',
      childTax: 'child_tax',
      childTotalPrice: 'child_total_price',
      infantPrice: 'infant_price',
      infantTax: 'infant_tax',
      infantTotalPrice: 'infant_total_price',
      originalAdultPrice: 'original_adult_price',
      originalAdultTotalPrice: 'original_adult_total_price',
      reShopPriceInfoDTO: 're_shop_price_info_d_t_o',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultPrice: 'number',
      adultTax: 'number',
      adultTotalPrice: 'number',
      beforeControlPrice: 'number',
      childPrice: 'number',
      childTax: 'number',
      childTotalPrice: 'number',
      infantPrice: 'number',
      infantTax: 'number',
      infantTotalPrice: 'number',
      originalAdultPrice: 'number',
      originalAdultTotalPrice: 'number',
      reShopPriceInfoDTO: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfoPriceInfoDTOReShopPriceInfoDTO,
    };
  }

  validate() {
    if(this.reShopPriceInfoDTO && typeof (this.reShopPriceInfoDTO as any).validate === 'function') {
      (this.reShopPriceInfoDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOtaSearchV2ResponseBodyModuleAgentInfo extends $dara.Model {
  attributeShowInfoMap?: { [key: string]: ModuleAgentInfoAttributeShowInfoMapValue[] };
  bestDiscount?: number;
  cabinClassInfo?: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfoCabinClassInfo;
  cabinCode?: number;
  cabinName?: string;
  itemId?: string;
  modifyTypeDesc?: string;
  modifyTypeName?: string;
  priceInfoDTO?: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfoPriceInfoDTO;
  quantity?: number;
  supportChildTicket?: boolean;
  static names(): { [key: string]: string } {
    return {
      attributeShowInfoMap: 'attribute_show_info_map',
      bestDiscount: 'best_discount',
      cabinClassInfo: 'cabin_class_info',
      cabinCode: 'cabin_code',
      cabinName: 'cabin_name',
      itemId: 'item_id',
      modifyTypeDesc: 'modify_type_desc',
      modifyTypeName: 'modify_type_name',
      priceInfoDTO: 'price_info_d_t_o',
      quantity: 'quantity',
      supportChildTicket: 'support_child_ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeShowInfoMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ModuleAgentInfoAttributeShowInfoMapValue } },
      bestDiscount: 'number',
      cabinClassInfo: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfoCabinClassInfo,
      cabinCode: 'number',
      cabinName: 'string',
      itemId: 'string',
      modifyTypeDesc: 'string',
      modifyTypeName: 'string',
      priceInfoDTO: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfoPriceInfoDTO,
      quantity: 'number',
      supportChildTicket: 'boolean',
    };
  }

  validate() {
    if(this.attributeShowInfoMap) {
      $dara.Model.validateMap(this.attributeShowInfoMap);
    }
    if(this.cabinClassInfo && typeof (this.cabinClassInfo as any).validate === 'function') {
      (this.cabinClassInfo as any).validate();
    }
    if(this.priceInfoDTO && typeof (this.priceInfoDTO as any).validate === 'function') {
      (this.priceInfoDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosDepAirportInfo extends $dara.Model {
  airportCode?: string;
  airportName?: string;
  airportShortName?: string;
  terminal?: string;
  static names(): { [key: string]: string } {
    return {
      airportCode: 'airport_code',
      airportName: 'airport_name',
      airportShortName: 'airport_short_name',
      terminal: 'terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airportCode: 'string',
      airportName: 'string',
      airportShortName: 'string',
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

export class FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosArrAirportInfo extends $dara.Model {
  airportCode?: string;
  airportName?: string;
  airportShortName?: string;
  terminal?: string;
  static names(): { [key: string]: string } {
    return {
      airportCode: 'airport_code',
      airportName: 'airport_name',
      airportShortName: 'airport_short_name',
      terminal: 'terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airportCode: 'string',
      airportName: 'string',
      airportShortName: 'string',
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

export class FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosAirlineInfo extends $dara.Model {
  airlineCode?: string;
  airlineChineseName?: string;
  airlineChineseShortName?: string;
  airlineIcon?: string;
  cheapFlight?: boolean;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineChineseName: 'airline_chinese_name',
      airlineChineseShortName: 'airline_chinese_short_name',
      airlineIcon: 'airline_icon',
      cheapFlight: 'cheap_flight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineChineseName: 'string',
      airlineChineseShortName: 'string',
      airlineIcon: 'string',
      cheapFlight: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightSharedInfoOperatingAirlineInfo extends $dara.Model {
  airlineCode?: string;
  airlineChineseName?: string;
  airlineChineseShortName?: string;
  airlineIcon?: string;
  cheapFlight?: boolean;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineChineseName: 'airline_chinese_name',
      airlineChineseShortName: 'airline_chinese_short_name',
      airlineIcon: 'airline_icon',
      cheapFlight: 'cheap_flight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineChineseName: 'string',
      airlineChineseShortName: 'string',
      airlineIcon: 'string',
      cheapFlight: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightSharedInfo extends $dara.Model {
  operatingFlightNo?: string;
  operatingAirlineInfo?: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightSharedInfoOperatingAirlineInfo;
  static names(): { [key: string]: string } {
    return {
      operatingFlightNo: 'operating_flight_no',
      operatingAirlineInfo: 'operating_airline_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatingFlightNo: 'string',
      operatingAirlineInfo: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightSharedInfoOperatingAirlineInfo,
    };
  }

  validate() {
    if(this.operatingAirlineInfo && typeof (this.operatingAirlineInfo as any).validate === 'function') {
      (this.operatingAirlineInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightStopInfo extends $dara.Model {
  stopCityName?: string;
  stopArrTime?: string;
  stopDepTime?: string;
  stopCityCode?: string;
  stopAirport?: string;
  stopArrTerm?: string;
  stopDepTerm?: string;
  static names(): { [key: string]: string } {
    return {
      stopCityName: 'stop_city_name',
      stopArrTime: 'stop_arr_time',
      stopDepTime: 'stop_dep_time',
      stopCityCode: 'stop_city_code',
      stopAirport: 'stop_airport',
      stopArrTerm: 'stop_arr_term',
      stopDepTerm: 'stop_dep_term',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopCityName: 'string',
      stopArrTime: 'string',
      stopDepTime: 'string',
      stopCityCode: 'string',
      stopAirport: 'string',
      stopArrTerm: 'string',
      stopDepTerm: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfos extends $dara.Model {
  journeySeq?: number;
  segmentSeq?: number;
  flightNo?: string;
  depCityCode?: string;
  arrCityCode?: string;
  depCityName?: string;
  arrCityName?: string;
  depAirportInfo?: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosDepAirportInfo;
  arrAirportInfo?: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosArrAirportInfo;
  depTime?: string;
  arrTime?: string;
  airlineInfo?: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosAirlineInfo;
  share?: boolean;
  flightSharedInfo?: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightSharedInfo;
  stop?: boolean;
  flightStopInfo?: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightStopInfo;
  transferTime?: number;
  duration?: number;
  manufacturer?: string;
  flightType?: string;
  flightSize?: string;
  mealDesc?: string;
  onTimeRate?: string;
  static names(): { [key: string]: string } {
    return {
      journeySeq: 'journey_seq',
      segmentSeq: 'segment_seq',
      flightNo: 'flight_no',
      depCityCode: 'dep_city_code',
      arrCityCode: 'arr_city_code',
      depCityName: 'dep_city_name',
      arrCityName: 'arr_city_name',
      depAirportInfo: 'dep_airport_info',
      arrAirportInfo: 'arr_airport_info',
      depTime: 'dep_time',
      arrTime: 'arr_time',
      airlineInfo: 'airline_info',
      share: 'share',
      flightSharedInfo: 'flight_shared_info',
      stop: 'stop',
      flightStopInfo: 'flight_stop_info',
      transferTime: 'transfer_time',
      duration: 'duration',
      manufacturer: 'manufacturer',
      flightType: 'flight_type',
      flightSize: 'flight_size',
      mealDesc: 'meal_desc',
      onTimeRate: 'on_time_rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journeySeq: 'number',
      segmentSeq: 'number',
      flightNo: 'string',
      depCityCode: 'string',
      arrCityCode: 'string',
      depCityName: 'string',
      arrCityName: 'string',
      depAirportInfo: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosDepAirportInfo,
      arrAirportInfo: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosArrAirportInfo,
      depTime: 'string',
      arrTime: 'string',
      airlineInfo: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosAirlineInfo,
      share: 'boolean',
      flightSharedInfo: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightSharedInfo,
      stop: 'boolean',
      flightStopInfo: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightStopInfo,
      transferTime: 'number',
      duration: 'number',
      manufacturer: 'string',
      flightType: 'string',
      flightSize: 'string',
      mealDesc: 'string',
      onTimeRate: 'string',
    };
  }

  validate() {
    if(this.depAirportInfo && typeof (this.depAirportInfo as any).validate === 'function') {
      (this.depAirportInfo as any).validate();
    }
    if(this.arrAirportInfo && typeof (this.arrAirportInfo as any).validate === 'function') {
      (this.arrAirportInfo as any).validate();
    }
    if(this.airlineInfo && typeof (this.airlineInfo as any).validate === 'function') {
      (this.airlineInfo as any).validate();
    }
    if(this.flightSharedInfo && typeof (this.flightSharedInfo as any).validate === 'function') {
      (this.flightSharedInfo as any).validate();
    }
    if(this.flightStopInfo && typeof (this.flightStopInfo as any).validate === 'function') {
      (this.flightStopInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOtaSearchV2ResponseBodyModulePassengerCount extends $dara.Model {
  adultPassengerNum?: number;
  childPassengerNum?: number;
  infantPassengerNum?: number;
  static names(): { [key: string]: string } {
    return {
      adultPassengerNum: 'adult_passenger_num',
      childPassengerNum: 'child_passenger_num',
      infantPassengerNum: 'infant_passenger_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultPassengerNum: 'number',
      childPassengerNum: 'number',
      infantPassengerNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOtaSearchV2ResponseBodyModule extends $dara.Model {
  agentInfos?: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfos[];
  agentInfo?: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfo;
  cacheKey?: string;
  flightSegmentInfos?: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfos[][];
  passengerCount?: FlightModifyOtaSearchV2ResponseBodyModulePassengerCount;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentInfos: 'agentInfos',
      agentInfo: 'agent_info',
      cacheKey: 'cache_key',
      flightSegmentInfos: 'flight_segment_infos',
      passengerCount: 'passenger_count',
      sessionId: 'session_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentInfos: { 'type': 'array', 'itemType': FlightModifyOtaSearchV2ResponseBodyModuleAgentInfos },
      agentInfo: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfo,
      cacheKey: 'string',
      flightSegmentInfos: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfos } },
      passengerCount: FlightModifyOtaSearchV2ResponseBodyModulePassengerCount,
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentInfos)) {
      $dara.Model.validateArray(this.agentInfos);
    }
    if(this.agentInfo && typeof (this.agentInfo as any).validate === 'function') {
      (this.agentInfo as any).validate();
    }
    if(Array.isArray(this.flightSegmentInfos)) {
      $dara.Model.validateArray(this.flightSegmentInfos);
    }
    if(this.passengerCount && typeof (this.passengerCount as any).validate === 'function') {
      (this.passengerCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOtaSearchV2ResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: FlightModifyOtaSearchV2ResponseBodyModule;
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
      module: FlightModifyOtaSearchV2ResponseBodyModule,
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

