// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleReShopItemListShoppingItemMapValue } from "./ModuleReShopItemListShoppingItemMapValue";
import { ModuleReShopItemListSubItemsShoppingItemMapValue } from "./ModuleReShopItemListSubItemsShoppingItemMapValue";
import { ModuleReShopItemListSubItemsRefundChangeRuleOfferPenaltyInfoMapValue } from "./ModuleReShopItemListSubItemsRefundChangeRuleOfferPenaltyInfoMapValue";
import { ModuleReShopItemListSubItemsBaggageRuleOfferBaggageInfoMapValue } from "./ModuleReShopItemListSubItemsBaggageRuleOfferBaggageInfoMapValue";


export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosAirlineInfo extends $dara.Model {
  /**
   * @remarks
   * The airline code.
   * 
   * @example
   * MU
   */
  airlineCode?: string;
  /**
   * @remarks
   * The airline name.
   * 
   * @example
   * 中国东方航空
   */
  airlineName?: string;
  /**
   * @remarks
   * Indicates whether the airline is a low-cost airline.
   * 
   * @example
   * false
   */
  cheapAirline?: boolean;
  /**
   * @remarks
   * The URL of the airline icon.
   * 
   * @example
   * https://
   */
  iconUrl?: string;
  /**
   * @remarks
   * The short name of the airline.
   * 
   * @example
   * 东方航空
   */
  shortName?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      cheapAirline: 'cheap_airline',
      iconUrl: 'icon_url',
      shortName: 'short_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      cheapAirline: 'boolean',
      iconUrl: 'string',
      shortName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosArrAirportInfo extends $dara.Model {
  /**
   * @remarks
   * The airport code.
   * 
   * @example
   * HGH
   */
  airportCode?: string;
  /**
   * @remarks
   * The airport name.
   * 
   * @example
   * 萧山国际机场
   */
  airportName?: string;
  /**
   * @remarks
   * The short name of the airport.
   * 
   * @example
   * 萧山
   */
  airportShortName?: string;
  /**
   * @remarks
   * The terminal.
   * 
   * @example
   * T3
   */
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

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosDepAirportInfo extends $dara.Model {
  /**
   * @remarks
   * The airport code.
   * 
   * @example
   * PKX
   */
  airportCode?: string;
  /**
   * @remarks
   * The airport name.
   * 
   * @example
   * 大兴国际机场
   */
  airportName?: string;
  /**
   * @remarks
   * The short name of the airport.
   * 
   * @example
   * 大兴
   */
  airportShortName?: string;
  /**
   * @remarks
   * The terminal.
   * 
   * @example
   * T3
   */
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

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfoOperatingAirlineInfo extends $dara.Model {
  /**
   * @remarks
   * The airline code.
   * 
   * @example
   * CA
   */
  airlineCode?: string;
  /**
   * @remarks
   * The airline name.
   * 
   * @example
   * 中国国际航空
   */
  airlineName?: string;
  /**
   * @remarks
   * Indicates whether the airline is a low-cost airline.
   * 
   * @example
   * false
   */
  cheapAirline?: boolean;
  /**
   * @remarks
   * The URL of the airline icon.
   * 
   * @example
   * https://
   */
  iconUrl?: string;
  /**
   * @remarks
   * The short name of the airline.
   * 
   * @example
   * 国航
   */
  shortName?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      cheapAirline: 'cheap_airline',
      iconUrl: 'icon_url',
      shortName: 'short_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      cheapAirline: 'boolean',
      iconUrl: 'string',
      shortName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfo extends $dara.Model {
  /**
   * @remarks
   * The operating airline information.
   */
  operatingAirlineInfo?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfoOperatingAirlineInfo;
  /**
   * @remarks
   * The operating flight number. This field has a value only for codeshare flights.
   * 
   * @example
   * CA601
   */
  operatingFlightNo?: string;
  static names(): { [key: string]: string } {
    return {
      operatingAirlineInfo: 'operating_airline_info',
      operatingFlightNo: 'operating_flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatingAirlineInfo: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfoOperatingAirlineInfo,
      operatingFlightNo: 'string',
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

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightStopInfoListStopAirportCountyInfo extends $dara.Model {
  /**
   * @remarks
   * The administrative division code.
   * 
   * @example
   * 110000
   */
  adcode?: string;
  /**
   * @remarks
   * The airport city code.
   * 
   * @example
   * BJS
   */
  airportCityCode?: string;
  /**
   * @remarks
   * The city name of the airport.
   * 
   * @example
   * 北京
   */
  airportCityName?: string;
  /**
   * @remarks
   * The airport code.
   * 
   * @example
   * PKX
   */
  airportCode?: string;
  /**
   * @remarks
   * The airport name.
   * 
   * @example
   * 大兴机场
   */
  airportName?: string;
  /**
   * @remarks
   * The parent city name of the airport.
   * 
   * @example
   * 北京
   */
  airportParentCityName?: string;
  /**
   * @remarks
   * The administrative division code of the county-level city where the airport is located.
   * >Notice: This value is null if the airport is not at the county level.
   * 
   * @example
   * 110000
   */
  countyCityAdcode?: string;
  /**
   * @remarks
   * The name of the county-level city where the airport is located.
   * >Notice: This value is null if the airport is not at the county level.
   * 
   * @example
   * 北京
   */
  countyCityName?: string;
  /**
   * @remarks
   * The administrative division code of the prefecture-level city where the airport is located.
   * 
   * @example
   * 110000
   */
  prefectureCityAdcode?: string;
  /**
   * @remarks
   * The name of the prefecture-level city where the airport is located.
   * 
   * @example
   * 北京
   */
  prefectureCityName?: string;
  static names(): { [key: string]: string } {
    return {
      adcode: 'adcode',
      airportCityCode: 'airport_city_code',
      airportCityName: 'airport_city_name',
      airportCode: 'airport_code',
      airportName: 'airport_name',
      airportParentCityName: 'airport_parent_city_name',
      countyCityAdcode: 'county_city_adcode',
      countyCityName: 'county_city_name',
      prefectureCityAdcode: 'prefecture_city_adcode',
      prefectureCityName: 'prefecture_city_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adcode: 'string',
      airportCityCode: 'string',
      airportCityName: 'string',
      airportCode: 'string',
      airportName: 'string',
      airportParentCityName: 'string',
      countyCityAdcode: 'string',
      countyCityName: 'string',
      prefectureCityAdcode: 'string',
      prefectureCityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightStopInfoList extends $dara.Model {
  /**
   * @remarks
   * The stopover airport.
   * 
   * @example
   * 大兴机场
   */
  stopAirport?: string;
  /**
   * @remarks
   * The county information of the stopover airport.
   */
  stopAirportCountyInfo?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightStopInfoListStopAirportCountyInfo;
  /**
   * @remarks
   * The name of the stopover airport.
   * 
   * @example
   * PKX
   */
  stopAirportName?: string;
  /**
   * @remarks
   * The arrival terminal at the stopover.
   * 
   * @example
   * T1
   */
  stopArrTerm?: string;
  /**
   * @remarks
   * The arrival time at the stopover. Format: yyyy-MM-dd HH:mm.
   * 
   * @example
   * 2025-10-01 02:00
   */
  stopArrTime?: string;
  /**
   * @remarks
   * The three-letter code of the stopover city.
   * 
   * @example
   * BJS
   */
  stopCityCode?: string;
  /**
   * @remarks
   * The name of the stopover city.
   * 
   * @example
   * 北京
   */
  stopCityName?: string;
  /**
   * @remarks
   * The departure terminal at the stopover.
   * 
   * @example
   * T1
   */
  stopDepTerm?: string;
  /**
   * @remarks
   * The departure time from the stopover. Format: yyyy-MM-dd HH:mm.
   * 
   * @example
   * 2025-10-01 03:00
   */
  stopDepTime?: string;
  /**
   * @remarks
   * The stopover duration in minutes.
   * 
   * @example
   * 60
   */
  stopTime?: string;
  static names(): { [key: string]: string } {
    return {
      stopAirport: 'stop_airport',
      stopAirportCountyInfo: 'stop_airport_county_info',
      stopAirportName: 'stop_airport_name',
      stopArrTerm: 'stop_arr_term',
      stopArrTime: 'stop_arr_time',
      stopCityCode: 'stop_city_code',
      stopCityName: 'stop_city_name',
      stopDepTerm: 'stop_dep_term',
      stopDepTime: 'stop_dep_time',
      stopTime: 'stop_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopAirport: 'string',
      stopAirportCountyInfo: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightStopInfoListStopAirportCountyInfo,
      stopAirportName: 'string',
      stopArrTerm: 'string',
      stopArrTime: 'string',
      stopCityCode: 'string',
      stopCityName: 'string',
      stopDepTerm: 'string',
      stopDepTime: 'string',
      stopTime: 'string',
    };
  }

  validate() {
    if(this.stopAirportCountyInfo && typeof (this.stopAirportCountyInfo as any).validate === 'function') {
      (this.stopAirportCountyInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosLuggageDirectInfo extends $dara.Model {
  /**
   * @remarks
   * The baggage transfer type for the departure city. Valid values:
   * - 0: Re-check baggage.
   * - 1: Through check.
   * - null: Unknown.
   * 
   * @example
   * 1
   */
  depCityLuggageDirect?: number;
  /**
   * @remarks
   * The baggage transfer type for the departure city. Valid values:
   * - 0: Re-check baggage.
   * - 1: Through check.
   * - null: Unknown.
   * 
   * @example
   * 0
   */
  stopCityLuggageDirect?: number;
  static names(): { [key: string]: string } {
    return {
      depCityLuggageDirect: 'dep_city_luggage_direct',
      stopCityLuggageDirect: 'stop_city_luggage_direct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depCityLuggageDirect: 'number',
      stopCityLuggageDirect: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosOtherInfo extends $dara.Model {
  /**
   * @remarks
   * The aircraft age.
   * 
   * @example
   * 2.5年
   */
  aircraftAge?: string;
  /**
   * @remarks
   * The average delay duration.
   * 
   * @example
   * 平均延误58分钟
   */
  avgDelayTime?: string;
  /**
   * @remarks
   * The flight cancellation rate.
   * 
   * @example
   * 20%
   */
  flightCancelRate?: string;
  /**
   * @remarks
   * The jet bridge rate.
   * 
   * @example
   * 10%
   */
  jetBridgeRate?: string;
  /**
   * @remarks
   * The on-time rate information.
   * 
   * @example
   * 90%
   */
  onTimeRate?: string;
  /**
   * @remarks
   * Indicates whether Wi-Fi is available.
   * 
   * @example
   * true
   */
  wifi?: boolean;
  static names(): { [key: string]: string } {
    return {
      aircraftAge: 'aircraft_age',
      avgDelayTime: 'avg_delay_time',
      flightCancelRate: 'flight_cancel_rate',
      jetBridgeRate: 'jet_bridge_rate',
      onTimeRate: 'on_time_rate',
      wifi: 'wifi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aircraftAge: 'string',
      avgDelayTime: 'string',
      flightCancelRate: 'string',
      jetBridgeRate: 'string',
      onTimeRate: 'string',
      wifi: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosSegmentVisaRemark extends $dara.Model {
  /**
   * @remarks
   * The transit visa information for the departure city.
   * 
   * @example
   * 前往菲律宾的旅客，请确保持有往返纸质行程单以及纸质签证办理登记手续，否则可能会被当地政府拒绝入境
   */
  depCityVisaRemark?: string;
  /**
   * @remarks
   * The transit visa type for the departure city. Valid values:
   * - 0: No transit visa required.
   * - 1: Transit visa required.
   * 
   * @example
   * 1
   */
  depCityVisaType?: number;
  /**
   * @remarks
   * The transit visa information for stopover cities. Each stopover city corresponds to one entry.
   */
  stopCityVisaRemarks?: string[];
  /**
   * @remarks
   * The transit visa types for stopover cities. Each stopover city corresponds to one entry.
   */
  stopCityVisaTypes?: number[];
  static names(): { [key: string]: string } {
    return {
      depCityVisaRemark: 'dep_city_visa_remark',
      depCityVisaType: 'dep_city_visa_type',
      stopCityVisaRemarks: 'stop_city_visa_remarks',
      stopCityVisaTypes: 'stop_city_visa_types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depCityVisaRemark: 'string',
      depCityVisaType: 'number',
      stopCityVisaRemarks: { 'type': 'array', 'itemType': 'string' },
      stopCityVisaTypes: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.stopCityVisaRemarks)) {
      $dara.Model.validateArray(this.stopCityVisaRemarks);
    }
    if(Array.isArray(this.stopCityVisaTypes)) {
      $dara.Model.validateArray(this.stopCityVisaTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosTicketingAirlineInfo extends $dara.Model {
  /**
   * @remarks
   * The airline code.
   * 
   * @example
   * CA
   */
  airlineCode?: string;
  /**
   * @remarks
   * The airline name.
   * 
   * @example
   * 中国国际航空
   */
  airlineName?: string;
  /**
   * @remarks
   * Indicates whether the airline is a low-cost airline.
   * 
   * @example
   * false
   */
  cheapAirline?: boolean;
  /**
   * @remarks
   * The URL of the airline icon.
   * 
   * @example
   * https://
   */
  iconUrl?: string;
  /**
   * @remarks
   * The short name of the airline.
   * 
   * @example
   * 国航
   */
  shortName?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      cheapAirline: 'cheap_airline',
      iconUrl: 'icon_url',
      shortName: 'short_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      cheapAirline: 'boolean',
      iconUrl: 'string',
      shortName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfos extends $dara.Model {
  /**
   * @remarks
   * The marketing airline information.
   */
  airlineInfo?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosAirlineInfo;
  /**
   * @remarks
   * The arrival airport information.
   */
  arrAirportInfo?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosArrAirportInfo;
  /**
   * @remarks
   * The three-letter code of the arrival city.
   * 
   * @example
   * HGH
   */
  arrCityCode?: string;
  /**
   * @remarks
   * The name of the arrival city.
   * 
   * @example
   * 杭州
   */
  arrCityName?: string;
  /**
   * @remarks
   * The arrival time. Format: yyyy-MM-dd HH:mm.
   * 
   * @example
   * 2025-12-28 15:25
   */
  arrTime?: string;
  /**
   * @remarks
   * The arrival time with time zone. Format: 2022-06-06T12:56:34Z.
   * 
   * @example
   * 2025-12-28T15:25:34Z
   */
  arrTimeUTC?: string;
  /**
   * @remarks
   * The departure airport information.
   */
  depAirportInfo?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosDepAirportInfo;
  /**
   * @remarks
   * The three-letter code of the departure city.
   * 
   * @example
   * BJS
   */
  depCityCode?: string;
  /**
   * @remarks
   * The name of the departure city.
   * 
   * @example
   * 北京
   */
  depCityName?: string;
  /**
   * @remarks
   * The departure time. Format: yyyy-MM-dd HH:mm.
   * 
   * @example
   * 2025-12-28 12:25
   */
  depTime?: string;
  /**
   * @remarks
   * The departure time with time zone. Format: 2022-06-06T12:56:34Z.
   * 
   * @example
   * 2025-12-28T12:25:34Z
   */
  depTimeUTC?: string;
  /**
   * @remarks
   * The total duration of the segment in minutes.
   * 
   * @example
   * 140
   */
  duration?: number;
  /**
   * @remarks
   * The flight number.
   * 
   * @example
   * MU5131
   */
  flightNo?: string;
  /**
   * @remarks
   * The codeshare flight information.
   */
  flightShareInfo?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfo;
  /**
   * @remarks
   * The aircraft type name.
   * 
   * @example
   * 中型机
   */
  flightSize?: string;
  /**
   * @remarks
   * The list of flight stopovers.
   */
  flightStopInfoList?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightStopInfoList[];
  /**
   * @remarks
   * The aircraft type code.
   * 
   * @example
   * 320
   */
  flightType?: string;
  /**
   * @remarks
   * The journey index.
   * 
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @remarks
   * Indicates whether luggage is through-checked for the current segment.
   */
  luggageDirectInfo?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosLuggageDirectInfo;
  /**
   * @remarks
   * The manufacturer.
   * 
   * @example
   * 空客
   */
  manufacturer?: string;
  /**
   * @remarks
   * The meal availability. Valid values: 0 (no meal) and 1 (meal provided).
   * 
   * @example
   * 1
   */
  meal?: number;
  /**
   * @remarks
   * The meal description.
   * 
   * @example
   * 小食
   */
  mealDesc?: string;
  /**
   * @remarks
   * The flight mileage.
   * 
   * @example
   * 1200
   */
  miles?: number;
  /**
   * @remarks
   * The on-time rate information, such as "arrival on-time rate 90%".
   * 
   * @example
   * 80%
   */
  onTimeRate?: string;
  /**
   * @remarks
   * The number of extra days. For example, 1 indicates the flight crosses 1 day.
   * 
   * @example
   * 0
   */
  oneMore?: number;
  /**
   * @remarks
   * The cross-day display text.
   * 
   * @example
   * +1天
   */
  oneMoreShow?: string;
  /**
   * @remarks
   * The other information about the flight segment.
   */
  otherInfo?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosOtherInfo;
  /**
   * @remarks
   * The segment index, starting from 0 within the same journey.
   * 
   * @example
   * 0
   */
  segmentIndex?: number;
  /**
   * @remarks
   * The unique key of the segment. Format: flight number + departure airport + arrival airport + departure date (MMdd).
   * 
   * @example
   * KN6728HGHPKX0725
   */
  segmentKey?: string;
  /**
   * @remarks
   * The transit visa information for the current segment.
   */
  segmentVisaRemark?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosSegmentVisaRemark;
  /**
   * @remarks
   * Indicates whether the flight is a codeshare flight.
   * 
   * @example
   * false
   */
  share?: boolean;
  /**
   * @remarks
   * The short name of the aircraft type.
   * 
   * @example
   * 中
   */
  shortFlightSize?: string;
  /**
   * @remarks
   * Indicates whether the flight has a stopover.
   * 
   * @example
   * false
   */
  stop?: boolean;
  /**
   * @remarks
   * The ticketing airline information.
   */
  ticketingAirlineInfo?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosTicketingAirlineInfo;
  /**
   * @remarks
   * The total duration of the segment.
   * 
   * @example
   * 2小时20分
   */
  totalTime?: string;
  static names(): { [key: string]: string } {
    return {
      airlineInfo: 'airline_info',
      arrAirportInfo: 'arr_airport_info',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      arrTimeUTC: 'arr_time_u_t_c',
      depAirportInfo: 'dep_airport_info',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      depTimeUTC: 'dep_time_u_t_c',
      duration: 'duration',
      flightNo: 'flight_no',
      flightShareInfo: 'flight_share_info',
      flightSize: 'flight_size',
      flightStopInfoList: 'flight_stop_info_list',
      flightType: 'flight_type',
      journeyIndex: 'journey_index',
      luggageDirectInfo: 'luggage_direct_info',
      manufacturer: 'manufacturer',
      meal: 'meal',
      mealDesc: 'meal_desc',
      miles: 'miles',
      onTimeRate: 'on_time_rate',
      oneMore: 'one_more',
      oneMoreShow: 'one_more_show',
      otherInfo: 'other_info',
      segmentIndex: 'segment_index',
      segmentKey: 'segment_key',
      segmentVisaRemark: 'segment_visa_remark',
      share: 'share',
      shortFlightSize: 'short_flight_size',
      stop: 'stop',
      ticketingAirlineInfo: 'ticketing_airline_info',
      totalTime: 'total_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineInfo: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosAirlineInfo,
      arrAirportInfo: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosArrAirportInfo,
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      arrTimeUTC: 'string',
      depAirportInfo: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosDepAirportInfo,
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      depTimeUTC: 'string',
      duration: 'number',
      flightNo: 'string',
      flightShareInfo: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfo,
      flightSize: 'string',
      flightStopInfoList: { 'type': 'array', 'itemType': IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightStopInfoList },
      flightType: 'string',
      journeyIndex: 'number',
      luggageDirectInfo: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosLuggageDirectInfo,
      manufacturer: 'string',
      meal: 'number',
      mealDesc: 'string',
      miles: 'number',
      onTimeRate: 'string',
      oneMore: 'number',
      oneMoreShow: 'string',
      otherInfo: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosOtherInfo,
      segmentIndex: 'number',
      segmentKey: 'string',
      segmentVisaRemark: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosSegmentVisaRemark,
      share: 'boolean',
      shortFlightSize: 'string',
      stop: 'boolean',
      ticketingAirlineInfo: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosTicketingAirlineInfo,
      totalTime: 'string',
    };
  }

  validate() {
    if(this.airlineInfo && typeof (this.airlineInfo as any).validate === 'function') {
      (this.airlineInfo as any).validate();
    }
    if(this.arrAirportInfo && typeof (this.arrAirportInfo as any).validate === 'function') {
      (this.arrAirportInfo as any).validate();
    }
    if(this.depAirportInfo && typeof (this.depAirportInfo as any).validate === 'function') {
      (this.depAirportInfo as any).validate();
    }
    if(this.flightShareInfo && typeof (this.flightShareInfo as any).validate === 'function') {
      (this.flightShareInfo as any).validate();
    }
    if(Array.isArray(this.flightStopInfoList)) {
      $dara.Model.validateArray(this.flightStopInfoList);
    }
    if(this.luggageDirectInfo && typeof (this.luggageDirectInfo as any).validate === 'function') {
      (this.luggageDirectInfo as any).validate();
    }
    if(this.otherInfo && typeof (this.otherInfo as any).validate === 'function') {
      (this.otherInfo as any).validate();
    }
    if(this.segmentVisaRemark && typeof (this.segmentVisaRemark as any).validate === 'function') {
      (this.segmentVisaRemark as any).validate();
    }
    if(this.ticketingAirlineInfo && typeof (this.ticketingAirlineInfo as any).validate === 'function') {
      (this.ticketingAirlineInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfos extends $dara.Model {
  /**
   * @remarks
   * The three-letter code of the arrival city.
   * 
   * @example
   * HGH
   */
  arrCityCode?: string;
  /**
   * @remarks
   * The name of the arrival city.
   * 
   * @example
   * 杭州
   */
  arrCityName?: string;
  /**
   * @remarks
   * The arrival time. Format: yyyy-MM-dd HH:mm.
   * 
   * @example
   * 2025-12-28 15:25
   */
  arrTime?: string;
  /**
   * @remarks
   * The three-letter code of the departure city.
   * 
   * @example
   * BJS
   */
  depCityCode?: string;
  /**
   * @remarks
   * The name of the departure city.
   * 
   * @example
   * 北京
   */
  depCityName?: string;
  /**
   * @remarks
   * The departure time. Format: yyyy-MM-dd HH:mm.
   * 
   * @example
   * 2025-12-28 12:25
   */
  depTime?: string;
  /**
   * @remarks
   * The total duration in minutes.
   * 
   * @example
   * 180
   */
  duration?: number;
  /**
   * @remarks
   * The flight segment information.
   */
  flightSegmentInfos?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfos[];
  /**
   * @remarks
   * The journey index, starting from 0.
   * 
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @remarks
   * The transfer duration.
   * 
   * @example
   * 0
   */
  transferTime?: number;
  static names(): { [key: string]: string } {
    return {
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      duration: 'duration',
      flightSegmentInfos: 'flight_segment_infos',
      journeyIndex: 'journey_index',
      transferTime: 'transfer_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      duration: 'number',
      flightSegmentInfos: { 'type': 'array', 'itemType': IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfos },
      journeyIndex: 'number',
      transferTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flightSegmentInfos)) {
      $dara.Model.validateArray(this.flightSegmentInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItemsBaggageRule extends $dara.Model {
  /**
   * @remarks
   * The display color of the baggage allowance description.
   * 
   * @example
   * 行李额描述展示颜色
   */
  baggageDescShowColor?: string;
  /**
   * @remarks
   * The baggage summary.
   * 
   * @example
   * 无托运行李
   */
  baggageDigest?: string;
  /**
   * @remarks
   * The baggage rule description.
   * 
   * @example
   * 以航司规定为准
   */
  baggageRuleDesc?: string;
  /**
   * @remarks
   * The baggage information mapped by passenger type. Key: ADT/CHD/INF. Value: baggage information.
   */
  offerBaggageInfoMap?: { [key: string]: ModuleReShopItemListSubItemsBaggageRuleOfferBaggageInfoMapValue[] };
  /**
   * @remarks
   * Indicates whether the baggage data is structured.
   * 
   * @example
   * false
   */
  structuredBaggage?: boolean;
  static names(): { [key: string]: string } {
    return {
      baggageDescShowColor: 'baggage_desc_show_color',
      baggageDigest: 'baggage_digest',
      baggageRuleDesc: 'baggage_rule_desc',
      offerBaggageInfoMap: 'offer_baggage_info_map',
      structuredBaggage: 'structured_baggage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageDescShowColor: 'string',
      baggageDigest: 'string',
      baggageRuleDesc: 'string',
      offerBaggageInfoMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ModuleReShopItemListSubItemsBaggageRuleOfferBaggageInfoMapValue } },
      structuredBaggage: 'boolean',
    };
  }

  validate() {
    if(this.offerBaggageInfoMap) {
      $dara.Model.validateMap(this.offerBaggageInfoMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItemsRefundChangeRule extends $dara.Model {
  /**
   * @remarks
   * Indicates whether refund is supported.
   * 
   * @example
   * true
   */
  cancelFeeInd?: boolean;
  /**
   * @remarks
   * Indicates whether date change is supported.
   * 
   * @example
   * true
   */
  changeFeeInd?: boolean;
  /**
   * @remarks
   * 改签规则简述
   * 
   * @example
   * 改签规则简述
   */
  changeRuleDesc?: string;
  /**
   * @remarks
   * 改签规则展示颜色
   * 
   * @example
   * 改签规则展示颜色
   */
  changeRuleShowColor?: string;
  /**
   * @remarks
   * The refund and change rules mapped by passenger type. Key: ADT/CHD/INF. Value: refund/change rule.
   */
  offerPenaltyInfoMap?: { [key: string]: ModuleReShopItemListSubItemsRefundChangeRuleOfferPenaltyInfoMapValue[] };
  /**
   * @remarks
   * The refund and change summary.
   * 
   * @example
   * 退改¥395起
   */
  refundChangeDigest?: string;
  /**
   * @remarks
   * The refund and change rule description.
   * [_single.
   * 
   * @example
   * 以航司规定为准
   */
  refundChangeRuleDesc?: string;
  /**
   * @remarks
   * 退票规则简述
   * 
   * @example
   * 退票规则简述
   */
  refundRuleDesc?: string;
  /**
   * @remarks
   * 退票规则展示颜色
   * 
   * @example
   * 退票规则展示颜色
   */
  refundRuleShowColor?: string;
  /**
   * @remarks
   * Indicates whether structured refund and change rule data is available.
   * 
   * @example
   * false
   */
  structuredRefund?: boolean;
  static names(): { [key: string]: string } {
    return {
      cancelFeeInd: 'cancel_fee_ind',
      changeFeeInd: 'change_fee_ind',
      changeRuleDesc: 'change_rule_desc',
      changeRuleShowColor: 'change_rule_show_color',
      offerPenaltyInfoMap: 'offer_penalty_info_map',
      refundChangeDigest: 'refund_change_digest',
      refundChangeRuleDesc: 'refund_change_rule_desc',
      refundRuleDesc: 'refund_rule_desc',
      refundRuleShowColor: 'refund_rule_show_color',
      structuredRefund: 'structured_refund',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelFeeInd: 'boolean',
      changeFeeInd: 'boolean',
      changeRuleDesc: 'string',
      changeRuleShowColor: 'string',
      offerPenaltyInfoMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ModuleReShopItemListSubItemsRefundChangeRuleOfferPenaltyInfoMapValue } },
      refundChangeDigest: 'string',
      refundChangeRuleDesc: 'string',
      refundRuleDesc: 'string',
      refundRuleShowColor: 'string',
      structuredRefund: 'boolean',
    };
  }

  validate() {
    if(this.offerPenaltyInfoMap) {
      $dara.Model.validateMap(this.offerPenaltyInfoMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItemsSegmentPositionList extends $dara.Model {
  /**
   * @remarks
   * The journey ordinal number, starting from 0.
   * 
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @remarks
   * The segment ordinal number, starting from 0 within the same journey.
   * 
   * @example
   * 0
   */
  segmentIndex?: number;
  static names(): { [key: string]: string } {
    return {
      journeyIndex: 'journey_index',
      segmentIndex: 'segment_index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journeyIndex: 'number',
      segmentIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItems extends $dara.Model {
  /**
   * @remarks
   * The baggage allowance information of the sub-item.
   */
  baggageRule?: IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItemsBaggageRule;
  /**
   * @remarks
   * The discount value.
   * 
   * @example
   * 5.1
   */
  discountNum?: number;
  /**
   * @remarks
   * The refund and change information of the sub-item.
   */
  refundChangeRule?: IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItemsRefundChangeRule;
  /**
   * @remarks
   * The list of segment keys included in the sub-item.
   */
  segmentKeys?: string[];
  /**
   * @remarks
   * The list of segment position information included in the sub-item.
   */
  segmentPositionList?: IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItemsSegmentPositionList[];
  /**
   * @remarks
   * The pricing information mapped by passenger type. Key: ADT (adult), CHD (child), or INFANT (infant).
   */
  shoppingItemMap?: { [key: string]: ModuleReShopItemListSubItemsShoppingItemMapValue };
  /**
   * @remarks
   * The unique item ID.
   * 
   * @example
   * 07df0bd9-f803-4a50-8449-f4bd675d9939
   */
  uniqKey?: string;
  static names(): { [key: string]: string } {
    return {
      baggageRule: 'baggage_rule',
      discountNum: 'discount_num',
      refundChangeRule: 'refund_change_rule',
      segmentKeys: 'segment_keys',
      segmentPositionList: 'segment_position_list',
      shoppingItemMap: 'shopping_item_map',
      uniqKey: 'uniq_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageRule: IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItemsBaggageRule,
      discountNum: 'number',
      refundChangeRule: IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItemsRefundChangeRule,
      segmentKeys: { 'type': 'array', 'itemType': 'string' },
      segmentPositionList: { 'type': 'array', 'itemType': IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItemsSegmentPositionList },
      shoppingItemMap: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleReShopItemListSubItemsShoppingItemMapValue },
      uniqKey: 'string',
    };
  }

  validate() {
    if(this.baggageRule && typeof (this.baggageRule as any).validate === 'function') {
      (this.baggageRule as any).validate();
    }
    if(this.refundChangeRule && typeof (this.refundChangeRule as any).validate === 'function') {
      (this.refundChangeRule as any).validate();
    }
    if(Array.isArray(this.segmentKeys)) {
      $dara.Model.validateArray(this.segmentKeys);
    }
    if(Array.isArray(this.segmentPositionList)) {
      $dara.Model.validateArray(this.segmentPositionList);
    }
    if(this.shoppingItemMap) {
      $dara.Model.validateMap(this.shoppingItemMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModuleReShopItemList extends $dara.Model {
  /**
   * @remarks
   * The item ID.
   * 
   * @example
   * 2b99a126923d4d13be53cd80a32ef0e3_0
   */
  itemId?: string;
  /**
   * @remarks
   * 商品类型。
   * 
   * - normal-普通商品
   * - combination-组合特价
   * 
   * @example
   * normal
   */
  itemType?: string;
  /**
   * @remarks
   * The pricing information mapped by passenger type.
   */
  shoppingItemMap?: { [key: string]: ModuleReShopItemListShoppingItemMapValue };
  /**
   * @remarks
   * The sub-items. Combined products may have multiple sub-items.
   */
  subItems?: IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItems[];
  static names(): { [key: string]: string } {
    return {
      itemId: 'item_id',
      itemType: 'item_type',
      shoppingItemMap: 'shopping_item_map',
      subItems: 'sub_items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
      itemType: 'string',
      shoppingItemMap: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleReShopItemListShoppingItemMapValue },
      subItems: { 'type': 'array', 'itemType': IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItems },
    };
  }

  validate() {
    if(this.shoppingItemMap) {
      $dara.Model.validateMap(this.shoppingItemMap);
    }
    if(Array.isArray(this.subItems)) {
      $dara.Model.validateArray(this.subItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The flight journey information.
   */
  flightJourneyInfos?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfos[];
  /**
   * @remarks
   * 是否需要继续轮询
   * 
   * @example
   * false
   */
  needContinue?: boolean;
  /**
   * @remarks
   * 下次搜索等待时间，单位毫秒
   * 
   * @example
   * 2000
   */
  nextReqWaitTime?: number;
  /**
   * @remarks
   * The list of quoted items.
   */
  reShopItemList?: IntlFlightReShopOtaSearchResponseBodyModuleReShopItemList[];
  /**
   * @remarks
   * The query record token used for external polling.
   * 
   * @example
   * 0305b8203a7767626f911d97a91a9473
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      flightJourneyInfos: 'flight_journey_infos',
      needContinue: 'need_continue',
      nextReqWaitTime: 'next_req_wait_time',
      reShopItemList: 're_shop_item_list',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightJourneyInfos: { 'type': 'array', 'itemType': IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfos },
      needContinue: 'boolean',
      nextReqWaitTime: 'number',
      reShopItemList: { 'type': 'array', 'itemType': IntlFlightReShopOtaSearchResponseBodyModuleReShopItemList },
      token: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flightJourneyInfos)) {
      $dara.Model.validateArray(this.flightJourneyInfos);
    }
    if(Array.isArray(this.reShopItemList)) {
      $dara.Model.validateArray(this.reShopItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * The data.
   */
  module?: IntlFlightReShopOtaSearchResponseBodyModule;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The global trace ID of the request, typically used for troubleshooting.
   * 
   * @example
   * 210bc4b116835992457938931db4de
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
      module: IntlFlightReShopOtaSearchResponseBodyModule,
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

